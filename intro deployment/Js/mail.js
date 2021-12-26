// Your web app's Firebase configuration
const mainConfig = {
  apiKey: "AIzaSyBKTjTMy2Trfs79UHuXHOrgFKSAEQnUYV4",
  authDomain: "vent-92591.firebaseapp.com",
  databaseURL: "https://vent-92591-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "vent-92591",
  storageBucket: "vent-92591.appspot.com",
  messagingSenderId: "832851875687",
  appId: "1:832851875687:web:7b3acbe6da4a15371b01c2"
};
// Initialize Firebase
firebase.initializeApp(mainConfig);

// Refernece contactInfo collections
let contactInfo = firebase.database().ref("Inventrix_regs");

// Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  let roll = document.getElementById("roll").value
  let phone = document.getElementById("phone").value
  console.log(name, email, message,roll,phone);
  if(name=="" || email=="" || roll =="" || phone==""){
    return alert("Fill again Cabron");
  }
  else{
  saveContactInfo(name, email, message,roll,phone);
  document.querySelector(".status").style.display ="block";
  setTimeout(() => {
    document.querySelector(".status").style.display="none";
  },6900);
  setTimeout(() => {
    window.open('main.html', '_self');
  },6900);
  document.querySelector(".contact-form").reset();
  }
}

// Save infos to Firebase
function saveContactInfo(name, email, message,roll,phone) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    roll: roll,
    name: name,
    email: email,
    message: message,
    phone: phone,
    
  });
}