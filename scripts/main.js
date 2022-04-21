// Declare functions
let selectEl = document.getElementById('select-list');

selectEl.addEventListener('change', (e) => {
  if (e.target.value == 'no') {
    document.getElementById('txt-custom').style.display = 'block';
  } else {
    document.getElementById('txt-custom').style.display = 'none';
  }
});


$(document).ready(function () {
  // alert("webpage is ready");
  console.log("webpage is up and running...");

  let Info = "";

  $("#button1").click(function (e) {
    e.preventDefault(); 
    Info += "First Name: " + $("#fname").val() + "<br/> ";
    Info += "Last Name: " + $("#lname").val() + "<br/> ";
    Info += "Acquired Date and Time: " + $("#date").val() + "<br/> ";
    Info += "Phone Number: " + $("#pnum").val() + "<br/> ";
    Info += "User Name: " + $("#usern").val() + "<br/> ";
    Info += "Password: " + $("#passWord").val() + "<br/> ";
    $("#greetingOutput").html(Info);
    console.log("Info");


  console.log("JSONbutton clickedon");
 });
});


// $.getJSON('#JSONbutton', sample.json, function(data) {
// });

function jget() {

  console.log("in jget");
  // (A) FETCH REQUEST
  fetch("sample.json")
  // (B) RETURN SERVER RESPONSE AS TEXT
  .then((result) => {
          console.log("surveryanswers");
          console.log(result);
      })
      .then((response) => {
          console.log(response);
      })

  // (C) HANDLE ERROR
  .catch((error) => { console.log(error); });
}

$('#loadJSONbtn').click(jget());
