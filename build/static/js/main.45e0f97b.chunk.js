(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{212:function(e,t,a){e.exports=a(500)},252:function(e,t){},254:function(e,t){},286:function(e,t){},287:function(e,t){},353:function(e,t){},451:function(e,t,a){e.exports=a.p+"static/media/UB-woodblock-closeup.67ac4b0f.jpg"},452:function(e,t,a){e.exports=a.p+"static/media/calligraphy_icon.b45851d1.ico"},470:function(e,t,a){},472:function(e,t,a){},475:function(e,t,a){},477:function(e,t,a){},479:function(e,t,a){},481:function(e,t,a){},483:function(e,t,a){},486:function(e,t,a){},500:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(204),c=a.n(s);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=a(47),l=a(205),o=a(7),u=a(207),d=a(39),m=a(94),p=a(95),h="REQUEST_PAGES",g="RECEIVE_PAGES",f="REQUEST_POSTS",b="RECEIVE_POSTS",v="REQUEST_GS",E="RECEIVE_GS",y="DETAIL_MODAL",w="RECEIVE_MANIFEST",k="REQUEST_MANIFEST",_="NULLIFY_IIIF",O="RECEIVE_IIIF",N="REQUEST_IIIF",j="REQUEST_ES_DATA",I="RECEIVE_ES_DATA",A="RECEIVE_DATA",L="REQUEST_DATA",S="REQUEST_WORKS",T="RECEIVE_WORKS",W="REQUEST_ID",G="RECEIVE_ID",C="RECEIVE_AUTHORS",D="REQUEST_AUTHORS",x="RECEIVE_TOPICS",R="REQUEST_TOPICS",U="RECEIVE_SUBJECTS",K="REQUEST_SUBJECTS",P="REQUEST_RESOURCES",F="RECEIVE_RESOURCES",M=a(12),V=a.n(M),B=a(36),Q=["bdr:W22677","bdr:W14260","bdr:W1GS135531","bdr:W1GS135873","bdr:W1GS136667","bdr:W1KG10720","bdr:W1KG1132","bdr:W1KG1247","bdr:W1KG1248","bdr:W1KG1249","bdr:W1KG1250","bdr:W1KG1251","bdr:W1KG1252","bdr:W1KG1253","bdr:W1KG1254","bdr:W1KG1279","bdr:W1KG1280","bdr:W1KG1284","bdr:W1KG1286","bdr:W1KG1320","bdr:W1KG1321","bdr:W1KG14630","bdr:W1KG14641","bdr:W1KG14700","bdr:W1KG1558","bdr:W1KG1559","bdr:W1KG1573","bdr:W1KG1578","bdr:W1KG1607","bdr:W1KG1608","bdr:W1KG1609","bdr:W1KG1610","bdr:W1KG1616","bdr:W1KG1617","bdr:W1KG1623","bdr:W1KG1624","bdr:W1KG1625","bdr:W1KG1626","bdr:W1KG1627","bdr:W1KG1645","bdr:W1KG1646","bdr:W1KG1653","bdr:W1KG1655","bdr:W1KG1656","bdr:W1KG1657","bdr:W1KG1658","bdr:W1KG2144","bdr:W1KG26108","bdr:W1KG5182","bdr:W1KG5200","bdr:W22344","bdr:W22434","bdr:W22677","bdr:W8238"],z=a(208),H="157.230.172.69",q=!1,J="red",Y=new(a.n(z).a.Client)({host:{protocol:"http",host:H,port:9200,path:""},log:"info"});function $(){return($=Object(B.a)(V.a.mark(function e(){var t;return V.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:fe("process.env.NODE_ENV ",H);case 1:if(q){e.next=22;break}fe("Connnnnecting....");case 3:if("red"!==J){e.next=20;break}return fe("awaiting green light"),e.prev=5,e.next=8,Y.cluster.health({});case 8:t=e.sent,fe("health: ",t),J=t.status,q=!0,e.next=18;break;case 14:e.prev=14,e.t0=e.catch(5),console.error("Connection is failing...",e.t0),q=!1;case 18:e.next=3;break;case 20:e.next=1;break;case 22:return e.abrupt("return",q);case 23:case"end":return e.stop()}},e,this,[[5,14]])}))).apply(this,arguments)}var X=function(e){var t={aggregations:{uniqueAuthors:{terms:{field:"workCreator.keyword",size:e.length}}},query:{ids:{type:we.type,values:e}}};return Y.search({index:we.initialIndex,body:t})},Z=function(e){var t={aggregations:{uniqueTopics:{terms:{field:"workIsAbout.keyword",size:e.length}}},query:{ids:{type:we.type,values:e}}};return Y.search({index:we.initialIndex,body:t})},ee=a(91),te=function(e,t,a){var n,r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],s=null,c=[];"P"===a?(n="v1_bdrc_person",c=["personName","skos:prefLabel","_*"]):"T"===a?(n=["v1_bdrc_person","v1_bdrc_topic","v1_bdrc_work"],c=["personName","@id","note.noteText","skos:prefLabel","workCreator","workIsAbout","_*"]):"W"===a&&(n="v1_bdrc_work",s="skos:prefLabel.@value.keyword",c=["@id","note.noteText","skos:prefLabel","workCreator","workIsAbout","_*"]);var i={size:t,query:{ids:{type:we.type,values:e}}};return r||(i._source=c),null!==s&&(i.sort=[Object(ee.a)({},s,{order:"asc"})]),fe("search by id body",i),Y.search({index:n,body:i})},ae=function(e,t,a,n){var r={size:18,query:{bool:{must:{term:Object(ee.a)({},t,{value:e})},filter:{ids:{type:we.type,values:a}}}}};return Y.search({index:n,body:r})};function ne(e){switch(e){case S:return{type:S};case D:return{type:D};case K:return{type:K};default:return null}}function re(e,t){return{type:e,data:t,receivedAt:Date.now()}}function se(e){return function(t){fe("fetchSpecificID!",e),t({type:W});try{te([e],1,e.charAt(4),!0).then(function(e){return t({type:G,data:a=e,imageAsset:a.hits.hits[0]._source.workHasItemImageAsset,volume:a.hits.hits[0]._source.workHasItem,receivedAt:Date.now()});var a})}catch(a){console.error("fetch ID error! ",a)}}}var ce=function(){var e=Object(B.a)(V.a.mark(function e(t,a){return V.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.hits.hits.map(function(){var e=Object(B.a)(V.a.mark(function e(t,n){return V.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!("_id"in t)){e.next=4;break}return e.next=3,ae(t._id,a,Q,we.initialIndex).then(function(e){var a=ie(e);return t._related=a});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}()));case 2:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}(),ie=function(e){return e.hits.hits.map(function(){var e=Object(B.a)(V.a.mark(function e(t){var a;return V.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return void 0!==t&&("skos:prefLabel"in t._source?Array.isArray(t._source["skos:prefLabel"])?t._source["skos:prefLabel"].some(function(e){return"en"===e["@language"]})?a=(a=t._source["skos:prefLabel"].find(function(e){return"en"===e["@language"]}))["@value"]:t._source["skos:prefLabel"].some(function(e){return"bo-x-ewts"===e["@language"]})&&(a=(a=t._source["skos:prefLabel"].find(function(e){return"bo-x-ewts"===e["@language"]}))["@value"]):"object"===typeof t._source["skos:prefLabel"]&&(a=t._source["skos:prefLabel"]["@value"]):a=null),e.abrupt("return",t._tid=a);case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()),e.hits.hits.sort(function(e,t){return e._tid.localeCompare(t._tid)}),e},le=a(209),oe=a.n(le),ue="".concat("https://docs.google.com/spreadsheets/d/").concat("1hPqe-Y2TWwMTAxIEXYvc8du_GMFUJQNPvZbJou7veAY","/edit?usp=sharing");var de=function(){var e=Object(B.a)(V.a.mark(function e(){return V.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise(function(e,t){oe.a.init({key:ue,callback:function(a,n){e(a.Stats.elements),t(n)}})});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}();var me="http://178.128.7.239/",pe="wp-json/wp/v2/";var he="http://178.128.7.239/",ge="wp-json/wp/v2/";var fe=function(){},be="en",ve={en:"English",mn:"Mongolian"},Ee=["Title","Author","Subject"],ye=[{browse:"Title",stateType:"esWorks"},{browse:"Author",stateType:"esAuthors"},{browse:"Subject",stateType:"esSubjects"}],we={initialIndex:"v1_bdrc_work",type:"_doc",size:10},ke="max",_e="0",Oe="default.jpg",Ne="/".concat("full","/").concat(ke,"/").concat(_e,"/").concat(Oe),je=function(e){return{type:"SET_LANG",language:e}},Ie=function(e){return{type:"SET_PAGE",page:e}};function Ae(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isFetching:!1,items:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object.assign({},e,{isFetching:!0});case g:return Object.assign({},e,{isFetching:!1,items:t.pages,lastUpdated:t.receivedAt});case f:return Object.assign({},e,{isFetching:!0});case b:return Object.assign({},e,{isFetching:!1,items:t.posts,lastUpdated:t.receivedAt});case L:case S:case j:case P:case D:case R:case K:return Object.assign({},e,{isFetching:!0});case A:case T:case F:case C:case I:case x:case U:return Object.assign({},e,{isFetching:!1,items:t.data,lastUpdated:t.receivedAt});case v:return Object.assign({},e,{isFetching:!0});case E:return Object.assign({},e,{isFetching:!1,gs:t.gs,lastUpdated:t.receivedAt});case W:return Object.assign({},e,{isFetching:!0});case G:return Object.assign({},e,{isFetching:!1,item:t.data,imageAsset:t.imageAsset,volume:t.volume,lastUpdated:t.receivedAt});case k:return Object.assign({},e,{isFetching:!0});case w:return Object.assign({},e,{isFetching:!1,manifestURL:t.manifestURL,lastUpdated:t.receivedAt});case N:return Object.assign({},e,{isFetching:!0});case O:return Object.assign({},e,{isFetching:!1,firstImage:t.firstImage,lastUpdated:t.receivedAt});case _:return Object.assign({},e,{firstImage:null});case y:return Object.assign({},e,{modalID:t.modalID,image:t.image,manifest:t.manifest,show:t.show});default:return e}}function Le(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:case h:return Object.assign({},e,Ae(e,t));default:return e}}function Se(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:case T:case I:case j:case L:case S:return Object.assign({},e,Ae(e,t));default:return e}}function Te(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F:case P:return Object.assign({},e,Ae(e,t));default:return e}}function We(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:case D:return Object.assign({},e,Ae(e,t));default:return e}}function Ge(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:case U:case R:case K:return Object.assign({},e,Ae(e,t));default:return e}}function Ce(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G:case W:return Object.assign({},e,Ae(e,t));default:return e}}function De(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:case v:return Object.assign({},e,Ae(e,t));default:return e}}function xe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:case k:return Object.assign({},e,Ae(e,t));default:return e}}function Re(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:case _:case N:return Object.assign({},e,Ae(e,t));default:return e}}function Ue(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:case f:return Object.assign({},e,Ae(e,t));default:return e}}var Ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LANG":return t.language;case"@@router/LOCATION_CHANGE":return 0===t.payload.location.pathname.split("/")[1].length?e:t.payload.location.pathname.split("/")[1];default:return e}};function Pe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{modalID:0,image:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object.assign({},e,Ae(e,t));default:return e}}var Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"home",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PAGE":return t.page;default:return e}},Me=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_COLLAPSE":return t.collapse;default:return e}},Ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Title",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_BROWSE":return t.browse;default:return e}},Be=function(e){return Object(i.c)({router:Object(p.b)(e),selectedLanguage:Ke,selectedPage:Fe,setCollapse:Me,setBrowse:Ve,pages:Le,posts:Ue,esWorks:Se,esAuthors:We,esSubjects:Ge,esResources:Te,gsData:De,detailData:Ce,manifestData:xe,IIIFData:Re,detailModal:Pe})},Qe=a(503),ze=a(504),He=a(505),qe=a(502),Je=a(49),Ye=a(50),$e=a(63),Xe=a(51),Ze=a(64),et=a(455),tt=a(17),at=(new tt.b)(function(e){var t=e.active,a=e.children,n=e.dispatch,s=e.lang,c=e.i18n;return r.a.createElement("li",{key:a,onClick:function(){var e;n(je(s)),e=s,console.log("in language connector with",e),c.changeLanguage(e)},className:t?"lang-active":"lang",style:t?{color:"red"}:{color:"black"}},r.a.createElement("button",{key:a,disabled:!!t,className:"btn-lang"},a))}),nt=Object(o.c)(function(e,t){return{active:t.selectedLanguage===e.selectedLanguage,lang:t.selectedLanguage||be}})(at),rt=a(501),st=(new tt.b)(function(e){var t;return t=Object.entries(e.t("languageCodes")).map(function(t){var a=Object(et.a)(t,2),n=a[0],s=a[1],c="home"===e.page?"":"/".concat(e.page);return r.a.createElement(rt.a,{key:n,to:"/".concat(n).concat(c)},r.a.createElement(nt,{key:s,selectedLanguage:n},s))}),r.a.createElement("ul",{className:"language-list"},t)}),ct=Object(o.c)(function(e){return{page:e.selectedPage}})(st),it=Object(o.c)(function(e,t){return{active:t.selectedPage===e.selectedPage}},function(e,t){return{onClick:function(){return e(Ie(t.selectedPage))}}})(function(e){var t=e.active,a=e.children,n=e.onClick;return r.a.createElement("li",{key:a,onClick:t?null:n,className:t?"nav-active":"nav",style:t?{color:"red"}:{color:"black"}},r.a.createElement("button",{key:a,disabled:!!t,className:"btn-nav"},a))}),lt=(new tt.b)(function(e){var t=e.navigation.map(function(t){var a="home"===t.match?"":"/".concat(t.match);return r.a.createElement(rt.a,{key:t.slug,to:"/".concat(e.lng).concat(a)},r.a.createElement(it,{key:t.slug,selectedPage:t.match},e.t("pages")[t.match]))});return r.a.createElement("ul",{className:"nav-list"},t)}),ot=Object(o.c)(function(e){return{navigation:(t=e.pages.items[e.selectedLanguage],t.map(function(e){return{match:e.slug.split("-")[0],title:"home"===e.slug.substring(0,4)?"Home":e.title.rendered,slug:e.slug,order:e.menu_order}})),lang:e.selectedLanguage,page:e.selectedPage};var t})(lt),ut=function(){return r.a.createElement("header",{id:"header"},r.a.createElement(ct,null),r.a.createElement(ot,null))},dt=Object(tt.b)()(function(e){return r.a.createElement("footer",{id:"footer"},r.a.createElement("div",{className:"icon"},r.a.createElement("img",{src:"http://".concat("178.128.7.239","/wp-content/uploads/2018/10/nlm-logo-no-text.png"),alt:"mongolia-logo"})),r.a.createElement("ul",{className:"menu"},r.a.createElement("li",null,r.a.createElement("a",{href:"mailto:info@asianclassics.org",target:"_blank",rel:"noopener noreferrer"},e.t("footer.contact"))),r.a.createElement("li",null,r.a.createElement("a",{href:"http://nationallibrary.mn/mn/",target:"_blank",rel:"noopener noreferrer"},e.t("footer.library-site"))),r.a.createElement("li",null,r.a.createElement("a",{href:"http://178.128.7.239/wp-login.php",target:"_blank",rel:"noopener noreferrer"},e.t("footer.login")))),r.a.createElement("p",{className:"copyright"},"\xa9 ","".concat("2018"," ").concat(e.t("title"),". ").concat(e.t("footer.rights"),".")))}),mt=(a(470),Object(o.c)(function(e){return{fetchingPosts:e.posts.isFetching,selectedLanguage:e.selectedLanguage,posts:e.posts.isFetching?[]:(t="acf",a="order",n=e.posts.items[e.selectedLanguage],n.sort(function(e,n){return e[t][a]<n[t][a]?-1:e[t][a]>n[t][a]?1:0}))};var t,a,n})(function(e){var t=e.posts;return t?t.map(function(e,t){var a=t%2===0?1:3,n="";return e._embedded["wp:featuredmedia"]&&(n=e._embedded["wp:featuredmedia"][0].source_url||""),2===parseInt(e.acf.columns)?(console.log("2 columns!"),r.a.createElement("section",{key:t,id:t,className:"wrapper special style".concat(a)},r.a.createElement("div",{className:"inner"},r.a.createElement("section",{className:"spotlights"},r.a.createElement("section",null,r.a.createElement("h2",null,e.acf.title),r.a.createElement("span",{className:"image"},r.a.createElement("img",{src:n,alt:""}))),r.a.createElement("section",null,r.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.content.rendered}})))))):r.a.createElement("section",{key:t,id:t,className:"wrapper special style".concat(a)},r.a.createElement("div",{className:"inner"},r.a.createElement("section",{className:"spotlights col1"},r.a.createElement("section",null,r.a.createElement("h2",null,e.acf.title),r.a.createElement("span",{className:"image"},r.a.createElement("img",{src:n,alt:""})),r.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.content.rendered}})))))}):r.a.createElement("div",null)})),pt=a(451),ht=a.n(pt),gt=(a(472),function(e){var t=e.stats,a=e.t;return r.a.createElement("section",{className:"wrapper special style3"},r.a.createElement("div",{className:"inner"},r.a.createElement("section",{className:"spotlights"},r.a.createElement("section",null,r.a.createElement("h2",null,a("stats.Title")),r.a.createElement("ul",{className:"list-stats"},r.a.createElement("li",{className:"stat-item"},r.a.createElement("p",null,a("stats.LastUpdate"),": ",r.a.createElement("em",null,t.LastUpdate))),r.a.createElement("li",{className:"stat-item"},r.a.createElement("p",null,a("stats.PagesDigitized"),": ",r.a.createElement("em",null,t.PagesDigitized))),r.a.createElement("li",{className:"stat-item"},r.a.createElement("p",null,a("stats.VolumesDigitized"),": ",r.a.createElement("em",null,t.VolumesDigitized))),r.a.createElement("li",{className:"stat-item"},r.a.createElement("p",null,a("stats.VolumesCataloged"),": ",r.a.createElement("em",null,t["VolumesCataloged(normalized)"]))),r.a.createElement("li",{className:"stat-item"},r.a.createElement("p",null,a("stats.TitlesCataloged"),": ",r.a.createElement("em",null,t["TitlesCataloged(ACIP)"]))))),r.a.createElement("section",null,r.a.createElement("span",{className:"image"},r.a.createElement("img",{src:ht.a,alt:""}))))))}),ft=(a(475),function(e){function t(){return Object(Je.a)(this,t),Object($e.a)(this,Object(Xe.a)(t).apply(this,arguments))}return Object(Ze.a)(t,e),Object(Ye.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"sidenav wrapper style1"},"Browse by:",r.a.createElement("form",null,Ee.map(function(t){return r.a.createElement("div",{key:t,className:"col-4 col-12-small"},r.a.createElement("input",{id:t,type:"radio",value:t,checked:e.props.browse===t,onChange:function(t){return e.props.dispatch({type:"SET_BROWSE",browse:t.target.value})}}),r.a.createElement("label",{htmlFor:t},t))})))}}]),t}(n.Component)),bt=(new tt.b)(ft),vt=Object(o.c)(function(e){return{collapse:e.setCollapse,browse:e.setBrowse}})(bt),Et=function(e){function t(){var e,a;Object(Je.a)(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(a=Object($e.a)(this,(e=Object(Xe.a)(t)).call.apply(e,[this].concat(s)))).unpackNames=function(e,t){if(Array.isArray(e["rdfs:label"])){var a=e["rdfs:label"].map(function(e,t){return r.a.createElement("p",{key:t,className:"modal-text"},r.a.createElement("span",{className:"meta-italics"},"(",e["@language"],"): "),r.a.createElement("span",{className:"meta-title"},e["@value"]))});return r.a.createElement("div",{key:t,className:"modal-text"},r.a.createElement("span",{className:"meta-detail"},t.split("Person")[1],": "),a)}return r.a.createElement("p",{key:t,className:"modal-text"},r.a.createElement("span",{className:"meta-detail"},t.split("Person")[1],": "),r.a.createElement("span",{className:"meta-italics"},"(",e["rdfs:label"]["@language"],"): "),r.a.createElement("span",{className:"meta-title"},e["rdfs:label"]["@value"]))},a.unpack=function(e){return null===e?null:Array.isArray(e)?e.map(function(e,t){return"object"===typeof e?a.unpack(e):"bdr"===e.substring(0,3)?r.a.createElement("div",{key:t,className:"card-sub-item"},r.a.createElement("div",{onClick:function(){return a.showModal(e.split(":")[1])}},e)):r.a.createElement("div",{key:t,className:"card-sub-item"},e)}):"object"===typeof e?e.hasOwnProperty("type")?a.unpackNames(e,e.type):r.a.createElement("p",{key:e["@value"],className:"modal-text"},r.a.createElement("span",{className:"meta-title"},e["@value"])):"string"===typeof e?"bdr"===e.substring(0,3)?r.a.createElement("div",{onClick:function(){return a.showModal(e.split(":")[1])}},e):e:void 0},a.buildAttribution=function(e){return r.a.createElement("p",{className:"meta-detail"},r.a.createElement("span",null,e("archives.attribution")))},a.parseType=function(e,t,n,s){var c=e["skos:prefLabel"],i=e["@id"],l=e.type,o=e.workCatalogInfo,u=e.personName,d=e.note,m=e["adm:access"],p=r.a.createElement("p",{className:"meta-detail"},r.a.createElement("span",null,s("modal.detail")," ",i,", "),r.a.createElement("span",null," ",l)),h=a.buildAttribution(s),g=r.a.createElement("button",{className:"modal-btn",onClick:t},r.a.createElement("i",{className:"fa fa-2x fa-times"}),s("technical.btn-close"));switch(d=void 0!==d?d.noteText:null,fe("modal type",l),l){case"Person":return r.a.createElement("div",{className:"detail-data"},p,r.a.createElement("div",{className:"modal-title"},a.unpack(c)),r.a.createElement("div",{className:""},r.a.createElement("span",{className:"lead-item"},s("modal.names"),": "),r.a.createElement("span",{className:"meta-catalog"},a.unpack(u))),g);case"Topic":return r.a.createElement("div",{className:"detail-data"},p,r.a.createElement("div",{className:"modal-title"},a.unpack(c)),null===d?null:r.a.createElement("div",{className:"meta-catalog"},s("modal.note"),": ",null!==d?a.unpack(d):null),g);case"Work":var f=a.buildScansBtn(m,s),b=null;return b="bdr:AccessRestrictedByTbrc"===m?r.a.createElement("div",null,s("modal.image-restricted")):"Not Found"===n?r.a.createElement("div",null,s("modal.image-not-found")):null==n?r.a.createElement("div",{className:"blinky"},s("technical.loading-image")):r.a.createElement("img",{src:n,width:"100%",alt:"scan"}),r.a.createElement("div",{className:"detail-data"},r.a.createElement("div",{className:"modal-title"},a.unpack(c)),p,b,h,r.a.createElement("div",{className:"meta-catalog"},a.unpack(o)),g,f);default:return null}},a}return Object(Ze.a)(t,e),Object(Ye.a)(t,[{key:"buildScansBtn",value:function(e,t){var a=null;return void 0!==this.props.manifestURL&&(a=0===this.props.manifestURL.length?null:"bdr:AccessRestrictedByTbrc"===e?r.a.createElement("button",{disabled:!0},r.a.createElement("i",{className:"fa fa-2x fa-eye-slash"})," ",t("modal.scans-restricted")):r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"/uv.html?manifest="+this.props.manifestURL},r.a.createElement("button",null,r.a.createElement("i",{className:"fa fa-2x fa-eye"})," ",t("modal.scans")))),a}},{key:"render",value:function(){var e,t=this.props.show?"modal display-block":"modal display-none";return e=Object.keys(this.props.workDetail).length>0?this.parseType(this.props.workDetail._source,this.props.hideModal,this.props.image,this.props.t):r.a.createElement("div",{className:"blinky"},this.props.t("technical.loading")," ",this.props.doc_id),r.a.createElement("div",{className:t,onClick:this.props.hideModal},r.a.createElement("section",{className:"modal-main"},e))}}]),t}(n.Component),yt=Object(tt.b)()(Et),wt=Object(o.c)(function(e){return{workDetail:e.detailData.isFetching||0===e.detailModal.modalID?{}:e.detailData.item.hits.hits[0],resources:e.esResources.isFetching?[]:e.esResources,image:e.detailModal.image,manifestURL:e.detailModal.manifest,numberVolumes:e.detailData.isFetching||0===e.detailModal.modalID?null:e.detailData.item.hits.hits[0]._source.workNumberOfVolumes}})(yt),kt=(a(477),Object(o.c)(function(e){return{doc_id:e.detailModal.modalID,showModal:e.detailModal.show}})(function(e){var t=e.related,a=e.dispatch,n=e.doc_id,s=e.showModal;if(null==t)return null;var c=t.hits.hits.map(function(e,t){var n=e._source,s=n._resources,c=n._firstImageURL,i=n._manifestURL,l="Not Found"===c?null:"".concat(c,"/").concat(Ne);return r.a.createElement("div",{key:t,className:"something-items card-item-link",onClick:function(){return function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;a(se(e)),a({type:"DETAIL_MODAL",modalID:e,image:t,manifest:n,show:!0})}(e._id,s,l,i)}},e._tid)});return r.a.createElement("div",null,c,r.a.createElement(wt,{key:n,hideModal:function(){a({type:"DETAIL_MODAL",show:!1}),a({type:"NULLIFY_IIIF"})},doc_id:n,show:s}))})),_t=(a(479),Object(o.c)(function(e){return{esWorks:e.esWorks.isFetching?[]:e.esWorks.items.hits.hits,esAuthors:e.esAuthors.isFetching?[]:e.esAuthors.items.hits.hits,esSubjects:e.esSubjects.isFetching?[]:e.esSubjects.items.hits.hits,browse:e.setBrowse,collapse:e.setCollapse,doc_id:e.detailModal.modalID,showModal:e.detailModal.show}})(function(e){var t=ye.find(function(t){return t.browse===e.browse});if(!e[t.stateType].length)return r.a.createElement("div",{className:"blinky"},"LOADING ","".concat(e.browse,"S"));var a=e[t.stateType].map(function(t,a){var n=t._source,s=n._resources,c=n._firstImageURL,i=n._manifestURL,l="Not Found"===c?"Not Found":"".concat(c,"/").concat(Ne);return r.a.createElement("div",{key:a},r.a.createElement("span",{className:"item-title card-item-link",onClick:function(){return function(t){arguments.length>1&&void 0!==arguments[1]&&arguments[1];var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;e.dispatch(se(t)),e.dispatch({type:"DETAIL_MODAL",modalID:t,image:a,manifest:n,show:!0})}(t._id,s,l,i)}},t._tid),t._related?r.a.createElement(kt,{related:t._related}):null)});return r.a.createElement("div",null,a,null==e.doc_id?null:r.a.createElement(wt,{key:e.doc_id,hideModal:function(){e.dispatch({type:"DETAIL_MODAL",show:!1}),e.dispatch({type:"NULLIFY_IIIF"})},doc_id:e.doc_id,show:e.showModal}))})),Ot=(a(481),(new tt.b)(function(e){var t=e.browse;return r.a.createElement("div",{className:"content"},r.a.createElement(vt,null),r.a.createElement("div",{className:"grid"},r.a.createElement("h1",{className:"archives-title"},"".concat(t,"s")),r.a.createElement(_t,null)))})),Nt=Object(o.c)(function(e){return{browse:e.setBrowse,collapse:e.setCollapse}})(Ot),jt=a(452),It=a.n(jt),At=function(e){function t(e){var a;return Object(Je.a)(this,t),(a=Object($e.a)(this,Object(Xe.a)(t).call(this,e))).setLang=function(e){var t=a.props,n=t.i18n,r=t.dispatch;n.changeLanguage(e),r(je(e))},a.resetPage=function(){a.props.dispatch({type:"SET_PAGE",page:"home"}),a.setLang(be)},a.setNumber={0:"one",1:"one",2:"two",3:"three",4:"four"},a}return Object(Ze.a)(t,e),Object(Ye.a)(t,[{key:"componentWillMount",value:function(){this.languageCheckAndUpdate()}},{key:"componentDidUpdate",value:function(){var e=this;window.onpopstate=function(t){t.preventDefault(),e.languageCheckAndUpdate()}}},{key:"languageCheckAndUpdate",value:function(){var e=this.props,t=e.history,a=e.url,n=e.selectedPage,r=e.dispatch,s=e.t;void 0!==a.split("/")[2]?Object.keys(s("pages")).includes(a.split("/")[2])?r(Ie("archives")):(r(Ie("home")),t.push("/".concat(a.split("/")[1]))):r(Ie("home")),a.split("/")[1]in ve?this.setLang(a.split("/")[1],n):(this.setLang(be,n),t.push(be))}},{key:"renderPage",value:function(e,t){return t.some(function(t){return t.slug.split("-")[0]===e})||(fe("page not there"),this.resetPage()),t.filter(function(t){return t.slug.split("-")[0]===e}).map(function(e,t){var a=null;return e._embedded["wp:featuredmedia"]&&(a=e._embedded["wp:featuredmedia"][0].source_url),r.a.createElement("div",{key:e.slug},r.a.createElement("section",{id:"banner",key:e.id,style:{backgroundImage:"linear-gradient(to bottom, \n                  rgba(239, 239, 239,0.1) 50%,\n                  rgba(239, 239, 239,1.0) 100%), \n                  url(".concat(a,")")}},r.a.createElement("header",{className:"major"},r.a.createElement("span",{className:"icon style7"},r.a.createElement("img",{width:"90px",alt:"hi",src:It.a})),r.a.createElement("h1",null,e.acf.title),r.a.createElement("h3",null,e.acf.subtitle),r.a.createElement("div",{className:"inner-page"},r.a.createElement("section",{className:"spotlights-page"},r.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.content.rendered}}))))))})}},{key:"render",value:function(){return this.props.fetchingPages||this.props.fetchingPosts?r.a.createElement("div",{className:"blinky"},this.props.t("technical.loading")):r.a.createElement("div",{className:"container"},r.a.createElement(ut,null),this.renderPage(this.props.selectedPage,this.props.pages),fe("is it archives?",this.props.selectedPage,this.props.pages),"home"===this.props.selectedPage?r.a.createElement("div",null,r.a.createElement(gt,{stats:this.props.gs,t:this.props.t}),r.a.createElement(mt,null)):null,"archives"===this.props.selectedPage?r.a.createElement(Nt,null):null,r.a.createElement(dt,null))}}]),t}(n.Component),Lt=(new tt.b)(At),St=Object(o.c)(function(e){return{router:e.router,url:e.router.location.pathname,fetchingPages:e.pages.isFetching,selectedLanguage:e.selectedLanguage||be,selectedPage:e.pages.isFetching?[]:e.pages.items[e.selectedLanguage].some(function(t){return t.slug.split("-")[0]===e.selectedPage})?e.selectedPage:"home",pages:e.pages.isFetching?[]:e.pages.items[e.selectedLanguage],gs:e.gsData.isFetching?{}:e.gsData.gs}})(Lt),Tt=function(){return r.a.createElement(Qe.a,null,r.a.createElement(ze.a,null,r.a.createElement(He.a,{path:"/en",component:St}),r.a.createElement(He.a,{path:"/mn",component:St}),r.a.createElement(He.a,{path:"/en/archives",component:St}),r.a.createElement(He.a,{path:"/mn/archives",component:St}),r.a.createElement(He.a,{path:"/mn/\u0410\u0440\u0445\u0438\u0432\u0443\u0443\u0434",component:St}),r.a.createElement(qe.a,{push:!0,from:"*",to:"/en",component:St})))},Wt=(a(483),a(486),a(129)),Gt=a(453),Ct=a.n(Gt),Dt=a(454),xt=a.n(Dt);Wt.a.use(Ct.a).use(xt.a).use(tt.a).init({fallbackLng:"en",debug:!0,load:"languageOnly",returnObjects:!0,interpolation:{escapeValue:!1},react:{wait:!0}});Wt.a,Object(l.createLogger)();var Rt=Object(d.a)(),Ut=Object(i.e)(Be(Rt),Object(i.d)(Object(i.a)(Object(m.a)(Rt),u.a)));Ut.dispatch(function(e){return e({type:h}),fetch("".concat(me).concat(pe,"pages?_embed")).then(function(e){return e.json()},function(e){return console.log("An error ",e)}).then(function(e){return e.reduce(function(e,t){var a=Object.keys(ve).find(function(e){return ve[e]===t.acf.language});return e[a]=e[a]||[],e[a].push(t),e},[])}).then(function(t){e(function(e){return{type:g,pages:e,receivedAt:Date.now()}}(t))})}),Ut.dispatch(function(e){return e({type:f}),fetch("".concat(he).concat(ge,"posts?_embed")).then(function(e){return e.json()},function(e){return console.log("An error ",e)}).then(function(e){return e.reduce(function(e,t){var a=Object.keys(ve).find(function(e){return ve[e]===t.acf.language});return e[a]=e[a]||[],e[a].push(t),e},[])}).then(function(t){return e(function(e){return{type:b,posts:e,receivedAt:Date.now()}}(t))})}),Ut.dispatch(function(){var e=Object(B.a)(V.a.mark(function e(t){var a,n;return V.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:v}),e.prev=1,e.next=4,de();case 4:return a=e.sent,fe("GS Data:",a),n={},a.map(function(e){var t=e.StatName.split(" ").join("");n[t]=isNaN(e.Value)?e.Value:String(e.Value).replace(/(.)(?=(\d{3})+$)/g,"$1,")}),e.abrupt("return",t({type:E,gs:n,receivedAt:Date.now()}));case 11:e.prev=11,e.t0=e.catch(1),console.error("error from tabletop",e.t0);case 14:case"end":return e.stop()}},e,this,[[1,11]])}));return function(t){return e.apply(this,arguments)}}()),function(){$.apply(this,arguments)}(),Ut.dispatch(function(){var e=Object(B.a)(V.a.mark(function e(t){var a,n;return V.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(ne(S)),e.prev=1,e.next=4,te(Q,Q.length,"W");case 4:return a=e.sent,n=ie(a),e.abrupt("return",t(re(T,n)));case 9:e.prev=9,e.t0=e.catch(1),console.error("there been fetchData error ",e.t0);case 12:case"end":return e.stop()}},e,this,[[1,9]])}));return function(t){return e.apply(this,arguments)}}()),Ut.dispatch(function(){var e=Object(B.a)(V.a.mark(function e(t){var a,n,r,s;return V.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(ne(D)),e.prev=1,e.next=4,X(Q);case 4:return a=e.sent,n=a.aggregations.uniqueAuthors.buckets.map(function(e){return e.key}),e.next=8,te(n,n.length,"P");case 8:return r=e.sent,e.next=11,ce(r,"workCreator.keyword");case 11:return fe("did it await the big AUTHORS mutation?",r),s=ie(r),e.abrupt("return",t(re(C,s)));case 16:e.prev=16,e.t0=e.catch(1),console.error("been done error in fetchAuthors",e.t0);case 19:case"end":return e.stop()}},e,this,[[1,16]])}));return function(t){return e.apply(this,arguments)}}()),Ut.dispatch(function(){var e=Object(B.a)(V.a.mark(function e(t){var a,n,r,s;return V.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(ne(K)),e.prev=1,e.next=4,Z(Q);case 4:return a=e.sent,fe("initial topic search",a),n=a.aggregations.uniqueTopics.buckets.map(function(e){return e.key}),e.next=9,te(n,n.length,"T");case 9:return r=e.sent,fe("did it await searchByID?",r),e.next=13,ce(r,"workIsAbout.keyword");case 13:return fe("did it await the big TOPICS mutation?",r),s=ie(r),e.abrupt("return",t(re(U,s)));case 18:e.prev=18,e.t0=e.catch(1),console.error("been error in da fetchTopics",e.t0);case 21:case"end":return e.stop()}},e,this,[[1,18]])}));return function(t){return e.apply(this,arguments)}}());c.a.render(r.a.createElement(function(){return document.body.classList.add("landing"),r.a.createElement(o.a,{store:Ut},r.a.createElement(p.a,{history:Rt},r.a.createElement(Tt,null)))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[212,2,1]]]);
//# sourceMappingURL=main.45e0f97b.chunk.js.map