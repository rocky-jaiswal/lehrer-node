'use strict';

const dbConfig = require('./db_config');
const knex     = require('knex')(dbConfig);

module.exports = require('bookshelf')(knex);
