(this["webpackJsonpreact-anime-yt"]=this["webpackJsonpreact-anime-yt"]||[]).push([[0],{12:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),a=n.n(c),s=n(5),i=n.n(s),j=(n(12),n(4)),l=n.n(j),u=n(6),h=n(2);var o=function(){return Object(r.jsx)("header",{children:Object(r.jsxs)("h1",{children:["The",Object(r.jsx)("strong",{children:"Anime"}),"stock"]})})};var b=function(e){var t=e.anime;return Object(r.jsx)("article",{className:"anime-card",children:Object(r.jsxs)("a",{href:t.url,target:"_blank",rel:"noreferrer",children:[Object(r.jsx)("figure",{children:Object(r.jsx)("img",{src:t.image_url,alt:"Anime Image"})}),Object(r.jsx)("h4",{children:t.title})]})})};var d=function(e){return Object(r.jsxs)("main",{children:[Object(r.jsx)("div",{className:"main-head",children:Object(r.jsxs)("form",{className:"search-box",onSubmit:e.HandleSearch,children:[Object(r.jsx)("input",{type:"search",placeholder:"Search for an anime...",required:!0,value:e.search,onChange:function(t){return e.SetSearch(t.target.value)}}),Object(r.jsx)("button",{className:"btn",children:"Go"})]})}),Object(r.jsx)("div",{className:"anime-list",children:e.animeList.map((function(e){return Object(r.jsx)(b,{anime:e},e.mal_id)}))})]})};n(14);var m=function(){var e=Object(c.useState)([]),t=Object(h.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)([]),i=Object(h.a)(s,2),j=(i[0],i[1],Object(c.useState)("")),b=Object(h.a)(j,2),m=b[0],O=b[1],x=function(){var e=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.jikan.moe/v3/search/anime?q=".concat(t,"&order_by=title&sort=asc&limit=20")).then((function(e){return e.json()}));case 2:n=e.sent,a(n.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(o,{}),Object(r.jsx)("div",{className:"content-wrap",children:Object(r.jsx)(d,{HandleSearch:function(e){e.preventDefault(),x(m)},search:m,SetSearch:O,animeList:n})})]})};i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(m,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.cf876936.chunk.js.map