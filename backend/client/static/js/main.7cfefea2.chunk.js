(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{174:function(e,t,c){},242:function(e,t,c){},267:function(e,t,c){},269:function(e,t,c){},421:function(e,t,c){},422:function(e,t,c){},424:function(e,t,c){},470:function(e,t,c){"use strict";c.r(t);var a=c(3),n=c(1),r=c.n(n),s=c(37),i=c.n(s),l=(c(174),c(12)),j=(c(267),c(268),c(84)),o=c(17),d=c(15),u=c(38),b=c(475),m=c(476),O=c(257),x=c(483),h=(c(269),c(27));c(254);var f=c(33),p=c.n(f),v=c(58),g=c(479),N=c(474),y=c(29);c(421);function C(e){var t=Object(n.useState)(Number(e.value)),c=Object(l.a)(t,2),r=c[0],s=c[1],i=Object(n.useState)(Number(e.maxValue)),j=Object(l.a)(i,2),o=j[0];j[1];Object(n.useEffect)((function(){r>=o&&s(o)}));return Object(a.jsx)("div",{className:"",children:Object(a.jsxs)("div",{className:"d-flex align-items-center justify-content-start",children:[Object(a.jsx)("div",{className:"mx-2 ",children:Object(a.jsx)(N.a,{className:"rounded-circle ",style:{width:40,height:40},onClick:function(){var t=r-1;s(t),e.onChange(t)},children:"-"})}),Object(a.jsx)("div",{className:"input ",children:Object(a.jsx)("input",{type:"number",className:"input-height text-center",min:0,value:r,onChange:function(e){}})}),Object(a.jsx)("div",{className:"mx-2",children:Object(a.jsx)(N.a,{className:"rounded-circle",style:{width:40,height:40},onClick:function(){var t=r+1;s(t),e.onChange(t)},children:"+"})})]})})}var S=c(71),k="AUTH_LOGIN",I="AUTH_LOGOUT",L="AUTH_SHOW_LOGIN_DIALOG";c(422);function w(e){var t=e.product,c=(Object(o.e)(),Object(y.b)()),r=Object(n.useState)(1),s=Object(l.a)(r,2),i=s[0],j=s[1],d=Object(h.useFirestore)(),u=Object(y.c)((function(e){return e.auth})),b=function(){var a=Object(v.a)(p.a.mark((function a(){return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(u.isLogin){a.next=3;break}return c({type:L,payload:!0}),a.abrupt("return");case 3:return a.next=5,d.collection("carts").doc("test_cart").set({items:S.a.firestore.FieldValue.arrayUnion({product:t,qty:i})},{merge:!0});case 5:e.hide();case 6:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return Object(a.jsxs)(g.a,{show:e.show,onHide:e.handleClose,animation:!0,children:[Object(a.jsx)(g.a.Header,{closeButton:!0,onClick:e.hide}),Object(a.jsx)(g.a.Body,{children:Object(a.jsxs)(x.a,{className:" flex text-center justify-content-center",children:[Object(a.jsx)(x.a.Title,{className:"mt-5",children:t.name}),Object(a.jsx)(x.a.Img,{variant:"top",className:"modal-image",src:t.image}),Object(a.jsxs)(x.a.Subtitle,{className:"text-left my-3 mx-3",children:["catagory : ",t.category]}),Object(a.jsxs)(x.a.Subtitle,{className:"text-left my-3 mx-3",children:["description : ",t.description]}),Object(a.jsxs)(x.a.Subtitle,{className:"text-left my-3 mx-3",children:["price : ",t.price,"$ "]}),Object(a.jsx)(x.a.Body,{children:Object(a.jsx)(x.a.Text,{className:"text-center",children:Object(a.jsx)(C,{value:i,onChange:j,maxValue:t.countInStock})})})]})}),Object(a.jsxs)(g.a.Footer,{children:[Object(a.jsx)(N.a,{variant:"secondary",onClick:e.hide,children:"Close"}),Object(a.jsx)(N.a,{variant:"primary",onClick:function(){return b()},children:"Add to cart"})]})]})}var T=c(39);var E=function(){var e=Object(h.useFirestore)(),t=Object(n.useState)([]),c=Object(l.a)(t,2),r=c[0],s=c[1],i=Object(n.useState)(!1),j=Object(l.a)(i,2),o=j[0],f=j[1],p=Object(n.useState)({}),v=Object(l.a)(p,2),g=v[0],N=v[1],y=Object(n.useState)([]),C=Object(l.a)(y,2),S=C[0],k=C[1],I=Object(n.useState)(""),L=Object(l.a)(I,2),E=L[0],F=L[1],A=Object(n.useState)(!1),B=Object(l.a)(A,2),D=B[0],P=B[1],R=Object(n.useState)([]),_=Object(l.a)(R,2),q=_[0],U=_[1],G=300;Object(n.useEffect)((function(){e.collection("products").get().then((function(e){var t=e.docs.map((function(e){return e.data()}));s(t),U(t),setTimeout((function(){P(!0)}),G)}))}),[]),Object(n.useEffect)((function(){e.collection("views").doc("product-categories").get().then((function(e){k(e.data().categories)}))}),[]);var H={entering:{opacity:1},entered:{opacity:1},exiting:{opacity:0},exited:{opacity:0}};return Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:"banner",children:Object(a.jsxs)("div",{className:"banner-title",children:[Object(a.jsx)("p",{children:" discover quick & easy"}),Object(a.jsx)("p",{children:"resipe"})]})}),Object(a.jsxs)(b.a,{className:"mt-3 ",children:[Object(a.jsx)(m.a,{className:"justify-content-md-center",children:S.map((function(e){var t;return Object(a.jsx)(O.a,(t={xs:12,sm:12,md:2,lg:6},Object(u.a)(t,"lg",2),Object(u.a)(t,"className","catagory-items mx-lg-2 my-1 d-flex justify-content-center align-items-center"),Object(u.a)(t,"onClick",(function(){return function(e){if(P(!1),E===e)return F(""),s(q),void setTimeout((function(){P(!0)}),G);F(e);var t=q.filter((function(t){return t.category==e}));s(t),setTimeout((function(){P(!0)}),G)}(e)})),Object(u.a)(t,"style",{backgroundColor:E==e?"#69dc9e":"#FFF",filter:"drop-shadow(3px 5px 0.3rem #dbd9d7)",height:"3rem"}),Object(u.a)(t,"children",e),t),e)}))}),Object(a.jsx)(m.a,{className:"justify-content-center my-5",children:r.map((function(e){return Object(a.jsx)(T.e,{in:D,timeout:G,children:function(t){var c;return Object(a.jsx)(O.a,(c={md:4,lg:4,xl:3,sm:6,xs:12,className:"mx-2",style:Object(d.a)({},H[t])},Object(u.a)(c,"className","fade fade-".concat(t," mx-3")),Object(u.a)(c,"children",Object(a.jsx)("div",{className:"d-flex justify-content-center my-2  ",children:Object(a.jsx)(x.a,{className:" hover-zoom card-margin",onClick:function(){return function(e){N(e),f(!0)}(e)},children:Object(a.jsxs)(x.a.Body,{className:"text-center",children:[Object(a.jsx)(x.a.Title,{children:e.name}),Object(a.jsx)(x.a.Img,{className:"card-image-size ",variant:"top",src:e.image}),Object(a.jsxs)(x.a.Subtitle,{className:"my-3",children:[e.brand,e.price,"$"]}),Object(a.jsx)(x.a.Subtitle,{className:"mb-2 text-muted"}),Object(a.jsx)(x.a.Text,{children:e.description})]})})})),c),e.id)}})}))}),Object(a.jsx)(w,{show:o,hide:function(){return f(!1)},product:g})]})]})},F=(c(424),c(480));function A(e){var t=Object(y.c)((function(e){return e.auth.user})),c=Object(h.useFirebase)(),r=Object(n.useState)((null===t||void 0===t?void 0:t.displayName)||""),s=Object(l.a)(r,2),i=s[0],j=s[1],o=Object(n.useState)((null===t||void 0===t?void 0:t.email)||""),d=Object(l.a)(o,2),u=d[0],x=d[1],f=Object(n.useState)(""),g=Object(l.a)(f,2),C=g[0],S=g[1],k=Object(n.useState)(""),I=Object(l.a)(k,2),L=I[0],w=I[1],T=Object(n.useState)(""),E=Object(l.a)(T,2),A=E[0],B=E[1],D=Object(n.useState)(""),P=Object(l.a)(D,2),R=P[0],_=P[1],q=Object(n.useState)(""),U=Object(l.a)(q,2),G=U[0],H=U[1],z=function(){var e=Object(v.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,Promise.all([c.auth().currentUser.updateEmail(u),c.auth().currentUser.updateProfile({displayName:i})]);case 3:alert("Profile Updated!");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){var t=c.auth().onAuthStateChanged((function(t){if(!t)return e.history.push("/");var c=t.displayName,a=t.email;j(c),x(a)}));return function(){return t()}}),[]),Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:"profile-title",children:Object(a.jsx)("label",{children:"Profile"})}),Object(a.jsx)("div",{className:"wrapper",children:Object(a.jsx)(F.a,{onSubmit:z,children:Object(a.jsxs)("div",{children:[Object(a.jsx)(b.a,{className:"img-container",children:Object(a.jsx)(m.a,{children:Object(a.jsx)(O.a,{className:"text-center",xs:12,md:12,children:Object(a.jsx)("img",{alt:"",src:"/images/Avatar.jpg",className:"Avatar-img"})})})}),Object(a.jsxs)(F.a.Group,{controlId:"formBasicName",children:[Object(a.jsx)(F.a.Label,{children:"Name"}),Object(a.jsx)(F.a.Control,{type:"name",placeholder:"Name",value:i,onChange:function(e){return j(e.target.value)}})]}),Object(a.jsxs)(F.a.Group,{controlId:"formBasicEmail",children:[Object(a.jsx)(F.a.Label,{children:"Email address"}),Object(a.jsx)(F.a.Control,{type:"email",placeholder:"Enter email",value:u,onChange:function(e){return x(e.target.value)}})]}),Object(a.jsxs)(F.a.Group,{controlId:"formBasicAddress",children:[Object(a.jsx)(F.a.Label,{children:"Address"}),Object(a.jsx)(F.a.Control,{type:"address",placeholder:"Enter address",value:C,onChange:function(e){return S(e.target.value)}})]}),Object(a.jsxs)(F.a.Row,{children:[Object(a.jsxs)(F.a.Group,{as:O.a,controlId:"formBasicSub-district",children:[Object(a.jsx)(F.a.Label,{children:"Sub-district"}),Object(a.jsx)(F.a.Control,{type:"sub-district",placeholder:"Enter sub-district",value:L,onChange:function(e){return w(e.target.value)}})]}),Object(a.jsxs)(F.a.Group,{as:O.a,controlId:"formBasicDistrict",children:[Object(a.jsx)(F.a.Label,{children:"District"}),Object(a.jsx)(F.a.Control,{type:"district",placeholder:"Enter district",value:A,onChange:function(e){return B(e.target.value)}})]})]}),Object(a.jsxs)(F.a.Row,{children:[Object(a.jsxs)(F.a.Group,{as:O.a,controlId:"formBasicProvince",children:[Object(a.jsx)(F.a.Label,{children:"Province"}),Object(a.jsx)(F.a.Control,{type:"province",placeholder:"Enter province",value:R,onChange:function(e){return _(e.target.value)}})]}),Object(a.jsxs)(F.a.Group,{as:O.a,controlId:"formBasicZipCode",children:[Object(a.jsx)(F.a.Label,{children:"Zip Code"}),Object(a.jsx)(F.a.Control,{type:"zipcode",placeholder:"Enter zipcode",value:G,onChange:function(e){return H(e.target.value)}})]})]}),Object(a.jsx)(N.a,{className:"btn",variant:"primary",type:"submit",children:"Update Profile"})]})})})]})}c(242);function B(e){return Object(a.jsxs)(x.a,{children:[Object(a.jsxs)(x.a.Body,{children:[Object(a.jsx)(x.a.Title,{className:"text-left title",children:"shopping cart"}),e.items.map((function(t){return Object(a.jsxs)(m.a,{children:[Object(a.jsx)(O.a,{md:4,lg:4,xl:4,sm:4,xs:4,children:Object(a.jsx)("img",{src:t.product.image,alt:t.product.name,className:"product-image"})}),Object(a.jsxs)(O.a,{md:8,lg:8,xl:8,sm:8,xs:8,className:"d-flex flex-row-reverse align-items-center justify-content-around",children:[Object(a.jsxs)(N.a,{variant:"danger",onClick:function(){return e.onRemoveItemFromCart(t.product)},children:["Delete"," "]}),Object(a.jsx)(C,{value:t.qty,onChange:function(c){return e.onUpdateCart({product:t.product,qty:Number(c)})}}),Object(a.jsx)("div",{}),Object(a.jsxs)("div",{className:"h5 text-left",children:[" ",t.product.name]})]})]},t.product.id)}))]}),Object(a.jsx)(x.a.Footer,{className:"text-right",children:Object(a.jsxs)("h2",{children:["Subtotal (",e.items.reduce((function(e,t){return e+t.qty}),0)," ","items) : \u20ac"," ",e.items.reduce((function(e,t){return e+t.product.price*t.qty}),0)]})})]})}var D=c(258),P=c.n(D);function R(e){var t=Object(n.useState)(e.currentUser||{name:"",email:"",address:"",subdistrict:"",district:"",province:"",postCode:""}),c=Object(l.a)(t,2),r=c[0],s=(c[1],Object(n.useState)(!1)),i=Object(l.a)(s,2),j=i[0],o=i[1],d=function(){return o(!1)};return Object(a.jsxs)("div",{children:[Object(a.jsx)(x.a,{children:Object(a.jsxs)(x.a.Body,{children:[Object(a.jsx)(x.a.Title,{className:"text-left title",children:"information"}),Object(a.jsx)(x.a.Subtitle,{className:"mb-2 text-muted",children:Object(a.jsxs)(m.a,{className:"mb-5",children:[Object(a.jsx)(O.a,{md:12,lg:12,xl:12,sm:12,xs:12,children:Object(a.jsxs)("div",{className:"text-left mt-4",children:[Object(a.jsx)("div",{className:"title",children:Object(a.jsx)("p",{children:"name"})}),Object(a.jsx)("div",{className:"text-center",children:Object(a.jsx)("input",{name:"name",className:"full-length-input",required:!0,value:r.displayName})})]})}),Object(a.jsx)(O.a,{md:12,lg:12,xl:12,sm:12,xs:12,children:Object(a.jsxs)("div",{className:"text-left mt-4",children:[Object(a.jsx)("div",{className:"title",children:Object(a.jsx)("p",{children:"email"})}),Object(a.jsx)("div",{className:"text-center",children:Object(a.jsx)("input",{name:"email",className:"full-length-input",value:r.email,required:!0})})]})}),Object(a.jsx)(O.a,{md:12,lg:12,xl:12,sm:12,xs:12,children:Object(a.jsxs)("div",{className:"text-left mt-4",children:[Object(a.jsx)("div",{className:"title",children:Object(a.jsx)("p",{children:"address"})}),Object(a.jsx)("div",{className:"text-center",children:Object(a.jsx)("input",{name:"address",className:"full-length-input",required:!0})})]})}),Object(a.jsx)(O.a,{md:6,lg:6,xl:6,sm:12,xs:12,children:Object(a.jsxs)("div",{className:"text-left mt-4",children:[Object(a.jsx)("div",{className:"title",children:Object(a.jsx)("p",{children:"sub-district"})}),Object(a.jsx)("div",{children:Object(a.jsx)("input",{name:"subdistrict",className:"full-length-input",required:!0})})]})}),Object(a.jsx)(O.a,{md:6,lg:6,xl:6,sm:12,xs:12,children:Object(a.jsxs)("div",{className:"text-left mt-4",children:[Object(a.jsx)("div",{className:"title",children:Object(a.jsx)("p",{children:"distric"})}),Object(a.jsx)("div",{children:Object(a.jsx)("input",{name:"district",className:"full-length-input",required:!0})})]})}),Object(a.jsx)(O.a,{md:6,lg:6,xl:6,sm:12,xs:12,children:Object(a.jsxs)("div",{className:"text-left mt-4",children:[Object(a.jsx)("div",{className:"title",children:Object(a.jsx)("p",{children:"province"})}),Object(a.jsx)("div",{children:Object(a.jsx)("input",{name:"province",className:"full-length-input",required:!0})})]})}),Object(a.jsx)(O.a,{md:6,lg:6,xl:6,sm:12,xs:12,children:Object(a.jsxs)("div",{className:"text-left mt-4",children:[Object(a.jsx)("div",{className:"title",children:Object(a.jsx)("p",{children:"post code"})}),Object(a.jsx)("div",{children:Object(a.jsx)("input",{name:"postcode",className:"full-length-input",required:!0})})]})})]})}),Object(a.jsxs)(m.a,{children:[Object(a.jsx)(O.a,{md:12,className:"text-left",children:Object(a.jsx)("h3",{className:"title",children:"payment method"})}),Object(a.jsx)(O.a,{md:12,className:"justify-content-center my-5 title",children:Object(a.jsx)(N.a,{className:"button-text qr-button",onClick:function(e){for(var t=0;t<document.getElementsByTagName("input").length;t++){if(!document.getElementsByTagName("input")[t].value){alert("Please complete form");break}6===t&&o(!0)}},children:"qr code"})})]})]})}),Object(a.jsxs)(g.a,{show:j,onHide:d,children:[Object(a.jsx)(g.a.Header,{closeButton:!0,children:Object(a.jsx)(g.a.Title,{children:"Modal heading"})}),Object(a.jsx)(g.a.Body,{className:"text-center",children:Object(a.jsx)(P.a,{value:"http://facebook.github.io/react/"})}),Object(a.jsx)(g.a.Footer,{children:Object(a.jsx)(N.a,{variant:"danger",onClick:d,children:"Close"})})]})]})}function _(e){var t=Object(h.useFirestore)(),c="test_cart",r=Object(y.c)((function(e){return e.auth.user})),s=Object(n.useState)({id:null,items:[],belongTo:null}),i=Object(l.a)(s,2),j=i[0],o=i[1],u=j.items;Object(n.useEffect)((function(){var a=t.collection("carts").doc(c).onSnapshot((function(t){var c=t.data();return c?0===c.items.length?e.history.push("/"):void o(t.data()):e.history.push("/")}));return function(){return a()}}),[]);var b=function(){var e=Object(v.a)(p.a.mark((function e(a){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=u.findIndex((function(e){return e.product.id===a.product.id})),u[n]=a,e.next=4,t.collection("carts").doc(c).update({items:u});case 4:o(Object(d.a)(Object(d.a)({},j),{},{items:u}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var a=Object(v.a)(p.a.mark((function a(n){return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return u=u.filter((function(e){return e.product.id!==n.id})),a.next=3,t.collection("carts").doc(c).update({items:u});case 3:if(o(Object(d.a)(Object(d.a)({},j),{},{items:u})),0!==u.length){a.next=6;break}return a.abrupt("return",e.history.push("/"));case 6:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return Object(a.jsxs)(m.a,{className:"mx-xs-0 mx-smx-0 mx-md-0 mx-lg-0 mx-xl-0 mt-3",children:[Object(a.jsx)(O.a,{md:6,lg:6,xl:6,sm:6,xs:12,children:Object(a.jsx)(B,{items:u,onUpdateCart:b,onRemoveItemFromCart:x})}),Object(a.jsx)(O.a,{md:6,lg:6,xl:6,sm:6,xs:12,children:Object(a.jsx)(R,{currentUser:r})})]})}var q=c(482),U=c(481),G=c(478),H=c(259),z=c.n(H);function M(e){var t={signInFlow:"popup",callbacks:{signInSuccessWithAuthResult:function(){return e.callback(!1),!1}},signInOptions:[S.a.auth.GoogleAuthProvider.PROVIDER_ID,S.a.auth.FacebookAuthProvider.PROVIDER_ID]};return Object(a.jsxs)(g.a,Object(d.a)(Object(d.a)({},e),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(a.jsx)(g.a.Header,{closeButton:!0,children:Object(a.jsx)(g.a.Title,{id:"contained-modal-title-vcenter",children:"Login"})}),Object(a.jsx)(g.a.Body,{children:Object(a.jsx)(z.a,{uiConfig:t,firebaseAuth:S.a.auth()})}),Object(a.jsx)(g.a.Footer,{children:Object(a.jsx)(N.a,{onClick:e.onHide,children:"Close"})})]}))}var V=c(477);var J=function(e){var t=Object(h.useFirebase)(),c=Object(h.useFirestore)(),r=Object(y.b)(),s=Object(y.c)((function(e){return e.auth})),i=Object(n.useCallback)((function(e){r({type:L,payload:e})}),[r]),d=Object(n.useCallback)((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;r(e?{type:k,payload:t}:{type:I})}),[r]),u=Object(n.useState)({id:null,items:[],belongTo:null}),b=Object(l.a)(u,2),m=b[0],O=b[1];return Object(n.useEffect)((function(){var e=c.collection("carts").doc("test_cart").onSnapshot((function(e){O(e.data())}));return function(){return e()}}),[]),Object(n.useEffect)((function(){var e=t.auth().onAuthStateChanged((function(e){e?(i(!1),d(!0,e)):d(!1)}));return function(){return e()}}),[]),Object(a.jsx)(j.a,{children:Object(a.jsxs)("div",{children:[Object(a.jsxs)(q.a,{className:"bg-main",expand:"md",children:[Object(a.jsx)(j.b,{to:"/",children:Object(a.jsx)(q.a.Brand,{href:"#home",children:"JASMINE"})}),Object(a.jsx)(q.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(a.jsx)(q.a.Collapse,{id:"basic-navbar-nav",className:"justify-content-end",children:Object(a.jsxs)(U.a,{children:[s.isLogin?Object(a.jsxs)(U.a.Link,{href:"/cart",children:[Object(a.jsx)(V.a,{size:24}),Object(a.jsx)(G.a,{variant:"danger",children:m.items.length})]}):null,s.isLogin?Object(a.jsx)(U.a.Link,{href:"/profile",children:"Profile"}):null,s.isLogin?Object(a.jsx)(U.a.Link,{title:"Logout",onClick:function(){return t.auth().signOut()},children:"Logout"}):Object(a.jsx)(U.a.Link,{title:"Login",onClick:function(){return i(!0)},children:"Login"})]})})]}),Object(a.jsx)(M,{show:s.showLoginDialog,onHide:function(){return i(!1)},callback:d}),Object(a.jsxs)("main",{children:[Object(a.jsx)(o.a,{path:"/cart/:id?",component:_}),Object(a.jsx)(o.a,{path:"/",exact:!0,component:E}),Object(a.jsx)(o.a,{path:"/profile",component:A})]})]})})},W=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,484)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),r(e),s(e)}))},Z=c(261),$="CART_ADD_ITEM",K="CART_UPDATE_ITEM",Y="CART_REMOVE_ITEM",Q=c(69),X=c(88),ee=c(10);c(169),c(469),c(253);ee.a.initializeApp({apiKey:"AIzaSyDsR3cCWvvEUfCtTVaGMxb-of71S30OfYw",authDomain:"jasmine-ecommerce.firebaseapp.com",projectId:"jasmine-ecommerce",storageBucket:"jasmine-ecommerce.appspot.com",messagingSenderId:"496594169433",appId:"1:496594169433:web:d6eef11e8d368144f8cb48"});var te=Object(Q.c)(Object(X.reduxFirestore)(ee.a,{}))(Q.d)(Object(Q.b)({firestore:X.firestoreReducer,cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{items:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case $:var c=t.payload,a=e.items.findIndex((function(e){return e.product.id===c.product.id}));return a>-1?(e.items[a]=c,Object(d.a)({},e)):Object(d.a)(Object(d.a)({},e),{},{items:[].concat(Object(Z.a)(e.items),[c])});case Y:return Object(d.a)(Object(d.a)({},e),{},{items:e.items.filter((function(e){return e.product.id!==t.payload}))});case K:var n=t.payload.product,r=e.items.findIndex((function(e){return e.product.id===n.id}));return e.items[r]=t.payload,Object(d.a)({},e);default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLogin:!1,user:null,showLoginDialog:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(d.a)(Object(d.a)({},e),{},{isLogin:!0,user:t.payload});case I:return Object(d.a)(Object(d.a)({},e),{},{isLogin:!1,user:null});case L:return Object(d.a)(Object(d.a)({},e),{},{showLoginDialog:t.payload});default:return e}}}));i.a.render(Object(a.jsx)(y.a,{store:te,children:Object(a.jsx)(h.ReactReduxFirebaseProvider,{firebase:ee.a,config:{},dispatch:te.dispatch,createFirestoreInstance:X.createFirestoreInstance,children:Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(J,{})})})}),document.getElementById("root")),W()}},[[470,1,2]]]);
//# sourceMappingURL=main.7cfefea2.chunk.js.map