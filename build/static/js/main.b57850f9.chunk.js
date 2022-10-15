(this["webpackJsonpcandy-machine-mint"]=this["webpackJsonpcandy-machine-mint"]||[]).push([[0],{146:function(e,t,n){},187:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r,a=n(15),c=n(3),i=n(1),s=n.n(i),o=n(5),u=n(90);!function(e){e[e.Sequential=0]="Sequential",e[e.Parallel=1]="Parallel",e[e.StopOnFailure=2]="StopOnFailure"}(r||(r={}));var l=function(){var e=Object(c.a)(s.a.mark((function e(t,n,c,i){var l,d,b,p,g,m,h,j,x,v,O,y,k,w,S=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l=S.length>4&&void 0!==S[4]?S[4]:r.Parallel,d=S.length>5&&void 0!==S[5]?S[5]:"singleGossip",b=S.length>6&&void 0!==S[6]?S[6]:function(e,t){},p=S.length>7&&void 0!==S[7]?S[7]:function(e,t){return!1},g=S.length>8?S[8]:void 0,n.publicKey){e.next=7;break}throw new u.e;case 7:if(m=[],g){e.next=12;break}return e.next=11,t.getRecentBlockhash(d);case 11:g=e.sent;case 12:h=function(e){var t=c[e],r=i[e];if(0===t.length)return"continue";var s=new o.Transaction;t.forEach((function(e){return s.add(e)})),s.recentBlockhash=g.blockhash,s.setSigners.apply(s,[n.publicKey].concat(Object(a.a)(r.map((function(e){return e.publicKey}))))),r.length>0&&s.partialSign.apply(s,Object(a.a)(r)),m.push(s)},j=0;case 14:if(!(j<c.length)){e.next=21;break}if("continue"!==h(j)){e.next=18;break}return e.abrupt("continue",18);case 18:j++,e.next=14;break;case 21:return e.next=23,n.signAllTransactions(m);case 23:x=e.sent,v=[],O={breakEarly:!1,i:0},console.log("Signed txns length",x.length,"vs handed in length",c.length),y=s.a.mark((function e(n){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((a=f({connection:t,signedTransaction:x[n]})).then((function(e){var t=e.txid;e.slot;b(t,n)})).catch((function(e){p(x[n],n),l===r.StopOnFailure&&(O.breakEarly=!0,O.i=n)})),l===r.Parallel){e.next=21;break}return e.prev=3,e.next=6,a;case 6:e.next=19;break;case 8:if(e.prev=8,e.t0=e.catch(3),console.log("Caught failure",e.t0),!O.breakEarly){e.next=19;break}return console.log("Died on ",O.i),e.t1=O.i,e.next=16,Promise.all(v);case 16:return e.t2=e.sent,e.t3={number:e.t1,txs:e.t2},e.abrupt("return",{v:e.t3});case 19:e.next=22;break;case 21:v.push(a);case 22:case"end":return e.stop()}}),e,null,[[3,8]])})),k=0;case 29:if(!(k<x.length)){e.next=37;break}return e.delegateYield(y(k),"t0",31);case 31:if("object"!==typeof(w=e.t0)){e.next=34;break}return e.abrupt("return",w.v);case 34:k++,e.next=29;break;case 37:if(l===r.Parallel){e.next=40;break}return e.next=40,Promise.all(v);case 40:return e.t1=x.length,e.next=43,Promise.all(v);case 43:return e.t2=e.sent,e.abrupt("return",{number:e.t1,txs:e.t2});case 45:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),d=function(){return(new Date).getTime()/1e3},b=15e3;function f(e){return p.apply(this,arguments)}function p(){return(p=Object(c.a)(s.a.mark((function e(t){var n,r,a,i,o,u,l,f,p,m,j,v,O;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.signedTransaction,r=t.connection,a=t.timeout,i=void 0===a?b:a,o=n.serialize(),u=d(),l=0,e.next=6,r.sendRawTransaction(o,{skipPreflight:!0});case 6:return f=e.sent,console.log("Started awaiting confirmation for",f),p=!1,Object(c.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(p||!(d()-u<i)){e.next=6;break}return r.sendRawTransaction(o,{skipPreflight:!0}),e.next=4,x(500);case 4:e.next=0;break;case 6:case"end":return e.stop()}}),e)})))(),e.prev=10,e.next=13,h(f,i,r,"recent",!0);case 13:if(m=e.sent){e.next=16;break}throw new Error("Timed out awaiting confirmation on transaction");case 16:if(!m.err){e.next=19;break}throw console.error(m.err),new Error("Transaction failed: Custom instruction error");case 19:l=(null===m||void 0===m?void 0:m.slot)||0,e.next=47;break;case 22:if(e.prev=22,e.t0=e.catch(10),console.error("Timeout Error caught",e.t0),!e.t0.timeout){e.next=27;break}throw new Error("Timed out awaiting confirmation on transaction");case 27:return j=null,e.prev=28,e.next=31,g(r,n,"single");case 31:j=e.sent.value,e.next=36;break;case 34:e.prev=34,e.t1=e.catch(28);case 36:if(!j||!j.err){e.next=47;break}if(!j.logs){e.next=46;break}v=j.logs.length-1;case 39:if(!(v>=0)){e.next=46;break}if(!(O=j.logs[v]).startsWith("Program log: ")){e.next=43;break}throw new Error("Transaction failed: "+O.slice("Program log: ".length));case 43:--v,e.next=39;break;case 46:throw new Error(JSON.stringify(j.err));case 47:return e.prev=47,p=!0,e.finish(47);case 50:return console.log("Latency",f,d()-u),e.abrupt("return",{txid:f,slot:l});case 52:case"end":return e.stop()}}),e,null,[[10,22,47,50],[28,34]])})))).apply(this,arguments)}function g(e,t,n){return m.apply(this,arguments)}function m(){return(m=Object(c.a)(s.a.mark((function e(t,n,r){var a,c,i,o,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._recentBlockhash(t._disableBlockhashCaching);case 2:return n.recentBlockhash=e.sent,a=n.serializeMessage(),c=n._serialize(a),i=c.toString("base64"),o=[i,{encoding:"base64",commitment:r}],e.next=10,t._rpcRequest("simulateTransaction",o);case 10:if(!(u=e.sent).error){e.next=13;break}throw new Error("failed to simulate transaction: "+u.error.message);case 13:return e.abrupt("return",u.result);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e,t,n){return j.apply(this,arguments)}function j(){return j=Object(c.a)(s.a.mark((function e(t,n,r){var a,i,o,u,l,d=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=d.length>3&&void 0!==d[3]?d[3]:"recent",i=d.length>4&&void 0!==d[4]&&d[4],o=!1,u={slot:0,confirmations:0,err:null},l=0,e.next=7,new Promise(function(){var e=Object(c.a)(s.a.mark((function e(d,b){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){o||(o=!0,console.log("Rejecting for timeout..."),b({timeout:!0}))}),n);try{l=r.onSignature(t,(function(e,t){o=!0,u={err:e.err,slot:t.slot,confirmations:0},e.err?(console.log("Rejected via websocket",e.err),b(u)):(console.log("Resolved via websocket",e),d(u))}),a)}catch(f){o=!0,console.error("WS error in setup",t,f)}case 2:if(o||!i){e.next=8;break}return Object(c.a)(s.a.mark((function e(){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.getSignatureStatuses([t]);case 3:n=e.sent,u=n&&n.value[0],o||(u?u.err?(console.log("REST error for",t,u),o=!0,b(u.err)):u.confirmations?(console.log("REST confirmation for",t,u),o=!0,d(u)):console.log("REST no confirmations for",t,u):console.log("REST null result for",t,u)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),o||console.log("REST connection error: txid",t,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),e.next=6,x(2e3);case 6:e.next=2;break;case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 7:return u=e.sent,r._signatureSubscriptions[l]&&r.removeSignatureListener(l),o=!0,console.log("Returning status",u),e.abrupt("return",u);case 12:case"end":return e.stop()}}),e)}))),j.apply(this,arguments)}function x(e){return new Promise((function(t){return setTimeout(t,e)}))}},206:function(e,t){},208:function(e,t){},229:function(e,t){},230:function(e,t){},295:function(e,t,n){},296:function(e,t,n){"use strict";n.r(t);var r,a,c,i=n(2),s=n.n(i),o=n(25),u=n.n(o),l=(n(146),n(22)),d=n(3),b=n(14),f=n(76),p=n(1),g=n.n(p),m=n(60),h=n(334),j=n(330),x=n(5),v=n(180),O=n(87),y=n(99),k=n(332),w=n(331),S=n(188),T=n(326),P=n(345),N=n(9),A=Object(T.a)((function(e){return Object(P.a)({root:{display:"flex",padding:e.spacing(0),"& > *":{margin:e.spacing(.5),marginRight:0,width:e.spacing(6),height:e.spacing(6),display:"flex",flexDirection:"column",alignContent:"center",alignItems:"center",justifyContent:"center",background:"#384457",color:"white",borderRadius:5,fontSize:10}},done:{display:"flex",margin:e.spacing(1),marginRight:0,padding:e.spacing(1),flexDirection:"column",alignContent:"center",alignItems:"center",justifyContent:"center",background:"#384457",color:"white",borderRadius:5,fontWeight:"bold",fontSize:18},item:{fontWeight:"bold",fontSize:18}})})),R=function(e){var t=e.date,n=e.status,r=e.style,a=e.onComplete,c=A();return t?Object(N.jsx)(S.a,{date:t,onComplete:a,renderer:function(e){var t=e.days,a=e.hours,i=e.minutes,s=e.seconds;return a+=24*t,e.completed?n?Object(N.jsx)("span",{className:c.done,children:n}):null:Object(N.jsxs)("div",{className:c.root,style:r,children:[Object(N.jsxs)(j.a,{elevation:0,children:[Object(N.jsx)("span",{className:c.item,children:a<10?"0".concat(a):a}),Object(N.jsx)("span",{children:"hrs"})]}),Object(N.jsxs)(j.a,{elevation:0,children:[Object(N.jsx)("span",{className:c.item,children:i<10?"0".concat(i):i}),Object(N.jsx)("span",{children:"mins"})]}),Object(N.jsxs)(j.a,{elevation:0,children:[Object(N.jsx)("span",{className:c.item,children:s<10?"0".concat(s):s}),Object(N.jsx)("span",{children:"secs"})]})]})}}):null},E=n(57),M=function(e){var t,n,r=e.candyMachine;return Object(N.jsx)(k.a,{container:!0,direction:"row",justifyContent:"center",wrap:"nowrap",children:Object(N.jsxs)(k.a,{container:!0,direction:"row",wrap:"nowrap",children:[r&&Object(N.jsxs)(k.a,{container:!0,direction:"row",wrap:"nowrap",children:[Object(N.jsxs)(k.a,{container:!0,direction:"column",children:[Object(N.jsx)(w.a,{variant:"body2",color:"textSecondary",children:"Minted"}),Object(N.jsx)(w.a,{variant:"h6",color:"textPrimary",style:{fontWeight:"bold"},children:Object(N.jsx)("span",{className:"gradTextFancyFontGreySmally",children:"".concat(null===r||void 0===r?void 0:r.state.itemsRedeemed," / ").concat(null===r||void 0===r?void 0:r.state.itemsAvailable)})})]}),Object(N.jsxs)(k.a,{container:!0,direction:"column",children:[Object(N.jsx)(w.a,{variant:"body2",color:"textSecondary",children:"Price"}),Object(N.jsx)(w.a,{variant:"h6",color:"textPrimary",style:{fontWeight:"bold"},children:Object(N.jsx)("span",{className:"gradTextFancyFontGreySmally",children:" 10 $DUST"})})]})]}),Object(N.jsx)(R,{date:Object(E.f)(null===r||void 0===r?void 0:r.state.goLiveDate),style:{justifyContent:"flex-end"},status:null===r||void 0===r||null===(t=r.state)||void 0===t||!t.isActive||null!==r&&void 0!==r&&null!==(n=r.state)&&void 0!==n&&n.isSoldOut?"COMPLETED":"LIVE"})]})})},K=n(328),C=n(333),D=n(89),_=Object(m.default)(K.a)(r||(r=Object(f.a)(["\n  width: 100%;\n  height: 60px;\n  margin-top: 10px;\n  margin-bottom: 5px;\n  // background: linear-gradient(180deg, #b38728 0%, #fbf5b7 100%);\n  // background-image: linear-gradient(to top, #f77062 0%, #fe5196 100%);\n  background-image: linear-gradient(\n    to top,\n    #ff9a9e 0%,\n    #fecfef 99%,\n    #fecfef 100%\n  );\n\n  color: white;\n  font-size: 16px;\n  font-weight: bold;\n"]))),I=function(e){var t=e.onMint,n=e.candyMachine,r=e.isMinting,a=Object(D.useGateway)(),c=a.requestGatewayToken,s=a.gatewayStatus,o=Object(i.useState)(!1),u=Object(b.a)(o,2),l=u[0],f=u[1];return Object(i.useEffect)((function(){s===D.GatewayStatus.ACTIVE&&l&&(t(),f(!1))}),[s,l,f,t]),Object(N.jsx)(_,{disabled:(null===n||void 0===n?void 0:n.state.isSoldOut)||r||!(null!==n&&void 0!==n&&n.state.isActive),onClick:Object(d.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(f(!0),null===n||void 0===n||!n.state.isActive||null===n||void 0===n||!n.state.gatekeeper){e.next=10;break}if(s!==D.GatewayStatus.ACTIVE){e.next=6;break}f(!0),e.next=8;break;case 6:return e.next=8,c();case 8:e.next=13;break;case 10:return e.next=12,t();case 12:f(!1);case 13:case"end":return e.stop()}}),e)}))),variant:"contained",children:null!==n&&void 0!==n&&n.state.isSoldOut?"SOLD OUT":r?Object(N.jsx)(C.a,{}):Object(N.jsx)(N.Fragment,{children:Object(N.jsx)("b",{className:"gradTextFancyFontGreyRoll",children:" MINT Goddess "})})})},B=n.p+"static/media/degoddess.290750d0.gif",F=n.p+"static/media/degoddess2.e3d792fe.gif",W=Object(m.default)(O.a)(a||(a=Object(f.a)(["\n  width: 100%;\n  height: 60px;\n  margin-top: 10px;\n  margin-bottom: 5px;\n  // background-image: linear-gradient(to top, #ff0844 0%, #ffb199 100%);\n  background-image: linear-gradient(\n    to top,\n    #ff9a9e 0%,\n    #fecfef 99%,\n    #fecfef 100%\n  );\n\n  color: white;\n  font-size: 16px;\n  font-weight: bold;\n"]))),L=m.default.div(c||(c=Object(f.a)([""]))),Y=function(e){var t,n,r=Object(i.useState)(!1),a=Object(b.a)(r,2),c=a[0],s=a[1],o=Object(i.useState)(),u=Object(b.a)(o,2),l=u[0],f=u[1],p=Object(i.useState)({open:!1,message:"",severity:void 0}),m=Object(b.a)(p,2),O=(m[0],m[1]),k=e.rpcHost,w=Object(v.b)(),S=Object(i.useMemo)((function(){if(w&&w.publicKey&&w.signAllTransactions&&w.signTransaction)return{publicKey:w.publicKey,signAllTransactions:w.signAllTransactions,signTransaction:w.signTransaction}}),[w]),T=Object(i.useCallback)(Object(d.a)(g.a.mark((function t(){var n;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(S){t.next=2;break}return t.abrupt("return");case 2:if(!e.candyMachineId){t.next=14;break}return t.prev=3,t.next=6,Object(y.c)(S,e.candyMachineId,e.connection);case 6:n=t.sent,f(n),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(3),console.log("There was a problem fetching Candy Machine state"),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[3,10]])}))),[S,e.candyMachineId,e.connection]),P=function(){var t=Object(d.a)(g.a.mark((function t(){var n,r,a,c;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,s(!0),null===(n=document.getElementById("#identity"))||void 0===n||n.click(),!(w.connected&&null!==l&&void 0!==l&&l.program&&w.publicKey)){t.next=13;break}return t.next=6,Object(y.d)(l,w.publicKey);case 6:if(r=t.sent[0],a={err:!0},!r){t.next=12;break}return t.next=11,Object(y.b)(r,e.txTimeout,e.connection,!0);case 11:a=t.sent;case 12:a&&!a.err?O({open:!0,message:"Congratulations! Mint succeeded!",severity:"success"}):O({open:!0,message:"Mint failed! Please try again!",severity:"error"});case 13:t.next=20;break;case 15:t.prev=15,t.t0=t.catch(0),c=t.t0.msg||"Minting failed! Please try again!",t.t0.msg?311===t.t0.code?(c="SOLD OUT!",window.location.reload()):312===t.t0.code&&(c="Minting period hasn't started yet."):t.t0.message?t.t0.message.indexOf("0x137")?c="SOLD OUT!":t.t0.message.indexOf("0x135")&&(c="Insufficient funds to mint. Please fund your wallet."):c="Transaction Timeout! Please try again.",O({open:!0,message:c,severity:"error"});case 20:return t.prev=20,s(!1),t.finish(20);case 23:case"end":return t.stop()}}),t,null,[[0,15,20,23]])})));return function(){return t.apply(this,arguments)}}();return Object(i.useEffect)((function(){T()}),[S,e.candyMachineId,e.connection,T]),Object(N.jsxs)("div",{id:"hold",children:[Object(N.jsx)("div",{children:Object(N.jsx)("h1",{className:"gradTextFancyFontPinkBig",children:"Only $DUST \ud83d\udd13"})}),Object(N.jsx)("div",{className:"innerHold",children:Object(N.jsx)("div",{className:"inner col1",children:Object(N.jsx)("img",{alt:" ",className:"degoddessImage",src:B})})}),Object(N.jsx)("div",{className:"innerHold",children:Object(N.jsxs)("div",{className:"inner col2",children:[Object(N.jsx)("h2",{className:"gradTextFancyFontPinkDiff",children:"$Dust only MINT "}),Object(N.jsx)(h.a,{maxWidth:"xs",children:Object(N.jsx)(j.a,{style:{padding:24,backgroundColor:"#1C1B1A",borderRadius:6},children:w.connected?Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(M,{candyMachine:l}),Object(N.jsx)(L,{children:null!==l&&void 0!==l&&l.state.isActive&&null!==l&&void 0!==l&&l.state.gatekeeper&&w.publicKey&&w.signTransaction?Object(N.jsx)(D.GatewayProvider,{wallet:{publicKey:w.publicKey||new x.PublicKey(y.a),signTransaction:w.signTransaction},gatekeeperNetwork:null===l||void 0===l||null===(t=l.state)||void 0===t||null===(n=t.gatekeeper)||void 0===n?void 0:n.gatekeeperNetwork,clusterUrl:k,options:{autoShowModal:!1},children:Object(N.jsx)(I,{candyMachine:l,isMinting:c,onMint:P})}):Object(N.jsx)(I,{candyMachine:l,isMinting:c,onMint:P})})]}):Object(N.jsx)(W,{children:"Get your DeGod a Degoddess"})})})]})}),Object(N.jsx)("div",{className:"innerHold",children:Object(N.jsx)("div",{className:"inner col3",children:Object(N.jsx)("img",{alt:" ",className:"degoddessImage",src:F})})}),Object(N.jsx)("div",{className:"clear"}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("p",{className:"gradTextFancyFontWhiteSmall",children:"We believe in $DUST and will strive to make it most utilizable currency on GodLand"})]})};function U(){var e=Object(i.useState)((new Date).getFullYear()),t=Object(b.a)(e,1)[0];return Object(N.jsx)("div",{className:"footerDiv",children:Object(N.jsxs)("h4",{className:"copyright",children:[Object(N.jsxs)("span",{className:"gradTextFancyFontPinkFooter",children:["Copyright \xa9 ",t," "]}),Object(N.jsx)("span",{className:"gradTextFancyFontPinkFooter",children:" Degoddess"})]})})}var G,z=n(7),H=n(6),q=n(10),V=n(11),J=Object(m.default)(O.a)(G||(G=Object(f.a)([""]))),Z=function(e){Object(q.a)(n,e);var t=Object(V.a)(n);function n(){return Object(z.a)(this,n),t.apply(this,arguments)}return Object(H.a)(n,[{key:"render",value:function(){return Object(N.jsxs)("nav",{className:"navBarItems",children:[Object(N.jsx)("div",{className:"navbarLogo",children:Object(N.jsx)("h2",{children:Object(N.jsx)("span",{className:"gradTextFancyFontPinkQW",children:"Degoddess."})})}),Object(N.jsx)("div",{className:"connectWalletButtonNav",children:Object(N.jsx)(J,{className:"gradientClass",children:Object(N.jsx)("b",{children:"Connect Wallet"})})})]})}}]),n}(i.Component),$=Z,Q=n(341),X=n(342),ee=n(343),te=n(337),ne=n(338),re=n(344),ae=n(340),ce=n(193),ie=n(339),se=Object(ce.a)({palette:{type:"dark"}}),oe=function(){try{return new l.d.PublicKey("71YgRZrSLRfpYLF44oDq17vhMJBmLi8YJoqEjeBmnSDs")}catch(e){return void console.log("Failed to construct CandyMachineId",e)}}(),ue="devnet",le="https://api.devnet.solana.com",de=new l.d.Connection(le),be=parseInt(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_CANDY_MACHINE_ID:"71YgRZrSLRfpYLF44oDq17vhMJBmLi8YJoqEjeBmnSDs",REACT_APP_SOLANA_NETWORK:"devnet",REACT_APP_SOLANA_RPC_HOST:"https://api.devnet.solana.com"}).REACT_APP_CANDY_START_DATE,10),fe=function(){var e=Object(i.useMemo)((function(){return Object(x.clusterApiUrl)(ue)}),[]),t=Object(i.useMemo)((function(){return[Object(Q.a)(),Object(X.a)(),Object(ee.a)(),Object(te.a)({network:ue}),Object(ne.a)({network:ue})]}),[]);return Object(N.jsx)(ie.a,{theme:se,children:Object(N.jsx)(re.a,{endpoint:e,children:Object(N.jsx)(ae.a,{wallets:t,autoConnect:!0,children:Object(N.jsx)(O.b,{children:Object(N.jsxs)("div",{className:"backgroundPaper",children:[Object(N.jsx)($,{}),Object(N.jsx)(Y,{candyMachineId:oe,connection:de,startDate:be,txTimeout:3e4,rpcHost:le}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)(U,{})]})})})})})},pe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,346)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};n(295);u.a.render(Object(N.jsx)(s.a.StrictMode,{children:Object(N.jsx)(fe,{})}),document.getElementById("root")),pe()},57:function(e,t,n){"use strict";(function(e){n.d(t,"f",(function(){return o})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return b})),n.d(t,"e",(function(){return f}));var r=n(3),a=n(1),c=n.n(a),i=n(22),s=n(32),o=(n(5),function(e){if(e)return new Date(1e3*e.toNumber())}),u=(new Intl.NumberFormat("en-US",{style:"decimal",minimumFractionDigits:2,maximumFractionDigits:2}),new i.d.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL")),l=new i.d.PublicKey("gatem74V238djXdzWnJf94Wo1DcnuGkfijbf3AuBhfs"),d=function(){var e=Object(r.a)(c.a.mark((function e(t,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.d.PublicKey.findProgramAddress([n.toBuffer(),s.b.toBuffer(),t.toBuffer()],u);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),b=function(){var t=Object(r.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.PublicKey.findProgramAddress([n.toBuffer(),e.from("expire")],l);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=Object(r.a)(c.a.mark((function t(n,r){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.PublicKey.findProgramAddress([n.toBuffer(),e.from("gateway"),e.from([0,0,0,0,0,0,0,0]),r.toBuffer()],l);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}).call(this,n(13).Buffer)},99:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return p})),n.d(t,"c",(function(){return m})),n.d(t,"d",(function(){return v}));var r=n(14),a=n(3),c=n(1),i=n.n(c),s=n(22),o=n(32),u=n(5),l=n(187),d=n(57),b=new s.d.PublicKey("cndy3Z4yapfJBmL3ShUp5exZKqR3z33thTzeNMm2gRZ"),f=new s.d.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"),p=function(){var e=Object(a.a)(i.a.mark((function e(t,n,r){var c,s,o,u,l=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=l.length>3&&void 0!==l[3]&&l[3],s=!1,o={slot:0,confirmations:0,err:null},u=0,e.next=6,new Promise(function(){var e=Object(a.a)(i.a.mark((function e(u,l){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){s||(s=!0,console.log("Rejecting for timeout..."),l({timeout:!0}))}),n);case 1:if(s||!c){e.next=7;break}return Object(a.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.getSignatureStatuses([t]);case 3:n=e.sent,o=n&&n.value[0],s||(o?o.err?(console.log("REST error for",t,o),s=!0,l(o.err)):o.confirmations?(console.log("REST confirmation for",t,o),s=!0,u(o)):console.log("REST no confirmations for",t,o):console.log("REST null result for",t,o)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),s||console.log("REST connection error: txid",t,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),e.next=5,O(2e3);case 5:e.next=1;break;case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 6:return o=e.sent,r._signatureSubscriptions[u]&&r.removeSignatureListener(u),s=!0,console.log("Returning status",o),e.abrupt("return",o);case 11:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),g=function(t,n,r,a){var c=[{pubkey:n,isSigner:!0,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:r,isSigner:!1,isWritable:!1},{pubkey:a,isSigner:!1,isWritable:!1},{pubkey:s.d.SystemProgram.programId,isSigner:!1,isWritable:!1},{pubkey:o.b,isSigner:!1,isWritable:!1},{pubkey:s.d.SYSVAR_RENT_PUBKEY,isSigner:!1,isWritable:!1}];return new s.d.TransactionInstruction({keys:c,programId:d.b,data:e.from([])})},m=function(){var e=Object(a.a)(i.a.mark((function e(t,n,r){var a,c,o,u,l,d,f;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new s.b(r,t,{preflightCommitment:"recent"}),e.next=3,s.a.fetchIdl(b,a);case 3:return c=e.sent,o=new s.a(c,b,a),e.next=7,o.account.candyMachine.fetch(n);case 7:return u=e.sent,l=u.data.itemsAvailable.toNumber(),d=u.itemsRedeemed.toNumber(),f=l-d,e.abrupt("return",{id:n,program:o,state:{itemsAvailable:l,itemsRedeemed:d,itemsRemaining:f,isSoldOut:0===f,isActive:u.data.goLiveDate.toNumber()<(new Date).getTime()/1e3&&(!u.endSettings||(u.endSettings.endSettingType.date?u.endSettings.number.toNumber()>(new Date).getTime()/1e3:d<u.endSettings.number.toNumber())),goLiveDate:u.data.goLiveDate,treasury:u.wallet,tokenMint:u.tokenMint,gatekeeper:u.data.gatekeeper,endSettings:u.data.endSettings,whitelistMintSettings:u.data.whitelistMintSettings,hiddenSettings:u.data.hiddenSettings,price:u.data.price}});case 12:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),h=function(){var t=Object(a.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.d.PublicKey.findProgramAddress([e.from("metadata"),f.toBuffer(),n.toBuffer(),e.from("edition")],f);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(){var t=Object(a.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.d.PublicKey.findProgramAddress([e.from("metadata"),f.toBuffer(),n.toBuffer()],f);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),x=function(){var t=Object(a.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.d.PublicKey.findProgramAddress([e.from("candy_machine"),n.toBuffer()],b);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var e=Object(a.a)(i.a.mark((function e(t,n){var a,c,b,p,m,v,O,y,k,w,S,T,P,N,A,R,E,M;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=s.d.Keypair.generate(),e.next=3,Object(d.c)(a.publicKey,n);case 3:if(c=e.sent[0],!t.state.tokenMint){e.next=10;break}return e.next=7,Object(d.c)(t.state.tokenMint,n);case 7:e.t0=e.sent[0],e.next=11;break;case 10:e.t0=n;case 11:return b=e.t0,p=t.id,m=[],v=[a],O=[],e.t1=s.d.SystemProgram,e.t2=n,e.t3=a.publicKey,e.t4=o.a.span,e.next=22,t.program.provider.connection.getMinimumBalanceForRentExemption(o.a.span);case 22:if(e.t5=e.sent,e.t6=o.b,e.t7={fromPubkey:e.t2,newAccountPubkey:e.t3,space:e.t4,lamports:e.t5,programId:e.t6},e.t8=e.t1.createAccount.call(e.t1,e.t7),e.t9=o.c.createInitMintInstruction(o.b,a.publicKey,0,n,n),e.t10=g(c,n,n,a.publicKey),e.t11=o.c.createMintToInstruction(o.b,a.publicKey,c,n,[],1),y=[e.t8,e.t9,e.t10,e.t11],!t.state.gatekeeper){e.next=45;break}return e.t12=m,e.next=34,Object(d.e)(n,t.state.gatekeeper.gatekeeperNetwork);case 34:if(e.t13=e.sent[0],e.t14={pubkey:e.t13,isWritable:!0,isSigner:!1},e.t12.push.call(e.t12,e.t14),!t.state.gatekeeper.expireOnUse){e.next=45;break}return m.push({pubkey:d.a,isWritable:!1,isSigner:!1}),e.t15=m,e.next=42,Object(d.d)(t.state.gatekeeper.gatekeeperNetwork);case 42:e.t16=e.sent[0],e.t17={pubkey:e.t16,isWritable:!1,isSigner:!1},e.t15.push.call(e.t15,e.t17);case 45:if(!t.state.whitelistMintSettings){e.next=60;break}return k=new s.d.PublicKey(t.state.whitelistMintSettings.mint),e.next=49,Object(d.c)(k,n);case 49:if(w=e.sent[0],m.push({pubkey:w,isWritable:!0,isSigner:!1}),!t.state.whitelistMintSettings.mode.burnEveryTime){e.next=60;break}return S=s.d.Keypair.generate(),m.push({pubkey:k,isWritable:!0,isSigner:!1}),m.push({pubkey:S.publicKey,isWritable:!1,isSigner:!0}),v.push(S),e.next=58,t.program.provider.connection.getAccountInfo(w);case 58:e.sent&&(y.push(o.c.createApproveInstruction(o.b,w,S.publicKey,n,[],1)),O.push(o.c.createRevokeInstruction(o.b,w,n,[])));case 60:return t.state.tokenMint&&(T=s.d.Keypair.generate(),v.push(T),m.push({pubkey:b,isWritable:!0,isSigner:!1}),m.push({pubkey:T.publicKey,isWritable:!1,isSigner:!0}),y.push(o.c.createApproveInstruction(o.b,b,T.publicKey,n,[],t.state.price.toNumber())),O.push(o.c.createRevokeInstruction(o.b,b,n,[]))),e.next=63,j(a.publicKey);case 63:return P=e.sent,e.next=66,h(a.publicKey);case 66:return N=e.sent,e.next=69,x(p);case 69:return A=e.sent,R=Object(r.a)(A,2),E=R[0],M=R[1],e.t18=y,e.next=76,t.program.instruction.mintNft(M,{accounts:{candyMachine:p,candyMachineCreator:E,payer:n,wallet:t.state.treasury,mint:a.publicKey,metadata:P,masterEdition:N,mintAuthority:n,updateAuthority:n,tokenMetadataProgram:f,tokenProgram:o.b,systemProgram:u.SystemProgram.programId,rent:s.d.SYSVAR_RENT_PUBKEY,clock:s.d.SYSVAR_CLOCK_PUBKEY,recentBlockhashes:s.d.SYSVAR_RECENT_BLOCKHASHES_PUBKEY,instructionSysvarAccount:s.d.SYSVAR_INSTRUCTIONS_PUBKEY},remainingAccounts:m.length>0?m:void 0});case 76:return e.t19=e.sent,e.t18.push.call(e.t18,e.t19),e.prev=78,e.next=81,Object(l.a)(t.program.provider.connection,t.program.provider.wallet,[y,O],[v,[]]);case 81:return e.abrupt("return",e.sent.txs.map((function(e){return e.txid})));case 84:e.prev=84,e.t20=e.catch(78),console.log(e.t20);case 87:return e.abrupt("return",[]);case 88:case"end":return e.stop()}}),e,null,[[78,84]])})));return function(t,n){return e.apply(this,arguments)}}(),O=function(e){return new Promise((function(t){return setTimeout(t,e)}))}}).call(this,n(13).Buffer)}},[[296,1,2]]]);
//# sourceMappingURL=main.b57850f9.chunk.js.map