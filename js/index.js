
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCSnoyq6pjwR58sno5UXF52qfYWDRhiNFs",
    authDomain: "contactform-7a892.firebaseapp.com",
    databaseURL: "https://contactform-7a892-default-rtdb.firebaseio.com",
    projectId: "contactform-7a892",
    storageBucket: "contactform-7a892.appspot.com",
    messagingSenderId: "664238210086",
    appId: "1:664238210086:web:002b8c79d10590e3f5fae7"
  };
//initialize firebae project
firebase.initializeApp(firebaseConfig);

// creating reference for database(
const contactformdbobject = firebase.database().ref('contactform')


//get contact form form html file

// if form is submitted it  has event listner submit and calls a function

document.getElementById('ayushform').addEventListener('submit',submitform)

function submitform(e){
    e.preventDefault();
    var firstname = getElementValue('name');
    var email = getElementValue('email');
    var message = getElementValue('message');
    console.log(firstname,email,message)

}

// getting values of all form

const getElementValue = (id)=>{
    return document.getElementById(id).value;

}