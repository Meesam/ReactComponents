import express from 'express';
import config from 'config';
import jwt from 'jsonwebtoken';

let apiRoutes = express.Router();

apiRoutes.use(function(req, res, next) {

  console.log('second middlware ');
  next();

});

apiRoutes.use(function(req, res, next) {

  console.log('third middlware ');
  next();

});

module.exports=apiRoutes;