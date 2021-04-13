import {Router} from 'express';
const router = Router();

import * as dealerCtrl from './dealer.controller';

router.post('/dealers', dealerCtrl.createDealer);

router.get('/dealers', dealerCtrl.getDealers);

router.get('/dealers/:id', dealerCtrl.getDealer);

router.put('/dealers/:id', dealerCtrl.updateDealer);

router.delete('/dealers/:id', dealerCtrl.deleteDealer);

export default router;