const express = require('express')
const router = express.Router();

router.get('/',(req,res,next) => {

    res.status(200).json({
        message:"orders is working"
    })

})
router.post('/',(req,res,next) => {

   
    
    res.status(200).json({
        message:"post order is working",
        
    })

})
router.get('/:orderid',(req,res,next) => {
    const id = req.params.orderid;
    if(id=='specialorder')
    {res.status(200).json({
        message:"special order is working"
    })}
    else
{    res.status(200).json({
        message:"normal order is working"
    })}

})

module.exports = router