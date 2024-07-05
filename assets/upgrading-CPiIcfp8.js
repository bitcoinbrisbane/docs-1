import{d as i,j as e}from"./index-C-4qGxVd.js";const a={title:"Sequence - Web3 Gaming Platform - Unreal SDK Upgrading",description:"Documentation for Unreal SDK upgrading for the Sequence infrastructure stack for web3 gaming."};function o(r){const n={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"upgrading",children:["Upgrading",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#upgrading",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.h2,{id:"manually-upgrading-from-previous-versions",children:["Manually Upgrading from previous versions",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#manually-upgrading-from-previous-versions",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["IF you are using release Beta_1_0_3 or older please backup the values you stored in ",e.jsx(n.code,{children:"PluginConfig/Config.h"})," or ",e.jsx(n.code,{children:"Config/Config.h"}),`
After you've backed up your configuration data, Delete the entirety of the SequencePlugin directory. And drop
in the new updated version.`]}),`
`,e.jsxs(n.h3,{id:"upgrading-to-unreal-54",children:["Upgrading to Unreal 5.4",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#upgrading-to-unreal-54",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:`If your project is currently on 5.2 or 5.3, then for this version you'll want to upgrade to 5.4.
To do this close the Unreal Editor, Close your Code Editor. Right click on your Unreal Project
file. Then select Switch Unreal Engine Version, Choose 5.4 and click okay. Once done. Open your
code editor and rebuild your source code.`}),`
`,e.jsxs(n.p,{children:["As way of future proofing we recommend installing visual studio 2022 in accordance with ",e.jsx(n.a,{href:"https://dev.epicgames.com/documentation/en-us/unreal-engine/setting-up-visual-studio-development-environment-for-cplusplus-projects-in-unreal-engine",children:"these docs"}),`
as Unreal 5.4 and onward will be dropping support for visual studio 2019.`]})]})}function d(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(o,{...r})}):o(r)}export{d as default,a as frontmatter};
