function myfunction() {
    var newMessage = document.createElement("li");
    var list = document.getElementById("messages");
    newMessage.innerHTML= document.getElementById("task").value;
    list.appendChild(newMessage);
    task.value="";
}