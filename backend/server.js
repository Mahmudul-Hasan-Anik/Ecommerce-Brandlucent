const express = require('express')
const mongoose = require('mongoose');
require('dotenv').config()
const app = express()
var cors = require('cors')
app.use(cors())

const ProductRoutes = require('./routes/productRouter');
const seedRoutes = require('./routes/seedRouter');

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/api/keys/paypal',(req,res)=>{
  res.send(process.env.PAYPAL_CLIENT)
})

app.use('/product', ProductRoutes)
app.use('/api/seed', seedRoutes)

 mongoose.connect(process.env.MONGO_URL,()=>{
    console.log('Database connected')
});


app.get('/', function (req, res) {
  res.send('This is Your Server')
})


app.listen(8000,()=>{
    console.log('Server Running Port 8000')
})


