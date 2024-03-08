var jsondb = require('lo-jsondb');






const userModel = jsondb("database/db/users", {pretty: true});





export{
    userModel
}