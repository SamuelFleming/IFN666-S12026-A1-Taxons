const asyncHandler = require("express-async-handler");

let taxons = []

exports.getAll = asyncHandler(async (req, res, next) =>{
    res.json(taxons); 
});

exports.get = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    console.log(`Controller reached with ID: ${id}`);
    if (!id) {
        return res.status(400).json({ message: "taxonomy_id is required" });
    }

    const taxon = taxons.find((t) => t.taxonomy_id === id);

    if (!taxon) {
        return res.status(204).send();
    }

    return res.status(200).json(taxon);
});

exports.create = asyncHandler(async (req, res, next) => {
    const { scientific_name, common_name, taxonomy_id } = req.body;

    if (!taxonomy_id) {
        return res.status(400).json({ message: "taxonomy_id is required" });
    }

    if (!scientific_name || !common_name) {
        return res.status(400).json({ message: "Required fields are missing" });
    }

    const existingTaxon = taxons.find((t) => t.taxonomy_id === taxonomy_id);

    if (existingTaxon) {
        return res.status(409).json({ message: "Taxon already exists" });
    }

    const newTaxon = {
        scientific_name,
        common_name,
        taxonomy_id
    };

    taxons.push(newTaxon);

    return res.status(201).json(newTaxon);
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
