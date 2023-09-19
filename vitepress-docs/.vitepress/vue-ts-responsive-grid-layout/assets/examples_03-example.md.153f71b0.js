import{d as ce,h as a,p as ve,a2 as pe,o as g,c as b,z as t,a3 as i,a4 as E,a5 as r,a as Y,F as P,L as A,E as j,B as F,n as he,b as W,X as ge,t as f,A as me,M as fe,N as be,a6 as _e,_ as xe}from"./chunks/framework.9b099134.js";import{t as ye,q as we,O as Re}from"./chunks/test.abf5e960.js";const l=x=>(fe("data-v-5f32c411"),x=x(),be(),x),ze={class:"container"},Ce={class:"row"},De={class:"col-sm"},Ee=l(()=>t("legend",null,"Test bench",-1)),ke=l(()=>t("label",{class:"hide",for:"rowHeight"}," Row Height(px) ",-1)),$e=l(()=>t("label",{class:"hide",for:"colNum"}," Max Columns ",-1)),Be=l(()=>t("label",{class:"hide",for:"maxRows"}," Max Rows ",-1)),Ve=l(()=>t("label",{class:"hide",for:"borderRadius"}," Border Radius ",-1)),Ue=l(()=>t("br",{class:"hide"},null,-1)),Me=l(()=>t("label",{class:"hide",for:"autosize"}," autosize ",-1)),Se=l(()=>t("label",{for:"editMode"}," editMode ",-1)),He=l(()=>t("label",{class:"hide",for:"horizontalShift"}," horizontalShift ",-1)),Ie=l(()=>t("label",{class:"hide",for:"isBounded"}," isBounded ",-1)),Le=l(()=>t("label",{for:"isDraggable"},"isDraggable",-1)),Ne=l(()=>t("label",{class:"hide",for:"isMirrored"}," isMirrored ",-1)),Te=l(()=>t("label",{for:"isResizable"},"isResizable",-1)),Oe=l(()=>t("label",{class:"hide",for:"isResponsive"}," isResponsive ",-1)),Xe=l(()=>t("label",{class:"hide",for:"preserveAspectRatio"}," preserveAspectRatio ",-1)),Ge=l(()=>t("label",{class:"hide",for:"preventCollision"}," preventCollision ",-1)),Ye=l(()=>t("label",{class:"hide",for:"restoreOnDrag"}," restoreOnDrag ",-1)),Pe=l(()=>t("label",{class:"hide",for:"showCloseButton"}," showCloseButton ",-1)),Ae=l(()=>t("label",{class:"hide",for:"showGridLines"}," showGridLines ",-1)),Je=l(()=>t("label",{class:"hide",for:"useBorderRadius"}," useBorderRadius ",-1)),qe=l(()=>t("label",{class:"hide",for:"verticalCompact"}," verticalCompact ",-1)),Fe={class:"row"},We={class:"col-sm hide"},je={class:"layoutJSON"},Ke=l(()=>t("code",null,"[x, y, w, h]",-1)),Qe={class:"columns"},Ze={class:"col-sm"},es=l(()=>t("h4",{style:{"margin-top":"10px"}}," Event log: ",-1)),ss={class:"col-sm hide"},ts=l(()=>t("div",{style:{"font-size":"0",height:"5px",margin:"0",padding:"0"}},null,-1)),os={class:"row"},ls={class:"col-sm"},as={class:"layout"},is={id:"content",class:"content"},ns={class:"text"},ds=ce({__name:"03-example",setup(x){_e(o=>({e6d7dcc6:v.value,d026079c:o.rowHeightPx}));const y=a(!0),k=a(12),v=a(12),w=a(!0),$=a(!1),B=a(!1),R=a(!0),V=a(!1),U=a(!0),M=a(!0),S=a(40),H=a(!1),I=a(!1),L=a(50),N=a(!1),T=a(!1),O=a(!1),z=a(!0),X=a(!0),n=a(ye),_=a(),G=new Map;let J=v.value;const K=o=>{J!==o&&(J=o,v.value=o)},d=a(),p=a([]),Q=(o,s,e)=>{p.value.push(`containerResizedEvent i=${o}, X=${s}, Y=${e}`),d.value.scrollTop=d.value.scrollHeight},Z=(o,s,e)=>{p.value.push(`dragEvent i=${o}, X=${s}, Y=${e}`),d.value.scrollTop=d.value.scrollHeight},ee=(o,s,e)=>{p.value.push(`moveEvent i=${o}, X=${s}, Y=${e}`),d.value.scrollTop=d.value.scrollHeight},se=(o,s,e)=>{p.value.push(`draggedEvent i=${o}, X=${s}, Y=${e}`),d.value.scrollTop=d.value.scrollHeight},te=(o,s,e)=>{p.value.push(`movedEvent i=${o}, X=${s}, Y=${e}`),d.value.scrollTop=d.value.scrollHeight},oe=(o,s,e)=>{p.value.push(`resizeEvent i=${o}, X=${s}, Y=${e}`),d.value.scrollTop=d.value.scrollHeight},le=(o,s,e)=>{p.value.push(`resizedEvent i=${o}, X=${s}, Y=${e}`),d.value.scrollTop=d.value.scrollHeight},ae=o=>{n.value=n.value.filter(s=>s.i!==o)},ie=o=>{let s=o.i;return o.isStatic&&(s+=" - Static"),s},ne=o=>{o&&o.i&&G.set(o.i,o)},u={x:0,y:0},c={h:1,i:"",w:1,x:0,y:0},de=o=>{if(o.stopPropagation(),o.preventDefault(),!w.value&&!R.value)return;const e=document.getElementById("content").getBoundingClientRect();let h=!1;u.x>e.left&&u.x<e.right&&u.y>e.top&&u.y<e.bottom&&(h=!0),h===!0&&n.value.findIndex(m=>m.i==="drop")===-1&&n.value.push({h:2,i:"drop",w:2,x:n.value.length*2%v.value,y:n.value.length+v.value});const C=n.value.findIndex(m=>m.i==="drop");if(C!==-1){try{_.value.defaultGridItem.$el.style.display="none"}catch{}const m=G.get("drop");if(!m)return;m.dragging={left:u.x-e.left,top:u.y-e.top};const D=m.calcXY(u.y-e.top,u.x-e.left);h===!0&&(_.value.dragEvent("dragstart","drop",D.x,D.y,2,2),c.i=String(C),c.x=n.value[C].x,c.y=n.value[C].y),h===!1&&(_.value.dragEvent("dragend","drop",D.x,D.y,2,2),n.value=n.value.filter(ue=>ue.i!=="drop"))}},re=()=>{const s=document.getElementById("content").getBoundingClientRect();let e=!1;u.x>s.left&&u.x<s.right&&u.y>s.top&&u.y<s.bottom&&(e=!0),e===!0&&(_.value.dragEvent("dragend","drop",c.x,c.y,2,2),n.value=n.value.filter(h=>h.i!=="drop"),ge(()=>{n.value.push({h:1,i:c.i,minH:1,minW:1,w:1,x:c.x,y:c.y}),_.value.dragEvent("dragend",c.i,c.x,c.y,2,2),G.delete("drop")}))},q=o=>{u.x=o.clientX,u.y=o.clientY};return ve(()=>{document.addEventListener("dragover",q)}),pe(()=>{document.removeEventListener("dragover",q)}),(o,s)=>(g(),b("div",ze,[t("div",Ce,[t("div",De,[t("form",null,[t("fieldset",null,[Ee,ke,i(t("input",{id:"rowHeight","onUpdate:modelValue":s[0]||(s[0]=e=>L.value=e),class:"hide",type:"number"},null,512),[[E,L.value]]),$e,i(t("input",{id:"colNum","onUpdate:modelValue":s[1]||(s[1]=e=>v.value=e),class:"hide",type:"number"},null,512),[[E,v.value]]),Be,i(t("input",{id:"maxRows","onUpdate:modelValue":s[2]||(s[2]=e=>S.value=e),class:"hide",type:"number"},null,512),[[E,S.value]]),Ve,i(t("input",{id:"borderRadius","onUpdate:modelValue":s[3]||(s[3]=e=>k.value=e),class:"hide",type:"number"},null,512),[[E,k.value]]),Ue,Me,i(t("input",{id:"autosize","onUpdate:modelValue":s[4]||(s[4]=e=>y.value=e),class:"hide",type:"checkbox"},null,512),[[r,y.value]]),Se,i(t("input",{id:"editMode","onUpdate:modelValue":s[5]||(s[5]=e=>w.value=e),type:"checkbox"},null,512),[[r,w.value]]),He,i(t("input",{id:"horizontalShift","onUpdate:modelValue":s[6]||(s[6]=e=>$.value=e),class:"hide",type:"checkbox"},null,512),[[r,$.value]]),Ie,i(t("input",{id:"isBounded","onUpdate:modelValue":s[7]||(s[7]=e=>B.value=e),class:"hide",type:"checkbox"},null,512),[[r,B.value]]),Le,i(t("input",{id:"isDraggable","onUpdate:modelValue":s[8]||(s[8]=e=>R.value=e),type:"checkbox"},null,512),[[r,R.value]]),Ne,i(t("input",{id:"isMirrored","onUpdate:modelValue":s[9]||(s[9]=e=>V.value=e),class:"hide",type:"checkbox"},null,512),[[r,V.value]]),Te,i(t("input",{id:"isResizable","onUpdate:modelValue":s[10]||(s[10]=e=>U.value=e),type:"checkbox"},null,512),[[r,U.value]]),Oe,i(t("input",{id:"isResponsive","onUpdate:modelValue":s[11]||(s[11]=e=>M.value=e),class:"hide",type:"checkbox"},null,512),[[r,M.value]]),Xe,i(t("input",{id:"preserveAspectRatio","onUpdate:modelValue":s[12]||(s[12]=e=>H.value=e),class:"hide",type:"checkbox"},null,512),[[r,H.value]]),Ge,i(t("input",{id:"preventCollision","onUpdate:modelValue":s[13]||(s[13]=e=>I.value=e),class:"hide",type:"checkbox"},null,512),[[r,I.value]]),Ye,i(t("input",{id:"restoreOnDrag","onUpdate:modelValue":s[14]||(s[14]=e=>N.value=e),class:"hide",type:"checkbox"},null,512),[[r,N.value]]),Pe,i(t("input",{id:"showCloseButton","onUpdate:modelValue":s[15]||(s[15]=e=>T.value=e),class:"hide",type:"checkbox"},null,512),[[r,T.value]]),Ae,i(t("input",{id:"showGridLines","onUpdate:modelValue":s[16]||(s[16]=e=>O.value=e),class:"hide",type:"checkbox"},null,512),[[r,O.value]]),Je,i(t("input",{id:"useBorderRadius","onUpdate:modelValue":s[17]||(s[17]=e=>z.value=e),class:"hide",type:"checkbox"},null,512),[[r,z.value]]),qe,i(t("input",{id:"verticalCompact","onUpdate:modelValue":s[18]||(s[18]=e=>X.value=e),class:"hide",type:"checkbox"},null,512),[[r,X.value]])])])])]),t("div",Fe,[t("div",We,[t("div",je,[Y(" Displayed as "),Ke,Y(": "),t("div",Qe,[(g(!0),b(P,null,A(n.value,e=>(g(),b("div",{key:e.i},[t("b",null,f(e.i),1),Y(": ["+f(e.x)+", "+f(e.y)+", "+f(e.w)+", "+f(e.h)+"] ",1)]))),128))])])]),t("div",Ze,[es,t("div",{ref_key:"eventsDiv",ref:d,class:"eventsJSON"},[(g(!0),b(P,null,A(p.value,e=>(g(),b("div",{key:e},f(e),1))),128))],512)]),t("div",ss,[t("div",{class:"droppable-element",draggable:"true",onDrag:de,onDragend:re}," Drag me! ",32)])]),ts,t("div",os,[t("div",ls,[t("div",as,[t("div",is,[j(W(Re),{ref_key:"refLayout",ref:_,layout:n.value,"onUpdate:layout":s[19]||(s[19]=e=>n.value=e),"auto-size":y.value,class:he({grid:O.value}),"col-num":v.value,"horizontal-shift":$.value,"is-bounded":B.value,"is-draggable":R.value,"is-mirrored":V.value,"is-resizable":U.value,margin:[10,10],"max-rows":S.value,"prevent-collision":I.value,responsive:M.value,"restore-on-drag":N.value,"row-height":L.value,"use-border-radius":z.value,"use-css-transforms":!0,"vertical-compact":X.value,onColumnsChanged:K},{default:F(()=>[(g(!0),b(P,null,A(n.value,e=>(g(),me(W(we),{key:e.i,ref_for:!0,ref:h=>ne(h),class:"test","enable-edit-mode":w.value,h:e.h,i:e.i,"is-draggable":e.isDraggable,"is-resizable":e.isResizable,"is-static":e.isStatic,"min-h":e.minH,"min-w":e.minW,"preserve-aspect-ratio":H.value,"show-close-button":T.value,"use-border-radius":z.value,w:e.w,x:e.x,y:e.y,onContainerResized:Q,onDrag:Z,onDragged:ee,onMove:se,onMoved:te,onRemoveGridItem:ae,onResize:oe,onResized:le},{default:F(()=>[t("span",ns,f(ie(e)),1)]),_:2},1032,["enable-edit-mode","h","i","is-draggable","is-resizable","is-static","min-h","min-w","preserve-aspect-ratio","show-close-button","use-border-radius","w","x","y"]))),128))]),_:1},8,["layout","auto-size","class","col-num","horizontal-shift","is-bounded","is-draggable","is-mirrored","is-resizable","max-rows","prevent-collision","responsive","restore-on-drag","row-height","use-border-radius","vertical-compact"])])])])])]))}});const rs=xe(ds,[["__scopeId","data-v-5f32c411"]]),us=t("h1",{id:"drag-drop-and-resize-events",tabindex:"-1"},"Drag, Drop and resize events",-1),hs=JSON.parse('{"title":"Drag, Drop and resize events","description":"","frontmatter":{},"headers":[],"relativePath":"examples/03-example.md","lastUpdated":1678079774000}'),cs={name:"examples/03-example.md"},gs=Object.assign(cs,{setup(x){return(y,k)=>(g(),b("div",null,[us,j(rs)]))}});export{hs as __pageData,gs as default};