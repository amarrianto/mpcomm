import {Router} from 'express';
import IndexCtrl from '../controllers/IndexController'



const router = Router();

router.get('/:id', IndexCtrl.ApiOrders.getAddSeller);
router.post('/:id', IndexCtrl.ApiOrders.createOrder);

export default router;

