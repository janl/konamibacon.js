(
  /*
    Super Doug World by @kiesse & @janl
    Konami & Bacon!
  */
  function() {
  // emile, thank you Thomas: http://github.com/madrobby/emile/
  (function(f,a){var h=document.createElement("div"),g=("backgroundColor borderBottomColor borderBottomWidth borderLeftColor borderLeftWidth borderRightColor borderRightWidth borderSpacing borderTopColor borderTopWidth bottom color fontSize fontWeight height left letterSpacing lineHeight marginBottom marginLeft marginRight marginTop maxHeight maxWidth minHeight minWidth opacity outlineColor outlineOffset outlineWidth paddingBottom paddingLeft paddingRight paddingTop right textIndent top width wordSpacing zIndex").split(" ");function e(j,k,l){return(j+(k-j)*l).toFixed(3)}function i(k,j,l){return k.substr(j,l||1)}function c(l,p,s){var n=2,m,q,o,t=[],k=[];while(m=3,q=arguments[n-1],n--){if(i(q,0)=="r"){q=q.match(/\d+/g);while(m--){t.push(~~q[m])}}else{if(q.length==4){q="#"+i(q,1)+i(q,1)+i(q,2)+i(q,2)+i(q,3)+i(q,3)}while(m--){t.push(parseInt(i(q,1+m*2,2),16))}}}while(m--){o=~~(t[m+3]+(t[m]-t[m+3])*s);k.push(o<0?0:o>255?255:o)}return"rgb("+k.join(",")+")"}function b(l){var k=parseFloat(l),j=l.replace(/^[\-\d\.]+/,"");return isNaN(k)?{v:j,f:c,u:""}:{v:k,f:e,u:j}}function d(m){var l,n={},k=g.length,j;h.innerHTML='<div style="'+m+'"></div>';l=h.childNodes[0].style;while(k--){if(j=l[g[k]]){n[g[k]]=b(j)}}return n}a[f]=function(p,m,j){p=typeof p=="string"?document.getElementById(p):p;j=j||{};var r=d(m),q=p.currentStyle?p.currentStyle:getComputedStyle(p,null),l,s={},n=+new Date,k=j.duration||200,u=n+k,o,t=j.easing||function(v){return(-Math.cos(v*Math.PI)/2)+0.5};for(l in r){s[l]=b(q[l])}o=setInterval(function(){var v=+new Date,w=v>u?1:(v-n)/k;for(l in r){p.style[l]=r[l].f(s[l].v,r[l].v,t(w))+r[l].u}if(v>u){clearInterval(o);j.after&&j.after()}},10)}})("emile",this);
  function $(e) { return document.getElementById(e); }
  function css(elm, styles) { for(var style in styles) { elm.style[style] = styles[style]; }}
  function isFF() { return !!navigator.userAgent.match(/Firefox/); }

  function brrrrring() {

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
    function coin() {
      if(isFF()) {
        return "data:audio/wav;base64,UklGRtIQAABXQVZFZm10IBAAAAABAAEAESsAABErAAABAAgAZGF0Ya4QAAB/gIB/f3+AgIB/f39/gICAgH9/f3+AgX2AgoF9gXJ8mZBxWm+dr4lWR3/AsGw9U6XRmkIueNPKbCg8p+eqPx5m1d97HCqd7sVIDFHP85MeEoP5214FN7f7sDARatnhex8zmOC6USVeudOMOjuGyLhkNVunxpNKQ366s3BAW5+/k1JIe7Sxc0ZcmrmWWkp2rbF7TFiQtpxiS3ClsIJSV4mxoGtNap2vilpUga2jclBllq2QYFV6paV7VmKOqpVoV3SfpYFbX4immW5Zb5ilh2FegaKbdVxrk6OLZl98nZx7X2mMoY9sX3eXnIBkZ4eeknJhdJKchGhmgpuUd2NxjpuIbGd+l5V7Zm6KmYtwZ3qTloBpbYaXjnRod5CVg2xsgZSPeGp1jJSGcWx+kY98bXOIk4d0bXuPkH5vcoWSinZteYyQgXFxgo+Lem54iY+EdHF/jYx8cHaGjoV3cX2Mi39ydYSOhnhye4mMgXR1gYuIe3R5h4uDd3V/ioh9dXmFioN5dX6IiH92eIOKhHp2fYaJgHd3gYqFfHV7hoqBeHeAiYd9dnqFiYN5dn6JiH52eYOJhHp2fYeIgXd3gYmFe3Z7homCeHaAiYd9dnqFiYN5dn6Ih352eYOKhXp1fYeJgHd3gomGe3V8homBeHeAiYd8dnqEiYN4d3+Ih352eYOKhHp2fYeJgHd3gomGe3Z8homBd3eAiYd8dXuGiYJ4dn+Ih353eYOJhHp2foeIf3d4gomFe3V8homBeHeAiYZ8dnqFiYJ5dn+Ih312eoOJhHl2foeIf3Z5gomEend9hoWAe3yAgYGAf39/f4CAgIB/f39/gICAgH9/f3+AgICAf3+AgIB/f4B/gICAgH9/f4CAgIB/f39/gICAgH9/f3+AgICAf39/f4CAgIB/f3+AgH+AgH9/f4CAgH9/f4CAf3+AgICAf39/f4CAgIB/gIB/f3+BgH9/f4CAgIB/f39/gICAgH9/f3+AgICAf39/f4CAgIB/f39/gICAgIB/f4CAgH9/f4CAgIB/f39/gICAgH9/f3+AgICAgH9/gICAf39/gICAgH9/f4B/gX5/goJ9cIyYclqKq35Nf7SGRXK+lj9fwKdETbq3TD+tyVwumdRxJoXbiiFk4KYpTM68Ojm6zlArotlmJYzcfiZ11pIwZMqiPVa8rkdNs7ZTRaS9YUGXwXE9hMOCPnXAkUNouJ1KW7GrV1CisGFKl7lyR4a2fUd5uY9Ma6+XUGGrpVxYnallUZSxdE+FrnxPfLGMU26pk1dlpKBhXpmjaFiRq3VWhah9VXyqilpxopBdap+bZWOVnWtekKR2XIWifVx9o4lfdJ6NYm2bl2lokpluY42eeGKEnH1hfp6HZHWZimdwl5Nsa4+UcWiLmnhmg5h+ZX6ahWd3lYlqc5OQb26OkXJsipV5aoOUfWp/lYRseZGIbnWQjXJxi451b4iSem6DkX5tf5KDb3qPhnB3jYt0dImMdnKHj3twg45+cH+PgnF7jYVyeYuJdnaHinh0hox8c4KLfnN/jIJ0fIqEdXqJh3h4hod5d4WJfHaBiX51f4qBdn2Ig3Z7iIZ4eYWHeXeFiXx2gYl+dYCKgXV9iIN2eomGeHmFh3p3hIl9doKIfnaAioF2fYiDdnqJhnh4hod5d4SJfHeCiX51gIqBdn2Ig3Z6iYZ4eYWHeneEin12gYh+doCKgXV9iIN2e4iFeHmGh3l3hIl8doKIfnaAioF2fYmDdnuIhnh5hoZ6eIWIfHeCiH52gIqBdn2Ig3Z7iIV4eYaGeXiFiHx2gol9doCJgXZ9iIJ3e4iGeHmGhnl4hYh8d4KIfnaAioB2fYiCd3uIhXh6hod5eIWIfHaDiH52gImBdn2IgnZ8iIV4eoaGeXiFiHt3gol9doGJgXZ9iIJ2e4iFeHqGhnl4hYh7d4KIfnd/ioF2foiCd3yIhXh5hoZ5eIWIe3eCiH52gYmAdn6Ignd8iIR4eoaGeXiFiXx3goh9doCJgHZ+iIJ2fIiEeHqGhnl4hYh7d4KIfXaBiYB2foiCd3yIhHh7hoZ5eIWIfHeCiH13gImAd36IgnZ8iIR4e4aFeXiFiHx3goh9doGJgHd+iIF3fIiFeHqGhnl4hYh7eIOHfXeBiYB3foiCd3yIhHh6hoZ5eIWIfHeCiH13gYmAd36IgXd8iIV5eoWFeXmGh3t4g4d9d4GJf3d+iIF3fYiEeHqGhXl5hod7eIOHfXeBiX93foiBdn2IhHh7hoV5eYaHe3eDiH13gYh/d36IgXZ9iIR4e4aFeXmFh3t4g4d8d4GJf3d+iIF3fYiEeHuGhXl5hYd7eIOHfHeBiH93f4iBd32IhHh7hoV5eYWHe3iDh313gYh/d3+IgXd9iIN4e4aFeHqFh3t4g4h8d4GIf3d/iIF2fYiDeHuGhHl6hYd8eIKHfHeCiX93foiBd32Ig3h7hoR5eYaHe3iDh313gYh/d3+HgXd+iIN4fIaEeXmGh3t4g4d8d4KIf3d/iIB3fYiDeXuGhHl6hYZ7eIOHfHeCiX93f4eBd36Ig3h7hoR5eoWGe3mDh3x3goh/d4CHgHd+iIN4fIaEeXqFhnt5g4d8d4KIf3eAh4B3fYiDeHyGhHl6hYZ7eYOGfHiCiH93gIeBd36Ig3l7hoN5eoaGenmDh3x4gYd/eH+Hf3d+iIN4fIaDeXqGhnp5g4d8eIGIf3h/h4B4fYeDeXyFg3l6hYZ6eYOGfHiCiH93gIiAd36Ignh8hoR5eoaGe3mDhnx4goh/d4CHgHh+iIJ4fIaDeXuFhnt5g4Z8eIKHfniAh394foiCeHyGg3l7hYZ6eYOGfHmCh354f4eAeH6Hgnh9hoN5eoaGe3mDhnx4god+eICHf3h+iIJ4fIaEeXuFhXt6g4Z8eYKIf3iAh394f4eCeX2Ggnl7hYV7eYOGfHiCh354gId/eH6Ignh8hoN5e4WFe3mDhnx5god+eICHf3h+h4J5fIaDeXuGhXp6hIZ8eYOHfniAhoB4foeCeXyGg3l7hoR7eoSFfHmCh354gYaAeH6Hgnl8hoN5e4WFe3qEhXx5god+eIGGgHh+h4J5fIaDeXuFhXp6g4V8eYKHfniBh394f4eCeX2Ggnl8hoV6eoSGe3mDh354gYd/eH+Hgnh9hoN6e4WEe3qDhXt5g4d+eYCGf3l/h4F5fYaDeXuFhXt6hIV7eYKGfniBhn95f4eCeX2Gg3l8hYR7eoSFe3mDhn15gIZ/eH+Hgnl9hoN5fIWEe3uDhXt5g4Z9eYGGf3h/h4F5fYaCeXyGhHt6hIV8eYKGfnmAhn94f4eBeH2Ggnl8hoR7eoSFfHmChn55gYZ+eX+HgXl9hoN5fIaEenuEhXx5g4Z+eYCGf3iAhoF5foWCeXyFhHt7g4R8eoOFfnqAhX94gIaBeX2Ggnp8hYR7eoSFe3qDhn15gYZ/eX+HgXl+hYJ6fIWEe3uEhXx6g4V+eYGGf3iAhoF5foWCen2Fg3p7hIR8eoOGfnmAhn95gIaAeX6Fgnp8hYN7e4OFfHqDhn15gYZ+eX+GgXl+hYJ6fIWDe3uEhXx6g4Z9eYGFf3l/hoF5fYaCeXyFhHt7hIR7eoOGfnmBhX95gIaAeX6Fgnp8hYN7e4SEe3uDhX16gYZ+eYCFgHp+hYF6fIaDe3uEhHx6g4V9eoGFf3mAhoB5foWCeX2Fg3t7hIR7e4OFfXqBhX56gIaAeX+FgXp8hYN6fISEfHqDhn15gYZ+eYCGgHl/hYF6fIWDenyEhHx6g4V9eoGFf3p/hoB6foaBen2Fg3t7hIN8eoOFfXqBhX55gIaAen6FgXp9hYN7e4SDfHuDhXx6gYV+eYCGgHp+hYF6fYWDe3yDg3x7g4V9eoGFfnqAhoB5f4WBen2Fg3t8g4N7e4OFfXqBhX55gIaAen+FgHp+hYN7fISDe3uDhX16gYV+eYCGgHp+hYF6foWDenyEg3x7g4R9eoGFfnqAhoB6foWBen2Fgnt8g4N8e4OFfXqBhX56gYWAen6FgXp+hYN7fISDfHuDhH16gYV+eoCFgHp/hYF6foWDe3yEg3t7g4R9e4KFfnqAhYB6f4WBen2Fgnt8g4N8e4OEfXqChX56gYWAen6FgXp9hYJ7fISDe3yDhHx8goR9eoGGgHp+hYB6foWCe3yDg3x8g4R9e4KEfnqBhX96f4WBen2Fgnt9hIN7e4OEfXuBhH56gIV/e3+EgXp+hYJ7fYODe3yDhH17gYV+e4CFf3p/hIF6foWCe32Eg3t8g4R9e4GEfnqAhX96f4SAen6Fgnt9g4N7fIOEfXqBhH57gYV/en+FgHt+hYJ7fYSDe3yDhH17goR+e4CFf3qAhIB7foSCe32Eg3x8g4N9e4KEfnuBhX57gISAen6Fgnx9g4J8fIODfXuBhH57gYR/e3+EgHt+hYJ7fYOCfH2DhHx8goR+e4GFf3qAhIB7f4SBe32Egnx8goR8fIKEfXuBhH97f4SAen6EgXt9hIJ7fYODfXuChH57gYR/e3+FgHt/hIF7foOCfHyDg317gYR+e4GEf3t/hIB7foSBe36Dgnt9g4N9e4KDfnuBhH97f4SAe3+EgXt9g4J8fYODfXuChH17gYR/e4CEgHp/hYB7foOCe3yDg317goN9e4GEf3t/hH97foSBe36Dgnx8g4N9fIKDfXuBhH97f4SAe3+EgXt+g4J8fYOCfXyCg357gYR/e4CEf3t+hIJ7foOCfH2Cg318goN+e4GEf3yAg4B8foSBe36Dgnx9g4N9fIGEfnuBhH97f4SAe36EgXx+g4J8fYODfXyCg317gYR/e4CDf3t/hIF8foOBfX2Cg318goN+e4GDf3uAhH97f4SBfH6DgXx9g4J9fYKDfXuBhH97f4R/e3+EgXx+g4F8fYKDfH2Cg358gYR+fICDf3x/hIF8foOBfH2Dg318goN+fIGEf3uAg4B7f4OBfH6DgXx9g4J9fIGDfnyBhH58gIR/fH+DgXx+g4F8fYOCfXyCg358gYN/e4CDgHt/hIF8foOBfH6Dgn18goN9fIGDf3yAg398f4SBfH6DgXx+g4J9fIKCfXyBhH58gYN/e3+EgHx+g4F8foOCfXyCgn18gYN9fIGEf3t/g4F8foOAfH6Dgn19goJ9fIKDfnyAg398f4OBfH6DgXx9goJ9fYKCfXyBg398gIN/fH+DgXx+goF9fYOCfX2Cgn59gYN/fICDf3yAg4B8f4KBfH2Dgn19goJ9fIKDfnyAg398gIOAfH+CgXx+g4J9fYGCfn2Bg398gIN/fH+DgHx+g4B9foOCfX2Cgn19gYN+fICDf3x/g4B8foKBfH6Dgn19goJ9fIGDf3yAg398gIOAfH+DgHx9g4J9foGCfn2Bg398gIN/fICDgHx/g4B9foOCfX2Cgn59gYJ/fYCCf31/g4B8f4KBfH6Cgn19gYJ9fYGDfn2Ag4B8gIOAfH+CgX1+goJ9foGCfX2Bgn99gIJ/fICDgHx/goB9foKBfX6Cgn59gYN+fYGCf3yAgoB8f4KBfX2CgX1+gYJ+fYGCf32Agn98gIOAfX+CgH1+goF+foGCfn2Bg359gIJ/fYCCgH1/goB9foKBfH6Cgn19gIN+fYCCf32AgoB9f4KAfX+CgX1+goF+foGBgH9/f4CAgIB/f39/gH+AgIB/f39/gICAgH9/f3+AgICA";
      }
      return "data:audio/mp3;base64,/+MgxAASKcK0e0FoArRRQAF///5jG//000//0/Uh///9NNNNNPQTTTTL5fL5kJYCdgt5DHYF0C0BeB4EmF0EYHIXBoPg4CH///KAgCH//B8/If///PoAACAQCAQCAQCAf///0P/rUYr/4yLEEhkDbuh/gKgDkv/1mRPGxoKSGt//h1wmKgEBQDUZHBElQMDA0OVHkVrUmPLfyv8qorKpdmJqtFb////pFEvHSikYmiBsYonHR/////IcQMyNz16jZbIOksySCDPBAy8Lh///////4yDEChaK7tgXgJgA/9Zmb+u91K2WtS0Ef/Wy2+pev/9jpuRMuMy3TOmiQfqEiAGSA57DFA5JUJ4y9QcUBZyfu3/8ixmZKKZ88iiySqjL/qKLS+rHlgVGCR6SLhDVAw33wPux3p/ofv/jIsQKFaqG8H/AOALsioYcYtGXf3U0KjQeMShpBTkNPNNZH03tTX/////+VEp8BoPRKJHqUzT3dRw5zB4ThhbH7f68clQoJQpjDrgIK7R6BW4sTfGRIYCUqgJLZYB5J////3/5SMrIiP/jIMQPFxKi1H4KmVb39VOKenuVFB5EYk441pzG0NPqYa7e6//////5CGjYz4QD0yvRard5nXxo6JeJpWLpYIAgRn67h07CaUjE9youGHU/0Hyg95ec1JKMYupACRxgZt///8v//0o2/+MixA0WuqbEfgnZcgtRKiK//YMjiznU415h1dVo21Wqv/////8TAE8T0gNucOyYsUnw1qdXrjMrF5Y0WTYpMrnfcnFZ6eY4U8GEmx+MaRWCKULa1Qoc0S+KUQCdQUAb1rUrV161KqSO/+MgxA4TspacVgTNODqSSKRdo6FamUtet/uyLsg+//3ba9VX/VSoikgfcrM5En3QguEkMzdqzinGMHQLWpavVZu/JbvmKbPL9x8593YxA+RtCtv9Prq6719tXlVCIJUCg+ut/tdmpqb/4yLEGhR6msRfQCgCu2///b///4TCTYaLAcWUVEFGhEhzAOwkQRMJCyipwxtuvLi7Al7STFosGliM1vIwIQfFZvsJMCoADBMRhQADUWj///na//9H0Wd+ynnKjK3p/3e72O5ymm//8Sz/4yDEJBOirrhfgFAANGf9DiEl//+ccPCQlIDzjDitpUNVB3Ks/lwcAIlUBQkKAcIj9QlqEoTBWkxBTUUzLjk4LjSqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/jIsQwAAADSAHAAACqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqg==";
    }
    var audios = [];
    for(var idx = 0; idx < 10; idx++) {
      audios[idx] = new Audio(coin());
    }
    
    function create_coin(cords) {
      var coin = document.createElement("img");
      coin.border = 0;
      coin.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAnCAYAAAAVW4iAAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAYxJREFUeNrEV8lqwzAQzahqz7n12q8pgfxuAnG+ptfeci42r3awQZ7MJiVpDcZCHs3yZhUB2DzzoT8TgK+tRXcc35flzEQ+vjuT8cfl+k0NSlWZnJ3/h1KpmfnyPRT7+1YBeWYgab6c7e+xQGKMQuiGrUMCjvM+goIn2tO8vnF8Ug6WWnIN+T5qLSAGxSokf763V4Zv75dzBCbNgoh2EKwOCSAHIk5L0UzuBM0WaDpu3QjV50I0wtUx5YYxk/fcAgQ1lqAjJYRvIIIiCEYecOUQ8UFtzVF9kRoKHSnCRSuyEsvkMCcj+tREQ8CJGiNocKWGWg/HD6ukS06dsbTU4FlZkB1naUy8EoIWiGAkoVpaUtCRVniaBS8FszXSwcQIjGYyAvi7Tu4LgixEDZxSca2inE4avMqebHW0ThC0qxm8KJB4blOy8qBk3hXN5eyU81DT17IWjiVhC/rC2V5TGe6Zrk8B/wzSbFo7XZMxgOER94Npkn5lDB9+P2i6CuUK2iE42vzTHe1Zz68AAwAtE6cuScSUJgAAAABJRU5ErkJggg==";
      //   add behaviour
      css(coin, {
        border: "0px",
        position: "absolute",
        top: cords.top + "px",
        left: cords.left + "px"
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
      canvas.removeChild(doug);
      alert("May eternal bacon be on your every breakfast plate.");
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
    doug.border = 0;
    css(doug, {
      border: "0px",
      position:"absolute",
      display:"none"
    });
    doug.src = "data:image/png;base64,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"
    window.onmousemove = function(e) {
      css(doug, {
        display: "block",
        left: (e.clientX+5)+"px",
        top: (e.clientY+5)+"px"
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
})();
