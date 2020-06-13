const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');

//Conectarse a la base de datos de MONGO DB
mongoose.connect('mongodb://localhost/crud-mongo')
  .then(db => console.log('Conectado'))
  .catch(err => console.log(err));

//Requerimientos de rutas
const indexRoutes= require('./routes/index');

//Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname , 'views'));
app.set('view engine', 'ejs');

//MIDDLEWARES
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

//RUTAS
app.use('/', indexRoutes);

//INICIALIZANDO EL SERVIDOR
app.listen(app.get('port'), ()=>{
   console.log(`Server Port ${app.get('port')}`); 
});