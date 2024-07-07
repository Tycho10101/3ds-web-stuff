setInterval(GetChat, 3000);
GetChat()
var usernameVar;

function GetChat() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("Chat").innerHTML =
			this.responseText;
		}
	};
	xhttp.open("GET", "https://pictochat-web.glitch.me/data/chat.txt", true);
	xhttp.send();
} 

function username() {
	usernameVar = document.getElementById("Text").value;
	document.getElementById("input").innerHTML = usernameVar+':<input type="text" id="Text" placeholder="Message"><button onclick="message()">Send</button>';
}

function message() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			LastMessage =
			this.responseText;
		}
	};
	xhttp.open("GET", "https://pictochat-web.glitch.me/send/"+usernameVar+"/"+document.getElementById("Text").value, true);
	xhttp.send();
	document.getElementById("input").innerHTML = usernameVar+':<input type="text" id="Text" placeholder="Message"><button onclick="message()">Send</button>';
}