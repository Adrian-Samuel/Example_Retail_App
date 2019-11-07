const path = require('path');

const envPath= path.resolve('./.env');
require('dotenv').config({path:envPath})
const axios = require('axios');

const request = axios.create({
    baseURL: `https://api.lightspeedapp.com/API/Account`,
    timeout: 20000,
    headers:{
        "Accept":"application/json",
        "Content-Type":"application/json",
        "Authorization":process.env.TOKEN   
    }
});

module.exports = {request}