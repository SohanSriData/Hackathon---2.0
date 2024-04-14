// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth , GoogleAuthProvider, signInWithPopup} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
  const firebaseConfig = {
  apiKey: "AIzaSyAjgSNRMb9e2IMg9m05oFmOKYnYJLaWrGI",
  authDomain: "hackerman-fda90.firebaseapp.com",
  projectId: "hackerman-fda90",
  storageBucket: "hackerman-fda90.appspot.com",
  messagingSenderId: "636773764660",
  appId: "1:636773764660:web:44e2c7ce8a9e11b8ca4461"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en';
const provider = new GoogleAuthProvider();

const googleLogin = document.getElementById("login_button");
googleLogin.addEventListener("click", function() {
  signInWithPopup(auth, provider)
.then((result) => {
  
  const credential = GoogleAuthProvider.credentialFromResult(result);
  const token = credential.accessToken;
  const user = result.user;
  console.log(user);
  window.location.href="../Home Page/home.html";
}).catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
});
  
})