parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
var e=document.getElementById("canvas"),t=e.getContext("2d"),r=document.getElementById("start"),o=100,n=4,a=n,c=Array(n),d=16,i={},l=0;function f(){for(var e=0;e<n;e++){c[e]=Array(a);for(var t=0;t<a;t++){var r=e*a+t+1;r===d&&(i.row=e,i.col=t),c[e][t]=r}}}function k(){for(var e=0;e<1e3;e++){switch(Math.floor(4*Math.random())){case 0:s(1,0,!0);break;case 1:s(0,1,!0);break;case 2:s(-1,0,!0);break;case 3:s(0,-1,!0)}}}function v(){t.clearRect(0,0,e.width,e.height);for(var i=0;i<n;i++)for(var f=0;f<a;f++)c[i][f]!==d&&(t.fillStyle="black",t.font="50px 'Rowdies', cursive",t.textAlign="center",t.textBaseline="middle",t.fillText("".concat(c[i][f]),f*o+50,i*o+55)),t.strokeStyle="black",t.strokeRect(f*o,i*o,o,o);l>0&&(r.innerText=l),l>0&&y()&&(r.disabled=!1,r.innerText="スタート ".concat(l),alert("クリア！"))}function s(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=i.row+e,d=i.col+t;if(!(o<0||o>=n||d<0||d>=a)){var f=[c[o][d],c[i.row][i.col]];c[i.row][i.col]=f[0],c[o][d]=f[1],i.row=o,i.col=d,r||(l++,v())}}function y(){for(var e=0;e<n;e++)for(var t=0;t<a;t++){var r=e*a+t+1;if(c[e][t]!==r)return!1}return!0}document.addEventListener("keydown",function(e){87===e.keyCode||38===e.keyCode?s(1,0):65===e.keyCode||37===e.keyCode?s(0,1):83===e.keyCode||40===e.keyCode?s(-1,0):68!==e.keyCode&&39!==e.keyCode||s(0,-1)}),r.addEventListener("click",function(e){e.target.disabled=!0,r.innerText="スタート",e.target.blur(),l=0,k(),v()}),f(),v();
},{}]},{},["epB2"], null)