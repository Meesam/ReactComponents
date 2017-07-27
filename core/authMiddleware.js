import express from 'express';
import config from 'config';
import jwt from 'jsonwebtoken';

let apiRoutes = express.Router();

apiRoutes.use(function(req, res, next) {
  let token = req.body.token || req.query.token || req.headers['authorization'];
  console.log('token ' , token);
  if (token) {
    next();
  } else {
    return res.status(403).send({
      success: false,
      message: 'No token provided.'
    });

  }
});

module.exports=apiRoutes;