/**
 * Created by administrator on 5/7/17.
 */
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import cookieparser from 'cookie-parser';
import config from 'config';
import contoller from './controller/userController';

let app=express();

app.use(express.static(path.join(__dirname+'/public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieparser());

/*
app.get('/api/data',function (req,res) {
  let data=getUsers();
  res.json(data);
})

app.get('/api/emp',function (req,res) {
  let data=getEmployee();
  res.json(data);
})
*/


/*app.get('/api/emp',function (req,res) {
  let data=contoller.emp()
  res.json(data);
})*/

app.get('/api/emp',function (req,res,next) {
 let data=contoller.getEmployee()
   .then((data)=>{
     res.json(data);
   })
   .catch((error)=>{
     next(error)
   })

 })


app.route('/*').get(function(req, res) {
  return res.sendFile(path.join(__dirname+'/public/index.html'));

});
app.listen(3030, function () {
  console.log('Server runing at ' + 3030);
});