(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"./src/content_update.mdx":function(e,t,n){"use strict";n.r(t);var o=n("./node_modules/react/index.js"),r=n.n(o),a=n("./node_modules/@mdx-js/tag/dist/index.js"),c=n("./node_modules/docz/dist/index.m.js"),i=n("./src/site/data/poc.js"),s=n("./src/editor/components/Dante/Dante.js"),p=n("./node_modules/react-powerplug/dist/react-powerplug.esm.js");function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function f(e,t){return!t||"object"!==l(t)&&"function"!==typeof t?d(e):t}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var b=function(e){function t(){var e,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return f(o,(n=o=f(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),Object.defineProperty(d(o),"state",{configurable:!0,enumerable:!0,writable:!0,value:{content:i.b}}),n))}var n,o,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,r.a.Component),n=t,(o=[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(s.a,{content:this.state.content}),r.a.createElement("button",{onClick:function(){return e.setState({content:i.e})}},"load other content"))}}])&&u(n.prototype,o),a&&u(n,a),t}();function y(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}b.__docgenInfo={description:"",methods:[],displayName:"EditorContent"};t.default=function(e){var t=e.components,n=y(e,["components"]);return r.a.createElement(a.MDXTag,{name:"wrapper",components:t},r.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"content-switch"}},r.a.createElement(a.MDXTag,{name:"a",components:t,parentName:"h2",props:{"aria-hidden":!0,href:"#content-switch"}},r.a.createElement(a.MDXTag,{name:"span",components:t,parentName:"a",props:{className:"icon-link"}},"#")),"Content Switch"),r.a.createElement(a.MDXTag,{name:"p",components:t},"This example demonstrate how Dante editor react to content prop change"),r.a.createElement(c.d,{__position:0,__code:"<ContentState />",__scope:{props:n,Lorem:i.b,h1:i.e,Dante:s.a,State:p.a,Toggle:p.b,ContentState:b}},r.a.createElement(b,null)))}}}]);