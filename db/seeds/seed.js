const { calendarData, houseData, userData } = require("../data/index.js");

exports.seed = function (knex) {
	return knex.migrate
		.rollback()
		.then(() => knex.migrate.latest())
		.then(() => {
			const userInsertions = knex("users").insert(userData).returning("*");
		})
		.then(() => {
			const calendarInsertions = knex("calendars")
				.insert(calendarData)
				.returning("*");
		})
		.then(() => {
			const houseInsertions = knex("houses").insert(houseData);
		});
};
