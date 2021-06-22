(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){},20:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var c=n(2),l=n(0),o=n.n(l),i=n(4),s=n.n(i),a=(n(16),n(5)),r=n(3),d=(n(17),n(8)),j=(n(18),n(1)),m=function(e){return Object(j.jsxs)("div",{className:e.colorMode?"list__footer light":"list__footer",children:[Object(j.jsxs)("p",{className:e.colorMode?"light":null,children:[e.itemLength," items left"]}),Object(j.jsxs)("div",{className:"list__footer__filter "+e.class,children:[Object(j.jsxs)("div",{className:e.colorMode?"light":null,children:[Object(j.jsxs)("label",{className:e.colorMode?"light":null,onClick:e.initialItemIndexHandle,children:["All",Object(j.jsx)("input",{onChange:e.method,value:"default",name:"filter",type:"radio"})]}),Object(j.jsxs)("label",{className:e.colorMode?"light":null,onClick:e.setFalseFirst,children:["Active",Object(j.jsx)("input",{onChange:e.method,value:!0,name:"filter",type:"radio"})]}),Object(j.jsxs)("label",{className:e.colorMode?"light":null,onClick:e.setTrueFirst,children:["Completed",Object(j.jsx)("input",{onChange:e.method,value:!1,name:"filter",type:"radio"})]})]}),Object(j.jsx)("button",{className:e.colorMode?"light":null,onClick:e.deleteItem,name:"clearcompleted",children:"Clear Completed"})]})]})},u=(n(20),function(e){var t=Object(l.useState)(!1),n=Object(c.a)(t,2),o=n[0],i=n[1],s=Object(l.useRef)();return Object(l.useEffect)((function(){s.current.style.transition="none",e.isDragging||setTimeout((function(){s.current.style.transition=null}),500)}),[e.isDragging,e.filter]),Object(j.jsxs)("div",{ref:s,className:e.colorMode?"item__container light":"item__container",style:{opacity:JSON.stringify(e.completed)===e.filter?"0":null,pointerEvents:JSON.stringify(e.completed)===e.filter?"none":null,backgroundColor:e.isDragging&&!e.colorMode?"#393a4c":e.isDragging&&e.colorMode?"#d2d3db":null,border:e.isDragging?"none":null},children:[Object(j.jsxs)("div",{className:"item__container__left",children:[Object(j.jsx)("button",{className:e.colorMode?"light":null,index:e.index,onClick:e.completeItemHandle,children:Object(j.jsx)("div",{style:{transform:e.completed?"initial":null},children:Object(j.jsx)("img",{src:"./images/icon-check.svg",alt:"iconcheck"})})}),Object(j.jsx)("p",{onClick:function(e){i((function(e){return!e}))},className:e.colorMode?"light":null,style:e.completed?{textDecoration:"line-through",opacity:.5}:null,children:e.content})]}),Object(j.jsx)("div",{style:!0===o?{visibility:"initial"}:null,className:"item__container__right",children:Object(j.jsxs)("button",{className:e.colorMode?"light":null,name:"deleteitem",index:e.index,onClick:e.deleteItem,children:[Object(j.jsx)("span",{}),Object(j.jsx)("span",{})]})})]})}),b=[{content:"Complete online Javascript course",completed:!0},{content:"Jog around the park 3x",completed:!1},{content:"10 minutes meditaion",completed:!1},{content:"Read for 1 hour",completed:!1},{content:"Pick up groceries",completed:!1},{content:"Complete Todo App on Frontend Mentor",completed:!1}],g=function(e){var t=Object(l.useState)("default"),n=Object(c.a)(t,2),o=n[0],i=n[1],s=Object(l.useState)(b),g=Object(c.a)(s,2),p=g[0],O=g[1],h=Object(l.useState)(b),f=Object(c.a)(h,2),x=f[0],y=f[1],_=Object(l.useState)({content:"",completed:!1}),v=Object(c.a)(_,2),N=v[0],k=v[1],M=function(e){"deleteitem"===e.target.name&&(O(p.filter((function(t,n){return n!==JSON.parse(e.target.getAttribute("index"))}))),y(p.filter((function(t,n){return n!==JSON.parse(e.target.getAttribute("index"))})))),"clearcompleted"===e.target.name&&(O(p.filter((function(e,t){return!0!==e.completed}))),y(p.filter((function(e,t){return!0!==e.completed}))))},C=function(e){var t=e.target.getAttribute("index"),n=Object(r.a)(p);e.target.firstChild.style.transition="200ms ease",setTimeout((function(){e.target.firstChild.style.transition=null}),250),!1===n[t].completed?n[t].completed=!0:n[t].completed=!1,O(Object(r.a)(n)),y(Object(r.a)(n)),"false"===o&&S(),"true"===o&&I()},S=function(){O(p.sort((function(e,t){return t.completed-e.completed})))},I=function(){O(p.sort((function(e,t){return e.completed-t.completed})))};return Object(j.jsxs)("div",{className:"todo__contain",children:[Object(j.jsxs)("div",{className:"todo__contain__head",children:[Object(j.jsx)("h1",{children:"Todo"}),Object(j.jsxs)("button",{onClick:e.toggleColorModeHandle,children:[Object(j.jsx)("img",{style:e.colorMode?{opacity:1}:null,src:"./images/icon-sun.svg",alt:"iconmoon"}),Object(j.jsx)("img",{style:e.colorMode?null:{opacity:1},src:"./images/icon-moon.svg",alt:"iconmoon"})]})]}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),O((function(e){return[N].concat(Object(r.a)(e))})),y((function(e){return[N].concat(Object(r.a)(e))})),k({content:""})},name:"form",className:"todo__contain__input",children:[Object(j.jsx)("label",{children:Object(j.jsx)("input",{maxLength:"40",className:e.colorMode?"light":null,required:!0,placeholder:"Create a new todo...",value:N.content,onChange:function(e){k({content:e.target.value,completed:!1})},type:"text"})}),Object(j.jsx)("button",{type:"submit"})]}),Object(j.jsxs)("div",{className:e.colorMode?"todo__contain__list light":"todo__contain__list",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{style:0===p.length?{display:"flex"}:{display:"none"},className:"item__empty",children:Object(j.jsx)("p",{children:Object(j.jsx)("em",{className:e.colorMode?"light":null,children:"... empty ..."})})}),Object(j.jsx)(d.a,{onDragEnd:function(e){if(e.destination){var t=Array.from(p),n=t.splice(e.source.index,1),l=Object(c.a)(n,1)[0];t.splice(e.destination.index,0,l),O(Object(r.a)(t)),y(Object(r.a)(t))}},children:Object(j.jsx)(d.c,{droppableId:"itemS",children:function(t){return Object(j.jsxs)("div",Object(a.a)(Object(a.a)({},t.droppableProps),{},{ref:t.innerRef,children:[p.map((function(t,n){return Object(j.jsx)(d.b,{isDragDisabled:JSON.stringify(t.completed)===o,index:n,draggableId:"".concat(n),children:function(c,l){return Object(j.jsx)("div",Object(a.a)(Object(a.a)(Object(a.a)({ref:c.innerRef},c.dragHandleProps),c.draggableProps),{},{children:Object(j.jsx)(u,{isDragging:l.isDragging,colorMode:e.colorMode,filter:o,content:t.content,completed:t.completed,index:n,completeItemHandle:C,deleteItem:M},n)}))}},n)})),t.placeholder]}))}})})]}),Object(j.jsx)(m,{colorMode:e.colorMode,initialItemIndexHandle:function(){O(Object(r.a)(x))},setFalseFirst:I,setTrueFirst:S,itemLength:p.length,class:o,method:function(e){i(e.target.value)},deleteItem:M})]})]})},p=function(){var e=Object(l.useState)(!1),t=Object(c.a)(e,2),n=t[0],o=t[1];return Object(j.jsxs)("div",{className:"body",children:[Object(j.jsxs)("header",{children:[Object(j.jsx)("img",{style:n?null:{opacity:1},className:"desktop",src:"./images/bg-desktop-dark.jpg",alt:"bg-desktop-dark"}),Object(j.jsx)("img",{style:n?{opacity:1}:null,className:"desktop",src:"./images/bg-desktop-light.jpg",alt:"bg-desktop-light"}),Object(j.jsx)("img",{style:n?null:{opacity:1},className:"mobile",src:"./images/bg-mobile-dark.jpg",alt:"bg-desktop-dark"}),Object(j.jsx)("img",{style:n?{opacity:1}:null,className:"mobile",src:"./images/bg-mobile-light.jpg",alt:"bg-desktop-light"})]}),Object(j.jsx)("main",{className:n?"light":null,children:Object(j.jsx)(g,{colorMode:n,toggleColorModeHandle:function(){o((function(e){return!e}))}})})]})};s.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.d9e2c933.chunk.js.map