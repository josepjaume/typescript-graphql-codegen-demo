(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{122:function(e,n,i){"use strict";i.r(n);var c,t,r=i(0),l=i.n(r),a=i(40),s=i.n(a),d=i(78),o=i(68),j=i(70),v=i(71),u=i(72),b=i(76),h=i(43),O=i(73),m=i(142),x=i(134),p=(i(135),{});!function(e){e.Private="PRIVATE",e.Public="PUBLIC"}(t||(t={}));var g=Object(m.a)(c||(c=Object(O.a)(["\n    query GetCharacters($search: String) {\n  characters(filter: {name: $search}) {\n    results {\n      id\n      name\n      type\n      origin {\n        name\n        dimension\n      }\n      image\n      status\n      gender\n      episode {\n        id\n        name\n      }\n      species\n    }\n  }\n}\n    "])));var f=i(9);var y=function(){var e,n,i=Object(r.useState)(""),c=Object(d.a)(i,2),t=c[0],l=c[1],a=Object(r.useRef)(null),s=function(e){var n=Object(h.a)(Object(h.a)({},p),e);return x.a(g,n)}({variables:{search:t}}),O=s.data,m=s.loading;return Object(f.jsxs)(o.b,{maxW:"container.xl",marginY:"4",children:[Object(f.jsx)(o.a,{marginBottom:4,children:Object(f.jsx)("form",{onSubmit:function(e){var n;l((null===a||void 0===a||null===(n=a.current)||void 0===n?void 0:n.value)||""),e.preventDefault()},children:Object(f.jsxs)(j.b,{children:[Object(f.jsx)(j.c,{pointerEvents:"none",children:Object(f.jsx)(b.a,{color:"gray.300"})}),Object(f.jsx)(j.a,{ref:a,placeholder:"Search..."})]})})}),m?Object(f.jsx)(v.a,{}):Object(f.jsx)(o.f,{minChildWidth:"12rem",spacing:4,children:null===O||void 0===O||null===(e=O.characters)||void 0===e||null===(n=e.results)||void 0===n?void 0:n.map((function(e){var n,i;return Object(f.jsxs)(o.c,{align:"center",flexDirection:"column",children:[Object(f.jsxs)(u.a,{trigger:"hover",children:[Object(f.jsx)(u.f,{children:(null===e||void 0===e?void 0:e.image)&&Object(f.jsx)("img",{src:null===e||void 0===e?void 0:e.image,alt:e.name||"A Rick & Morty's character"})}),Object(f.jsxs)(u.d,{children:[Object(f.jsx)(u.b,{}),Object(f.jsxs)(u.e,{children:[Object(f.jsx)("strong",{children:null===e||void 0===e?void 0:e.name}),","," ",null===e||void 0===e?void 0:e.episode.length," episodes"]}),Object(f.jsx)(u.c,{children:Object(f.jsxs)(o.d,{children:[Object(f.jsxs)(o.e,{children:[null===e||void 0===e?void 0:e.species," (",null===e||void 0===e?void 0:e.gender,")"]}),Object(f.jsxs)(o.e,{children:[null===e||void 0===e||null===(n=e.origin)||void 0===n?void 0:n.name," (",null===e||void 0===e||null===(i=e.origin)||void 0===i?void 0:i.dimension,")"]}),(null===e||void 0===e?void 0:e.type)&&Object(f.jsx)(o.e,{children:null===e||void 0===e?void 0:e.type})]})})]})]}),Object(f.jsx)(o.a,{marginTop:2,children:Object(f.jsx)("strong",{children:null===e||void 0===e?void 0:e.name})})]})}))})]})},S=i(141),k=i(143),w=i(140),P=i(58),B=new S.a({cache:new k.a,uri:"https://rickandmortyapi.com/graphql"});s.a.render(Object(f.jsx)(l.a.StrictMode,{children:Object(f.jsx)(P.a,{children:Object(f.jsx)(w.a,{client:B,children:Object(f.jsx)(y,{})})})}),document.getElementById("root"))}},[[122,1,2]]]);
//# sourceMappingURL=main.dfcba31e.chunk.js.map