(this.webpackJsonpcryptotracker=this.webpackJsonpcryptotracker||[]).push([[0],{54:function(e,c,t){},83:function(e,c,t){"use strict";t.r(c);var a=t(1),n=t.n(a),s=t(17),r=t.n(s),i=(t(54),t(23)),j=t(7),l=t(91),d=t(85),o=t(92),b=t(18),O=t(0),x=function(){return Object(O.jsx)(l.a,{bg:"dark",variant:"dark",expand:"lg",children:Object(O.jsxs)(d.a,{children:[Object(O.jsx)(b.LinkContainer,{to:"/",children:Object(O.jsx)(l.a.Brand,{children:"Crypto-Tracker"})}),Object(O.jsx)(o.a,{className:"ml-auto",children:Object(O.jsx)(b.LinkContainer,{to:"/favourite",children:Object(O.jsx)(o.a.Link,{children:"Favourites"})})})]})})},h=t(9),u=Object(a.createContext)(),m=function(e){var c=Object(a.useState)(!1),t=Object(h.a)(c,2),n=t[0],s=t[1];return Object(O.jsx)(u.Provider,{value:[n,s],children:e.children})},p=t(86),f=t(49),k=Object(a.createContext)(),g=function(e){var c=Object(a.useState)([]),t=Object(h.a)(c,2),n=t[0],s=t[1];return Object(a.useEffect)((function(){}),[]),Object(O.jsx)(k.Provider,{value:[n,s],children:e.children})},v=function(e){var c=e.price;return Object(O.jsx)(O.Fragment,{children:c>0?Object(O.jsxs)("i",{style:{color:"#718C00"},className:"fas fa-sort-up",children:[c.toFixed(2),"%"]}):Object(O.jsxs)("i",{style:{color:"#C82829"},className:"fas fa-sort-down",children:[c.toFixed(2),"%"]})})},y=function(e){var c=e.coin,t=Object(a.useContext)(k),n=Object(h.a)(t,2),s=n[0],r=n[1],i=Object(a.useState)(!1),j=Object(h.a)(i,2),l=j[0],d=j[1];return Object(a.useEffect)((function(){s.includes(c)&&d(!0)})),Object(O.jsxs)("tr",{children:[Object(O.jsx)(b.LinkContainer,{to:"/coin/".concat(c.id),children:Object(O.jsx)("td",{children:c.market_cap_rank})}),Object(O.jsx)(b.LinkContainer,{to:"/coin/".concat(c.id),children:Object(O.jsxs)("td",{children:[Object(O.jsx)("img",{style:{width:"20px"},src:c.image,alt:c.id}),Object(O.jsx)("span",{className:"coinName",children:c.id})," ","\u2022"," ",c.symbol.toUpperCase()]})}),Object(O.jsx)(b.LinkContainer,{to:"/coin/".concat(c.id),children:Object(O.jsx)("td",{children:Object(O.jsx)(v,{price:c.price_change_percentage_24h})})}),Object(O.jsx)(b.LinkContainer,{to:"/coin/".concat(c.id),children:Object(O.jsx)("td",{children:c.current_price.toLocaleString("en-US",{style:"currency",currency:"USD"})})}),Object(O.jsx)("td",{onClick:function(){l?(r(s.filter((function(e){return e!==c.id}))),d(!1)):(r((function(e){return[].concat(Object(f.a)(e),[c])})),d(!0))},children:l?Object(O.jsx)("i",{style:{color:"yellow"},className:"fas fa-star"}):Object(O.jsx)("i",{className:"far fa-star"})})]})},N=function(e){var c=e.coins;return Object(O.jsxs)(p.a,{striped:!0,responsive:!0,borderless:!0,hover:!0,variant:"dark",children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Rank"}),Object(O.jsx)("th",{children:"Name"}),Object(O.jsx)("th",{children:"24h Change"}),Object(O.jsx)("th",{children:"Price"}),Object(O.jsx)("th",{})]})}),Object(O.jsx)("tbody",{children:c.map((function(e){return Object(O.jsx)(y,{coin:e},e.id)}))})]})},C=t(87),S=t(88),_=function(e){var c=e.title,t=e.price,a=e.change;return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"coinStats",children:[Object(O.jsx)("div",{className:"coinStatsTitle",children:Object(O.jsx)("p",{className:"my-0",children:c})}),Object(O.jsx)("div",{className:"coinStatsValue",children:Object(O.jsxs)("p",{children:[t.toLocaleString("en-US",{style:"currency",currency:"USD"}),Object(O.jsx)("sup",{children:Object(O.jsx)(v,{price:a})})]})})]})})},w=function(){return Object(O.jsxs)(d.a,{className:"px-4 py-5  hero my-4",children:[Object(O.jsx)("h1",{className:" fw-bold text-white text-center",children:"Crypto Tracker"}),Object(O.jsxs)(C.a,{className:"text-white py-4",children:[Object(O.jsx)(S.a,{children:Object(O.jsx)(_,{title:"Market Cap",price:0x775caa5deaae,change:.2})}),Object(O.jsx)(S.a,{children:Object(O.jsx)(_,{title:"Volume",price:123,change:-.56571})}),Object(O.jsx)(S.a,{children:Object(O.jsxs)("div",{className:"coinStats",children:[Object(O.jsx)("div",{className:"coinStatsTitle",children:Object(O.jsx)("p",{className:"my-0",children:"Btc Dominance"})}),Object(O.jsx)("div",{className:"coinStatsValue",children:Object(O.jsxs)("p",{children:["44.70%",Object(O.jsx)("sup",{children:Object(O.jsx)(v,{price:.2})})]})})]})})]})]})},F=t(27),L=t.n(F),T=t(89),P=function(){return Object(O.jsx)(T.a,{animation:"border",role:"status",style:{width:"100px",height:"100px",margin:"auto",display:"block"},children:Object(O.jsx)("span",{style:{color:"white"},className:"sr-only",children:"Loading..."})})},B=function(){var e=Object(a.useState)([]),c=Object(h.a)(e,2),t=c[0],n=c[1],s=Object(a.useContext)(u),r=Object(h.a)(s,2),i=(r[0],r[1]);return Object(a.useEffect)((function(){i(!0),L.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false").then((function(e){n(e.data)})),i(!1)})),Object(O.jsxs)(d.a,{children:[Object(O.jsx)(w,{}),Object(O.jsx)(N,{coins:t})]})},E=function(){var e=Object(a.useContext)(k),c=Object(h.a)(e,2),t=c[0];c[1];return Object(O.jsx)(d.a,{children:Object(O.jsx)(N,{coins:t})})},U=t(90),D=function(e){var c=e.name,t=e.icon;return Object(O.jsx)("div",{children:Object(O.jsx)(U.a,{className:"socialButton",variant:"dark",children:Object(O.jsx)("i",{className:t,children:c})})})},R=function(e){var c=e.match,t=Object(a.useState)({}),n=Object(h.a)(t,2),s=n[0],r=n[1],i=Object(a.useContext)(u),j=Object(h.a)(i,2),l=j[0],o=j[1],b=Object(a.useState)(!1),x=Object(h.a)(b,2),m=x[0],p=x[1],f=c.params.id;Object(a.useEffect)((function(){o(!0),L.a.get("https://api.coingecko.com/api/v3/coins/".concat(f)).then((function(e){r(e.data)})),o(!1)}));return l||0===Object.keys(s).length?Object(O.jsx)(P,{}):Object(O.jsxs)(d.a,{className:"py-5",children:[Object(O.jsxs)(C.a,{children:[Object(O.jsx)(S.a,{className:"py-3",sm:12,md:6,children:Object(O.jsx)("div",{className:"coinTitle",children:Object(O.jsx)("div",{children:Object(O.jsxs)("h1",{children:[Object(O.jsx)("img",{style:{width:"50px"},className:"mx-3",src:s.image.large,alt:s.name}),s.name," ",Object(O.jsxs)("sup",{className:"px-1 py-1",style:{backgroundColor:"#FF9332",fontSize:"1rem",borderRadius:"5px",color:"black"},children:["#",s.market_cap_rank]}),Object(O.jsx)("sup",{onClick:function(){p(!m)},children:m?Object(O.jsx)("i",{style:{color:"yellow"},className:"fas fa-star"}):Object(O.jsx)("i",{className:"far fa-star"})})]})})})}),Object(O.jsx)(S.a,{sm:12,md:6,className:"px-5",children:Object(O.jsxs)(C.a,{children:[Object(O.jsx)(S.a,{children:Object(O.jsx)(_,{sm:6,title:"Current Price",price:s.market_data.current_price.usd,change:s.market_data.price_change_percentage_24h})}),Object(O.jsx)(S.a,{children:Object(O.jsx)(_,{sm:6,title:"Market Cap",price:s.market_data.market_cap.usd,change:s.market_data.market_cap_change_percentage_24h})})]})})]}),Object(O.jsx)(C.a,{className:"pt-5",children:Object(O.jsx)(S.a,{children:Object(O.jsxs)("div",{className:"coinStats",children:[Object(O.jsx)("div",{className:"coinStatsTitle",children:Object(O.jsx)("p",{className:"my-0",children:"Socials"})}),Object(O.jsxs)(C.a,{className:"coinStatsValue",children:[Object(O.jsx)(S.a,{children:Object(O.jsx)("a",{href:"www.asd.com",children:"www.botcoin.com"})}),Object(O.jsx)(S.a,{children:Object(O.jsx)(D,{name:"Reddit",icon:"fab fa-reddit"})}),Object(O.jsx)(S.a,{children:Object(O.jsx)(D,{name:"Facebook",icon:"fab fa-reddit"})}),Object(O.jsx)(S.a,{children:Object(O.jsx)(D,{name:"Twitter",icon:"fab fa-reddit"})}),Object(O.jsx)(S.a,{children:Object(O.jsx)(D,{name:"Telegram",icon:"fab fa-reddit"})})]})]})})}),Object(O.jsxs)(C.a,{className:"py-5",children:[Object(O.jsx)("h4",{children:"About"}),Object(O.jsx)("p",{children:s.description.en})]})]})};var V=function(){return Object(O.jsx)(i.HashRouter,{children:Object(O.jsx)(m,{children:Object(O.jsxs)(g,{children:[Object(O.jsx)(x,{}),Object(O.jsx)(j.d,{exact:!0,path:"/",component:B}),Object(O.jsx)(j.d,{path:"/coin/:id",component:R}),Object(O.jsx)(j.d,{path:"/favourite",component:E})]})})})},M=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,93)).then((function(c){var t=c.getCLS,a=c.getFID,n=c.getFCP,s=c.getLCP,r=c.getTTFB;t(e),a(e),n(e),s(e),r(e)}))};r.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(V,{})}),document.getElementById("root")),M()}},[[83,1,2]]]);
//# sourceMappingURL=main.020757ce.chunk.js.map