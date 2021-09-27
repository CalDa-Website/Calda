!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=12)}([function(t,e){t.exports=window.wp.element},function(t,e){t.exports=window.wp.i18n},function(t,e){t.exports=window.jQuery},function(t,e){t.exports=window.blocksyOptions},function(t,e,n){var r=n(9);function o(t,e,n,r,a){var c=new Error(n,r,a);return c.name="UseFetchError",c.status=t,c.statusText=e,Object.setPrototypeOf(c,Object.getPrototypeOf(this)),Error.captureStackTrace&&Error.captureStackTrace(c,o),c}o.prototype=Object.create(Error.prototype,{constructor:{value:Error,enumerable:!1,writable:!0,configurable:!0}}),Object.setPrototypeOf(o,Error),t.exports=function(t,e,n){var a=(n&&n.depends||e&&e.depends||[]).reduce((function(t,e){return t||!e}),!1);return r(!a&&function(t,e,n){return fetch(t,e).then(n&&n.formatter||e&&e.formatter||function(t){if(!t.ok)throw new o(t.status,t.statusText,"Fetch error");return t.json()})},t,e||{},n||{})}},function(t,e,n){var r=n(11);t.exports=function(){var t=function(){t.id=r(),t.subscribers.forEach((function(t){t()}))};return t.id=r(),t.subscribers=[],t.subscribe=function(e){t.subscribers.push(e)},t.unsubscribe=function(e){t.subscribers.indexOf(e)>=0&&t.subscribers.splice(t.subscribers.indexOf(e),1)},t}},function(t,e,n){var r=n(7);t.exports=function(t){var e=r.useState(t.id),n=function(){return e[1](t.id)};return r.useEffect((function(){return t.subscribe(n),function(){return t.unsubscribe(n)}}),[]),e[0]}},function(t,e){t.exports=window.React},function(t,e){t.exports=window.wp.hooks},function(t,e,n){var r=n(7),o=n(10);t.exports=function(t){var e=Array.prototype.slice.call(arguments,[1]),n=r.useState({isLoading:!!t});return r.useEffect((function(){t&&(!n[0].isLoading&&n[1]({data:n[0].data,isLoading:!0}),t.apply(null,e).then((function(t){n[1]({data:t,isLoading:!1})})).catch((function(t){n[1]({error:t,isLoading:!1})})))}),o(e)),n[0]}},function(t,e){t.exports=function t(){for(var e=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r instanceof Array)for(var o=0;o<r.length;o++)e=e.concat(t(r[o]));else if("undefined"!=typeof URL&&r instanceof URL)e=e.concat(r.toJSON());else if(r instanceof Object)for(var a=Object.keys(r),c=0;c<a.length;c++){var i=a[c];e=e.concat([i]).concat(t(r[i]))}else e=e.concat(r)}return e}},function(t,e,n){for(var r=self.crypto||self.msCrypto,o="-_",a=36;a--;)o+=a.toString(36);for(a=36;a---10;)o+=a.toString(36).toUpperCase();t.exports=function(t){var e="",n=r.getRandomValues(new Uint8Array(t||21));for(a=t||21;a--;)e+=o[63&n[a]];return e}},function(t,e,n){"use strict";n.r(e);var r=n(1),o=n(0),a=n(3),c=n(2),i=n.n(c),s=n(4),u=n.n(s),l=n(5),d=n.n(l),b=n(6),f=n.n(b);function p(t,e,n,r,o,a,c){try{var i=t[a](c),s=i.value}catch(t){return void n(t)}i.done?e(s):Promise.resolve(s).then(r,o)}function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach((function(e){v(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function v(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function j(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var c,i=t[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!e||n.length!==e);r=!0);}catch(t){o=!0,a=t}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return O(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return O(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var g=function(t){var e=t.sidebar,n=t.updateList,c=j(Object(o.useState)(!1),2),i=c[0],s=c[1],u=j(Object(o.useState)(null),2),l=u[0],d=u[1],b=Object(o.useRef)(),f=function(){wp.ajax.send({url:"".concat(wp.ajax.settings.url,"?action=blocksy_sidebars_update"),contentType:"application/json",data:JSON.stringify(l)}).then((function(){n(),s(!1)}))};return Object(o.createElement)(o.Fragment,null,Object(o.createElement)("div",{className:"ct-custom-sidebar-settings",onClick:function(){d(null),s(!0)}},Object(o.createElement)("span",{className:"dashicons dashicons-admin-generic"}),Object(o.createElement)("span",{className:"ct-tooltip-top"},Object(r.__)("Display Conditions","blc"))),Object(o.createElement)(a.Overlay,{items:i,className:"ct-admin-modal ct-custom-sidebars-modal",initialFocusRef:b,onDismiss:function(){s(!1)},render:function(){return Object(o.createElement)("div",{className:"ct-modal-content",ref:b},Object(o.createElement)("h2",null,Object(r.sprintf)(Object(r.__)("%s - Sidebar Display Conditions","blc"),e.name)),Object(o.createElement)("p",null,Object(r.__)("Add one or more conditions in order to display your sidebar.","blc")),Object(o.createElement)("div",{className:"ct-modal-scroll"},Object(o.createElement)(a.OptionsPanel,{onChange:function(t,n){return d(y(y(y({},e),l||{}),{},{conditions:n}))},options:{conditions:{type:"blocksy-display-condition",value:[],label:!1,design:"none"}},value:{conditions:(l?l.conditions:e.conditions)||[]},hasRevertButton:!1})),Object(o.createElement)("div",{className:"ct-modal-actions has-divider"},Object(o.createElement)("button",{className:"button-primary",disabled:!l,onClick:f},Object(r.__)("Save Settings","blc"))))}}))},h=d()(),w=function(){var t,e,n=f()(h),r=Array.from(document.querySelectorAll('[id*="ct-dynamic-sidebar"] .blocksy-settings')),a=u()("".concat(ct_localizations.ajax_url,"?action=blocksy_sidebars_list"),{method:"POST",formatter:(t=regeneratorRuntime.mark((function t(e){var n,r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.json();case 2:if(n=t.sent,r=n.success,o=n.data,r&&o.sidebars){t.next=7;break}throw new Error;case 7:return t.abrupt("return",o.sidebars);case 8:case"end":return t.stop()}}),t)})),e=function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function c(t){p(a,r,o,c,i,"next",t)}function i(t){p(a,r,o,c,i,"throw",t)}c(void 0)}))},function(t){return e.apply(this,arguments)}),depends:[n]}),c=a.data,i=a.isLoading;a.error;return Object(o.createElement)("div",null,!i&&r.map((function(t,e){var n=t.parentNode.id.replace("ct-dynamic-sidebar-",""),r=c.find((function(t){return t.id===n}));return Object(o.createPortal)(Object(o.createElement)(g,{el:t,id:n,sidebar:r,updateList:function(){return h()}}),t)})))},S=n(8);function E(t,e,n,r,o,a,c){try{var i=t[a](c),s=i.value}catch(t){return void n(t)}i.done?e(s):Promise.resolve(s).then(r,o)}var x=d()(),_=function(t){var e,n,a=t.sidebarId,c=f()(x),i=u()("".concat(ct_localizations.ajax_url,"?action=blocksy_sidebars_list"),{method:"POST",formatter:(e=regeneratorRuntime.mark((function t(e){var n,r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.json();case 2:if(n=t.sent,r=n.success,o=n.data,r&&o.sidebars){t.next=7;break}throw new Error;case 7:return t.abrupt("return",o.sidebars);case 8:case"end":return t.stop()}}),t)})),n=function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function c(t){E(a,r,o,c,i,"next",t)}function i(t){E(a,r,o,c,i,"throw",t)}c(void 0)}))},function(t){return n.apply(this,arguments)}),depends:[c]}),s=i.data,l=(i.isLoading,i.error,(s||[]).find((function(t){return t.id===a})));return Object(o.createElement)(o.Fragment,null,Object(o.createElement)(g,{sidebar:l,updateList:function(){return x()}}),Object(o.createElement)("div",{className:"ct-custom-sidebar-remove",onClick:function(){wp.ajax.send({url:"".concat(wp.ajax.settings.url,"?action=blocksy_sidebars_remove&id=").concat(a),contentType:"application/json"}).then((function(){return location.reload()}))}},Object(o.createElement)("span",{className:"dashicons dashicons-no-alt"}),Object(o.createElement)("span",{className:"ct-tooltip-top"},Object(r.__)("Remove Sidebar","blc"))))};function k(t){return function(t){if(Array.isArray(t))return A(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return A(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return A(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}Object(S.addFilter)("editor.BlockEdit","blocksy",(function(t){return function(e){return"core/widget-area"!==e.name||-1===e.attributes.id.indexOf("ct-dynamic-sidebar")?Object(o.createElement)(t,e):Object(o.createElement)(o.Fragment,null,Object(o.createElement)(_,{sidebarId:e.attributes.id.replace("ct-dynamic-sidebar-","")}),Object(o.createElement)(t,e))}})),Object(a.onDocumentLoaded)((function(){setTimeout((function(){document.querySelector(".block-editor-writing-flow")&&document.querySelector(".block-editor-writing-flow").insertAdjacentHTML("beforebegin",'<section class="ct-block-sidebars-manager">\n\t\t\t\t\t\t<h2>'.concat(Object(r.__)("Create Sidebar/Widget Area","blc"),"</h2>\n\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t").concat(Object(r.__)("Enter a name in the input below and hit the Create Sidebar button.","blc"),'\n\t\t\t\t\t\t</p>\n\n\t\t\t\t\t\t<form>\n\t\t\t\t\t\t\t<input type="text" placeholder="').concat(Object(r.__)("Sidebar name","blc"),'" />\n\n\t\t\t\t\t\t\t<button\n\t\t\t\t\t\t\t\ttype="submit"\n\t\t\t\t\t\t\t\tdisabled\n\t\t\t\t\t\t\t\tclass="button button-primary">\n\t\t\t\t\t\t\t\t').concat(Object(r.__)("Create Sidebar","blc"),"\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</section>"))}));var t=k(document.querySelectorAll('.widgets-holder-wrap:not(.inactive-sidebar) [id*="ct-dynamic-sidebar"] .sidebar-description > .description'));if(t.map((function(t){t.parentNode.insertAdjacentHTML("beforebegin",'<div class="blocksy-settings"></div>'),t.classList.add("ct-tooltip-top")})),t.length>0){var e=document.createElement("div");document.body.appendChild(e),Object(o.render)(Object(o.createElement)(w,null),e)}})),i()(document).on("submit",".ct-sidebars-manager form, .ct-block-sidebars-manager form",(function(t){t.preventDefault();var e=document.querySelector(".ct-sidebars-manager form input, .ct-block-sidebars-manager form input");e.value&&wp.ajax.send({url:"".concat(wp.ajax.settings.url,"?action=blocksy_sidebars_create&name=").concat(e.value),contentType:"application/json"}).then((function(){return location.reload()}))})),i()(document).on("input",".ct-sidebars-manager form input, .ct-block-sidebars-manager form input",(function(t){t.preventDefault();var e=document.querySelector(".ct-sidebars-manager form input, .ct-block-sidebars-manager form input"),n=document.querySelector(".ct-sidebars-manager form button, .ct-block-sidebars-manager form button");e.value?n.removeAttribute("disabled"):n.setAttribute("disabled",!0)})),i()(document).on("click.ctDynamicSidebars",'[id*="ct-dynamic-sidebar"] .sidebar-description',(function(t){t.preventDefault(),0!==i()(this).closest(".sidebar-description").length&&i()(this).hasClass("sidebar-description")&&wp.ajax.send({url:"".concat(wp.ajax.settings.url,"?action=blocksy_sidebars_remove&id=").concat(i()(this).closest(".widgets-sortables")[0].id.replace("ct-dynamic-sidebar-","")),contentType:"application/json"}).then((function(){return location.reload()}))}))}]);