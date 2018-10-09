//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
  return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server');
  /*  db.collection('Users').deleteMany({name: 'ndsahoo'}).then((result) => {
    console.log(result);
  });


  db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) => {
    console.log(result);
  });

  db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    console.log(result);
  });
  */
//  db.collection('Users').deleteMany({name: 'ndsahoo'});
  db.collection('Users').findOneAndDelete({_id: new ObjectID("5bb84f8e9bd3931b950eae51")
}).then((results) => {
  console.log(JSON.stringify(results, undefined, 2));
});
//  db.close();
});
