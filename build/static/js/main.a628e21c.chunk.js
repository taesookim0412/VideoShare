(this.webpackJsonpgroupshare=this.webpackJsonpgroupshare||[]).push([[0],{35:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},72:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var i=n(1),r=n.n(i),a=n(17),s=n.n(a),c=(n(46),n(47),n(41)),o=n(4),u=n(16),l=function(){return Object(u.b)()},d=u.c,b=n(2),p=n.n(b),f=n(6),j=n(5),h=n(13),x=n.n(h);function v(){return new Promise((function(e){x.a.get("/api/video/all").then((function(t){e(t)}))}))}function g(e){return new Promise((function(t){x.a.get("/api/video/search/".concat(e)).then((function(e){t(e)}))}))}var m=Object(j.b)("videos/getVideosFromApi",Object(f.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))),O=Object(j.b)("videos/getSearchVideosFromApi",function(){var e=Object(f.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),y=(Object(j.b)("video/getOneVideoFromApi",Object(f.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))),Object(j.c)({name:"upload",initialState:{status:"",videos:[],searchClicks:[0]},reducers:{setVideos:function(e,t){e.videos=t.payload},pushSearchClick:function(e){e.searchClicks[0]=(e.searchClicks[0]+1)%3}},extraReducers:function(e){e.addCase(m.pending,(function(e){e.status="loading"})).addCase(m.fulfilled,(function(e,t){e.status="idle",e.videos=t.payload.videos})).addCase(O.pending,(function(e,t){e.status="loading",e.videos=[]})).addCase(O.fulfilled,(function(e,t){e.status="idle",e.videos=t.payload.videos}))}})),w=y.actions,k=w.setVideos,C=w.pushSearchClick,S=function(e){return e.videos.videos},U=function(e){return e.videos.searchClicks},L=y.reducer,I=n(0);function P(){var e=Object(i.useState)(""),t=Object(c.a)(e,2),n=t[0],r=t[1],a=Object(o.f)(),s=l();return Object(I.jsx)("div",{style:{display:"inline-block",textAlign:"center"},children:Object(I.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a.push("/results/search_query=".concat(encodeURIComponent(n))),s(C())},children:[Object(I.jsx)("input",{type:"text",value:n,onChange:function(e){e.preventDefault(),r(e.target.value)}}),Object(I.jsx)("button",{children:"Search"})]})})}var R=n(12);n(72);function F(){var e=Object(o.g)(),t=decodeURIComponent(e.query),n=l(),r=d(S),a=d(U),s=Object(o.f)();Object(i.useEffect)((function(){n(k([])),n(O(t))}),a);var c=r.map((function(e){return Object(I.jsxs)("div",{className:"searchrow",style:{padding:"20px 0px 20px 0px"},onClick:function(){return t=e._id,void s.push("/watch/".concat(t));var t},children:[Object(I.jsx)("img",{src:"https://getuikit.com/v2/docs/images/placeholder_600x400.svg"}),Object(I.jsxs)("div",{className:"videoinfo",children:[e.title," ",Object(I.jsx)("br",{}),e.author," ",Object(I.jsx)("br",{}),e.views," ",Object(I.jsx)("br",{})]})]})}));return Object(I.jsxs)("div",{className:"grid",children:[Object(I.jsx)("div",{id:"sidebar",children:"Sidebar"}),Object(I.jsx)("div",{id:"searchrows",children:c})]})}n(35);function A(e){for(var t=atob(e.split(",")[1]),n=new ArrayBuffer(t.length),i=new Uint8Array(n),r=0;r<t.length;r++)i[r]=t.charCodeAt(r);return new Blob([n],{type:"video/webm"})}var T=Object(j.b)("upload/postVideo",function(){var e=Object(f.a)(p.a.mark((function e(t){var n,i,r,a,s,c,o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.state,i=t.token,r=t.history,""!==n.video){e.next=3;break}return e.abrupt("return");case 3:return t.dispatch(E("uploading")),a=new FormData,console.log("1111"),a.append("author",localStorage.username),a.append("description",n.description),console.log("2222"),e.next=11,fetch(n.thumbnailGifs[n.thumbnailGifsIndex]).then((function(e){return e.blob()}));case 11:return s=e.sent,e.next=14,fetch(n.thumbnailPngs[n.thumbnailPngsIndex]).then((function(e){return e.blob()}));case 14:c=e.sent,a.append("files",s,"".concat(n.fileName,".gif")),a.append("files",c,"".concat(n.fileName,".png")),console.log("33333"),a.append("status",n.status),a.append("title",n.title),a.append("url",n.url),o=A(n.video),a.append("files",o,n.fileName),console.log(a),console.log("4444"),x.a.post("/api/video",a,{headers:{token:i,author:localStorage.username}}).then((function(e){t.dispatch(E("idle")),"successful"===e.data.status?r.push("/"):r.push("/login")}));case 26:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),N=Object(j.c)({name:"upload",initialState:{author:"",description:"",fileName:"Upload",status:"idle",gifsVisibility:"",thumbnailGifsIndex:"0",thumbnailGifs:["","","",""],thumbnailPngsIndex:"0",thumbnailPngs:["","","",""],title:"",url:"",video:""},reducers:{setAuthor:function(e,t){e.author=t.payload},setTitle:function(e,t){e.title=t.payload},setDescription:function(e,t){e.description=t.payload},setUrl:function(e,t){e.url=t.payload},setFilename:function(e,t){e.fileName=t.payload},setGifsVisibility:function(e,t){e.gifsVisibility=t.payload},setThumbnailGifsIndex:function(e,t){e.thumbnailGifsIndex=t.payload},setThumbnailGifs:function(e,t){e.thumbnailGifs=t.payload},setThumbnailPngsIndex:function(e,t){e.thumbnailPngsIndex=t.payload},setThumbnailPngs:function(e,t){e.thumbnailPngs=t.payload},setStatus:function(e,t){e.status=t.payload},setVideo:function(e,t){e.video=t.payload}}}),V=N.actions,D=(V.setAuthor,V.setDescription),G=V.setFilename,B=V.setGifsVisibility,E=V.setStatus,_=V.setThumbnailGifsIndex,M=V.setThumbnailGifs,q=V.setThumbnailPngsIndex,W=V.setThumbnailPngs,J=V.setTitle,z=(V.setUrl,V.setVideo),H=function(e){return e.upload.author},$=function(e){return e.upload.description},K=function(e){return e.upload.fileName},Q=function(e){return e.upload.gifsVisibility},X=function(e){return e.upload.status},Y=function(e){return e.upload.thumbnailGifsIndex},Z=function(e){return e.upload.thumbnailGifs},ee=function(e){return e.upload.thumbnailPngsIndex},te=function(e){return e.upload.thumbnailPngs},ne=function(e){return e.upload.title},ie=function(e){return e.upload},re=function(e){return e.upload.video},ae=N.reducer;function se(e,t){return new Promise((function(n){x.a.post("api/login/login",{username:e,password:t}).then((function(e){n(e)}))}))}var ce={status:"",username:"user",password:"pass",errors:{username:"",password:""},loggedIn:!(void 0===localStorage.expiresAt||localStorage.expiresAt<Date.now())||(document.cookie="",!1),token:localStorage.username||document.cookie?document.cookie:""};var oe=Object(j.b)("login/loginFromApi",function(){var e=Object(f.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,se(t.username,t.password);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),ue=Object(j.c)({name:"login",initialState:ce,reducers:{setUsername:function(e,t){e.username=t.payload},setPassword:function(e,t){e.password=t.payload},setUsernameError:function(e,t){e.errors.username=t.payload},setPasswordError:function(e,t){e.errors.password=t.payload},setLoggedIn:function(e,t){e.loggedIn=t.payload},setToken:function(e,t){e.token=t.payload}},extraReducers:function(e){e.addCase(oe.pending,(function(e){e.status="loading"})).addCase(oe.fulfilled,(function(e,t){e.status="idle"}))}}),le=ue.actions,de=le.setUsername,be=le.setPassword,pe=le.setUsernameError,fe=le.setPasswordError,je=le.setLoggedIn,he=le.setToken,xe=function(e){return e.login},ve=function(e){return e.login.username},ge=function(e){return e.login.password},me=function(e){return e.login.errors.username},Oe=function(e){return e.login.errors.password},ye=function(e){return e.login.loggedIn},we=function(e){return e.login.token},ke=ue.reducer,Ce=n(25),Se=Object(Ce.createFFmpeg)({log:!1});function Ue(){d(H);var e=d(ne),t=d($),n=d(K),r=d(re),a=d(we),s=d(Q),c=d(Y),u=d(Z),b=d(ee),j=d(te),h=d(X),v=d(ie),g=l(),m=Object(o.f)(),O=d(ye);function y(e){return w.apply(this,arguments)}function w(){return(w=Object(f.a)(p.a.mark((function e(t){var n,i,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(null===t.target.files||t.target.files.length<1)){e.next=2;break}return e.abrupt("return");case 2:if((n=t.target.files[0]).type.startsWith("video")){e.next=5;break}return e.abrupt("return");case 5:g(E("uploading")),(i=document.createElement("video")).addEventListener("loadeddata",(function(){U(n,i.duration)})),i.src=URL.createObjectURL(new Blob([n])),i.load(),(r=new FileReader).onload=function(){g(z(r.result)),g(G(n.name))},r.readAsDataURL(n);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}O||m.push("/login"),Object(i.useEffect)((function(){O&&k()}),[]);var k=function(){var e=Object(f.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Se.isLoaded()){e.next=3;break}return e.next=3,Se.load();case 3:x.a.post("/test_file",{url:"https://groupsharetk.s3.us-west-1.amazonaws.com/videos/1625451065385+when+they+call+u+a+good+boi.webm"}).then((function(e){C(e.data.data)}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function C(e){return S.apply(this,arguments)}function S(){return(S=Object(f.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:g(E("uploading")),(n=document.createElement("video")).addEventListener("loadeddata",(function(){U(t,n.duration)})),n.src=t,n.load(),g(z(t)),g(G("Test file.webm"));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var U=function(){var e=Object(f.a)(p.a.mark((function e(t,n){var i,r,a,s,c,o,u,l,d,b,f,j,h,x,v,m,O,y;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=Se,e.next=3,Object(Ce.fetchFile)(t);case 3:return e.t1=e.sent,e.t0.FS.call(e.t0,"writeFile","video.mp4",e.t1),i=4,r=new Array(i),a=new Array(i),s="fps=1/".concat(n/(i+1)),e.next=12,Se.run("-i","video.mp4","-vf",s,"%d.png");case 12:a[0]=Se.FS("readFile","1.png"),a[1]=Se.FS("readFile","2.png"),a[2]=Se.FS("readFile","3.png"),a[3]=Se.FS("readFile","4.png"),c=0;case 17:if(!(c<i)){e.next=34;break}if(o=n/(i+1)*(c+1),u=Math.max(0,o-.5),l=Math.min(n,o+.5),d=u.toString(),b="".concat(c,".gif"),!(u+1<n)){e.next=28;break}return e.next=26,Se.run("-i","video.mp4","-t","1","-ss",d,"-f","gif",b);case 26:e.next=30;break;case 28:return e.next=30,Se.run("-i","video.mp4","-t",(n-l).toString(),"-ss",d,"-f","gif",b);case 30:r[c]=Se.FS("readFile",b);case 31:c++,e.next=17;break;case 34:f=URL.createObjectURL(new Blob([r[0].buffer],{type:"image/gif"})),j=URL.createObjectURL(new Blob([r[1].buffer],{type:"image/gif"})),h=URL.createObjectURL(new Blob([r[2].buffer],{type:"image/gif"})),x=URL.createObjectURL(new Blob([r[3].buffer],{type:"image/gif"})),v=URL.createObjectURL(new Blob([a[0].buffer],{type:"image/png"})),m=URL.createObjectURL(new Blob([a[1].buffer],{type:"image/png"})),O=URL.createObjectURL(new Blob([a[2].buffer],{type:"image/png"})),y=URL.createObjectURL(new Blob([a[3].buffer],{type:"image/png"})),g(M([f,j,h,x])),g(W([v,m,O,y])),g(E("idle"));case 45:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();var L=Object(I.jsxs)("div",{id:"preview--header",children:[Object(I.jsx)("div",{children:"Preview"}),Object(I.jsxs)("div",{children:[Object(I.jsx)("button",{onClick:function(e){e.preventDefault(),g(B("1"))},children:"Show"}),Object(I.jsx)("button",{onClick:function(e){e.preventDefault(),g(B("0"))},children:"Hide"})]}),Object(I.jsx)("input",{type:"file",accept:"video/*",onChange:y})]});return""===r&&(L=Object(I.jsxs)("div",{children:[Object(I.jsxs)("label",{children:["Video",Object(I.jsxs)("div",{id:"videoprev",style:{textAlign:"end"},children:[n,Object(I.jsx)("input",{style:{color:"black"},accept:"video/*",type:"file",onChange:y})]})]}),Object(I.jsx)("br",{})]})),Object(I.jsx)("form",{onSubmit:function(e){e.preventDefault(),g(T({state:v,token:a,history:m,dispatch:g}))},children:Object(I.jsxs)("div",{id:"form-container",children:[Object(I.jsx)("div",{id:"side-spacer-left"}),Object(I.jsxs)("div",{id:"inputs",className:"inputs",children:[Object(I.jsxs)("label",{id:"title",children:["Title",Object(I.jsx)("br",{}),Object(I.jsx)("textarea",{value:e,onChange:function(e){e.preventDefault(),g(J(e.target.value))}})]}),Object(I.jsx)("br",{}),Object(I.jsx)("br",{}),Object(I.jsxs)("label",{children:["Description",Object(I.jsx)("br",{}),Object(I.jsx)("textarea",{value:t,onChange:function(e){e.preventDefault(),g(D(e.target.value))},style:{height:"120px"}}),Object(I.jsx)("br",{})]}),Object(I.jsx)("br",{}),Object(I.jsxs)("label",{id:"thumbnail",children:["Thumbnail",Object(I.jsx)("br",{}),Object(I.jsx)("div",{id:"thumbnail-box-area",children:Object(I.jsxs)("div",{className:"thumbnail-section",children:[Object(I.jsx)("img",{src:j[0],className:"thumbnail-box",onClick:function(){return g(q("0"))},style:{opacity:"0"===b?"1":"0.25"}}),Object(I.jsx)("img",{src:j[1],className:"thumbnail-box",onClick:function(){return g(q("1"))},style:{opacity:"1"===b?"1":"0.25"}}),Object(I.jsx)("img",{src:j[2],className:"thumbnail-box",onClick:function(){return g(q("2"))},style:{opacity:"2"===b?"1":"0.25"}}),Object(I.jsx)("img",{src:j[3],className:"thumbnail-box",onClick:function(){return g(q("3"))},style:{opacity:"3"===b?"1":"0.25"}})]})})]}),Object(I.jsx)("br",{}),Object(I.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(I.jsx)("button",{children:"Upload"})})]}),Object(I.jsxs)("div",{id:"video-right",children:[Object(I.jsxs)("div",{id:"video-right--dialog",style:{display:"uploading"===h?"block":"none",opacity:"1"},children:[Object(I.jsx)("h3",{style:{paddingTop:"15px"},children:"Loading"}),Object(I.jsx)("hr",{}),Object(I.jsx)("h5",{children:"This may take several seconds."})]}),Object(I.jsxs)("div",{id:"video-right--content",style:{opacity:"idle"===h?"1":"0"},children:[L,Object(I.jsxs)("div",{className:"thumbnail-section",style:{opacity:s,pointerEvents:"0"===s?"none":"unset"},children:[Object(I.jsx)("img",{src:u[0],className:"thumbnail-box",onClick:function(){return g(_("0"))},style:{opacity:"0"===c?"1":"idle"===h?.25:0}}),Object(I.jsx)("img",{src:u[1],className:"thumbnail-box",onClick:function(){return g(_("1"))},style:{opacity:"1"===c?"1":"idle"===h?.25:0}}),Object(I.jsx)("img",{src:u[2],className:"thumbnail-box",onClick:function(){return g(_("2"))},style:{opacity:"2"===c?"1":"idle"===h?.25:0}}),Object(I.jsx)("img",{src:u[3],className:"thumbnail-box",onClick:function(){return g(_("3"))},style:{opacity:"3"===c?"1":"idle"===h?.25:0}})]})]})]}),Object(I.jsx)("div",{id:"side-spacer-right"})]})})}n(92);function Le(){var e=l(),t=d(S),n=Object(o.f)();Object(i.useEffect)((function(){e(m())}),[]);var r=null===t||void 0===t?void 0:t.map((function(e){return Object(I.jsxs)("div",{className:"video",onClick:function(){return t=e._id,void n.push("/watch/".concat(t));var t},children:[Object(I.jsx)("img",{src:e.thumbnailPng,onMouseEnter:function(t){t.currentTarget.src=e.thumbnailGif},onMouseLeave:function(t){t.currentTarget.src=e.thumbnailPng}}),Object(I.jsxs)("div",{children:[e.title," ",Object(I.jsx)("br",{}),e.author," ",Object(I.jsx)("br",{}),e.views," views ",Object(I.jsx)("br",{})]})]})}));return Object(I.jsxs)("div",{id:"home",children:[Object(I.jsx)("div",{id:"sidebar"}),Object(I.jsx)("div",{id:"allvideos",children:r})]})}function Ie(e){return new Promise((function(t){x.a.get("/api/video/one/".concat(e)).then((function(e){t(e)}))}))}var Pe=Object(j.b)("oneVideo/getOneVideoFromApi",function(){var e=Object(f.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ie(t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Re=Object(j.c)({name:"upload",initialState:{status:"",video:[]},reducers:{setVideo:function(e,t){e.video[0]=t.payload}},extraReducers:function(e){e.addCase(Pe.pending,(function(e){e.status="loading"})).addCase(Pe.fulfilled,(function(e,t){e.status="idle",e.video=t.payload.videos}))}}),Fe=(Re.actions.setVideo,function(e){return e.oneVideo.video}),Ae=Re.reducer;n(93);function Te(){var e=l(),t=(Object(o.f)(),d(Fe)),n=Object(o.g)();return Object(i.useEffect)((function(){e(Pe(n.id))}),[]),0===t.length||"string"===typeof t[0]?Object(I.jsx)("div",{children:"Loading..."}):Object(I.jsxs)("div",{id:"container",children:[Object(I.jsxs)("div",{id:"onevideocontainer",children:[Object(I.jsx)("video",{id:"video",controls:!0,children:Object(I.jsx)("source",{src:t[0].src,type:"video/mp4"})}),Object(I.jsx)("div",{id:"title",children:t[0].title}),Object(I.jsxs)("div",{id:"description",children:[Object(I.jsxs)("span",{style:{paddingRight:"25px"},children:[t[0].views," views"]}),new Date(t[0].date).toDateString()]}),Object(I.jsxs)("div",{children:[Object(I.jsxs)("div",{style:{display:"flex",justifyContent:"flex-end"},children:[t[0].likes," likes"]}),Object(I.jsx)("hr",{})]})]}),Object(I.jsx)("div",{id:"sidebar",children:"Sidebar..."})]})}function Ne(){var e=l(),t=d(xe),n=d(ve),i=d(ge),r=d(me),a=d(Oe),s=Object(o.f)();function c(t,n){switch(t){case"username":n.length<4?e(pe("Username must be at least ".concat(4," characters long!"))):e(pe(""));break;case"password":n.length<4?e(fe("Password must be at least ".concat(4," characters long!"))):e(fe(""))}}return Object(I.jsx)("div",{style:{textAlign:"center"},children:Object(I.jsxs)("form",{onSubmit:function(r){r.preventDefault(),n.length<4||i.length<4||e(oe(t)).then((function(t){"successful"===t.payload.status?(localStorage.setItem("username",t.payload.username),localStorage.setItem("token",t.payload.token),localStorage.setItem("expiresAt",Date.now()+t.payload.expiresIn),document.cookie=t.payload.token,e(je(!0)),e(he(t.payload.token)),s.push("/")):"wrong_password"===t.payload.status?e(fe("Incorrect Password!")):(e(pe("Incorrect Login Details!")),e(fe("Incorrect Login Details!")))}))},children:[Object(I.jsxs)("label",{children:["Username:",Object(I.jsx)("br",{}),Object(I.jsx)("input",{type:"text",name:"username",value:n,onChange:function(t){e(de(t.target.value)),c("username",t.target.value)}}),Object(I.jsx)("br",{}),r]}),Object(I.jsx)("br",{}),Object(I.jsxs)("label",{children:["Password:",Object(I.jsx)("br",{}),Object(I.jsx)("input",{type:"password",name:"password",value:i,onChange:function(t){e(be(t.target.value)),c("password",t.target.value)}}),Object(I.jsx)("br",{}),a]}),Object(I.jsx)("br",{}),Object(I.jsx)("br",{}),Object(I.jsx)("input",{type:"submit",value:"Login"})]})})}n(94);var Ve=function(){return Object(I.jsx)("div",{id:"App",children:Object(I.jsxs)(R.a,{children:[Object(I.jsxs)("div",{id:"header",children:[Object(I.jsx)(R.b,{style:{display:"inline-block"},to:"/",children:Object(I.jsx)("p",{id:"logo",children:"GroupShare"})}),Object(I.jsx)("div",{style:{textAlign:"center",paddingTop:"7px"},children:Object(I.jsx)(P,{})}),Object(I.jsxs)("div",{style:{paddingTop:"5px"},children:[Object(I.jsx)(R.b,{style:{display:"inline-block",padding:"0 15px 0 15px"},to:"/login",children:d(ye)?"Switch User":"Login"}),Object(I.jsx)(R.b,{style:{display:"inline-block",padding:"0 15px 0 15px"},to:"/upload",children:"Upload"})]})]}),Object(I.jsxs)(o.c,{children:[Object(I.jsx)(o.a,{exact:!0,path:"/",children:Object(I.jsx)(Le,{})}),Object(I.jsx)(o.a,{exact:!0,path:"/watch/:id",children:Object(I.jsx)(Te,{})}),Object(I.jsx)(o.a,{path:"/results/search_query=:query",children:Object(I.jsx)(F,{})}),Object(I.jsx)(o.a,{path:"/login",children:Object(I.jsx)(Ne,{})}),Object(I.jsx)(o.a,{path:"/upload",children:Object(I.jsx)(Ue,{})})]})]})})};function De(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((function(t){return setTimeout((function(){return t({data:e})}),500)}))}var Ge=Object(j.b)("counter/fetchCount",function(){var e=Object(f.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,De(t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Be=Object(j.c)({name:"counter",initialState:{value:0,status:"idle"},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}},extraReducers:function(e){e.addCase(Ge.pending,(function(e){e.status="loading"})).addCase(Ge.fulfilled,(function(e,t){e.status="idle",e.value+=t.payload}))}}),Ee=Be.actions,_e=(Ee.increment,Ee.decrement,Ee.incrementByAmount,Be.reducer),Me=Object(j.a)({reducer:{counter:_e,upload:ae,videos:L,oneVideo:Ae,login:ke}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(I.jsx)(r.a.StrictMode,{children:Object(I.jsx)(u.a,{store:Me,children:Object(I.jsx)(Ve,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[95,1,2]]]);