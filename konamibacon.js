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
    overflow: "wrap"
  });
  $("konamibacon").parentNode.appendChild(canvas);
  //   create coins
  function create_coin() {
    var coin = document.createElement("span");
    // css(coin, {
    //   
    // });
    coin.innerHTML = " *";
    //   add behaviour
    coin.onmouseover = function() {
      
    }
    return coin;
  }
  for(var idx = 0; idx < 3000; idx++) {
    // TODO: until screen full
    canvas.appendChild(create_coin());
  }
  // make crockford mouse follow
})();

// <div id="konami">
//   <span class="bacon"></span>
// </div>
