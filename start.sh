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
###		 - genaddr, generate addr from chain.				No args
###		 - blockbynum, Get block from chain by num.			Args: bknum
###		 - accountbyhex, Get account from chain by addr.		Args: Addr
###		 - accountinfo, Get account info from chain.			Args: Addr
###		 - listwits, Get witnesses info from chain.			No args
###		 - witcounts, Get witness count from chain.			No args
###		 - peercount, Get peer counts from chain.			No args
###		 - ethsync, Get syncing state from chain.			No args
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
				echo 'must pointed the query block number.'
			fi
			exit
			;;
		accountinfo)
			curl --request GET --url http://localhost:16667/v1/accounts/"$2" \
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
		*)
			echo "unkonw argument"
			exit
		;;
	esac
done
