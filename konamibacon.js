(function() {
  // emile, thank you thomas
  (function(f,a){var h=document.createElement("div"),g=("backgroundColor borderBottomColor borderBottomWidth borderLeftColor borderLeftWidth borderRightColor borderRightWidth borderSpacing borderTopColor borderTopWidth bottom color fontSize fontWeight height left letterSpacing lineHeight marginBottom marginLeft marginRight marginTop maxHeight maxWidth minHeight minWidth opacity outlineColor outlineOffset outlineWidth paddingBottom paddingLeft paddingRight paddingTop right textIndent top width wordSpacing zIndex").split(" ");function e(j,k,l){return(j+(k-j)*l).toFixed(3)}function i(k,j,l){return k.substr(j,l||1)}function c(l,p,s){var n=2,m,q,o,t=[],k=[];while(m=3,q=arguments[n-1],n--){if(i(q,0)=="r"){q=q.match(/\d+/g);while(m--){t.push(~~q[m])}}else{if(q.length==4){q="#"+i(q,1)+i(q,1)+i(q,2)+i(q,2)+i(q,3)+i(q,3)}while(m--){t.push(parseInt(i(q,1+m*2,2),16))}}}while(m--){o=~~(t[m+3]+(t[m]-t[m+3])*s);k.push(o<0?0:o>255?255:o)}return"rgb("+k.join(",")+")"}function b(l){var k=parseFloat(l),j=l.replace(/^[\-\d\.]+/,"");return isNaN(k)?{v:j,f:c,u:""}:{v:k,f:e,u:j}}function d(m){var l,n={},k=g.length,j;h.innerHTML='<div style="'+m+'"></div>';l=h.childNodes[0].style;while(k--){if(j=l[g[k]]){n[g[k]]=b(j)}}return n}a[f]=function(p,m,j){p=typeof p=="string"?document.getElementById(p):p;j=j||{};var r=d(m),q=p.currentStyle?p.currentStyle:getComputedStyle(p,null),l,s={},n=+new Date,k=j.duration||200,u=n+k,o,t=j.easing||function(v){return(-Math.cos(v*Math.PI)/2)+0.5};for(l in r){s[l]=b(q[l])}o=setInterval(function(){var v=+new Date,w=v>u?1:(v-n)/k;for(l in r){p.style[l]=r[l].f(s[l].v,r[l].v,t(w))+r[l].u}if(v>u){clearInterval(o);j.after&&j.after()}},10)}})("emile",this);
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
  function create_coin(cords) {
    // var cointainer = document.createElement("div");
    var coin = document.createElement("img");
    // css(coin, {
    //   
    // });
    coin.src = "konamibacon_coin.png";
    //   add behaviour
    css(coin, {
      position: "absolute",
      top: cords.top + "px",
      left: cords.left + "px",
    });
    coin.onmouseover = function(idx) {
      if(coin.className == "running") { return; }
      coin.className = "running";
      emile(coin, "top:-40px", {
         duration: 1000, // 1s
         after: function() {
           css(coin, {
             display: "none"
           });
         }
      });
    }
    return coin;
  }
  function place_coin(cords) {
    var width = window.innerWidth;
    var height = window.innerHeight;
    cords.idx++;

    // new row
    if(cords.left> width) {
      if(cords.row * 39 > height) {
        return false; // all off board
      }
      cords.row++;
      cords.left = 0;
    } else {
      cords.left = cords.left + 24;
      cords.top = cords.row * 39;
    }
    return cords;
  }
  var cords = { idx: 0, row: 0, top: 0, left: 0 };
  while(cords = place_coin(cords)) {
    canvas.appendChild(create_coin(cords));
  }
  // make crockford mouse follow
})();

// <div id="konami">
//   <span class="bacon"></span>
// </div>
