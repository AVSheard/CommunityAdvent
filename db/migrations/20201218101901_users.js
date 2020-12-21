exports.up = function (knex) {
	return knex.schema.createTable("users", (userTable) => {
		userTable.string("username").primary().unique();
		userTable.string("name").notNullable();
		userTable.string("avatar_url");
		userTable.string("email").notNullable();
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable("users");
};
