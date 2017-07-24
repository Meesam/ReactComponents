import express  from 'express'
import contoller from '../controller/userController';

let app=express();
let apiRoutes=express.Router();

apiRoutes.get('/emp',function (req,res,next) {
  let data=contoller.getEmployee()
    .then((data)=>{
      res.json(data);
    })
    .catch((error)=>{
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