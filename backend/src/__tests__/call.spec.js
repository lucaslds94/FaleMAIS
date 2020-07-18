const request = require("supertest");
const app = require("../../src/app");

describe("Call plans", () => {
  it("Should be able to consult a valid plan", async () => {
    const VALID_ORIGIN_DDD = 11;
    const VALID_DESTINY_DDD = 17;
    const VALID_CALL_TIME = 80;
    const VALID_CALL_PLAN = 60;

    const response = await request(app).get(
      `/consulta?originDDD=${VALID_ORIGIN_DDD}&destinyDDD=${VALID_DESTINY_DDD}
      &callTime=${VALID_CALL_TIME}&callPlan=${VALID_CALL_PLAN}`
    );

    expect(response.body).toHaveProperty("valueWithPlan");
    expect(response.body).toHaveProperty("valueWithoutPlan");
  });
  it("Should not be able to consult with invalid DDDs", async () => {
    const INVALID_ORIGIN_DDD = 9999;
    const INVALID_DESTINY_DDD = 8888;
    const VALID_CALL_TIME = 80;
    const VALID_CALL_PLAN = 60;

    const response = await request(app).get(
      `/consulta?originDDD=${INVALID_ORIGIN_DDD}&destinyDDD=${INVALID_DESTINY_DDD}
      &callTime=${VALID_CALL_TIME}&callPlan=${VALID_CALL_PLAN}`
    );

    expect(response.body).toHaveProperty("error");
    expect(response.status).toEqual(400);
  });

  it("Should be able to return all the DDDs in database", async () => {
    const response = await request(app).get(`/`);

    expect(response.body).toHaveProperty("origins");
    expect(response.body).toHaveProperty("destinies");
  });

  it("Should be able to return all DDD origin matches in database", async () => {
    const response = await request(app).get(`/?originDDD=11`);

    expect(response.body).toHaveProperty("originMatches");
  });
  it("Should be able to return all DDD destiny matches in database", async () => {
    const response = await request(app).get(`/?destinyDDD=11`);

    expect(response.body).toHaveProperty("destinyMatches");
  });
});
