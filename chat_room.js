// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCCZ8-tqV09ASLAH9Ux89gRluiNVk8Zc94",
    authDomain: "project-101-84bbc.firebaseapp.com",
    databaseURL: "https://project-101-84bbc-default-rtdb.firebaseio.com",
    projectId: "project-101-84bbc",
    storageBucket: "project-101-84bbc.appspot.com",
    messagingSenderId: "817829339225",
    appId: "1:817829339225:web:b01280181868a2ee029148",
    measurementId: "G-R286R1EPX1"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  localStorage.getItem("username");



  function addRoom()
  {
    room_name = document.getElementById("room_name").value;

     localStorage.setItem("room_name", room_name);

     firebase.database().ref("/").child(room_name).update;

     window.location("kwitter_page.html");
  }

  function getData() {firebase.database().ref ("/").on('value',
function(snapshot) {document.getElementByid("output").innerHTML = 
"";snapshot.forEach(function(childSnapshot) {childKey = 
childSnapshot.key;
          Room_names = childKey;
      //Start code
      console.log("Room names - "+ Room_names);
      row = "<div class='room_name' id = "+Room_names+" onclick ='redirectToRoomName'(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
       //End code
} ) ; } ) ; }
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}


