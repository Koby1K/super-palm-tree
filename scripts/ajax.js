$("#button3").click(function(){

  console.log("click");


  let url = "sample.json.json";

  $.ajax({

      url: url,
      dataType: "json",
      success: function(data){

          console.log(data.fname);
          $("#fname").val(data.fname);
          $("#lname").val(data.lname);
          $("#date").val(data.date);
          $("#pnum").val(data.pnum);
          $("#lnum").val(data.lnum);
          $("#usern").val(data.usern);
          $("#myInput").val(data.myInput);

      }
  })

})