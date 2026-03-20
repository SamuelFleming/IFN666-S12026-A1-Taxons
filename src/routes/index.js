const express = require("express");
const router = express.Router()

getAPI = async (req, res) =>{
    res.status(501).json({msg: 'Not Implemented. Hold on Tiger!'});
}

router.get(`/`, getAPI);

module.exports = router;