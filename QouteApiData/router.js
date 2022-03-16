const express = require('express');
const router = express();
//const port = process.env.PORT || 8080;

/**Import other Files */

const mongodb = require('./src/mongodb/connectdb');
const QouteData = require('./src/model/qoutemodel');


/**Middleware setup */

router.use(express.json());
//router.use(express.urlencoded({extende//d:false}));


router.get('/', (req, res) => {
    res.send('Hello brother');
});

router.post('/qoute', async(req, res) => {
    try{
    const qoutedata = new QouteData ({
        qoute: req.body.qoute,
        author:req.body.author
            
    });

    const qoute = await qoutedata.save();
    res.status(200).send(qoute);
}
        catch{
         res.status(401).send("Page is not available");
        }
    

    //res.send('Hello Dear world')
});

router.get('/qoute/:_id', async(req, res)=> {

try {
    const _id = req.param.id;
    const getqoutedata = await QouteData.findByIdAndUpdate(_id, req.body,{new:true})

    res.status(201).send(getqoutedata);

}
catch(err){
    res.status(404).send(err)

}

})

router.put('/', (req, res)=> {
    res.send('this is put request');
});

router.patch('/', (req, res) => {
    res.send('this is patch requiest');
})
router.delete('/', (req, res)=> {
    res.send('this is delete Request');
})

/**
router.listen(port, (req, res//) =>{
 //   res.status(201).send(`Server is running on this port${port}`);
    console.log(`Server is running on this port ${port}`);
});
*/