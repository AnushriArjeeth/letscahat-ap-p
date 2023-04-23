function logout() 
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
        window.location = "login.html";
}
    

