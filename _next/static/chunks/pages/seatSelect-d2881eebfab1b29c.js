(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[605],{768:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/seatSelect",function(){return n(7846)}])},7846:function(e,t,n){"use strict";n.r(t),n.d(t,{ReservationSeatContext:function(){return v}});var r=n(5893),i=n(7294),s=n(9669),c=n.n(s),a=n(1664),o=n(8969),l=n(180),d=n.n(l),u=n(8392),f=n(1205),v=(0,i.createContext)(null);t.default=function(){var e=(0,i.useRef)([]),t=(0,i.useState)(!1),n=t[0],s=t[1],l=(0,i.useState)(),v=l[0],_=l[1],h=(0,i.useState)(!1),m=h[0],S=h[1];(0,i.useEffect)((function(){x()}),[]);var x=function(){var t,n=(t=localStorage.getItem("reservation"))?JSON.parse(t):null;c().get("http://localhost:5000/theater/",{timeout:500}).then((function(t){var r,i,s,c=t.data;e.current=(null===(s=null===(i=null===(r=c.find((function(e){return e.id===n.theaterId})))||void 0===r?void 0:r.film.find((function(e){return e.id===n.filmId})))||void 0===i?void 0:i.schedule.find((function(e){return e.id===n.scheduleId})))||void 0===s?void 0:s.seat)||[],S(!0)})).catch((function(t){c().get("https://my-json-server.typicode.com/sado-haruki/dbjson/theater/").then((function(t){var r,i,s,c=t.data;e.current=(null===(s=null===(i=null===(r=c.find((function(e){return e.id===n.theaterId})))||void 0===r?void 0:r.film.find((function(e){return e.id===n.filmId})))||void 0===i?void 0:i.schedule.find((function(e){return e.id===n.scheduleId})))||void 0===s?void 0:s.seat)||[],S(!0)}))}))};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.Z,{}),(0,r.jsxs)("div",{className:d().main,children:[(0,r.jsx)(f.Z,{select:1}),(0,r.jsxs)("div",{className:d().contants,children:[(0,r.jsx)("div",{className:d().selectField,children:m?(0,r.jsx)(u.Z,{seats:e.current,setSelectSeat:_||{}}):(0,r.jsx)(r.Fragment,{children:"\u8aad\u307f\u8fbc\u307f\u4e2d"})}),n?(0,r.jsxs)("div",{className:d().errorSpace,children:[(0,r.jsx)("span",{className:d().erorrIcon,children:"!"}),(0,r.jsx)("span",{className:d().erorrText,children:"\u5ea7\u5e2d\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044\u3002"})]}):(0,r.jsx)(r.Fragment,{}),(0,r.jsxs)("div",{className:d().buttons,children:[(0,r.jsx)("button",{className:d().back,onClick:function(){history.back()},children:"\u691c\u7d22\u7d50\u679c\u306b\u623b\u308b"}),(0,r.jsx)(a.default,{href:"/confirm",children:(0,r.jsx)("a",{onClick:function(t){var n,r;if(t.stopPropagation(),x(),void 0===(null===(r=null===(n=e.current.find((function(e){return e.row===(null===v||void 0===v?void 0:v.row)})))||void 0===n?void 0:n.column.find((function(e){return e.seatName===(null===v||void 0===v?void 0:v.seatName)})))||void 0===r?void 0:r.reserved))return s(!0),void t.preventDefault();localStorage.setItem("reservationSeat",JSON.stringify(v))},children:(0,r.jsx)("button",{className:d().confirm,children:"\u6c7a\u5b9a\u3059\u308b"})})})]})]})]})]})}},180:function(e){e.exports={main:"seatSelect_main__0k1U_",contants:"seatSelect_contants__KyJ1U",selectField:"seatSelect_selectField__kgMaK",buttons:"seatSelect_buttons___SssJ",back:"seatSelect_back__jqfVi",confirm:"seatSelect_confirm__yskfd",errorSpace:"seatSelect_errorSpace__zM9rd",erorrIcon:"seatSelect_erorrIcon__UGpBW",erorrText:"seatSelect_erorrText___hf8h"}}},function(e){e.O(0,[669,119,774,888,179],(function(){return t=768,e(e.s=t);var t}));var t=e.O();_N_E=t}]);