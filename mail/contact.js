// Modal function
$(function () {
  $(
    "#contactFormmodal input, #contactFormmodal textarea"
  ).jqBootstrapValidation({
    preventSubmit: true,
    submitError: function ($form, event, errors) {},
    submitSuccess: function ($form, event) {
      event.preventDefault();
      var name = $("input#name").val();
      var email = $("input#email").val();
      var subject = $("input#subject").val();
      var message = $("textarea#message").val();

      $this = $("#sendMessageButton");
      $this.prop("disabled", true);

      $.ajax({
        url: "mail/contact.php",
        type: "POST",
        data: {
          name: name,
          email: email,
          subject: subject,
          message: message,
        },
        cache: false,
        successmodal: function () {
          $("#successmodal").html("<div class='alert alert-success'>");
          $("#successmodal > .alert-success")
            .html(
              "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;"
            )
            .append("</button>");
          $("#successmodal > .alert-success").append(
            "<strong>Your message has been sent. </strong>"
          );
          $("#successmodal > .alert-success").append("</div>");
          $("#contactFormmodal").trigger("reset");
        },
        error: function () {
          $("#successmodal").html("<div class='alert alert-danger'>");
          $("#successmodal > .alert-danger")
            .html(
              "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;"
            )
            .append("</button>");
          $("#successmodal > .alert-danger").append(
            $("<strong>").text(
              "Sorry " +
                name +
                ", it seems that our mail server is not responding. Please try again later!"
            )
          );
          $("#successmodal > .alert-danger").append("</div>");
          $("#contactFormmodal").trigger("reset");
        },
        complete: function () {
          setTimeout(function () {
            $this.prop("disabled", false);
          }, 1000);
        },
      });
    },
    filter: function () {
      return $(this).is(":visible");
    },
  });

  $('a[data-toggle="tab"]').click(function (e) {
    e.preventDefault();
    $(this).tab("show");
  });
});

$("#name").focus(function () {
  $("#successmodal").html("");
});

//Main page function
$(function () {
  $("#contactFormmain input, #contactFormmain textarea").jqBootstrapValidation({
    preventSubmit: true,
    submitError: function ($form, event, errors) {},
    submitSuccess: function ($form, event) {
      event.preventDefault();
      var name = $("input#name").val();
      var email = $("input#email").val();
      var subject = $("input#subject").val();
      var message = $("textarea#message").val();

      $this = $("#sendMessageButton");
      $this.prop("disabled", true);

      $.ajax({
        url: "mail/contact.php",
        type: "POST",
        data: {
          name: name,
          email: email,
          subject: subject,
          message: message,
        },
        cache: false,
        successmain: function () {
          $("#successmain").html("<div class='alert alert-success'>");
          $("#successmain > .alert-success")
            .html(
              "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;"
            )
            .append("</button>");
          $("#successmain > .alert-success").append(
            "<strong>Your message has been sent. </strong>"
          );
          $("#successmain > .alert-success").append("</div>");
          $("#contactFormmain").trigger("reset");
        },
        error: function () {
          $("#successmain").html("<div class='alert alert-danger'>");
          $("#successmain > .alert-danger")
            .html(
              "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;"
            )
            .append("</button>");
          $("#successmain > .alert-danger").append(
            $("<strong>").text(
              "Sorry " +
                name +
                ", it seems that our mail server is not responding. Please try again later!"
            )
          );
          $("#successmain > .alert-danger").append("</div>");
          $("#contactFormmain").trigger("reset");
        },
        complete: function () {
          setTimeout(function () {
            $this.prop("disabled", false);
          }, 1000);
        },
      });
    },
    filter: function () {
      return $(this).is(":visible");
    },
  });

  $('a[data-toggle="tab"]').click(function (e) {
    e.preventDefault();
    $(this).tab("show");
  });
});

$("#name").focus(function () {
  $("#successmain").html("");
});

//Footer function
$(function () {
  $(
    "#contactFormfooter input, #contactFormfooter textarea"
  ).jqBootstrapValidation({
    preventSubmit: true,
    submitError: function ($form, event, errors) {},
    submitSuccess: function ($form, event) {
      event.preventDefault();
      var name = $("input#name").val();
      var email = $("input#email").val();
      var subject = $("input#subject").val();
      var message = $("textarea#message").val();

      $this = $("#sendMessageButton");
      $this.prop("disabled", true);

      $.ajax({
        url: "mail/contact.php",
        type: "POST",
        data: {
          name: name,
          email: email,
          subject: subject,
          message: message,
        },
        cache: false,
        successfooter: function () {
          $("#successfooter").html("<div class='alert alert-success'>");
          $("#successfooter > .alert-success")
            .html(
              "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;"
            )
            .append("</button>");
          $("#successfooter > .alert-success").append(
            "<strong>Your message has been sent. </strong>"
          );
          $("#successfooter > .alert-success").append("</div>");
          $("#contactFormfooter").trigger("reset");
        },
        error: function () {
          $("#successfooter").html("<div class='alert alert-danger'>");
          $("#successfooter > .alert-danger")
            .html(
              "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;"
            )
            .append("</button>");
          $("#successfooter > .alert-danger").append(
            $("<strong>").text(
              "Sorry " +
                name +
                ", it seems that our mail server is not responding. Please try again later!"
            )
          );
          $("#successfooter > .alert-danger").append("</div>");
          $("#contactFormfooter").trigger("reset");
        },
        complete: function () {
          setTimeout(function () {
            $this.prop("disabled", false);
          }, 1000);
        },
      });
    },
    filter: function () {
      return $(this).is(":visible");
    },
  });

  $('a[data-toggle="tab"]').click(function (e) {
    e.preventDefault();
    $(this).tab("show");
  });
});

$("#name").focus(function () {
  $("#successfooter").html("");
});
