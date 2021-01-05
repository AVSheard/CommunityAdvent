exports.up = function (knex) {
	return knex.schema.createTable("houses", (housesTable) => {
		houseTable.increments("house_id").primary().unique();
		houseTable.string("name").notNullable();
		houseTable
			.string("calendar")
			.references("calendars.calendarName")
			.notNullable();
		houseTable.integer("day");
		houseTable.decimal("latLocation", NULL).notNullable();
		houseTable.decimal("longLocation", NULL).notNullable();
		houseTable.string("display_url");
		houseTable.string("owner").references("users.username");
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable("houses");
};
