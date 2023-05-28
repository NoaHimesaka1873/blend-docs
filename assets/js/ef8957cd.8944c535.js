"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[709],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),m=i,g=c["".concat(l,".").concat(m)]||c[m]||u[m]||r;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,o[1]=s;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},43:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=n(7462),i=(n(7294),n(3905));const r={slug:"container-guide",title:"Container Management Guide/Troubleshooting",authors:["asterisk","svgaming","overwrited"],tags:["containers","settings","blend-settings","new-user"],sidebar_position:3},o=void 0,s={permalink:"/blend-docs/guides/container-guide",editUrl:"https://github.com/blend-os/docs/tree/main/guides/Container Management Guide/index.md",source:"@site/guides/Container Management Guide/index.md",title:"Container Management Guide/Troubleshooting",description:"Intro to the blendOS container manager",date:"2023-05-06T12:15:34.000Z",formattedDate:"May 6, 2023",tags:[{label:"containers",permalink:"/blend-docs/guides/tags/containers"},{label:"settings",permalink:"/blend-docs/guides/tags/settings"},{label:"blend-settings",permalink:"/blend-docs/guides/tags/blend-settings"},{label:"new-user",permalink:"/blend-docs/guides/tags/new-user"}],readingTime:2.48,hasTruncateMarker:!1,authors:[{name:"Asterisk",title:"Unofficial blendOS support/docwriter",url:"https://ast3risk-ops.carrd.co",imageURL:"https://cdn.discordapp.com/avatars/789561823863111742/ae49fe9b9765721e5693f67e11df0546.png?size=512",key:"asterisk"},{name:"SvGaming",title:"Screenshot Provider",url:"https://svgaming.serveo.net/",imageURL:"https://cdn.discordapp.com/avatars/1081647844710166548/de018b7d2ba47dd6c1e5b72d87c7bbf3.png?size=512",key:"svgaming"},{name:"Overwrited",title:"Testing/writing help",url:"https://discord.com/users/374543384339021826",imageURL:"https://cdn.discordapp.com/avatars/374543384339021826/a_9bee4db90477c97c144b6981ac47c4de.gif?size=512",key:"overwrited"}],frontMatter:{slug:"container-guide",title:"Container Management Guide/Troubleshooting",authors:["asterisk","svgaming","overwrited"],tags:["containers","settings","blend-settings","new-user"],sidebar_position:3},prevItem:{title:"Installation Guide for Macs with T2 chip",permalink:"/blend-docs/guides/installation-guide-for-macs-with-t2-chip"},nextItem:{title:"Installation Guide",permalink:"/blend-docs/guides/installation-guide"}},l={authorsImageUrls:[void 0,void 0,void 0]},d=[{value:"Intro to the blendOS container manager",id:"intro-to-the-blendos-container-manager",level:2},{value:"Using the container manager",id:"using-the-container-manager",level:3},{value:"Binary assosciations",id:"binary-assosciations",level:3},{value:"Waydroid",id:"waydroid",level:2},{value:"Aurora setup",id:"aurora-setup",level:3}],p={toc:d},c="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(c,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"intro-to-the-blendos-container-manager"},"Intro to the blendOS container manager"),(0,i.kt)("p",null,"Learn how to manage containers with this guide!"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"blendOS container manager"),", located in the ",(0,i.kt)("strong",{parentName:"p"},"blendOS Settings")," app, is how you manage containers on blendOS."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The container manager is ",(0,i.kt)("strong",{parentName:"p"},"unfinished"),", so some features will be missing, this guide will be updated as features are added.")),(0,i.kt)("h3",{id:"using-the-container-manager"},"Using the container manager"),(0,i.kt)("p",null,"To start, you will see something like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"blend-create",src:n(7444).Z,width:"1021",height:"646"})),(0,i.kt)("div",{class:"gap"}),(0,i.kt)("p",null,"Set the container distro and name in the boxes below and hit ",(0,i.kt)("inlineCode",{parentName:"p"},"Create Container"),"."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Keep in mind that when making your containers, you can name them ",(0,i.kt)("strong",{parentName:"p"},"whatever you want"),", so instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"arch")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"pacman.arch")," you could make it as ",(0,i.kt)("inlineCode",{parentName:"p"},"ar")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"pacman.ar")," to save on keystrokes.")),(0,i.kt)("p",null,"Then, you'll see some creation logs like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"blend-logs",src:n(2217).Z,width:"822",height:"671"})),(0,i.kt)("p",null,"Once the logs go away, you should see something like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"blend-manager",src:n(9863).Z,width:"1130",height:"759"})),(0,i.kt)("div",{class:"gap"}),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If you do not see this, make sure to run ",(0,i.kt)("inlineCode",{parentName:"p"},"sudo pacman -Syu")," and reboot.")),(0,i.kt)("p",null,"On the top are your ",(0,i.kt)("strong",{parentName:"p"},"containers"),", which act as a sort of distro in a distro. From here you can start, reorder (more on that later), or delete them."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"blend-containers",src:n(4706).Z,width:"909",height:"263"})),(0,i.kt)("div",{class:"gap"}),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Stop/Restart buttons coming soon!")),(0,i.kt)("p",null,"You can also make a ",(0,i.kt)("strong",{parentName:"p"},"new container")," from here, if you want to."),(0,i.kt)("h3",{id:"binary-assosciations"},"Binary assosciations"),(0,i.kt)("p",null,"On the bottom, you'll notice you can make ",(0,i.kt)("strong",{parentName:"p"},"binary assosications"),". These allow you to turn container binaries into normal (suffixless) binaries. (ex. ",(0,i.kt)("inlineCode",{parentName:"p"},"apt.ubuntu")," -> ",(0,i.kt)("inlineCode",{parentName:"p"},"apt"),")  "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"blend-a",src:n(3661).Z,width:"877",height:"247"})),(0,i.kt)("div",{class:"gap"}),"In blendOS, binaries are run like this:",(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"(BINARY_NAME).(CONTAINER_NAME) \n\n(ex. apt.ubuntu)  \n")),(0,i.kt)("p",null,"But, if we want to run a binary without the stupid suffix, we can use a ",(0,i.kt)("strong",{parentName:"p"},"Binary assosciation")," to make our lives easier. For our example, we want to make ",(0,i.kt)("inlineCode",{parentName:"p"},"apt.ubuntu")," into ",(0,i.kt)("inlineCode",{parentName:"p"},"apt")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"dnf.fedora")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"dnf")),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"DO NOT PUT PACMAN IN HERE!")),(0,i.kt)("p",{parentName:"admonition"},"blendOS already has a system pacman that you can use, just type ",(0,i.kt)("inlineCode",{parentName:"p"},"pacman --version")," to check if it's there. ",(0,i.kt)("strong",{parentName:"p"},"OVERRIDING THIS IS NOT RECOMMENDED!!!"))),(0,i.kt)("p",null,"To use these, put the binary name in the first box (ex. ",(0,i.kt)("inlineCode",{parentName:"p"},"apt"),") and the container name in the second (ex. ",(0,i.kt)("inlineCode",{parentName:"p"},"ubuntu"),")."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"blend-ex",src:n(8434).Z,width:"878",height:"251"})),(0,i.kt)("p",null,"You can now load ",(0,i.kt)("inlineCode",{parentName:"p"},"apt")," from the terminal by just typing ",(0,i.kt)("inlineCode",{parentName:"p"},"apt")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"apt.ubuntu"),"!"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"blend-ub",src:n(9116).Z,width:"326",height:"89"})),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If pacman is not working correctly, just switch to ",(0,i.kt)("inlineCode",{parentName:"p"},"pacman.<arch_container_name>"),", it should work."),(0,i.kt)("p",{parentName:"admonition"},"Report your pacman issue to ",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/m9JPmZB8Kd"},"the discord")," as well.")),(0,i.kt)("h2",{id:"waydroid"},"Waydroid"),(0,i.kt)("p",null,"In the container manager there is a Waydroid button \ud83d\udc40"),(0,i.kt)("p",null,"This button allows you to run android apps on Linux via containerization!"),(0,i.kt)("p",null,"The moment you press this button, it will initialize waydroid and let you pick one of two app stores."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Waydroid requires ",(0,i.kt)("inlineCode",{parentName:"p"},"linux-zen")," to work properly, the install instructions for that are ",(0,i.kt)("a",{parentName:"p",href:"/guides/installation-guide#step-2-installing-linux-zen-for-waydroid-support"},(0,i.kt)("strong",{parentName:"a"},"here")))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"blend-waydroid",src:n(4425).Z,width:"999",height:"671"})),(0,i.kt)("div",{class:"gap"}),(0,i.kt)("p",null,"After it initalizes (and you enter your password several times), you should see this. Once you do, ",(0,i.kt)("strong",{parentName:"p"},"reboot"),":"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"blend-w-2",src:n(9371).Z,width:"999",height:"671"})),(0,i.kt)("h3",{id:"aurora-setup"},"Aurora setup"),(0,i.kt)("p",null,"Click the ",(0,i.kt)("strong",{parentName:"p"},"Initialize")," button next to Aurora Store in the waydroid menu."))}u.isMDXComponent=!0},3661:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/blend-a-83162ff95f87a7c8f2e9c31a44847c03.png"},4706:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/blend-containers-0aaa4ee84fc1beb9d58d10d1c90f00a9.png"},7444:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/blend-create-452d1625730f28377f69f5171becce8e.png"},8434:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/blend-ex-d191c60325d72d07497dd8345ac415d1.png"},2217:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/blend-logs-5775715407ed39b05de049ef47ab22c5.png"},9116:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/blend-ub-d3b87a15a4a6a99e1fd0a15f59bd5d1a.png"},9371:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/blend-w-2-bacbf45a9758595515bfc1ebd7d25715.png"},4425:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/blend-w-86c6532088480af69d2c2660e3264b33.png"},9863:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/blend_manager-c1dc1dd7b9cf327e376b78f6c7174285.png"}}]);