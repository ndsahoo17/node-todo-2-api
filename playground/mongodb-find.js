//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
  return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server');
/*  db.collection('Todos').find({
    _id: new ObjectID('5bb7a64fca952d1be2e7fb30')
  }).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch docs', err);
  });
  */
/*  db.collection('Todos').find().count().then((count) => {
      console.log(`Todos count: ${count}`);
    }, (err) => {
      console.log('Unable to fetch docs', err);
    });
    */
    db.collection('Users').find({name: 'ndsahoo'}).toArray().then((docs) => {
      console.log(JSON.stringify(docs, undefined, 2));
    });
//  db.close();
});