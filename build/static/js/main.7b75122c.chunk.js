(this.webpackJsonpgroupshare=this.webpackJsonpgroupshare||[]).push([[0],{35:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},69:function(e,t,n){},73:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n.n(i),r=n(17),c=n.n(r),s=(n(46),n(47),n(41)),o=n(4),u=n(16),l=function(){return Object(u.b)()},d=u.c,b=n(2),p=n.n(b),f=n(6),j=n(5),h=n(13),x=n.n(h);function v(){return new Promise((function(e){x.a.get("/api/video/all").then((function(t){e(t)}))}))}function m(e){return new Promise((function(t){x.a.get("/api/video/search/".concat(e)).then((function(e){t(e)}))}))}var g=Object(j.b)("videos/getVideosFromApi",Object(f.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))),O=Object(j.b)("videos/getSearchVideosFromApi",function(){var e=Object(f.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m(t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),y=(Object(j.b)("video/getOneVideoFromApi",Object(f.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))),Object(j.c)({name:"upload",initialState:{status:"",videos:[],searchClicks:[0]},reducers:{setVideos:function(e,t){e.videos=t.payload},pushSearchClick:function(e){e.searchClicks[0]=(e.searchClicks[0]+1)%3}},extraReducers:function(e){e.addCase(g.pending,(function(e){e.status="loading"})).addCase(g.fulfilled,(function(e,t){e.status="idle",e.videos=t.payload.videos})).addCase(O.pending,(function(e,t){e.status="loading",e.videos=[]})).addCase(O.fulfilled,(function(e,t){e.status="idle",e.videos=t.payload.videos}))}})),w=y.actions,k=w.setVideos,C=w.pushSearchClick,S=function(e){return e.videos.videos},U=function(e){return e.videos.searchClicks},_=y.reducer,L=(n(69),n(0));function N(){var e=Object(i.useState)(""),t=Object(s.a)(e,2),n=t[0],a=t[1],r=Object(o.f)(),c=l();return Object(L.jsx)("div",{style:{display:"inline-block",textAlign:"center"},children:Object(L.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r.push("/results/search_query=".concat(encodeURIComponent(n))),c(C())},children:[Object(L.jsx)("input",{type:"text",id:"searchText",value:n,onChange:function(e){e.preventDefault(),a(e.target.value)}}),Object(L.jsx)("button",{className:"button__square",id:"searchButton",children:"Search"})]})})}var P=n(12);n(73);function I(){var e=Object(o.g)(),t=decodeURIComponent(e.query),n=l(),a=d(S),r=d(U),c=Object(o.f)();Object(i.useEffect)((function(){n(k([])),n(O(t))}),r);var s=a.map((function(e){return Object(L.jsxs)("div",{className:"searchrow",style:{padding:"20px 0px 20px 0px"},onClick:function(){return t=e._id,void c.push("/watch/".concat(t));var t},onMouseEnter:function(t){t.currentTarget.children[0].children[0].src=e.thumbnailGif},onMouseLeave:function(t){t.currentTarget.children[0].children[0].src=e.thumbnailPng},children:[Object(L.jsx)("div",{className:"img__container",children:Object(L.jsx)("img",{src:e.thumbnailPng})}),Object(L.jsxs)("div",{className:"videoinfo",children:[Object(L.jsx)("p",{className:"video__title",children:e.title.length>50?"".concat(e.title.slice(0,25),"..."):e.title}),Object(L.jsx)("p",{className:"video__author",children:e.author}),Object(L.jsxs)("p",{className:"video__views",children:[e.views," views"]})]})]})}));return Object(L.jsxs)("div",{className:"grid",children:[Object(L.jsx)("div",{id:"sidebar"}),Object(L.jsx)("div",{id:"searchrows",children:s})]})}n(35);function R(e){for(var t=atob(e.split(",")[1]),n=new ArrayBuffer(t.length),i=new Uint8Array(n),a=0;a<t.length;a++)i[a]=t.charCodeAt(a);return new Blob([n],{type:"video/webm"})}var T=Object(j.b)("upload/postVideo",function(){var e=Object(f.a)(p.a.mark((function e(t){var n,i,a,r,c,s,o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.state,i=t.token,a=t.history,""!==n.video){e.next=3;break}return e.abrupt("return");case 3:return t.dispatch(E("uploading")),r=new FormData,console.log("1111"),r.append("author",localStorage.username),r.append("description",n.description),console.log("2222"),e.next=11,fetch(n.thumbnailGifs[n.thumbnailGifsIndex]).then((function(e){return e.blob()}));case 11:return c=e.sent,e.next=14,fetch(n.thumbnailPngs[n.thumbnailPngsIndex]).then((function(e){return e.blob()}));case 14:s=e.sent,r.append("files",c,"".concat(n.fileName,".gif")),r.append("files",s,"".concat(n.fileName,".png")),console.log("33333"),r.append("status",n.status),r.append("title",n.title),r.append("url",n.url),o=R(n.video),r.append("files",o,n.fileName),console.log(r),console.log("4444"),x.a.post("/api/video",r,{headers:{token:i,author:localStorage.username}}).then((function(e){t.dispatch(E("idle")),"successful"===e.data.status?a.push("/"):a.push("/login")}));case 26:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),F=Object(j.c)({name:"upload",initialState:{author:"",description:"",fileName:"Upload",status:"idle",gifsVisibility:"",thumbnailGifsIndex:"0",thumbnailGifs:["","","",""],thumbnailPngsIndex:"0",thumbnailPngs:["","","",""],title:"",url:"",video:""},reducers:{setAuthor:function(e,t){e.author=t.payload},setTitle:function(e,t){e.title=t.payload},setDescription:function(e,t){e.description=t.payload},setUrl:function(e,t){e.url=t.payload},setFilename:function(e,t){e.fileName=t.payload},setGifsVisibility:function(e,t){e.gifsVisibility=t.payload},setThumbnailGifsIndex:function(e,t){e.thumbnailGifsIndex=t.payload},setThumbnailGifs:function(e,t){e.thumbnailGifs=t.payload},setThumbnailPngsIndex:function(e,t){e.thumbnailPngsIndex=t.payload},setThumbnailPngs:function(e,t){e.thumbnailPngs=t.payload},setStatus:function(e,t){e.status=t.payload},setVideo:function(e,t){e.video=t.payload}}}),A=F.actions,D=(A.setAuthor,A.setDescription),V=A.setFilename,B=A.setGifsVisibility,E=A.setStatus,G=A.setThumbnailGifsIndex,q=A.setThumbnailGifs,M=A.setThumbnailPngsIndex,W=A.setThumbnailPngs,J=A.setTitle,z=(A.setUrl,A.setVideo),H=function(e){return e.upload.author},$=function(e){return e.upload.description},K=function(e){return e.upload.fileName},Q=function(e){return e.upload.gifsVisibility},X=function(e){return e.upload.status},Y=function(e){return e.upload.thumbnailGifsIndex},Z=function(e){return e.upload.thumbnailGifs},ee=function(e){return e.upload.thumbnailPngsIndex},te=function(e){return e.upload.thumbnailPngs},ne=function(e){return e.upload.title},ie=function(e){return e.upload},ae=function(e){return e.upload.video},re=F.reducer;function ce(e,t){return new Promise((function(n){x.a.post("api/login/login",{username:e,password:t}).then((function(e){n(e)}))}))}var se={status:"",username:"user",password:"pass",errors:{username:"",password:""},loggedIn:!(void 0===localStorage.expiresAt||localStorage.expiresAt<Date.now())||(document.cookie="",!1),token:localStorage.username||document.cookie?document.cookie:""};var oe=Object(j.b)("login/loginFromApi",function(){var e=Object(f.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ce(t.username,t.password);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),ue=Object(j.c)({name:"login",initialState:se,reducers:{setUsername:function(e,t){e.username=t.payload},setPassword:function(e,t){e.password=t.payload},setUsernameError:function(e,t){e.errors.username=t.payload},setPasswordError:function(e,t){e.errors.password=t.payload},setLoggedIn:function(e,t){e.loggedIn=t.payload},setToken:function(e,t){e.token=t.payload}},extraReducers:function(e){e.addCase(oe.pending,(function(e){e.status="loading"})).addCase(oe.fulfilled,(function(e,t){e.status="idle"}))}}),le=ue.actions,de=le.setUsername,be=le.setPassword,pe=le.setUsernameError,fe=le.setPasswordError,je=le.setLoggedIn,he=le.setToken,xe=function(e){return e.login},ve=function(e){return e.login.username},me=function(e){return e.login.password},ge=function(e){return e.login.errors.username},Oe=function(e){return e.login.errors.password},ye=function(e){return e.login.loggedIn},we=function(e){return e.login.token},ke=ue.reducer,Ce=n(25),Se=Object(Ce.createFFmpeg)({log:!1});function Ue(){d(H);var e=d(ne),t=d($),n=d(K),a=d(ae),r=d(we),c=d(Q),s=d(Y),u=d(Z),b=d(ee),j=d(te),h=d(X),v=d(ie),m=l(),g=Object(o.f)(),O=d(ye);function y(e){return w.apply(this,arguments)}function w(){return(w=Object(f.a)(p.a.mark((function e(t){var n,i,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(null===t.target.files||t.target.files.length<1)){e.next=2;break}return e.abrupt("return");case 2:if((n=t.target.files[0]).type.startsWith("video")){e.next=5;break}return e.abrupt("return");case 5:m(E("uploading")),(i=document.createElement("video")).addEventListener("loadeddata",(function(){U(n,i.duration)})),i.src=URL.createObjectURL(new Blob([n])),i.load(),(a=new FileReader).onload=function(){m(z(a.result)),m(V(n.name))},a.readAsDataURL(n);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}O||g.push("/login"),Object(i.useEffect)((function(){O&&k()}),[]);var k=function(){var e=Object(f.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Se.isLoaded()){e.next=3;break}return e.next=3,Se.load();case 3:x.a.post("/test_file",{url:"https://groupsharetk.s3.us-west-1.amazonaws.com/videos/1625562929792+small_file.mp4"}).then((function(e){C(e.data.data)}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function C(e){return S.apply(this,arguments)}function S(){return(S=Object(f.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:m(E("uploading")),(n=document.createElement("video")).addEventListener("loadeddata",(function(){U(t,n.duration)})),n.src=t,n.load(),m(z(t)),m(V("Test file.mp4"));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var U=function(){var e=Object(f.a)(p.a.mark((function e(t,n){var i,a,r,c,s,o,u,l,d,b,f,j,h,x,v,g,O,y;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=Se,e.next=3,Object(Ce.fetchFile)(t);case 3:return e.t1=e.sent,e.t0.FS.call(e.t0,"writeFile","video.mp4",e.t1),i=4,a=new Array(i),r=new Array(i),c="fps=1/".concat(n/(i+1)),e.next=12,Se.run("-i","video.mp4","-vf",c,"%d.png");case 12:r[0]=Se.FS("readFile","1.png"),r[1]=Se.FS("readFile","2.png"),r[2]=Se.FS("readFile","3.png"),r[3]=Se.FS("readFile","4.png"),s=0;case 17:if(!(s<i)){e.next=34;break}if(o=n/(i+1)*(s+1),u=Math.max(0,o-.5),l=Math.min(n,o+.5),d=u.toString(),b="".concat(s,".gif"),!(u+1<n)){e.next=28;break}return e.next=26,Se.run("-i","video.mp4","-t","1","-ss",d,"-f","gif",b);case 26:e.next=30;break;case 28:return e.next=30,Se.run("-i","video.mp4","-t",(n-l).toString(),"-ss",d,"-f","gif",b);case 30:a[s]=Se.FS("readFile",b);case 31:s++,e.next=17;break;case 34:f=URL.createObjectURL(new Blob([a[0].buffer],{type:"image/gif"})),j=URL.createObjectURL(new Blob([a[1].buffer],{type:"image/gif"})),h=URL.createObjectURL(new Blob([a[2].buffer],{type:"image/gif"})),x=URL.createObjectURL(new Blob([a[3].buffer],{type:"image/gif"})),v=URL.createObjectURL(new Blob([r[0].buffer],{type:"image/png"})),g=URL.createObjectURL(new Blob([r[1].buffer],{type:"image/png"})),O=URL.createObjectURL(new Blob([r[2].buffer],{type:"image/png"})),y=URL.createObjectURL(new Blob([r[3].buffer],{type:"image/png"})),m(q([f,j,h,x])),m(W([v,g,O,y])),m(E("idle"));case 45:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();var _=Object(L.jsxs)("div",{id:"preview--header",children:[Object(L.jsx)("div",{children:"Preview"}),Object(L.jsxs)("div",{children:[Object(L.jsx)("button",{onClick:function(e){e.preventDefault(),m(B("1"))},children:"Show"}),Object(L.jsx)("button",{onClick:function(e){e.preventDefault(),m(B("0"))},children:"Hide"})]}),Object(L.jsx)("input",{type:"file",accept:"video/*",onChange:y})]});return""===a&&(_=Object(L.jsxs)("div",{children:[Object(L.jsxs)("label",{children:["Video",Object(L.jsxs)("div",{id:"videoprev",style:{textAlign:"end"},children:[n,Object(L.jsx)("input",{style:{color:"black"},accept:"video/*",type:"file",onChange:y})]})]}),Object(L.jsx)("br",{})]})),Object(L.jsx)("form",{onSubmit:function(e){e.preventDefault(),m(T({state:v,token:r,history:g,dispatch:m}))},children:Object(L.jsxs)("div",{id:"form-container",children:[Object(L.jsx)("div",{id:"side-spacer-left"}),Object(L.jsxs)("div",{id:"inputs",className:"inputs",children:[Object(L.jsxs)("label",{id:"title",children:["Title",Object(L.jsx)("br",{}),Object(L.jsx)("textarea",{id:"title__textarea",value:e,onChange:function(e){e.preventDefault(),m(J(e.target.value))}})]}),Object(L.jsx)("br",{}),Object(L.jsx)("br",{}),Object(L.jsxs)("label",{children:["Description",Object(L.jsx)("br",{}),Object(L.jsx)("textarea",{id:"description__textarea",value:t,onChange:function(e){e.preventDefault(),m(D(e.target.value))},style:{height:"120px"}}),Object(L.jsx)("br",{})]}),Object(L.jsx)("br",{}),Object(L.jsxs)("label",{id:"thumbnail",children:["Thumbnail",Object(L.jsx)("br",{}),Object(L.jsx)("div",{id:"thumbnail-box-area",children:Object(L.jsxs)("div",{className:"thumbnail-section",children:[Object(L.jsx)("img",{src:j[0],className:"thumbnail-box",onClick:function(){return m(M("0"))},style:{opacity:"0"===b?"1":"0.25"}}),Object(L.jsx)("img",{src:j[1],className:"thumbnail-box",onClick:function(){return m(M("1"))},style:{opacity:"1"===b?"1":"0.25"}}),Object(L.jsx)("img",{src:j[2],className:"thumbnail-box",onClick:function(){return m(M("2"))},style:{opacity:"2"===b?"1":"0.25"}}),Object(L.jsx)("img",{src:j[3],className:"thumbnail-box",onClick:function(){return m(M("3"))},style:{opacity:"3"===b?"1":"0.25"}})]})})]}),Object(L.jsx)("br",{}),Object(L.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(L.jsx)("button",{children:"Upload"})})]}),Object(L.jsxs)("div",{id:"video-right",children:[Object(L.jsxs)("div",{id:"video-right--dialog",style:{display:"uploading"===h?"block":"none",opacity:"1"},children:[Object(L.jsx)("h3",{style:{paddingTop:"15px"},children:"Loading..."}),Object(L.jsx)("hr",{})]}),Object(L.jsxs)("div",{id:"video-right--content",style:{opacity:"idle"===h?"1":"0"},children:[_,Object(L.jsxs)("div",{className:"thumbnail-section",style:{opacity:c,pointerEvents:"0"===c?"none":"unset"},children:[Object(L.jsx)("img",{src:u[0],className:"thumbnail-box",onClick:function(){return m(G("0"))},style:{opacity:"0"===s?"1":"idle"===h?.25:0}}),Object(L.jsx)("img",{src:u[1],className:"thumbnail-box",onClick:function(){return m(G("1"))},style:{opacity:"1"===s?"1":"idle"===h?.25:0}}),Object(L.jsx)("img",{src:u[2],className:"thumbnail-box",onClick:function(){return m(G("2"))},style:{opacity:"2"===s?"1":"idle"===h?.25:0}}),Object(L.jsx)("img",{src:u[3],className:"thumbnail-box",onClick:function(){return m(G("3"))},style:{opacity:"3"===s?"1":"idle"===h?.25:0}})]})]})]}),Object(L.jsx)("div",{id:"side-spacer-right"})]})})}n(93);function _e(){var e=l(),t=d(S),n=Object(o.f)();Object(i.useEffect)((function(){e(g())}),[]);var a=null===t||void 0===t?void 0:t.map((function(e){return Object(L.jsxs)("div",{className:"video",children:[Object(L.jsx)("div",{onClick:function(){return t=e._id,void n.push("/watch/".concat(t));var t},onMouseEnter:function(t){t.currentTarget.children[0].src=e.thumbnailGif},onMouseLeave:function(t){t.currentTarget.children[0].src=e.thumbnailPng},children:Object(L.jsx)("img",{src:e.thumbnailPng})}),Object(L.jsxs)("div",{children:[Object(L.jsx)("p",{className:"video__title",children:e.title.length>25?"".concat(e.title.slice(0,25),"..."):e.title}),Object(L.jsx)("p",{className:"video__author",children:e.author}),Object(L.jsxs)("p",{className:"video__views",children:[e.views," views"]})]})]})}));return Object(L.jsxs)("div",{id:"home",children:[Object(L.jsx)("div",{id:"sidebar"}),Object(L.jsx)("div",{id:"allvideos",children:a})]})}var Le=Object(j.c)({name:"upload",initialState:{status:"",video:[]},reducers:{setVideo:function(e,t){e.video[0]=t.payload}}}),Ne=Le.actions.setVideo,Pe=function(e){return e.oneVideo.video},Ie=Le.reducer;n(94);function Re(){var e=l(),t=(Object(o.f)(),d(Pe)),n=Object(o.g)();return Object(i.useEffect)((function(){var t;(t=n.id,new Promise((function(e){x.a.get("/api/video/one/".concat(t)).then((function(t){e(t)}))}))).then((function(t){e(Ne(t.data.videos[0]));var n=document.getElementById("video");n.load(),n.play()}))}),[n.id]),0===t.length||"string"===typeof t[0]?Object(L.jsx)("div",{children:"Loading..."}):Object(L.jsxs)("div",{id:"container",children:[Object(L.jsxs)("div",{id:"onevideocontainer",children:[Object(L.jsx)("div",{id:"video__container",children:Object(L.jsx)("video",{id:"video",controls:!0,children:Object(L.jsx)("source",{src:t[0].src,type:"video/mp4"})})}),Object(L.jsx)("div",{id:"title",children:t[0].title}),Object(L.jsxs)("div",{id:"description",children:[Object(L.jsxs)("span",{style:{paddingRight:"25px"},children:[t[0].views," views"]}),new Date(t[0].date).toDateString()]}),Object(L.jsxs)("div",{children:[Object(L.jsxs)("div",{style:{display:"flex",justifyContent:"flex-end"},children:[t[0].likes," likes"]}),Object(L.jsx)("hr",{})]})]}),Object(L.jsx)("div",{id:"sidebar"})]})}function Te(){var e=l(),t=d(xe),n=d(ve),i=d(me),a=d(ge),r=d(Oe),c=Object(o.f)();function s(t,n){switch(t){case"username":n.length<4?e(pe("Username must be at least ".concat(4," characters long!"))):e(pe(""));break;case"password":n.length<4?e(fe("Password must be at least ".concat(4," characters long!"))):e(fe(""))}}return Object(L.jsx)("div",{style:{textAlign:"center"},children:Object(L.jsxs)("form",{onSubmit:function(a){a.preventDefault(),n.length<4||i.length<4||e(oe(t)).then((function(t){"successful"===t.payload.status?(localStorage.setItem("username",t.payload.username),localStorage.setItem("token",t.payload.token),localStorage.setItem("expiresAt",Date.now()+t.payload.expiresIn),document.cookie=t.payload.token,e(je(!0)),e(he(t.payload.token)),c.push("/")):"wrong_password"===t.payload.status?e(fe("Incorrect Password!")):(e(pe("Incorrect Login Details!")),e(fe("Incorrect Login Details!")))}))},children:[Object(L.jsxs)("label",{children:["Username:",Object(L.jsx)("br",{}),Object(L.jsx)("input",{type:"text",name:"username",value:n,onChange:function(t){e(de(t.target.value)),s("username",t.target.value)}}),Object(L.jsx)("br",{}),a]}),Object(L.jsx)("br",{}),Object(L.jsxs)("label",{children:["Password:",Object(L.jsx)("br",{}),Object(L.jsx)("input",{type:"password",name:"password",value:i,onChange:function(t){e(be(t.target.value)),s("password",t.target.value)}}),Object(L.jsx)("br",{}),r]}),Object(L.jsx)("br",{}),Object(L.jsx)("br",{}),Object(L.jsx)("input",{type:"submit",value:"Login"})]})})}n(95);var Fe=function(){return Object(L.jsx)("div",{id:"App",children:Object(L.jsxs)(P.a,{children:[Object(L.jsxs)("div",{id:"header",children:[Object(L.jsx)(P.b,{style:{display:"inline-block",textDecoration:"none"},to:"/",children:Object(L.jsx)("p",{id:"logo",children:"GroupShare"})}),Object(L.jsx)("div",{style:{textAlign:"center",paddingTop:"17px"},children:Object(L.jsx)(N,{})}),Object(L.jsxs)("div",{style:{paddingTop:"19px"},children:[Object(L.jsx)("button",{className:"button__square",style:{marginRight:"22px"},children:Object(L.jsx)(P.b,{style:{display:"inline-block",padding:"0 15px 0 15px",textDecoration:"none"},to:"/login",children:d(ye)?"Switch User":"Login"})}),Object(L.jsx)("button",{className:"button__square",children:Object(L.jsx)(P.b,{style:{display:"inline-block",padding:"0 15px 0 15px",textDecoration:"none"},to:"/upload",children:"Upload"})})]})]}),Object(L.jsxs)(o.c,{children:[Object(L.jsx)(o.a,{exact:!0,path:"/",children:Object(L.jsx)(_e,{})}),Object(L.jsx)(o.a,{exact:!0,path:"/watch/:id",children:Object(L.jsx)(Re,{})}),Object(L.jsx)(o.a,{path:"/results/search_query=:query",children:Object(L.jsx)(I,{})}),Object(L.jsx)(o.a,{path:"/login",children:Object(L.jsx)(Te,{})}),Object(L.jsx)(o.a,{path:"/upload",children:Object(L.jsx)(Ue,{})})]})]})})};function Ae(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((function(t){return setTimeout((function(){return t({data:e})}),500)}))}var De=Object(j.b)("counter/fetchCount",function(){var e=Object(f.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ae(t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Ve=Object(j.c)({name:"counter",initialState:{value:0,status:"idle"},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}},extraReducers:function(e){e.addCase(De.pending,(function(e){e.status="loading"})).addCase(De.fulfilled,(function(e,t){e.status="idle",e.value+=t.payload}))}}),Be=Ve.actions,Ee=(Be.increment,Be.decrement,Be.incrementByAmount,Ve.reducer),Ge=Object(j.a)({reducer:{counter:Ee,upload:re,videos:_,oneVideo:Ie,login:ke},devTools:!1});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(L.jsx)(a.a.StrictMode,{children:Object(L.jsx)(u.a,{store:Ge,children:Object(L.jsx)(Fe,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[96,1,2]]]);