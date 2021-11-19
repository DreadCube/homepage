(this.webpackJsonphomepage=this.webpackJsonphomepage||[]).push([[0],{223:function(e,t,n){"use strict";n.r(t);var s=n(5),c=n.n(s),a=n(84),o=n.n(a),i=(n(92),n(26)),r=n(13),l=n(14),u=n(25),j=n(9),p=n(8);var d={name:"1l3hzdh",styles:"width:100%;height:100vh;display:flex;align-items:center;justify-content:center"},m={name:"cmaurh",styles:"display:flex;flex-direction:column;alignItems:center;text-align:center"},b=function(){var e=Object(r.f)(),t=Object(s.useCallback)((function(){localStorage.setItem("acceptedAudioFeatures",!0),e.push("/tour")}),[e]);return Object(p.jsx)("div",{css:d},Object(p.jsx)("div",{css:m},Object(p.jsx)(j.Text,{as:"h1"},"Welcome"),Object(p.jsx)(j.Text,{as:"p"},"This page uses audio."),Object(p.jsx)(j.Button,{FrameComponent:j.FrameBox,onClick:t},"OK")))};var x={name:"1ywmxy",styles:"height:100vh;display:flex;align-items:center;justify-content:center;margin-left:20px;margin-right:20px"},f={name:"cmaurh",styles:"display:flex;flex-direction:column;alignItems:center;text-align:center"},h={name:"1azakc",styles:"text-align:center"},g={name:"1goe2vg",styles:"display:flex;justify-content:center;flex-wrap:wrap;width:auto"},O={name:"t10jb8",styles:"margin:5px"},w={name:"20l4n8",styles:"& img{min-width:0px;}"},y=function(){var e=Object(r.f)(),t=Object(s.useCallback)((function(){e.push("/projects")}),[e]);return Object(p.jsx)("div",{css:x},Object(p.jsx)("div",{css:f},Object(p.jsx)("div",null,Object(p.jsx)(j.Figure,{css:w,src:["https://media-exp1.licdn.com/dms/image/C4D03AQHM37q42yb3ig/profile-displayphoto-shrink_200_200/0/1614441614389?e=1640822400&v=beta&t=hgGm4IGN7GHE47-B2M8swZcnTUAit0JOVIHF8-akBDs"]})),Object(p.jsx)(j.Text,{as:"h1"},"Alexander Hofer"),Object(p.jsx)(j.Text,{css:h,as:"h6"},"React Developer, Javascript, Coffee Enthusiast, Floorball Goalie"),Object(p.jsx)("div",{css:g},Object(p.jsx)(j.Button,{css:O,palette:"success",FrameComponent:j.FrameBox,onClick:t},"My Projects"),Object(p.jsx)(j.Button,{css:O,palette:"success",FrameComponent:j.FrameBox},"Curriculum"),Object(p.jsx)(j.Button,{css:O,palette:"success",FrameComponent:j.FrameBox,onClick:function(){return window.open("https://www.linkedin.com/in/alexander-hofer-36628a121/")}},"LinkedIn"),Object(p.jsx)(j.Button,{css:O,palette:"success",FrameComponent:j.FrameBox,onClick:function(){return window.open("https://github.com/dreadcube")}},"Github"),Object(p.jsx)(j.Button,{css:O,palette:"success",FrameComponent:j.FrameBox,onClick:function(){return window.open("https://instagram.com/dreadcube")}},"Instagram"))))},v=n(11),k=n.n(v),C=n(23),F=n(17);var B={name:"1nyi2zk",styles:"width:400px;height:auto;margin:20px"},T={name:"1laz9o6",styles:"display:flex;justify-content:space-between;align-items:flex-end"},I=function(e){return Object(p.css)("text-align:left;max-width:60%;margin-bottom:0;color:",e.palette.primary.dark2,";","")},S=function(e){var t,n=e.title,c=e.description,a=e.topics,o=void 0===a?[]:a,i=e.repoLink,r=Object(F.i)(),l=Object(s.useCallback)((function(){window.open(i)}),[i]),u={src:(t=n,"https://raw.githubusercontent.com/DreadCube/".concat(t,"/master/preview.png")),alt:n};return Object(p.jsx)(j.Card,{hover:!0,css:B,title:n,image:u,options:Object(p.jsx)("div",{css:T},Object(p.jsx)(j.Text,{theme:r,css:I(r),as:"p"},o.join(", ")),Object(p.jsx)(j.Button,{palette:"success",onClick:l},Object(p.jsx)(j.Text,null,"Go to Repo")))},Object(p.jsx)(j.Text,{as:"p"},c))},A=function(){var e=Object(s.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],a=function(){var e=Object(C.a)(k.a.mark((function e(){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/users/DreadCube/repos");case 2:return e.next=4,e.sent.json();case 4:t=e.sent,c(t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){a()}),[]),console.log(n),Object(p.jsx)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"flex-start"}},n.map((function(e){return Object(p.jsx)(S,{key:e.id,title:e.name,description:e.description,repoLink:e.html_url,topics:e.topics})})))},E=n(2),G=n(43),P=n(86),z=n(87),D=function(){return Object(s.useEffect)((function(){!function(){var e=new E.cb,t=new E.T(50,window.innerWidth/window.innerHeight,.1,1e3),n=new E.rb;n.setSize(window.innerWidth,window.innerHeight),n.sortObjects=!1,document.body.appendChild(n.domElement);var s=new z.a,c=new P.a(t,n.domElement);c.target.set(0,0,0);var a=new E.o("white","white");a.position.set(0,300,0),e.add(a);var o=new E.i("white");o.position.set(75,300,-75),e.add(o);var i=new E.f(150,32),r=new E.J({color:"white"});r.side=E.j,new E.I(i,r).rotateX(Math.PI/2),t.position.z=1e4;var l=null;s.load("/assets/models/city/scene.gltf",(function(t){l=t.scene,console.log({gltf:t}),e.add(l),new Audio("/assets/audio/drama.mp3")}),void 0,(function(e){console.error(e)})),function s(){requestAnimationFrame(s),c.update(),G.a.update(),n.render(e,t)}()}()}),[]),Object(p.jsx)(c.a.Fragment,null)},H={common:{volume:.25}},J={object:{src:["https://playground.arwes.dev/assets/sounds/object.mp3"]},type:{src:["https://playground.arwes.dev/assets/sounds/type.mp3"],loop:!0},click:{src:["https://playground.arwes.dev/assets/sounds/click.mp3"]}},L={object:{player:"object"},type:{player:"type"},click:{player:"click",category:"interaction"}},M={duration:{enter:200,exit:200}},W=function(){var e=Object(r.g)();console.log(e);var t=Object(s.useState)(!1),n=Object(i.a)(t,2),c=n[0],a=n[1];return Object(s.useEffect)((function(){a(!1);var e=setTimeout((function(){a(!0)}),1e3);return function(){return clearTimeout(e)}}),[e]),Object(p.jsx)(j.ArwesThemeProvider,null,Object(p.jsx)(j.StylesBaseline,{styles:{body:{fontFamily:'"Titillium Web", sans-serif'}}}),localStorage.getItem("acceptedAudioFeatures")?Object(p.jsx)(u.BleepsProvider,{audioSettings:H,playersSettings:J,bleepsSettings:L},Object(p.jsx)(l.AnimatorGeneralProvider,{animator:M},Object(p.jsx)(l.Animator,{animator:{activate:c,manager:"sequence"}},Object(p.jsx)(r.c,null,Object(p.jsx)(r.a,{path:"/projects"},Object(p.jsx)(A,null)),Object(p.jsx)(r.a,{path:"/tour"},Object(p.jsx)(D,null)),Object(p.jsx)(r.a,{path:"/"},Object(p.jsx)(y,null)))))):Object(p.jsx)(b,null))},q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,224)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),s(e),c(e),a(e),o(e)}))},_=n(34);o.a.render(Object(p.jsx)(c.a.StrictMode,null,Object(p.jsx)(_.a,null,Object(p.jsx)(W,null))),document.getElementById("root")),q()},92:function(e,t,n){}},[[223,1,2]]]);
//# sourceMappingURL=main.b130febb.chunk.js.map