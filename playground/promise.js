// var somePromise = new Promise(function(resolve,reject){
//   setTimeout(()=>{
//     //resolve('Hey it worked.....');
//     reject('Unable to get result');
//   },2000);
// });
//
// somePromise.then((message)=>{
//   console.log('Success : ',message);
// },(errorMessage)=>{
//   console.log('Error : ',errorMessage);
// });
//https://www.udemy.com/the-complete-nodejs-developer-course-2/learn/v4/t/lecture/5795058?start=0
var asyncAdd = (a,b)=>{
  return  new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if (typeof a === 'number'  && typeof b === 'number') {
        resolve(a+b);
      }else {
        reject('Arguments must be numbers')
      }
    },2000);
  });
}

asyncAdd(10,20).then((result)=>{
  console.log('Sum of two number is ',result);

},(errorMessage)=>{
  console.log(errorMessage);
});
