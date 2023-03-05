function validateOrder() {
  var email = document.getElementById("Email").value;

  let emailBody ="User Email: " + email + "%0D%0A";

  emailBody += "Product Information %0D%0A";
  emailBody += "----------------------------- %0D%0A";
  let productName = document.getElementById("ProductMenu").value;
  if (productName === "Select a Product") {
    alert("Please select a product.");
    return false;
  }
  else {
    // console.log(productName);
    emailBody += "Product name: " + productName + "%0D%0A";
  }

  let productQuantity = document.getElementById("Quantity").value;
  emailBody += "Quantity: " + productQuantity + "%0D%0A";

  emailBody += "%0D%0AContact Information %0D%0A";
  emailBody += "-----------------------------%0D%0A";

  let destinationCountry = document.getElementById("Country").value;
  if (destinationCountry === "Country") {
    alert("Please select a Destination Country.");
    return false;
  }
  else {
    emailBody += "Destination Country: " + destinationCountry + "%0D%0A";
  }

  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  emailBody += "Name: " + firstName + " " + lastName + "%0D%0A";

  let destinationAddress = document.getElementById("Address").value;
  emailBody += "Address: " + destinationAddress + "%0D%0A";

  let destinationCity = document.getElementById("City").value;
  emailBody += "City: " + destinationCity + "%0D%0A";

  let destinationState = document.getElementById("State").value;
  emailBody += "State: " + destinationState + "%0D%0A";

  let destinationZipCode = document.getElementById("ZipCode").value;
  emailBody += "Zip Code: " + destinationZipCode + "%0D%0A";

  let phoneNumber = document.getElementById("PhoneNumber").value;
  emailBody += "Phone Number: " + phoneNumber + "%0D%0A";

  let shippingMethod = document.getElementById("ShippingMethod").value;
  emailBody += "Shipping Method: " + shippingMethod + "%0D%0A";

  emailBody += "%0D%0APayment Information %0D%0A";
  emailBody += "-----------------------------%0D%0A";

  let cardNumber = document.getElementById("CardNumber").value;
  emailBody += "Card Number: " + cardNumber + "%0D%0A";

  let cardholderName = document.getElementById("CardholderName").value;
  emailBody += "Cardholder Name: " + cardholderName + "%0D%0A";

  let cardExpiration = document.getElementById("Expiration").value;
  emailBody += "Card Expiration: " + cardExpiration + "%0D%0A";

  let cardSecurityCode = document.getElementById("SecurityCode").value;
  emailBody += "Card Security Code: " + cardSecurityCode + "%0D%0A";

  let message = document.getElementById("Text").value;
  emailBody += "Message:%0D%0A" + message + "%0D%0A";

  var subject = "Your 124 Peripherals Order";
  // console.log(emailBody);
  document.location = "mailto:"+"124peripherals@gmail.com"+"?subject="+subject+"&body="+emailBody;

  console.log("Order Submitted.");
  alert("Prompting Email for " + productName);
}