const app = require('./app');
 var x=20;
 var y = 20;
 const z = 30;
 console.log(x+y+z);
 console.log(app.z());

 const arr = [2,4,1,5,3,3,8,6];
 let result = arr.filter((item)=>{
 //   console.log(item)
  return item===3
 })   

 console.log(result);


//const func_result = test(10,20);
//console.log(test(10,20));
//const func_result = (a,b) =>
//{
//    a = 200;
//    b = 300;
//    return a*b;
//}

const func_result = (a,b) =>a*b
console.log(func_result(300,300));
