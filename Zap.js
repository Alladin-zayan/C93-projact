function addUser()
{
    user_name = document.getEelementById("user_name").value;
    localStorage.setItem("user_name" , user_name);
    window.location = "Zap_room.html";
}