import {Router} from 'express';
import ordersLineItemsController from '../controllers/ordersLineItems.controller'

const router = Router();

router.get('/', ordersLineItemsController.readOrdersLineItems);
// router.get('/:provId',ordersController.findOrders);
router.post('/',ordersLineItemsController.addOrdersLineItems);
router.put('/',ordersLineItemsController.editOrdersLineItems);
router.delete('/',ordersLineItemsController.deleteOrdersLineItems);

export default router;

