firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      document.getElementById("siformgnup-").style.display='block';
    //   document.getElementById("signup-form").style.display='none';
    // document.getElementById("logout").value='logout';              


    } else {
      // No user is signed in.
      //  document.getElementById("logout").value='logout';

    }logout
  });

function login(){
    
    var usermail=document.getElementById("email").value;
    var userpassword=document.getElementById("password").value;
    // alert(usermail +"" +userpassword)


    auth.signInWithEmailAndPassword(usermail, userpassword)
  .then((user) => {
      
      // window.location.assign("index.html");
      window.location.href = 'index.html';
      alert("login")
      // alert("signin");
    // Signed in 
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert("error: "+errorMessage);
  });
}