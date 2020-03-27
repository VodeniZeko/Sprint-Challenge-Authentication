const Users = require("./auth-model.js");

module.exports = async (req, res, next) => {
  const user = await User.findById(req.decodedToken.sub);
  if (user) {
    req.user = user;
    next();
  } else {
    res.status(400).json({ error: "Unrecognized user." });
  }
};
