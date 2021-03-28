import { sequelize } from "../models/IndexModel";

const getCheckOrders = async (req, res) => {
  const result = await sequelize.query(
    `select order_name,acco_id,acco_nama,order_acco_id_seller,order_created_on,order_stat_name from account join orders 
    on acco_id = order_acco_id join cart
    on acco_id = cart_acco_id join cart_line_items
    on cart_id = clit_cart_id`,
    {
      replacements: { acco_id_buyer: parseInt(req.params.id) },
      type: sequelize.QueryTypes.SELECT,
    }
  );

  return res.send(result);
};

export default{
    getCheckOrders
}