import express from 'express';
import { getAds, getAd, createAd, updateAd, deleteAd } from '../controllers/ads.js';

const router = express.Router();

router.get('/', getAds);
router.get('/:adId', getAd);
router.delete('/delete/:adId', deleteAd)
router.patch('/update/:adId', updateAd)
router.post('/', createAd);

export default router;