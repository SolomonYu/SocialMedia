

function register(){
    var username = document.forms[0].elements[0].value;
    var password = document.forms[0].elements[1].value;
    var date = document.forms[0].elements[2].value;

    console.log("Username: " + username);
    console.log("Password: " + password);

    var userExists = false;
    if(localStorage.getItem("users") != null){
        var users = JSON.parse(localStorage.getItem("users"));
        for(var i = 0; i < users.length; i++){
            if(users[i].username == username){
                userExists = true;
                break;
            }
        }
    }

    if (username == "" || password == ""){
        showErrorMessage("Please fill in all the fields.");
    }
    else if (username == password){
        showErrorMessage("Username cannot be the same as password.");
    }
    else if(username.search("@") <= username.search(".")){
        showErrorMessage("Username must be an email");
    }
    else if(password == "qwerty"){
        showErrorMessage("Pasword is too simple");
    }
    else if (userExists){
        showErrorMessage("User already exists!");
    }
    else{
        var userObject = {
            username: username,
            password: password,
            date: date
        };

        var users = [];
        if(localStorage.getItem("users") != null){
            users = JSON.parse(localStorage.getItem("users")); 
            console.log(users);           
        }
        users.push(userObject);

        localStorage.setItem("users", JSON.stringify(users));
        var status = document.getElementById("status")
        status.innerHTML = "User registered!";
        status.style.color = "green";   
        
        document.forms[0].reset();
    }


    
}

function showErrorMessage(message){
    console.log("Showing error message: " + message);
    var status = document.getElementById("status")
    status.innerHTML = message;
    status.style.color = "red";
}


