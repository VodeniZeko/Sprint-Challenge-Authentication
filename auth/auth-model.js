const db = require("../database/dbConfig.js");

module.exports = {
  insert,
  find
};

function find(userInfo) {
  return db("users").where(userInfo);
}

async function insert(userInfo) {
  try {
    const ids = await db("users").insert(userInfo);
    const user = await find({ id: ids[0] }).first();
    return {
      id: user.id,
      username: user.username
    };
  } catch (err) {
    console.error(err);
  }
}
