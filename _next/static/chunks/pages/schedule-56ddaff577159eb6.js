(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[332],{3229:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/schedule",function(){return t(3705)}])},8969:function(e,n,t){"use strict";var c=t(5893),a=t(8622),s=t.n(a);n.Z=function(e){e.topLink;return(0,c.jsx)("div",{className:s().header,children:(0,c.jsx)("span",{className:s().ciimo,children:"CIIMO"})})}},3705:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return m}});var c=t(5893),a=t(9669),s=t.n(a),r=t(7294),i=t(8969),u=t(2422),d=t.n(u),l=t(1163),o=t(834),h=t.n(o),f=function(e){var n=e.theaters,t=[];n.forEach((function(e){e.film.forEach((function(e){t.some((function(n){n.filmName,e.name}))||t.push({filmName:e.name,theaters:[]})}))}));return(0,c.jsx)(c.Fragment,{children:n.map((function(e){return(0,c.jsxs)("div",{className:h().theater,children:[e.name,e.film.map((function(n){return(0,c.jsxs)("div",{className:h().film,children:[n.name,n.schedule.map((function(t){return function(e){var n=[];return e.seat.forEach((function(e){n.push(e.column.some((function(e){return 0==e.reserved})))})),!n.some((function(e){return 1==e}))}(t)?(0,c.jsxs)("button",{className:h().disabled,children:["".concat(t.startTime,"~").concat(t.endTime),(0,c.jsx)("div",{children:"\u6e80\u5e2d"})]},t.id):(0,c.jsxs)("button",{className:h().schedule,onClick:function(){return function(e,n,t){var c={theaterId:e.id,theaterName:e.name,filmId:n.id,filmName:n.name,scheduleId:t.id,schedule:t.date+" "+t.startTime+"~"+t.endTime};localStorage.setItem("reservation",JSON.stringify(c)),l.default.push("../seatSelect")}(e,n,t)},children:["".concat(t.startTime,"~").concat(t.endTime),(0,c.jsx)("div",{children:"\u4e88\u7d04\u8cfc\u5165"})]},t.id)}))]},n.id)}))]},e.id)}))})},m=function(){var e=(0,r.useRef)(),n=(0,r.useState)(),t=n[0],a=n[1],u=(0,r.useState)("2/7(\u6708)"),o=u[0],h=u[1],m=(0,l.useRouter)(),_=(0,r.useCallback)((function(){var n=Number(m.query.zoneId),t=Number(m.query.areaId),c=[];return e.current&&(0==t?e.current:e.current.filter((function(e){return e.areaId===t}))).forEach((function(e){var t=[];e.film.forEach((function(e){var c=[];e.schedule.forEach((function(e){if(e.date===o)if(0!==n){var t=[];e.seat.forEach((function(e){var c=e.column.filter((function(e){return e.zoneId===n}));0!==c.length&&t.push(c.every((function(e){return e.reserved})))})),t.some((function(e){return!e}))&&c.push(e)}else c.push(e)})),0!==c.length&&t.push({id:e.id,name:e.name,schedule:c})})),0!==t.length&&c.push({id:e.id,name:e.name,areaId:e.areaId,film:t})})),c}),[m.query.areaId,m.query.zoneId,o]);return(0,r.useEffect)((function(){return a(_())}),[o,_]),(0,r.useEffect)((function(){s().get("http://localhost:5000/theater",{timeout:200}).then((function(n){e.current=n.data,a(_())})).catch((function(n){s().get("http://10.200.13.221:80/theater").then((function(n){e.current=n.data,a(_())}))}))}),[,_]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i.Z,{}),(0,c.jsxs)("div",{className:d().main,children:[(0,c.jsx)("div",{className:d().back,onClick:function(){return m.push("/search")},children:"\u25c0\ufe0e\u691c\u7d22\u6761\u4ef6\u306b\u623b\u308b"}),(0,c.jsx)("div",{className:d().title,children:"\u691c\u7d22\u7d50\u679c"}),(0,c.jsxs)("div",{className:d().contants,children:[(0,c.jsxs)("div",{className:d().dateTabs,children:[(0,c.jsx)("button",{className:"2/7(\u6708)"==o?d().selected:d().dateTab,onClick:function(){return h("2/7(\u6708)")},children:"2/7(\u6708)"}),(0,c.jsx)("button",{className:"2/8(\u706b)"==o?d().selected:d().dateTab,onClick:function(){return h("2/8(\u706b)")},children:"2/8(\u706b)"}),(0,c.jsx)("button",{className:"2/9(\u6c34)"==o?d().selected:d().dateTab,onClick:function(){return h("2/9(\u6c34)")},children:"2/9(\u6c34)"}),(0,c.jsx)("button",{className:"2/10(\u6728)"==o?d().selected:d().dateTab,onClick:function(){return h("2/10(\u6728)")},children:"2/10(\u6728)"}),(0,c.jsx)("button",{className:"2/11(\u91d1)"==o?d().selected:d().dateTab,onClick:function(){return h("2/11(\u91d1)")},children:"2/11(\u91d1)"}),(0,c.jsx)("button",{className:"2/12(\u571f)"==o?d().selected:d().dateTab,onClick:function(){return h("2/12(\u571f)")},children:"2/12(\u571f)"}),(0,c.jsx)("button",{className:"2/13(\u65e5)"==o?d().selected:d().dateTab,onClick:function(){return h("2/13(\u65e5)")},children:"2/13(\u65e5)"})]}),t?(0,c.jsx)(f,{theaters:t}):(0,c.jsx)("div",{children:" "})]})]})]})}},8622:function(e){e.exports={header:"Header_header__Kpax6",ciimo:"Header_ciimo__2WVAt"}},2422:function(e){e.exports={main:"schedule_main__pnOSX",back:"schedule_back__6YeEV",title:"schedule_title__MB1Uq",contants:"schedule_contants__zWJpW",dateTabs:"schedule_dateTabs__DOqaI",dateTab:"schedule_dateTab__1Wvjc",selected:"schedule_selected__Vt2sc"}},834:function(e){e.exports={theater:"schedule_theater___luHR",film:"schedule_film__JvwHl",schedule:"schedule_schedule__XKaAF",disabled:"schedule_disabled__WFYl7"}},1163:function(e,n,t){e.exports=t(387)}},function(e){e.O(0,[669,774,888,179],(function(){return n=3229,e(e.s=n);var n}));var n=e.O();_N_E=n}]);