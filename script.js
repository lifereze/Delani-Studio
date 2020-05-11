 
$(document).ready(function() {

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
  

    $("#project-one").hover(
      function() {
        $("#project-one").animate({ opacity: "0.25" });
        $("#project-one-title").toggle("#project-one");
      },
      function() {
        $("#project-one").animate({ opacity: "1" });
        $("#project-one-title").toggle("#project-one");
      }
    );

    $("#project-two").hover(
      function() {
        $("#project-two").animate({ opacity: "0.25" });
        $("#project-two-title").toggle("#project-two");
      },
      function() {
        $("#project-two").animate({ opacity: "1" });
        $("#project-two-title").toggle("#project-two");
      }
    );

    $("#project-three").hover(
      function() {
        $("#project-three").animate({ opacity: "0.25" });
        $("#project-three-title").toggle("#project-three");
      },
      function() {
        $("#project-three").animate({ opacity: "1" });
        $("#project-three-title").toggle("#project-three");
      }
    );

    $("#project-four").hover(
      function() {
        $("#project-four").animate({ opacity: "0.25" });
        $("#project-four-title").toggle("#project-four");
      },
      function() {
        $("#project-four").animate({ opacity: "1" });
        $("#project-four-title").toggle("#project-four");
      }
    );

    $("#project-five").hover(
      function() {
        $("#project-five").animate({ opacity: "0.25" });
        $("#project-five-title").toggle("#project-five");
      },
      function() {
        $("#project-five").animate({ opacity: "1" });
        $("#project-five-title").toggle("#project-five");
      }
    );

    $("#project-six").hover(
      function() {
        $("#project-six").animate({ opacity: "0.25" });
        $("#project-six-title").toggle("#project-six");
      },
      function() {
        $("#project-six").animate({ opacity: "1" });
        $("#project-six-title").toggle("#project-six");
      }
    );

    $("#project-seven").hover(
      function() {
        $("#project-seven").animate({ opacity: "0.25" });
        $("#project-seven-title").toggle("#project-seven");
      },
      function() {
        $("#project-seven").animate({ opacity: "1" });
        $("#project-seven-title").toggle("#project-seven");
      }
    );

    $("#project-eight").hover(
      function() {
        $("#project-eight").animate({ opacity: "0.25" });
        $("#project-eight-title").toggle("#project-eight");
      },
      function() {
        $("#project-eight").animate({ opacity: "1" });
        $("#project-eight-title").toggle("#project-eight");
      }
    );
  

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
  $(document).ready(function() {
    $('#subscribeForm').bind('.submit', function() {
      event.preventDefault();
      var name = $('#nameInput').val;
      var email = $('#exampleFormControlInput1').val;
      var message = $('#messageInput').val;
      var url = "https://us20.api.mailchimp.com/2.0/lists/subscribe.json?" + "apikey=df458b36b6"
      "id=98190a3419c9eb27281a8f3d59840865-us20 " +
      "&email[email]=" + email +
        "&merge_vars[NAME]=" + name +
        "&merge_vars[NAME]=" + message +
        "&send_welcome=false";
  
      $.ajax({
        type: "POST",
        url: url,
        dataType: 'json',
        success: function(data) {
          $('#subscribe-form').html("Thank you!");
        },
        error: function(jqXHR, textStatus, errorThrown) {
          alert(errorThrown);
        }
      });
  
  
    });
  });