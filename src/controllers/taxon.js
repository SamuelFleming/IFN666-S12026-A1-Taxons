const asyncHandler = require("express-async-handler");

let taxons = [];

exports.getAll = asyncHandler(async (req, res, next) =>{
    res.status(501).json({msg: 'getAll (Taxon Controller) not implmemented'});
});

exports.get = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    console.log(`Controller reached with ID: ${id}`);
    res.status(501).json({msg: 'getOne (Taxon Controller) not implmemented'});
});

exports.create = asyncHandler(async (req, res, next) => {
    const { scientific_name, common_name, taxonomy_id } = req.body;
    res.status(501).json({msg: 'create (Taxon Controller) not implemented'});
});

exports.update = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const { scientific_name, common_name } = req.body;
    console.log(`Controller reached with ID: ${id}, and content ${scientific_name} and ${common_name}`);
    res.status(501).json({msg: 'update (Taxon Controller) not implmented'});
});

exports.delete = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    console.log(`Controller reached with ID: ${id}`);
    res.status(501).json({msg: 'delete (Taxon Controller) not implemented'});
});

// // Here are the list of endpoints
// GET /api/taxons to retrieve all taxons.
// GET /api/taxons/:id to retrieve a particular taxon.
// POST /api/taxons to create a new taxon.
// PUT /api/taxons/:id to update an existing taxon.
// DELETE /api/taxons/:id to remove an existing taxon.
