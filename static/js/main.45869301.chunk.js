(this["webpackJsonpself-order-kiosk"]=this["webpackJsonpself-order-kiosk"]||[]).push([[0],{153:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a(11),c=a(203),s=a(204),i=a(205),o=a(156),l=a(16),j=a(24),d=a(7),u=(a(116),"CATEGORY_LIST_REQUEST"),b="CATEGORY_LIST_SUCCESS",p="CATEGORY_LIST_FAIL",O="PRODUCT_LIST_REQUEST",h="PRODUCT_LIST_SUCCESS",m="PRODUCT_LIST_FAIL",x="ORDER_CREATE_REQUEST",f="ORDER_CREATE_SUCCESS",g="ORDER_CREATE_FAIL",y="ORDER_QUEUE_LIST_REQUEST",v="ORDER_QUEUE_LIST_SUCCESS",N="ORDER_QUEUE_LIST_FAIL",C="ORDER_LIST_REQUEST",E="ORDER_LIST_SUCCESS",w="ORDER_LIST_FAIL",S="ORDER_ADD_ITEM",k="ORDER_REMOVE_ITEM",T="ORDER_CLEAR",R="ORDER_SET_TYPE",_="ORDER_SET_PAYMENT_TYPE",I="SCREEN_SET_WIDTH",P=a(2),L=Object(r.createContext)(),B={widthScreen:!1,orderList:{loading:!0},queueList:{loading:!0},categoryList:{loading:!0},productList:{loading:!0},order:{orderItems:[],orderType:"Eat in",paymentType:"Pay here",taxPrice:0,totalPrice:0,itemsCount:0},orderCreate:{loading:!0}};function D(e,t){switch(t.type){case I:return Object(d.a)(Object(d.a)({},e),{},{widthScreen:!0});case R:return Object(d.a)(Object(d.a)({},e),{},{order:Object(d.a)(Object(d.a)({},e.order),{},{orderType:t.payload})});case _:return Object(d.a)(Object(d.a)({},e),{},{order:Object(d.a)(Object(d.a)({},e.order),{},{paymentType:t.payload})});case u:return Object(d.a)(Object(d.a)({},e),{},{categoryList:{loading:!0}});case b:return Object(d.a)(Object(d.a)({},e),{},{categoryList:{loading:!1,categories:t.payload}});case p:return Object(d.a)(Object(d.a)({},e),{},{categoryList:{loading:!1,error:t.payload}});case O:return Object(d.a)(Object(d.a)({},e),{},{productList:{loading:!0}});case h:return Object(d.a)(Object(d.a)({},e),{},{productList:{loading:!1,products:t.payload}});case m:return Object(d.a)(Object(d.a)({},e),{},{productList:{loading:!1,error:t.payload}});case y:return Object(d.a)(Object(d.a)({},e),{},{queueList:{loading:!0}});case v:return Object(d.a)(Object(d.a)({},e),{},{queueList:{loading:!1,queue:t.payload}});case N:return Object(d.a)(Object(d.a)({},e),{},{queueList:{loading:!1,error:t.payload}});case C:return Object(d.a)(Object(d.a)({},e),{},{orderList:{loading:!0}});case E:return Object(d.a)(Object(d.a)({},e),{},{orderList:{loading:!1,orders:t.payload}});case w:return Object(d.a)(Object(d.a)({},e),{},{orderList:{loading:!1,error:t.payload}});case x:return Object(d.a)(Object(d.a)({},e),{},{orderCreate:{loading:!0}});case f:return Object(d.a)(Object(d.a)({},e),{},{orderCreate:{loading:!1,newOrder:t.payload}});case g:return Object(d.a)(Object(d.a)({},e),{},{orderCreate:{loading:!1,error:t.payload}});case S:var a=t.payload,r=e.order.orderItems.find((function(e){return e.name===a.name})),n=r?e.order.orderItems.map((function(e){return e.name===r.name?a:e})):[].concat(Object(j.a)(e.order.orderItems),[a]),c=n.reduce((function(e,t){return e+t.quantity}),0),s=n.reduce((function(e,t){return e+t.quantity*t.price}),0),i=Math.round(.15*s*100)/100,o=Math.round(100*s)/100;return Object(d.a)(Object(d.a)({},e),{},{order:Object(d.a)(Object(d.a)({},e.order),{},{orderItems:n,taxPrice:i,totalPrice:o,itemsCount:c})});case k:var l=e.order.orderItems.filter((function(e){return e.name!==t.payload.name})),P=l.reduce((function(e,t){return e+t.quantity}),0),L=l.reduce((function(e,t){return e+t.quantity*t.price}),0),B=Math.round(.15*L*100)/100,D=Math.round(100*(L+B))/100;return Object(d.a)(Object(d.a)({},e),{},{order:Object(d.a)(Object(d.a)({},e.order),{},{orderItems:l,taxPrice:B,totalPrice:D,itemsCount:P})});case T:return Object(d.a)(Object(d.a)({},e),{},{order:{orderItems:[],taxPrice:0,totalPrice:0,itemsCount:0}});default:return e}}function A(e){var t=Object(r.useReducer)(D,B),a=Object(l.a)(t,2),n={state:a[0],dispatch:a[1]};return Object(P.jsx)(L.Provider,{value:n,children:e.children})}var U=a(99),q=a(15),z=a(184),F=a(207),Q=a(155),W=a(186),M=a(187),Y=a(188),$=a(189),G=a(182),H=Object(G.a)((function(e){return{root:{height:"100vh",display:"flex",flexDirection:"column"},center:{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center"},qrcode:{height:"50vh",weight:"50vh",display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center"},column:{flexDirection:"column"},main:{flex:1,overflow:"auto",flexDirection:"column",display:"flex",color:"#ffffff"},navy:{backgroundColor:"#003080"},green:{backgroundColor:"#00b020"},footer:{},cards:{display:"flex",justifyContent:"center",alignItems:"center"},red:{backgroundColor:"#ff2040",color:"#ffffff"},bordered:{borderWidth:2,borderRadius:5,margin:5,borderStyle:"solid"},row:{display:"flex",padding:10},space:{padding:10},around:{justifyContent:"space-around"},between:{justifyContent:"space-between"},largeButton:{width:250},largeInput:{width:"60px!important",padding:"0!important",fontSize:"35px!important",textAlign:"center!important"},logo:{height:50},largeLogo:{height:100},title:{marginTop:18},card:{margin:10},media:{width:200},ready:{backgroundColor:"#003080",color:"#ffffff",marginTop:0},processing:{backgroundColor:"#404040",color:"#ffffff",marginTop:0},paper:{display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function J(e){var t=H();return Object(P.jsx)("img",{src:"/images/logo.png",alt:"Food Order",className:e.large?t.largeLogo:t.logo})}var V=a(23),K=a(13),X=a.n(K),Z=a(38),ee=a.n(Z),te=function(){var e=Object(V.a)(X.a.mark((function e(t){var a,r;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:u}),e.prev=1,e.next=4,ee.a.get("/api/categories");case 4:return a=e.sent,r=a.data,e.abrupt("return",t({type:b,payload:r}));case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",t({type:p,payload:e.t0.message}));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),ae=function(){var e=Object(V.a)(X.a.mark((function e(t){var a,r,n,c=arguments;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>1&&void 0!==c[1]?c[1]:"",t({type:O}),e.prev=2,e.next=5,ee.a.get("/api/products?category=".concat(a));case 5:return r=e.sent,n=r.data,e.abrupt("return",t({type:h,payload:n}));case 10:return e.prev=10,e.t0=e.catch(2),e.abrupt("return",t({type:m,payload:e.t0.message}));case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),re=function(){var e=Object(V.a)(X.a.mark((function e(t,a){var r,n;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:x}),e.prev=1,e.next=4,ee.a.post("/api/orders",a);case 4:r=e.sent,n=r.data,t({type:f,payload:n}),t({type:T}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),t({type:g,payload:e.t0.message});case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,a){return e.apply(this,arguments)}}(),ne=function(){var e=Object(V.a)(X.a.mark((function e(t,a){return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t({type:R,payload:a}));case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),ce=function(){var e=Object(V.a)(X.a.mark((function e(t,a){return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t({type:_,payload:a}));case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),se=function(){var e=Object(V.a)(X.a.mark((function e(t){return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t({type:T}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ie=function(){var e=Object(V.a)(X.a.mark((function e(t,a){return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t({type:S,payload:a}));case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),oe=function(){var e=Object(V.a)(X.a.mark((function e(t,a){return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t({type:k,payload:a}));case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),le=function(){var e=Object(V.a)(X.a.mark((function e(t){var a,r;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:y}),e.prev=1,e.next=4,ee.a.get("/api/orders/queue");case 4:return a=e.sent,r=a.data,t({type:I}),e.abrupt("return",t({type:v,payload:r}));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",t({type:N,payload:e.t0.message}));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),je=function(){var e=Object(V.a)(X.a.mark((function e(t){var a,r;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:C}),e.prev=1,e.next=4,ee.a.get("/api/orders");case 4:return a=e.sent,r=a.data,t({type:I}),e.abrupt("return",t({type:E,payload:r}));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",t({type:w,payload:e.t0.message}));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();function de(e){var t=Object(r.useContext)(L).dispatch,a=H(),n=function(a){ne(t,a),e.history.push("/order")};return Object(P.jsx)(z.a,{in:!0,children:Object(P.jsx)(F.a,{className:[a.root,a.navy],children:Object(P.jsxs)(F.a,{className:[a.main,a.center],children:[Object(P.jsx)(J,{large:!0}),Object(P.jsx)(Q.a,{className:a.center,gutterBottom:!0,variant:"h3",component:"h3",children:"\u8acb\u554f\u60a8\u7684\u53d6\u9910\u65b9\u5f0f\u662f?"}),Object(P.jsxs)(F.a,{className:a.cards,children:[Object(P.jsx)(W.a,{className:[a.card,a.space],children:Object(P.jsxs)(M.a,{onClick:function(){return n("Eat in")},children:[Object(P.jsx)(Y.a,{component:"img",alt:"Eat in",image:"./images/eatin.png",className:a.media}),Object(P.jsx)($.a,{children:Object(P.jsx)(Q.a,{gutterBottom:!0,variant:"h4",color:"textPrimary",component:"p",children:"\u5802\u98df"})})]})}),Object(P.jsx)(W.a,{className:[a.card,a.space],children:Object(P.jsxs)(M.a,{onClick:function(){return n("Take out")},children:[Object(P.jsx)(Y.a,{component:"img",alt:"Take Out",image:"./images/takeout.png",className:a.media}),Object(P.jsx)($.a,{children:Object(P.jsx)(Q.a,{gutterBottom:!0,variant:"h4",color:"textPrimary",component:"p",children:"\u5916\u5e36\u81ea\u53d6"})})]})})]})]})})})}var ue=a(96),be=a.n(ue);function pe(e){var t=H();return Object(P.jsx)(W.a,{children:Object(P.jsx)(M.a,{onClick:function(){return e.history.push("/choose")},children:Object(P.jsxs)(F.a,{className:[t.root,t.red],children:[Object(P.jsxs)(F.a,{className:[t.main,t.center],children:[Object(P.jsx)(Q.a,{variant:"h6",component:"h6"}),Object(P.jsxs)(Q.a,{variant:"h1",component:"h1",className:t.bold,children:["\u88d5\u8c6a\u5c0f\u9928",Object(P.jsx)("br",{}),"\u9ede\u9910\u7cfb\u7d71"]}),Object(P.jsx)(be.a,{fontSize:"large"})]}),Object(P.jsxs)(F.a,{className:[t.center,t.green],children:[Object(P.jsx)(J,{large:!0}),Object(P.jsx)(Q.a,{variant:"h5",component:"h5",className:t.footer,children:"\u9ede\u64ca\u4ee5\u958b\u59cb"})]})]})})})}var Oe=a(210),he=a(190),me=a(191),xe=a(206),fe=a(193),ge=a(192),ye=a(194),ve=a(195),Ne=a(211),Ce=a(196),Ee=a(62),we=a.n(Ee),Se=a(61),ke=a.n(Se),Te=a(208);function Re(e){var t=H(),a=Object(r.useContext)(L),n=a.state,c=a.dispatch,s=n.categoryList,i=s.categories,o=s.loading,j=s.error,u=n.productList,b=u.products,p=u.loading,O=u.error,h=n.order,m=h.orderItems,x=h.itemsCount,f=h.totalPrice,g=(h.taxPrice,h.orderType),y=Object(r.useState)(""),v=Object(l.a)(y,2),N=v[0],C=v[1],E=Object(r.useState)(1),w=Object(l.a)(E,2),S=w[0],k=w[1],T=Object(r.useState)(!1),R=Object(l.a)(T,2),_=R[0],I=R[1],B=Object(r.useState)({}),D=Object(l.a)(B,2),A=D[0],U=D[1];Object(r.useEffect)((function(){i?ae(c,N):te(c)}),[i,N]);var q=function(e){C(e),ae(c,N)};return Object(P.jsxs)(F.a,{className:t.root,children:[Object(P.jsxs)(F.a,{className:t.main,children:[Object(P.jsxs)(Oe.a,{onClose:function(){I(!1)},"aria-labelledby":"max-width-dialog-title",open:_,fullWidth:!0,maxWidth:"sm",children:[Object(P.jsxs)(he.a,{className:t.center,children:["\u52a0\u5165 ",A.name," \u81f3\u8cfc\u7269\u8eca"]}),Object(P.jsxs)(F.a,{className:[t.row,t.center],children:[Object(P.jsx)(me.a,{variant:"contained",color:"primary",disabled:1===S,onClick:function(e){return S>1&&k(S-1)},children:Object(P.jsx)(ke.a,{})}),Object(P.jsx)(xe.a,{inputProps:{className:t.largeInput},InputProps:{bar:!0,inputProps:{className:t.largeInput}},className:t.largeNumber,type:"number",variant:"filled",min:1,value:S}),Object(P.jsx)(me.a,{variant:"contained",color:"primary",onClick:function(e){return k(S+1)},children:Object(P.jsx)(we.a,{})})]}),Object(P.jsxs)(F.a,{className:[t.row,t.around],children:[Object(P.jsx)(me.a,{onClick:function(){oe(c,A),I(!1)},variant:"contained",color:"primary",size:"large",className:t.largeButton,children:m.find((function(e){return e.name===A.name}))?"\u79fb\u9664\u8a72\u7269\u54c1":"\u53d6\u6d88"}),Object(P.jsx)(me.a,{onClick:function(){ie(c,Object(d.a)(Object(d.a)({},A),{},{quantity:S})),I(!1)},variant:"contained",color:"primary",size:"large",className:t.largeButton,children:"\u52a0\u5165\u8cfc\u7269\u8eca"})]})]}),Object(P.jsxs)(fe.a,{container:!0,children:[Object(P.jsx)(fe.a,{item:!0,md:2,children:Object(P.jsx)(ge.a,{children:o?Object(P.jsx)(ye.a,{}):j?Object(P.jsx)(Te.a,{severity:"error",children:j}):Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(ve.a,{button:!0,onClick:function(){return q("")},children:Object(P.jsx)(J,{})}),i.map((function(e){return Object(P.jsxs)(ve.a,{button:!0,onClick:function(){return q(e.name)},children:[e.name,Object(P.jsx)(Ne.a,{alt:e.name,src:e.image})]},e.name)}))]})})}),Object(P.jsxs)(fe.a,{item:!0,md:10,children:[Object(P.jsx)(Q.a,{gutterBottom:!0,className:t.title,variant:"h2",component:"h2",children:N||"\u88d5\u8c6a\u5c0f\u9928"}),Object(P.jsx)(fe.a,{container:!0,spacing:1,children:p?Object(P.jsx)(ye.a,{}):O?Object(P.jsx)(Te.a,{severity:"error",children:O}):b.map((function(e){return Object(P.jsx)(Ce.a,{direction:"up",in:!0,children:Object(P.jsx)(fe.a,{item:!0,md:6,children:Object(P.jsx)(W.a,{className:t.card,onClick:function(){return U(e),void I(!0)},children:Object(P.jsxs)(M.a,{children:[Object(P.jsx)(Y.a,{component:"img",alt:e.name,image:e.image,className:t.media}),Object(P.jsxs)($.a,{children:[Object(P.jsx)(Q.a,{gutterBottom:!0,variant:"body2",color:"textPrimary",component:"p",children:e.name}),Object(P.jsxs)(F.a,{className:t.cardFooter,children:[Object(P.jsx)(Q.a,{variant:"body2",color:"textSecondary",component:"p"}),Object(P.jsxs)(Q.a,{variant:"body2",color:"textPrimary",component:"p",children:["$",e.price]})]})]})]})})})},e.name)}))})]})]})]}),Object(P.jsx)(F.a,{children:Object(P.jsxs)(F.a,{children:[Object(P.jsxs)(F.a,{className:[t.bordered,t.space],variant:"h1",component:"h1",children:["\u6211\u7684\u8a02\u55ae - ","Eat in"===g?"\u5802\u98df":"\u5916\u5e36"," | \u7e3d\u5171: $",f," | \u8cfc\u7269\u8eca: ",x,"\u4ef6"]}),Object(P.jsxs)(F.a,{className:[t.row,t.around],children:[Object(P.jsx)(me.a,{onClick:function(){se(c),e.history.push("/")},variant:"contained",color:"primary",className:t.largeButton,children:"\u53d6\u6d88\u8a02\u55ae"}),Object(P.jsx)(me.a,{onClick:function(){e.history.push("/review")},variant:"contained",color:"primary",disabled:0===m.length,className:t.largeButton,children:"\u8cfc\u7269\u55ae"})]})]})})]})}var _e=a(45);function Ie(e){var t=H(),a=Object(r.useContext)(L),n=a.state,c=a.dispatch,s=n.queueList,i=s.queue,l=s.loading,j=s.error;return Object(r.useEffect)((function(){le(c)}),[]),Object(P.jsxs)(F.a,{className:[t.root],children:[Object(P.jsx)(_e.a,{children:Object(P.jsx)("title",{children:"Queue"})}),Object(P.jsx)(F.a,{className:[t.main],children:l?Object(P.jsx)(ye.a,{}):j?Object(P.jsx)(Te.a,{severity:"error",children:j}):Object(P.jsxs)(fe.a,{container:!0,spacing:2,children:[Object(P.jsx)(fe.a,{item:!0,md:6,children:Object(P.jsxs)(o.a,{children:[Object(P.jsx)("h1",{className:t.processing,children:"In Progress"}),Object(P.jsx)(ge.a,{children:i.inProgressOrders.map((function(e){return Object(P.jsx)(ve.a,{children:Object(P.jsx)("h1",{children:e.number})},e.number)}))})]})}),Object(P.jsx)(fe.a,{item:!0,md:6,children:Object(P.jsxs)(o.a,{children:[Object(P.jsx)("h1",{className:t.ready,children:"Now Serving "}),Object(P.jsx)(ge.a,{children:i.servingOrders.map((function(e){return Object(P.jsx)(ve.a,{children:Object(P.jsx)("h1",{children:e.number})},e.number)}))})]})})]})})]})}var Pe=a(101);function Le(e){var t=H(),a=Object(r.useContext)(L),n=a.state,c=a.dispatch,s=n.order,i=s.orderItems,o=s.itemsCount,j=s.totalPrice,u=(s.taxPrice,s.orderType),b=Object(r.useState)(1),p=Object(l.a)(b,2),O=p[0],h=p[1],m=Object(r.useState)(!1),x=Object(l.a)(m,2),f=x[0],g=x[1],y=Object(r.useState)({}),v=Object(l.a)(y,2),N=v[0],C=v[1];return Object(r.useEffect)((function(){}),[]),Object(P.jsxs)(F.a,{className:[t.root],children:[Object(P.jsxs)(F.a,{className:[t.main,t.navy,t.center],children:[Object(P.jsxs)(Oe.a,{onClose:function(){g(!1)},"aria-labelledby":"max-width-dialog-title",open:f,fullWidth:!0,maxWidth:"sm",children:[Object(P.jsxs)(he.a,{className:t.center,children:["\u7de8\u8f2f ",N.name]}),Object(P.jsxs)(F.a,{className:[t.row,t.center],children:[Object(P.jsx)(me.a,{variant:"contained",color:"primary",disabled:1===O,onClick:function(e){return O>1&&h(O-1)},children:Object(P.jsx)(ke.a,{})}),Object(P.jsx)(xe.a,{inputProps:{className:t.largeInput},className:t.largeNumber,type:"number",min:1,variant:"filled",value:O}),Object(P.jsx)(me.a,{variant:"contained",color:"primary",onClick:function(e){return h(O+1)},children:Object(P.jsx)(we.a,{})})]}),Object(P.jsxs)(F.a,{className:[t.row,t.around],children:[Object(P.jsx)(me.a,{onClick:function(){oe(c,N),g(!1)},variant:"contained",color:"primary",size:"large",className:t.largeButton,children:i.find((function(e){return e.name===N.name}))?"\u79fb\u9664":"\u53d6\u6d88"}),Object(P.jsx)(me.a,{onClick:function(){ie(c,Object(d.a)(Object(d.a)({},N),{},{quantity:O})),g(!1)},variant:"contained",color:"primary",size:"large",className:t.largeButton,children:"\u78ba\u5b9a"})]})]}),Object(P.jsxs)(F.a,{className:[t.center,t.column],children:[Object(P.jsx)(J,{large:!0}),Object(P.jsxs)(Q.a,{gutterBottom:!0,className:t.title,variant:"h3",component:"h3",children:["\u60a8\u7684","Eat in"===u?"\u5802\u98df":"\u5916\u5e36","\u8a02\u55ae"]})]}),Object(P.jsx)(fe.a,{container:!0,children:i.map((function(e){return Object(P.jsx)(fe.a,{item:!0,md:12,children:Object(P.jsx)(W.a,{className:t.card,onClick:function(){return C(e),void g(!0)},children:Object(P.jsx)(M.a,{children:Object(P.jsxs)($.a,{children:[Object(P.jsxs)(F.a,{className:[t.row,t.between],children:[Object(P.jsx)(Q.a,{gutterBottom:!0,variant:"body2",color:"textPrimary",component:"p",children:e.name}),Object(P.jsx)(me.a,{variant:"contained",children:"\u7de8\u8f2f"})]}),Object(P.jsxs)(F.a,{className:[t.row,t.between],children:[Object(P.jsx)(Q.a,{variant:"body2",color:"textSecondary",component:"p",children:"\u7e3d\u5171:"}),Object(P.jsxs)(Q.a,{variant:"body2",color:"textPrimary",component:"p",children:["x ",e.quantity]})]})]})})})},e.name)}))})]}),Object(P.jsx)(F.a,{children:Object(P.jsxs)(F.a,{children:[Object(P.jsxs)(F.a,{className:[t.bordered,t.space],variant:"h1",component:"h1",children:["\u6211\u7684\u8a02\u55ae - ","Eat in"===u?"\u5802\u98df":"\u5916\u5e36"," | \u7e3d\u5171: $",j," | \u8cfc\u7269\u8eca: ",o,"\u4ef6"]}),Object(P.jsxs)(F.a,{className:[t.row,t.around],children:[Object(P.jsx)(me.a,{onClick:function(){e.history.push("/order")},variant:"contained",color:"primary",className:t.largeButton,children:"\u9000\u56de\u83dc\u55ae"}),Object(P.jsx)(me.a,{onClick:function(){e.history.push("/complete")},variant:"contained",color:"secondary",disabled:0===i.length,className:t.largeButton,children:"\u6e96\u5099\u4e0b\u55ae"})]})]})})]})}function Be(e){var t=H();return Object(P.jsxs)(F.a,{className:[t.root,t.navy],children:[Object(P.jsx)(F.a,{className:[t.main,t.center],children:Object(P.jsxs)(F.a,{children:[Object(P.jsx)(J,{large:!0}),Object(P.jsx)(Q.a,{gutterBottom:!0,className:t.title,variant:"h3",component:"h3",children:"Please follow the instruction on the PIN pad"}),Object(P.jsx)(ye.a,{})]})}),Object(P.jsx)(F.a,{className:[t.center,t.space],children:Object(P.jsx)(me.a,{onClick:function(){return e.history.push("/complete")},variant:"contained",color:"primary",className:t.largeButton,children:"Complete Order"})})]})}var De=a(197),Ae=a(198),Ue=a(199),qe=a(200),ze=a(201),Fe=a(202);function Qe(e){var t=H(),a=Object(r.useContext)(L),n=a.state,c=a.dispatch,s=n.orderList,i=s.orders,l=s.loading,j=s.error,d=function(){var e=Object(V.a)(X.a.mark((function e(t,a){return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ee.a.put("/api/orders/"+t._id,{action:a});case 3:je(c),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),alert(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,a){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){je(c)}),[]),Object(P.jsxs)(F.a,{className:[t.root],children:[Object(P.jsx)(_e.a,{children:Object(P.jsx)("title",{children:"Admin Orders"})}),Object(P.jsx)(F.a,{className:[t.main],children:l?Object(P.jsx)(ye.a,{}):j?Object(P.jsx)(Te.a,{severity:"error",children:j}):Object(P.jsx)(De.a,{component:o.a,children:Object(P.jsxs)(Ae.a,{"aria-label":"Orders",children:[Object(P.jsx)(Ue.a,{children:Object(P.jsxs)(qe.a,{children:[Object(P.jsx)(ze.a,{children:"\u7de8\u865f"}),Object(P.jsx)(ze.a,{align:"right",children:"\u50f9\u9322\xa0($)"}),Object(P.jsx)(ze.a,{align:"right",children:"\u6578\u91cf"}),Object(P.jsx)(ze.a,{align:"right",children:"\u7269\u54c1"}),Object(P.jsx)(ze.a,{align:"right",children:"\u53d6\u9910\u65b9\u5f0f"}),Object(P.jsx)(ze.a,{align:"right",children:"\u4ed8\u6b3e\u65b9\u5f0f"}),Object(P.jsx)(ze.a,{align:"right",children:"\u72c0\u614b"}),Object(P.jsx)(ze.a,{align:"right",children:"\u52d5\u4f5c"})]})}),Object(P.jsx)(Fe.a,{children:i.map((function(e){return Object(P.jsxs)(qe.a,{children:[Object(P.jsx)(ze.a,{component:"th",scope:"row",children:e.number}),Object(P.jsx)(ze.a,{align:"right",children:e.totalPrice}),Object(P.jsx)(ze.a,{align:"right",children:e.orderItems.length}),Object(P.jsx)(ze.a,{align:"right",children:e.orderItems.map((function(e){return Object(P.jsxs)(F.a,{children:[e.name," x ",e.quantity]})}))}),Object(P.jsx)(ze.a,{align:"right",children:"Eat in"==e.orderType?"\u5802\u98df":"\u5916\u5e36"}),Object(P.jsx)(ze.a,{align:"right",children:(e.paymentType,"\u73fe\u5834\u4ed8\u6b3e")}),Object(P.jsx)(ze.a,{align:"right",children:e.inProgress?"\u9032\u884c\u4e2d":e.isReady?"\u53ef\u9001\u9910":e.isDelivered?"\u5df2\u9001\u9910":"\u672a\u77e5"}),Object(P.jsxs)(ze.a,{align:"right",children:[Object(P.jsx)(me.a,{variant:"contained",onClick:function(){return d(e,"ready")},color:"secondary",children:"\u6e96\u5099\u597d\u4e86"}),Object(P.jsx)("p",{}),Object(P.jsx)(me.a,{color:"primary",variant:"contained",onClick:function(){return d(e,"cancel")},children:"\u53d6\u6d88\u8a02\u55ae"}),Object(P.jsx)("p",{}),Object(P.jsx)(me.a,{variant:"contained",onClick:function(){return d(e,"deliver")},children:"\u5b8c\u6210"})]})]},e.name)}))})]})})})]})}function We(e){var t=Object(r.useContext)(L).dispatch,a=H(),n=function(a){ce(t,a),"Pay here"===a?e.history.push("/payment"):e.history.push("/complete")};return Object(P.jsx)(F.a,{className:[a.root,a.navy],children:Object(P.jsxs)(F.a,{className:[a.main,a.center],children:[Object(P.jsx)(J,{large:!0}),Object(P.jsx)(Q.a,{className:a.center,gutterBottom:!0,variant:"h3",component:"h3",children:"Select payment type"}),Object(P.jsxs)(F.a,{className:a.cards,children:[Object(P.jsx)(W.a,{className:[a.card,a.space],children:Object(P.jsxs)(M.a,{onClick:function(){return n("Pay here")},children:[Object(P.jsx)(Y.a,{component:"img",alt:"Pay here",image:"/images/payhere.png",className:a.media}),Object(P.jsx)($.a,{children:Object(P.jsx)(Q.a,{gutterBottom:!0,variant:"h6",color:"textPrimary",component:"p",children:"PAY HERE"})})]})}),Object(P.jsx)(W.a,{className:[a.card,a.space],children:Object(P.jsxs)(M.a,{onClick:function(){return n("At counter")},children:[Object(P.jsx)(Y.a,{component:"img",alt:"At counter",image:"/images/atcounter.png",className:a.media}),Object(P.jsx)($.a,{children:Object(P.jsx)(Q.a,{gutterBottom:!0,variant:"h6",color:"textPrimary",component:"p",children:"AT COUNTER"})})]})})]})]})})}function Me(e){var t=a(144),n=H(),c=Object(r.useContext)(L),s=c.state,i=c.dispatch,o=s.order,l=s.orderCreate,j=l.loading,d=l.error,u=l.newOrder;return Object(r.useEffect)((function(){o.orderItems.length>0&&re(i,o)}),[o]),Object(P.jsxs)(F.a,{className:[n.root,n.navy],children:[Object(P.jsx)(F.a,{className:[n.main,n.center],children:Object(P.jsxs)(F.a,{children:[Object(P.jsx)(J,{large:!0}),j?Object(P.jsx)(ye.a,{}):d?Object(P.jsx)(Te.a,{severity:"error",children:d}):Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(Q.a,{gutterBottom:!0,className:n.title,variant:"h3",component:"h3",children:"\u8acb\u81f3\u6536\u9280\u53f0\u6383\u7784"}),Object(P.jsx)(Q.a,{gutterBottom:!0,className:n.title,variant:"h1",component:"h1",children:"Thank you!"}),Object(P.jsx)(Q.a,{gutterBottom:!0,className:n.title,variant:"h3",component:"h3"}),Object(P.jsx)(t,{value:u.number.toString(),size:400})]})]})}),Object(P.jsx)(F.a,{className:[n.center,n.space],children:Object(P.jsx)(me.a,{onClick:function(){return e.history.push("/")},variant:"contained",color:"primary",className:n.largeButton,children:"\u91cd\u65b0\u4e0b\u55ae"})})]})}var Ye=Object(Pe.a)({typography:{h1:{fontWeight:"bold"},h2:{fontSize:"2rem",color:"black"},h3:{fontSize:"1.8rem",fontWeight:"bold",color:"white"}},palette:{primary:{main:"#ff1744"},secondary:{main:"#118e16",contrastText:"#ffffff"}}});var $e=function(){var e=Object(r.useContext)(L).state;return Object(P.jsxs)(U.a,{basename:"/OrderingSystem",children:[Object(P.jsx)(_e.a,{children:Object(P.jsx)("title",{children:"Order"})}),Object(P.jsxs)(c.a,{theme:Ye,children:[Object(P.jsx)(s.a,{}),Object(P.jsx)(i.a,{maxWidth:e.widthScreen?"lg":"sm",children:Object(P.jsxs)(o.a,{children:[Object(P.jsx)(q.a,{path:"/",component:pe,exact:!0}),Object(P.jsx)(q.a,{path:"/admin",component:Qe,exact:!0}),Object(P.jsx)(q.a,{path:"/queue",component:Ie,exact:!0}),Object(P.jsx)(q.a,{path:"/choose",component:de,exact:!0}),Object(P.jsx)(q.a,{path:"/order",component:Re,exact:!0}),Object(P.jsx)(q.a,{path:"/review",component:Le,exact:!0}),Object(P.jsx)(q.a,{path:"/select-payment",component:We,exact:!0}),Object(P.jsx)(q.a,{path:"/payment",component:Be,exact:!0}),Object(P.jsx)(q.a,{path:"/complete",component:Me,exact:!0})]})})]})]})},Ge=document.getElementById("root");Object(n.render)(Object(P.jsx)(A,{children:Object(P.jsx)($e,{})}),Ge)}},[[153,1,2]]]);
//# sourceMappingURL=main.45869301.chunk.js.map