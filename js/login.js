var username=document.getElementById("floatingInput");
var pass=document.getElementById("floatingPassword");
var labeluser=document.getElementById("userlabel");
var labelpass=document.getElementById("passwrd");
var formsubmit=document.getElementById("formsubmit");
function validateLogin()
{
   
   
     if((username.value=="admin")&&(pass.value=="12345")){
      labeluser.innerHTML="Valid username";
      labeluser.style.color="green";
      labelpass.innerHTML="Valid Password" ;
      labelpass.style.color="green";
      return true;
    }
    else if(username.value=="admin"){
        labeluser.innerHTML="Valid username";
        labeluser.style.color="green";
        return false;
    } 
    else if(username.value!="admin"){
        labeluser.innerHTML="Incorrect Username";
        labeluser.style.color="red";
        return false;

    }
    else if(pass.value!="12345"){
        labelpass.innerHTML="Incorrect password ";
        labelpass.style.color="red";
        return false;
    }
       
    // else if(pass.value=="12345"){
    //     labelpass.innerHTML="Valid PAssword";
    //     labelpass.style.color="green";
    //     return true;
        
    // }
    else{
        alert("Enter valid Username and Password");
        return false;
    }

}

// function validation(){
//     formsubmit.setAttribute("action","todo.html");
// }

// function validate(){
//     check(validation);
// }

