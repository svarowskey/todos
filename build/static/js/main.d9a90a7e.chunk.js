(this["webpackJsonpapp-todo"]=this["webpackJsonpapp-todo"]||[]).push([[0],{29:function(e,t,a){e.exports=a(51)},34:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(20),o=a.n(r),l=a(14),i=(a(34),a(18)),s=a(3),m=a(28),u=a(21),d=a.n(u);d.a.initializeApp({apiKey:"AIzaSyAlCUEfDYTdnaYoOtIQ-o8cU0bSigjWk1k",authDomain:"react-todo-4649a.firebaseapp.com",databaseURL:"https://react-todo-4649a.firebaseio.com",projectId:"react-todo-4649a",storageBucket:"react-todo-4649a.appspot.com",messagingSenderId:"930484674768",appId:"1:930484674768:web:1540fda55156b6052c3ed5"});var p=d.a.firestore();function E(e){var t=p.collection(e);return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){return t};return e(t).get().then((function(e){return e.docs.map((function(e){return Object(m.a)({id:e.id},e.data())}))})).catch((function(e){console.log("Error getting documents: ",e)}))}}var f=Object(n.createContext)({todos:[],lists:[]}),h=a(2);function b(e){var t=e.lists;return c.a.createElement(h.Drawer,{id:"app-drawer"},c.a.createElement(h.DrawerHeader,{title:"React Todo"}),c.a.createElement(h.DrawerContent,null,c.a.createElement(h.ListGroup,null,c.a.createElement(h.List,null,[{title:"\u0417\u0430\u0434\u0430\u0447\u0438",icon:"home",to:"/"},{title:"\u0412\u0430\u0436\u043d\u043e",icon:"star",to:"/important"},{title:"\u0417\u0430\u043f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435",icon:"event",to:"/planned"}].map((function(e){return c.a.createElement(h.ListItem,{component:l.b,to:e.to,key:e.icon},c.a.createElement(h.ListItemGraphic,null,c.a.createElement(h.Icon,null,e.icon)),c.a.createElement(h.ListItemText,null,e.title))}))),c.a.createElement(h.ListDivider,{element:"hr"}),c.a.createElement(h.List,null,t.map((function(e){return c.a.createElement(h.ListItem,{component:l.b,to:e.id,key:e.key},c.a.createElement(h.ListItemGraphic,null,c.a.createElement(h.Icon,null,"list")),c.a.createElement(h.ListItemText,null,e.title))}))))))}function I(e){var t=Object.assign({},e);return c.a.createElement("main",Object.assign({id:"app-content"},t))}function v(e){var t=e.todo,a=e.onStatusChange;return c.a.createElement(h.ListItem,null,c.a.createElement(h.ListItemGraphic,null,c.a.createElement(h.Checkbox,{checked:t.completed,onChange:a})),c.a.createElement(h.ListItemText,null,t.title))}a(49);function g(e){var t=e.match,a=Object(n.useState)([]),r=Object(i.a)(a,2),o=r[0],l=r[1],s=Object(n.useContext)(f);console.log(t),Object(n.useEffect)((function(){s.get("todos")((function(e){return e.where("listId","==",t.params.listId)})).then(l)}),[s,t.params.listId]);var m=s.lists.find((function(e){return e.id===t.params.listId}));return"object"!==typeof m?"":c.a.createElement("div",{className:"todo-list"},c.a.createElement(h.Typography,{className:"todo-list__title",variant:"headline4"},m.title),c.a.createElement(h.List,{className:"todo-list__items"},o.map((function(e){return c.a.createElement(v,{key:e.id,todo:e})}))))}a(50);function L(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){E("lists")().then(r)}),[]),c.a.createElement(f.Provider,{value:{lists:a,get:E}},c.a.createElement("div",{className:"app"},c.a.createElement(b,{lists:a}),c.a.createElement(I,null,c.a.createElement(s.c,null,c.a.createElement(s.a,{path:"/todos/:listId",component:g}),c.a.createElement(s.a,{path:"/:listId",component:g})))))}o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(l.a,null,c.a.createElement(L,null))),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.d9a90a7e.chunk.js.map