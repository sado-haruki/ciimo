(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[605],{768:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/seatSelect",function(){return n(7846)}])},8418:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,u=[],a=!0,i=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(u.push(r.value),!t||u.length!==t);a=!0);}catch(l){i=!0,o=l}finally{try{a||null==n.return||n.return()}finally{if(i)throw o}}return u}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var u,a=(u=n(7294))&&u.__esModule?u:{default:u},i=n(6273),l=n(387),c=n(7190);var f={};function s(e,t,n,r){if(e&&i.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;f[t+"%"+n+(o?"%"+o:"")]=!0}}var d=function(e){var t,n=!1!==e.prefetch,r=l.useRouter(),u=a.default.useMemo((function(){var t=o(i.resolveHref(r,e.href,!0),2),n=t[0],u=t[1];return{href:n,as:e.as?i.resolveHref(r,e.as):u||n}}),[r,e.href,e.as]),d=u.href,v=u.as,p=e.children,h=e.replace,y=e.shallow,m=e.scroll,b=e.locale;"string"===typeof p&&(p=a.default.createElement("a",null,p));var g=(t=a.default.Children.only(p))&&"object"===typeof t&&t.ref,w=o(c.useIntersection({rootMargin:"200px"}),2),j=w[0],E=w[1],S=a.default.useCallback((function(e){j(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,j]);a.default.useEffect((function(){var e=E&&n&&i.isLocalURL(d),t="undefined"!==typeof b?b:r&&r.locale,o=f[d+"%"+v+(t?"%"+t:"")];e&&!o&&s(r,d,v,{locale:t})}),[v,d,E,b,n,r]);var I={ref:S,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,u,a,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(n))&&(e.preventDefault(),null==a&&r.indexOf("#")>=0&&(a=!1),t[o?"replace":"push"](n,r,{shallow:u,locale:l,scroll:a}))}(e,r,d,v,h,y,m,b)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),i.isLocalURL(d)&&s(r,d,v,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var _="undefined"!==typeof b?b:r&&r.locale,x=r&&r.isLocaleDomain&&i.getDomainLocale(v,_,r&&r.locales,r&&r.domainLocales);I.href=x||i.addBasePath(i.addLocale(v,_,r&&r.defaultLocale))}return a.default.cloneElement(t,I)};t.default=d},7190:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,u=[],a=!0,i=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(u.push(r.value),!t||u.length!==t);a=!0);}catch(l){i=!0,o=l}finally{try{a||null==n.return||n.return()}finally{if(i)throw o}}return u}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,r=e.disabled||!i,c=u.useRef(),f=o(u.useState(!1),2),s=f[0],d=f[1],v=o(u.useState(t?t.current:null),2),p=v[0],h=v[1],y=u.useCallback((function(e){c.current&&(c.current(),c.current=void 0),r||s||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=l.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return l.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,u=r.observer,a=r.elements;return a.set(e,t),u.observe(e),function(){a.delete(e),u.unobserve(e),0===a.size&&(u.disconnect(),l.delete(o))}}(e,(function(e){return e&&d(e)}),{root:p,rootMargin:n}))}),[r,p,n,s]);return u.useEffect((function(){if(!i&&!s){var e=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[s]),u.useEffect((function(){t&&h(t.current)}),[t]),[y,s]};var u=n(7294),a=n(9311),i="undefined"!==typeof IntersectionObserver;var l=new Map},7846:function(e,t,n){"use strict";n.r(t);var r=n(5893),o=n(7294),u=n(9669),a=n.n(u),i=n(1664);t.default=function(){var e=(0,o.useRef)([]),t=(0,o.useRef)(),n=(0,o.useState)(!1),u=n[0],l=n[1];(0,o.useEffect)((function(){c()}),[]);var c=function(){var t,n=(t=localStorage.getItem("reservation"))?JSON.parse(t):null;a().get("http://localhost:5000/theater/").then((function(t){var r,o,u,a=t.data;e.current=(null===(u=null===(o=null===(r=a.find((function(e){return e.id===n.theaterId})))||void 0===r?void 0:r.film.find((function(e){return e.id===n.filmId})))||void 0===o?void 0:o.schedule.find((function(e){return e.id===n.scheduleId})))||void 0===u?void 0:u.seat)||[],console.log(e),l(!0)}))};return(0,r.jsxs)(r.Fragment,{children:[u?e.current.map((function(e,n){return(0,r.jsxs)(r.Fragment,{children:[e.row,e.column.map((function(n,o){return(0,r.jsx)("button",{onClick:function(){return function(e,n){var r={row:e,seatName:n};t.current=r}(e.row,n.seatName)},children:n.seatName},o)})),(0,r.jsx)("div",{},n)]})})):(0,r.jsx)(r.Fragment,{children:"\u8aad\u307f\u8fbc\u307f\u4e2d"}),(0,r.jsx)(i.default,{href:"/schedule",children:(0,r.jsx)("a",{children:(0,r.jsx)("button",{children:"\u691c\u7d22\u7d50\u679c\u306b\u623b\u308b"})})}),(0,r.jsx)(i.default,{href:"/confirm",children:(0,r.jsx)("a",{onClick:function(n){var r,o;n.stopPropagation(),c(),(null===(o=null===(r=e.current.find((function(e){var n;return e.row===(null===(n=t.current)||void 0===n?void 0:n.row)})))||void 0===r?void 0:r.column.find((function(e){var n;return e.seatName===(null===(n=t.current)||void 0===n?void 0:n.seatName)})))||void 0===o?void 0:o.reserved)?n.preventDefault():localStorage.setItem("reservationSeat",JSON.stringify(t.current))},children:(0,r.jsx)("button",{children:"\u6c7a\u5b9a\u3059\u308b"})})})]})}},1664:function(e,t,n){e.exports=n(8418)}},function(e){e.O(0,[669,774,888,179],(function(){return t=768,e(e.s=t);var t}));var t=e.O();_N_E=t}]);