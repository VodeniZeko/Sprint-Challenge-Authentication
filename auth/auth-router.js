const router = require("express").Router();
const Users = require("./auth-model.js");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  let newUser = req.body;
  const hash = bcrypt.hashSync(newUser.password, 10);
  newUser.password = hash;
  try {
    const user = await Users.insert(newUser);
    res.status(201).json(user);
  } catch {
    res.status(500).json({ error: "Could not register user in database." });
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await Users.find({ username: username }).first();
    if (user && bcrypt.compareSync(password, user.password)) {
      const token = generateToken(user);

      res.status(201).json({
        message: `Welcome ${user.username}!`,
        token
      });
    } else {
      res.status(401).json({ message: "Invalid Credentials" });
    }
  } catch {
    res.status(500).json({ error: "Could not find user." });
  }
});

function generateToken(user) {
  const payload = {
    sub: user.id,
    username: user.username
  };
  const secret = require("../config/secrets").jwtSecret;
  const options = {
    expiresIn: "15m"
  };

  return jwt.sign(payload, secret, options);
}
module.exports = router;
