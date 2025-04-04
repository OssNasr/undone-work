import{n as R,a as h}from"./chunk-K6CSEXPM-C51PS-rx.js";import{a as Pe}from"./index-DRfZakVl.js";function ve(e){var t,r,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var n=e.length;for(t=0;t<n;t++)e[t]&&(r=ve(e[t]))&&(o&&(o+=" "),o+=r)}else for(r in e)e[r]&&(o&&(o+=" "),o+=r);return o}function xe(){for(var e,t,r=0,o="",n=arguments.length;r<n;r++)(e=arguments[r])&&(t=ve(e))&&(o&&(o+=" "),o+=t);return o}const oe="-",Ee=e=>{const t=Ne(e),{conflictingClassGroups:r,conflictingClassGroupModifiers:o}=e;return{getClassGroupId:l=>{const p=l.split(oe);return p[0]===""&&p.length!==1&&p.shift(),ye(p,t)||Ie(l)},getConflictingClassGroupIds:(l,p)=>{const d=r[l]||[];return p&&o[l]?[...d,...o[l]]:d}}},ye=(e,t)=>{var l;if(e.length===0)return t.classGroupId;const r=e[0],o=t.nextPart.get(r),n=o?ye(e.slice(1),o):void 0;if(n)return n;if(t.validators.length===0)return;const s=e.join(oe);return(l=t.validators.find(({validator:p})=>p(s)))==null?void 0:l.classGroupId},pe=/^\[(.+)\]$/,Ie=e=>{if(pe.test(e)){const t=pe.exec(e)[1],r=t==null?void 0:t.substring(0,t.indexOf(":"));if(r)return"arbitrary.."+r}},Ne=e=>{const{theme:t,classGroups:r}=e,o={nextPart:new Map,validators:[]};for(const n in r)Y(r[n],o,n,t);return o},Y=(e,t,r,o)=>{e.forEach(n=>{if(typeof n=="string"){const s=n===""?t:fe(t,n);s.classGroupId=r;return}if(typeof n=="function"){if(je(n)){Y(n(o),t,r,o);return}t.validators.push({validator:n,classGroupId:r});return}Object.entries(n).forEach(([s,l])=>{Y(l,fe(t,s),r,o)})})},fe=(e,t)=>{let r=e;return t.split(oe).forEach(o=>{r.nextPart.has(o)||r.nextPart.set(o,{nextPart:new Map,validators:[]}),r=r.nextPart.get(o)}),r},je=e=>e.isThemeGetter,Ge=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,r=new Map,o=new Map;const n=(s,l)=>{r.set(s,l),t++,t>e&&(t=0,o=r,r=new Map)};return{get(s){let l=r.get(s);if(l!==void 0)return l;if((l=o.get(s))!==void 0)return n(s,l),l},set(s,l){r.has(s)?r.set(s,l):n(s,l)}}},ee="!",re=":",Ve=re.length,Te=e=>{const{prefix:t,experimentalParseClassName:r}=e;let o=n=>{const s=[];let l=0,p=0,d=0,f;for(let y=0;y<n.length;y++){let w=n[y];if(l===0&&p===0){if(w===re){s.push(n.slice(d,y)),d=y+Ve;continue}if(w==="/"){f=y;continue}}w==="["?l++:w==="]"?l--:w==="("?p++:w===")"&&p--}const g=s.length===0?n:n.substring(d),x=Oe(g),C=x!==g,P=f&&f>d?f-d:void 0;return{modifiers:s,hasImportantModifier:C,baseClassName:x,maybePostfixModifierPosition:P}};if(t){const n=t+re,s=o;o=l=>l.startsWith(n)?s(l.substring(n.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:l,maybePostfixModifierPosition:void 0}}if(r){const n=o;o=s=>r({className:s,parseClassName:n})}return o},Oe=e=>e.endsWith(ee)?e.substring(0,e.length-1):e.startsWith(ee)?e.substring(1):e,Le=e=>{const t=Object.fromEntries(e.orderSensitiveModifiers.map(o=>[o,!0]));return o=>{if(o.length<=1)return o;const n=[];let s=[];return o.forEach(l=>{l[0]==="["||t[l]?(n.push(...s.sort(),l),s=[]):s.push(l)}),n.push(...s.sort()),n}},_e=e=>({cache:Ge(e.cacheSize),parseClassName:Te(e),sortModifiers:Le(e),...Ee(e)}),Fe=/\s+/,We=(e,t)=>{const{parseClassName:r,getClassGroupId:o,getConflictingClassGroupIds:n,sortModifiers:s}=t,l=[],p=e.trim().split(Fe);let d="";for(let f=p.length-1;f>=0;f-=1){const g=p[f],{isExternal:x,modifiers:C,hasImportantModifier:P,baseClassName:y,maybePostfixModifierPosition:w}=r(g);if(x){d=g+(d.length>0?" "+d:d);continue}let S=!!w,E=o(S?y.substring(0,w):y);if(!E){if(!S){d=g+(d.length>0?" "+d:d);continue}if(E=o(y),!E){d=g+(d.length>0?" "+d:d);continue}S=!1}const F=s(C).join(":"),W=P?F+ee:F,G=W+E;if(l.includes(G))continue;l.push(G);const V=n(E,S);for(let c=0;c<V.length;++c){const z=V[c];l.push(W+z)}d=g+(d.length>0?" "+d:d)}return d};function Be(){let e=0,t,r,o="";for(;e<arguments.length;)(t=arguments[e++])&&(r=we(t))&&(o&&(o+=" "),o+=r);return o}const we=e=>{if(typeof e=="string")return e;let t,r="";for(let o=0;o<e.length;o++)e[o]&&(t=we(e[o]))&&(r&&(r+=" "),r+=t);return r};function $e(e,...t){let r,o,n,s=l;function l(d){const f=t.reduce((g,x)=>x(g),e());return r=_e(f),o=r.cache.get,n=r.cache.set,s=p,p(d)}function p(d){const f=o(d);if(f)return f;const g=We(d,r);return n(d,g),g}return function(){return s(Be.apply(null,arguments))}}const m=e=>{const t=r=>r[e]||[];return t.isThemeGetter=!0,t},ke=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Ce=/^\((?:(\w[\w-]*):)?(.+)\)$/i,Ue=/^\d+\/\d+$/,De=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,He=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,qe=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,Je=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Ke=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,O=e=>Ue.test(e),u=e=>!!e&&!Number.isNaN(Number(e)),N=e=>!!e&&Number.isInteger(Number(e)),be=e=>e.endsWith("%")&&u(e.slice(0,-1)),M=e=>De.test(e),Xe=()=>!0,Ze=e=>He.test(e)&&!qe.test(e),ne=()=>!1,Qe=e=>Je.test(e),Ye=e=>Ke.test(e),er=e=>!i(e)&&!a(e),rr=e=>L(e,Ae,ne),i=e=>ke.test(e),j=e=>L(e,Re,Ze),Q=e=>L(e,pr,u),tr=e=>L(e,ze,ne),or=e=>L(e,Se,Ye),nr=e=>L(e,ne,Qe),a=e=>Ce.test(e),q=e=>_(e,Re),sr=e=>_(e,fr),ir=e=>_(e,ze),ar=e=>_(e,Ae),lr=e=>_(e,Se),cr=e=>_(e,br,!0),L=(e,t,r)=>{const o=ke.exec(e);return o?o[1]?t(o[1]):r(o[2]):!1},_=(e,t,r=!1)=>{const o=Ce.exec(e);return o?o[1]?t(o[1]):r:!1},ze=e=>e==="position",dr=new Set(["image","url"]),Se=e=>dr.has(e),ur=new Set(["length","size","percentage"]),Ae=e=>ur.has(e),Re=e=>e==="length",pr=e=>e==="number",fr=e=>e==="family-name",br=e=>e==="shadow",gr=()=>{const e=m("color"),t=m("font"),r=m("text"),o=m("font-weight"),n=m("tracking"),s=m("leading"),l=m("breakpoint"),p=m("container"),d=m("spacing"),f=m("radius"),g=m("shadow"),x=m("inset-shadow"),C=m("drop-shadow"),P=m("blur"),y=m("perspective"),w=m("aspect"),S=m("ease"),E=m("animate"),F=()=>["auto","avoid","all","avoid-page","page","left","right","column"],W=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],G=()=>["auto","hidden","clip","visible","scroll"],V=()=>["auto","contain","none"],c=()=>[a,i,d],z=()=>[O,"full","auto",...c()],ie=()=>[N,"none","subgrid",a,i],ae=()=>["auto",{span:["full",N,a,i]},a,i],B=()=>[N,"auto",a,i],le=()=>["auto","min","max","fr",a,i],K=()=>["start","end","center","between","around","evenly","stretch","baseline"],T=()=>["start","end","center","stretch"],A=()=>["auto",...c()],I=()=>[O,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...c()],b=()=>[e,a,i],X=()=>[be,j],v=()=>["","none","full",f,a,i],k=()=>["",u,q,j],$=()=>["solid","dashed","dotted","double"],ce=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],de=()=>["","none",P,a,i],ue=()=>["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",a,i],U=()=>["none",u,a,i],D=()=>["none",u,a,i],Z=()=>[u,a,i],H=()=>[O,"full",...c()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[M],breakpoint:[M],color:[Xe],container:[M],"drop-shadow":[M],ease:["in","out","in-out"],font:[er],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[M],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[M],shadow:[M],spacing:["px",u],text:[M],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",O,i,a,w]}],container:["container"],columns:[{columns:[u,i,a,p]}],"break-after":[{"break-after":F()}],"break-before":[{"break-before":F()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...W(),i,a]}],overflow:[{overflow:G()}],"overflow-x":[{"overflow-x":G()}],"overflow-y":[{"overflow-y":G()}],overscroll:[{overscroll:V()}],"overscroll-x":[{"overscroll-x":V()}],"overscroll-y":[{"overscroll-y":V()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:z()}],"inset-x":[{"inset-x":z()}],"inset-y":[{"inset-y":z()}],start:[{start:z()}],end:[{end:z()}],top:[{top:z()}],right:[{right:z()}],bottom:[{bottom:z()}],left:[{left:z()}],visibility:["visible","invisible","collapse"],z:[{z:[N,"auto",a,i]}],basis:[{basis:[O,"full","auto",p,...c()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[u,O,"auto","initial","none",i]}],grow:[{grow:["",u,a,i]}],shrink:[{shrink:["",u,a,i]}],order:[{order:[N,"first","last","none",a,i]}],"grid-cols":[{"grid-cols":ie()}],"col-start-end":[{col:ae()}],"col-start":[{"col-start":B()}],"col-end":[{"col-end":B()}],"grid-rows":[{"grid-rows":ie()}],"row-start-end":[{row:ae()}],"row-start":[{"row-start":B()}],"row-end":[{"row-end":B()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":le()}],"auto-rows":[{"auto-rows":le()}],gap:[{gap:c()}],"gap-x":[{"gap-x":c()}],"gap-y":[{"gap-y":c()}],"justify-content":[{justify:[...K(),"normal"]}],"justify-items":[{"justify-items":[...T(),"normal"]}],"justify-self":[{"justify-self":["auto",...T()]}],"align-content":[{content:["normal",...K()]}],"align-items":[{items:[...T(),"baseline"]}],"align-self":[{self:["auto",...T(),"baseline"]}],"place-content":[{"place-content":K()}],"place-items":[{"place-items":[...T(),"baseline"]}],"place-self":[{"place-self":["auto",...T()]}],p:[{p:c()}],px:[{px:c()}],py:[{py:c()}],ps:[{ps:c()}],pe:[{pe:c()}],pt:[{pt:c()}],pr:[{pr:c()}],pb:[{pb:c()}],pl:[{pl:c()}],m:[{m:A()}],mx:[{mx:A()}],my:[{my:A()}],ms:[{ms:A()}],me:[{me:A()}],mt:[{mt:A()}],mr:[{mr:A()}],mb:[{mb:A()}],ml:[{ml:A()}],"space-x":[{"space-x":c()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":c()}],"space-y-reverse":["space-y-reverse"],size:[{size:I()}],w:[{w:[p,"screen",...I()]}],"min-w":[{"min-w":[p,"screen","none",...I()]}],"max-w":[{"max-w":[p,"screen","none","prose",{screen:[l]},...I()]}],h:[{h:["screen",...I()]}],"min-h":[{"min-h":["screen","none",...I()]}],"max-h":[{"max-h":["screen",...I()]}],"font-size":[{text:["base",r,q,j]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[o,a,Q]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",be,i]}],"font-family":[{font:[sr,i,t]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[n,a,i]}],"line-clamp":[{"line-clamp":[u,"none",a,Q]}],leading:[{leading:[s,...c()]}],"list-image":[{"list-image":["none",a,i]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",a,i]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:b()}],"text-color":[{text:b()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...$(),"wavy"]}],"text-decoration-thickness":[{decoration:[u,"from-font","auto",a,j]}],"text-decoration-color":[{decoration:b()}],"underline-offset":[{"underline-offset":[u,"auto",a,i]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:c()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",a,i]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",a,i]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...W(),ir,tr]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","space","round"]}]}],"bg-size":[{bg:["auto","cover","contain",ar,rr]}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},N,a,i],radial:["",a,i],conic:[N,a,i]},lr,or]}],"bg-color":[{bg:b()}],"gradient-from-pos":[{from:X()}],"gradient-via-pos":[{via:X()}],"gradient-to-pos":[{to:X()}],"gradient-from":[{from:b()}],"gradient-via":[{via:b()}],"gradient-to":[{to:b()}],rounded:[{rounded:v()}],"rounded-s":[{"rounded-s":v()}],"rounded-e":[{"rounded-e":v()}],"rounded-t":[{"rounded-t":v()}],"rounded-r":[{"rounded-r":v()}],"rounded-b":[{"rounded-b":v()}],"rounded-l":[{"rounded-l":v()}],"rounded-ss":[{"rounded-ss":v()}],"rounded-se":[{"rounded-se":v()}],"rounded-ee":[{"rounded-ee":v()}],"rounded-es":[{"rounded-es":v()}],"rounded-tl":[{"rounded-tl":v()}],"rounded-tr":[{"rounded-tr":v()}],"rounded-br":[{"rounded-br":v()}],"rounded-bl":[{"rounded-bl":v()}],"border-w":[{border:k()}],"border-w-x":[{"border-x":k()}],"border-w-y":[{"border-y":k()}],"border-w-s":[{"border-s":k()}],"border-w-e":[{"border-e":k()}],"border-w-t":[{"border-t":k()}],"border-w-r":[{"border-r":k()}],"border-w-b":[{"border-b":k()}],"border-w-l":[{"border-l":k()}],"divide-x":[{"divide-x":k()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":k()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...$(),"hidden","none"]}],"divide-style":[{divide:[...$(),"hidden","none"]}],"border-color":[{border:b()}],"border-color-x":[{"border-x":b()}],"border-color-y":[{"border-y":b()}],"border-color-s":[{"border-s":b()}],"border-color-e":[{"border-e":b()}],"border-color-t":[{"border-t":b()}],"border-color-r":[{"border-r":b()}],"border-color-b":[{"border-b":b()}],"border-color-l":[{"border-l":b()}],"divide-color":[{divide:b()}],"outline-style":[{outline:[...$(),"none","hidden"]}],"outline-offset":[{"outline-offset":[u,a,i]}],"outline-w":[{outline:["",u,q,j]}],"outline-color":[{outline:[e]}],shadow:[{shadow:["","none",g,cr,nr]}],"shadow-color":[{shadow:b()}],"inset-shadow":[{"inset-shadow":["none",a,i,x]}],"inset-shadow-color":[{"inset-shadow":b()}],"ring-w":[{ring:k()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:b()}],"ring-offset-w":[{"ring-offset":[u,j]}],"ring-offset-color":[{"ring-offset":b()}],"inset-ring-w":[{"inset-ring":k()}],"inset-ring-color":[{"inset-ring":b()}],opacity:[{opacity:[u,a,i]}],"mix-blend":[{"mix-blend":[...ce(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":ce()}],filter:[{filter:["","none",a,i]}],blur:[{blur:de()}],brightness:[{brightness:[u,a,i]}],contrast:[{contrast:[u,a,i]}],"drop-shadow":[{"drop-shadow":["","none",C,a,i]}],grayscale:[{grayscale:["",u,a,i]}],"hue-rotate":[{"hue-rotate":[u,a,i]}],invert:[{invert:["",u,a,i]}],saturate:[{saturate:[u,a,i]}],sepia:[{sepia:["",u,a,i]}],"backdrop-filter":[{"backdrop-filter":["","none",a,i]}],"backdrop-blur":[{"backdrop-blur":de()}],"backdrop-brightness":[{"backdrop-brightness":[u,a,i]}],"backdrop-contrast":[{"backdrop-contrast":[u,a,i]}],"backdrop-grayscale":[{"backdrop-grayscale":["",u,a,i]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[u,a,i]}],"backdrop-invert":[{"backdrop-invert":["",u,a,i]}],"backdrop-opacity":[{"backdrop-opacity":[u,a,i]}],"backdrop-saturate":[{"backdrop-saturate":[u,a,i]}],"backdrop-sepia":[{"backdrop-sepia":["",u,a,i]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":c()}],"border-spacing-x":[{"border-spacing-x":c()}],"border-spacing-y":[{"border-spacing-y":c()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",a,i]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[u,"initial",a,i]}],ease:[{ease:["linear","initial",S,a,i]}],delay:[{delay:[u,a,i]}],animate:[{animate:["none",E,a,i]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[y,a,i]}],"perspective-origin":[{"perspective-origin":ue()}],rotate:[{rotate:U()}],"rotate-x":[{"rotate-x":U()}],"rotate-y":[{"rotate-y":U()}],"rotate-z":[{"rotate-z":U()}],scale:[{scale:D()}],"scale-x":[{"scale-x":D()}],"scale-y":[{"scale-y":D()}],"scale-z":[{"scale-z":D()}],"scale-3d":["scale-3d"],skew:[{skew:Z()}],"skew-x":[{"skew-x":Z()}],"skew-y":[{"skew-y":Z()}],transform:[{transform:[a,i,"","none","gpu","cpu"]}],"transform-origin":[{origin:ue()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:H()}],"translate-x":[{"translate-x":H()}],"translate-y":[{"translate-y":H()}],"translate-z":[{"translate-z":H()}],"translate-none":["translate-none"],accent:[{accent:b()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:b()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",a,i]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":c()}],"scroll-mx":[{"scroll-mx":c()}],"scroll-my":[{"scroll-my":c()}],"scroll-ms":[{"scroll-ms":c()}],"scroll-me":[{"scroll-me":c()}],"scroll-mt":[{"scroll-mt":c()}],"scroll-mr":[{"scroll-mr":c()}],"scroll-mb":[{"scroll-mb":c()}],"scroll-ml":[{"scroll-ml":c()}],"scroll-p":[{"scroll-p":c()}],"scroll-px":[{"scroll-px":c()}],"scroll-py":[{"scroll-py":c()}],"scroll-ps":[{"scroll-ps":c()}],"scroll-pe":[{"scroll-pe":c()}],"scroll-pt":[{"scroll-pt":c()}],"scroll-pr":[{"scroll-pr":c()}],"scroll-pb":[{"scroll-pb":c()}],"scroll-pl":[{"scroll-pl":c()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",a,i]}],fill:[{fill:["none",...b()]}],"stroke-w":[{stroke:[u,q,j,Q]}],stroke:[{stroke:["none",...b()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["before","after","placeholder","file","marker","selection","first-line","first-letter","backdrop","*","**"]}},mr=$e(gr);function J(...e){return mr(xe(e))}function Ar({className:e,...t}){return R.jsx("div",{"data-slot":"card",className:J("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",e),...t})}function Rr({className:e,...t}){return R.jsx("div",{"data-slot":"card-title",className:J("leading-none font-semibold",e),...t})}function Mr({className:e,...t}){return R.jsx("div",{"data-slot":"card-content",className:J("px-6",e),...t})}function ge(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function Me(...e){return t=>{let r=!1;const o=e.map(n=>{const s=ge(n,t);return!r&&typeof s=="function"&&(r=!0),s});if(r)return()=>{for(let n=0;n<o.length;n++){const s=o[n];typeof s=="function"?s():ge(e[n],null)}}}}function Pr(...e){return h.useCallback(Me(...e),e)}var se=h.forwardRef((e,t)=>{const{children:r,...o}=e,n=h.Children.toArray(r),s=n.find(vr);if(s){const l=s.props.children,p=n.map(d=>d===s?h.Children.count(l)>1?h.Children.only(null):h.isValidElement(l)?l.props.children:null:d);return R.jsx(te,{...o,ref:t,children:h.isValidElement(l)?h.cloneElement(l,void 0,p):null})}return R.jsx(te,{...o,ref:t,children:r})});se.displayName="Slot";var te=h.forwardRef((e,t)=>{const{children:r,...o}=e;if(h.isValidElement(r)){const n=yr(r),s=xr(o,r.props);return r.type!==h.Fragment&&(s.ref=t?Me(t,n):n),h.cloneElement(r,s)}return h.Children.count(r)>1?h.Children.only(null):null});te.displayName="SlotClone";var hr=({children:e})=>R.jsx(R.Fragment,{children:e});function vr(e){return h.isValidElement(e)&&e.type===hr}function xr(e,t){const r={...t};for(const o in t){const n=e[o],s=t[o];/^on[A-Z]/.test(o)?n&&s?r[o]=(...p)=>{s(...p),n(...p)}:n&&(r[o]=n):o==="style"?r[o]={...n,...s}:o==="className"&&(r[o]=[n,s].filter(Boolean).join(" "))}return{...e,...r}}function yr(e){var o,n;let t=(o=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:o.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(t=(n=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:n.get,r=t&&"isReactWarning"in t&&t.isReactWarning,r?e.props.ref:e.props.ref||e.ref)}const me=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,he=xe,wr=(e,t)=>r=>{var o;if((t==null?void 0:t.variants)==null)return he(e,r==null?void 0:r.class,r==null?void 0:r.className);const{variants:n,defaultVariants:s}=t,l=Object.keys(n).map(f=>{const g=r==null?void 0:r[f],x=s==null?void 0:s[f];if(g===null)return null;const C=me(g)||me(x);return n[f][C]}),p=r&&Object.entries(r).reduce((f,g)=>{let[x,C]=g;return C===void 0||(f[x]=C),f},{}),d=t==null||(o=t.compoundVariants)===null||o===void 0?void 0:o.reduce((f,g)=>{let{class:x,className:C,...P}=g;return Object.entries(P).every(y=>{let[w,S]=y;return Array.isArray(S)?S.includes({...s,...p}[w]):{...s,...p}[w]===S})?[...f,x,C]:f},[]);return he(e,l,d,r==null?void 0:r.class,r==null?void 0:r.className)},kr=wr("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",destructive:"bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9"}},defaultVariants:{variant:"default",size:"default"}});function Er({className:e,variant:t,size:r,asChild:o=!1,...n}){const s=o?se:"button";return R.jsx(s,{"data-slot":"button",className:J(kr({variant:t,size:r,className:e})),...n})}var Cr=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],Ir=Cr.reduce((e,t)=>{const r=h.forwardRef((o,n)=>{const{asChild:s,...l}=o,p=s?se:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),R.jsx(p,{...l,ref:n})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function Nr(e,t){e&&Pe.flushSync(()=>e.dispatchEvent(t))}export{Er as B,Ar as C,Ir as P,se as S,J as a,Mr as b,xe as c,Rr as d,kr as e,Nr as f,Pr as u};
