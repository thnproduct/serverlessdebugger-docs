"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[117],{3905:function(n,e,t){t.d(e,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function c(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function a(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var l=r.createContext({}),u=function(n){var e=r.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):c(c({},e),n)),t},p=function(n){var e=u(n.components);return r.createElement(l.Provider,{value:e},n.children)},s={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,i=n.originalType,l=n.parentName,p=a(n,["components","mdxType","originalType","parentName"]),f=u(t),d=o,g=f["".concat(l,".").concat(d)]||f[d]||s[d]||i;return t?r.createElement(g,c(c({ref:e},p),{},{components:t})):r.createElement(g,c({ref:e},p))}));function d(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var i=t.length,c=new Array(i);c[0]=f;var a={};for(var l in e)hasOwnProperty.call(e,l)&&(a[l]=e[l]);a.originalType=n,a.mdxType="string"==typeof n?n:o,c[1]=a;for(var u=2;u<i;u++)c[u]=t[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},4711:function(n,e,t){t.r(e),t.d(e,{Highlight:function(){return f},assets:function(){return p},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return s}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),c=["components"],a={title:"Python",slug:"/configuration/python",sidebar_position:2},l=void 0,u={unversionedId:"configuration/python-config",id:"configuration/python-config",title:"Python",description:"MDX and React Components",source:"@site/docs/configuration/python-config.mdx",sourceDirName:"configuration",slug:"/configuration/python",permalink:"/configuration/python",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Python",slug:"/configuration/python",sidebar_position:2},sidebar:"sidebar",previous:{title:"NodeJS",permalink:"/configuration/nodejs"},next:{title:"Java",permalink:"/configuration/java"}},p={},s=[{value:"MDX and React Components",id:"mdx-and-react-components",level:2}],f=function(n){var e=n.children,t=n.color;return(0,i.kt)("span",{style:{backgroundColor:t,borderRadius:"20px",color:"#fff",padding:"10px",cursor:"pointer"},onClick:function(){alert("You clicked the color "+t+" with label "+e)}},e)},d={toc:s,Highlight:f};function g(n){var e=n.components,t=(0,o.Z)(n,c);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"mdx-and-react-components"},"MDX and React Components"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://mdxjs.com/"},"MDX")," can make your documentation more ",(0,i.kt)("strong",{parentName:"p"},"interactive")," and allows using any ",(0,i.kt)("strong",{parentName:"p"},"React components inside Markdown"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"export const Highlight = ({children, color}) => (\n  <span\n    style={{\n      backgroundColor: color,\n      borderRadius: '20px',\n      color: '#fff',\n      padding: '10px',\n      cursor: 'pointer',\n    }}\n    onClick={() => {\n      alert(`You clicked the color ${color} with label ${children}`)\n    }}>\n    {children}\n  </span>\n);\n\nThis is <Highlight color=\"#25c2a0\">Docusaurus green</Highlight> !\n\nThis is <Highlight color=\"#1877F2\">Facebook blue</Highlight> !\n")),(0,i.kt)("p",null,"This is ",(0,i.kt)(f,{color:"#25c2a0",mdxType:"Highlight"},"Docusaurus green")," !"))}g.isMDXComponent=!0}}]);