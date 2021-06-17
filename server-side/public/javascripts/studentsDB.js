require('dotenv').config();

var {Sequelize, DataTypes} = require('sequelize');

const DB_PASS = process.env.DB_PASS;
const DB_PORT= process.env.DB_PORT;
const DB_USER= process.env.DB_USER;
const DB_NAME= process.env.DB_NAME;

var sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASS}@localhost:${DB_PORT}/${DB_NAME}`)

var seshBegin = () => {
    try {
        sequelize.authenticate();
        console.log("Connection has been established")
    }
    catch(er){
        console.log("Error attempting authentication: ", er)
    }
}

var seshEnd = () => {
    try {
        sequelize.close();
        console.log("Connection has been closed")
    }
    catch(er){
        console.log("Error on Closing: ", er)
    }
}

var students = sequelize.define('student', {
    firstName: { //not empty or null

    },
    lastName: { //not empty or null

    },
    email: { //not empty or null; must be a valid email

    },
    imageUrl:{ //with a default value

    },
    gpa: { //decimal between 0.0 and 4.0

    },
    campuses: { //Students may be associated with at most one campus.

    }

});

//maybe add a parameter validator 
//consider adding an error checker

var addStudent = (firstName, lastName, email, gpa, campuses) => {
    seshBegin();
    students.sync()
    .then(students.create({
        firstName: firstName,
        lastName: lastName,
        email : email,
        gpa: gpa,
        campuses: campuses

    }))
    .then(seshEnd());
}



var editStudent = (primaryKey, firstName, lastName, email, gpa, campuses) => {
    seshBegin();
    students.sync()
    .then(students.update({
        firstName: firstName,
        lastName: lastName,
        email : email,
        gpa: gpa,
        campuses: campuses

    },
    {
        where: {
            id: primaryKey
        }
    }
    ))
    .then(seshEnd());
}

var deleteStudent = (primaryKey) => {
    seshBegin();
    students.sync()
    .then(students.destroy({
        where: {
            id: primaryKey
        }
    }))
    .then(seshEnd());
}