var Lt=Object.defineProperty,It=Object.defineProperties;var Rt=Object.getOwnPropertyDescriptors;var Ye=Object.getOwnPropertySymbols;var Et=Object.prototype.hasOwnProperty,Mt=Object.prototype.propertyIsEnumerable;var Je=(e,s,t)=>s in e?Lt(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,Xe=(e,s)=>{for(var t in s||(s={}))Et.call(s,t)&&Je(e,t,s[t]);if(Ye)for(var t of Ye(s))Mt.call(s,t)&&Je(e,t,s[t]);return e},Ze=(e,s)=>It(e,Rt(s));import{j as _,B as Ut,A as Bt,a as z,T as Tt,I as Pt,d as qt,b as Ve,c as oe,R as F,r as W,e as Le,i as Ie,f as Re,S as K,g as Nt,C as Oe,h as zt,F as Ht,k as $t,l as Wt,m as Qt,n as Gt,o as Kt,p as Yt,q as Jt}from"./vendor.a2b40e38.js";const Xt=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const f of l.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&n(f)}).observe(document,{childList:!0,subtree:!0});function t(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerpolicy&&(l.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?l.credentials="include":i.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(i){if(i.ep)return;i.ep=!0;const l=t(i);fetch(i.href,l)}};Xt();const Zt=()=>_(Ut,{sx:{flexGrow:1},children:_(Bt,{position:"static",children:z(Tt,{children:[_(Pt,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},children:_(qt,{})}),_(Ve,{variant:"h6",component:"div",sx:{flexGrow:1},children:"Serverless Databases"}),_(oe,{color:"inherit",children:"Login"})]})})});var ie=e=>e.type==="checkbox",J=e=>e instanceof Date,I=e=>e==null;const ut=e=>typeof e=="object";var j=e=>!I(e)&&!Array.isArray(e)&&ut(e)&&!J(e),dt=e=>j(e)&&e.target?ie(e.target)?e.target.checked:e.target.value:e,es=e=>e.substring(0,e.search(/.\d/))||e,ft=(e,s)=>[...e].some(t=>es(s)===t),ge=e=>e.filter(Boolean),S=e=>e===void 0,h=(e,s,t)=>{if(!s||!j(e))return t;const n=ge(s.split(/[,[\].]+?/)).reduce((i,l)=>I(i)?i:i[l],e);return S(n)||n===e?S(e[s])?t:e[s]:n};const ue={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},B={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},N={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};var Ee=(e,s)=>{const t=Object.assign({},e);return delete t[s],t};const ts=F.createContext(null),Me=()=>F.useContext(ts);var ht=(e,s,t,n=!0)=>{const i={};for(const l in e)Object.defineProperty(i,l,{get:()=>{const f=l;return s[f]!==B.all&&(s[f]=!n||B.all),t&&(t[f]=!0),e[f]}});return i},R=e=>j(e)&&!Object.keys(e).length,gt=(e,s,t)=>{const n=Ee(e,"name");return R(n)||Object.keys(n).length>=Object.keys(s).length||Object.keys(n).find(i=>s[i]===(!t||B.all))},le=e=>Array.isArray(e)?e:[e],yt=(e,s,t)=>t&&s?e===s:!e||!s||e===s||le(e).some(n=>n&&(n.startsWith(s)||s.startsWith(n)));function Ue(e){const s=F.useRef(e);s.current=e,F.useEffect(()=>{const t=i=>{i&&i.unsubscribe()},n=!e.disabled&&s.current.subject.subscribe({next:s.current.callback});return()=>t(n)},[e.disabled])}function ss(e){const s=Me(),{control:t=s.control,disabled:n,name:i,exact:l}=e||{},[f,g]=F.useState(t._formState),w=F.useRef({isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1}),p=F.useRef(i),O=F.useRef(!0);p.current=i;const b=F.useCallback(d=>O.current&&yt(p.current,d.name,l)&&gt(d,w.current)&&g(Object.assign(Object.assign({},t._formState),d)),[t,l]);return Ue({disabled:n,callback:b,subject:t._subjects.state}),F.useEffect(()=>()=>{O.current=!1},[]),ht(f,t._proxyFormState,w.current,!1)}var P=e=>typeof e=="string",mt=(e,s,t,n)=>{const i=Array.isArray(e);return P(e)?(n&&s.watch.add(e),h(t,e)):i?e.map(l=>(n&&s.watch.add(l),h(t,l))):(n&&(s.watchAll=!0),t)},ye=e=>typeof e=="function",Be=e=>{for(const s in e)if(ye(e[s]))return!0;return!1};function rs(e){const s=Me(),{control:t=s.control,name:n,defaultValue:i,disabled:l,exact:f}=e||{},g=F.useRef(n);g.current=n;const w=F.useCallback(b=>{if(yt(g.current,b.name,f)){const d=mt(g.current,t._names,b.values||t._formValues);O(S(g.current)||j(d)&&!Be(d)?Object.assign({},d):Array.isArray(d)?[...d]:S(d)?i:d)}},[t,f,i]);Ue({disabled:l,subject:t._subjects.watch,callback:w});const[p,O]=F.useState(S(i)?t._getWatch(n):i);return F.useEffect(()=>{t._removeUnmounted()}),p}function is(e){const s=Me(),{name:t,control:n=s.control,shouldUnregister:i}=e,l=ft(n._names.array,t),f=rs({control:n,name:t,defaultValue:h(n._formValues,t,h(n._defaultValues,t,e.defaultValue)),exact:!0}),g=ss({control:n,name:t}),w=F.useRef(n.register(t,Object.assign(Object.assign({},e.rules),{value:f})));return F.useEffect(()=>{const p=(O,b)=>{const d=h(n._fields,O);d&&(d._f.mount=b)};return p(t,!0),()=>{const O=n._options.shouldUnregister||i;(l?O&&!n._stateFlags.action:O)?n.unregister(t):p(t,!1)}},[t,n,l,i]),{field:{name:t,value:f,onChange:F.useCallback(p=>{w.current.onChange({target:{value:dt(p),name:t},type:ue.CHANGE})},[t]),onBlur:F.useCallback(()=>{w.current.onBlur({target:{value:h(n._formValues,t),name:t},type:ue.BLUR})},[t,n]),ref:F.useCallback(p=>{const O=h(n._fields,t);p&&O&&p.focus&&(O._f.ref={focus:()=>p.focus(),setCustomValidity:b=>p.setCustomValidity(b),reportValidity:()=>p.reportValidity()})},[t,n._fields])},formState:g,fieldState:n.getFieldState(t,g)}}const ns=e=>e.render(is(e));var as=(e,s,t,n,i)=>s?Object.assign(Object.assign({},t[e]),{types:Object.assign(Object.assign({},t[e]&&t[e].types?t[e].types:{}),{[n]:i||!0})}):{},Te=e=>/^\w*$/.test(e),bt=e=>ge(e.replace(/["|']|\]/g,"").split(/\.|\[/));function k(e,s,t){let n=-1;const i=Te(s)?[s]:bt(s),l=i.length,f=l-1;for(;++n<l;){const g=i[n];let w=t;if(n!==f){const p=e[g];w=j(p)||Array.isArray(p)?p:isNaN(+i[n+1])?{}:[]}e[g]=w,e=e[g]}return e}const je=(e,s,t)=>{for(const n of t||Object.keys(e)){const i=h(e,n);if(i){const l=i._f,f=Ee(i,"_f");if(l&&s(l.name)){if(l.ref.focus&&S(l.ref.focus()))break;if(l.refs){l.refs[0].focus();break}}else j(f)&&je(f,s)}}};var et=(e,s,t)=>!t&&(s.watchAll||s.watch.has(e)||[...s.watch].some(n=>e.startsWith(n)&&/^\.\w+/.test(e.slice(n.length))));function Y(e){let s;const t=Array.isArray(e);if(e instanceof Date)s=new Date(e);else if(e instanceof Set)s=new Set(e);else if(t||j(e)){s=t?[]:{};for(const n in e){if(ye(e[n])){s=e;break}s[n]=Y(e[n])}}else return e;return s}function Fe(){let e=[];return{get observers(){return e},next:i=>{for(const l of e)l.next(i)},subscribe:i=>(e.push(i),{unsubscribe:()=>{e=e.filter(l=>l!==i)}}),unsubscribe:()=>{e=[]}}}var de=e=>I(e)||!ut(e);function X(e,s){if(de(e)||de(s))return e===s;if(J(e)&&J(s))return e.getTime()===s.getTime();const t=Object.keys(e),n=Object.keys(s);if(t.length!==n.length)return!1;for(const i of t){const l=e[i];if(!n.includes(i))return!1;if(i!=="ref"){const f=s[i];if(J(l)&&J(f)||j(l)&&j(f)||Array.isArray(l)&&Array.isArray(f)?!X(l,f):l!==f)return!1}}return!0}var tt=e=>({isOnSubmit:!e||e===B.onSubmit,isOnBlur:e===B.onBlur,isOnChange:e===B.onChange,isOnAll:e===B.all,isOnTouch:e===B.onTouched}),re=e=>typeof e=="boolean",Pe=e=>e.type==="file",Ce=e=>e instanceof HTMLElement,vt=e=>e.type==="select-multiple",qe=e=>e.type==="radio",os=e=>qe(e)||ie(e),st=typeof window!="undefined"&&typeof window.HTMLElement!="undefined"&&typeof document!="undefined",ke=e=>Ce(e)&&e.isConnected;function ls(e,s){const t=s.slice(0,-1).length;let n=0;for(;n<t;)e=S(e)?n++:e[s[n++]];return e}function C(e,s){const t=Te(s)?[s]:bt(s),n=t.length==1?e:ls(e,t),i=t[t.length-1];let l;n&&delete n[i];for(let f=0;f<t.slice(0,-1).length;f++){let g=-1,w;const p=t.slice(0,-(f+1)),O=p.length-1;for(f>0&&(l=e);++g<p.length;){const b=p[g];w=w?w[b]:e[b],O===g&&(j(w)&&R(w)||Array.isArray(w)&&!w.filter(d=>j(d)&&!R(d)||re(d)).length)&&(l?delete l[b]:delete e[b]),l=w}}return e}function fe(e,s={}){const t=Array.isArray(e);if(j(e)||t)for(const n in e)Array.isArray(e[n])||j(e[n])&&!Be(e[n])?(s[n]=Array.isArray(e[n])?[]:{},fe(e[n],s[n])):I(e[n])||(s[n]=!0);return s}function pt(e,s,t){const n=Array.isArray(e);if(j(e)||n)for(const i in e)Array.isArray(e[i])||j(e[i])&&!Be(e[i])?S(s)||de(t[i])?t[i]=Array.isArray(e[i])?fe(e[i],[]):Object.assign({},fe(e[i])):pt(e[i],I(s)?{}:s[i],t[i]):t[i]=!X(e[i],s[i]);return t}var rt=(e,s)=>pt(e,s,fe(s));const it={value:!1,isValid:!1},nt={value:!0,isValid:!0};var _t=e=>{if(Array.isArray(e)){if(e.length>1){const s=e.filter(t=>t&&t.checked&&!t.disabled).map(t=>t.value);return{value:s,isValid:!!s.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!S(e[0].attributes.value)?S(e[0].value)||e[0].value===""?nt:{value:e[0].value,isValid:!0}:nt:it}return it},wt=(e,{valueAsNumber:s,valueAsDate:t,setValueAs:n})=>S(e)?e:s?e===""?NaN:+e:t&&P(e)?new Date(e):n?n(e):e;const at={isValid:!1,value:null};var xt=e=>Array.isArray(e)?e.reduce((s,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:s,at):at;function Se(e){const s=e.ref;if(!(e.refs?e.refs.every(t=>t.disabled):s.disabled))return Pe(s)?s.files:qe(s)?xt(e.refs).value:vt(s)?[...s.selectedOptions].map(({value:t})=>t):ie(s)?_t(e.refs).value:wt(S(s.value)?e.ref.value:s.value,e)}var cs=(e,s,t,n)=>{const i={};for(const l of e){const f=h(s,l);f&&k(i,l,f._f)}return{criteriaMode:t,names:[...e],fields:i,shouldUseNativeValidation:n}},he=e=>e instanceof RegExp,se=e=>S(e)?void 0:he(e)?e.source:j(e)?he(e.value)?e.value.source:e.value:e,us=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function ot(e,s,t){const n=h(e,t);if(n||Te(t))return{error:n,name:t};const i=t.split(".");for(;i.length;){const l=i.join("."),f=h(s,l),g=h(e,l);if(f&&!Array.isArray(f)&&t!==l)return{name:t};if(g&&g.type)return{name:l,error:g};i.pop()}return{name:t}}var ds=(e,s,t,n,i)=>i.isOnAll?!1:!t&&i.isOnTouch?!(s||e):(t?n.isOnBlur:i.isOnBlur)?!e:(t?n.isOnChange:i.isOnChange)?e:!0,fs=(e,s)=>!ge(h(e,s)).length&&C(e,s),ce=e=>P(e)||F.isValidElement(e);function lt(e,s,t="validate"){if(ce(e)||Array.isArray(e)&&e.every(ce)||re(e)&&!e)return{type:t,message:ce(e)?e:"",ref:s}}var G=e=>j(e)&&!he(e)?e:{value:e,message:""},ct=async(e,s,t,n)=>{const{ref:i,refs:l,required:f,maxLength:g,minLength:w,min:p,max:O,pattern:b,validate:d,name:U,valueAsNumber:me,mount:ne,disabled:be}=e._f;if(!ne||be)return{};const L=l?l[0]:i,q=x=>{n&&L.reportValidity&&(L.setCustomValidity(re(x)?"":x||" "),L.reportValidity())},V={},Z=qe(i),ee=ie(i),ve=Z||ee,T=(me||Pe(i))&&!i.value||s===""||Array.isArray(s)&&!s.length,Q=as.bind(null,U,t,V),H=(x,v,D,E=N.maxLength,M=N.minLength)=>{const te=x?v:D;V[U]=Object.assign({type:x?E:M,message:te,ref:i},Q(x?E:M,te))};if(f&&(!ve&&(T||I(s))||re(s)&&!s||ee&&!_t(l).isValid||Z&&!xt(l).isValid)){const{value:x,message:v}=ce(f)?{value:!!f,message:f}:G(f);if(x&&(V[U]=Object.assign({type:N.required,message:v,ref:L},Q(N.required,v)),!t))return q(v),V}if(!T&&(!I(p)||!I(O))){let x,v;const D=G(O),E=G(p);if(isNaN(s)){const M=i.valueAsDate||new Date(s);P(D.value)&&(x=M>new Date(D.value)),P(E.value)&&(v=M<new Date(E.value))}else{const M=i.valueAsNumber||+s;I(D.value)||(x=M>D.value),I(E.value)||(v=M<E.value)}if((x||v)&&(H(!!x,D.message,E.message,N.max,N.min),!t))return q(V[U].message),V}if((g||w)&&!T&&P(s)){const x=G(g),v=G(w),D=!I(x.value)&&s.length>x.value,E=!I(v.value)&&s.length<v.value;if((D||E)&&(H(D,x.message,v.message),!t))return q(V[U].message),V}if(b&&!T&&P(s)){const{value:x,message:v}=G(b);if(he(x)&&!s.match(x)&&(V[U]=Object.assign({type:N.pattern,message:v,ref:i},Q(N.pattern,v)),!t))return q(v),V}if(d){if(ye(d)){const x=await d(s),v=lt(x,L);if(v&&(V[U]=Object.assign(Object.assign({},v),Q(N.validate,v.message)),!t))return q(v.message),V}else if(j(d)){let x={};for(const v in d){if(!R(x)&&!t)break;const D=lt(await d[v](s),L,v);D&&(x=Object.assign(Object.assign({},D),Q(v,D.message)),q(D.message),t&&(V[U]=x))}if(!R(x)&&(V[U]=Object.assign({ref:L},x),!t))return V}}return q(!0),V};const hs={mode:B.onSubmit,reValidateMode:B.onChange,shouldFocusError:!0};function gs(e={}){let s=Object.assign(Object.assign({},hs),e),t={isDirty:!1,isValidating:!1,dirtyFields:{},isSubmitted:!1,submitCount:0,touchedFields:{},isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,errors:{}},n={},i=s.defaultValues||{},l=s.shouldUnregister?{}:Y(i),f={action:!1,mount:!1,watch:!1},g={mount:new Set,unMount:new Set,array:new Set,watch:new Set},w,p=0,O={};const b={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},d={watch:Fe(),array:Fe(),state:Fe()},U=tt(s.mode),me=tt(s.reValidateMode),ne=s.criteriaMode===B.all,be=(r,a)=>(...o)=>{clearTimeout(p),p=window.setTimeout(()=>r(...o),a)},L=async r=>{let a=!1;return b.isValid&&(a=s.resolver?R((await T()).errors):await H(n,!0),!r&&a!==t.isValid&&(t.isValid=a,d.state.next({isValid:a}))),a},q=(r,a=[],o,u,y=!0,c=!0)=>{if(u&&o){if(f.action=!0,c&&Array.isArray(h(n,r))){const m=o(h(n,r),u.argA,u.argB);y&&k(n,r,m)}if(b.errors&&c&&Array.isArray(h(t.errors,r))){const m=o(h(t.errors,r),u.argA,u.argB);y&&k(t.errors,r,m),fs(t.errors,r)}if(b.touchedFields&&Array.isArray(h(t.touchedFields,r))){const m=o(h(t.touchedFields,r),u.argA,u.argB);y&&k(t.touchedFields,r,m)}b.dirtyFields&&(t.dirtyFields=rt(i,l)),d.state.next({isDirty:v(r,a),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else k(l,r,a)},V=(r,a)=>(k(t.errors,r,a),d.state.next({errors:t.errors})),Z=(r,a,o,u)=>{const y=h(n,r);if(y){const c=h(l,r,S(o)?h(i,r):o);S(c)||u&&u.defaultChecked||a?k(l,r,a?c:Se(y._f)):M(r,c),f.mount&&L()}},ee=(r,a,o,u,y)=>{let c=!1;const m={name:r},A=h(t.touchedFields,r);if(b.isDirty){const $=t.isDirty;t.isDirty=m.isDirty=v(),c=$!==m.isDirty}if(b.dirtyFields&&(!o||u)){const $=h(t.dirtyFields,r);X(h(i,r),a)?C(t.dirtyFields,r):k(t.dirtyFields,r,!0),m.dirtyFields=t.dirtyFields,c=c||$!==h(t.dirtyFields,r)}return o&&!A&&(k(t.touchedFields,r,o),m.touchedFields=t.touchedFields,c=c||b.touchedFields&&A!==o),c&&y&&d.state.next(m),c?m:{}},ve=async(r,a,o,u,y)=>{const c=h(t.errors,a),m=b.isValid&&t.isValid!==o;if(e.delayError&&u?(w=w||be(V,e.delayError),w(a,u)):(clearTimeout(p),u?k(t.errors,a,u):C(t.errors,a)),((u?!X(c,u):c)||!R(y)||m)&&!r){const A=Object.assign(Object.assign(Object.assign({},y),m?{isValid:o}:{}),{errors:t.errors,name:a});t=Object.assign(Object.assign({},t),A),d.state.next(A)}O[a]--,b.isValidating&&!Object.values(O).some(A=>A)&&(d.state.next({isValidating:!1}),O={})},T=async r=>s.resolver?await s.resolver(Object.assign({},l),s.context,cs(r||g.mount,n,s.criteriaMode,s.shouldUseNativeValidation)):{},Q=async r=>{const{errors:a}=await T();if(r)for(const o of r){const u=h(a,o);u?k(t.errors,o,u):C(t.errors,o)}else t.errors=a;return a},H=async(r,a,o={valid:!0})=>{for(const u in r){const y=r[u];if(y){const c=y._f,m=Ee(y,"_f");if(c){const A=await ct(y,h(l,c.name),ne,s.shouldUseNativeValidation);if(A[c.name]&&(o.valid=!1,a))break;a||(A[c.name]?k(t.errors,c.name,A[c.name]):C(t.errors,c.name))}m&&await H(m,a,o)}}return o.valid},x=()=>{for(const r of g.unMount){const a=h(n,r);a&&(a._f.refs?a._f.refs.every(o=>!ke(o)):!ke(a._f.ref))&&we(r)}g.unMount=new Set},v=(r,a)=>(r&&a&&k(l,r,a),!X(We(),i)),D=(r,a,o)=>{const u=Object.assign({},f.mount?l:S(a)?i:P(r)?{[r]:a}:a);return mt(r,g,u,o)},E=r=>ge(h(f.mount?l:i,r,e.shouldUnregister?h(i,r,[]):[])),M=(r,a,o={})=>{const u=h(n,r);let y=a;if(u){const c=u._f;c&&(!c.disabled&&k(l,r,wt(a,c)),y=st&&Ce(c.ref)&&I(a)?"":a,vt(c.ref)?[...c.ref.options].forEach(m=>m.selected=y.includes(m.value)):c.refs?ie(c.ref)?c.refs.length>1?c.refs.forEach(m=>m.checked=Array.isArray(y)?!!y.find(A=>A===m.value):y===m.value):c.refs[0]&&(c.refs[0].checked=!!y):c.refs.forEach(m=>m.checked=m.value===y):Pe(c.ref)?c.ref.value="":(c.ref.value=y,c.ref.type||d.watch.next({name:r})))}(o.shouldDirty||o.shouldTouch)&&ee(r,y,o.shouldTouch,o.shouldDirty,!0),o.shouldValidate&&_e(r)},te=(r,a,o)=>{for(const u in a){const y=a[u],c=`${r}.${u}`,m=h(n,c);(g.array.has(r)||!de(y)||m&&!m._f)&&!J(y)?te(c,y,o):M(c,y,o)}},pe=(r,a,o={})=>{const u=h(n,r),y=g.array.has(r),c=Y(a);k(l,r,c),y?(d.array.next({name:r,values:l}),(b.isDirty||b.dirtyFields)&&o.shouldDirty&&(t.dirtyFields=rt(i,l),d.state.next({name:r,dirtyFields:t.dirtyFields,isDirty:v(r,c)}))):u&&!u._f&&!I(c)?te(r,c,o):M(r,c,o),et(r,g)&&d.state.next({}),d.watch.next({name:r})},$e=async r=>{const a=r.target;let o=a.name;const u=h(n,o);if(u){let y,c;const m=a.type?Se(u._f):dt(r),A=r.type===ue.BLUR||r.type===ue.FOCUS_OUT,$=!us(u._f)&&!s.resolver&&!h(t.errors,o)&&!u._f.deps||ds(A,h(t.touchedFields,o),t.isSubmitted,me,U),ae=et(o,g,A);k(l,o,m),A?u._f.onBlur&&u._f.onBlur(r):u._f.onChange&&u._f.onChange(r);const Ae=ee(o,m,A,!1),jt=!R(Ae)||ae;if(!A&&d.watch.next({name:o,type:r.type}),$)return jt&&d.state.next(Object.assign({name:o},ae?{}:Ae));if(!A&&ae&&d.state.next({}),O[o]=(O[o],1),d.state.next({isValidating:!0}),s.resolver){const{errors:Ge}=await T([o]),Ct=ot(t.errors,n,o),Ke=ot(Ge,n,Ct.name||o);y=Ke.error,o=Ke.name,c=R(Ge)}else y=(await ct(u,h(l,o),ne,s.shouldUseNativeValidation))[o],c=await L(!0);u._f.deps&&_e(u._f.deps),ve(!1,o,c,y,Ae)}},_e=async(r,a={})=>{let o,u;const y=le(r);if(d.state.next({isValidating:!0}),s.resolver){const c=await Q(S(r)?r:y);o=R(c),u=r?!y.some(m=>h(c,m)):o}else r?(u=(await Promise.all(y.map(async c=>{const m=h(n,c);return await H(m&&m._f?{[c]:m}:m)}))).every(Boolean),!(!u&&!t.isValid)&&L()):u=o=await H(n);return d.state.next(Object.assign(Object.assign(Object.assign({},!P(r)||b.isValid&&o!==t.isValid?{}:{name:r}),s.resolver?{isValid:o}:{}),{errors:t.errors,isValidating:!1})),a.shouldFocus&&!u&&je(n,c=>h(t.errors,c),r?y:g.mount),u},We=r=>{const a=Object.assign(Object.assign({},i),f.mount?l:{});return S(r)?a:P(r)?h(a,r):r.map(o=>h(a,o))},Qe=(r,a)=>({invalid:!!h((a||t).errors,r),isDirty:!!h((a||t).dirtyFields,r),isTouched:!!h((a||t).touchedFields,r),error:h((a||t).errors,r)}),St=r=>{r?le(r).forEach(a=>C(t.errors,a)):t.errors={},d.state.next({errors:t.errors})},Dt=(r,a,o)=>{const u=(h(n,r,{_f:{}})._f||{}).ref;k(t.errors,r,Object.assign(Object.assign({},a),{ref:u})),d.state.next({name:r,errors:t.errors,isValid:!1}),o&&o.shouldFocus&&u&&u.focus&&u.focus()},Vt=(r,a)=>ye(r)?d.watch.subscribe({next:o=>r(D(void 0,a),o)}):D(r,a,!0),we=(r,a={})=>{for(const o of r?le(r):g.mount)g.mount.delete(o),g.array.delete(o),h(n,o)&&(a.keepValue||(C(n,o),C(l,o)),!a.keepError&&C(t.errors,o),!a.keepDirty&&C(t.dirtyFields,o),!a.keepTouched&&C(t.touchedFields,o),!s.shouldUnregister&&!a.keepDefaultValue&&C(i,o));d.watch.next({}),d.state.next(Object.assign(Object.assign({},t),a.keepDirty?{isDirty:v()}:{})),!a.keepIsValid&&L()},xe=(r,a={})=>{let o=h(n,r);const u=re(a.disabled);return k(n,r,{_f:Object.assign(Object.assign(Object.assign({},o&&o._f?o._f:{ref:{name:r}}),{name:r,mount:!0}),a)}),g.mount.add(r),o?u&&k(l,r,a.disabled?void 0:h(l,r,Se(o._f))):Z(r,!0,a.value),Object.assign(Object.assign(Object.assign({},u?{disabled:a.disabled}:{}),s.shouldUseNativeValidation?{required:!!a.required,min:se(a.min),max:se(a.max),minLength:se(a.minLength),maxLength:se(a.maxLength),pattern:se(a.pattern)}:{}),{name:r,onChange:$e,onBlur:$e,ref:y=>{if(y){xe(r,a),o=h(n,r);const c=S(y.value)&&y.querySelectorAll&&y.querySelectorAll("input,select,textarea")[0]||y,m=os(c),A=o._f.refs||[];if(m?A.find($=>$===c):c===o._f.ref)return;k(n,r,{_f:Object.assign(Object.assign({},o._f),m?{refs:A.concat(c).filter(ke),ref:{type:c.type,name:r}}:{ref:c})}),Z(r,!1,void 0,c)}else o=h(n,r,{}),o._f&&(o._f.mount=!1),(s.shouldUnregister||a.shouldUnregister)&&!(ft(g.array,r)&&f.action)&&g.unMount.add(r)}})};return{control:{register:xe,unregister:we,getFieldState:Qe,_executeSchema:T,_getWatch:D,_getDirty:v,_updateValid:L,_removeUnmounted:x,_updateFieldArray:q,_getFieldArray:E,_subjects:d,_proxyFormState:b,get _fields(){return n},get _formValues(){return l},get _stateFlags(){return f},set _stateFlags(r){f=r},get _defaultValues(){return i},get _names(){return g},set _names(r){g=r},get _formState(){return t},set _formState(r){t=r},get _options(){return s},set _options(r){s=Object.assign(Object.assign({},s),r)}},trigger:_e,register:xe,handleSubmit:(r,a)=>async o=>{o&&(o.preventDefault&&o.preventDefault(),o.persist&&o.persist());let u=!0,y=Y(l);d.state.next({isSubmitting:!0});try{if(s.resolver){const{errors:c,values:m}=await T();t.errors=c,y=m}else await H(n);R(t.errors)&&Object.keys(t.errors).every(c=>h(y,c))?(d.state.next({errors:{},isSubmitting:!0}),await r(y,o)):(a&&await a(Object.assign({},t.errors),o),s.shouldFocusError&&je(n,c=>h(t.errors,c),g.mount))}catch(c){throw u=!1,c}finally{t.isSubmitted=!0,d.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:R(t.errors)&&u,submitCount:t.submitCount+1,errors:t.errors})}},watch:Vt,setValue:pe,getValues:We,reset:(r,a={})=>{const o=r||i,u=Y(o),y=r&&!R(r)?u:i;if(a.keepDefaultValues||(i=o),!a.keepValues){if(st&&S(r))for(const c of g.mount){const m=h(n,c);if(m&&m._f){const A=Array.isArray(m._f.refs)?m._f.refs[0]:m._f.ref;try{Ce(A)&&A.closest("form").reset();break}catch{}}}l=e.shouldUnregister?a.keepDefaultValues?Y(i):{}:u,n={},d.array.next({values:y}),d.watch.next({values:y})}g={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},f.mount=!b.isValid||!!a.keepIsValid,f.watch=!!e.shouldUnregister,d.state.next({submitCount:a.keepSubmitCount?t.submitCount:0,isDirty:a.keepDirty?t.isDirty:a.keepDefaultValues?!X(r,i):!1,isSubmitted:a.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:a.keepDirty?t.dirtyFields:a.keepDefaultValues&&r?Object.entries(r).reduce((c,[m,A])=>Object.assign(Object.assign({},c),{[m]:A!==h(i,m)}),{}):{},touchedFields:a.keepTouched?t.touchedFields:{},errors:a.keepErrors?t.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},resetField:(r,a={})=>{h(n,r)&&(S(a.defaultValue)?pe(r,h(i,r)):(pe(r,a.defaultValue),k(i,r,a.defaultValue)),a.keepTouched||C(t.touchedFields,r),a.keepDirty||(C(t.dirtyFields,r),t.isDirty=a.defaultValue?v(r,h(i,r)):v()),a.keepError||(C(t.errors,r),b.isValid&&L()),d.state.next(Object.assign({},t)))},clearErrors:St,unregister:we,setError:Dt,setFocus:(r,a={})=>{const o=h(n,r)._f,u=o.refs?o.refs[0]:o.ref;a.shouldSelect?u.select():u.focus()},getFieldState:Qe}}function ys(e={}){const s=F.useRef(),[t,n]=F.useState({isDirty:!1,isValidating:!1,dirtyFields:{},isSubmitted:!1,submitCount:0,touchedFields:{},isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,errors:{}});s.current?s.current.control._options=e:s.current=Object.assign(Object.assign({},gs(e)),{formState:t});const i=s.current.control,l=F.useCallback(f=>{gt(f,i._proxyFormState,!0)&&(i._formState=Object.assign(Object.assign({},i._formState),f),n(Object.assign({},i._formState)))},[i]);return Ue({subject:i._subjects.state,callback:l}),F.useEffect(()=>{i._stateFlags.mount||(i._proxyFormState.isValid&&i._updateValid(),i._stateFlags.mount=!0),i._stateFlags.watch&&(i._stateFlags.watch=!1,i._subjects.state.next({})),i._removeUnmounted()}),s.current.formState=ht(t,i._proxyFormState),s.current}function ms(){const e=W.exports.useRef(!1),s=W.exports.useCallback(()=>e.current,[]);return W.exports.useEffect(()=>(e.current=!0,()=>{e.current=!1}),[]),s}const bs=e=>!e;function vs(){const[,e]=ps(!1);return W.exports.useCallback(()=>{e(bs)},[])}function ps(e){const[s,t]=W.exports.useState(e),n=ms();return[s,W.exports.useCallback(i=>{n()&&t(i)},[])]}const De=Set.prototype;function _s(e){const s=W.exports.useRef(),t=vs();if(!s.current){const n=new Set(e);s.current=n,n.add=(...i)=>(De.add.apply(n,i),t(),n),n.clear=(...i)=>{De.clear.apply(n,i),t()},n.delete=(...i)=>{const l=De.delete.apply(n,i);return t(),l}}return s.current}var Ne={},ws=Ie.exports;Object.defineProperty(Ne,"__esModule",{value:!0});var At=Ne.default=void 0,xs=ws(Le),As=Re,Os=(0,xs.default)((0,As.jsx)("path",{d:"M15 18.5c-2.51 0-4.68-1.42-5.76-3.5H15l1-2H8.58c-.05-.33-.08-.66-.08-1s.03-.67.08-1H15l1-2H9.24C10.32 6.92 12.5 5.5 15 5.5c1.61 0 3.09.59 4.23 1.57L21 5.3C19.41 3.87 17.3 3 15 3c-3.92 0-7.24 2.51-8.48 6H3l-1 2h4.06c-.04.33-.06.66-.06 1s.02.67.06 1H3l-1 2h4.52c1.24 3.49 4.56 6 8.48 6 2.31 0 4.41-.87 6-2.3l-1.78-1.77c-1.13.98-2.6 1.57-4.22 1.57z"}),"Euro");At=Ne.default=Os;var ze={},Fs=Ie.exports;Object.defineProperty(ze,"__esModule",{value:!0});var Ot=ze.default=void 0,ks=Fs(Le),Ss=Re,Ds=(0,ks.default)((0,Ss.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"}),"Language");Ot=ze.default=Ds;var He={},Vs=Ie.exports;Object.defineProperty(He,"__esModule",{value:!0});var Ft=He.default=void 0,js=Vs(Le),Cs=Re,Ls=(0,js.default)((0,Cs.jsx)("path",{d:"M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"}),"Event");Ft=He.default=Ls;var Is="/serverless-databases/assets/dynamodb.91853182.svg",Rs="/serverless-databases/assets/auroraServerless.dfb833b4.svg",Es="/serverless-databases/assets/qldb.fc98b6f5.svg",Ms="/serverless-databases/assets/timestream.f5594fcf.svg";const Us={DynamoDB:{name:"DynamoDB",src:Is,releaseDate:"2012",pricing:"Cheap",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",documentationUrl:"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/index.html",awesomeUrl:"https://github.com/alexdebrie/awesome-dynamodb",implementationUrl:"https://github.com/serverless/examples/tree/v3/aws-node-express-dynamodb-api"},AuroraServerless:{name:"Aurora Serverless",src:Rs,releaseDate:"2018",pricing:"Cheap",description:"Amazon Aurora Serverless is an on-demand, auto-scaling configuration for Amazon Aurora. It automatically starts up, shuts down, and scales capacity up or down based on your application's needs. It enables you to run your database in the cloud without managing any database capacity.",documentationUrl:"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html",implementationUrl:"https://github.com/serverless/examples/tree/v3/aws-node-express-dynamodb-api"},QLDB:{name:"Quantum Ledger Database",src:Es,releaseDate:"2019",pricing:"Cheap",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",documentationUrl:"https://docs.aws.amazon.com/qldb/latest/developerguide/index.html",awesomeUrl:"https://github.com/mlewis7127/awesome-qldb",implementationUrl:"https://www.google.com"},Timestream:{name:"Timestream",src:Ms,releaseDate:"2020",pricing:"Cheap",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",documentationUrl:"https://docs.aws.amazon.com/timestream/latest/developerguide/index.html",awesomeUrl:"https://github.com/awslabs/amazon-timestream-tools",implementationUrl:"https://www.google.com"}},Bs=({solution:e})=>{const{name:s,src:t,releaseDate:n,pricing:i,description:l,documentationUrl:f,awesomeUrl:g,implementationUrl:w}=Us[e];return z(K,{direction:"row",spacing:4,children:[_(Nt,{alt:s,src:t,variant:"square",sx:{marginTop:2,height:120,width:120}}),z(K,{spacing:2,children:[_(Ve,{variant:"h2",children:s}),_(K,{direction:"row",spacing:2,children:_(Oe,{icon:_(Ft,{}),label:n,variant:"outlined"})}),z(K,{direction:"row",spacing:2,children:[_(Oe,{icon:_(At,{}),label:i,color:i==="Cheap"?"success":"error",variant:"outlined"}),_(Oe,{icon:_(Ot,{}),label:"Parti-QL compatible",color:"success",variant:"outlined"})]}),_(Ve,{variant:"body1",children:l}),z(K,{direction:"row",spacing:4,children:[_(oe,{variant:"contained",target:"_blank",href:f,children:"Documentation"}),g!==void 0&&_(oe,{variant:"contained",target:"_blank",href:g,children:"Awesome Repository"}),_(oe,{variant:"contained",target:"_blank",href:w,children:"Implementation example"})]})]})]})},Ts=e=>e.solution!==void 0,Ps=({questions:e})=>{const{control:s}=ys(),t=_s([kt.AccessPatterns]),[n,i]=W.exports.useState(),l=g=>{t.add(g)},f=g=>{if(Ts(g)){i(g.solution);return}l(g.nextQuestionId)};return _(zt,{maxWidth:"md",children:z("form",{children:[_(K,{spacing:2,children:e.filter(({id:g})=>t.has(g)).map(({id:g,question:w,answers:p})=>_(ns,{name:g,control:s,render:({field:O})=>{var b;return O.value?_("span",{children:(b=p.find(({label:d})=>d===O.value))==null?void 0:b.conclusion}):z(Ht,Ze(Xe({},O),{children:[_($t,{id:"demo-radio-buttons-group-label",children:w}),_(Wt,{row:!0,children:p.map(d=>_(Qt,{value:d.label,control:_(Gt,{}),onClick:()=>f(d),label:d.label},d.label))})]}))}},g))}),n&&_(Bs,{solution:n})]})})};var kt=(e=>(e.AccessPatterns="AccessPatterns",e.Fast="Fast",e.Cache="Cache",e))(kt||{});const qs=[{id:"AccessPatterns",question:"Do you have more than 5 access patterns to your data?",answers:[{label:"Yes",conclusion:"I have more than 5 access patterns to my data",nextQuestionId:"Fast"},{label:"No",conclusion:"I have less than 5 access patterns to my data",nextQuestionId:"Cache"}]},{id:"Fast",question:"Do you need fast access?",answers:[{label:"Yes",conclusion:"I need speed",solution:"DynamoDB"},{label:"No",conclusion:"I need slow",solution:"DynamoDB"}]},{id:"Cache",question:"Do you need cache?",answers:[{label:"Yes",conclusion:"I need cache",solution:"AuroraServerless"},{label:"No",conclusion:"I don't know",solution:"DynamoDB"}]}];function Ns(){return z(Kt,{children:[_(Yt,{}),z("div",{className:"App",children:[_(Zt,{}),_(Ps,{questions:qs})]})]})}Jt.render(_(F.StrictMode,{children:_(Ns,{})}),document.getElementById("root"));
