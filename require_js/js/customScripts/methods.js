define(['jquery'], function ($) {
  let methods = {};
  /*let methods = {
    changeHtml(arg) {
      $('body').html(arg);
    },
    showAlert(arg) {
      alert(arg);
    }
  };*/

  methods.changeHtml = function (arg) {
    $('body').html(arg);
  }

  methods.showAlert = function (arg) {
    alert(arg);
  }

  return methods;
});