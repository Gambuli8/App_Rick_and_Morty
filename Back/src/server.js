//! SERVIDOR CON EXPRESS
require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT || 3001;
const router = require('./routes/index');
const morgan = require('morgan');
const cors = require('cors');

        const server = express();

        server.use(express.json());
        server.use(morgan('dev'));
        server.use(cors());

        server.use('/', router);

server.listen(PORT, () => {
        console.log('Server raised in port ' + PORT);
     });
