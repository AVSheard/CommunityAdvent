exports.up = function (knex) {
	return knex.schema.createTable("houses", (houseTable) => {
		houseTable.increments("house_id").primary().unique();
		houseTable
			.string("inCalendar")
			.references("calendars.calendarName")
			.notNullable();
		houseTable.integer("day");
		houseTable.decimal("lat", NULL).notNullable();
		houseTable.decimal("long", NULL).notNullable();
		userTable.string("display_url");
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable("houses");
};
