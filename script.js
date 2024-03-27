let login = document.getElementById("section-login");
let signup = document.getElementById("section-signup");
let registration = document.getElementById("reg-now");
let button = document.getElementById('btn-3');

button.addEventListener("click", (e) => {
    let new_username=document.getElementById('new-username').value;
    let new_password=document.getElementById('new-user-password').value;
    let new_email=document.getElementById('new-user-email').value;
    localStorage.setItem('new-username',new_username);
    localStorage.setItem('new-user-password',new_password);

    login.style.display = "block";
    signup.style.display = "none";
});
registration.addEventListener("click", (e) => {
  login.style.display = "none";
  signup.style.display = "block";
});

let d = document.getElementById("btn");
d.addEventListener("click", chk);
function chk() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
   let new_username= localStorage.getItem('new-username');
   let new_password= localStorage.getItem('new-user-password');
  if(username === "mani" && password  === "mani") {
    window.location.href = "login form.html";
  }
  else if(username === new_username && password ===new_password ) {
    window.location.href = "login form.html";
  }
 
   else {

    alert("invalid username or password");
  }
}
