import{b as Te,B as ce}from"./Button-B9cQtOr6.js";import{j as Fe,aH as Me,aI as Le,aj as Ee,aD as Y,aJ as He,a8 as ee,a0 as me,r as T,q as S,am as ne,y as _,p as N,z as C,d as D,h as l,D as be,ai as We,H as Ue,aC as W,a5 as ge,aK as te,a2 as U,aL as Ne,R as we,E as re,aM as qe,I as g,L as Pe,aN as Ge,aO as Ve,aP as Xe,aQ as Je,aR as Ze,aS as Re,ab as oe,aT as xe,F as Qe,aU as Ye,aV as eo,aW as oo,aX as no,aY as to,aZ as ro,a_ as io,aa as ao,a9 as j,a$ as so,b0 as lo,J as L,M as pe,b1 as $e,b2 as ke,c as uo,o as co,w as E,a as H,u as O,N as _e,e as fe,t as he,_ as po}from"./app-CPEQIvoC.js";import{C as fo}from"./ChevronRight-BVnXnhKj.js";import{N as ho}from"./Image-UhQT2Mtg.js";function vo(e={},o){const t=Fe({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:r,keyup:i}=e,n=a=>{switch(a.key){case"Control":t.ctrl=!0;break;case"Meta":t.command=!0,t.win=!0;break;case"Shift":t.shift=!0;break;case"Tab":t.tab=!0;break}r!==void 0&&Object.keys(r).forEach(m=>{if(m!==a.key)return;const h=r[m];if(typeof h=="function")h(a);else{const{stop:P=!1,prevent:R=!1}=h;P&&a.stopPropagation(),R&&a.preventDefault(),h.handler(a)}})},s=a=>{switch(a.key){case"Control":t.ctrl=!1;break;case"Meta":t.command=!1,t.win=!1;break;case"Shift":t.shift=!1;break;case"Tab":t.tab=!1;break}i!==void 0&&Object.keys(i).forEach(m=>{if(m!==a.key)return;const h=i[m];if(typeof h=="function")h(a);else{const{stop:P=!1,prevent:R=!1}=h;P&&a.stopPropagation(),R&&a.preventDefault(),h.handler(a)}})},u=()=>{(o===void 0||o.value)&&(ee("keydown",document,n),ee("keyup",document,s)),o!==void 0&&me(o,a=>{a?(ee("keydown",document,n),ee("keyup",document,s)):(Y("keydown",document,n),Y("keyup",document,s))})};return Me()?(Le(u),Ee(()=>{(o===void 0||o.value)&&(Y("keydown",document,n),Y("keyup",document,s))})):u(),He(t)}function mo(e,o,t){const r=T(e.value);let i=null;return me(e,n=>{i!==null&&window.clearTimeout(i),n===!0?t&&!t.value?r.value=!0:i=window.setTimeout(()=>{r.value=!0},o):r.value=!1}),r}function bo(e){return o=>{o?e.value=o.$el:e.value=null}}const v="0!important",Ce="-1px!important";function V(e){return _(`${e}-type`,[N("& +",[S("button",{},[_(`${e}-type`,[C("border",{borderLeftWidth:v}),C("state-border",{left:Ce})])])])])}function X(e){return _(`${e}-type`,[N("& +",[S("button",[_(`${e}-type`,[C("border",{borderTopWidth:v}),C("state-border",{top:Ce})])])])])}const go=S("button-group",`
 flex-wrap: nowrap;
 display: inline-flex;
 position: relative;
`,[ne("vertical",{flexDirection:"row"},[ne("rtl",[S("button",[N("&:first-child:not(:last-child)",`
 margin-right: ${v};
 border-top-right-radius: ${v};
 border-bottom-right-radius: ${v};
 `),N("&:last-child:not(:first-child)",`
 margin-left: ${v};
 border-top-left-radius: ${v};
 border-bottom-left-radius: ${v};
 `),N("&:not(:first-child):not(:last-child)",`
 margin-left: ${v};
 margin-right: ${v};
 border-radius: ${v};
 `),V("default"),_("ghost",[V("primary"),V("info"),V("success"),V("warning"),V("error")])])])]),_("vertical",{flexDirection:"column"},[S("button",[N("&:first-child:not(:last-child)",`
 margin-bottom: ${v};
 margin-left: ${v};
 margin-right: ${v};
 border-bottom-left-radius: ${v};
 border-bottom-right-radius: ${v};
 `),N("&:last-child:not(:first-child)",`
 margin-top: ${v};
 margin-left: ${v};
 margin-right: ${v};
 border-top-left-radius: ${v};
 border-top-right-radius: ${v};
 `),N("&:not(:first-child):not(:last-child)",`
 margin: ${v};
 border-radius: ${v};
 `),X("default"),_("ghost",[X("primary"),X("info"),X("success"),X("warning"),X("error")])])])]),wo={size:{type:String,default:void 0},vertical:Boolean},yo=D({name:"ButtonGroup",props:wo,setup(e){const{mergedClsPrefixRef:o,mergedRtlRef:t}=be(e);return We("-button-group",go,o),W(Te,e),{rtlEnabled:Ue("ButtonGroup",t,o),mergedClsPrefix:o}},render(){const{mergedClsPrefix:e}=this;return l("div",{class:[`${e}-button-group`,this.rtlEnabled&&`${e}-button-group--rtl`,this.vertical&&`${e}-button-group--vertical`],role:"group"},this.$slots)}}),ye=ge("n-dropdown-menu"),ie=ge("n-dropdown"),Se=ge("n-dropdown-option"),Ie=D({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return l("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),xo=D({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:o}=U(ye),{renderLabelRef:t,labelFieldRef:r,nodePropsRef:i,renderOptionRef:n}=U(ie);return{labelField:r,showIcon:e,hasSubmenu:o,renderLabel:t,nodeProps:i,renderOption:n}},render(){var e;const{clsPrefix:o,hasSubmenu:t,showIcon:r,nodeProps:i,renderLabel:n,renderOption:s}=this,{rawNode:u}=this.tmNode,a=l("div",Object.assign({class:`${o}-dropdown-option`},i==null?void 0:i(u)),l("div",{class:`${o}-dropdown-option-body ${o}-dropdown-option-body--group`},l("div",{"data-dropdown-option":!0,class:[`${o}-dropdown-option-body__prefix`,r&&`${o}-dropdown-option-body__prefix--show-icon`]},te(u.icon)),l("div",{class:`${o}-dropdown-option-body__label`,"data-dropdown-option":!0},n?n(u):te((e=u.title)!==null&&e!==void 0?e:u[this.labelField])),l("div",{class:[`${o}-dropdown-option-body__suffix`,t&&`${o}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return s?s({node:a,option:u}):a}}),ko=S("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[_("color-transition",{transition:"color .3s var(--n-bezier)"}),_("depth",{color:"var(--n-color)"},[N("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),N("svg",{height:"1em",width:"1em"})]),_o=Object.assign(Object.assign({},re.props),{depth:[String,Number],size:[Number,String],color:String,component:[Object,Function]}),So=D({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:_o,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=be(e),r=re("Icon","-icon",ko,qe,e,o),i=g(()=>{const{depth:s}=e,{common:{cubicBezierEaseInOut:u},self:a}=r.value;if(s!==void 0){const{color:m,[`opacity${s}Depth`]:h}=a;return{"--n-bezier":u,"--n-color":m,"--n-opacity":h}}return{"--n-bezier":u,"--n-color":"","--n-opacity":""}}),n=t?Pe("icon",g(()=>`${e.depth||"d"}`),i,e):void 0;return{mergedClsPrefix:o,mergedStyle:g(()=>{const{size:s,color:u}=e;return{fontSize:Ge(s),color:u}}),cssVars:t?void 0:i,themeClass:n==null?void 0:n.themeClass,onRender:n==null?void 0:n.onRender}},render(){var e;const{$parent:o,depth:t,mergedClsPrefix:r,component:i,onRender:n,themeClass:s}=this;return!((e=o==null?void 0:o.$options)===null||e===void 0)&&e._n_icon__&&Ne("icon","don't wrap `n-icon` inside `n-icon`"),n==null||n(),l("i",we(this.$attrs,{role:"img",class:[`${r}-icon`,s,{[`${r}-icon--depth`]:t,[`${r}-icon--color-transition`]:t!==void 0}],style:[this.cssVars,this.mergedStyle]}),i?l(i):this.$slots)}});function ve(e,o){return e.type==="submenu"||e.type===void 0&&e[o]!==void 0}function No(e){return e.type==="group"}function Ke(e){return e.type==="divider"}function Po(e){return e.type==="render"}const ze=D({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const o=U(ie),{hoverKeyRef:t,keyboardKeyRef:r,lastToggledSubmenuKeyRef:i,pendingKeyPathRef:n,activeKeyPathRef:s,animatedRef:u,mergedShowRef:a,renderLabelRef:m,renderIconRef:h,labelFieldRef:P,childrenFieldRef:R,renderOptionRef:I,nodePropsRef:K,menuPropsRef:k}=o,x=U(Se,null),z=U(ye),J=U(Re),ae=g(()=>e.tmNode.rawNode),Z=g(()=>{const{value:c}=R;return ve(e.tmNode.rawNode,c)}),se=g(()=>{const{disabled:c}=e.tmNode;return c}),le=g(()=>{if(!Z.value)return!1;const{key:c,disabled:y}=e.tmNode;if(y)return!1;const{value:B}=t,{value:F}=r,{value:ue}=i,{value:M}=n;return B!==null?M.includes(c):F!==null?M.includes(c)&&M[M.length-1]!==c:ue!==null?M.includes(c):!1}),de=g(()=>r.value===null&&!u.value),Q=mo(le,300,de),q=g(()=>!!(x!=null&&x.enteringSubmenuRef.value)),G=T(!1);W(Se,{enteringSubmenuRef:G});function A(){G.value=!0}function d(){G.value=!1}function w(){const{parentKey:c,tmNode:y}=e;y.disabled||a.value&&(i.value=c,r.value=null,t.value=y.key)}function f(){const{tmNode:c}=e;c.disabled||a.value&&t.value!==c.key&&w()}function p(c){if(e.tmNode.disabled||!a.value)return;const{relatedTarget:y}=c;y&&!xe({target:y},"dropdownOption")&&!xe({target:y},"scrollbarRail")&&(t.value=null)}function $(){const{value:c}=Z,{tmNode:y}=e;a.value&&!c&&!y.disabled&&(o.doSelect(y.key,y.rawNode),o.doUpdateShow(!1))}return{labelField:P,renderLabel:m,renderIcon:h,siblingHasIcon:z.showIconRef,siblingHasSubmenu:z.hasSubmenuRef,menuProps:k,popoverBody:J,animated:u,mergedShowSubmenu:g(()=>Q.value&&!q.value),rawNode:ae,hasSubmenu:Z,pending:oe(()=>{const{value:c}=n,{key:y}=e.tmNode;return c.includes(y)}),childActive:oe(()=>{const{value:c}=s,{key:y}=e.tmNode,B=c.findIndex(F=>y===F);return B===-1?!1:B<c.length-1}),active:oe(()=>{const{value:c}=s,{key:y}=e.tmNode,B=c.findIndex(F=>y===F);return B===-1?!1:B===c.length-1}),mergedDisabled:se,renderOption:I,nodeProps:K,handleClick:$,handleMouseMove:f,handleMouseEnter:w,handleMouseLeave:p,handleSubmenuBeforeEnter:A,handleSubmenuAfterEnter:d}},render(){var e,o;const{animated:t,rawNode:r,mergedShowSubmenu:i,clsPrefix:n,siblingHasIcon:s,siblingHasSubmenu:u,renderLabel:a,renderIcon:m,renderOption:h,nodeProps:P,props:R,scrollable:I}=this;let K=null;if(i){const J=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,r,r.children);K=l(Oe,Object.assign({},J,{clsPrefix:n,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const k={class:[`${n}-dropdown-option-body`,this.pending&&`${n}-dropdown-option-body--pending`,this.active&&`${n}-dropdown-option-body--active`,this.childActive&&`${n}-dropdown-option-body--child-active`,this.mergedDisabled&&`${n}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},x=P==null?void 0:P(r),z=l("div",Object.assign({class:[`${n}-dropdown-option`,x==null?void 0:x.class],"data-dropdown-option":!0},x),l("div",we(k,R),[l("div",{class:[`${n}-dropdown-option-body__prefix`,s&&`${n}-dropdown-option-body__prefix--show-icon`]},[m?m(r):te(r.icon)]),l("div",{"data-dropdown-option":!0,class:`${n}-dropdown-option-body__label`},a?a(r):te((o=r[this.labelField])!==null&&o!==void 0?o:r.title)),l("div",{"data-dropdown-option":!0,class:[`${n}-dropdown-option-body__suffix`,u&&`${n}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?l(So,null,{default:()=>l(fo,null)}):null)]),this.hasSubmenu?l(Ve,null,{default:()=>[l(Xe,null,{default:()=>l("div",{class:`${n}-dropdown-offset-container`},l(Je,{show:this.mergedShowSubmenu,placement:this.placement,to:I&&this.popoverBody||void 0,teleportDisabled:!I},{default:()=>l("div",{class:`${n}-dropdown-menu-wrapper`},t?l(Ze,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>K}):K)}))})]}):null);return h?h({node:z,option:r}):z}}),Ro=D({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:o,clsPrefix:t}=this,{children:r}=e;return l(Qe,null,l(xo,{clsPrefix:t,tmNode:e,key:e.key}),r==null?void 0:r.map(i=>{const{rawNode:n}=i;return n.show===!1?null:Ke(n)?l(Ie,{clsPrefix:t,key:i.key}):i.isGroup?(Ne("dropdown","`group` node is not allowed to be put in `group` node."),null):l(ze,{clsPrefix:t,tmNode:i,parentKey:o,key:i.key})}))}}),$o=D({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:o}}=this.tmNode;return l("div",o,[e==null?void 0:e()])}}),Oe=D({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:o,childrenFieldRef:t}=U(ie);W(ye,{showIconRef:g(()=>{const i=o.value;return e.tmNodes.some(n=>{var s;if(n.isGroup)return(s=n.children)===null||s===void 0?void 0:s.some(({rawNode:a})=>i?i(a):a.icon);const{rawNode:u}=n;return i?i(u):u.icon})}),hasSubmenuRef:g(()=>{const{value:i}=t;return e.tmNodes.some(n=>{var s;if(n.isGroup)return(s=n.children)===null||s===void 0?void 0:s.some(({rawNode:a})=>ve(a,i));const{rawNode:u}=n;return ve(u,i)})})});const r=T(null);return W(oo,null),W(no,null),W(Re,r),{bodyRef:r}},render(){const{parentKey:e,clsPrefix:o,scrollable:t}=this,r=this.tmNodes.map(i=>{const{rawNode:n}=i;return n.show===!1?null:Po(n)?l($o,{tmNode:i,key:i.key}):Ke(n)?l(Ie,{clsPrefix:o,key:i.key}):No(n)?l(Ro,{clsPrefix:o,tmNode:i,parentKey:e,key:i.key}):l(ze,{clsPrefix:o,tmNode:i,parentKey:e,key:i.key,props:n.props,scrollable:t})});return l("div",{class:[`${o}-dropdown-menu`,t&&`${o}-dropdown-menu--scrollable`],ref:"bodyRef"},t?l(Ye,{contentClass:`${o}-dropdown-menu__content`},{default:()=>r}):r,this.showArrow?eo({clsPrefix:o,arrowStyle:this.arrowStyle,arrowClass:void 0,arrowWrapperClass:void 0,arrowWrapperStyle:void 0}):null)}}),Co=S("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[to(),S("dropdown-option",`
 position: relative;
 `,[N("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[N("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),S("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[N("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),ne("disabled",[_("pending",`
 color: var(--n-option-text-color-hover);
 `,[C("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),N("&::before","background-color: var(--n-option-color-hover);")]),_("active",`
 color: var(--n-option-text-color-active);
 `,[C("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),N("&::before","background-color: var(--n-option-color-active);")]),_("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[C("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),_("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),_("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[C("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[_("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),C("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[_("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),S("icon",`
 font-size: var(--n-option-icon-size);
 `)]),C("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),C("suffix",`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `,[_("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),S("icon",`
 font-size: var(--n-option-icon-size);
 `)]),S("dropdown-menu","pointer-events: all;")]),S("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),S("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),S("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),N(">",[S("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),ne("scrollable",`
 padding: var(--n-padding);
 `),_("scrollable",[C("content",`
 padding: var(--n-padding);
 `)])]),Io={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},Ko=Object.keys($e),zo=Object.assign(Object.assign(Object.assign({},$e),Io),re.props),Oo=D({name:"Dropdown",inheritAttrs:!1,props:zo,setup(e){const o=T(!1),t=ao(j(e,"show"),o),r=g(()=>{const{keyField:d,childrenField:w}=e;return so(e.options,{getKey(f){return f[d]},getDisabled(f){return f.disabled===!0},getIgnored(f){return f.type==="divider"||f.type==="render"},getChildren(f){return f[w]}})}),i=g(()=>r.value.treeNodes),n=T(null),s=T(null),u=T(null),a=g(()=>{var d,w,f;return(f=(w=(d=n.value)!==null&&d!==void 0?d:s.value)!==null&&w!==void 0?w:u.value)!==null&&f!==void 0?f:null}),m=g(()=>r.value.getPath(a.value).keyPath),h=g(()=>r.value.getPath(e.value).keyPath),P=oe(()=>e.keyboard&&t.value);vo({keydown:{ArrowUp:{prevent:!0,handler:se},ArrowRight:{prevent:!0,handler:Z},ArrowDown:{prevent:!0,handler:le},ArrowLeft:{prevent:!0,handler:ae},Enter:{prevent:!0,handler:de},Escape:J}},P);const{mergedClsPrefixRef:R,inlineThemeDisabled:I}=be(e),K=re("Dropdown","-dropdown",Co,lo,e,R);W(ie,{labelFieldRef:j(e,"labelField"),childrenFieldRef:j(e,"childrenField"),renderLabelRef:j(e,"renderLabel"),renderIconRef:j(e,"renderIcon"),hoverKeyRef:n,keyboardKeyRef:s,lastToggledSubmenuKeyRef:u,pendingKeyPathRef:m,activeKeyPathRef:h,animatedRef:j(e,"animated"),mergedShowRef:t,nodePropsRef:j(e,"nodeProps"),renderOptionRef:j(e,"renderOption"),menuPropsRef:j(e,"menuProps"),doSelect:k,doUpdateShow:x}),me(t,d=>{!e.animated&&!d&&z()});function k(d,w){const{onSelect:f}=e;f&&pe(f,d,w)}function x(d){const{"onUpdate:show":w,onUpdateShow:f}=e;w&&pe(w,d),f&&pe(f,d),o.value=d}function z(){n.value=null,s.value=null,u.value=null}function J(){x(!1)}function ae(){q("left")}function Z(){q("right")}function se(){q("up")}function le(){q("down")}function de(){const d=Q();d!=null&&d.isLeaf&&t.value&&(k(d.key,d.rawNode),x(!1))}function Q(){var d;const{value:w}=r,{value:f}=a;return!w||f===null?null:(d=w.getNode(f))!==null&&d!==void 0?d:null}function q(d){const{value:w}=a,{value:{getFirstAvailableNode:f}}=r;let p=null;if(w===null){const $=f();$!==null&&(p=$.key)}else{const $=Q();if($){let c;switch(d){case"down":c=$.getNext();break;case"up":c=$.getPrev();break;case"right":c=$.getChild();break;case"left":c=$.getParent();break}c&&(p=c.key)}}p!==null&&(n.value=null,s.value=p)}const G=g(()=>{const{size:d,inverted:w}=e,{common:{cubicBezierEaseInOut:f},self:p}=K.value,{padding:$,dividerColor:c,borderRadius:y,optionOpacityDisabled:B,[L("optionIconSuffixWidth",d)]:F,[L("optionSuffixWidth",d)]:ue,[L("optionIconPrefixWidth",d)]:M,[L("optionPrefixWidth",d)]:De,[L("fontSize",d)]:Be,[L("optionHeight",d)]:je,[L("optionIconSize",d)]:Ae}=p,b={"--n-bezier":f,"--n-font-size":Be,"--n-padding":$,"--n-border-radius":y,"--n-option-height":je,"--n-option-prefix-width":De,"--n-option-icon-prefix-width":M,"--n-option-suffix-width":ue,"--n-option-icon-suffix-width":F,"--n-option-icon-size":Ae,"--n-divider-color":c,"--n-option-opacity-disabled":B};return w?(b["--n-color"]=p.colorInverted,b["--n-option-color-hover"]=p.optionColorHoverInverted,b["--n-option-color-active"]=p.optionColorActiveInverted,b["--n-option-text-color"]=p.optionTextColorInverted,b["--n-option-text-color-hover"]=p.optionTextColorHoverInverted,b["--n-option-text-color-active"]=p.optionTextColorActiveInverted,b["--n-option-text-color-child-active"]=p.optionTextColorChildActiveInverted,b["--n-prefix-color"]=p.prefixColorInverted,b["--n-suffix-color"]=p.suffixColorInverted,b["--n-group-header-text-color"]=p.groupHeaderTextColorInverted):(b["--n-color"]=p.color,b["--n-option-color-hover"]=p.optionColorHover,b["--n-option-color-active"]=p.optionColorActive,b["--n-option-text-color"]=p.optionTextColor,b["--n-option-text-color-hover"]=p.optionTextColorHover,b["--n-option-text-color-active"]=p.optionTextColorActive,b["--n-option-text-color-child-active"]=p.optionTextColorChildActive,b["--n-prefix-color"]=p.prefixColor,b["--n-suffix-color"]=p.suffixColor,b["--n-group-header-text-color"]=p.groupHeaderTextColor),b}),A=I?Pe("dropdown",g(()=>`${e.size[0]}${e.inverted?"i":""}`),G,e):void 0;return{mergedClsPrefix:R,mergedTheme:K,tmNodes:i,mergedShow:t,handleAfterLeave:()=>{e.animated&&z()},doUpdateShow:x,cssVars:I?void 0:G,themeClass:A==null?void 0:A.themeClass,onRender:A==null?void 0:A.onRender}},render(){const e=(r,i,n,s,u)=>{var a;const{mergedClsPrefix:m,menuProps:h}=this;(a=this.onRender)===null||a===void 0||a.call(this);const P=(h==null?void 0:h(void 0,this.tmNodes.map(I=>I.rawNode)))||{},R={ref:bo(i),class:[r,`${m}-dropdown`,this.themeClass],clsPrefix:m,tmNodes:this.tmNodes,style:[...n,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:s,onMouseleave:u};return l(Oe,we(this.$attrs,R,P))},{mergedTheme:o}=this,t={show:this.mergedShow,theme:o.peers.Popover,themeOverrides:o.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return l(io,Object.assign({},ro(this.$props,Ko),t),{trigger:()=>{var r,i;return(i=(r=this.$slots).default)===null||i===void 0?void 0:i.call(r)}})}}),Mo="/img/desktop/key_mbd.png",Lo="/img/desktop/logIn_mbd.png",Eo="/img/desktop/key_lemonsqueezy.png",Ho="/img/desktop/login_lemonsqueezy.png",Wo="/img/desktop/mianbaoduo.png",Uo="/img/desktop/lemonsqueezy.png",Do="https://ghfast.top/",Bo=D({__name:"Desktop",async setup(e){let o,t;const r=([o,t]=ke(()=>fetch("https://ad-api.nn.ci/v0/app/latest")),o=await o,t(),o),n=([o,t]=ke(()=>r.json()),o=await o,t(),o).version,s=[{key:"mac_arm64",label:"MacOS (Apple Silicon)",url:`https://github.com/alist-org/desktop-release/releases/latest/download/alist-desktop_${n}_aarch64.dmg`},{key:"mac_x64",label:"MacOS (Intel)",url:`https://github.com/alist-org/desktop-release/releases/latest/download/alist-desktop_${n}_x64.dmg`},{key:"win_x64",label:"Windows (X64)",url:`https://github.com/alist-org/desktop-release/releases/latest/download/alist-desktop_${n}_x64_en-US.msi`},{key:"win_arm64",label:"Windows (ARM64)",url:`https://github.com/alist-org/desktop-release/releases/latest/download/alist-desktop_${n}_arm64-setup.exe`},{key:"linux",label:"Linux",url:`https://github.com/alist-org/desktop-release/releases/latest/download/alist-desktop_${n}_amd64.deb`}],u=navigator.platform.toLowerCase(),a=T("win_x64");u.includes("win")?a.value="win_x64":u.includes("linux")?a.value="linux":u.includes("mac")&&(a.value="mac_arm64"),console.log(a.value);let m={down:"Download",website:"Website"};const h=g(()=>{var k;return(k=s.find(x=>x.key===a.value))==null?void 0:k.label}),P=g(()=>s.map(k=>({...k,label:`${k.label} ${a.value===k.key?"✅":""}`})));location.pathname.startsWith("/zh/")&&(m={down:"下载",website:"官网"});function R(){var x;const k=(x=s.find(z=>z.key===a.value))==null?void 0:x.url;window.open(`${Do}${k}`,"_blank")}function I(k){a.value=k}function K(){window.open("https://ad.nn.ci/","_blank")}return(k,x)=>(co(),uo(O(_e),{align:"center",vertical:"",size:"large"},{default:E(()=>[H(O(_e),{class:"btn"},{default:E(()=>[H(O(ce),{size:"large",type:"info",onClick:K,tertiary:""},{default:E(()=>[fe(he(O(m).website),1)]),_:1}),H(O(yo),null,{default:E(()=>[H(O(Oo),{trigger:"hover",options:P.value,onSelect:I,size:"large"},{default:E(()=>[H(O(ce),{size:"large",type:"primary",tertiary:""},{default:E(()=>[fe("💻"+he(h.value),1)]),_:1})]),_:1},8,["options"]),H(O(ce),{size:"large",onClick:R,type:"info",secondary:""},{default:E(()=>[fe(he(O(m).down),1)]),_:1})]),_:1})]),_:1}),H(O(ho),{src:"/img/guide/desktop.png"})]),_:1}))}}),qo=po(Bo,[["__scopeId","data-v-978f9f72"]]);export{qo as D,Eo as _,Ho as a,Mo as b,Lo as c,Uo as d,Wo as e};
