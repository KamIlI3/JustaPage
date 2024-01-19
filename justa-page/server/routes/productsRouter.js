const express = require('express');
const ProductsModel = require('../../db/models/productsModel');
const router = express.Router();

router.get('/', async (req, res) => {
    try{
        const products = await ProductsModel.find();
        res.json(products);
    }catch (error){
        console.error('Error fetching products:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;