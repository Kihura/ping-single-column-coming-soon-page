window.onload = function() {
    // your JavaScript code goes here
    const texterror = document.querySelector(".error");
    const Input = document.querySelector("#email");
    const button = document.querySelector(".button");
    button.addEventListener("click", function() {
      // check if email is in the correct format using a regex
        if (!Input.value.match(/^\S+@\S+\.\S+$/) || Input.value.trim() !== "") {
        // if email is not in correct format and input is not empty, show error message
        texterror.style.display="block";
        Input.style.border="red solid 0.1px"
        } else {
        // if email is in correct format or input is empty, hide error message
        texterror.style.display="none";
        Input.style.border="";

        }
    }); }