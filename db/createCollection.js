var DatastoreClient = require("@google-cloud/datastore")({
	projectId: 'crypto-bigquery',
	keyFilename: '/home/allenday/crypto-bigquery.json'
});

module.exports = function container (get, set) {
  return function createCollection (name, options) {
    return require('../../sosa_datastore/')({
      db: DatastoreClient
    })(name, options)
  }
};