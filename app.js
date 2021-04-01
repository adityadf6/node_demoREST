const express = require('express');
const app = express();
const productsRouter = require('./api/routes/products')
const orderRouter = require('./api/routes/orders')
const morgan = require('morgan')
const bodyParser = require('body-parser');

app.use(morgan('dev'))
app.use('/products',productsRouter);
app.use('/order',orderRouter);
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use((req,res,next) => {

    const error = new Error('Not Found');
    error.status = 404;
    next(error);

})

app.use((error,req,res,next) => {

    res.status(error.status || 500);
    res.json({

        error: {
            message: error.message
        }

     } )
  

})




module.exports = app;