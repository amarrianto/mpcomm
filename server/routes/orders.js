import {Router} from 'express';
import ordersController from '../controllers/orders.controller'

const router = Router();

router.get('/', ordersController.readOrders);
// router.get('/:provId',ordersController.findOrders);
// router.post('/',ordersController.addOrders);
// router.put('/:provId',ordersController.editOrders);
// router.delete('/:provId',ordersController.deleteOrders);

export default router;

