var express = require('express');
var router = express.Router();
var c = require('../public/javascripts/campusDB');
express.request(bodyParser.urlencoded({extended:false}));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

app.get(`/campus::id`, function(request, response) {
  console.log(`got request for " /hello/${request.params.name}" `);
  // we will respond with the parameterized name
  response.send(`hello ${request.params.name}`);
});

app.get(`/student::id`, function(request, response) {
  console.log(`got request for " /hello/${request.params.name}" `);
  // we will respond with the parameterized name
  response.send(`hello ${request.params.name}`);
});



app.post('campus/submit-data', function(request, response){
    
  console.log("Processing some information");

  let firstname = request.body.firstname;
  let lastname = request.body.lastname;
  let email = request.body.email;
  let height = 10;
  let brim = true;
  
  
  console.log(firstname);
  console.log(lastname);
  console.log(email);

  /*In order for us to handle HTTP POST request with our express app, 
  we need to install a middleware module called body parser.
  */

  /* We we capture the information from the form, we want to submit to 
  a database for storage
  */

  let text = 'INSERT INTO hats (name, material, height, brim) VALUES ($1, $2, $3, $4) RETURNING *';
  const values = [request.body.firstname , request.body.lastname , '9' , 'true' ];

  pool.query(text, values, function(err,result){

      if(err){
          console.log(err.stack)
      }
      console.log(result.rows);
  });// so that we can continue from here tomorrow.


  response.send("Post request");
});

app.post('student/submit-data', function(request, response){
    
  console.log("Processing some information");

  let firstname = request.body.firstname;
  let lastname = request.body.lastname;
  let email = request.body.email;
  let height = 10;
  let brim = true;
  
  
  console.log(firstname);
  console.log(lastname);
  console.log(email);

  /*In order for us to handle HTTP POST request with our express app, 
  we need to install a middleware module called body parser.
  */

  /* We we capture the information from the form, we want to submit to 
  a database for storage
  */

  let text = 'INSERT INTO hats (name, material, height, brim) VALUES ($1, $2, $3, $4) RETURNING *';
  const values = [request.body.firstname , request.body.lastname , '9' , 'true' ];

  pool.query(text, values, function(err,result){

      if(err){
          console.log(err.stack)
      }
      console.log(result.rows);
  });// so that we can continue from here tomorrow.


  response.send("Post request");
});




module.exports = router;
