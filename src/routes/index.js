const express = require("express");
const TaxonRouter = require("./taxon");
const router = express.Router()

router.use('/taxons', TaxonRouter);

module.exports = router;