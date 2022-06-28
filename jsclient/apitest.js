var TronWeb = require('tronweb');
var tronWeb = new TronWeb({
        fullHost: 'http://localhost:16667',
        privateKey: 'da146374a75310b9666e834ee4ad0866d6f4035967bfc76217c5a495fff9f0d0'
    })

// let addr = tronWeb.createAccount()
// console.log(addr);
// const tradeobj = await tronWeb.transactionBuilder.sendTrx("TNo9e8MWQpGVqdyySxLSTw3gjgFQWE3vfg", 100,"TM2TmqauSEiRf16CyFgzHV2BVxBejY9iyR",1);  
// const signedtxn = await tronWeb.trx.sign(tradeobj, privateKey);
// console.log(signedtxn)

// Addr: TPL66VK2gCXNCD7EJg9pgJRfqcRazjhUZY
// HexAddr: 41928c9af0651632157ef27a2cf17ca72c575a4d21
console.log(tronWeb.address.toHex("TN3zfjYUmMFK3ZsHSsrdJoNRtGkQmZLBLz"));
console.log(tronWeb.toHex("http://Test.org"));