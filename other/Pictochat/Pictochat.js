const response = await fetch("https://pictochat-web.glitch.me/data/chat.txt");
const Chat = document.getElementById("Chat");

gamepadTxt.innerText = response;