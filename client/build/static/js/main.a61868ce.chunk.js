(this["webpackJsonprock-paper-scissors-game"]=this["webpackJsonprock-paper-scissors-game"]||[]).push([[0],{10:function(e,a,n){e.exports=n(24)},15:function(e,a,n){},16:function(e,a,n){},22:function(e,a,n){},23:function(e,a,n){},24:function(e,a,n){"use strict";n.r(a);var t=n(0),c=n.n(t),r=n(9),o=n.n(r),i=n(6),s=(n(15),n(16),n(3)),l=n(2),m=n(5);var p=function(){var e=[{title:"Visit my Facebook page !",icon:m.a,link:"https://facebook.com/manjaka13"},{title:"Contribute this game's repository",icon:m.b,link:"https://github.com/Manjaka13/rps-game"},{title:"Visit my LinkedIn page",icon:m.c,link:"https://linkedin.com/mwlite/in/harijaona-rajaonson-9456481b5"}].map((function(e,a){return c.a.createElement("li",{key:a},c.a.createElement("a",{className:"link",href:e.link,title:e.title},c.a.createElement(s.a,{className:"icon",icon:e.icon})))}));return c.a.createElement("div",{className:"rps-navigation"},c.a.createElement("div",{className:"brand"},c.a.createElement("div",{className:"game"},c.a.createElement(s.a,{className:"icon",icon:l.a})),c.a.createElement("h1",{className:"title title-md"},"Rock Paper Scissors")),c.a.createElement("ul",{className:"social"},e))};n(22);var u=function(e){var a=e.weapon_p1?e.weapon_p1:"none",n=e.weapon_p2?e.weapon_p2:"none",t=[{name:"rock",icon:l.c},{name:"paper",icon:l.b},{name:"scissors",icon:l.d}],r=t.map((function(e,n){var t={position:"relative",top:a===e.name?-100*(n+1)+"%":"0"};return c.a.createElement("div",{className:"item",key:n,style:t},c.a.createElement(s.a,{className:"icon "+e.name,icon:e.icon}))})),o=t.map((function(e,a){var t={position:"relative",top:n===e.name?-100*(a+1)+"%":"0"};return c.a.createElement("div",{className:"item",key:a,style:t},c.a.createElement(s.a,{className:"icon "+e.name,icon:e.icon}))})),i="thinking"===n?"Preparing to strike...":"Haha, come on !",m="center center_disabled",p="",u=0;if(t.forEach((function(e){a===e.name&&u++,n===e.name&&u++})),2===u){var d=function(e,a){var n=0;return"rock"===e?n="paper"===a?2:"scissors"===a?1:0:"paper"===e?n="rock"===a?1:"scissors"===a?2:0:"scissors"===e&&(n="rock"===a?2:"paper"===a?1:0),n}(a,n);p=1===d?"Player won !":2===d?"Bot wins !":"Play again !",m="center",setTimeout((function(){e.reset()}),2e3)}return c.a.createElement("div",{className:"rps-board"},c.a.createElement("div",{className:"left"},c.a.createElement("div",{className:"box"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"empty"},c.a.createElement("p",{className:"content"},"Choose a weapon !")),r)),c.a.createElement("p",{className:"text"},"Player")),c.a.createElement("div",{className:m},c.a.createElement("div",{className:"box"},c.a.createElement("p",{className:"win_text"},p))),c.a.createElement("div",{className:"right"},c.a.createElement("div",{className:"box"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"empty"},c.a.createElement("p",{className:"content"},i)),o)),c.a.createElement("p",{className:"text"},"Bot")))};n(23);var d=function(e){var a=!!e.available,n=a?"card":"card card_disabled",t=[{name:"rock",icon:l.c},{name:"paper",icon:l.b},{name:"scissors",icon:l.d}].map((function(t,r){return c.a.createElement("div",{className:n,key:r},c.a.createElement("div",{className:"item",title:"Choose "+t.name,onClick:function(){return function(n){"function"===typeof e.choose&&a&&e.choose(n)}(t.name)}},c.a.createElement(s.a,{className:"icon",icon:t.icon})))}));return c.a.createElement("div",{className:"rps-cardlist"},t)};var v=function(){var e=Object(t.useState)("none"),a=Object(i.a)(e,2),n=a[0],r=a[1],o=Object(t.useState)("none"),s=Object(i.a)(o,2),l=s[0],m=s[1],v=Object(t.useState)(!0),E=Object(i.a)(v,2),f=E[0],N=E[1];return c.a.createElement("div",{className:"rps-app"},c.a.createElement(p,null),c.a.createElement(u,{weapon_p1:n,weapon_p2:l,reset:function(){r((function(){return"none"})),m((function(){return"none"})),N((function(){return!0}))}}),c.a.createElement(d,{available:f,choose:function(e){N((function(){return!f})),r((function(){return e})),m((function(){return"thinking"})),setTimeout((function(){var e=Math.floor(3*Math.random());m((function(){return 0===e?"rock":1===e?"paper":"scissors"}))}),1e3)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.a61868ce.chunk.js.map