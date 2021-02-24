const readOrdersLineItems = async (req, res, next) => {
  const ordersLineItems = await req.context.models.ordersLineItems.findAll();
  return res.send(ordersLineItems);
};

const addOrdersLineItems = async (req, res) => {
  const {
    orit_id,
    orit_qty,
    orit_subtotal,
    orit_prod_id,
    orit_order_name,
  } = req.body;
  const ordersLineItems = await req.context.models.ordersLineItems.create({
    orit_id: orit_id,
    orit_qty: orit_qty,
    orit_subtotal: orit_subtotal,
    orit_prod_id: orit_prod_id,
    orit_order_name: orit_order_name,
  });
  return res.send(ordersLineItems);
};

const deleteOrdersLineItems = async (req, res) => {
  const result = await req.context.models.ordersLineItems.destroy({
    where: { orit_id: req.body.orit_id },
  });
  return res.send("Sukses Bro");
};

const editOrdersLineItems = async (req, res) => {
  const {
    orit_id,
    orit_qty,
    orit_subtotal,
    orit_prod_id,
    orit_order_name,
  } = req.body;
  const ordersLineItems = await req.context.models.ordersLineItems.update(
    {
      orit_id: orit_id,
      orit_qty: orit_qty,
      orit_subtotal: orit_subtotal,
      orit_prod_id: orit_prod_id,
      orit_order_name: orit_order_name
    },
    { where: { orit_id: req.body.orit_id } }
  );
  return res.sendStatus(200);
};

export default {
  readOrdersLineItems,
  addOrdersLineItems,
  deleteOrdersLineItems,
  editOrdersLineItems,
};
