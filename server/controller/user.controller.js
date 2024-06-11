const db = require("../db");
const { useCheck, addUser } = require("../helpers/userHelper.js");
const hashHelper = require("../helpers/hashHelper");
const jwt = require("jsonwebtoken");
const { secret } = require("../config");

class UserController {
  async createUser(req, res) {
    try {
      const login = req.query.login;
      const password = req.query.password;
      const user = await useCheck(login);
      if (user.message === "Account in use") {
        res.status(403).send("Email already exists");
        console.log("Email already exists");
        return;
      }
      const hashedPassword = await hashHelper.scryptHash(password);
      const newUser = await addUser(login, hashedPassword);
      res.status(201).json({ message: "User added successfully" });
      console.log("User added successfully");
      return;
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
      console.error(error);
    }
  }

  async logIn(req, res) {
    try {
      const { login, password } = req.query;
      const user = await useCheck(login);
      if (user.message === "Account is not in use") {
        return res.status(403).json({ message: "Неверный логин или пароль" });
      }
      const isVerified = await hashHelper.scryptVerify(
        password,
        user.user.password
      );
      if (isVerified) {
        const token = jwt.sign(
          {
            email: login,
            userName: user.login,
          },
          secret,
          {
            expiresIn: "7d",
          }
        );
        res.status(200).json({ isVerify: true, token: token });
      } else {
        res.status(403).json({ isVerify: "false" });
      }
    } catch (error) {
      console.log(err);
      res.status(500).json({ error: err });
    }
  }
}

module.exports = new UserController();
