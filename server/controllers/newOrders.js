const axios = require('axios');

axios.post('http://192.168.100.20:3000/api/walletTransaction', {
    acco_id : 1001,
    total_amount : 1000000,
    order_name : "20210222#000004",
});

const getWalletTranscation = async(req,res)=>{
    const transaction = await axios.post('http://192.168.100.20:3000/api/walletTransaction', {
        acco_id : 1001,
        total_amount : 1000000,
        order_name : "20210222#000004",
    });
    console.log(transaction)
    return transaction;
}

export default getWalletTranscation;

