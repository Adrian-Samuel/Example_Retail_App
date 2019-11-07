const express = require('express');

const Router = express.Router();
const {getSales, getParams} = require('../src/getData')


Router.get('/', async (req, res)=> {
    const {requestType, accountID, systemUserID, employeeID, saleID, customerID, shopID, returnURL, registerID } = await getParams(req);

  

    const {saleTotal, taxTotal} = await getSales(req);
    res.render('index', {
        saleTotal: saleTotal,
        employeeID: employeeID,
        requestType: requestType,
        accountID: accountID,
        systemUserID: systemUserID,
        employeeID: employeeID,
        saleID: saleID,
        customerID: customerID,
        shopID: shopID,
        taxTotal: taxTotal,
        registerID: registerID,
        returnURL: returnURL
    })
})




module.exports = Router;