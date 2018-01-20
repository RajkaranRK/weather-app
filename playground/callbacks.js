var getUser = (id,callback,err)=> {
  var user = {
    id:id,
    name:'Rajkaran'
  };
  if (id==31) {
    err();
  }
  callback(user);
};

getUser(31,(userObject)=>{
  console.log(userObject);
},(err)=>{
  console.log('User not found...');
});
