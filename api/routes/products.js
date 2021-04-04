const express = require('express')
const router = express.Router();
const Product = require('../models/product')
const mongoose = require('mongoose')
router.get('/',(req,res,next) => {

    res.status(200).json({
        message:"products is working"
    })

})
router.get('/:productId',(req,res,next) => {
 
    const id = req.params.productId;
    Product.findById(id).exec().then(doc => {
        
        console.log(doc);
        res.status(200).json(doc)
      
       
    }).
    catch(err =>{ 
          console.log(err)
          res.status(500).json({error:err})
         });



   
})
router.post('/',(req,res,next) => {
    
    const product = new Product({
        _id:new mongoose.Types.ObjectId(),
        name:req.body.name,
        price :req.body.price

   }
    )
    product.save().then(result => {
        console.log(result)
    }).catch(err => console.log(err))
    res.json({
        message:"post products is working",
        product:product
       
    })
    console.log(req.body)

})

router.post('/',(req,res,next) => {

   const product = {

    name:req.body.name,
    price : req.body.price


   }
   res.status(201).json({

    message:'Handling POST requests to /products',
    createdProduct:product

   })

})

router.post('/:productid',(req,res,next) => {
    const id = req.params.productid;
    if(id=='specialproduct')
    {res.status(200).json({
        message:"special product is working"
    })}
    else
{    res.status(200).json({
        message:"normal products is working"
    })}

})

module.exports = router