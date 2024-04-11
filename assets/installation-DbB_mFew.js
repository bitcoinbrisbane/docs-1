import{d as a,j as e}from"./index-CQ1xESna.js";const l={title:"Installation",description:"undefined"};function n(i){const s={a:"a",aside:"aside",code:"code",div:"div",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",span:"span",...a(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.header,{children:e.jsxs(s.h1,{id:"installation",children:["Installation",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#installation",children:e.jsx(s.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(s.p,{children:["We provide SDKs for ",e.jsx(s.a,{href:"https://github.com/0xsequence/sequence.js",children:"Web / node.js"})," and ",e.jsx(s.a,{href:"https://github.com/0xsequence/go-sequence",children:"Go"}),`.
Or if you'd like to integrate the Relayer with another language target, simply follow the API reference below
to implement the HTTP requests. Additionally, read the Typescript client source code as `,e.jsx(s.a,{href:"https://github.com/0xsequence/sequence.js/blob/master/packages/relayer/src/rpc-relayer/relayer.gen.ts",children:`reference
implementation of the Relayer API client`})," as well."]}),`
`,e.jsxs(s.aside,{"data-callout":"info",children:[e.jsxs(s.p,{children:[`Sequence Relayer offers the same API across a variety of EVM networks. Make sure to check the endpoints
and use the corresponding host for your dapp/game. For example, on Ethereum mainnet the Sequence Relayer endpoint is
`,e.jsx(s.a,{href:"https://mainnet-relayer.sequence.app",children:"https://mainnet-relayer.sequence.app"})," and Polygon is ",e.jsx(s.a,{href:"https://polygon-relayer.sequence.app",children:"https://polygon-relayer.sequence.app"}),"."]}),e.jsxs(s.p,{children:["🌄 ",e.jsx(s.a,{href:"/solutions/technical-references/chain-support",children:"View the full list of supported networks and Relayer endpoints here"})]})]}),`
`,e.jsxs(s.h3,{id:"web--nodejs-installation",children:["Web / node.js Installation",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#web--nodejs-installation",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"npm"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" install"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" 0xsequence"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" ethers"})]})})}),`
`,e.jsx(s.p,{children:"or"}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"pnpm"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" install"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" 0xsequence"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" ethers"})]})})}),`
`,e.jsx(s.p,{children:"or"}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"yarn"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" add"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" 0xsequence"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" ethers"})]})})}),`
`,e.jsxs(s.h3,{id:"go-installation",children:["Go Installation",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#go-installation",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0","data-title":"Terminal","data-lang":"bash",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"go"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" get"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" -u"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" github.com/0xsequence/go-sequence@latest"})]})})}),`
`,e.jsx(s.p,{children:"then in your app,"}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0","data-title":"Go","data-lang":"go",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"import"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ("})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'	"'}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"github.com/0xsequence/go-sequence/relayer"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"'})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:")"})})]})})]})}function t(i={}){const{wrapper:s}={...a(),...i.components};return s?e.jsx(s,{...i,children:e.jsx(n,{...i})}):n(i)}export{t as default,l as frontmatter};
