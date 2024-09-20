import { auth, db } from "./Firebase.mjs";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import { setDoc, doc, collection } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";


var signUp = document.getElementById("signUp")
signUp.addEventListener('click', () => {
  var email = document.getElementById("email").value
  var password = document.getElementById("password").value
  var names = document.getElementById("names").value
  var clas = document.getElementById("class").value

  var obj = {
    names: names,
    email: email,
    password: password,
    clas: clas
  }
  // console.log(obj);

  console.log(email, password);
  createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      // Signed up 
      obj.id = userCredential.user.uid;

      const ref = doc(db, "SignUp_Data", userCredential.user.uid)
      setDoc(ref, obj)
        .then((result) => {
          console.log('Data send ', userCredential);
          alert("Data Submit")
          window.location.href="login.html"

        }).catch((err) => {
          console.log('Error ', err);
          alert('Please Enter Correct Data')

        });


    })


})

//  console.log(obj);



