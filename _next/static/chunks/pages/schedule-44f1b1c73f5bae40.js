(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[332],{3229:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/schedule",function(){return t(3705)}])},8969:function(e,n,t){"use strict";var r=t(5893),a=t(8622),c=t.n(a);n.Z=function(e){e.topLink;return(0,r.jsx)("div",{className:c().header,children:(0,r.jsx)("span",{className:c().ciimo,children:"CIIMO"})})}},3705:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return m}});var r=t(5893),a=t(9669),c=t.n(a),s=t(7294),u=t(8969),i=t(2422),o=t.n(i),d=t(1163),l=t(834),f=t.n(l),h=function(e){var n=e.theaters,t=[];n.forEach((function(e){e.film.forEach((function(e){t.some((function(n){n.filmName,e.name}))||t.push({filmName:e.name,theaters:[]})}))}));return(0,r.jsx)(r.Fragment,{children:n.map((function(e){return(0,r.jsxs)("div",{className:f().theater,children:[e.name,e.film.map((function(n){return(0,r.jsxs)("div",{className:f().film,children:[n.name,n.schedule.map((function(t){return function(e){var n=[];return e.seat.forEach((function(e){n.push(e.column.some((function(e){return 0==e.reserved})))})),!n.some((function(e){return 1==e}))}(t)?(0,r.jsxs)("button",{className:f().disabled,children:["".concat(t.startTime,"~").concat(t.endTime),(0,r.jsx)("div",{children:"\u6e80\u5e2d"})]},t.id):(0,r.jsxs)("button",{className:f().schedule,onClick:function(){return function(e,n,t){var r={theaterId:e.id,theaterName:e.name,filmId:n.id,filmName:n.name,scheduleId:t.id,schedule:t.date+" "+t.startTime+"~"+t.endTime};localStorage.setItem("reservation",JSON.stringify(r)),d.default.push("../seatSelect")}(e,n,t)},children:["".concat(t.startTime,"~").concat(t.endTime),(0,r.jsx)("div",{children:"\u4e88\u7d04\u8cfc\u5165"})]},t.id)}))]},n.id)}))]},e.id)}))})},m=function(){var e=(0,s.useRef)(),n=(0,s.useState)(),t=n[0],a=n[1],i=(0,s.useState)("2/7(\u6708)"),l=i[0],f=i[1],m=(0,d.useRouter)(),_=(0,s.useCallback)((function(){var n=Number(m.query.zoneId),t=Number(m.query.areaId),r="true"===m.query.frontFree,a="true"===m.query.sideFree,c=[];return e.current&&(0==t?e.current:e.current.filter((function(e){return e.areaId===t}))).forEach((function(e){var t=[];e.film.forEach((function(e){var c=[];e.schedule.forEach((function(e){if(e.date===l){var t=!0;r&&(t=!1,e.seat.forEach((function(r){var a=r.row.charCodeAt(0)-"A".charCodeAt(0);r.column.map((function(r){r.reserved||0!==n&&r.zoneId!==n||0!==a&&e.seat[a-1].column[Number(r.seatName)-1].reserved||(t=!0,console.log(a),console.log(r))}))})));var s=!0;if(a&&(s=!1,e.seat.forEach((function(t){var r=t.row.charCodeAt(0)-"A".charCodeAt(0);t.column.map((function(t){t.reserved||0!==n&&t.zoneId!==n||"1"!==t.seatName&&e.seat[r].column[Number(t.seatName)-2].reserved||"6"!==t.seatName&&e.seat[r].column[Number(t.seatName)].reserved||(s=!0,console.log(r),console.log(t))}))}))),0!==n){var u=[];e.seat.forEach((function(e){var t=e.column.filter((function(e){return e.zoneId===n}));0!==t.length&&u.push(t.every((function(e){return e.reserved})))})),u.some((function(e){return!e}))&&t&&s&&c.push(e)}else{t&&s&&c.push(e);e.seat.forEach((function(e){e.column.filter((function(e){return e.zoneId===n})).every((function(e){return e.reserved}))&&!0}))}}})),0!==c.length&&t.push({id:e.id,name:e.name,schedule:c})})),0!==t.length&&c.push({id:e.id,name:e.name,areaId:e.areaId,film:t})})),c}),[m.query.areaId,m.query.frontFree,m.query.sideFree,m.query.zoneId,l]);return(0,s.useEffect)((function(){return a(_())}),[l,_]),(0,s.useEffect)((function(){c().get("http://localhost:5000/theater",{timeout:2e3}).then((function(n){e.current=n.data,a(_())})).catch((function(n){c().get("http://10.200.13.221:80/theater").then((function(n){e.current=n.data,a(_())}))}))}),[,_]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u.Z,{}),(0,r.jsxs)("div",{className:o().main,children:[(0,r.jsx)("div",{className:o().back,onClick:function(){return m.push("/search")},children:"\u25c0\ufe0e\u691c\u7d22\u6761\u4ef6\u306b\u623b\u308b"}),(0,r.jsx)("div",{className:o().title,children:"\u691c\u7d22\u7d50\u679c"}),(0,r.jsxs)("div",{className:o().contants,children:[(0,r.jsxs)("div",{className:o().dateTabs,children:[(0,r.jsx)("button",{className:"2/7(\u6708)"==l?o().selected:o().dateTab,onClick:function(){return f("2/7(\u6708)")},children:"2/7(\u6708)"}),(0,r.jsx)("button",{className:"2/8(\u706b)"==l?o().selected:o().dateTab,onClick:function(){return f("2/8(\u706b)")},children:"2/8(\u706b)"}),(0,r.jsx)("button",{className:"2/9(\u6c34)"==l?o().selected:o().dateTab,onClick:function(){return f("2/9(\u6c34)")},children:"2/9(\u6c34)"}),(0,r.jsx)("button",{className:"2/10(\u6728)"==l?o().selected:o().dateTab,onClick:function(){return f("2/10(\u6728)")},children:"2/10(\u6728)"}),(0,r.jsx)("button",{className:"2/11(\u91d1)"==l?o().selected:o().dateTab,onClick:function(){return f("2/11(\u91d1)")},children:"2/11(\u91d1)"}),(0,r.jsx)("button",{className:"2/12(\u571f)"==l?o().selected:o().dateTab,onClick:function(){return f("2/12(\u571f)")},children:"2/12(\u571f)"}),(0,r.jsx)("button",{className:"2/13(\u65e5)"==l?o().selected:o().dateTab,onClick:function(){return f("2/13(\u65e5)")},children:"2/13(\u65e5)"})]}),t?(0,r.jsx)(h,{theaters:t}):(0,r.jsx)("div",{children:" "})]})]})]})}},8622:function(e){e.exports={header:"Header_header__Kpax6",ciimo:"Header_ciimo__2WVAt"}},2422:function(e){e.exports={main:"schedule_main__pnOSX",back:"schedule_back__6YeEV",title:"schedule_title__MB1Uq",contants:"schedule_contants__zWJpW",dateTabs:"schedule_dateTabs__DOqaI",dateTab:"schedule_dateTab__1Wvjc",selected:"schedule_selected__Vt2sc"}},834:function(e){e.exports={theater:"schedule_theater___luHR",film:"schedule_film__JvwHl",schedule:"schedule_schedule__XKaAF",disabled:"schedule_disabled__WFYl7"}},1163:function(e,n,t){e.exports=t(387)}},function(e){e.O(0,[669,774,888,179],(function(){return n=3229,e(e.s=n);var n}));var n=e.O();_N_E=n}]);