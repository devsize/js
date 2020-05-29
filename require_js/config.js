requirejs.config({
  baseUrl: 'js/customScripts',
  paths: {
    jquery: 'jquery-3.3.1.slim.min',
    jqueryCookie: 'jquery.cookie',
    bootstrap: [
      'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min', // if we want the cdn. It would be first loaded
      'bootstrap.min'
    ],
    methods: 'methods'
  }
});
