(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function Cx(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Lf={exports:{}},yo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G0;function wx(){if(G0)return yo;G0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:d,ref:l!==void 0?l:null,props:u}}return yo.Fragment=e,yo.jsx=i,yo.jsxs=i,yo}var V0;function Dx(){return V0||(V0=1,Lf.exports=wx()),Lf.exports}var z=Dx(),Of={exports:{}},re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k0;function Ux(){if(k0)return re;k0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function x(D){return D===null||typeof D!="object"?null:(D=v&&D[v]||D["@@iterator"],typeof D=="function"?D:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,C={};function S(D,tt,xt){this.props=D,this.context=tt,this.refs=C,this.updater=xt||M}S.prototype.isReactComponent={},S.prototype.setState=function(D,tt){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,tt,"setState")},S.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function _(){}_.prototype=S.prototype;function I(D,tt,xt){this.props=D,this.context=tt,this.refs=C,this.updater=xt||M}var O=I.prototype=new _;O.constructor=I,A(O,S.prototype),O.isPureReactComponent=!0;var U=Array.isArray,k={H:null,A:null,T:null,S:null,V:null},X=Object.prototype.hasOwnProperty;function F(D,tt,xt,St,J,mt){return xt=mt.ref,{$$typeof:o,type:D,key:tt,ref:xt!==void 0?xt:null,props:mt}}function Z(D,tt){return F(D.type,tt,void 0,void 0,void 0,D.props)}function w(D){return typeof D=="object"&&D!==null&&D.$$typeof===o}function R(D){var tt={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(xt){return tt[xt]})}var G=/\/+/g;function ct(D,tt){return typeof D=="object"&&D!==null&&D.key!=null?R(""+D.key):tt.toString(36)}function ot(){}function vt(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(ot,ot):(D.status="pending",D.then(function(tt){D.status==="pending"&&(D.status="fulfilled",D.value=tt)},function(tt){D.status==="pending"&&(D.status="rejected",D.reason=tt)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function ht(D,tt,xt,St,J){var mt=typeof D;(mt==="undefined"||mt==="boolean")&&(D=null);var Mt=!1;if(D===null)Mt=!0;else switch(mt){case"bigint":case"string":case"number":Mt=!0;break;case"object":switch(D.$$typeof){case o:case e:Mt=!0;break;case g:return Mt=D._init,ht(Mt(D._payload),tt,xt,St,J)}}if(Mt)return J=J(D),Mt=St===""?"."+ct(D,0):St,U(J)?(xt="",Mt!=null&&(xt=Mt.replace(G,"$&/")+"/"),ht(J,tt,xt,"",function(oe){return oe})):J!=null&&(w(J)&&(J=Z(J,xt+(J.key==null||D&&D.key===J.key?"":(""+J.key).replace(G,"$&/")+"/")+Mt)),tt.push(J)),1;Mt=0;var Rt=St===""?".":St+":";if(U(D))for(var wt=0;wt<D.length;wt++)St=D[wt],mt=Rt+ct(St,wt),Mt+=ht(St,tt,xt,mt,J);else if(wt=x(D),typeof wt=="function")for(D=wt.call(D),wt=0;!(St=D.next()).done;)St=St.value,mt=Rt+ct(St,wt++),Mt+=ht(St,tt,xt,mt,J);else if(mt==="object"){if(typeof D.then=="function")return ht(vt(D),tt,xt,St,J);throw tt=String(D),Error("Objects are not valid as a React child (found: "+(tt==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":tt)+"). If you meant to render a collection of children, use an array instead.")}return Mt}function P(D,tt,xt){if(D==null)return D;var St=[],J=0;return ht(D,St,"","",function(mt){return tt.call(xt,mt,J++)}),St}function K(D){if(D._status===-1){var tt=D._result;tt=tt(),tt.then(function(xt){(D._status===0||D._status===-1)&&(D._status=1,D._result=xt)},function(xt){(D._status===0||D._status===-1)&&(D._status=2,D._result=xt)}),D._status===-1&&(D._status=0,D._result=tt)}if(D._status===1)return D._result.default;throw D._result}var q=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var tt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(tt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function Et(){}return re.Children={map:P,forEach:function(D,tt,xt){P(D,function(){tt.apply(this,arguments)},xt)},count:function(D){var tt=0;return P(D,function(){tt++}),tt},toArray:function(D){return P(D,function(tt){return tt})||[]},only:function(D){if(!w(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},re.Component=S,re.Fragment=i,re.Profiler=l,re.PureComponent=I,re.StrictMode=r,re.Suspense=m,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=k,re.__COMPILER_RUNTIME={__proto__:null,c:function(D){return k.H.useMemoCache(D)}},re.cache=function(D){return function(){return D.apply(null,arguments)}},re.cloneElement=function(D,tt,xt){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var St=A({},D.props),J=D.key,mt=void 0;if(tt!=null)for(Mt in tt.ref!==void 0&&(mt=void 0),tt.key!==void 0&&(J=""+tt.key),tt)!X.call(tt,Mt)||Mt==="key"||Mt==="__self"||Mt==="__source"||Mt==="ref"&&tt.ref===void 0||(St[Mt]=tt[Mt]);var Mt=arguments.length-2;if(Mt===1)St.children=xt;else if(1<Mt){for(var Rt=Array(Mt),wt=0;wt<Mt;wt++)Rt[wt]=arguments[wt+2];St.children=Rt}return F(D.type,J,void 0,void 0,mt,St)},re.createContext=function(D){return D={$$typeof:d,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:u,_context:D},D},re.createElement=function(D,tt,xt){var St,J={},mt=null;if(tt!=null)for(St in tt.key!==void 0&&(mt=""+tt.key),tt)X.call(tt,St)&&St!=="key"&&St!=="__self"&&St!=="__source"&&(J[St]=tt[St]);var Mt=arguments.length-2;if(Mt===1)J.children=xt;else if(1<Mt){for(var Rt=Array(Mt),wt=0;wt<Mt;wt++)Rt[wt]=arguments[wt+2];J.children=Rt}if(D&&D.defaultProps)for(St in Mt=D.defaultProps,Mt)J[St]===void 0&&(J[St]=Mt[St]);return F(D,mt,void 0,void 0,null,J)},re.createRef=function(){return{current:null}},re.forwardRef=function(D){return{$$typeof:h,render:D}},re.isValidElement=w,re.lazy=function(D){return{$$typeof:g,_payload:{_status:-1,_result:D},_init:K}},re.memo=function(D,tt){return{$$typeof:p,type:D,compare:tt===void 0?null:tt}},re.startTransition=function(D){var tt=k.T,xt={};k.T=xt;try{var St=D(),J=k.S;J!==null&&J(xt,St),typeof St=="object"&&St!==null&&typeof St.then=="function"&&St.then(Et,q)}catch(mt){q(mt)}finally{k.T=tt}},re.unstable_useCacheRefresh=function(){return k.H.useCacheRefresh()},re.use=function(D){return k.H.use(D)},re.useActionState=function(D,tt,xt){return k.H.useActionState(D,tt,xt)},re.useCallback=function(D,tt){return k.H.useCallback(D,tt)},re.useContext=function(D){return k.H.useContext(D)},re.useDebugValue=function(){},re.useDeferredValue=function(D,tt){return k.H.useDeferredValue(D,tt)},re.useEffect=function(D,tt,xt){var St=k.H;if(typeof xt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return St.useEffect(D,tt)},re.useId=function(){return k.H.useId()},re.useImperativeHandle=function(D,tt,xt){return k.H.useImperativeHandle(D,tt,xt)},re.useInsertionEffect=function(D,tt){return k.H.useInsertionEffect(D,tt)},re.useLayoutEffect=function(D,tt){return k.H.useLayoutEffect(D,tt)},re.useMemo=function(D,tt){return k.H.useMemo(D,tt)},re.useOptimistic=function(D,tt){return k.H.useOptimistic(D,tt)},re.useReducer=function(D,tt,xt){return k.H.useReducer(D,tt,xt)},re.useRef=function(D){return k.H.useRef(D)},re.useState=function(D){return k.H.useState(D)},re.useSyncExternalStore=function(D,tt,xt){return k.H.useSyncExternalStore(D,tt,xt)},re.useTransition=function(){return k.H.useTransition()},re.version="19.1.0",re}var X0;function rh(){return X0||(X0=1,Of.exports=Ux()),Of.exports}var gi=rh();const Sr=Cx(gi);var Pf={exports:{}},So={},zf={exports:{}},Bf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W0;function Nx(){return W0||(W0=1,function(o){function e(P,K){var q=P.length;P.push(K);t:for(;0<q;){var Et=q-1>>>1,D=P[Et];if(0<l(D,K))P[Et]=K,P[q]=D,q=Et;else break t}}function i(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var K=P[0],q=P.pop();if(q!==K){P[0]=q;t:for(var Et=0,D=P.length,tt=D>>>1;Et<tt;){var xt=2*(Et+1)-1,St=P[xt],J=xt+1,mt=P[J];if(0>l(St,q))J<D&&0>l(mt,St)?(P[Et]=mt,P[J]=q,Et=J):(P[Et]=St,P[xt]=q,Et=xt);else if(J<D&&0>l(mt,q))P[Et]=mt,P[J]=q,Et=J;else break t}}return K}function l(P,K){var q=P.sortIndex-K.sortIndex;return q!==0?q:P.id-K.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],g=1,v=null,x=3,M=!1,A=!1,C=!1,S=!1,_=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function U(P){for(var K=i(p);K!==null;){if(K.callback===null)r(p);else if(K.startTime<=P)r(p),K.sortIndex=K.expirationTime,e(m,K);else break;K=i(p)}}function k(P){if(C=!1,U(P),!A)if(i(m)!==null)A=!0,X||(X=!0,ct());else{var K=i(p);K!==null&&ht(k,K.startTime-P)}}var X=!1,F=-1,Z=5,w=-1;function R(){return S?!0:!(o.unstable_now()-w<Z)}function G(){if(S=!1,X){var P=o.unstable_now();w=P;var K=!0;try{t:{A=!1,C&&(C=!1,I(F),F=-1),M=!0;var q=x;try{e:{for(U(P),v=i(m);v!==null&&!(v.expirationTime>P&&R());){var Et=v.callback;if(typeof Et=="function"){v.callback=null,x=v.priorityLevel;var D=Et(v.expirationTime<=P);if(P=o.unstable_now(),typeof D=="function"){v.callback=D,U(P),K=!0;break e}v===i(m)&&r(m),U(P)}else r(m);v=i(m)}if(v!==null)K=!0;else{var tt=i(p);tt!==null&&ht(k,tt.startTime-P),K=!1}}break t}finally{v=null,x=q,M=!1}K=void 0}}finally{K?ct():X=!1}}}var ct;if(typeof O=="function")ct=function(){O(G)};else if(typeof MessageChannel<"u"){var ot=new MessageChannel,vt=ot.port2;ot.port1.onmessage=G,ct=function(){vt.postMessage(null)}}else ct=function(){_(G,0)};function ht(P,K){F=_(function(){P(o.unstable_now())},K)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(P){P.callback=null},o.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<P?Math.floor(1e3/P):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_next=function(P){switch(x){case 1:case 2:case 3:var K=3;break;default:K=x}var q=x;x=K;try{return P()}finally{x=q}},o.unstable_requestPaint=function(){S=!0},o.unstable_runWithPriority=function(P,K){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var q=x;x=P;try{return K()}finally{x=q}},o.unstable_scheduleCallback=function(P,K,q){var Et=o.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?Et+q:Et):q=Et,P){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=q+D,P={id:g++,callback:K,priorityLevel:P,startTime:q,expirationTime:D,sortIndex:-1},q>Et?(P.sortIndex=q,e(p,P),i(m)===null&&P===i(p)&&(C?(I(F),F=-1):C=!0,ht(k,q-Et))):(P.sortIndex=D,e(m,P),A||M||(A=!0,X||(X=!0,ct()))),P},o.unstable_shouldYield=R,o.unstable_wrapCallback=function(P){var K=x;return function(){var q=x;x=K;try{return P.apply(this,arguments)}finally{x=q}}}}(Bf)),Bf}var j0;function Lx(){return j0||(j0=1,zf.exports=Nx()),zf.exports}var If={exports:{}},An={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q0;function Ox(){if(q0)return An;q0=1;var o=rh();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:g}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return An.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,An.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,g)},An.flushSync=function(m){var p=d.T,g=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=p,r.p=g,r.d.f()}},An.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},An.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},An.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,v=h(g,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:M}):g==="script"&&r.d.X(m,{crossOrigin:v,integrity:x,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},An.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},An.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,v=h(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},An.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},An.requestFormReset=function(m){r.d.r(m)},An.unstable_batchedUpdates=function(m,p){return m(p)},An.useFormState=function(m,p,g){return d.H.useFormState(m,p,g)},An.useFormStatus=function(){return d.H.useHostTransitionStatus()},An.version="19.1.0",An}var Y0;function Px(){if(Y0)return If.exports;Y0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),If.exports=Ox(),If.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z0;function zx(){if(Z0)return So;Z0=1;var o=Lx(),e=rh(),i=Px();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(u(t)!==t)throw Error(r(188))}function m(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return h(c),t;if(f===s)return h(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var y=!1,b=c.child;b;){if(b===a){y=!0,a=c,s=f;break}if(b===s){y=!0,s=c,a=f;break}b=b.sibling}if(!y){for(b=f.child;b;){if(b===a){y=!0,a=f,s=c;break}if(b===s){y=!0,s=f,a=c;break}b=b.sibling}if(!y)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function p(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=p(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),I=Symbol.for("react.consumer"),O=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),X=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function ct(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var ot=Symbol.for("react.client.reference");function vt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ot?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case A:return"Fragment";case S:return"Profiler";case C:return"StrictMode";case k:return"Suspense";case X:return"SuspenseList";case w:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case M:return"Portal";case O:return(t.displayName||"Context")+".Provider";case I:return(t._context.displayName||"Context")+".Consumer";case U:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case F:return n=t.displayName||null,n!==null?n:vt(t.type)||"Memo";case Z:n=t._payload,t=t._init;try{return vt(t(n))}catch{}}return null}var ht=Array.isArray,P=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},Et=[],D=-1;function tt(t){return{current:t}}function xt(t){0>D||(t.current=Et[D],Et[D]=null,D--)}function St(t,n){D++,Et[D]=t.current,t.current=n}var J=tt(null),mt=tt(null),Mt=tt(null),Rt=tt(null);function wt(t,n){switch(St(Mt,n),St(mt,t),St(J,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?m0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=m0(n),t=g0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}xt(J),St(J,t)}function oe(){xt(J),xt(mt),xt(Mt)}function Qt(t){t.memoizedState!==null&&St(Rt,t);var n=J.current,a=g0(n,t.type);n!==a&&(St(mt,t),St(J,a))}function Ne(t){mt.current===t&&(xt(J),xt(mt)),Rt.current===t&&(xt(Rt),mo._currentValue=q)}var Fe=Object.prototype.hasOwnProperty,ge=o.unstable_scheduleCallback,B=o.unstable_cancelCallback,vn=o.unstable_shouldYield,Se=o.unstable_requestPaint,he=o.unstable_now,Vt=o.unstable_getCurrentPriorityLevel,_e=o.unstable_ImmediatePriority,Yt=o.unstable_UserBlockingPriority,ae=o.unstable_NormalPriority,Ze=o.unstable_LowPriority,N=o.unstable_IdlePriority,E=o.log,et=o.unstable_setDisableYieldValue,ft=null,pt=null;function lt(t){if(typeof E=="function"&&et(t),pt&&typeof pt.setStrictMode=="function")try{pt.setStrictMode(ft,t)}catch{}}var Pt=Math.clz32?Math.clz32:kt,Ut=Math.log,Gt=Math.LN2;function kt(t){return t>>>=0,t===0?32:31-(Ut(t)/Gt|0)|0}var yt=256,zt=4194304;function jt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function qt(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var c=0,f=t.suspendedLanes,y=t.pingedLanes;t=t.warmLanes;var b=s&134217727;return b!==0?(s=b&~f,s!==0?c=jt(s):(y&=b,y!==0?c=jt(y):a||(a=b&~t,a!==0&&(c=jt(a))))):(b=s&~f,b!==0?c=jt(b):y!==0?c=jt(y):a||(a=s&~t,a!==0&&(c=jt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Ct(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ie(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function V(){var t=yt;return yt<<=1,(yt&4194048)===0&&(yt=256),t}function Nt(){var t=zt;return zt<<=1,(zt&62914560)===0&&(zt=4194304),t}function bt(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Bt(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function At(t,n,a,s,c,f){var y=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var b=t.entanglements,L=t.expirationTimes,$=t.hiddenUpdates;for(a=y&~a;0<a;){var ut=31-Pt(a),gt=1<<ut;b[ut]=0,L[ut]=-1;var nt=$[ut];if(nt!==null)for($[ut]=null,ut=0;ut<nt.length;ut++){var it=nt[ut];it!==null&&(it.lane&=-536870913)}a&=~gt}s!==0&&_t(t,s,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(y&~n))}function _t(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Pt(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&4194090}function Ft(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Pt(a),c=1<<s;c&n|t[s]&n&&(t[s]|=n),a&=~c}}function ne(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function we(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Me(){var t=K.p;return t!==0?t:(t=window.event,t===void 0?32:P0(t.type))}function Hn(t,n){var a=K.p;try{return K.p=t,n()}finally{K.p=a}}var fn=Math.random().toString(36).slice(2),rn="__reactFiber$"+fn,xn="__reactProps$"+fn,Un="__reactContainer$"+fn,ka="__reactEvents$"+fn,Io="__reactListeners$"+fn,Fo="__reactHandles$"+fn,Xa="__reactResources$"+fn,sa="__reactMarker$"+fn;function oa(t){delete t[rn],delete t[xn],delete t[ka],delete t[Io],delete t[Fo]}function Ri(t){var n=t[rn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Un]||a[rn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=y0(t);t!==null;){if(a=t[rn])return a;t=y0(t)}return n}t=a,a=t.parentNode}return null}function Ci(t){if(t=t[rn]||t[Un]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function Wa(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function la(t){var n=t[Xa];return n||(n=t[Xa]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function tn(t){t[sa]=!0}var Ho=new Set,Go={};function wi(t,n){T(t,n),T(t+"Capture",n)}function T(t,n){for(Go[t]=n,t=0;t<n.length;t++)Ho.add(n[t])}var j=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),at={},rt={};function Y(t){return Fe.call(rt,t)?!0:Fe.call(at,t)?!1:j.test(t)?rt[t]=!0:(at[t]=!0,!1)}function Tt(t,n,a){if(Y(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Dt(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Ot(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}var It,te;function Kt(t){if(It===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);It=n&&n[1]||"",te=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+It+t+te}var Xt=!1;function le(t,n){if(!t||Xt)return"";Xt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(it){var nt=it}Reflect.construct(t,[],gt)}else{try{gt.call()}catch(it){nt=it}t.call(gt.prototype)}}else{try{throw Error()}catch(it){nt=it}(gt=t())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(it){if(it&&nt&&typeof it.stack=="string")return[it.stack,nt.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),y=f[0],b=f[1];if(y&&b){var L=y.split(`
`),$=b.split(`
`);for(c=s=0;s<L.length&&!L[s].includes("DetermineComponentFrameRoot");)s++;for(;c<$.length&&!$[c].includes("DetermineComponentFrameRoot");)c++;if(s===L.length||c===$.length)for(s=L.length-1,c=$.length-1;1<=s&&0<=c&&L[s]!==$[c];)c--;for(;1<=s&&0<=c;s--,c--)if(L[s]!==$[c]){if(s!==1||c!==1)do if(s--,c--,0>c||L[s]!==$[c]){var ut=`
`+L[s].replace(" at new "," at ");return t.displayName&&ut.includes("<anonymous>")&&(ut=ut.replace("<anonymous>",t.displayName)),ut}while(1<=s&&0<=c);break}}}finally{Xt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Kt(a):""}function Re(t){switch(t.tag){case 26:case 27:case 5:return Kt(t.type);case 16:return Kt("Lazy");case 13:return Kt("Suspense");case 19:return Kt("SuspenseList");case 0:case 15:return le(t.type,!1);case 11:return le(t.type.render,!1);case 1:return le(t.type,!0);case 31:return Kt("Activity");default:return""}}function Xe(t){try{var n="";do n+=Re(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function fe(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ce(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Zt(t){var n=Ce(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),s=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(y){s=""+y,f.call(this,y)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return s},setValue:function(y){s=""+y},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Le(t){t._valueTracker||(t._valueTracker=Zt(t))}function ve(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=Ce(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function dn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var ca=/[\n"\\]/g;function Ve(t){return t.replace(ca,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Di(t,n,a,s,c,f,y,b){t.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.type=y:t.removeAttribute("type"),n!=null?y==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+fe(n)):t.value!==""+fe(n)&&(t.value=""+fe(n)):y!=="submit"&&y!=="reset"||t.removeAttribute("value"),n!=null?bn(t,y,fe(n)):a!=null?bn(t,y,fe(a)):s!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.name=""+fe(b):t.removeAttribute("name")}function He(t,n,a,s,c,f,y,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+fe(a):"",n=n!=null?""+fe(n):a,b||n===t.value||(t.value=n),t.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=b?t.checked:!!s,t.defaultChecked=!!s,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(t.name=y)}function bn(t,n,a){n==="number"&&dn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function sn(t,n,a,s){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&s&&(t[a].defaultSelected=!0)}else{for(a=""+fe(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,s&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function hn(t,n,a){if(n!=null&&(n=""+fe(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+fe(a):""}function yn(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(ht(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=fe(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s)}function vi(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Ui=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function mh(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||Ui.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function gh(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&mh(t,c,s)}else for(var f in n)n.hasOwnProperty(f)&&mh(t,f,n[f])}function Uc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var A_=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),R_=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Vo(t){return R_.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Nc=null;function Lc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var br=null,Tr=null;function _h(t){var n=Ci(t);if(n&&(t=n.stateNode)){var a=t[xn]||null;t:switch(t=n.stateNode,n.type){case"input":if(Di(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ve(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var c=s[xn]||null;if(!c)throw Error(r(90));Di(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&ve(s)}break t;case"textarea":hn(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&sn(t,!!a.multiple,n,!1)}}}var Oc=!1;function vh(t,n,a){if(Oc)return t(n,a);Oc=!0;try{var s=t(n);return s}finally{if(Oc=!1,(br!==null||Tr!==null)&&(Rl(),br&&(n=br,t=Tr,Tr=br=null,_h(n),t)))for(n=0;n<t.length;n++)_h(t[n])}}function Rs(t,n){var a=t.stateNode;if(a===null)return null;var s=a[xn]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Ni=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pc=!1;if(Ni)try{var Cs={};Object.defineProperty(Cs,"passive",{get:function(){Pc=!0}}),window.addEventListener("test",Cs,Cs),window.removeEventListener("test",Cs,Cs)}catch{Pc=!1}var ua=null,zc=null,ko=null;function xh(){if(ko)return ko;var t,n=zc,a=n.length,s,c="value"in ua?ua.value:ua.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var y=a-t;for(s=1;s<=y&&n[a-s]===c[f-s];s++);return ko=c.slice(t,1<s?1-s:void 0)}function Xo(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Wo(){return!0}function yh(){return!1}function Nn(t){function n(a,s,c,f,y){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=y,this.currentTarget=null;for(var b in t)t.hasOwnProperty(b)&&(a=t[b],this[b]=a?a(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Wo:yh,this.isPropagationStopped=yh,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Wo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Wo)},persist:function(){},isPersistent:Wo}),n}var ja={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jo=Nn(ja),ws=g({},ja,{view:0,detail:0}),C_=Nn(ws),Bc,Ic,Ds,qo=g({},ws,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ds&&(Ds&&t.type==="mousemove"?(Bc=t.screenX-Ds.screenX,Ic=t.screenY-Ds.screenY):Ic=Bc=0,Ds=t),Bc)},movementY:function(t){return"movementY"in t?t.movementY:Ic}}),Sh=Nn(qo),w_=g({},qo,{dataTransfer:0}),D_=Nn(w_),U_=g({},ws,{relatedTarget:0}),Fc=Nn(U_),N_=g({},ja,{animationName:0,elapsedTime:0,pseudoElement:0}),L_=Nn(N_),O_=g({},ja,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),P_=Nn(O_),z_=g({},ja,{data:0}),Mh=Nn(z_),B_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},I_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},F_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function H_(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=F_[t])?!!n[t]:!1}function Hc(){return H_}var G_=g({},ws,{key:function(t){if(t.key){var n=B_[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Xo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?I_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hc,charCode:function(t){return t.type==="keypress"?Xo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Xo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),V_=Nn(G_),k_=g({},qo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Eh=Nn(k_),X_=g({},ws,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hc}),W_=Nn(X_),j_=g({},ja,{propertyName:0,elapsedTime:0,pseudoElement:0}),q_=Nn(j_),Y_=g({},qo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Z_=Nn(Y_),K_=g({},ja,{newState:0,oldState:0}),Q_=Nn(K_),J_=[9,13,27,32],Gc=Ni&&"CompositionEvent"in window,Us=null;Ni&&"documentMode"in document&&(Us=document.documentMode);var $_=Ni&&"TextEvent"in window&&!Us,bh=Ni&&(!Gc||Us&&8<Us&&11>=Us),Th=" ",Ah=!1;function Rh(t,n){switch(t){case"keyup":return J_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ch(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ar=!1;function tv(t,n){switch(t){case"compositionend":return Ch(n);case"keypress":return n.which!==32?null:(Ah=!0,Th);case"textInput":return t=n.data,t===Th&&Ah?null:t;default:return null}}function ev(t,n){if(Ar)return t==="compositionend"||!Gc&&Rh(t,n)?(t=xh(),ko=zc=ua=null,Ar=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return bh&&n.locale!=="ko"?null:n.data;default:return null}}var nv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wh(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!nv[t.type]:n==="textarea"}function Dh(t,n,a,s){br?Tr?Tr.push(s):Tr=[s]:br=s,n=Ll(n,"onChange"),0<n.length&&(a=new jo("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Ns=null,Ls=null;function iv(t){u0(t,0)}function Yo(t){var n=Wa(t);if(ve(n))return t}function Uh(t,n){if(t==="change")return n}var Nh=!1;if(Ni){var Vc;if(Ni){var kc="oninput"in document;if(!kc){var Lh=document.createElement("div");Lh.setAttribute("oninput","return;"),kc=typeof Lh.oninput=="function"}Vc=kc}else Vc=!1;Nh=Vc&&(!document.documentMode||9<document.documentMode)}function Oh(){Ns&&(Ns.detachEvent("onpropertychange",Ph),Ls=Ns=null)}function Ph(t){if(t.propertyName==="value"&&Yo(Ls)){var n=[];Dh(n,Ls,t,Lc(t)),vh(iv,n)}}function av(t,n,a){t==="focusin"?(Oh(),Ns=n,Ls=a,Ns.attachEvent("onpropertychange",Ph)):t==="focusout"&&Oh()}function rv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Yo(Ls)}function sv(t,n){if(t==="click")return Yo(n)}function ov(t,n){if(t==="input"||t==="change")return Yo(n)}function lv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Gn=typeof Object.is=="function"?Object.is:lv;function Os(t,n){if(Gn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!Fe.call(n,c)||!Gn(t[c],n[c]))return!1}return!0}function zh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Bh(t,n){var a=zh(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=zh(a)}}function Ih(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Ih(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Fh(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=dn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=dn(t.document)}return n}function Xc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var cv=Ni&&"documentMode"in document&&11>=document.documentMode,Rr=null,Wc=null,Ps=null,jc=!1;function Hh(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;jc||Rr==null||Rr!==dn(s)||(s=Rr,"selectionStart"in s&&Xc(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Ps&&Os(Ps,s)||(Ps=s,s=Ll(Wc,"onSelect"),0<s.length&&(n=new jo("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Rr)))}function qa(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Cr={animationend:qa("Animation","AnimationEnd"),animationiteration:qa("Animation","AnimationIteration"),animationstart:qa("Animation","AnimationStart"),transitionrun:qa("Transition","TransitionRun"),transitionstart:qa("Transition","TransitionStart"),transitioncancel:qa("Transition","TransitionCancel"),transitionend:qa("Transition","TransitionEnd")},qc={},Gh={};Ni&&(Gh=document.createElement("div").style,"AnimationEvent"in window||(delete Cr.animationend.animation,delete Cr.animationiteration.animation,delete Cr.animationstart.animation),"TransitionEvent"in window||delete Cr.transitionend.transition);function Ya(t){if(qc[t])return qc[t];if(!Cr[t])return t;var n=Cr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Gh)return qc[t]=n[a];return t}var Vh=Ya("animationend"),kh=Ya("animationiteration"),Xh=Ya("animationstart"),uv=Ya("transitionrun"),fv=Ya("transitionstart"),dv=Ya("transitioncancel"),Wh=Ya("transitionend"),jh=new Map,Yc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Yc.push("scrollEnd");function li(t,n){jh.set(t,n),wi(n,[t])}var qh=new WeakMap;function Kn(t,n){if(typeof t=="object"&&t!==null){var a=qh.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Xe(n)},qh.set(t,n),n)}return{value:t,source:n,stack:Xe(n)}}var Qn=[],wr=0,Zc=0;function Zo(){for(var t=wr,n=Zc=wr=0;n<t;){var a=Qn[n];Qn[n++]=null;var s=Qn[n];Qn[n++]=null;var c=Qn[n];Qn[n++]=null;var f=Qn[n];if(Qn[n++]=null,s!==null&&c!==null){var y=s.pending;y===null?c.next=c:(c.next=y.next,y.next=c),s.pending=c}f!==0&&Yh(a,c,f)}}function Ko(t,n,a,s){Qn[wr++]=t,Qn[wr++]=n,Qn[wr++]=a,Qn[wr++]=s,Zc|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function Kc(t,n,a,s){return Ko(t,n,a,s),Qo(t)}function Dr(t,n){return Ko(t,null,null,n),Qo(t)}function Yh(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Pt(a),t=f.hiddenUpdates,s=t[c],s===null?t[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function Qo(t){if(50<so)throw so=0,nf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Ur={};function hv(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vn(t,n,a,s){return new hv(t,n,a,s)}function Qc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Li(t,n){var a=t.alternate;return a===null?(a=Vn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Zh(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Jo(t,n,a,s,c,f){var y=0;if(s=t,typeof t=="function")Qc(t)&&(y=1);else if(typeof t=="string")y=mx(t,a,J.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case w:return t=Vn(31,a,n,c),t.elementType=w,t.lanes=f,t;case A:return Za(a.children,c,f,n);case C:y=8,c|=24;break;case S:return t=Vn(12,a,n,c|2),t.elementType=S,t.lanes=f,t;case k:return t=Vn(13,a,n,c),t.elementType=k,t.lanes=f,t;case X:return t=Vn(19,a,n,c),t.elementType=X,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _:case O:y=10;break t;case I:y=9;break t;case U:y=11;break t;case F:y=14;break t;case Z:y=16,s=null;break t}y=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=Vn(y,a,n,c),n.elementType=t,n.type=s,n.lanes=f,n}function Za(t,n,a,s){return t=Vn(7,t,s,n),t.lanes=a,t}function Jc(t,n,a){return t=Vn(6,t,null,n),t.lanes=a,t}function $c(t,n,a){return n=Vn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Nr=[],Lr=0,$o=null,tl=0,Jn=[],$n=0,Ka=null,Oi=1,Pi="";function Qa(t,n){Nr[Lr++]=tl,Nr[Lr++]=$o,$o=t,tl=n}function Kh(t,n,a){Jn[$n++]=Oi,Jn[$n++]=Pi,Jn[$n++]=Ka,Ka=t;var s=Oi;t=Pi;var c=32-Pt(s)-1;s&=~(1<<c),a+=1;var f=32-Pt(n)+c;if(30<f){var y=c-c%5;f=(s&(1<<y)-1).toString(32),s>>=y,c-=y,Oi=1<<32-Pt(n)+c|a<<c|s,Pi=f+t}else Oi=1<<f|a<<c|s,Pi=t}function tu(t){t.return!==null&&(Qa(t,1),Kh(t,1,0))}function eu(t){for(;t===$o;)$o=Nr[--Lr],Nr[Lr]=null,tl=Nr[--Lr],Nr[Lr]=null;for(;t===Ka;)Ka=Jn[--$n],Jn[$n]=null,Pi=Jn[--$n],Jn[$n]=null,Oi=Jn[--$n],Jn[$n]=null}var wn=null,qe=null,Ae=!1,Ja=null,xi=!1,nu=Error(r(519));function $a(t){var n=Error(r(418,""));throw Is(Kn(n,t)),nu}function Qh(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[rn]=t,n[xn]=s,a){case"dialog":me("cancel",n),me("close",n);break;case"iframe":case"object":case"embed":me("load",n);break;case"video":case"audio":for(a=0;a<lo.length;a++)me(lo[a],n);break;case"source":me("error",n);break;case"img":case"image":case"link":me("error",n),me("load",n);break;case"details":me("toggle",n);break;case"input":me("invalid",n),He(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),Le(n);break;case"select":me("invalid",n);break;case"textarea":me("invalid",n),yn(n,s.value,s.defaultValue,s.children),Le(n)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||p0(n.textContent,a)?(s.popover!=null&&(me("beforetoggle",n),me("toggle",n)),s.onScroll!=null&&me("scroll",n),s.onScrollEnd!=null&&me("scrollend",n),s.onClick!=null&&(n.onclick=Ol),n=!0):n=!1,n||$a(t)}function Jh(t){for(wn=t.return;wn;)switch(wn.tag){case 5:case 13:xi=!1;return;case 27:case 3:xi=!0;return;default:wn=wn.return}}function zs(t){if(t!==wn)return!1;if(!Ae)return Jh(t),Ae=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||xf(t.type,t.memoizedProps)),a=!a),a&&qe&&$a(t),Jh(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));t:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){qe=ui(t.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}qe=null}}else n===27?(n=qe,Aa(t.type)?(t=Ef,Ef=null,qe=t):qe=n):qe=wn?ui(t.stateNode.nextSibling):null;return!0}function Bs(){qe=wn=null,Ae=!1}function $h(){var t=Ja;return t!==null&&(Pn===null?Pn=t:Pn.push.apply(Pn,t),Ja=null),t}function Is(t){Ja===null?Ja=[t]:Ja.push(t)}var iu=tt(null),tr=null,zi=null;function fa(t,n,a){St(iu,n._currentValue),n._currentValue=a}function Bi(t){t._currentValue=iu.current,xt(iu)}function au(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function ru(t,n,a,s){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var y=c.child;f=f.firstContext;t:for(;f!==null;){var b=f;f=c;for(var L=0;L<n.length;L++)if(b.context===n[L]){f.lanes|=a,b=f.alternate,b!==null&&(b.lanes|=a),au(f.return,a,t),s||(y=null);break t}f=b.next}}else if(c.tag===18){if(y=c.return,y===null)throw Error(r(341));y.lanes|=a,f=y.alternate,f!==null&&(f.lanes|=a),au(y,a,t),y=null}else y=c.child;if(y!==null)y.return=c;else for(y=c;y!==null;){if(y===t){y=null;break}if(c=y.sibling,c!==null){c.return=y.return,y=c;break}y=y.return}c=y}}function Fs(t,n,a,s){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var y=c.alternate;if(y===null)throw Error(r(387));if(y=y.memoizedProps,y!==null){var b=c.type;Gn(c.pendingProps.value,y.value)||(t!==null?t.push(b):t=[b])}}else if(c===Rt.current){if(y=c.alternate,y===null)throw Error(r(387));y.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(mo):t=[mo])}c=c.return}t!==null&&ru(n,t,a,s),n.flags|=262144}function el(t){for(t=t.firstContext;t!==null;){if(!Gn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function er(t){tr=t,zi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Tn(t){return tp(tr,t)}function nl(t,n){return tr===null&&er(t),tp(t,n)}function tp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},zi===null){if(t===null)throw Error(r(308));zi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else zi=zi.next=n;return a}var pv=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},mv=o.unstable_scheduleCallback,gv=o.unstable_NormalPriority,on={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function su(){return{controller:new pv,data:new Map,refCount:0}}function Hs(t){t.refCount--,t.refCount===0&&mv(gv,function(){t.controller.abort()})}var Gs=null,ou=0,Or=0,Pr=null;function _v(t,n){if(Gs===null){var a=Gs=[];ou=0,Or=uf(),Pr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return ou++,n.then(ep,ep),n}function ep(){if(--ou===0&&Gs!==null){Pr!==null&&(Pr.status="fulfilled");var t=Gs;Gs=null,Or=0,Pr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function vv(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var np=P.S;P.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&_v(t,n),np!==null&&np(t,n)};var nr=tt(null);function lu(){var t=nr.current;return t!==null?t:ke.pooledCache}function il(t,n){n===null?St(nr,nr.current):St(nr,n.pool)}function ip(){var t=lu();return t===null?null:{parent:on._currentValue,pool:t}}var Vs=Error(r(460)),ap=Error(r(474)),al=Error(r(542)),cu={then:function(){}};function rp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function rl(){}function sp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(rl,rl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,lp(t),t;default:if(typeof n.status=="string")n.then(rl,rl);else{if(t=ke,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,lp(t),t}throw ks=n,Vs}}var ks=null;function op(){if(ks===null)throw Error(r(459));var t=ks;return ks=null,t}function lp(t){if(t===Vs||t===al)throw Error(r(483))}var da=!1;function uu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function fu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ha(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function pa(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(De&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=Qo(t),Yh(t,null,a),n}return Ko(t,s,n,a),Qo(t)}function Xs(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Ft(t,a)}}function du(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=y:f=f.next=y,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var hu=!1;function Ws(){if(hu){var t=Pr;if(t!==null)throw t}}function js(t,n,a,s){hu=!1;var c=t.updateQueue;da=!1;var f=c.firstBaseUpdate,y=c.lastBaseUpdate,b=c.shared.pending;if(b!==null){c.shared.pending=null;var L=b,$=L.next;L.next=null,y===null?f=$:y.next=$,y=L;var ut=t.alternate;ut!==null&&(ut=ut.updateQueue,b=ut.lastBaseUpdate,b!==y&&(b===null?ut.firstBaseUpdate=$:b.next=$,ut.lastBaseUpdate=L))}if(f!==null){var gt=c.baseState;y=0,ut=$=L=null,b=f;do{var nt=b.lane&-536870913,it=nt!==b.lane;if(it?(ye&nt)===nt:(s&nt)===nt){nt!==0&&nt===Or&&(hu=!0),ut!==null&&(ut=ut.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var ee=t,Jt=b;nt=n;var ze=a;switch(Jt.tag){case 1:if(ee=Jt.payload,typeof ee=="function"){gt=ee.call(ze,gt,nt);break t}gt=ee;break t;case 3:ee.flags=ee.flags&-65537|128;case 0:if(ee=Jt.payload,nt=typeof ee=="function"?ee.call(ze,gt,nt):ee,nt==null)break t;gt=g({},gt,nt);break t;case 2:da=!0}}nt=b.callback,nt!==null&&(t.flags|=64,it&&(t.flags|=8192),it=c.callbacks,it===null?c.callbacks=[nt]:it.push(nt))}else it={lane:nt,tag:b.tag,payload:b.payload,callback:b.callback,next:null},ut===null?($=ut=it,L=gt):ut=ut.next=it,y|=nt;if(b=b.next,b===null){if(b=c.shared.pending,b===null)break;it=b,b=it.next,it.next=null,c.lastBaseUpdate=it,c.shared.pending=null}}while(!0);ut===null&&(L=gt),c.baseState=L,c.firstBaseUpdate=$,c.lastBaseUpdate=ut,f===null&&(c.shared.lanes=0),Ma|=y,t.lanes=y,t.memoizedState=gt}}function cp(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function up(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)cp(a[t],n)}var zr=tt(null),sl=tt(0);function fp(t,n){t=Xi,St(sl,t),St(zr,n),Xi=t|n.baseLanes}function pu(){St(sl,Xi),St(zr,zr.current)}function mu(){Xi=sl.current,xt(zr),xt(sl)}var ma=0,ue=null,Oe=null,en=null,ol=!1,Br=!1,ir=!1,ll=0,qs=0,Ir=null,xv=0;function Ke(){throw Error(r(321))}function gu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Gn(t[a],n[a]))return!1;return!0}function _u(t,n,a,s,c,f){return ma=f,ue=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=t===null||t.memoizedState===null?Yp:Zp,ir=!1,f=a(s,c),ir=!1,Br&&(f=hp(n,a,s,c)),dp(t),f}function dp(t){P.H=pl;var n=Oe!==null&&Oe.next!==null;if(ma=0,en=Oe=ue=null,ol=!1,qs=0,Ir=null,n)throw Error(r(300));t===null||pn||(t=t.dependencies,t!==null&&el(t)&&(pn=!0))}function hp(t,n,a,s){ue=t;var c=0;do{if(Br&&(Ir=null),qs=0,Br=!1,25<=c)throw Error(r(301));if(c+=1,en=Oe=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}P.H=Av,f=n(a,s)}while(Br);return f}function yv(){var t=P.H,n=t.useState()[0];return n=typeof n.then=="function"?Ys(n):n,t=t.useState()[0],(Oe!==null?Oe.memoizedState:null)!==t&&(ue.flags|=1024),n}function vu(){var t=ll!==0;return ll=0,t}function xu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function yu(t){if(ol){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}ol=!1}ma=0,en=Oe=ue=null,Br=!1,qs=ll=0,Ir=null}function Ln(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return en===null?ue.memoizedState=en=t:en=en.next=t,en}function nn(){if(Oe===null){var t=ue.alternate;t=t!==null?t.memoizedState:null}else t=Oe.next;var n=en===null?ue.memoizedState:en.next;if(n!==null)en=n,Oe=t;else{if(t===null)throw ue.alternate===null?Error(r(467)):Error(r(310));Oe=t,t={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},en===null?ue.memoizedState=en=t:en=en.next=t}return en}function Su(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ys(t){var n=qs;return qs+=1,Ir===null&&(Ir=[]),t=sp(Ir,t,n),n=ue,(en===null?n.memoizedState:en.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?Yp:Zp),t}function cl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Ys(t);if(t.$$typeof===O)return Tn(t)}throw Error(r(438,String(t)))}function Mu(t){var n=null,a=ue.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=ue.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Su(),ue.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=R;return n.index++,a}function Ii(t,n){return typeof n=="function"?n(t):n}function ul(t){var n=nn();return Eu(n,Oe,t)}function Eu(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=t.baseQueue,f=s.pending;if(f!==null){if(c!==null){var y=c.next;c.next=f.next,f.next=y}n.baseQueue=c=f,s.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var b=y=null,L=null,$=n,ut=!1;do{var gt=$.lane&-536870913;if(gt!==$.lane?(ye&gt)===gt:(ma&gt)===gt){var nt=$.revertLane;if(nt===0)L!==null&&(L=L.next={lane:0,revertLane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),gt===Or&&(ut=!0);else if((ma&nt)===nt){$=$.next,nt===Or&&(ut=!0);continue}else gt={lane:0,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},L===null?(b=L=gt,y=f):L=L.next=gt,ue.lanes|=nt,Ma|=nt;gt=$.action,ir&&a(f,gt),f=$.hasEagerState?$.eagerState:a(f,gt)}else nt={lane:gt,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},L===null?(b=L=nt,y=f):L=L.next=nt,ue.lanes|=gt,Ma|=gt;$=$.next}while($!==null&&$!==n);if(L===null?y=f:L.next=b,!Gn(f,t.memoizedState)&&(pn=!0,ut&&(a=Pr,a!==null)))throw a;t.memoizedState=f,t.baseState=y,t.baseQueue=L,s.lastRenderedState=f}return c===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function bu(t){var n=nn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var y=c=c.next;do f=t(f,y.action),y=y.next;while(y!==c);Gn(f,n.memoizedState)||(pn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function pp(t,n,a){var s=ue,c=nn(),f=Ae;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var y=!Gn((Oe||c).memoizedState,a);y&&(c.memoizedState=a,pn=!0),c=c.queue;var b=_p.bind(null,s,c,t);if(Zs(2048,8,b,[t]),c.getSnapshot!==n||y||en!==null&&en.memoizedState.tag&1){if(s.flags|=2048,Fr(9,fl(),gp.bind(null,s,c,a,n),null),ke===null)throw Error(r(349));f||(ma&124)!==0||mp(s,n,a)}return a}function mp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ue.updateQueue,n===null?(n=Su(),ue.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function gp(t,n,a,s){n.value=a,n.getSnapshot=s,vp(n)&&xp(t)}function _p(t,n,a){return a(function(){vp(n)&&xp(t)})}function vp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Gn(t,a)}catch{return!0}}function xp(t){var n=Dr(t,2);n!==null&&qn(n,t,2)}function Tu(t){var n=Ln();if(typeof t=="function"){var a=t;if(t=a(),ir){lt(!0);try{a()}finally{lt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:t},n}function yp(t,n,a,s){return t.baseState=a,Eu(t,Oe,typeof s=="function"?s:Ii)}function Sv(t,n,a,s,c){if(hl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){f.listeners.push(y)}};P.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Sp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Sp(t,n){var a=n.action,s=n.payload,c=t.state;if(n.isTransition){var f=P.T,y={};P.T=y;try{var b=a(c,s),L=P.S;L!==null&&L(y,b),Mp(t,n,b)}catch($){Au(t,n,$)}finally{P.T=f}}else try{f=a(c,s),Mp(t,n,f)}catch($){Au(t,n,$)}}function Mp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Ep(t,n,s)},function(s){return Au(t,n,s)}):Ep(t,n,a)}function Ep(t,n,a){n.status="fulfilled",n.value=a,bp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Sp(t,a)))}function Au(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,bp(n),n=n.next;while(n!==s)}t.action=null}function bp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Tp(t,n){return n}function Ap(t,n){if(Ae){var a=ke.formState;if(a!==null){t:{var s=ue;if(Ae){if(qe){e:{for(var c=qe,f=xi;c.nodeType!==8;){if(!f){c=null;break e}if(c=ui(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){qe=ui(c.nextSibling),s=c.data==="F!";break t}}$a(s)}s=!1}s&&(n=a[0])}}return a=Ln(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tp,lastRenderedState:n},a.queue=s,a=Wp.bind(null,ue,s),s.dispatch=a,s=Tu(!1),f=Uu.bind(null,ue,!1,s.queue),s=Ln(),c={state:n,dispatch:null,action:t,pending:null},s.queue=c,a=Sv.bind(null,ue,c,f,a),c.dispatch=a,s.memoizedState=t,[n,a,!1]}function Rp(t){var n=nn();return Cp(n,Oe,t)}function Cp(t,n,a){if(n=Eu(t,n,Tp)[0],t=ul(Ii)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=Ys(n)}catch(y){throw y===Vs?al:y}else s=n;n=nn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(ue.flags|=2048,Fr(9,fl(),Mv.bind(null,c,a),null)),[s,f,t]}function Mv(t,n){t.action=n}function wp(t){var n=nn(),a=Oe;if(a!==null)return Cp(n,a,t);nn(),n=n.memoizedState,a=nn();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function Fr(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=ue.updateQueue,n===null&&(n=Su(),ue.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function fl(){return{destroy:void 0,resource:void 0}}function Dp(){return nn().memoizedState}function dl(t,n,a,s){var c=Ln();s=s===void 0?null:s,ue.flags|=t,c.memoizedState=Fr(1|n,fl(),a,s)}function Zs(t,n,a,s){var c=nn();s=s===void 0?null:s;var f=c.memoizedState.inst;Oe!==null&&s!==null&&gu(s,Oe.memoizedState.deps)?c.memoizedState=Fr(n,f,a,s):(ue.flags|=t,c.memoizedState=Fr(1|n,f,a,s))}function Up(t,n){dl(8390656,8,t,n)}function Np(t,n){Zs(2048,8,t,n)}function Lp(t,n){return Zs(4,2,t,n)}function Op(t,n){return Zs(4,4,t,n)}function Pp(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function zp(t,n,a){a=a!=null?a.concat([t]):null,Zs(4,4,Pp.bind(null,n,t),a)}function Ru(){}function Bp(t,n){var a=nn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&gu(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function Ip(t,n){var a=nn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&gu(n,s[1]))return s[0];if(s=t(),ir){lt(!0);try{t()}finally{lt(!1)}}return a.memoizedState=[s,n],s}function Cu(t,n,a){return a===void 0||(ma&1073741824)!==0?t.memoizedState=n:(t.memoizedState=a,t=Gm(),ue.lanes|=t,Ma|=t,a)}function Fp(t,n,a,s){return Gn(a,n)?a:zr.current!==null?(t=Cu(t,a,s),Gn(t,n)||(pn=!0),t):(ma&42)===0?(pn=!0,t.memoizedState=a):(t=Gm(),ue.lanes|=t,Ma|=t,n)}function Hp(t,n,a,s,c){var f=K.p;K.p=f!==0&&8>f?f:8;var y=P.T,b={};P.T=b,Uu(t,!1,n,a);try{var L=c(),$=P.S;if($!==null&&$(b,L),L!==null&&typeof L=="object"&&typeof L.then=="function"){var ut=vv(L,s);Ks(t,n,ut,jn(t))}else Ks(t,n,s,jn(t))}catch(gt){Ks(t,n,{then:function(){},status:"rejected",reason:gt},jn())}finally{K.p=f,P.T=y}}function Ev(){}function wu(t,n,a,s){if(t.tag!==5)throw Error(r(476));var c=Gp(t).queue;Hp(t,c,n,q,a===null?Ev:function(){return Vp(t),a(s)})}function Gp(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:q},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Vp(t){var n=Gp(t).next.queue;Ks(t,n,{},jn())}function Du(){return Tn(mo)}function kp(){return nn().memoizedState}function Xp(){return nn().memoizedState}function bv(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=jn();t=ha(a);var s=pa(n,t,a);s!==null&&(qn(s,n,a),Xs(s,n,a)),n={cache:su()},t.payload=n;return}n=n.return}}function Tv(t,n,a){var s=jn();a={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},hl(t)?jp(n,a):(a=Kc(t,n,a,s),a!==null&&(qn(a,t,s),qp(a,n,s)))}function Wp(t,n,a){var s=jn();Ks(t,n,a,s)}function Ks(t,n,a,s){var c={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(hl(t))jp(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var y=n.lastRenderedState,b=f(y,a);if(c.hasEagerState=!0,c.eagerState=b,Gn(b,y))return Ko(t,n,c,0),ke===null&&Zo(),!1}catch{}finally{}if(a=Kc(t,n,c,s),a!==null)return qn(a,t,s),qp(a,n,s),!0}return!1}function Uu(t,n,a,s){if(s={lane:2,revertLane:uf(),action:s,hasEagerState:!1,eagerState:null,next:null},hl(t)){if(n)throw Error(r(479))}else n=Kc(t,a,s,2),n!==null&&qn(n,t,2)}function hl(t){var n=t.alternate;return t===ue||n!==null&&n===ue}function jp(t,n){Br=ol=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function qp(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Ft(t,a)}}var pl={readContext:Tn,use:cl,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useLayoutEffect:Ke,useInsertionEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useSyncExternalStore:Ke,useId:Ke,useHostTransitionStatus:Ke,useFormState:Ke,useActionState:Ke,useOptimistic:Ke,useMemoCache:Ke,useCacheRefresh:Ke},Yp={readContext:Tn,use:cl,useCallback:function(t,n){return Ln().memoizedState=[t,n===void 0?null:n],t},useContext:Tn,useEffect:Up,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,dl(4194308,4,Pp.bind(null,n,t),a)},useLayoutEffect:function(t,n){return dl(4194308,4,t,n)},useInsertionEffect:function(t,n){dl(4,2,t,n)},useMemo:function(t,n){var a=Ln();n=n===void 0?null:n;var s=t();if(ir){lt(!0);try{t()}finally{lt(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Ln();if(a!==void 0){var c=a(n);if(ir){lt(!0);try{a(n)}finally{lt(!1)}}}else c=n;return s.memoizedState=s.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},s.queue=t,t=t.dispatch=Tv.bind(null,ue,t),[s.memoizedState,t]},useRef:function(t){var n=Ln();return t={current:t},n.memoizedState=t},useState:function(t){t=Tu(t);var n=t.queue,a=Wp.bind(null,ue,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Ru,useDeferredValue:function(t,n){var a=Ln();return Cu(a,t,n)},useTransition:function(){var t=Tu(!1);return t=Hp.bind(null,ue,t.queue,!0,!1),Ln().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=ue,c=Ln();if(Ae){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),ke===null)throw Error(r(349));(ye&124)!==0||mp(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Up(_p.bind(null,s,f,t),[t]),s.flags|=2048,Fr(9,fl(),gp.bind(null,s,f,a,n),null),a},useId:function(){var t=Ln(),n=ke.identifierPrefix;if(Ae){var a=Pi,s=Oi;a=(s&~(1<<32-Pt(s)-1)).toString(32)+a,n="«"+n+"R"+a,a=ll++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=xv++,n="«"+n+"r"+a.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:Du,useFormState:Ap,useActionState:Ap,useOptimistic:function(t){var n=Ln();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Uu.bind(null,ue,!0,a),a.dispatch=n,[t,n]},useMemoCache:Mu,useCacheRefresh:function(){return Ln().memoizedState=bv.bind(null,ue)}},Zp={readContext:Tn,use:cl,useCallback:Bp,useContext:Tn,useEffect:Np,useImperativeHandle:zp,useInsertionEffect:Lp,useLayoutEffect:Op,useMemo:Ip,useReducer:ul,useRef:Dp,useState:function(){return ul(Ii)},useDebugValue:Ru,useDeferredValue:function(t,n){var a=nn();return Fp(a,Oe.memoizedState,t,n)},useTransition:function(){var t=ul(Ii)[0],n=nn().memoizedState;return[typeof t=="boolean"?t:Ys(t),n]},useSyncExternalStore:pp,useId:kp,useHostTransitionStatus:Du,useFormState:Rp,useActionState:Rp,useOptimistic:function(t,n){var a=nn();return yp(a,Oe,t,n)},useMemoCache:Mu,useCacheRefresh:Xp},Av={readContext:Tn,use:cl,useCallback:Bp,useContext:Tn,useEffect:Np,useImperativeHandle:zp,useInsertionEffect:Lp,useLayoutEffect:Op,useMemo:Ip,useReducer:bu,useRef:Dp,useState:function(){return bu(Ii)},useDebugValue:Ru,useDeferredValue:function(t,n){var a=nn();return Oe===null?Cu(a,t,n):Fp(a,Oe.memoizedState,t,n)},useTransition:function(){var t=bu(Ii)[0],n=nn().memoizedState;return[typeof t=="boolean"?t:Ys(t),n]},useSyncExternalStore:pp,useId:kp,useHostTransitionStatus:Du,useFormState:wp,useActionState:wp,useOptimistic:function(t,n){var a=nn();return Oe!==null?yp(a,Oe,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Mu,useCacheRefresh:Xp},Hr=null,Qs=0;function ml(t){var n=Qs;return Qs+=1,Hr===null&&(Hr=[]),sp(Hr,t,n)}function Js(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function gl(t,n){throw n.$$typeof===v?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Kp(t){var n=t._init;return n(t._payload)}function Qp(t){function n(W,H){if(t){var Q=W.deletions;Q===null?(W.deletions=[H],W.flags|=16):Q.push(H)}}function a(W,H){if(!t)return null;for(;H!==null;)n(W,H),H=H.sibling;return null}function s(W){for(var H=new Map;W!==null;)W.key!==null?H.set(W.key,W):H.set(W.index,W),W=W.sibling;return H}function c(W,H){return W=Li(W,H),W.index=0,W.sibling=null,W}function f(W,H,Q){return W.index=Q,t?(Q=W.alternate,Q!==null?(Q=Q.index,Q<H?(W.flags|=67108866,H):Q):(W.flags|=67108866,H)):(W.flags|=1048576,H)}function y(W){return t&&W.alternate===null&&(W.flags|=67108866),W}function b(W,H,Q,dt){return H===null||H.tag!==6?(H=Jc(Q,W.mode,dt),H.return=W,H):(H=c(H,Q),H.return=W,H)}function L(W,H,Q,dt){var Ht=Q.type;return Ht===A?ut(W,H,Q.props.children,dt,Q.key):H!==null&&(H.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===Z&&Kp(Ht)===H.type)?(H=c(H,Q.props),Js(H,Q),H.return=W,H):(H=Jo(Q.type,Q.key,Q.props,null,W.mode,dt),Js(H,Q),H.return=W,H)}function $(W,H,Q,dt){return H===null||H.tag!==4||H.stateNode.containerInfo!==Q.containerInfo||H.stateNode.implementation!==Q.implementation?(H=$c(Q,W.mode,dt),H.return=W,H):(H=c(H,Q.children||[]),H.return=W,H)}function ut(W,H,Q,dt,Ht){return H===null||H.tag!==7?(H=Za(Q,W.mode,dt,Ht),H.return=W,H):(H=c(H,Q),H.return=W,H)}function gt(W,H,Q){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return H=Jc(""+H,W.mode,Q),H.return=W,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case x:return Q=Jo(H.type,H.key,H.props,null,W.mode,Q),Js(Q,H),Q.return=W,Q;case M:return H=$c(H,W.mode,Q),H.return=W,H;case Z:var dt=H._init;return H=dt(H._payload),gt(W,H,Q)}if(ht(H)||ct(H))return H=Za(H,W.mode,Q,null),H.return=W,H;if(typeof H.then=="function")return gt(W,ml(H),Q);if(H.$$typeof===O)return gt(W,nl(W,H),Q);gl(W,H)}return null}function nt(W,H,Q,dt){var Ht=H!==null?H.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Ht!==null?null:b(W,H,""+Q,dt);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case x:return Q.key===Ht?L(W,H,Q,dt):null;case M:return Q.key===Ht?$(W,H,Q,dt):null;case Z:return Ht=Q._init,Q=Ht(Q._payload),nt(W,H,Q,dt)}if(ht(Q)||ct(Q))return Ht!==null?null:ut(W,H,Q,dt,null);if(typeof Q.then=="function")return nt(W,H,ml(Q),dt);if(Q.$$typeof===O)return nt(W,H,nl(W,Q),dt);gl(W,Q)}return null}function it(W,H,Q,dt,Ht){if(typeof dt=="string"&&dt!==""||typeof dt=="number"||typeof dt=="bigint")return W=W.get(Q)||null,b(H,W,""+dt,Ht);if(typeof dt=="object"&&dt!==null){switch(dt.$$typeof){case x:return W=W.get(dt.key===null?Q:dt.key)||null,L(H,W,dt,Ht);case M:return W=W.get(dt.key===null?Q:dt.key)||null,$(H,W,dt,Ht);case Z:var de=dt._init;return dt=de(dt._payload),it(W,H,Q,dt,Ht)}if(ht(dt)||ct(dt))return W=W.get(Q)||null,ut(H,W,dt,Ht,null);if(typeof dt.then=="function")return it(W,H,Q,ml(dt),Ht);if(dt.$$typeof===O)return it(W,H,Q,nl(H,dt),Ht);gl(H,dt)}return null}function ee(W,H,Q,dt){for(var Ht=null,de=null,Wt=H,$t=H=0,gn=null;Wt!==null&&$t<Q.length;$t++){Wt.index>$t?(gn=Wt,Wt=null):gn=Wt.sibling;var Ee=nt(W,Wt,Q[$t],dt);if(Ee===null){Wt===null&&(Wt=gn);break}t&&Wt&&Ee.alternate===null&&n(W,Wt),H=f(Ee,H,$t),de===null?Ht=Ee:de.sibling=Ee,de=Ee,Wt=gn}if($t===Q.length)return a(W,Wt),Ae&&Qa(W,$t),Ht;if(Wt===null){for(;$t<Q.length;$t++)Wt=gt(W,Q[$t],dt),Wt!==null&&(H=f(Wt,H,$t),de===null?Ht=Wt:de.sibling=Wt,de=Wt);return Ae&&Qa(W,$t),Ht}for(Wt=s(Wt);$t<Q.length;$t++)gn=it(Wt,W,$t,Q[$t],dt),gn!==null&&(t&&gn.alternate!==null&&Wt.delete(gn.key===null?$t:gn.key),H=f(gn,H,$t),de===null?Ht=gn:de.sibling=gn,de=gn);return t&&Wt.forEach(function(Ua){return n(W,Ua)}),Ae&&Qa(W,$t),Ht}function Jt(W,H,Q,dt){if(Q==null)throw Error(r(151));for(var Ht=null,de=null,Wt=H,$t=H=0,gn=null,Ee=Q.next();Wt!==null&&!Ee.done;$t++,Ee=Q.next()){Wt.index>$t?(gn=Wt,Wt=null):gn=Wt.sibling;var Ua=nt(W,Wt,Ee.value,dt);if(Ua===null){Wt===null&&(Wt=gn);break}t&&Wt&&Ua.alternate===null&&n(W,Wt),H=f(Ua,H,$t),de===null?Ht=Ua:de.sibling=Ua,de=Ua,Wt=gn}if(Ee.done)return a(W,Wt),Ae&&Qa(W,$t),Ht;if(Wt===null){for(;!Ee.done;$t++,Ee=Q.next())Ee=gt(W,Ee.value,dt),Ee!==null&&(H=f(Ee,H,$t),de===null?Ht=Ee:de.sibling=Ee,de=Ee);return Ae&&Qa(W,$t),Ht}for(Wt=s(Wt);!Ee.done;$t++,Ee=Q.next())Ee=it(Wt,W,$t,Ee.value,dt),Ee!==null&&(t&&Ee.alternate!==null&&Wt.delete(Ee.key===null?$t:Ee.key),H=f(Ee,H,$t),de===null?Ht=Ee:de.sibling=Ee,de=Ee);return t&&Wt.forEach(function(Rx){return n(W,Rx)}),Ae&&Qa(W,$t),Ht}function ze(W,H,Q,dt){if(typeof Q=="object"&&Q!==null&&Q.type===A&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case x:t:{for(var Ht=Q.key;H!==null;){if(H.key===Ht){if(Ht=Q.type,Ht===A){if(H.tag===7){a(W,H.sibling),dt=c(H,Q.props.children),dt.return=W,W=dt;break t}}else if(H.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===Z&&Kp(Ht)===H.type){a(W,H.sibling),dt=c(H,Q.props),Js(dt,Q),dt.return=W,W=dt;break t}a(W,H);break}else n(W,H);H=H.sibling}Q.type===A?(dt=Za(Q.props.children,W.mode,dt,Q.key),dt.return=W,W=dt):(dt=Jo(Q.type,Q.key,Q.props,null,W.mode,dt),Js(dt,Q),dt.return=W,W=dt)}return y(W);case M:t:{for(Ht=Q.key;H!==null;){if(H.key===Ht)if(H.tag===4&&H.stateNode.containerInfo===Q.containerInfo&&H.stateNode.implementation===Q.implementation){a(W,H.sibling),dt=c(H,Q.children||[]),dt.return=W,W=dt;break t}else{a(W,H);break}else n(W,H);H=H.sibling}dt=$c(Q,W.mode,dt),dt.return=W,W=dt}return y(W);case Z:return Ht=Q._init,Q=Ht(Q._payload),ze(W,H,Q,dt)}if(ht(Q))return ee(W,H,Q,dt);if(ct(Q)){if(Ht=ct(Q),typeof Ht!="function")throw Error(r(150));return Q=Ht.call(Q),Jt(W,H,Q,dt)}if(typeof Q.then=="function")return ze(W,H,ml(Q),dt);if(Q.$$typeof===O)return ze(W,H,nl(W,Q),dt);gl(W,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,H!==null&&H.tag===6?(a(W,H.sibling),dt=c(H,Q),dt.return=W,W=dt):(a(W,H),dt=Jc(Q,W.mode,dt),dt.return=W,W=dt),y(W)):a(W,H)}return function(W,H,Q,dt){try{Qs=0;var Ht=ze(W,H,Q,dt);return Hr=null,Ht}catch(Wt){if(Wt===Vs||Wt===al)throw Wt;var de=Vn(29,Wt,null,W.mode);return de.lanes=dt,de.return=W,de}finally{}}}var Gr=Qp(!0),Jp=Qp(!1),ti=tt(null),yi=null;function ga(t){var n=t.alternate;St(ln,ln.current&1),St(ti,t),yi===null&&(n===null||zr.current!==null||n.memoizedState!==null)&&(yi=t)}function $p(t){if(t.tag===22){if(St(ln,ln.current),St(ti,t),yi===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(yi=t)}}else _a()}function _a(){St(ln,ln.current),St(ti,ti.current)}function Fi(t){xt(ti),yi===t&&(yi=null),xt(ln)}var ln=tt(0);function _l(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Mf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Nu(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Lu={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=jn(),c=ha(s);c.payload=n,a!=null&&(c.callback=a),n=pa(t,c,s),n!==null&&(qn(n,t,s),Xs(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=jn(),c=ha(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=pa(t,c,s),n!==null&&(qn(n,t,s),Xs(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=jn(),s=ha(a);s.tag=2,n!=null&&(s.callback=n),n=pa(t,s,a),n!==null&&(qn(n,t,a),Xs(n,t,a))}};function tm(t,n,a,s,c,f,y){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,y):n.prototype&&n.prototype.isPureReactComponent?!Os(a,s)||!Os(c,f):!0}function em(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&Lu.enqueueReplaceState(n,n.state,null)}function ar(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}var vl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function nm(t){vl(t)}function im(t){console.error(t)}function am(t){vl(t)}function xl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function rm(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Ou(t,n,a){return a=ha(a),a.tag=3,a.payload={element:null},a.callback=function(){xl(t,n)},a}function sm(t){return t=ha(t),t.tag=3,t}function om(t,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;t.payload=function(){return c(f)},t.callback=function(){rm(n,a,s)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(t.callback=function(){rm(n,a,s),typeof c!="function"&&(Ea===null?Ea=new Set([this]):Ea.add(this));var b=s.stack;this.componentDidCatch(s.value,{componentStack:b!==null?b:""})})}function Rv(t,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Fs(n,a,c,!0),a=ti.current,a!==null){switch(a.tag){case 13:return yi===null?rf():a.alternate===null&&Ye===0&&(Ye=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===cu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),of(t,s,c)),!1;case 22:return a.flags|=65536,s===cu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),of(t,s,c)),!1}throw Error(r(435,a.tag))}return of(t,s,c),rf(),!1}if(Ae)return n=ti.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==nu&&(t=Error(r(422),{cause:s}),Is(Kn(t,a)))):(s!==nu&&(n=Error(r(423),{cause:s}),Is(Kn(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,s=Kn(s,a),c=Ou(t.stateNode,s,c),du(t,c),Ye!==4&&(Ye=2)),!1;var f=Error(r(520),{cause:s});if(f=Kn(f,a),ro===null?ro=[f]:ro.push(f),Ye!==4&&(Ye=2),n===null)return!0;s=Kn(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Ou(a.stateNode,s,t),du(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ea===null||!Ea.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=sm(c),om(c,t,a,s),du(a,c),!1}a=a.return}while(a!==null);return!1}var lm=Error(r(461)),pn=!1;function Sn(t,n,a,s){n.child=t===null?Jp(n,null,a,s):Gr(n,t.child,a,s)}function cm(t,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var y={};for(var b in s)b!=="ref"&&(y[b]=s[b])}else y=s;return er(n),s=_u(t,n,a,y,f,c),b=vu(),t!==null&&!pn?(xu(t,n,c),Hi(t,n,c)):(Ae&&b&&tu(n),n.flags|=1,Sn(t,n,s,c),n.child)}function um(t,n,a,s,c){if(t===null){var f=a.type;return typeof f=="function"&&!Qc(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,fm(t,n,f,s,c)):(t=Jo(a.type,null,s,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Vu(t,c)){var y=f.memoizedProps;if(a=a.compare,a=a!==null?a:Os,a(y,s)&&t.ref===n.ref)return Hi(t,n,c)}return n.flags|=1,t=Li(f,s),t.ref=n.ref,t.return=n,n.child=t}function fm(t,n,a,s,c){if(t!==null){var f=t.memoizedProps;if(Os(f,s)&&t.ref===n.ref)if(pn=!1,n.pendingProps=s=f,Vu(t,c))(t.flags&131072)!==0&&(pn=!0);else return n.lanes=t.lanes,Hi(t,n,c)}return Pu(t,n,a,s,c)}function dm(t,n,a){var s=n.pendingProps,c=s.children,f=t!==null?t.memoizedState:null;if(s.mode==="hidden"){if((n.flags&128)!==0){if(s=f!==null?f.baseLanes|a:a,t!==null){for(c=n.child=t.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~s}else n.childLanes=0,n.child=null;return hm(t,n,s,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&il(n,f!==null?f.cachePool:null),f!==null?fp(n,f):pu(),$p(n);else return n.lanes=n.childLanes=536870912,hm(t,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(il(n,f.cachePool),fp(n,f),_a(),n.memoizedState=null):(t!==null&&il(n,null),pu(),_a());return Sn(t,n,c,a),n.child}function hm(t,n,a,s){var c=lu();return c=c===null?null:{parent:on._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},t!==null&&il(n,null),pu(),$p(n),t!==null&&Fs(t,n,s,!0),null}function yl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Pu(t,n,a,s,c){return er(n),a=_u(t,n,a,s,void 0,c),s=vu(),t!==null&&!pn?(xu(t,n,c),Hi(t,n,c)):(Ae&&s&&tu(n),n.flags|=1,Sn(t,n,a,c),n.child)}function pm(t,n,a,s,c,f){return er(n),n.updateQueue=null,a=hp(n,s,a,c),dp(t),s=vu(),t!==null&&!pn?(xu(t,n,f),Hi(t,n,f)):(Ae&&s&&tu(n),n.flags|=1,Sn(t,n,a,f),n.child)}function mm(t,n,a,s,c){if(er(n),n.stateNode===null){var f=Ur,y=a.contextType;typeof y=="object"&&y!==null&&(f=Tn(y)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Lu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},uu(n),y=a.contextType,f.context=typeof y=="object"&&y!==null?Tn(y):Ur,f.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(Nu(n,a,y,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(y=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),y!==f.state&&Lu.enqueueReplaceState(f,f.state,null),js(n,s,f,c),Ws(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var b=n.memoizedProps,L=ar(a,b);f.props=L;var $=f.context,ut=a.contextType;y=Ur,typeof ut=="object"&&ut!==null&&(y=Tn(ut));var gt=a.getDerivedStateFromProps;ut=typeof gt=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,ut||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||$!==y)&&em(n,f,s,y),da=!1;var nt=n.memoizedState;f.state=nt,js(n,s,f,c),Ws(),$=n.memoizedState,b||nt!==$||da?(typeof gt=="function"&&(Nu(n,a,gt,s),$=n.memoizedState),(L=da||tm(n,a,L,s,nt,$,y))?(ut||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=$),f.props=s,f.state=$,f.context=y,s=L):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,fu(t,n),y=n.memoizedProps,ut=ar(a,y),f.props=ut,gt=n.pendingProps,nt=f.context,$=a.contextType,L=Ur,typeof $=="object"&&$!==null&&(L=Tn($)),b=a.getDerivedStateFromProps,($=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(y!==gt||nt!==L)&&em(n,f,s,L),da=!1,nt=n.memoizedState,f.state=nt,js(n,s,f,c),Ws();var it=n.memoizedState;y!==gt||nt!==it||da||t!==null&&t.dependencies!==null&&el(t.dependencies)?(typeof b=="function"&&(Nu(n,a,b,s),it=n.memoizedState),(ut=da||tm(n,a,ut,s,nt,it,L)||t!==null&&t.dependencies!==null&&el(t.dependencies))?($||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,it,L),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,it,L)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||y===t.memoizedProps&&nt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&nt===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=it),f.props=s,f.state=it,f.context=L,s=ut):(typeof f.componentDidUpdate!="function"||y===t.memoizedProps&&nt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&nt===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,yl(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=Gr(n,t.child,null,c),n.child=Gr(n,null,a,c)):Sn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=Hi(t,n,c),t}function gm(t,n,a,s){return Bs(),n.flags|=256,Sn(t,n,a,s),n.child}var zu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Bu(t){return{baseLanes:t,cachePool:ip()}}function Iu(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ei),t}function _m(t,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,y;if((y=f)||(y=t!==null&&t.memoizedState===null?!1:(ln.current&2)!==0),y&&(c=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,t===null){if(Ae){if(c?ga(n):_a(),Ae){var b=qe,L;if(L=b){t:{for(L=b,b=xi;L.nodeType!==8;){if(!b){b=null;break t}if(L=ui(L.nextSibling),L===null){b=null;break t}}b=L}b!==null?(n.memoizedState={dehydrated:b,treeContext:Ka!==null?{id:Oi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},L=Vn(18,null,null,0),L.stateNode=b,L.return=n,n.child=L,wn=n,qe=null,L=!0):L=!1}L||$a(n)}if(b=n.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return Mf(b)?n.lanes=32:n.lanes=536870912,null;Fi(n)}return b=s.children,s=s.fallback,c?(_a(),c=n.mode,b=Sl({mode:"hidden",children:b},c),s=Za(s,c,a,null),b.return=n,s.return=n,b.sibling=s,n.child=b,c=n.child,c.memoizedState=Bu(a),c.childLanes=Iu(t,y,a),n.memoizedState=zu,s):(ga(n),Fu(n,b))}if(L=t.memoizedState,L!==null&&(b=L.dehydrated,b!==null)){if(f)n.flags&256?(ga(n),n.flags&=-257,n=Hu(t,n,a)):n.memoizedState!==null?(_a(),n.child=t.child,n.flags|=128,n=null):(_a(),c=s.fallback,b=n.mode,s=Sl({mode:"visible",children:s.children},b),c=Za(c,b,a,null),c.flags|=2,s.return=n,c.return=n,s.sibling=c,n.child=s,Gr(n,t.child,null,a),s=n.child,s.memoizedState=Bu(a),s.childLanes=Iu(t,y,a),n.memoizedState=zu,n=c);else if(ga(n),Mf(b)){if(y=b.nextSibling&&b.nextSibling.dataset,y)var $=y.dgst;y=$,s=Error(r(419)),s.stack="",s.digest=y,Is({value:s,source:null,stack:null}),n=Hu(t,n,a)}else if(pn||Fs(t,n,a,!1),y=(a&t.childLanes)!==0,pn||y){if(y=ke,y!==null&&(s=a&-a,s=(s&42)!==0?1:ne(s),s=(s&(y.suspendedLanes|a))!==0?0:s,s!==0&&s!==L.retryLane))throw L.retryLane=s,Dr(t,s),qn(y,t,s),lm;b.data==="$?"||rf(),n=Hu(t,n,a)}else b.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=L.treeContext,qe=ui(b.nextSibling),wn=n,Ae=!0,Ja=null,xi=!1,t!==null&&(Jn[$n++]=Oi,Jn[$n++]=Pi,Jn[$n++]=Ka,Oi=t.id,Pi=t.overflow,Ka=n),n=Fu(n,s.children),n.flags|=4096);return n}return c?(_a(),c=s.fallback,b=n.mode,L=t.child,$=L.sibling,s=Li(L,{mode:"hidden",children:s.children}),s.subtreeFlags=L.subtreeFlags&65011712,$!==null?c=Li($,c):(c=Za(c,b,a,null),c.flags|=2),c.return=n,s.return=n,s.sibling=c,n.child=s,s=c,c=n.child,b=t.child.memoizedState,b===null?b=Bu(a):(L=b.cachePool,L!==null?($=on._currentValue,L=L.parent!==$?{parent:$,pool:$}:L):L=ip(),b={baseLanes:b.baseLanes|a,cachePool:L}),c.memoizedState=b,c.childLanes=Iu(t,y,a),n.memoizedState=zu,s):(ga(n),a=t.child,t=a.sibling,a=Li(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(y=n.deletions,y===null?(n.deletions=[t],n.flags|=16):y.push(t)),n.child=a,n.memoizedState=null,a)}function Fu(t,n){return n=Sl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Sl(t,n){return t=Vn(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Hu(t,n,a){return Gr(n,t.child,null,a),t=Fu(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function vm(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),au(t.return,n,a)}function Gu(t,n,a,s,c){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=s,f.tail=a,f.tailMode=c)}function xm(t,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;if(Sn(t,n,s.children,a),s=ln.current,(s&2)!==0)s=s&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&vm(t,a,n);else if(t.tag===19)vm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}s&=1}switch(St(ln,s),c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&_l(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Gu(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&_l(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}Gu(n,!0,a,null,f);break;case"together":Gu(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Hi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ma|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Fs(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Li(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Li(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Vu(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&el(t)))}function Cv(t,n,a){switch(n.tag){case 3:wt(n,n.stateNode.containerInfo),fa(n,on,t.memoizedState.cache),Bs();break;case 27:case 5:Qt(n);break;case 4:wt(n,n.stateNode.containerInfo);break;case 10:fa(n,n.type,n.memoizedProps.value);break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(ga(n),n.flags|=128,null):(a&n.child.childLanes)!==0?_m(t,n,a):(ga(n),t=Hi(t,n,a),t!==null?t.sibling:null);ga(n);break;case 19:var c=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Fs(t,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return xm(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),St(ln,ln.current),s)break;return null;case 22:case 23:return n.lanes=0,dm(t,n,a);case 24:fa(n,on,t.memoizedState.cache)}return Hi(t,n,a)}function ym(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)pn=!0;else{if(!Vu(t,a)&&(n.flags&128)===0)return pn=!1,Cv(t,n,a);pn=(t.flags&131072)!==0}else pn=!1,Ae&&(n.flags&1048576)!==0&&Kh(n,tl,n.index);switch(n.lanes=0,n.tag){case 16:t:{t=n.pendingProps;var s=n.elementType,c=s._init;if(s=c(s._payload),n.type=s,typeof s=="function")Qc(s)?(t=ar(s,t),n.tag=1,n=mm(null,n,s,t,a)):(n.tag=0,n=Pu(null,n,s,t,a));else{if(s!=null){if(c=s.$$typeof,c===U){n.tag=11,n=cm(null,n,s,t,a);break t}else if(c===F){n.tag=14,n=um(null,n,s,t,a);break t}}throw n=vt(s)||s,Error(r(306,n,""))}}return n;case 0:return Pu(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=ar(s,n.pendingProps),mm(t,n,s,c,a);case 3:t:{if(wt(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,fu(t,n),js(n,s,null,a);var y=n.memoizedState;if(s=y.cache,fa(n,on,s),s!==f.cache&&ru(n,[on],a,!0),Ws(),s=y.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=gm(t,n,s,a);break t}else if(s!==c){c=Kn(Error(r(424)),n),Is(c),n=gm(t,n,s,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(qe=ui(t.firstChild),wn=n,Ae=!0,Ja=null,xi=!0,a=Jp(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Bs(),s===c){n=Hi(t,n,a);break t}Sn(t,n,s,a)}n=n.child}return n;case 26:return yl(t,n),t===null?(a=b0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ae||(a=n.type,t=n.pendingProps,s=Pl(Mt.current).createElement(a),s[rn]=n,s[xn]=t,En(s,a,t),tn(s),n.stateNode=s):n.memoizedState=b0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Qt(n),t===null&&Ae&&(s=n.stateNode=S0(n.type,n.pendingProps,Mt.current),wn=n,xi=!0,c=qe,Aa(n.type)?(Ef=c,qe=ui(s.firstChild)):qe=c),Sn(t,n,n.pendingProps.children,a),yl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Ae&&((c=s=qe)&&(s=nx(s,n.type,n.pendingProps,xi),s!==null?(n.stateNode=s,wn=n,qe=ui(s.firstChild),xi=!1,c=!0):c=!1),c||$a(n)),Qt(n),c=n.type,f=n.pendingProps,y=t!==null?t.memoizedProps:null,s=f.children,xf(c,f)?s=null:y!==null&&xf(c,y)&&(n.flags|=32),n.memoizedState!==null&&(c=_u(t,n,yv,null,null,a),mo._currentValue=c),yl(t,n),Sn(t,n,s,a),n.child;case 6:return t===null&&Ae&&((t=a=qe)&&(a=ix(a,n.pendingProps,xi),a!==null?(n.stateNode=a,wn=n,qe=null,t=!0):t=!1),t||$a(n)),null;case 13:return _m(t,n,a);case 4:return wt(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=Gr(n,null,s,a):Sn(t,n,s,a),n.child;case 11:return cm(t,n,n.type,n.pendingProps,a);case 7:return Sn(t,n,n.pendingProps,a),n.child;case 8:return Sn(t,n,n.pendingProps.children,a),n.child;case 12:return Sn(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,fa(n,n.type,s.value),Sn(t,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,er(n),c=Tn(c),s=s(c),n.flags|=1,Sn(t,n,s,a),n.child;case 14:return um(t,n,n.type,n.pendingProps,a);case 15:return fm(t,n,n.type,n.pendingProps,a);case 19:return xm(t,n,a);case 31:return s=n.pendingProps,a=n.mode,s={mode:s.mode,children:s.children},t===null?(a=Sl(s,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Li(t.child,s),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return dm(t,n,a);case 24:return er(n),s=Tn(on),t===null?(c=lu(),c===null&&(c=ke,f=su(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},uu(n),fa(n,on,c)):((t.lanes&a)!==0&&(fu(t,n),js(n,null,null,a),Ws()),c=t.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),fa(n,on,s)):(s=f.cache,fa(n,on,s),s!==c.cache&&ru(n,[on],a,!0))),Sn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Gi(t){t.flags|=4}function Sm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!w0(n)){if(n=ti.current,n!==null&&((ye&4194048)===ye?yi!==null:(ye&62914560)!==ye&&(ye&536870912)===0||n!==yi))throw ks=cu,ap;t.flags|=8192}}function Ml(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Nt():536870912,t.lanes|=n,Wr|=n)}function $s(t,n){if(!Ae)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function je(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function wv(t,n,a){var s=n.pendingProps;switch(eu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(n),null;case 1:return je(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Bi(on),oe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(zs(n)?Gi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,$h())),je(n),null;case 26:return a=n.memoizedState,t===null?(Gi(n),a!==null?(je(n),Sm(n,a)):(je(n),n.flags&=-16777217)):a?a!==t.memoizedState?(Gi(n),je(n),Sm(n,a)):(je(n),n.flags&=-16777217):(t.memoizedProps!==s&&Gi(n),je(n),n.flags&=-16777217),null;case 27:Ne(n),a=Mt.current;var c=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Gi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return je(n),null}t=J.current,zs(n)?Qh(n):(t=S0(c,s,a),n.stateNode=t,Gi(n))}return je(n),null;case 5:if(Ne(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Gi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return je(n),null}if(t=J.current,zs(n))Qh(n);else{switch(c=Pl(Mt.current),t){case 1:t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=c.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof s.is=="string"?c.createElement("select",{is:s.is}):c.createElement("select"),s.multiple?t.multiple=!0:s.size&&(t.size=s.size);break;default:t=typeof s.is=="string"?c.createElement(a,{is:s.is}):c.createElement(a)}}t[rn]=n,t[xn]=s;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)t.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=t;t:switch(En(t,a,s),a){case"button":case"input":case"select":case"textarea":t=!!s.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&Gi(n)}}return je(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Gi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=Mt.current,zs(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,c=wn,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}t[rn]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||p0(t.nodeValue,a)),t||$a(n)}else t=Pl(t).createTextNode(s),t[rn]=n,n.stateNode=t}return je(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=zs(n),s!==null&&s.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[rn]=n}else Bs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;je(n),c=!1}else c=$h(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Fi(n),n):(Fi(n),null)}if(Fi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=s!==null,t=t!==null&&t.memoizedState!==null,a){s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool);var f=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),Ml(n,n.updateQueue),je(n),null;case 4:return oe(),t===null&&pf(n.stateNode.containerInfo),je(n),null;case 10:return Bi(n.type),je(n),null;case 19:if(xt(ln),c=n.memoizedState,c===null)return je(n),null;if(s=(n.flags&128)!==0,f=c.rendering,f===null)if(s)$s(c,!1);else{if(Ye!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=_l(t),f!==null){for(n.flags|=128,$s(c,!1),t=f.updateQueue,n.updateQueue=t,Ml(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Zh(a,t),a=a.sibling;return St(ln,ln.current&1|2),n.child}t=t.sibling}c.tail!==null&&he()>Tl&&(n.flags|=128,s=!0,$s(c,!1),n.lanes=4194304)}else{if(!s)if(t=_l(f),t!==null){if(n.flags|=128,s=!0,t=t.updateQueue,n.updateQueue=t,Ml(n,t),$s(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!Ae)return je(n),null}else 2*he()-c.renderingStartTime>Tl&&a!==536870912&&(n.flags|=128,s=!0,$s(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(t=c.last,t!==null?t.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=he(),n.sibling=null,t=ln.current,St(ln,s?t&1|2:t&1),n):(je(n),null);case 22:case 23:return Fi(n),mu(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(je(n),n.subtreeFlags&6&&(n.flags|=8192)):je(n),a=n.updateQueue,a!==null&&Ml(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&xt(nr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Bi(on),je(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Dv(t,n){switch(eu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Bi(on),oe(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Ne(n),null;case 13:if(Fi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Bs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return xt(ln),null;case 4:return oe(),null;case 10:return Bi(n.type),null;case 22:case 23:return Fi(n),mu(),t!==null&&xt(nr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Bi(on),null;case 25:return null;default:return null}}function Mm(t,n){switch(eu(n),n.tag){case 3:Bi(on),oe();break;case 26:case 27:case 5:Ne(n);break;case 4:oe();break;case 13:Fi(n);break;case 19:xt(ln);break;case 10:Bi(n.type);break;case 22:case 23:Fi(n),mu(),t!==null&&xt(nr);break;case 24:Bi(on)}}function to(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&t)===t){s=void 0;var f=a.create,y=a.inst;s=f(),y.destroy=s}a=a.next}while(a!==c)}}catch(b){Ge(n,n.return,b)}}function va(t,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&t)===t){var y=s.inst,b=y.destroy;if(b!==void 0){y.destroy=void 0,c=n;var L=a,$=b;try{$()}catch(ut){Ge(c,L,ut)}}}s=s.next}while(s!==f)}}catch(ut){Ge(n,n.return,ut)}}function Em(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{up(n,a)}catch(s){Ge(t,t.return,s)}}}function bm(t,n,a){a.props=ar(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Ge(t,n,s)}}function eo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(c){Ge(t,n,c)}}function Si(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){Ge(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Ge(t,n,c)}else a.current=null}function Tm(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){Ge(t,t.return,c)}}function ku(t,n,a){try{var s=t.stateNode;Qv(s,t.type,a,n),s[xn]=n}catch(c){Ge(t,t.return,c)}}function Am(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Aa(t.type)||t.tag===4}function Xu(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Am(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Aa(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Wu(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ol));else if(s!==4&&(s===27&&Aa(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Wu(t,n,a),t=t.sibling;t!==null;)Wu(t,n,a),t=t.sibling}function El(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&Aa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(El(t,n,a),t=t.sibling;t!==null;)El(t,n,a),t=t.sibling}function Rm(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);En(n,s,a),n[rn]=t,n[xn]=a}catch(f){Ge(t,t.return,f)}}var Vi=!1,Qe=!1,ju=!1,Cm=typeof WeakSet=="function"?WeakSet:Set,mn=null;function Uv(t,n){if(t=t.containerInfo,_f=Gl,t=Fh(t),Xc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var y=0,b=-1,L=-1,$=0,ut=0,gt=t,nt=null;e:for(;;){for(var it;gt!==a||c!==0&&gt.nodeType!==3||(b=y+c),gt!==f||s!==0&&gt.nodeType!==3||(L=y+s),gt.nodeType===3&&(y+=gt.nodeValue.length),(it=gt.firstChild)!==null;)nt=gt,gt=it;for(;;){if(gt===t)break e;if(nt===a&&++$===c&&(b=y),nt===f&&++ut===s&&(L=y),(it=gt.nextSibling)!==null)break;gt=nt,nt=gt.parentNode}gt=it}a=b===-1||L===-1?null:{start:b,end:L}}else a=null}a=a||{start:0,end:0}}else a=null;for(vf={focusedElem:t,selectionRange:a},Gl=!1,mn=n;mn!==null;)if(n=mn,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,mn=t;else for(;mn!==null;){switch(n=mn,f=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var ee=ar(a.type,c,a.elementType===a.type);t=s.getSnapshotBeforeUpdate(ee,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(Jt){Ge(a,a.return,Jt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Sf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Sf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,mn=t;break}mn=n.return}}function wm(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:xa(t,a),s&4&&to(5,a);break;case 1:if(xa(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(y){Ge(a,a.return,y)}else{var c=ar(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(y){Ge(a,a.return,y)}}s&64&&Em(a),s&512&&eo(a,a.return);break;case 3:if(xa(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{up(t,n)}catch(y){Ge(a,a.return,y)}}break;case 27:n===null&&s&4&&Rm(a);case 26:case 5:xa(t,a),n===null&&s&4&&Tm(a),s&512&&eo(a,a.return);break;case 12:xa(t,a);break;case 13:xa(t,a),s&4&&Nm(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Hv.bind(null,a),ax(t,a))));break;case 22:if(s=a.memoizedState!==null||Vi,!s){n=n!==null&&n.memoizedState!==null||Qe,c=Vi;var f=Qe;Vi=s,(Qe=n)&&!f?ya(t,a,(a.subtreeFlags&8772)!==0):xa(t,a),Vi=c,Qe=f}break;case 30:break;default:xa(t,a)}}function Dm(t){var n=t.alternate;n!==null&&(t.alternate=null,Dm(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&oa(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var We=null,On=!1;function ki(t,n,a){for(a=a.child;a!==null;)Um(t,n,a),a=a.sibling}function Um(t,n,a){if(pt&&typeof pt.onCommitFiberUnmount=="function")try{pt.onCommitFiberUnmount(ft,a)}catch{}switch(a.tag){case 26:Qe||Si(a,n),ki(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Qe||Si(a,n);var s=We,c=On;Aa(a.type)&&(We=a.stateNode,On=!1),ki(t,n,a),uo(a.stateNode),We=s,On=c;break;case 5:Qe||Si(a,n);case 6:if(s=We,c=On,We=null,ki(t,n,a),We=s,On=c,We!==null)if(On)try{(We.nodeType===9?We.body:We.nodeName==="HTML"?We.ownerDocument.body:We).removeChild(a.stateNode)}catch(f){Ge(a,n,f)}else try{We.removeChild(a.stateNode)}catch(f){Ge(a,n,f)}break;case 18:We!==null&&(On?(t=We,x0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),xo(t)):x0(We,a.stateNode));break;case 4:s=We,c=On,We=a.stateNode.containerInfo,On=!0,ki(t,n,a),We=s,On=c;break;case 0:case 11:case 14:case 15:Qe||va(2,a,n),Qe||va(4,a,n),ki(t,n,a);break;case 1:Qe||(Si(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&bm(a,n,s)),ki(t,n,a);break;case 21:ki(t,n,a);break;case 22:Qe=(s=Qe)||a.memoizedState!==null,ki(t,n,a),Qe=s;break;default:ki(t,n,a)}}function Nm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{xo(t)}catch(a){Ge(n,n.return,a)}}function Nv(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Cm),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Cm),n;default:throw Error(r(435,t.tag))}}function qu(t,n){var a=Nv(t);n.forEach(function(s){var c=Gv.bind(null,t,s);a.has(s)||(a.add(s),s.then(c,c))})}function kn(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=t,y=n,b=y;t:for(;b!==null;){switch(b.tag){case 27:if(Aa(b.type)){We=b.stateNode,On=!1;break t}break;case 5:We=b.stateNode,On=!1;break t;case 3:case 4:We=b.stateNode.containerInfo,On=!0;break t}b=b.return}if(We===null)throw Error(r(160));Um(f,y,c),We=null,On=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Lm(n,t),n=n.sibling}var ci=null;function Lm(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:kn(n,t),Xn(t),s&4&&(va(3,t,t.return),to(3,t),va(5,t,t.return));break;case 1:kn(n,t),Xn(t),s&512&&(Qe||a===null||Si(a,a.return)),s&64&&Vi&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=ci;if(kn(n,t),Xn(t),s&512&&(Qe||a===null||Si(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[sa]||f[rn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),En(f,s,a),f[rn]=t,tn(f),s=f;break t;case"link":var y=R0("link","href",c).get(s+(a.href||""));if(y){for(var b=0;b<y.length;b++)if(f=y[b],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(b,1);break e}}f=c.createElement(s),En(f,s,a),c.head.appendChild(f);break;case"meta":if(y=R0("meta","content",c).get(s+(a.content||""))){for(b=0;b<y.length;b++)if(f=y[b],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(b,1);break e}}f=c.createElement(s),En(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[rn]=t,tn(f),s=f}t.stateNode=s}else C0(c,t.type,t.stateNode);else t.stateNode=A0(c,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?C0(c,t.type,t.stateNode):A0(c,s,t.memoizedProps)):s===null&&t.stateNode!==null&&ku(t,t.memoizedProps,a.memoizedProps)}break;case 27:kn(n,t),Xn(t),s&512&&(Qe||a===null||Si(a,a.return)),a!==null&&s&4&&ku(t,t.memoizedProps,a.memoizedProps);break;case 5:if(kn(n,t),Xn(t),s&512&&(Qe||a===null||Si(a,a.return)),t.flags&32){c=t.stateNode;try{vi(c,"")}catch(it){Ge(t,t.return,it)}}s&4&&t.stateNode!=null&&(c=t.memoizedProps,ku(t,c,a!==null?a.memoizedProps:c)),s&1024&&(ju=!0);break;case 6:if(kn(n,t),Xn(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(it){Ge(t,t.return,it)}}break;case 3:if(Il=null,c=ci,ci=zl(n.containerInfo),kn(n,t),ci=c,Xn(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{xo(n.containerInfo)}catch(it){Ge(t,t.return,it)}ju&&(ju=!1,Om(t));break;case 4:s=ci,ci=zl(t.stateNode.containerInfo),kn(n,t),Xn(t),ci=s;break;case 12:kn(n,t),Xn(t);break;case 13:kn(n,t),Xn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&($u=he()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,qu(t,s)));break;case 22:c=t.memoizedState!==null;var L=a!==null&&a.memoizedState!==null,$=Vi,ut=Qe;if(Vi=$||c,Qe=ut||L,kn(n,t),Qe=ut,Vi=$,Xn(t),s&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||L||Vi||Qe||rr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){L=a=n;try{if(f=L.stateNode,c)y=f.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{b=L.stateNode;var gt=L.memoizedProps.style,nt=gt!=null&&gt.hasOwnProperty("display")?gt.display:null;b.style.display=nt==null||typeof nt=="boolean"?"":(""+nt).trim()}}catch(it){Ge(L,L.return,it)}}}else if(n.tag===6){if(a===null){L=n;try{L.stateNode.nodeValue=c?"":L.memoizedProps}catch(it){Ge(L,L.return,it)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,qu(t,a))));break;case 19:kn(n,t),Xn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,qu(t,s)));break;case 30:break;case 21:break;default:kn(n,t),Xn(t)}}function Xn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(Am(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=Xu(t);El(t,f,c);break;case 5:var y=a.stateNode;a.flags&32&&(vi(y,""),a.flags&=-33);var b=Xu(t);El(t,b,y);break;case 3:case 4:var L=a.stateNode.containerInfo,$=Xu(t);Wu(t,$,L);break;default:throw Error(r(161))}}catch(ut){Ge(t,t.return,ut)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Om(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Om(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function xa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)wm(t,n.alternate,n),n=n.sibling}function rr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:va(4,n,n.return),rr(n);break;case 1:Si(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&bm(n,n.return,a),rr(n);break;case 27:uo(n.stateNode);case 26:case 5:Si(n,n.return),rr(n);break;case 22:n.memoizedState===null&&rr(n);break;case 30:rr(n);break;default:rr(n)}t=t.sibling}}function ya(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=t,f=n,y=f.flags;switch(f.tag){case 0:case 11:case 15:ya(c,f,a),to(4,f);break;case 1:if(ya(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch($){Ge(s,s.return,$)}if(s=f,c=s.updateQueue,c!==null){var b=s.stateNode;try{var L=c.shared.hiddenCallbacks;if(L!==null)for(c.shared.hiddenCallbacks=null,c=0;c<L.length;c++)cp(L[c],b)}catch($){Ge(s,s.return,$)}}a&&y&64&&Em(f),eo(f,f.return);break;case 27:Rm(f);case 26:case 5:ya(c,f,a),a&&s===null&&y&4&&Tm(f),eo(f,f.return);break;case 12:ya(c,f,a);break;case 13:ya(c,f,a),a&&y&4&&Nm(c,f);break;case 22:f.memoizedState===null&&ya(c,f,a),eo(f,f.return);break;case 30:break;default:ya(c,f,a)}n=n.sibling}}function Yu(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Hs(a))}function Zu(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Hs(t))}function Mi(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Pm(t,n,a,s),n=n.sibling}function Pm(t,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Mi(t,n,a,s),c&2048&&to(9,n);break;case 1:Mi(t,n,a,s);break;case 3:Mi(t,n,a,s),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Hs(t)));break;case 12:if(c&2048){Mi(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,y=f.id,b=f.onPostCommit;typeof b=="function"&&b(y,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(L){Ge(n,n.return,L)}}else Mi(t,n,a,s);break;case 13:Mi(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,y=n.alternate,n.memoizedState!==null?f._visibility&2?Mi(t,n,a,s):no(t,n):f._visibility&2?Mi(t,n,a,s):(f._visibility|=2,Vr(t,n,a,s,(n.subtreeFlags&10256)!==0)),c&2048&&Yu(y,n);break;case 24:Mi(t,n,a,s),c&2048&&Zu(n.alternate,n);break;default:Mi(t,n,a,s)}}function Vr(t,n,a,s,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=t,y=n,b=a,L=s,$=y.flags;switch(y.tag){case 0:case 11:case 15:Vr(f,y,b,L,c),to(8,y);break;case 23:break;case 22:var ut=y.stateNode;y.memoizedState!==null?ut._visibility&2?Vr(f,y,b,L,c):no(f,y):(ut._visibility|=2,Vr(f,y,b,L,c)),c&&$&2048&&Yu(y.alternate,y);break;case 24:Vr(f,y,b,L,c),c&&$&2048&&Zu(y.alternate,y);break;default:Vr(f,y,b,L,c)}n=n.sibling}}function no(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,c=s.flags;switch(s.tag){case 22:no(a,s),c&2048&&Yu(s.alternate,s);break;case 24:no(a,s),c&2048&&Zu(s.alternate,s);break;default:no(a,s)}n=n.sibling}}var io=8192;function kr(t){if(t.subtreeFlags&io)for(t=t.child;t!==null;)zm(t),t=t.sibling}function zm(t){switch(t.tag){case 26:kr(t),t.flags&io&&t.memoizedState!==null&&_x(ci,t.memoizedState,t.memoizedProps);break;case 5:kr(t);break;case 3:case 4:var n=ci;ci=zl(t.stateNode.containerInfo),kr(t),ci=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=io,io=16777216,kr(t),io=n):kr(t));break;default:kr(t)}}function Bm(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function ao(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];mn=s,Fm(s,t)}Bm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Im(t),t=t.sibling}function Im(t){switch(t.tag){case 0:case 11:case 15:ao(t),t.flags&2048&&va(9,t,t.return);break;case 3:ao(t);break;case 12:ao(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,bl(t)):ao(t);break;default:ao(t)}}function bl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];mn=s,Fm(s,t)}Bm(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:va(8,n,n.return),bl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,bl(n));break;default:bl(n)}t=t.sibling}}function Fm(t,n){for(;mn!==null;){var a=mn;switch(a.tag){case 0:case 11:case 15:va(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Hs(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,mn=s;else t:for(a=t;mn!==null;){s=mn;var c=s.sibling,f=s.return;if(Dm(s),s===a){mn=null;break t}if(c!==null){c.return=f,mn=c;break t}mn=f}}}var Lv={getCacheForType:function(t){var n=Tn(on),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},Ov=typeof WeakMap=="function"?WeakMap:Map,De=0,ke=null,pe=null,ye=0,Ue=0,Wn=null,Sa=!1,Xr=!1,Ku=!1,Xi=0,Ye=0,Ma=0,sr=0,Qu=0,ei=0,Wr=0,ro=null,Pn=null,Ju=!1,$u=0,Tl=1/0,Al=null,Ea=null,Mn=0,ba=null,jr=null,qr=0,tf=0,ef=null,Hm=null,so=0,nf=null;function jn(){if((De&2)!==0&&ye!==0)return ye&-ye;if(P.T!==null){var t=Or;return t!==0?t:uf()}return Me()}function Gm(){ei===0&&(ei=(ye&536870912)===0||Ae?V():536870912);var t=ti.current;return t!==null&&(t.flags|=32),ei}function qn(t,n,a){(t===ke&&(Ue===2||Ue===9)||t.cancelPendingCommit!==null)&&(Yr(t,0),Ta(t,ye,ei,!1)),Bt(t,a),((De&2)===0||t!==ke)&&(t===ke&&((De&2)===0&&(sr|=a),Ye===4&&Ta(t,ye,ei,!1)),Ei(t))}function Vm(t,n,a){if((De&6)!==0)throw Error(r(327));var s=!a&&(n&124)===0&&(n&t.expiredLanes)===0||Ct(t,n),c=s?Bv(t,n):sf(t,n,!0),f=s;do{if(c===0){Xr&&!s&&Ta(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Pv(a)){c=sf(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var y=0;else y=t.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;t:{var b=t;c=ro;var L=b.current.memoizedState.isDehydrated;if(L&&(Yr(b,y).flags|=256),y=sf(b,y,!1),y!==2){if(Ku&&!L){b.errorRecoveryDisabledLanes|=f,sr|=f,c=4;break t}f=Pn,Pn=c,f!==null&&(Pn===null?Pn=f:Pn.push.apply(Pn,f))}c=y}if(f=!1,c!==2)continue}}if(c===1){Yr(t,0),Ta(t,n,0,!0);break}t:{switch(s=t,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ta(s,n,ei,!Sa);break t;case 2:Pn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=$u+300-he(),10<c)){if(Ta(s,n,ei,!Sa),qt(s,0,!0)!==0)break t;s.timeoutHandle=_0(km.bind(null,s,a,Pn,Al,Ju,n,ei,sr,Wr,Sa,f,2,-0,0),c);break t}km(s,a,Pn,Al,Ju,n,ei,sr,Wr,Sa,f,0,-0,0)}}break}while(!0);Ei(t)}function km(t,n,a,s,c,f,y,b,L,$,ut,gt,nt,it){if(t.timeoutHandle=-1,gt=n.subtreeFlags,(gt&8192||(gt&16785408)===16785408)&&(po={stylesheets:null,count:0,unsuspend:gx},zm(n),gt=vx(),gt!==null)){t.cancelPendingCommit=gt(Km.bind(null,t,n,f,a,s,c,y,b,L,ut,1,nt,it)),Ta(t,f,y,!$);return}Km(t,n,f,a,s,c,y,b,L)}function Pv(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!Gn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ta(t,n,a,s){n&=~Qu,n&=~sr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var c=n;0<c;){var f=31-Pt(c),y=1<<f;s[f]=-1,c&=~y}a!==0&&_t(t,a,n)}function Rl(){return(De&6)===0?(oo(0),!1):!0}function af(){if(pe!==null){if(Ue===0)var t=pe.return;else t=pe,zi=tr=null,yu(t),Hr=null,Qs=0,t=pe;for(;t!==null;)Mm(t.alternate,t),t=t.return;pe=null}}function Yr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,$v(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),af(),ke=t,pe=a=Li(t.current,null),ye=n,Ue=0,Wn=null,Sa=!1,Xr=Ct(t,n),Ku=!1,Wr=ei=Qu=sr=Ma=Ye=0,Pn=ro=null,Ju=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var c=31-Pt(s),f=1<<c;n|=t[c],s&=~f}return Xi=n,Zo(),a}function Xm(t,n){ue=null,P.H=pl,n===Vs||n===al?(n=op(),Ue=3):n===ap?(n=op(),Ue=4):Ue=n===lm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Wn=n,pe===null&&(Ye=1,xl(t,Kn(n,t.current)))}function Wm(){var t=P.H;return P.H=pl,t===null?pl:t}function jm(){var t=P.A;return P.A=Lv,t}function rf(){Ye=4,Sa||(ye&4194048)!==ye&&ti.current!==null||(Xr=!0),(Ma&134217727)===0&&(sr&134217727)===0||ke===null||Ta(ke,ye,ei,!1)}function sf(t,n,a){var s=De;De|=2;var c=Wm(),f=jm();(ke!==t||ye!==n)&&(Al=null,Yr(t,n)),n=!1;var y=Ye;t:do try{if(Ue!==0&&pe!==null){var b=pe,L=Wn;switch(Ue){case 8:af(),y=6;break t;case 3:case 2:case 9:case 6:ti.current===null&&(n=!0);var $=Ue;if(Ue=0,Wn=null,Zr(t,b,L,$),a&&Xr){y=0;break t}break;default:$=Ue,Ue=0,Wn=null,Zr(t,b,L,$)}}zv(),y=Ye;break}catch(ut){Xm(t,ut)}while(!0);return n&&t.shellSuspendCounter++,zi=tr=null,De=s,P.H=c,P.A=f,pe===null&&(ke=null,ye=0,Zo()),y}function zv(){for(;pe!==null;)qm(pe)}function Bv(t,n){var a=De;De|=2;var s=Wm(),c=jm();ke!==t||ye!==n?(Al=null,Tl=he()+500,Yr(t,n)):Xr=Ct(t,n);t:do try{if(Ue!==0&&pe!==null){n=pe;var f=Wn;e:switch(Ue){case 1:Ue=0,Wn=null,Zr(t,n,f,1);break;case 2:case 9:if(rp(f)){Ue=0,Wn=null,Ym(n);break}n=function(){Ue!==2&&Ue!==9||ke!==t||(Ue=7),Ei(t)},f.then(n,n);break t;case 3:Ue=7;break t;case 4:Ue=5;break t;case 7:rp(f)?(Ue=0,Wn=null,Ym(n)):(Ue=0,Wn=null,Zr(t,n,f,7));break;case 5:var y=null;switch(pe.tag){case 26:y=pe.memoizedState;case 5:case 27:var b=pe;if(!y||w0(y)){Ue=0,Wn=null;var L=b.sibling;if(L!==null)pe=L;else{var $=b.return;$!==null?(pe=$,Cl($)):pe=null}break e}}Ue=0,Wn=null,Zr(t,n,f,5);break;case 6:Ue=0,Wn=null,Zr(t,n,f,6);break;case 8:af(),Ye=6;break t;default:throw Error(r(462))}}Iv();break}catch(ut){Xm(t,ut)}while(!0);return zi=tr=null,P.H=s,P.A=c,De=a,pe!==null?0:(ke=null,ye=0,Zo(),Ye)}function Iv(){for(;pe!==null&&!vn();)qm(pe)}function qm(t){var n=ym(t.alternate,t,Xi);t.memoizedProps=t.pendingProps,n===null?Cl(t):pe=n}function Ym(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=pm(a,n,n.pendingProps,n.type,void 0,ye);break;case 11:n=pm(a,n,n.pendingProps,n.type.render,n.ref,ye);break;case 5:yu(n);default:Mm(a,n),n=pe=Zh(n,Xi),n=ym(a,n,Xi)}t.memoizedProps=t.pendingProps,n===null?Cl(t):pe=n}function Zr(t,n,a,s){zi=tr=null,yu(n),Hr=null,Qs=0;var c=n.return;try{if(Rv(t,c,n,a,ye)){Ye=1,xl(t,Kn(a,t.current)),pe=null;return}}catch(f){if(c!==null)throw pe=c,f;Ye=1,xl(t,Kn(a,t.current)),pe=null;return}n.flags&32768?(Ae||s===1?t=!0:Xr||(ye&536870912)!==0?t=!1:(Sa=t=!0,(s===2||s===9||s===3||s===6)&&(s=ti.current,s!==null&&s.tag===13&&(s.flags|=16384))),Zm(n,t)):Cl(n)}function Cl(t){var n=t;do{if((n.flags&32768)!==0){Zm(n,Sa);return}t=n.return;var a=wv(n.alternate,n,Xi);if(a!==null){pe=a;return}if(n=n.sibling,n!==null){pe=n;return}pe=n=t}while(n!==null);Ye===0&&(Ye=5)}function Zm(t,n){do{var a=Dv(t.alternate,t);if(a!==null){a.flags&=32767,pe=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){pe=t;return}pe=t=a}while(t!==null);Ye=6,pe=null}function Km(t,n,a,s,c,f,y,b,L){t.cancelPendingCommit=null;do wl();while(Mn!==0);if((De&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=Zc,At(t,a,f,y,b,L),t===ke&&(pe=ke=null,ye=0),jr=n,ba=t,qr=a,tf=f,ef=c,Hm=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Vv(ae,function(){return e0(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=P.T,P.T=null,c=K.p,K.p=2,y=De,De|=4;try{Uv(t,n,a)}finally{De=y,K.p=c,P.T=s}}Mn=1,Qm(),Jm(),$m()}}function Qm(){if(Mn===1){Mn=0;var t=ba,n=jr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var s=K.p;K.p=2;var c=De;De|=4;try{Lm(n,t);var f=vf,y=Fh(t.containerInfo),b=f.focusedElem,L=f.selectionRange;if(y!==b&&b&&b.ownerDocument&&Ih(b.ownerDocument.documentElement,b)){if(L!==null&&Xc(b)){var $=L.start,ut=L.end;if(ut===void 0&&(ut=$),"selectionStart"in b)b.selectionStart=$,b.selectionEnd=Math.min(ut,b.value.length);else{var gt=b.ownerDocument||document,nt=gt&&gt.defaultView||window;if(nt.getSelection){var it=nt.getSelection(),ee=b.textContent.length,Jt=Math.min(L.start,ee),ze=L.end===void 0?Jt:Math.min(L.end,ee);!it.extend&&Jt>ze&&(y=ze,ze=Jt,Jt=y);var W=Bh(b,Jt),H=Bh(b,ze);if(W&&H&&(it.rangeCount!==1||it.anchorNode!==W.node||it.anchorOffset!==W.offset||it.focusNode!==H.node||it.focusOffset!==H.offset)){var Q=gt.createRange();Q.setStart(W.node,W.offset),it.removeAllRanges(),Jt>ze?(it.addRange(Q),it.extend(H.node,H.offset)):(Q.setEnd(H.node,H.offset),it.addRange(Q))}}}}for(gt=[],it=b;it=it.parentNode;)it.nodeType===1&&gt.push({element:it,left:it.scrollLeft,top:it.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<gt.length;b++){var dt=gt[b];dt.element.scrollLeft=dt.left,dt.element.scrollTop=dt.top}}Gl=!!_f,vf=_f=null}finally{De=c,K.p=s,P.T=a}}t.current=n,Mn=2}}function Jm(){if(Mn===2){Mn=0;var t=ba,n=jr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var s=K.p;K.p=2;var c=De;De|=4;try{wm(t,n.alternate,n)}finally{De=c,K.p=s,P.T=a}}Mn=3}}function $m(){if(Mn===4||Mn===3){Mn=0,Se();var t=ba,n=jr,a=qr,s=Hm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Mn=5:(Mn=0,jr=ba=null,t0(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Ea=null),we(a),n=n.stateNode,pt&&typeof pt.onCommitFiberRoot=="function")try{pt.onCommitFiberRoot(ft,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=P.T,c=K.p,K.p=2,P.T=null;try{for(var f=t.onRecoverableError,y=0;y<s.length;y++){var b=s[y];f(b.value,{componentStack:b.stack})}}finally{P.T=n,K.p=c}}(qr&3)!==0&&wl(),Ei(t),c=t.pendingLanes,(a&4194090)!==0&&(c&42)!==0?t===nf?so++:(so=0,nf=t):so=0,oo(0)}}function t0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Hs(n)))}function wl(t){return Qm(),Jm(),$m(),e0()}function e0(){if(Mn!==5)return!1;var t=ba,n=tf;tf=0;var a=we(qr),s=P.T,c=K.p;try{K.p=32>a?32:a,P.T=null,a=ef,ef=null;var f=ba,y=qr;if(Mn=0,jr=ba=null,qr=0,(De&6)!==0)throw Error(r(331));var b=De;if(De|=4,Im(f.current),Pm(f,f.current,y,a),De=b,oo(0,!1),pt&&typeof pt.onPostCommitFiberRoot=="function")try{pt.onPostCommitFiberRoot(ft,f)}catch{}return!0}finally{K.p=c,P.T=s,t0(t,n)}}function n0(t,n,a){n=Kn(a,n),n=Ou(t.stateNode,n,2),t=pa(t,n,2),t!==null&&(Bt(t,2),Ei(t))}function Ge(t,n,a){if(t.tag===3)n0(t,t,a);else for(;n!==null;){if(n.tag===3){n0(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Ea===null||!Ea.has(s))){t=Kn(a,t),a=sm(2),s=pa(n,a,2),s!==null&&(om(a,s,n,t),Bt(s,2),Ei(s));break}}n=n.return}}function of(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new Ov;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(Ku=!0,c.add(a),t=Fv.bind(null,t,n,a),n.then(t,t))}function Fv(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,ke===t&&(ye&a)===a&&(Ye===4||Ye===3&&(ye&62914560)===ye&&300>he()-$u?(De&2)===0&&Yr(t,0):Qu|=a,Wr===ye&&(Wr=0)),Ei(t)}function i0(t,n){n===0&&(n=Nt()),t=Dr(t,n),t!==null&&(Bt(t,n),Ei(t))}function Hv(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),i0(t,a)}function Gv(t,n){var a=0;switch(t.tag){case 13:var s=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),i0(t,a)}function Vv(t,n){return ge(t,n)}var Dl=null,Kr=null,lf=!1,Ul=!1,cf=!1,or=0;function Ei(t){t!==Kr&&t.next===null&&(Kr===null?Dl=Kr=t:Kr=Kr.next=t),Ul=!0,lf||(lf=!0,Xv())}function oo(t,n){if(!cf&&Ul){cf=!0;do for(var a=!1,s=Dl;s!==null;){if(t!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var y=s.suspendedLanes,b=s.pingedLanes;f=(1<<31-Pt(42|t)+1)-1,f&=c&~(y&~b),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,o0(s,f))}else f=ye,f=qt(s,s===ke?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Ct(s,f)||(a=!0,o0(s,f));s=s.next}while(a);cf=!1}}function kv(){a0()}function a0(){Ul=lf=!1;var t=0;or!==0&&(Jv()&&(t=or),or=0);for(var n=he(),a=null,s=Dl;s!==null;){var c=s.next,f=r0(s,n);f===0?(s.next=null,a===null?Dl=c:a.next=c,c===null&&(Kr=a)):(a=s,(t!==0||(f&3)!==0)&&(Ul=!0)),s=c}oo(t)}function r0(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var y=31-Pt(f),b=1<<y,L=c[y];L===-1?((b&a)===0||(b&s)!==0)&&(c[y]=ie(b,n)):L<=n&&(t.expiredLanes|=b),f&=~b}if(n=ke,a=ye,a=qt(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Ue===2||Ue===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&B(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ct(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&B(s),we(a)){case 2:case 8:a=Yt;break;case 32:a=ae;break;case 268435456:a=N;break;default:a=ae}return s=s0.bind(null,t),a=ge(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&B(s),t.callbackPriority=2,t.callbackNode=null,2}function s0(t,n){if(Mn!==0&&Mn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(wl()&&t.callbackNode!==a)return null;var s=ye;return s=qt(t,t===ke?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(Vm(t,s,n),r0(t,he()),t.callbackNode!=null&&t.callbackNode===a?s0.bind(null,t):null)}function o0(t,n){if(wl())return null;Vm(t,n,!0)}function Xv(){tx(function(){(De&6)!==0?ge(_e,kv):a0()})}function uf(){return or===0&&(or=V()),or}function l0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Vo(""+t)}function c0(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Wv(t,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=l0((c[xn]||null).action),y=s.submitter;y&&(n=(n=y[xn]||null)?l0(n.formAction):y.getAttribute("formAction"),n!==null&&(f=n,y=null));var b=new jo("action","action",null,s,c);t.push({event:b,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(or!==0){var L=y?c0(c,y):new FormData(c);wu(a,{pending:!0,data:L,method:c.method,action:f},null,L)}}else typeof f=="function"&&(b.preventDefault(),L=y?c0(c,y):new FormData(c),wu(a,{pending:!0,data:L,method:c.method,action:f},f,L))},currentTarget:c}]})}}for(var ff=0;ff<Yc.length;ff++){var df=Yc[ff],jv=df.toLowerCase(),qv=df[0].toUpperCase()+df.slice(1);li(jv,"on"+qv)}li(Vh,"onAnimationEnd"),li(kh,"onAnimationIteration"),li(Xh,"onAnimationStart"),li("dblclick","onDoubleClick"),li("focusin","onFocus"),li("focusout","onBlur"),li(uv,"onTransitionRun"),li(fv,"onTransitionStart"),li(dv,"onTransitionCancel"),li(Wh,"onTransitionEnd"),T("onMouseEnter",["mouseout","mouseover"]),T("onMouseLeave",["mouseout","mouseover"]),T("onPointerEnter",["pointerout","pointerover"]),T("onPointerLeave",["pointerout","pointerover"]),wi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),wi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),wi("onBeforeInput",["compositionend","keypress","textInput","paste"]),wi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),wi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),wi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(lo));function u0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],c=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var y=s.length-1;0<=y;y--){var b=s[y],L=b.instance,$=b.currentTarget;if(b=b.listener,L!==f&&c.isPropagationStopped())break t;f=b,c.currentTarget=$;try{f(c)}catch(ut){vl(ut)}c.currentTarget=null,f=L}else for(y=0;y<s.length;y++){if(b=s[y],L=b.instance,$=b.currentTarget,b=b.listener,L!==f&&c.isPropagationStopped())break t;f=b,c.currentTarget=$;try{f(c)}catch(ut){vl(ut)}c.currentTarget=null,f=L}}}}function me(t,n){var a=n[ka];a===void 0&&(a=n[ka]=new Set);var s=t+"__bubble";a.has(s)||(f0(n,t,2,!1),a.add(s))}function hf(t,n,a){var s=0;n&&(s|=4),f0(a,t,s,n)}var Nl="_reactListening"+Math.random().toString(36).slice(2);function pf(t){if(!t[Nl]){t[Nl]=!0,Ho.forEach(function(a){a!=="selectionchange"&&(Yv.has(a)||hf(a,!1,t),hf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Nl]||(n[Nl]=!0,hf("selectionchange",!1,n))}}function f0(t,n,a,s){switch(P0(n)){case 2:var c=Sx;break;case 8:c=Mx;break;default:c=Cf}a=c.bind(null,n,a,t),c=void 0,!Pc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function mf(t,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var y=s.tag;if(y===3||y===4){var b=s.stateNode.containerInfo;if(b===c)break;if(y===4)for(y=s.return;y!==null;){var L=y.tag;if((L===3||L===4)&&y.stateNode.containerInfo===c)return;y=y.return}for(;b!==null;){if(y=Ri(b),y===null)return;if(L=y.tag,L===5||L===6||L===26||L===27){s=f=y;continue t}b=b.parentNode}}s=s.return}vh(function(){var $=f,ut=Lc(a),gt=[];t:{var nt=jh.get(t);if(nt!==void 0){var it=jo,ee=t;switch(t){case"keypress":if(Xo(a)===0)break t;case"keydown":case"keyup":it=V_;break;case"focusin":ee="focus",it=Fc;break;case"focusout":ee="blur",it=Fc;break;case"beforeblur":case"afterblur":it=Fc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":it=Sh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":it=D_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":it=W_;break;case Vh:case kh:case Xh:it=L_;break;case Wh:it=q_;break;case"scroll":case"scrollend":it=C_;break;case"wheel":it=Z_;break;case"copy":case"cut":case"paste":it=P_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":it=Eh;break;case"toggle":case"beforetoggle":it=Q_}var Jt=(n&4)!==0,ze=!Jt&&(t==="scroll"||t==="scrollend"),W=Jt?nt!==null?nt+"Capture":null:nt;Jt=[];for(var H=$,Q;H!==null;){var dt=H;if(Q=dt.stateNode,dt=dt.tag,dt!==5&&dt!==26&&dt!==27||Q===null||W===null||(dt=Rs(H,W),dt!=null&&Jt.push(co(H,dt,Q))),ze)break;H=H.return}0<Jt.length&&(nt=new it(nt,ee,null,a,ut),gt.push({event:nt,listeners:Jt}))}}if((n&7)===0){t:{if(nt=t==="mouseover"||t==="pointerover",it=t==="mouseout"||t==="pointerout",nt&&a!==Nc&&(ee=a.relatedTarget||a.fromElement)&&(Ri(ee)||ee[Un]))break t;if((it||nt)&&(nt=ut.window===ut?ut:(nt=ut.ownerDocument)?nt.defaultView||nt.parentWindow:window,it?(ee=a.relatedTarget||a.toElement,it=$,ee=ee?Ri(ee):null,ee!==null&&(ze=u(ee),Jt=ee.tag,ee!==ze||Jt!==5&&Jt!==27&&Jt!==6)&&(ee=null)):(it=null,ee=$),it!==ee)){if(Jt=Sh,dt="onMouseLeave",W="onMouseEnter",H="mouse",(t==="pointerout"||t==="pointerover")&&(Jt=Eh,dt="onPointerLeave",W="onPointerEnter",H="pointer"),ze=it==null?nt:Wa(it),Q=ee==null?nt:Wa(ee),nt=new Jt(dt,H+"leave",it,a,ut),nt.target=ze,nt.relatedTarget=Q,dt=null,Ri(ut)===$&&(Jt=new Jt(W,H+"enter",ee,a,ut),Jt.target=Q,Jt.relatedTarget=ze,dt=Jt),ze=dt,it&&ee)e:{for(Jt=it,W=ee,H=0,Q=Jt;Q;Q=Qr(Q))H++;for(Q=0,dt=W;dt;dt=Qr(dt))Q++;for(;0<H-Q;)Jt=Qr(Jt),H--;for(;0<Q-H;)W=Qr(W),Q--;for(;H--;){if(Jt===W||W!==null&&Jt===W.alternate)break e;Jt=Qr(Jt),W=Qr(W)}Jt=null}else Jt=null;it!==null&&d0(gt,nt,it,Jt,!1),ee!==null&&ze!==null&&d0(gt,ze,ee,Jt,!0)}}t:{if(nt=$?Wa($):window,it=nt.nodeName&&nt.nodeName.toLowerCase(),it==="select"||it==="input"&&nt.type==="file")var Ht=Uh;else if(wh(nt))if(Nh)Ht=ov;else{Ht=rv;var de=av}else it=nt.nodeName,!it||it.toLowerCase()!=="input"||nt.type!=="checkbox"&&nt.type!=="radio"?$&&Uc($.elementType)&&(Ht=Uh):Ht=sv;if(Ht&&(Ht=Ht(t,$))){Dh(gt,Ht,a,ut);break t}de&&de(t,nt,$),t==="focusout"&&$&&nt.type==="number"&&$.memoizedProps.value!=null&&bn(nt,"number",nt.value)}switch(de=$?Wa($):window,t){case"focusin":(wh(de)||de.contentEditable==="true")&&(Rr=de,Wc=$,Ps=null);break;case"focusout":Ps=Wc=Rr=null;break;case"mousedown":jc=!0;break;case"contextmenu":case"mouseup":case"dragend":jc=!1,Hh(gt,a,ut);break;case"selectionchange":if(cv)break;case"keydown":case"keyup":Hh(gt,a,ut)}var Wt;if(Gc)t:{switch(t){case"compositionstart":var $t="onCompositionStart";break t;case"compositionend":$t="onCompositionEnd";break t;case"compositionupdate":$t="onCompositionUpdate";break t}$t=void 0}else Ar?Rh(t,a)&&($t="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&($t="onCompositionStart");$t&&(bh&&a.locale!=="ko"&&(Ar||$t!=="onCompositionStart"?$t==="onCompositionEnd"&&Ar&&(Wt=xh()):(ua=ut,zc="value"in ua?ua.value:ua.textContent,Ar=!0)),de=Ll($,$t),0<de.length&&($t=new Mh($t,t,null,a,ut),gt.push({event:$t,listeners:de}),Wt?$t.data=Wt:(Wt=Ch(a),Wt!==null&&($t.data=Wt)))),(Wt=$_?tv(t,a):ev(t,a))&&($t=Ll($,"onBeforeInput"),0<$t.length&&(de=new Mh("onBeforeInput","beforeinput",null,a,ut),gt.push({event:de,listeners:$t}),de.data=Wt)),Wv(gt,t,$,a,ut)}u0(gt,n)})}function co(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Ll(t,n){for(var a=n+"Capture",s=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Rs(t,a),c!=null&&s.unshift(co(t,c,f)),c=Rs(t,n),c!=null&&s.push(co(t,c,f))),t.tag===3)return s;t=t.return}return[]}function Qr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function d0(t,n,a,s,c){for(var f=n._reactName,y=[];a!==null&&a!==s;){var b=a,L=b.alternate,$=b.stateNode;if(b=b.tag,L!==null&&L===s)break;b!==5&&b!==26&&b!==27||$===null||(L=$,c?($=Rs(a,f),$!=null&&y.unshift(co(a,$,L))):c||($=Rs(a,f),$!=null&&y.push(co(a,$,L)))),a=a.return}y.length!==0&&t.push({event:n,listeners:y})}var Zv=/\r\n?/g,Kv=/\u0000|\uFFFD/g;function h0(t){return(typeof t=="string"?t:""+t).replace(Zv,`
`).replace(Kv,"")}function p0(t,n){return n=h0(n),h0(t)===n}function Ol(){}function Pe(t,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||vi(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&vi(t,""+s);break;case"className":Dt(t,"class",s);break;case"tabIndex":Dt(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Dt(t,a,s);break;case"style":gh(t,s,f);break;case"data":if(n!=="object"){Dt(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Vo(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Pe(t,n,"name",c.name,c,null),Pe(t,n,"formEncType",c.formEncType,c,null),Pe(t,n,"formMethod",c.formMethod,c,null),Pe(t,n,"formTarget",c.formTarget,c,null)):(Pe(t,n,"encType",c.encType,c,null),Pe(t,n,"method",c.method,c,null),Pe(t,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Vo(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Ol);break;case"onScroll":s!=null&&me("scroll",t);break;case"onScrollEnd":s!=null&&me("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Vo(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":me("beforetoggle",t),me("toggle",t),Tt(t,"popover",s);break;case"xlinkActuate":Ot(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Ot(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Ot(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Ot(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Ot(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Ot(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Ot(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Ot(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Ot(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Tt(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=A_.get(a)||a,Tt(t,a,s))}}function gf(t,n,a,s,c,f){switch(a){case"style":gh(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?vi(t,s):(typeof s=="number"||typeof s=="bigint")&&vi(t,""+s);break;case"onScroll":s!=null&&me("scroll",t);break;case"onScrollEnd":s!=null&&me("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Ol);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Go.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[xn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,c);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):Tt(t,a,s)}}}function En(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":me("error",t),me("load",t);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var y=a[f];if(y!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Pe(t,n,f,y,a,null)}}c&&Pe(t,n,"srcSet",a.srcSet,a,null),s&&Pe(t,n,"src",a.src,a,null);return;case"input":me("invalid",t);var b=f=y=c=null,L=null,$=null;for(s in a)if(a.hasOwnProperty(s)){var ut=a[s];if(ut!=null)switch(s){case"name":c=ut;break;case"type":y=ut;break;case"checked":L=ut;break;case"defaultChecked":$=ut;break;case"value":f=ut;break;case"defaultValue":b=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(r(137,n));break;default:Pe(t,n,s,ut,a,null)}}He(t,f,b,L,$,y,c,!1),Le(t);return;case"select":me("invalid",t),s=y=f=null;for(c in a)if(a.hasOwnProperty(c)&&(b=a[c],b!=null))switch(c){case"value":f=b;break;case"defaultValue":y=b;break;case"multiple":s=b;default:Pe(t,n,c,b,a,null)}n=f,a=y,t.multiple=!!s,n!=null?sn(t,!!s,n,!1):a!=null&&sn(t,!!s,a,!0);return;case"textarea":me("invalid",t),f=c=s=null;for(y in a)if(a.hasOwnProperty(y)&&(b=a[y],b!=null))switch(y){case"value":s=b;break;case"defaultValue":c=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(r(91));break;default:Pe(t,n,y,b,a,null)}yn(t,s,c,f),Le(t);return;case"option":for(L in a)if(a.hasOwnProperty(L)&&(s=a[L],s!=null))switch(L){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Pe(t,n,L,s,a,null)}return;case"dialog":me("beforetoggle",t),me("toggle",t),me("cancel",t),me("close",t);break;case"iframe":case"object":me("load",t);break;case"video":case"audio":for(s=0;s<lo.length;s++)me(lo[s],t);break;case"image":me("error",t),me("load",t);break;case"details":me("toggle",t);break;case"embed":case"source":case"link":me("error",t),me("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(s=a[$],s!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Pe(t,n,$,s,a,null)}return;default:if(Uc(n)){for(ut in a)a.hasOwnProperty(ut)&&(s=a[ut],s!==void 0&&gf(t,n,ut,s,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(s=a[b],s!=null&&Pe(t,n,b,s,a,null))}function Qv(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,y=null,b=null,L=null,$=null,ut=null;for(it in a){var gt=a[it];if(a.hasOwnProperty(it)&&gt!=null)switch(it){case"checked":break;case"value":break;case"defaultValue":L=gt;default:s.hasOwnProperty(it)||Pe(t,n,it,null,s,gt)}}for(var nt in s){var it=s[nt];if(gt=a[nt],s.hasOwnProperty(nt)&&(it!=null||gt!=null))switch(nt){case"type":f=it;break;case"name":c=it;break;case"checked":$=it;break;case"defaultChecked":ut=it;break;case"value":y=it;break;case"defaultValue":b=it;break;case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(r(137,n));break;default:it!==gt&&Pe(t,n,nt,it,s,gt)}}Di(t,y,b,L,$,ut,f,c);return;case"select":it=y=b=nt=null;for(f in a)if(L=a[f],a.hasOwnProperty(f)&&L!=null)switch(f){case"value":break;case"multiple":it=L;default:s.hasOwnProperty(f)||Pe(t,n,f,null,s,L)}for(c in s)if(f=s[c],L=a[c],s.hasOwnProperty(c)&&(f!=null||L!=null))switch(c){case"value":nt=f;break;case"defaultValue":b=f;break;case"multiple":y=f;default:f!==L&&Pe(t,n,c,f,s,L)}n=b,a=y,s=it,nt!=null?sn(t,!!a,nt,!1):!!s!=!!a&&(n!=null?sn(t,!!a,n,!0):sn(t,!!a,a?[]:"",!1));return;case"textarea":it=nt=null;for(b in a)if(c=a[b],a.hasOwnProperty(b)&&c!=null&&!s.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Pe(t,n,b,null,s,c)}for(y in s)if(c=s[y],f=a[y],s.hasOwnProperty(y)&&(c!=null||f!=null))switch(y){case"value":nt=c;break;case"defaultValue":it=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Pe(t,n,y,c,s,f)}hn(t,nt,it);return;case"option":for(var ee in a)if(nt=a[ee],a.hasOwnProperty(ee)&&nt!=null&&!s.hasOwnProperty(ee))switch(ee){case"selected":t.selected=!1;break;default:Pe(t,n,ee,null,s,nt)}for(L in s)if(nt=s[L],it=a[L],s.hasOwnProperty(L)&&nt!==it&&(nt!=null||it!=null))switch(L){case"selected":t.selected=nt&&typeof nt!="function"&&typeof nt!="symbol";break;default:Pe(t,n,L,nt,s,it)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Jt in a)nt=a[Jt],a.hasOwnProperty(Jt)&&nt!=null&&!s.hasOwnProperty(Jt)&&Pe(t,n,Jt,null,s,nt);for($ in s)if(nt=s[$],it=a[$],s.hasOwnProperty($)&&nt!==it&&(nt!=null||it!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(r(137,n));break;default:Pe(t,n,$,nt,s,it)}return;default:if(Uc(n)){for(var ze in a)nt=a[ze],a.hasOwnProperty(ze)&&nt!==void 0&&!s.hasOwnProperty(ze)&&gf(t,n,ze,void 0,s,nt);for(ut in s)nt=s[ut],it=a[ut],!s.hasOwnProperty(ut)||nt===it||nt===void 0&&it===void 0||gf(t,n,ut,nt,s,it);return}}for(var W in a)nt=a[W],a.hasOwnProperty(W)&&nt!=null&&!s.hasOwnProperty(W)&&Pe(t,n,W,null,s,nt);for(gt in s)nt=s[gt],it=a[gt],!s.hasOwnProperty(gt)||nt===it||nt==null&&it==null||Pe(t,n,gt,nt,s,it)}var _f=null,vf=null;function Pl(t){return t.nodeType===9?t:t.ownerDocument}function m0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function g0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function xf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var yf=null;function Jv(){var t=window.event;return t&&t.type==="popstate"?t===yf?!1:(yf=t,!0):(yf=null,!1)}var _0=typeof setTimeout=="function"?setTimeout:void 0,$v=typeof clearTimeout=="function"?clearTimeout:void 0,v0=typeof Promise=="function"?Promise:void 0,tx=typeof queueMicrotask=="function"?queueMicrotask:typeof v0<"u"?function(t){return v0.resolve(null).then(t).catch(ex)}:_0;function ex(t){setTimeout(function(){throw t})}function Aa(t){return t==="head"}function x0(t,n){var a=n,s=0,c=0;do{var f=a.nextSibling;if(t.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<s&&8>s){a=s;var y=t.ownerDocument;if(a&1&&uo(y.documentElement),a&2&&uo(y.body),a&4)for(a=y.head,uo(a),y=a.firstChild;y;){var b=y.nextSibling,L=y.nodeName;y[sa]||L==="SCRIPT"||L==="STYLE"||L==="LINK"&&y.rel.toLowerCase()==="stylesheet"||a.removeChild(y),y=b}}if(c===0){t.removeChild(f),xo(n);return}c--}else a==="$"||a==="$?"||a==="$!"?c++:s=a.charCodeAt(0)-48;else s=0;a=f}while(a);xo(n)}function Sf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Sf(a),oa(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function nx(t,n,a,s){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[sa])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=ui(t.nextSibling),t===null)break}return null}function ix(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ui(t.nextSibling),t===null))return null;return t}function Mf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function ax(t,n){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function ui(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var Ef=null;function y0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function S0(t,n,a){switch(n=Pl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function uo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);oa(t)}var ni=new Map,M0=new Set;function zl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Wi=K.d;K.d={f:rx,r:sx,D:ox,C:lx,L:cx,m:ux,X:dx,S:fx,M:hx};function rx(){var t=Wi.f(),n=Rl();return t||n}function sx(t){var n=Ci(t);n!==null&&n.tag===5&&n.type==="form"?Vp(n):Wi.r(t)}var Jr=typeof document>"u"?null:document;function E0(t,n,a){var s=Jr;if(s&&typeof n=="string"&&n){var c=Ve(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),M0.has(c)||(M0.add(c),t={rel:t,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),En(n,"link",t),tn(n),s.head.appendChild(n)))}}function ox(t){Wi.D(t),E0("dns-prefetch",t,null)}function lx(t,n){Wi.C(t,n),E0("preconnect",t,n)}function cx(t,n,a){Wi.L(t,n,a);var s=Jr;if(s&&t&&n){var c='link[rel="preload"][as="'+Ve(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Ve(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Ve(a.imageSizes)+'"]')):c+='[href="'+Ve(t)+'"]';var f=c;switch(n){case"style":f=$r(t);break;case"script":f=ts(t)}ni.has(f)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ni.set(f,t),s.querySelector(c)!==null||n==="style"&&s.querySelector(fo(f))||n==="script"&&s.querySelector(ho(f))||(n=s.createElement("link"),En(n,"link",t),tn(n),s.head.appendChild(n)))}}function ux(t,n){Wi.m(t,n);var a=Jr;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Ve(s)+'"][href="'+Ve(t)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ts(t)}if(!ni.has(f)&&(t=g({rel:"modulepreload",href:t},n),ni.set(f,t),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ho(f)))return}s=a.createElement("link"),En(s,"link",t),tn(s),a.head.appendChild(s)}}}function fx(t,n,a){Wi.S(t,n,a);var s=Jr;if(s&&t){var c=la(s).hoistableStyles,f=$r(t);n=n||"default";var y=c.get(f);if(!y){var b={loading:0,preload:null};if(y=s.querySelector(fo(f)))b.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ni.get(f))&&bf(t,a);var L=y=s.createElement("link");tn(L),En(L,"link",t),L._p=new Promise(function($,ut){L.onload=$,L.onerror=ut}),L.addEventListener("load",function(){b.loading|=1}),L.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Bl(y,n,s)}y={type:"stylesheet",instance:y,count:1,state:b},c.set(f,y)}}}function dx(t,n){Wi.X(t,n);var a=Jr;if(a&&t){var s=la(a).hoistableScripts,c=ts(t),f=s.get(c);f||(f=a.querySelector(ho(c)),f||(t=g({src:t,async:!0},n),(n=ni.get(c))&&Tf(t,n),f=a.createElement("script"),tn(f),En(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function hx(t,n){Wi.M(t,n);var a=Jr;if(a&&t){var s=la(a).hoistableScripts,c=ts(t),f=s.get(c);f||(f=a.querySelector(ho(c)),f||(t=g({src:t,async:!0,type:"module"},n),(n=ni.get(c))&&Tf(t,n),f=a.createElement("script"),tn(f),En(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function b0(t,n,a,s){var c=(c=Mt.current)?zl(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=$r(a.href),a=la(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=$r(a.href);var f=la(c).hoistableStyles,y=f.get(t);if(y||(c=c.ownerDocument||c,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,y),(f=c.querySelector(fo(t)))&&!f._p&&(y.instance=f,y.state.loading=5),ni.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ni.set(t,a),f||px(c,t,a,y.state))),n&&s===null)throw Error(r(528,""));return y}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ts(a),a=la(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function $r(t){return'href="'+Ve(t)+'"'}function fo(t){return'link[rel="stylesheet"]['+t+"]"}function T0(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function px(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),En(n,"link",a),tn(n),t.head.appendChild(n))}function ts(t){return'[src="'+Ve(t)+'"]'}function ho(t){return"script[async]"+t}function A0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+Ve(a.href)+'"]');if(s)return n.instance=s,tn(s),s;var c=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),tn(s),En(s,"style",c),Bl(s,a.precedence,t),n.instance=s;case"stylesheet":c=$r(a.href);var f=t.querySelector(fo(c));if(f)return n.state.loading|=4,n.instance=f,tn(f),f;s=T0(a),(c=ni.get(c))&&bf(s,c),f=(t.ownerDocument||t).createElement("link"),tn(f);var y=f;return y._p=new Promise(function(b,L){y.onload=b,y.onerror=L}),En(f,"link",s),n.state.loading|=4,Bl(f,a.precedence,t),n.instance=f;case"script":return f=ts(a.src),(c=t.querySelector(ho(f)))?(n.instance=c,tn(c),c):(s=a,(c=ni.get(f))&&(s=g({},a),Tf(s,c)),t=t.ownerDocument||t,c=t.createElement("script"),tn(c),En(c,"link",s),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Bl(s,a.precedence,t));return n.instance}function Bl(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,y=0;y<s.length;y++){var b=s[y];if(b.dataset.precedence===n)f=b;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function bf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Tf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Il=null;function R0(t,n,a){if(Il===null){var s=new Map,c=Il=new Map;c.set(a,s)}else c=Il,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[sa]||f[rn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var y=f.getAttribute(n)||"";y=t+y;var b=s.get(y);b?b.push(f):s.set(y,[f])}}return s}function C0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function mx(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function w0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var po=null;function gx(){}function _x(t,n,a){if(po===null)throw Error(r(475));var s=po;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=$r(a.href),f=t.querySelector(fo(c));if(f){t=f._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(s.count++,s=Fl.bind(s),t.then(s,s)),n.state.loading|=4,n.instance=f,tn(f);return}f=t.ownerDocument||t,a=T0(a),(c=ni.get(c))&&bf(a,c),f=f.createElement("link"),tn(f);var y=f;y._p=new Promise(function(b,L){y.onload=b,y.onerror=L}),En(f,"link",a),n.instance=f}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(s.count++,n=Fl.bind(s),t.addEventListener("load",n),t.addEventListener("error",n))}}function vx(){if(po===null)throw Error(r(475));var t=po;return t.stylesheets&&t.count===0&&Af(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&Af(t,t.stylesheets),t.unsuspend){var s=t.unsuspend;t.unsuspend=null,s()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function Fl(){if(this.count--,this.count===0){if(this.stylesheets)Af(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Hl=null;function Af(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Hl=new Map,n.forEach(xx,t),Hl=null,Fl.call(t))}function xx(t,n){if(!(n.state.loading&4)){var a=Hl.get(t);if(a)var s=a.get(null);else{a=new Map,Hl.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var y=c[f];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),s=y)}s&&a.set(null,s)}c=n.instance,y=c.getAttribute("data-precedence"),f=a.get(y)||s,f===s&&a.set(null,c),a.set(y,c),this.count++,s=Fl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var mo={$$typeof:O,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function yx(t,n,a,s,c,f,y,b){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=bt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bt(0),this.hiddenUpdates=bt(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function D0(t,n,a,s,c,f,y,b,L,$,ut,gt){return t=new yx(t,n,a,y,b,L,$,gt),n=1,f===!0&&(n|=24),f=Vn(3,null,null,n),t.current=f,f.stateNode=t,n=su(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},uu(f),t}function U0(t){return t?(t=Ur,t):Ur}function N0(t,n,a,s,c,f){c=U0(c),s.context===null?s.context=c:s.pendingContext=c,s=ha(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=pa(t,s,n),a!==null&&(qn(a,t,n),Xs(a,t,n))}function L0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Rf(t,n){L0(t,n),(t=t.alternate)&&L0(t,n)}function O0(t){if(t.tag===13){var n=Dr(t,67108864);n!==null&&qn(n,t,67108864),Rf(t,67108864)}}var Gl=!0;function Sx(t,n,a,s){var c=P.T;P.T=null;var f=K.p;try{K.p=2,Cf(t,n,a,s)}finally{K.p=f,P.T=c}}function Mx(t,n,a,s){var c=P.T;P.T=null;var f=K.p;try{K.p=8,Cf(t,n,a,s)}finally{K.p=f,P.T=c}}function Cf(t,n,a,s){if(Gl){var c=wf(s);if(c===null)mf(t,n,s,Vl,a),z0(t,s);else if(bx(c,t,n,a,s))s.stopPropagation();else if(z0(t,s),n&4&&-1<Ex.indexOf(t)){for(;c!==null;){var f=Ci(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var y=jt(f.pendingLanes);if(y!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;y;){var L=1<<31-Pt(y);b.entanglements[1]|=L,y&=~L}Ei(f),(De&6)===0&&(Tl=he()+500,oo(0))}}break;case 13:b=Dr(f,2),b!==null&&qn(b,f,2),Rl(),Rf(f,2)}if(f=wf(s),f===null&&mf(t,n,s,Vl,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else mf(t,n,s,null,a)}}function wf(t){return t=Lc(t),Df(t)}var Vl=null;function Df(t){if(Vl=null,t=Ri(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Vl=t,null}function P0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Vt()){case _e:return 2;case Yt:return 8;case ae:case Ze:return 32;case N:return 268435456;default:return 32}default:return 32}}var Uf=!1,Ra=null,Ca=null,wa=null,go=new Map,_o=new Map,Da=[],Ex="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function z0(t,n){switch(t){case"focusin":case"focusout":Ra=null;break;case"dragenter":case"dragleave":Ca=null;break;case"mouseover":case"mouseout":wa=null;break;case"pointerover":case"pointerout":go.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":_o.delete(n.pointerId)}}function vo(t,n,a,s,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Ci(n),n!==null&&O0(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function bx(t,n,a,s,c){switch(n){case"focusin":return Ra=vo(Ra,t,n,a,s,c),!0;case"dragenter":return Ca=vo(Ca,t,n,a,s,c),!0;case"mouseover":return wa=vo(wa,t,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return go.set(f,vo(go.get(f)||null,t,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,_o.set(f,vo(_o.get(f)||null,t,n,a,s,c)),!0}return!1}function B0(t){var n=Ri(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Hn(t.priority,function(){if(a.tag===13){var s=jn();s=ne(s);var c=Dr(a,s);c!==null&&qn(c,a,s),Rf(a,s)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function kl(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=wf(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Nc=s,a.target.dispatchEvent(s),Nc=null}else return n=Ci(a),n!==null&&O0(n),t.blockedOn=a,!1;n.shift()}return!0}function I0(t,n,a){kl(t)&&a.delete(n)}function Tx(){Uf=!1,Ra!==null&&kl(Ra)&&(Ra=null),Ca!==null&&kl(Ca)&&(Ca=null),wa!==null&&kl(wa)&&(wa=null),go.forEach(I0),_o.forEach(I0)}function Xl(t,n){t.blockedOn===n&&(t.blockedOn=null,Uf||(Uf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Tx)))}var Wl=null;function F0(t){Wl!==t&&(Wl=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Wl===t&&(Wl=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],c=t[n+2];if(typeof s!="function"){if(Df(s||a)===null)continue;break}var f=Ci(a);f!==null&&(t.splice(n,3),n-=3,wu(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function xo(t){function n(L){return Xl(L,t)}Ra!==null&&Xl(Ra,t),Ca!==null&&Xl(Ca,t),wa!==null&&Xl(wa,t),go.forEach(n),_o.forEach(n);for(var a=0;a<Da.length;a++){var s=Da[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Da.length&&(a=Da[0],a.blockedOn===null);)B0(a),a.blockedOn===null&&Da.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],y=c[xn]||null;if(typeof f=="function")y||F0(a);else if(y){var b=null;if(f&&f.hasAttribute("formAction")){if(c=f,y=f[xn]||null)b=y.formAction;else if(Df(c)!==null)continue}else b=y.action;typeof b=="function"?a[s+1]=b:(a.splice(s,3),s-=3),F0(a)}}}function Nf(t){this._internalRoot=t}jl.prototype.render=Nf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=jn();N0(a,s,t,n,null,null)},jl.prototype.unmount=Nf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;N0(t.current,2,null,t,null,null),Rl(),n[Un]=null}};function jl(t){this._internalRoot=t}jl.prototype.unstable_scheduleHydration=function(t){if(t){var n=Me();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Da.length&&n!==0&&n<Da[a].priority;a++);Da.splice(a,0,t),a===0&&B0(t)}};var H0=e.version;if(H0!=="19.1.0")throw Error(r(527,H0,"19.1.0"));K.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=m(n),t=t!==null?p(t):null,t=t===null?null:t.stateNode,t};var Ax={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ql.isDisabled&&ql.supportsFiber)try{ft=ql.inject(Ax),pt=ql}catch{}}return So.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",c=nm,f=im,y=am,b=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(b=n.unstable_transitionCallbacks)),n=D0(t,1,!1,null,null,a,s,c,f,y,b,null),t[Un]=n.current,pf(t),new Nf(n)},So.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,c="",f=nm,y=im,b=am,L=null,$=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(L=a.unstable_transitionCallbacks),a.formState!==void 0&&($=a.formState)),n=D0(t,1,!0,n,a??null,s,c,f,y,b,L,$),n.context=U0(null),a=n.current,s=jn(),s=ne(s),c=ha(s),c.callback=null,pa(a,c,s),a=s,n.current.lanes=a,Bt(n,a),Ei(n),t[Un]=n.current,pf(t),new jl(n)},So.version="19.1.0",So}var K0;function Bx(){if(K0)return Pf.exports;K0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Pf.exports=zx(),Pf.exports}var Ix=Bx();const Q0="/ckbhalaji-portfolio/assets/CKBhalaji_Resume-CpuNNEFy.pdf",Fx=({scrollToSection:o,activeSection:e})=>{const[i,r]=gi.useState(!1),{theme:l,toggleTheme:u}=Ai(),d=[{name:"Home",id:"hero"},{name:"About",id:"about"},{name:"Education",id:"education"},{name:"Skills",id:"skills"},{name:"Projects",id:"projects"},{name:"Certificates",id:"certificates"},{name:"Contact",id:"contact"}];return z.jsxs("header",{className:"fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:[z.jsxs("nav",{className:"flex items-center justify-between h-16",children:[z.jsx("div",{className:"flex items-center",children:z.jsx("a",{href:"#hero",onClick:()=>o("hero"),className:"font-navename text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 rounded-lg p-2",children:"CKBhalaji"})}),z.jsxs("div",{className:"hidden md:flex items-center space-x-4",children:[d.map(h=>z.jsxs("a",{href:`#${h.id}`,onClick:()=>o(h.id),className:`relative px-3 py-2 text-sm font-medium transition-all duration-300 group
                ${e===h.id?"text-purple-400":`${l==="dark"?"text-gray-300 hover:text-white":"text-gray-700 hover:text-gray-900"}`}`,children:[h.name,z.jsx("span",{className:`absolute bottom-0 left-0 w-full h-0.5
                ${e===h.id?"bg-purple-400":"bg-transparent group-hover:bg-white group-hover:dark:bg-gray-300"}
                transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 ${e===h.id?"scale-x-100":""}`})]},h.id)),z.jsx("button",{onClick:u,className:`p-2 rounded-full transition-colors duration-300 mr-4
              ${l==="dark"?"bg-gray-700 text-yellow-300 hover:bg-gray-600":"bg-gray-200 text-indigo-700 hover:bg-gray-300"}`,"aria-label":"Toggle theme",children:l==="dark"?z.jsx("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:z.jsx("path",{d:"M12 2.5a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-2a.5.5 0 01.5-.5zM12 19.5a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-2a.5.5 0 01.5-.5zM19.5 12a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5zM2.5 12a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5zM18.364 5.636a.5.5 0 010-.707l1.414-1.414a.5.5 0 01.707 0l1.414 1.414a.5.5 0 010 .707l-1.414 1.414a.5.5 0 01-.707 0l-1.414-1.414zM5.636 18.364a.5.5 0 010-.707l1.414-1.414a.5.5 0 01.707 0l1.414 1.414a.5.5 0 010 .707l-1.414 1.414a.5.5 0 01-.707 0l-1.414-1.414zM18.364 18.364a.5.5 0 01.707 0l1.414 1.414a.5.5 0 010 .707l-1.414 1.414a.5.5 0 01-.707 0l-1.414-1.414a.5.5 0 010-.707l1.414-1.414zM5.636 5.636a.5.5 0 01.707 0l1.414 1.414a.5.5 0 010 .707l-1.414 1.414a.5.5 0 01-.707 0l-1.414-1.414a.5.5 0 010-.707l1.414-1.414zM12 7a5 5 0 100 10 5 5 0 000-10z"})}):z.jsx("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:z.jsx("path",{d:"M12 3a9 9 0 109 9c0-.46-.03-.92-.1-1.36a5.5 5.5 0 01-7.24-7.24c-.44-.07-.9-.1-1.36-.1z"})})}),z.jsx("a",{href:Q0,download:"C.K.BHALAJI_Resume.pdf",className:`ml-4 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
              bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md
              hover:from-blue-600 hover:to-purple-700 transform hover:scale-105`,children:"Download Resume"})]}),z.jsxs("div",{className:"flex items-center -mr-2 md:hidden",children:[" ",z.jsx("button",{onClick:u,className:`p-2 rounded-full transition-colors duration-300 mr-4
              ${l==="dark"?"bg-gray-700 text-yellow-300 hover:bg-gray-600":"bg-gray-200 text-indigo-700 hover:bg-gray-300"}`,"aria-label":"Toggle theme",children:l==="dark"?z.jsx("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:z.jsx("path",{d:"M12 2.5a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-2a.5.5 0 01.5-.5zM12 19.5a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-2a.5.5 0 01.5-.5zM19.5 12a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5zM2.5 12a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5zM18.364 5.636a.5.5 0 010-.707l1.414-1.414a.5.5 0 01.707 0l1.414 1.414a.5.5 0 010 .707l-1.414 1.414a.5.5 0 01-.707 0l-1.414-1.414zM5.636 18.364a.5.5 0 010-.707l1.414-1.414a.5.5 0 01.707 0l1.414 1.414a.5.5 0 010 .707l-1.414 1.414a.5.5 0 01-.707 0l-1.414-1.414zM18.364 18.364a.5.5 0 01.707 0l1.414 1.414a.5.5 0 010 .707l-1.414 1.414a.5.5 0 01-.707 0l-1.414-1.414a.5.5 0 010-.707l1.414-1.414zM5.636 5.636a.5.5 0 01.707 0l1.414 1.414a.5.5 0 010 .707l-1.414 1.414a.5.5 0 01-.707 0l-1.414-1.414a.5.5 0 010-.707l1.414-1.414zM12 7a5 5 0 100 10 5 5 0 000-10z"})}):z.jsx("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:z.jsx("path",{d:"M12 3a9 9 0 109 9c0-.46-.03-.92-.1-1.36a5.5 5.5 0 01-7.24-7.24c-.44-.07-.9-.1-1.36-.1z"})})}),z.jsxs("button",{onClick:()=>r(!i),type:"button",className:`inline-flex items-center justify-center p-2 rounded-md ${l==="dark"?"text-gray-400 hover:text-white hover:bg-gray-700":"text-gray-600 hover:text-gray-900 hover:bg-gray-200"} focus:outline-none focus:ring-2 focus:ring-offset-2 ${l==="dark"?"focus:ring-offset-gray-800 focus:ring-white":"focus:ring-offset-gray-100 focus:ring-gray-900"}`,"aria-controls":"mobile-menu","aria-expanded":"false",children:[z.jsx("span",{className:"sr-only",children:"Open main menu"}),i?z.jsx("svg",{className:"block h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:z.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})}):z.jsx("svg",{className:"block h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:z.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"})})]})]})]}),i&&z.jsx("div",{className:"md:hidden",id:"mobile-menu",children:z.jsxs("div",{className:"px-2 pt-2 pb-3 space-y-1 sm:px-3",children:[d.map(h=>z.jsx("a",{href:`#${h.id}`,onClick:()=>{o(h.id),r(!1)},className:`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300
                  ${e===h.id?"bg-purple-700 text-white shadow-md":`${l==="dark"?"text-gray-300 hover:bg-gray-700 hover:text-white":"text-gray-700 hover:bg-gray-200 hover:text-gray-900"}`}`,children:h.name},h.id)),z.jsx("a",{href:Q0,download:"C.K.BHALAJI_Resume.pdf",className:`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300
                bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md
                hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 text-center`,children:"Download Resume"})]})})]})},Hx=()=>{const{theme:o}=Ai();return z.jsxs("div",{className:"max-w-6xl mx-auto p-4 flex flex-col-reverse lg:flex-row items-center justify-between text-left",children:[z.jsxs("div",{className:"w-full lg:w-1/2 flex flex-col items-start justify-center",children:[z.jsx("h1",{className:`text-5xl sm:text-6xl lg:text-7xl font-display leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4 animate-fade-in-up ${o==="dark"?"":"filter brightness-75"}`,children:"Hi, I'm C.K.BHALAJI"}),z.jsx("p",{className:`text-xl sm:text-2xl ${o==="dark"?"text-white":"text-gray-700"} mb-8 animate-fade-in-up delay-100`,children:"Passionate software developer skilled in full-stack development, debugging, and problem-solving."}),z.jsxs("div",{className:"flex space-x-6 animate-fade-in-up delay-200",children:[z.jsx("a",{href:"https://linkedin.com/in/bhalaji-karunanithi",target:"_blank",rel:"noopener noreferrer",className:`text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110 ${o==="dark"?"":"text-gray-600 hover:text-blue-600"}`,"aria-label":"LinkedIn Profile",children:z.jsx("svg",{className:"w-8 h-8",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:z.jsx("path",{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"})})}),z.jsx("a",{href:"https://github.com/CKBhalaji",target:"_blank",rel:"noopener noreferrer",className:`text-gray-400 hover:text-gray-100 transition-colors duration-300 transform hover:scale-110 ${o==="dark"?"":"text-gray-600 hover:text-gray-900"}`,"aria-label":"GitHub Profile",children:z.jsx("svg",{className:"w-8 h-8",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:z.jsx("path",{fillRule:"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.475.087.687-.206.687-.458 0-.225-.007-.975-.011-1.912-2.782.604-3.369-1.34-3.369-1.34-.454-1.15-.11-1.458-.11-1.458.387-.272.029-.266.029-.266.43.029.657.22.657.22.383.657 1.004.466 1.249.356.038-.276.149-.466.272-.572-1.05-.11-2.155-.52-2.155-2.336 0-.517.18-.94.474-1.272-.047-.11-.205-.602.045-1.253 0 0 .38-.127 1.249.462.36-.1.737-.15 1.113-.15 0-.007.003-.014.003-.022.376 0 .753.05 1.113.15.869-.589 1.249-.462 1.249-.462.25 0 .092.652.045 1.253.294.332.474.755.474 1.272 0 1.821-1.107 2.227-2.159 2.332.15.128.28.372.28.75 0 1.572-.011 2.846-.011 3.229 0 .254.209.548.694.456C21.133 20.19 24 16.435 24 12.017 24 6.484 19.523 2 14 2h-2z",clipRule:"evenodd"})})}),z.jsx("a",{href:"mailto:bhalaji2003@gmail.com",className:`text-gray-400 hover:text-red-400 transition-colors duration-300 transform hover:scale-110 ${o==="dark"?"":"text-gray-600 hover:text-red-600"}`,"aria-label":"Email",children:z.jsx("svg",{className:"w-8 h-8",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:z.jsx("path",{d:"M.05 3.555L12 12.055l11.95-8.5V20H.05V3.555zM12 10.945L.05 2.455h23.9L12 10.945z"})})}),z.jsx("a",{href:"https://www.instagram.com/c.k.bhalaji/",target:"_blank",rel:"noopener noreferrer",className:`text-gray-400 hover:text-pink-500 transition-colors duration-300 transform hover:scale-110 ${o==="dark"?"":"text-gray-600 hover:text-pink-700"}`,"aria-label":"Instagram Profile",children:z.jsx("svg",{className:"w-8 h-8",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:z.jsx("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.358-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"})})})]})]}),z.jsx("div",{className:"w-full lg:w-1/2 flex items-center justify-center mb-8 lg:mb-0",children:z.jsxs("div",{className:"Hero_Orbit relative flex items-center justify-center w-[360px] lg:w-[500px] aspect-square mx-auto",children:[z.jsx("div",{className:"Spring_Up flex items-center justify-center w-1/2 aspect-square rounded-full z-10 overflow-hidden border-4 border-purple-500 shadow-2xl",children:z.jsx("img",{src:"https://placehold.co/192x192/4A00B7/FFFFFF?text=C.K.B",alt:"C.K.BHALAJI",className:"object-cover w-full h-full",width:250,height:180,loading:"eager"})}),z.jsx("div",{className:"Spring_Up Hero_Trail Trail1",children:z.jsx("span",{className:"Orbit_Dot"})}),z.jsx("div",{className:"Spring_Up Hero_Trail Trail2",children:z.jsx("span",{className:"Orbit_Dot_Wrapper rotate-140",children:z.jsx("span",{className:"Orbit_Dot"})})}),z.jsx("div",{className:"Spring_Up Hero_Trail Trail3",children:z.jsx("span",{className:"Orbit_Dot"})}),z.jsx("div",{className:"Spring_Up Hero_Trail Trail4",children:z.jsx("span",{className:"Orbit_Dot_Wrapper rotate-140",children:z.jsx("span",{className:"Orbit_Dot"})})})]})})]})},bs=o=>{const[e,i]=gi.useState(!1),r=gi.useRef(null);return gi.useEffect(()=>{const l=new IntersectionObserver(([u])=>{u.isIntersecting&&(i(!0),l.unobserve(u.target))},o);return r.current&&l.observe(r.current),()=>{r.current&&l.unobserve(r.current)}},[o]),[r,e]},Gx=()=>{const{theme:o}=Ai(),[e,i]=bs({threshold:.1});return z.jsxs("div",{ref:e,className:"max-w-4xl mx-auto p-4 text-center w-full",children:[" ",i?z.jsxs(z.Fragment,{children:[z.jsx("h2",{className:`text-4xl font-display text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-6 ${o==="dark"?"":"filter brightness-75"}`,children:"About Me"}),z.jsxs("div",{className:`text-lg ${o==="dark"?"text-gray-300":"text-gray-700"} leading-relaxed space-y-4`,children:[z.jsxs("p",{children:["Hello! I'm ",z.jsx("span",{className:"font-semibold text-purple-300",children:"C.K.BHALAJI"}),", a B.E. Computer Science graduate (2025) passionate about software development and web technologies. I am skilled in full-stack development, debugging, and problem-solving."]}),z.jsx("p",{children:"I have hands-on experience with the Software Development Life Cycle (SDLC) and thrive in collaborative team environments. My goal is to apply my technical skills in Java, ReactJS, and SQL to contribute to impactful projects and continuously expand my knowledge."}),z.jsx("p",{children:"My journey into the world of code began with a fascination for how technology can solve real-world problems and create engaging user experiences. I am eager to learn new technologies and constantly push the boundaries of what's possible in the tech landscape."})]})]}):z.jsx("div",{className:"h-64 flex items-center justify-center w-full",children:z.jsx("p",{className:`${o==="dark"?"text-gray-400":"text-gray-600"}`,children:"Loading About Me..."})})]})},Vx=()=>{const{theme:o}=Ai(),[e,i]=bs({threshold:.1}),r=[{degree:"B.E. - Computer Science and Engineering",institution:"Velammal College of Engineering & Technology, Madurai",year:"2025 | CGPA: 8.26",description:"Focused on Computer Science and Engineering curriculum, building a strong foundation in software development and related fields."},{degree:"Higher Secondary (HSC)",institution:"Point Calimere International School",year:"2021 | Mark: 89%",description:"Completed Higher Secondary education with a strong academic performance."},{degree:"SSLC (Secondary School)",institution:"Point Calimere International School",year:"2019 | Mark: 79.6%",description:"Completed Secondary School education."}];return z.jsxs("div",{ref:e,className:"max-w-4xl mx-auto p-4 text-center w-full",children:[" ",i?z.jsxs(z.Fragment,{children:[z.jsx("h2",{className:`text-4xl font-display text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 mb-6 ${o==="dark"?"":"filter brightness-75"}`,children:"Education"}),z.jsx("div",{className:"space-y-8",children:r.map((l,u)=>z.jsxs("div",{className:`${o==="dark"?"bg-gray-900 border-gray-700 hover:border-purple-500":"bg-gray-100 border-gray-300 hover:border-blue-500"} p-6 rounded-xl shadow-lg border transition-all duration-300 text-left`,children:[z.jsx("h3",{className:`text-2xl font-display font-semibold ${o==="dark"?"text-purple-400":"text-blue-700"} mb-2`,children:l.degree}),z.jsx("p",{className:`text-lg ${o==="dark"?"text-gray-300":"text-gray-700"} mb-1`,children:l.institution}),z.jsx("p",{className:`text-md ${o==="dark"?"text-gray-400":"text-gray-600"} mb-3`,children:l.year}),z.jsx("p",{className:`${o==="dark"?"text-gray-300":"text-gray-700"} leading-relaxed`,children:l.description})]},u))})]}):z.jsx("div",{className:"h-64 flex items-center justify-center w-full",children:z.jsx("p",{className:`${o==="dark"?"text-gray-400":"text-gray-600"}`,children:"Loading Education..."})})]})},kx="/ckbhalaji-portfolio/assets/java-BUBFS9XJ.png",Xx="/ckbhalaji-portfolio/assets/c-D0P7TIyF.png",Wx="/ckbhalaji-portfolio/assets/python-Dwdkp5Zf.png",jx="/ckbhalaji-portfolio/assets/html-DyxXiMZh.png",qx="/ckbhalaji-portfolio/assets/css-CFoXc7Ul.png",Yx="/ckbhalaji-portfolio/assets/js-D9pEbtRj.png",Zx="/ckbhalaji-portfolio/assets/react-BCQ3_bli.png",Kx="/ckbhalaji-portfolio/assets/TailwindCSS-Biu2-V6X.png",Qx="/ckbhalaji-portfolio/assets/mysql-BlTX5RNq.png",Jx="/ckbhalaji-portfolio/assets/FastAPI-BKfCpO4D.png",$x="/ckbhalaji-portfolio/assets/PostgresSQL-IlMO64UL.png",ty="/ckbhalaji-portfolio/assets/SQLAlchemy-DLZBhX5a.png",ey="/ckbhalaji-portfolio/assets/Git-DEM3wzRi.png",ny="/ckbhalaji-portfolio/assets/GitHub-BLfHCd-g.png",iy="/ckbhalaji-portfolio/assets/Visual%20Studio%20Code-DVler58q.png",ay="/ckbhalaji-portfolio/assets/Postman-CqkmMONA.png",ry="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAS0AAACoCAMAAACCN0gDAAAAdVBMVEUAAAD////19fXp6emmpqYxMTEhISFcXFzt7e3Nzc3k5OSampqBgYHV1dXY2Nhvb29WVlb5+flycnK7u7tGRkbBwcFBQUHe3t5kZGSQkJCurq6FhYWenp48PDzPz882NjYnJycaGhpNTU0rKysWFhaDg4MQEBACCFX5AAAFfklEQVR4nO2a6ZaqOhBGDc4DKiKiONvn9vs/4m2qkpBAabtsuoW1vv0LIYRkk6ES7HQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyBlsd4fZ7d2laAfLUBHB4d0laQGxskTLdxem6cyVy+rdxWk2ifJZv7tATWZRkqUm7y5Rk+mWbanF28qS5o+/vO3x33OsyFInKV068UiTwy/MBzQ1D+rPtzZ2VVtKShdVkwW7ugvTeFtx1YK6COkCIZ2aSCl/QONtTQQJZyGdaEtF11oL03RbZ8mBpIBspXPDyLSuWkvTdFs9yZaUkGz9c05MOe2+ztI03ZYweKuxlJBs9d0za0rcrbM0DbdVjuOJrZSyaktPp9Ig9yrNtjWTZM3FpIKtDiWvc13ZaFsrSVZZiUayRUP9tPg9nGZJnK0uTpL++ot81rhN4yTuCcuE9S5LkmxHq9OKrfMsi5Ns6gXCm68cN3mOvTjO/m7dIQWmSt3ZEvzeVs+OgWGRR5b/XnS2dn0V+1ns7YXRrGJrYcObwHkneUmCzlXvnGxer/83nN3XdgwlVxO5ZT3oif/xsd+pM5OE5txh5l4bOgXyFqmhb2uQuhcDuzWSv6ORnZ7qDfhcDiozbXo7llyls7v3Cra2dA/XohyJmMGPzpeeZVvesnyTa+tYnq6N5dxW17zqoA4vMnmIFKVJMvYD+PF+QSwfvSfB1qQo7sHUd3zSQX/CaRyLdjVgamgi4yBMTqMiHdsaaFnd09i0Mf30ImmafjWyX2OqJJ7b/aO6XpwTF65ELz/mRhJwp7zxBZ4rja147RRAR7TcDefc3I+2AbItziS+OLnodYO2FdKIdXzNxDOItp780EO2ZgvNaqorF9HFrlOZjo7i+K1rW2YA6FOLSel4T1eK7yZm5BsUP2x0snR+si07Mv4aki0xcBeQV9WsgQYwdwShPkpBLtsq4l3eqaVDqrU7Re4dW+Tf2REie/PivlqXEDKSrWf3qGRbPPJSO3MniK0V0StqyVBd8/ZMC6fIe0Zobd3yA2/FTvr+2RzuT0e1Idl69rGSrdOHc81LHZnK9spvJDGSqTA9766ltUWzhrdg79mXQ7Y+nq/1q9RrKzCBIc1t0dglMu2GKukG3JmpdVy0TYu1Ra117uY4sf5GlTb5O/zY1vC4yTlyRmYMvgnZmtZWNAmNPTE2ZhxSc24u50gRfW7rF8Msy49t2fZPvcG84OFLtk4micPc2JJ2dJXu0q2xZaNTFqRHHWpbUbfEiMb2b9pWaSll2xYdjMpZBjS3ts8W11X/pnErlG+7b4vGrdJWmjK2KPs7kWcLbfXp5pNzTb7tvi2KoPwdiZW1RSWddkRaaIvnNt02KCrwAreFCdHv27pQBt7SdGJtbVRFSWIGzTba4l7DyxvejHA6ztn2zPu2eGwKy5f0PEni3NVNbAORVtrilRz3Fqpb8dcvjjJpAfrAFjtO7BWzj0G2uFMWupLiZytt6X7zmR9uOK+YLAz50wh/mH1gi2MI1eWwbWhDrIF7cZ/n8rHj2Jg7ezttLZ22sTfZBXYPj1vaI1t2fRCOQ2frb+BfLPbF9AZAO23pKIJ3fCp7/Do2eGhrUFpOzU+OreuolKPpsy21daUM9E7B1qv5xAz5D211Pk/uTePSVwz/Y6edc//K1kFVefbLvKra0pOYyWFqfU2KZbRdRN85sbWfKrqLyr/dlsWGflb8qSB/zF+sqq/9Cudnv5lQ4vLJM+Vhf673WRxnM3c3ZZDf9vnoxGVGN1Fj/Kg8ZHGI43jnbVX4zwQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3OF/IQo4XCAylLMAAAAASUVORK5CYII=",sy=()=>{const{theme:o}=Ai(),[e,i]=bs({threshold:.1}),r=[{category:"Frontend",skills:[{name:"HTML",icon:jx,isImage:!0},{name:"CSS",icon:qx,isImage:!0},{name:"JavaScript",icon:Yx,isImage:!0},{name:"ReactJS",icon:Zx,isImage:!0},{name:"Tailwind",icon:Kx,isImage:!0}]},{category:"Backend",skills:[{name:"MySQL",icon:Qx,isImage:!0},{name:"FastAPI",icon:Jx,isImage:!0},{name:"PostgreSQL",icon:$x,isImage:!0},{name:"SQLAlchemy",icon:ty,isImage:!0}]},{category:"Languages",skills:[{name:"Java",icon:kx,isImage:!0},{name:"C",icon:Xx,isImage:!0},{name:"Python",icon:Wx,isImage:!0}]},{category:"Tools/Other",skills:[{name:"Git",icon:ey,isImage:!0},{name:"GitHub",icon:ny,isImage:!0},{name:"VS Code",icon:iy,isImage:!0},{name:"Postman",icon:ay,isImage:!0},{name:"Render",icon:ry,isImage:!0}]}];return z.jsxs("div",{ref:e,className:"max-w-6xl mx-auto p-4 text-center w-full",children:[" ",i?z.jsxs(z.Fragment,{children:[z.jsx("h2",{className:`text-4xl font-display text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-lime-500 mb-8 ${o==="dark"?"":"filter brightness-75"}`,children:"Technical Skills"}),z.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[" ",r.map((l,u)=>z.jsxs("div",{className:`${o==="dark"?"bg-transparent border-gray-700":"bg-transparent border-gray-300"} p-6 rounded-xl shadow-lg border transition-all duration-300 text-left`,children:[" ",z.jsx("h3",{className:`text-2xl font-display font-semibold ${o==="dark"?"text-lime-400":"text-green-700"} mb-4 text-center`,children:l.category}),z.jsx("div",{className:"grid grid-cols-3 sm:grid-cols-4 gap-4",children:l.skills.map((d,h)=>z.jsxs("div",{className:`flex flex-col items-center justify-center p-3 rounded-lg shadow-md
                 ${o==="dark"?"bg-gray-700 text-gray-200 hover:bg-green-600 hover:text-white":"bg-gray-200 text-gray-700 hover:bg-green-300 hover:text-gray-900"}
                 transition-all duration-300 transform hover:scale-105`,children:[d.isImage?z.jsx("img",{src:d.icon,alt:d.name,className:"w-8 h-8 mb-1 object-contain"}):z.jsx("span",{className:"text-3xl mb-1",children:d.icon}),z.jsx("span",{className:"text-xs font-medium text-center",children:d.name})]},h))})]},u))]})]}):z.jsx("div",{className:"h-64 flex items-center justify-center w-full",children:z.jsx("p",{className:`${o==="dark"?"text-gray-400":"text-gray-600"}`,children:"Loading Skills..."})})]})},oy=()=>{const{theme:o}=Ai(),[e,i]=bs({threshold:.1}),r=[{title:"Lorry Link – Logistics Web Application",description:"A full-stack logistics platform with role-based dashboards for Admin, Driver, and Goods Owner.",details:"Built a full-stack logistics platform with role-based dashboards for Admin, Driver, and Goods Owner. Designed a React Vite frontend with theme switching, protected routing, and responsive UI. Developed RESTful APIs using FastAPI and PostgreSQL for authentication, bidding, load and dispute management.",image:"https://placehold.co/400x250/0F172A/E0E7FF?text=Lorry+Link",githubLink:"https://github.com/CKBhalaji/Lorry_Link.git",deployedLink:"https://lorry-application-frontend.onrender.com",tags:["React (Vite)","FastAPI","PostgreSQL","Full-stack"]},{title:"Job Portal Web Application",description:"Developed a responsive frontend for a job portal enabling user registration, job search, and online application submission.",details:"Developed a responsive frontend for a job portal enabling user registration, job search, and online application submission. Integrated recruiter features including job posting, dynamic job listing updates, and reusable UI components. Implemented client-side routing and form validation for improved UX and navigation flow.",image:"https://placehold.co/400x250/0F172A/E0E7FF?text=Job+Portal",githubLink:"https://github.com/CKBhalaji/Student_connect.git",deployedLink:"https://ckbhalaji.github.io/Student_connect/",tags:["ReactJS","HTML","CSS","JavaScript","Frontend"]},{title:"Real-Time Traffic Sign Detection (YOLOv8)",description:"Built and trained a custom deep learning model using YOLOv8 for real-time traffic sign detection and classification.",details:"Built and trained a custom deep learning model using YOLOv8 for real-time traffic sign detection and classification. Enhanced road safety by accurately recognizing regulatory and warning signs in live video feeds. Optimized performance through dataset preprocessing, label balancing, and OpenCV integration for frame processing. Published: IEEE Xplore – DOI: 10.1109/ICISC60378.2024.10860011",image:"https://placehold.co/400x250/0F172A/E0E7FF?text=Traffic+Sign+Detection",githubLink:"https://github.com/CKBhalaji/Real-Time-Traffic-Sign-Detection-and-Classification-Using-YOLOv8.git",deployedLink:"https://github.com/CKBhalaji/Real-Time-Traffic-Sign-Detection-and-Classification-Using-YOLOv8.git",tags:["Python","YOLOv8","OpenCV","Deep Learning","AI"]},{title:"Expense Tracker Web Application (Internship)",description:"Developed a Basic Expense Tracker web application during MERN Stack Development Internship.",details:"Gained practical experience in MERN stack development, focusing on responsive front-end layout using Flexbox and component-based design. Collaborated in a team to develop a Basic Expense Tracker web application, implementing core functionality using MongoDB, Express.js, React, and Node.js. Applied debugging and testing practices to ensure application responsiveness across different devices.",image:"https://placehold.co/400x250/0F172A/E0E7FF?text=Expense+Tracker",githubLink:"https://github.com/CKBhalaji/MERN-Internship/tree/main/Expence-tracker",deployedLink:"https://github.com/CKBhalaji/MERN-Internship/tree/main/Expence-tracker",tags:["MERN Stack","React","Node.js","MongoDB","Express.js"]},{title:"Weather API",description:"Developed a Basic WaaterAPI using the simple API calls.",details:"An weather API to fetch current weather information for a given location and display it to users. Provides real-time weather updates and supports location-based searches. ",image:"https://placehold.co/400x250/0F172A/E0E7FF?text=Weather+API",githubLink:"https://github.com/CKBhalaji/Weather_API.git",deployedLink:"https://ckbhalaji.github.io/Weather_API/",tags:["React","Node.js","Weater API"]},{title:"Simons game",description:"Developed a Simple memorypower game called Simons game.",details:"An implementation of the classic Simon game where players need to replicate a sequence of colors and sounds. Features increasing difficulty levels and a responsive user interface.",image:"https://placehold.co/400x250/0F172A/E0E7FF?text=Simons+Game",githubLink:"https://github.com/CKBhalaji/Simon-s_Game.git",deployedLink:"https://ckbhalaji.github.io/Simon-s_Game/",tags:["HTML","CSS","Javascript"]}],[l,u]=gi.useState(null);return z.jsxs("div",{ref:e,className:"max-w-6xl mx-auto p-4 text-center w-full",children:[" ",i?z.jsxs(z.Fragment,{children:[z.jsx("h2",{className:`text-4xl font-display text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-600 mb-8 ${o==="dark"?"":"filter brightness-75"}`,children:"My Projects"}),z.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:r.map((d,h)=>z.jsxs("div",{className:`relative ${o==="dark"?"bg-gray-900 border-gray-700":"bg-gray-100 border-gray-300"} rounded-xl shadow-lg border overflow-hidden
                            transform transition-all duration-500 ease-in-out
                            ${l===h?"scale-105 shadow-xl shadow-purple-500/30":""}`,onMouseEnter:()=>u(h),onMouseLeave:()=>u(null),children:[z.jsx("img",{src:d.image,alt:d.title,className:"w-full h-48 object-cover"}),z.jsxs("div",{className:"p-6",children:[z.jsx("h3",{className:`text-2xl font-display font-semibold ${o==="dark"?"text-purple-400":"text-indigo-700"} mb-3`,children:d.title}),z.jsx("p",{className:`${o==="dark"?"text-gray-300":"text-gray-700"} text-md mb-4`,children:d.description}),z.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:d.tags.map((m,p)=>z.jsx("span",{className:`px-3 py-1 ${o==="dark"?"bg-gray-700 text-gray-300":"bg-gray-300 text-gray-800"} text-xs rounded-full`,children:m},p))}),z.jsxs("div",{className:`absolute inset-0 ${o==="dark"?"bg-gray-950 bg-opacity-95":"bg-white bg-opacity-95"} p-6 rounded-xl flex flex-col justify-center items-center text-center
                                transition-all duration-500 ease-in-out
                                ${l===h?"opacity-100 translate-y-0":"opacity-0 translate-y-full"}`,children:[z.jsx("h3",{className:`text-2xl font-display font-semibold ${o==="dark"?"text-purple-400":"text-indigo-700"} mb-3`,children:d.title}),z.jsx("p",{className:`${o==="dark"?"text-gray-300":"text-gray-700"} text-sm mb-6 max-h-40 overflow-y-auto custom-scrollbar`,children:d.details}),z.jsxs("div",{className:"flex space-x-4",children:[z.jsx("a",{href:d.deployedLink,target:"_blank",rel:"noopener noreferrer",className:`px-5 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg shadow-lg\r
                                   hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 Projects_Preview`,children:"View Live"}),z.jsx("a",{href:d.githubLink,target:"_blank",rel:"noopener noreferrer",className:`px-5 py-2 rounded-lg shadow-lg
                                   ${o==="dark"?"bg-gray-700 text-gray-200 hover:bg-gray-600 hover:text-white":"bg-gray-300 text-gray-800 hover:bg-gray-400 hover:text-gray-900"}
                                   transition-all duration-300 transform hover:scale-105 Projects_Link`,children:"GitHub"})]})]})]})]},h))})]}):z.jsx("div",{className:"h-64 flex items-center justify-center w-full",children:z.jsx("p",{className:`${o==="dark"?"text-gray-400":"text-gray-600"}`,children:"Loading Projects..."})})]})},ly=()=>{const{theme:o}=Ai(),[e,i]=bs({threshold:.1}),r=[{title:"NPTEL: Privacy and Security in Online Social Media",issuer:"NPTEL",date:"Jul-Oct-2023",link:"https://drive.google.com/file/d/1PNXOPMMgNue4VnMC-ySqshv1juJNbgJG/view?usp=drive_link",image:"https://placehold.co/400x250/0F172A/E0E7FF?text=NPTEL+Privacy+Security"},{title:"Google UX Designer Professional Certificate",issuer:"Coursera (Google)",date:"Oct 20, 2023",link:"https://drive.google.com/file/d/1mgog4uv8FtvFu4Pvlx_kgRheUzKHGYdU/view?usp=drive_link",image:"https://placehold.co/400x250/0F172A/E0E7FF?text=Google+UX+Design"},{title:"NPTEL: Cloud Computing",issuer:"NPTEL",date:"Date of Completion",link:"https://drive.google.com/file/d/1upmUwPFxGDLCWDswlYq1-ChoA8K9tsDG/view?usp=drive_link",image:"https://placehold.co/400x250/0F172A/E0E7FF?text=NPTEL+Cloud+Computing"},{title:"Intern Certificate",issuer:"Reccsar Private LImited",date:"Date of Completion",link:"https://drive.google.com/file/d/1fs3jAkF6XCx8Od_KsIdSzmvHk0jtChj7/view?usp=drive_link",image:"https://placehold.co/400x250/0F172A/E0E7FF?text=Intern+Certificate"},{title:"Intern Certificate",issuer:"Reccsar Private LImited",date:"Date of Completion",link:"https://drive.google.com/file/d/1gpUZxF67BLPk4PNja4_QrqYa9JJ_fEsJ/view?usp=drive_link",image:"https://placehold.co/400x250/0F172A/E0E7FF?text=FastAPI+Essentials+for+Python+Developers"},{title:"Intern Certificate",issuer:"Reccsar Private LImited",date:"Date of Completion",link:"https://drive.google.com/file/d/1-2gisr57IqZH8YRzbmLIaUulOdUYaijK/view?usp=drive_link",image:"https://placehold.co/400x250/0F172A/E0E7FF?text=Traffic+Sign+Categorization"}];return z.jsxs("div",{ref:e,className:"max-w-6xl mx-auto p-4 text-center w-full",children:[" ",i?z.jsxs(z.Fragment,{children:[z.jsx("h2",{className:`text-4xl font-display text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-500 mb-8 ${o==="dark"?"":"filter brightness-75"}`,children:"Certificates"}),z.jsx("p",{className:`text-center ${o==="dark"?"text-gray-400":"text-gray-600"} mb-8`}),z.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:r.map((l,u)=>z.jsxs("div",{className:`relative ${o==="dark"?"bg-gray-900 border-gray-700 hover:border-orange-500":"bg-gray-100 border-gray-300 hover:border-yellow-500"} p-6 rounded-xl shadow-lg border transition-all duration-300 flex flex-col items-center text-center h-full`,style:{minHeight:"420px"},children:[z.jsx("img",{src:l.image,alt:l.title,className:"w-full h-48 object-cover rounded-md mb-4"})," ",z.jsx("h3",{className:`text-2xl font-display font-semibold ${o==="dark"?"text-orange-400":"text-amber-700"} mb-2`,children:l.title}),z.jsx("p",{className:`${o==="dark"?"text-gray-300":"text-gray-700"} text-md`,children:l.issuer}),z.jsx("p",{className:`${o==="dark"?"text-gray-400":"text-gray-600"} text-sm mb-4`,children:l.date}),z.jsx("a",{href:l.link,target:"_blank",rel:"noopener noreferrer",className:`px-4 py-2 bg-gradient-to-r from-orange-600 to-yellow-500 text-white rounded-lg shadow-lg\r
                             hover:from-orange-700 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 mt-auto`,children:"View Certificate"})]},u))})]}):z.jsx("div",{className:"h-64 flex items-center justify-center w-full",children:z.jsx("p",{className:`${o==="dark"?"text-gray-400":"text-gray-600"}`,children:"Loading Certificates..."})})]})},cy=()=>{const{theme:o}=Ai(),[e,i]=bs({threshold:.1}),[r,l]=gi.useState({name:"",email:"",message:""}),[u,d]=gi.useState(""),h=p=>{const{name:g,value:v}=p.target;l(x=>({...x,[g]:v}))},m=p=>{p.preventDefault();const{name:g,email:v,message:x}=r,M=`Message from ${g} (${v})`,A=x,C=`mailto:bhalaji2003@gmail.com?subject=${encodeURIComponent(M)}&body=${encodeURIComponent(A)}`;window.location.href=C};return z.jsxs("div",{ref:e,className:"max-w-4xl mx-auto p-4 text-center w-full",children:[" ",i?z.jsxs(z.Fragment,{children:[z.jsx("h2",{className:`text-4xl font-display text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-8 ${o==="dark"?"":"filter brightness-75"}`,children:"Get in Touch"}),z.jsxs("div",{className:"max-w-2xl mx-auto",children:[z.jsxs("form",{onSubmit:m,className:"space-y-6",children:[z.jsxs("div",{children:[z.jsx("label",{htmlFor:"name",className:`block ${o==="dark"?"text-gray-300":"text-gray-700"} text-lg font-medium mb-2`,children:"Name"}),z.jsx("input",{type:"text",id:"name",name:"name",value:r.name,onChange:h,className:`w-full px-4 py-3 ${o==="dark"?"bg-gray-700 border-gray-600 text-gray-100":"bg-gray-100 border-gray-300 text-gray-900"} rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300`,placeholder:"Your Name",required:!0})]}),z.jsxs("div",{children:[z.jsx("label",{htmlFor:"email",className:`block ${o==="dark"?"text-gray-300":"text-gray-700"} text-lg font-medium mb-2`,children:"Email"}),z.jsx("input",{type:"email",id:"email",name:"email",value:r.email,onChange:h,className:`w-full px-4 py-3 ${o==="dark"?"bg-gray-700 border-gray-600 text-gray-100":"bg-gray-100 border-gray-300 text-gray-900"} rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300`,placeholder:"your.email@example.com",required:!0})]}),z.jsxs("div",{children:[z.jsx("label",{htmlFor:"message",className:`block ${o==="dark"?"text-gray-300":"text-gray-700"} text-lg font-medium mb-2`,children:"Message"}),z.jsx("textarea",{id:"message",name:"message",value:r.message,onChange:h,rows:"6",className:`w-full px-4 py-3 ${o==="dark"?"bg-gray-700 border-gray-600 text-gray-100":"bg-gray-100 border-gray-300 text-gray-900"} rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-y`,placeholder:"Your message...",required:!0})]}),z.jsx("button",{type:"submit",className:`w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg shadow-lg\r
                           hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105`,children:"Send Message"})]}),z.jsxs("div",{className:`mt-10 text-center ${o==="dark"?"text-gray-400":"text-gray-600"}`,children:[z.jsx("p",{className:"text-lg mb-2",children:"You can also reach me directly at:"}),z.jsx("a",{href:"mailto:bhalaji2003@gmail.com",className:`hover:underline text-xl font-semibold ${o==="dark"?"text-purple-400":"text-blue-700"}`,children:"bhalaji2003@gmail.com"}),z.jsxs("div",{className:"flex justify-center space-x-6 mt-6",children:[z.jsx("a",{href:"https://linkedin.com/in/bhalaji-karunanithi",target:"_blank",rel:"noopener noreferrer",className:`text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110 ${o==="dark"?"":"text-gray-600 hover:text-blue-600"}`,"aria-label":"LinkedIn Profile",children:z.jsx("svg",{className:"w-8 h-8",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:z.jsx("path",{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"})})}),z.jsx("a",{href:"https://github.com/CKBhalaji",target:"_blank",rel:"noopener noreferrer",className:`text-gray-400 hover:text-gray-100 transition-colors duration-300 transform hover:scale-110 ${o==="dark"?"":"text-gray-600 hover:text-gray-900"}`,"aria-label":"GitHub Profile",children:z.jsx("svg",{className:"w-8 h-8",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:z.jsx("path",{fillRule:"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.475.087.687-.206.687-.458 0-.225-.007-.975-.011-1.912-2.782.604-3.369-1.34-3.369-1.34-.454-1.15-.11-1.458-.11-1.458.387-.272.029-.266.029-.266.43.029.657.22.657.22.383.657 1.004.466 1.249.356.038-.276.149-.466.272-.572-1.05-.11-2.155-.52-2.155-2.336 0-.517.18-.94.474-1.272-.047-.11-.205-.602.045-1.253 0 0 .38-.127 1.249.462.36-.1.737-.15 1.113-.15 0-.007.003-.014.003-.022.376 0 .753.05 1.113.15.869-.589 1.249-.462 1.249-.462.25 0 .092.652.045 1.253.294.332.474.755.474 1.272 0 1.821-1.107 2.227-2.159 2.332.15.128.28.372.28.75 0 1.572-.011 2.846-.011 3.229 0 .254.209.548.694.456C21.133 20.19 24 16.435 24 12.017 24 6.484 19.523 2 14 2h-2z",clipRule:"evenodd"})})}),z.jsx("a",{href:"https://discordapp.com/users/bhalajick",target:"_blank",rel:"noopener noreferrer",className:`text-gray-400 hover:text-indigo-500 transition-colors duration-300 transform hover:scale-110 ${o==="dark"?"":"text-gray-600 hover:text-indigo-700"}`,"aria-label":"Discord Profile",children:z.jsx("svg",{className:"w-8 h-8",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:z.jsx("path",{d:"M20.317 4.3698a19.7913 19.7913 0 00-4.9821-1.54.0566.0566 0 00-.0639.0566c-.1838 1.2318-.4928 2.491-1.0439 3.6364-2.0485-1.104-4.044-1.104-6.0926 0-1.0439-1.1454-1.838-2.4046-2.0218-3.6364a.0566.0566 0 00-.0639-.0566A19.7913 19.7913 0 003.683 4.3698a.0566.0566 0 00-.0224.0566C3.6606 11.4438 5.1449 15.97 8.299 18.35a.0566.0566 0 00.0639.011c.9616-.4338 1.838-1.0439 2.6248-1.7442a.0566.0566 0 00-.011-.0894c-.4928-.3225-1.011-.6772-1.4968-1.0439a.0566.0566 0 01.011-.0894c.4817-.2897.9616-.5794 1.4474-.8691a.0566.0566 0 01.0639 0c.4858.2897.9657.5794 1.4474.8691a.0566.0566 0 01.011.0894c-.4858.3667-.9937.7214-1.4968 1.0439a.0566.0566 0 00-.011.0894c.7868.7003 1.6632 1.3104 2.6248 1.7442a.0566.0566 0 00.0639-.011c3.1541-2.38 4.6384-6.9062 4.616-13.9236a.0566.0566 0 00-.0224-.0566zM8.0209 13.141c-1.1153 0-2.0218-1.011-2.0218-2.2458s.9065-2.2458 2.0218-2.2458c1.1153 0 2.0218 1.011 2.0218 2.2458s-.9065 2.2458-2.0218 2.2458zm7.9582 0c-1.1153 0-2.0218-1.011-2.0218-2.2458s.9065-2.2458 2.0218-2.2458c1.1153 0 2.0218 1.011 2.0218 2.2458s-.9065 2.2458-2.0218 2.2458z"})})}),z.jsx("a",{href:"https://www.instagram.com/c.k.bhalaji/",target:"_blank",rel:"noopener noreferrer",className:`text-gray-400 hover:text-pink-500 transition-colors duration-300 transform hover:scale-110 ${o==="dark"?"":"text-gray-600 hover:text-pink-700"}`,"aria-label":"Instagram Profile",children:z.jsx("svg",{className:"w-8 h-8",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:z.jsx("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.358-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"})})})]})]})]})]}):z.jsx("div",{className:"h-64 flex items-center justify-center w-full",children:z.jsx("p",{className:`${o==="dark"?"text-gray-400":"text-gray-600"}`,children:"Loading Contact..."})})]})},uy=()=>{Sr.useEffect(()=>{document.body.classList.add("Cursor-Main");const o=document.createElement("div");o.id="cursor";const e=document.createElement("span");e.id="cursorView",o.appendChild(e),document.body.appendChild(o);const i=document.createElement("div");i.id="cursorDot",document.body.appendChild(i);const r=window.innerWidth/2,l=window.innerHeight/2;o.style.left=`${r}px`,o.style.top=`${l}px`,i.style.left=`${r}px`,i.style.top=`${l}px`;const u=m=>{if(!o||!i)return;const p=m.clientX,g=m.clientY;o.animate({left:`${p}px`,top:`${g}px`},{duration:500,easing:"ease-in-out",fill:"forwards"}),i.animate({left:`${p}px`,top:`${g}px`},{duration:100,easing:"ease-out",fill:"forwards"})},d=()=>{if(!o)return;const m=document.createElement("span");m.classList.add("absolute","w-[200%]","aspect-square","rounded-full","bg-[var(--orbitDotColor)]","opacity-0","animate-ripple"),o.appendChild(m),setTimeout(()=>{o&&o.removeChild(m)},1e3)};document.addEventListener("mousemove",u),document.addEventListener("mousedown",d);const h=document.createElement("style");return h.innerHTML=`
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;500;700&display=swap');
      :root {
        --cursorColor: #8B5CF6;
        --cursorColorAlt: rgba(139, 92, 246, 0.5);
        --base: #1a1a1a;
        --dotColor: #EC4899;
        --SkillGradient: linear-gradient(45deg, #EC4899, #8B5CF6);
      }
      #cursor {
        position: fixed;
        opacity: 1;
        width: 20px;
        height: 20px;
        border-radius: 100px;
        background-color: var(--cursorColor);
        box-shadow: 0 0 15px 0 var(--cursorColorAlt);
        transition: all 0.2s ease-in-out;
        pointer-events: none;
        transform: translate(-50%, -50%);
        will-change: transform;
        backface-visibility: hidden;
        z-index: 9999;
        /* Debug: */
        /* background: red !important; border: 2px solid yellow !important; */
      }
      #cursor::before {
        content: "";
        width: 0;
        aspect-ratio: 1;
        inset: 0;
        margin: auto;
        border-radius: 50%;
        position: absolute;
        transition: all 0.1s ease-in-out;
        background-color: var(--base);
      }
      #cursorView {
        visibility: hidden;
        width: 100%;
        height: 100%;
        font-size: 0;
        letter-spacing: 1px;
        background: var(--SkillGradient);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        text-transform: uppercase;
        font-weight: bold;
      }
      #cursorDot {
        position: fixed;
        opacity: 1;
        width: 10px;
        height: 10px;
        border-radius: 100px;
        pointer-events: none;
        transition: all 10ms ease-out;
        background-color: var(--dotColor);
        transform: translate(-50%, -50%);
        backface-visibility: hidden;
        z-index: 9999;
        /* Debug: */
        /* background: blue !important; border: 2px solid lime !important; */
      }

      /* Apply cursor styles directly to IDs, now that Cursor-Main is on body */
      #cursor {
          position: fixed;
          opacity: 1; /* Always visible */
          width: 20px;
          height: 20px;
          border-radius: 100px;
          background-color: var(--cursorColor);
          box-shadow: 0 0 15px 0 var(--cursorColorAlt);
          transition: all 0.2s ease-in-out;
          pointer-events: none;
          transform: translate(-50%, -50%); /* Center the cursor */
          will-change: transform;
          backface-visibility: hidden;
          z-index: 9999; /* Ensure it's on top */
      }

      #cursor::before {
          content: "";
          width: 0;
          aspect-ratio: 1;
          inset: 0;
          margin: auto;
          border-radius: 50%;
          position: absolute;
          transition: all 0.1s ease-in-out;
          background-color: var(--base);
      }

      #cursorView {
          visibility: hidden;
          width: 100%;
          height: 100%;
          font-size: 0;
          letter-spacing: 1px;
          background: var(--SkillGradient);
          border-radius: 50%;
          display: flex; /* Added for centering text */
          align-items: center; /* Added for centering text */
          justify-content: center; /* Added for centering text */
          color: white; /* Text color for cursor view */
          text-transform: uppercase;
          font-weight: bold;
      }


      #cursorDot {
          position: fixed;
          opacity: 1; /* Always visible */
          width: 10px;
          height: 10px;
          border-radius: 100px;
          pointer-events: none;
          transition: all 10ms ease-out;
          background-color: var(--dotColor);
          transform: translate(-50%, -50%); /* Center the dot */
          backface-visibility: hidden;
          z-index: 9999;
      }

      /* Hover effects (now targeting IDs directly or via body.Cursor-Main) */
      body.Cursor-Main :has(a:hover, button:hover) #cursor {
          width: 4em;
          height: 4em;
          background: none;
          outline: 2px solid var(--cursorColor);
      }

      body.Cursor-Main :has(a:hover, button:hover) #cursor span {
          width: 100% !important;
      }

      body.Cursor-Main :has(a:hover, button:hover) #cursor::before {
          content: "";
          width: calc(100% - 10%);
          aspect-ratio: 1;
          inset: 0;
          margin: auto;
          border-radius: 50%;
          position: absolute;
          background-color: transparent;
      }

      body.Cursor-Main :has(.Projects_Link:hover) #cursor {
          width: 3em;
          height: 3em;
      }

      body.Cursor-Main :has(#emailCopyBtn:hover) #cursor,
      body.Cursor-Main :has(#passCopyBtn:hover) #cursor {
          width: 3em;
          height: 3em;
      }

      body.Cursor-Main :has(.Projects_Link.Misc-Link:hover) #cursor {
          width: 5em;
          height: 5em;
      }

      body.Cursor-Main :has(.Projects_Link:hover) #cursorView {
          visibility: hidden !important;
      }

      body.Cursor-Main :has(.Projects_Link:hover) #cursorDot {
          visibility: visible !important;
      }

      body.Cursor-Main :has(.Projects-MiscInfo:hover) #cursor,
      body.Cursor-Main :has(.Projects_Preview:hover) #cursor {
          width: 5em;
          height: 5em;
          background: none;
          outline: 2px solid var(--cursorColor);
      }

      body.Cursor-Main :has(.Projects-MiscInfo:hover) #cursorView,
      body.Cursor-Main :has(.Projects_Preview:hover) #cursorView {
          visibility: visible !important;
          font-size: 1.2em;
          padding-bottom: 1.15em;
      }

      body.Cursor-Main :has(.Projects-MiscInfo:hover) #cursorDot,
      body.Cursor-Main :has(.Projects_Preview:hover) #cursorDot {
          visibility: hidden !important;
      }

      /* Font Families */
      .font-inter { font-family: 'Inter', sans-serif; }
      .font-display { font-family: 'Playfair Display', serif; }

      /* Basic animations */
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-fade-in { animation: fadeIn 1s ease-out forwards; }
      .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
      .delay-100 { animation-delay: 0.1s; }
      .delay-200 { animation-delay: 0.2s; }
      .delay-300 { animation-delay: 0.3s; }

      /* Hero image rotation animations */
      @keyframes spinSlow {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      @keyframes spinReverseSlow {
        from { transform: rotate(0deg); }
        to { transform: rotate(-360deg); }
      }
      .animate-spin-slow { animation: spinSlow 20s linear infinite; }
      .animate-spin-reverse-slow { animation: spinReverseSlow 25s linear infinite; }

      @keyframes spinMedium {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      @keyframes spinFast {
        from { transform: rotate(0deg); }
        to { transform: rotate(-360deg); }
      }
      .animate-spin-medium { animation: spinMedium 15s linear infinite; }
      .animate-spin-fast { animation: spinFast 10s linear infinite; }
    `,document.head.appendChild(h),()=>{document.body.classList.remove("Cursor-Main"),document.removeEventListener("mousemove",u),document.removeEventListener("mousedown",d),document.body.removeChild(o),document.body.removeChild(i),document.head.removeChild(h)}},[])};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sh="178",fy=0,J0=1,dy=2,Yg=1,hy=2,Qi=3,Ga=0,Bn=1,Ji=2,Fa=0,gs=1,gd=2,$0=3,tg=4,py=5,gr=100,my=101,gy=102,_y=103,vy=104,xy=200,yy=201,Sy=202,My=203,_d=204,vd=205,Ey=206,by=207,Ty=208,Ay=209,Ry=210,Cy=211,wy=212,Dy=213,Uy=214,xd=0,yd=1,Sd=2,xs=3,Md=4,Ed=5,bd=6,Td=7,Zg=0,Ny=1,Ly=2,Ha=0,Oy=1,Py=2,zy=3,By=4,Iy=5,Fy=6,Hy=7,Kg=300,ys=301,Ss=302,Ad=303,Rd=304,Rc=306,Cd=1e3,vr=1001,wd=1002,_i=1003,Gy=1004,Yl=1005,Ti=1006,Ff=1007,xr=1008,ia=1009,Qg=1010,Jg=1011,Co=1012,oh=1013,Mr=1014,$i=1015,No=1016,lh=1017,ch=1018,wo=1020,$g=35902,t_=1021,e_=1022,mi=1023,Do=1026,Uo=1027,n_=1028,uh=1029,i_=1030,fh=1031,dh=1033,vc=33776,xc=33777,yc=33778,Sc=33779,Dd=35840,Ud=35841,Nd=35842,Ld=35843,Od=36196,Pd=37492,zd=37496,Bd=37808,Id=37809,Fd=37810,Hd=37811,Gd=37812,Vd=37813,kd=37814,Xd=37815,Wd=37816,jd=37817,qd=37818,Yd=37819,Zd=37820,Kd=37821,Mc=36492,Qd=36494,Jd=36495,a_=36283,$d=36284,th=36285,eh=36286,Vy=3200,ky=3201,Xy=0,Wy=1,Ia="",ri="srgb",Ms="srgb-linear",bc="linear",Be="srgb",es=7680,eg=519,jy=512,qy=513,Yy=514,r_=515,Zy=516,Ky=517,Qy=518,Jy=519,ng=35044,ig="300 es",ta=2e3,Tc=2001;class Ts{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,e);e.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hf=Math.PI/180,nh=180/Math.PI;function Lo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Rn[o&255]+Rn[o>>8&255]+Rn[o>>16&255]+Rn[o>>24&255]+"-"+Rn[e&255]+Rn[e>>8&255]+"-"+Rn[e>>16&15|64]+Rn[e>>24&255]+"-"+Rn[i&63|128]+Rn[i>>8&255]+"-"+Rn[i>>16&255]+Rn[i>>24&255]+Rn[r&255]+Rn[r>>8&255]+Rn[r>>16&255]+Rn[r>>24&255]).toLowerCase()}function xe(o,e,i){return Math.max(e,Math.min(i,o))}function $y(o,e){return(o%e+e)%e}function Gf(o,e,i){return(1-i)*o+i*e}function Mo(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function zn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Ie{constructor(e=0,i=0){Ie.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=xe(this.x,e.x,i.x),this.y=xe(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=xe(this.x,e,i),this.y=xe(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xe(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(xe(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,d=this.y-e.y;return this.x=u*r-d*l+e.x,this.y=u*l+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Oo{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,d,h){let m=r[l+0],p=r[l+1],g=r[l+2],v=r[l+3];const x=u[d+0],M=u[d+1],A=u[d+2],C=u[d+3];if(h===0){e[i+0]=m,e[i+1]=p,e[i+2]=g,e[i+3]=v;return}if(h===1){e[i+0]=x,e[i+1]=M,e[i+2]=A,e[i+3]=C;return}if(v!==C||m!==x||p!==M||g!==A){let S=1-h;const _=m*x+p*M+g*A+v*C,I=_>=0?1:-1,O=1-_*_;if(O>Number.EPSILON){const k=Math.sqrt(O),X=Math.atan2(k,_*I);S=Math.sin(S*X)/k,h=Math.sin(h*X)/k}const U=h*I;if(m=m*S+x*U,p=p*S+M*U,g=g*S+A*U,v=v*S+C*U,S===1-h){const k=1/Math.sqrt(m*m+p*p+g*g+v*v);m*=k,p*=k,g*=k,v*=k}}e[i]=m,e[i+1]=p,e[i+2]=g,e[i+3]=v}static multiplyQuaternionsFlat(e,i,r,l,u,d){const h=r[l],m=r[l+1],p=r[l+2],g=r[l+3],v=u[d],x=u[d+1],M=u[d+2],A=u[d+3];return e[i]=h*A+g*v+m*M-p*x,e[i+1]=m*A+g*x+p*v-h*M,e[i+2]=p*A+g*M+h*x-m*v,e[i+3]=g*A-h*v-m*x-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,d=e._order,h=Math.cos,m=Math.sin,p=h(r/2),g=h(l/2),v=h(u/2),x=m(r/2),M=m(l/2),A=m(u/2);switch(d){case"XYZ":this._x=x*g*v+p*M*A,this._y=p*M*v-x*g*A,this._z=p*g*A+x*M*v,this._w=p*g*v-x*M*A;break;case"YXZ":this._x=x*g*v+p*M*A,this._y=p*M*v-x*g*A,this._z=p*g*A-x*M*v,this._w=p*g*v+x*M*A;break;case"ZXY":this._x=x*g*v-p*M*A,this._y=p*M*v+x*g*A,this._z=p*g*A+x*M*v,this._w=p*g*v-x*M*A;break;case"ZYX":this._x=x*g*v-p*M*A,this._y=p*M*v+x*g*A,this._z=p*g*A-x*M*v,this._w=p*g*v+x*M*A;break;case"YZX":this._x=x*g*v+p*M*A,this._y=p*M*v+x*g*A,this._z=p*g*A-x*M*v,this._w=p*g*v-x*M*A;break;case"XZY":this._x=x*g*v-p*M*A,this._y=p*M*v-x*g*A,this._z=p*g*A+x*M*v,this._w=p*g*v+x*M*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],d=i[1],h=i[5],m=i[9],p=i[2],g=i[6],v=i[10],x=r+h+v;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(g-m)*M,this._y=(u-p)*M,this._z=(d-l)*M}else if(r>h&&r>v){const M=2*Math.sqrt(1+r-h-v);this._w=(g-m)/M,this._x=.25*M,this._y=(l+d)/M,this._z=(u+p)/M}else if(h>v){const M=2*Math.sqrt(1+h-r-v);this._w=(u-p)/M,this._x=(l+d)/M,this._y=.25*M,this._z=(m+g)/M}else{const M=2*Math.sqrt(1+v-r-h);this._w=(d-l)/M,this._x=(u+p)/M,this._y=(m+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xe(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,d=e._w,h=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+d*h+l*p-u*m,this._y=l*g+d*m+u*h-r*p,this._z=u*g+d*p+r*m-l*h,this._w=d*g-r*h-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,u=this._z,d=this._w;let h=d*e._w+r*e._x+l*e._y+u*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=d,this._x=r,this._y=l,this._z=u,this;const m=1-h*h;if(m<=Number.EPSILON){const M=1-i;return this._w=M*d+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,h),v=Math.sin((1-i)*g)/p,x=Math.sin(i*g)/p;return this._w=d*v+this._w*x,this._x=r*v+this._x*x,this._y=l*v+this._y*x,this._z=u*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class st{constructor(e=0,i=0,r=0){st.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(ag.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(ag.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,d=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*d,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,d=e.y,h=e.z,m=e.w,p=2*(d*l-h*r),g=2*(h*i-u*l),v=2*(u*r-d*i);return this.x=i+m*p+d*v-h*g,this.y=r+m*g+h*p-u*v,this.z=l+m*v+u*g-d*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=xe(this.x,e.x,i.x),this.y=xe(this.y,e.y,i.y),this.z=xe(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=xe(this.x,e,i),this.y=xe(this.y,e,i),this.z=xe(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xe(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-u*h,this.y=u*d-r*m,this.z=r*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Vf.copy(this).projectOnVector(e),this.sub(Vf)}reflect(e){return this.sub(Vf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(xe(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vf=new st,ag=new Oo;class se{constructor(e,i,r,l,u,d,h,m,p){se.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,h,m,p)}set(e,i,r,l,u,d,h,m,p){const g=this.elements;return g[0]=e,g[1]=l,g[2]=h,g[3]=i,g[4]=u,g[5]=m,g[6]=r,g[7]=d,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],h=r[3],m=r[6],p=r[1],g=r[4],v=r[7],x=r[2],M=r[5],A=r[8],C=l[0],S=l[3],_=l[6],I=l[1],O=l[4],U=l[7],k=l[2],X=l[5],F=l[8];return u[0]=d*C+h*I+m*k,u[3]=d*S+h*O+m*X,u[6]=d*_+h*U+m*F,u[1]=p*C+g*I+v*k,u[4]=p*S+g*O+v*X,u[7]=p*_+g*U+v*F,u[2]=x*C+M*I+A*k,u[5]=x*S+M*O+A*X,u[8]=x*_+M*U+A*F,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],g=e[8];return i*d*g-i*h*p-r*u*g+r*h*m+l*u*p-l*d*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],g=e[8],v=g*d-h*p,x=h*m-g*u,M=p*u-d*m,A=i*v+r*x+l*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=v*C,e[1]=(l*p-g*r)*C,e[2]=(h*r-l*d)*C,e[3]=x*C,e[4]=(g*i-l*m)*C,e[5]=(l*u-h*i)*C,e[6]=M*C,e[7]=(r*m-p*i)*C,e[8]=(d*i-r*u)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,d,h){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*d+p*h)+d+e,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(kf.makeScale(e,i)),this}rotate(e){return this.premultiply(kf.makeRotation(-e)),this}translate(e,i){return this.premultiply(kf.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const kf=new se;function s_(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Ac(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function tS(){const o=Ac("canvas");return o.style.display="block",o}const rg={};function _s(o){o in rg||(rg[o]=!0,console.warn(o))}function eS(o,e,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}function nS(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function iS(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const sg=new se().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),og=new se().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function aS(){const o={enabled:!0,workingColorSpace:Ms,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===Be&&(l.r=na(l.r),l.g=na(l.g),l.b=na(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Be&&(l.r=vs(l.r),l.g=vs(l.g),l.b=vs(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ia?bc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return _s("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return _s("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Ms]:{primaries:e,whitePoint:r,transfer:bc,toXYZ:sg,fromXYZ:og,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ri},outputColorSpaceConfig:{drawingBufferColorSpace:ri}},[ri]:{primaries:e,whitePoint:r,transfer:Be,toXYZ:sg,fromXYZ:og,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ri}}}),o}const be=aS();function na(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function vs(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let ns;class rS{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{ns===void 0&&(ns=Ac("canvas")),ns.width=e.width,ns.height=e.height;const l=ns.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=ns}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Ac("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=na(u[d]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(na(i[r]/255)*255):i[r]=na(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let sS=0;class hh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sS++}),this.uuid=Lo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push(Xf(l[d].image)):u.push(Xf(l[d]))}else u=Xf(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function Xf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?rS.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let oS=0;const Wf=new st;class In extends Ts{constructor(e=In.DEFAULT_IMAGE,i=In.DEFAULT_MAPPING,r=vr,l=vr,u=Ti,d=xr,h=mi,m=ia,p=In.DEFAULT_ANISOTROPY,g=Ia){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:oS++}),this.uuid=Lo(),this.name="",this.source=new hh(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Wf).x}get height(){return this.source.getSize(Wf).y}get depth(){return this.source.getSize(Wf).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cd:e.x=e.x-Math.floor(e.x);break;case vr:e.x=e.x<0?0:1;break;case wd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cd:e.y=e.y-Math.floor(e.y);break;case vr:e.y=e.y<0?0:1;break;case wd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=Kg;In.DEFAULT_ANISOTROPY=1;class Je{constructor(e=0,i=0,r=0,l=1){Je.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,d=e.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const m=e.elements,p=m[0],g=m[4],v=m[8],x=m[1],M=m[5],A=m[9],C=m[2],S=m[6],_=m[10];if(Math.abs(g-x)<.01&&Math.abs(v-C)<.01&&Math.abs(A-S)<.01){if(Math.abs(g+x)<.1&&Math.abs(v+C)<.1&&Math.abs(A+S)<.1&&Math.abs(p+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(p+1)/2,U=(M+1)/2,k=(_+1)/2,X=(g+x)/4,F=(v+C)/4,Z=(A+S)/4;return O>U&&O>k?O<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(O),l=X/r,u=F/r):U>k?U<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(U),r=X/l,u=Z/l):k<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(k),r=F/u,l=Z/u),this.set(r,l,u,i),this}let I=Math.sqrt((S-A)*(S-A)+(v-C)*(v-C)+(x-g)*(x-g));return Math.abs(I)<.001&&(I=1),this.x=(S-A)/I,this.y=(v-C)/I,this.z=(x-g)/I,this.w=Math.acos((p+M+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=xe(this.x,e.x,i.x),this.y=xe(this.y,e.y,i.y),this.z=xe(this.z,e.z,i.z),this.w=xe(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=xe(this.x,e,i),this.y=xe(this.y,e,i),this.z=xe(this.z,e,i),this.w=xe(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xe(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class lS extends Ts{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ti,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new Je(0,0,e,i),this.scissorTest=!1,this.viewport=new Je(0,0,e,i);const l={width:e,height:i,depth:r.depth},u=new In(l);this.textures=[];const d=r.count;for(let h=0;h<d;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:Ti,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new hh(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Er extends lS{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class o_ extends In{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=_i,this.minFilter=_i,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class cS extends In{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=_i,this.minFilter=_i,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Po{constructor(e=new st(1/0,1/0,1/0),i=new st(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(fi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(fi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=fi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,fi):fi.fromBufferAttribute(u,d),fi.applyMatrix4(e.matrixWorld),this.expandByPoint(fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Zl.copy(r.boundingBox)),Zl.applyMatrix4(e.matrixWorld),this.union(Zl)}const l=e.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fi),fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Eo),Kl.subVectors(this.max,Eo),is.subVectors(e.a,Eo),as.subVectors(e.b,Eo),rs.subVectors(e.c,Eo),Na.subVectors(as,is),La.subVectors(rs,as),lr.subVectors(is,rs);let i=[0,-Na.z,Na.y,0,-La.z,La.y,0,-lr.z,lr.y,Na.z,0,-Na.x,La.z,0,-La.x,lr.z,0,-lr.x,-Na.y,Na.x,0,-La.y,La.x,0,-lr.y,lr.x,0];return!jf(i,is,as,rs,Kl)||(i=[1,0,0,0,1,0,0,0,1],!jf(i,is,as,rs,Kl))?!1:(Ql.crossVectors(Na,La),i=[Ql.x,Ql.y,Ql.z],jf(i,is,as,rs,Kl))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ji),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ji=[new st,new st,new st,new st,new st,new st,new st,new st],fi=new st,Zl=new Po,is=new st,as=new st,rs=new st,Na=new st,La=new st,lr=new st,Eo=new st,Kl=new st,Ql=new st,cr=new st;function jf(o,e,i,r,l){for(let u=0,d=o.length-3;u<=d;u+=3){cr.fromArray(o,u);const h=l.x*Math.abs(cr.x)+l.y*Math.abs(cr.y)+l.z*Math.abs(cr.z),m=e.dot(cr),p=i.dot(cr),g=r.dot(cr);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>h)return!1}return!0}const uS=new Po,bo=new st,qf=new st;class Cc{constructor(e=new st,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):uS.setFromPoints(e).getCenter(r);let l=0;for(let u=0,d=e.length;u<d;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bo.subVectors(e,this.center);const i=bo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(bo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bo.copy(e.center).add(qf)),this.expandByPoint(bo.copy(e.center).sub(qf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const qi=new st,Yf=new st,Jl=new st,Oa=new st,Zf=new st,$l=new st,Kf=new st;class l_{constructor(e=new st,i=new st(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qi)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=qi.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(qi.copy(this.origin).addScaledVector(this.direction,i),qi.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Yf.copy(e).add(i).multiplyScalar(.5),Jl.copy(i).sub(e).normalize(),Oa.copy(this.origin).sub(Yf);const u=e.distanceTo(i)*.5,d=-this.direction.dot(Jl),h=Oa.dot(this.direction),m=-Oa.dot(Jl),p=Oa.lengthSq(),g=Math.abs(1-d*d);let v,x,M,A;if(g>0)if(v=d*m-h,x=d*h-m,A=u*g,v>=0)if(x>=-A)if(x<=A){const C=1/g;v*=C,x*=C,M=v*(v+d*x+2*h)+x*(d*v+x+2*m)+p}else x=u,v=Math.max(0,-(d*x+h)),M=-v*v+x*(x+2*m)+p;else x=-u,v=Math.max(0,-(d*x+h)),M=-v*v+x*(x+2*m)+p;else x<=-A?(v=Math.max(0,-(-d*u+h)),x=v>0?-u:Math.min(Math.max(-u,-m),u),M=-v*v+x*(x+2*m)+p):x<=A?(v=0,x=Math.min(Math.max(-u,-m),u),M=x*(x+2*m)+p):(v=Math.max(0,-(d*u+h)),x=v>0?u:Math.min(Math.max(-u,-m),u),M=-v*v+x*(x+2*m)+p);else x=d>0?-u:u,v=Math.max(0,-(d*x+h)),M=-v*v+x*(x+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Yf).addScaledVector(Jl,x),M}intersectSphere(e,i){qi.subVectors(e.center,this.origin);const r=qi.dot(this.direction),l=qi.dot(qi)-r*r,u=e.radius*e.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=r-d,m=r+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,d,h,m;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,x=this.origin;return p>=0?(r=(e.min.x-x.x)*p,l=(e.max.x-x.x)*p):(r=(e.max.x-x.x)*p,l=(e.min.x-x.x)*p),g>=0?(u=(e.min.y-x.y)*g,d=(e.max.y-x.y)*g):(u=(e.max.y-x.y)*g,d=(e.min.y-x.y)*g),r>d||u>l||((u>r||isNaN(r))&&(r=u),(d<l||isNaN(l))&&(l=d),v>=0?(h=(e.min.z-x.z)*v,m=(e.max.z-x.z)*v):(h=(e.max.z-x.z)*v,m=(e.min.z-x.z)*v),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,qi)!==null}intersectTriangle(e,i,r,l,u){Zf.subVectors(i,e),$l.subVectors(r,e),Kf.crossVectors(Zf,$l);let d=this.direction.dot(Kf),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Oa.subVectors(this.origin,e);const m=h*this.direction.dot($l.crossVectors(Oa,$l));if(m<0)return null;const p=h*this.direction.dot(Zf.cross(Oa));if(p<0||m+p>d)return null;const g=-h*Oa.dot(Kf);return g<0?null:this.at(g/d,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $e{constructor(e,i,r,l,u,d,h,m,p,g,v,x,M,A,C,S){$e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,h,m,p,g,v,x,M,A,C,S)}set(e,i,r,l,u,d,h,m,p,g,v,x,M,A,C,S){const _=this.elements;return _[0]=e,_[4]=i,_[8]=r,_[12]=l,_[1]=u,_[5]=d,_[9]=h,_[13]=m,_[2]=p,_[6]=g,_[10]=v,_[14]=x,_[3]=M,_[7]=A,_[11]=C,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $e().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/ss.setFromMatrixColumn(e,0).length(),u=1/ss.setFromMatrixColumn(e,1).length(),d=1/ss.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,d=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(u),v=Math.sin(u);if(e.order==="XYZ"){const x=d*g,M=d*v,A=h*g,C=h*v;i[0]=m*g,i[4]=-m*v,i[8]=p,i[1]=M+A*p,i[5]=x-C*p,i[9]=-h*m,i[2]=C-x*p,i[6]=A+M*p,i[10]=d*m}else if(e.order==="YXZ"){const x=m*g,M=m*v,A=p*g,C=p*v;i[0]=x+C*h,i[4]=A*h-M,i[8]=d*p,i[1]=d*v,i[5]=d*g,i[9]=-h,i[2]=M*h-A,i[6]=C+x*h,i[10]=d*m}else if(e.order==="ZXY"){const x=m*g,M=m*v,A=p*g,C=p*v;i[0]=x-C*h,i[4]=-d*v,i[8]=A+M*h,i[1]=M+A*h,i[5]=d*g,i[9]=C-x*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(e.order==="ZYX"){const x=d*g,M=d*v,A=h*g,C=h*v;i[0]=m*g,i[4]=A*p-M,i[8]=x*p+C,i[1]=m*v,i[5]=C*p+x,i[9]=M*p-A,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(e.order==="YZX"){const x=d*m,M=d*p,A=h*m,C=h*p;i[0]=m*g,i[4]=C-x*v,i[8]=A*v+M,i[1]=v,i[5]=d*g,i[9]=-h*g,i[2]=-p*g,i[6]=M*v+A,i[10]=x-C*v}else if(e.order==="XZY"){const x=d*m,M=d*p,A=h*m,C=h*p;i[0]=m*g,i[4]=-v,i[8]=p*g,i[1]=x*v+C,i[5]=d*g,i[9]=M*v-A,i[2]=A*v-M,i[6]=h*g,i[10]=C*v+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fS,e,dS)}lookAt(e,i,r){const l=this.elements;return Yn.subVectors(e,i),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),Pa.crossVectors(r,Yn),Pa.lengthSq()===0&&(Math.abs(r.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),Pa.crossVectors(r,Yn)),Pa.normalize(),tc.crossVectors(Yn,Pa),l[0]=Pa.x,l[4]=tc.x,l[8]=Yn.x,l[1]=Pa.y,l[5]=tc.y,l[9]=Yn.y,l[2]=Pa.z,l[6]=tc.z,l[10]=Yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],h=r[4],m=r[8],p=r[12],g=r[1],v=r[5],x=r[9],M=r[13],A=r[2],C=r[6],S=r[10],_=r[14],I=r[3],O=r[7],U=r[11],k=r[15],X=l[0],F=l[4],Z=l[8],w=l[12],R=l[1],G=l[5],ct=l[9],ot=l[13],vt=l[2],ht=l[6],P=l[10],K=l[14],q=l[3],Et=l[7],D=l[11],tt=l[15];return u[0]=d*X+h*R+m*vt+p*q,u[4]=d*F+h*G+m*ht+p*Et,u[8]=d*Z+h*ct+m*P+p*D,u[12]=d*w+h*ot+m*K+p*tt,u[1]=g*X+v*R+x*vt+M*q,u[5]=g*F+v*G+x*ht+M*Et,u[9]=g*Z+v*ct+x*P+M*D,u[13]=g*w+v*ot+x*K+M*tt,u[2]=A*X+C*R+S*vt+_*q,u[6]=A*F+C*G+S*ht+_*Et,u[10]=A*Z+C*ct+S*P+_*D,u[14]=A*w+C*ot+S*K+_*tt,u[3]=I*X+O*R+U*vt+k*q,u[7]=I*F+O*G+U*ht+k*Et,u[11]=I*Z+O*ct+U*P+k*D,u[15]=I*w+O*ot+U*K+k*tt,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],d=e[1],h=e[5],m=e[9],p=e[13],g=e[2],v=e[6],x=e[10],M=e[14],A=e[3],C=e[7],S=e[11],_=e[15];return A*(+u*m*v-l*p*v-u*h*x+r*p*x+l*h*M-r*m*M)+C*(+i*m*M-i*p*x+u*d*x-l*d*M+l*p*g-u*m*g)+S*(+i*p*v-i*h*M-u*d*v+r*d*M+u*h*g-r*p*g)+_*(-l*h*g-i*m*v+i*h*x+l*d*v-r*d*x+r*m*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],g=e[8],v=e[9],x=e[10],M=e[11],A=e[12],C=e[13],S=e[14],_=e[15],I=v*S*p-C*x*p+C*m*M-h*S*M-v*m*_+h*x*_,O=A*x*p-g*S*p-A*m*M+d*S*M+g*m*_-d*x*_,U=g*C*p-A*v*p+A*h*M-d*C*M-g*h*_+d*v*_,k=A*v*m-g*C*m-A*h*x+d*C*x+g*h*S-d*v*S,X=i*I+r*O+l*U+u*k;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/X;return e[0]=I*F,e[1]=(C*x*u-v*S*u-C*l*M+r*S*M+v*l*_-r*x*_)*F,e[2]=(h*S*u-C*m*u+C*l*p-r*S*p-h*l*_+r*m*_)*F,e[3]=(v*m*u-h*x*u-v*l*p+r*x*p+h*l*M-r*m*M)*F,e[4]=O*F,e[5]=(g*S*u-A*x*u+A*l*M-i*S*M-g*l*_+i*x*_)*F,e[6]=(A*m*u-d*S*u-A*l*p+i*S*p+d*l*_-i*m*_)*F,e[7]=(d*x*u-g*m*u+g*l*p-i*x*p-d*l*M+i*m*M)*F,e[8]=U*F,e[9]=(A*v*u-g*C*u-A*r*M+i*C*M+g*r*_-i*v*_)*F,e[10]=(d*C*u-A*h*u+A*r*p-i*C*p-d*r*_+i*h*_)*F,e[11]=(g*h*u-d*v*u-g*r*p+i*v*p+d*r*M-i*h*M)*F,e[12]=k*F,e[13]=(g*C*l-A*v*l+A*r*x-i*C*x-g*r*S+i*v*S)*F,e[14]=(A*h*l-d*C*l-A*r*m+i*C*m+d*r*S-i*h*S)*F,e[15]=(d*v*l-g*h*l+g*r*m-i*v*m-d*r*x+i*h*x)*F,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,d=e.x,h=e.y,m=e.z,p=u*d,g=u*h;return this.set(p*d+r,p*h-l*m,p*m+l*h,0,p*h+l*m,g*h+r,g*m-l*d,0,p*m-l*h,g*m+l*d,u*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,d){return this.set(1,r,u,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,d=i._y,h=i._z,m=i._w,p=u+u,g=d+d,v=h+h,x=u*p,M=u*g,A=u*v,C=d*g,S=d*v,_=h*v,I=m*p,O=m*g,U=m*v,k=r.x,X=r.y,F=r.z;return l[0]=(1-(C+_))*k,l[1]=(M+U)*k,l[2]=(A-O)*k,l[3]=0,l[4]=(M-U)*X,l[5]=(1-(x+_))*X,l[6]=(S+I)*X,l[7]=0,l[8]=(A+O)*F,l[9]=(S-I)*F,l[10]=(1-(x+C))*F,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let u=ss.set(l[0],l[1],l[2]).length();const d=ss.set(l[4],l[5],l[6]).length(),h=ss.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],di.copy(this);const p=1/u,g=1/d,v=1/h;return di.elements[0]*=p,di.elements[1]*=p,di.elements[2]*=p,di.elements[4]*=g,di.elements[5]*=g,di.elements[6]*=g,di.elements[8]*=v,di.elements[9]*=v,di.elements[10]*=v,i.setFromRotationMatrix(di),r.x=u,r.y=d,r.z=h,this}makePerspective(e,i,r,l,u,d,h=ta){const m=this.elements,p=2*u/(i-e),g=2*u/(r-l),v=(i+e)/(i-e),x=(r+l)/(r-l);let M,A;if(h===ta)M=-(d+u)/(d-u),A=-2*d*u/(d-u);else if(h===Tc)M=-d/(d-u),A=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=p,m[4]=0,m[8]=v,m[12]=0,m[1]=0,m[5]=g,m[9]=x,m[13]=0,m[2]=0,m[6]=0,m[10]=M,m[14]=A,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,r,l,u,d,h=ta){const m=this.elements,p=1/(i-e),g=1/(r-l),v=1/(d-u),x=(i+e)*p,M=(r+l)*g;let A,C;if(h===ta)A=(d+u)*v,C=-2*v;else if(h===Tc)A=u*v,C=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-x,m[1]=0,m[5]=2*g,m[9]=0,m[13]=-M,m[2]=0,m[6]=0,m[10]=C,m[14]=-A,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const ss=new st,di=new $e,fS=new st(0,0,0),dS=new st(1,1,1),Pa=new st,tc=new st,Yn=new st,lg=new $e,cg=new Oo;class aa{constructor(e=0,i=0,r=0,l=aa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],d=l[4],h=l[8],m=l[1],p=l[5],g=l[9],v=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(xe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(xe(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-xe(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(xe(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-xe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return lg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lg,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return cg.setFromEuler(this),this.setFromQuaternion(cg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}aa.DEFAULT_ORDER="XYZ";class c_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hS=0;const ug=new st,os=new Oo,Yi=new $e,ec=new st,To=new st,pS=new st,mS=new Oo,fg=new st(1,0,0),dg=new st(0,1,0),hg=new st(0,0,1),pg={type:"added"},gS={type:"removed"},ls={type:"childadded",child:null},Qf={type:"childremoved",child:null};class Fn extends Ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hS++}),this.uuid=Lo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fn.DEFAULT_UP.clone();const e=new st,i=new aa,r=new Oo,l=new st(1,1,1);function u(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new $e},normalMatrix:{value:new se}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=Fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new c_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return os.setFromAxisAngle(e,i),this.quaternion.multiply(os),this}rotateOnWorldAxis(e,i){return os.setFromAxisAngle(e,i),this.quaternion.premultiply(os),this}rotateX(e){return this.rotateOnAxis(fg,e)}rotateY(e){return this.rotateOnAxis(dg,e)}rotateZ(e){return this.rotateOnAxis(hg,e)}translateOnAxis(e,i){return ug.copy(e).applyQuaternion(this.quaternion),this.position.add(ug.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(fg,e)}translateY(e){return this.translateOnAxis(dg,e)}translateZ(e){return this.translateOnAxis(hg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yi.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?ec.copy(e):ec.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),To.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yi.lookAt(To,ec,this.up):Yi.lookAt(ec,To,this.up),this.quaternion.setFromRotationMatrix(Yi),l&&(Yi.extractRotation(l.matrixWorld),os.setFromRotationMatrix(Yi),this.quaternion.premultiply(os.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(pg),ls.child=e,this.dispatchEvent(ls),ls.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(gS),Qf.child=e,this.dispatchEvent(Qf),Qf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(pg),ls.child=e,this.dispatchEvent(ls),ls.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(To,e,pS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(To,mS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const v=m[p];u(e.shapes,v)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(u(e.materials,this.material[m]));l.material=h}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(u(e.animations,m))}}if(i){const h=d(e.geometries),m=d(e.materials),p=d(e.textures),g=d(e.images),v=d(e.shapes),x=d(e.skeletons),M=d(e.animations),A=d(e.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),x.length>0&&(r.skeletons=x),M.length>0&&(r.animations=M),A.length>0&&(r.nodes=A)}return r.object=l,r;function d(h){const m=[];for(const p in h){const g=h[p];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Fn.DEFAULT_UP=new st(0,1,0);Fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hi=new st,Zi=new st,Jf=new st,Ki=new st,cs=new st,us=new st,mg=new st,$f=new st,td=new st,ed=new st,nd=new Je,id=new Je,ad=new Je;class pi{constructor(e=new st,i=new st,r=new st){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),hi.subVectors(e,i),l.cross(hi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){hi.subVectors(l,i),Zi.subVectors(r,i),Jf.subVectors(e,i);const d=hi.dot(hi),h=hi.dot(Zi),m=hi.dot(Jf),p=Zi.dot(Zi),g=Zi.dot(Jf),v=d*p-h*h;if(v===0)return u.set(0,0,0),null;const x=1/v,M=(p*m-h*g)*x,A=(d*g-h*m)*x;return u.set(1-M-A,A,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,Ki)===null?!1:Ki.x>=0&&Ki.y>=0&&Ki.x+Ki.y<=1}static getInterpolation(e,i,r,l,u,d,h,m){return this.getBarycoord(e,i,r,l,Ki)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,Ki.x),m.addScaledVector(d,Ki.y),m.addScaledVector(h,Ki.z),m)}static getInterpolatedAttribute(e,i,r,l,u,d){return nd.setScalar(0),id.setScalar(0),ad.setScalar(0),nd.fromBufferAttribute(e,i),id.fromBufferAttribute(e,r),ad.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(nd,u.x),d.addScaledVector(id,u.y),d.addScaledVector(ad,u.z),d}static isFrontFacing(e,i,r,l){return hi.subVectors(r,i),Zi.subVectors(e,i),hi.cross(Zi).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hi.subVectors(this.c,this.b),Zi.subVectors(this.a,this.b),hi.cross(Zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return pi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return pi.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let d,h;cs.subVectors(l,r),us.subVectors(u,r),$f.subVectors(e,r);const m=cs.dot($f),p=us.dot($f);if(m<=0&&p<=0)return i.copy(r);td.subVectors(e,l);const g=cs.dot(td),v=us.dot(td);if(g>=0&&v<=g)return i.copy(l);const x=m*v-g*p;if(x<=0&&m>=0&&g<=0)return d=m/(m-g),i.copy(r).addScaledVector(cs,d);ed.subVectors(e,u);const M=cs.dot(ed),A=us.dot(ed);if(A>=0&&M<=A)return i.copy(u);const C=M*p-m*A;if(C<=0&&p>=0&&A<=0)return h=p/(p-A),i.copy(r).addScaledVector(us,h);const S=g*A-M*v;if(S<=0&&v-g>=0&&M-A>=0)return mg.subVectors(u,l),h=(v-g)/(v-g+(M-A)),i.copy(l).addScaledVector(mg,h);const _=1/(S+C+x);return d=C*_,h=x*_,i.copy(r).addScaledVector(cs,d).addScaledVector(us,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const u_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},za={h:0,s:0,l:0},nc={h:0,s:0,l:0};function rd(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Te{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ri){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,be.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=be.workingColorSpace){return this.r=e,this.g=i,this.b=r,be.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=be.workingColorSpace){if(e=$y(e,1),i=xe(i,0,1),r=xe(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,d=2*r-u;this.r=rd(d,u,e+1/3),this.g=rd(d,u,e),this.b=rd(d,u,e-1/3)}return be.colorSpaceToWorking(this,l),this}setStyle(e,i=ri){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ri){const r=u_[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=na(e.r),this.g=na(e.g),this.b=na(e.b),this}copyLinearToSRGB(e){return this.r=vs(e.r),this.g=vs(e.g),this.b=vs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ri){return be.workingToColorSpace(Cn.copy(this),e),Math.round(xe(Cn.r*255,0,255))*65536+Math.round(xe(Cn.g*255,0,255))*256+Math.round(xe(Cn.b*255,0,255))}getHexString(e=ri){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=be.workingColorSpace){be.workingToColorSpace(Cn.copy(this),i);const r=Cn.r,l=Cn.g,u=Cn.b,d=Math.max(r,l,u),h=Math.min(r,l,u);let m,p;const g=(h+d)/2;if(h===d)m=0,p=0;else{const v=d-h;switch(p=g<=.5?v/(d+h):v/(2-d-h),d){case r:m=(l-u)/v+(l<u?6:0);break;case l:m=(u-r)/v+2;break;case u:m=(r-l)/v+4;break}m/=6}return e.h=m,e.s=p,e.l=g,e}getRGB(e,i=be.workingColorSpace){return be.workingToColorSpace(Cn.copy(this),i),e.r=Cn.r,e.g=Cn.g,e.b=Cn.b,e}getStyle(e=ri){be.workingToColorSpace(Cn.copy(this),e);const i=Cn.r,r=Cn.g,l=Cn.b;return e!==ri?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(za),this.setHSL(za.h+e,za.s+i,za.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(za),e.getHSL(nc);const r=Gf(za.h,nc.h,i),l=Gf(za.s,nc.s,i),u=Gf(za.l,nc.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new Te;Te.NAMES=u_;let _S=0;class zo extends Ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_S++}),this.uuid=Lo(),this.name="",this.type="Material",this.blending=gs,this.side=Ga,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_d,this.blendDst=vd,this.blendEquation=gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=eg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=es,this.stencilZFail=es,this.stencilZPass=es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==gs&&(r.blending=this.blending),this.side!==Ga&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==_d&&(r.blendSrc=this.blendSrc),this.blendDst!==vd&&(r.blendDst=this.blendDst),this.blendEquation!==gr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==xs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==eg&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==es&&(r.stencilFail=this.stencilFail),this.stencilZFail!==es&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==es&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const d=[];for(const h in u){const m=u[h];delete m.metadata,d.push(m)}return d}if(i){const u=l(e.textures),d=l(e.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class f_ extends zo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new aa,this.combine=Zg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const an=new st,ic=new Ie;let vS=0;class oi{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vS++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=ng,this.updateRanges=[],this.gpuType=$i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)ic.fromBufferAttribute(this,i),ic.applyMatrix3(e),this.setXY(i,ic.x,ic.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.applyMatrix3(e),this.setXYZ(i,an.x,an.y,an.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.applyMatrix4(e),this.setXYZ(i,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.applyNormalMatrix(e),this.setXYZ(i,an.x,an.y,an.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.transformDirection(e),this.setXYZ(i,an.x,an.y,an.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Mo(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=zn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Mo(i,this.array)),i}setX(e,i){return this.normalized&&(i=zn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Mo(i,this.array)),i}setY(e,i){return this.normalized&&(i=zn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Mo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=zn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Mo(i,this.array)),i}setW(e,i){return this.normalized&&(i=zn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=zn(i,this.array),r=zn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=zn(i,this.array),r=zn(r,this.array),l=zn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=zn(i,this.array),r=zn(r,this.array),l=zn(l,this.array),u=zn(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ng&&(e.usage=this.usage),e}}class d_ extends oi{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class h_ extends oi{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class yr extends oi{constructor(e,i,r){super(new Float32Array(e),i,r)}}let xS=0;const ii=new $e,sd=new Fn,fs=new st,Zn=new Po,Ao=new Po,_n=new st;class ra extends Ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xS++}),this.uuid=Lo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(s_(e)?h_:d_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new se().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ii.makeRotationFromQuaternion(e),this.applyMatrix4(ii),this}rotateX(e){return ii.makeRotationX(e),this.applyMatrix4(ii),this}rotateY(e){return ii.makeRotationY(e),this.applyMatrix4(ii),this}rotateZ(e){return ii.makeRotationZ(e),this.applyMatrix4(ii),this}translate(e,i,r){return ii.makeTranslation(e,i,r),this.applyMatrix4(ii),this}scale(e,i,r){return ii.makeScale(e,i,r),this.applyMatrix4(ii),this}lookAt(e){return sd.lookAt(e),sd.updateMatrix(),this.applyMatrix4(sd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fs).negate(),this.translate(fs.x,fs.y,fs.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=e.length;l<u;l++){const d=e[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new yr(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Po);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new st(-1/0,-1/0,-1/0),new st(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];Zn.setFromBufferAttribute(u),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new st,1/0);return}if(e){const r=this.boundingSphere.center;if(Zn.setFromBufferAttribute(e),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];Ao.setFromBufferAttribute(h),this.morphTargetsRelative?(_n.addVectors(Zn.min,Ao.min),Zn.expandByPoint(_n),_n.addVectors(Zn.max,Ao.max),Zn.expandByPoint(_n)):(Zn.expandByPoint(Ao.min),Zn.expandByPoint(Ao.max))}Zn.getCenter(r);let l=0;for(let u=0,d=e.count;u<d;u++)_n.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(_n));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],m=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)_n.fromBufferAttribute(h,p),m&&(fs.fromBufferAttribute(e,p),_n.add(fs)),l=Math.max(l,r.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new oi(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let Z=0;Z<r.count;Z++)h[Z]=new st,m[Z]=new st;const p=new st,g=new st,v=new st,x=new Ie,M=new Ie,A=new Ie,C=new st,S=new st;function _(Z,w,R){p.fromBufferAttribute(r,Z),g.fromBufferAttribute(r,w),v.fromBufferAttribute(r,R),x.fromBufferAttribute(u,Z),M.fromBufferAttribute(u,w),A.fromBufferAttribute(u,R),g.sub(p),v.sub(p),M.sub(x),A.sub(x);const G=1/(M.x*A.y-A.x*M.y);isFinite(G)&&(C.copy(g).multiplyScalar(A.y).addScaledVector(v,-M.y).multiplyScalar(G),S.copy(v).multiplyScalar(M.x).addScaledVector(g,-A.x).multiplyScalar(G),h[Z].add(C),h[w].add(C),h[R].add(C),m[Z].add(S),m[w].add(S),m[R].add(S))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let Z=0,w=I.length;Z<w;++Z){const R=I[Z],G=R.start,ct=R.count;for(let ot=G,vt=G+ct;ot<vt;ot+=3)_(e.getX(ot+0),e.getX(ot+1),e.getX(ot+2))}const O=new st,U=new st,k=new st,X=new st;function F(Z){k.fromBufferAttribute(l,Z),X.copy(k);const w=h[Z];O.copy(w),O.sub(k.multiplyScalar(k.dot(w))).normalize(),U.crossVectors(X,w);const G=U.dot(m[Z])<0?-1:1;d.setXYZW(Z,O.x,O.y,O.z,G)}for(let Z=0,w=I.length;Z<w;++Z){const R=I[Z],G=R.start,ct=R.count;for(let ot=G,vt=G+ct;ot<vt;ot+=3)F(e.getX(ot+0)),F(e.getX(ot+1)),F(e.getX(ot+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new oi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,M=r.count;x<M;x++)r.setXYZ(x,0,0,0);const l=new st,u=new st,d=new st,h=new st,m=new st,p=new st,g=new st,v=new st;if(e)for(let x=0,M=e.count;x<M;x+=3){const A=e.getX(x+0),C=e.getX(x+1),S=e.getX(x+2);l.fromBufferAttribute(i,A),u.fromBufferAttribute(i,C),d.fromBufferAttribute(i,S),g.subVectors(d,u),v.subVectors(l,u),g.cross(v),h.fromBufferAttribute(r,A),m.fromBufferAttribute(r,C),p.fromBufferAttribute(r,S),h.add(g),m.add(g),p.add(g),r.setXYZ(A,h.x,h.y,h.z),r.setXYZ(C,m.x,m.y,m.z),r.setXYZ(S,p.x,p.y,p.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),u.fromBufferAttribute(i,x+1),d.fromBufferAttribute(i,x+2),g.subVectors(d,u),v.subVectors(l,u),g.cross(v),r.setXYZ(x+0,g.x,g.y,g.z),r.setXYZ(x+1,g.x,g.y,g.z),r.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)_n.fromBufferAttribute(e,i),_n.normalize(),e.setXYZ(i,_n.x,_n.y,_n.z)}toNonIndexed(){function e(h,m){const p=h.array,g=h.itemSize,v=h.normalized,x=new p.constructor(m.length*g);let M=0,A=0;for(let C=0,S=m.length;C<S;C++){h.isInterleavedBufferAttribute?M=m[C]*h.data.stride+h.offset:M=m[C]*g;for(let _=0;_<g;_++)x[A++]=p[M++]}return new oi(x,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ra,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,r);i.setAttribute(h,p)}const u=this.morphAttributes;for(const h in u){const m=[],p=u[h];for(let g=0,v=p.length;g<v;g++){const x=p[g],M=e(x,r);m.push(M)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let v=0,x=p.length;v<x;v++){const M=p[v];g.push(M.toJSON(e.data))}g.length>0&&(l[m]=g,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const u=e.morphAttributes;for(const p in u){const g=[],v=u[p];for(let x=0,M=v.length;x<M;x++)g.push(v[x].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let p=0,g=d.length;p<g;p++){const v=d[p];this.addGroup(v.start,v.count,v.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gg=new $e,ur=new l_,ac=new Cc,_g=new st,rc=new st,sc=new st,oc=new st,od=new st,lc=new st,vg=new st,cc=new st;class ea extends Fn{constructor(e=new ra,i=new f_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(u&&h){lc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const g=h[m],v=u[m];g!==0&&(od.fromBufferAttribute(v,e),d?lc.addScaledVector(od,g):lc.addScaledVector(od.sub(i),g))}i.add(lc)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ac.copy(r.boundingSphere),ac.applyMatrix4(u),ur.copy(e.ray).recast(e.near),!(ac.containsPoint(ur.origin)===!1&&(ur.intersectSphere(ac,_g)===null||ur.origin.distanceToSquared(_g)>(e.far-e.near)**2))&&(gg.copy(u).invert(),ur.copy(e.ray).applyMatrix4(gg),!(r.boundingBox!==null&&ur.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,ur)))}_computeIntersections(e,i,r){let l;const u=this.geometry,d=this.material,h=u.index,m=u.attributes.position,p=u.attributes.uv,g=u.attributes.uv1,v=u.attributes.normal,x=u.groups,M=u.drawRange;if(h!==null)if(Array.isArray(d))for(let A=0,C=x.length;A<C;A++){const S=x[A],_=d[S.materialIndex],I=Math.max(S.start,M.start),O=Math.min(h.count,Math.min(S.start+S.count,M.start+M.count));for(let U=I,k=O;U<k;U+=3){const X=h.getX(U),F=h.getX(U+1),Z=h.getX(U+2);l=uc(this,_,e,r,p,g,v,X,F,Z),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),C=Math.min(h.count,M.start+M.count);for(let S=A,_=C;S<_;S+=3){const I=h.getX(S),O=h.getX(S+1),U=h.getX(S+2);l=uc(this,d,e,r,p,g,v,I,O,U),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let A=0,C=x.length;A<C;A++){const S=x[A],_=d[S.materialIndex],I=Math.max(S.start,M.start),O=Math.min(m.count,Math.min(S.start+S.count,M.start+M.count));for(let U=I,k=O;U<k;U+=3){const X=U,F=U+1,Z=U+2;l=uc(this,_,e,r,p,g,v,X,F,Z),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),C=Math.min(m.count,M.start+M.count);for(let S=A,_=C;S<_;S+=3){const I=S,O=S+1,U=S+2;l=uc(this,d,e,r,p,g,v,I,O,U),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function yS(o,e,i,r,l,u,d,h){let m;if(e.side===Bn?m=r.intersectTriangle(d,u,l,!0,h):m=r.intersectTriangle(l,u,d,e.side===Ga,h),m===null)return null;cc.copy(h),cc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(cc);return p<i.near||p>i.far?null:{distance:p,point:cc.clone(),object:o}}function uc(o,e,i,r,l,u,d,h,m,p){o.getVertexPosition(h,rc),o.getVertexPosition(m,sc),o.getVertexPosition(p,oc);const g=yS(o,e,i,r,rc,sc,oc,vg);if(g){const v=new st;pi.getBarycoord(vg,rc,sc,oc,v),l&&(g.uv=pi.getInterpolatedAttribute(l,h,m,p,v,new Ie)),u&&(g.uv1=pi.getInterpolatedAttribute(u,h,m,p,v,new Ie)),d&&(g.normal=pi.getInterpolatedAttribute(d,h,m,p,v,new st),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const x={a:h,b:m,c:p,normal:new st,materialIndex:0};pi.getNormal(rc,sc,oc,x.normal),g.face=x,g.barycoord=v}return g}class Bo extends ra{constructor(e=1,i=1,r=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const m=[],p=[],g=[],v=[];let x=0,M=0;A("z","y","x",-1,-1,r,i,e,d,u,0),A("z","y","x",1,-1,r,i,-e,d,u,1),A("x","z","y",1,1,e,r,i,l,d,2),A("x","z","y",1,-1,e,r,-i,l,d,3),A("x","y","z",1,-1,e,i,r,l,u,4),A("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new yr(p,3)),this.setAttribute("normal",new yr(g,3)),this.setAttribute("uv",new yr(v,2));function A(C,S,_,I,O,U,k,X,F,Z,w){const R=U/F,G=k/Z,ct=U/2,ot=k/2,vt=X/2,ht=F+1,P=Z+1;let K=0,q=0;const Et=new st;for(let D=0;D<P;D++){const tt=D*G-ot;for(let xt=0;xt<ht;xt++){const St=xt*R-ct;Et[C]=St*I,Et[S]=tt*O,Et[_]=vt,p.push(Et.x,Et.y,Et.z),Et[C]=0,Et[S]=0,Et[_]=X>0?1:-1,g.push(Et.x,Et.y,Et.z),v.push(xt/F),v.push(1-D/Z),K+=1}}for(let D=0;D<Z;D++)for(let tt=0;tt<F;tt++){const xt=x+tt+ht*D,St=x+tt+ht*(D+1),J=x+(tt+1)+ht*(D+1),mt=x+(tt+1)+ht*D;m.push(xt,St,mt),m.push(St,J,mt),q+=6}h.addGroup(M,q,w),M+=q,x+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Es(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Dn(o){const e={};for(let i=0;i<o.length;i++){const r=Es(o[i]);for(const l in r)e[l]=r[l]}return e}function SS(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function p_(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:be.workingColorSpace}const MS={clone:Es,merge:Dn};var ES=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Va extends zo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ES,this.fragmentShader=bS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Es(e.uniforms),this.uniformsGroups=SS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class m_ extends Fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=ta}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ba=new st,xg=new Ie,yg=new Ie;class si extends m_{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=nh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Hf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return nh*2*Math.atan(Math.tan(Hf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Ba.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ba.x,Ba.y).multiplyScalar(-e/Ba.z),Ba.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ba.x,Ba.y).multiplyScalar(-e/Ba.z)}getViewSize(e,i){return this.getViewBounds(e,xg,yg),i.subVectors(yg,xg)}setViewOffset(e,i,r,l,u,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Hf*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;u+=d.offsetX*l/m,i-=d.offsetY*r/p,l*=d.width/m,r*=d.height/p}const h=this.filmOffset;h!==0&&(u+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const ds=-90,hs=1;class TS extends Fn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new si(ds,hs,e,i);l.layers=this.layers,this.add(l);const u=new si(ds,hs,e,i);u.layers=this.layers,this.add(u);const d=new si(ds,hs,e,i);d.layers=this.layers,this.add(d);const h=new si(ds,hs,e,i);h.layers=this.layers,this.add(h);const m=new si(ds,hs,e,i);m.layers=this.layers,this.add(m);const p=new si(ds,hs,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,d,h,m]=i;for(const p of i)this.remove(p);if(e===ta)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Tc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,m,p,g]=this.children,v=e.getRenderTarget(),x=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,u),e.setRenderTarget(r,1,l),e.render(i,d),e.setRenderTarget(r,2,l),e.render(i,h),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,l),e.render(i,g),e.setRenderTarget(v,x,M),e.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class g_ extends In{constructor(e=[],i=ys,r,l,u,d,h,m,p,g){super(e,i,r,l,u,d,h,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class AS extends Er{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new g_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Bo(5,5,5),u=new Va({name:"CubemapFromEquirect",uniforms:Es(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Bn,blending:Fa});u.uniforms.tEquirect.value=i;const d=new ea(l,u),h=i.minFilter;return i.minFilter===xr&&(i.minFilter=Ti),new TS(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const u=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,r,l);e.setRenderTarget(u)}}class fc extends Fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const RS={type:"move"};class ld{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new st,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new st),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new st,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new st),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){d=!0;for(const C of e.hand.values()){const S=i.getJointPose(C,r),_=this._getHandJoint(p,C);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],x=g.position.distanceTo(v.position),M=.02,A=.005;p.inputState.pinching&&x>M+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=M-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(RS)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new fc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class CS extends Fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new aa,this.environmentIntensity=1,this.environmentRotation=new aa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const cd=new st,wS=new st,DS=new se;class pr{constructor(e=new st(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=cd.subVectors(r,i).cross(wS.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(cd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||DS.getNormalMatrix(e),l=this.coplanarPoint(cd).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fr=new Cc,US=new Ie(.5,.5),dc=new st;class __{constructor(e=new pr,i=new pr,r=new pr,l=new pr,u=new pr,d=new pr){this.planes=[e,i,r,l,u,d]}set(e,i,r,l,u,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=ta){const r=this.planes,l=e.elements,u=l[0],d=l[1],h=l[2],m=l[3],p=l[4],g=l[5],v=l[6],x=l[7],M=l[8],A=l[9],C=l[10],S=l[11],_=l[12],I=l[13],O=l[14],U=l[15];if(r[0].setComponents(m-u,x-p,S-M,U-_).normalize(),r[1].setComponents(m+u,x+p,S+M,U+_).normalize(),r[2].setComponents(m+d,x+g,S+A,U+I).normalize(),r[3].setComponents(m-d,x-g,S-A,U-I).normalize(),r[4].setComponents(m-h,x-v,S-C,U-O).normalize(),i===ta)r[5].setComponents(m+h,x+v,S+C,U+O).normalize();else if(i===Tc)r[5].setComponents(h,v,C,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),fr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fr)}intersectsSprite(e){fr.center.set(0,0,0);const i=US.distanceTo(e.center);return fr.radius=.7071067811865476+i,fr.applyMatrix4(e.matrixWorld),this.intersectsSphere(fr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(dc.x=l.normal.x>0?e.max.x:e.min.x,dc.y=l.normal.y>0?e.max.y:e.min.y,dc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(dc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class v_ extends zo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Sg=new $e,ih=new l_,hc=new Cc,pc=new st;class NS extends Fn{constructor(e=new ra,i=new v_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,u=e.params.Points.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),hc.copy(r.boundingSphere),hc.applyMatrix4(l),hc.radius+=u,e.ray.intersectsSphere(hc)===!1)return;Sg.copy(l).invert(),ih.copy(e.ray).applyMatrix4(Sg);const h=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=r.index,v=r.attributes.position;if(p!==null){const x=Math.max(0,d.start),M=Math.min(p.count,d.start+d.count);for(let A=x,C=M;A<C;A++){const S=p.getX(A);pc.fromBufferAttribute(v,S),Mg(pc,S,m,l,e,i,this)}}else{const x=Math.max(0,d.start),M=Math.min(v.count,d.start+d.count);for(let A=x,C=M;A<C;A++)pc.fromBufferAttribute(v,A),Mg(pc,A,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}}function Mg(o,e,i,r,l,u,d){const h=ih.distanceSqToPoint(o);if(h<i){const m=new st;ih.closestPointToPoint(o,m),m.applyMatrix4(r);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;u.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:d})}}class x_ extends In{constructor(e,i,r=Mr,l,u,d,h=_i,m=_i,p,g=Do,v=1){if(g!==Do&&g!==Uo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:i,depth:v};super(x,l,u,d,h,m,g,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new hh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class wc extends ra{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,d=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,g=m+1,v=e/h,x=i/m,M=[],A=[],C=[],S=[];for(let _=0;_<g;_++){const I=_*x-d;for(let O=0;O<p;O++){const U=O*v-u;A.push(U,-I,0),C.push(0,0,1),S.push(O/h),S.push(1-_/m)}}for(let _=0;_<m;_++)for(let I=0;I<h;I++){const O=I+p*_,U=I+p*(_+1),k=I+1+p*(_+1),X=I+1+p*_;M.push(O,U,X),M.push(U,k,X)}this.setIndex(M),this.setAttribute("position",new yr(A,3)),this.setAttribute("normal",new yr(C,3)),this.setAttribute("uv",new yr(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wc(e.width,e.height,e.widthSegments,e.heightSegments)}}class LS extends zo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class OS extends zo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class PS extends m_{constructor(e=-1,i=1,r=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,d=r+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,d=u+p*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class zS extends si{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Eg(o,e,i,r){const l=BS(r);switch(i){case t_:return o*e;case n_:return o*e/l.components*l.byteLength;case uh:return o*e/l.components*l.byteLength;case i_:return o*e*2/l.components*l.byteLength;case fh:return o*e*2/l.components*l.byteLength;case e_:return o*e*3/l.components*l.byteLength;case mi:return o*e*4/l.components*l.byteLength;case dh:return o*e*4/l.components*l.byteLength;case vc:case xc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case yc:case Sc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Ud:case Ld:return Math.max(o,16)*Math.max(e,8)/4;case Dd:case Nd:return Math.max(o,8)*Math.max(e,8)/2;case Od:case Pd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case zd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Bd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Id:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Fd:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Hd:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Gd:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Vd:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case kd:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Xd:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Wd:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case jd:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case qd:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Yd:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Zd:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Kd:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Mc:case Qd:case Jd:return Math.ceil(o/4)*Math.ceil(e/4)*16;case a_:case $d:return Math.ceil(o/4)*Math.ceil(e/4)*8;case th:case eh:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function BS(o){switch(o){case ia:case Qg:return{byteLength:1,components:1};case Co:case Jg:case No:return{byteLength:2,components:1};case lh:case ch:return{byteLength:2,components:4};case Mr:case oh:case $i:return{byteLength:4,components:1};case $g:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function y_(){let o=null,e=!1,i=null,r=null;function l(u,d){i(u,d),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function IS(o){const e=new WeakMap;function i(h,m){const p=h.array,g=h.usage,v=p.byteLength,x=o.createBuffer();o.bindBuffer(m,x),o.bufferData(m,p,g),h.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=o.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:v}}function r(h,m,p){const g=m.array,v=m.updateRanges;if(o.bindBuffer(p,h),v.length===0)o.bufferSubData(p,0,g);else{v.sort((M,A)=>M.start-A.start);let x=0;for(let M=1;M<v.length;M++){const A=v[x],C=v[M];C.start<=A.start+A.count+1?A.count=Math.max(A.count,C.start+C.count-A.start):(++x,v[x]=C)}v.length=x+1;for(let M=0,A=v.length;M<A;M++){const C=v[M];o.bufferSubData(p,C.start*g.BYTES_PER_ELEMENT,g,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(o.deleteBuffer(m.buffer),e.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=e.get(h);(!g||g.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:u,update:d}}var FS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,HS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,GS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,VS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,XS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,WS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,jS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,YS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ZS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,KS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,QS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,JS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$S=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,tM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,eM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,iM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,aM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,oM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,lM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,uM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,fM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mM="gl_FragColor = linearToOutputTexel( gl_FragColor );",gM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_M=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,vM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,yM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,SM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,MM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,EM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,TM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,AM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,RM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,CM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,DM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,UM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,NM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,LM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,OM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,PM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,BM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,IM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,FM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,HM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,GM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,VM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,XM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,WM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,YM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ZM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,KM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,QM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,JM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$M=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,t1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,e1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,n1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,i1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,a1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,r1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,o1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,l1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,c1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,u1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,f1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,d1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,h1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,p1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,m1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,g1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,v1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,x1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,y1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,S1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,M1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,E1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,b1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,T1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,A1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,R1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,C1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,w1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,D1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,U1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,N1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,L1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,O1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,P1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,z1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,B1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const I1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,F1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,G1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,k1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,W1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,j1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,q1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Y1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Z1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Q1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,J1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,iE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,rE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,sE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,cE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,hE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,gE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_E=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ce={alphahash_fragment:FS,alphahash_pars_fragment:HS,alphamap_fragment:GS,alphamap_pars_fragment:VS,alphatest_fragment:kS,alphatest_pars_fragment:XS,aomap_fragment:WS,aomap_pars_fragment:jS,batching_pars_vertex:qS,batching_vertex:YS,begin_vertex:ZS,beginnormal_vertex:KS,bsdfs:QS,iridescence_fragment:JS,bumpmap_pars_fragment:$S,clipping_planes_fragment:tM,clipping_planes_pars_fragment:eM,clipping_planes_pars_vertex:nM,clipping_planes_vertex:iM,color_fragment:aM,color_pars_fragment:rM,color_pars_vertex:sM,color_vertex:oM,common:lM,cube_uv_reflection_fragment:cM,defaultnormal_vertex:uM,displacementmap_pars_vertex:fM,displacementmap_vertex:dM,emissivemap_fragment:hM,emissivemap_pars_fragment:pM,colorspace_fragment:mM,colorspace_pars_fragment:gM,envmap_fragment:_M,envmap_common_pars_fragment:vM,envmap_pars_fragment:xM,envmap_pars_vertex:yM,envmap_physical_pars_fragment:UM,envmap_vertex:SM,fog_vertex:MM,fog_pars_vertex:EM,fog_fragment:bM,fog_pars_fragment:TM,gradientmap_pars_fragment:AM,lightmap_pars_fragment:RM,lights_lambert_fragment:CM,lights_lambert_pars_fragment:wM,lights_pars_begin:DM,lights_toon_fragment:NM,lights_toon_pars_fragment:LM,lights_phong_fragment:OM,lights_phong_pars_fragment:PM,lights_physical_fragment:zM,lights_physical_pars_fragment:BM,lights_fragment_begin:IM,lights_fragment_maps:FM,lights_fragment_end:HM,logdepthbuf_fragment:GM,logdepthbuf_pars_fragment:VM,logdepthbuf_pars_vertex:kM,logdepthbuf_vertex:XM,map_fragment:WM,map_pars_fragment:jM,map_particle_fragment:qM,map_particle_pars_fragment:YM,metalnessmap_fragment:ZM,metalnessmap_pars_fragment:KM,morphinstance_vertex:QM,morphcolor_vertex:JM,morphnormal_vertex:$M,morphtarget_pars_vertex:t1,morphtarget_vertex:e1,normal_fragment_begin:n1,normal_fragment_maps:i1,normal_pars_fragment:a1,normal_pars_vertex:r1,normal_vertex:s1,normalmap_pars_fragment:o1,clearcoat_normal_fragment_begin:l1,clearcoat_normal_fragment_maps:c1,clearcoat_pars_fragment:u1,iridescence_pars_fragment:f1,opaque_fragment:d1,packing:h1,premultiplied_alpha_fragment:p1,project_vertex:m1,dithering_fragment:g1,dithering_pars_fragment:_1,roughnessmap_fragment:v1,roughnessmap_pars_fragment:x1,shadowmap_pars_fragment:y1,shadowmap_pars_vertex:S1,shadowmap_vertex:M1,shadowmask_pars_fragment:E1,skinbase_vertex:b1,skinning_pars_vertex:T1,skinning_vertex:A1,skinnormal_vertex:R1,specularmap_fragment:C1,specularmap_pars_fragment:w1,tonemapping_fragment:D1,tonemapping_pars_fragment:U1,transmission_fragment:N1,transmission_pars_fragment:L1,uv_pars_fragment:O1,uv_pars_vertex:P1,uv_vertex:z1,worldpos_vertex:B1,background_vert:I1,background_frag:F1,backgroundCube_vert:H1,backgroundCube_frag:G1,cube_vert:V1,cube_frag:k1,depth_vert:X1,depth_frag:W1,distanceRGBA_vert:j1,distanceRGBA_frag:q1,equirect_vert:Y1,equirect_frag:Z1,linedashed_vert:K1,linedashed_frag:Q1,meshbasic_vert:J1,meshbasic_frag:$1,meshlambert_vert:tE,meshlambert_frag:eE,meshmatcap_vert:nE,meshmatcap_frag:iE,meshnormal_vert:aE,meshnormal_frag:rE,meshphong_vert:sE,meshphong_frag:oE,meshphysical_vert:lE,meshphysical_frag:cE,meshtoon_vert:uE,meshtoon_frag:fE,points_vert:dE,points_frag:hE,shadow_vert:pE,shadow_frag:mE,sprite_vert:gE,sprite_frag:_E},Lt={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new se}},envmap:{envMap:{value:null},envMapRotation:{value:new se},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new se},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0},uvTransform:{value:new se}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}}},bi={basic:{uniforms:Dn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:Dn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Te(0)}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:Dn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:Dn([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:Dn([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new Te(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:Dn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:Dn([Lt.points,Lt.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:Dn([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:Dn([Lt.common,Lt.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:Dn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:Dn([Lt.sprite,Lt.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new se}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distanceRGBA:{uniforms:Dn([Lt.common,Lt.displacementmap,{referencePosition:{value:new st},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distanceRGBA_vert,fragmentShader:ce.distanceRGBA_frag},shadow:{uniforms:Dn([Lt.lights,Lt.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};bi.physical={uniforms:Dn([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new se},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new se},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new se},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new se},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new se},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new se},anisotropyVector:{value:new Ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new se}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};const mc={r:0,b:0,g:0},dr=new aa,vE=new $e;function xE(o,e,i,r,l,u,d){const h=new Te(0);let m=u===!0?0:1,p,g,v=null,x=0,M=null;function A(O){let U=O.isScene===!0?O.background:null;return U&&U.isTexture&&(U=(O.backgroundBlurriness>0?i:e).get(U)),U}function C(O){let U=!1;const k=A(O);k===null?_(h,m):k&&k.isColor&&(_(k,1),U=!0);const X=o.xr.getEnvironmentBlendMode();X==="additive"?r.buffers.color.setClear(0,0,0,1,d):X==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(o.autoClear||U)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function S(O,U){const k=A(U);k&&(k.isCubeTexture||k.mapping===Rc)?(g===void 0&&(g=new ea(new Bo(1,1,1),new Va({name:"BackgroundCubeMaterial",uniforms:Es(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(X,F,Z){this.matrixWorld.copyPosition(Z.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),dr.copy(U.backgroundRotation),dr.x*=-1,dr.y*=-1,dr.z*=-1,k.isCubeTexture&&k.isRenderTargetTexture===!1&&(dr.y*=-1,dr.z*=-1),g.material.uniforms.envMap.value=k,g.material.uniforms.flipEnvMap.value=k.isCubeTexture&&k.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(vE.makeRotationFromEuler(dr)),g.material.toneMapped=be.getTransfer(k.colorSpace)!==Be,(v!==k||x!==k.version||M!==o.toneMapping)&&(g.material.needsUpdate=!0,v=k,x=k.version,M=o.toneMapping),g.layers.enableAll(),O.unshift(g,g.geometry,g.material,0,0,null)):k&&k.isTexture&&(p===void 0&&(p=new ea(new wc(2,2),new Va({name:"BackgroundMaterial",uniforms:Es(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:Ga,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=k,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.toneMapped=be.getTransfer(k.colorSpace)!==Be,k.matrixAutoUpdate===!0&&k.updateMatrix(),p.material.uniforms.uvTransform.value.copy(k.matrix),(v!==k||x!==k.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,v=k,x=k.version,M=o.toneMapping),p.layers.enableAll(),O.unshift(p,p.geometry,p.material,0,0,null))}function _(O,U){O.getRGB(mc,p_(o)),r.buffers.color.setClear(mc.r,mc.g,mc.b,U,d)}function I(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(O,U=1){h.set(O),m=U,_(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(O){m=O,_(h,m)},render:C,addToRenderList:S,dispose:I}}function yE(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=x(null);let u=l,d=!1;function h(R,G,ct,ot,vt){let ht=!1;const P=v(ot,ct,G);u!==P&&(u=P,p(u.object)),ht=M(R,ot,ct,vt),ht&&A(R,ot,ct,vt),vt!==null&&e.update(vt,o.ELEMENT_ARRAY_BUFFER),(ht||d)&&(d=!1,U(R,G,ct,ot),vt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(vt).buffer))}function m(){return o.createVertexArray()}function p(R){return o.bindVertexArray(R)}function g(R){return o.deleteVertexArray(R)}function v(R,G,ct){const ot=ct.wireframe===!0;let vt=r[R.id];vt===void 0&&(vt={},r[R.id]=vt);let ht=vt[G.id];ht===void 0&&(ht={},vt[G.id]=ht);let P=ht[ot];return P===void 0&&(P=x(m()),ht[ot]=P),P}function x(R){const G=[],ct=[],ot=[];for(let vt=0;vt<i;vt++)G[vt]=0,ct[vt]=0,ot[vt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:ct,attributeDivisors:ot,object:R,attributes:{},index:null}}function M(R,G,ct,ot){const vt=u.attributes,ht=G.attributes;let P=0;const K=ct.getAttributes();for(const q in K)if(K[q].location>=0){const D=vt[q];let tt=ht[q];if(tt===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&(tt=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&(tt=R.instanceColor)),D===void 0||D.attribute!==tt||tt&&D.data!==tt.data)return!0;P++}return u.attributesNum!==P||u.index!==ot}function A(R,G,ct,ot){const vt={},ht=G.attributes;let P=0;const K=ct.getAttributes();for(const q in K)if(K[q].location>=0){let D=ht[q];D===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&(D=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&(D=R.instanceColor));const tt={};tt.attribute=D,D&&D.data&&(tt.data=D.data),vt[q]=tt,P++}u.attributes=vt,u.attributesNum=P,u.index=ot}function C(){const R=u.newAttributes;for(let G=0,ct=R.length;G<ct;G++)R[G]=0}function S(R){_(R,0)}function _(R,G){const ct=u.newAttributes,ot=u.enabledAttributes,vt=u.attributeDivisors;ct[R]=1,ot[R]===0&&(o.enableVertexAttribArray(R),ot[R]=1),vt[R]!==G&&(o.vertexAttribDivisor(R,G),vt[R]=G)}function I(){const R=u.newAttributes,G=u.enabledAttributes;for(let ct=0,ot=G.length;ct<ot;ct++)G[ct]!==R[ct]&&(o.disableVertexAttribArray(ct),G[ct]=0)}function O(R,G,ct,ot,vt,ht,P){P===!0?o.vertexAttribIPointer(R,G,ct,vt,ht):o.vertexAttribPointer(R,G,ct,ot,vt,ht)}function U(R,G,ct,ot){C();const vt=ot.attributes,ht=ct.getAttributes(),P=G.defaultAttributeValues;for(const K in ht){const q=ht[K];if(q.location>=0){let Et=vt[K];if(Et===void 0&&(K==="instanceMatrix"&&R.instanceMatrix&&(Et=R.instanceMatrix),K==="instanceColor"&&R.instanceColor&&(Et=R.instanceColor)),Et!==void 0){const D=Et.normalized,tt=Et.itemSize,xt=e.get(Et);if(xt===void 0)continue;const St=xt.buffer,J=xt.type,mt=xt.bytesPerElement,Mt=J===o.INT||J===o.UNSIGNED_INT||Et.gpuType===oh;if(Et.isInterleavedBufferAttribute){const Rt=Et.data,wt=Rt.stride,oe=Et.offset;if(Rt.isInstancedInterleavedBuffer){for(let Qt=0;Qt<q.locationSize;Qt++)_(q.location+Qt,Rt.meshPerAttribute);R.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=Rt.meshPerAttribute*Rt.count)}else for(let Qt=0;Qt<q.locationSize;Qt++)S(q.location+Qt);o.bindBuffer(o.ARRAY_BUFFER,St);for(let Qt=0;Qt<q.locationSize;Qt++)O(q.location+Qt,tt/q.locationSize,J,D,wt*mt,(oe+tt/q.locationSize*Qt)*mt,Mt)}else{if(Et.isInstancedBufferAttribute){for(let Rt=0;Rt<q.locationSize;Rt++)_(q.location+Rt,Et.meshPerAttribute);R.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let Rt=0;Rt<q.locationSize;Rt++)S(q.location+Rt);o.bindBuffer(o.ARRAY_BUFFER,St);for(let Rt=0;Rt<q.locationSize;Rt++)O(q.location+Rt,tt/q.locationSize,J,D,tt*mt,tt/q.locationSize*Rt*mt,Mt)}}else if(P!==void 0){const D=P[K];if(D!==void 0)switch(D.length){case 2:o.vertexAttrib2fv(q.location,D);break;case 3:o.vertexAttrib3fv(q.location,D);break;case 4:o.vertexAttrib4fv(q.location,D);break;default:o.vertexAttrib1fv(q.location,D)}}}}I()}function k(){Z();for(const R in r){const G=r[R];for(const ct in G){const ot=G[ct];for(const vt in ot)g(ot[vt].object),delete ot[vt];delete G[ct]}delete r[R]}}function X(R){if(r[R.id]===void 0)return;const G=r[R.id];for(const ct in G){const ot=G[ct];for(const vt in ot)g(ot[vt].object),delete ot[vt];delete G[ct]}delete r[R.id]}function F(R){for(const G in r){const ct=r[G];if(ct[R.id]===void 0)continue;const ot=ct[R.id];for(const vt in ot)g(ot[vt].object),delete ot[vt];delete ct[R.id]}}function Z(){w(),d=!0,u!==l&&(u=l,p(u.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:Z,resetDefaultState:w,dispose:k,releaseStatesOfGeometry:X,releaseStatesOfProgram:F,initAttributes:C,enableAttribute:S,disableUnusedAttributes:I}}function SE(o,e,i){let r;function l(p){r=p}function u(p,g){o.drawArrays(r,p,g),i.update(g,r,1)}function d(p,g,v){v!==0&&(o.drawArraysInstanced(r,p,g,v),i.update(g,r,v))}function h(p,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,v);let M=0;for(let A=0;A<v;A++)M+=g[A];i.update(M,r,1)}function m(p,g,v,x){if(v===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let A=0;A<p.length;A++)d(p[A],g[A],x[A]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,g,0,x,0,v);let A=0;for(let C=0;C<v;C++)A+=g[C]*x[C];i.update(A,r,1)}}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function ME(o,e,i,r){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(F){return!(F!==mi&&r.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(F){const Z=F===No&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==ia&&r.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==$i&&!Z)}function m(F){if(F==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=i.logarithmicDepthBuffer===!0,x=i.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),I=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),O=o.getParameter(o.MAX_VARYING_VECTORS),U=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),k=A>0,X=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:v,reverseDepthBuffer:x,maxTextures:M,maxVertexTextures:A,maxTextureSize:C,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:I,maxVaryings:O,maxFragmentUniforms:U,vertexTextures:k,maxSamples:X}}function EE(o){const e=this;let i=null,r=0,l=!1,u=!1;const d=new pr,h=new se,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const M=v.length!==0||x||r!==0||l;return l=x,r=v.length,M},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,x){i=g(v,x,0)},this.setState=function(v,x,M){const A=v.clippingPlanes,C=v.clipIntersection,S=v.clipShadows,_=o.get(v);if(!l||A===null||A.length===0||u&&!S)u?g(null):p();else{const I=u?0:r,O=I*4;let U=_.clippingState||null;m.value=U,U=g(A,x,O,M);for(let k=0;k!==O;++k)U[k]=i[k];_.clippingState=U,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=I}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(v,x,M,A){const C=v!==null?v.length:0;let S=null;if(C!==0){if(S=m.value,A!==!0||S===null){const _=M+C*4,I=x.matrixWorldInverse;h.getNormalMatrix(I),(S===null||S.length<_)&&(S=new Float32Array(_));for(let O=0,U=M;O!==C;++O,U+=4)d.copy(v[O]).applyMatrix4(I,h),d.normal.toArray(S,U),S[U+3]=d.constant}m.value=S,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,S}}function bE(o){let e=new WeakMap;function i(d,h){return h===Ad?d.mapping=ys:h===Rd&&(d.mapping=Ss),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===Ad||h===Rd)if(e.has(d)){const m=e.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new AS(m.height);return p.fromEquirectangularTexture(o,d),e.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const ms=4,bg=[.125,.215,.35,.446,.526,.582],_r=20,ud=new PS,Tg=new Te;let fd=null,dd=0,hd=0,pd=!1;const mr=(1+Math.sqrt(5))/2,ps=1/mr,Ag=[new st(-mr,ps,0),new st(mr,ps,0),new st(-ps,0,mr),new st(ps,0,mr),new st(0,mr,-ps),new st(0,mr,ps),new st(-1,1,-1),new st(1,1,-1),new st(-1,1,1),new st(1,1,1)],TE=new st;class Rg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100,u={}){const{size:d=256,position:h=TE}=u;fd=this._renderer.getRenderTarget(),dd=this._renderer.getActiveCubeFace(),hd=this._renderer.getActiveMipmapLevel(),pd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(fd,dd,hd),this._renderer.xr.enabled=pd,e.scissorTest=!1,gc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===ys||e.mapping===Ss?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fd=this._renderer.getRenderTarget(),dd=this._renderer.getActiveCubeFace(),hd=this._renderer.getActiveMipmapLevel(),pd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ti,minFilter:Ti,generateMipmaps:!1,type:No,format:mi,colorSpace:Ms,depthBuffer:!1},l=Cg(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cg(e,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=AE(u)),this._blurMaterial=RE(u,e,i)}return l}_compileMaterial(e){const i=new ea(this._lodPlanes[0],e);this._renderer.compile(i,ud)}_sceneToCubeUV(e,i,r,l,u){const m=new si(90,1,i,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,M=v.toneMapping;v.getClearColor(Tg),v.toneMapping=Ha,v.autoClear=!1;const A=new f_({name:"PMREM.Background",side:Bn,depthWrite:!1,depthTest:!1}),C=new ea(new Bo,A);let S=!1;const _=e.background;_?_.isColor&&(A.color.copy(_),e.background=null,S=!0):(A.color.copy(Tg),S=!0);for(let I=0;I<6;I++){const O=I%3;O===0?(m.up.set(0,p[I],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+g[I],u.y,u.z)):O===1?(m.up.set(0,0,p[I]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+g[I],u.z)):(m.up.set(0,p[I],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+g[I]));const U=this._cubeSize;gc(l,O*U,I>2?U:0,U,U),v.setRenderTarget(l),S&&v.render(C,m),v.render(e,m)}C.geometry.dispose(),C.material.dispose(),v.toneMapping=M,v.autoClear=x,e.background=_}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===ys||e.mapping===Ss;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wg());const u=l?this._cubemapMaterial:this._equirectMaterial,d=new ea(this._lodPlanes[0],u),h=u.uniforms;h.envMap.value=e;const m=this._cubeSize;gc(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,ud)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const d=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),h=Ag[(l-u-1)%Ag.length];this._blur(e,u-1,u,d,h)}i.autoClear=r}_blur(e,i,r,l,u){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,r,l,"latitudinal",u),this._halfBlur(d,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new ea(this._lodPlanes[l],p),x=p.uniforms,M=this._sizeLods[r]-1,A=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*_r-1),C=u/A,S=isFinite(u)?1+Math.floor(g*C):_r;S>_r&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${_r}`);const _=[];let I=0;for(let F=0;F<_r;++F){const Z=F/C,w=Math.exp(-Z*Z/2);_.push(w),F===0?I+=w:F<S&&(I+=2*w)}for(let F=0;F<_.length;F++)_[F]=_[F]/I;x.envMap.value=e.texture,x.samples.value=S,x.weights.value=_,x.latitudinal.value=d==="latitudinal",h&&(x.poleAxis.value=h);const{_lodMax:O}=this;x.dTheta.value=A,x.mipInt.value=O-r;const U=this._sizeLods[l],k=3*U*(l>O-ms?l-O+ms:0),X=4*(this._cubeSize-U);gc(i,k,X,3*U,2*U),m.setRenderTarget(i),m.render(v,ud)}}function AE(o){const e=[],i=[],r=[];let l=o;const u=o-ms+1+bg.length;for(let d=0;d<u;d++){const h=Math.pow(2,l);i.push(h);let m=1/h;d>o-ms?m=bg[d-o+ms-1]:d===0&&(m=0),r.push(m);const p=1/(h-2),g=-p,v=1+p,x=[g,g,v,g,v,v,g,g,v,v,g,v],M=6,A=6,C=3,S=2,_=1,I=new Float32Array(C*A*M),O=new Float32Array(S*A*M),U=new Float32Array(_*A*M);for(let X=0;X<M;X++){const F=X%3*2/3-1,Z=X>2?0:-1,w=[F,Z,0,F+2/3,Z,0,F+2/3,Z+1,0,F,Z,0,F+2/3,Z+1,0,F,Z+1,0];I.set(w,C*A*X),O.set(x,S*A*X);const R=[X,X,X,X,X,X];U.set(R,_*A*X)}const k=new ra;k.setAttribute("position",new oi(I,C)),k.setAttribute("uv",new oi(O,S)),k.setAttribute("faceIndex",new oi(U,_)),e.push(k),l>ms&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function Cg(o,e,i){const r=new Er(o,e,i);return r.texture.mapping=Rc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function gc(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function RE(o,e,i){const r=new Float32Array(_r),l=new st(0,1,0);return new Va({name:"SphericalGaussianBlur",defines:{n:_r,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function wg(){return new Va({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function Dg(){return new Va({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function ph(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function CE(o){let e=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===Ad||m===Rd,g=m===ys||m===Ss;if(p||g){let v=e.get(h);const x=v!==void 0?v.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==x)return i===null&&(i=new Rg(o)),v=p?i.fromEquirectangular(h,v):i.fromCubemap(h,v),v.texture.pmremVersion=h.pmremVersion,e.set(h,v),v.texture;if(v!==void 0)return v.texture;{const M=h.image;return p&&M&&M.height>0||g&&M&&l(M)?(i===null&&(i=new Rg(o)),v=p?i.fromEquirectangular(h):i.fromCubemap(h),v.texture.pmremVersion=h.pmremVersion,e.set(h,v),h.addEventListener("dispose",u),v.texture):null}}}return h}function l(h){let m=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&m++;return m===p}function u(h){const m=h.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function d(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function wE(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&_s("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function DE(o,e,i,r){const l={},u=new WeakMap;function d(v){const x=v.target;x.index!==null&&e.remove(x.index);for(const A in x.attributes)e.remove(x.attributes[A]);x.removeEventListener("dispose",d),delete l[x.id];const M=u.get(x);M&&(e.remove(M),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function h(v,x){return l[x.id]===!0||(x.addEventListener("dispose",d),l[x.id]=!0,i.memory.geometries++),x}function m(v){const x=v.attributes;for(const M in x)e.update(x[M],o.ARRAY_BUFFER)}function p(v){const x=[],M=v.index,A=v.attributes.position;let C=0;if(M!==null){const I=M.array;C=M.version;for(let O=0,U=I.length;O<U;O+=3){const k=I[O+0],X=I[O+1],F=I[O+2];x.push(k,X,X,F,F,k)}}else if(A!==void 0){const I=A.array;C=A.version;for(let O=0,U=I.length/3-1;O<U;O+=3){const k=O+0,X=O+1,F=O+2;x.push(k,X,X,F,F,k)}}else return;const S=new(s_(x)?h_:d_)(x,1);S.version=C;const _=u.get(v);_&&e.remove(_),u.set(v,S)}function g(v){const x=u.get(v);if(x){const M=v.index;M!==null&&x.version<M.version&&p(v)}else p(v);return u.get(v)}return{get:h,update:m,getWireframeAttribute:g}}function UE(o,e,i){let r;function l(x){r=x}let u,d;function h(x){u=x.type,d=x.bytesPerElement}function m(x,M){o.drawElements(r,M,u,x*d),i.update(M,r,1)}function p(x,M,A){A!==0&&(o.drawElementsInstanced(r,M,u,x*d,A),i.update(M,r,A))}function g(x,M,A){if(A===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,u,x,0,A);let S=0;for(let _=0;_<A;_++)S+=M[_];i.update(S,r,1)}function v(x,M,A,C){if(A===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let _=0;_<x.length;_++)p(x[_]/d,M[_],C[_]);else{S.multiDrawElementsInstancedWEBGL(r,M,0,u,x,0,C,0,A);let _=0;for(let I=0;I<A;I++)_+=M[I]*C[I];i.update(_,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function NE(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(u/3);break;case o.LINES:i.lines+=h*(u/2);break;case o.LINE_STRIP:i.lines+=h*(u-1);break;case o.LINE_LOOP:i.lines+=h*u;break;case o.POINTS:i.points+=h*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function LE(o,e,i){const r=new WeakMap,l=new Je;function u(d,h,m){const p=d.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=g!==void 0?g.length:0;let x=r.get(h);if(x===void 0||x.count!==v){let R=function(){Z.dispose(),r.delete(h),h.removeEventListener("dispose",R)};var M=R;x!==void 0&&x.texture.dispose();const A=h.morphAttributes.position!==void 0,C=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],I=h.morphAttributes.normal||[],O=h.morphAttributes.color||[];let U=0;A===!0&&(U=1),C===!0&&(U=2),S===!0&&(U=3);let k=h.attributes.position.count*U,X=1;k>e.maxTextureSize&&(X=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);const F=new Float32Array(k*X*4*v),Z=new o_(F,k,X,v);Z.type=$i,Z.needsUpdate=!0;const w=U*4;for(let G=0;G<v;G++){const ct=_[G],ot=I[G],vt=O[G],ht=k*X*4*G;for(let P=0;P<ct.count;P++){const K=P*w;A===!0&&(l.fromBufferAttribute(ct,P),F[ht+K+0]=l.x,F[ht+K+1]=l.y,F[ht+K+2]=l.z,F[ht+K+3]=0),C===!0&&(l.fromBufferAttribute(ot,P),F[ht+K+4]=l.x,F[ht+K+5]=l.y,F[ht+K+6]=l.z,F[ht+K+7]=0),S===!0&&(l.fromBufferAttribute(vt,P),F[ht+K+8]=l.x,F[ht+K+9]=l.y,F[ht+K+10]=l.z,F[ht+K+11]=vt.itemSize===4?l.w:1)}}x={count:v,texture:Z,size:new Ie(k,X)},r.set(h,x),h.addEventListener("dispose",R)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let A=0;for(let S=0;S<p.length;S++)A+=p[S];const C=h.morphTargetsRelative?1:1-A;m.getUniforms().setValue(o,"morphTargetBaseInfluence",C),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:u}}function OE(o,e,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,g=m.geometry,v=e.get(m,g);if(l.get(v)!==p&&(e.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return v}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:d}}const S_=new In,Ug=new x_(1,1),M_=new o_,E_=new cS,b_=new g_,Ng=[],Lg=[],Og=new Float32Array(16),Pg=new Float32Array(9),zg=new Float32Array(4);function As(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let u=Ng[l];if(u===void 0&&(u=new Float32Array(l),Ng[l]=u),e!==0){r.toArray(u,0);for(let d=1,h=0;d!==e;++d)h+=i,o[d].toArray(u,h)}return u}function cn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function un(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Dc(o,e){let i=Lg[e];i===void 0&&(i=new Int32Array(e),Lg[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function PE(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function zE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(cn(i,e))return;o.uniform2fv(this.addr,e),un(i,e)}}function BE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(cn(i,e))return;o.uniform3fv(this.addr,e),un(i,e)}}function IE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(cn(i,e))return;o.uniform4fv(this.addr,e),un(i,e)}}function FE(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(cn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),un(i,e)}else{if(cn(i,r))return;zg.set(r),o.uniformMatrix2fv(this.addr,!1,zg),un(i,r)}}function HE(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(cn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),un(i,e)}else{if(cn(i,r))return;Pg.set(r),o.uniformMatrix3fv(this.addr,!1,Pg),un(i,r)}}function GE(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(cn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),un(i,e)}else{if(cn(i,r))return;Og.set(r),o.uniformMatrix4fv(this.addr,!1,Og),un(i,r)}}function VE(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function kE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(cn(i,e))return;o.uniform2iv(this.addr,e),un(i,e)}}function XE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(cn(i,e))return;o.uniform3iv(this.addr,e),un(i,e)}}function WE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(cn(i,e))return;o.uniform4iv(this.addr,e),un(i,e)}}function jE(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function qE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(cn(i,e))return;o.uniform2uiv(this.addr,e),un(i,e)}}function YE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(cn(i,e))return;o.uniform3uiv(this.addr,e),un(i,e)}}function ZE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(cn(i,e))return;o.uniform4uiv(this.addr,e),un(i,e)}}function KE(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(Ug.compareFunction=r_,u=Ug):u=S_,i.setTexture2D(e||u,l)}function QE(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||E_,l)}function JE(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||b_,l)}function $E(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||M_,l)}function tb(o){switch(o){case 5126:return PE;case 35664:return zE;case 35665:return BE;case 35666:return IE;case 35674:return FE;case 35675:return HE;case 35676:return GE;case 5124:case 35670:return VE;case 35667:case 35671:return kE;case 35668:case 35672:return XE;case 35669:case 35673:return WE;case 5125:return jE;case 36294:return qE;case 36295:return YE;case 36296:return ZE;case 35678:case 36198:case 36298:case 36306:case 35682:return KE;case 35679:case 36299:case 36307:return QE;case 35680:case 36300:case 36308:case 36293:return JE;case 36289:case 36303:case 36311:case 36292:return $E}}function eb(o,e){o.uniform1fv(this.addr,e)}function nb(o,e){const i=As(e,this.size,2);o.uniform2fv(this.addr,i)}function ib(o,e){const i=As(e,this.size,3);o.uniform3fv(this.addr,i)}function ab(o,e){const i=As(e,this.size,4);o.uniform4fv(this.addr,i)}function rb(o,e){const i=As(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function sb(o,e){const i=As(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function ob(o,e){const i=As(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function lb(o,e){o.uniform1iv(this.addr,e)}function cb(o,e){o.uniform2iv(this.addr,e)}function ub(o,e){o.uniform3iv(this.addr,e)}function fb(o,e){o.uniform4iv(this.addr,e)}function db(o,e){o.uniform1uiv(this.addr,e)}function hb(o,e){o.uniform2uiv(this.addr,e)}function pb(o,e){o.uniform3uiv(this.addr,e)}function mb(o,e){o.uniform4uiv(this.addr,e)}function gb(o,e,i){const r=this.cache,l=e.length,u=Dc(i,l);cn(r,u)||(o.uniform1iv(this.addr,u),un(r,u));for(let d=0;d!==l;++d)i.setTexture2D(e[d]||S_,u[d])}function _b(o,e,i){const r=this.cache,l=e.length,u=Dc(i,l);cn(r,u)||(o.uniform1iv(this.addr,u),un(r,u));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||E_,u[d])}function vb(o,e,i){const r=this.cache,l=e.length,u=Dc(i,l);cn(r,u)||(o.uniform1iv(this.addr,u),un(r,u));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||b_,u[d])}function xb(o,e,i){const r=this.cache,l=e.length,u=Dc(i,l);cn(r,u)||(o.uniform1iv(this.addr,u),un(r,u));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||M_,u[d])}function yb(o){switch(o){case 5126:return eb;case 35664:return nb;case 35665:return ib;case 35666:return ab;case 35674:return rb;case 35675:return sb;case 35676:return ob;case 5124:case 35670:return lb;case 35667:case 35671:return cb;case 35668:case 35672:return ub;case 35669:case 35673:return fb;case 5125:return db;case 36294:return hb;case 36295:return pb;case 36296:return mb;case 35678:case 36198:case 36298:case 36306:case 35682:return gb;case 35679:case 36299:case 36307:return _b;case 35680:case 36300:case 36308:case 36293:return vb;case 36289:case 36303:case 36311:case 36292:return xb}}class Sb{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=tb(i.type)}}class Mb{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=yb(i.type)}}class Eb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(e,i[h.id],r)}}}const md=/(\w+)(\])?(\[|\.)?/g;function Bg(o,e){o.seq.push(e),o.map[e.id]=e}function bb(o,e,i){const r=o.name,l=r.length;for(md.lastIndex=0;;){const u=md.exec(r),d=md.lastIndex;let h=u[1];const m=u[2]==="]",p=u[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){Bg(i,p===void 0?new Sb(h,o,e):new Mb(h,o,e));break}else{let v=i.map[h];v===void 0&&(v=new Eb(h),Bg(i,v)),i=v}}}class Ec{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=e.getActiveUniform(i,l),d=e.getUniformLocation(i,u.name);bb(u,d,this)}}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],m=r[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const d=e[l];d.id in i&&r.push(d)}return r}}function Ig(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const Tb=37297;let Ab=0;function Rb(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let d=l;d<u;d++){const h=d+1;r.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const Fg=new se;function Cb(o){be._getMatrix(Fg,be.workingColorSpace,o);const e=`mat3( ${Fg.elements.map(i=>i.toFixed(4))} )`;switch(be.getTransfer(o)){case bc:return[e,"LinearTransferOETF"];case Be:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function Hg(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),l=o.getShaderInfoLog(e).trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const d=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+Rb(o.getShaderSource(e),d)}else return l}function wb(o,e){const i=Cb(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function Db(o,e){let i;switch(e){case Oy:i="Linear";break;case Py:i="Reinhard";break;case zy:i="Cineon";break;case By:i="ACESFilmic";break;case Fy:i="AgX";break;case Hy:i="Neutral";break;case Iy:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const _c=new st;function Ub(){be.getLuminanceCoefficients(_c);const o=_c.x.toFixed(4),e=_c.y.toFixed(4),i=_c.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Nb(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ro).join(`
`)}function Lb(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function Ob(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(e,l),d=u.name;let h=1;u.type===o.FLOAT_MAT2&&(h=2),u.type===o.FLOAT_MAT3&&(h=3),u.type===o.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:o.getAttribLocation(e,d),locationSize:h}}return i}function Ro(o){return o!==""}function Gg(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vg(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Pb=/^[ \t]*#include +<([\w\d./]+)>/gm;function ah(o){return o.replace(Pb,Bb)}const zb=new Map;function Bb(o,e){let i=ce[e];if(i===void 0){const r=zb.get(e);if(r!==void 0)i=ce[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return ah(i)}const Ib=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kg(o){return o.replace(Ib,Fb)}function Fb(o,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function Xg(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Hb(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Yg?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===hy?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Qi&&(e="SHADOWMAP_TYPE_VSM"),e}function Gb(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case ys:case Ss:e="ENVMAP_TYPE_CUBE";break;case Rc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Vb(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Ss:e="ENVMAP_MODE_REFRACTION";break}return e}function kb(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Zg:e="ENVMAP_BLENDING_MULTIPLY";break;case Ny:e="ENVMAP_BLENDING_MIX";break;case Ly:e="ENVMAP_BLENDING_ADD";break}return e}function Xb(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function Wb(o,e,i,r){const l=o.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=Hb(i),p=Gb(i),g=Vb(i),v=kb(i),x=Xb(i),M=Nb(i),A=Lb(u),C=l.createProgram();let S,_,I=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Ro).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Ro).join(`
`),_.length>0&&(_+=`
`)):(S=[Xg(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ro).join(`
`),_=[Xg(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ha?"#define TONE_MAPPING":"",i.toneMapping!==Ha?ce.tonemapping_pars_fragment:"",i.toneMapping!==Ha?Db("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,wb("linearToOutputTexel",i.outputColorSpace),Ub(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ro).join(`
`)),d=ah(d),d=Gg(d,i),d=Vg(d,i),h=ah(h),h=Gg(h,i),h=Vg(h,i),d=kg(d),h=kg(h),i.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",i.glslVersion===ig?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===ig?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const O=I+S+d,U=I+_+h,k=Ig(l,l.VERTEX_SHADER,O),X=Ig(l,l.FRAGMENT_SHADER,U);l.attachShader(C,k),l.attachShader(C,X),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function F(G){if(o.debug.checkShaderErrors){const ct=l.getProgramInfoLog(C).trim(),ot=l.getShaderInfoLog(k).trim(),vt=l.getShaderInfoLog(X).trim();let ht=!0,P=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(ht=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,k,X);else{const K=Hg(l,k,"vertex"),q=Hg(l,X,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+ct+`
`+K+`
`+q)}else ct!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ct):(ot===""||vt==="")&&(P=!1);P&&(G.diagnostics={runnable:ht,programLog:ct,vertexShader:{log:ot,prefix:S},fragmentShader:{log:vt,prefix:_}})}l.deleteShader(k),l.deleteShader(X),Z=new Ec(l,C),w=Ob(l,C)}let Z;this.getUniforms=function(){return Z===void 0&&F(this),Z};let w;this.getAttributes=function(){return w===void 0&&F(this),w};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(C,Tb)),R},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Ab++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=k,this.fragmentShader=X,this}let jb=0;class qb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new Yb(e),i.set(e,r)),r}}class Yb{constructor(e){this.id=jb++,this.code=e,this.usedTimes=0}}function Zb(o,e,i,r,l,u,d){const h=new c_,m=new qb,p=new Set,g=[],v=l.logarithmicDepthBuffer,x=l.vertexTextures;let M=l.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(w){return p.add(w),w===0?"uv":`uv${w}`}function S(w,R,G,ct,ot){const vt=ct.fog,ht=ot.geometry,P=w.isMeshStandardMaterial?ct.environment:null,K=(w.isMeshStandardMaterial?i:e).get(w.envMap||P),q=K&&K.mapping===Rc?K.image.height:null,Et=A[w.type];w.precision!==null&&(M=l.getMaxPrecision(w.precision),M!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",M,"instead."));const D=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,tt=D!==void 0?D.length:0;let xt=0;ht.morphAttributes.position!==void 0&&(xt=1),ht.morphAttributes.normal!==void 0&&(xt=2),ht.morphAttributes.color!==void 0&&(xt=3);let St,J,mt,Mt;if(Et){const Me=bi[Et];St=Me.vertexShader,J=Me.fragmentShader}else St=w.vertexShader,J=w.fragmentShader,m.update(w),mt=m.getVertexShaderID(w),Mt=m.getFragmentShaderID(w);const Rt=o.getRenderTarget(),wt=o.state.buffers.depth.getReversed(),oe=ot.isInstancedMesh===!0,Qt=ot.isBatchedMesh===!0,Ne=!!w.map,Fe=!!w.matcap,ge=!!K,B=!!w.aoMap,vn=!!w.lightMap,Se=!!w.bumpMap,he=!!w.normalMap,Vt=!!w.displacementMap,_e=!!w.emissiveMap,Yt=!!w.metalnessMap,ae=!!w.roughnessMap,Ze=w.anisotropy>0,N=w.clearcoat>0,E=w.dispersion>0,et=w.iridescence>0,ft=w.sheen>0,pt=w.transmission>0,lt=Ze&&!!w.anisotropyMap,Pt=N&&!!w.clearcoatMap,Ut=N&&!!w.clearcoatNormalMap,Gt=N&&!!w.clearcoatRoughnessMap,kt=et&&!!w.iridescenceMap,yt=et&&!!w.iridescenceThicknessMap,zt=ft&&!!w.sheenColorMap,jt=ft&&!!w.sheenRoughnessMap,qt=!!w.specularMap,Ct=!!w.specularColorMap,ie=!!w.specularIntensityMap,V=pt&&!!w.transmissionMap,Nt=pt&&!!w.thicknessMap,bt=!!w.gradientMap,Bt=!!w.alphaMap,At=w.alphaTest>0,_t=!!w.alphaHash,Ft=!!w.extensions;let ne=Ha;w.toneMapped&&(Rt===null||Rt.isXRRenderTarget===!0)&&(ne=o.toneMapping);const we={shaderID:Et,shaderType:w.type,shaderName:w.name,vertexShader:St,fragmentShader:J,defines:w.defines,customVertexShaderID:mt,customFragmentShaderID:Mt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:M,batching:Qt,batchingColor:Qt&&ot._colorsTexture!==null,instancing:oe,instancingColor:oe&&ot.instanceColor!==null,instancingMorph:oe&&ot.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:Rt===null?o.outputColorSpace:Rt.isXRRenderTarget===!0?Rt.texture.colorSpace:Ms,alphaToCoverage:!!w.alphaToCoverage,map:Ne,matcap:Fe,envMap:ge,envMapMode:ge&&K.mapping,envMapCubeUVHeight:q,aoMap:B,lightMap:vn,bumpMap:Se,normalMap:he,displacementMap:x&&Vt,emissiveMap:_e,normalMapObjectSpace:he&&w.normalMapType===Wy,normalMapTangentSpace:he&&w.normalMapType===Xy,metalnessMap:Yt,roughnessMap:ae,anisotropy:Ze,anisotropyMap:lt,clearcoat:N,clearcoatMap:Pt,clearcoatNormalMap:Ut,clearcoatRoughnessMap:Gt,dispersion:E,iridescence:et,iridescenceMap:kt,iridescenceThicknessMap:yt,sheen:ft,sheenColorMap:zt,sheenRoughnessMap:jt,specularMap:qt,specularColorMap:Ct,specularIntensityMap:ie,transmission:pt,transmissionMap:V,thicknessMap:Nt,gradientMap:bt,opaque:w.transparent===!1&&w.blending===gs&&w.alphaToCoverage===!1,alphaMap:Bt,alphaTest:At,alphaHash:_t,combine:w.combine,mapUv:Ne&&C(w.map.channel),aoMapUv:B&&C(w.aoMap.channel),lightMapUv:vn&&C(w.lightMap.channel),bumpMapUv:Se&&C(w.bumpMap.channel),normalMapUv:he&&C(w.normalMap.channel),displacementMapUv:Vt&&C(w.displacementMap.channel),emissiveMapUv:_e&&C(w.emissiveMap.channel),metalnessMapUv:Yt&&C(w.metalnessMap.channel),roughnessMapUv:ae&&C(w.roughnessMap.channel),anisotropyMapUv:lt&&C(w.anisotropyMap.channel),clearcoatMapUv:Pt&&C(w.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&C(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Gt&&C(w.clearcoatRoughnessMap.channel),iridescenceMapUv:kt&&C(w.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&C(w.iridescenceThicknessMap.channel),sheenColorMapUv:zt&&C(w.sheenColorMap.channel),sheenRoughnessMapUv:jt&&C(w.sheenRoughnessMap.channel),specularMapUv:qt&&C(w.specularMap.channel),specularColorMapUv:Ct&&C(w.specularColorMap.channel),specularIntensityMapUv:ie&&C(w.specularIntensityMap.channel),transmissionMapUv:V&&C(w.transmissionMap.channel),thicknessMapUv:Nt&&C(w.thicknessMap.channel),alphaMapUv:Bt&&C(w.alphaMap.channel),vertexTangents:!!ht.attributes.tangent&&(he||Ze),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,pointsUvs:ot.isPoints===!0&&!!ht.attributes.uv&&(Ne||Bt),fog:!!vt,useFog:w.fog===!0,fogExp2:!!vt&&vt.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:wt,skinning:ot.isSkinnedMesh===!0,morphTargets:ht.morphAttributes.position!==void 0,morphNormals:ht.morphAttributes.normal!==void 0,morphColors:ht.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:xt,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&G.length>0,shadowMapType:o.shadowMap.type,toneMapping:ne,decodeVideoTexture:Ne&&w.map.isVideoTexture===!0&&be.getTransfer(w.map.colorSpace)===Be,decodeVideoTextureEmissive:_e&&w.emissiveMap.isVideoTexture===!0&&be.getTransfer(w.emissiveMap.colorSpace)===Be,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ji,flipSided:w.side===Bn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ft&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&w.extensions.multiDraw===!0||Qt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return we.vertexUv1s=p.has(1),we.vertexUv2s=p.has(2),we.vertexUv3s=p.has(3),p.clear(),we}function _(w){const R=[];if(w.shaderID?R.push(w.shaderID):(R.push(w.customVertexShaderID),R.push(w.customFragmentShaderID)),w.defines!==void 0)for(const G in w.defines)R.push(G),R.push(w.defines[G]);return w.isRawShaderMaterial===!1&&(I(R,w),O(R,w),R.push(o.outputColorSpace)),R.push(w.customProgramCacheKey),R.join()}function I(w,R){w.push(R.precision),w.push(R.outputColorSpace),w.push(R.envMapMode),w.push(R.envMapCubeUVHeight),w.push(R.mapUv),w.push(R.alphaMapUv),w.push(R.lightMapUv),w.push(R.aoMapUv),w.push(R.bumpMapUv),w.push(R.normalMapUv),w.push(R.displacementMapUv),w.push(R.emissiveMapUv),w.push(R.metalnessMapUv),w.push(R.roughnessMapUv),w.push(R.anisotropyMapUv),w.push(R.clearcoatMapUv),w.push(R.clearcoatNormalMapUv),w.push(R.clearcoatRoughnessMapUv),w.push(R.iridescenceMapUv),w.push(R.iridescenceThicknessMapUv),w.push(R.sheenColorMapUv),w.push(R.sheenRoughnessMapUv),w.push(R.specularMapUv),w.push(R.specularColorMapUv),w.push(R.specularIntensityMapUv),w.push(R.transmissionMapUv),w.push(R.thicknessMapUv),w.push(R.combine),w.push(R.fogExp2),w.push(R.sizeAttenuation),w.push(R.morphTargetsCount),w.push(R.morphAttributeCount),w.push(R.numDirLights),w.push(R.numPointLights),w.push(R.numSpotLights),w.push(R.numSpotLightMaps),w.push(R.numHemiLights),w.push(R.numRectAreaLights),w.push(R.numDirLightShadows),w.push(R.numPointLightShadows),w.push(R.numSpotLightShadows),w.push(R.numSpotLightShadowsWithMaps),w.push(R.numLightProbes),w.push(R.shadowMapType),w.push(R.toneMapping),w.push(R.numClippingPlanes),w.push(R.numClipIntersection),w.push(R.depthPacking)}function O(w,R){h.disableAll(),R.supportsVertexTextures&&h.enable(0),R.instancing&&h.enable(1),R.instancingColor&&h.enable(2),R.instancingMorph&&h.enable(3),R.matcap&&h.enable(4),R.envMap&&h.enable(5),R.normalMapObjectSpace&&h.enable(6),R.normalMapTangentSpace&&h.enable(7),R.clearcoat&&h.enable(8),R.iridescence&&h.enable(9),R.alphaTest&&h.enable(10),R.vertexColors&&h.enable(11),R.vertexAlphas&&h.enable(12),R.vertexUv1s&&h.enable(13),R.vertexUv2s&&h.enable(14),R.vertexUv3s&&h.enable(15),R.vertexTangents&&h.enable(16),R.anisotropy&&h.enable(17),R.alphaHash&&h.enable(18),R.batching&&h.enable(19),R.dispersion&&h.enable(20),R.batchingColor&&h.enable(21),R.gradientMap&&h.enable(22),w.push(h.mask),h.disableAll(),R.fog&&h.enable(0),R.useFog&&h.enable(1),R.flatShading&&h.enable(2),R.logarithmicDepthBuffer&&h.enable(3),R.reverseDepthBuffer&&h.enable(4),R.skinning&&h.enable(5),R.morphTargets&&h.enable(6),R.morphNormals&&h.enable(7),R.morphColors&&h.enable(8),R.premultipliedAlpha&&h.enable(9),R.shadowMapEnabled&&h.enable(10),R.doubleSided&&h.enable(11),R.flipSided&&h.enable(12),R.useDepthPacking&&h.enable(13),R.dithering&&h.enable(14),R.transmission&&h.enable(15),R.sheen&&h.enable(16),R.opaque&&h.enable(17),R.pointsUvs&&h.enable(18),R.decodeVideoTexture&&h.enable(19),R.decodeVideoTextureEmissive&&h.enable(20),R.alphaToCoverage&&h.enable(21),w.push(h.mask)}function U(w){const R=A[w.type];let G;if(R){const ct=bi[R];G=MS.clone(ct.uniforms)}else G=w.uniforms;return G}function k(w,R){let G;for(let ct=0,ot=g.length;ct<ot;ct++){const vt=g[ct];if(vt.cacheKey===R){G=vt,++G.usedTimes;break}}return G===void 0&&(G=new Wb(o,R,w,u),g.push(G)),G}function X(w){if(--w.usedTimes===0){const R=g.indexOf(w);g[R]=g[g.length-1],g.pop(),w.destroy()}}function F(w){m.remove(w)}function Z(){m.dispose()}return{getParameters:S,getProgramCacheKey:_,getUniforms:U,acquireProgram:k,releaseProgram:X,releaseShaderCache:F,programs:g,dispose:Z}}function Kb(){let o=new WeakMap;function e(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function r(d){o.delete(d)}function l(d,h,m){o.get(d)[h]=m}function u(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:u}}function Qb(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Wg(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function jg(){const o=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function d(v,x,M,A,C,S){let _=o[e];return _===void 0?(_={id:v.id,object:v,geometry:x,material:M,groupOrder:A,renderOrder:v.renderOrder,z:C,group:S},o[e]=_):(_.id=v.id,_.object=v,_.geometry=x,_.material=M,_.groupOrder=A,_.renderOrder=v.renderOrder,_.z=C,_.group=S),e++,_}function h(v,x,M,A,C,S){const _=d(v,x,M,A,C,S);M.transmission>0?r.push(_):M.transparent===!0?l.push(_):i.push(_)}function m(v,x,M,A,C,S){const _=d(v,x,M,A,C,S);M.transmission>0?r.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function p(v,x){i.length>1&&i.sort(v||Qb),r.length>1&&r.sort(x||Wg),l.length>1&&l.sort(x||Wg)}function g(){for(let v=e,x=o.length;v<x;v++){const M=o[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:h,unshift:m,finish:g,sort:p}}function Jb(){let o=new WeakMap;function e(r,l){const u=o.get(r);let d;return u===void 0?(d=new jg,o.set(r,[d])):l>=u.length?(d=new jg,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function $b(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new st,color:new Te};break;case"SpotLight":i={position:new st,direction:new st,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new st,color:new Te,distance:0,decay:0};break;case"HemisphereLight":i={direction:new st,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":i={color:new Te,position:new st,halfWidth:new st,halfHeight:new st};break}return o[e.id]=i,i}}}function tT(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let eT=0;function nT(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function iT(o){const e=new $b,i=tT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new st);const l=new st,u=new $e,d=new $e;function h(p){let g=0,v=0,x=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let M=0,A=0,C=0,S=0,_=0,I=0,O=0,U=0,k=0,X=0,F=0;p.sort(nT);for(let w=0,R=p.length;w<R;w++){const G=p[w],ct=G.color,ot=G.intensity,vt=G.distance,ht=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)g+=ct.r*ot,v+=ct.g*ot,x+=ct.b*ot;else if(G.isLightProbe){for(let P=0;P<9;P++)r.probe[P].addScaledVector(G.sh.coefficients[P],ot);F++}else if(G.isDirectionalLight){const P=e.get(G);if(P.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const K=G.shadow,q=i.get(G);q.shadowIntensity=K.intensity,q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,r.directionalShadow[M]=q,r.directionalShadowMap[M]=ht,r.directionalShadowMatrix[M]=G.shadow.matrix,I++}r.directional[M]=P,M++}else if(G.isSpotLight){const P=e.get(G);P.position.setFromMatrixPosition(G.matrixWorld),P.color.copy(ct).multiplyScalar(ot),P.distance=vt,P.coneCos=Math.cos(G.angle),P.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),P.decay=G.decay,r.spot[C]=P;const K=G.shadow;if(G.map&&(r.spotLightMap[k]=G.map,k++,K.updateMatrices(G),G.castShadow&&X++),r.spotLightMatrix[C]=K.matrix,G.castShadow){const q=i.get(G);q.shadowIntensity=K.intensity,q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,r.spotShadow[C]=q,r.spotShadowMap[C]=ht,U++}C++}else if(G.isRectAreaLight){const P=e.get(G);P.color.copy(ct).multiplyScalar(ot),P.halfWidth.set(G.width*.5,0,0),P.halfHeight.set(0,G.height*.5,0),r.rectArea[S]=P,S++}else if(G.isPointLight){const P=e.get(G);if(P.color.copy(G.color).multiplyScalar(G.intensity),P.distance=G.distance,P.decay=G.decay,G.castShadow){const K=G.shadow,q=i.get(G);q.shadowIntensity=K.intensity,q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,q.shadowCameraNear=K.camera.near,q.shadowCameraFar=K.camera.far,r.pointShadow[A]=q,r.pointShadowMap[A]=ht,r.pointShadowMatrix[A]=G.shadow.matrix,O++}r.point[A]=P,A++}else if(G.isHemisphereLight){const P=e.get(G);P.skyColor.copy(G.color).multiplyScalar(ot),P.groundColor.copy(G.groundColor).multiplyScalar(ot),r.hemi[_]=P,_++}}S>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Lt.LTC_FLOAT_1,r.rectAreaLTC2=Lt.LTC_FLOAT_2):(r.rectAreaLTC1=Lt.LTC_HALF_1,r.rectAreaLTC2=Lt.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=x;const Z=r.hash;(Z.directionalLength!==M||Z.pointLength!==A||Z.spotLength!==C||Z.rectAreaLength!==S||Z.hemiLength!==_||Z.numDirectionalShadows!==I||Z.numPointShadows!==O||Z.numSpotShadows!==U||Z.numSpotMaps!==k||Z.numLightProbes!==F)&&(r.directional.length=M,r.spot.length=C,r.rectArea.length=S,r.point.length=A,r.hemi.length=_,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.pointShadow.length=O,r.pointShadowMap.length=O,r.spotShadow.length=U,r.spotShadowMap.length=U,r.directionalShadowMatrix.length=I,r.pointShadowMatrix.length=O,r.spotLightMatrix.length=U+k-X,r.spotLightMap.length=k,r.numSpotLightShadowsWithMaps=X,r.numLightProbes=F,Z.directionalLength=M,Z.pointLength=A,Z.spotLength=C,Z.rectAreaLength=S,Z.hemiLength=_,Z.numDirectionalShadows=I,Z.numPointShadows=O,Z.numSpotShadows=U,Z.numSpotMaps=k,Z.numLightProbes=F,r.version=eT++)}function m(p,g){let v=0,x=0,M=0,A=0,C=0;const S=g.matrixWorldInverse;for(let _=0,I=p.length;_<I;_++){const O=p[_];if(O.isDirectionalLight){const U=r.directional[v];U.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(S),v++}else if(O.isSpotLight){const U=r.spot[M];U.position.setFromMatrixPosition(O.matrixWorld),U.position.applyMatrix4(S),U.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(S),M++}else if(O.isRectAreaLight){const U=r.rectArea[A];U.position.setFromMatrixPosition(O.matrixWorld),U.position.applyMatrix4(S),d.identity(),u.copy(O.matrixWorld),u.premultiply(S),d.extractRotation(u),U.halfWidth.set(O.width*.5,0,0),U.halfHeight.set(0,O.height*.5,0),U.halfWidth.applyMatrix4(d),U.halfHeight.applyMatrix4(d),A++}else if(O.isPointLight){const U=r.point[x];U.position.setFromMatrixPosition(O.matrixWorld),U.position.applyMatrix4(S),x++}else if(O.isHemisphereLight){const U=r.hemi[C];U.direction.setFromMatrixPosition(O.matrixWorld),U.direction.transformDirection(S),C++}}}return{setup:h,setupView:m,state:r}}function qg(o){const e=new iT(o),i=[],r=[];function l(g){p.camera=g,i.length=0,r.length=0}function u(g){i.push(g)}function d(g){r.push(g)}function h(){e.setup(i)}function m(g){e.setupView(i,g)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:u,pushShadow:d}}function aT(o){let e=new WeakMap;function i(l,u=0){const d=e.get(l);let h;return d===void 0?(h=new qg(o),e.set(l,[h])):u>=d.length?(h=new qg(o),d.push(h)):h=d[u],h}function r(){e=new WeakMap}return{get:i,dispose:r}}const rT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function oT(o,e,i){let r=new __;const l=new Ie,u=new Ie,d=new Je,h=new LS({depthPacking:ky}),m=new OS,p={},g=i.maxTextureSize,v={[Ga]:Bn,[Bn]:Ga,[Ji]:Ji},x=new Va({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:rT,fragmentShader:sT}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const A=new ra;A.setAttribute("position",new oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new ea(A,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yg;let _=this.type;this.render=function(X,F,Z){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||X.length===0)return;const w=o.getRenderTarget(),R=o.getActiveCubeFace(),G=o.getActiveMipmapLevel(),ct=o.state;ct.setBlending(Fa),ct.buffers.color.setClear(1,1,1,1),ct.buffers.depth.setTest(!0),ct.setScissorTest(!1);const ot=_!==Qi&&this.type===Qi,vt=_===Qi&&this.type!==Qi;for(let ht=0,P=X.length;ht<P;ht++){const K=X[ht],q=K.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;l.copy(q.mapSize);const Et=q.getFrameExtents();if(l.multiply(Et),u.copy(q.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/Et.x),l.x=u.x*Et.x,q.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/Et.y),l.y=u.y*Et.y,q.mapSize.y=u.y)),q.map===null||ot===!0||vt===!0){const tt=this.type!==Qi?{minFilter:_i,magFilter:_i}:{};q.map!==null&&q.map.dispose(),q.map=new Er(l.x,l.y,tt),q.map.texture.name=K.name+".shadowMap",q.camera.updateProjectionMatrix()}o.setRenderTarget(q.map),o.clear();const D=q.getViewportCount();for(let tt=0;tt<D;tt++){const xt=q.getViewport(tt);d.set(u.x*xt.x,u.y*xt.y,u.x*xt.z,u.y*xt.w),ct.viewport(d),q.updateMatrices(K,tt),r=q.getFrustum(),U(F,Z,q.camera,K,this.type)}q.isPointLightShadow!==!0&&this.type===Qi&&I(q,Z),q.needsUpdate=!1}_=this.type,S.needsUpdate=!1,o.setRenderTarget(w,R,G)};function I(X,F){const Z=e.update(C);x.defines.VSM_SAMPLES!==X.blurSamples&&(x.defines.VSM_SAMPLES=X.blurSamples,M.defines.VSM_SAMPLES=X.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),X.mapPass===null&&(X.mapPass=new Er(l.x,l.y)),x.uniforms.shadow_pass.value=X.map.texture,x.uniforms.resolution.value=X.mapSize,x.uniforms.radius.value=X.radius,o.setRenderTarget(X.mapPass),o.clear(),o.renderBufferDirect(F,null,Z,x,C,null),M.uniforms.shadow_pass.value=X.mapPass.texture,M.uniforms.resolution.value=X.mapSize,M.uniforms.radius.value=X.radius,o.setRenderTarget(X.map),o.clear(),o.renderBufferDirect(F,null,Z,M,C,null)}function O(X,F,Z,w){let R=null;const G=Z.isPointLight===!0?X.customDistanceMaterial:X.customDepthMaterial;if(G!==void 0)R=G;else if(R=Z.isPointLight===!0?m:h,o.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const ct=R.uuid,ot=F.uuid;let vt=p[ct];vt===void 0&&(vt={},p[ct]=vt);let ht=vt[ot];ht===void 0&&(ht=R.clone(),vt[ot]=ht,F.addEventListener("dispose",k)),R=ht}if(R.visible=F.visible,R.wireframe=F.wireframe,w===Qi?R.side=F.shadowSide!==null?F.shadowSide:F.side:R.side=F.shadowSide!==null?F.shadowSide:v[F.side],R.alphaMap=F.alphaMap,R.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,R.map=F.map,R.clipShadows=F.clipShadows,R.clippingPlanes=F.clippingPlanes,R.clipIntersection=F.clipIntersection,R.displacementMap=F.displacementMap,R.displacementScale=F.displacementScale,R.displacementBias=F.displacementBias,R.wireframeLinewidth=F.wireframeLinewidth,R.linewidth=F.linewidth,Z.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const ct=o.properties.get(R);ct.light=Z}return R}function U(X,F,Z,w,R){if(X.visible===!1)return;if(X.layers.test(F.layers)&&(X.isMesh||X.isLine||X.isPoints)&&(X.castShadow||X.receiveShadow&&R===Qi)&&(!X.frustumCulled||r.intersectsObject(X))){X.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,X.matrixWorld);const ot=e.update(X),vt=X.material;if(Array.isArray(vt)){const ht=ot.groups;for(let P=0,K=ht.length;P<K;P++){const q=ht[P],Et=vt[q.materialIndex];if(Et&&Et.visible){const D=O(X,Et,w,R);X.onBeforeShadow(o,X,F,Z,ot,D,q),o.renderBufferDirect(Z,null,ot,D,X,q),X.onAfterShadow(o,X,F,Z,ot,D,q)}}}else if(vt.visible){const ht=O(X,vt,w,R);X.onBeforeShadow(o,X,F,Z,ot,ht,null),o.renderBufferDirect(Z,null,ot,ht,X,null),X.onAfterShadow(o,X,F,Z,ot,ht,null)}}const ct=X.children;for(let ot=0,vt=ct.length;ot<vt;ot++)U(ct[ot],F,Z,w,R)}function k(X){X.target.removeEventListener("dispose",k);for(const Z in p){const w=p[Z],R=X.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}const lT={[xd]:yd,[Sd]:bd,[Md]:Td,[xs]:Ed,[yd]:xd,[bd]:Sd,[Td]:Md,[Ed]:xs};function cT(o,e){function i(){let V=!1;const Nt=new Je;let bt=null;const Bt=new Je(0,0,0,0);return{setMask:function(At){bt!==At&&!V&&(o.colorMask(At,At,At,At),bt=At)},setLocked:function(At){V=At},setClear:function(At,_t,Ft,ne,we){we===!0&&(At*=ne,_t*=ne,Ft*=ne),Nt.set(At,_t,Ft,ne),Bt.equals(Nt)===!1&&(o.clearColor(At,_t,Ft,ne),Bt.copy(Nt))},reset:function(){V=!1,bt=null,Bt.set(-1,0,0,0)}}}function r(){let V=!1,Nt=!1,bt=null,Bt=null,At=null;return{setReversed:function(_t){if(Nt!==_t){const Ft=e.get("EXT_clip_control");_t?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),Nt=_t;const ne=At;At=null,this.setClear(ne)}},getReversed:function(){return Nt},setTest:function(_t){_t?Rt(o.DEPTH_TEST):wt(o.DEPTH_TEST)},setMask:function(_t){bt!==_t&&!V&&(o.depthMask(_t),bt=_t)},setFunc:function(_t){if(Nt&&(_t=lT[_t]),Bt!==_t){switch(_t){case xd:o.depthFunc(o.NEVER);break;case yd:o.depthFunc(o.ALWAYS);break;case Sd:o.depthFunc(o.LESS);break;case xs:o.depthFunc(o.LEQUAL);break;case Md:o.depthFunc(o.EQUAL);break;case Ed:o.depthFunc(o.GEQUAL);break;case bd:o.depthFunc(o.GREATER);break;case Td:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Bt=_t}},setLocked:function(_t){V=_t},setClear:function(_t){At!==_t&&(Nt&&(_t=1-_t),o.clearDepth(_t),At=_t)},reset:function(){V=!1,bt=null,Bt=null,At=null,Nt=!1}}}function l(){let V=!1,Nt=null,bt=null,Bt=null,At=null,_t=null,Ft=null,ne=null,we=null;return{setTest:function(Me){V||(Me?Rt(o.STENCIL_TEST):wt(o.STENCIL_TEST))},setMask:function(Me){Nt!==Me&&!V&&(o.stencilMask(Me),Nt=Me)},setFunc:function(Me,Hn,fn){(bt!==Me||Bt!==Hn||At!==fn)&&(o.stencilFunc(Me,Hn,fn),bt=Me,Bt=Hn,At=fn)},setOp:function(Me,Hn,fn){(_t!==Me||Ft!==Hn||ne!==fn)&&(o.stencilOp(Me,Hn,fn),_t=Me,Ft=Hn,ne=fn)},setLocked:function(Me){V=Me},setClear:function(Me){we!==Me&&(o.clearStencil(Me),we=Me)},reset:function(){V=!1,Nt=null,bt=null,Bt=null,At=null,_t=null,Ft=null,ne=null,we=null}}}const u=new i,d=new r,h=new l,m=new WeakMap,p=new WeakMap;let g={},v={},x=new WeakMap,M=[],A=null,C=!1,S=null,_=null,I=null,O=null,U=null,k=null,X=null,F=new Te(0,0,0),Z=0,w=!1,R=null,G=null,ct=null,ot=null,vt=null;const ht=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,K=0;const q=o.getParameter(o.VERSION);q.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(q)[1]),P=K>=1):q.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),P=K>=2);let Et=null,D={};const tt=o.getParameter(o.SCISSOR_BOX),xt=o.getParameter(o.VIEWPORT),St=new Je().fromArray(tt),J=new Je().fromArray(xt);function mt(V,Nt,bt,Bt){const At=new Uint8Array(4),_t=o.createTexture();o.bindTexture(V,_t),o.texParameteri(V,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(V,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Ft=0;Ft<bt;Ft++)V===o.TEXTURE_3D||V===o.TEXTURE_2D_ARRAY?o.texImage3D(Nt,0,o.RGBA,1,1,Bt,0,o.RGBA,o.UNSIGNED_BYTE,At):o.texImage2D(Nt+Ft,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,At);return _t}const Mt={};Mt[o.TEXTURE_2D]=mt(o.TEXTURE_2D,o.TEXTURE_2D,1),Mt[o.TEXTURE_CUBE_MAP]=mt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[o.TEXTURE_2D_ARRAY]=mt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Mt[o.TEXTURE_3D]=mt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),h.setClear(0),Rt(o.DEPTH_TEST),d.setFunc(xs),Se(!1),he(J0),Rt(o.CULL_FACE),B(Fa);function Rt(V){g[V]!==!0&&(o.enable(V),g[V]=!0)}function wt(V){g[V]!==!1&&(o.disable(V),g[V]=!1)}function oe(V,Nt){return v[V]!==Nt?(o.bindFramebuffer(V,Nt),v[V]=Nt,V===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=Nt),V===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=Nt),!0):!1}function Qt(V,Nt){let bt=M,Bt=!1;if(V){bt=x.get(Nt),bt===void 0&&(bt=[],x.set(Nt,bt));const At=V.textures;if(bt.length!==At.length||bt[0]!==o.COLOR_ATTACHMENT0){for(let _t=0,Ft=At.length;_t<Ft;_t++)bt[_t]=o.COLOR_ATTACHMENT0+_t;bt.length=At.length,Bt=!0}}else bt[0]!==o.BACK&&(bt[0]=o.BACK,Bt=!0);Bt&&o.drawBuffers(bt)}function Ne(V){return A!==V?(o.useProgram(V),A=V,!0):!1}const Fe={[gr]:o.FUNC_ADD,[my]:o.FUNC_SUBTRACT,[gy]:o.FUNC_REVERSE_SUBTRACT};Fe[_y]=o.MIN,Fe[vy]=o.MAX;const ge={[xy]:o.ZERO,[yy]:o.ONE,[Sy]:o.SRC_COLOR,[_d]:o.SRC_ALPHA,[Ry]:o.SRC_ALPHA_SATURATE,[Ty]:o.DST_COLOR,[Ey]:o.DST_ALPHA,[My]:o.ONE_MINUS_SRC_COLOR,[vd]:o.ONE_MINUS_SRC_ALPHA,[Ay]:o.ONE_MINUS_DST_COLOR,[by]:o.ONE_MINUS_DST_ALPHA,[Cy]:o.CONSTANT_COLOR,[wy]:o.ONE_MINUS_CONSTANT_COLOR,[Dy]:o.CONSTANT_ALPHA,[Uy]:o.ONE_MINUS_CONSTANT_ALPHA};function B(V,Nt,bt,Bt,At,_t,Ft,ne,we,Me){if(V===Fa){C===!0&&(wt(o.BLEND),C=!1);return}if(C===!1&&(Rt(o.BLEND),C=!0),V!==py){if(V!==S||Me!==w){if((_!==gr||U!==gr)&&(o.blendEquation(o.FUNC_ADD),_=gr,U=gr),Me)switch(V){case gs:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case gd:o.blendFunc(o.ONE,o.ONE);break;case $0:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case tg:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case gs:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case gd:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case $0:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case tg:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}I=null,O=null,k=null,X=null,F.set(0,0,0),Z=0,S=V,w=Me}return}At=At||Nt,_t=_t||bt,Ft=Ft||Bt,(Nt!==_||At!==U)&&(o.blendEquationSeparate(Fe[Nt],Fe[At]),_=Nt,U=At),(bt!==I||Bt!==O||_t!==k||Ft!==X)&&(o.blendFuncSeparate(ge[bt],ge[Bt],ge[_t],ge[Ft]),I=bt,O=Bt,k=_t,X=Ft),(ne.equals(F)===!1||we!==Z)&&(o.blendColor(ne.r,ne.g,ne.b,we),F.copy(ne),Z=we),S=V,w=!1}function vn(V,Nt){V.side===Ji?wt(o.CULL_FACE):Rt(o.CULL_FACE);let bt=V.side===Bn;Nt&&(bt=!bt),Se(bt),V.blending===gs&&V.transparent===!1?B(Fa):B(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),d.setFunc(V.depthFunc),d.setTest(V.depthTest),d.setMask(V.depthWrite),u.setMask(V.colorWrite);const Bt=V.stencilWrite;h.setTest(Bt),Bt&&(h.setMask(V.stencilWriteMask),h.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),h.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),_e(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?Rt(o.SAMPLE_ALPHA_TO_COVERAGE):wt(o.SAMPLE_ALPHA_TO_COVERAGE)}function Se(V){R!==V&&(V?o.frontFace(o.CW):o.frontFace(o.CCW),R=V)}function he(V){V!==fy?(Rt(o.CULL_FACE),V!==G&&(V===J0?o.cullFace(o.BACK):V===dy?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):wt(o.CULL_FACE),G=V}function Vt(V){V!==ct&&(P&&o.lineWidth(V),ct=V)}function _e(V,Nt,bt){V?(Rt(o.POLYGON_OFFSET_FILL),(ot!==Nt||vt!==bt)&&(o.polygonOffset(Nt,bt),ot=Nt,vt=bt)):wt(o.POLYGON_OFFSET_FILL)}function Yt(V){V?Rt(o.SCISSOR_TEST):wt(o.SCISSOR_TEST)}function ae(V){V===void 0&&(V=o.TEXTURE0+ht-1),Et!==V&&(o.activeTexture(V),Et=V)}function Ze(V,Nt,bt){bt===void 0&&(Et===null?bt=o.TEXTURE0+ht-1:bt=Et);let Bt=D[bt];Bt===void 0&&(Bt={type:void 0,texture:void 0},D[bt]=Bt),(Bt.type!==V||Bt.texture!==Nt)&&(Et!==bt&&(o.activeTexture(bt),Et=bt),o.bindTexture(V,Nt||Mt[V]),Bt.type=V,Bt.texture=Nt)}function N(){const V=D[Et];V!==void 0&&V.type!==void 0&&(o.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function et(){try{o.compressedTexImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ft(){try{o.texSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function pt(){try{o.texSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function lt(){try{o.compressedTexSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Pt(){try{o.compressedTexSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ut(){try{o.texStorage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Gt(){try{o.texStorage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function kt(){try{o.texImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function yt(){try{o.texImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function zt(V){St.equals(V)===!1&&(o.scissor(V.x,V.y,V.z,V.w),St.copy(V))}function jt(V){J.equals(V)===!1&&(o.viewport(V.x,V.y,V.z,V.w),J.copy(V))}function qt(V,Nt){let bt=p.get(Nt);bt===void 0&&(bt=new WeakMap,p.set(Nt,bt));let Bt=bt.get(V);Bt===void 0&&(Bt=o.getUniformBlockIndex(Nt,V.name),bt.set(V,Bt))}function Ct(V,Nt){const Bt=p.get(Nt).get(V);m.get(Nt)!==Bt&&(o.uniformBlockBinding(Nt,Bt,V.__bindingPointIndex),m.set(Nt,Bt))}function ie(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},Et=null,D={},v={},x=new WeakMap,M=[],A=null,C=!1,S=null,_=null,I=null,O=null,U=null,k=null,X=null,F=new Te(0,0,0),Z=0,w=!1,R=null,G=null,ct=null,ot=null,vt=null,St.set(0,0,o.canvas.width,o.canvas.height),J.set(0,0,o.canvas.width,o.canvas.height),u.reset(),d.reset(),h.reset()}return{buffers:{color:u,depth:d,stencil:h},enable:Rt,disable:wt,bindFramebuffer:oe,drawBuffers:Qt,useProgram:Ne,setBlending:B,setMaterial:vn,setFlipSided:Se,setCullFace:he,setLineWidth:Vt,setPolygonOffset:_e,setScissorTest:Yt,activeTexture:ae,bindTexture:Ze,unbindTexture:N,compressedTexImage2D:E,compressedTexImage3D:et,texImage2D:kt,texImage3D:yt,updateUBOMapping:qt,uniformBlockBinding:Ct,texStorage2D:Ut,texStorage3D:Gt,texSubImage2D:ft,texSubImage3D:pt,compressedTexSubImage2D:lt,compressedTexSubImage3D:Pt,scissor:zt,viewport:jt,reset:ie}}function uT(o,e,i,r,l,u,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ie,g=new WeakMap;let v;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(N,E){return M?new OffscreenCanvas(N,E):Ac("canvas")}function C(N,E,et){let ft=1;const pt=Ze(N);if((pt.width>et||pt.height>et)&&(ft=et/Math.max(pt.width,pt.height)),ft<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const lt=Math.floor(ft*pt.width),Pt=Math.floor(ft*pt.height);v===void 0&&(v=A(lt,Pt));const Ut=E?A(lt,Pt):v;return Ut.width=lt,Ut.height=Pt,Ut.getContext("2d").drawImage(N,0,0,lt,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+pt.width+"x"+pt.height+") to ("+lt+"x"+Pt+")."),Ut}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+pt.width+"x"+pt.height+")."),N;return N}function S(N){return N.generateMipmaps}function _(N){o.generateMipmap(N)}function I(N){return N.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?o.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function O(N,E,et,ft,pt=!1){if(N!==null){if(o[N]!==void 0)return o[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let lt=E;if(E===o.RED&&(et===o.FLOAT&&(lt=o.R32F),et===o.HALF_FLOAT&&(lt=o.R16F),et===o.UNSIGNED_BYTE&&(lt=o.R8)),E===o.RED_INTEGER&&(et===o.UNSIGNED_BYTE&&(lt=o.R8UI),et===o.UNSIGNED_SHORT&&(lt=o.R16UI),et===o.UNSIGNED_INT&&(lt=o.R32UI),et===o.BYTE&&(lt=o.R8I),et===o.SHORT&&(lt=o.R16I),et===o.INT&&(lt=o.R32I)),E===o.RG&&(et===o.FLOAT&&(lt=o.RG32F),et===o.HALF_FLOAT&&(lt=o.RG16F),et===o.UNSIGNED_BYTE&&(lt=o.RG8)),E===o.RG_INTEGER&&(et===o.UNSIGNED_BYTE&&(lt=o.RG8UI),et===o.UNSIGNED_SHORT&&(lt=o.RG16UI),et===o.UNSIGNED_INT&&(lt=o.RG32UI),et===o.BYTE&&(lt=o.RG8I),et===o.SHORT&&(lt=o.RG16I),et===o.INT&&(lt=o.RG32I)),E===o.RGB_INTEGER&&(et===o.UNSIGNED_BYTE&&(lt=o.RGB8UI),et===o.UNSIGNED_SHORT&&(lt=o.RGB16UI),et===o.UNSIGNED_INT&&(lt=o.RGB32UI),et===o.BYTE&&(lt=o.RGB8I),et===o.SHORT&&(lt=o.RGB16I),et===o.INT&&(lt=o.RGB32I)),E===o.RGBA_INTEGER&&(et===o.UNSIGNED_BYTE&&(lt=o.RGBA8UI),et===o.UNSIGNED_SHORT&&(lt=o.RGBA16UI),et===o.UNSIGNED_INT&&(lt=o.RGBA32UI),et===o.BYTE&&(lt=o.RGBA8I),et===o.SHORT&&(lt=o.RGBA16I),et===o.INT&&(lt=o.RGBA32I)),E===o.RGB&&et===o.UNSIGNED_INT_5_9_9_9_REV&&(lt=o.RGB9_E5),E===o.RGBA){const Pt=pt?bc:be.getTransfer(ft);et===o.FLOAT&&(lt=o.RGBA32F),et===o.HALF_FLOAT&&(lt=o.RGBA16F),et===o.UNSIGNED_BYTE&&(lt=Pt===Be?o.SRGB8_ALPHA8:o.RGBA8),et===o.UNSIGNED_SHORT_4_4_4_4&&(lt=o.RGBA4),et===o.UNSIGNED_SHORT_5_5_5_1&&(lt=o.RGB5_A1)}return(lt===o.R16F||lt===o.R32F||lt===o.RG16F||lt===o.RG32F||lt===o.RGBA16F||lt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),lt}function U(N,E){let et;return N?E===null||E===Mr||E===wo?et=o.DEPTH24_STENCIL8:E===$i?et=o.DEPTH32F_STENCIL8:E===Co&&(et=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Mr||E===wo?et=o.DEPTH_COMPONENT24:E===$i?et=o.DEPTH_COMPONENT32F:E===Co&&(et=o.DEPTH_COMPONENT16),et}function k(N,E){return S(N)===!0||N.isFramebufferTexture&&N.minFilter!==_i&&N.minFilter!==Ti?Math.log2(Math.max(E.width,E.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?E.mipmaps.length:1}function X(N){const E=N.target;E.removeEventListener("dispose",X),Z(E),E.isVideoTexture&&g.delete(E)}function F(N){const E=N.target;E.removeEventListener("dispose",F),R(E)}function Z(N){const E=r.get(N);if(E.__webglInit===void 0)return;const et=N.source,ft=x.get(et);if(ft){const pt=ft[E.__cacheKey];pt.usedTimes--,pt.usedTimes===0&&w(N),Object.keys(ft).length===0&&x.delete(et)}r.remove(N)}function w(N){const E=r.get(N);o.deleteTexture(E.__webglTexture);const et=N.source,ft=x.get(et);delete ft[E.__cacheKey],d.memory.textures--}function R(N){const E=r.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),r.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ft=0;ft<6;ft++){if(Array.isArray(E.__webglFramebuffer[ft]))for(let pt=0;pt<E.__webglFramebuffer[ft].length;pt++)o.deleteFramebuffer(E.__webglFramebuffer[ft][pt]);else o.deleteFramebuffer(E.__webglFramebuffer[ft]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[ft])}else{if(Array.isArray(E.__webglFramebuffer))for(let ft=0;ft<E.__webglFramebuffer.length;ft++)o.deleteFramebuffer(E.__webglFramebuffer[ft]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ft=0;ft<E.__webglColorRenderbuffer.length;ft++)E.__webglColorRenderbuffer[ft]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[ft]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const et=N.textures;for(let ft=0,pt=et.length;ft<pt;ft++){const lt=r.get(et[ft]);lt.__webglTexture&&(o.deleteTexture(lt.__webglTexture),d.memory.textures--),r.remove(et[ft])}r.remove(N)}let G=0;function ct(){G=0}function ot(){const N=G;return N>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),G+=1,N}function vt(N){const E=[];return E.push(N.wrapS),E.push(N.wrapT),E.push(N.wrapR||0),E.push(N.magFilter),E.push(N.minFilter),E.push(N.anisotropy),E.push(N.internalFormat),E.push(N.format),E.push(N.type),E.push(N.generateMipmaps),E.push(N.premultiplyAlpha),E.push(N.flipY),E.push(N.unpackAlignment),E.push(N.colorSpace),E.join()}function ht(N,E){const et=r.get(N);if(N.isVideoTexture&&Yt(N),N.isRenderTargetTexture===!1&&N.version>0&&et.__version!==N.version){const ft=N.image;if(ft===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Mt(et,N,E);return}}i.bindTexture(o.TEXTURE_2D,et.__webglTexture,o.TEXTURE0+E)}function P(N,E){const et=r.get(N);if(N.version>0&&et.__version!==N.version){Mt(et,N,E);return}i.bindTexture(o.TEXTURE_2D_ARRAY,et.__webglTexture,o.TEXTURE0+E)}function K(N,E){const et=r.get(N);if(N.version>0&&et.__version!==N.version){Mt(et,N,E);return}i.bindTexture(o.TEXTURE_3D,et.__webglTexture,o.TEXTURE0+E)}function q(N,E){const et=r.get(N);if(N.version>0&&et.__version!==N.version){Rt(et,N,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,et.__webglTexture,o.TEXTURE0+E)}const Et={[Cd]:o.REPEAT,[vr]:o.CLAMP_TO_EDGE,[wd]:o.MIRRORED_REPEAT},D={[_i]:o.NEAREST,[Gy]:o.NEAREST_MIPMAP_NEAREST,[Yl]:o.NEAREST_MIPMAP_LINEAR,[Ti]:o.LINEAR,[Ff]:o.LINEAR_MIPMAP_NEAREST,[xr]:o.LINEAR_MIPMAP_LINEAR},tt={[jy]:o.NEVER,[Jy]:o.ALWAYS,[qy]:o.LESS,[r_]:o.LEQUAL,[Yy]:o.EQUAL,[Qy]:o.GEQUAL,[Zy]:o.GREATER,[Ky]:o.NOTEQUAL};function xt(N,E){if(E.type===$i&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Ti||E.magFilter===Ff||E.magFilter===Yl||E.magFilter===xr||E.minFilter===Ti||E.minFilter===Ff||E.minFilter===Yl||E.minFilter===xr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(N,o.TEXTURE_WRAP_S,Et[E.wrapS]),o.texParameteri(N,o.TEXTURE_WRAP_T,Et[E.wrapT]),(N===o.TEXTURE_3D||N===o.TEXTURE_2D_ARRAY)&&o.texParameteri(N,o.TEXTURE_WRAP_R,Et[E.wrapR]),o.texParameteri(N,o.TEXTURE_MAG_FILTER,D[E.magFilter]),o.texParameteri(N,o.TEXTURE_MIN_FILTER,D[E.minFilter]),E.compareFunction&&(o.texParameteri(N,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(N,o.TEXTURE_COMPARE_FUNC,tt[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===_i||E.minFilter!==Yl&&E.minFilter!==xr||E.type===$i&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const et=e.get("EXT_texture_filter_anisotropic");o.texParameterf(N,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function St(N,E){let et=!1;N.__webglInit===void 0&&(N.__webglInit=!0,E.addEventListener("dispose",X));const ft=E.source;let pt=x.get(ft);pt===void 0&&(pt={},x.set(ft,pt));const lt=vt(E);if(lt!==N.__cacheKey){pt[lt]===void 0&&(pt[lt]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,et=!0),pt[lt].usedTimes++;const Pt=pt[N.__cacheKey];Pt!==void 0&&(pt[N.__cacheKey].usedTimes--,Pt.usedTimes===0&&w(E)),N.__cacheKey=lt,N.__webglTexture=pt[lt].texture}return et}function J(N,E,et){return Math.floor(Math.floor(N/et)/E)}function mt(N,E,et,ft){const lt=N.updateRanges;if(lt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,et,ft,E.data);else{lt.sort((yt,zt)=>yt.start-zt.start);let Pt=0;for(let yt=1;yt<lt.length;yt++){const zt=lt[Pt],jt=lt[yt],qt=zt.start+zt.count,Ct=J(jt.start,E.width,4),ie=J(zt.start,E.width,4);jt.start<=qt+1&&Ct===ie&&J(jt.start+jt.count-1,E.width,4)===Ct?zt.count=Math.max(zt.count,jt.start+jt.count-zt.start):(++Pt,lt[Pt]=jt)}lt.length=Pt+1;const Ut=o.getParameter(o.UNPACK_ROW_LENGTH),Gt=o.getParameter(o.UNPACK_SKIP_PIXELS),kt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let yt=0,zt=lt.length;yt<zt;yt++){const jt=lt[yt],qt=Math.floor(jt.start/4),Ct=Math.ceil(jt.count/4),ie=qt%E.width,V=Math.floor(qt/E.width),Nt=Ct,bt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ie),o.pixelStorei(o.UNPACK_SKIP_ROWS,V),i.texSubImage2D(o.TEXTURE_2D,0,ie,V,Nt,bt,et,ft,E.data)}N.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ut),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Gt),o.pixelStorei(o.UNPACK_SKIP_ROWS,kt)}}function Mt(N,E,et){let ft=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ft=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ft=o.TEXTURE_3D);const pt=St(N,E),lt=E.source;i.bindTexture(ft,N.__webglTexture,o.TEXTURE0+et);const Pt=r.get(lt);if(lt.version!==Pt.__version||pt===!0){i.activeTexture(o.TEXTURE0+et);const Ut=be.getPrimaries(be.workingColorSpace),Gt=E.colorSpace===Ia?null:be.getPrimaries(E.colorSpace),kt=E.colorSpace===Ia||Ut===Gt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);let yt=C(E.image,!1,l.maxTextureSize);yt=ae(E,yt);const zt=u.convert(E.format,E.colorSpace),jt=u.convert(E.type);let qt=O(E.internalFormat,zt,jt,E.colorSpace,E.isVideoTexture);xt(ft,E);let Ct;const ie=E.mipmaps,V=E.isVideoTexture!==!0,Nt=Pt.__version===void 0||pt===!0,bt=lt.dataReady,Bt=k(E,yt);if(E.isDepthTexture)qt=U(E.format===Uo,E.type),Nt&&(V?i.texStorage2D(o.TEXTURE_2D,1,qt,yt.width,yt.height):i.texImage2D(o.TEXTURE_2D,0,qt,yt.width,yt.height,0,zt,jt,null));else if(E.isDataTexture)if(ie.length>0){V&&Nt&&i.texStorage2D(o.TEXTURE_2D,Bt,qt,ie[0].width,ie[0].height);for(let At=0,_t=ie.length;At<_t;At++)Ct=ie[At],V?bt&&i.texSubImage2D(o.TEXTURE_2D,At,0,0,Ct.width,Ct.height,zt,jt,Ct.data):i.texImage2D(o.TEXTURE_2D,At,qt,Ct.width,Ct.height,0,zt,jt,Ct.data);E.generateMipmaps=!1}else V?(Nt&&i.texStorage2D(o.TEXTURE_2D,Bt,qt,yt.width,yt.height),bt&&mt(E,yt,zt,jt)):i.texImage2D(o.TEXTURE_2D,0,qt,yt.width,yt.height,0,zt,jt,yt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){V&&Nt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Bt,qt,ie[0].width,ie[0].height,yt.depth);for(let At=0,_t=ie.length;At<_t;At++)if(Ct=ie[At],E.format!==mi)if(zt!==null)if(V){if(bt)if(E.layerUpdates.size>0){const Ft=Eg(Ct.width,Ct.height,E.format,E.type);for(const ne of E.layerUpdates){const we=Ct.data.subarray(ne*Ft/Ct.data.BYTES_PER_ELEMENT,(ne+1)*Ft/Ct.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,At,0,0,ne,Ct.width,Ct.height,1,zt,we)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,At,0,0,0,Ct.width,Ct.height,yt.depth,zt,Ct.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,At,qt,Ct.width,Ct.height,yt.depth,0,Ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?bt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,At,0,0,0,Ct.width,Ct.height,yt.depth,zt,jt,Ct.data):i.texImage3D(o.TEXTURE_2D_ARRAY,At,qt,Ct.width,Ct.height,yt.depth,0,zt,jt,Ct.data)}else{V&&Nt&&i.texStorage2D(o.TEXTURE_2D,Bt,qt,ie[0].width,ie[0].height);for(let At=0,_t=ie.length;At<_t;At++)Ct=ie[At],E.format!==mi?zt!==null?V?bt&&i.compressedTexSubImage2D(o.TEXTURE_2D,At,0,0,Ct.width,Ct.height,zt,Ct.data):i.compressedTexImage2D(o.TEXTURE_2D,At,qt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?bt&&i.texSubImage2D(o.TEXTURE_2D,At,0,0,Ct.width,Ct.height,zt,jt,Ct.data):i.texImage2D(o.TEXTURE_2D,At,qt,Ct.width,Ct.height,0,zt,jt,Ct.data)}else if(E.isDataArrayTexture)if(V){if(Nt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Bt,qt,yt.width,yt.height,yt.depth),bt)if(E.layerUpdates.size>0){const At=Eg(yt.width,yt.height,E.format,E.type);for(const _t of E.layerUpdates){const Ft=yt.data.subarray(_t*At/yt.data.BYTES_PER_ELEMENT,(_t+1)*At/yt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,_t,yt.width,yt.height,1,zt,jt,Ft)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,yt.width,yt.height,yt.depth,zt,jt,yt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,qt,yt.width,yt.height,yt.depth,0,zt,jt,yt.data);else if(E.isData3DTexture)V?(Nt&&i.texStorage3D(o.TEXTURE_3D,Bt,qt,yt.width,yt.height,yt.depth),bt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,yt.width,yt.height,yt.depth,zt,jt,yt.data)):i.texImage3D(o.TEXTURE_3D,0,qt,yt.width,yt.height,yt.depth,0,zt,jt,yt.data);else if(E.isFramebufferTexture){if(Nt)if(V)i.texStorage2D(o.TEXTURE_2D,Bt,qt,yt.width,yt.height);else{let At=yt.width,_t=yt.height;for(let Ft=0;Ft<Bt;Ft++)i.texImage2D(o.TEXTURE_2D,Ft,qt,At,_t,0,zt,jt,null),At>>=1,_t>>=1}}else if(ie.length>0){if(V&&Nt){const At=Ze(ie[0]);i.texStorage2D(o.TEXTURE_2D,Bt,qt,At.width,At.height)}for(let At=0,_t=ie.length;At<_t;At++)Ct=ie[At],V?bt&&i.texSubImage2D(o.TEXTURE_2D,At,0,0,zt,jt,Ct):i.texImage2D(o.TEXTURE_2D,At,qt,zt,jt,Ct);E.generateMipmaps=!1}else if(V){if(Nt){const At=Ze(yt);i.texStorage2D(o.TEXTURE_2D,Bt,qt,At.width,At.height)}bt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,zt,jt,yt)}else i.texImage2D(o.TEXTURE_2D,0,qt,zt,jt,yt);S(E)&&_(ft),Pt.__version=lt.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function Rt(N,E,et){if(E.image.length!==6)return;const ft=St(N,E),pt=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,N.__webglTexture,o.TEXTURE0+et);const lt=r.get(pt);if(pt.version!==lt.__version||ft===!0){i.activeTexture(o.TEXTURE0+et);const Pt=be.getPrimaries(be.workingColorSpace),Ut=E.colorSpace===Ia?null:be.getPrimaries(E.colorSpace),Gt=E.colorSpace===Ia||Pt===Ut?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);const kt=E.isCompressedTexture||E.image[0].isCompressedTexture,yt=E.image[0]&&E.image[0].isDataTexture,zt=[];for(let _t=0;_t<6;_t++)!kt&&!yt?zt[_t]=C(E.image[_t],!0,l.maxCubemapSize):zt[_t]=yt?E.image[_t].image:E.image[_t],zt[_t]=ae(E,zt[_t]);const jt=zt[0],qt=u.convert(E.format,E.colorSpace),Ct=u.convert(E.type),ie=O(E.internalFormat,qt,Ct,E.colorSpace),V=E.isVideoTexture!==!0,Nt=lt.__version===void 0||ft===!0,bt=pt.dataReady;let Bt=k(E,jt);xt(o.TEXTURE_CUBE_MAP,E);let At;if(kt){V&&Nt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Bt,ie,jt.width,jt.height);for(let _t=0;_t<6;_t++){At=zt[_t].mipmaps;for(let Ft=0;Ft<At.length;Ft++){const ne=At[Ft];E.format!==mi?qt!==null?V?bt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft,0,0,ne.width,ne.height,qt,ne.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft,ie,ne.width,ne.height,0,ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft,0,0,ne.width,ne.height,qt,Ct,ne.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft,ie,ne.width,ne.height,0,qt,Ct,ne.data)}}}else{if(At=E.mipmaps,V&&Nt){At.length>0&&Bt++;const _t=Ze(zt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Bt,ie,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(yt){V?bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,zt[_t].width,zt[_t].height,qt,Ct,zt[_t].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ie,zt[_t].width,zt[_t].height,0,qt,Ct,zt[_t].data);for(let Ft=0;Ft<At.length;Ft++){const we=At[Ft].image[_t].image;V?bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft+1,0,0,we.width,we.height,qt,Ct,we.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft+1,ie,we.width,we.height,0,qt,Ct,we.data)}}else{V?bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,qt,Ct,zt[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ie,qt,Ct,zt[_t]);for(let Ft=0;Ft<At.length;Ft++){const ne=At[Ft];V?bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft+1,0,0,qt,Ct,ne.image[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft+1,ie,qt,Ct,ne.image[_t])}}}S(E)&&_(o.TEXTURE_CUBE_MAP),lt.__version=pt.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function wt(N,E,et,ft,pt,lt){const Pt=u.convert(et.format,et.colorSpace),Ut=u.convert(et.type),Gt=O(et.internalFormat,Pt,Ut,et.colorSpace),kt=r.get(E),yt=r.get(et);if(yt.__renderTarget=E,!kt.__hasExternalTextures){const zt=Math.max(1,E.width>>lt),jt=Math.max(1,E.height>>lt);pt===o.TEXTURE_3D||pt===o.TEXTURE_2D_ARRAY?i.texImage3D(pt,lt,Gt,zt,jt,E.depth,0,Pt,Ut,null):i.texImage2D(pt,lt,Gt,zt,jt,0,Pt,Ut,null)}i.bindFramebuffer(o.FRAMEBUFFER,N),_e(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ft,pt,yt.__webglTexture,0,Vt(E)):(pt===o.TEXTURE_2D||pt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&pt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ft,pt,yt.__webglTexture,lt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function oe(N,E,et){if(o.bindRenderbuffer(o.RENDERBUFFER,N),E.depthBuffer){const ft=E.depthTexture,pt=ft&&ft.isDepthTexture?ft.type:null,lt=U(E.stencilBuffer,pt),Pt=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ut=Vt(E);_e(E)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ut,lt,E.width,E.height):et?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ut,lt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,lt,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Pt,o.RENDERBUFFER,N)}else{const ft=E.textures;for(let pt=0;pt<ft.length;pt++){const lt=ft[pt],Pt=u.convert(lt.format,lt.colorSpace),Ut=u.convert(lt.type),Gt=O(lt.internalFormat,Pt,Ut,lt.colorSpace),kt=Vt(E);et&&_e(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,kt,Gt,E.width,E.height):_e(E)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,kt,Gt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Gt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Qt(N,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,N),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ft=r.get(E.depthTexture);ft.__renderTarget=E,(!ft.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ht(E.depthTexture,0);const pt=ft.__webglTexture,lt=Vt(E);if(E.depthTexture.format===Do)_e(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,pt,0,lt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,pt,0);else if(E.depthTexture.format===Uo)_e(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,pt,0,lt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,pt,0);else throw new Error("Unknown depthTexture format")}function Ne(N){const E=r.get(N),et=N.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==N.depthTexture){const ft=N.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ft){const pt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ft.removeEventListener("dispose",pt)};ft.addEventListener("dispose",pt),E.__depthDisposeCallback=pt}E.__boundDepthTexture=ft}if(N.depthTexture&&!E.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");const ft=N.texture.mipmaps;ft&&ft.length>0?Qt(E.__webglFramebuffer[0],N):Qt(E.__webglFramebuffer,N)}else if(et){E.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[ft]),E.__webglDepthbuffer[ft]===void 0)E.__webglDepthbuffer[ft]=o.createRenderbuffer(),oe(E.__webglDepthbuffer[ft],N,!1);else{const pt=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,lt=E.__webglDepthbuffer[ft];o.bindRenderbuffer(o.RENDERBUFFER,lt),o.framebufferRenderbuffer(o.FRAMEBUFFER,pt,o.RENDERBUFFER,lt)}}else{const ft=N.texture.mipmaps;if(ft&&ft.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),oe(E.__webglDepthbuffer,N,!1);else{const pt=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,lt=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,lt),o.framebufferRenderbuffer(o.FRAMEBUFFER,pt,o.RENDERBUFFER,lt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Fe(N,E,et){const ft=r.get(N);E!==void 0&&wt(ft.__webglFramebuffer,N,N.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),et!==void 0&&Ne(N)}function ge(N){const E=N.texture,et=r.get(N),ft=r.get(E);N.addEventListener("dispose",F);const pt=N.textures,lt=N.isWebGLCubeRenderTarget===!0,Pt=pt.length>1;if(Pt||(ft.__webglTexture===void 0&&(ft.__webglTexture=o.createTexture()),ft.__version=E.version,d.memory.textures++),lt){et.__webglFramebuffer=[];for(let Ut=0;Ut<6;Ut++)if(E.mipmaps&&E.mipmaps.length>0){et.__webglFramebuffer[Ut]=[];for(let Gt=0;Gt<E.mipmaps.length;Gt++)et.__webglFramebuffer[Ut][Gt]=o.createFramebuffer()}else et.__webglFramebuffer[Ut]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){et.__webglFramebuffer=[];for(let Ut=0;Ut<E.mipmaps.length;Ut++)et.__webglFramebuffer[Ut]=o.createFramebuffer()}else et.__webglFramebuffer=o.createFramebuffer();if(Pt)for(let Ut=0,Gt=pt.length;Ut<Gt;Ut++){const kt=r.get(pt[Ut]);kt.__webglTexture===void 0&&(kt.__webglTexture=o.createTexture(),d.memory.textures++)}if(N.samples>0&&_e(N)===!1){et.__webglMultisampledFramebuffer=o.createFramebuffer(),et.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let Ut=0;Ut<pt.length;Ut++){const Gt=pt[Ut];et.__webglColorRenderbuffer[Ut]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,et.__webglColorRenderbuffer[Ut]);const kt=u.convert(Gt.format,Gt.colorSpace),yt=u.convert(Gt.type),zt=O(Gt.internalFormat,kt,yt,Gt.colorSpace,N.isXRRenderTarget===!0),jt=Vt(N);o.renderbufferStorageMultisample(o.RENDERBUFFER,jt,zt,N.width,N.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ut,o.RENDERBUFFER,et.__webglColorRenderbuffer[Ut])}o.bindRenderbuffer(o.RENDERBUFFER,null),N.depthBuffer&&(et.__webglDepthRenderbuffer=o.createRenderbuffer(),oe(et.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(lt){i.bindTexture(o.TEXTURE_CUBE_MAP,ft.__webglTexture),xt(o.TEXTURE_CUBE_MAP,E);for(let Ut=0;Ut<6;Ut++)if(E.mipmaps&&E.mipmaps.length>0)for(let Gt=0;Gt<E.mipmaps.length;Gt++)wt(et.__webglFramebuffer[Ut][Gt],N,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,Gt);else wt(et.__webglFramebuffer[Ut],N,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0);S(E)&&_(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Pt){for(let Ut=0,Gt=pt.length;Ut<Gt;Ut++){const kt=pt[Ut],yt=r.get(kt);i.bindTexture(o.TEXTURE_2D,yt.__webglTexture),xt(o.TEXTURE_2D,kt),wt(et.__webglFramebuffer,N,kt,o.COLOR_ATTACHMENT0+Ut,o.TEXTURE_2D,0),S(kt)&&_(o.TEXTURE_2D)}i.unbindTexture()}else{let Ut=o.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ut=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ut,ft.__webglTexture),xt(Ut,E),E.mipmaps&&E.mipmaps.length>0)for(let Gt=0;Gt<E.mipmaps.length;Gt++)wt(et.__webglFramebuffer[Gt],N,E,o.COLOR_ATTACHMENT0,Ut,Gt);else wt(et.__webglFramebuffer,N,E,o.COLOR_ATTACHMENT0,Ut,0);S(E)&&_(Ut),i.unbindTexture()}N.depthBuffer&&Ne(N)}function B(N){const E=N.textures;for(let et=0,ft=E.length;et<ft;et++){const pt=E[et];if(S(pt)){const lt=I(N),Pt=r.get(pt).__webglTexture;i.bindTexture(lt,Pt),_(lt),i.unbindTexture()}}}const vn=[],Se=[];function he(N){if(N.samples>0){if(_e(N)===!1){const E=N.textures,et=N.width,ft=N.height;let pt=o.COLOR_BUFFER_BIT;const lt=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Pt=r.get(N),Ut=E.length>1;if(Ut)for(let kt=0;kt<E.length;kt++)i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+kt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+kt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer);const Gt=N.texture.mipmaps;Gt&&Gt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let kt=0;kt<E.length;kt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(pt|=o.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(pt|=o.STENCIL_BUFFER_BIT)),Ut){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Pt.__webglColorRenderbuffer[kt]);const yt=r.get(E[kt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,yt,0)}o.blitFramebuffer(0,0,et,ft,0,0,et,ft,pt,o.NEAREST),m===!0&&(vn.length=0,Se.length=0,vn.push(o.COLOR_ATTACHMENT0+kt),N.depthBuffer&&N.resolveDepthBuffer===!1&&(vn.push(lt),Se.push(lt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Se)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,vn))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ut)for(let kt=0;kt<E.length;kt++){i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+kt,o.RENDERBUFFER,Pt.__webglColorRenderbuffer[kt]);const yt=r.get(E[kt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+kt,o.TEXTURE_2D,yt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const E=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function Vt(N){return Math.min(l.maxSamples,N.samples)}function _e(N){const E=r.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Yt(N){const E=d.render.frame;g.get(N)!==E&&(g.set(N,E),N.update())}function ae(N,E){const et=N.colorSpace,ft=N.format,pt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||et!==Ms&&et!==Ia&&(be.getTransfer(et)===Be?(ft!==mi||pt!==ia)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),E}function Ze(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=ot,this.resetTextureUnits=ct,this.setTexture2D=ht,this.setTexture2DArray=P,this.setTexture3D=K,this.setTextureCube=q,this.rebindTextures=Fe,this.setupRenderTarget=ge,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=_e}function fT(o,e){function i(r,l=Ia){let u;const d=be.getTransfer(l);if(r===ia)return o.UNSIGNED_BYTE;if(r===lh)return o.UNSIGNED_SHORT_4_4_4_4;if(r===ch)return o.UNSIGNED_SHORT_5_5_5_1;if(r===$g)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===Qg)return o.BYTE;if(r===Jg)return o.SHORT;if(r===Co)return o.UNSIGNED_SHORT;if(r===oh)return o.INT;if(r===Mr)return o.UNSIGNED_INT;if(r===$i)return o.FLOAT;if(r===No)return o.HALF_FLOAT;if(r===t_)return o.ALPHA;if(r===e_)return o.RGB;if(r===mi)return o.RGBA;if(r===Do)return o.DEPTH_COMPONENT;if(r===Uo)return o.DEPTH_STENCIL;if(r===n_)return o.RED;if(r===uh)return o.RED_INTEGER;if(r===i_)return o.RG;if(r===fh)return o.RG_INTEGER;if(r===dh)return o.RGBA_INTEGER;if(r===vc||r===xc||r===yc||r===Sc)if(d===Be)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===vc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===xc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===yc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Sc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===vc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===xc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===yc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Sc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Dd||r===Ud||r===Nd||r===Ld)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Dd)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ud)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Nd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ld)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Od||r===Pd||r===zd)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Od||r===Pd)return d===Be?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===zd)return d===Be?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Bd||r===Id||r===Fd||r===Hd||r===Gd||r===Vd||r===kd||r===Xd||r===Wd||r===jd||r===qd||r===Yd||r===Zd||r===Kd)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Bd)return d===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Id)return d===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Fd)return d===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Hd)return d===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Gd)return d===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Vd)return d===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===kd)return d===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Xd)return d===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Wd)return d===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===jd)return d===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===qd)return d===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Yd)return d===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Zd)return d===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Kd)return d===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Mc||r===Qd||r===Jd)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===Mc)return d===Be?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Qd)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Jd)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===a_||r===$d||r===th||r===eh)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Mc)return u.COMPRESSED_RED_RGTC1_EXT;if(r===$d)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===th)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===eh)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===wo?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const dT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class pT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,r){if(this.texture===null){const l=new In,u=e.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!==r.depthNear||i.depthFar!==r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Va({vertexShader:dT,fragmentShader:hT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ea(new wc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class mT extends Ts{constructor(e,i){super();const r=this;let l=null,u=1,d=null,h="local-floor",m=1,p=null,g=null,v=null,x=null,M=null,A=null;const C=new pT,S=i.getContextAttributes();let _=null,I=null;const O=[],U=[],k=new Ie;let X=null;const F=new si;F.viewport=new Je;const Z=new si;Z.viewport=new Je;const w=[F,Z],R=new zS;let G=null,ct=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let mt=O[J];return mt===void 0&&(mt=new ld,O[J]=mt),mt.getTargetRaySpace()},this.getControllerGrip=function(J){let mt=O[J];return mt===void 0&&(mt=new ld,O[J]=mt),mt.getGripSpace()},this.getHand=function(J){let mt=O[J];return mt===void 0&&(mt=new ld,O[J]=mt),mt.getHandSpace()};function ot(J){const mt=U.indexOf(J.inputSource);if(mt===-1)return;const Mt=O[mt];Mt!==void 0&&(Mt.update(J.inputSource,J.frame,p||d),Mt.dispatchEvent({type:J.type,data:J.inputSource}))}function vt(){l.removeEventListener("select",ot),l.removeEventListener("selectstart",ot),l.removeEventListener("selectend",ot),l.removeEventListener("squeeze",ot),l.removeEventListener("squeezestart",ot),l.removeEventListener("squeezeend",ot),l.removeEventListener("end",vt),l.removeEventListener("inputsourceschange",ht);for(let J=0;J<O.length;J++){const mt=U[J];mt!==null&&(U[J]=null,O[J].disconnect(mt))}G=null,ct=null,C.reset(),e.setRenderTarget(_),M=null,x=null,v=null,l=null,I=null,St.stop(),r.isPresenting=!1,e.setPixelRatio(X),e.setSize(k.width,k.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){u=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){h=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(J){p=J},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return v},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(J){if(l=J,l!==null){if(_=e.getRenderTarget(),l.addEventListener("select",ot),l.addEventListener("selectstart",ot),l.addEventListener("selectend",ot),l.addEventListener("squeeze",ot),l.addEventListener("squeezestart",ot),l.addEventListener("squeezeend",ot),l.addEventListener("end",vt),l.addEventListener("inputsourceschange",ht),S.xrCompatible!==!0&&await i.makeXRCompatible(),X=e.getPixelRatio(),e.getSize(k),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,Rt=null,wt=null;S.depth&&(wt=S.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Mt=S.stencil?Uo:Do,Rt=S.stencil?wo:Mr);const oe={colorFormat:i.RGBA8,depthFormat:wt,scaleFactor:u};v=new XRWebGLBinding(l,i),x=v.createProjectionLayer(oe),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),I=new Er(x.textureWidth,x.textureHeight,{format:mi,type:ia,depthTexture:new x_(x.textureWidth,x.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Mt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,Mt),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),I=new Er(M.framebufferWidth,M.framebufferHeight,{format:mi,type:ia,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),St.setContext(l),St.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return C.getDepthTexture()};function ht(J){for(let mt=0;mt<J.removed.length;mt++){const Mt=J.removed[mt],Rt=U.indexOf(Mt);Rt>=0&&(U[Rt]=null,O[Rt].disconnect(Mt))}for(let mt=0;mt<J.added.length;mt++){const Mt=J.added[mt];let Rt=U.indexOf(Mt);if(Rt===-1){for(let oe=0;oe<O.length;oe++)if(oe>=U.length){U.push(Mt),Rt=oe;break}else if(U[oe]===null){U[oe]=Mt,Rt=oe;break}if(Rt===-1)break}const wt=O[Rt];wt&&wt.connect(Mt)}}const P=new st,K=new st;function q(J,mt,Mt){P.setFromMatrixPosition(mt.matrixWorld),K.setFromMatrixPosition(Mt.matrixWorld);const Rt=P.distanceTo(K),wt=mt.projectionMatrix.elements,oe=Mt.projectionMatrix.elements,Qt=wt[14]/(wt[10]-1),Ne=wt[14]/(wt[10]+1),Fe=(wt[9]+1)/wt[5],ge=(wt[9]-1)/wt[5],B=(wt[8]-1)/wt[0],vn=(oe[8]+1)/oe[0],Se=Qt*B,he=Qt*vn,Vt=Rt/(-B+vn),_e=Vt*-B;if(mt.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(_e),J.translateZ(Vt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),wt[10]===-1)J.projectionMatrix.copy(mt.projectionMatrix),J.projectionMatrixInverse.copy(mt.projectionMatrixInverse);else{const Yt=Qt+Vt,ae=Ne+Vt,Ze=Se-_e,N=he+(Rt-_e),E=Fe*Ne/ae*Yt,et=ge*Ne/ae*Yt;J.projectionMatrix.makePerspective(Ze,N,E,et,Yt,ae),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Et(J,mt){mt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(mt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(l===null)return;let mt=J.near,Mt=J.far;C.texture!==null&&(C.depthNear>0&&(mt=C.depthNear),C.depthFar>0&&(Mt=C.depthFar)),R.near=Z.near=F.near=mt,R.far=Z.far=F.far=Mt,(G!==R.near||ct!==R.far)&&(l.updateRenderState({depthNear:R.near,depthFar:R.far}),G=R.near,ct=R.far),F.layers.mask=J.layers.mask|2,Z.layers.mask=J.layers.mask|4,R.layers.mask=F.layers.mask|Z.layers.mask;const Rt=J.parent,wt=R.cameras;Et(R,Rt);for(let oe=0;oe<wt.length;oe++)Et(wt[oe],Rt);wt.length===2?q(R,F,Z):R.projectionMatrix.copy(F.projectionMatrix),D(J,R,Rt)};function D(J,mt,Mt){Mt===null?J.matrix.copy(mt.matrixWorld):(J.matrix.copy(Mt.matrixWorld),J.matrix.invert(),J.matrix.multiply(mt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(mt.projectionMatrix),J.projectionMatrixInverse.copy(mt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=nh*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(x===null&&M===null))return m},this.setFoveation=function(J){m=J,x!==null&&(x.fixedFoveation=J),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=J)},this.hasDepthSensing=function(){return C.texture!==null},this.getDepthSensingMesh=function(){return C.getMesh(R)};let tt=null;function xt(J,mt){if(g=mt.getViewerPose(p||d),A=mt,g!==null){const Mt=g.views;M!==null&&(e.setRenderTargetFramebuffer(I,M.framebuffer),e.setRenderTarget(I));let Rt=!1;Mt.length!==R.cameras.length&&(R.cameras.length=0,Rt=!0);for(let Qt=0;Qt<Mt.length;Qt++){const Ne=Mt[Qt];let Fe=null;if(M!==null)Fe=M.getViewport(Ne);else{const B=v.getViewSubImage(x,Ne);Fe=B.viewport,Qt===0&&(e.setRenderTargetTextures(I,B.colorTexture,B.depthStencilTexture),e.setRenderTarget(I))}let ge=w[Qt];ge===void 0&&(ge=new si,ge.layers.enable(Qt),ge.viewport=new Je,w[Qt]=ge),ge.matrix.fromArray(Ne.transform.matrix),ge.matrix.decompose(ge.position,ge.quaternion,ge.scale),ge.projectionMatrix.fromArray(Ne.projectionMatrix),ge.projectionMatrixInverse.copy(ge.projectionMatrix).invert(),ge.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),Qt===0&&(R.matrix.copy(ge.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),Rt===!0&&R.cameras.push(ge)}const wt=l.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&v){const Qt=v.getDepthInformation(Mt[0]);Qt&&Qt.isValid&&Qt.texture&&C.init(e,Qt,l.renderState)}}for(let Mt=0;Mt<O.length;Mt++){const Rt=U[Mt],wt=O[Mt];Rt!==null&&wt!==void 0&&wt.update(Rt,mt,p||d)}tt&&tt(J,mt),mt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:mt}),A=null}const St=new y_;St.setAnimationLoop(xt),this.setAnimationLoop=function(J){tt=J},this.dispose=function(){}}}const hr=new aa,gT=new $e;function _T(o,e){function i(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function r(S,_){_.color.getRGB(S.fogColor.value,p_(o)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function l(S,_,I,O,U){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(S,_):_.isMeshToonMaterial?(u(S,_),v(S,_)):_.isMeshPhongMaterial?(u(S,_),g(S,_)):_.isMeshStandardMaterial?(u(S,_),x(S,_),_.isMeshPhysicalMaterial&&M(S,_,U)):_.isMeshMatcapMaterial?(u(S,_),A(S,_)):_.isMeshDepthMaterial?u(S,_):_.isMeshDistanceMaterial?(u(S,_),C(S,_)):_.isMeshNormalMaterial?u(S,_):_.isLineBasicMaterial?(d(S,_),_.isLineDashedMaterial&&h(S,_)):_.isPointsMaterial?m(S,_,I,O):_.isSpriteMaterial?p(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,i(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===Bn&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,i(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===Bn&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,i(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,i(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const I=e.get(_),O=I.envMap,U=I.envMapRotation;O&&(S.envMap.value=O,hr.copy(U),hr.x*=-1,hr.y*=-1,hr.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(hr.y*=-1,hr.z*=-1),S.envMapRotation.value.setFromMatrix4(gT.makeRotationFromEuler(hr)),S.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,S.aoMapTransform))}function d(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform))}function h(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function m(S,_,I,O){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*I,S.scale.value=O*.5,_.map&&(S.map.value=_.map,i(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function p(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function g(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function v(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function x(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function M(S,_,I){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Bn&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=I.texture,S.transmissionSamplerSize.value.set(I.width,I.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,S.specularIntensityMapTransform))}function A(S,_){_.matcap&&(S.matcap.value=_.matcap)}function C(S,_){const I=e.get(_).light;S.referencePosition.value.setFromMatrixPosition(I.matrixWorld),S.nearDistance.value=I.shadow.camera.near,S.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function vT(o,e,i,r){let l={},u={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(I,O){const U=O.program;r.uniformBlockBinding(I,U)}function p(I,O){let U=l[I.id];U===void 0&&(A(I),U=g(I),l[I.id]=U,I.addEventListener("dispose",S));const k=O.program;r.updateUBOMapping(I,k);const X=e.render.frame;u[I.id]!==X&&(x(I),u[I.id]=X)}function g(I){const O=v();I.__bindingPointIndex=O;const U=o.createBuffer(),k=I.__size,X=I.usage;return o.bindBuffer(o.UNIFORM_BUFFER,U),o.bufferData(o.UNIFORM_BUFFER,k,X),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,O,U),U}function v(){for(let I=0;I<h;I++)if(d.indexOf(I)===-1)return d.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(I){const O=l[I.id],U=I.uniforms,k=I.__cache;o.bindBuffer(o.UNIFORM_BUFFER,O);for(let X=0,F=U.length;X<F;X++){const Z=Array.isArray(U[X])?U[X]:[U[X]];for(let w=0,R=Z.length;w<R;w++){const G=Z[w];if(M(G,X,w,k)===!0){const ct=G.__offset,ot=Array.isArray(G.value)?G.value:[G.value];let vt=0;for(let ht=0;ht<ot.length;ht++){const P=ot[ht],K=C(P);typeof P=="number"||typeof P=="boolean"?(G.__data[0]=P,o.bufferSubData(o.UNIFORM_BUFFER,ct+vt,G.__data)):P.isMatrix3?(G.__data[0]=P.elements[0],G.__data[1]=P.elements[1],G.__data[2]=P.elements[2],G.__data[3]=0,G.__data[4]=P.elements[3],G.__data[5]=P.elements[4],G.__data[6]=P.elements[5],G.__data[7]=0,G.__data[8]=P.elements[6],G.__data[9]=P.elements[7],G.__data[10]=P.elements[8],G.__data[11]=0):(P.toArray(G.__data,vt),vt+=K.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ct,G.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(I,O,U,k){const X=I.value,F=O+"_"+U;if(k[F]===void 0)return typeof X=="number"||typeof X=="boolean"?k[F]=X:k[F]=X.clone(),!0;{const Z=k[F];if(typeof X=="number"||typeof X=="boolean"){if(Z!==X)return k[F]=X,!0}else if(Z.equals(X)===!1)return Z.copy(X),!0}return!1}function A(I){const O=I.uniforms;let U=0;const k=16;for(let F=0,Z=O.length;F<Z;F++){const w=Array.isArray(O[F])?O[F]:[O[F]];for(let R=0,G=w.length;R<G;R++){const ct=w[R],ot=Array.isArray(ct.value)?ct.value:[ct.value];for(let vt=0,ht=ot.length;vt<ht;vt++){const P=ot[vt],K=C(P),q=U%k,Et=q%K.boundary,D=q+Et;U+=Et,D!==0&&k-D<K.storage&&(U+=k-D),ct.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),ct.__offset=U,U+=K.storage}}}const X=U%k;return X>0&&(U+=k-X),I.__size=U,I.__cache={},this}function C(I){const O={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(O.boundary=4,O.storage=4):I.isVector2?(O.boundary=8,O.storage=8):I.isVector3||I.isColor?(O.boundary=16,O.storage=12):I.isVector4?(O.boundary=16,O.storage=16):I.isMatrix3?(O.boundary=48,O.storage=48):I.isMatrix4?(O.boundary=64,O.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),O}function S(I){const O=I.target;O.removeEventListener("dispose",S);const U=d.indexOf(O.__bindingPointIndex);d.splice(U,1),o.deleteBuffer(l[O.id]),delete l[O.id],delete u[O.id]}function _(){for(const I in l)o.deleteBuffer(l[I]);d=[],l={},u={}}return{bind:m,update:p,dispose:_}}class xT{constructor(e={}){const{canvas:i=tS(),context:r=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=d;const A=new Uint32Array(4),C=new Int32Array(4);let S=null,_=null;const I=[],O=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ha,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let k=!1;this._outputColorSpace=ri;let X=0,F=0,Z=null,w=-1,R=null;const G=new Je,ct=new Je;let ot=null;const vt=new Te(0);let ht=0,P=i.width,K=i.height,q=1,Et=null,D=null;const tt=new Je(0,0,P,K),xt=new Je(0,0,P,K);let St=!1;const J=new __;let mt=!1,Mt=!1;const Rt=new $e,wt=new $e,oe=new st,Qt=new Je,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Fe=!1;function ge(){return Z===null?q:1}let B=r;function vn(T,j){return i.getContext(T,j)}try{const T={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${sh}`),i.addEventListener("webglcontextlost",Bt,!1),i.addEventListener("webglcontextrestored",At,!1),i.addEventListener("webglcontextcreationerror",_t,!1),B===null){const j="webgl2";if(B=vn(j,T),B===null)throw vn(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Se,he,Vt,_e,Yt,ae,Ze,N,E,et,ft,pt,lt,Pt,Ut,Gt,kt,yt,zt,jt,qt,Ct,ie,V;function Nt(){Se=new wE(B),Se.init(),Ct=new fT(B,Se),he=new ME(B,Se,e,Ct),Vt=new cT(B,Se),he.reverseDepthBuffer&&x&&Vt.buffers.depth.setReversed(!0),_e=new NE(B),Yt=new Kb,ae=new uT(B,Se,Vt,Yt,he,Ct,_e),Ze=new bE(U),N=new CE(U),E=new IS(B),ie=new yE(B,E),et=new DE(B,E,_e,ie),ft=new OE(B,et,E,_e),zt=new LE(B,he,ae),Gt=new EE(Yt),pt=new Zb(U,Ze,N,Se,he,ie,Gt),lt=new _T(U,Yt),Pt=new Jb,Ut=new aT(Se),yt=new xE(U,Ze,N,Vt,ft,M,m),kt=new oT(U,ft,he),V=new vT(B,_e,he,Vt),jt=new SE(B,Se,_e),qt=new UE(B,Se,_e),_e.programs=pt.programs,U.capabilities=he,U.extensions=Se,U.properties=Yt,U.renderLists=Pt,U.shadowMap=kt,U.state=Vt,U.info=_e}Nt();const bt=new mT(U,B);this.xr=bt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const T=Se.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Se.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(T){T!==void 0&&(q=T,this.setSize(P,K,!1))},this.getSize=function(T){return T.set(P,K)},this.setSize=function(T,j,at=!0){if(bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=T,K=j,i.width=Math.floor(T*q),i.height=Math.floor(j*q),at===!0&&(i.style.width=T+"px",i.style.height=j+"px"),this.setViewport(0,0,T,j)},this.getDrawingBufferSize=function(T){return T.set(P*q,K*q).floor()},this.setDrawingBufferSize=function(T,j,at){P=T,K=j,q=at,i.width=Math.floor(T*at),i.height=Math.floor(j*at),this.setViewport(0,0,T,j)},this.getCurrentViewport=function(T){return T.copy(G)},this.getViewport=function(T){return T.copy(tt)},this.setViewport=function(T,j,at,rt){T.isVector4?tt.set(T.x,T.y,T.z,T.w):tt.set(T,j,at,rt),Vt.viewport(G.copy(tt).multiplyScalar(q).round())},this.getScissor=function(T){return T.copy(xt)},this.setScissor=function(T,j,at,rt){T.isVector4?xt.set(T.x,T.y,T.z,T.w):xt.set(T,j,at,rt),Vt.scissor(ct.copy(xt).multiplyScalar(q).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(T){Vt.setScissorTest(St=T)},this.setOpaqueSort=function(T){Et=T},this.setTransparentSort=function(T){D=T},this.getClearColor=function(T){return T.copy(yt.getClearColor())},this.setClearColor=function(){yt.setClearColor(...arguments)},this.getClearAlpha=function(){return yt.getClearAlpha()},this.setClearAlpha=function(){yt.setClearAlpha(...arguments)},this.clear=function(T=!0,j=!0,at=!0){let rt=0;if(T){let Y=!1;if(Z!==null){const Tt=Z.texture.format;Y=Tt===dh||Tt===fh||Tt===uh}if(Y){const Tt=Z.texture.type,Dt=Tt===ia||Tt===Mr||Tt===Co||Tt===wo||Tt===lh||Tt===ch,Ot=yt.getClearColor(),It=yt.getClearAlpha(),te=Ot.r,Kt=Ot.g,Xt=Ot.b;Dt?(A[0]=te,A[1]=Kt,A[2]=Xt,A[3]=It,B.clearBufferuiv(B.COLOR,0,A)):(C[0]=te,C[1]=Kt,C[2]=Xt,C[3]=It,B.clearBufferiv(B.COLOR,0,C))}else rt|=B.COLOR_BUFFER_BIT}j&&(rt|=B.DEPTH_BUFFER_BIT),at&&(rt|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Bt,!1),i.removeEventListener("webglcontextrestored",At,!1),i.removeEventListener("webglcontextcreationerror",_t,!1),yt.dispose(),Pt.dispose(),Ut.dispose(),Yt.dispose(),Ze.dispose(),N.dispose(),ft.dispose(),ie.dispose(),V.dispose(),pt.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",rn),bt.removeEventListener("sessionend",xn),Un.stop()};function Bt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k=!0}function At(){console.log("THREE.WebGLRenderer: Context Restored."),k=!1;const T=_e.autoReset,j=kt.enabled,at=kt.autoUpdate,rt=kt.needsUpdate,Y=kt.type;Nt(),_e.autoReset=T,kt.enabled=j,kt.autoUpdate=at,kt.needsUpdate=rt,kt.type=Y}function _t(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ft(T){const j=T.target;j.removeEventListener("dispose",Ft),ne(j)}function ne(T){we(T),Yt.remove(T)}function we(T){const j=Yt.get(T).programs;j!==void 0&&(j.forEach(function(at){pt.releaseProgram(at)}),T.isShaderMaterial&&pt.releaseShaderCache(T))}this.renderBufferDirect=function(T,j,at,rt,Y,Tt){j===null&&(j=Ne);const Dt=Y.isMesh&&Y.matrixWorld.determinant()<0,Ot=Wa(T,j,at,rt,Y);Vt.setMaterial(rt,Dt);let It=at.index,te=1;if(rt.wireframe===!0){if(It=et.getWireframeAttribute(at),It===void 0)return;te=2}const Kt=at.drawRange,Xt=at.attributes.position;let le=Kt.start*te,Re=(Kt.start+Kt.count)*te;Tt!==null&&(le=Math.max(le,Tt.start*te),Re=Math.min(Re,(Tt.start+Tt.count)*te)),It!==null?(le=Math.max(le,0),Re=Math.min(Re,It.count)):Xt!=null&&(le=Math.max(le,0),Re=Math.min(Re,Xt.count));const Xe=Re-le;if(Xe<0||Xe===1/0)return;ie.setup(Y,rt,Ot,at,It);let fe,Ce=jt;if(It!==null&&(fe=E.get(It),Ce=qt,Ce.setIndex(fe)),Y.isMesh)rt.wireframe===!0?(Vt.setLineWidth(rt.wireframeLinewidth*ge()),Ce.setMode(B.LINES)):Ce.setMode(B.TRIANGLES);else if(Y.isLine){let Zt=rt.linewidth;Zt===void 0&&(Zt=1),Vt.setLineWidth(Zt*ge()),Y.isLineSegments?Ce.setMode(B.LINES):Y.isLineLoop?Ce.setMode(B.LINE_LOOP):Ce.setMode(B.LINE_STRIP)}else Y.isPoints?Ce.setMode(B.POINTS):Y.isSprite&&Ce.setMode(B.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)_s("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ce.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(Se.get("WEBGL_multi_draw"))Ce.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Zt=Y._multiDrawStarts,Le=Y._multiDrawCounts,ve=Y._multiDrawCount,dn=It?E.get(It).bytesPerElement:1,ca=Yt.get(rt).currentProgram.getUniforms();for(let Ve=0;Ve<ve;Ve++)ca.setValue(B,"_gl_DrawID",Ve),Ce.render(Zt[Ve]/dn,Le[Ve])}else if(Y.isInstancedMesh)Ce.renderInstances(le,Xe,Y.count);else if(at.isInstancedBufferGeometry){const Zt=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,Le=Math.min(at.instanceCount,Zt);Ce.renderInstances(le,Xe,Le)}else Ce.render(le,Xe)};function Me(T,j,at){T.transparent===!0&&T.side===Ji&&T.forceSinglePass===!1?(T.side=Bn,T.needsUpdate=!0,oa(T,j,at),T.side=Ga,T.needsUpdate=!0,oa(T,j,at),T.side=Ji):oa(T,j,at)}this.compile=function(T,j,at=null){at===null&&(at=T),_=Ut.get(at),_.init(j),O.push(_),at.traverseVisible(function(Y){Y.isLight&&Y.layers.test(j.layers)&&(_.pushLight(Y),Y.castShadow&&_.pushShadow(Y))}),T!==at&&T.traverseVisible(function(Y){Y.isLight&&Y.layers.test(j.layers)&&(_.pushLight(Y),Y.castShadow&&_.pushShadow(Y))}),_.setupLights();const rt=new Set;return T.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Tt=Y.material;if(Tt)if(Array.isArray(Tt))for(let Dt=0;Dt<Tt.length;Dt++){const Ot=Tt[Dt];Me(Ot,at,Y),rt.add(Ot)}else Me(Tt,at,Y),rt.add(Tt)}),_=O.pop(),rt},this.compileAsync=function(T,j,at=null){const rt=this.compile(T,j,at);return new Promise(Y=>{function Tt(){if(rt.forEach(function(Dt){Yt.get(Dt).currentProgram.isReady()&&rt.delete(Dt)}),rt.size===0){Y(T);return}setTimeout(Tt,10)}Se.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let Hn=null;function fn(T){Hn&&Hn(T)}function rn(){Un.stop()}function xn(){Un.start()}const Un=new y_;Un.setAnimationLoop(fn),typeof self<"u"&&Un.setContext(self),this.setAnimationLoop=function(T){Hn=T,bt.setAnimationLoop(T),T===null?Un.stop():Un.start()},bt.addEventListener("sessionstart",rn),bt.addEventListener("sessionend",xn),this.render=function(T,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(j),j=bt.getCamera()),T.isScene===!0&&T.onBeforeRender(U,T,j,Z),_=Ut.get(T,O.length),_.init(j),O.push(_),wt.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),J.setFromProjectionMatrix(wt),Mt=this.localClippingEnabled,mt=Gt.init(this.clippingPlanes,Mt),S=Pt.get(T,I.length),S.init(),I.push(S),bt.enabled===!0&&bt.isPresenting===!0){const Tt=U.xr.getDepthSensingMesh();Tt!==null&&ka(Tt,j,-1/0,U.sortObjects)}ka(T,j,0,U.sortObjects),S.finish(),U.sortObjects===!0&&S.sort(Et,D),Fe=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,Fe&&yt.addToRenderList(S,T),this.info.render.frame++,mt===!0&&Gt.beginShadows();const at=_.state.shadowsArray;kt.render(at,T,j),mt===!0&&Gt.endShadows(),this.info.autoReset===!0&&this.info.reset();const rt=S.opaque,Y=S.transmissive;if(_.setupLights(),j.isArrayCamera){const Tt=j.cameras;if(Y.length>0)for(let Dt=0,Ot=Tt.length;Dt<Ot;Dt++){const It=Tt[Dt];Fo(rt,Y,T,It)}Fe&&yt.render(T);for(let Dt=0,Ot=Tt.length;Dt<Ot;Dt++){const It=Tt[Dt];Io(S,T,It,It.viewport)}}else Y.length>0&&Fo(rt,Y,T,j),Fe&&yt.render(T),Io(S,T,j);Z!==null&&F===0&&(ae.updateMultisampleRenderTarget(Z),ae.updateRenderTargetMipmap(Z)),T.isScene===!0&&T.onAfterRender(U,T,j),ie.resetDefaultState(),w=-1,R=null,O.pop(),O.length>0?(_=O[O.length-1],mt===!0&&Gt.setGlobalState(U.clippingPlanes,_.state.camera)):_=null,I.pop(),I.length>0?S=I[I.length-1]:S=null};function ka(T,j,at,rt){if(T.visible===!1)return;if(T.layers.test(j.layers)){if(T.isGroup)at=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(j);else if(T.isLight)_.pushLight(T),T.castShadow&&_.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||J.intersectsSprite(T)){rt&&Qt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(wt);const Dt=ft.update(T),Ot=T.material;Ot.visible&&S.push(T,Dt,Ot,at,Qt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||J.intersectsObject(T))){const Dt=ft.update(T),Ot=T.material;if(rt&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Qt.copy(T.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),Qt.copy(Dt.boundingSphere.center)),Qt.applyMatrix4(T.matrixWorld).applyMatrix4(wt)),Array.isArray(Ot)){const It=Dt.groups;for(let te=0,Kt=It.length;te<Kt;te++){const Xt=It[te],le=Ot[Xt.materialIndex];le&&le.visible&&S.push(T,Dt,le,at,Qt.z,Xt)}}else Ot.visible&&S.push(T,Dt,Ot,at,Qt.z,null)}}const Tt=T.children;for(let Dt=0,Ot=Tt.length;Dt<Ot;Dt++)ka(Tt[Dt],j,at,rt)}function Io(T,j,at,rt){const Y=T.opaque,Tt=T.transmissive,Dt=T.transparent;_.setupLightsView(at),mt===!0&&Gt.setGlobalState(U.clippingPlanes,at),rt&&Vt.viewport(G.copy(rt)),Y.length>0&&Xa(Y,j,at),Tt.length>0&&Xa(Tt,j,at),Dt.length>0&&Xa(Dt,j,at),Vt.buffers.depth.setTest(!0),Vt.buffers.depth.setMask(!0),Vt.buffers.color.setMask(!0),Vt.setPolygonOffset(!1)}function Fo(T,j,at,rt){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[rt.id]===void 0&&(_.state.transmissionRenderTarget[rt.id]=new Er(1,1,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")||Se.has("EXT_color_buffer_float")?No:ia,minFilter:xr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:be.workingColorSpace}));const Tt=_.state.transmissionRenderTarget[rt.id],Dt=rt.viewport||G;Tt.setSize(Dt.z*U.transmissionResolutionScale,Dt.w*U.transmissionResolutionScale);const Ot=U.getRenderTarget(),It=U.getActiveCubeFace(),te=U.getActiveMipmapLevel();U.setRenderTarget(Tt),U.getClearColor(vt),ht=U.getClearAlpha(),ht<1&&U.setClearColor(16777215,.5),U.clear(),Fe&&yt.render(at);const Kt=U.toneMapping;U.toneMapping=Ha;const Xt=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),_.setupLightsView(rt),mt===!0&&Gt.setGlobalState(U.clippingPlanes,rt),Xa(T,at,rt),ae.updateMultisampleRenderTarget(Tt),ae.updateRenderTargetMipmap(Tt),Se.has("WEBGL_multisampled_render_to_texture")===!1){let le=!1;for(let Re=0,Xe=j.length;Re<Xe;Re++){const fe=j[Re],Ce=fe.object,Zt=fe.geometry,Le=fe.material,ve=fe.group;if(Le.side===Ji&&Ce.layers.test(rt.layers)){const dn=Le.side;Le.side=Bn,Le.needsUpdate=!0,sa(Ce,at,rt,Zt,Le,ve),Le.side=dn,Le.needsUpdate=!0,le=!0}}le===!0&&(ae.updateMultisampleRenderTarget(Tt),ae.updateRenderTargetMipmap(Tt))}U.setRenderTarget(Ot,It,te),U.setClearColor(vt,ht),Xt!==void 0&&(rt.viewport=Xt),U.toneMapping=Kt}function Xa(T,j,at){const rt=j.isScene===!0?j.overrideMaterial:null;for(let Y=0,Tt=T.length;Y<Tt;Y++){const Dt=T[Y],Ot=Dt.object,It=Dt.geometry,te=Dt.group;let Kt=Dt.material;Kt.allowOverride===!0&&rt!==null&&(Kt=rt),Ot.layers.test(at.layers)&&sa(Ot,j,at,It,Kt,te)}}function sa(T,j,at,rt,Y,Tt){T.onBeforeRender(U,j,at,rt,Y,Tt),T.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Y.onBeforeRender(U,j,at,rt,T,Tt),Y.transparent===!0&&Y.side===Ji&&Y.forceSinglePass===!1?(Y.side=Bn,Y.needsUpdate=!0,U.renderBufferDirect(at,j,rt,Y,T,Tt),Y.side=Ga,Y.needsUpdate=!0,U.renderBufferDirect(at,j,rt,Y,T,Tt),Y.side=Ji):U.renderBufferDirect(at,j,rt,Y,T,Tt),T.onAfterRender(U,j,at,rt,Y,Tt)}function oa(T,j,at){j.isScene!==!0&&(j=Ne);const rt=Yt.get(T),Y=_.state.lights,Tt=_.state.shadowsArray,Dt=Y.state.version,Ot=pt.getParameters(T,Y.state,Tt,j,at),It=pt.getProgramCacheKey(Ot);let te=rt.programs;rt.environment=T.isMeshStandardMaterial?j.environment:null,rt.fog=j.fog,rt.envMap=(T.isMeshStandardMaterial?N:Ze).get(T.envMap||rt.environment),rt.envMapRotation=rt.environment!==null&&T.envMap===null?j.environmentRotation:T.envMapRotation,te===void 0&&(T.addEventListener("dispose",Ft),te=new Map,rt.programs=te);let Kt=te.get(It);if(Kt!==void 0){if(rt.currentProgram===Kt&&rt.lightsStateVersion===Dt)return Ci(T,Ot),Kt}else Ot.uniforms=pt.getUniforms(T),T.onBeforeCompile(Ot,U),Kt=pt.acquireProgram(Ot,It),te.set(It,Kt),rt.uniforms=Ot.uniforms;const Xt=rt.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Xt.clippingPlanes=Gt.uniform),Ci(T,Ot),rt.needsLights=tn(T),rt.lightsStateVersion=Dt,rt.needsLights&&(Xt.ambientLightColor.value=Y.state.ambient,Xt.lightProbe.value=Y.state.probe,Xt.directionalLights.value=Y.state.directional,Xt.directionalLightShadows.value=Y.state.directionalShadow,Xt.spotLights.value=Y.state.spot,Xt.spotLightShadows.value=Y.state.spotShadow,Xt.rectAreaLights.value=Y.state.rectArea,Xt.ltc_1.value=Y.state.rectAreaLTC1,Xt.ltc_2.value=Y.state.rectAreaLTC2,Xt.pointLights.value=Y.state.point,Xt.pointLightShadows.value=Y.state.pointShadow,Xt.hemisphereLights.value=Y.state.hemi,Xt.directionalShadowMap.value=Y.state.directionalShadowMap,Xt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Xt.spotShadowMap.value=Y.state.spotShadowMap,Xt.spotLightMatrix.value=Y.state.spotLightMatrix,Xt.spotLightMap.value=Y.state.spotLightMap,Xt.pointShadowMap.value=Y.state.pointShadowMap,Xt.pointShadowMatrix.value=Y.state.pointShadowMatrix),rt.currentProgram=Kt,rt.uniformsList=null,Kt}function Ri(T){if(T.uniformsList===null){const j=T.currentProgram.getUniforms();T.uniformsList=Ec.seqWithValue(j.seq,T.uniforms)}return T.uniformsList}function Ci(T,j){const at=Yt.get(T);at.outputColorSpace=j.outputColorSpace,at.batching=j.batching,at.batchingColor=j.batchingColor,at.instancing=j.instancing,at.instancingColor=j.instancingColor,at.instancingMorph=j.instancingMorph,at.skinning=j.skinning,at.morphTargets=j.morphTargets,at.morphNormals=j.morphNormals,at.morphColors=j.morphColors,at.morphTargetsCount=j.morphTargetsCount,at.numClippingPlanes=j.numClippingPlanes,at.numIntersection=j.numClipIntersection,at.vertexAlphas=j.vertexAlphas,at.vertexTangents=j.vertexTangents,at.toneMapping=j.toneMapping}function Wa(T,j,at,rt,Y){j.isScene!==!0&&(j=Ne),ae.resetTextureUnits();const Tt=j.fog,Dt=rt.isMeshStandardMaterial?j.environment:null,Ot=Z===null?U.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Ms,It=(rt.isMeshStandardMaterial?N:Ze).get(rt.envMap||Dt),te=rt.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,Kt=!!at.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),Xt=!!at.morphAttributes.position,le=!!at.morphAttributes.normal,Re=!!at.morphAttributes.color;let Xe=Ha;rt.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Xe=U.toneMapping);const fe=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,Ce=fe!==void 0?fe.length:0,Zt=Yt.get(rt),Le=_.state.lights;if(mt===!0&&(Mt===!0||T!==R)){const hn=T===R&&rt.id===w;Gt.setState(rt,T,hn)}let ve=!1;rt.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==Le.state.version||Zt.outputColorSpace!==Ot||Y.isBatchedMesh&&Zt.batching===!1||!Y.isBatchedMesh&&Zt.batching===!0||Y.isBatchedMesh&&Zt.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Zt.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Zt.instancing===!1||!Y.isInstancedMesh&&Zt.instancing===!0||Y.isSkinnedMesh&&Zt.skinning===!1||!Y.isSkinnedMesh&&Zt.skinning===!0||Y.isInstancedMesh&&Zt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Zt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Zt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Zt.instancingMorph===!1&&Y.morphTexture!==null||Zt.envMap!==It||rt.fog===!0&&Zt.fog!==Tt||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==Gt.numPlanes||Zt.numIntersection!==Gt.numIntersection)||Zt.vertexAlphas!==te||Zt.vertexTangents!==Kt||Zt.morphTargets!==Xt||Zt.morphNormals!==le||Zt.morphColors!==Re||Zt.toneMapping!==Xe||Zt.morphTargetsCount!==Ce)&&(ve=!0):(ve=!0,Zt.__version=rt.version);let dn=Zt.currentProgram;ve===!0&&(dn=oa(rt,j,Y));let ca=!1,Ve=!1,Di=!1;const He=dn.getUniforms(),bn=Zt.uniforms;if(Vt.useProgram(dn.program)&&(ca=!0,Ve=!0,Di=!0),rt.id!==w&&(w=rt.id,Ve=!0),ca||R!==T){Vt.buffers.depth.getReversed()?(Rt.copy(T.projectionMatrix),nS(Rt),iS(Rt),He.setValue(B,"projectionMatrix",Rt)):He.setValue(B,"projectionMatrix",T.projectionMatrix),He.setValue(B,"viewMatrix",T.matrixWorldInverse);const yn=He.map.cameraPosition;yn!==void 0&&yn.setValue(B,oe.setFromMatrixPosition(T.matrixWorld)),he.logarithmicDepthBuffer&&He.setValue(B,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&He.setValue(B,"isOrthographic",T.isOrthographicCamera===!0),R!==T&&(R=T,Ve=!0,Di=!0)}if(Y.isSkinnedMesh){He.setOptional(B,Y,"bindMatrix"),He.setOptional(B,Y,"bindMatrixInverse");const hn=Y.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),He.setValue(B,"boneTexture",hn.boneTexture,ae))}Y.isBatchedMesh&&(He.setOptional(B,Y,"batchingTexture"),He.setValue(B,"batchingTexture",Y._matricesTexture,ae),He.setOptional(B,Y,"batchingIdTexture"),He.setValue(B,"batchingIdTexture",Y._indirectTexture,ae),He.setOptional(B,Y,"batchingColorTexture"),Y._colorsTexture!==null&&He.setValue(B,"batchingColorTexture",Y._colorsTexture,ae));const sn=at.morphAttributes;if((sn.position!==void 0||sn.normal!==void 0||sn.color!==void 0)&&zt.update(Y,at,dn),(Ve||Zt.receiveShadow!==Y.receiveShadow)&&(Zt.receiveShadow=Y.receiveShadow,He.setValue(B,"receiveShadow",Y.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(bn.envMap.value=It,bn.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),rt.isMeshStandardMaterial&&rt.envMap===null&&j.environment!==null&&(bn.envMapIntensity.value=j.environmentIntensity),Ve&&(He.setValue(B,"toneMappingExposure",U.toneMappingExposure),Zt.needsLights&&la(bn,Di),Tt&&rt.fog===!0&&lt.refreshFogUniforms(bn,Tt),lt.refreshMaterialUniforms(bn,rt,q,K,_.state.transmissionRenderTarget[T.id]),Ec.upload(B,Ri(Zt),bn,ae)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(Ec.upload(B,Ri(Zt),bn,ae),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&He.setValue(B,"center",Y.center),He.setValue(B,"modelViewMatrix",Y.modelViewMatrix),He.setValue(B,"normalMatrix",Y.normalMatrix),He.setValue(B,"modelMatrix",Y.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){const hn=rt.uniformsGroups;for(let yn=0,vi=hn.length;yn<vi;yn++){const Ui=hn[yn];V.update(Ui,dn),V.bind(Ui,dn)}}return dn}function la(T,j){T.ambientLightColor.needsUpdate=j,T.lightProbe.needsUpdate=j,T.directionalLights.needsUpdate=j,T.directionalLightShadows.needsUpdate=j,T.pointLights.needsUpdate=j,T.pointLightShadows.needsUpdate=j,T.spotLights.needsUpdate=j,T.spotLightShadows.needsUpdate=j,T.rectAreaLights.needsUpdate=j,T.hemisphereLights.needsUpdate=j}function tn(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(T,j,at){const rt=Yt.get(T);rt.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,rt.__autoAllocateDepthBuffer===!1&&(rt.__useRenderToTexture=!1),Yt.get(T.texture).__webglTexture=j,Yt.get(T.depthTexture).__webglTexture=rt.__autoAllocateDepthBuffer?void 0:at,rt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,j){const at=Yt.get(T);at.__webglFramebuffer=j,at.__useDefaultFramebuffer=j===void 0};const Ho=B.createFramebuffer();this.setRenderTarget=function(T,j=0,at=0){Z=T,X=j,F=at;let rt=!0,Y=null,Tt=!1,Dt=!1;if(T){const It=Yt.get(T);if(It.__useDefaultFramebuffer!==void 0)Vt.bindFramebuffer(B.FRAMEBUFFER,null),rt=!1;else if(It.__webglFramebuffer===void 0)ae.setupRenderTarget(T);else if(It.__hasExternalTextures)ae.rebindTextures(T,Yt.get(T.texture).__webglTexture,Yt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Xt=T.depthTexture;if(It.__boundDepthTexture!==Xt){if(Xt!==null&&Yt.has(Xt)&&(T.width!==Xt.image.width||T.height!==Xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ae.setupDepthRenderbuffer(T)}}const te=T.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(Dt=!0);const Kt=Yt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Kt[j])?Y=Kt[j][at]:Y=Kt[j],Tt=!0):T.samples>0&&ae.useMultisampledRTT(T)===!1?Y=Yt.get(T).__webglMultisampledFramebuffer:Array.isArray(Kt)?Y=Kt[at]:Y=Kt,G.copy(T.viewport),ct.copy(T.scissor),ot=T.scissorTest}else G.copy(tt).multiplyScalar(q).floor(),ct.copy(xt).multiplyScalar(q).floor(),ot=St;if(at!==0&&(Y=Ho),Vt.bindFramebuffer(B.FRAMEBUFFER,Y)&&rt&&Vt.drawBuffers(T,Y),Vt.viewport(G),Vt.scissor(ct),Vt.setScissorTest(ot),Tt){const It=Yt.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+j,It.__webglTexture,at)}else if(Dt){const It=Yt.get(T.texture),te=j;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,It.__webglTexture,at,te)}else if(T!==null&&at!==0){const It=Yt.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,It.__webglTexture,at)}w=-1},this.readRenderTargetPixels=function(T,j,at,rt,Y,Tt,Dt,Ot=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=Yt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Dt!==void 0&&(It=It[Dt]),It){Vt.bindFramebuffer(B.FRAMEBUFFER,It);try{const te=T.textures[Ot],Kt=te.format,Xt=te.type;if(!he.textureFormatReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!he.textureTypeReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=T.width-rt&&at>=0&&at<=T.height-Y&&(T.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Ot),B.readPixels(j,at,rt,Y,Ct.convert(Kt),Ct.convert(Xt),Tt))}finally{const te=Z!==null?Yt.get(Z).__webglFramebuffer:null;Vt.bindFramebuffer(B.FRAMEBUFFER,te)}}},this.readRenderTargetPixelsAsync=async function(T,j,at,rt,Y,Tt,Dt,Ot=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=Yt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Dt!==void 0&&(It=It[Dt]),It)if(j>=0&&j<=T.width-rt&&at>=0&&at<=T.height-Y){Vt.bindFramebuffer(B.FRAMEBUFFER,It);const te=T.textures[Ot],Kt=te.format,Xt=te.type;if(!he.textureFormatReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!he.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const le=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,le),B.bufferData(B.PIXEL_PACK_BUFFER,Tt.byteLength,B.STREAM_READ),T.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Ot),B.readPixels(j,at,rt,Y,Ct.convert(Kt),Ct.convert(Xt),0);const Re=Z!==null?Yt.get(Z).__webglFramebuffer:null;Vt.bindFramebuffer(B.FRAMEBUFFER,Re);const Xe=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await eS(B,Xe,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,le),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Tt),B.deleteBuffer(le),B.deleteSync(Xe),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,j=null,at=0){const rt=Math.pow(2,-at),Y=Math.floor(T.image.width*rt),Tt=Math.floor(T.image.height*rt),Dt=j!==null?j.x:0,Ot=j!==null?j.y:0;ae.setTexture2D(T,0),B.copyTexSubImage2D(B.TEXTURE_2D,at,0,0,Dt,Ot,Y,Tt),Vt.unbindTexture()};const Go=B.createFramebuffer(),wi=B.createFramebuffer();this.copyTextureToTexture=function(T,j,at=null,rt=null,Y=0,Tt=null){Tt===null&&(Y!==0?(_s("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=Y,Y=0):Tt=0);let Dt,Ot,It,te,Kt,Xt,le,Re,Xe;const fe=T.isCompressedTexture?T.mipmaps[Tt]:T.image;if(at!==null)Dt=at.max.x-at.min.x,Ot=at.max.y-at.min.y,It=at.isBox3?at.max.z-at.min.z:1,te=at.min.x,Kt=at.min.y,Xt=at.isBox3?at.min.z:0;else{const sn=Math.pow(2,-Y);Dt=Math.floor(fe.width*sn),Ot=Math.floor(fe.height*sn),T.isDataArrayTexture?It=fe.depth:T.isData3DTexture?It=Math.floor(fe.depth*sn):It=1,te=0,Kt=0,Xt=0}rt!==null?(le=rt.x,Re=rt.y,Xe=rt.z):(le=0,Re=0,Xe=0);const Ce=Ct.convert(j.format),Zt=Ct.convert(j.type);let Le;j.isData3DTexture?(ae.setTexture3D(j,0),Le=B.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(ae.setTexture2DArray(j,0),Le=B.TEXTURE_2D_ARRAY):(ae.setTexture2D(j,0),Le=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,j.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,j.unpackAlignment);const ve=B.getParameter(B.UNPACK_ROW_LENGTH),dn=B.getParameter(B.UNPACK_IMAGE_HEIGHT),ca=B.getParameter(B.UNPACK_SKIP_PIXELS),Ve=B.getParameter(B.UNPACK_SKIP_ROWS),Di=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,fe.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,fe.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,te),B.pixelStorei(B.UNPACK_SKIP_ROWS,Kt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Xt);const He=T.isDataArrayTexture||T.isData3DTexture,bn=j.isDataArrayTexture||j.isData3DTexture;if(T.isDepthTexture){const sn=Yt.get(T),hn=Yt.get(j),yn=Yt.get(sn.__renderTarget),vi=Yt.get(hn.__renderTarget);Vt.bindFramebuffer(B.READ_FRAMEBUFFER,yn.__webglFramebuffer),Vt.bindFramebuffer(B.DRAW_FRAMEBUFFER,vi.__webglFramebuffer);for(let Ui=0;Ui<It;Ui++)He&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Yt.get(T).__webglTexture,Y,Xt+Ui),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Yt.get(j).__webglTexture,Tt,Xe+Ui)),B.blitFramebuffer(te,Kt,Dt,Ot,le,Re,Dt,Ot,B.DEPTH_BUFFER_BIT,B.NEAREST);Vt.bindFramebuffer(B.READ_FRAMEBUFFER,null),Vt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(Y!==0||T.isRenderTargetTexture||Yt.has(T)){const sn=Yt.get(T),hn=Yt.get(j);Vt.bindFramebuffer(B.READ_FRAMEBUFFER,Go),Vt.bindFramebuffer(B.DRAW_FRAMEBUFFER,wi);for(let yn=0;yn<It;yn++)He?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,sn.__webglTexture,Y,Xt+yn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,sn.__webglTexture,Y),bn?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,hn.__webglTexture,Tt,Xe+yn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,hn.__webglTexture,Tt),Y!==0?B.blitFramebuffer(te,Kt,Dt,Ot,le,Re,Dt,Ot,B.COLOR_BUFFER_BIT,B.NEAREST):bn?B.copyTexSubImage3D(Le,Tt,le,Re,Xe+yn,te,Kt,Dt,Ot):B.copyTexSubImage2D(Le,Tt,le,Re,te,Kt,Dt,Ot);Vt.bindFramebuffer(B.READ_FRAMEBUFFER,null),Vt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else bn?T.isDataTexture||T.isData3DTexture?B.texSubImage3D(Le,Tt,le,Re,Xe,Dt,Ot,It,Ce,Zt,fe.data):j.isCompressedArrayTexture?B.compressedTexSubImage3D(Le,Tt,le,Re,Xe,Dt,Ot,It,Ce,fe.data):B.texSubImage3D(Le,Tt,le,Re,Xe,Dt,Ot,It,Ce,Zt,fe):T.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Tt,le,Re,Dt,Ot,Ce,Zt,fe.data):T.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Tt,le,Re,fe.width,fe.height,Ce,fe.data):B.texSubImage2D(B.TEXTURE_2D,Tt,le,Re,Dt,Ot,Ce,Zt,fe);B.pixelStorei(B.UNPACK_ROW_LENGTH,ve),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,dn),B.pixelStorei(B.UNPACK_SKIP_PIXELS,ca),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ve),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Di),Tt===0&&j.generateMipmaps&&B.generateMipmap(Le),Vt.unbindTexture()},this.copyTextureToTexture3D=function(T,j,at=null,rt=null,Y=0){return _s('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,j,at,rt,Y)},this.initRenderTarget=function(T){Yt.get(T).__webglFramebuffer===void 0&&ae.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?ae.setTextureCube(T,0):T.isData3DTexture?ae.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ae.setTexture2DArray(T,0):ae.setTexture2D(T,0),Vt.unbindTexture()},this.resetState=function(){X=0,F=0,Z=null,Vt.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ta}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=be._getDrawingBufferColorSpace(e),i.unpackColorSpace=be._getUnpackColorSpace()}}const yT=()=>{const o=Sr.useRef(null);return Sr.useEffect(()=>{const e=o.current;if(!e)return;const i=new CS,r=new si(75,window.innerWidth/window.innerHeight,.1,1e3),l=new xT({alpha:!0});l.setSize(window.innerWidth,window.innerHeight),e.appendChild(l.domElement);const u=1e3,d=new ra,h=new Float32Array(u*3),m=new Float32Array(u*3),p=new Te(9133302),g=new Te(15485081);for(let C=0;C<u;C++){h[C*3]=(Math.random()*2-1)*500,h[C*3+1]=(Math.random()*2-1)*500,h[C*3+2]=(Math.random()*2-1)*500;const S=new Te;S.lerpColors(p,g,Math.random()),m[C*3]=S.r,m[C*3+1]=S.g,m[C*3+2]=S.b}d.setAttribute("position",new oi(h,3)),d.setAttribute("color",new oi(m,3));const v=new v_({size:1.5,vertexColors:!0,transparent:!0,opacity:.7,blending:gd}),x=new NS(d,v);i.add(x),r.position.z=5;const M=()=>{requestAnimationFrame(M),x.rotation.x+=5e-4,x.rotation.y+=8e-4,l.render(i,r)};M();const A=()=>{r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),l.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",A),()=>{window.removeEventListener("resize",A),e&&l.domElement&&e.removeChild(l.domElement),l.dispose(),v.dispose(),d.dispose()}},[]),z.jsx("div",{ref:o,className:"fixed inset-0 z-0 pointer-events-none",style:{background:"transparent"}})},ai=({type:o})=>{const{theme:e}=Ai(),i=e==="dark"?"#8B5CF6":"#6366F1";return z.jsx("div",{className:"w-full flex justify-center py-8",children:z.jsx("svg",{width:"100%",height:"20",viewBox:"0 0 100 20",preserveAspectRatio:"none",className:"max-w-screen-lg",children:o==="top"?z.jsxs(z.Fragment,{children:[z.jsx("path",{d:"M0 10 L20 10 C30 0, 70 0, 80 10 L100 10",stroke:i,strokeWidth:"2",fill:"none",className:"transition-all duration-500"}),z.jsx("circle",{cx:"20",cy:"10",r:"3",fill:i,className:"transition-all duration-500"}),z.jsx("circle",{cx:"80",cy:"10",r:"3",fill:i,className:"transition-all duration-500"})]}):z.jsxs(z.Fragment,{children:[z.jsx("path",{d:"M0 10 L20 10 C30 20, 70 20, 80 10 L100 10",stroke:i,strokeWidth:"2",fill:"none",className:"transition-all duration-500"}),z.jsx("circle",{cx:"20",cy:"10",r:"3",fill:i,className:"transition-all duration-500"}),z.jsx("circle",{cx:"80",cy:"10",r:"3",fill:i,className:"transition-all duration-500"})]})})})},T_=Sr.createContext(),Ai=()=>Sr.useContext(T_),ST=({children:o})=>{const[e,i]=Sr.useState(()=>{const l=localStorage.getItem("theme");return l||(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,"dark")});Sr.useEffect(()=>{const l=document.documentElement;l.classList.remove("light","dark"),l.classList.add(e),localStorage.setItem("theme",e)},[e]);const r=()=>{i(l=>l==="dark"?"light":"dark")};return z.jsx(T_.Provider,{value:{theme:e,toggleTheme:r},children:o})},MT=()=>{const[o,e]=gi.useState("hero"),{theme:i}=Ai();uy();const r=l=>{const u=document.getElementById(l);u&&(u.scrollIntoView({behavior:"smooth"}),e(l))};return gi.useEffect(()=>{const l=()=>{const u=["hero","about","education","skills","projects","certificates","contact"];let d="hero";for(const h of u){const m=document.getElementById(h);if(m){const p=m.getBoundingClientRect();if(p.top<=window.innerHeight/2&&p.bottom>=window.innerHeight/2){d=h;break}}}e(d)};return window.addEventListener("scroll",l),()=>window.removeEventListener("scroll",l)},[]),z.jsxs("div",{className:`min-h-screen ${i==="dark"?"bg-gradient-to-br from-gray-950 to-black text-gray-100":"bg-gradient-to-br from-gray-50 to-gray-200 text-gray-900"} font-inter relative overflow-hidden`,children:[z.jsx(yT,{}),z.jsx(Fx,{scrollToSection:r,activeSection:o}),z.jsxs("main",{className:"container mx-auto px-4 py-8 sm:px-6 lg:px-8 relative z-10",children:[" ",z.jsx("section",{id:"hero",className:"min-h-screen flex items-center justify-center py-16",children:z.jsx(Hx,{})}),z.jsxs("section",{id:"about",className:"py-16 sm:py-24 flex flex-col items-center justify-center",children:[z.jsx(ai,{type:"top"}),z.jsx(Gx,{}),z.jsx(ai,{type:"bottom"})]}),z.jsxs("section",{id:"education",className:"py-16 sm:py-24 flex flex-col items-center justify-center",children:[z.jsx(ai,{type:"top"}),z.jsx(Vx,{}),z.jsx(ai,{type:"bottom"})]}),z.jsxs("section",{id:"skills",className:"py-16 sm:py-24 flex flex-col items-center justify-center",children:[z.jsx(ai,{type:"top"}),z.jsx(sy,{}),z.jsx(ai,{type:"bottom"})]}),z.jsxs("section",{id:"projects",className:"py-16 sm:py-24 flex flex-col items-center justify-center",children:[z.jsx(ai,{type:"top"}),z.jsx(oy,{}),z.jsx(ai,{type:"bottom"})]}),z.jsxs("section",{id:"certificates",className:"py-16 sm:py-24 flex flex-col items-center justify-center",children:[z.jsx(ai,{type:"top"}),z.jsx(ly,{}),z.jsx(ai,{type:"bottom"})]}),z.jsxs("section",{id:"contact",className:"py-16 sm:py-24 flex flex-col items-center justify-center",children:[z.jsx(ai,{type:"top"}),z.jsx(cy,{}),z.jsx(ai,{type:"bottom"})]})]}),z.jsx("footer",{className:`py-8 text-center text-sm ${i==="dark"?"text-gray-500":"text-gray-600"}`,children:z.jsxs("p",{children:["© ",new Date().getFullYear()," C.K.BHALAJI. All rights reserved."]})})]})},ET=()=>z.jsx(ST,{children:z.jsx(MT,{})});Ix.createRoot(document.getElementById("root")).render(z.jsx(gi.StrictMode,{children:z.jsx(ET,{})}));
