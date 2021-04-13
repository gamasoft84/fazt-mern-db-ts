import {Router} from 'express';

const router = Router();

router.get('/dealers', (req, res) => {
    res.json('Getting Dealers');
})

export default router;