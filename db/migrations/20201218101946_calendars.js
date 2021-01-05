exports.up = function (knex) {
	return knex.schema.createTable("calendars", (calendarsTable) => {
		calendarTable.string("calendarName").primary().unique();
		calendarTable.string("centreName").notNullable();
		calendarTable.string("admin").references("users.username").notNullable();
		calendarTable.decimal("longLocation", NULL).notNullable();
		calendarTable.decimal("latLocation", NULL).notNullable();
		userTable.string("cover_url");
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable("calendars");
};
