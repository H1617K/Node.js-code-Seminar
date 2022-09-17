const mysql2 = require('mysql2');

const databaseConnection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cpi_demo',
});

// connect with database
databaseConnection.connect((error) => {
    if(!error){
        console.log('Database connection succesfully');
    } else {
        console.log('Database connection falied' + JSON.stringify
        (error));
    }
});

//exprot module
module.exports = databaseConnection;