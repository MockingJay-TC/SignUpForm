// Input Fields
let nameInput = document.querySelector("input[name = 'name']");
let emailInput = document.querySelector("input[name = 'email']");
let passwordInput = document.querySelector("input[name = 'password']");
let confirmPasswordInput = document.querySelector(
  "input[name = 'conPassword']"
);
let check = document.querySelector("input[name = 'agree']");
let form = document.getElementById("form");
let errorElement = document.getElementById("error");

// Submit Button
let submitBtn = document.getElementById("submitBtn");

console.log(errorElement);
console.log(form);

// User Type Fields
let userType = document.querySelectorAll("input[name = 'sect']");
let inputs = document.querySelectorAll("input");
let account = document.querySelector(".selectType")

// selecting a userType to use
for (input of userType) {
  input.addEventListener("click", () => {
    for (item of inputs) {

      item.disabled = false;
      submitBtn.disabled = false;
      account.style.display = "none";
    }
  });
}

form.addEventListener("submit", (e) => {
  let messages = [];
  let details = [];
  if (nameInput.value === "" || nameInput.value == null) {
    messages.push("Name is required");
  } else {
    details.push(nameInput.value);
    document.querySelector('[data-testid=name]').style.borderColor = '#49a9e3;';
  }
  if (emailInput.value === "" || emailInput.value == null) {
    messages.push("Email is required");
  } else {
    details.push(emailInput.value);
    document.querySelector('[data-testid=name]').style.borderColor = '#49a9e3;';
  }

  if (passwordInput.value.length <= 6) {
    messages.push("Password must be longer than 6 characters");
    
  }

  if (passwordInput.value.length > 12) {
    messages.push("Password must be less than 13 characters");
  }

  if (passwordInput.value === "password") {
    messages.push("Password cannot be password");
  }
  if (passwordInput.value != confirmPasswordInput.value) {
    messages.push("Passwords Don't Match");
  }
  if (passwordInput.value.search(/[A-Z]/) == -1){
    messages.push("Atleast 1 upper letter in password");
  }
  if (passwordInput.value.search(/[0-9]/) == -1){
    messages.push("Atleast 1 number in password");
  }
  if (passwordInput.value.search(/[!\@\#\$\%\^\&\*\(\)\}\{\;\'\:\"\,\.\<\>\/\?}]/) == -1){
    messages.push("Atleast 1 special character in password");
  }
  

  if (messages.length > 0) {
    e.preventDefault();
    errorElement.style.display = "block";
    errorElement.innerText = messages.join(" \n ");
    console.log(errorElement.innerText);
  } else {
    // errorElement.innerText = details.join(' \n ')
    errorElement.innerText = "Successfully Completed";
    alert("Successfully Completed")
  }
});
