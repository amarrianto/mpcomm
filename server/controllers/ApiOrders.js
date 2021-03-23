import { sequelize } from "../models/IndexModel";

const getAddSeller = async (req, res) => {
  const result = await sequelize.query(
    `select acco_id, city_name from account join address
    on addr_accu_id = acco_id join kodepos
    on addr_kodepos = kodepos join kecamatan
    on kec_id = kodepos_kec_id join city
    on city_id = kec_city_id 
    where acco_id in (select acco_id from product join account 
    on prod_acco_id = acco_id 
    where prod_id in (select clit_prod_id from cart a join cart_line_items b 
    on cart_id = clit_cart_id 
    where cart_acco_id = :acco_id_buyer
    and clit_stat_name = 'CHECKOUT'))
    and addr_is_primary = true`,
    {
      replacements: { acco_id_buyer: parseInt(req.params.id) },
      type: sequelize.QueryTypes.SELECT,
    }
  );

  return res.send(result);
};

const createOrder = async (req, res) => {
  const order_line_items = [];
  const {
    order_subtotal,
    order_weight,
    order_discount,
    order_tax,
    order_total_due,
    order_total_qty,
    order_watr_numbers,
    order_acco_id,
    order_acco_id_seller,
  } = req.body.data;
  //1. query cart_line_items
  try {
    req.body.data.order_line_items.map((x) =>
      order_line_items.push(JSON.parse(x))
    );
  } catch (error) {
    console.log(error);
  }
  const seqNumber = await sequelize.query(`select nextval('order_name_seq')`, {
    type: sequelize.QueryTypes.SELECT,
  });

  const orderSeqNumber = await getOrderName(seqNumber[0].nextval);

  const orders = await req.context.models.orders
    .create({
      order_name: orderSeqNumber,
      order_created_on: Date.now(),
      order_subtotal: order_subtotal,
      order_discount: order_discount,
      order_tax: order_tax,
      order_total_due: order_total_due,
      order_total_qty: order_total_qty,
      order_watr_numbers: order_watr_numbers,
      order_acco_id: order_acco_id,
      order_stat_name: "PAID",
      order_weight: order_weight,
      order_acco_id_seller: order_acco_id_seller,
    })
    .catch((error) => {
      return res.send(
        JSON.stringify({
          name: error.name,
          massage: error.message,
        })
      );
    });

  try {
    console.log(order_acco_id);
    const ordersLineItems = await createOrderLineItem(
      req,
      res,
      orderSeqNumber,
      order_acco_id,
      order_line_items
    );
    console.log(ordersLineItems);
  } catch (error) {
    console.log(error);
  }
  return res.send(orders);
};

const createOrderLineItem = async (
  req,
  res,
  order_name,
  accoId,
  order_line_items
) => {
  console.log(order_line_items);

  // let data = {
  //   orit_qty: orit_qty,
  //   orit_subtotal: orit_subtotal,
  //   orit_prod_id: orit_prod_id,
  //   orit_order_name: order_name,
  // };
  // const { ordersLineItems } = req.context.models;
  // await ordersLineItems.create(data);

  // const result = await sequelize.query(
  //   `select clit_qty, clit_subtotal, clit_prod_id from cart a join cart_line_items b
  //   on cart_id = clit_cart_id
  //   where cart_acco_id = :acco_id_buyer
  //   and clit_stat_name = 'CHECKOUT'`,
  //   {
  //     replacements: { acco_id_buyer: parseInt(accoId) },
  //     type: sequelize.QueryTypes.SELECT,
  //   }
  // );

  order_line_items.map((row) => {
    req.context.models.ordersLineItems.create({
      orit_qty: row.clit_qty,
      orit_subtotal: row.clit_subtotal,
      orit_prod_id: row.clit_prod_id,
      orit_order_name: order_name,
    });
  });

  return "ok";
};

const getOrderName = (orderSeq) => {
  const date = new Date();
  const year = date.getFullYear();
  const month = "" + date.getMonth();
  const day = date.getDay();
  const seqNumber = "" + orderSeq;

  const orderNumber =
    year + "" + month + "" + day + "#" + seqNumber.padStart(6, "0");

  return orderNumber;
};

export default {
  getAddSeller,
  createOrder,
};
