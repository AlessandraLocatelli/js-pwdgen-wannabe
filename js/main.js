function submitForm(event)
{
   
  event.preventDefault(); 
 

  let firstNameInput = document.getElementById('firstNameInput').value; 
  let lastNameInput = document.getElementById('lastNameInput').value; 
  let favColorInput = document.getElementById('favColorInput').value; 
  let firstNumberInput = document.getElementById('firstNumberInput').value; 
  let secondNumberInput = document.getElementById('secondNumberInput').value; 
  let userChoice = document.querySelector('.form-select').value;
  

  let division = firstNumberInput/secondNumberInput; 

  let password = firstNameInput+lastNameInput+favColorInput+division; 

  if(userChoice == "1")
  {
     
    let randomNumber = Math.floor(Math.random()*11); 
    password += randomNumber; 
      


  }

  console.log(password);

  document.getElementById("passwordContainer").classList.remove("d-none"); 
  document.getElementById("mainContainer").classList.add("d-none"); 
  document.getElementById("generatedPassword").innerHTML = password; 




}
