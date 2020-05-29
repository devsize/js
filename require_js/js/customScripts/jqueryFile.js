define(['jquery', 'methods'], function ($, myMethods) {
  // $('body').html('Hello from jquery!');
  $('#clickMe').click(function () {
    myMethods.showAlert('I was clicked!');
  });
});