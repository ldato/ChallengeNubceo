require('../connection');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const salt = 10;

const create = async (data) => {
    console.log(data)
    let hashPass = await bcrypt.hash(data.password, salt);
    const newUser = new User({
        name: data.name,
        email: data.email,
        password: hashPass,
        roleId: data.roleId
    })
    const userCreated = await newUser.save();
    return userCreated;
}

const findOne = async (email) => {
    const user = await User.findOne({email: email});
    return user;
}

module.exports = {
    create,
    findOne
}