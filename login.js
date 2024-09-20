import { auth} from "./Firebase.mjs";
import { signInWithEmailAndPassword,getAuth,onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import { collection, getDocs ,doc ,deleteDoc} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

var login = document.getElementById("login");
var delet = document.getElementById("del_data");

login.addEventListener('click', async () => {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    console.log(email, password);

    try {
        // Signing in the user
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user.uid;
        console.log("User signed in:", user);
        alert(`User Sign in ${user}`)


        



        onAuthStateChanged(auth, (user) => {
          console.log(user);
          
          if (user.email == 'admin@gmail.com') {
              window.location.href='adminstrator.html'
              // const uid = user.uid;
              // ...
            } else {
            window.location.href='studentPortal.html'
            // User is signed out
            // ...
          }
        });






      } catch (error) {
        console.error("Error during sign-in:", error);
        alert(error)
      }
    });


        
      

