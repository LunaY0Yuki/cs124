(this.webpackJsonplab2=this.webpackJsonplab2||[]).push([[0],{31:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var o=n(15),c=n.n(o),i=n(41),r=n.n(i),l=(n(49),n(5)),d=n(29),s=n(16),a=n(42),u=(n(50),n(51),n(52),n(44)),j=(n(53),n(11));var p=function(e){var t="\u2013";1===e.selectedPriority?t="L":2===e.selectedPriority?t="M":3===e.selectedPriority&&(t="H");var n=Object(o.useRef)();return Object(o.useEffect)((function(){var t=function(t){e.showDropDown&&n.current&&!n.current.contains(t.target)&&e.onPriorityClicked()};return document.addEventListener("mousedown",t),function(){document.removeEventListener("mousedown",t)}})),Object(j.jsxs)("div",{className:"dropdown",ref:n,children:[e.showDropDown&&Object(j.jsxs)("div",{className:"dropdown-content",children:[Object(j.jsxs)("button",{onClick:function(){return e.changePriority(0)},className:0===e.selectedPriority?"none-selected":"priority-option",children:["None ",0===e.selectedPriority?Object(j.jsx)("span",{children:"\u2713"}):null]}),Object(j.jsxs)("button",{onClick:function(){return e.changePriority(1)},className:1===e.selectedPriority?"low-selected":"priority-option",children:["Low ",1===e.selectedPriority?Object(j.jsx)("span",{children:"\u2713"}):null]}),Object(j.jsxs)("button",{onClick:function(){return e.changePriority(2)},className:2===e.selectedPriority?"medium-selected":"priority-option",children:["Medium ",2===e.selectedPriority?Object(j.jsx)("span",{children:"\u2713"}):null]}),Object(j.jsxs)("button",{id:"high-option",onClick:function(){return e.changePriority(3)},className:3===e.selectedPriority?"high-selected":"priority-option",children:["High ",3===e.selectedPriority?Object(j.jsx)("span",{children:"\u2713"}):null]})]}),e.showDropDown?Object(j.jsx)("button",{id:"priority-outline",className:"dropbtn"+e.selectedPriority.toString(),onClick:e.onPriorityClicked,children:t}):Object(j.jsx)("button",{className:"dropbtn"+e.selectedPriority.toString(),onClick:e.onPriorityClicked,children:t})]})};var b=function(e){var t=Object(o.useRef)(null),n=Object(o.useState)(e.item_name),c=Object(s.a)(n,2),i=c[0],r=c[1];return Object(o.useEffect)((function(){e.isNewItem&&t.current.focus()})),Object(j.jsxs)("div",{id:e.id,className:e.completed?"task-item-completed":"task-item-uncompleted",children:[Object(j.jsx)("input",{onChange:function(){e.onItemChanged(e.id,"completed",!e.completed)},type:"checkbox",className:"check-complete",checked:e.completed}),Object(j.jsx)(u.a,{className:"item-name",value:i,onChange:function(e){return r(e.target.value)},disabled:e.completed,onBlur:function(t){""===t.currentTarget.value&&e.onItemDeleted(e.id),e.isNewItem&&e.changeNewItemId(null),e.onItemChanged(e.id,"item_name",t.target.value)},onKeyPress:function(t){if("Enter"===t.key){t.preventDefault();var n=e.onItemAdded();e.changeNewItemId(n)}},ref:t}),Object(j.jsx)(p,{selectedPriority:e.priority,showDropDown:e.showDropDown,onPriorityClicked:e.onPriorityClicked,changePriority:function(t){e.onItemChanged(e.id,"priority",t),e.onPriorityClicked()}})]})};var m=function(e){var t=Object(o.useState)(null),n=Object(s.a)(t,2),c=n[0],i=n[1],r=Object(o.useState)(null),l=Object(s.a)(r,2),d=l[0],a=l[1];function u(t){return Object(j.jsx)(b,{id:t.id,item_name:t.item_name,completed:t.completed,priority:t.priority,showDropDown:t.id===d,onPriorityClicked:function(){return e=t.id,void a(d===e?null:e);var e},onItemChanged:e.onItemChanged,onItemDeleted:e.onItemDeleted,onItemAdded:e.onItemAdded,isNewItem:t.id===c,changeNewItemId:i},t.id)}var p=Object(j.jsx)("p",{id:"no-items",children:"No items to do."});if(e.data.length>0){var m=e.data.filter((function(e){return e.id!==c}));if("Completed"===e.filterState?m=e.data.filter((function(e){return e.completed})):"Uncompleted"===e.filterState&&(m=e.data.filter((function(e){return!e.completed}))),p=m.map((function(e){return u(e)})),c){var f=e.data.filter((function(e){return e.id===c}));1===f.length&&p.push(u(f[0]))}}return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{id:"item_list",children:p}),Object(j.jsx)("button",{id:"add",type:"button",onClick:function(){var t=e.onItemAdded();i(t)},children:"+"})]})};n(31);var f=function(e){function t(t){e.onFilterOpClicked(t)}return Object(j.jsxs)("div",{className:"dropup-content",children:[Object(j.jsxs)("button",{onClick:function(){return t("All")},children:["All ","All"===e.filterState?Object(j.jsx)("span",{children:"\u2713"}):null]}),Object(j.jsxs)("button",{onClick:function(){return t("Completed")},children:["Completed ","Completed"===e.filterState?Object(j.jsx)("span",{children:"\u2713"}):null]}),Object(j.jsxs)("button",{onClick:function(){return t("Uncompleted")},children:["Uncompleted ","Uncompleted"===e.filterState?Object(j.jsx)("span",{children:"\u2713"}):null]})]})};var O=function(e){var t=Object(o.useRef)(),n=Object(o.useState)(!1),c=Object(s.a)(n,2),i=c[0],r=c[1];return Object(o.useEffect)((function(){var e=function(e){i&&t.current&&!t.current.contains(e.target)&&r(!1)};return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[i]),Object(j.jsxs)("div",{className:"dropup",children:[Object(j.jsx)("button",{className:"accent",id:"filter-dropup",type:"button",onClick:e.onToolClicked,children:Object(j.jsx)("i",{className:"material-icons-outlined md-38",children:"filter_alt"})}),e.showDropUp&&Object(j.jsx)(f,{onFilterOpClicked:e.onFilterOpClicked,filterState:e.filterState,closeDropUp:e.closeDropUp})]})};var h=function(e){function t(t){e.onDeleteOpClicked(t),e.displayModal()}return Object(j.jsxs)("div",{className:"dropup-content",children:[Object(j.jsxs)("button",{onClick:function(){return t("All")},children:["All ","All"===e.deleteState?Object(j.jsx)("span",{children:"\u2713"}):null]}),Object(j.jsxs)("button",{onClick:function(){return t("Completed")},children:["Completed ","Completed"===e.deleteState?Object(j.jsx)("span",{children:"\u2713"}):null]}),Object(j.jsxs)("button",{onClick:function(){return t("Uncompleted")},children:["Uncompleted ","Uncompleted"===e.deleteState?Object(j.jsx)("span",{children:"\u2713"}):null]})]})};var x=function(e){return Object(j.jsxs)("div",{className:"dropup",children:[Object(j.jsx)("button",{className:"accent",id:"delete-dropup",type:"button",onClick:e.onToolClicked,children:Object(j.jsx)("i",{className:"material-icons-outlined md-38",children:"delete_outline"})}),e.showDropUp&&Object(j.jsx)(h,{displayModal:e.displayModal,deleteState:e.deleteState,onDeleteOpClicked:e.onDeleteOpClicked})]})};n(55);var y=function(e){var t=Object(o.useRef)();function n(t){e.onSortSelected(t),e.toggleDropDown()}return Object(o.useEffect)((function(){var n=function(n){e.showDropDown&&t.current&&!t.current.contains(n.target)&&e.toggleDropDown()};return document.addEventListener("mousedown",n),function(){document.removeEventListener("mousedown",n)}})),Object(j.jsxs)("div",{className:"sort-dropdown",ref:t,children:[Object(j.jsx)("button",{id:e.showDropDown?"sort-icon-outlined":"sort-icon",onClick:e.toggleDropDown,children:Object(j.jsx)("i",{className:"material-icons-outlined em2",children:"sort"})}),e.showDropDown&&Object(j.jsxs)("div",{className:"sort-dropdown-content",children:[Object(j.jsxs)("button",{onClick:function(){return n("created")},children:["By Date ","created"===e.selectedSortOption?Object(j.jsx)("span",{children:"\u2713"}):null," "]}),Object(j.jsxs)("button",{onClick:function(){return n("item_name")},children:["By Name ","item_name"===e.selectedSortOption?Object(j.jsx)("span",{children:"\u2713"}):null," "]}),Object(j.jsxs)("button",{onClick:function(){return n("priority")},id:"last-option",children:["By Priority ","priority"===e.selectedSortOption?Object(j.jsx)("span",{children:"\u2713"}):null," "]})]})]})};n(56);var v=function(e){return Object(j.jsx)("div",{className:"modal",children:Object(j.jsxs)("div",{className:"modal-content",children:[e.children,Object(j.jsxs)("div",{id:"modal-response",children:[Object(j.jsx)("button",{type:"button",onClick:e.onClose,children:"Cancel"}),Object(j.jsx)("button",{id:"confirm-button",type:"button",onClick:function(){e.onOk(),e.onClose()},children:e.confirm_button_name})]})]})})};var C=function(e){var t=Object(o.useState)(null),n=Object(s.a)(t,2),c=n[0],i=n[1],r=Object(o.useState)("All"),l=Object(s.a)(r,2),a=l[0],u=l[1],p=Object(o.useState)(null),b=Object(s.a)(p,2),f=b[0],h=b[1],C=Object(o.useState)(null),k=Object(s.a)(C,2),g=k[0],D=k[1],w=Object(o.useState)(!1),S=Object(s.a)(w,2),N=S[0],P=S[1];function I(e){i(c===e?null:e)}var A=Object(o.useRef)();Object(o.useEffect)((function(){var e=function(e){c&&A.current&&!A.current.contains(e.target)&&i(null)};return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[c]);var E=e.data.length;return"Completed"===f?E=e.data.filter((function(e){return e.completed})).length:"Uncompleted"===f&&(E=e.data.filter((function(e){return!e.completed})).length),Object(j.jsxs)("div",{id:"content",children:[Object(j.jsx)("h1",{className:"accent",children:"To-Do List"}),e.data.length>0&&Object(j.jsx)(y,{showDropDown:N,toggleDropDown:function(){return P(!N)},onSortSelected:e.onSortSelected,selectedSortOption:e.selectedSortOption}),e.data.length>0&&Object(j.jsxs)("div",{id:"column-labels",children:[Object(j.jsx)("span",{children:"Item Name"})," ",Object(j.jsx)("span",{children:"Priority"})]}),Object(j.jsx)(m,Object(d.a)(Object(d.a)({},e),{},{filterState:a})),Object(j.jsxs)("div",{id:"tools",ref:A,children:[Object(j.jsx)(O,{onToolClicked:function(){I("filter")},showDropUp:"filter"===c,onFilterOpClicked:function(e){return u(e)},filterState:a,closeDropUp:function(){return i(null)}}),Object(j.jsx)(x,{onToolClicked:function(){I("delete")},showDropUp:"delete"===c,deleteState:f,onDeleteOpClicked:function(e){return h(e)},displayModal:function(){D(!0)}})]}),g&&Object(j.jsx)(v,{confirm_button_name:"Delete",onClose:function(){h(null),D(!1)},onOk:function(){e.onDeleteByCategory(f),i(null)},children:Object(j.jsxs)("p",{children:["Are you sure that you want to delete ",Object(j.jsxs)("b",{children:["all ",E.toString()," ","All"!==f?f.toLowerCase()+" ":""," "]}),"tasks?"]})})]})},k=n(37),g=n(43);k.a.initializeApp({apiKey:"AIzaSyCYBi2G8RnkLs2Bzj_XDLjYPylF2oRhq5Y",authDomain:"cs124-lab-celine-yuki.firebaseapp.com",projectId:"cs124-lab-celine-yuki",storageBucket:"cs124-lab-celine-yuki.appspot.com",messagingSenderId:"2120607993",appId:"1:2120607993:web:d5d647b2b43f3c7fd95a28"});var D=k.a.firestore(),w="todo-list-2";var S=function(e){var t=Object(o.useState)("created"),n=Object(s.a)(t,2),c=n[0],i=n[1],r=D.collection(w);c&&(r="priority"===c?r.orderBy(c,"desc").orderBy("item_name"):r.orderBy(c));var u=Object(g.a)(r),p=Object(s.a)(u,3),b=p[0],m=(p[1],p[2],[]);return b&&(m=b.docs.map((function(e){return Object(d.a)({},e.data())}))),Object(j.jsx)(C,{data:m,onItemChanged:function(e,t,n){D.collection(w).doc(e).update(Object(l.a)({},t,n))},onItemDeleted:function(e){D.collection(w).doc(e).delete()},onDeleteByCategory:function(e){b.forEach((function(t){"Completed"===e&&t.data().completed?t.ref.delete():"Uncompleted"!==e||t.data().completed?"All"===e&&t.ref.delete():t.ref.delete()}))},onItemAdded:function(){var e=Object(a.a)();return D.collection(w).doc(e).set({id:e,item_name:"",completed:!1,priority:0,created:k.a.firestore.Timestamp.fromDate(new Date)}),e},onSortSelected:function(e){return i(e)},selectedSortOption:c})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,60)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),o(e),c(e),i(e),r(e)}))};r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(S,{initialData:[]})}),document.getElementById("root")),N()}},[[59,1,2]]]);
//# sourceMappingURL=main.c5108d70.chunk.js.map