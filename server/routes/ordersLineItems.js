import {Router} from 'express';
import ordersLineItemsController from '../controllers/ordersLineItems.controller'

const router = Router();

router.get('/', ordersLineItemsController.readOrdersLineItems);
// router.get('/:provId',ordersController.findOrders);
// router.post('/',ordersController.addOrders);
// router.put('/:provId',ordersController.editOrders);
// router.delete('/:provId',ordersController.deleteOrders);

export default router;

