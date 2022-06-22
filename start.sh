#!/usr/bin/env bash 
 
### ===================================================================
### tron-script
###
### Usage:
###   start.sh <command> <args>
###
### Options:
###   <command>  	suport:
###		 - up, Kill and start a local network.				No args
###		 - down, Kill the process. 							No args
###		 - clean, delete related file. 						No args
###		 - headblock, Get headblock from chain.				No args
###		 - createaddr, create addr from chain.				No args
###		 - blockbynum, Get block from chain by num.			Args: bknum
###		 - accountbyhex, Get account from chain by addr.	Args: Addr
###		 - accountinfo, Get account info from chain.		Args: Addr
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
	echo "Help Info Only works on Linux (gnu-sed). "
    sed -rn 's/^### ?//;T;p;' "$0"
}

if [[ $# == 0 ]] || [[ "$1" == "-h" ]]; then
	help
	exit 1
fi


# Fuction Zone
start_1_1_node() {
	printf "\n* %s\n\n Kill last runing node and start a super node & a sync full node..." "$(date)"
	pgrep -f FullNode.jar | xargs kill
	cd ./SR || exit
	java -Xmx6g -XX:+HeapDumpOnOutOfMemoryError -jar FullNode.jar  --witness  -c supernode.conf &
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
		down)
			echo 'kill node process'
			pgrep -f FullNode.jar | xargs kill
			exit
			;;
		clean)
			echo "clean some file"
			rm -rf ./SR/logs; rm -rf ./SR/output-directory; 
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
		*)
			echo "unkonw argument"
			exit
		;;
	esac
done
