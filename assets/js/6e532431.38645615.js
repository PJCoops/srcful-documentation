"use strict";(self.webpackChunksrcful_documentation=self.webpackChunksrcful_documentation||[]).push([[244],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>s});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),u=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=u(t.components);return a.createElement(o.Provider,{value:e},t.children)},m="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),m=u(n),k=r,s=m["".concat(o,".").concat(k)]||m[k]||g[k]||l;return n?a.createElement(s,i(i({ref:e},d),{},{components:n})):a.createElement(s,i({ref:e},d))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p[m]="string"==typeof t?t:r,i[1]=p;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},8880:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:1,slug:"/energy-gateway/compatible-inverter/"},i="Overview",p={unversionedId:"energy-gateway/compatible-inverter/overview",id:"energy-gateway/compatible-inverter/overview",title:"Overview",description:"You will need a compatible DER (Distributed Energy Resource) to connect your Energy Gateway.",source:"@site/docs/energy-gateway/compatible-inverter/overview.md",sourceDirName:"energy-gateway/compatible-inverter",slug:"/energy-gateway/compatible-inverter/",permalink:"/energy-gateway/compatible-inverter/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/energy-gateway/compatible-inverter/"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/energy-gateway/"},next:{title:"Fronius",permalink:"/energy-gateway/compatible-inverter/fronius"}},o={},u=[{value:"Modbus SunSpec Support",id:"modbus-sunspec-support",level:2},{value:"List of explicitly supported DERs",id:"list-of-explicitly-supported-ders",level:2},{value:"Can&#39;t find your specific DER model?",id:"cant-find-your-specific-der-model",level:2}],d={toc:u},m="wrapper";function g(t){let{components:e,...n}=t;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"overview"},"Overview"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You will need a ",(0,r.kt)("strong",{parentName:"p"},"compatible")," DER (Distributed Energy Resource) to connect your Energy Gateway.")),(0,r.kt)("h2",{id:"modbus-sunspec-support"},"Modbus SunSpec Support"),(0,r.kt)("p",null,"Good news for many DER owners! Our Energy Gateway supports DERs that implement the Modbus SunSpec standard. This means:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Our Energy Gateway is compatible with all DERs that conform to the Modbus SunSpec standard.")),(0,r.kt)("p",null,"Modbus SunSpec combines the Modbus communication protocol with the SunSpec data model standard. This combination is widely adopted by DER manufacturers. Our support for Modbus SunSpec significantly expands the range of compatible devices beyond our explicitly listed DER brands."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Even if you don't see your specific DER model in our compatibility list below, it may still work with our Energy Gateway if it's SunSpec compliant.")),(0,r.kt)("h2",{id:"list-of-explicitly-supported-ders"},"List of explicitly supported DERs"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"(Last updated 2024-09-16)")),(0,r.kt)("p",null,"We continuously add DERs and update the table below."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u2705 - Supported"),(0,r.kt)("li",{parentName:"ul"},"\u274c - Not Supported"),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udd1c - To be evaluated")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"DER"),(0,r.kt)("th",{parentName:"tr",align:null},"Read"),(0,r.kt)("th",{parentName:"tr",align:null},"Control"),(0,r.kt)("th",{parentName:"tr",align:null},"Status"),(0,r.kt)("th",{parentName:"tr",align:null},"Compatible Models"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Sungrow"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"Partial support"),(0,r.kt)("td",{parentName:"tr",align:null},"Evaluating"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/energy-gateway/compatible-inverter/sungrow"},"View Details"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Solaredge"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd1c"),(0,r.kt)("td",{parentName:"tr",align:null},"Evaluating"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/energy-gateway/compatible-inverter/solaredge"},"View Details"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Huawei"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd1c"),(0,r.kt)("td",{parentName:"tr",align:null},"Evaluating"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/energy-gateway/compatible-inverter/huawei"},"View Details"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Deye"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd1c"),(0,r.kt)("td",{parentName:"tr",align:null},"Evaluating"),(0,r.kt)("td",{parentName:"tr",align:null},"Coming soon")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Fronius"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd1c"),(0,r.kt)("td",{parentName:"tr",align:null},"Evaluating"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/energy-gateway/compatible-inverter/fronius"},"View Details"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SMA"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd1c"),(0,r.kt)("td",{parentName:"tr",align:null},"Evaluating"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/energy-gateway/compatible-inverter/sma"},"View Details"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ferroamp"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd1c"),(0,r.kt)("td",{parentName:"tr",align:null},"Evaluating"),(0,r.kt)("td",{parentName:"tr",align:null},"Coming soon")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Growatt"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd1c"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd1c"),(0,r.kt)("td",{parentName:"tr",align:null},"In Development"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GoodWe"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd1c"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd1c"),(0,r.kt)("td",{parentName:"tr",align:null},"In Development"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Fox-Ess"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd1c"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd1c"),(0,r.kt)("td",{parentName:"tr",align:null},"Planned"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Solis"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd1c"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd1c"),(0,r.kt)("td",{parentName:"tr",align:null},"Planned"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Enphase"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd1c"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd1c"),(0,r.kt)("td",{parentName:"tr",align:null},"Planned"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Homegrid"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd1c"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd1c"),(0,r.kt)("td",{parentName:"tr",align:null},"Planned"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Sol-ark"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd1c"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd1c"),(0,r.kt)("td",{parentName:"tr",align:null},"Planned"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Eg4"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd1c"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd1c"),(0,r.kt)("td",{parentName:"tr",align:null},"Planned"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Sofar-solar"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd1c"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd1c"),(0,r.kt)("td",{parentName:"tr",align:null},"Planned"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Livoltek"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd1c"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd1c"),(0,r.kt)("td",{parentName:"tr",align:null},"Planned"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Lenercom"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd1c"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udd1c"),(0,r.kt)("td",{parentName:"tr",align:null},"Planned"),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("h2",{id:"cant-find-your-specific-der-model"},"Can't find your specific DER model?"),(0,r.kt)("p",null,"If you can't find your DER in the table above, or if you're unsure about Modbus SunSpec compatibility, don't hesitate to reach out:"),(0,r.kt)("a",{class:"button button--primary",href:"https://discord.gg/srcful"},"Join Our Discord for Support"))}g.isMDXComponent=!0}}]);