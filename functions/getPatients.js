var faunadb = require('faunadb'),
  q = faunadb.query;

var client = new faunadb.Client({ secret: 'process.env.FAUNADB_SECRET' });


client.query(q.CreateDatabase({ name: "my_app" }))
  .then((ret) => console.log(ret))
