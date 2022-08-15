const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const secret = process.env.SECRETE



module.exports.createUser =  (req, res) => {
  User.create(req.body)
  .then((User) => res.json(User))
  .catch((err) => res.json(err));
};


module.exports.login = async (req, res) => {
  const user = await User.findOne({email: req.body.email})
  const password = req.body.password
  if(!user || !password){
    return res.json({log: 'invalid email/password'})
  }
  else{
    const pw = await bcrypt.compare(req.body.password, user.password)
  if(!pw){
      return res.json({log: 'invalid email/password'})
    }
    const userToken = jwt.sign(
      {
        id: user._id,
        firtName: user.firstName,
        lastName: user.lastName
      }, secret
    )
    return res.json({log: 'login success', userToken})
}}


  module.exports.logout = (req, res) => {
    res.clearCookie("userToken").json({ message: "Logout successfull" });
  };