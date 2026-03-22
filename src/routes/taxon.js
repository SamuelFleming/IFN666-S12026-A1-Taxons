const express = require("express");
const router = express.Router();

const controller = require("../controllers/taxon");
const mediaTypeValidator = require("../middleware/mediaTypeValidator");

router.route("/")
    .get(controller.getAll)
    .post(mediaTypeValidator, controller.create);

router.route("/:id")
    .get(controller.get)
    .put(mediaTypeValidator, controller.update)
    .delete(controller.delete);

module.exports = router;