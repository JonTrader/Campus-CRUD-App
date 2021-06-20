var express = require('express');
var router = express.Router();
var c = require('../public/javascripts/campusDB');
express.request(bodyParser.urlencoded({extended:false}));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get(`/campus/all`, function(request, response) {
  console.log(`got request for " /campus/all/" `);

  c.selectCampusAll( function(err, results){
    if(err){
      console.log(err.stack);
  }
  console.log(result.rows);
  })
  response.send(`All Campuses`);
});

router.get(`/campus::id`, function(request, response) {
  let id = request.params.id;
  console.log(`got request for " /campus/${id}" `);

  c.selectCampus(id, function(err, results){
    if(err){
      console.log(err.stack);
  }
  console.log(result.rows);
  })

  response.send(`Campus ${id}`);
});

router.get(`/campus::id/students`, function(request, response) {
  let id = request.params.id;
  console.log(`got request for " /campus/${id}/students" `);

  c.selectStudentCampus(id, function(err, results){
    if(err){
      console.log(err.stack);
  }
  console.log(result.rows);
  })

  response.send(`All Students on Campus ${id}`);
});

app.get(`/student/all`, function(request, response) {
  console.log(`got request for " /student/all/" `);

  c.selectStudentAll( function(err, results){
    if(err){
      console.log(err.stack);
  }
  console.log(result.rows);
  })
  response.send(`All Students`);
});

app.get(`/student::id`, function(request, response) {
  let id = request.params.id;
  console.log(`got request for " /student/${id}" `);

  c.selectStudent(id, function(err, results){
    if(err){
      console.log(err.stack);
  }
  console.log(result.rows);
  })

  response.send(`Student ${id}`);

});



app.post('/campus/submit-data', function(request, response){
    
  console.log("Processing some information");

  let name= request.params.name;
  let address = request.params.address;
  let description = request.params.description
  
  
  console.log(name);
  console.log(address);
  console.log(description);

  c.addCampus(name,address,description, function(err, result){
    if(err){
      console.log(err.stack)
    }
    console.log(result.rows);
  });

  response.send("Post request");
});

app.post('/student/submit-data', function(request, response){
    
     
  console.log("Processing some information");

  let firstName= request.params.firstName;
  let lastName= request.params.lastName;
  let email= request.params.email;
  let gpa= request.params.gpa;
  let campusId= request.params.campusId;

  
  console.log(firstName);
  console.log(lastName);
  console.log(email);
  console.log(gpa);
  console.log(campusId);

  c.addStudent(firstName, lastName, email, gpa, campusId, function(err, result){
    if(err){
      console.log(err.stack)
    }
    console.log(result.rows);
  });

  response.send("Post request");
});

router.delete(`/campus::id/delete`, function(req, res, next) {

  let id = request.params.id;
  console.log(`Deleting Campus id: ${id}`);

  c.deleteCampus(id);
  res.send(`Deleted Campus ${id}`);
});

  
router.delete(`/student::id/delete`, function(req, res, next) {

  let id = request.params.id;
  console.log(`Deleting Student id: ${id}`);
  
  c.deleteStudent(id);
  res.send(`Deleted Student ${id}`);
  
});

router.put(`/campus::id/edit`, function(req, res, next) {
  let id = request.params.id;
  console.log(`Editing Campus id: ${id}`);

  let name= request.params.name;
  let address = request.params.address;
  let description = request.params.description
  
  
  console.log(name);
  console.log(address);
  console.log(description);

  c.editCampus(id, name,address,description, function(err, result){
    if(err){
      console.log(err.stack)
    }
    console.log(result.rows);
  });

  res.send(`Edited Campus ${id}`);
});

router.put(`/student::id/edit`, function(req, res, next) {
  let id = request.params.id;
  console.log(`Editing Student id: ${id}`);

  let firstName= request.params.firstName;
  let lastName= request.params.lastName;
  let email= request.params.email;
  let gpa= request.params.gpa;
  let campusId= request.params.campusId;

  
  console.log(firstName);
  console.log(lastName);
  console.log(email);
  console.log(gpa);
  console.log(campusId);

  c.editStudent(id, firstName, lastName, email, gpa, campusId, function(err, result){
    if(err){
      console.log(err.stack)
    }
    console.log(result.rows);
  });

  res.send(`Edited Student ${id}`);
});




module.exports = router;
