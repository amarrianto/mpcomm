import {Router} from 'express';
import ordersController from '../controllers/orders.controller'

const router = Router();

router.get('/', ordersController.readOrders);
// router.get('/:provId',ordersController.findOrders);
router.post('/',ordersController.addOrders);
router.put('/',ordersController.editOrders);
router.delete('/',ordersController.deleteOrders);

export default router;

