
//   FIREBASE AUTHENTICATION STARTS

var firebaseConfig = {
    apiKey: "AIzaSyCrKl1OSs9nu2xEcZ184HZJQt_zkPVbT6Y",
    authDomain: "basic-todo-app-ee711.firebaseapp.com",
    databaseURL: "https://basic-todo-app-ee711.firebaseio.com",
    projectId: "basic-todo-app-ee711",
    storageBucket: "basic-todo-app-ee711.appspot.com",
    messagingSenderId: "1009903618322",
    appId: "1:1009903618322:web:3ad00f1a7a6987f5d3cbcb",
    measurementId: "G-Q0FRHQ82X7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const auth = firebase.auth();

function signup() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    alert("Signed up").then(() => window.location = "dashboard.html");
}

function checkuser() {
    var data = localStorage.user || null;
    console.log(data);
    if (data === null) {
        alert("Login to start adding notes");
        window.location = "/login.html";
    }
}

function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => localStorage.setItem("user", JSON.stringify(user.user)))
        .then(() => window.location = "dashboard.html")
        .catch((error) => {
            document.getElementById("error").innerHTML = error.message
        })
}

function logout() {
    firebase.auth().signOut().then(localStorage.removeItem('user')).then(window.location = 'index.html');
}

function forgotpass() {
    const email = document.getElementById("email").value;
    firebase.auth().sendPasswordResetEmail(email)
        .then(() => {
            alert("Reset link sent to your email id!")
        })
        .catch((error) => {
            document.getElementById("error").innerHTML = error.message
        })
}

//   FIREBASE AUTHENTICATION ENDS   