import{d as b,r as l,$ as v,b as s,c as a,F as g,ah as x,e as u,f as y,Z as k,n as I,t as T,p as S,i as $,Q as C,k as w}from"./entry.3c5b07b8.js";const B=t=>(S("data-v-6d1103d1"),t=t(),$(),t),H={class:"tabs-header"},N=["onClick"],U=B(()=>u("span",{class:"tab"},null,-1)),q=[U],F=b({__name:"TabsHeader",props:{tabs:{type:Array,required:!0},activeTabIndex:{type:Number,required:!0}},emits:["update:activeTabIndex"],setup(t,{emit:_}){const p=t,h=_,n=l(),r=l(),o=e=>{e&&(r.value.style.insetInlineStart=`${e.offsetLeft}px`,r.value.style.width=`${e.clientWidth}px`)},f=(e,d)=>{h("update:activeTabIndex",d),C(()=>o(e.target))};return v(n,e=>{e&&setTimeout(()=>{o(n.value.children[p.activeTabIndex])},50)},{immediate:!0}),(e,d)=>(s(),a("div",H,[t.tabs?(s(),a("div",{key:0,ref_key:"tabsRef",ref:n,class:"tabs"},[(s(!0),a(g,null,x(t.tabs,({label:c},i)=>(s(),a("button",{key:`${i}${c}`,class:I([t.activeTabIndex===i?"active":"not-active"]),onClick:m=>f(m,i)},T(c),11,N))),128)),u("span",{ref_key:"highlightUnderline",ref:r,class:"highlight-underline"},q,512)],512)):y("",!0),k(e.$slots,"footer",{},void 0,!0)]))}});const R=w(F,[["__scopeId","data-v-6d1103d1"]]);export{R as default};
