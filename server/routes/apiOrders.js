import {Router} from 'express';
import IndexCtrl from '../controllers/IndexController'



const router = Router();

router.get('/:id', IndexCtrl.ApiOrders.getAddSeller);
router.get('/:id/:status', IndexCtrl.ApiOrders.filterOrderByStat)
router.post('/:id', IndexCtrl.ApiOrders.createOrder);


export default router;

