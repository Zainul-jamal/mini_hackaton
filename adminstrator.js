import { auth, db } from "./Firebase.mjs";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";
import { signOut ,getAuth} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";







var data = document.getElementById('get_data')
data.addEventListener('click',async()=>{
  console.log('ok get  data btn');

  
  const querySnapshot = await getDocs(collection(db, "Std_Marks"));
  
  // Selecting the table body
  var table = document.querySelector(".tbody");
  
  querySnapshot.forEach((doc) => {
    console.log(doc.id, "=>", doc.data());
    
    var row = `
  <tr>
          <td style='text-align: center; font-size: 15px;'>${doc.data().name}</td>
          <td style='text-align: center;  font-size: 15px;'>${doc.data().Course}</td>
          <td style='text-align: center;  font-size: 15px;'>${doc.data().student_Id}</td >
          <td style='text-align: center;  font-size: 15px;'>${doc.data().marks}</td >
          <td style='text-align: center;  font-size: 15px;'>${doc.data().T_marks}</td >
          <td style='text-align: center;  font-size: 15px;'>${doc.data().grade}</td>
  </tr>
          `;
                     table.innerHTML += row;
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
        