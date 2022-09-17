const databaseConnection = require('../database');

const createUser = (request, response) => {
    const data = {
        name: request.body.name,
        address: request.body.address,
        phone: request.body.phone,
        password: request.body.password,
        email: request.body.email,
    }
    const insertData = "INSERT INTO student set ?";
    databaseConnection.query(insertData, data, (err, result) =>{
        if(err) throw err;
        return response.send(apiResponse(result));
    })
    console.log(data)

    return data;
}

const updateUser = () => {


}

function apiResponse(result){
    return JSON.stringify({"status" : 200, "error": null, "reaponse": result})

}
module.exports = {
    createUser,
    updateUser
}