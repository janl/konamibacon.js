(function() {
  // emile, thank you thomas
  (function(f,a){var h=document.createElement("div"),g=("backgroundColor borderBottomColor borderBottomWidth borderLeftColor borderLeftWidth borderRightColor borderRightWidth borderSpacing borderTopColor borderTopWidth bottom color fontSize fontWeight height left letterSpacing lineHeight marginBottom marginLeft marginRight marginTop maxHeight maxWidth minHeight minWidth opacity outlineColor outlineOffset outlineWidth paddingBottom paddingLeft paddingRight paddingTop right textIndent top width wordSpacing zIndex").split(" ");function e(j,k,l){return(j+(k-j)*l).toFixed(3)}function i(k,j,l){return k.substr(j,l||1)}function c(l,p,s){var n=2,m,q,o,t=[],k=[];while(m=3,q=arguments[n-1],n--){if(i(q,0)=="r"){q=q.match(/\d+/g);while(m--){t.push(~~q[m])}}else{if(q.length==4){q="#"+i(q,1)+i(q,1)+i(q,2)+i(q,2)+i(q,3)+i(q,3)}while(m--){t.push(parseInt(i(q,1+m*2,2),16))}}}while(m--){o=~~(t[m+3]+(t[m]-t[m+3])*s);k.push(o<0?0:o>255?255:o)}return"rgb("+k.join(",")+")"}function b(l){var k=parseFloat(l),j=l.replace(/^[\-\d\.]+/,"");return isNaN(k)?{v:j,f:c,u:""}:{v:k,f:e,u:j}}function d(m){var l,n={},k=g.length,j;h.innerHTML='<div style="'+m+'"></div>';l=h.childNodes[0].style;while(k--){if(j=l[g[k]]){n[g[k]]=b(j)}}return n}a[f]=function(p,m,j){p=typeof p=="string"?document.getElementById(p):p;j=j||{};var r=d(m),q=p.currentStyle?p.currentStyle:getComputedStyle(p,null),l,s={},n=+new Date,k=j.duration||200,u=n+k,o,t=j.easing||function(v){return(-Math.cos(v*Math.PI)/2)+0.5};for(l in r){s[l]=b(q[l])}o=setInterval(function(){var v=+new Date,w=v>u?1:(v-n)/k;for(l in r){p.style[l]=r[l].f(s[l].v,r[l].v,t(w))+r[l].u}if(v>u){clearInterval(o);j.after&&j.after()}},10)}})("emile",this);
  function $(e) { return document.getElementById(e); }
  function css(elm, styles) { for(var style in styles) { elm.style[style] = styles[style]; }}
  function isFF() { return !!navigator.userAgent.match(/Firefox/); }

  function brrrrring() {
    var bg = new Audio("m" + (isFF()?".wav":".mp3"));
    bg.autoplay = true;
    bg.addEventListener("ended", function() {
      bg.play();  // loop!
    }, true);
    bg.load();

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
    var audios = [];
    for(var idx = 0; idx < 10; idx++) {
      audios[idx] = new Audio("smw_coin" + (isFF()?".wav":".mp3") );
    }
    function create_coin(cords) {
      var coin = document.createElement("img");
      coin.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAnCAYAAAAVW4iAAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAYxJREFUeNrEV8lqwzAQzahqz7n12q8pgfxuAnG+ptfeci42r3awQZ7MJiVpDcZCHs3yZhUB2DzzoT8TgK+tRXcc35flzEQ+vjuT8cfl+k0NSlWZnJ3/h1KpmfnyPRT7+1YBeWYgab6c7e+xQGKMQuiGrUMCjvM+goIn2tO8vnF8Ug6WWnIN+T5qLSAGxSokf763V4Zv75dzBCbNgoh2EKwOCSAHIk5L0UzuBM0WaDpu3QjV50I0wtUx5YYxk/fcAgQ1lqAjJYRvIIIiCEYecOUQ8UFtzVF9kRoKHSnCRSuyEsvkMCcj+tREQ8CJGiNocKWGWg/HD6ukS06dsbTU4FlZkB1naUy8EoIWiGAkoVpaUtCRVniaBS8FszXSwcQIjGYyAvi7Tu4LgixEDZxSca2inE4avMqebHW0ThC0qxm8KJB4blOy8qBk3hXN5eyU81DT17IWjiVhC/rC2V5TGe6Zrk8B/wzSbFo7XZMxgOER94Npkn5lDB9+P2i6CuUK2iE42vzTHe1Zz68AAwAtE6cuScSUJgAAAABJRU5ErkJggg==";
      //   add behaviour
      css(coin, {
        position: "absolute",
        top: cords.top + "px",
        left: cords.left + "px",
      });
      var idx = cords.idx;
      coin.onmouseover = coin.onmouseout = function() {
        audios[idx % audios.length].play();
        if(coin.className == "running") { return; }
        coin.className = "running";
        emile(coin, "top:-40px", {
           duration: 1000, // 1s
           after: function() {
             coin_count--;
             if(coin_count <= 1) {
               win();
             }
             css(coin, {
               display: "none"
             });
           }
        });
      }
      return coin;
    }
    function win() {
      bg.pause();
      canvas.removeChild(doug);
    }
    function place_coin(cords) {
      var width = window.innerWidth;
      var height = window.innerHeight;
      cords.idx++;

      // new row
      if(cords.left > width - 24*2) {
        if(cords.row * 39 > height - 39) {
          return false; // all off board
        }
        cords.row++;
        cords.left = 0;
        cords.top = cords.row * 39;
      } else {
        cords.left = cords.left + 24;
        cords.top = cords.row * 39;
      }
      return cords;
    }
    var cords = { idx: 0, row: 0, top: 0, left: -24 };
    var prev_cords = cords;
    while(cords = place_coin(cords)) {
      canvas.appendChild(create_coin(cords));
      prev_cords = cords;
    }
    var coin_count = prev_cords.idx;

    //make crockford mouse follow
    var doug = document.createElement("img");
    css(doug, {
      position:"absolute",
      display:"none"
    });
    doug.src = "konamibacon_crockford.png";
    window.onmousemove = function(e) {
      css(doug, {
        display: "block",
        left: e.clientX+5,
        top: e.clientY+5
      });
    }
    canvas.appendChild(doug);
  }
  
  /*
  	* Konami-JS ~ 
  	* :: Now with support for touch events and multiple instances for 
  	* :: those situations that call for multiple easter eggs!
  	* Code: http://konami-js.googlecode.com/
  	* Examples: http://www.snaptortoise.com/konami-js
  	* Copyright (c) 2009 George Mandis (georgemandis.com, snaptortoise.com)
  	* Version: 1.3.2 (7/02/2010)
  	* Licensed under the GNU General Public License v3
  	* http://www.gnu.org/copyleft/gpl.html
  	* Tested in: Safari 4+, Google Chrome 4+, Firefox 3+, IE7+ and Mobile Safari 2.2.1
  */

  var Konami = function() {
  	var konami= {
  			addEvent:function ( obj, type, fn, ref_obj )
  			{
  				if (obj.addEventListener)
  					obj.addEventListener( type, fn, false );
  				else if (obj.attachEvent)
  				{
  					// IE
  					obj["e"+type+fn] = fn;
  					obj[type+fn] = function() { obj["e"+type+fn]( window.event,ref_obj ); }

  					obj.attachEvent( "on"+type, obj[type+fn] );
  				}
  			},
  	        input:"",
            pattern:"3838404037393739666567797813",
  		/*pattern:"38384040373937396665",*/
  	        load: function(link) {	

  				this.addEvent(document,"keydown", function(e,ref_obj) {											
  					if (ref_obj) konami = ref_obj; // IE
  					konami.input+= e ? e.keyCode : event.keyCode;
  					if (konami.input.length > konami.pattern.length) konami.input = konami.input.substr((konami.input.length - konami.pattern.length));
  					if (konami.input == konami.pattern) {
                      konami.code(link);
  					konami.input="";
                     	return;
                      }
              	},this);
             this.iphone.load(link)

  				},
  	        code: function(link) { window.location=link},
  	        iphone:{
  	                start_x:0,
  	                start_y:0,
  	                stop_x:0,
  	                stop_y:0,
  	                tap:false,
  	                capture:false,
  									orig_keys:"",
  	                keys:["UP","UP","DOWN","DOWN","LEFT","RIGHT","LEFT","RIGHT","TAP","TAP","TAP"],
  	                code: function(link) { konami.code(link);},
  	                load: function(link){
  										orig_keys = this.keys;
  	    							konami.addEvent(document,"touchmove",function(e){
  	                          if(e.touches.length == 1 && konami.iphone.capture==true){ 
  	                            var touch = e.touches[0]; 
  	                                konami.iphone.stop_x = touch.pageX;
  	                                konami.iphone.stop_y = touch.pageY;
  	                                konami.iphone.tap = false; 
  	                                konami.iphone.capture=false;
  	                                konami.iphone.check_direction();
  	                                }
  	                                });               
  	                        konami.addEvent(document,"touchend",function(evt){
  	                                if (konami.iphone.tap==true) konami.iphone.check_direction(link);           
  	                                },false);
  	                        konami.addEvent(document,"touchstart", function(evt){
  	                                konami.iphone.start_x = evt.changedTouches[0].pageX
  	                                konami.iphone.start_y = evt.changedTouches[0].pageY
  	                                konami.iphone.tap = true
  	                                konami.iphone.capture = true
  	                                });               
  	                                },
  	                check_direction: function(link){
  	                        x_magnitude = Math.abs(this.start_x-this.stop_x)
  	                        y_magnitude = Math.abs(this.start_y-this.stop_y)
  	                        x = ((this.start_x-this.stop_x) < 0) ? "RIGHT" : "LEFT";
  	                        y = ((this.start_y-this.stop_y) < 0) ? "DOWN" : "UP";
  	                        result = (x_magnitude > y_magnitude) ? x : y;
  	                        result = (this.tap==true) ? "TAP" : result;                     

  	                        if (result==this.keys[0]) this.keys = this.keys.slice(1,this.keys.length)
  	                        if (this.keys.length==0) { 
  														this.keys=this.orig_keys;
  														this.code(link)
  														}
  	                        }
  	                }
  	}
  	return konami;
  }
  var k = new Konami();
  k.code = brrrrring;
  k.load();
  brrrrring();
})();
