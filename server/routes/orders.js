import {Router} from 'express';
import ordersController from '../controllers/orders.controller'
import IndxCtrl from '../controllers/IndexController'
//import {getWalletTranscation, getCarts} from '../controllers/newOrders'


const router = Router();


router.get('/', ordersController.readOrders);
router.get('/:accoId', ordersController.readOrdersById);
// router.get('/:provId',ordersController.findOrders);
router.post('/',ordersController.addOrders);
router.put('/',ordersController.editOrders);
router.delete('/',ordersController.deleteOrders);
//router.get('/transaction',getWalletTranscation);
//router.get('/newOrder',getCarts);
router.post('/newOrder/:accoId',IndxCtrl.ApiOrders.createOrder);
export default router;

