(()=>{var t={757:(t,e,n)=>{t.exports=n(666)},666:t=>{var e=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",i=a.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var a=e&&e.prototype instanceof x?e:x,o=Object.create(a.prototype),c=new _(r||[]);return o._invoke=function(t,e,n){var r=d;return function(a,o){if(r===p)throw new Error("Generator is already running");if(r===m){if("throw"===a)throw o;return P()}for(n.method=a,n.arg=o;;){var c=n.delegate;if(c){var i=q(c,n);if(i){if(i===h)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var s=u(t,e,n);if("normal"===s.type){if(r=n.done?m:f,s.arg===h)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=m,n.method="throw",n.arg=s.arg)}}}(t,n,c),o}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var d="suspendedStart",f="suspendedYield",p="executing",m="completed",h={};function x(){}function g(){}function y(){}var v={};s(v,o,(function(){return this}));var w=Object.getPrototypeOf,b=w&&w(w(E([])));b&&b!==n&&r.call(b,o)&&(v=b);var k=y.prototype=x.prototype=Object.create(v);function L(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function n(a,o,c,i){var s=u(t[a],t,o);if("throw"!==s.type){var l=s.arg,d=l.value;return d&&"object"==typeof d&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,c,i)}),(function(t){n("throw",t,c,i)})):e.resolve(d).then((function(t){l.value=t,c(l)}),(function(t){return n("throw",t,c,i)}))}i(s.arg)}var a;this._invoke=function(t,r){function o(){return new e((function(e,a){n(t,r,e,a)}))}return a=a?a.then(o,o):o()}}function q(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,q(t,n),"throw"===n.method))return h;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var a=u(r,t.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,h;var o=a.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,h):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,h)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function F(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function E(t){if(t){var n=t[o];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,c=function n(){for(;++a<t.length;)if(r.call(t,a))return n.value=t[a],n.done=!1,n;return n.value=e,n.done=!0,n};return c.next=c}}return{next:P}}function P(){return{value:e,done:!0}}return g.prototype=y,s(k,"constructor",y),s(y,"constructor",g),g.displayName=s(y,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s(t,i,"GeneratorFunction")),t.prototype=Object.create(k),t},t.awrap=function(t){return{__await:t}},L(S.prototype),s(S.prototype,c,(function(){return this})),t.AsyncIterator=S,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var c=new S(l(e,n,r,a),o);return t.isGeneratorFunction(n)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},L(k),s(k,i,"Generator"),s(k,o,(function(){return this})),s(k,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=E,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(F),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function a(r,a){return i.type="throw",i.arg=t,n.next=r,a&&(n.method="next",n.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var c=this.tryEntries[o],i=c.completion;if("root"===c.tryLoc)return a("end");if(c.tryLoc<=this.prev){var s=r.call(c,"catchLoc"),l=r.call(c,"finallyLoc");if(s&&l){if(this.prev<c.catchLoc)return a(c.catchLoc,!0);if(this.prev<c.finallyLoc)return a(c.finallyLoc)}else if(s){if(this.prev<c.catchLoc)return a(c.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return a(c.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=t,c.arg=e,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),F(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;F(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:E(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),h}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}},674:(t,e,n)=>{"use strict";t.exports=n.p+"assets/images/ebabf5fab27ea4350862.svg"},321:(t,e,n)=>{"use strict";t.exports=n.p+"assets/images/567ce3fb225562622abd.jpg"},403:(t,e,n)=>{"use strict";t.exports=n.p+"assets/images/84c3ca488d80982be424.svg"},954:(t,e,n)=>{"use strict";t.exports=n.p+"assets/images/4b5ee7445b9e746106d2.png"},972:(t,e,n)=>{"use strict";t.exports=n.p+"assets/images/5cb4729d4b26f878a0fd.jpg"}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");r.length&&(t=r[r.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),(()=>{"use strict";function t(t,e,n,r,a,o,c){try{var i=t[o](c),s=i.value}catch(t){return void n(t)}i.done?e(s):Promise.resolve(s).then(r,a)}function e(e){return function(){var n=this,r=arguments;return new Promise((function(a,o){var c=e.apply(n,r);function i(e){t(c,a,o,i,s,"next",e)}function s(e){t(c,a,o,i,s,"throw",e)}i(void 0)}))}}var r=n(757),a=n.n(r);URL="https://rickandmortyapi.com/api/character/";const o=function(){var t=e(a().mark((function t(){var e,n,r,o,c=arguments;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=c.length>0&&void 0!==c[0]?c[0]:null,t.prev=1,!e){t.next=11;break}return t.next=5,fetch(URL+e);case 5:return r=t.sent,t.next=8,r.json();case 8:n=t.sent,t.next=17;break;case 11:return t.next=13,fetch(URL);case 13:return o=t.sent,t.next=16,o.json();case 16:n=t.sent;case 17:return t.abrupt("return",n);case 20:t.prev=20,t.t0=t.catch(1),console.log("ha ocurrido un error"+t.t0);case 23:case"end":return t.stop()}}),t,null,[[1,20]])})));return function(){return t.apply(this,arguments)}}();const c=function(){var t=e(a().mark((function t(){var e,n,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o();case 2:return e=t.sent,n="",e.results.map((function(t){n+='\n    <article class="bg-white w-full rounded-xl shadow-md mb-4">\n      <a href="#/'.concat(t.id,'">\n        <img\n          class="w-full h-52 md:h-60 lg:h-72 rounded-t-xl object-cover"\n          src="').concat(t.image,'"\n          alt="name"\n        />\n        <div class="flex flex-wrap justify-between px-4 py-2 md:py-4 items-center">\n          <h2 class="text-pink-700 text-lg mr-1">').concat(t.name,'</h2>\n          <h2 class="text-gray-500 text-sm">').concat(t.species,"</h2>\n        </div>\n      </a>\n    </article> \n    ")})),r='\n  <div id="box-home" class="py-2 px-4 sm:px-8 sm:py-4">\n    <div id="box-card" class=" grid grid-cols-2 gap-x-2 sm:grid-cols-3 md:gap-x-6 max-w-screen-lg mx-auto">\n      '.concat(n,"\n    </div>\n  </div>\n  "),t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();const i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return location.hash.slice(1).toLocaleLowerCase().split("/")[t]||"/"};var s=n(674);const l=function(){var t=e(a().mark((function t(){var e,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o(i());case 2:if(!(e=t.sent).error){t.next=8;break}return'\n    <section class="py-2 px-4 sm:px-8 sm:py-4">\n      <article\n        class="flex flex-col bg-white rounded-md shadow-md w-full px-8 py-6 text-center"\n      >\n        <h2 class="text-2xl md:text-4xl text-pink-700">Character not found</h2>\n      </article>\n    </section>\n    ',t.abrupt("return",'\n    <section class="py-2 px-4 sm:px-8 sm:py-4">\n      <article\n        class="flex flex-col bg-white rounded-md shadow-md w-full px-8 py-6 text-center"\n      >\n        <h2 class="text-2xl md:text-4xl text-pink-700">Character not found</h2>\n      </article>\n    </section>\n    ');case 8:return n='\n  <section class="px-4 py-2 sm:px-8 sm:py-4">\n    <div class="bg-white px-4 py-2 rounded-lg shadow max-w-screen-lg mx-auto relative">\n      <a class="absolute top-2 right-3" href="#" id="aClose">\n        <img class=" w-7 sm:w-9" src="'.concat(s,'" alt="close character">\n      </a>\n      <article>\n        <img\n          class="mx-auto mt-8 rounded-lg w-4/5 max-w-xs"\n          src="').concat(e.image,'"\n          alt="name"\n        />\n        <h2\n          class="mt-2 text-center text-2xl font-bold text-pink-600 italic drop-shadow-2xl"\n        >\n          ').concat(e.name,'\n        </h2>\n      </article>\n      <article class="mt-4 mb-2">\n        <h3 class="flex flex-wrap items-center text-lg text-teal-600 font-medium">\n          Episodes:\n          <p class="ml-1 text-gray-500 text-base font-normal">').concat(e.episode.length,'</p>\n        </h3>\n        <h3 class="flex flex-wrap items-center text-lg text-teal-600 font-medium">\n          Status:\n          <p class="ml-1 text-gray-500 text-base font-normal">').concat(e.status,'</p>\n        </h3>\n        <h3 class="flex flex-wrap items-center text-lg text-teal-600 font-medium">\n          Specie:\n          <p class="ml-1 text-gray-500 text-base font-normal">').concat(e.species,'</p>\n        </h3>\n        <h3 class="flex flex-wrap items-center text-lg text-teal-600 font-medium">\n          Gender:\n          <p class="ml-1 text-gray-500 text-base font-normal">').concat(e.gender,'</p>\n        </h3>\n        <h3 class="flex flex-wrap items-center text-lg text-teal-600 font-medium">\n          Origin:\n          <p class="ml-1 text-gray-500 text-base font-normal">').concat(e.origin.name,'</p>\n        </h3>\n        <h3 class="flex flex-wrap items-center text-lg text-teal-600 font-medium">\n          Last location:\n          <p class="ml-1 text-gray-500 text-base font-normal">').concat(e.location.name,"</p>\n        </h3>\n      </article>\n    </div>\n  </section>\n  "),t.abrupt("return",n);case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();const u=function(){return'\n    <section class="py-2 px-4 sm:px-8 sm:py-4">\n      <article\n        class="mx-auto max-w-screen-lg flex flex-col bg-white rounded-md shadow-md w-full px-8 py-6 text-center"\n      >\n        <h2 class="text-2xl md:text-4xl text-pink-700">404 not found</h2>\n      </article>\n    </section>\n    '};const d=function(t){if("/"===t){return"/"}if("about"===t){return"/:about"}if("filter"===t){return"/:filter"}if("filterc"===t){return"/:filterc/:id"}if(isNaN(t))return"/".concat(t);return"/:id"};var f=n(972);const p=function(){return'\n    <section class="py-2 px-4 sm:px-8 sm:py-4">\n      <article\n        class="mb-4 md:mb-8 flex flex-col items-center bg-white rounded-md shadow-md w-full py-2 px-4 sm:px-8 sm:py-4 text-center"\n      >\n        <h2 class="text-xl md:text-2xl text-cyan-600 mb-4 font-bold font-mono animate-pulse">A world of magic behind a button</h2>\n        <img class="contrast-100 md:w-1/3 max-w-xs rounded-lg" src="'.concat(f,'" alt="profile">\n\n        <h2 id=\'msmMachineWriteComplete\' class="mt-4 md:mt-6 text-pink-600 text-lg md:text-xl font-mono transition duration-300 ease-linear">¡Hi!, i\'m Jesús Olmos<p id="machine-write"></p></h2>\n\n        <h3 class="md:mt-2 text-gray-600">\n          I am a full stack developer focused on the back-end with experience in web development.\n          I seek to collaborate in different areas of a project, from developing Restful APIs to\n          100% dynamic web applications. I am interested in learning new technologies and languages\n          that help me grow as a developer and bring value to the enterprise.\n        </h3>\n      </article>\n\n      <article\n        class="flex flex-col bg-white rounded-md shadow-md w-full py-2 px-4 sm:px-8 sm:py-4 text-center"\n      >\n        <h2 class="text-xl md:text-2xl text-cyan-600 mb-2 font-bold font-mono animate-pulse">That was used to make this website</h2>\n\n        <h2 class="text-pink-600 text-lg md:text-xl font-mono">Rick and Morty api</h2>\n\n        <h3 class="md:mt-2 text-gray-600">\n          The Rick and Morty API is a REST and GraphQL API based on the TV show\n          Rick and Morty is the brainchild of Justin Roiland and Dan Harmon for Adult Swim.\n          With this API, he made the requests to obtain the data of the characters of this series.\n        </h3>\n      </article>\n    </section>\n\n    <footer class=" bg-neutral-800 py-2 px-4 sm:px-8 sm:py-4">\n      <h4 class="mb-2 md:mb-4 text-lg font-bold text-white text-center">Jesus Olmos | Codigoenlaweb</h4>\n      <ul class="w-full flex flex-col items-center sm:flex-row flex-wrap sm:justify-around">\n        <li class="text-gray-300 pr-1" >+58 412-0529358></li>\n        <li class="text-gray-300 px-1">olmosjesus@gmail.com</li>\n        <li class="px-1"><a class="text-gray-300 hover:text-white transition duration-150 ease-linear" href="https://github.com/codigoenlaweb" target="_blank">Github</a></li>\n        <li class="pl-1"><a class="text-gray-300 hover:text-white transition duration-150 ease-linear" href="http://www.linkedin.com/in/jesus-armando-olmos-olmos-607748228" target="_blank">Linkedin</a></li>\n      </ul>\n    </footer>\n    ')};var m=n(403);var h={"/":c,"/:id":l,"/:about":p,"/:filter":function(){return'\n    <div id="loading" class="flex text-white transition duration-300 ease-linear font-semibold absolute top-1 right-1 opacity-0 bg-cyan-500 px-4 py-2 rounded-lg">loading<img src="'.concat(m,'" alt="loading"></div>\n    <section class="py-2 px-4 sm:px-8 sm:py-4">\n      <article\n        class="flex flex-col bg-white rounded-lg shadow-md w-full px-2 py-2 sm:py-3 text-center" id="box-filter"\n      >\n        <form class="flex flex-col sm:flex-row items-center sm:justify-center">\n          <input\n            class="w-full max-w-xs placeholder:text-gray-500 transition ease-linear duration-300 focus:outline-none focus:border-cyan-500 bg-gray-200 rounded-md px-2 text-gray-600 border-2 border-solid border-gray-400"\n            type="text"\n            placeholder="Name of the character"\n            id="name"\n            name="name"\n          />\n          <div class="flex flex-wrap mt-4 sm:mt-0">\n            <select\n              class="mx-2 text-gray-600 bg-gray-200 focus:border-cyan-500 transition ease-linear duration-300 border-gray-400 border-2 border-solid rounded-md focus:outline-none px-2"\n              name="status"\n              id="status"\n            >\n              <option value="" selected>Status</option>\n              <option value="alive">Alive</option>\n              <option value="dead">Dead</option>\n              <option value="unknown">Unknown</option>\n            </select>\n\n            <input\n              class="px-2 focus:outline-none focus:bg-cyan-600 focus:border-cyan-600 focus:shadow-md hover:bg-cyan-600 hover:border-cyan-600 hover:shadow-md hover:text-gray-100 font-bold bg-cyan-500 text-white border-2 border-solid border-cyan-600 rounded-md transition duration-150 ease-linear"\n              type="submit"\n              value="filter"\n              id="filter"\n              name="filter"\n            />\n          </div>\n        </form>\n      </article>\n    </section>\n    ')},"/:filterc/:id":function(){var t=e(a().mark((function t(){var e,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o(i(2));case 2:if(!(e=t.sent).error){t.next=8;break}return'\n    <section class="py-2 px-4 sm:px-8 sm:py-4">\n      <article\n        class="flex flex-col bg-white rounded-md shadow-md w-full px-8 py-6 text-center"\n      >\n        <h2 class="text-2xl md:text-4xl text-pink-700">Character not found</h2>\n      </article>\n    </section>\n    ',t.abrupt("return",'\n    <section class="py-2 px-4 sm:px-8 sm:py-4">\n      <article\n        class="flex flex-col bg-white rounded-md shadow-md w-full px-8 py-6 text-center"\n      >\n        <h2 class="text-2xl md:text-4xl text-pink-700">Character not found</h2>\n      </article>\n    </section>\n    ');case 8:return n='\n  <section class="px-4 py-2 sm:px-8 sm:py-4">\n    <div class="bg-white px-4 py-2 rounded-lg shadow max-w-screen-lg mx-auto relative">\n      <a class="absolute top-2 right-3" href="#/filter" id="aClose">\n        <img class=" w-7 sm:w-9" src="'.concat(s,'" alt="close character">\n      </a>\n      <article>\n        <img\n          class="mx-auto mt-8 rounded-lg w-4/5 max-w-xs"\n          src="').concat(e.image,'"\n          alt="name"\n        />\n        <h2\n          class="mt-2 text-center text-2xl font-bold text-pink-600 italic drop-shadow-2xl"\n        >\n          ').concat(e.name,'\n        </h2>\n      </article>\n      <article class="mt-4 mb-2">\n        <h3 class="flex flex-wrap items-center text-lg text-teal-600 font-medium">\n          Episodes:\n          <p class="ml-1 text-gray-500 text-base font-normal">').concat(e.episode.length,'</p>\n        </h3>\n        <h3 class="flex flex-wrap items-center text-lg text-teal-600 font-medium">\n          Status:\n          <p class="ml-1 text-gray-500 text-base font-normal">').concat(e.status,'</p>\n        </h3>\n        <h3 class="flex flex-wrap items-center text-lg text-teal-600 font-medium">\n          Specie:\n          <p class="ml-1 text-gray-500 text-base font-normal">').concat(e.species,'</p>\n        </h3>\n        <h3 class="flex flex-wrap items-center text-lg text-teal-600 font-medium">\n          Gender:\n          <p class="ml-1 text-gray-500 text-base font-normal">').concat(e.gender,'</p>\n        </h3>\n        <h3 class="flex flex-wrap items-center text-lg text-teal-600 font-medium">\n          Origin:\n          <p class="ml-1 text-gray-500 text-base font-normal">').concat(e.origin.name,'</p>\n        </h3>\n        <h3 class="flex flex-wrap items-center text-lg text-teal-600 font-medium">\n          Last location:\n          <p class="ml-1 text-gray-500 text-base font-normal">').concat(e.location.name,"</p>\n        </h3>\n      </article>\n    </div>\n  </section>\n  "),t.abrupt("return",n);case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()};const x=function(){var t=e(a().mark((function t(){var e,n,r,o;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=document.querySelector("#main"),n=i(),t.next=4,d(n);case 4:return r=t.sent,o=h[r]?h[r]:u,t.t0=e,t.next=9,o();case 9:return t.t1=t.sent,t.t0.insertAdjacentHTML.call(t.t0,"beforeend",t.t1),t.abrupt("return",r);case 12:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();var g=n(321);const y=function(){document.querySelector("#main").classList.toggle("opacity-0"),document.querySelector("#main").classList.toggle("opacity-100")};const v=function(){for(var t=document.querySelector("#main").children,e=0;e<=t.length;e++){t[e];document.querySelector("#main").removeChild(t[0])}};function w(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function b(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const k=function(){function t(){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),b(this,"_page",1),b(this,"_maxPage",42),b(this,"_pageFilter",0),b(this,"_maxPageFilter",0),b(this,"_loading",!1),b(this,"URL","https://rickandmortyapi.com/api/character/"),b(this,"nameOfCharacter",""),b(this,"statusOfCharacter",""),b(this,"options",{rootMargin:"400px",threshold:.1}),b(this,"query",e(a().mark((function t(){var e,r,o;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.page++,e="".concat(n.URL,"?page=").concat(n.page),t.next=4,fetch(e);case 4:return r=t.sent,t.next=7,r.json();case 7:return o=t.sent,n.maxPage=o.info.pages,t.abrupt("return",o);case 10:case"end":return t.stop()}}),t)})))),b(this,"render",e(a().mark((function t(){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="",t.next=3,n.query();case 3:t.sent.results.map((function(t){e+='\n        <article class="bg-white w-full rounded-xl shadow-md mb-4">\n          <a href="#/'.concat(t.id,'">\n            <img\n              class="w-full h-52 md:h-60 lg:h-72 rounded-t-xl object-cover"\n              src="').concat(t.image,'"\n              alt="name"\n            />\n            <div class="flex flex-wrap justify-between px-4 py-2 md:py-4 items-center">\n              <h2 class="text-pink-700 text-lg mr-1">').concat(t.name,'</h2>\n              <h2 class="text-gray-500 text-sm">').concat(t.species,"</h2>\n            </div>\n          </a>\n        </article> \n      ")})),document.querySelector("#box-card").insertAdjacentHTML("beforeend",e);case 6:case"end":return t.stop()}}),t)})))),b(this,"callback",function(){var t=e(a().mark((function t(e,r){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:document.querySelector("#box-home")&&e[0].isIntersecting&n.page<n.maxPage&&n.render(),document.querySelector("#box-filter-character")&&e[0].isIntersecting&n.pageFilter<n.maxPageFilter&&n.loadingFilterCharacter();case 2:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()),b(this,"clickFilter",(function(t){t.target===document.querySelector("#filter")&&(t.preventDefault(),document.querySelector("#loading").classList.remove("opacity-0"),document.querySelector("#loading").classList.add("opacity-80"),n.pageFilter=0,n._loading||(n._loading=!0,n.responseFilter()),setTimeout((function(){document.querySelector("#loading")&&(document.querySelector("#loading").classList.remove("opacity-80"),document.querySelector("#loading").classList.add("opacity-0"))}),1300))})),b(this,"queryFilter",e(a().mark((function t(){var e,r,o;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.pageFilter++,n.nameOfCharacter=document.querySelector("#name").value,n.statusOfCharacter=document.querySelector("#status").value,e="".concat(n.URL,"?page=").concat(n.pageFilter,"&name=").concat(n.nameOfCharacter,"&status=").concat(n.statusOfCharacter),t.next=6,fetch(e);case 6:return r=t.sent,t.next=9,r.json();case 9:return(o=t.sent).info.pages&&(n.maxPageFilter=o.info.pages),t.abrupt("return",o);case 12:case"end":return t.stop()}}),t)})))),b(this,"responseFilter",e(a().mark((function t(){var e,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=document.querySelector("#box-filter-character"),t.prev=1,e&&e.remove(),t.next=5,n.queryFilter();case 5:return r=t.sent,t.next=8,n.paintFilter(r);case 8:setTimeout((function(){document.querySelector("#box-filter-character").classList.remove("opacity-0"),n._loading=!1}),0),t.next=17;break;case 11:t.prev=11,t.t0=t.catch(1),e&&e.remove(),n.character404(),document.querySelector("#box-filter-character").classList.remove("opacity-0"),n._loading=!1;case 17:case"end":return t.stop()}}),t,null,[[1,11]])})))),b(this,"paintFilter",function(){var t=e(a().mark((function t(e){var n,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="",e.results.map((function(t){n+='\n        <article class="bg-white w-full rounded-xl shadow-md mb-4">\n          <a href="#/filterc/'.concat(t.id,'">\n            <img\n            class="w-full h-52 md:h-60 lg:h-72 rounded-t-xl object-cover"\n            src="').concat(t.image,'"\n            alt="name"\n            />\n            <div class="flex flex-wrap justify-between px-4 py-2 md:py-4 items-center">\n              <h2 class="text-pink-700 text-lg mr-1">').concat(t.name,'</h2>\n              <h2 class="text-gray-500 text-sm">').concat(t.species,"</h2>\n            </div>\n          </a>\n        </article> \n      ")})),r='\n      <div id="box-filter-character" class="opacity-0 transition duration-300 ease-linear py-2 sm:py-4">\n        <div id="box-card" class=" grid grid-cols-2 gap-x-2 sm:grid-cols-3 md:gap-x-6 max-w-screen-lg mx-auto">\n          '.concat(n,"\n        </div>\n      </div>\n      "),t.next=5,document.querySelector("#box-filter").insertAdjacentHTML("afterend",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),b(this,"loadingFilterCharacter",e(a().mark((function t(){var e,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="",t.next=3,n.queryFilter();case 3:return r=t.sent,t.next=6,r.results.map((function(t){e+='\n        <article class="bg-white w-full rounded-xl shadow-md mb-4">\n          <a href="#/'.concat(t.id,'">\n            <img\n              class="w-full h-52 md:h-60 lg:h-72 rounded-t-xl object-cover"\n              src="').concat(t.image,'"\n              alt="name"\n            />\n            <div class="flex flex-wrap justify-between px-4 py-2 md:py-4 items-center">\n              <h2 class=" text-pink-700 text-lg mr-1">').concat(t.name,'</h2>\n              <h2 class=" text-gray-500 text-sm">').concat(t.species,"</h2>\n            </div>\n          </a>\n        </article> \n      ")}));case 6:document.querySelector("#box-card").insertAdjacentHTML("beforeend",e);case 7:case"end":return t.stop()}}),t)})))),b(this,"character404",e(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return'\n    <div id="box-filter-character" class="opacity-0 transition duration-700 ease-linear py-2 sm:py-4">\n      <div id="box-card" class="max-w-screen-lg mx-auto">\n        <p class="font-bold py-2 w-full text-center mt-2 text-pink-600 text-2xl md:text-3xl">Character not found (≥o≤)</p>\n      </div>\n    </div>\n    ',console.log(document.querySelector("#box-filter")),t.next=4,document.querySelector("#box-filter").insertAdjacentHTML("afterend",'\n    <div id="box-filter-character" class="opacity-0 transition duration-700 ease-linear py-2 sm:py-4">\n      <div id="box-card" class="max-w-screen-lg mx-auto">\n        <p class="font-bold py-2 w-full text-center mt-2 text-pink-600 text-2xl md:text-3xl">Character not found (≥o≤)</p>\n      </div>\n    </div>\n    ');case 4:case"end":return t.stop()}}),t)}))))}var n,r,o;return n=t,(r=[{key:"observer",value:function(){new IntersectionObserver(this.callback,this.options).observe(document.querySelector("#load"))}},{key:"rewind",value:function(){this.page=1}},{key:"page",get:function(){return this._page},set:function(t){return this._page=t}},{key:"maxPage",get:function(){return this._maxPage},set:function(t){return this._maxPage=t}},{key:"pageFilter",get:function(){return this._pageFilter},set:function(t){return this._pageFilter=t}},{key:"maxPageFilter",get:function(){return this._maxPageFilter},set:function(t){return this._maxPageFilter=t}}])&&w(n.prototype,r),o&&w(n,o),Object.defineProperty(n,"prototype",{writable:!1}),t}();var L=n(954);const S=function(){return'\n    <div class="py-2 px-4 sm:px-8 sm:py-4">\n      <div\n        class="px-4 py-2 md:py-4 flex flex-wrap justify-between shadow-md bg-white rounded-lg max-w-screen-lg mx-auto"\n      >\n        <img width="168" height="44" class="" src="'.concat(L,'" alt="logo" />\n        <nav class="flex flex-wrap items-center">\n          <ul class="flex">\n            <li>\n              <a id="linkHome" class="text-lg text-gray-500 font-medium mr-4 transition-all duration-300 ease-linear" href="#/"\n                >Home</a\n              >\n            </li>\n            <li>\n              <a id="linkFilter" class="text-lg text-gray-500 font-medium mr-4 transition-all duration-300 ease-linear" href="#/filter"\n                >Filter</a\n              >\n            </li>\n\n            <li>\n              <a id="linkAbout" class="text-lg text-gray-500 font-medium transition-all duration-300 ease-linear" href="#/about"\n                >About</a\n              >\n            </li>\n          </ul>\n        </nav>\n      </div>\n    </div>\n  ')};const q=function(){var t=e(a().mark((function t(){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=document.querySelector("#header"),t.t0=e,t.next=4,S();case 4:t.t1=t.sent,t.t0.insertAdjacentHTML.call(t.t0,"beforeend",t.t1);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();var j=function(t){t.classList.toggle("text-pink-600"),t.classList.toggle("text-gray-500")};const F=function(t){document.querySelector("#linkHome").classList.contains("text-pink-600")&&j(document.querySelector("#linkHome")),document.querySelector("#linkAbout").classList.contains("text-pink-600")&&j(document.querySelector("#linkAbout")),document.querySelector("#linkFilter").classList.contains("text-pink-600")&&j(document.querySelector("#linkFilter")),function(t){"/"!==t&&"/:id"!==t||j(document.querySelector("#linkHome")),"/:about"===t&&j(document.querySelector("#linkAbout")),"/:filter"!==t&&"/:filterc/:id"!==t||j(document.querySelector("#linkFilter"))}(t)};const _=function(){var t=0,e=" and i'm the creator of this website".split(""),n=setInterval((function(){document.querySelector("#machine-write")?(t<e.length&&(document.querySelector("#machine-write").textContent+=e[t],t++),t===e.length&&(clearInterval(n),document.querySelector("#msmMachineWriteComplete").classList.add("scale-110"),setTimeout((function(){document.querySelector("#msmMachineWriteComplete").classList.remove("scale-110")}),320))):(clearInterval(n),t=0)}),190)};var E=document.querySelector("#body"),P=new k;document.querySelector("link").href=g,window.addEventListener("load",e(a().mark((function t(){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return q(),t.next=3,x();case 3:return e=t.sent,t.next=6,P.observer();case 6:F(e),_();case 8:case"end":return t.stop()}}),t)})))),window.addEventListener("hashchange",(function(){y(),setTimeout(e(a().mark((function t(){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v();case 2:return t.next=4,x();case 4:e=t.sent,F(e),y(),"/:about"===e&&_();case 8:case"end":return t.stop()}}),t)}))),200),P.rewind()})),E.addEventListener("click",(function(t){P.clickFilter(t)}))})()})();