(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[509],{9511:(e,t,s)=>{Promise.resolve().then(s.bind(s,7555))},7555:(e,t,s)=>{"use strict";s.d(t,{default:()=>en});var a=s(7437),r=s(4609),l=s(2421),n=s(2265),i=s(9354);let o=r.fC,d=n.forwardRef((e,t)=>{let{className:s,...l}=e;return(0,a.jsx)(r.ck,{ref:t,className:(0,i.cn)("border-b",s),...l})});d.displayName="AccordionItem";let c=n.forwardRef((e,t)=>{let{className:s,children:n,...o}=e;return(0,a.jsx)(r.h4,{className:"flex",children:(0,a.jsxs)(r.xz,{ref:t,className:(0,i.cn)("flex flex-1 items-center justify-between py-1 pr-2 font-medium transition-all [&[data-state=open]>svg]:rotate-180",s),...o,children:[n,(0,a.jsx)(l.Z,{className:"h-4 w-4 shrink-0 transition-transform duration-200"})]})})});c.displayName=r.xz.displayName;let m=n.forwardRef((e,t)=>{let{className:s,children:l,...n}=e;return(0,a.jsx)(r.VY,{ref:t,className:"overflow-hidden py-1 text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...n,children:(0,a.jsx)("div",{className:(0,i.cn)("pt-0",s),children:l})})});m.displayName=r.VY.displayName;var x=s(4839),f=s(9338),u=s(7138),h=s(6463);let p=(0,s(2218).j)("inline-flex items-center rounded-full border px-1.5 py-0.1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent  text-primary-foreground border-primary-foreground",secondary:"border-transparent  text-secondary-foreground border-secondary-foreground",destructive:"border-transparent  text-destructive-foreground border-destructive-foreground",outline:"text-foreground",success:"text-green-500 border-green-500",warning:"text-yellow-500 border-yellow-500",failure:"text-red-500 border-red-500"}},defaultVariants:{variant:"default"}});function g(e){let{className:t,variant:s,...r}=e;return(0,a.jsx)("div",{className:(0,i.cn)(p({variant:s}),t),...r})}let j=e=>{let{items:t,selectedScript:s,setSelectedScript:r}=e,[l,i]=(0,n.useState)([]),[p,j]=(0,n.useState)(void 0),v=(0,n.useRef)({}),N=(0,h.useSearchParams)();(0,n.useEffect)(()=>{t&&i(t)},[t]),(0,n.useEffect)(()=>{let e=N.get("id");e?r(e):r(null)},[N,r]);let b=(0,n.useCallback)(e=>{r(e)},[r]);return(0,n.useEffect)(()=>{if(s){let e=l.find(e=>e.expand.items.some(e=>e.title===s));e&&(j(e.catagoryName),b(s))}},[s,l,b]),(0,a.jsxs)("div",{className:"flex min-w-72 flex-col sm:max-w-72",children:[(0,a.jsxs)("div",{className:"flex items-end justify-between pb-4",children:[(0,a.jsx)("h1",{className:"text-xl font-bold",children:"Categories"}),(0,a.jsxs)("p",{className:"text-xs italic text-muted-foreground",children:[l.reduce((e,t)=>e+t.expand.items.length,0)," ","Total scripts"]})]}),(0,a.jsx)("div",{className:"rounded-lg",children:(0,a.jsx)(o,{type:"single",value:p,onValueChange:e=>{j(e)},collapsible:!0,children:l.map(e=>(0,a.jsxs)(d,{value:e.catagoryName,className:(0,x.Z)("sm:text-md flex flex-col border-none",{"rounded-lg bg-accent/30":p===e.catagoryName}),children:[(0,a.jsxs)(c,{className:(0,x.Z)("duration-250 rounded-lg transition ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-accent",{"":p===e.catagoryName}),children:[(0,a.jsxs)("div",{className:"mr-2 flex w-full items-center justify-between",children:[(0,a.jsxs)("span",{className:"pl-2",children:[e.catagoryName," "]}),(0,a.jsx)("span",{className:"rounded-full bg-gray-200 px-2 py-1 text-xs text-muted-foreground hover:no-underline dark:bg-blue-800/20",children:e.expand.items.length})]})," "]}),(0,a.jsx)(m,{"data-state":p===e.catagoryName?"open":"closed",className:"pt-0",children:e.expand.items.slice().sort((e,t)=>e.title.localeCompare(t.title)).map((e,t)=>(0,a.jsx)("div",{children:(0,a.jsxs)(u.default,{href:{pathname:"/scripts",query:{id:e.title}},prefetch:!1,className:"flex cursor-pointer items-center justify-between gap-1 px-1 py-1 text-muted-foreground hover:rounded-lg hover:bg-accent/60 hover:dark:bg-accent/20 ".concat(s===e.title?"rounded-lg bg-accent font-semibold dark:bg-accent/30 dark:text-white":""),onClick:()=>b(e.title),ref:t=>{v.current[e.title]=t},children:[(0,a.jsx)("img",{src:e.logo,alt:e.title,className:"mr-1 w-4 h-4 rounded-full"}),(0,a.jsxs)("span",{className:"flex items-center gap-2",children:[e.title,e.isMostViewed&&(0,a.jsx)(f.Z,{className:"h-3 w-3 text-yellow-500"})]}),(0,a.jsx)(g,{className:(0,x.Z)("ml-auto w-[37.69px] justify-center text-center",{"text-primary/75":"VM"===e.item_type,"text-yellow-500/75":"LXC"===e.item_type,"border-none":""===e.item_type,hidden:!["VM","LXC",""].includes(e.item_type)}),children:e.item_type})]})},t))})]},e.id+":category"))})})]})};var v=s(9973);function N(e){let t=new Date(e),s=t.getFullYear(),a=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0");return"".concat(s,"-").concat(a,"-").concat(r)}var b=s(4697),w=s(9733),y=s(8185),C=s(2628),k=s(6648);function _(e){let{items:t}=e,[s,r]=(0,n.useState)(1),l=(0,n.useMemo)(()=>t?t.flatMap(e=>e.expand.items||[]).sort((e,t)=>new Date(t.created).getTime()-new Date(e.created).getTime()):[],[t]),i=3*s;return t?(0,a.jsxs)("div",{className:"",children:[l.length>0&&(0,a.jsxs)("div",{className:"flex w-full items-center justify-between",children:[(0,a.jsx)("h2",{className:"text-lg font-semibold",children:"Newest Scripts"}),(0,a.jsxs)("div",{className:"flex items-center justify-end gap-1",children:[s>1&&(0,a.jsx)("div",{className:"cursor-pointer select-none p-2 text-sm font-semibold",onClick:()=>{r(e=>e-1)},children:"Previous"}),i<l.length&&(0,a.jsx)("div",{onClick:()=>{r(e=>e+1)},className:"cursor-pointer select-none p-2 text-sm font-semibold",children:1===s?"More..":"Next"})]})]}),(0,a.jsx)("div",{className:"min-w flex w-full flex-row flex-wrap gap-4",children:l.slice((s-1)*3,i).map(e=>(0,a.jsxs)(y.Zb,{className:"min-w-[250px] flex-1 flex-grow bg-accent/30",children:[(0,a.jsx)(y.Ol,{children:(0,a.jsxs)(y.ll,{className:"flex items-center gap-3",children:[(0,a.jsx)("div",{className:"flex h-16 w-16 items-center justify-center rounded-lg bg-accent p-1",children:(0,a.jsx)(k.default,{src:e.logo,height:64,width:64,alt:"",className:"h-11 w-11 object-contain"})}),(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsxs)("p",{className:"text-lg line-clamp-1",children:[e.title," ",e.item_type]}),(0,a.jsxs)("p",{className:"text-sm text-muted-foreground flex items-center gap-1",children:[(0,a.jsx)(C.Z,{className:"h-4 w-4"}),N(e.created)]})]})]})}),(0,a.jsx)(y.aY,{children:(0,a.jsx)(y.SZ,{className:"line-clamp-3 text-card-foreground",children:e.description})}),(0,a.jsx)(y.eW,{className:"",children:(0,a.jsx)(w.z,{asChild:!0,variant:"outline",children:(0,a.jsx)(u.default,{href:{pathname:"/scripts",query:{id:e.title}},children:"View Script"})})})]},e.id))})]}):null}function S(e){let{items:t}=e,[s,r]=(0,n.useState)(1),l=(0,n.useMemo)(()=>t?t.flatMap(e=>e.expand.items||[]).filter(e=>e.isMostViewed).map(e=>({...e})):[],[t]),i=3*s;return(0,a.jsxs)("div",{className:"",children:[l.length>0&&(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("h2",{className:"text-lg font-semibold",children:"Most Viewed Scripts"})}),(0,a.jsx)("div",{className:"min-w flex w-full flex-row flex-wrap gap-4",children:l.slice((s-1)*3,i).map(e=>(0,a.jsxs)(y.Zb,{className:"min-w-[250px] flex-1 flex-grow bg-accent/30",children:[(0,a.jsx)(y.Ol,{children:(0,a.jsxs)(y.ll,{className:"flex items-center gap-3",children:[(0,a.jsx)("div",{className:"flex max-h-16 min-h-16 min-w-16 max-w-16 items-center justify-center rounded-lg bg-accent p-1",children:(0,a.jsx)(k.default,{src:e.logo,height:64,width:64,alt:"",className:"h-11 w-11 object-contain"})}),(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsxs)("p",{className:"line-clamp-1 text-lg",children:[e.title," ",e.item_type]}),(0,a.jsxs)("p",{className:"flex items-center gap-1 text-sm text-muted-foreground",children:[(0,a.jsx)(C.Z,{className:"h-4 w-4"}),N(e.created)]})]})]})}),(0,a.jsx)(y.aY,{children:(0,a.jsx)(y.SZ,{className:"line-clamp-3 text-card-foreground break-words",children:e.description})}),(0,a.jsx)(y.eW,{className:"",children:(0,a.jsx)(w.z,{asChild:!0,variant:"outline",children:(0,a.jsx)(u.default,{href:{pathname:"/scripts",query:{id:e.title}},prefetch:!1,children:"View Script"})})})]},e.id))}),(0,a.jsxs)("div",{className:"flex justify-end gap-1 p-2",children:[s>1&&(0,a.jsx)(w.z,{onClick:()=>{r(e=>e-1)},variant:"outline",children:"Previous"}),i<l.length&&(0,a.jsx)(w.z,{onClick:()=>{r(e=>e+1)},variant:"outline",children:1===s?"More..":"Next"})]})]})}var z=s(8504),Z=s(7776);function V(e,t){navigator.clipboard.writeText(t),Z.Am.success("copied ".concat(e," to clipboard"),{icon:(0,a.jsx)(z.Z,{className:"h-4 w-4"})})}var E=s(6884);function P(e){return e.split(/`([^`]*)`/g).map((e,t)=>t%2==1?(0,a.jsxs)("span",{className:"bg-secondary py-1 px-2 rounded-lg inline-flex items-center gap-2",children:[e,(0,a.jsx)(E.Z,{className:"size-3 cursor-pointer",onClick:()=>V("command",e)})]},t):e)}var R=s(690);function D(e){var t,s;let{item:r}=e;return(0,a.jsx)(a.Fragment,{children:(null===(s=r.expand)||void 0===s?void 0:null===(t=s.alerts)||void 0===t?void 0:t.length)>0&&r.expand.alerts.map((e,t)=>(0,a.jsx)("div",{className:"mt-4 flex flex-col gap-2",children:(0,a.jsxs)("p",{className:"inline-flex items-center gap-2 rounded-lg border border-red-500/25 bg-destructive/25 p-2 pl-4 text-sm",children:[(0,a.jsx)(R.Z,{className:"h-4 min-h-4 w-4 min-w-4"}),(0,a.jsx)("span",{children:P(e.content)})]})},t))})}var T=s(4436),M=s(3397),A=s(3787),F=s(7746);function Y(e){let{item:t}=e,s=(0,n.useMemo)(()=>/(https:\/\/github\.com\/tteck\/Proxmox\/raw\/main\/(ct|misc|vm)\/([^\/]+)\.sh)/,[]),r=e=>{if(e.includes("/pve/"));else if(e.includes("/ct/"))return e.replace("/ct/","/install/").replace(/\.sh$/,"-install.sh");return e},l=(0,n.useMemo)(()=>{if(t.installCommand){let e=t.installCommand.match(s);return e?r(e[0]):null}return null},[t.installCommand,s]);return(0,a.jsxs)("div",{className:"flex flex-wrap justify-end gap-2",children:[t.website&&(0,a.jsx)(w.z,{variant:"secondary",asChild:!0,children:(0,a.jsx)(u.default,{target:"_blank",href:t.website,children:(0,a.jsxs)("span",{className:"flex items-center gap-2",children:[(0,a.jsx)(T.Z,{className:"h-4 w-4"})," Website"]})})}),t.documentation&&(0,a.jsx)(w.z,{variant:"secondary",asChild:!0,children:(0,a.jsx)(u.default,{target:"_blank",href:t.documentation,children:(0,a.jsxs)("span",{className:"flex items-center gap-2",children:[(0,a.jsx)(M.Z,{className:"h-4 w-4"}),"Documentation"]})})}),t.post_install&&(0,a.jsx)(w.z,{variant:"secondary",asChild:!0,children:(0,a.jsx)(u.default,{target:"_blank",href:t.post_install,children:(0,a.jsxs)("span",{className:"flex items-center gap-2",children:[(0,a.jsx)(A.Z,{className:"h-4 w-4"}),"Post Install"]})})}),t.installCommand&&l&&(0,a.jsx)(w.z,{variant:"secondary",asChild:!0,children:(0,a.jsx)(u.default,{target:"_blank",href:r(l),children:(0,a.jsxs)("span",{className:"flex items-center gap-2",children:[(0,a.jsx)(F.Z,{className:"h-4 w-4"}),"Source Code"]})})})]})}function L(e){var t;let{item:s}=e,r=(null==s?void 0:null===(t=s.expand)||void 0===t?void 0:t.default_login)!==void 0;return(0,a.jsx)("div",{children:r&&(0,a.jsxs)("div",{className:"mt-4 rounded-lg border bg-accent/50",children:[(0,a.jsx)("div",{className:"flex gap-3 px-4 py-2",children:(0,a.jsx)("h2",{className:"text-lg font-semibold",children:"Default Login Credentials"})}),(0,a.jsx)(v.Z,{className:"w-full"}),(0,a.jsxs)("div",{className:"flex flex-col gap-2 p-4",children:[(0,a.jsxs)("p",{className:"mb-2 text-sm",children:["You can use the following credentials to login to the ","",s.title," ",s.item_type,"."]}),(0,a.jsxs)("div",{className:"text-sm",children:["Username:"," ",(0,a.jsx)(w.z,{variant:"secondary",size:"null",onClick:()=>V("username",s.expand.default_login.username),children:s.expand.default_login.username})]}),(0,a.jsxs)("div",{className:"text-sm",children:["Password:"," ",(0,a.jsx)(w.z,{variant:"secondary",size:"null",onClick:()=>V("password",s.expand.default_login.password),children:s.expand.default_login.password})]})]})]})})}function H(e){var t;let{item:s}=e,r=(null==s?void 0:null===(t=s.expand)||void 0===t?void 0:t.alpine_script)!==void 0;return(0,a.jsxs)(a.Fragment,{children:[s.default_cpu&&(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{className:"text-md font-semibold",children:"Default settings"}),(0,a.jsxs)("p",{className:"text-sm text-muted-foreground",children:["CPU: ",s.default_cpu]}),(0,a.jsxs)("p",{className:"text-sm text-muted-foreground",children:["RAM: ",s.default_ram]}),(0,a.jsxs)("p",{className:"text-sm text-muted-foreground",children:["HDD: ",s.default_hdd]})]}),r&&(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{className:"text-md font-semibold",children:"Default Alpine settings"}),(0,a.jsxs)("p",{className:"text-sm text-muted-foreground",children:["CPU: ",s.expand.alpine_script.default_cpu]}),(0,a.jsxs)("p",{className:"text-sm text-muted-foreground",children:["RAM: ",s.expand.alpine_script.default_ram]}),(0,a.jsxs)("p",{className:"text-sm text-muted-foreground",children:["HDD: ",s.expand.alpine_script.default_hdd]})]})]})}function I(e){let{item:t}=e;return(0,a.jsxs)("div",{className:"p-2",children:[(0,a.jsx)("h2",{className:"mb-2 max-w-prose text-lg font-semibold",children:"Description"}),(0,a.jsx)("p",{className:"text-sm text-muted-foreground",children:P(t.description)})]})}var O=s(2468),U=s(2140);function W(e){let{children:t}=e,[s,r]=(0,n.useState)(!1),l=window.innerWidth<=640;(0,n.useEffect)(()=>{s&&setTimeout(()=>{r(!1)},2e3)},[s]);let o=(e,t)=>{navigator.clipboard.writeText(t),r(!0),null===localStorage.getItem("warning")&&(localStorage.setItem("warning","1"),setTimeout(()=>{Z.Am.error("be careful when copying scripts from the internet. Always remember check the source!",{duration:8e3})},500))};return(0,a.jsx)("div",{className:"mt-4 flex",children:(0,a.jsxs)(y.Zb,{className:"flex items-center overflow-x-auto bg-primary-foreground pl-4",children:[(0,a.jsx)("div",{className:"overflow-x-auto whitespace-pre-wrap text-nowrap break-all pr-4 text-sm",children:!l&&t?t:"Copy install command"}),(0,a.jsxs)("div",{className:(0,i.cn)(" right-0 cursor-pointer bg-muted px-3 py-4"),onClick:()=>o("install command",t),children:[s?(0,a.jsx)(O.Z,{className:"h-4 w-4"}):(0,a.jsx)(U.Z,{className:"h-4 w-4"}),(0,a.jsx)("span",{className:"sr-only",children:"Copy"})]})]})})}var X=s(6486);let q=X.fC,J=n.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(X.aV,{ref:t,className:(0,i.cn)("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",s),...r})});J.displayName=X.aV.displayName;let B=n.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(X.xz,{ref:t,className:(0,i.cn)("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",s),...r})});B.displayName=X.xz.displayName;let $=n.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(X.VY,{ref:t,className:(0,i.cn)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",s),...r})});function G(e){let{item:t}=e,{title:s,item_type:r,installCommand:l,expand:n}=t,i=(null==n?void 0:n.alpine_script)!==void 0,o=function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("p",{className:"text-sm mt-2",children:e?(0,a.jsxs)(a.Fragment,{children:["As an alternative option, you can use Alpine Linux and the ",s," ","package to create a ",s," ",r," container with faster creation time and minimal system resource usage. You are also obliged to adhere to updates provided by the package maintainer."]}):r?(0,a.jsxs)(a.Fragment,{children:["To create a new Proxmox VE ",s," ",r,", run the command below in the Proxmox VE Shell."]}):(0,a.jsxs)(a.Fragment,{children:["To use the ",s," script, run the command below in the shell."]})}),e&&(0,a.jsxs)("p",{className:"mt-2 text-sm",children:["To create a new Proxmox VE Alpine-",s," ",r,", run the command below in the Proxmox VE Shell"]})]})};return(0,a.jsx)("div",{className:"p-4",children:i?(0,a.jsxs)(q,{defaultValue:"default",className:"mt-2 w-full max-w-4xl",children:[(0,a.jsxs)(J,{children:[(0,a.jsx)(B,{value:"default",children:"Default"}),(0,a.jsx)(B,{value:"alpine",children:"Alpine Linux"})]}),(0,a.jsxs)($,{value:"default",children:[o(),(0,a.jsx)(W,{children:l})]}),(0,a.jsx)($,{value:"alpine",children:n.alpine_script&&(0,a.jsxs)(a.Fragment,{children:[o(!0),(0,a.jsx)(W,{children:n.alpine_script.installCommand})]})})]}):(0,a.jsxs)(a.Fragment,{children:[o(),l&&(0,a.jsx)(W,{children:l})]})})}$.displayName=X.VY.displayName;let K=e=>{let{label:t,value:s}=e;return(0,a.jsx)(w.z,{variant:"secondary",size:"sm",onClick:()=>V(t,String(s)),children:s})};function Q(e){let{item:t}=e,{interface:s,port:r}=t;return(0,a.jsx)("div",{className:"flex flex-col gap-2",children:s||r&&0!==r?(0,a.jsxs)("div",{className:"flex items-center justify-end",children:[(0,a.jsx)("h2",{className:"mr-2 text-end text-lg font-semibold",children:s?"Interface:":"Default Port:"})," ",(0,a.jsx)(K,{label:s?"interface":"port",value:s||r})]}):null})}var ee=s(9736);let et=e=>{let{variant:t,label:s,content:r}=e;return(0,a.jsx)(ee.pn,{children:(0,a.jsxs)(ee.u,{delayDuration:100,children:[(0,a.jsx)(ee.aJ,{className:"flex items-center",children:(0,a.jsx)(g,{variant:t,children:s})}),(0,a.jsx)(ee._v,{side:"bottom",className:"text-sm",children:r})]})})};function es(e){let{item:t}=e;return(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[t.privileged&&(0,a.jsx)(et,{variant:"warning",label:"Privileged",content:"This script will be run in a privileged LXC"}),t.isUpdateable&&(0,a.jsx)(et,{variant:"success",label:"Updateable",content:"To Update ".concat(t.title,", run the command below (or type update) in the LXC Console.")})]})}let ea=function(e){let{items:t,selectedScript:s,setSelectedScript:r}=e,[l,i]=(0,n.useState)(null),o=(0,h.useSearchParams)().get("id");return(0,n.useEffect)(()=>{if(t){let e=t.map(e=>e.expand.items).flat().find(e=>e.title===o);i(e||null),e&&!s&&r(e.title)}},[o,t,r,s]),(0,a.jsxs)(a.Fragment,{children:[l&&(0,a.jsx)("div",{className:"mr-7 mt-0 flex w-full min-w-fit",children:(0,a.jsx)("div",{className:"flex w-full min-w-fit",children:(0,a.jsxs)("div",{className:"flex w-full flex-col",children:[(0,a.jsxs)("div",{className:"flex h-[36px] min-w-max items-center justify-between",children:[(0,a.jsx)("h2",{className:"text-lg font-semibold",children:"Selected Script"}),(0,a.jsx)(b.Z,{onClick:()=>{window.history.pushState({},document.title,window.location.pathname),r(null)},className:"cursor-pointer"})]}),(0,a.jsxs)("div",{className:"rounded-lg border bg-accent/20 p-4",children:[(0,a.jsxs)("div",{className:"flex justify-between",children:[(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)("img",{className:"h-32 w-32 rounded-lg bg-accent/60 object-contain p-3 shadow-md",src:l.logo,alt:l.title}),(0,a.jsx)("div",{className:"ml-4 flex flex-col justify-between",children:(0,a.jsxs)("div",{className:"flex h-full w-full flex-col justify-between",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h1",{className:"text-lg font-semibold",children:l.title}),(0,a.jsxs)("p",{className:"w-full text-sm text-muted-foreground",children:["Date added: ",N(l.created)]})]}),(0,a.jsx)("div",{className:"flex gap-5",children:(0,a.jsx)(H,{item:l})})]})})]}),(0,a.jsxs)("div",{className:"hidden flex-col justify-between gap-2 sm:flex",children:[(0,a.jsx)(Q,{item:l}),(0,a.jsx)(Y,{item:l})]})]}),(0,a.jsx)(v.Z,{className:"mt-4"}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"mt-4",children:[(0,a.jsx)(I,{item:l}),(0,a.jsx)(D,{item:l})]}),(0,a.jsxs)("div",{className:"mt-4 rounded-lg border bg-accent/50",children:[(0,a.jsxs)("div",{className:"flex gap-3 px-4 py-2",children:[(0,a.jsxs)("h2",{className:"text-lg font-semibold",children:["How to ",l.item_type?"install":"use"]}),(0,a.jsx)(es,{item:l})]}),(0,a.jsx)(v.Z,{className:"w-full"}),(0,a.jsx)(G,{item:l})]})]}),(0,a.jsx)(L,{item:l})]})]})})}),o?null:(0,a.jsxs)("div",{className:"flex w-full flex-col gap-5",children:[(0,a.jsx)(_,{items:t}),(0,a.jsx)(S,{items:t})]})]})};var er=s(3274);let el=e=>e.sort((e,t)=>"Proxmox VE Tools"===e.catagoryName&&"Proxmox VE Tools"!==t.catagoryName?-1:"Proxmox VE Tools"!==e.catagoryName&&"Proxmox VE Tools"===t.catagoryName?1:e.catagoryName.localeCompare(t.catagoryName));function en(){let[e,t]=(0,n.useState)([]),[s,r]=(0,n.useState)(null),[l,i]=(0,n.useState)(!0);return((0,n.useEffect)(()=>{(async()=>{try{let e=await fetch("api/categories");if(!e.ok)throw Error("Failed to fetch categories");let s=await e.json();if(0===s.length)throw Error("Empty response");let a=el(s);t(a),i(!1)}catch(e){console.error(e),i(!1)}})()},[]),l)?(0,a.jsx)("div",{className:"flex h-screen w-full flex-col items-center justify-center gap-5 bg-background px-4 md:px-6",children:(0,a.jsx)("div",{className:"space-y-2 text-center",children:(0,a.jsx)(er.Z,{className:"h-10 w-10 animate-spin"})})}):(0,a.jsx)("div",{className:"mb-3",children:(0,a.jsxs)("div",{className:"mt-20 flex sm:px-4 xl:px-0",children:[(0,a.jsx)("div",{className:"hidden sm:flex",children:(0,a.jsx)(j,{items:e,selectedScript:s,setSelectedScript:r})}),(0,a.jsx)("div",{className:"mx-7 w-full sm:mx-0 sm:ml-7",children:(0,a.jsx)(ea,{items:e,selectedScript:s,setSelectedScript:r})})]})})}},9733:(e,t,s)=>{"use strict";s.d(t,{d:()=>o,z:()=>d});var a=s(7437),r=s(9354),l=s(3355),n=s(2218),i=s(2265);let o=(0,n.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline",expandIcon:"group relative text-primary-foreground bg-primary hover:bg-primary/90",ringHover:"bg-primary text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:ring-2 hover:ring-primary/90 hover:ring-offset-2",shine:"text-primary-foreground animate-shine bg-gradient-to-r from-primary via-primary/75 to-primary bg-[length:400%_100%] ",gooeyRight:"text-primary-foreground relative bg-primary z-0 overflow-hidden transition-all duration-500 before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:bg-gradient-to-r from-zinc-400 before:transition-transform before:duration-1000  hover:before:translate-x-[0%] hover:before:translate-y-[0%] ",gooeyLeft:"text-primary-foreground relative bg-primary z-0 overflow-hidden transition-all duration-500 after:absolute after:inset-0 after:-z-10 after:translate-x-[-150%] after:translate-y-[150%] after:scale-[2.5] after:rounded-[100%] after:bg-gradient-to-l from-zinc-400 after:transition-transform after:duration-1000  hover:after:translate-x-[0%] hover:after:translate-y-[0%] ",linkHover1:"relative after:absolute after:bg-primary after:bottom-2 after:h-[1px] after:w-2/3 after:origin-bottom-left after:scale-x-100 hover:after:origin-bottom-right hover:after:scale-x-0 after:transition-transform after:ease-in-out after:duration-300",linkHover2:"relative after:absolute after:bg-primary after:bottom-2 after:h-[1px] after:w-2/3 after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-9 w-9    ",null:"py-1 px-3 rouded-xs"}},defaultVariants:{variant:"default",size:"default"}}),d=i.forwardRef((e,t)=>{let{className:s,variant:n,size:i,asChild:d=!1,Icon:c,iconPlacement:m,...x}=e,f=d?l.g7:"button";return(0,a.jsxs)(f,{className:(0,r.cn)(o({variant:n,size:i,className:s})),ref:t,...x,children:[c&&"left"===m&&(0,a.jsx)("div",{className:"group-hover:translate-x-100 w-0 translate-x-[0%] pr-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:pr-2 group-hover:opacity-100",children:(0,a.jsx)(c,{})}),(0,a.jsx)(l.A4,{children:x.children}),c&&"right"===m&&(0,a.jsx)("div",{className:"w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-2 group-hover:opacity-100",children:(0,a.jsx)(c,{})})]})});d.displayName="Button"},8185:(e,t,s)=>{"use strict";s.d(t,{Ol:()=>i,SZ:()=>d,Zb:()=>n,aY:()=>c,eW:()=>m,ll:()=>o});var a=s(7437),r=s(2265),l=s(9354);let n=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("div",{ref:t,className:(0,l.cn)("rounded-lg border text-card-foreground shadow-sm",s),...r})});n.displayName="Card";let i=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("div",{ref:t,className:(0,l.cn)("flex flex-col space-y-1.5 p-4",s),...r})});i.displayName="CardHeader";let o=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("h3",{ref:t,className:(0,l.cn)("text-2xl font-semibold leading-none tracking-tight",s),...r})});o.displayName="CardTitle";let d=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("p",{ref:t,className:(0,l.cn)("min-h-[40px] text-sm text-muted-foreground sm:min-h-[60px]",s),...r})});d.displayName="CardDescription";let c=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("div",{ref:t,className:(0,l.cn)("p-4 pt-0",s),...r})});c.displayName="CardContent";let m=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("div",{ref:t,className:(0,l.cn)("mt-auto items-center p-4 pt-0",s),...r})});m.displayName="CardFooter"},9973:(e,t,s)=>{"use strict";s.d(t,{Z:()=>i});var a=s(7437),r=s(325),l=s(2265),n=s(9354);let i=l.forwardRef((e,t)=>{let{className:s,orientation:l="horizontal",decorative:i=!0,...o}=e;return(0,a.jsx)(r.f,{ref:t,decorative:i,orientation:l,className:(0,n.cn)("shrink-0 bg-border","horizontal"===l?"h-[1px] w-full":"h-full w-[1px]",s),...o})});i.displayName=r.f.displayName},9736:(e,t,s)=>{"use strict";s.d(t,{_v:()=>c,aJ:()=>d,pn:()=>i,u:()=>o});var a=s(7437),r=s(9587),l=s(2265),n=s(9354);let i=r.zt,o=r.fC,d=r.xz,c=l.forwardRef((e,t)=>{let{className:s,sideOffset:l=4,...i}=e;return(0,a.jsx)(r.VY,{ref:t,sideOffset:l,className:(0,n.cn)("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",s),...i})});c.displayName=r.VY.displayName},9354:(e,t,s)=>{"use strict";s.d(t,{cn:()=>l});var a=s(4839),r=s(6164);function l(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return(0,r.m6)((0,a.W)(t))}}},e=>{var t=t=>e(e.s=t);e.O(0,[639,924,33,506,130,215,744],()=>t(9511)),_N_E=e.O()}]);