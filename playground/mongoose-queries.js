const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');
const {ObjectID}=require('mongodb');
const {User}=require('./../server/models/user');
// var id='5b310be0af6eed802bf44e041';
//
// if(!ObjectID.isValid(id)){
//   return console.log('ID not valid');
// }
//
// Todo.find({
//   _id:id
// }).then((todos)=>{
//   console.log('Todos',todos);
// }).catch((e)=>console.log(e));
//
// Todo.findOne({
//   _id: id
// }).then((todo)=>{
//   console.log('Todo',todo);
// }).catch((e)=>console.log(e));
//
// Todo.findById(id).then((todobyid)=>{
//   if(!todobyid){
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id',todobyid);
// }).catch((e)=>console.log(e));
User.findById('5b31d480797fe18accdfe4f4').then((user)=>{
  if(!user){
    return console.log('Unable to find user');
  }
  console.log(JSON.stringify(user,undefined ,2 ));
}).catch((e)=>console.log(e));
