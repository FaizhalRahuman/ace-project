// HTTP Status Codes
// HTTP status codes are standard codes returned by servers to indicate the result of a client's request. They are grouped into five classes:

// 1xx: Informational responses
// 2xx: Success (e.g., 200 OK)
// 3xx: Redirection (e.g., 301 Moved Permanently)
// 4xx: Client errors (e.g., 404 Not Found)
// 5xx: Server errors (e.g., 500 Internal Server Error)

var express = require('express');
var router = express.Router();
var User=require('../model/user');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/index', function(req, res){
  res.render('index');
});

router.get('/addemp',function(req,res){
  res.render('addemp');
});
router.post('/submit',async(req, res)=>{
  console.log('Request received at /submit');
  console.log(req.body);
  const{name,id,phone,address,role,salary,exp}=req.body;

  try{
     const newuser = new User({name,id,phone,address,role,salary,exp});
     await newuser.save();
  }catch(err){
    console.error(err);
  }
});

router.get('/viewemp',async(req,res)=>{
  const empdetails= await User.find();
  res.render('viewemp',{empdetails});
});

router.get('/rmvemp',async(req,res)=>{
  const empdetails= await User.find();
  res.render('rmvemp',{empdetails});
});
router.post('/delete/:id',async(req,res)=>{
  const id=req.params.id;
  try{
    await User.findOneAndDelete({id: id});
    res.redirect('/rmvemp');
  }catch(err){
    console.log(err);
    res.send(500).send("error occured while removing employee");
  }

});


module.exports = router;
