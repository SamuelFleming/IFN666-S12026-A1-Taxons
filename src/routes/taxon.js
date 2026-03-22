const express = require("express");
const router = express.Router();

const controller = require("../controllers/taxon");

// // Here are the list of endpoints
// GET /api/taxons to retrieve all taxons.
// GET /api/taxons/:id to retrieve a particular taxon.
// POST /api/taxons to create a new taxon.
// PUT /api/taxons/:id to update an existing taxon.
// DELETE /api/taxons/:id to remove an existing taxon.

router.route("/")
    .get(controller.getAll)
    .post(controller.create);

router.route("/:id")
    //.all(validateMongoId('id'))
    .get(controller.getOne)
    .put(controller.update)
    .delete(controller.delete);

module.exports = router;