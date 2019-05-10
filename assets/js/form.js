/* attach a submit handler to the form */
$("#register").submit(function(event) {
  /* stop form from submitting normally */
  event.preventDefault();

  /* get the action attribute from the <form action=""> element */
  var $form = $(this);

  var posting = $.post("https://dash.zane.sh/api/v1/events/mason-hack-camp-2019/attendees", $form.serialize());

  /* Alerts the results */
  posting.done(function(data) {
    window.location.replace("/register/confirm");
  });
});
