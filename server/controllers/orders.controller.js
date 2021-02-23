const readOrders = async (req, res, next) => {
    const orders = await req.context.models.orders.findAll();
    return res.send(orders); 
}


export default {
    readOrders
}