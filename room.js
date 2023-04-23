const firebaseConfig = {
    apiKey: "AIzaSyCTeAqJBR7TSqjfrFbvk_10HPKNKHLta7w",
    authDomain: "letschat-9d11e.firebaseapp.com",
    databaseURL: "https://letschat-9d11e-default-rtdb.firebaseio.com",
    projectId: "letschat-9d11e",
    storageBucket: "letschat-9d11e.appspot.com",
    messagingSenderId: "999627240518",
    appId: "1:999627240518:web:f8d2a12ce97c2b1f698647"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
  

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "page.html";
}


function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;

console.log("Room Name - " + Room_names);
   row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
   document.getElementById("output").innerHTML += row;
});});}
getData();


function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "login.html";
}
