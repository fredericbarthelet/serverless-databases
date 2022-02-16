var _t=Object.defineProperty,xt=Object.defineProperties;var Ft=Object.getOwnPropertyDescriptors;var Pe=Object.getOwnPropertySymbols;var Ot=Object.prototype.hasOwnProperty,At=Object.prototype.propertyIsEnumerable;var Ne=(e,s,t)=>s in e?_t(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,qe=(e,s)=>{for(var t in s||(s={}))Ot.call(s,t)&&Ne(e,t,s[t]);if(Pe)for(var t of Pe(s))At.call(s,t)&&Ne(e,t,s[t]);return e},We=(e,s)=>xt(e,Ft(s));import{j as p,B as St,A as Vt,a as te,T as wt,I as pt,d as kt,b as jt,c as Dt,R as S,r as G,C as Ct,S as Et,F as Rt,e as Lt,f as Bt,g as Tt,h as Mt,i as Ut,k as It,l as Pt}from"./vendor.d956fedb.js";const Nt=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const c of i)if(c.type==="childList")for(const y of c.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&n(y)}).observe(document,{childList:!0,subtree:!0});function t(i){const c={};return i.integrity&&(c.integrity=i.integrity),i.referrerpolicy&&(c.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?c.credentials="include":i.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function n(i){if(i.ep)return;i.ep=!0;const c=t(i);fetch(i.href,c)}};Nt();const qt=()=>p(St,{sx:{flexGrow:1},children:p(Vt,{position:"static",children:te(wt,{children:[p(pt,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},children:p(kt,{})}),p(jt,{variant:"h6",component:"div",sx:{flexGrow:1},children:"Serverless Databases"}),p(Dt,{color:"inherit",children:"Login"})]})})});var re=e=>e.type==="checkbox",$=e=>e instanceof Date,R=e=>e==null;const et=e=>typeof e=="object";var D=e=>!R(e)&&!Array.isArray(e)&&et(e)&&!$(e),tt=e=>D(e)&&e.target?re(e.target)?e.target.checked:e.target.value:e,Wt=e=>e.substring(0,e.search(/.\d/))||e,st=(e,s)=>[...e].some(t=>Wt(s)===t),de=e=>e.filter(Boolean),w=e=>e===void 0,d=(e,s,t)=>{if(!s||!D(e))return t;const n=de(s.split(/[,[\].]+?/)).reduce((i,c)=>R(i)?i:i[c],e);return w(n)||n===e?w(e[s])?t:e[s]:n};const ce={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},U={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},q={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};var ke=(e,s)=>{const t=Object.assign({},e);return delete t[s],t};const Ht=S.createContext(null),je=()=>S.useContext(Ht);var rt=(e,s,t,n=!0)=>{const i={};for(const c in e)Object.defineProperty(i,c,{get:()=>{const y=c;return s[y]!==U.all&&(s[y]=!n||U.all),t&&(t[y]=!0),e[y]}});return i},L=e=>D(e)&&!Object.keys(e).length,it=(e,s,t)=>{const n=ke(e,"name");return L(n)||Object.keys(n).length>=Object.keys(s).length||Object.keys(n).find(i=>s[i]===(!t||U.all))},ae=e=>Array.isArray(e)?e:[e],nt=(e,s,t)=>t&&s?e===s:!e||!s||e===s||ae(e).some(n=>n&&(n.startsWith(s)||s.startsWith(n)));function De(e){const s=S.useRef(e);s.current=e,S.useEffect(()=>{const t=i=>{i&&i.unsubscribe()},n=!e.disabled&&s.current.subject.subscribe({next:s.current.callback});return()=>t(n)},[e.disabled])}function Gt(e){const s=je(),{control:t=s.control,disabled:n,name:i,exact:c}=e||{},[y,h]=S.useState(t._formState),F=S.useRef({isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1}),_=S.useRef(i),A=S.useRef(!0);_.current=i;const v=S.useCallback(f=>A.current&&nt(_.current,f.name,c)&&it(f,F.current)&&h(Object.assign(Object.assign({},t._formState),f)),[t,c]);return De({disabled:n,callback:v,subject:t._subjects.state}),S.useEffect(()=>()=>{A.current=!1},[]),rt(y,t._proxyFormState,F.current,!1)}var P=e=>typeof e=="string",at=(e,s,t,n)=>{const i=Array.isArray(e);return P(e)?(n&&s.watch.add(e),d(t,e)):i?e.map(c=>(n&&s.watch.add(c),d(t,c))):(n&&(s.watchAll=!0),t)},ye=e=>typeof e=="function",Ce=e=>{for(const s in e)if(ye(e[s]))return!0;return!1};function Kt(e){const s=je(),{control:t=s.control,name:n,defaultValue:i,disabled:c,exact:y}=e||{},h=S.useRef(n);h.current=n;const F=S.useCallback(v=>{if(nt(h.current,v.name,y)){const f=at(h.current,t._names,v.values||t._formValues);A(w(h.current)||D(f)&&!Ce(f)?Object.assign({},f):Array.isArray(f)?[...f]:w(f)?i:f)}},[t,y,i]);De({disabled:c,subject:t._subjects.watch,callback:F});const[_,A]=S.useState(w(i)?t._getWatch(n):i);return S.useEffect(()=>{t._removeUnmounted()}),_}function Qt(e){const s=je(),{name:t,control:n=s.control,shouldUnregister:i}=e,c=st(n._names.array,t),y=Kt({control:n,name:t,defaultValue:d(n._formValues,t,d(n._defaultValues,t,e.defaultValue)),exact:!0}),h=Gt({control:n,name:t}),F=S.useRef(n.register(t,Object.assign(Object.assign({},e.rules),{value:y})));return S.useEffect(()=>{const _=(A,v)=>{const f=d(n._fields,A);f&&(f._f.mount=v)};return _(t,!0),()=>{const A=n._options.shouldUnregister||i;(c?A&&!n._stateFlags.action:A)?n.unregister(t):_(t,!1)}},[t,n,c,i]),{field:{name:t,value:y,onChange:S.useCallback(_=>{F.current.onChange({target:{value:tt(_),name:t},type:ce.CHANGE})},[t]),onBlur:S.useCallback(()=>{F.current.onBlur({target:{value:d(n._formValues,t),name:t},type:ce.BLUR})},[t,n]),ref:S.useCallback(_=>{const A=d(n._fields,t);_&&A&&_.focus&&(A._f.ref={focus:()=>_.focus(),setCustomValidity:v=>_.setCustomValidity(v),reportValidity:()=>_.reportValidity()})},[t,n._fields])},formState:h,fieldState:n.getFieldState(t,h)}}const Yt=e=>e.render(Qt(e));var $t=(e,s,t,n,i)=>s?Object.assign(Object.assign({},t[e]),{types:Object.assign(Object.assign({},t[e]&&t[e].types?t[e].types:{}),{[n]:i||!0})}):{},Ee=e=>/^\w*$/.test(e),ot=e=>de(e.replace(/["|']|\]/g,"").split(/\.|\[/));function V(e,s,t){let n=-1;const i=Ee(s)?[s]:ot(s),c=i.length,y=c-1;for(;++n<c;){const h=i[n];let F=t;if(n!==y){const _=e[h];F=D(_)||Array.isArray(_)?_:isNaN(+i[n+1])?{}:[]}e[h]=F,e=e[h]}return e}const we=(e,s,t)=>{for(const n of t||Object.keys(e)){const i=d(e,n);if(i){const c=i._f,y=ke(i,"_f");if(c&&s(c.name)){if(c.ref.focus&&w(c.ref.focus()))break;if(c.refs){c.refs[0].focus();break}}else D(y)&&we(y,s)}}};var He=(e,s,t)=>!t&&(s.watchAll||s.watch.has(e)||[...s.watch].some(n=>e.startsWith(n)&&/^\.\w+/.test(e.slice(n.length))));function Y(e){let s;const t=Array.isArray(e);if(e instanceof Date)s=new Date(e);else if(e instanceof Set)s=new Set(e);else if(t||D(e)){s=t?[]:{};for(const n in e){if(ye(e[n])){s=e;break}s[n]=Y(e[n])}}else return e;return s}function Oe(){let e=[];return{get observers(){return e},next:i=>{for(const c of e)c.next(i)},subscribe:i=>(e.push(i),{unsubscribe:()=>{e=e.filter(c=>c!==i)}}),unsubscribe:()=>{e=[]}}}var le=e=>R(e)||!et(e);function z(e,s){if(le(e)||le(s))return e===s;if($(e)&&$(s))return e.getTime()===s.getTime();const t=Object.keys(e),n=Object.keys(s);if(t.length!==n.length)return!1;for(const i of t){const c=e[i];if(!n.includes(i))return!1;if(i!=="ref"){const y=s[i];if($(c)&&$(y)||D(c)&&D(y)||Array.isArray(c)&&Array.isArray(y)?!z(c,y):c!==y)return!1}}return!0}var Ge=e=>({isOnSubmit:!e||e===U.onSubmit,isOnBlur:e===U.onBlur,isOnChange:e===U.onChange,isOnAll:e===U.all,isOnTouch:e===U.onTouched}),se=e=>typeof e=="boolean",Re=e=>e.type==="file",pe=e=>e instanceof HTMLElement,ct=e=>e.type==="select-multiple",Le=e=>e.type==="radio",zt=e=>Le(e)||re(e),Ke=typeof window!="undefined"&&typeof window.HTMLElement!="undefined"&&typeof document!="undefined",Ae=e=>pe(e)&&e.isConnected;function Jt(e,s){const t=s.slice(0,-1).length;let n=0;for(;n<t;)e=w(e)?n++:e[s[n++]];return e}function C(e,s){const t=Ee(s)?[s]:ot(s),n=t.length==1?e:Jt(e,t),i=t[t.length-1];let c;n&&delete n[i];for(let y=0;y<t.slice(0,-1).length;y++){let h=-1,F;const _=t.slice(0,-(y+1)),A=_.length-1;for(y>0&&(c=e);++h<_.length;){const v=_[h];F=F?F[v]:e[v],A===h&&(D(F)&&L(F)||Array.isArray(F)&&!F.filter(f=>D(f)&&!L(f)||se(f)).length)&&(c?delete c[v]:delete e[v]),c=F}}return e}function ue(e,s={}){const t=Array.isArray(e);if(D(e)||t)for(const n in e)Array.isArray(e[n])||D(e[n])&&!Ce(e[n])?(s[n]=Array.isArray(e[n])?[]:{},ue(e[n],s[n])):R(e[n])||(s[n]=!0);return s}function lt(e,s,t){const n=Array.isArray(e);if(D(e)||n)for(const i in e)Array.isArray(e[i])||D(e[i])&&!Ce(e[i])?w(s)||le(t[i])?t[i]=Array.isArray(e[i])?ue(e[i],[]):Object.assign({},ue(e[i])):lt(e[i],R(s)?{}:s[i],t[i]):t[i]=!z(e[i],s[i]);return t}var Qe=(e,s)=>lt(e,s,ue(s));const Ye={value:!1,isValid:!1},$e={value:!0,isValid:!0};var ut=e=>{if(Array.isArray(e)){if(e.length>1){const s=e.filter(t=>t&&t.checked&&!t.disabled).map(t=>t.value);return{value:s,isValid:!!s.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!w(e[0].attributes.value)?w(e[0].value)||e[0].value===""?$e:{value:e[0].value,isValid:!0}:$e:Ye}return Ye},ft=(e,{valueAsNumber:s,valueAsDate:t,setValueAs:n})=>w(e)?e:s?e===""?NaN:+e:t&&P(e)?new Date(e):n?n(e):e;const ze={isValid:!1,value:null};var dt=e=>Array.isArray(e)?e.reduce((s,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:s,ze):ze;function Se(e){const s=e.ref;if(!(e.refs?e.refs.every(t=>t.disabled):s.disabled))return Re(s)?s.files:Le(s)?dt(e.refs).value:ct(s)?[...s.selectedOptions].map(({value:t})=>t):re(s)?ut(e.refs).value:ft(w(s.value)?e.ref.value:s.value,e)}var Xt=(e,s,t,n)=>{const i={};for(const c of e){const y=d(s,c);y&&V(i,c,y._f)}return{criteriaMode:t,names:[...e],fields:i,shouldUseNativeValidation:n}},fe=e=>e instanceof RegExp,ee=e=>w(e)?void 0:fe(e)?e.source:D(e)?fe(e.value)?e.value.source:e.value:e,Zt=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function Je(e,s,t){const n=d(e,t);if(n||Ee(t))return{error:n,name:t};const i=t.split(".");for(;i.length;){const c=i.join("."),y=d(s,c),h=d(e,c);if(y&&!Array.isArray(y)&&t!==c)return{name:t};if(h&&h.type)return{name:c,error:h};i.pop()}return{name:t}}var es=(e,s,t,n,i)=>i.isOnAll?!1:!t&&i.isOnTouch?!(s||e):(t?n.isOnBlur:i.isOnBlur)?!e:(t?n.isOnChange:i.isOnChange)?e:!0,ts=(e,s)=>!de(d(e,s)).length&&C(e,s),oe=e=>P(e)||S.isValidElement(e);function Xe(e,s,t="validate"){if(oe(e)||Array.isArray(e)&&e.every(oe)||se(e)&&!e)return{type:t,message:oe(e)?e:"",ref:s}}var Q=e=>D(e)&&!fe(e)?e:{value:e,message:""},Ze=async(e,s,t,n)=>{const{ref:i,refs:c,required:y,maxLength:h,minLength:F,min:_,max:A,pattern:v,validate:f,name:M,valueAsNumber:ge,mount:ie,disabled:he}=e._f;if(!ie||he)return{};const E=c?c[0]:i,N=x=>{n&&E.reportValidity&&(E.setCustomValidity(se(x)?"":x||" "),E.reportValidity())},j={},J=Le(i),X=re(i),be=J||X,I=(ge||Re(i))&&!i.value||s===""||Array.isArray(s)&&!s.length,K=$t.bind(null,M,t,j),W=(x,m,k,B=q.maxLength,T=q.minLength)=>{const Z=x?m:k;j[M]=Object.assign({type:x?B:T,message:Z,ref:i},K(x?B:T,Z))};if(y&&(!be&&(I||R(s))||se(s)&&!s||X&&!ut(c).isValid||J&&!dt(c).isValid)){const{value:x,message:m}=oe(y)?{value:!!y,message:y}:Q(y);if(x&&(j[M]=Object.assign({type:q.required,message:m,ref:E},K(q.required,m)),!t))return N(m),j}if(!I&&(!R(_)||!R(A))){let x,m;const k=Q(A),B=Q(_);if(isNaN(s)){const T=i.valueAsDate||new Date(s);P(k.value)&&(x=T>new Date(k.value)),P(B.value)&&(m=T<new Date(B.value))}else{const T=i.valueAsNumber||+s;R(k.value)||(x=T>k.value),R(B.value)||(m=T<B.value)}if((x||m)&&(W(!!x,k.message,B.message,q.max,q.min),!t))return N(j[M].message),j}if((h||F)&&!I&&P(s)){const x=Q(h),m=Q(F),k=!R(x.value)&&s.length>x.value,B=!R(m.value)&&s.length<m.value;if((k||B)&&(W(k,x.message,m.message),!t))return N(j[M].message),j}if(v&&!I&&P(s)){const{value:x,message:m}=Q(v);if(fe(x)&&!s.match(x)&&(j[M]=Object.assign({type:q.pattern,message:m,ref:i},K(q.pattern,m)),!t))return N(m),j}if(f){if(ye(f)){const x=await f(s),m=Xe(x,E);if(m&&(j[M]=Object.assign(Object.assign({},m),K(q.validate,m.message)),!t))return N(m.message),j}else if(D(f)){let x={};for(const m in f){if(!L(x)&&!t)break;const k=Xe(await f[m](s),E,m);k&&(x=Object.assign(Object.assign({},k),K(m,k.message)),N(k.message),t&&(j[M]=x))}if(!L(x)&&(j[M]=Object.assign({ref:E},x),!t))return j}}return N(!0),j};const ss={mode:U.onSubmit,reValidateMode:U.onChange,shouldFocusError:!0};function rs(e={}){let s=Object.assign(Object.assign({},ss),e),t={isDirty:!1,isValidating:!1,dirtyFields:{},isSubmitted:!1,submitCount:0,touchedFields:{},isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,errors:{}},n={},i=s.defaultValues||{},c=s.shouldUnregister?{}:Y(i),y={action:!1,mount:!1,watch:!1},h={mount:new Set,unMount:new Set,array:new Set,watch:new Set},F,_=0,A={};const v={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},f={watch:Oe(),array:Oe(),state:Oe()},M=Ge(s.mode),ge=Ge(s.reValidateMode),ie=s.criteriaMode===U.all,he=(r,a)=>(...o)=>{clearTimeout(_),_=window.setTimeout(()=>r(...o),a)},E=async r=>{let a=!1;return v.isValid&&(a=s.resolver?L((await I()).errors):await W(n,!0),!r&&a!==t.isValid&&(t.isValid=a,f.state.next({isValid:a}))),a},N=(r,a=[],o,u,g=!0,l=!0)=>{if(u&&o){if(y.action=!0,l&&Array.isArray(d(n,r))){const b=o(d(n,r),u.argA,u.argB);g&&V(n,r,b)}if(v.errors&&l&&Array.isArray(d(t.errors,r))){const b=o(d(t.errors,r),u.argA,u.argB);g&&V(t.errors,r,b),ts(t.errors,r)}if(v.touchedFields&&Array.isArray(d(t.touchedFields,r))){const b=o(d(t.touchedFields,r),u.argA,u.argB);g&&V(t.touchedFields,r,b)}v.dirtyFields&&(t.dirtyFields=Qe(i,c)),f.state.next({isDirty:m(r,a),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else V(c,r,a)},j=(r,a)=>(V(t.errors,r,a),f.state.next({errors:t.errors})),J=(r,a,o,u)=>{const g=d(n,r);if(g){const l=d(c,r,w(o)?d(i,r):o);w(l)||u&&u.defaultChecked||a?V(c,r,a?l:Se(g._f)):T(r,l),y.mount&&E()}},X=(r,a,o,u,g)=>{let l=!1;const b={name:r},O=d(t.touchedFields,r);if(v.isDirty){const H=t.isDirty;t.isDirty=b.isDirty=m(),l=H!==b.isDirty}if(v.dirtyFields&&(!o||u)){const H=d(t.dirtyFields,r);z(d(i,r),a)?C(t.dirtyFields,r):V(t.dirtyFields,r,!0),b.dirtyFields=t.dirtyFields,l=l||H!==d(t.dirtyFields,r)}return o&&!O&&(V(t.touchedFields,r,o),b.touchedFields=t.touchedFields,l=l||v.touchedFields&&O!==o),l&&g&&f.state.next(b),l?b:{}},be=async(r,a,o,u,g)=>{const l=d(t.errors,a),b=v.isValid&&t.isValid!==o;if(e.delayError&&u?(F=F||he(j,e.delayError),F(a,u)):(clearTimeout(_),u?V(t.errors,a,u):C(t.errors,a)),((u?!z(l,u):l)||!L(g)||b)&&!r){const O=Object.assign(Object.assign(Object.assign({},g),b?{isValid:o}:{}),{errors:t.errors,name:a});t=Object.assign(Object.assign({},t),O),f.state.next(O)}A[a]--,v.isValidating&&!Object.values(A).some(O=>O)&&(f.state.next({isValidating:!1}),A={})},I=async r=>s.resolver?await s.resolver(Object.assign({},c),s.context,Xt(r||h.mount,n,s.criteriaMode,s.shouldUseNativeValidation)):{},K=async r=>{const{errors:a}=await I();if(r)for(const o of r){const u=d(a,o);u?V(t.errors,o,u):C(t.errors,o)}else t.errors=a;return a},W=async(r,a,o={valid:!0})=>{for(const u in r){const g=r[u];if(g){const l=g._f,b=ke(g,"_f");if(l){const O=await Ze(g,d(c,l.name),ie,s.shouldUseNativeValidation);if(O[l.name]&&(o.valid=!1,a))break;a||(O[l.name]?V(t.errors,l.name,O[l.name]):C(t.errors,l.name))}b&&await W(b,a,o)}}return o.valid},x=()=>{for(const r of h.unMount){const a=d(n,r);a&&(a._f.refs?a._f.refs.every(o=>!Ae(o)):!Ae(a._f.ref))&&_e(r)}h.unMount=new Set},m=(r,a)=>(r&&a&&V(c,r,a),!z(Te(),i)),k=(r,a,o)=>{const u=Object.assign({},y.mount?c:w(a)?i:P(r)?{[r]:a}:a);return at(r,h,u,o)},B=r=>de(d(y.mount?c:i,r,e.shouldUnregister?d(i,r,[]):[])),T=(r,a,o={})=>{const u=d(n,r);let g=a;if(u){const l=u._f;l&&(!l.disabled&&V(c,r,ft(a,l)),g=Ke&&pe(l.ref)&&R(a)?"":a,ct(l.ref)?[...l.ref.options].forEach(b=>b.selected=g.includes(b.value)):l.refs?re(l.ref)?l.refs.length>1?l.refs.forEach(b=>b.checked=Array.isArray(g)?!!g.find(O=>O===b.value):g===b.value):l.refs[0]&&(l.refs[0].checked=!!g):l.refs.forEach(b=>b.checked=b.value===g):Re(l.ref)?l.ref.value="":(l.ref.value=g,l.ref.type||f.watch.next({name:r})))}(o.shouldDirty||o.shouldTouch)&&X(r,g,o.shouldTouch,o.shouldDirty,!0),o.shouldValidate&&me(r)},Z=(r,a,o)=>{for(const u in a){const g=a[u],l=`${r}.${u}`,b=d(n,l);(h.array.has(r)||!le(g)||b&&!b._f)&&!$(g)?Z(l,g,o):T(l,g,o)}},ve=(r,a,o={})=>{const u=d(n,r),g=h.array.has(r),l=Y(a);V(c,r,l),g?(f.array.next({name:r,values:c}),(v.isDirty||v.dirtyFields)&&o.shouldDirty&&(t.dirtyFields=Qe(i,c),f.state.next({name:r,dirtyFields:t.dirtyFields,isDirty:m(r,l)}))):u&&!u._f&&!R(l)?Z(r,l,o):T(r,l,o),He(r,h)&&f.state.next({}),f.watch.next({name:r})},Be=async r=>{const a=r.target;let o=a.name;const u=d(n,o);if(u){let g,l;const b=a.type?Se(u._f):tt(r),O=r.type===ce.BLUR||r.type===ce.FOCUS_OUT,H=!Zt(u._f)&&!s.resolver&&!d(t.errors,o)&&!u._f.deps||es(O,d(t.touchedFields,o),t.isSubmitted,ge,M),ne=He(o,h,O);V(c,o,b),O?u._f.onBlur&&u._f.onBlur(r):u._f.onChange&&u._f.onChange(r);const Fe=X(o,b,O,!1),vt=!L(Fe)||ne;if(!O&&f.watch.next({name:o,type:r.type}),H)return vt&&f.state.next(Object.assign({name:o},ne?{}:Fe));if(!O&&ne&&f.state.next({}),A[o]=(A[o],1),f.state.next({isValidating:!0}),s.resolver){const{errors:Ue}=await I([o]),mt=Je(t.errors,n,o),Ie=Je(Ue,n,mt.name||o);g=Ie.error,o=Ie.name,l=L(Ue)}else g=(await Ze(u,d(c,o),ie,s.shouldUseNativeValidation))[o],l=await E(!0);u._f.deps&&me(u._f.deps),be(!1,o,l,g,Fe)}},me=async(r,a={})=>{let o,u;const g=ae(r);if(f.state.next({isValidating:!0}),s.resolver){const l=await K(w(r)?r:g);o=L(l),u=r?!g.some(b=>d(l,b)):o}else r?(u=(await Promise.all(g.map(async l=>{const b=d(n,l);return await W(b&&b._f?{[l]:b}:b)}))).every(Boolean),!(!u&&!t.isValid)&&E()):u=o=await W(n);return f.state.next(Object.assign(Object.assign(Object.assign({},!P(r)||v.isValid&&o!==t.isValid?{}:{name:r}),s.resolver?{isValid:o}:{}),{errors:t.errors,isValidating:!1})),a.shouldFocus&&!u&&we(n,l=>d(t.errors,l),r?g:h.mount),u},Te=r=>{const a=Object.assign(Object.assign({},i),y.mount?c:{});return w(r)?a:P(r)?d(a,r):r.map(o=>d(a,o))},Me=(r,a)=>({invalid:!!d((a||t).errors,r),isDirty:!!d((a||t).dirtyFields,r),isTouched:!!d((a||t).touchedFields,r),error:d((a||t).errors,r)}),gt=r=>{r?ae(r).forEach(a=>C(t.errors,a)):t.errors={},f.state.next({errors:t.errors})},ht=(r,a,o)=>{const u=(d(n,r,{_f:{}})._f||{}).ref;V(t.errors,r,Object.assign(Object.assign({},a),{ref:u})),f.state.next({name:r,errors:t.errors,isValid:!1}),o&&o.shouldFocus&&u&&u.focus&&u.focus()},bt=(r,a)=>ye(r)?f.watch.subscribe({next:o=>r(k(void 0,a),o)}):k(r,a,!0),_e=(r,a={})=>{for(const o of r?ae(r):h.mount)h.mount.delete(o),h.array.delete(o),d(n,o)&&(a.keepValue||(C(n,o),C(c,o)),!a.keepError&&C(t.errors,o),!a.keepDirty&&C(t.dirtyFields,o),!a.keepTouched&&C(t.touchedFields,o),!s.shouldUnregister&&!a.keepDefaultValue&&C(i,o));f.watch.next({}),f.state.next(Object.assign(Object.assign({},t),a.keepDirty?{isDirty:m()}:{})),!a.keepIsValid&&E()},xe=(r,a={})=>{let o=d(n,r);const u=se(a.disabled);return V(n,r,{_f:Object.assign(Object.assign(Object.assign({},o&&o._f?o._f:{ref:{name:r}}),{name:r,mount:!0}),a)}),h.mount.add(r),o?u&&V(c,r,a.disabled?void 0:d(c,r,Se(o._f))):J(r,!0,a.value),Object.assign(Object.assign(Object.assign({},u?{disabled:a.disabled}:{}),s.shouldUseNativeValidation?{required:!!a.required,min:ee(a.min),max:ee(a.max),minLength:ee(a.minLength),maxLength:ee(a.maxLength),pattern:ee(a.pattern)}:{}),{name:r,onChange:Be,onBlur:Be,ref:g=>{if(g){xe(r,a),o=d(n,r);const l=w(g.value)&&g.querySelectorAll&&g.querySelectorAll("input,select,textarea")[0]||g,b=zt(l),O=o._f.refs||[];if(b?O.find(H=>H===l):l===o._f.ref)return;V(n,r,{_f:Object.assign(Object.assign({},o._f),b?{refs:O.concat(l).filter(Ae),ref:{type:l.type,name:r}}:{ref:l})}),J(r,!1,void 0,l)}else o=d(n,r,{}),o._f&&(o._f.mount=!1),(s.shouldUnregister||a.shouldUnregister)&&!(st(h.array,r)&&y.action)&&h.unMount.add(r)}})};return{control:{register:xe,unregister:_e,getFieldState:Me,_executeSchema:I,_getWatch:k,_getDirty:m,_updateValid:E,_removeUnmounted:x,_updateFieldArray:N,_getFieldArray:B,_subjects:f,_proxyFormState:v,get _fields(){return n},get _formValues(){return c},get _stateFlags(){return y},set _stateFlags(r){y=r},get _defaultValues(){return i},get _names(){return h},set _names(r){h=r},get _formState(){return t},set _formState(r){t=r},get _options(){return s},set _options(r){s=Object.assign(Object.assign({},s),r)}},trigger:me,register:xe,handleSubmit:(r,a)=>async o=>{o&&(o.preventDefault&&o.preventDefault(),o.persist&&o.persist());let u=!0,g=Y(c);f.state.next({isSubmitting:!0});try{if(s.resolver){const{errors:l,values:b}=await I();t.errors=l,g=b}else await W(n);L(t.errors)&&Object.keys(t.errors).every(l=>d(g,l))?(f.state.next({errors:{},isSubmitting:!0}),await r(g,o)):(a&&await a(Object.assign({},t.errors),o),s.shouldFocusError&&we(n,l=>d(t.errors,l),h.mount))}catch(l){throw u=!1,l}finally{t.isSubmitted=!0,f.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:L(t.errors)&&u,submitCount:t.submitCount+1,errors:t.errors})}},watch:bt,setValue:ve,getValues:Te,reset:(r,a={})=>{const o=r||i,u=Y(o),g=r&&!L(r)?u:i;if(a.keepDefaultValues||(i=o),!a.keepValues){if(Ke&&w(r))for(const l of h.mount){const b=d(n,l);if(b&&b._f){const O=Array.isArray(b._f.refs)?b._f.refs[0]:b._f.ref;try{pe(O)&&O.closest("form").reset();break}catch{}}}c=e.shouldUnregister?a.keepDefaultValues?Y(i):{}:u,n={},f.array.next({values:g}),f.watch.next({values:g})}h={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},y.mount=!v.isValid||!!a.keepIsValid,y.watch=!!e.shouldUnregister,f.state.next({submitCount:a.keepSubmitCount?t.submitCount:0,isDirty:a.keepDirty?t.isDirty:a.keepDefaultValues?!z(r,i):!1,isSubmitted:a.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:a.keepDirty?t.dirtyFields:a.keepDefaultValues&&r?Object.entries(r).reduce((l,[b,O])=>Object.assign(Object.assign({},l),{[b]:O!==d(i,b)}),{}):{},touchedFields:a.keepTouched?t.touchedFields:{},errors:a.keepErrors?t.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},resetField:(r,a={})=>{d(n,r)&&(w(a.defaultValue)?ve(r,d(i,r)):(ve(r,a.defaultValue),V(i,r,a.defaultValue)),a.keepTouched||C(t.touchedFields,r),a.keepDirty||(C(t.dirtyFields,r),t.isDirty=a.defaultValue?m(r,d(i,r)):m()),a.keepError||(C(t.errors,r),v.isValid&&E()),f.state.next(Object.assign({},t)))},clearErrors:gt,unregister:_e,setError:ht,setFocus:(r,a={})=>{const o=d(n,r)._f,u=o.refs?o.refs[0]:o.ref;a.shouldSelect?u.select():u.focus()},getFieldState:Me}}function is(e={}){const s=S.useRef(),[t,n]=S.useState({isDirty:!1,isValidating:!1,dirtyFields:{},isSubmitted:!1,submitCount:0,touchedFields:{},isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,errors:{}});s.current?s.current.control._options=e:s.current=Object.assign(Object.assign({},rs(e)),{formState:t});const i=s.current.control,c=S.useCallback(y=>{it(y,i._proxyFormState,!0)&&(i._formState=Object.assign(Object.assign({},i._formState),y),n(Object.assign({},i._formState)))},[i]);return De({subject:i._subjects.state,callback:c}),S.useEffect(()=>{i._stateFlags.mount||(i._proxyFormState.isValid&&i._updateValid(),i._stateFlags.mount=!0),i._stateFlags.watch&&(i._stateFlags.watch=!1,i._subjects.state.next({})),i._removeUnmounted()}),s.current.formState=rt(t,i._proxyFormState),s.current}function ns(){const e=G.exports.useRef(!1),s=G.exports.useCallback(()=>e.current,[]);return G.exports.useEffect(()=>(e.current=!0,()=>{e.current=!1}),[]),s}const as=e=>!e;function os(){const[,e]=cs(!1);return G.exports.useCallback(()=>{e(as)},[])}function cs(e){const[s,t]=G.exports.useState(e),n=ns();return[s,G.exports.useCallback(i=>{n()&&t(i)},[])]}const Ve=Set.prototype;function ls(e){const s=G.exports.useRef(),t=os();if(!s.current){const n=new Set(e);s.current=n,n.add=(...i)=>(Ve.add.apply(n,i),t(),n),n.clear=(...i)=>{Ve.clear.apply(n,i),t()},n.delete=(...i)=>{const c=Ve.delete.apply(n,i);return t(),c}}return s.current}const us=e=>e.solution!==void 0,fs=({questions:e})=>{const{control:s}=is(),t=ls([yt.AccessPatterns]),[n,i]=G.exports.useState(),c=h=>{t.add(h)},y=h=>{if(us(h)){i(h.solution);return}c(h.nextQuestionId)};return p(Ct,{maxWidth:"md",children:p("form",{children:te(Et,{spacing:2,children:[e.filter(({id:h})=>t.has(h)).map(({id:h,question:F,answers:_})=>p(Yt,{name:h,control:s,render:({field:A})=>{var v;return A.value?p("span",{children:(v=_.find(({label:f})=>f===A.value))==null?void 0:v.conclusion}):te(Rt,We(qe({},A),{children:[p(Lt,{id:"demo-radio-buttons-group-label",children:F}),p(Bt,{row:!0,children:_.map(f=>p(Tt,{value:f.label,control:p(Mt,{}),onClick:()=>y(f),label:f.label},f.label))})]}))}},h)),p("div",{children:n})]})})})};var yt=(e=>(e.AccessPatterns="AccessPatterns",e.Fast="Fast",e.Cache="Cache",e))(yt||{});const ds=[{id:"AccessPatterns",question:"Do you have more than 5 access patterns to your data?",answers:[{label:"Yes",conclusion:"I have more than 5 access patterns to my data",nextQuestionId:"Fast"},{label:"No",conclusion:"I have less than 5 access patterns to my data",nextQuestionId:"Cache"}]},{id:"Fast",question:"Do you need fast access?",answers:[{label:"Yes",conclusion:"I need speed",solution:"DynamoDB"},{label:"No",conclusion:"I need slow",solution:"DynamoDB"}]},{id:"Cache",question:"Do you need cache?",answers:[{label:"Yes",conclusion:"I need cache",solution:"DynamoDB"},{label:"No",conclusion:"I don't know",solution:"DynamoDB"}]}];function ys(){return te(Ut,{children:[p(It,{}),te("div",{className:"App",children:[p(qt,{}),p(fs,{questions:ds})]})]})}Pt.render(p(S.StrictMode,{children:p(ys,{})}),document.getElementById("root"));
