(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"./src/decorators.mdx":function(e,t,o){"use strict";o.r(t);var n=o("./node_modules/react/index.js"),r=o.n(n),a=o("./node_modules/@mdx-js/tag/dist/index.js"),s=o("./node_modules/docz/dist/index.m.js"),c=o("./src/site/data/poc.js"),d=o("./src/editor/components/Dante/Dante.js"),i=o("./src/editor/components/blocks/code.js"),m=o("./node_modules/prismjs/prism.js"),p=o.n(m),l=o("./src/editor/components/decorators/prism.js"),u=o("./src/editor/components/decorators/link.js"),f=o("./src/editor/utils/find_entities.js"),j=o("./node_modules/draft-js/lib/Draft.js"),D=o("./node_modules/draft-js-multidecorators/index.js"),g=o.n(D);function b(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}t.default=function(e){var t=e.components,o=b(e,["components"]);return r.a.createElement(a.MDXTag,{name:"wrapper",components:t},r.a.createElement(a.MDXTag,{name:"h1",components:t,props:{id:"decorators"}},r.a.createElement(a.MDXTag,{name:"a",components:t,parentName:"h1",props:{"aria-hidden":!0,href:"#decorators"}},r.a.createElement(a.MDXTag,{name:"span",components:t,parentName:"a",props:{className:"icon-link"}},"#")),"Decorators"),r.a.createElement(a.MDXTag,{name:"p",components:t},'To support flexibility for custom rich text, Draft provides a "decorator" system.\n',r.a.createElement(a.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://draftjs.org/docs/advanced-topics-decorators.html"}},"https://draftjs.org/docs/advanced-topics-decorators.html")),r.a.createElement(a.MDXTag,{name:"p",components:t},"Here is an example of the default decorators "),r.a.createElement(s.d,{__position:0,__code:"<Dante\n  content={code}\n  debug={true}\n  widgets={[CodeBlockConfig()]}\n  decorators={context => {\n    return new MultiDecorator([\n      PrismDraftDecorator({ prism: Prism }),\n      new CompositeDecorator([\n        {\n          strategy: findEntities.bind(null, 'LINK', context),\n          component: Link,\n        },\n      ]),\n    ])\n  }}\n/>",__scope:{props:o,code:c.d,Dante:d.a,CodeBlockConfig:i.a,Prism:p.a,PrismDraftDecorator:l.a,Link:u.a,findEntities:f.a,CompositeDecorator:j.CompositeDecorator,MultiDecorator:g.a}},r.a.createElement(d.a,{content:c.d,debug:!0,widgets:[Object(i.a)()],decorators:function(e){return new g.a([Object(l.a)({prism:p.a}),new j.CompositeDecorator([{strategy:f.a.bind(null,"LINK",e),component:u.a}])])}})))}}}]);