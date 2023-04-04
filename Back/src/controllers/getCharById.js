const Axios = require('axios');
const {URL} = process.env;

const succesA = (response, res) => {
    const { id, name, gender, species, image} = response.data;
    res.status(200).json({id, name, gender, species, image});
};

const errorA = (error, res) => {
    res.status(500).json({error: error.message});
};

//!express
const getChairById = (req, res,) => {
    const {id} = req.params;
    try {
        Axios.get(`${URL}/character/${id}`)
            .then((response) => succesA(response, res))
    } catch (error) {
        errorA(error, res);
    }
};


module.exports = getChairById;