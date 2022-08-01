#!/usr/bin/env bash 
 
### ===================================================================
### tron-script : Help Info Only works on Linux (gnu-sed). 
###
### Usage:
###   start.sh <command> <args>
###
### Options:
###   <command>  	suport:
###		 - up/up2, Kill and start a local network.				No args
###		 - down, Kill the process. 				  	No args
###		 - clean, delete related file. 			  		No args
###		 - headblock, Get headblock from chain.				No args
###		 - createaddr, create addr from chain.				No args
###		 - transferbyPrv, create addr from chain.			No args
###		 - genaddr, generate addr from chain.				No args
###		 - blockbynum, Get block from chain by num.			Args: bknum
###		 - accountbyaddr, Get account from chain by addr.		Args: Addr
###		 - trxbyid, Get transaction from chain by txid.			Args: Addr
###		 - accountinfo, Get account info from chain.			Args: Addr
###		 - nodeinfo, Get node info from chain.				No args
###		 - listwits, Get witnesses info from chain.			No args
###		 - witcounts, Get witness count from chain.			No args
###		 - peercount, Get peer counts from chain.			No args
###		 - ethsync, Get syncing state from chain.			No args
###		 - contractinfo, Get contract info from chain.			No args
###   <args>  
###   -h        	Show this message.
###   API Reference: https://cn.developers.tron.network/reference/wallet-getnowblock
### ===================================================================

# dependency software install
if ! [ -x "$(command -v jq)" ]; then
	echo "install dependency utils on system"
	if [ "$(uname)" == "Darwin" ]; then

		brew install jq
		brew install gnu-sed
		export PATH="/opt/homebrew/opt/gnu-sed/libexec/gnubin:$PATH"
	elif [ "$(uname)" == "Linux" ]; then
		sudo yum -y install jq
		sudo apt -y install jq
	fi
fi


help() {
    sed -rn 's/^### ?//;T;p;' "$0"
}

