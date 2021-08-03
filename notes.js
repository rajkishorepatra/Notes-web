

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

let notes_list = [];
let list = document.getElementById("messages");
function myfunction() {
    var text = document.getElementById("textarea");
    var title = document.getElementById("noteTitle");
    var newMessage = document.createElement("div");
    newMessage.classList.add("text-dark");
    newMessage.classList.add("col-md-3");
    newMessage.classList.add("col-sm-12");

    newMessage.innerHTML = '<div class="card mt-3">' +
        '<img class="card-img-top" src="https://source.unsplash.com/400x300/?' + title.value + '" alt="Card image cap">' +
        '<div class="card-body">' +
        '<h5 class="card-title">' + title.value + '</h5>' +
        '<p class="card-text custom-card">' + text.value + '</p>' +
        '</div>' +
        '</div>';
    list.appendChild(newMessage);

    var id = firebase.auth().currentUser.uid;
    firebase.firestore().collection('Notes').add({
        uid : id,
        todo_title : title.value,
        todo_body : text.value,
    });
    console.log('Added Successfully');
    if (document.getElementById(textarea).value=text.value) {
        document.getElementById(textarea).value=" ";
    };
}


//  notes with picture add ends








// onloading the page, notes will load
  
  
function notes(){
    var x = JSON.parse(localStorage.user);
    var id = x.uid;
    console.log(id);
    
    firebase.firestore()
        .collection('Notes')
        .where('uid', '==', id)
        .get()
        .then((queryData) => { queryData.forEach((doc) => notes_list.push(doc.data())) })
        .then(() => {
            notes_list.forEach((todo) => {
                console.log(todo);
                var newDiv = document.createElement("div");
                newDiv.classList.add("text-dark");
                newDiv.classList.add("col-md-3");
                newDiv.classList.add("col-sm-12");
                newDiv.innerHTML = `
            <div class="container">
                <div id="messages" class="mt-4"></div>
            </div>
            <div class="card mt-3">
                <img class="card-img-top" src="https://source.unsplash.com/400x300/?${todo.todo_title}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${todo.todo_title}</h5>
                    <p class="card-text custom-card">${todo.todo_body}</p>
                </div>
            </div>
            `
            document.getElementById("messages").appendChild(newDiv);
            })
        })

    console.log("outside of promise", notes_list);
}

// onloading the page, notes will load ends








            // RANDOM QUOTE STARTS

const quote = document.querySelector("#text");
const author = document.querySelector("#auth");

function quotes() {
    fetch("http://quotable.io/random")
        .then(res => res.json())
        .then(data => {
            text.innerHTML = data.content;
            document.getElementById("auth").innerHTML = data.author;
        })
}


            // RANDOM QUOTE ENDS