const express = require('express');
const path = require('path');
const views = require('./routes/routes');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, "public")));


app.use(views)


module.exports = app;