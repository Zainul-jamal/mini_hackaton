import {  db } from "./Firebase.mjs";
import { collection, setDoc,doc } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";




var names = document.getElementById("name")
var cnic = document.getElementById("cnic")
var stedId = document.getElementById("id")
var Course = document.getElementById("Course")
var marks = document.getElementById("marks")
var t_marks = document.getElementById("t_marks")
var grade = document.getElementById("grade")
var submit = document.getElementById("submit")


submit.addEventListener("click",async()=>{
  localStorage.setItem('Std_CNIC',cnic.value)
    var obj={
       name:names.value,
       CNIC:cnic.value,
       student_Id:stedId.value,
       Course:Course.value,
       marks:marks.value,
       T_marks:t_marks.value,
       grade:grade.value,
    }


  var std_cnic =localStorage.getItem('Std_CNIC')
  console.log(std_cnic);
  
const ref = doc(db,"Std_Marks",std_cnic)
setDoc(ref,obj)
.then((result) => {
  console.log('Data send ',result);
  alert("Data Submit")
  window.location.href='adminstrator.html'
  
}).catch((err) => {
  console.log('Error ',err);
  alert('Please Correct Data')
  
});


})