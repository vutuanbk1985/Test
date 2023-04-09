

//submit and close button event
const receiptPopup = document.getElementById("receipt-popup");
const continueBtn = document.getElementById('continue-btn');
const closebtn = document.getElementById('close-btn');
const outline = document.getElementById('outline');






// form validate function
let lastName, address, city, postalCode, phoneEmail, firstName;
function testInput() {
  lastName = document.forms["info-form"]["last-name"].value;
  address = document.forms["info-form"]["address"].value;
  city = document.forms["info-form"]["city"].value;
  postalCode = document.forms["info-form"]["postal"].value;
  phoneEmail = document.getElementById('myform_phone').value;
  firstName = document.getElementById("first-name").value;

  if (lastName !== "" && address !== "" && city !== "" && postalCode !== "" && !isNaN(postalCode) && phoneEmail !== "") {
    document.getElementById('phone_error').classList.add('hidden');
    document.getElementById('last_name_error').classList.add('hidden');
    document.getElementById('address_error').classList.add('hidden');
    document.getElementById('city_error').classList.add('hidden');
    document.getElementById('postal_error').classList.add('hidden');
    return true;
  }
  // alert("Required information must be filled out");
  if (phoneEmail === "") document.getElementById('phone_error').classList.remove('hidden');
  else document.getElementById('phone_error').classList.add('hidden');

  if (lastName === "") document.getElementById('last_name_error').classList.remove('hidden');
  else document.getElementById('last_name_error').classList.add('hidden');

  if (address === "") document.getElementById('address_error').classList.remove('hidden');
  else document.getElementById('address_error').classList.add('hidden');

  if (city === "") document.getElementById('city_error').classList.remove('hidden');
  else document.getElementById('city_error').classList.add('hidden');

  if (isNaN(postalCode) || postalCode === "") document.getElementById('postal_error').classList.remove('hidden');
  else document.getElementById('postal_error').classList.add('hidden');

}

// window.focusout = (event)  =>  {
//   if (testInput())  {
//     event.preventDefault();

//   } else event.preventDefault();
// }
document.getElementById('info-form').onchange = (event) => {
  testInput();
  let d = new Date()//.toLocaleTimeString();
  d.setFullYear(2023);
  document.getElementById('payment-time').innerHTML = d;
  event.preventDefault();
};

continueBtn.onclick = (event) => {
  lastName = document.forms["info-form"]["last-name"].value;
  address = document.forms["info-form"]["address"].value;
  city = document.forms["info-form"]["city"].value;
  postalCode = document.forms["info-form"]["postal"].value;
  phoneEmail = document.getElementById('myform_phone').value;
  firstName = document.getElementById("first-name").value;
  const user = {
    firstName: firstName,
    lastName: lastName,
    address: address,
    city: city,
    postal: postalCode,
    userID: phoneEmail,

  };

  const myJSON = JSON.stringify(user);
  if (document.getElementById("checkbox").checked) {
    localStorage.setItem("User", myJSON)
  };
  if (testInput()) {
    outline.classList.add('passive');
    receiptPopup.classList.add('active');
    const senderName = `${document.getElementById('first-name').value} ${document.getElementById('last-name').value}`;
    document.getElementById('sender-name').innerHTML = senderName;

    event.preventDefault();
  } else event.preventDefault();

}

closebtn.addEventListener('click', () => {
  // // togglePopup();
  // receiptPopup.remove();
  document.getElementById('receipt-popup').classList.remove('active');
  outline.classList.remove('passive');
  // popup.classList.toggle('visibility-toggle');
})