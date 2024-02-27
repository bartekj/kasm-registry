(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[858],{4873:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/new/[[...workspace]]",function(){return s(5790)}])},5790:function(e,a,s){"use strict";s.r(a),s.d(a,{__N_SSG:function(){return u},default:function(){return p}});var t=s(5893),l=s(9008),r=s.n(l),i=s(7294),n=s(3162),o=s(8813),c=s(3157),d=s(1163),m=JSON.parse('{"wZ":[{"description":"Chromium is a free and open-source browser, primarily developed and maintained by Google.","docker_registry":"https://index.docker.io/v1/","image_src":"chromium.png","name":"kasmweb/chromium:develop","run_config":{"hostname":"kasm"},"exec_config":{"go":{"cmd":"bash -c \'/dockerstartup/custom_startup.sh --go --url \\"$KASM_URL\\"\'"},"assign":{"cmd":"bash -c \'/dockerstartup/custom_startup.sh --assign --url \\"$KASM_URL\\"\'"}},"categories":["Browser"],"friendly_name":"Chromium","architecture":["amd64","arm64"],"compatibility":["1.14.x","1.15.x"],"uncompressed_size_mb":2170,"sha":"89fd7f3c7b8aa362c03d73bc6afeb532e6fa2216"},{"friendly_name":"Debian Bookworm","image_src":"debian.svg","description":"Debian is a Linux distribution composed of free and open-source software, developed by the community-supported Debian Project","name":"bartekj/kasm-images/kasm-debian-bookworm-desktop:latest","cores":2,"memory":2768,"gpu_count":0,"cpu_allocation_method":"Inherit","docker_registry":"https://ghcr.io/","categories":["Desktop","Productivity","Development"],"require_gpu":false,"enabled":true,"image_type":"Container","notes":"The Kasm Debian Bookworm Workspace requires libseccomp => 2.5.3 to run.\\n\\nThis can be checked by running runc --version\\n\\nIf you still want to run Debian Bookworm but do not have the minimum required libseccomp version, it can be run in an unsecure manner by adding: {\\"security_opt\\":[\\"seccomp=unconfined\\"]} to the Docker Run Config Override (JSON) setting above.\\n\\nNOTE: This will run the Workspace without the docker seccomp sandbox and will significantly reduce the amount of protection that Kasm Workspaces can provide.\\n","architecture":["amd64","arm64"],"compatibility":["1.15.x"],"uncompressed_size_mb":7310,"sha":"fbfba8dc88f89b8fbebafac015b0e418e8624528"},{"description":"Obsidian is a free note taking app.","docker_registry":"https://index.docker.io/v1/","image_src":"obsidian.ico","name":"zaratul9/obsidian-workspace:1.14.3","run_config":{"hostname":"kasm"},"exec_config":{"go":{"cmd":"bash -c \'/dockerstartup/custom_startup.sh --go --url \\"$KASM_URL\\"\'"},"assign":{"cmd":"bash -c \'/dockerstartup/custom_startup.sh --assign --url \\"$KASM_URL\\"\'"}},"categories":["Productivity"],"friendly_name":"Obsidian","architecture":["amd64"],"compatibility":["1.15.x","1.14.x"],"uncompressed_size_mb":2550,"sha":"4a135ab573d89e327c48a1130efc4737c94843d1"}]}'),u=!0;function p(e){let{workspace:a}=e,l=(0,i.useRef)(null),u=(0,i.useRef)(null),p=(0,i.useRef)(null),[h,f]=(0,i.useState)(null),[x,g]=(0,i.useState)(null),[v,y]=(0,i.useState)(null),[w,_]=(0,i.useState)("png"),[j,k]=(0,i.useState)(null),N={friendly_name:null,image_src:null,description:null,name:null,cores:2,memory:2768,gpu_count:0,cpu_allocation_method:"Inherit",docker_registry:"https://index.docker.io/v1/",categories:[],require_gpu:!1,enabled:!0,image_type:"Container"},[C,S]=(0,i.useState)(N);(0,d.useRouter)(),(0,i.useEffect)(()=>{if(null===a)p.current.value="",l.current.value="",u.current.value="",f(null),g(null),y(null),S(N);else if(a&&a[0]){let e=m.wZ.find(e=>e.name===atob(a[0]));if(delete e.sha,p.current.value=e.description,l.current.value=e.name,u.current.value=e.friendly_name,e.categories){let s=[];e.categories.map(e=>s.push({label:e,value:e})),f(s)}if(e.architecture){let t=[];e.architecture.map(e=>t.push({label:e,value:e})),g(t)}k("../../icons/"+e.image_src),S({...C,...e})}},[a]);let D={control:(e,a)=>({...e,background:"#f1f5f9",borderRadius:"0.5rem",borderColor:"#94a3b8"}),multiValue(e,a){let{data:s}=a;return{...e,backgroundColor:"#dde6f1"}}};(0,i.useEffect)(()=>{if(C&&C.friendly_name){let e={...C};e.image_src=L(e.friendly_name)+"."+w,S(e)}},[w]);let O=e=>{let a={...C};a.categories=e.map(e=>e.value),S(a);let s=[];a.categories.map(e=>s.push({label:e,value:e})),f(s)},R=e=>{let a={...C};a.architecture=e.map(e=>e.value),S(a);let s=[];a.architecture.map(e=>s.push({label:e,value:e})),g(s)};function L(e){var a=e.toString().toLowerCase();return(a=(a=(a=a.split(/\&+/).join("-and-")).split(/[^a-z0-9]/).join("-")).split(/-+/).join("-")).trim("-")}let A=()=>{var e=s(5733);let a=new e,t=a.folder(C.friendly_name);if(t.file("workspace.json",JSON.stringify(C,null,2)),v)t.file(C.image_src,v.file);else if(j){let l=fetch(j).then(e=>e.blob());t.file(C.image_src,l)}a.generateAsync({type:"blob"}).then(function(e){(0,n.saveAs)(e,L(C.friendly_name)+".zip")})},I=e=>{let a={...C};a[e.target.name]=e.target.value,"icon"===e.target.name&&(delete a.icon,y({value:e.target.value,file:e.target.files[0]}),_(e.target.value.substr(e.target.value.lastIndexOf(".")+1)),k(null)),a.friendly_name&&(a.image_src=L(a.friendly_name)+"."+w),S(a)};return(0,t.jsxs)("div",{className:"",children:[(0,t.jsxs)(r(),{children:[(0,t.jsx)("title",{children:"Kasm Workspaces"}),(0,t.jsx)("meta",{name:"description",content:"List of workspaces for Kasm Webspaces"}),(0,t.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,t.jsxs)("div",{className:"flex flex-col lg:flex-row w-full my-20 max-w-6xl text-sm rounded-xl overflow-hidden mx-auto",children:[(0,t.jsxs)("div",{className:"w-full lg:w-1/2 p-16 bg-slate-300",children:[(0,t.jsx)("h1",{className:"text-2xl font-medium mb-2",children:"Add Workspace"}),(0,t.jsxs)("div",{className:"flex flex-col",children:[(0,t.jsx)("p",{className:"mb-8 opacity-70",children:'This page is designed to allow admins to generate the JSON they need to upload to the "workspaces" directory. It also allows end users to see what settings are needed if they want to manually copy them into a new workspace.'}),(0,t.jsx)("label",{className:"mb-2 font-medium",children:"Icon"}),(0,t.jsx)("input",{type:"file",name:"icon",onChange:I,className:"mb-2 p-2 rounded-lg bg-slate-100 border border-solid border-slate-400"}),(0,t.jsx)("p",{className:"mb-6 opacity-70",children:"Select the image to use, image will be renamed when it's downloaded."}),(0,t.jsx)("label",{className:"mb-2 font-medium",children:"Friendly Name"}),(0,t.jsx)("input",{ref:u,name:"friendly_name",onChange:I,className:"mb-2 p-2 rounded-lg bg-slate-100 border border-solid border-slate-400"}),(0,t.jsx)("p",{className:"mb-6 opacity-70",children:"This is the name that will show for users"}),(0,t.jsx)("label",{className:"mb-2 font-medium",children:"Categories"}),(0,t.jsx)(o.Z,{instanceId:"1",name:"categories",isMulti:!0,options:[{value:"Browser",label:"Browser"},{value:"Communication",label:"Communication"},{value:"Desktop",label:"Desktop"},{value:"Development",label:"Development"},{value:"Games",label:"Games"},{value:"Multimedia",label:"Multimedia"},{value:"Office",label:"Office"},{value:"Privacy",label:"Privacy"},{value:"Productivity",label:"Productivity"},{value:"Remote Access",label:"Remote Access"}],onChange:O,styles:D,value:h}),(0,t.jsx)("p",{className:"mb-6 mt-2 opacity-70",children:"You can select from the available option or create new ones."}),(0,t.jsx)("label",{className:"mb-2 font-medium",children:"Description"}),(0,t.jsx)("input",{ref:p,name:"description",onChange:I,className:"mb-2 p-2 rounded-lg bg-slate-100 border border-solid border-slate-400"}),(0,t.jsx)("p",{className:"mb-6 opacity-70",children:"A short description about the workspace"}),(0,t.jsx)("label",{className:"mb-2 font-medium",children:"Docker Image"}),(0,t.jsx)("input",{ref:l,name:"name",onChange:I,className:"mb-2 p-2 rounded-lg bg-slate-100 border border-solid border-slate-400"}),(0,t.jsxs)("p",{className:"mb-6 opacity-70",children:["The docker image to use, i.e. ",(0,t.jsx)("code",{className:"text-xs p-1 px-2 rounded bg-white/40",children:"kasmweb/filezilla:develop"})]}),(0,t.jsx)("label",{className:"mb-2 font-medium",children:"Architecture"}),(0,t.jsx)(c.ZP,{instanceId:"2",name:"architecture",isMulti:!0,options:[{value:"amd64",label:"amd64"},{value:"arm64",label:"arm64"}],onChange:R,styles:D,value:x}),(0,t.jsx)("p",{className:"mb-6 mt-2 opacity-70",children:"You can select from the available option or create new ones."})]})]}),(0,t.jsxs)("div",{className:"w-full lg:w-1/2 p-16 bg-slate-100",children:[(0,t.jsx)(b,{workspace:C,icon:v,inlineImage:j}),(0,t.jsx)("pre",{className:"my-8 overflow-y-auto text-xs",children:JSON.stringify({...C},null,2)}),(0,t.jsx)("button",{onClick:A,className:"p-4 relative z-10 px-5 bg-cyan-700 border-t border-white/20 border-solid hover:bg-slate-900 transition m-2 rounded items-center text-white/70 flex cursor-pointer",children:"Download"})]})]})]})}function b(e){let{workspace:a,icon:s,inlineImage:l}=e,[r,n]=(0,i.useState)(!1),o=null;if(s){let c=new Blob([s.file]);o=URL.createObjectURL(c),a.image_src=o}return(0,t.jsx)("div",{className:"rounded-xl group w-full shadow max-w-xs relative overflow-hidden h-[100px] border border-solid flex flex-col justify-between bg-slate-300 border-slate-400/50",children:(0,t.jsxs)("div",{className:"absolute top-0 left-0 right-0 h-[200px] transition-all"+(r?" -translate-y-1/2":""),children:[(0,t.jsxs)("div",{onClick:()=>n(!0),className:"h-[100px] p-4 relative overflow-hidden cursor-pointer",children:[(0,t.jsx)("img",{className:"h-[90px] group-hover:scale-150 transition-all absolute left-2 top-1",src:a.image_src,onError(e){null!==l&&(e.target.src=l)},alt:a.friendly_name}),(0,t.jsxs)("div",{className:"flex-col pl-28",children:[(0,t.jsx)("div",{className:"font-bold",children:a.friendly_name||"Friendly Name"}),(0,t.jsxs)("div",{className:"text-xs mb-2 flex gap-2",children:["Bartekj Kasm registry"," ",(0,t.jsx)("span",{children:void 0})]}),(0,t.jsx)("div",{className:" h-8"})]}),(0,t.jsxs)("div",{className:"absolute bottom-0 left-0 right-0 bg-slate-400/20 h-8 text-[10px] flex items-center justify-center",children:[a.architecture&&a.architecture.map((e,a)=>(0,t.jsx)("span",{className:"p-2 py-0 m-[1px] inline-block rounded bg-slate-400/70",children:e},"arch"+a)),a.categories.map((e,a)=>(0,t.jsx)("span",{className:"p-2 py-0 m-[1px] inline-block rounded bg-slate-300/90",children:e},"cat"+a))]}),!1]}),(0,t.jsxs)("div",{className:"h-[100px] text-xs relative p-2 pl-4 flex",children:[(0,t.jsx)("button",{className:"absolute right-2 top-2 bg-slate-100 rounded-full flex justify-center items-center h-6 w-6",onClick:()=>n(!1),children:(0,t.jsx)("svg",{style:{height:"14px"},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",children:(0,t.jsx)("path",{d:"M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"})})}),(0,t.jsxs)("div",{className:"flex flex-col flex-grow",children:[(0,t.jsx)("div",{className:"font-bold",children:a.friendly_name})," ",a.description]}),(0,t.jsxs)("div",{className:"flex flex-col justify-end gap-1",children:[(0,t.jsx)("div",{className:"text-xs text-color w-full p-4 py-1 rounded-lg bg-black/5 flex justify-center items-center",children:"Edit"}),(0,t.jsx)("button",{className:"text-xs w-full p-4 py-1 rounded-lg flex justify-center items-center bg-blue-500 font-bold text-white",children:"Install"})]})]})]})})}}},function(e){e.O(0,[484,774,888,179],function(){return e(e.s=4873)}),_N_E=e.O()}]);