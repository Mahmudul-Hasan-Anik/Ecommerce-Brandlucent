const express = require('express')
const Product = require('../Modals/ProductModal')
const product = require('../Database/productData')

const seedRoutes = express.Router()


seedRoutes.get('/product', async (req, res)=> {
    await Product.deleteMany()
    const response = await Product.insertMany(product)
    res.send(response)
})


module.exports = seedRoutes