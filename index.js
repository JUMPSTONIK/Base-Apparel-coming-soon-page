function validateEmail() {

  let emailInput = document.getElementsByClassName("email-input");
  console.log(emailInput[0].value)

  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (emailInput[0].value.match(validRegex)) {

    let formContainer =  document.getElementsByClassName("email-field")
    let errorIcon =  document.getElementsByClassName("error-icon")
    formContainer[0].classList.remove('error')
    errorIcon[0].classList.add('hide')
    
  } else {
    let formContainer =  document.getElementsByClassName("email-field")
    let errorIcon =  document.getElementsByClassName("error-icon")
    formContainer[0].classList.add('error')
    errorIcon[0].classList.remove('hide')
  }

}