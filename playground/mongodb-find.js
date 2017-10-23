const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.error('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    // db.collection('Todos').find({
    //     _id: new ObjectID('59ec65b35cb6cb299c02c74a')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.error('Unable to fetch dotos', err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos: ${count}`);
    // }, (err) => {
    //     console.error('Unable to fetch dotos', err);
    // });

    db.collection('Users').find({name: 'Ben'}).toArray().then((docs) => {
        console.log('Users named Ben:');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.error('Unable to fetch dotos', err);
    });

    // db.close();
});