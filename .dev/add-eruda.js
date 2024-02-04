(function () {
  var script = document.createElement('script');
  script.src = 'node_modules/eruda/eruda.js';
  document.head.append(script);
  script.onload = function () {
    eruda.init();
  }
})()