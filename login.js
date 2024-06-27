var attempt = 3;

function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username == "Khushi-Kaushik" && password == "Khushi1790!" ){
        alert("Logged In Successfully");
        window.location = "success.html";
        return false;
    }
    else{
        attempt --;
        alert ("Incorrect password or username, You are left with " + attempt + " attempts!!");
        if(attempt == 0){
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            return false;
        }
    }
}