exports.userInsert = (req, res) => {
  const mongodb =  require('mongodb')
  let uri = ""  // enter your custom uri here
  return mongodb.MongoClient.connect(uri, (err, client) => {
    if (err) {
      res.status(400).send(`Error: ${err.errmsg}`)
    } else {
      try {
        const entry = {
          username: req.body.username,
          password: req.body.password
        }
      
        const collection = client.db('test').collection('users')
        
        collection.insertOne(entry, (err, result) => {
          if (err) {
            res.status(400).send(err.errmsg)
          } else {
            res.status(200).send(`Inserted ${result.insertedCount} document(s)`)
          }
        })
      } catch (err) {
        res.status(400).send(err.toString())
      }
    }
  }) 
}
