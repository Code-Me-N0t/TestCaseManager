import{R as q,j as t,r as a,F as R,f as X,a as Y,b as Z,B as J}from"./vendor-CnLy6pY0.js";function ee(l,C){let c;return function(...b){clearTimeout(c),c=setTimeout(()=>l.apply(this,b),C)}}const te=q.memo(q.forwardRef(({testCase:l,onChange:C,onStatusChange:c,onCheckboxChange:b,isChecked:p,onClick:y},k)=>t.jsxs("div",{className:"py-2 flex items-center border-gray-600 space-x-5 overflow-x-hidden mr-3","data-replicated-value":l.content,onClick:y,children:[t.jsxs("label",{className:"container flex w-1",children:[t.jsx("input",{type:"checkbox",checked:p,onChange:b,className:"checkbox peer"}),t.jsx("span",{className:"checkmark rounded border border-gray-500 hover:border-gray-50 peer-checked:bg-sky-700 peer-checked:border-none"})]}),t.jsx("div",{className:`w-full ${l.status===""?"":"border-dashed border-x border-gray-700"}`,children:t.jsx("textarea",{ref:k,className:`px-3 bg-inherit rounded overflow-hidden resize-none w-full flex items-center 
              ${l.status===""?"text-gray-400 pl-2":"text-[#FAF9F6] pl-6"}  
              ${l.isBold?"bold-textarea focus:outline-none":"text-sm"}
            `,value:l.content,onChange:u=>C(u.target.value),placeholder:`Test case ${l.id}`,rows:l.status===""?1:""})}),l.status!==""&&t.jsxs("select",{className:`p-1 cursor-pointer text-sm rounded focus:outline-none ${l.status==="notstarted"?"bg-yellow-200":l.status==="passed"?"bg-green-200":l.status==="failed"?"bg-rose-300":l.status==="blocked"?"bg-indigo-200":l.status==="notapplicable"?"bg-gray-300":"bg-yellow-200"}`,value:l.status,onChange:u=>c(u.target.value),children:[t.jsx("option",{className:"bg-slate-200",value:"notstarted",children:"NOT STARTED"}),t.jsx("option",{className:"bg-slate-200",value:"passed",children:"PASSED"}),t.jsx("option",{className:"bg-slate-200",value:"failed",children:"FAILED"}),t.jsx("option",{className:"bg-slate-200",value:"blocked",children:"BLOCKED"}),t.jsx("option",{className:"bg-slate-200",value:"notapplicable",children:"NOT APPLICABLE"})]})]},l.id))),i={DEFAULT:"#1C1C1E",SECOND:"#F39F5A",THIRD:"#9D3233"},se=({isOpen:l,onClose:C,nodeId:c,nodeLabel:b,nodeColor:p="#1C1C1E",testCases:y,onSave:k})=>{const[u,j]=a.useState(b),[h,E]=a.useState(p||i.DEFAULT),[o,f]=a.useState(y),[m,N]=a.useState([]),d=a.useRef([]),[O,F]=a.useState(p||i.DEFAULT),[g,w]=a.useState(""),[B,T]=a.useState(!1),D={toastSave:()=>{J.success("Changes Saved Successfully!",{autoClose:1e3})},toastSaveError:()=>{J.error("Failed to save data. Please try again.",{autoClose:1e3})}},U=a.useCallback(ee(async()=>{try{if(!c)throw new Error("Node ID is not defined");const e=o.length,s=o.filter(x=>x.status==="passed").length,r=o.filter(x=>x.status==="failed").length,n=o.filter(x=>x.status==="notstarted").length,v=o.filter(x=>x.status==="notapplicable").length,K={total:e,passed:s,failed:r,pending:n,notApplicable:v};localStorage.setItem(`testCases-${c}`,JSON.stringify(o)),localStorage.setItem(`label-${c}`,u),localStorage.setItem(`color-${c}`,h),localStorage.setItem(`testCaseStats-${c}`,JSON.stringify(K)),F(h),k&&k(o,u,h,K),D.toastSave()}catch(e){console.error("Failed to save data:",e),D.toastSaveError()}},1e3),[o,u,h,c,k,D]),S=a.useCallback(()=>{requestAnimationFrame(()=>{const e=d.current.map(s=>s?(s.style.height="auto",s.scrollHeight):0);d.current.forEach((s,r)=>{s&&(s.style.height=`${e[r]}px`)})})},[]),H=a.useCallback(()=>{S(),U()},[S,U]),A=a.useCallback(e=>{const s=e.target.value;/^#[0-9A-Fa-f]{6}$/.test(s)?(E(s),F(s)):console.error("Invalid color format. Please use #rrggbb format.")},[]),P=a.useCallback(()=>{const e={id:Date.now(),content:"",status:"",isBold:!0};f(s=>[...s,e])},[]),M=a.useCallback((e,s)=>{f(r=>r.map(n=>n.id===e?{...n,content:s}:n))},[]),L=a.useCallback(()=>{const e={id:Date.now(),content:"",status:"notstarted"};f(s=>[...s,e])},[]),V=a.useCallback((e,s)=>{f(r=>r.map(n=>n.id===e?{...n,status:s}:n))},[]),_=a.useCallback(()=>{f(e=>e.filter(s=>!m.includes(s.id))),N([])},[m]),G=a.useCallback(e=>{if(e.target.checked){const s=o.map(r=>r.id);N(s)}else N([])},[o]),Q=a.useCallback(e=>{N(s=>s.includes(e)?s.filter(r=>r!==e):[...s,e])},[]),$=o.filter(e=>e.content.toLowerCase().includes(g.toLowerCase())),z=a.useCallback(e=>{d.current[e]&&(d.current[e].scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"}),d.current[e].focus())},[]),W=a.useCallback(e=>{g&&(w(""),setTimeout(()=>{z(e)},0))},[g,z]);a.useEffect(()=>{j(b),E(p||i.DEFAULT),f(y),N([])},[b,y,p,l]),a.useEffect(()=>{const e=JSON.parse(localStorage.getItem(`testCases-${c}`)),s=localStorage.getItem(`label-${c}`),r=localStorage.getItem(`color-${c}`);s&&j(s),e&&f(e),r&&(E(r),F(r)),setTimeout(()=>{document.querySelectorAll(".modal-content textarea").forEach(v=>{v.parentNode.dataset.replicatedValue=v.value})},0)},[c,l]);const I=a.useCallback(e=>{B||(e.ctrlKey&&e.key==="Enter"?(g&&w(""),L(),T(!0)):e.altKey&&e.key==="Enter"?(g&&w(""),P(),T(!0)):e.ctrlKey&&e.key.toLowerCase()==="s"?(e.preventDefault(),H(),T(!0)):e.ctrlKey&&e.key.toLowerCase()==="f"&&(e.preventDefault(),document.querySelector(".search-input").focus(),T(!0)),setTimeout(()=>{T(!1)},100))},[g,L,P,B]);return a.useEffect(()=>(document.addEventListener("keydown",I),()=>{document.removeEventListener("keydown",I)}),[I]),a.useEffect(()=>{l&&S()},[l,S]),a.useEffect(()=>{var e;d.current.length>0&&(d.current.forEach(s=>{s&&(s.style.height="auto")}),(e=d.current[d.current.length-1])==null||e.focus())},[o.length]),a.useEffect(()=>{const e=document.querySelector(".modal-content");e&&(e.style.borderTopColor=O)},[O]),t.jsx(t.Fragment,{children:l&&t.jsx("div",{className:"modal-overlay z-0 select-none",children:t.jsxs("div",{className:"modal-content bg-[#1C1C1E] flex flex-col max-h-[90vh] min-w-[800px] border-t-4",style:{borderColor:h},children:[t.jsx("span",{className:"close bg-inherit text-white text-5xl hover:bg-rose-500",onClick:C,children:"×"}),t.jsxs("div",{className:"flex items-center",children:[t.jsx("input",{type:"text",className:"bg-inherit text-slate-200 font-bold p-1 rounded mr-5 w-2/3 text-xl focus:outline focus:outline-white",value:u,onChange:e=>j(e.target.value),placeholder:"Node Label"}),t.jsxs("div",{className:"flex items-center w-fit space-x-3 px-2 ml-10",children:[t.jsx("button",{onClick:()=>A({target:{value:i.DEFAULT}}),className:`w-8 h-8 rounded border-2 ${h===i.DEFAULT?" border-[#FAF9F6]":"border-gray-500"}`,style:{backgroundColor:i.DEFAULT},"aria-label":"DEFAULT"}),t.jsx("button",{onClick:()=>A({target:{value:i.SECOND}}),className:`w-8 h-8 rounded border-2 ${h===i.SECOND?" border-[#FAF9F6]":"border-gray-500"}`,style:{backgroundColor:i.SECOND},"aria-label":"SECOND"}),t.jsx("button",{onClick:()=>A({target:{value:i.THIRD}}),className:`w-8 h-8 rounded border-2 ${h===i.THIRD?" border-[#FAF9F6]":"border-gray-500"}`,style:{backgroundColor:i.THIRD},"aria-label":"THIRD"})]})]}),t.jsxs("div",{className:"flex items-center space-x-4",children:[t.jsxs("label",{className:"p-2 rounded flex items-center border-gray-600 cursor-pointer space-x-4 ",children:[t.jsx("input",{type:"checkbox",onChange:G,checked:m.length===o.length&&o.length>0}),t.jsx("span",{className:"text-white",children:"Select All"})]}),t.jsx("input",{type:"text",className:"search-input placeholder:italic p-1 px-3 text-sm text-white rounded border border-gray-600 bg-inherit",placeholder:"Search keywords...",value:g,onChange:e=>w(e.target.value)})]}),t.jsx("hr",{className:"mb-4 mt-2 border-gray-600 border-1"}),g&&t.jsxs("label",{className:"text-gray-400 text-xs",children:[$.length," test case",$.length>1?"s":""," found"]}),t.jsx("div",{className:"modal-body overflow-y-auto pb-[10px] divide-y divide-dashed",children:$.map((e,s)=>t.jsx(te,{testCase:e,onChange:r=>M(e.id,r),onStatusChange:r=>V(e.id,r),onCheckboxChange:()=>Q(e.id),isChecked:m.includes(e.id),ref:r=>d.current[o.findIndex(n=>n.id===e.id)]=r,onClick:()=>W(o.findIndex(r=>r.id===e.id))},e.id))}),t.jsxs("div",{className:"button-container sticky bottom-0 left-0 right-0 bg-[#1C1C1E] pt-5 space-x-3 z-10",children:[t.jsx("button",{className:"p-2 rounded w-12 bg-[#3e3e3e] hover:bg-[#2980B9]",onClick:L,children:t.jsx(R,{icon:X,size:"lg",color:"white"})}),t.jsx("button",{className:"p-2 rounded w-12 bg-[#3e3e3e] hover:bg-[#2980B9]",onClick:H,children:t.jsx(R,{icon:Y,size:"lg",color:"white"})}),t.jsx("button",{className:`p-2 rounded w-12 ${m.length>0?"bg-red-600 hover:bg-red-800":"bg-gray-600 cursor-not-allowed"}`,onClick:_,disabled:m.length===0,style:{cursor:m.length===0?"not-allowed":"pointer"},children:t.jsx(R,{icon:Z,size:"lg",color:"white"})})]})]})})})},le=se;export{le as M};