if [[ $# == 0 ]] || [[ "$1" == "-h" ]]; then
	help
	exit 1
fi


# Fuction Zone
start_1_1_node() {
	printf "\n* %s\n\n Kill last runing node and start two super nodes & a sync full node..." "$(date)"
	pgrep -f FullNode.jar | xargs kill
	cd ./SR || exit
	java -Xmx6g -XX:+HeapDumpOnOutOfMemoryError -jar FullNode.jar  --witness --es -c supernode.conf &
	cd ../FullNode || exit 
	java -Xmx6g -XX:+HeapDumpOnOutOfMemoryError -jar ../SR/FullNode.jar  -c fullnode.conf &
}

# Now is testing ... (Todo be complated) 
start_2_1_node() {
	printf "\n* %s\n\n Kill last runing node and start two super nodes & a sync full node..." "$(date)"
	pgrep -f FullNode.jar | xargs kill
	cd ./SR || exit
	java -Xmx6g -XX:+HeapDumpOnOutOfMemoryError -jar FullNode.jar  --witness --es -c supernode.conf &
	cd ../SR-2 || exit 
	java -Xmx6g -XX:+HeapDumpOnOutOfMemoryError -jar ../SR/FullNode.jar --witness -c supernode-2.conf &
	cd ../FullNode || exit 
	java -Xmx6g -XX:+HeapDumpOnOutOfMemoryError -jar ../SR/FullNode.jar  -c fullnode.conf &
}


# Main point & dispatcher
while [ -n "$1" ]; do
	case "${1}" in
		up)
			start_1_1_node
			exit
		;;
		up2)
			start_2_1_node
				exit
			;;
		down)
			echo 'kill node process'
			pgrep -f FullNode.jar | xargs kill
			exit
			;;
		clean)
			echo "clean all blockchain file & data"
			rm -rf ./SR/logs; rm -rf ./SR/output-directory; 
			rm -rf ./SR-2/logs; rm -rf ./SR-2/output-directory; 
			rm -rf ./FullNode/logs; rm -rf ./FullNode/output-directory; 
			exit
		;;
		headblock)
			curl --request GET \
     				--url http://localhost:16667/wallet/getnowblock \
     				--header 'Accept: application/json' | jq
			exit
			;;
		blockbynum)
			if [ -n "$2" ]; then
				curl -X POST  http://localhost:16667/wallet/getblockbynum -d "{\"num\": $2}" | jq
			else
				echo 'must pointed the query block number.'
			fi
			exit
			;;
		createaddr)
			curl --request POST \
					--url http://localhost:16667/wallet/createaddress \
					--header 'Accept: application/json' \
					--header 'Content-Type: application/json'
			exit
			;; 
		transferbyPrv)
			if [ -n "$2" ]; then
				curl --request POST \
						--url http://localhost:16667/wallet/easytransferbyprivate \
						--header 'Accept: application/json' \
						--header 'Content-Type: application/json' \
						--data "{\"privateKey\": \"$2\", \"toAddress\": \"$3\", \"amount\": $4}" | jq
			else
				echo 'must pointed the "prvkey hexaddr amount".'
			fi
			exit
			;;	
		genaddr)
			curl --request GET \
						--url http://localhost:16667/wallet/generateaddress \
						--header 'Accept: application/json' | jq
			exit
			;;
		accountbyhex)
			if [ -n "$2" ]; then
				curl --request POST \
						--url http://localhost:16667/wallet/getaccount \
						--header 'Accept: application/json' \
						--header 'Content-Type: application/json' \
						--data "{\"address\": \"$2\"}" | jq
			else
				echo 'must pointed the query address.'
			fi
			exit
			;;
		accountbyaddr)
			if [ -n "$2" ]; then
				curl --request POST \
						--url http://localhost:16667/wallet/getaccount \
						--header 'Accept: application/json' \
						--header 'Content-Type: application/json' \
						--data "{\"address\": \"$2\", \"visible\": true}" | jq
			else
				echo 'must pointed the query address.'
			fi
			exit
			;;
		trxbyid)
			if [ -n "$2" ]; then
				curl --request POST \
						--url http://localhost:16667/wallet/gettransactionbyid \
						--header 'Accept: application/json' \
						--header 'Content-Type: application/json' \
						--data "{\"value\": \"$2\", \"visible\": true }" | jq
			else
				echo 'must pointed the query block number.'
			fi
			exit
			;;
		accountinfo)
			curl --request GET --url http://localhost:16667/v1/accounts/"$2" \
						--header 'Accept: application/json' | jq
			exit  
			;;
		nodeinfo)
			curl --request GET --url http://localhost:16667/wallet/getnodeinfo \
						--header 'Accept: application/json' | jq
			exit  
			;;
		listwits)
			curl --request GET \
					--url http://localhost:16667/wallet/listwitnesses \
					--header 'Accept: application/json' | jq
	 		exit 
			;;
		witcounts)
			curl --request GET \
					--url http://localhost:16667/wallet/listwitnesses \
					--header 'Accept: application/json' | grep -o 'address' | wc -l
	 		exit 
			;;
		# RPC interative
		peercount)
			curl -X POST 'localhost:50545/jsonrpc' --data '{"jsonrpc":"2.0","method":"net_peerCount","params":[],"id":64}' | jq
			exit  
			;;
		ethsync)
			curl -X POST 'localhost:50545/jsonrpc' --data '{"jsonrpc":"2.0","method":"eth_syncing","params":[],"id":64}' | jq
			exit  
			;;
		contractinfo)
			curl --request POST \
					--url http://localhost:16667/wallet/getcontract \
					--header 'Accept: application/json' \
					--header 'Content-Type: application/json' \
					--data "{\"value\": \"$2\", \"visible\": true }"  | jq
			exit  
			;;
		deployCon)
			curl --request POST \
					--url https://api.shasta.trongrid.io/wallet/deploycontract \
					--header 'Accept: application/json' \
					--header 'Content-Type: application/json' \
					--data '
				{
					"owner_address": "4145557499cc19ff0de13c62b7e38e6253778f1316",
					"abi": "[{\"constant\":false,\"inputs\":[{\"name\":\"key\",\"type\":\"uint256\"},{\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"set\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"key\",\"type\":\"uint256\"}],\"name\":\"get\",\"outputs\":[{\"name\":\"value\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"}]",
					"bytecode": "608060405234801561001057600080fd5b5060de8061001f6000396000f30060806040526004361060485763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416631ab06ee58114604d5780639507d39a146067575b600080fd5b348015605857600080fd5b506065600435602435608e565b005b348015607257600080fd5b50607c60043560a0565b60408051918252519081900360200190f35b60009182526020829052604090912055565b600090815260208190526040902054905600a165627a7a72305820fdfe832221d60dd582b4526afa20518b98c2e1cb0054653053a844cf265b25040029",
					"fee_limit": 1000000,
					"origin_energy_limit": 100000,
					"name": "SomeContract2",
					"call_value": 0,
					"consume_user_resource_percent": 100
				}
				'
			exit  
			;;
		*)
			echo "unkonw argument"
			exit
		;;
	esac
done
