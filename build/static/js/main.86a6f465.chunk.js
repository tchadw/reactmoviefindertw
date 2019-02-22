(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a(53)},25:function(e,t,a){},30:function(e,t,a){},32:function(e,t,a){},34:function(e,t,a){},36:function(e,t,a){},38:function(e,t,a){},40:function(e,t,a){},42:function(e,t,a){},44:function(e,t,a){},46:function(e,t,a){},48:function(e,t,a){},51:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(17),o=a.n(r),m=a(55),i=a(57),l=a(56),s=a(54),u=(a(25),function(){return c.a.createElement("div",{className:"rmdb-header"},c.a.createElement("div",{className:"rmdb-header-content"},c.a.createElement(s.a,{to:"/"},c.a.createElement("img",{src:"./images/react_movie.png",alt:"rmdb-logo",className:"rmdb-logo"}))))}),d=a(13),h=a(15),v=a(6),g=a(7),p=a(9),f=a(8),b=a(10),E="https://api.themoviedb.org/3/",N="98d4afcbb1ab6e5d6e785399b2e67b45",S="http://image.tmdb.org/t/p/",y=a(5),I=a.n(y),k=(a(30),function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(c)))).state={value:""},a.timeout=null,a.doSearch=function(e){a.setState({value:e.target.value}),clearTimeout(a.timeout),a.timeout=setTimeout(function(){a.props.callback(a.state.value)},500)},a}return Object(b.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"rmdb-searchbar"},c.a.createElement("div",{className:"rmdb-searchbar-content"},c.a.createElement(I.a,{className:"rmdb-fa-search",name:"search",size:"2x"}),c.a.createElement("input",{type:"text",className:"rmdb-searchbar-input",placeholder:"Find A Movie",onChange:this.doSearch,value:this.state.value})))}}]),t}(n.Component)),O=(a(32),function(e){return c.a.createElement("div",{className:"rmdb-grid"},e.header&&!e.loading?c.a.createElement("h1",null,e.header):null,c.a.createElement("div",{className:"rmdb-grid-content"},e.children.map(function(e,t){return c.a.createElement("div",{key:t,className:"rmdb-grid-element"},e)})))}),j=(a(34),function(e){var t=e.image,a=e.movieId,n=e.movieName,r=e.clickable;return c.a.createElement("div",{className:"rmdb-moviethumb"},r?c.a.createElement(s.a,{to:{pathname:"/".concat(a),movieName:"".concat(n)}},c.a.createElement("img",{src:t,alt:"moviethumb"})):c.a.createElement("img",{src:t,alt:"moviethumb"}))}),_=(a(36),function(e){return c.a.createElement("div",{className:"rmdb-loadmorebtn",onClick:e.onClick},c.a.createElement("p",null,e.text))}),w=(a(38),function(){return c.a.createElement("div",{className:"loader"})}),T=(a(40),function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(c)))).state={movies:[],loading:!1,currentPage:0,totalPages:0,searchTerm:""},a.searchItems=function(e){var t="";a.setState({movies:[],loading:!0,searchTerm:e}),t=""===e?"".concat(E,"movie/popular?api_key=").concat(N,"&language=en-US&page=1"):"".concat(E,"search/movie?api_key=").concat(N,"&language=en-US&query=").concat(e),a.fetchItems(t)},a.loadMoreItems=function(){var e="";a.setState({loading:!0}),e=""===a.state.searchTerm?"".concat(E,"movie/popular?api_key=").concat(N,"&language=en-US&page=").concat(a.state.currentPage+1):"".concat(E,"search/movie?api_key=").concat(N,"&language=en-US&query=").concat(a.state.searchTerm,"&page=").concat(a.state.currentPage+1),a.fetchItems(e)},a.fetchItems=function(e){fetch(e).then(function(e){return e.json()}).then(function(e){a.setState({movies:[].concat(Object(h.a)(a.state.movies),Object(h.a)(e.results)),heroImage:a.state.heroImage||e.results[0],loading:!1,currentPage:e.page,totalPages:e.total_pages},function(){""===a.state.searchTerm&&localStorage.setItem("HomeState",JSON.stringify(a.state))})})},a}return Object(b.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){if(localStorage.getItem("HomeState")){var e=JSON.parse(localStorage.getItem("HomeState"));this.setState(Object(d.a)({},e))}else{this.setState({loading:!0});var t="".concat(E,"movie/popular?api_key=").concat(N,"&language=en-US&page=1");this.fetchItems(t)}}},{key:"render",value:function(){var e=this.state;e.movies,e.heroImage,e.loading,e.currentPage,e.totalPages,e.searchTerm;return c.a.createElement("div",{className:"rmdb-home"},c.a.createElement("div",null,c.a.createElement(k,{callback:this.searchItems})),c.a.createElement("div",{className:"rmdb-home-grid"},c.a.createElement(O,{header:this.state.searchTerm?"Search Result":"Popular Movies",loading:this.state.loading},this.state.movies.map(function(e,t){return c.a.createElement(j,{key:t,clickable:!0,image:e.poster_path?"".concat(S).concat("w500").concat(e.poster_path):"./images/no_image.jpg",movieId:e.id,movieName:e.original_title})})),this.state.loading?c.a.createElement(w,null):null,this.state.currentPage<=this.state.totalPages&&!this.state.loading?c.a.createElement(_,{text:"Load More",onClick:this.loadMoreItems}):null))}}]),t}(n.Component)),x=(a(42),function(e){return c.a.createElement("div",{className:"rmdb-navigation"},c.a.createElement("div",{className:"rmdb-navigation-content"},c.a.createElement(s.a,{to:"/"},c.a.createElement("p",null,"Home"),c.a.createElement("p",null,"/"),c.a.createElement("p",null,e.movie))))}),P=(a(44),function(e){return c.a.createElement("div",{className:"rmdb-movieinfo",style:{background:e.movie.backdrop_path?"url('".concat(S).concat("w1280").concat(e.movie.backdrop_path,"')"):"#000"}},c.a.createElement("div",{className:"rmdb-movieinfo-content"},c.a.createElement("div",{className:"rmdb-movieinfo-thumb"},c.a.createElement(j,{image:e.movie.poster_path?"".concat(S).concat("w500").concat(e.movie.poster_path):"./images/no_image.jpg ",clickable:!1}),c.a.createElement("div",{className:"rmdb-movieinfo-text"},c.a.createElement("h1",null,e.movie.title),c.a.createElement("h3",null,"PLOT"),c.a.createElement("p",null,e.movie.overview),c.a.createElement("h3",null,"IMDB RATING"),c.a.createElement("div",{className:"rmdb-rating"},c.a.createElement("meter",{min:"0",max:"100",optimum:"100",low:"40",high:"70",value:10*e.movie.vote_average}),c.a.createElement("p",{className:"rmdb-score"},e.movie.vote_average)),e.directors.length>1?c.a.createElement("h3",null,"DIRECTORS"):c.a.createElement("h3",null,"DIRECTOR"),e.directors.map(function(e,t){return c.a.createElement("p",{key:t,className:"rmdb-director"},e.name)})))))}),M=function(e){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0}).format(e)},C=(a(46),function(e){return c.a.createElement("div",{className:"rmdb-movieinfobar"},c.a.createElement("div",{className:"rmdb-movieinfobar-content"},c.a.createElement("div",{className:"rmdb-movieinfobar-content-col"},c.a.createElement(I.a,{className:"fa-time",name:"clock-o",size:"2x"}),c.a.createElement("span",{className:"rmdb-movieinfobar-info"},"Running Time: ",function(e){var t=Math.floor(e/60),a=e%60;return"".concat(t,"h ").concat(a,"m")}(e.time))),c.a.createElement("div",{className:"rmdb-movieinfobar-content-col"},c.a.createElement(I.a,{className:"fa-budget",name:"money",size:"2x"}),c.a.createElement("span",{className:"rmdb-movieinfobar-info"},"Budget: ",M(e.budget))),c.a.createElement("div",{className:"rmdb-movieinfobar-content-col"},c.a.createElement(I.a,{className:"fa-revenue",name:"ticket",size:"2x"}),c.a.createElement("span",{className:"rmdb-movieinfobar-info"},"Revenue: ",M(e.revenue)))))}),D=(a(48),function(e){return c.a.createElement("div",{className:"rmdb-actor"},c.a.createElement("img",{src:e.actor.profile_path?"".concat(S).concat("w154").concat(e.actor.profile_path):"./images/no_image.jpg",alt:"actorthumb"}),c.a.createElement("span",{className:"rmdb-actor-name"},e.actor.name),c.a.createElement("span",{className:"rmdb-actor-character"},e.actor.character))}),U=function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(c)))).state={movie:null,actors:null,directors:[],loading:!1},a.fetchItems=function(e){fetch(e).then(function(e){return e.json()}).then(function(e){e.status_code?a.setState({loading:!1}):a.setState({movie:e},function(){var e="".concat(E,"movie/").concat(a.props.match.params.movieId,"/credits?api_key=").concat(N);fetch(e).then(function(e){return e.json()}).then(function(e){var t=e.crew.filter(function(e){return"Director"===e.job});a.setState({actors:e.cast,directors:t,loading:!1},function(){localStorage.setItem("".concat(a.props.match.params.movieId),JSON.stringify(a.state))})})})}).catch(function(e){return console.error("Error",e)})},a}return Object(b.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){if(localStorage.getItem("".concat(this.props.match.params.movieId))){var e=JSON.parse(localStorage.getItem("".concat(this.props.match.params.movieId)));this.setState(Object(d.a)({},e))}else{this.setState({loading:!0});var t="".concat(E,"movie/").concat(this.props.match.params.movieId,"?api_key=").concat(N,"&language=en-US");this.fetchItems(t)}}},{key:"render",value:function(){return c.a.createElement("div",{className:"rmdb-movie"},this.state.movie?c.a.createElement("div",null,c.a.createElement(x,{movie:this.props.location.movieName}),c.a.createElement(P,{movie:this.state.movie,directors:this.state.directors}),c.a.createElement(C,{time:this.state.movie.runtime,budget:this.state.movie.budget,revenue:this.state.revenue})):null,this.state.actors?c.a.createElement("div",{className:"rmdb-movie-grid"},c.a.createElement(O,{header:"Actors"},this.state.actors.map(function(e,t){return c.a.createElement(D,{key:t,actor:e})}))):null,this.state.actors||this.state.loading?null:c.a.createElement("h1",null,"No Movie Found!"),this.state.loading?c.a.createElement(w,null):null,"}")}}]),t}(n.Component),R=function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Uh Oh... This Page Does Not Exist"))},A=function(){return c.a.createElement(m.a,null,c.a.createElement(c.a.Fragment,null,c.a.createElement(u,null),c.a.createElement(i.a,null,c.a.createElement(l.a,{path:"/",component:T,exact:!0}),c.a.createElement(l.a,{path:"/:movieId",component:U,exact:!0}),c.a.createElement(l.a,{component:R}))))};a(51);o.a.render(c.a.createElement(A,null),document.getElementById("root"))}},[[19,2,1]]]);
//# sourceMappingURL=main.86a6f465.chunk.js.map