// Input Fields
let nameInput = document.querySelector("input[name = 'name']");
let emailInput = document.querySelector("input[name = 'email']");
let passwordInput = document.querySelector("input[name = 'password']");
let confirmPasswordInput = document.querySelector("input[name = 'conPassword']");
let check = document.querySelector("input[name = 'agree']");
let form = document.getElementById("form");
let errorElement = document.getElementById("error");
console.log(errorElement);
console.log(form);

// User Type Fields
let userType = document.querySelectorAll("input[name = 'sect']");


// selecting a userType to use
for (input of userType) {
    input.addEventListener('click', () => {
        nameInput.disabled = false;
        // nameInput.value = "";
        emailInput.disabled = false;
        passwordInput.disabled = false;
        confirmPasswordInput.disabled = false;
        check.disabled = false; 
        submitBtn.disabled = false;

    })
}



form.addEventListener('submit', (e) => {
    let errorMessages = [];


    if (nameInput.value === '' || nameInput.value == null){
        errorMessages.push('Name is Required');
        console.log(errorMessages);
        // nameInput.value = "name is required";
        // nameInput.style('color', 'tomato');
    }

    if (errorMessages.length > 0) {
        e.preventDefault();
        errorElement.innerText = errorMessages.join(',');
        console.log(errorElement.innerText);
    }

})
// Submit Button
// let submitBtn = document.getElementById("submitBtn");
// console.log(submitBtn);
// let errorMessages = [];
    

// submitBtn.addEventListener('click', () => {
//     console.log("clicked");
//     // console.log(nameInput.value);
    
//     // if ((nameInput.value === '') || (nameInput.value == null)){
//     //     errorMessages.push('Name is Required');
//     //     console.log(errorMessages);
//     //     // nameInput.value = "name is required";
//     //     // nameInput.style('color', 'tomato');
     
//     // }

//     // if (errorMessages.length >= 0) {
//     //     // e.preventDefault();
//     //     errorElement.innerText = errorMessages.join(',');
//     //     console.log(errorElement.innerText);
//     // }
// })