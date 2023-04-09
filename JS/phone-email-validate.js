//validate phone number/email
function validatePhoneNumber(input_str) {
    const re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  
    return re.test(input_str);
  }
  function validateEmail(input_str) {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(input_str);
  }
  function validateForm(event) {
    let input_str = document.getElementById('myform_phone').value;
    if (!validatePhoneNumber(input_str) && (!validateEmail(input_str))) {
  
      document.getElementById('phone_error').classList.remove('hidden');
    }
    else {
  
      document.getElementById('phone_error').classList.add('hidden');
      // alert("validation success")
    }
    event.preventDefault();
  
  }
  document.getElementById('myform').addEventListener('change', validateForm);