const Users = require("../controllers/highUser.controller");

const { authenticate } = require("../config/jwt.config");
module.exports = (app) => {
  app.post("/api/register", Users.createUser);
  app.post("/api/login", Users.login);
  app.get("/api/logout", Users.logout);
  app.get('/api/all', Users.getAll);
};

