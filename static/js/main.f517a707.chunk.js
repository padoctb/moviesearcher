(this.webpackJsonpmoviesearcher=this.webpackJsonpmoviesearcher||[]).push([[0],{15:function(e,n,t){e.exports=t.p+"static/media/no-poster-img.f6209671.jpg"},29:function(e,n,t){},32:function(e,n,t){e.exports=t.p+"static/media/background.9b284953.png"},33:function(e,n,t){e.exports=t.p+"static/media/background-dark.9a30e6c6.png"},38:function(e,n,t){e.exports=t.p+"static/media/delete.1dca1cc3.svg"},40:function(e,n,t){e.exports=t.p+"static/media/moon.ce5810a7.svg"},41:function(e,n,t){e.exports=t.p+"static/media/sun.af5bd09b.svg"},45:function(e,n,t){e.exports=t(62)},62:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(20),i=t.n(o),c=t(5),u=t(8),l=t(18),s=t(31),p=t(10);function d(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?d(t,!0).forEach((function(n){Object(p.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var g={popular:{isLoading:!1,data:{}},top_rated:{isLoading:!1,data:{}},moviesByGenre:{isLoading:!1,data:{},title:null},findedMovies:{isLoading:!1,data:{}}};function m(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function v(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?m(t,!0).forEach((function(n){Object(p.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var b={isLoading:!1,data:{}};function h(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function O(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?h(t,!0).forEach((function(n){Object(p.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var y={favoritesMovies:JSON.parse(localStorage.getItem("favoritesMovies"))?JSON.parse(localStorage.getItem("favoritesMovies")):[]};function E(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function x(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?E(t,!0).forEach((function(n){Object(p.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):E(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var j={lang:localStorage.getItem("lang")||"ru"};function w(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function _(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?w(t,!0).forEach((function(n){Object(p.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var k={isLoading:!0,data:{}},T=Object(l.c)({moviesListReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"GET_MOVIES_BY_SEARCH":return f({},e,{findedMovies:{data:n.payload,isLoading:!1}});case"GET_MOVIES_BY_SEARCH LOAD_START":return f({},e,{findedMovies:f({},e.findedMovies,{isLoading:!0})});case"GET_MOVIES_BY_GENRE_DATA LOAD_START":return f({},e,{moviesByGenre:f({},e.moviesByGenre,{isLoading:!0})});case"GET_MOVIES_BY_GENRE_DATA":return f({},e,{moviesByGenre:{data:n.payload.data,isLoading:!1,title:n.payload.title}});case"GET_MOVIES_DATA LOAD_START":return f({},e,Object(p.a)({},n.payload.dataType,f({},e[n.payload.dataType],{isLoading:!0})));case"GET_MOVIES_DATA":return f({},e,Object(p.a)({},n.payload.dataType,f({},e[n.payload.dataType],{data:n.payload.moviesData,isLoading:!1})));default:return e}},movieInfoReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"GET_MOVIE_DATA LOAD_START":return v({},e,{isLoading:!0});case"GET_MOVIE_DATA":return v({},e,{isLoading:!1,data:n.payload.movieInfo,recommendations:n.payload.movieRecommendations});default:return e}},favoritesMoviesReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"TOGGLE_FAVORITE_MOVIE":return O({},e,{favoritesMovies:n.payload});default:return e}},appSettingsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"TOGGLE_LANGUAGE":var t="ru"===e.lang?"en":"ru";return localStorage.setItem("lang",t),x({},e,{lang:t});default:return e}},personInfoReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"GET_PERSON_INFO LOAD_START":return _({},e,{isLoading:!0});case"GET_PERSON_INFO":return _({},e,{isLoading:!1,data:n.payload});default:return e}}}),D=Object(l.d)(T,Object(l.a)(s.a));window.store=D;var S=D,P=t(21),M=t(2),I=t(1),A=t(16),L=t(32),R=t.n(L),G=t(33),N=t.n(G);function F(){var e=Object(M.a)(["\n  body {\n    background-image: url(",");\n    font-family: 'Roboto', sans-serif;\n    font-size: 14px;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    min-height: 100vh;\n    flex-direction: column;\n  }\n"]);return F=function(){return e},e}var B=Object(I.b)(F(),(function(e){return e.theme.isDarkModeEnable?N.a:R.a}));function z(){var e=Object(M.a)(["\n  text-decoration: none;\n  color: #fff;\n  font-weight: 600;\n  &:hover {\n    opacity: .8;\n  }\n  &:active {\n    opacity: .6;\n  }\n"]);return z=function(){return e},e}function V(){var e=Object(M.a)(["\n  height: 60px;\n  background-color: ",";\n  color: #fff;\n  font-size: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return V=function(){return e},e}var C=I.d.header(V(),(function(e){return e.theme.isDarkModeEnable?"#292929":"#3F7FBF"})),Y=Object(I.d)(u.b)(z()),H=function(){return a.a.createElement(C,null,a.a.createElement(Y,{to:"/"},"React Movie Searcher"))};function J(){var e=Object(M.a)(["\n  position: absolute;\n  right: 14px;\n  font-size: 20px;\n  font-weight: 600;\n  border: solid #3a3a3a;\n  border-width: 0 4px 4px 0;\n  display: inline-block;\n  padding: 4px;\n  cursor: pointer;\n  opacity: 0.4;\n  transform: ",";\n  &:hover {\n    opacity: 0.7;\n  }\n"]);return J=function(){return e},e}function U(){var e=Object(M.a)(["\n  margin: 0;\n  font-size: 14px;\n  color: #444444;\n  margin-bottom: 10px;\n"]);return U=function(){return e},e}function $(){var e=Object(M.a)(["\n  padding: 16px;\n  max-width: 700px;\n  background-color: #fff;\n  margin: 20px auto;\n  border-radius: 5px;\n  box-shadow: 0px 9px 10px 1px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  max-height: ",";\n  position: relative;\n"]);return $=function(){return e},e}var q=I.d.div($(),(function(e){return e.isHidden?"10px":"auto"})),K=I.d.h2(U()),Q=I.d.div(J(),(function(e){return e.isHidden?"rotate(44deg)":"rotate(-135deg)"})),W=function(e){var n=e.children,t=e.title,o=Object(r.useState)(!1),i=Object(P.a)(o,2),c=i[0],u=i[1];return a.a.createElement(q,{isHidden:c},a.a.createElement(Q,{isHidden:c,onClick:function(){return u(!c)}}),a.a.createElement(K,null,t&&t[0].toUpperCase()+t.slice(1)),n)};function X(){var e=Object(M.a)(["\n  display: block;\n  color: #fff;\n  text-decoration: none;\n  opacity: .7;\n  &:hover {\n    opacity: 1;\n  }\n"]);return X=function(){return e},e}function Z(){var e=Object(M.a)(["\n  background-color: #232323;\n  height: 100px;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #A0A0A0;\n  flex-direction: column;\n"]);return Z=function(){return e},e}var ee=I.d.footer(Z()),ne=I.d.a(X()),te=function(){return a.a.createElement(ee,null,a.a.createElement(ne,{href:"https://github.com/padoctb"},"  GitHub"),a.a.createElement(ne,{href:"https://developers.themoviedb.org/3/"},"API"))};function re(){var e=Object(M.a)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  padding: 0;\n  margin: 0;\n"]);return re=function(){return e},e}function ae(){var e=Object(M.a)(["\n\n"]);return ae=function(){return e},e}var oe=I.d.div(ae()),ie=I.d.ul(re()),ce=function(e){var n=e.movies,t=e.max;return t&&(n=n.slice(0,t)),a.a.createElement(oe,null,a.a.createElement(ie,null,n.map((function(e){return a.a.createElement(ke,{key:e.id,movieData:e})}))))},ue=function(){return a.a.createElement("div",{className:"lds-ring"},a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null))},le=function(e){var n=JSON.parse(localStorage.getItem("favoritesMovies"));if(n){var t=n.find((function(n){return n.id===e.id}));t?n=n.filter((function(e){return e.id!==t.id})):n.push(e),localStorage.setItem("favoritesMovies",JSON.stringify(n))}else localStorage.setItem("favoritesMovies",JSON.stringify([e]));return{type:"TOGGLE_FAVORITE_MOVIE",payload:JSON.parse(localStorage.getItem("favoritesMovies"))}},se=t(38),pe=t.n(se),de=t(15),fe=t.n(de);function ge(){var e=Object(M.a)(["\n  margin-right: 20px;\n  margin-left: 10px;\n  padding: 5px;\n  background-color: #a93f3f;\n  border-radius: 5px;\n  color: #fff;\n  height: 20px;\n  min-width: 20px;\n  text-align: center;\n  background-image: url(",");\n  background-size: 16px 16px;\n  background-repeat: no-repeat;\n  background-position: center;\n  &:hover {\n    background-color: #843636;\n  }\n  &:active {\n    background-color: #662929;\n  }\n"]);return ge=function(){return e},e}function me(){var e=Object(M.a)(["\n  width: 38px;\n  height: auto;\n  margin-right: 10px;\n"]);return me=function(){return e},e}function ve(){var e=Object(M.a)(["\n  display: flex;\n  box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.1);\n  margin-bottom: 15px;\n  border-radius: 5px;\n  overflow: hidden;\n  text-decoration: none;\n  align-items: center;\n  transition: transform 0.2s ease;\n  &:hover {\n    transform: translateY(-3px);\n  }\n"]);return ve=function(){return e},e}function be(){var e=Object(M.a)(["\n  color: #444444;\n  font-size: 14px;\n  flex-grow: 1;\n"]);return be=function(){return e},e}function he(){var e=Object(M.a)(["\n  width: 100%;\n  height: auto;\n  border-radius: 5px;\n"]);return he=function(){return e},e}function Oe(){var e=Object(M.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100px;\n  border-radius: 5px;\n  margin: 5px;\n  padding: 10px;\n  box-shadow: 0px 3px 7px -4px rgba(0, 0, 0, 0.5);\n  transition: transform 0.2s ease;\n  display: block;\n  cursor: pointer;\n  text-decoration: none;\n  &:hover {\n    transform: translateY(-5px);\n  }\n"]);return Oe=function(){return e},e}var ye=Object(I.d)(u.b)(Oe()),Ee=I.d.img(he()),xe=I.d.h3(be()),je=Object(I.d)(u.b)(ve()),we=I.d.img(me()),_e=I.d.div(ge(),pe.a),ke=function(e){var n=e.movieData,t=e.isFavorite,r=Object(c.b)(),o=function(e){e.preventDefault(),r(le(n))};return t?a.a.createElement(je,{to:"/movie/".concat(n.id)},a.a.createElement(we,{src:n.poster_path?"https://image.tmdb.org/t/p/w500/".concat(n.poster_path):fe.a}),a.a.createElement(xe,null,n.title),a.a.createElement(_e,{onClick:o})):a.a.createElement(ye,{to:"/movie/".concat(n.id)},a.a.createElement(Ee,{src:n.poster_path?"https://image.tmdb.org/t/p/w500/".concat(n.poster_path):fe.a}),a.a.createElement(xe,null,n.title))},Te=t(39),De=t.n(Te),Se="b6d2e3a714047dd33bb390fcbc6cdc5f",Pe={search:["\u041f\u043e\u0438\u0441\u043a","Search"],popular:["\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u0444\u0438\u043b\u044c\u043c\u044b","Popular Movies"],top_rated:["\u041b\u0443\u0447\u0448\u0438\u0435 \u0444\u0438\u043b\u044c\u043c\u044b","Top Rated Movies"],showMore:["\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435","Show more"],favorites:["\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435","Favorites"],searchMovies:["\u041f\u043e\u0438\u0441\u043a \u0444\u0438\u043b\u044c\u043c\u043e\u0432...","Search movies..."],releaseDate:["\u0414\u0430\u0442\u0430 \u0432\u044b\u0445\u043e\u0434\u0430","Release date"],tagline:["\u0421\u043b\u043e\u0433\u0430\u043d","Tagline"],description:["\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435","Description"],genres:["\u0416\u0430\u043d\u0440\u044b","Genres"],recommendations:["\u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438","Recomendations"],page:["\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430","Page"],of:["\u0438\u0437","of"],addToFavorites:["\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u044b\u0435","Add to favorites"],removeFromFavorites:["\u0423\u0431\u0440\u0430\u0442\u044c \u0438\u0437 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0433\u043e","Remove from favorites"],cast:["\u0410\u043a\u0442\u0451\u0440\u0441\u043a\u0438\u0439 \u0441\u043e\u0441\u0442\u0430\u0432","Cast"],showAllCast:["\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0435\u0441\u044c \u0441\u043f\u0438\u0441\u043e\u043a","Show all cast"],name:["\u0418\u043c\u044f","Name"],birthday:["\u0414\u0435\u043d\u044c \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f","Birthday"],deathday:["\u0414\u0435\u043d\u044c \u0441\u043c\u0435\u0440\u0442\u0438","Deathday"],placeOfBirth:["\u041c\u0435\u0441\u0442\u043e \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f","Place of birth"],biography:["\u0411\u0438\u043e\u0433\u0440\u0430\u0444\u0438\u044f","Biography"],creditsByPerson:["\u0424\u0438\u043b\u044c\u043c\u044b \u0441 \u0443\u0447\u0430\u0441\u0442\u0438\u0435\u043c","Movies featuring"],movieImages:["\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0444\u0438\u043b\u044c\u043c\u0430","Movie images"],director:["\u0420\u0435\u0436\u0438\u0441\u0435\u0440","Director"]},Me=function(e){return function(n){var t=Object(c.c)((function(e){return e.appSettingsReducer.lang})),r=Object(c.b)();return a.a.createElement(e,Object.assign({localizeText:function(e){return Pe[e]?"ru"===t?Pe[e][0]:"en"===t?Pe[e][1]:void 0:"Localize is not found"},toggleLang:function(){return r({type:"TOGGLE_LANGUAGE"})},currentLang:t},n))}},Ie=t(7),Ae=t.n(Ie),Le=t(12),Re=function(){var e=Object(Le.a)(Ae.a.mark((function e(n){var t,r;return Ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n);case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),Ge=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"en",t=new Date(e);return t.toLocaleDateString(n,{month:"long",day:"numeric",year:"numeric"})};function Ne(){var e=Object(M.a)(["\n      background: linear-gradient(201deg, rgba(2,0,36,1) 0%, rgba(152,29,29,1) 0%, rgba(223,78,78,1) 45%, rgba(158,23,23,1) 63%, rgba(65,15,15,1) 100%);\n    "]);return Ne=function(){return e},e}function Fe(){var e=Object(M.a)(["\n      background: linear-gradient(201deg, rgba(2,0,36,1) 0%, rgba(208,199,46,1) 0%, rgba(147,163,21,1) 45%, rgba(170,175,32,1) 59%, rgba(167,176,44,1) 100%);\n    "]);return Fe=function(){return e},e}function Be(){var e=Object(M.a)(["\n      background: linear-gradient(201deg, rgba(2,0,36,1) 0%, rgba(38,121,9,1) 0%, rgba(19,167,132,1) 45%, rgba(13,181,170,1) 57%, rgba(0,212,255,1) 100%);\n    "]);return Be=function(){return e},e}function ze(){var e=Object(M.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  background: rgb(2, 0, 36);\n  padding: 10px;\n  border-bottom-left-radius: 15px;\n  font-size: 18px;\n  color: #fff;\n  font-weight: 600;\n  box-shadow: -2px 9px 10px 1px rgba(0, 0, 0, 0.2);\n  background: rgb(2,0,36);\n  ",";\n"]);return ze=function(){return e},e}function Ve(){var e=Object(M.a)([""]);return Ve=function(){return e},e}function Ce(){var e=Object(M.a)([""]);return Ce=function(){return e},e}function Ye(){var e=Object(M.a)(["\n  font-weight: 600;\n"]);return Ye=function(){return e},e}function He(){var e=Object(M.a)(["\n  margin-left: 10px;\n  color: #444444;\n"]);return He=function(){return e},e}function Je(){var e=Object(M.a)(["\n  width: 60px;\n  height: auto;\n"]);return Je=function(){return e},e}function Ue(){var e=Object(M.a)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n  cursor: pointer;\n  text-decoration: none;\n  &:hover {\n    background-color: #e3e3e3;\n  }\n"]);return Ue=function(){return e},e}function $e(){var e=Object(M.a)(["\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  margin-top: 10px;\n  max-height: 400px;\n  overflow: auto;\n"]);return $e=function(){return e},e}function qe(){var e=Object(M.a)(["\n  margin-top: 20px;\n  display: block;\n"]);return qe=function(){return e},e}function Ke(){var e=Object(M.a)(["\n  padding: 10px;\n  background-color: ",";\n  color: #fff;\n  border-radius: 5px;\n  text-align: center;\n  margin-top: 10px;\n  cursor: pointer;\n  &:hover {\n    background-color: ",";\n  }\n  &:active {\n    background-color: #2f6091;\n    background-color: ",";\n  }\n"]);return Ke=function(){return e},e}function Qe(){var e=Object(M.a)(["\n  color: #444444;\n  text-decoration: none;\n  padding: 5px;\n  display: block;\n  background: #ebebeb;\n  border-radius: 5px;\n  margin-right: 5px;\n  margin-top: 5px;\n  &:hover {\n    background: #dddddd;\n  }\n"]);return Qe=function(){return e},e}function We(){var e=Object(M.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n"]);return We=function(){return e},e}function Xe(){var e=Object(M.a)([""]);return Xe=function(){return e},e}function Ze(){var e=Object(M.a)(["\n  display: inline;\n  color: #444444;\n  font-size: 15px;\n"]);return Ze=function(){return e},e}function en(){var e=Object(M.a)(["\n  margin-bottom: 10px;\n"]);return en=function(){return e},e}function nn(){var e=Object(M.a)(["\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: 70px;\n  margin-top: 40px;\n  @media screen and (max-width: 750px) {\n    margin-left: 0;\n  }\n"]);return nn=function(){return e},e}function tn(){var e=Object(M.a)(["\n  width: 100%;\n  height: auto;\n  border-radius: 5px;\n"]);return tn=function(){return e},e}function rn(){var e=Object(M.a)(["\n  width: 300px;\n  height: 500px;\n  position: relative;\n  @media screen and (max-width: 500px) {\n    width: 100%;\n    height: auto;\n  }\n"]);return rn=function(){return e},e}function an(){var e=Object(M.a)(["\n  display: flex;\n  @media screen and (max-width: 750px) {\n    flex-direction: column;\n  }\n"]);return an=function(){return e},e}var on=I.d.div(an()),cn=I.d.div(rn()),un=I.d.img(tn()),ln=I.d.ul(nn()),sn=I.d.li(en()),pn=I.d.h3(Ze()),dn=I.d.span(Xe()),fn=I.d.ul(We()),gn=Object(I.d)(u.b)(Qe()),mn=I.d.div(Ke(),(function(e){return e.isMovieInFavorites?"#a93f3f":"#3f7fbf"}),(function(e){return e.isMovieInFavorites?"#843636":"#316ba6"}),(function(e){return e.isMovieInFavorites?"#662929":"#2f6091"})),vn=Object(I.d)(pn)(qe()),bn=I.d.div($e()),hn=Object(I.d)(u.b)(Ue()),On=I.d.img(Je()),yn=I.d.div(He()),En=I.d.div(Ye()),xn=I.d.div(Ce()),jn=I.d.div(Ve()),wn=I.d.div(ze(),(function(e){return e.color})),_n=Me((function(e){var n=e.movieData,t=e.isMovieInfoDataLoaded,r=e.localizeText,o=e.currentLang,i=n.title,u=n.poster_path,l=n.release_date,s=n.tagline,p=n.overview,d=n.genres,f=n.id,g=n.recommendations,m=n.cast,v=n.images,b=n.vote_average,h=n.crew,O=Object(c.b)(),y=[];v&&v.forEach((function(e){return y.push({original:"https://image.tmdb.org/t/p/w500/".concat(e.file_path),thumbnail:"https://image.tmdb.org/t/p/w500/".concat(e.file_path)})}));var E=Object(c.c)((function(e){return e.favoritesMoviesReducer.favoritesMovies})),x=E&&E.find((function(e){return e.id===f})),j=t&&h.find((function(e){return"Director"===e.job})),w=a.a.createElement(fn,null,d&&d.map((function(e){return a.a.createElement("li",{key:e.id},a.a.createElement(gn,{to:"/genre/".concat(e.id,"/page/1")},e.name))}))),_=a.a.createElement(bn,null,m&&m.map((function(e,n){return a.a.createElement(hn,{to:"/person/".concat(e.id),key:e.id},a.a.createElement(On,{src:e.profile_path?"https://image.tmdb.org/t/p/w500/".concat(e.profile_path):fe.a}),a.a.createElement(yn,{id:"person-info"},a.a.createElement(En,null,e.name),a.a.createElement(xn,null,e.character)))}))),k=[{title:r("releaseDate"),type:Ge(l,o)},{title:r("director"),type:j.name},{title:r("tagline"),type:s},{title:r("description"),type:p},{title:r("genres"),type:w},{title:r("cast"),type:_}];return a.a.createElement(a.a.Fragment,null,a.a.createElement(W,{title:i},t?a.a.createElement(on,null,a.a.createElement(jn,null,a.a.createElement(cn,null,a.a.createElement(un,{src:u?"https://image.tmdb.org/t/p/w500/".concat(u):fe.a}),a.a.createElement(wn,{color:function(){var e=Number(b);return e>=7?Object(I.c)(Be()):e>=4?Object(I.c)(Fe()):Object(I.c)(Ne())}()},b)),a.a.createElement(mn,{isMovieInFavorites:x,onClick:function(){return O(le(n))}},r(x?"removeFromFavorites":"addToFavorites"))),a.a.createElement(ln,null,k.map((function(e){return e.type?a.a.createElement(sn,{key:e.title},a.a.createElement(pn,null,"".concat(e.title,": ")),a.a.createElement(dn,null,e.type)):null})))):a.a.createElement(ue,null),t&&(0===y.length?null:a.a.createElement(a.a.Fragment,null,a.a.createElement(vn,null,r("movieImages"),": "),a.a.createElement(De.a,{showPlayButton:!1,showFullscreenButton:!1,items:y}))),t&&(0===g.results.length?null:a.a.createElement(a.a.Fragment,null,a.a.createElement(vn,null,r("recommendations"),": "),a.a.createElement(ce,{max:5,movies:g.results})))))}));function kn(){var e=Object(M.a)(["\n  display: block;\n  font-size: initial;\n  font-weight: 600;\n  font-size: 24px;\n  cursor: pointer;\n  padding: 10px;\n  color: #232323;\n  opacity: 0.5;\n  text-decoration: none;\n  &:hover {\n    opacity: 0.8;\n  }\n  &:active {\n    opacity: 1;\n  }\n"]);return kn=function(){return e},e}function Tn(){var e=Object(M.a)(["\n  display: block;\n  color: #393939;\n  text-decoration: none;\n  font-size: 18px;\n  border-top: 1px solid #e3e3e3;\n  border-bottom: 1px solid #e3e3e3;\n  padding: 8px 0;\n  cursor: pointer;\n  background-color: ",";\n  text-align: center;\n  flex-grow: 1;\n  &:hover {\n    background-color: #e3e3e3;\n  }\n  &:last-child {\n    border-right: 1px solid #e3e3e3;\n  }\n  &:first-child {\n    border-left: 1px solid #e3e3e3;\n  }\n"]);return Tn=function(){return e},e}function Dn(){var e=Object(M.a)(["\n  font-size: 16px;\n  color: #393939;\n  display: flex;\n  list-style: none;\n  align-items: center;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n"]);return Dn=function(){return e},e}function Sn(){var e=Object(M.a)(["\n  display: flex;\n  align-items: center;\n  margin-top: 16px;\n  width: 400px;\n"]);return Sn=function(){return e},e}var Pn=I.d.div(Sn()),Mn=I.d.div(Dn()),In=Object(I.d)(u.b)(Tn(),(function(e){return e.active?"#e3e3e3":"#fff"})),An=Object(I.d)(u.b)(kn()),Ln=Me((function(e){for(var n=e.totalPages,t=e.currentPage,r=e.currentUrl,o=n-+t>=4?4:n-+t,i=+t-4>0?4:+t-1,c=[+t],u=0;u<o;u++)c.push(u+1+ +t);for(var l=0;l<i;l++)c.unshift(+t-l-1);return a.a.createElement(Pn,null,a.a.createElement(An,{to:r.replace(/\d+$/gi,1)},"<<"),a.a.createElement(Mn,null,c.map((function(e){return a.a.createElement(In,{to:r.replace(/\d+$/gi,e),active:e===+t?1:0,key:e},e)}))),a.a.createElement(An,{to:r.replace(/\d+$/gi,n)},">>"))}));var Rn=Object(A.f)((function(e){var n=e.history;return Object(r.useEffect)((function(){var e=n.listen((function(){window.scrollTo(0,0)}));return function(){e()}}),[n]),null}));function Gn(){var e=Object(M.a)([""]);return Gn=function(){return e},e}function Nn(){var e=Object(M.a)([""]);return Nn=function(){return e},e}function Fn(){var e=Object(M.a)([""]);return Fn=function(){return e},e}function Bn(){var e=Object(M.a)(["\n  list-style: none;\n  margin: 30px 0;\n  padding: 0;\n"]);return Bn=function(){return e},e}function zn(){var e=Object(M.a)(["\n\n"]);return zn=function(){return e},e}function Vn(){var e=Object(M.a)(["\n  display: block;\n  margin: 0 auto;\n  width: 300px;\n  height: auto;\n  @media screen and (max-width: 425px) {\n    width: 100%;\n  }\n"]);return Vn=function(){return e},e}function Cn(){var e=Object(M.a)(["\n\n"]);return Cn=function(){return e},e}var Yn=I.d.div(Cn()),Hn=I.d.img(Vn()),Jn=I.d.div(zn()),Un=I.d.ul(Bn()),$n=I.d.li(Fn()),qn=I.d.h3(Nn()),Kn=I.d.div(Gn()),Qn=Me((function(e){var n=e.personData,t=e.localizeText,r=n.profile_path,o=n.name,i=n.birthday,c=n.place_of_birth,u=n.deathday,l=n.biography,s=n.movies,p=[{title:t("name"),type:o},{title:t("birthday"),type:i},{title:t("deathday"),type:u},{title:t("placeOfBirth"),type:c},{title:t("biography"),type:l},{title:t("creditsByPerson"),type:a.a.createElement(ce,{movies:s})}];return a.a.createElement(Yn,null,a.a.createElement(Hn,{src:r?"https://image.tmdb.org/t/p/w500/".concat(r):fe.a}),a.a.createElement(Jn,null,a.a.createElement(Un,null,p.map((function(e){return e.type?a.a.createElement($n,{key:e.title},a.a.createElement(qn,null,e.title),a.a.createElement(Kn,null,e.type)):null})))))})),Wn=function(){var e=Object(Le.a)(Ae.a.mark((function e(n,t,r){var a;return Ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([Re("https://api.themoviedb.org/3/discover/movie?api_key=".concat(Se,"&language=").concat(r,"&include_adult=false&include_video=false&page=").concat(t,"&with_genres=").concat(n)),Re("https://api.themoviedb.org/3/genre/movie/list?api_key=".concat(Se,"&language=").concat(r))]);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}();function Xn(){var e=Object(M.a)(["\n  display: block;\n  color: #fff;\n  text-decoration: none;\n  background-color: #3f7fbf;\n  border-radius: 5px;\n  display: inline-block;\n  padding: 10px;\n  margin: 20px 0 10px 0;\n  &:hover {\n    background-color: #316ba6;\n  }\n  &:active {\n    background-color: #2f6091;\n  }\n"]);return Xn=function(){return e},e}function Zn(){var e=Object(M.a)(["\n  display: flex;\n  justify-content: center;\n"]);return Zn=function(){return e},e}var et=I.d.div(Zn()),nt=Object(I.d)(u.b)(Xn()),tt=Object(r.memo)(Me((function(e){var n=e.type,t=e.title,o=e.genreType,i=e.page,u=e.url,l=e.localizeText,s=e.currentLang,p=Object(c.c)((function(e){var t=e.moviesListReducer;return o?t.moviesByGenre:t[n]})),d=Object(c.b)();Object(r.useEffect)((function(){d(o?function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t=arguments.length>2?arguments[2]:void 0;return function(){var r=Object(Le.a)(Ae.a.mark((function r(a){var o;return Ae.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a({type:"GET_MOVIES_BY_GENRE_DATA LOAD_START"}),r.next=3,Wn(e,n,t);case 3:o=r.sent,a({type:"GET_MOVIES_BY_GENRE_DATA",payload:{data:o[0],title:o[1].genres.find((function(n){return n.id===Number(e)})).name}});case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}(o.genreId,i,s):function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t=arguments.length>2?arguments[2]:void 0;return function(){var r=Object(Le.a)(Ae.a.mark((function r(a){var o;return Ae.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a({type:"GET_MOVIES_DATA LOAD_START",payload:{dataType:e}}),r.next=3,Re("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(Se,"&language=").concat(t,"&page=").concat(n));case 3:o=r.sent,a({type:"GET_MOVIES_DATA",payload:{dataType:e,moviesData:o}});case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}(n,i,s))}),[n,d,o,i,s]);var f=!p.isLoading&&p.data.results;return a.a.createElement(W,{title:t||p.title},f?a.a.createElement(ce,{movies:p.data.results}):a.a.createElement(ue,null),f&&a.a.createElement(et,null,i?a.a.createElement(Ln,{currentUrl:u,currentPage:i,totalPages:p.data.total_pages}):a.a.createElement(nt,{to:"/movies/".concat(n,"/page/1")},l("showMore"))))}))),rt=function(e,n){return new Promise((function(t){Promise.all([Re("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(Se,"&language=").concat(n,"&with_cast")),Re("https://api.themoviedb.org/3/movie/".concat(e,"/recommendations?api_key=").concat(Se,"&language=").concat(n,"&page=1")),Re("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(Se,"&language=").concat(n)),Re("https://api.themoviedb.org/3/movie/".concat(e,"/images?api_key=").concat(Se))]).then((function(e){return t(e)}))}))},at=Me((function(e){var n=e.match,t=e.currentLang,o=Object(c.c)((function(e){return e.movieInfoReducer.isLoading})),i=Object(c.c)((function(e){return e.movieInfoReducer.data})),u=Object(c.b)(),l=n.params.movieId;Object(r.useEffect)((function(){return i.title&&(document.title=i.title),function(){document.title="Moviesearcher"}})),Object(r.useEffect)((function(){u(function(e,n){return function(){var t=Object(Le.a)(Ae.a.mark((function t(r){var a;return Ae.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r({type:"GET_MOVIE_DATA LOAD_START"}),t.next=3,rt(e,n);case 3:(a=t.sent)[0].recommendations=a[1],a[0].cast=a[2].cast,a[0].crew=a[2].crew,a[0].images=a[3].backdrops,r({type:"GET_MOVIE_DATA",payload:{movieInfo:a[0]}});case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(l,t))}),[l,u,t]);var s=!o&&Object.keys(i).length>0;return a.a.createElement(_n,{isMovieInfoDataLoaded:s,movieData:i})})),ot=t(65),it=t(64),ct=(t(29),Me((function(e){var n=e.localizeText,t=Object(c.c)((function(e){return e.favoritesMoviesReducer.favoritesMovies}));return a.a.createElement(W,{title:n("favorites")},t.length>0?a.a.createElement(ot.a,{className:"todo-list"},t.map((function(e){return a.a.createElement(it.a,{key:e.id,timeout:500,classNames:"favorite-movie-item"},a.a.createElement(ke,{isFavorite:!0,movieData:e}))}))):"Favorites list is empty")})));function ut(){var e=Object(M.a)(["\n  margin-top: 10px;\n"]);return ut=function(){return e},e}function lt(){var e=Object(M.a)(["\n  width: 100%;\n  padding: 12px;\n  box-sizing: border-box;\n  border-radius: 5px;\n  border: 1px solid #a0a0a0;\n  outline: none;\n  font-family: 'Roboto', sans-serif;\n  &:focus {\n    border: 1px solid #3f7fbf;\n  }\n"]);return lt=function(){return e},e}var st=I.d.input(lt()),pt=I.d.div(ut()),dt=function(e,n){var t=!1;return function(){t||(e.apply(this,arguments),t=!0,setTimeout((function(){t=!1}),n))}}((function(e,n,t){n(function(e,n){return function(){var t=Object(Le.a)(Ae.a.mark((function t(r){var a;return Ae.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r({type:"GET_MOVIES_BY_SEARCH LOAD_START"}),t.next=3,Re("https://api.themoviedb.org/3/search/movie?api_key=".concat(Se,"&language=").concat(n,"&query=").concat(e,"&page=1&include_adult=true"));case 3:a=t.sent,r({type:"GET_MOVIES_BY_SEARCH",payload:a});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e,t))}),500),ft=Me((function(e){var n=e.title,t=e.localizeText,o=e.currentLang,i=Object(r.useState)(""),u=Object(P.a)(i,2),l=u[0],s=u[1],p=Object(c.b)(),d=Object(c.c)((function(e){return e.moviesListReducer.findedMovies.data.results})),f=!Object(c.c)((function(e){return e.moviesListReducer.findedMovies.isLoading}))&&d;return a.a.createElement(W,{title:n},a.a.createElement(st,{onChange:function(e){e.target.value<2&&dt("",p,o),s(e.target.value),dt(e.target.value,p,o)},placeholder:t("searchMovies"),value:l}),l.length<2?null:f?d.length>0?a.a.createElement(ce,{max:5,movies:d}):a.a.createElement(pt,null,"Nothing found"):a.a.createElement(ue,null))})),gt=t(40),mt=t.n(gt),vt=t(41),bt=t.n(vt);function ht(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function Ot(){var e=Object(M.a)(["\n  margin-right: 10px;\n  font-weight: 600;\n  color: #444444;\n  color: ",";\n  cursor: pointer;\n  &:hover {\n    opacity: 0.8;\n  }\n"]);return Ot=function(){return e},e}function yt(){var e=Object(M.a)(["\n  width: 20px;\n  height: 20px;\n  background-image: url(",");\n  background-size: 100% 100%;\n  cursor: pointer;\n  &:hover {\n    opacity: 0.8;\n  }\n"]);return yt=function(){return e},e}function Et(){var e=Object(M.a)(["\n  max-width: 700px;\n  margin: 10px auto;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n"]);return Et=function(){return e},e}var xt=I.d.div(Et()),jt=I.d.div(yt(),(function(e){return e.theme.isDarkModeEnable?bt.a:mt.a})),wt=I.d.div(Ot(),(function(e){return e.theme.isDarkModeEnable?"#fff":"#444444"})),_t=Me((function(e){var n=e.toggleDarkMode,t=e.currentLang,r=e.toggleLang;return a.a.createElement(xt,null,a.a.createElement(wt,{onClick:r},t.toUpperCase()),a.a.createElement(jt,{onClick:function(){return n((function(e){return localStorage.setItem("isDarkModeEnable",!e.isDarkModeEnable),function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ht(t,!0).forEach((function(n){Object(p.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ht(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},e,{isDarkModeEnable:!e.isDarkModeEnable})}))}}))})),kt=function(){var e=Object(Le.a)(Ae.a.mark((function e(n,t){var r;return Ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([Re("https://api.themoviedb.org/3/person/".concat(n,"?api_key=").concat(Se,"&language=").concat(t)),Re("https://api.themoviedb.org/3/person/".concat(n,"/movie_credits?api_key=").concat(Se,"&language=").concat(t))]);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),Tt=Me((function(e){var n=e.match,t=e.currentLang,o=Object(c.b)(),i=Object(c.c)((function(e){return e.personInfoReducer.isLoading})),u=Object(c.c)((function(e){return e.personInfoReducer.data})),l=n.params.personId;Object(r.useEffect)((function(){o(function(e,n){return function(){var t=Object(Le.a)(Ae.a.mark((function t(r){var a;return Ae.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r({type:"GET_PERSON_INFO LOAD_START"}),t.next=3,kt(e,n);case 3:(a=t.sent)[0].movies=a[1].cast,r({type:"GET_PERSON_INFO",payload:a[0]});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(l,t))}),[l,t,o]);var s=!i&&Object.keys(u).length>0;return a.a.createElement(W,{title:s?u.name:""},s?a.a.createElement(Qn,{personData:u}):a.a.createElement(ue,null))}));function Dt(){var e=Object(M.a)(["\n  margin: 10px;\n  flex: 1;\n"]);return Dt=function(){return e},e}function St(){var e=Object(M.a)(["\n  display: flex;\n  min-height: 100vh;\n  flex-direction: column;\n"]);return St=function(){return e},e}var Pt=I.d.div(St()),Mt=I.d.main(Dt());var It=Me((function(e){var n=e.localizeText,t=[{title:n("popular"),type:"popular"},{title:n("top_rated"),type:"top_rated"}],o=Object(r.useState)({isDarkModeEnable:null!==localStorage.getItem("isDarkModeEnable")&&JSON.parse(localStorage.getItem("isDarkModeEnable"))}),i=Object(P.a)(o,2),c=i[0],u=i[1];return a.a.createElement(I.a,{theme:c},a.a.createElement(Pt,null,a.a.createElement(B,null),a.a.createElement(H,null),a.a.createElement(Mt,null,a.a.createElement(_t,{toggleDarkMode:u}),a.a.createElement(ft,{title:n("search")}),a.a.createElement(ct,null),a.a.createElement(A.c,null,a.a.createElement(A.a,{render:function(e){var t=e.match;return a.a.createElement(tt,{title:n(t.params.moviesType),url:t.url,page:t.params.page,type:t.params.moviesType})},path:"/movies/:moviesType/page/:page"}),a.a.createElement(A.a,{render:function(e){var n=e.match;return a.a.createElement(tt,{url:n.url,page:n.params.page,genreType:{genreId:n.params.genreId}})},path:"/genre/:genreId/page/:page"}),a.a.createElement(A.a,{component:at,path:"/movie/:movieId"}),a.a.createElement(A.a,{component:Tt,path:"/person/:personId"}),a.a.createElement(A.a,{component:function(){return t.map((function(e){var n=e.title,t=e.type;return a.a.createElement(tt,{key:t,title:n,type:t})}))},exact:!0,path:"/"}))),a.a.createElement(te,null)))}));i.a.render(a.a.createElement(c.a,{store:S},a.a.createElement(u.a,null,a.a.createElement(Rn,null),a.a.createElement(It,null))),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.f517a707.chunk.js.map