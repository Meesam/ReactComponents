/**
 * Created by administrator on 5/7/17.
 */
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import cookieparser from 'cookie-parser';
import config from 'config';
import userapi from './api/userapi';
import clientapi from './api/clientapi';

let app=express();

let publicApi=[userapi];


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

app.use('/api',publicApi);

app.route('/*').get(function(req, res) {
  return res.sendFile(path.join(__dirname+'/public/index.html'));

});
app.listen(3030, function () {
  console.log('Server runing at ' + 3030);
});