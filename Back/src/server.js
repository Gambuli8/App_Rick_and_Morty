require('dotenv').config();

//! SERVIDOR CON EXPRESS
const express = require('express');
const server = express();
const PORT = 3001;
const router = require('./routes/index');
// const getChairById = require('./controllers/getCharById');
// const getChairByDetail = require('./controllers/getCharDetail');

        server.use(express.json())
        server.use('/', router);

server.listen(PORT, () => {
        console.log('Server raised in port ' + PORT);
     });






    
    //! SERVIDOR SIN EXPRESS
    // const http = require('http');
    // const getChairById = require('./controllers/getCharById');
    // const getChairByDetail = require('./controllers/getCharDetail');
    
    
    // http.createServer((req, res) => {
    //     res.setHeader('Access-Control-Allow-Origin', '*');
    
    //     const {url} = req;
        
    //     if(url.includes('onsearch')){
    //         const ID = url.split('/').at(-1);
    //         getChairById(res, ID);
    //     };
    
    //     if(url.includes('detail')){
    //         const ID = url.split('/').at(-1);
    //         getChairByDetail(res, ID);
    //     };
        
    // }).listen(3001, 'localhost')
    




