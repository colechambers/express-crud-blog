exports.up = function(knex) {
  return knex.schema.createTable('posts', function(table){
    table.increments();
    table.string('title');
    table.text('body');
    table.string('category');
    table.integer('user_id').unsigned().references('id').inTable('users').onDelete('cascade');
    table.text('post_img').notNullable().defaultTo('');
    table.dateTime();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('posts');
};
