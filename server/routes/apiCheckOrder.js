import {Router} from 'express';
import IndexCtrl from '../controllers/IndexController'



const router = Router();

router.get('/', IndexCtrl.ApiCheckoutOrder.getCheckOrders);

export default router;

