import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import {
  doc,
  setDoc,
  getFirestore,
  getDoc,
  collection,
  getDocs,
  addDoc,
  orderBy,
  onSnapshot,
  


} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-storage.js";
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




try {
  let createclass = document.getElementById("createclass");
  createclass.addEventListener("click", ()=>{
   let manahe = document.getElementById("manahe");
   manahe.style.display = "none"
   let courseclasses = document.getElementById("courseclasses")
   courseclasses.style.display = "none"
   let manageclass = document.getElementById("manageclass")
   manageclass.style.display = "flex"

  })
} catch (error) {
  
}
try{
  let addstudents = document.getElementById("addstudents");
addstudents.addEventListener("click", ()=>{
  let manahe = document.getElementById("manahe");
  manahe.style.display = "block"
 let manageclass = document.getElementById("manageclass")
 manageclass.style.display = "none"
 let courseclasses = document.getElementById("courseclasses")
 courseclasses.style.display = "none"
 let manageStudent = document.getElementById("manageStudent");
 manageStudent.style.display = "block"
 

})
}catch{
   console.log("error")
}



try {
  let allclass = document.getElementById("allclass")
  allclass.addEventListener("click", async ()=>{
    let manahe = document.getElementById("manahe");
    manahe.style.display = "block"
    console.log("hellow")
    let manageclass = document.getElementById("manageclass")
    manageclass.style.display = "none"
    let manageStudent = document.getElementById("manageStudent");
    manageStudent.style.display = "none"
    let courseclasses = document.getElementById("courseclasses")
    courseclasses.style.display = "block"
    const querySnapshot = await getDocs(collection(db,"courses"));
    querySnapshot.forEach((doc) => {
        console.log(doc.data())
        courseclasses.innerHTML = `
        <div >
        <h1>Teacher: <span class="doctime">${doc.data().teachername}</span> </h1>
        <h2>Timing: <span class="doctime">${doc.data().timing}</span> </h2>
        <h2>Section: <span class="doctime">${doc.data().section}</span> </h2>
        <h2>CourseName: <span class="doctime"> ${doc.data().coursename}</span></h2>
        <h2>Batch Number: <span class="doctime">${doc.data().batchno}</span> </h2>
        </div>
        `
    })
  

  })
  
} catch (error) {
  
}
try {
  let createclass = document.getElementById("createclassess");
  createclass.addEventListener("click", function(){
  let coursename = document.getElementById("coursename").value
  let teachername = document.getElementById("teacher").value
  let  timing = document.getElementById("classtime").value
  let section = document.getElementById("section").value
  let batchno = document.getElementById("batchnumber").value
  let classedu = document.getElementById("classschedule").value
  let firDoc = doc(db, "courses", coursename + batchno + timing);
   setDoc(firDoc, {
    coursename : coursename,
    teachername: teachername,
    timing : timing,
    section : section,
    batchno : batchno,
    classedu : classedu,
    uid : coursename + batchno + timing
  });

  })
} catch (error) {
  
}
const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click" ,() => {
  let name1 = document.getElementById("name1");
  let fathername = document.getElementById("fathername");
  let select = document.getElementById("select");
  let rollno = document.getElementById("rollno");
  let email = document.getElementById("contact");
  let cnic = document.getElementById("cnic");
  let myFile = document.getElementById("file");
  let file = myFile.files[0];
  console.log(file)
  let firDoc = doc(db, "students", + Math.random());
  setDoc(firDoc, {
    name1 : name1,
    fathername : fathername,
   timing : timing,
   select : select,
   batchno : batchno,
   rollno : rollno,
   cnic : cnic,
   email : email,
 });










   
      // const  uploadFiles =  (file) => {
      //   return new Promise((resolve, reject) => {
      //     const storage = getStorage();
      //     const auth = getAuth();
      //     let uid = auth.currentUser.uid;
      //     const storageRef = ref(storage, `users/${uid}.png`);
      //     const uploadTask = uploadBytesResumable(storageRef, file);
      //     uploadTask.on(
      //       "state_changed",
      //       (snapshot) => {
      //         const progress =
      //           (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      //         console.log("Upload is " + progress + "% done");
      //         switch (snapshot.state) {
      //           case "paused":
      //             console.log("Upload is paused");
      //             break;
      //           case "running":
      //             console.log("Upload is running");
      //             break;
      //         }
      //       },
      //       (error) => {
      //         reject(error);
      //       },
      //       () => {
      //         getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
      //           resolve(downloadURL);
      //           let url = await downloadURL
      //           let firDoc = doc(db, "students", Math.random());
      //           await setDoc(firDoc, {
      //             name : name1,
      //             fathername: fathername,
      //             select : select,
      //             contact : contact,
      //             rollno : rollno,
      //             classedu : classedu,
      //             cnic : cnic,
      //             profile: url
      //           });
      //         });
      //       } 
      //     ); let url =   uploadFiles(file);
      //   }); 
      // };






    








  // let firDoc = doc(db, "students",);
  //  setDoc(firDoc, {
  //   name : name1,
  //   fathername: fathername,
  //   select : select,
  //   contact : contact,
  //   rollno : rollno,
  //   classedu : classedu,
  //   cnic : cnic,

   
  // });
});