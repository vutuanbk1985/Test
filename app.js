const price = document.getElementById("price");
price.innerHTML = 200.00;

const subTotal = document.getElementById("subtotal");
subTotal.innerHTML = 200.00;

const shipping = document.getElementById("shipping");
shipping.innerHTML = 1500.00;

const total = document.getElementById("total");
total.innerHTML = 1700;

const priceTab = document.getElementById("price-tab");  //Small screen display price tab
priceTab.innerHTML = 1700;



//price-tab small screen
const priceSmall = document.getElementById("price-small");
priceSmall.innerHTML = 200.00;

const subTotalSmall = document.getElementById("subtotal-small");
subTotalSmall.innerHTML = 200.00;

const shippingSmall = document.getElementById("shipping-small");
shippingSmall.innerHTML = 1500.00;

const totalSmall = document.getElementById("total-small");
totalSmall.innerHTML = 1700;


//show price tab when click button in small screen
const receiptTab = document.getElementById("receipt-small");
const btn = document.getElementById('price-show-btn');
const text = document.getElementById("text-order-summary")

btn.addEventListener('click', () => {
  receiptTab.classList.toggle('visibility-toggle');
  if (text.innerHTML == "Hide order summary")
    text.innerHTML = "Show order summary";

  else
    text.innerHTML = "Hide order summary";
})


//submit and close button event
const receiptPopup = document.getElementById("receipt-popup");
const continueBtn = document.getElementById('continue-btn');
const closebtn = document.getElementById('close-btn');
const outline = document.getElementById('outline');


document.getElementById('total-payment').innerHTML = total.innerHTML;

const d = new Date();
d.setFullYear(2023);
document.getElementById('payment-time').innerHTML = d;

// form validate
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

  myJSON = JSON.stringify(user);
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

