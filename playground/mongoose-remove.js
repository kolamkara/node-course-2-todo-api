const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');
const {ObjectID}=require('mongodb');
const {User}=require('./../server/models/user');

// Todo.remove({}).then((result)=>{
//   console.log(result);
// });
// Todo.findOneAndRemove

Todo.findByIdAndRemove("5b3211fe797fe18accdff1c8").then((todo)=>{
  console.log(todo);
});
Todo.findOneAndRemove("5b3211fe797fe18accdff1c8").then((todo)=>{
  console.log(todo);
});
