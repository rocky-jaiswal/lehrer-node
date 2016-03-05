'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    table.increments('id').primary();
    table.text('email').unique();
    table.text('encryptedPassword');
    table.boolean('admin');
  }).createTable('phrases', function(table) {
    table.increments('id').primary();
    table.text('title');
    table.text('description');
    table.integer('user_id').references('users.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('phrases')
                    .dropTable('users');
};
