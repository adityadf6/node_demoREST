const express = require('express')
const router = express.Router();

router.get('/',(req,res,next) => {

    res.status(200).json({
        message:"products is working"
    })

})
router.post('/',(req,res,next) => {

    res.status(200).json({
        message:"post products is working"
    })

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