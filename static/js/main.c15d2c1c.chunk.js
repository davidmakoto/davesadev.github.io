(this["webpackJsonpresume-website"]=this["webpackJsonpresume-website"]||[]).push([[0],{23:function(e,s,t){},26:function(e,s,t){},38:function(e,s,t){"use strict";t.r(s);var c=t(2),a=t(13),n=t.n(a),i=(t(23),t(6)),r=t(7),l=t(9),j=t(8),o=t(14),d=t(16),h=t.n(d),b=(t(26),t(17)),m=t(4),u=t.n(m),O=t(1),x=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(i.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.github,s=this.props.data.name,t=this.props.data.description;return Object(O.jsxs)("header",{id:"home",children:[Object(O.jsx)(b.a,{type:"circle",bg:!0}),Object(O.jsxs)("nav",{id:"nav-wrap",children:[Object(O.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(O.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(O.jsxs)("ul",{id:"nav",className:"nav",children:[Object(O.jsx)("li",{className:"current",children:Object(O.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Works"})})]})]}),Object(O.jsx)("div",{className:"row banner",children:Object(O.jsxs)("div",{className:"banner-text",children:[Object(O.jsx)(u.a,{bottom:!0,children:Object(O.jsx)("h1",{className:"responsive-headline",children:s})}),Object(O.jsx)(u.a,{bottom:!0,duration:1200,children:Object(O.jsxs)("h3",{children:[t,"."]})}),Object(O.jsx)("hr",{}),Object(O.jsx)(u.a,{bottom:!0,duration:2e3,children:Object(O.jsx)("ul",{className:"social",children:Object(O.jsxs)("a",{href:e,className:"button btn github-btn",children:[Object(O.jsx)("i",{className:"fa fa-github"}),"Github"]})})})]})}),Object(O.jsx)("p",{className:"scrolldown",children:Object(O.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(O.jsx)("i",{className:"icon-down-circle"})})})]})}}]),t}(c.Component),p=x,f=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(i.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.social.map((function(e){return Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:e.url,children:Object(O.jsx)("i",{className:e.className})})},e.name)}));return Object(O.jsx)("footer",{children:Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)(u.a,{bottom:!0,children:Object(O.jsxs)("div",{className:"twelve columns",children:[Object(O.jsx)("ul",{className:"social-links",children:e}),Object(O.jsxs)("ul",{className:"copyright",children:[Object(O.jsx)("li",{children:"\xa9 Copyright 2021 Nordic Giant"}),Object(O.jsxs)("li",{children:["Design by"," ",Object(O.jsx)("a",{title:"Styleshout",href:"http://www.styleshout.com/",children:"Styleshout"})]})]})]})}),Object(O.jsx)("div",{id:"go-top",children:Object(O.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(O.jsx)("i",{className:"icon-up-open"})})})]})})}}]),t}(c.Component),v=f,N=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(i.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.name,s="images/"+this.props.data.image,t=this.props.data.bio,c=this.props.data.address.city,a=this.props.data.address.state,n=this.props.data.email,i=this.props.data.resumedownload;return Object(O.jsx)("section",{id:"about",children:Object(O.jsx)(u.a,{duration:1e3,children:Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)("div",{className:"three columns",children:Object(O.jsx)("img",{className:"profile-pic",src:s,alt:"Nordic Giant Profile Pic"})}),Object(O.jsxs)("div",{className:"nine columns main-col",children:[Object(O.jsx)("h2",{children:"About Me"}),Object(O.jsx)("p",{children:t}),Object(O.jsxs)("div",{className:"row",children:[Object(O.jsxs)("div",{className:"columns contact-details",children:[Object(O.jsx)("h2",{children:"Contact Details"}),Object(O.jsxs)("p",{className:"address",children:[Object(O.jsx)("span",{children:e}),Object(O.jsx)("br",{}),Object(O.jsxs)("span",{children:[c," ",a]}),Object(O.jsx)("br",{}),Object(O.jsx)("span",{children:n})]})]}),Object(O.jsx)("div",{className:"columns download",children:Object(O.jsx)("p",{children:Object(O.jsxs)("a",{href:i,target:"_blank",rel:"noreferrer",className:"button",children:[Object(O.jsx)("i",{className:"fa fa-download"}),"Download Resume"]})})})]})]})]})})})}}]),t}(c.Component),g=N,w=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(i.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"getRandomColor",value:function(){for(var e="#",s=0;s<6;s++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}},{key:"render",value:function(){var e=this;if(!this.props.data)return null;var s=this.props.data.skillmessage,t=this.props.data.education.map((function(e){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{children:e.school}),Object(O.jsxs)("p",{className:"info",children:[e.degree," ",Object(O.jsx)("span",{children:"\u2022"}),Object(O.jsx)("em",{className:"date",children:e.graduated})]}),Object(O.jsx)("p",{children:e.description})]},e.school)})),c=this.props.data.work.map((function(e){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{children:e.company}),Object(O.jsxs)("p",{className:"info",children:[e.title,Object(O.jsx)("span",{children:"\u2022"})," ",Object(O.jsx)("em",{className:"date",children:e.years})]}),Object(O.jsx)("p",{children:e.description})]},e.company)})),a=this.props.data.skills.map((function(s){var t=e.getRandomColor(),c="bar-expand "+s.name.toLowerCase(),a=s.level;return Object(O.jsxs)("li",{children:[Object(O.jsx)("span",{style:{width:a,backgroundColor:t},className:c}),Object(O.jsx)("em",{children:s.name})]},s.name)}));return Object(O.jsxs)("section",{id:"resume",children:[Object(O.jsx)(u.a,{left:!0,duration:1300,children:Object(O.jsxs)("div",{className:"row education",children:[Object(O.jsx)("div",{className:"three columns header-col",children:Object(O.jsx)("h1",{children:Object(O.jsx)("span",{children:"Education"})})}),Object(O.jsx)("div",{className:"nine columns main-col",children:Object(O.jsx)("div",{className:"row item",children:Object(O.jsx)("div",{className:"twelve columns",children:t})})})]})}),Object(O.jsx)(u.a,{left:!0,duration:1300,children:Object(O.jsxs)("div",{className:"row work",children:[Object(O.jsx)("div",{className:"three columns header-col",children:Object(O.jsx)("h1",{children:Object(O.jsx)("span",{children:"Work"})})}),Object(O.jsx)("div",{className:"nine columns main-col",children:c})]})}),Object(O.jsx)(u.a,{left:!0,duration:1300,children:Object(O.jsxs)("div",{className:"row skill",children:[Object(O.jsx)("div",{className:"three columns header-col",children:Object(O.jsx)("h1",{children:Object(O.jsx)("span",{children:"Skills"})})}),Object(O.jsxs)("div",{className:"nine columns main-col",children:[Object(O.jsx)("p",{children:s}),Object(O.jsx)("div",{className:"bars",children:Object(O.jsx)("ul",{className:"skills",children:a})})]})]})})]})}}]),t}(c.Component),y=w,k=(c.Component,t(18)),C=t.n(k),D=0,S=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(i.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.projects.map((function(e){var s="images/portfolio/"+e.image;return Object(O.jsx)("div",{className:"columns portfolio-item",children:Object(O.jsxs)("div",{className:"item-wrap",children:[Object(O.jsx)(C.a,{alt:e.title,src:s}),Object(O.jsxs)("div",{style:{textAlign:"center"},children:[Object(O.jsx)("h2",{children:Object(O.jsx)("a",{href:e.url,children:e.title})}),Object(O.jsx)("div",{className:"languages",children:Object(O.jsxs)("p",{children:[e.languages," "]})}),Object(O.jsx)("div",{className:"years",children:Object(O.jsxs)("p",{children:[e.years," "]})}),Object(O.jsx)("b",{children:e.description})]}),Object(O.jsx)("ul",{className:"social",children:Object(O.jsxs)("a",{href:e.url,className:"button btn github-btn",children:[Object(O.jsx)("i",{className:"fa fa-github"}),"Github"]})})]})},D++)}));return Object(O.jsx)("section",{id:"portfolio",children:Object(O.jsx)(u.a,{left:!0,duration:1e3,distance:"40px",children:Object(O.jsx)("div",{className:"row",children:Object(O.jsxs)("div",{className:"twelve columns collapsed",children:[Object(O.jsx)("h1",{children:"Projects"}),Object(O.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:e})]})})})})}}]),t}(c.Component),A=S,R=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(e){var c;return Object(i.a)(this,t),(c=s.call(this,e)).state={foo:"bar",resumeData:{}},o.a.initialize("UA-110570651-1"),o.a.pageview(window.location.pathname),c}return Object(r.a)(t,[{key:"getResumeData",value:function(){h.a.ajax({url:"./resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,s,t){console.log(t),alert(t)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(p,{data:this.state.resumeData.main}),Object(O.jsx)(g,{data:this.state.resumeData.main}),Object(O.jsx)(y,{data:this.state.resumeData.resume}),Object(O.jsx)(A,{data:this.state.resumeData.portfolio}),Object(O.jsx)(v,{data:this.state.resumeData.main})]})}}]),t}(c.Component),F=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,39)).then((function(s){var t=s.getCLS,c=s.getFID,a=s.getFCP,n=s.getLCP,i=s.getTTFB;t(e),c(e),a(e),n(e),i(e)}))};n.a.render(Object(O.jsx)(R,{}),document.getElementById("root")),F()}},[[38,1,2]]]);
//# sourceMappingURL=main.c15d2c1c.chunk.js.map