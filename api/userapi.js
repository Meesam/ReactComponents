import express  from 'express'
import contoller from '../controller/userController';
import Logger from '../core/Logger';

let app=express();
let apiRoutes=express.Router();

apiRoutes.get('/emp',function (req,res,next) {
  let data=contoller.getEmployee()
    .then((data)=>{
      Logger.info(data);
      res.json(data);
    })
    .catch((error)=>{
      Logger.error(data);
      next(error)
    })

});

apiRoutes.get('/user',function (req,res,next) {
  let data = contoller.getEmployee()
    .then((data)=> {
      res.json(data);
    })
    .catch((error)=> {
      next(error)
    })
});


module.exports=apiRoutes;