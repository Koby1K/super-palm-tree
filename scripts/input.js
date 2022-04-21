$("#JSONbutton").click(function(){

  console.log("clickon");


  let url = "sample.json";

  $.ajax({

      url: url,
      dataType: "json",
      success: function(data){

          console.log(data.fname);
          $("#fname").val(data.fname);
          $("#lname").val(data.lname);
          $("#date").val(data.date);
          $("#pnum").val(data.pnum);
          $("#usern").val(data.usern);
          $("#passWord").val(data.passWord);
      },

      failure: function (data){
        alert("This is not a valid option")
      }
  })

})