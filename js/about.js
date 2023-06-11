document.getElementById("sub").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get input values
    var name = document.getElementById("form-name").value.trim();
    var race = document.getElementById("race").value.trim();
    var email = document.getElementById("form-email").value.trim();
    var comment = document.getElementById("textarea").value.trim();
  
    // Validate input values
    if (name === "" || race === "" || email === "" || comment === "") {
      alert("Please fill in all fields.");
      return;
    }
  
    // Check for valid email address using regular expression
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
  
    // Form is valid, you can submit the form or perform any other desired action here
    alert("Form submitted successfully!");
  });
  

   

  var race = [
   "Bahrain Grand Prix",
   "Saudi Arabian Grand Prix",
   "Australian Grand Prix",
   "Azarbaijan Grand Prix",
   "Miami Grand Prix",
   "Monaco Grand Prix",
   "Spanish Grand Prix",
   "canadian Grand Prix",
   "austrian Grand Prix",
   "British Grand Prix",
    "Hungarian Grand Prix",
    "Belgian Grand Prix",
    "Dutch Grand Prix",
    "Italian Grand Prix",
    "Singapore Grand Prix",
    "Russian Grand Prix",
    "Japanese Grand Prix",
    "Qatar Grand Prix",
    "United States Grand Prix",
    "Mexican Grand Prix",
    "Brazilian Grand Prix",
    "Abu Dhabi Grand Prix",
    "LA Grand Prix"
    // Add more race options as needed
];

$(document).ready(function () {
    $("#race").autocomplete({
        source: race,
        position: { my: "left top+5", at: "left bottom" },
        appendTo: "#race-container"
    });
});
