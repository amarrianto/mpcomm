/*  gunakan salah satu untuk latihan, kita buat 3 route : 
    1. region-raw : menggunakan raw query
    2. region-seq : menggunakan method sequelize
    3. region-ctrl : bisnis logic dipisah di folder controller
*/


import orders from './orders';
import ordersLineItems from './ordersLineItems';
import ApiOrders from './apiOrders';
import ApiCheckOrder from './apiCheckOrder'



export default {
  orders,
  ordersLineItems,
  ApiOrders,
  ApiCheckOrder
};
