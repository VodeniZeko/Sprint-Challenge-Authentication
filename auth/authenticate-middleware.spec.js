afterEach(async () => {
  await db("users").truncate();
});

describe("Authentication middleware", () => {
  it.todo(
    "Send back an error in the response if the request has no authentication."
  );
  it.todo("Call the next function if the request has authentication.");
});
