const password = document.getElementById("password");
const strengthBar = document.getElementById("strengthBar");
const strengthText = document.getElementById("strengthText");
const suggestions = document.getElementById("suggestions");

const toggleBtn = document.getElementById("toggleBtn");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");


// Password Strength Checker
password.addEventListener("input", checkStrength);

function checkStrength(){

  const value = password.value;

  let strength = 0;

  let tips = [];

  // Length Check
  if(value.length >= 8){
    strength++;
  }else{
    tips.push("• Use at least 8 characters");
  }

  // Uppercase Check
  if(/[A-Z]/.test(value)){
    strength++;
  }else{
    tips.push("• Add uppercase letter");
  }

  // Lowercase Check
  if(/[a-z]/.test(value)){
    strength++;
  }else{
    tips.push("• Add lowercase letter");
  }

  // Number Check
  if(/[0-9]/.test(value)){
    strength++;
  }else{
    tips.push("• Add numbers");
  }

  // Special Character Check
  if(/[@$!%*?&]/.test(value)){
    strength++;
  }else{
    tips.push("• Add special character");
  }

  // Result
  if(strength <= 2){

    strengthBar.style.width = "33%";
    strengthBar.style.background = "red";

    strengthText.innerText = "Weak Password";

  }
  else if(strength <= 4){

    strengthBar.style.width = "66%";
    strengthBar.style.background = "orange";

    strengthText.innerText = "Medium Password";

  }
  else{

    strengthBar.style.width = "100%";
    strengthBar.style.background = "lime";

    strengthText.innerText = "Strong Password";

  }

  suggestions.innerHTML = tips.join("<br>");
}


// Show / Hide Password
toggleBtn.addEventListener("click", ()=>{

  if(password.type === "password"){

    password.type = "text";
    toggleBtn.innerText = "🙈";

  }else{

    password.type = "password";
    toggleBtn.innerText = "👁";

  }

});


// Generate Strong Password
generateBtn.addEventListener("click", ()=>{

  const chars =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@$!%*?&";

  let generatedPassword = "";

  for(let i=0; i<12; i++){

    generatedPassword += chars.charAt(
      Math.floor(Math.random() * chars.length)
    );
  }

  password.value = generatedPassword;

  checkStrength();

});


// Copy Password
copyBtn.addEventListener("click", ()=>{

  navigator.clipboard.writeText(password.value);

  copyBtn.innerText = "Copied!";

  setTimeout(()=>{

    copyBtn.innerText = "Copy Password";

  },2000);

});