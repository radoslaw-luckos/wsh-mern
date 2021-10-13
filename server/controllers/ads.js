import Ad from '../models/ad.js';

// gets all the ads
export const getAds = async (req, res) => {
    try {
        const ads = await Ad.find();
        res.status(200).json(ads);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}
// gets specific ad
export const getAd = async (req, res) => {
    try {
        const adToGet = await Ad.findById(req.params.adId);
        res.status(200).json(adToGet);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }

}
// deletes specific ad
export const deleteAd = async (req, res) => {
    try {
        const adToDelete = await Ad.findByIdAndDelete(req.params.adId);
        res.status(200).json(adToDelete);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}
// updates specific ad
export const updateAd = async (req, res) => {
    try {
        const adToUpdate = await Ad.findById(req.params.adId);
        Object.assign(adToUpdate, req.body);
        adToUpdate.save();
        res.status(200).json(adToUpdate);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}
//submits a ad
export const createAd = async (req, res) => {
    try {
        const newAd = new Ad(req.body);
        await newAd.save();
        res.status(201).json(newAd);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}