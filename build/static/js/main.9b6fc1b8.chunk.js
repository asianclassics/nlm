(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){},28:function(e,t,a){e.exports=a(42)},38:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(20),r=a.n(l);a(19),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=a(6),i=a(21),o=a(5),u=a(25),m=a(16),g=a.n(m),d="http://206.189.71.52/",p="wp-json/wp/v2/",E=["English","Mongolian","Tibetan"],h="REQUEST_PAGES";var f="RECEIVE_PAGES";var b="REQUEST_POSTS";var v="RECEIVE_POSTS";var y=a(17);function N(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isFetching:!1,items:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object.assign({},e,{isFetching:!0});case f:return Object.assign({},e,{isFetching:!1,items:t.pages,lastUpdated:t.receivedAt});case b:return Object.assign({},e,{isFetching:!0});case v:return Object.assign({},e,{isFetching:!1,items:t.posts,lastUpdated:t.receivedAt});default:return e}}var j=Object(s.c)({selectedLanguage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LANG":return t.language;default:return e}},selectedPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"home",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PAGE":return t.page;default:return e}},pages:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:case h:return Object.assign({},e,N(e,t));default:return e}},posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:case b:return Object.assign({},e,N(e,t));default:return e}},pagesByLanguage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:case h:return Object.assign({},e,Object(y.a)({},t.lang,N(e[t.lang],t)));default:return e}},postsByLanguage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:case b:return Object.assign({},e,Object(y.a)({},t.lang,N(e[t.lang],t)));default:return e}}}),O=a(44),k=a(46),P=a(45),w=a(7),_=a(8),L=a(12),A=a(9),S=a(13),T=Object(o.b)(function(e,t){return{active:t.selectedLanguage===e.selectedLanguage}},function(e,t){return{onClick:function(){return e({type:"SET_LANG",language:t.selectedLanguage})}}})(function(e){var t=e.active,a=e.children,n=e.onClick;return c.a.createElement("li",{key:a,onClick:t?null:n,className:t?"lang-active":"lang",style:t?{color:"red"}:{color:"black"}},c.a.createElement("button",{key:a,className:"btn-lang"},a))}),C=Object(o.b)(function(e){return{languages:Object.keys(e.pages.items)}})(function(e){var t=e.languages.map(function(e){return c.a.createElement(T,{key:e,selectedLanguage:e},e)});return c.a.createElement("ul",{className:"language-list"},t)}),F=a(43),I=Object(o.b)(function(e,t){return{active:t.selectedPage===e.selectedPage}},function(e,t){return{onClick:function(){return e({type:"SET_PAGE",page:t.selectedPage})}}})(function(e){var t=e.active,a=e.children,n=e.onClick;return c.a.createElement("li",{key:a,onClick:t?null:n,className:t?"nav-active":"nav",style:t?{color:"red"}:{color:"black"}},c.a.createElement("button",{key:a,className:"btn-nav"},a))}),G=Object(o.b)(function(e){return{navigation:(t=e.pages.items[e.selectedLanguage],t.map(function(e){return{match:e.slug.substring(0,4),title:"home"===e.slug.substring(0,4)?"Home":e.title.rendered,slug:e.slug,order:e.menu_order}}))};var t})(function(e){var t=e.navigation.map(function(e){return c.a.createElement(I,{key:e.slug,selectedPage:e.match},c.a.createElement(F.a,{to:e.slug},e.title))});return c.a.createElement("ul",{className:"nav-list"},t)}),U=function(){return c.a.createElement("header",{id:"header"},c.a.createElement(C,null),c.a.createElement(G,null))},H=function(){return c.a.createElement("footer",{id:"footer"},c.a.createElement("ul",{className:"alt-icons"},c.a.createElement("li",null,c.a.createElement("a",{href:"#1",className:"icon fa-twitter"},c.a.createElement("span",{className:"label"},"Twitter"))),c.a.createElement("li",null,c.a.createElement("a",{href:"#1",className:"icon fa-facebook"},c.a.createElement("span",{className:"label"},"Facebook"))),c.a.createElement("li",null,c.a.createElement("a",{href:"#1",className:"icon fa-linkedin"},c.a.createElement("span",{className:"label"},"LinkedIn"))),c.a.createElement("li",null,c.a.createElement("a",{href:"#1",className:"icon fa-github"},c.a.createElement("span",{className:"label"},"GitHub"))),c.a.createElement("li",null,c.a.createElement("a",{href:"#1",className:"icon fa-phone"},c.a.createElement("span",{className:"label"},"Phone"))),c.a.createElement("li",null,c.a.createElement("a",{href:"#1",className:"icon fa-envelope"},c.a.createElement("span",{className:"label"},"Email")))),c.a.createElement("ul",{className:"menu"},c.a.createElement("li",null,c.a.createElement("a",{href:"#1"},"Terms of Use")),c.a.createElement("li",null,c.a.createElement("a",{href:"#1"},"Privacy Policy")),c.a.createElement("li",null,c.a.createElement("a",{href:"#1"},"Contact Us"))),c.a.createElement("p",{className:"copyright"},"\xa9 Untitled Corp. YO. All rights reserved. ACIP."))},B=function(e){function t(e){var a;return Object(w.a)(this,t),(a=Object(L.a)(this,Object(A.a)(t).call(this,e))).resetPage=function(){a.props.dispatch({type:"SET_PAGE",page:"home"})},a.setNumber={0:"one",1:"one",2:"two",3:"three",4:"four"},a}return Object(S.a)(t,e),Object(_.a)(t,[{key:"renderPage",value:function(e,t){return t.some(function(t){return t.slug.substring(0,4)===e})||(console.log("page not there"),this.resetPage()),t.filter(function(t){return t.slug.substring(0,4)===e}).map(function(t,a){var n=t._embedded["wp:featuredmedia"][0].source_url;return c.a.createElement("div",{key:a},c.a.createElement("section",{id:"banner",key:t.id,style:{backgroundImage:"linear-gradient(to bottom, rgba(255,255,255,0.2) 0%,rgba(255,255,255,1.0) 100%), url(".concat(n,")")}},c.a.createElement("header",{className:"major"},c.a.createElement("span",{className:"icon fa-angellist style7"}),c.a.createElement("h1",null,t.acf.title),c.a.createElement("h3",null,t.acf.subtitle)),c.a.createElement("ul",{className:"actions"},c.a.createElement("li",null,c.a.createElement("a",{href:"#1",className:"button scrolly"},"Proceed")))),"home"===e?null:c.a.createElement("section",{key:a,id:a,className:"wrapper special style1"},c.a.createElement("div",{className:"inner-page"},c.a.createElement("section",{className:"spotlights"},c.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.content.rendered}}),c.a.createElement("ul",{className:"actions"},c.a.createElement("li",null,c.a.createElement("a",{href:"#".concat(a+1),className:"button"},t.acf.subtitle)))))))})}},{key:"renderPosts",value:function(e,t){if("home"===e&&t)return t.map(function(e,t){var a=t%2===0?1:3,n="";return e._embedded["wp:featuredmedia"]&&(n=e._embedded["wp:featuredmedia"][0].source_url||""),3===a?c.a.createElement("section",{key:t,id:t,className:"wrapper special style".concat(a)},c.a.createElement("div",{className:"inner"},c.a.createElement("section",{className:"spotlights"},c.a.createElement("section",null,c.a.createElement("h2",null,e.acf.title),c.a.createElement("span",{className:"image"},c.a.createElement("img",{src:n,alt:""}))),c.a.createElement("section",null,c.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.content.rendered}}),c.a.createElement("ul",{className:"actions"},c.a.createElement("li",null,c.a.createElement("a",{href:"#".concat(t+1),className:"button"},e.acf.subtitle))))))):c.a.createElement("section",{key:t,id:t,className:"wrapper special style".concat(a)},c.a.createElement("div",{className:"inner"},c.a.createElement("section",{className:"spotlights"},c.a.createElement("section",null,c.a.createElement("h2",null,e.acf.title),c.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.content.rendered}}),c.a.createElement("ul",{className:"actions"},c.a.createElement("li",null,c.a.createElement("a",{href:"#".concat(t+1),className:"button"},e.acf.subtitle)))),c.a.createElement("section",null,c.a.createElement("span",{className:"image"},c.a.createElement("img",{src:n,alt:""})),c.a.createElement("h2",null,"Lacus elementum")))))})}},{key:"render",value:function(){return this.props.fetchingPages||this.props.fetchingPosts?c.a.createElement("div",null,"LOADING"):c.a.createElement("div",{className:"container"},c.a.createElement(U,null),this.renderPage(this.props.selectedPage,this.props.pages),this.renderPosts(this.props.selectedPage,this.props.posts),c.a.createElement(H,null))}}]),t}(n.Component),M=Object(o.b)(function(e){return{fetchingPages:e.pages.isFetching,fetchingPosts:e.posts.isFetching,selectedLanguage:e.selectedLanguage,selectedPage:e.selectedPage,pages:e.pages.isFetching?[]:e.pages.items[e.selectedLanguage],posts:e.posts.isFetching?[]:e.posts.items[e.selectedLanguage]}})(B),R=function(e){function t(){return Object(w.a)(this,t),Object(L.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(S.a)(t,e),Object(_.a)(t,[{key:"render",value:function(){return console.log(this.props),c.a.createElement("div",null,"WPPosts")}}]),t}(n.Component),D=function(){return c.a.createElement(O.a,null,c.a.createElement(k.a,null,c.a.createElement(P.a,{exact:!0,path:"/",component:M}),c.a.createElement(P.a,{path:"/:page",component:M}),c.a.createElement(P.a,{path:"/posts",component:R})))},W=(a(38),Object(i.createLogger)()),x=Object(s.d)(j,Object(s.a)(u.a,W));x.dispatch(function(e){return e({type:h}),g()("".concat(d).concat(p,"pages?_embed")).then(function(e){return e.json()},function(e){return console.log("An error ",e)}).then(function(e){return e.reduce(function(e,t){return e[t.acf.language]=e[t.acf.language]||[],e[t.acf.language].push(t),e},[])}).then(function(t){e(function(e){return{type:f,pages:e,receivedAt:Date.now()}}(t))})}),x.dispatch(function(e){return e({type:b}),g()("".concat(d).concat(p,"posts?_embed")).then(function(e){return e.json()},function(e){return console.log("An error ",e)}).then(function(e){return e.reduce(function(e,t){return e[t.acf.language]=e[t.acf.language]||[],e[t.acf.language].push(t),e},[])}).then(function(t){return e(function(e){return{type:v,posts:e,receivedAt:Date.now()}}(t))})});r.a.render(c.a.createElement(function(){return document.body.classList.add("landing"),c.a.createElement(o.a,{store:x},c.a.createElement(D,null))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[28,2,1]]]);
//# sourceMappingURL=main.9b6fc1b8.chunk.js.map