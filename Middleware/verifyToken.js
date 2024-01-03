const jwt = require("jsonwebtoken");

const dotenv = require("dotenv");

dotenv.config;

const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, process.env.JWT_SEC, (error, data) => {
      if (error) {
        res.status(404).json({ message: "Not Authorized" });
        console.log(error);
        return;
      }
      next();
    });
  } else {
    res.status(500).json({ message: "Not Authorized" });
  }
};

module.exports = { verifyToken }
