const User = require("../models/highUser.model");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const secret = process.env.SECRETE



module.exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body)
    const userToken = jwt.sign(
      {
        id: user._id,
        firtName: user.firstName,
        lastName: user.lastName
      }, secret
    )
    res.json({log: 'created new user', userToken})
  
}
  catch (err) {
    res.json({message: 'Email is associated with an account', error: err});
  }
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

  module.exports.getAll = (req, res) =>{
    User.find()
    .then((allUsers) => {
      res.json({users: allUsers})
      console.log(allUsers)
  })
  .catch((err) => {
    res.json({error: err})
    console.log(err)
  })
  }