process.env.NODE_ENV = "test";
const chai = require("chai");
const { expect } = chai;
const request = require("supertest");
const app = require("../app");
const connection = require("../db/connection");

describe("/api", () => {
	beforeEach(() => connection.seed.run());
	after(() => connection.destroy());

	describe("/calendars", () => {
		it("GET - 200 for successful request for list of calendars", () => {
			return request(app)
				.get("/api/calendars")
				.expect(200)
				.then((res) => {
					res.body.calendars.forEach((calendar) => {
						expect(calendar).to.have.all.keys([
							"calendarName",
							"centreName",
							"admin",
							"longLocation",
							"latLocation",
						]);
					});
				});
		});
	});
});
