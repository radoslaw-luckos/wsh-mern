import express from 'express';
import { getAds, getAd, createAd, updateAd, deleteAd } from '../controllers/ads.js';
import { auth } from '../utils/verifyToken.js';

const router = express.Router();

router.get('/', getAds);
router.get('/:adId', getAd);
router.delete('/delete/:adId', auth, deleteAd)
router.patch('/update/:adId', auth, updateAd)
router.post('/', auth, createAd);

export default router;