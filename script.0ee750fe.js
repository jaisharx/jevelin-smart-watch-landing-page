parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"L4bL":[function(require,module,exports) {
gsap.to(".layer-1",{y:"-100vh",delay:.2}),gsap.to(".layer-2",{y:"-100vh",delay:.3}),gsap.to(".layer-3",{y:"-100vh",delay:.4}),gsap.to(".overlay",{y:"-100vh",delay:.8}),gsap.fromTo(".text",{x:"30rem",opacity:0},{x:"0",opacity:1,ease:"back.out(1.7)",delay:1.2}),gsap.fromTo(".watch-wrapper",{x:"30rem",opacity:0},{x:"0",opacity:1,ease:"back.out(1.7)",delay:1.4}),gsap.fromTo(".circle-small",{x:"-30rem",opacity:0},{x:"0",opacity:1,ease:"back.out(1.7)",delay:.8}),gsap.fromTo(".circle-large",{x:"30rem",opacity:0},{x:"0",opacity:1,ease:"back.out(1.7)",delay:1});
},{}]},{},["L4bL"], null)
//# sourceMappingURL=script.0ee750fe.js.map