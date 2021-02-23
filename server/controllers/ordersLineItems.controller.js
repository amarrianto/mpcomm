const readOrdersLineItems = async (req, res, next) => {
    const ordersLineItems = await req.context.models.ordersLineItems.findAll();
    return res.send(ordersLineItems); 
}


export default {
    readOrdersLineItems
}