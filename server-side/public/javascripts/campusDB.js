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

var campuses = sequelize.define('campuse', {
    name: { //not empty or null

    },
    imageUrl:{ //with a default value

    },
    address: { //not empty or null

    },
    description: { //extremely large text

    },
    
    students: { //campuses may be associated with many students

    }

});

//maybe add a parameter validator 
//consider adding an error checker

var addCampus = (name, imageUrl, address, description) => {
    seshBegin();
    campuses.sync()
    .then(campuses.create({
        name: name,
        imageUrl: imageUrl,
        address: address,
        description: description

    }))
    .then(seshEnd());
}



var editCampus = (primaryKey, name, imageUrl, address, description) => {
    seshBegin();
    campuses.sync()
    .then(campuses.update({
        name: name,
        imageUrl: imageUrl,
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

var deleteCampus = (primaryKey) => {
    seshBegin();
    campuses.sync()
    .then(campuses.destroy({
        where: {
            id: primaryKey
        }
    }))
    .then(seshEnd());
}