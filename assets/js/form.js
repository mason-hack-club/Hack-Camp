/* attach a submit handler to the form */
$("#register").submit(function(event) {
  /* stop form from submitting normally */
  event.preventDefault();

  /* get the action attribute from the <form action=""> element */
  var $form = $(this),
    url = $form.attr("action");

  var posting = $.post(url, $form.serialize());

  /* Alerts the results */
  posting.done(function(data) {
    window.location.replace("/register/confirm");
  });
});
