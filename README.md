# Tron start & interactive script

## Prerequisite

- For Mac User

```sh
brew install jq
brew install gnu-sed
export PATH="/opt/homebrew/opt/gnu-sed/libexec/gnubin:$PATH"
```

- If you want to replace new release version:
  - You could replace the FullNode.jar in SR and FullNode directory.
  - You could modify IP or Port in *.conf file if you want.
- Notice
  - cos FullNode.jar is sigle file bigger more 100M, so need yourself complie.
  - And copy FullNode.jar to SR directory.

## Use Methods

- For help info: `./start.sh -h`
- Start one Super node & Sync node: `./start.sh up`
- JS SDK，please check [jsclient](./jsclient)
- More Command support, please refer to [wallet-cli](https://github.com/tronprotocol/wallet-cli)

## Reference

- [tron private doc](https://cn.developers.tron.network/docs/tron-private-chain)