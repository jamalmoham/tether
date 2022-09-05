const Users = require("../controllers/collegeUser.controller");

const { authenticate } = require("../config/jwt.config");
module.exports = (app) => {
    app.post("/api/college/register", Users.createUser);
    app.post("/api/college/login", Users.login);
    app.get("/api/college/logout", Users.logout);
    app.get('/api/college/all', Users.getAll);
};

