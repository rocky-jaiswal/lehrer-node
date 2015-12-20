'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    table.increments('id').primary();
    table.string('email');
    table.string('encryptedPassword');
    table.boolean('admin');
  }).createTable('phrases', function(table) {
    table.increments('id').primary();
    table.string('title');
    table.string('description');
    table.integer('user_id').references('users.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
    .dropTable('phrases');
};
