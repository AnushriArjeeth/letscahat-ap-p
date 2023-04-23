pass="lion";

function adduser()
{
    if("password"==pass){

    user_name=document.getElementById("user_name").value;
    localStorage.setItem("user_name",user_name);
    window.location="room.html";
    } 
    else
    
    {
    user_name=document.getElementById("user_name").value;
    localStorage.setItem("user_name",user_name);
    window.location="room.html";
    }


}