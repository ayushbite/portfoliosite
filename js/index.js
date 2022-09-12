
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
  // if the database not avialble it will created the database evey time
const contactformdbobject = firebase.database().ref('contactform')


//get contact form form html file

// if form is submitted it  has event listner submit and calls a function

document.getElementById('ayushform').addEventListener('submit',submitform)

function submitform(e){
    e.preventDefault();
    var firstname = getElementValue('name');
    var email = getElementValue('email');
    var message = getElementValue('message');
    save(firstname,email,message);

    // now i'm alerting the message for feedback
    document.querySelector('.customalert').style.display="block"

    // after 2 second remmoving the alert

    setTimeout(() => {
      document.querySelector('.customalert').style.display="none"
    }, 2000);

    //resseting the form
    document.getElementById('ayushform').reset()

}

//save the message to the firebase
const save = (firstname,email,message) => {
  // referance to the db
  var newcontactform = contactformdbobject.push()

  newcontactform.set({
    firstname:firstname,
    email:email,
    message:message

  })

}

// getting values of all form

const getElementValue = (id)=>{
    return document.getElementById(id).value;

}


// for scroling man
//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


