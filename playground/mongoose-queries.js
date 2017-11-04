const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// const id = '69fb1f776c8d412c5c846fba';

// if (!ObjectID.isValid(id)) {
//     console.log('Id not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo By Id', todo);
// }).catch((e) => console.error(e));


User.findById('59f46e2b68dc5b06c8a9fc4b').then((user) => {
    if (!user) {
        return console.log('User not found'); // (1) valid but nonexistent id
    }
    console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => {
    console.error(e); // (2) invalid id
});

/*
To test (1): change the first number in the id
To test (2): add some random characters to the id
*/