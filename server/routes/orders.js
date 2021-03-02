import {Router} from 'express';
import ordersController from '../controllers/orders.controller'
import getWalletTranscation from '../controllers/newOrders'

const router = Router();

router.get('/', ordersController.readOrders);
// router.get('/:provId',ordersController.findOrders);
router.post('/',ordersController.addOrders);
router.put('/',ordersController.editOrders);
router.delete('/',ordersController.deleteOrders);
router.get('/transaction',getWalletTranscation)
export default router;

