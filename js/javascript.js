 console.log("Hello World")

 // Initialize collapse button
  $(".button-collapse").sideNav();
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  //$('.collapsible').collapsible();
    // Show sideNav
  $('.button-collapse').sideNav('show');
  // Hide sideNav
  $('.button-collapse').sideNav('hide');

 // Materialize.toast(message, displayLength, className, completeCallback);
  Materialize.toast('I am a toast!', 4000) // 4000 is the duration of the toast

