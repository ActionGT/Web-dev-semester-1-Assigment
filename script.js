
function userName() {


  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;

  var email = document.getElementById("email").value;
  if (fname == "" || lname == "" || email == "") {

    alert("Please fill in first, last & email Name with a value & make sure you use a valid email address");



  } else {
    alert(fname + " " + lname + " Thank you for your details. \n" + "You are now a member of the ActionGT tribe\n" + " We Will be in touch with you via :" + email);
  }


}//function 1