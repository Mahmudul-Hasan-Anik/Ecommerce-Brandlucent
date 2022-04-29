const express = require('express')
const Product = require('../Modals/ProductModal')

const ProductRoutes = express.Router()

ProductRoutes.get('/',(req,res)=>{
    Product.find({}, (er,docs)=>{
        res.send(docs)
    })   
})
ProductRoutes.get('/:id',(req,res)=>{
    Product.find({id: req.params._id}, (er,docs)=>{
        res.send(docs)
    })   
})

module.exports = ProductRoutes


