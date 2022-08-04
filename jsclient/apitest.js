var TronWeb = require('./dist/TronWeb.node');
var tronWeb = new TronWeb({
        fullNode: 'http://localhost:16667',
        solidityNode: 'http://localhost:16668',
        privateKey: 'da146374a75310b9666e834ee4ad0866d6f4035967bfc76217c5a495fff9f0d0'
    })

var privateKey = 'da146374a75310b9666e834ee4ad0866d6f4035967bfc76217c5a495fff9f0d0'


// Addr: TPL66VK2gCXNCD7EJg9pgJRfqcRazjhUZY
// HexAddr: 41928c9af0651632157ef27a2cf17ca72c575a4d21
console.log(tronWeb.address.toHex("TMtpn4MruoDKXLbts5VwrUyFa3CX3dSVsz"));
console.log(tronWeb.address.fromHex("4188ced060fad1699c9491800a3c45b4000700f3ed"));

async function trsfer() { console.log(await tronWeb.trx.sendTransaction("TN3zfjYUmMFK3ZsHSsrdJoNRtGkQmZLBLz", 200)) };
// trsfer()
tronWeb.trx.getAccount('TN3zfjYUmMFK3ZsHSsrdJoNRtGkQmZLBLz').then(result => console.log(result))

// Send muti-trxs (self-defined function)
async function transferRaw() {
    const tradeobj1 = await tronWeb.transactionBuilder.sendTrx("TN3zfjYUmMFK3ZsHSsrdJoNRtGkQmZLBLz", 100,"TPL66VK2gCXNCD7EJg9pgJRfqcRazjhUZY",1);
    const tradeobj2 = await tronWeb.transactionBuilder.sendTrx("TN3zfjYUmMFK3ZsHSsrdJoNRtGkQmZLBLz", 200,"TPL66VK2gCXNCD7EJg9pgJRfqcRazjhUZY",1);
    // console.log("* tradeobj:")
    // console.log(tradeobj)
    const signedtxn1 = await tronWeb.trx.sign(tradeobj1, privateKey);
    const signedtxn2 = await tronWeb.trx.sign(tradeobj2, privateKey);
    const signtxs = {
        "transactions": [ signedtxn1,  signedtxn2 ]
    }
    // const receipt = await tronWeb.trx.sendRawTransaction(signedtxn);
    const receipt = await tronWeb.trx.sendRawTransactions(signtxs);
    // console.log("* SignedTxn:")
    console.log(JSON.stringify(receipt, null, 2))
    // console.log(JSON.stringify(signtxs, null, 2))
}

// transferRaw()

// sendRawTransaction
// const tradeobj = await tronWeb.transactionBuilder.sendTrx("TNo9e8MWQpGVqdyySxLSTw3gjgFQWE3vfg", 100,"TM2TmqauSEiRf16CyFgzHV2BVxBejY9iyR",1);
// const signedtxn = await tronWeb.trx.sign(tradeobj, privateKey);
// const receipt = await tronWeb.trx.sendRawTransaction(signedtxn);
// console.log(receipt)

let abi = '[{\"constant\":false,\"inputs\":[{\"name\":\"key\",\"type\":\"uint256\"},{\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"set\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"key\",\"type\":\"uint256\"}],\"name\":\"get\",\"outputs\":[{\"name\":\"value\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"}]';
let code = '608060405234801561001057600080fd5b5060de8061001f6000396000f30060806040526004361060485763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416631ab06ee58114604d5780639507d39a146067575b600080fd5b348015605857600080fd5b506065600435602435608e565b005b348015607257600080fd5b50607c60043560a0565b60408051918252519081900360200190f35b60009182526020829052604090912055565b600090815260208190526040902054905600a165627a7a72305820fdfe832221d60dd582b4526afa20518b98c2e1cb0054653053a844cf265b25040029';
async function deploy_contract(){
    let contract_instance = await tronWeb.contract().new({
    abi:JSON.parse(abi),
    bytecode:code,
    feeLimit:1_00_000_000,
    callValue:0,
    userFeePercentage:1,
    originEnergyLimit:10_000_000  
    //parameters:[para1,2,3,...]
  });
  console.log(contract_instance.address);
  console.log(tronWeb.address.fromHex(contract_instance.address));
}

// deploy_contract();// Execute the function


async function triggercontract(){
    try {
        let instance = await tronWeb.contract().at('TKkxR2KHv2mge9Xf3xdjSJoHdMABvjqLUd');
        // let res = await instance.set("TGHozqzkDmRrC1ZRbnEzGp48hfx9vskPQm", ["TMtpn4MruoDKXLbts5VwrUyFa3CX3dSVsz", "TMtpn4MruoDKXLbts5VwrUyFa3CX3dSVsz"]).send({
        // let res = await instance.set("1", "2").send({
        //     feeLimit:100_000_000,
        //     callValue:0,
        //     shouldPollResponse:true
        // });
        // console.log(res);
        // console.log(JSON.stringify(instance))
        let result = await instance.get(1).call();
        console.log(JSON.stringify(result))

    } catch (error) {
        console.log(error);
    }
}
triggercontract();