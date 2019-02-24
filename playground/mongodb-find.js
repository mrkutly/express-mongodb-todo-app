const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, async (err, client) => {
  if (err) {
    console.log('Unable to connect to mongodb server - ', err)
    return
  }
  console.log('Connected to mongodb server')

  const db = client.db('TodoApp')

  // db.collection('Todos').find({
  //   _id: new ObjectID('5c72c23b82d50e1419dad107')
  // }).toArray().then(docs => {
  //   console.log('Todos')
  //   console.log(JSON.stringify(docs, undefined, 2))
  // }, (err) => console.log('Unable to fetch todos - ', err))

  // const count = await db.collection('Todos').find().count()
  // console.log(`Todos count: ${count}`)

  const marks = await db.collection('Users').find({ name: 'mark' }).toArray()
  console.log(JSON.stringify(marks, undefined, 2))

  // client.close()
})
