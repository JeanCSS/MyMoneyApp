exports.up = function(knex) {
  return knex.schema.createTable('billingcycle', function(table) {
    table.increments('id').primary();
    table.integer('nome').notNullable(); //.references('id').inTable('user')
    table.integer('mes').notNullable();
    table.integer('ano').notNullable();
    //table.timestamps(true, true);
  });
};
 
exports.down = function(knex) {
  return knex.schema.dropTable('billingcycle');
};
