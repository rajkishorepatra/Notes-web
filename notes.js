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
    						    '<img class="card-img-top" src="https://source.unsplash.com/400x300/?'+ title.value + '" alt="Card image cap">' +
  									'<div class="card-body">' +
    									'<h5 class="card-title">'+ title.value +'</h5>' +
     										'<p class="card-text custom-card">'+ text.value +'</p>'+
    								'</div>' + 
  							'</div>';
    list.appendChild(newMessage);
}



var url = "https://goquotes-api.herokuapp.com/api/v1/random?count=1"
var x;

fetch(url)
.then((res) => res.json())
.then((data) => x = data)
.then((x) =>{ 
    document.getElementById("text").innerHTML = x.quotes[0].text; 
    document.getElementById("auth").innerHTML = x.quotes[0].author; 
})
.catch((err) => console.err(err))

function quotes() {
    fetch(url)
    .then((res) => res.json())
    .then((data) => x = data)
    .then((x) =>{ 
        document.getElementById("text").innerHTML = x.quotes[0].text; 
        document.getElementById("auth").innerHTML = x.quotes[0].author; 
    })
    .catch((err) => console.err(err))
}