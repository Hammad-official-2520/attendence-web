////////////////////////////import//////////////////////////////////
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
 import { getFirestore } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
 import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
 const firebaseConfig = {
   apiKey: "AIzaSyCUXMTbWKE8jAc7SerKepTq8BNdAGbizwo",
   authDomain: "attendence-app-d0e83.firebaseapp.com",
   projectId: "attendence-app-d0e83",
   storageBucket: "attendence-app-d0e83.appspot.com",
   messagingSenderId: "288768015543",
   appId: "1:288768015543:web:a360e1eb0d29a023372132",
   measurementId: "G-8SSZ1EN4GE"
 };
 

    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const db = getFirestore(app);
    const auth = getAuth();




   ////////////////////////////login//////////////////////////////////


try{
    const loginBtn = document.getElementById("login-btn");
    loginBtn.addEventListener("click", () => {
       let name = document.getElementById("email").value;
       let password = document.getElementById("password").value;
       signInWithEmailAndPassword(auth, name, password)
     .then((userCredential) => {
       console.log(name)
       console.log(password)
       const user = userCredential.user;
       window.location.href = "admin.html"
     })
     .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       console.log(errorMessage)
     });
    })
}catch{
    console.log("error")
}

////////////////////////////login end//////////////////////////////////


try{
    let addstudents = document.getElementById("addstudents");
addstudents.addEventListener("click", ()=>{
 let manageStudent = document.getElementById("manageStudent");
 manageStudent.style.display = "flex"
})
}catch{
    console.log("error")
}