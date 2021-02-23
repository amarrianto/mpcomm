/*  gunakan salah satu untuk latihan, kita buat 3 route : 
    1. region-raw : menggunakan raw query
    2. region-seq : menggunakan method sequelize
    3. region-ctrl : bisnis logic dipisah di folder controller
*/


// import regions from './RegionRoute';
import orders from './orders';
import ordersLineItems from './ordersLineItems';



export default {
  // regions,
  orders,
  ordersLineItems
};
