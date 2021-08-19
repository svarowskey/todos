(this["webpackJsonpapp-todo"]=this["webpackJsonpapp-todo"]||[]).push([[0],{103:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(11),r=n.n(c),i=n(42),l=(n(77),n(32)),s=n(31),u=n(10),d=n(21),m=n(56),p=n(57),f=n.n(p);f.a.initializeApp({apiKey:"AIzaSyAlCUEfDYTdnaYoOtIQ-o8cU0bSigjWk1k",authDomain:"react-todo-4649a.firebaseapp.com",databaseURL:"https://react-todo-4649a.firebaseio.com",projectId:"react-todo-4649a",storageBucket:"react-todo-4649a.appspot.com",messagingSenderId:"930484674768",appId:"1:930484674768:web:1540fda55156b6052c3ed5"});var b=f.a.firestore();function E(){return b.collection("lists").get().then((function(e){return e.docs.map((function(e){return Object(d.a)({id:e.id},e.data())}))})).catch((function(e){console.log("Error getting documents: ",e)}))}function h(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)([]),r=Object(l.a)(c,2),i=r[0],s=r[1];return Object(a.useEffect)((function(){E().then(s)}),[]),{data:{lists:i,todos:n},actions:{getLists:function(){return E().then(s)},getListTodos:function(e){return function(e){return b.collection("todos").where("listId","==",e).get().then((function(e){return e.docs.map((function(e){return Object(d.a)({id:e.id},e.data())}))})).catch((function(e){console.log("Error getting documents: ",e)}))}(e).then(o)},createTodo:function(e){return function(e){return b.collection("todos").add(Object(d.a)(Object(d.a)({},e),{},{completed:!1})).then((function(e){return e.get()})).then((function(e){return Object(d.a)({id:e.id},e.data())}))}(e).then((function(e){return o([].concat(Object(m.a)(n),[e]))}))},updateTodo:function(e,t){return function(e,t){return b.collection("todos").doc(e).update(t)}(e,t).then((function(t){o(Object(m.a)(n.map((function(n){return n.id!==e?Object(d.a)(Object(d.a)({},n),t):n}))))}))},deleteTodo:function(e){return function(e){return b.collection("todos").doc(e).delete().then((function(){return e}))}(e).then((function(e){o(Object(m.a)(n.filter((function(t){return t.id!==e}))))}))}}}}n(88);var j=n(8),O=n(135),g=n(145),v=n(137),I=Object(O.a)((function(e){return Object(g.a)({drawer:Object(s.a)({},e.breakpoints.up("sm"),{width:240,flexShrink:0}),toolbar:e.mixins.toolbar})}));function w(e){var t=I();return o.a.createElement("div",null,o.a.createElement("div",{className:t.toolbar},"React Todo"),o.a.createElement(v.a,null),o.a.createElement(j.ListGroup,null,o.a.createElement(j.List,null,e.lists.map((function(e){return o.a.createElement(j.ListItem,{component:i.b,to:e.id,key:e.id},o.a.createElement(j.ListItemGraphic,null,o.a.createElement(j.Icon,null,"\u041c\u0430\u0433\u0430\u0437\u0438\u043d"===e.title?"shopping_cart":"list")),o.a.createElement(j.ListItemText,null,e.title))})))))}n(93);function k(e){var t=Object.assign({},e);return o.a.createElement("main",Object.assign({id:"app-content"},t))}n(94);function L(e){var t=e.todo,n=e.onUpdate,a=e.onDelete;return o.a.createElement(j.ListItem,{className:"todo-list-item"},o.a.createElement(j.ListItemGraphic,null,o.a.createElement(j.Checkbox,{checked:t.completed,onChange:function(e,a,o){n(t.id,Object(d.a)(Object(d.a)({},t),{},{completed:a}))}})),o.a.createElement(j.ListItemText,null,t.title),o.a.createElement(j.ListItemMeta,null,o.a.createElement(j.IconButton,{onClick:function(){return a(t.id)}},o.a.createElement(j.Icon,null,"delete"))))}n(95);function x(e){var t=e.list,n=e.todos,a=e.onUpdate,c=e.onDelete;return o.a.createElement("div",{className:"todo-list"},o.a.createElement(j.Typography,{className:"todo-list__title",variant:"headline4"},t.title),o.a.createElement(j.List,{className:"todo-list"},n.map((function(e){return o.a.createElement(L,{key:e.id,todo:e,onUpdate:a,onDelete:c})}))))}n(96);function N(e){var t=e.onSubmit,n=Object(a.useState)(""),c=Object(l.a)(n,2),r=c[0],i=c[1],s=Object(a.useState)(""),u=Object(l.a)(s,2),d=u[0],m=u[1],p=o.a.createRef();return o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(r),i("")},className:"todo-form"},o.a.createElement(j.List,null,o.a.createElement(j.ListItem,{className:d},o.a.createElement(j.TextField,{ref:p,label:"\u0427\u0442\u043e \u043d\u0443\u0436\u043d\u043e \u043a\u0443\u043f\u0438\u0442\u044c...",value:r,onChange:function(e){return i(e.target.value)},onFocus:function(){m(""===d?"mdc-list-item--focus":"")},onBlur:function(){m(""===d?"mdc-list-item--focus":"")},type:"text",fullWidth:!0}))))}n(97);function S(e){var t=e.match,n=h(),c=n.data,r=c.lists,i=c.todos,l=n.actions;Object(a.useEffect)((function(){l.getListTodos(t.params.listId)}),[l,t.params.listId]);var s=r.find((function(e){return e.id===t.params.listId}));return"object"!==typeof s?"":o.a.createElement("div",{id:"todo-list-page",className:"page"},o.a.createElement(x,{list:s,todos:i,onUpdate:function(e,t){l.updateTodo(e,t)},onDelete:function(e){l.deleteTodo(e)}}),o.a.createElement(N,{onSubmit:function(e){l.createTodo({title:e,listId:s.id})}}))}n(98);var T=n(140),y=n(139),B=n(142),D=n(144),U=n(143),C=n(67),G=n.n(C),M=n(141),P=n(19),R=Object(O.a)((function(e){return Object(g.a)({root:{display:"flex"},drawer:Object(s.a)({},e.breakpoints.up("sm"),{width:240,flexShrink:0}),appBar:Object(s.a)({},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(240,"px)"),marginLeft:240}),menuButton:Object(s.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:{width:240},content:{flexGrow:1,padding:e.spacing(3)}})}));function A(e){var t=h().data.lists,n=e.window,a=R(),c=Object(P.a)(),r=o.a.useState(!1),i=Object(l.a)(r,2),s=i[0],d=i[1],m=function(){d(!s)},p=void 0!==n?function(){return n().document.body}:void 0;return o.a.createElement("div",{className:a.root},o.a.createElement(y.a,null),o.a.createElement(T.a,{position:"fixed",className:a.appBar},o.a.createElement(M.a,null,o.a.createElement(U.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:m,className:a.menuButton},o.a.createElement(G.a,null)))),o.a.createElement("nav",{className:a.drawer},o.a.createElement(D.a,{smUp:!0,implementation:"css"},o.a.createElement(B.a,{container:p,variant:"temporary",anchor:"rt1"===c.direction?"right":"left",open:s,onClose:m,classes:{paper:a.drawerPaper},ModalProps:{keepMounted:!0}},o.a.createElement(w,{lists:t}))),o.a.createElement(D.a,{xsDown:!0,implementation:"css"},o.a.createElement(B.a,{classes:{paper:a.drawerPaper},variant:"permanent",open:!0},o.a.createElement(w,{lists:t})))),o.a.createElement("main",{className:a.content},o.a.createElement("div",{className:a.toolbar}),o.a.createElement(k,null,o.a.createElement(u.d,null,o.a.createElement(u.b,{path:"/todos/:listId",component:S}),o.a.createElement(u.b,{path:"/:listId",component:S}),o.a.createElement(u.a,{from:"*",to:"/"})))))}r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(i.a,null,o.a.createElement(A,null))),document.getElementById("root"))},72:function(e,t,n){e.exports=n(103)},77:function(e,t,n){},88:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){}},[[72,1,2]]]);
//# sourceMappingURL=main.aa5fb0b5.chunk.js.map