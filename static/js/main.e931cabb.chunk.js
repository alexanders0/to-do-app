(this["webpackJsonpto-do-app"]=this["webpackJsonpto-do-app"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(2),c=n.n(o),a=n(5),r=n.n(a),s=(n(15),n(7)),l=n(3);var u=n(1),d=c.a.createContext();function i(e){var t=function(e,t){var n=c.a.useState(!1),o=Object(l.a)(n,2),a=o[0],r=o[1],s=c.a.useState(!0),u=Object(l.a)(s,2),d=u[0],i=u[1],j=c.a.useState(t),b=Object(l.a)(j,2),O=b[0],m=b[1];return c.a.useEffect((function(){setTimeout((function(){try{var n,o=localStorage.getItem(e);o?n=JSON.parse(o):(localStorage.setItem(e,JSON.stringify([t])),n=[]),m(n),i(!1)}catch(a){r(a)}}),1e3)}),[t,e]),{item:O,saveItem:function(t){try{var n=JSON.stringify(t);localStorage.setItem(e,n),m(t)}catch(a){r(a)}},loading:d,error:a}}("TODOS_V1",[]),n=t.item,o=t.saveItem,a=t.loading,r=t.error,i=c.a.useState(""),j=Object(l.a)(i,2),b=j[0],O=j[1],m=c.a.useState(!1),x=Object(l.a)(m,2),p=x[0],f=x[1],h=n.filter((function(e){return e.completed})).length,g=n.length,v=[];v=!b.length>=1?n:n.filter((function(e){var t=e.text.toLowerCase(),n=b.toLowerCase();return t.includes(n)}));return Object(u.jsx)(d.Provider,{value:{loading:a,error:r,totalTodos:g,completedTodos:h,searchValue:b,setSearchValue:O,searchedTodos:v,addTodo:function(e){var t=Object(s.a)(n);t.push({completed:!1,text:e}),o(t)},toggleCompleteTodo:function(e){var t=n.findIndex((function(t){return t.text===e})),c=Object(s.a)(n);c[t].completed=!c[t].completed,o(c)},deleteTodo:function(e){var t=n.findIndex((function(t){return t.text===e})),c=Object(s.a)(n);c.splice(t,1),o(c)},openModal:p,setOpenModal:f},children:e.children})}n(17);function j(){var e=c.a.useContext(d),t=e.totalTodos,n=e.completedTodos;return Object(u.jsxs)("h2",{className:"TodoCounter",children:["Has completado ",n," de ",t," ToDo's"]})}n(18);function b(){var e=c.a.useContext(d),t=e.searchValue,n=e.setSearchValue;return Object(u.jsx)("input",{className:"TodoSearch",placeholder:"Cebolla",value:t,onChange:function(e){console.log(e.target.value),n(e.target.value)}})}n(19);function O(e){return Object(u.jsx)("section",{children:Object(u.jsx)("ul",{children:e.children})})}n(20);var m=n(9),x=n(10);function p(e){return Object(u.jsxs)("li",{className:"TodoItem",children:[Object(u.jsx)("span",{className:"Icon Icon-check ".concat(e.completed&&"Icon-check--active"),onClick:e.onComplete,children:Object(u.jsx)(m.a,{})}),Object(u.jsx)("p",{className:"TodoItem-p ".concat(e.completed&&"TodoItem-p--complete"),children:e.text}),Object(u.jsx)("span",{className:"Icon Icon-delete",onClick:e.onDelete,children:Object(u.jsx)(x.a,{})})]})}n(21);function f(e){return Object(u.jsx)("button",{className:"CreateTodoButton",onClick:function(){e.setOpenModal((function(e){return!e}))},children:"+"})}n(22);function h(e){var t=e.children;return r.a.createPortal(Object(u.jsx)("div",{className:"ModalBackground",children:t}),document.getElementById("modal"))}n(23);function g(){var e=c.a.useState(""),t=Object(l.a)(e,2),n=t[0],o=t[1],a=c.a.useContext(d),r=a.addTodo,s=a.setOpenModal;return Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r(n),s(!1)},children:[Object(u.jsx)("label",{children:"Escribe tu nuevo TODO"}),Object(u.jsx)("textarea",{value:n,onChange:function(e){o(e.target.value)},placeholder:"Escribe una nueva tarea"}),Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{type:"button",className:"TodoForm-button TodoForm-button-cancel",onClick:function(){s(!1)},children:"Cancelar"}),Object(u.jsx)("button",{className:"TodoForm-button TodoForm-button-add",type:"submit",children:"A\xf1adir"})]})]})}function v(e){e.error;return Object(u.jsx)("p",{children:"Desesp\xe9rate, hubo un error..."})}n(24);function T(){return Object(u.jsxs)("div",{className:"LoadingTodo-container",children:[Object(u.jsx)("span",{className:"LoadingTodo-completeIcon"}),Object(u.jsx)("p",{className:"LoadingTodo-text",children:"Cargando Todo's..."}),Object(u.jsx)("span",{className:"LoadingTodo-deleteIcon"})]})}function C(){return Object(u.jsx)("p",{children:"Crea tu primer Todo!"})}function I(){var e=c.a.useContext(d),t=e.error,n=e.loading,o=e.searchedTodos,a=e.toggleCompleteTodo,r=e.deleteTodo,s=e.openModal,l=e.setOpenModal;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(j,{}),Object(u.jsx)(b,{}),Object(u.jsxs)(O,{children:[t&&Object(u.jsx)(v,{error:t}),n&&new Array(3).fill(1).map((function(e,t){return Object(u.jsx)(T,{},t)})),!n&&!o.length&&Object(u.jsx)(C,{}),o.map((function(e){return Object(u.jsx)(p,{text:e.text,completed:e.completed,onComplete:function(){return a(e.text)},onDelete:function(){return r(e.text)}},e.text)}))]}),s&&Object(u.jsx)(h,{children:Object(u.jsx)(g,{})}),Object(u.jsx)(f,{setOpenModal:l})]})}var N=function(){return Object(u.jsx)(i,{children:Object(u.jsx)(I,{})})};r.a.render(Object(u.jsx)(N,{}),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.e931cabb.chunk.js.map