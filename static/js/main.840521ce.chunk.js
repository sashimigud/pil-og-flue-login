(window["webpackJsonplogin-og-signup"]=window["webpackJsonplogin-og-signup"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/Bouvet-logo.5fb48959.png"},,,function(e,t,n){e.exports=n(39)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(16),l=n.n(c),o=(n(25),n(17)),i=n.n(o),u=(n(26),n(7)),s=(n(27),n(5)),m=function(){return r.a.createElement("div",{className:"home-container"},r.a.createElement("div",{className:"left-panel"},r.a.createElement("div",{className:"login-link"},r.a.createElement(s.b,{className:"home-nav-link pulse",to:"/login"},"PLAY NOW"))),r.a.createElement("div",{className:"right-panel"},r.a.createElement("div",{className:"sign-up-link"},r.a.createElement(s.b,{className:"home-nav-link wiggle",to:"/signup"},"SIGN UP HERE"))))},p=n(9),b=n(6),f=(n(33),n(34),function(e){var t=e.handleChange,n=e.label;return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{className:"custom-input-label"},n.toUpperCase(),":"),r.a.createElement("input",{className:"custom-input",onChange:t,placeholder:"...",name:n}))}),h=(n(35),function(e){var t=e.children,n=e.handleClick;return r.a.createElement("button",{className:"custom-button",onClick:n},t)});function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var E=Object(u.g)((function(e){var t=e.history,n=Object(a.useState)({username:"",email:""}),c=Object(b.a)(n,2),l=c[0],o=l.username,i=l.email,u=c[1];return r.a.createElement("div",{className:"login-container"},r.a.createElement("h2",{className:"login-header"},"PLAY NOW"),r.a.createElement("form",{className:"login-form",onSubmit:function(e){e.preventDefault(),console.log("submit fired!",o,i)},autoComplete:"off"},r.a.createElement(f,{label:"username",handleChange:function(e){var t=e.target,n=t.name,a=t.value;u((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(n,!0).forEach((function(t){Object(p.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,Object(p.a)({},n,a))}))},value:o,type:"text"}),r.a.createElement(h,{handleClick:function(){return t.push("/dashboard")}},"PLAY")))})),d=(n(36),n(37),function(){var e=Object(a.useState)(!1),t=Object(b.a)(e,2),n=t[0],c=t[1];return r.a.createElement("div",{className:"checkbox-container"},r.a.createElement("p",null,"I will attend the dinner: "),r.a.createElement("input",{className:"checkbox",type:"checkbox",onClick:function(){c(!n)}}))});function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var v=Object(u.g)((function(e){var t=e.children,n=e.history,c=(e.mode,Object(a.useState)({username:"",email:""})),l=Object(b.a)(c,2),o=l[0],i=o.username,u=o.email,s=l[1],m=function(e){var t=e.target,n=t.name,a=t.value;s((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(n,!0).forEach((function(t){Object(p.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,Object(p.a)({},n,a))}))};return r.a.createElement("div",{className:"signup-container"},r.a.createElement("h2",{className:"signup-header"},t,":"),r.a.createElement("form",{className:"signup-form",autoComplete:"off"},r.a.createElement(f,{label:"username",handleChange:m,value:i,type:"text",placeholder:"Username"}),r.a.createElement(f,{label:"email",handleChange:m,value:u,type:"text",placeholder:"Email"}),r.a.createElement(d,null),r.a.createElement(h,{handleClick:function(){n.push("/dashboard")}},t)))})),j=(n(38),Object(u.g)((function(e){var t=e.history,n=Object(a.useState)(!1),c=Object(b.a)(n,2),l=c[0],o=c[1];return r.a.createElement("div",{className:"dashboard-container"},r.a.createElement("div",null,r.a.createElement("h1",{className:"user-greeting"},"Hello Username"),r.a.createElement("p",{className:"user-message"},"Get ready to play!")),r.a.createElement("div",{className:"dash-button-container"},r.a.createElement(h,{handleClick:function(){o(!l)}},"TOGGLE UPDATE DETAILS")),l?r.a.createElement(v,null,"UPDATE DETAILS"):null,r.a.createElement("p",null,"OR"),r.a.createElement("button",{onClick:function(){return t.push("/")},className:"logout-button"},"LOG OUT"))})));var y=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"app-container"},r.a.createElement("h1",{className:"pof-heading"},"Pil og Flue"),r.a.createElement(u.d,null,r.a.createElement(u.b,{exact:!0,path:"/",component:m}),r.a.createElement(u.b,{path:"/login",component:E}),r.a.createElement(u.b,{path:"/signup",render:function(){return r.a.createElement(v,null,"SIGN UP")}}),r.a.createElement(u.b,{path:"/dashboard",component:j}),r.a.createElement(u.b,{render:function(){return r.a.createElement(u.a,{to:"/"})}})),r.a.createElement("img",{className:"bouvet-logo",src:i.a,alt:"Bouvet logo"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(s.a,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[20,1,2]]]);
//# sourceMappingURL=main.840521ce.chunk.js.map