require('dotenv').config();

const c = require('./campusDB');

var {Sequelize, DataTypes} = require('sequelize');

module.exports = {
    students: students,
    addStudent : addStudent,
    editStudent: editStudent,
    deleteStudent: deleteStudent
}

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
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: { //not empty or null
        type: Sequelize.STRING,
        allowNull: false
    },
    email: { //not empty or null; must be a valid email
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    imageUrl:{ //with a default value
        type: Sequelize.STRING,
        defaultValue: 'TO_DO_WITH_GENERIC_URL_STRING'
    },
    gpa: { //decimal between 0.0 and 4.0
        type: DataTypes.FLOAT,
        defaultValue: 0.0,
        validate: {
            max: 4.0,
            min: 0.0
        }
    }
    

});
seshBegin;
students.sync();
c.campuses.sync();
students.belongsTo(c.campuses);
c.campuses.hasMany(students);

//maybe add a parameter validator 
//consider adding an error checker

var addStudent = (firstName, lastName, imageUrl, email, gpa, campuses) => {
    seshBegin();
    students.sync()
    .then(students.create({
        firstName: firstName,
        lastName: lastName,
        imageUrl: imageUrl,
        email : email,
        gpa: gpa,
        campuseID: campuses

    }))
    .then(seshEnd());
}



var editStudent = (primaryKey, firstName, lastName, imageUrl, email, gpa, campuses) => {
    seshBegin();
    students.sync()
    .then(students.update({
        firstName: firstName,
        lastName: lastName,
        imageUrl: imageUrl,
        email : email,
        gpa: gpa,
        campuseID: campuses

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