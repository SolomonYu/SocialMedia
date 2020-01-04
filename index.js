

function login(){
    var username = document.forms[0].elements[0].value;
    var password = document.forms[0].elements[1].value;

    if (localStorage.getItem("users") != null){
        var userFound = false;
        var users = JSON.parse(localStorage.getItem("users"));
        for (var i = 0; i < users.length; i++){
            if (users[i].username == username){
                if (users[i].password == password){
                    console.log("User logged in!");
                    userFound = true;
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