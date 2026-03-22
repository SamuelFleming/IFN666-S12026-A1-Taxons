const asyncHandler = require("express-async-handler");

exports.getAll = asyncHandler(async (req, res, next) =>{
    res.status(501).json({msg: 'getAll (Taxon Controller) not implmemented'});
});

exports.get = asyncHandler(async (req, res, next) => {
    let id = req.params.id;
    console.log(`Controller reached with ID: ${id}`);
    res.status(501).json({msg: 'getOne (Taxon Controller) not implmemented'});
});

exports.create = asyncHandler(async (req, res, next) => {
    res.status(501).json({msg: 'create (Taxon Controller) not implemented'});
});

exports.update = asyncHandler(async (req, res, next) => {
    let id = req.params.id;
    console.log(`Controller reached with ID: ${id}`);
    res.status(501).json({msg: 'update (Taxon Controller) not implmented'});
});

exports.delete = asyncHandler(async (req, res, next) => {
    let id = req.params.id;
    console.log(`Controller reached with ID: ${id}`);
    res.status(501).json({msg: 'delete (Taxon Controller) not implemented'});
});

// // Here are the list of endpoints
// GET /api/taxons to retrieve all taxons.
// GET /api/taxons/:id to retrieve a particular taxon.
// POST /api/taxons to create a new taxon.
// PUT /api/taxons/:id to update an existing taxon.
// DELETE /api/taxons/:id to remove an existing taxon.
