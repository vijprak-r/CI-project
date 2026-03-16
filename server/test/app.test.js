const request = require("supertest");
const app = require("../index");

describe("GET /", () => {
  it("should return Hello CI Pipeline", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
  });
});