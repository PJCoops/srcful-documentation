"use strict";(self.webpackChunksrcful_documentation=self.webpackChunksrcful_documentation||[]).push([[1215],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),d=a,m=p["".concat(c,".").concat(d)]||p[d]||h[d]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9527:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:2},i="Participate",s={unversionedId:"getting-started/participate",id:"getting-started/participate",title:"Participate",description:"There are two primary ways to get involved with Srcful and start participating in the energy revolution at this stage:",source:"@site/docs/getting-started/participate.md",sourceDirName:"getting-started",slug:"/getting-started/participate",permalink:"/getting-started/participate",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction to Srcful",permalink:"/getting-started/introduction"},next:{title:"Setting up",permalink:"/getting-started/setting-up"}},c={},l=[{value:"1. Get a Srcful Energy Gateway",id:"1-get-a-srcful-energy-gateway",level:2},{value:"Requirements",id:"requirements",level:3},{value:"2. Support the Srcful Community",id:"2-support-the-srcful-community",level:2}],u={toc:l},p="wrapper";function h(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"participate"},"Participate"),(0,a.kt)("p",null,"There are two primary ways to get involved with Srcful and start participating in the energy revolution at this stage:"),(0,a.kt)("h2",{id:"1-get-a-srcful-energy-gateway"},"1. Get a Srcful Energy Gateway"),(0,a.kt)("p",null,"By getting a Srcful Energy Gateway, you can start validating green energy from your Distributed Energy Resource (DER) and earning tokens for contributing to the decentralized energy grid. To get started, visit the ",(0,a.kt)("a",{parentName:"p",href:"https://forms.gle/nAdpEi4oCuNeBHto9"},"Notice of Interest form")," to register your interest in the Srcful Energy Gateway. Once you've signed up, we'll notify you when the Gateway becomes available for purchase."),(0,a.kt)("h3",{id:"requirements"},"Requirements"),(0,a.kt)("p",null,"To install a Srcful Energy Gateway, there are several requirements that must be met to ensure optimal performance and compatibility with the Srcful network."),(0,a.kt)("p",null,"Firstly, the ",(0,a.kt)("strong",{parentName:"p"},"Modbus RTU protocol must be activated")," on the inverter. This is necessary to enable the communication between the inverter and the Energy Gateway, which allows for the measurement and validation of the energy produced by the DER."),(0,a.kt)("p",null,"In addition, the Energy Gateway requires an ",(0,a.kt)("strong",{parentName:"p"},"RS485 physical interface")," for data communication. This is necessary for the Gateway to send the data collected from the inverter to the Srcful network for validation through Proof-of-Source (PoS)."),(0,a.kt)("p",null,"The maximum size of the DER that can be connected to the Srcful network is ",(0,a.kt)("strong",{parentName:"p"},"100 kW"),". This limit ensures that the network remains stable and that the validation process remains efficient, while also encouraging the clustering of smaller DERs to create a more reliable and decentralized energy system."),(0,a.kt)("p",null,"It is also important to have access to ",(0,a.kt)("strong",{parentName:"p"},"Wi-Fi and power delivery near")," the DER to ensure that the Energy Gateway can function properly and connect to the Srcful network. This will ensure that the data collected from the DER is accurate and that the validation process is reliable."),(0,a.kt)("p",null,"Finally, to receive payments for their green energy contributions through Proof-of-Source, DER owners must have a ",(0,a.kt)("strong",{parentName:"p"},"Solana wallet"),". This is necessary to receive SRC tokens as rewards, which can be used to participate in the energy marketplace or exchanged for other cryptocurrencies or fiat currency on various cryptocurrency exchanges."),(0,a.kt)("p",null,"Overall, meeting these requirements will ensure that the Srcful Energy Gateway can function optimally and that DER owners can participate in the Srcful network, contribute to a more sustainable and equitable energy system, and earn rewards for their green energy contributions."),(0,a.kt)("h2",{id:"2-support-the-srcful-community"},"2. Support the Srcful Community"),(0,a.kt)("p",null,"You can also support the community surrounding Srcful by contributing to our open-source projects on Github, participating in discussions on our Discord server, and following us on Twitter to stay up-to-date with the latest news and developments. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Github:")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/srcfl"},"https://github.com/srcfl")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Discord:")," ",(0,a.kt)("a",{parentName:"li",href:"https://discordapp.com/invite/tux5qPDcWw"},"https://discord.gg/xQ4W7VhN4m")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Twitter:")," ",(0,a.kt)("a",{parentName:"li",href:"https://twitter.com/srcful"},"https://twitter.com/SrcfulEnergy"))),(0,a.kt)("p",null,"Whether you choose to get a Srcful Energy Gateway or support the community through Github, Discord, and Twitter, we're thrilled to have you on board as we work towards a more sustainable and decentralized energy system. Join us today and be a part of the energy revolution!"))}h.isMDXComponent=!0}}]);