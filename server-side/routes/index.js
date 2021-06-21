var express = require('express');
var router = express.Router();
var cors = require('cors');
var c = require('../public/javascripts/campusDB');
let bodyParser = require(`body-parser`);


router.use(cors());
router.use(bodyParser.urlencoded({extended:false}));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get(`/campus/all`, async function(request, response) {
  console.log(`got request for " /campus/all/" `);

  const campusAll = await c.selectCampusAll( function(err, results){
    if(err){
      console.log(err.stack);
  }
  console.log(result.rows);
  })
  
  response.send(campusAll);
});

router.get(`/campus::id`, async function(request, response) {
  let id = request.params.id;
  console.log(`got request for " /campus/${id}" `);

  const campus = await c.selectCampus(id, function(err, results){
    if(err){
      console.log(err.stack);
  }
  console.log(result.rows);
  })

  response.send(campus);
});

router.get(`/campus::id/students`, async function(request, response) {
  let id = request.params.id;
  console.log(`got request for " /campus/${id}/students" `);

  const campStudents = await c.selectStudentCampus(id, function(err, results){
    if(err){
      console.log(err.stack);
  }
  console.log(result.rows);
  })

  response.send(campStudents);
});

router.get(`/student/all`, async function(request, response) {
  console.log(`got request for " /student/all/" `);

  let students = await c.selectStudentAll( function(err, results){
    if(err){
      console.log(err.stack);
  }
  console.log(result.rows);
  })
  response.send(students);
});

router.get(`/student::id`, async function(request, response) {
  let id = request.params.id;
  console.log(`got request for " /student/${id}" `);

  let student = await c.selectStudent(id, function(err, results){
    if(err){
      console.log(err.stack);
  }
  console.log(result.rows);
  })

  console.log(student)

  response.send(student);

});



router.post('/campus/submit-data', async function(request, response){
    
  console.log("Processing some information");
  console.log(request.params);

  let name= request.body.name;
  let address = request.body.address;
  let description = request.body.description;
  
  
  console.log(name);
  console.log(address);
  console.log(description);

  let campusAdd = await c.addCampus(name,address,description, function(err, result){
    if(err){
      console.log(err.stack)
    }
    console.log(result.rows);
  });

  response.send(campusAdd);
});

router.post('/student/submit-data', function(request, response){
    
     
  console.log("Processing some information");

  let firstName= request.body.firstName;
  let lastName= request.body.lastName;
  let email= request.body.email;
  let gpa= request.body.gpa;
  let campusId= request.body.campusId;

  
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

  c.deleteCampus(id ,function(err,result){
    if(err){
      console.log(err.stack)
    }
    console.log(result.rows);
  });
  
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

  let name= request.body.name;
  let address = request.body.address;
  let description = request.body.description;

  
  
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

  let firstName= request.body.firstName;
  let lastName= request.body.lastName;
  let email= request.body.email;
  let gpa= request.body.gpa;
  let campusId= request.body.campusId;

  
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

// console.log(c)


module.exports = router;

