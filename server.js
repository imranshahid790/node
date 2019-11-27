const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const user = require('./routes/user-routes');
const mongoose = require('mongoose');
var path=require('path');

mongoose.connect('mongodb://localhost:27017/jwtauth');

const PORT = 4000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/static', express.static(path.join(__dirname, 'public')))
app.use('/user', user);
app.listen(PORT, function(){
   console.log('Server is running on Port',PORT);
});