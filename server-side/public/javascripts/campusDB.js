const result = require('dotenv').config();


if (result.error) {
    throw result.error
  }
  
  console.log(result.parsed)

// const s = require('./studentsDB');

var {Sequelize, DataTypes} = require('sequelize');
module.exports = {
    campuses: campuses,
    addCampus: addCampus,
    editCampus: editCampus,
    deleteCampus: deleteCampus,
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

var campuses = sequelize.define('campus', {
    name: { //not empty or null
        type: Sequelize.STRING,
        allowNull: false
    },
    imageUrl:{ //with a default value
        type: Sequelize.STRING,
        defaultValue: 'TO_DO_WITH_GENERIC_URL_STRING'
    },
    address: { //not empty or null
        type: DataTypes.TEXT,
        allowNull: false

    },
    description: { //extremely large text
        type: DataTypes.TEXT
    }
, 
}, {
    tableName: 'campuses'
});



//maybe add a parameter validator 
//consider adding an error checker

var addCampus = (name, address, description) => {
    seshBegin();
    campuses.sync()
    .then(campuses.create({
        name: name,
        address: address,
        description: description

    }))
    .then(seshEnd());
}



var editCampus = (primaryKey, name, address, description) => {
    seshBegin();
    campuses.sync()
    .then(campuses.update({
        name: name,
        address: address,
        description: description

    },
    {
        where: {
            id: primaryKey
        }
    }
    ))
    .then(seshEnd());
}

var editCampusImage = (primaryKey, imageUrl) => {
    seshBegin();
    campuses.sync()
    .then(campuses.update({
        imageUrl: imageUrl,
        },
    {
        where: {
            id: primaryKey
        }
    }
    ))
    .then(seshEnd());

}

var deleteCampus = (primaryKey) => {

    
    seshBegin();
    //adding for removal of campus field for all students who went to soon to be deleted campus
    students.sync()
    //Below should be able to be commented out due to the default delete behavior for SEQULIZES has many
    // .then(students.update({
    //     campuses: null

    // },
    // {
    //     where: {
    //         campuses: primaryKey //need get this portion of query right but want to associate this where clause with campus key identifier
    //     }
    // }
    // ))
    .then(campuses.sync())
    .then(campuses.destroy({
        where: {
            id: primaryKey
        }
    }))
    .then(seshEnd());
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
        campuseID: campuses

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

var editStudentImage = (primaryKey, imageUrl) => {
    seshBegin();
    students.sync()
    .then(students.update({
        imageUrl: imageUrl,
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

console.log(`${DB_USER}\n${DB_PASS}\n${DB_PORT}\n${DB_NAME}`);

seshBegin;
campuses.sync();
students.sync();
campuses.hasMany(students);
students.belongsTo(campuses);
seshEnd;


//Test creation

campuses.addCampus()