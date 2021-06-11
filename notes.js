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