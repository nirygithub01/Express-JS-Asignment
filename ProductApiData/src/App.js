const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

/**Importing other files */
const router = require('./router.js');


app.listen(port, (req, res)=> {
    console.log(`server is running on this port ${port}`);
});



