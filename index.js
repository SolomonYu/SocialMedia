var currentUser = null;

function login(){
    var username = document.forms[0].elements[0].value;
    var password = document.forms[0].elements[1].value;

    if (localStorage.getItem("users") != null){
        var userFound = false;
        var users = JSON.parse(localStorage.getItem("users"));
        for (var i = 0; i < users.length; i++){
            //console.log(users[i].username);
            if (users[i].username == username){
                if (users[i].password == password){
                    console.log("User logged in!");
                    userFound = true;
                    var status = document.getElementById("status")
                    status.style.color = "green";
                    status.innerHTML = "Logged in!"
                    document.getElementById("loginSection").style.display = "none";
                    document.getElementById("title").innerHTML = "Profile";
                    document.getElementById("profileSection").style.display = "block";

                    currentUser = users[i];
                    var profileInfo = document.getElementById("profileInfo");
                    profileInfo.innerHTML = "Welcome " + currentUser.username + "!"
                    var profileNode = document.createElement("div");
                    profileNode.innerHTML = "Your password is: " + currentUser.password;
                    if (currentUser.date != null){
                        profileNode.innerHTML += "<br>Your birthday is " + currentUser.date;
                    }
                    profileInfo.appendChild(profileNode);

                    break;
                }
            }
        }
        if (!userFound){
            showErrorMessage("User not found!");
        }
    }
    else{
        showErrorMessage("No users found!");
    }
}

function showErrorMessage(message){
    console.log("Showing error message: " + message);
    var status = document.getElementById("status")
    status.innerHTML = message;
    status.style.color = "red";
}

function showRegister(){
    document.getElementById("loginSection").style.display = "none";
    document.getElementById("registerSection").style.display = "block";
    document.getElementById("title").innerHTML = "Register";
}

function showLogin(){
    document.getElementById("loginSection").style.display = "block";
    document.getElementById("registerSection").style.display = "none";
    document.getElementById("title").innerHTML = "Login";
}

function updateStatus(){
    if (currentUser != null){
        var statusInput = document.getElementById("profileStatus").value;
        document.getElementById("currentStatus").innerHTML = statusInput;
        var users = JSON.parse(localStorage.getItem("users"));
        for (var i = 0; i < users.length; i++){
            if (users[i].username == currentUser.username){
                currentUser.status = statusInput;
                users[i] = currentUser;
                localStorage.setItem("users", JSON.stringify(users)); 
            }
        }
    }
    

}