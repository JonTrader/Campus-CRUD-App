const result = require('dotenv').config();


// if (result.error) {
//     throw result.error
//   }
  
//   console.log(result.parsed)

// const s = require('./studentsDB');

var {Sequelize, DataTypes} = require('sequelize');
module.exports = {
    campuses: campuses,
    addCampus: addCampus,
    editCampus: editCampus,
    editCampusImage: editCampusImage,
    deleteCampus: deleteCampus,
    selectCampus: selectCampus,
    selectCampusAll: selectCampusAll,
    students: students,
    addStudent : addStudent,
    editStudent: editStudent,
    editStudentImage: editStudentImage,
    deleteStudent: deleteStudent,
    selectStudent: selectStudent,
    selectStudentAll: selectStudentAll,
    selectStudentCampus: selectStudentCampus
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
}, //{
    //tableName: 'campuses'
//}
);



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
    // .then(seshEnd());
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
    // .then(seshEnd());

}

var selectCampus = (primaryKey) => {
    seshBegin();
    campuses.sync()
    .then(campuses.findByPk(primaryKey));
}

var selectCampusAll = () => {
    seshBegin;
    campuses.sync()
    .then(campuses.findAll())
}

var deleteCampus = (primaryKey) => {

    
    seshBegin();
    //adding for removal of campus field for all students who went to soon to be deleted campus
    // students.sync()
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
    campuses.sync()
    .then(campuses.destroy({
        where: {
            id: primaryKey
        }
    }))
    // .then(seshEnd());
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
            custommValidator (value) {
                if (value < 0.0 || value >4.0){
                    this.gpa = 0.0;
                    console.log("GPA must be between 0.0 and 4.0, reverting to 0.0");
                }
            }
        }
    },
    campusId:{
        type: Sequelize.INTEGER,
    }
    

});

//maybe add a parameter validator 
//consider adding an error checker

var addStudent = (firstName, lastName, email, gpa, campus) => {
    seshBegin();
    students.sync()
    .then(students.create({
        firstName: firstName,
        lastName: lastName,
        email : email,
        gpa: gpa,
        campusId: campus

    }))
    // .then(seshEnd());
}



var editStudent = (primaryKey, firstName, lastName, email, gpa, campus) => {
    seshBegin();
    students.sync()
    .then(students.update({
        firstName: firstName,
        lastName: lastName,
        email : email,
        gpa: gpa,
        campusId: campus

    },
    {
        where: {
            id: primaryKey
        }
    }
    ))
    // .then(seshEnd());
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

var selectStudent = (primaryKey) => {
    seshBegin();
    campuses.sync()
    .then(campuses.findByPk(primaryKey));
}

var selectStudentAll = () => {
    seshBegin;
    campuses.sync()
    .then(campuses.findAll())
}

var selectStudentCampus = (campusId) => {
    seshBegin;
    campuses.sync()
    .then(campuses.findAll({where: {campusId: campusId}}));
}

//console.log(`${DB_USER}\n${DB_PASS}\n${DB_PORT}\n${DB_NAME}`);

// seshBegin;
campuses.sync();
students.sync();

// campuses.hasMany(students/*, (err) => {
//     console.log(err);
// }*/);

// students.belongsTo(campuses/*, (err) => {
//     console.log(err);
// }*/);

campuses.hasMany(students, {
          foreignKey: 'campusId',
          as: 'students',
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE'
        });

students.belongsTo(campuses, {
      foreignKey: 'campusId',
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE'
    });



//Test creation

// addCampus("Lehman", "Bronx, NY",""); //test case passed
// addCampus("Roc-a-Fella", "Brooklyn, NY",""); //test case passed
// addCampus("Dipset", "Manhattan, NY",""); //test case passed

// addStudent("Killa", "Cam", "pink@dipset.com", 4.8, 3);
// addStudent("Free", "Way", "highway@rockafella.com", 2.5, null);
// addStudent("Juelz", "Santana", "heyma@dipset.com", 3.5, 3);


// addStudent("Cardi" ,"B", "blo@od.com", 3.7, null); //validator test passed
// addStudent("Lloyd", "Banks", "G@unit.com", 4.8, 2);
deleteCampus(2);
deleteCampus(3);