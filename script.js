function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "chat" && password == "programming") {
      window.open("chat.html", "Chat", "width=400,height=400");
    } else {
      document.getElementById("message").innerHTML = "Falscher Benutzername oder Passwort";
    }
  }