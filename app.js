const express = require('express');
const app = express();
const productsRouter = require('./api/routes/products')
const orderRouter = require('./api/routes/orders')
const morgan = require('morgan')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


// mongoose.connect('mongodb+srv://adityauser:' + 
//                   process.env.MONGO_ATLAS_PW + 
//                   '@cluster0.lyem7.mongodb.net/Cluster0?retryWrites=true&w=majority'
                            
//                 )
mongoose.connect('mongodb://adityauser:incorrect12345@cluster0-shard-00-00.lyem7.mongodb.net:27017,cluster0-shard-00-01.lyem7.mongodb.net:27017,cluster0-shard-00-02.lyem7.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-11qpa7-shard-0&authSource=admin&retryWrites=true&w=majority'
                            
                )
            


app.use(express.urlencoded({
    extended: false
  }));
app.use(express.json());
  
  
app.use(morgan('dev'))
app.use('/products',productsRouter);
app.use('/order',orderRouter);

app.use((req,res,next) => {


    res.header('Access-Control-Allow-Origin','*');
    res.header("Acess-Control-Allow-Headers",
               "Origin, X-Requested-With, Content-Type, Accept, Authorization"
              )

    if(req.method ==='OPTIONS')
    {
        res.header('Acess-Control-Allow-Methods', 'PUT,POST,PATCH,DELETE')
        return res.status(200).json({});
    }
   next();

})

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