const result = require('dotenv').config();


// if (result.error) {
//     throw result.error
//   }
  
//   console.log(result.parsed)

// const s = require('./studentsDB');

var {Sequelize, DataTypes} = require('sequelize');
// module.exports = {
//     campuses: campuses,
//     addCampus: addCampus,
//     editCampus: editCampus,
//     deleteCampus: deleteCampus,
//     students: students,
//     addStudent : addStudent,
//     editStudent: editStudent,
//     deleteStudent: deleteStudent
// }

// module.exports = {
//     campuses: campuses,
//     addCampus: addCampus(),
//     editCampus: editCampus(),
//     editCampusImage: editCampusImage(),
//     deleteCampus: deleteCampus(),
//     selectCampus: selectCampus(),
//     selectCampusAll: selectCampusAll(),
//     students: students,
//     addStudent : addStudent(),
//     editStudent: editStudent(),
//     editStudentImage: editStudentImage(),
//     deleteStudent: deleteStudent(),
//     selectStudent: selectStudent(),
//     selectStudentAll: selectStudentAll(),
//     selectStudentCampus: selectStudentCampus()
//   }

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

var addCampus =  (name, address, description) => {
    seshBegin();
    campuses.sync()
    .then( async ()=> {
        let campus = await campuses.create({
        name: name,
        address: address,
        description: description

    })
    return campus
})
    // .then(seshEnd());
}



var editCampus = (primaryKey, name, address, description) => {
    seshBegin();
    campuses.sync()
    .then( async() => {
        let campus = await campuses.update({
        name: name,
        address: address,
        description: description

    },
    {
        where: {
            id: primaryKey
        }
    }
    )
    return campus;
})
    
}

var editCampusImage = (primaryKey, imageUrl) => {
    // seshBegin();
    campuses.sync()
    .then( async () => {
        campus = await campuses.update({
        imageUrl: imageUrl,
        },
        {
            where: {
                id: primaryKey
            }
        })
        return campus;
    })
    // .then(seshEnd());

}

var selectCampus = async (primaryKey) => {
    // seshBegin();
    // campuses.sync()
    // .then(
    let campus = await campuses.findByPk(primaryKey);
    console.log(campus);
    return campus;
}

var selectCampusAll = async () => {
    // seshBegin;
    // campuses.sync()
    // .then(
    let allCampus = await campuses.findAll()
    // .then( allCampus => {console.log(allCampus)});    
    return allCampus;
}

var deleteCampus =  (primaryKey) => {

    
    // seshBegin();
    // //adding for removal of campus field for all students who went to soon to be deleted campus
    // // students.sync()
    // //Below should be able to be commented out due to the default delete behavior for SEQULIZES has many
    // // .then(students.update({
    // //     campuses: null

    // // },
    // // {
    // //     where: {
    // //         campuses: primaryKey //need get this portion of query right but want to associate this where clause with campus key identifier
    // //     }
    // // }
    // // ))
    campuses.sync()
    // .then( async () => {
    campuses.destroy({
            where: {
                id: primaryKey
            }
        })
    // )
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
        validate: {
            campusCheck(value) {
                if (campuses.findOne == null){
                    this.campusId = null;
                    console.log("No Campus with that ID Found")
                }
            }
        }
    }
    

});

//maybe add a parameter validator 
//consider adding an error checker

var addStudent =  (firstName, lastName, email, gpa, campus) => {
    seshBegin();
    students.sync()
    .then( async () => {
        let student = await students.create({
            firstName: firstName,
            lastName: lastName,
            email : email,
            gpa: gpa,
            campusId: campus

        })
        return student;
    })
    // .then(seshEnd());
}



var editStudent = (primaryKey, firstName, lastName, email, gpa, campus) => {
    seshBegin();
    students.sync()
    .then( async () => {
        let student = await students.update({
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
        })
        return student;
    })
    // .then(seshEnd());
}

var editStudentImage = (primaryKey, imageUrl) => {
    // seshBegin();
    students.sync()
    .then( async () => {
        let student = await students.update({
        imageUrl: imageUrl,
        },
        { where: {
            id: primaryKey
            }
        })
        return student;
        })
    // .then(seshEnd());

}

var deleteStudent = (primaryKey) => {
    // seshBegin();
    students.sync()
    .then( async () => {
        let student = await students.destroy({
            where: {
                id: primaryKey
            }
        })
        return student;
    })
    // .then(seshEnd());
}

var selectStudent = async (primaryKey) => {
    // seshBegin();
    // students.sync()
    // .then(
    const student1 = await students.findByPk(primaryKey);
    return student1;
}

var selectStudentAll = async () => {
    // seshBegin();
    // students.sync()
    // .then(
    const studentAll = students.findAll();
    return studentAll;
}

var selectStudentCampus = async (campusId) => {
    // let studentsCampus = [];
    // seshBegin();
    // campuses.sync()
    // .then( async () => {
    let studentsCampus = await students.findAll({where: {campusId: campusId}})
        // console.log(studentsCampus);
        return studentsCampus;
    // })
    
}

//console.log(`${DB_USER}\n${DB_PASS}\n${DB_PORT}\n${DB_NAME}`);

seshBegin();
// campuses.sync();
// students.sync();

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

// addStudent("Jay", "Z", "stabbed@un.com", 4.8, 1);

// addStudent("J", "Cole", "jermaine@dream.com", 3.5, 1);

selectStudentCampus(1)


// addStudent("Cardi" ,"B", "blo@od.com", 3.7, null); //validator test passed
// addStudent("Lloyd", "Banks", "G@unit.com", 4.8, 2);
// deleteCampus(2);
// deleteCampus(3);

// selectStudent(3);
// selectCampusAll();
// console.log(testCAll);

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
