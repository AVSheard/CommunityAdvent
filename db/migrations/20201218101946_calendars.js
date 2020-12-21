exports.up = function (knex) {
	return knex.schema.createTable("calendars", (calendarTable) => {
		calendarTable.string("calendarName").primary().unique();
		calendarTable.string("centreName").notNullable();
		calendarTable.string("admin").references("users.username").notNullable();
		calendarTable.decimal("centreLocLat", NULL).notNullable();
		calendarTable.decimal("centreLocLong", NULL).notNullable();
		userTable.string("cover_url");
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable("calendars");
};
