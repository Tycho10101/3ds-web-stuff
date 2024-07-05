var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById("Chat").innerHTML =
    this.responseText;
  }
};
xhttp.open("GET", "https://pictochat-web.glitch.me/data/chat.txt", true);
xhttp.send();