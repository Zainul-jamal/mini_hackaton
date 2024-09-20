import { auth, db } from "./Firebase.mjs";
import { collection, getDoc, doc, updateDoc } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";
import { signOut, getAuth } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

let btn = document.getElementById('res_btn')
const edit = document.getElementById('edit')
var table = document.querySelector(".tbody");

btn.addEventListener('click', async () => {
  let result = document.getElementById('result').value
  console.log(auth.currentUser.uid);

  const docRef = doc(db, "Std_Marks", result);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());

    var row = `
  <tr>
          <td style='text-align: center; font-size: 15px;'>${docSnap.data().name}</td>
          <td style='text-align: center;  font-size: 15px;'>${docSnap.data().Course}</td>
          <td style='text-align: center;  font-size: 15px;'>${docSnap.data().student_Id}</td >
          <td style='text-align: center;  font-size: 15px;'>${docSnap.data().marks}</td >
          <td style='text-align: center;  font-size: 15px;'>${docSnap.data().T_marks}</td >
          <td style='text-align: center;  font-size: 15px;'>${docSnap.data().grade}</td>
  </tr>
          `;
                     table.innerHTML = row;
  
  } else {
    console.log("No such document!");
    
    var row2 = `
          <tr>
          <td colspan="6" style='text-align: center'>
          <h3>No such document!</h3>
          <h2>Please Write Correct CNIC Number</h2></td>
          </tr>
          `
                    table.innerHTML = row2

  }
})



edit.addEventListener('click', async () => {
  var fName = prompt("Enter First Name")
  var clas = prompt("Enter class Name")
  const userRef = doc(db, "SignUp_Data", auth.currentUser.uid);

  // Set the "capital" field of the city 'DC'
  await updateDoc(userRef, {
    names: fName,
    clas: clas
  })
    .then((result) => {
document.getElementById("name").innerText =`Updated : ${fName}`
document.getElementById("clas").innerText=`Updated : ${clas}`
      console.log('update successful', result);
      alert('update successful', result);
    }).catch((err) => {
      console.log(err);
    });
})




var signOutButton = document.getElementById("signingOut");

signOutButton.addEventListener('click', () => {
  const auth = getAuth();
  alert('User is signing out');

  signOut(auth).then(() => {
    window.location.href = 'login.html';
  }).catch((error) => {
    console.log("Error during sign out: ", error);
  });
});
