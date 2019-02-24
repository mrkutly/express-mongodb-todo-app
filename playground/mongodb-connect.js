const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
  if (err) {
    console.log('Unable to connect to mongodb server - ', err)
    return
  }
  console.log('Connected to mongodb server')

  const db = client.db('TodoApp')

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     console.log('Unable to insert into database - ', err)
  //     return
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2))
  // })

  // insert new doc into the Users collection (name, age, location)
  // db.collection('Users').insertOne({
  //   name: 'mark',
  //   age: 27,
  //   location: 'Brooklyn, NY'
  // }, (err, result) => {
  //   if (err) {
  //     console.log('Unable to insert into database - ', err)
  //     return
  //   }
  //
  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2))
  // })

  client.close()
})
