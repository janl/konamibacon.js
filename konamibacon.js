(function() {
  function $(e) { return document.getElementById(e); }
  function css(elm, styles) { for(var style in styles) { elm.style[style] = styles[style]; }}
  // listen to konami code + con
  // TBD

  // launch fullscreen layer
  var canvas = document.createElement("div");
  css(canvas, {
    width: "100%",
    height: "100%",
    position: "fixed",
    left: "0px",
    top: "0px",
    "background-color": "#F00",
  });
  $("konamibacon").parentNode.appendChild(canvas);
  //   create coins
  //   add behaviour
  // make crockford mouse follow
})();

// <div id="konami">
//   <span class="bacon"></span>
// </div>
