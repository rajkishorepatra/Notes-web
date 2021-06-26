
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
    alert("Signed up");
}

// firebase.auth().onAuthStateChanged((user) => {
//     if (user) {
//         location.replace("notes.html")
//     }
//     // else {
//     //     window.location = ("/index.html");
//     // }
// })

function checkuser() {
    var data = localStorage.user || null;
    console.log(data);
    if (data === null) {
        alert("Login to start adding notes");
        window.location = "/login.html";
    }
    // else {
    //     alert("Login to start adding notes");
    //     window.location = "/login.html";
    // }
}

function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => localStorage.setItem("user", JSON.stringify(user.user)))
        .then(() => window.location = "/index.html")
        .catch((error) => {
            document.getElementById("error").innerHTML = error.message
        })
    // firebase.auth().onAuthStateChanged((user) => {
    //     if (user) {
    //         window.location = "/notes.html";
    //     }
    // })
}

function logout() {
    firebase.auth().signOut().then(localStorage.removeItem('user')).then(window.location = '/index.html');
}

function forgotpass() {
    const email = document.getElementById("email1").value;
    firebase.auth().sendPasswordResetEmail(email)
        .then(() => {
            alert("Reset link sent to your email id!")
        })
        .catch((error) => {
            document.getElementById("error").innerHTML = error.message
        })
}

//   FIREBASE AUTHENTICATION ENDS




// SPEECH TO TEXT STARTS

sptotext = document.querySelector('#sptotext')
SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
recognition = new SpeechRecognition();
recognition.onstart = function () {
    console.log("Now Start Talking!");
}
recognition.onresult = function (e) {
    textarea.textContent += e.results[0][0].transcript + '. ';
}
sptotext.addEventListener('click', function () {
    recognition.start();
})

// SPEECH TO TEXT ENDS



//  notes with picture add starts

var list = document.getElementById("messages");
function myfunction() {
    var text = document.getElementById("textarea");
    var title = document.getElementById("noteTitle");
    var newMessage = document.createElement("div");
    newMessage.classList.add("text-dark");
    newMessage.classList.add("col-md-3");
    newMessage.classList.add("col-sm-12");
    newMessage.classList.add("col-sm-12");
    newMessage.innerHTML = '<div class="card mt-3">' +
        '<img class="card-img-top" src="https://source.unsplash.com/400x300/?' + title.value + '" alt="Card image cap">' +
        '<div class="card-body">' +
        '<h5 class="card-title">' + title.value + '</h5>' +
        '<p class="card-text custom-card">' + text.value + '</p>' +
        '</div>' +
        '</div>';
    list.appendChild(newMessage);
}

//  notes with picture add ends



// RANDOM QUOTE STARTS

var url = "https://quotes.rest/quote/random?language=en&limit=1"
var x;
fetch(url)
    .then((res) => res.json())
    .then((data) => x = data)
    .then((x) => {
        document.getElementById("text").innerHTML = x.quotes[0].text;
        document.getElementById("auth").innerHTML = x.quotes[0].author;
    })
    .catch((err) => console.err(err))

function quotes() {
    fetch(url)
        .then((res) => res.json())
        .then((data) => x = data)
        .then((x) => {
            document.getElementById("text").innerHTML = x.quotes[0].text;
            document.getElementById("auth").innerHTML = x.quotes[0].author;
        })
        .catch((err) => console.log(err));
}

            // RANDOM QUOTE ENDS