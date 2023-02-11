/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
 arr.map(({id,name,age, marks})=>{
    if(marks >= 50){
      console.log(arr[id-1]);
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach(({id,name,age, marks})=>{
    if(marks >= 50){
      console.log(arr[id-1]);
    }
    });
  
}

function addData() {
  //Write your code here, just console.log
   const added = {id : 4, name : "susan", age : "20", marks :45 };
  arr.push(added);
  console.log(arr);
   
}

function removeFailedStudent() {
  //Write your code here, just console.log
   console.log(arr.filter(f=>f.marks > 50));
  
}

function concatenateArray() {
  //Write your code here, just console.log
  const arr1 = [
  { id: 4, name: "john", age: "17", marks: 67 },
  { id: 5, name: "nick", age: "22", marks: 90 },
  { id: 6, name: "james", age: "18", marks: 45 },]
  arr = arr.concat(arr1);
  console.log(arr);
  
}
