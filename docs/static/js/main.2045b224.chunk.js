(this.webpackJsonpgitexpert=this.webpackJsonpgitexpert||[]).push([[0],{17:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),a=n(7),i=n.n(a),s=n(2),u=n(9),j=function(e){var t=e.setCategories,n=Object(c.useState)(""),a=Object(s.a)(n,2),i=a[0],j=a[1];return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("form",{onSubmit:function(e){e.preventDefault(),i.trim().length>2&&(t((function(e){return[i].concat(Object(u.a)(e))})),j(""))},children:Object(r.jsx)("input",{type:"text",value:i,placeholder:"ingresa tu heroe",onChange:function(e){j(e.target.value)}})})})},o=n(10),d=n(6),l=n.n(d),b=n(8),f=function(){var e=Object(b.a)(l.a.mark((function e(t){var n,r,c,a,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=FW72QN9fKjBb7PWxisTfCmL61N2V2800"),e.next=3,fetch(n);case 3:return r=e.sent,e.next=6,r.json();case 6:return c=e.sent,a=c.data,i=a.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(e){var t=e.title,n=e.url;return Object(r.jsxs)("div",{className:"card",children:[Object(r.jsx)("img",{src:n,alt:t}),Object(r.jsx)("p",{children:t})]})},O=function(e){var t=e.category,n=function(e){var t=Object(c.useState)({data:[],loading:!0}),n=Object(s.a)(t,2),r=n[0],a=n[1];return Object(c.useEffect)((function(){f(e).then((function(e){setTimeout((function(){a({data:e,loading:!1})}),3e3)}))}),[e]),r}(t),a=n.data,i=n.loading;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h3",{children:t}),i&&Object(r.jsx)("p",{children:"Loading"}),Object(r.jsx)("div",{className:"card-grid",children:a.map((function(e){return Object(r.jsx)(h,Object(o.a)({},e),e.id)}))})]})},p=function(){var e=Object(c.useState)(["One Punch"]),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h2",{children:"GifExpert"}),Object(r.jsx)(j,{setCategories:a}),Object(r.jsx)("hr",{}),Object(r.jsx)("ul",{children:n.map((function(e){return Object(r.jsx)(O,{category:e},e)}))})]})};i.a.render(Object(r.jsx)(p,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.2045b224.chunk.js.map