module.exports.migrations = {
  // connection name matches a field from config/connections.js
  connection: 'someMysqlServer', // or PostgreSQL
  table: 'sails_migrations',
  migrationsDir: 'sails_migrations',
  coffeeFile: false
};