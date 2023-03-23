const http = require('http');
const getChairById = require('./controllers/getCharById');
const getChairByDetail = require('./controllers/getCharDetail');


http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    const {url} = req;

    if(url.includes('onsearch')){
        const ID = url.split('/').at(-1);
        getChairById(res, ID);
    };

    if(url.includes('detail')){
        const ID = url.split('/').at(-1);
        getChairByDetail(res, ID);
    };

}).listen(3001, 'localhost')
