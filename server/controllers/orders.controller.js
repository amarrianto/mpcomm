// const findOrders = async (req, res) => {
//     const orders = await req.context.models.orders.findByPk(req.params.order_name);
//     return res.send(orders);
// };

const readOrders = async (req, res, next) => {
  const orders = await req.context.models.orders.findAll({
      include : [
          {model : req.context.models.account},
          {model : req.context.models.status},
          {model : req.context.models.ordersLineItems}
      ]
  });
  return res.send(orders);
};

const addOrders = async (req, res) => {
  const {
    order_name,
    order_created_on,
    order_subtotal,
    order_shipping,
    order_discount,
    order_tax,
    order_total_due,
    order_total_qty,
    order_watr_numbers,
    order_is_receive,
    order_acco_id,
    order_stat_name,
    order_weight,
  } = req.body;
  const orders = await req.context.models.orders.create({
    order_name: order_name,
    order_created_on: Date.now(),
    order_subtotal: order_subtotal,
    order_shipping: order_shipping,
    order_discount: order_discount,
    order_tax: order_tax,
    order_total_due: order_total_due,
    order_total_qty: order_total_qty,
    order_watr_numbers: order_watr_numbers,
    order_is_receive: order_is_receive,
    order_acco_id: order_acco_id,
    order_stat_name: order_stat_name,
    order_weight: order_weight,
  });
  return res.send(orders); 
};

const deleteOrders = async(req,res)=>{
    const result = await req.context.models.orders.destroy({
        where : {order_name : req.body.order_name}
    })
    return res.send("Sukses Bro");
}

const editOrders = async(req,res)=>{
    const {
        order_name,
        order_created_on,
        order_subtotal,
        order_shipping,
        order_discount,
        order_tax,
        order_total_due,
        order_total_qty,
        order_watr_numbers,
        order_is_receive,
        order_acco_id,
        order_stat_name,
        order_weight,
    } = req.body;
    const orders = await req.context.models.orders.update({
        order_name: order_name,
        order_created_on: Date.now(),
        order_subtotal: order_subtotal,
        order_shipping: order_shipping,
        order_discount: order_discount,
        order_tax: order_tax,
        order_total_due: order_total_due,
        order_total_qty: order_total_qty,
        order_watr_numbers: order_watr_numbers,
        order_is_receive: order_is_receive,
        order_acco_id: order_acco_id,
        order_stat_name: order_stat_name,
        order_weight: order_weight,
    },{
        where: {order_name : req.body.order_name}}
    )
    return res.sendStatus(200);
}

export default {
  readOrders,
  addOrders,
  deleteOrders,
  editOrders
};
