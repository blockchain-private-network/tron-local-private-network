var TronWeb = require('./dist/TronWeb.node');
var tronWeb = new TronWeb({
        fullNode: 'http://localhost:16667',
        solidityNode: 'http://localhost:16668',
        privateKey: 'da146374a75310b9666e834ee4ad0866d6f4035967bfc76217c5a495fff9f0d0'
    })

var privateKey = 'da146374a75310b9666e834ee4ad0866d6f4035967bfc76217c5a495fff9f0d0'

// Addr: TPL66VK2gCXNCD7EJg9pgJRfqcRazjhUZY
// HexAddr: 41928c9af0651632157ef27a2cf17ca72c575a4d21
console.log(tronWeb.address.toHex("TN3zfjYUmMFK3ZsHSsrdJoNRtGkQmZLBLz"));

// tronWeb.trx.sendTransaction("TN3zfjYUmMFK3ZsHSsrdJoNRtGkQmZLBLz", 200);
tronWeb.trx.getAccount('TN3zfjYUmMFK3ZsHSsrdJoNRtGkQmZLBLz').then(result => console.log(result))

// Send muti-trxs (self-defined function)
async function transferRaw() {
    const tradeobj1 = await tronWeb.transactionBuilder.sendTrx("TN3zfjYUmMFK3ZsHSsrdJoNRtGkQmZLBLz", 200,"TPL66VK2gCXNCD7EJg9pgJRfqcRazjhUZY",1);
    const tradeobj2 = await tronWeb.transactionBuilder.sendTrx("TN3zfjYUmMFK3ZsHSsrdJoNRtGkQmZLBLz", 300,"TPL66VK2gCXNCD7EJg9pgJRfqcRazjhUZY",1);
    // console.log("* tradeobj:")
    // console.log(tradeobj)
    const signedtxn1 = await tronWeb.trx.sign(tradeobj1, privateKey);
    const signedtxn2 = await tronWeb.trx.sign(tradeobj2, privateKey);
    const signtxs = {
        "transactions": [ signedtxn1 ,  signedtxn2 ]
    }
    // const receipt = await tronWeb.trx.sendRawTransaction(signedtxn);
    const receipt = await tronWeb.trx.sendRawTransactions(signtxs);
    // console.log("* SignedTxn:")
    console.log(JSON.stringify(receipt, null, 2))
    // console.log(JSON.stringify(signtxs, null, 2))
}

transferRaw()

// sendRawTransaction
// const tradeobj = await tronWeb.transactionBuilder.sendTrx("TNo9e8MWQpGVqdyySxLSTw3gjgFQWE3vfg", 100,"TM2TmqauSEiRf16CyFgzHV2BVxBejY9iyR",1);
// const signedtxn = await tronWeb.trx.sign(tradeobj, privateKey);
// const receipt = await tronWeb.trx.sendRawTransaction(signedtxn);
// console.log(receipt)

