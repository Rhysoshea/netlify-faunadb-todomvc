const faunadb = require('faunadb'),
  q = faunadb.query;

const client = new faunadb.Client({ secret: 'process.env.FAUNADB_SECRET' });


client.query(
  q.Get(
    q.Match(q.Index("all_patient"), "*")))
  .then((ret) => console.log(ret))

  // exports.handler = (event, context, callback) => {
  //   const data = JSON.parse(event.body)
  //   console.log("Function `get-patient` invoked", data)
  //   const patientItem = {
  //     data: data
  //   }
  //   /* construct the fauna query */
  //   return client.query(q.Create(q.Ref("classes/patient"), all_patient))
  //   .then((response) => {
  //     console.log("success", response)
  //     return callback(null, {
  //       statusCode: 200,
  //       body: JSON.stringify(response)
  //     })
  //   }).catch((error) => {
  //     console.log("error", error)
  //     return callback(null, {
  //       statusCode: 400,
  //       body: JSON.stringify(error)
  //     })
  //   })
  // }
