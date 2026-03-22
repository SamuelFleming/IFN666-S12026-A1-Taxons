const express = require("express");
const TaxonRouter = require("./taxon");
const router = express.Router()

getAPI = async (req, res) =>{
    res.status(501).json({msg: 'Not Implemented. Hold on Tiger!'});
}

router.get(`/`, getAPI);

router.use('/taxons', TaxonRouter);

module.exports = router;