const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductModal = new Schema({
    name:{
        type: String,
        required:true,
        unique: true
    },
    price:{
        type: Number,
        required:true
    },
    image:{
        type: String,
        required:true
    },
    slug:{
        type: String,
        required: true,
        unique: true
    },
    catagory:{
        type:String,
        required: true,
    },
    desciption:{
        type: String,
        required:true
    },
    rating:{
        type: Number,
        required:true
    },
    review:{
        type:Number,
        required:true
    },
    stock:{
        type: Number,
        required:true
    },
    Brand:{
        type: String,
        required:true
    },
    totalSale:{
        type: Number,
        required:true
    },
    weight:{
        type: String,
    }
},
{
    timestamps: true
}
)

const Product = mongoose.model('product',ProductModal)

module.exports = Product