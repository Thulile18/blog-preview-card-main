document
.getElementById("loginForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Login successful!");

    window.location.href = "dashboard.html";

});
