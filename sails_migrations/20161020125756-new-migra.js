'use strict';

let dbm;
let type;
let seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

// with table options
exports.up = function (db, callback) {
  db.createTable('pets', {
    columns: {
      id: { type: 'int', primaryKey: true, autoIncrement: true },
      name: 'string',  // shorthand notation
      createdAt: 'datetime',  // shorthand notation
      updatedAt: 'datetime',  // shorthand notation
    },
    ifNotExists: true
  }, callback);
}

exports.down = function (db, callback) {
  db.dropTable('pets', { ifExists: true }, callback);
};

exports._meta = {
  "version": 1
};