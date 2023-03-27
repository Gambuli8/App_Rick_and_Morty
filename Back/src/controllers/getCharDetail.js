const Axios = require('axios');
const {URL} = process.env;

const succesA = (response, res) => {
    const {id, image, name, gender, status, origin, species} = response.data;
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({id, name, gender, status, species, origin, image,}));
};

const errorA = (error, res) => {
    res.writeHead(500, {'Content-Type': 'text/plain'});
    res.end(error.message);
};


const getChairByDetail = (res, ID) => {
    Axios.get(`${URL}/character/${ID}`)
    .then((response) => succesA(response, res))
    .catch((error) => errorA(error, res))
};


module.exports = getChairByDetail;