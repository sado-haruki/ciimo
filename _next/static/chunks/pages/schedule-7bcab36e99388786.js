(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[332],{3229:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/schedule",function(){return t(3705)}])},8969:function(e,n,t){"use strict";var c=t(5893),a=t(8622),s=t.n(a);n.Z=function(e){e.topLink;return(0,c.jsx)("div",{className:s().header,children:(0,c.jsx)("span",{className:s().ciimo,children:"CIIMO"})})}},3705:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return m}});var c=t(5893),a=t(9669),s=t.n(a),i=t(7294),r=t(8969),u=t(2422),l=t.n(u),d=t(1163),o=t(834),h=t.n(o),f=function(e){var n=e.theaters,t=[];n.forEach((function(e){e.film.forEach((function(e){t.some((function(n){n.filmName,e.name}))||t.push({filmName:e.name,theaters:[]})}))}));return(0,c.jsx)(c.Fragment,{children:n.map((function(e){return(0,c.jsxs)("div",{className:h().theater,children:[e.name,e.film.map((function(n){return(0,c.jsxs)("div",{className:h().film,children:[n.name,n.schedule.map((function(t){return(0,c.jsxs)("button",{className:h().schedule,onClick:function(){return function(e,n,t){var c={theaterId:e.id,theaterName:e.name,filmId:n.id,filmName:n.name,scheduleId:t.id,schedule:t.date+" "+t.startTime+"~"+t.endTime};localStorage.setItem("reservation",JSON.stringify(c)),d.default.push("../seatSelect")}(e,n,t)},children:["".concat(t.startTime,"~").concat(t.endTime),(0,c.jsx)("div",{children:"\u4e88\u7d04\u8cfc\u5165"})]},t.id)}))]},n.id)}))]},e.id)}))})},m=function(){var e=(0,i.useRef)(),n=(0,i.useState)(!1),t=(n[0],n[1]),a=(0,i.useState)(),u=a[0],d=a[1],o=(0,i.useState)("2/7(\u6708)"),h=o[0],m=o[1],_=(0,i.useCallback)((function(){var n=[];return e.current&&e.current.forEach((function(e){var t=[];e.film.forEach((function(e){var n=[];e.schedule.forEach((function(e){e.date===h&&n.push(e)})),0!==n.length&&t.push({id:e.id,name:e.name,schedule:n})})),0!==t.length&&n.push({id:e.id,name:e.name,film:t})})),n}),[h]);return(0,i.useEffect)((function(){return d(_())}),[h,_]),(0,i.useEffect)((function(){s().get("http://localhost:5000/theater").then((function(n){e.current=n.data,console.log(e.current),d(_()),t(!0)}))}),[,_]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r.Z,{}),(0,c.jsxs)("div",{className:l().main,children:[(0,c.jsx)("div",{className:l().title,children:"\u691c\u7d22\u7d50\u679c"}),(0,c.jsxs)("div",{className:l().contants,children:[(0,c.jsxs)("div",{className:l().dateTabs,children:[(0,c.jsx)("button",{className:"2/7(\u6708)"==h?l().selected:l().dateTab,onClick:function(){return m("2/7(\u6708)")},children:"2/7(\u6708)"}),(0,c.jsx)("button",{className:"2/8(\u706b)"==h?l().selected:l().dateTab,onClick:function(){return m("2/8(\u706b)")},children:"2/8(\u706b)"}),(0,c.jsx)("button",{className:"2/9(\u6c34)"==h?l().selected:l().dateTab,onClick:function(){return m("2/9(\u6c34)")},children:"2/9(\u6c34)"}),(0,c.jsx)("button",{className:"2/10(\u6728)"==h?l().selected:l().dateTab,onClick:function(){return m("2/10(\u6728)")},children:"2/10(\u6728)"}),(0,c.jsx)("button",{className:"2/11(\u91d1)"==h?l().selected:l().dateTab,onClick:function(){return m("2/11(\u91d1)")},children:"2/11(\u91d1)"}),(0,c.jsx)("button",{className:"2/12(\u571f)"==h?l().selected:l().dateTab,onClick:function(){return m("2/12(\u571f)")},children:"2/12(\u571f)"}),(0,c.jsx)("button",{className:"2/13(\u65e5)"==h?l().selected:l().dateTab,onClick:function(){return m("2/13(\u65e5)")},children:"2/13(\u65e5)"})]}),u?(0,c.jsx)(f,{theaters:u}):(0,c.jsx)("div",{children:" "})]})]})]})}},8622:function(e){e.exports={header:"Header_header__Kpax6",ciimo:"Header_ciimo__2WVAt"}},2422:function(e){e.exports={main:"schedule_main__pnOSX",back:"schedule_back__6YeEV",title:"schedule_title__MB1Uq",contants:"schedule_contants__zWJpW",dateTabs:"schedule_dateTabs__DOqaI",dateTab:"schedule_dateTab__1Wvjc",selected:"schedule_selected__Vt2sc"}},834:function(e){e.exports={theater:"schedule_theater___luHR",film:"schedule_film__JvwHl",schedule:"schedule_schedule__XKaAF"}},1163:function(e,n,t){e.exports=t(387)}},function(e){e.O(0,[669,774,888,179],(function(){return n=3229,e(e.s=n);var n}));var n=e.O();_N_E=n}]);