const firebaseConfig = {
    apiKey: "AIzaSyD77nZ-acK7hK7QicHBqNTqebb8x0Rf738",
    authDomain: "projeto2mibtestedxn.firebaseapp.com",
    projectId: "projeto2mibtestedxn",
    storageBucket: "projeto2mibtestedxn.appspot.com",
    messagingSenderId: "438864125967",
    appId: "1:438864125967:web:067a0e315ddf1e7f21837a"
  };

  firebase.initializeApp(firebaseConfig);

  function logout(){
    firebase.auth().signOut().then(()=>{
        alert('User Signed Out')
    })
  }
/*
const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');
const loginButton = document.getElementById('loginButton');

loginButton.addEventListener('click', () => {
    const email = emailField.value;
    const password = passwordField.value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // User succesfully loged-in 
            const user = userCredential.user;
            console.log('User loged-in:', user);
        })
        .catch((error) => {
            // Authentication Errors
            const errorMessage = error.message;
            console.error('Authentication Error:', errorMessage);
        });
});
*/