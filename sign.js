$(document).ready(function(){ 
    $("#login").on("click", function() {
    var username = document.getElementById("username").value;
     var pwd = document.getElementById("password").value;  
     console.log(username);
        if (username===""){
            alert("please enter your username");
        }
        else if(pwd===""){
            alert("please enter your password");
        }
        else{
            var j = JSON.parse('{"name":"' + username + '","password":"' + pwd + '"}');
    $.ajax({
        url: "http://localhost:3000/users",
        type: "GET",
        dataType: "json",
        data: j,
        success: function(result) {
            console.log(result.length);
            if(result.length===0)
                {
                    alert("login failed")
                }
            else{
                alert("login Successful");
            }
        },
        failure: function(errMsg) {
            alert(errMsg);
        }
    });
        }
    });
    $("#Register").on("click", function(){
        var username=document.getElementById("reguser").value;
        var pass=document.getElementById("regpass").value;
        var confirm=document.getElementById("confirmpass").value;
        if(username=="" || pass=="" || confirm==""){
        alert("please enter the values !!!!");
        }
        else if(pass!==confirm){
            alert("password not matching")
        }
        else{
            var j = JSON.parse('{"name":"' + username + '","password":"' + pass + '"}');
            $.ajax({
        type: "POST",
        data:j,
        url:  "http://localhost:3000/users",
        dataType: "json",
        success: function(){
            alert("Registered successfully");
            document.getElementById("reguser").value="";
            document.getElementById("regpass").value="";
            document.getElementById("confirmpass").value="";
        },
        failure: function(errMsg) {
            alert(errMsg);
        }
  });
        }
    });
});
