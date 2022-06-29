System.register(["vue","@cgi/styleguide"],(function(t,e){var n={},r={};return{setters:[function(t){n.createApp=t.createApp,n.createElementBlock=t.createElementBlock,n.createTextVNode=t.createTextVNode,n.createVNode=t.createVNode,n.h=t.h,n.openBlock=t.openBlock,n.resolveComponent=t.resolveComponent,n.withCtx=t.withCtx},function(t){r.BadgeButton=t.BadgeButton}],execute:function(){t(function(){var t={9662:function(t,e,n){var r=n(614),o=n(6330),i=TypeError;t.exports=function(t){if(r(t))return t;throw i(o(t)+" is not a function")}},6077:function(t,e,n){var r=n(614),o=String,i=TypeError;t.exports=function(t){if("object"==typeof t||r(t))return t;throw i("Can't set "+o(t)+" as a prototype")}},9670:function(t,e,n){var r=n(111),o=String,i=TypeError;t.exports=function(t){if(r(t))return t;throw i(o(t)+" is not an object")}},1318:function(t,e,n){var r=n(5656),o=n(1400),i=n(6244),u=function(t){return function(e,n,u){var c,a=r(e),s=i(a),f=o(u,s);if(t&&n!=n){while(s>f)if(c=a[f++],c!=c)return!0}else for(;s>f;f++)if((t||f in a)&&a[f]===n)return t||f||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},4326:function(t,e,n){var r=n(1702),o=r({}.toString),i=r("".slice);t.exports=function(t){return i(o(t),8,-1)}},648:function(t,e,n){var r=n(1694),o=n(614),i=n(4326),u=n(5112),c=u("toStringTag"),a=Object,s="Arguments"==i(function(){return arguments}()),f=function(t,e){try{return t[e]}catch(n){}};t.exports=r?i:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=f(e=a(t),c))?n:s?i(e):"Object"==(r=i(e))&&o(e.callee)?"Arguments":r}},7741:function(t,e,n){var r=n(1702),o=Error,i=r("".replace),u=function(t){return String(o(t).stack)}("zxcasd"),c=/\n\s*at [^:]*:[^\n]*/,a=c.test(u);t.exports=function(t,e){if(a&&"string"==typeof t&&!o.prepareStackTrace)while(e--)t=i(t,c,"");return t}},9920:function(t,e,n){var r=n(2597),o=n(3887),i=n(1236),u=n(3070);t.exports=function(t,e,n){for(var c=o(e),a=u.f,s=i.f,f=0;f<c.length;f++){var p=c[f];r(t,p)||n&&r(n,p)||a(t,p,s(e,p))}}},8880:function(t,e,n){var r=n(9781),o=n(3070),i=n(9114);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},9114:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},8052:function(t,e,n){var r=n(614),o=n(3070),i=n(6339),u=n(3072);t.exports=function(t,e,n,c){c||(c={});var a=c.enumerable,s=void 0!==c.name?c.name:e;return r(n)&&i(n,s,c),c.global?a?t[e]=n:u(e,n):(c.unsafe?t[e]&&(a=!0):delete t[e],a?t[e]=n:o.f(t,e,{value:n,enumerable:!1,configurable:!c.nonConfigurable,writable:!c.nonWritable})),t}},3072:function(t,e,n){var r=n(7854),o=Object.defineProperty;t.exports=function(t,e){try{o(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},9781:function(t,e,n){var r=n(7293);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(t,e,n){var r=n(7854),o=n(111),i=r.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},8113:function(t,e,n){var r=n(5005);t.exports=r("navigator","userAgent")||""},7392:function(t,e,n){var r,o,i=n(7854),u=n(8113),c=i.process,a=i.Deno,s=c&&c.versions||a&&a.version,f=s&&s.v8;f&&(r=f.split("."),o=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&u&&(r=u.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=u.match(/Chrome\/(\d+)/),r&&(o=+r[1]))),t.exports=o},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2914:function(t,e,n){var r=n(7293),o=n(9114);t.exports=!r((function(){var t=Error("a");return!("stack"in t)||(Object.defineProperty(t,"stack",o(1,7)),7!==t.stack)}))},2109:function(t,e,n){var r=n(7854),o=n(1236).f,i=n(8880),u=n(8052),c=n(3072),a=n(9920),s=n(4705);t.exports=function(t,e){var n,f,p,l,d,v,h=t.target,m=t.global,y=t.stat;if(f=m?r:y?r[h]||c(h,{}):(r[h]||{}).prototype,f)for(p in e){if(d=e[p],t.dontCallGetSet?(v=o(f,p),l=v&&v.value):l=f[p],n=s(m?p:h+(y?".":"#")+p,t.forced),!n&&void 0!==l){if(typeof d==typeof l)continue;a(d,l)}(t.sham||l&&l.sham)&&i(d,"sham",!0),u(f,p,d,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(e){return!0}}},2104:function(t,e,n){var r=n(4374),o=Function.prototype,i=o.apply,u=o.call;t.exports="object"==typeof Reflect&&Reflect.apply||(r?u.bind(i):function(){return u.apply(i,arguments)})},4374:function(t,e,n){var r=n(7293);t.exports=!r((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:function(t,e,n){var r=n(4374),o=Function.prototype.call;t.exports=r?o.bind(o):function(){return o.apply(o,arguments)}},6530:function(t,e,n){var r=n(9781),o=n(2597),i=Function.prototype,u=r&&Object.getOwnPropertyDescriptor,c=o(i,"name"),a=c&&"something"===function(){}.name,s=c&&(!r||r&&u(i,"name").configurable);t.exports={EXISTS:c,PROPER:a,CONFIGURABLE:s}},1702:function(t,e,n){var r=n(4374),o=Function.prototype,i=o.bind,u=o.call,c=r&&i.bind(u,u);t.exports=r?function(t){return t&&c(t)}:function(t){return t&&function(){return u.apply(t,arguments)}}},5005:function(t,e,n){var r=n(7854),o=n(614),i=function(t){return o(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t]):r[t]&&r[t][e]}},8173:function(t,e,n){var r=n(9662);t.exports=function(t,e){var n=t[e];return null==n?void 0:r(n)}},7854:function(t,e,n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(t,e,n){var r=n(1702),o=n(7908),i=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return i(o(t),e)}},3501:function(t){t.exports={}},4664:function(t,e,n){var r=n(9781),o=n(7293),i=n(317);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,e,n){var r=n(1702),o=n(7293),i=n(4326),u=Object,c=r("".split);t.exports=o((function(){return!u("z").propertyIsEnumerable(0)}))?function(t){return"String"==i(t)?c(t,""):u(t)}:u},9587:function(t,e,n){var r=n(614),o=n(111),i=n(7674);t.exports=function(t,e,n){var u,c;return i&&r(u=e.constructor)&&u!==n&&o(c=u.prototype)&&c!==n.prototype&&i(t,c),t}},2788:function(t,e,n){var r=n(1702),o=n(614),i=n(5465),u=r(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return u(t)}),t.exports=i.inspectSource},8340:function(t,e,n){var r=n(111),o=n(8880);t.exports=function(t,e){r(e)&&"cause"in e&&o(t,"cause",e.cause)}},9909:function(t,e,n){var r,o,i,u=n(8536),c=n(7854),a=n(1702),s=n(111),f=n(8880),p=n(2597),l=n(5465),d=n(6200),v=n(3501),h="Object already initialized",m=c.TypeError,y=c.WeakMap,g=function(t){return i(t)?o(t):r(t,{})},b=function(t){return function(e){var n;if(!s(e)||(n=o(e)).type!==t)throw m("Incompatible receiver, "+t+" required");return n}};if(u||l.state){var x=l.state||(l.state=new y),S=a(x.get),w=a(x.has),O=a(x.set);r=function(t,e){if(w(x,t))throw new m(h);return e.facade=t,O(x,t,e),e},o=function(t){return S(x,t)||{}},i=function(t){return w(x,t)}}else{var E=d("state");v[E]=!0,r=function(t,e){if(p(t,E))throw new m(h);return e.facade=t,f(t,E,e),e},o=function(t){return p(t,E)?t[E]:{}},i=function(t){return p(t,E)}}t.exports={set:r,get:o,has:i,enforce:g,getterFor:b}},614:function(t){t.exports=function(t){return"function"==typeof t}},4705:function(t,e,n){var r=n(7293),o=n(614),i=/#|\.prototype\./,u=function(t,e){var n=a[c(t)];return n==f||n!=s&&(o(e)?r(e):!!e)},c=u.normalize=function(t){return String(t).replace(i,".").toLowerCase()},a=u.data={},s=u.NATIVE="N",f=u.POLYFILL="P";t.exports=u},111:function(t,e,n){var r=n(614);t.exports=function(t){return"object"==typeof t?null!==t:r(t)}},1913:function(t){t.exports=!1},2190:function(t,e,n){var r=n(5005),o=n(614),i=n(7976),u=n(3307),c=Object;t.exports=u?function(t){return"symbol"==typeof t}:function(t){var e=r("Symbol");return o(e)&&i(e.prototype,c(t))}},6244:function(t,e,n){var r=n(7466);t.exports=function(t){return r(t.length)}},6339:function(t,e,n){var r=n(7293),o=n(614),i=n(2597),u=n(9781),c=n(6530).CONFIGURABLE,a=n(2788),s=n(9909),f=s.enforce,p=s.get,l=Object.defineProperty,d=u&&!r((function(){return 8!==l((function(){}),"length",{value:8}).length})),v=String(String).split("String"),h=t.exports=function(t,e,n){"Symbol("===String(e).slice(0,7)&&(e="["+String(e).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!i(t,"name")||c&&t.name!==e)&&l(t,"name",{value:e,configurable:!0}),d&&n&&i(n,"arity")&&t.length!==n.arity&&l(t,"length",{value:n.arity});try{n&&i(n,"constructor")&&n.constructor?u&&l(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(o){}var r=f(t);return i(r,"source")||(r.source=v.join("string"==typeof e?e:"")),t};Function.prototype.toString=h((function(){return o(this)&&p(this).source||a(this)}),"toString")},4758:function(t){var e=Math.ceil,n=Math.floor;t.exports=Math.trunc||function(t){var r=+t;return(r>0?n:e)(r)}},133:function(t,e,n){var r=n(7392),o=n(7293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},8536:function(t,e,n){var r=n(7854),o=n(614),i=n(2788),u=r.WeakMap;t.exports=o(u)&&/native code/.test(i(u))},6277:function(t,e,n){var r=n(1340);t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:r(t)}},3070:function(t,e,n){var r=n(9781),o=n(4664),i=n(3353),u=n(9670),c=n(4948),a=TypeError,s=Object.defineProperty,f=Object.getOwnPropertyDescriptor,p="enumerable",l="configurable",d="writable";e.f=r?i?function(t,e,n){if(u(t),e=c(e),u(n),"function"===typeof t&&"prototype"===e&&"value"in n&&d in n&&!n[d]){var r=f(t,e);r&&r[d]&&(t[e]=n.value,n={configurable:l in n?n[l]:r[l],enumerable:p in n?n[p]:r[p],writable:!1})}return s(t,e,n)}:s:function(t,e,n){if(u(t),e=c(e),u(n),o)try{return s(t,e,n)}catch(r){}if("get"in n||"set"in n)throw a("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},1236:function(t,e,n){var r=n(9781),o=n(6916),i=n(5296),u=n(9114),c=n(5656),a=n(4948),s=n(2597),f=n(4664),p=Object.getOwnPropertyDescriptor;e.f=r?p:function(t,e){if(t=c(t),e=a(e),f)try{return p(t,e)}catch(n){}if(s(t,e))return u(!o(i.f,t,e),t[e])}},8006:function(t,e,n){var r=n(6324),o=n(748),i=o.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},5181:function(t,e){e.f=Object.getOwnPropertySymbols},7976:function(t,e,n){var r=n(1702);t.exports=r({}.isPrototypeOf)},6324:function(t,e,n){var r=n(1702),o=n(2597),i=n(5656),u=n(1318).indexOf,c=n(3501),a=r([].push);t.exports=function(t,e){var n,r=i(t),s=0,f=[];for(n in r)!o(c,n)&&o(r,n)&&a(f,n);while(e.length>s)o(r,n=e[s++])&&(~u(f,n)||a(f,n));return f}},5296:function(t,e){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!n.call({1:2},1);e.f=o?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},7674:function(t,e,n){var r=n(1702),o=n(9670),i=n(6077);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),t(n,[]),e=n instanceof Array}catch(u){}return function(n,r){return o(n),i(r),e?t(n,r):n.__proto__=r,n}}():void 0)},2140:function(t,e,n){var r=n(6916),o=n(614),i=n(111),u=TypeError;t.exports=function(t,e){var n,c;if("string"===e&&o(n=t.toString)&&!i(c=r(n,t)))return c;if(o(n=t.valueOf)&&!i(c=r(n,t)))return c;if("string"!==e&&o(n=t.toString)&&!i(c=r(n,t)))return c;throw u("Can't convert object to primitive value")}},3887:function(t,e,n){var r=n(5005),o=n(1702),i=n(8006),u=n(5181),c=n(9670),a=o([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=i.f(c(t)),n=u.f;return n?a(e,n(t)):e}},2626:function(t,e,n){var r=n(3070).f;t.exports=function(t,e,n){n in t||r(t,n,{configurable:!0,get:function(){return e[n]},set:function(t){e[n]=t}})}},4488:function(t){var e=TypeError;t.exports=function(t){if(void 0==t)throw e("Can't call method on "+t);return t}},6200:function(t,e,n){var r=n(2309),o=n(9711),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:function(t,e,n){var r=n(7854),o=n(3072),i="__core-js_shared__",u=r[i]||o(i,{});t.exports=u},2309:function(t,e,n){var r=n(1913),o=n(5465);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.23.2",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.23.2/LICENSE",source:"https://github.com/zloirock/core-js"})},1400:function(t,e,n){var r=n(9303),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},5656:function(t,e,n){var r=n(8361),o=n(4488);t.exports=function(t){return r(o(t))}},9303:function(t,e,n){var r=n(4758);t.exports=function(t){var e=+t;return e!==e||0===e?0:r(e)}},7466:function(t,e,n){var r=n(9303),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},7908:function(t,e,n){var r=n(4488),o=Object;t.exports=function(t){return o(r(t))}},7593:function(t,e,n){var r=n(6916),o=n(111),i=n(2190),u=n(8173),c=n(2140),a=n(5112),s=TypeError,f=a("toPrimitive");t.exports=function(t,e){if(!o(t)||i(t))return t;var n,a=u(t,f);if(a){if(void 0===e&&(e="default"),n=r(a,t,e),!o(n)||i(n))return n;throw s("Can't convert object to primitive value")}return void 0===e&&(e="number"),c(t,e)}},4948:function(t,e,n){var r=n(7593),o=n(2190);t.exports=function(t){var e=r(t,"string");return o(e)?e:e+""}},1694:function(t,e,n){var r=n(5112),o=r("toStringTag"),i={};i[o]="z",t.exports="[object z]"===String(i)},1340:function(t,e,n){var r=n(648),o=String;t.exports=function(t){if("Symbol"===r(t))throw TypeError("Cannot convert a Symbol value to a string");return o(t)}},6330:function(t){var e=String;t.exports=function(t){try{return e(t)}catch(n){return"Object"}}},9711:function(t,e,n){var r=n(1702),o=0,i=Math.random(),u=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+u(++o+i,36)}},3307:function(t,e,n){var r=n(133);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(t,e,n){var r=n(9781),o=n(7293);t.exports=r&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},5112:function(t,e,n){var r=n(7854),o=n(2309),i=n(2597),u=n(9711),c=n(133),a=n(3307),s=o("wks"),f=r.Symbol,p=f&&f["for"],l=a?f:f&&f.withoutSetter||u;t.exports=function(t){if(!i(s,t)||!c&&"string"!=typeof s[t]){var e="Symbol."+t;c&&i(f,t)?s[t]=f[t]:s[t]=a&&p?p(e):l(e)}return s[t]}},9191:function(t,e,n){"use strict";var r=n(5005),o=n(2597),i=n(8880),u=n(7976),c=n(7674),a=n(9920),s=n(2626),f=n(9587),p=n(6277),l=n(8340),d=n(7741),v=n(2914),h=n(9781),m=n(1913);t.exports=function(t,e,n,y){var g="stackTraceLimit",b=y?2:1,x=t.split("."),S=x[x.length-1],w=r.apply(null,x);if(w){var O=w.prototype;if(!m&&o(O,"cause")&&delete O.cause,!n)return w;var E=r("Error"),j=e((function(t,e){var n=p(y?e:t,void 0),r=y?new w(t):new w;return void 0!==n&&i(r,"message",n),v&&i(r,"stack",d(r.stack,2)),this&&u(O,this)&&f(r,this,j),arguments.length>b&&l(r,arguments[b]),r}));if(j.prototype=O,"Error"!==S?c?c(j,E):a(j,E,{name:!0}):h&&g in w&&(s(j,w,g),s(j,w,"prepareStackTrace")),a(j,w),!m)try{O.name!==S&&i(O,"name",S),O.constructor=j}catch(C){}return j}}},1703:function(t,e,n){var r=n(2109),o=n(7854),i=n(2104),u=n(9191),c="WebAssembly",a=o[c],s=7!==Error("e",{cause:7}).cause,f=function(t,e){var n={};n[t]=u(t,e,s),r({global:!0,constructor:!0,arity:1,forced:s},n)},p=function(t,e){if(a&&a[t]){var n={};n[t]=u(c+"."+t,e,s),r({target:c,stat:!0,constructor:!0,arity:1,forced:s},n)}};f("Error",(function(t){return function(e){return i(t,this,arguments)}})),f("EvalError",(function(t){return function(e){return i(t,this,arguments)}})),f("RangeError",(function(t){return function(e){return i(t,this,arguments)}})),f("ReferenceError",(function(t){return function(e){return i(t,this,arguments)}})),f("SyntaxError",(function(t){return function(e){return i(t,this,arguments)}})),f("TypeError",(function(t){return function(e){return i(t,this,arguments)}})),f("URIError",(function(t){return function(e){return i(t,this,arguments)}})),p("CompileError",(function(t){return function(e){return i(t,this,arguments)}})),p("LinkError",(function(t){return function(e){return i(t,this,arguments)}})),p("RuntimeError",(function(t){return function(e){return i(t,this,arguments)}}))},2913:function(t,e,n){"use strict";n.r(e);var r=n(8081),o=n.n(r),i=n(3645),u=n.n(i),c=u()(o());c.push([t.id,"",""]),e["default"]=c},3645:function(t){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r="undefined"!==typeof e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,i){"string"===typeof t&&(t=[[null,t,void 0]]);var u={};if(r)for(var c=0;c<this.length;c++){var a=this[c][0];null!=a&&(u[a]=!0)}for(var s=0;s<t.length;s++){var f=[].concat(t[s]);r&&u[f[0]]||("undefined"!==typeof i&&("undefined"===typeof f[5]||(f[1]="@layer".concat(f[5].length>0?" ".concat(f[5]):""," {").concat(f[1],"}")),f[5]=i),n&&(f[2]?(f[1]="@media ".concat(f[2]," {").concat(f[1],"}"),f[2]=n):f[2]=n),o&&(f[4]?(f[1]="@supports (".concat(f[4],") {").concat(f[1],"}"),f[4]=o):f[4]="".concat(o)),e.push(f))}},e}},8081:function(t){"use strict";t.exports=function(t){return t[1]}},3891:function(t,e,n){n(1703);const r=n(6897).R;e.s=function(t){if(t||(t=1),!n.y.meta||!n.y.meta.url)throw console.error("__system_context__",n.y),Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");n.p=r(n.y.meta.url,t)}},6897:function(t,e,n){function r(t,e){var n=document.createElement("a");n.href=t;var r="/"===n.pathname[0]?n.pathname:"/"+n.pathname,o=0,i=r.length;while(o!==e&&i>=0){var u=r[--i];"/"===u&&o++}if(o!==e)throw Error("systemjs-webpack-interop: rootDirectoryLevel ("+e+") is greater than the number of directories ("+o+") in the URL path "+t);var c=r.slice(0,i+1);return n.protocol+"//"+n.host+c}n(1703),e.R=r;var o=Number.isInteger||function(t){return"number"===typeof t&&isFinite(t)&&Math.floor(t)===t}},89:function(t,e){"use strict";e.Z=(t,e)=>{const n=t.__vccOpts||t;for(const[r,o]of e)n[r]=o;return n}},6625:function(t,e,n){var r=n(2913);r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.id,r,""]]),r.locals&&(t.exports=r.locals);var o=n(7037).Z;o("6897933c",r,!0,{sourceMap:!1,shadowMode:!1})},7037:function(t,e,n){"use strict";function r(t,e){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],u=i[0],c=i[1],a=i[2],s=i[3],f={id:t+":"+o,css:c,media:a,sourceMap:s};r[u]?r[u].parts.push(f):n.push(r[u]={id:u,parts:[f]})}return n}n.d(e,{Z:function(){return v}});var o="undefined"!==typeof document;if("undefined"!==typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},u=o&&(document.head||document.getElementsByTagName("head")[0]),c=null,a=0,s=!1,f=function(){},p=null,l="data-vue-ssr-id",d="undefined"!==typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function v(t,e,n,o){s=n,p=o||{};var u=r(t,e);return h(u),function(e){for(var n=[],o=0;o<u.length;o++){var c=u[o],a=i[c.id];a.refs--,n.push(a)}e?(u=r(t,e),h(u)):u=[];for(o=0;o<n.length;o++){a=n[o];if(0===a.refs){for(var s=0;s<a.parts.length;s++)a.parts[s]();delete i[a.id]}}}}function h(t){for(var e=0;e<t.length;e++){var n=t[e],r=i[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(y(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var u=[];for(o=0;o<n.parts.length;o++)u.push(y(n.parts[o]));i[n.id]={id:n.id,refs:1,parts:u}}}}function m(){var t=document.createElement("style");return t.type="text/css",u.appendChild(t),t}function y(t){var e,n,r=document.querySelector("style["+l+'~="'+t.id+'"]');if(r){if(s)return f;r.parentNode.removeChild(r)}if(d){var o=a++;r=c||(c=m()),e=b.bind(null,r,o,!1),n=b.bind(null,r,o,!0)}else r=m(),e=x.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}var g=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}();function b(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=g(e,o);else{var i=document.createTextNode(o),u=t.childNodes;u[e]&&t.removeChild(u[e]),u.length?t.insertBefore(i,u[e]):t.appendChild(i)}}function x(t,e){var n=e.css,r=e.media,o=e.sourceMap;if(r&&t.setAttribute("media",r),p.ssrId&&t.setAttribute(l,e.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{while(t.firstChild)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},4763:function(t){"use strict";t.exports=r},4091:function(t){"use strict";t.exports=n}},o={};function i(e){var n=o[e];if(void 0!==n)return n.exports;var r=o[e]={id:e,exports:{}};return t[e](r,r.exports,i),r.exports}!function(){i.y=e}(),function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){i.p="/"}();var u={};return function(){const t=i(3891).s;t(2)}(),function(){"use strict";i.r(u),i.d(u,{bootstrap:function(){return T},mount:function(){return k},unmount:function(){return M}});var t,e,n=i(4091),r=(i(1703),"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof i.g?i.g:"undefined"!=typeof self?self:{});function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}(function(t,e){var n;n=r,t.exports=function(t){if(t.CSS&&t.CSS.escape)return t.CSS.escape;var e=function(t){if(0==arguments.length)throw new TypeError("`CSS.escape` requires an argument.");for(var e,n=String(t),r=n.length,o=-1,i="",u=n.charCodeAt(0);++o<r;)0!=(e=n.charCodeAt(o))?i+=e>=1&&e<=31||127==e||0==o&&e>=48&&e<=57||1==o&&e>=48&&e<=57&&45==u?"\\"+e.toString(16)+" ":0==o&&1==r&&45==e||!(e>=128||45==e||95==e||e>=48&&e<=57||e>=65&&e<=90||e>=97&&e<=122)?"\\"+n.charAt(o):n.charAt(o):i+="�";return i};return t.CSS||(t.CSS={}),t.CSS.escape=e,e}(n)})(e={path:t,exports:{},require:function(t,n){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==n&&e.path)}},e.exports),e.exports;var f={appOptions:null,template:null,Vue:null,createApp:null,handleInstance:null};function p(t){if("object"!==s(t))throw new Error("single-spa-vue requires a configuration object");var e=c(c({},f),t);if(!e.Vue&&!e.createApp)throw Error("single-spa-vue must be passed opts.Vue or opts.createApp");if(!e.appOptions)throw Error("single-spa-vue must be passed opts.appOptions");if(e.appOptions.el&&"string"!=typeof e.appOptions.el&&!(e.appOptions.el instanceof HTMLElement))throw Error("single-spa-vue: appOptions.el must be a string CSS selector, an HTMLElement, or not provided at all. Was given ".concat(s(e.appOptions.el)));e.createApp=e.createApp||e.Vue&&e.Vue.createApp;var n={};return{bootstrap:l.bind(null,e,n),mount:d.bind(null,e,n),unmount:h.bind(null,e,n),update:v.bind(null,e,n)}}function l(t){return t.loadRootComponent?t.loadRootComponent().then((function(e){return t.rootComponent=e})):Promise.resolve()}function d(t,e,n){var r={};return Promise.resolve().then((function(){return function(t,e){return"function"==typeof t.appOptions?t.appOptions(e):Promise.resolve(c({},t.appOptions))}(t,n).then((function(o){var i;if(n.domElement&&!o.el&&(o.el=n.domElement),o.el)if("string"==typeof o.el){if(!(i=document.querySelector(o.el)))throw Error("If appOptions.el is provided to single-spa-vue, the dom element must exist in the dom. Was provided as ".concat(o.el))}else(i=o.el).id||(i.id="single-spa-application:".concat(n.name)),o.el="#".concat(CSS.escape(i.id));else{var u="single-spa-application:".concat(n.name);o.el="#".concat(CSS.escape(u)),(i=document.getElementById(u))||((i=document.createElement("div")).id=u,document.body.appendChild(i))}if(t.replaceMode||(o.el=o.el+" .single-spa-container"),!i.querySelector(".single-spa-container")){var a=document.createElement("div");a.className="single-spa-container",i.appendChild(a)}if(r.domEl=i,o.render||o.template||!t.rootComponent||(o.render=function(e){return e(t.rootComponent)}),o.data||(o.data={}),o.data=function(){return c(c({},o.data),n)},t.createApp){if(r.vueInstance=t.createApp(o),t.handleInstance)return Promise.resolve(t.handleInstance(r.vueInstance,n)).then((function(){return r.root=r.vueInstance.mount(o.el),e[n.name]=r,r.vueInstance}));r.root=r.vueInstance.mount(o.el)}else if(r.vueInstance=new t.Vue(o),r.vueInstance.bind&&(r.vueInstance=r.vueInstance.bind(r.vueInstance)),t.handleInstance)return Promise.resolve(t.handleInstance(r.vueInstance,n)).then((function(){return e[n.name]=r,r.vueInstance}));return e[n.name]=r,r.vueInstance}))}))}function v(t,e,n){return Promise.resolve().then((function(){var r=e[n.name],o=c(c({},t.appOptions.data||{}),n),i=r.root||r.vueInstance;for(var u in o)i[u]=o[u]}))}function h(t,e,n){return Promise.resolve().then((function(){var r=e[n.name];t.createApp?r.vueInstance.unmount(r.domEl):(r.vueInstance.$destroy(),r.vueInstance.$el.innerHTML=""),delete r.vueInstance,r.domEl&&(r.domEl.innerHTML="",delete r.domEl)}))}var m=p;function y(t,e,r,o,i,u){const c=(0,n.resolveComponent)("MiniCart");return(0,n.openBlock)(),(0,n.createElementBlock)("div",null,[(0,n.createVNode)(c,{amount:this.products.length},null,8,["amount"])])}const g=(0,n.createTextVNode)("🛒 Cart");function b(t,e,r,o,i,u){const c=(0,n.resolveComponent)("badge-button");return(0,n.openBlock)(),(0,n.createElementBlock)("div",null,[(0,n.createVNode)(c,{badgeamount:r.amount,onclick:"location.href='/root-config/#/cart'"},{default:(0,n.withCtx)((()=>[g])),_:1},8,["badgeamount"])])}var x=i(4763),S={Name:"MiniCart",props:{amount:Number},components:{BadgeButton:x.BadgeButton}},w=i(89);const O=(0,w.Z)(S,[["render",b]]);var E=O,j={name:"App",components:{MiniCart:E},data(){return{products:[]}},methods:{cartListener(){window.addEventListener("productToCart",(t=>{this.products.push(t.detail.product),this.pushProductsLocalstorage()})),window.addEventListener("removeProductFromCart",(t=>{this.products.splice(this.products.findIndex((e=>e.id==t.detail.product.id)),1),this.pushProductsLocalstorage()}))},getProductsLocalstorage(){return JSON.parse(localStorage.getItem("mfe-products"))},pushProductsLocalstorage(){localStorage.setItem("mfe-products",JSON.stringify(this.products))}},beforeMount(){this.cartListener(),null!=this.getProductsLocalstorage()&&(this.products=this.getProductsLocalstorage())}};i(6625);const C=(0,w.Z)(j,[["render",y]]);var P=C;const I=m({createApp:n.createApp,appOptions:{render(){return(0,n.h)(P,{})}}}),T=I.bootstrap,k=I.mount,M=I.unmount}(),u}())}}}));
//# sourceMappingURL=app.js.map