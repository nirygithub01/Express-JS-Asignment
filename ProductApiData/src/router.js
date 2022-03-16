//import express, { json, urlencoded } from 'express';
const Express = require('express');
const router = Express();
//const port = process.env.PORT || 8000;

/**SetUp Other connection  */
const mongodb = require('./mongodb/connectdb');
const ProductData= require ('./model/productmodel');
const QouteData = require('../../QouteApiData/src/model/qoutemodel');
//import { Console } from 'console';

/**MiddleWare setUp */

router.use(Express.json());
//router.use(Express.urlencoded({extended:false}));


/**Get Request SetUp */

router.get('/', (req, res) => {
    res.send('Get Request setUp created')
});

/**Post Request Setup  */

router.post('/', async(req, res) => {
     
    try
    {
        const productdata = new ProductData({
            product:req.body.product,
            price:req.body.price
        })

        const Product = await productdata.save();
        res.status(201).send(Product);
    }
    catch{
        res.status(401).send('check your page ')
    }
 
    //res.send('Get Request setUp created')
})

router.get('/', async(req, res) => {

    try{
       const _id = req.params.id;
       const productdata = await QouteData.findByIdAndUpdate(_id, req.body,{new:true})
 
      res.status(201).send(productdata);


    }catch(err) {
        res.status(404).send(err)
    }
});

/**Put and Patch request setup */
router.put('/', (req, res) => {
    res.send('Put Request setUp created')
})

router.patch('/', (req, res) => {
    res.send('Get Request setUp created')
})

/**Delete request setUp */
router.delete('/', (req, res) => {
    res.send('Get Request setUp created')
})
/**
 router.listen(port, (req, res) => {
     console.log(`Server is running on this port ${port}`);
 })
 */