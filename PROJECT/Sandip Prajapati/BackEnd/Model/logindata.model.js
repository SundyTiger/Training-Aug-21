const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/disneyplushotstar')
    .then(() => console.log('Database is Exersicing.......'))
    .catch(err => console.error('Error in Connection' + err));

const dphschema = new mongoose.Schema({
    Email: {
        type: String,
        required: true
    },
    PassWord: {
        type: String,
        required: true
    },
    isSuper: {
        type: Boolean,
        default: false
    },
    isPrime: {
        type: Boolean,
        default: false
    }
})
const UserPass = mongoose.model('UserInfo', dphschema);
async function createUser(email, password) {
    const userinfo = new UserPass({
        Email: email,
        PassWord: password
    })
    try {
        const data = await userinfo.save();
    }
    catch (err) {
        console.log('Login Error' + err)
    }
}
async function getUser(email) {
    try {
        const user = await UserPass.find({
            Email: email
        })
        if (!user) return console.log("Invalid User");
        return user
    }
    catch (err) {
        console.error("Error in getUser" + err);
    }
}
async function updatePassWord(email, password) {
    try {
        const user = await UserPass.updateOne({ Email: email }, {
            $set: {
                PassWord: password
            }
        })
        if (!user) return console.log("Invalid EmailID or Password")
    }
    catch (err) {
        console.log("Error in UpdatePassword: " + err);
    }
}
async function validateEmail(email) {
    try {
        const user = await UserPass.find({
            Email: email
        })
        console.log()
        // const value = typeof(user) == "boolean";
        // const value = typeof(user) == "undefined";
        // console.log(value);
        if (user.length == 0) {
            console.log("valid Email Address!!!")
            return false;
        }
        else {
            console.log('Email is Already Exists!!!')
            return true;
        }
    }
    catch (err) {
        console.error("Error in getUser" + err);
    }
}
module.exports = {
    getUser, createUser, updatePassWord, validateEmail
}