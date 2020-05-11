 
$(document).ready(function() {
    //jquery front-end code
  
    //code to control the display of text in-place of the what we do icons
  
    //design space
    $("#design-icon").click(function() {
      $("#design-icon").hide();
      $("#design-icon-description").toggle();
      $("#design-icon-description").show();
    });
    $("#design-icon-description").click(function() {
      $("#design-icon-description").hide();
      $("#design-icon").toggle();
      $("#design-icon").show();
    });
    //development-space
    $("#development-icon").click(function() {
      $("#development-icon").hide();
      $("#development-icon-description").toggle();
      $("#development-icon-description").show();
    });
    $("#development-icon-description").click(function() {
      $("#development-icon-description").hide();
      $("#development-icon").toggle();
      $("#development-icon").show();
    });
    //product management stage
    $("#product-icon").click(function() {
      $("#product-icon").hide();
      $("#product-icon-description").toggle();
      $("#product-icon-description").show();
    });
    $("#product-icon-description").click(function() {
      $("#product-icon-description").hide();
      $("#product-icon").toggle();
      $("#product-icon").show();
    });
  
    //functions to control the display of the project headers on the project images on mouse hoover, in the portfolio section
  
    //project one
    $("#project-one").hover(
      function() {
        $("#project-one").animate({ opacity: "0.35" });
        $("#project-one-title").toggle("#project-one");
      },
      function() {
        $("#project-one").animate({ opacity: "1" });
        $("#project-one-title").toggle("#project-one");
      }
    );
    //project two
    $("#project-two").hover(
      function() {
        $("#project-two").animate({ opacity: "0.35" });
        $("#project-two-title").toggle("#project-two");
      },
      function() {
        $("#project-two").animate({ opacity: "1" });
        $("#project-two-title").toggle("#project-two");
      }
    );
    //project three
    $("#project-three").hover(
      function() {
        $("#project-three").animate({ opacity: "0.35" });
        $("#project-three-title").toggle("#project-three");
      },
      function() {
        $("#project-three").animate({ opacity: "1" });
        $("#project-three-title").toggle("#project-three");
      }
    );
    //project four
    $("#project-four").hover(
      function() {
        $("#project-four").animate({ opacity: "0.35" });
        $("#project-four-title").toggle("#project-four");
      },
      function() {
        $("#project-four").animate({ opacity: "1" });
        $("#project-four-title").toggle("#project-four");
      }
    );
    //project five
    $("#project-five").hover(
      function() {
        $("#project-five").animate({ opacity: "0.35" });
        $("#project-five-title").toggle("#project-five");
      },
      function() {
        $("#project-five").animate({ opacity: "1" });
        $("#project-five-title").toggle("#project-five");
      }
    );
    //project six
    $("#project-six").hover(
      function() {
        $("#project-six").animate({ opacity: "0.35" });
        $("#project-six-title").toggle("#project-six");
      },
      function() {
        $("#project-six").animate({ opacity: "1" });
        $("#project-six-title").toggle("#project-six");
      }
    );
    //project seven
    $("#project-seven").hover(
      function() {
        $("#project-seven").animate({ opacity: "0.35" });
        $("#project-seven-title").toggle("#project-seven");
      },
      function() {
        $("#project-seven").animate({ opacity: "1" });
        $("#project-seven-title").toggle("#project-seven");
      }
    );
    //project eight
    $("#project-eight").hover(
      function() {
        $("#project-eight").animate({ opacity: "0.35" });
        $("#project-eight-title").toggle("#project-eight");
      },
      function() {
        $("#project-eight").animate({ opacity: "1" });
        $("#project-eight-title").toggle("#project-eight");
      }
    );
  
    //jquery back-end code
  
    //code to control user details input and submission in the form section
  
    //controls submission and reset of the form-submission form
    $("#form-submission").submit(function(event) {
      var nameOfUser = $("input#user-name").val();
      var emailOfUser = $("input#user-email").val();
  
      if (nameOfUser != "" && emailOfUser != "") {
        alert(
          "Hey there " +
            nameOfUser +
            ". Thank you for contacting us. We will get in touch with you through your email: " +
            emailOfUser
        );
  
        $("form-submission").reset();
      } else {
        alert("Invalid input! Please fill in your name and email address.");
      }
  
      event.preventDefault();
    });
  });