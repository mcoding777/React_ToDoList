(this.webpackJsonpreact_todolist=this.webpackJsonpreact_todolist||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(1),o=n.n(c),r=n(7),a=n.n(r),i=n(2),s=n(5),u=(n(12),n(0));var l=function(){var t=JSON.parse(localStorage.getItem("todos")),e=Object(c.useState)(""),n=Object(s.a)(e,2),o=n[0],r=n[1],a=Object(c.useState)(""),l=Object(s.a)(a,2),j=l[0],d=l[1],b=Object(c.useState)(t||[]),O=Object(s.a)(b,2),f=O[0],h=O[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("header",{children:[Object(u.jsxs)("h1",{children:["\uc624\ub298\uc758 \ud560\uc77c (",f.length,"\uac1c)"]}),Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault(),""!==o&&(h((function(t){var e=[].concat(Object(i.a)(t),[{isCompleted:!1,value:o,created:!1}]);return localStorage.setItem("todos",JSON.stringify(e)),e})),r(""))},children:[Object(u.jsx)("input",{value:o,type:"text",placeholder:"\ud574\uc57c\ud560 \uc77c\uc744 \uc5ec\uae30\uc5d0 \uc801\uc5b4\uc8fc\uc138\uc694",onChange:function(t){r(t.target.value)}}),Object(u.jsx)("button",{type:"submit",children:"\uc800\uc7a5"})]})})]}),Object(u.jsx)("main",{children:Object(u.jsx)("ul",{children:null===f||void 0===f?void 0:f.map((function(t,e){return Object(u.jsxs)("li",{children:[Object(u.jsx)("span",{className:t.isCompleted?"completed":"",children:t.created?Object(u.jsx)("input",{defaultValue:t.value,type:"text",onChange:function(t){d(t.target.value)}}):t.value}),t.created?Object(u.jsx)("button",{type:"button",onClick:function(){return function(t){h((function(e){var n=Object(i.a)(e);return n[t].value=j||n[t].value,n[t].created=!1,localStorage.setItem("todos",JSON.stringify(n)),n})),d("")}(e)},children:"\uc218\uc815\ud558\uae30"}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("button",{type:"button",onClick:function(){return function(t){h((function(e){var n=Object(i.a)(e);return n[t].isCompleted=!0,localStorage.setItem("todos",JSON.stringify(n)),n}))}(e)},children:"\uc644\ub8cc"}),Object(u.jsx)("button",{type:"button",onClick:function(){return function(t){f[t].isCompleted||h((function(e){var n=Object(i.a)(e);return n[t].created=!0,localStorage.setItem("todos",JSON.stringify(n)),n}))}(e)},children:"\uc218\uc815"}),Object(u.jsx)("button",{type:"button",onClick:function(){return function(t){h((function(e){var n=Object(i.a)(e);return n.splice(t,1),localStorage.setItem("todos",JSON.stringify(n)),n}))}(e)},children:"\uc0ad\uc81c"})]})]},e)}))})})]})};a.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(l,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.70ced413.chunk.js.map