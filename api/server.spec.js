require("dotenv").config();
const request = require("supertest");

const db = require("../database/dbConfig.js");
const server = require("./server.js");

afterEach(async () => {
  await db("users").truncate();
});

describe("Auth route", () => {
  describe("POST /api/auth/register", () => {
    it.todo("Should return a 201.");
    it.todo("Should send back the new user in response body.");
  });
  describe("POST /api/auth/login", () => {
    it.todo("Should return a 201.");
    it.todo("Should send back a token string.");
  });
});
