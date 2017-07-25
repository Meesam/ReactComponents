/**
 * Created by meesam on 24/7/17.
 */
import express  from 'express'
import contoller from '../controller/userController';
import Logger from '../core/Logger';

let app=express();
let apiRoutes=express.Router();

apiRoutes.get('/client',function (req,res,next) {
  let data=contoller.getEmployee()
    .then((data)=>{
      Logger.debug(data);
      res.json(data);
    })
    .catch((error)=>{
      next(error)
    })

});

apiRoutes.get('/client1',function (req,res,next) {
  let data = contoller.getEmployee()
    .then((data)=> {
      res.json(data);
    })
    .catch((error)=> {
      next(error)
    })
});


module.exports=apiRoutes;