let firstName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName");
let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirmPassword");
let email = document.querySelector("#email");
let phone = document.querySelector("#phone");
let form = document.querySelector("#register");
let successAlert = document.querySelector("#successAlert");
let dangerAlert = document.querySelector("#dangerAlert");

let passwordHelper = document.querySelector("#passwordHelper");
let confirmPasswordHelper = document.querySelector("#confirmPasswordHelper");


// submit event 
form.addEventListener("submit",event =>{
  event.preventDefault();
  
  // release the correct data
  if (checkEmptyFeild(firstName) && checkEmptyFeild(lastName) && checkEmptyFeild(password) && checkEmptyFeild(confirmPassword) && checkEmptyFeild(email) && checkEmptyFeild(phone)
  ){
    if (!checkPasswordLength()) {
      checkPasswordLength();
      return;
      
    }
    if (!checkConfirmPassword()) {
      checkConfirmPassword();
      return;
    }
    successAlert.textContent = "You are successfully registered!.";
    successAlert.classList.add("d-block");
    form.reset();
    
    
  }
  else{
  // call checkEmptyFeild functions
  checkEmptyFeild(firstName);
  checkEmptyFeild(lastName);
  checkEmptyFeild(password);
  checkEmptyFeild(confirmPassword);
  checkEmptyFeild(email);
  checkEmptyFeild(phone);
   successAlert.classList.remove("d-block");
  }
   
})





// checkEmptyFeilds
function checkEmptyFeild(feild){
  if(feild.value === ""){
    feild.classList.add("border","border-danger");
    dangerAlert.textContent = "All feilds must not empty...";
    dangerAlert.classList.add("d-block");
    return;
  }
  else{
    feild.classList.remove("border","border-danger");
    dangerAlert.classList.remove("d-block");
    return true;
  }
  
}


// checkPasswordLength
function checkPasswordLength(){
  if(password.value.length < 6){
    password.classList.add("border","border-warning");
    passwordHelper.textContent = "at least six character...";
    passwordHelper.classList.add("text-danger");
    return false;
    
  }
  else{
     password.classList.remove("border","border-warning");
      passwordHelper.textContent = "";
      return true;
  }
}


// checkConfirmPassword 
function checkConfirmPassword(){
if (confirmPassword.value != password.value) {
  password.classList.add("border","border-warning");
  confirmPasswordHelper.textContent = "Must be same...";
  confirmPasswordHelper.classList.add("text-danger");
    return false;
  
}else{
    password.classList.remove("border","border-warning");
    confirmPasswordHelper.textContent = "";
    
      return true;
  }
  
}