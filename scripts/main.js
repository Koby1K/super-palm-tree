// Declare functions
let selectEl = document.getElementById('select-list');

selectEl.addEventListener('change', (e) => {
  if (e.target.value == 'no') {
    document.getElementById('txt-custom').style.display = 'inline-block';
  } else {
    document.getElementById('txt-custom').style.display = 'block';
  }
});


$(document).ready(function () {
  // alert("webpage is ready");
  console.log("webpage is up and running.");

  let Info = "";

  $("#submitbtn1").click(function (e) {
    e.preventDefault(); 
    Info += "First Name: " + $("#fname").val() + "<br/> ";
    Info += "Last Name: " + $("#lname").val() + "<br/> ";
    Info += "Today's Date: " + $("#date").val() + "<br/> ";
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
  // (1) FETCH REQUEST
  fetch("sample.json")
  // (2) RETURN SERVER RESPONSE AS TEXT
  .then((result) => {
          console.log("surveryanswers");
          console.log(result);
      })
      .then((response) => {
          console.log(response);
      })

  // (3) HANDLE ERROR
  .catch((error) => { console.log(error); });
}

$('#loadJSONbtn').click(jget());
