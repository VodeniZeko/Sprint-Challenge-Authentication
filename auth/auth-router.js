const router = require("express").Router();
const Users = require("./auth-model.js");

router.post("/register", async (req, res) => {
  try {
    const user = await Users.insert(req.body);
    res.status(201).json(user);
  } catch {
    res.status(500).json({ error: "Could not register user in database." });
  }
});

router.post("/login", (req, res) => {
  // implement login
});

module.exports = router;
