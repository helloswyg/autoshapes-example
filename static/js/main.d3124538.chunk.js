(this["webpackJsonpautoshapes-example"]=this["webpackJsonpautoshapes-example"]||[]).push([[0],{10:function(n,t,e){},12:function(n,t,e){"use strict";e.r(t);var a=e(2),r=e.n(a),o=e(4),c=e.n(o),i=(e(9),e(10),e(0));function f(n,t){for(var e=n.flat(),a=0,r=0;r<e.length;r++){var o=e[r];"number"===typeof o&&("y"===t&&(e[r]=a%2===0?o:-o),"x"===t&&(e[r]=a%2===1?o:-o),a+=1)}return new i.a(e)}function u(n){return f(n,"y")}function l(n,t){for(var e=n.flat(),a=0;a<e.length;a++){var r=e[a];"number"===typeof r&&(e[a]=r*t)}return new i.a(e)}function s(n){return l(n,.5)}function h(n){return l(n,2)}function p(n){var t=new i.a;return"M"!==n[0].flat()[0]&&(t=t=new i.a("M 0 0")),n.forEach((function(n){var e=t.flat(),a=n.flat(),r=e[e.length-2],o=e[e.length-1],c=0;if("number"!==typeof r||"number"!==typeof o)return t;for(var f=0;f<a.length;f++){var u=a[f];"number"===typeof u&&(a[f]=u+(c%2===0?r:o),c+=1)}t=t.concat(new i.a(a))})),t}var w,v=new i.a("C 25 50 25 100 0 100"),d=new i.a("C 25 0 25 50 0 100"),b=new i.a("C 50 0 100 50 100 100"),g=new i.a("C 0 50 50 100 100 100"),m=new i.a("C 50 25 75 50 100 100"),y=new i.a("C 25 50 50 75 100 100"),C=new i.a("C 50 25 90 25 100 25"),j=new i.a("C 10 0 50 0 100 25"),x=new i.a("C 25 0 25 0 25 0"),M=p([m,v,(w=d,f(f(w,"x"),"y")),u(y)]),O=p([m,u(y)]),I=p([C,u(j)]),P=p([C,j]);p([b,function(n){return f(n,"x")}(v),s(s(x)),u(d),u(g)]);function k(n){for(var t=100,e=100,a=new i.a(["M",t,e+n[0]]),r=n.length,o=1;o<n.length+1;o++){var c=n[o%r],f=c*Math.sin(2*o*Math.PI/r)+t,u=c*Math.cos(2*o*Math.PI/r)+e,l=f+-Math.cos(2*o*Math.PI/r)*c/r*4,s=u+Math.sin(2*o*Math.PI/r)*c/r*4;a=1===o?a.concat(["C",20+t,n[0]+e,l,s,f,u]):a.concat(["S",l,s,f,u])}return a=a.concat(["z"])}k([75,75]),k([75,75,20]),k([75,75,20,90]),k([75,75,20,100,25]);function F(n){var t=Object(i.c)().addTo(n).size("100%","100%"),e=t.gradient("linear",(function(n){n.stop(0,"#333"),n.stop(1,"#f03")})),a=p([s(u(O)),P,s(M),h(u(M)),I]),r={rotate:20,translateX:0,translateY:300,scale:.5,flip:"y"};return t.path(a).fill("none").stroke({color:e.url(),width:3,opacity:.8}).transform(r),t.polyline(function(n){for(var t=n.flat(),e=[],a=0;a<t.length;a++){var r=t[a];"number"===typeof r&&(e=e.concat(r))}return new i.b(e)}(a)).fill("none").stroke({color:"#faa",width:0}).transform(r),t}var E=e(1);var S=function(){return Object(a.useEffect)((function(){F("#line-example")})),Object(E.jsxs)("div",{className:"App",children:[Object(E.jsx)("h1",{children:"Hello World"}),Object(E.jsx)("div",{id:"line-example",style:{width:"100%",height:"100%"}})]})},T=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,13)).then((function(t){var e=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;e(n),a(n),r(n),o(n),c(n)}))};c.a.render(Object(E.jsx)(r.a.StrictMode,{children:Object(E.jsx)(S,{})}),document.getElementById("root")),T()},9:function(n,t,e){}},[[12,1,2]]]);
//# sourceMappingURL=main.d3124538.chunk.js.map