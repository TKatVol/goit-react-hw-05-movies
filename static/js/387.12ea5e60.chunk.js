"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{559:function(n,e,t){t.d(e,{B:function(){return l}});var r,a,c,o=t(168),s=t(444),i=s.ZP.div(r||(r=(0,o.Z)(["\n  display: flex;\n  padding: 20px;\n  align-items: center;\n"]))),u=s.ZP.p(a||(a=(0,o.Z)(["\n  font-weight: 800;\n  color: #78141b;\n"]))),f=s.ZP.img(c||(c=(0,o.Z)(["\n  margin-right: 20px;\n"]))),p=t(340),h=t(184),l=function(n){var e=n.message;return(0,h.jsxs)(i,{children:[(0,h.jsx)(f,{src:p,alt:"movie card",width:"240",height:"340"}),(0,h.jsx)(u,{children:e})]})}},387:function(n,e,t){t.r(e),t.d(e,{Reviews:function(){return l},default:function(){return d}});var r,a=t(885),c=t(689),o=t(791),s=t(402),i=t(559),u=t(207),f=t(168),p=t(444).ZP.div(r||(r=(0,f.Z)(["\n  padding: 20px;\n"]))),h=t(184),l=function(){var n=(0,c.UO)().movieId,e=(0,o.useState)(null),t=(0,a.Z)(e,2),r=t[0],f=t[1],l=(0,o.useState)(!1),d=(0,a.Z)(l,2),w=d[0],v=d[1],x=(0,o.useState)(""),g=(0,a.Z)(x,2),m=g[0],b=g[1];return(0,o.useEffect)((function(){v(!0),(0,u.SB)(n).then((function(n){var e=n.results;f(e)})).catch((function(n){b(n)})).finally((function(){return v(!1)}))}),[n]),(0,h.jsxs)(p,{children:[(0,h.jsx)(s.NB,{visible:w,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]}),r&&r.length>0&&(0,h.jsx)("ul",{children:r.map((function(n){var e=n.id,t=n.author,r=n.content;return(0,h.jsxs)("li",{children:[(0,h.jsx)("h3",{children:t}),(0,h.jsx)("p",{children:r})]},e)}))}),r&&0===r.length&&(0,h.jsx)("p",{children:"We don't have any reviews for this movie."}),m&&(0,h.jsx)(i.B,{message:m.message})]})},d=l},207:function(n,e,t){t.d(e,{SB:function(){return h},bI:function(){return u},fS:function(){return f},pX:function(){return p},wr:function(){return i}});var r=t(861),a=t(757),c=t.n(a),o="a054d8c11346494a17ab5d0edb325506",s="https://api.themoviedb.org/3",i=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(s,"/trending/all/day?api_key=").concat(o));case 2:return e=n.sent,n.next=5,e.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(s,"/search/movie?api_key=").concat(o,"&query=").concat(e));case 2:if((t=n.sent).ok){n.next=5;break}throw new Error("Oops.. Something went wrong. Please try again later...");case 5:return n.next=8,t.json();case 8:return n.abrupt("return",n.sent);case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(s,"/movie/").concat(e,"?api_key=").concat(o));case 2:if((t=n.sent).ok){n.next=5;break}throw new Error("Oops.. Something went wrong. Please try again later...");case 5:return n.next=8,t.json();case 8:return n.abrupt("return",n.sent);case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(s,"/movie/").concat(e,"/credits?api_key=").concat(o));case 2:if((t=n.sent).ok){n.next=5;break}throw new Error("Oops.. Something went wrong. Please try again later...");case 5:return n.next=8,t.json();case 8:return n.abrupt("return",n.sent);case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(s,"/movie/").concat(e,"/reviews?api_key=").concat(o));case 2:if((t=n.sent).ok){n.next=5;break}throw new Error("Oops.. Something went wrong. Please try again later...");case 5:return n.next=8,t.json();case 8:return n.abrupt("return",n.sent);case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},340:function(n,e,t){n.exports=t.p+"static/media/defaultImage.1251c5577cbe7b5fbf1b.jpg"}}]);
//# sourceMappingURL=387.12ea5e60.chunk.js.map