var t=function(t,n){return t===n||t!=t&&n!=n},n=function(n,r){for(var e=n.length;e--;)if(t(n[e][0],r))return e;return-1},r=Array.prototype.splice;function e(t){var n=-1,r=null==t?0:t.length;for(this.clear();++n<r;){var e=t[n];this.set(e[0],e[1])}}e.prototype.clear=function(){this.__data__=[],this.size=0},e.prototype.delete=function(t){var e=this.__data__,i=n(e,t);return!(i<0||(i==e.length-1?e.pop():r.call(e,i,1),--this.size,0))},e.prototype.get=function(t){var r=this.__data__,e=n(r,t);return e<0?void 0:r[e][1]},e.prototype.has=function(t){return n(this.__data__,t)>-1},e.prototype.set=function(t,r){var e=this.__data__,i=n(e,t);return i<0?(++this.size,e.push([t,r])):e[i][1]=r,this};var i=e,o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function f(t,n){return t(n={exports:{}},n.exports),n.exports}var u,c="object"==typeof o&&o&&o.Object===Object&&o,a="object"==typeof self&&self&&self.Object===Object&&self,s=c||a||Function("return this")(),l=s.Symbol,h=Object.prototype,v=h.hasOwnProperty,b=h.toString,d=l?l.toStringTag:void 0,p=Object.prototype.toString,g=l?l.toStringTag:void 0,y=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":g&&g in Object(t)?function(t){var n=v.call(t,d),r=t[d];try{t[d]=void 0;var e=!0}catch(o){}var i=b.call(t);return e&&(n?t[d]=r:delete t[d]),i}(t):function(t){return p.call(t)}(t)},x=function(t){var n=typeof t;return null!=t&&("object"==n||"function"==n)},m=function(t){if(!x(t))return!1;var n=y(t);return"[object Function]"==n||"[object GeneratorFunction]"==n||"[object AsyncFunction]"==n||"[object Proxy]"==n},j=s["__core-js_shared__"],O=(u=/[^.]+$/.exec(j&&j.keys&&j.keys.IE_PROTO||""))?"Symbol(src)_1."+u:"",w=Function.prototype.toString,S=/^\[object .+?Constructor\]$/,_=RegExp("^"+Function.prototype.toString.call(Object.prototype.hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),z=function(t){return!(!x(t)||(n=t,O&&O in n))&&(m(t)?_:S).test(function(t){if(null!=t){try{return w.call(t)}catch(n){}try{return t+""}catch(n){}}return""}(t));var n},F=function(t,n){var r=function(t,n){return null==t?void 0:t[n]}(t,n);return z(r)?r:void 0},E=F(s,"Map"),W=F(Object,"create"),A=Object.prototype.hasOwnProperty,H=Object.prototype.hasOwnProperty;function T(t){var n=-1,r=null==t?0:t.length;for(this.clear();++n<r;){var e=t[n];this.set(e[0],e[1])}}T.prototype.clear=function(){this.__data__=W?W(null):{},this.size=0},T.prototype.delete=function(t){var n=this.has(t)&&delete this.__data__[t];return this.size-=n?1:0,n},T.prototype.get=function(t){var n=this.__data__;if(W){var r=n[t];return"__lodash_hash_undefined__"===r?void 0:r}return A.call(n,t)?n[t]:void 0},T.prototype.has=function(t){var n=this.__data__;return W?void 0!==n[t]:H.call(n,t)},T.prototype.set=function(t,n){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=W&&void 0===n?"__lodash_hash_undefined__":n,this};var k=T,$=function(t,n){var r,e,i=t.__data__;return("string"==(e=typeof(r=n))||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==r:null===r)?i["string"==typeof n?"string":"hash"]:i.map};function M(t){var n=-1,r=null==t?0:t.length;for(this.clear();++n<r;){var e=t[n];this.set(e[0],e[1])}}M.prototype.clear=function(){this.size=0,this.__data__={hash:new k,map:new(E||i),string:new k}},M.prototype.delete=function(t){var n=$(this,t).delete(t);return this.size-=n?1:0,n},M.prototype.get=function(t){return $(this,t).get(t)},M.prototype.has=function(t){return $(this,t).has(t)},M.prototype.set=function(t,n){var r=$(this,t),e=r.size;return r.set(t,n),this.size+=r.size==e?0:1,this};var B=M;function D(t){var n=this.__data__=new i(t);this.size=n.size}D.prototype.clear=function(){this.__data__=new i,this.size=0},D.prototype.delete=function(t){var n=this.__data__,r=n.delete(t);return this.size=n.size,r},D.prototype.get=function(t){return this.__data__.get(t)},D.prototype.has=function(t){return this.__data__.has(t)},D.prototype.set=function(t,n){var r=this.__data__;if(r instanceof i){var e=r.__data__;if(!E||e.length<199)return e.push([t,n]),this.size=++r.size,this;r=this.__data__=new B(e)}return r.set(t,n),this.size=r.size,this};var L,R,I=D,P=function(){try{var t=F(Object,"defineProperty");return t({},"",{}),t}catch(n){}}(),C=function(t,n,r){"__proto__"==n&&P?P(t,n,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[n]=r},G=function(n,r,e){(void 0!==e&&!t(n[r],e)||void 0===e&&!(r in n))&&C(n,r,e)},N=function(t,n,r){for(var e=-1,i=Object(t),o=r(t),f=o.length;f--;){var u=o[++e];if(!1===n(i[u],u,i))break}return t},U=f((function(t,n){var r=n&&!n.nodeType&&n,e=r&&t&&!t.nodeType&&t,i=e&&e.exports===r?s.Buffer:void 0,o=i?i.allocUnsafe:void 0;t.exports=function(t,n){if(n)return t.slice();var r=t.length,e=o?o(r):new t.constructor(r);return t.copy(e),e}})),q=s.Uint8Array,J=function(t,n){var r,e,i=n?(e=new(r=t.buffer).constructor(r.byteLength),new q(e).set(new q(r)),e):t.buffer;return new t.constructor(i,t.byteOffset,t.length)},K=Object.create,Q=function(){function t(){}return function(n){if(!x(n))return{};if(K)return K(n);t.prototype=n;var r=new t;return t.prototype=void 0,r}}(),V=(L=Object.getPrototypeOf,R=Object,function(t){return L(R(t))}),X=Object.prototype,Y=function(t){var n=t&&t.constructor;return t===("function"==typeof n&&n.prototype||X)},Z=function(t){return null!=t&&"object"==typeof t},tt=function(t){return Z(t)&&"[object Arguments]"==y(t)},nt=Object.prototype,rt=nt.hasOwnProperty,et=nt.propertyIsEnumerable,it=tt(function(){return arguments}())?tt:function(t){return Z(t)&&rt.call(t,"callee")&&!et.call(t,"callee")},ot=Array.isArray,ft=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991},ut=function(t){return null!=t&&ft(t.length)&&!m(t)},ct=function(){return!1},at=f((function(t,n){var r=n&&!n.nodeType&&n,e=r&&t&&!t.nodeType&&t,i=e&&e.exports===r?s.Buffer:void 0;t.exports=(i?i.isBuffer:void 0)||ct})),st=Function.prototype.toString,lt=Object.prototype.hasOwnProperty,ht=st.call(Object),vt={};vt["[object Float32Array]"]=vt["[object Float64Array]"]=vt["[object Int8Array]"]=vt["[object Int16Array]"]=vt["[object Int32Array]"]=vt["[object Uint8Array]"]=vt["[object Uint8ClampedArray]"]=vt["[object Uint16Array]"]=vt["[object Uint32Array]"]=!0,vt["[object Arguments]"]=vt["[object Array]"]=vt["[object ArrayBuffer]"]=vt["[object Boolean]"]=vt["[object DataView]"]=vt["[object Date]"]=vt["[object Error]"]=vt["[object Function]"]=vt["[object Map]"]=vt["[object Number]"]=vt["[object Object]"]=vt["[object RegExp]"]=vt["[object Set]"]=vt["[object String]"]=vt["[object WeakMap]"]=!1;var bt,dt=f((function(t,n){var r=n&&!n.nodeType&&n,e=r&&t&&!t.nodeType&&t,i=e&&e.exports===r&&c.process,o=function(){try{return e&&e.require&&e.require("util").types||i&&i.binding&&i.binding("util")}catch(t){}}();t.exports=o})),pt=dt&&dt.isTypedArray,gt=pt?function(t){return function(n){return t(n)}}(pt):function(t){return Z(t)&&ft(t.length)&&!!vt[y(t)]},yt=function(t,n){if(("constructor"!==n||"function"!=typeof t[n])&&"__proto__"!=n)return t[n]},xt=Object.prototype.hasOwnProperty,mt=function(n,r,e){var i=n[r];xt.call(n,r)&&t(i,e)&&(void 0!==e||r in n)||C(n,r,e)},jt=/^(?:0|[1-9]\d*)$/,Ot=function(t,n){var r=typeof t;return!!(n=null==n?9007199254740991:n)&&("number"==r||"symbol"!=r&&jt.test(t))&&t>-1&&t%1==0&&t<n},wt=Object.prototype.hasOwnProperty,St=function(t,n){var r=ot(t),e=!r&&it(t),i=!r&&!e&&at(t),o=!r&&!e&&!i&&gt(t),f=r||e||i||o,u=f?function(t,n){for(var r=-1,e=Array(t);++r<t;)e[r]=n(r);return e}(t.length,String):[],c=u.length;for(var a in t)!n&&!wt.call(t,a)||f&&("length"==a||i&&("offset"==a||"parent"==a)||o&&("buffer"==a||"byteLength"==a||"byteOffset"==a)||Ot(a,c))||u.push(a);return u},_t=Object.prototype.hasOwnProperty,zt=function(t){if(!x(t))return function(t){var n=[];if(null!=t)for(var r in Object(t))n.push(r);return n}(t);var n=Y(t),r=[];for(var e in t)("constructor"!=e||!n&&_t.call(t,e))&&r.push(e);return r},Ft=function(t){return ut(t)?St(t,!0):zt(t)},Et=function(t){return function(t,n,r,e){var i=!r;r||(r={});for(var o=-1,f=n.length;++o<f;){var u=n[o],c=e?e(r[u],t[u],u,r,t):void 0;void 0===c&&(c=t[u]),i?C(r,u,c):mt(r,u,c)}return r}(t,Ft(t))},Wt=function(t,n,r,e,i,o,f){var u,c=yt(t,r),a=yt(n,r),s=f.get(a);if(s)G(t,r,s);else{var l=o?o(c,a,r+"",t,n,f):void 0,h=void 0===l;if(h){var v=ot(a),b=!v&&at(a),d=!v&&!b&&gt(a);l=a,v||b||d?ot(c)?l=c:Z(u=c)&&ut(u)?l=function(t,n){var r=-1,e=t.length;for(n||(n=Array(e));++r<e;)n[r]=t[r];return n}(c):b?(h=!1,l=U(a,!0)):d?(h=!1,l=J(a,!0)):l=[]:function(t){if(!Z(t)||"[object Object]"!=y(t))return!1;var n=V(t);if(null===n)return!0;var r=lt.call(n,"constructor")&&n.constructor;return"function"==typeof r&&r instanceof r&&st.call(r)==ht}(a)||it(a)?(l=c,it(c)?l=Et(c):x(c)&&!m(c)||(l=function(t){return"function"!=typeof t.constructor||Y(t)?{}:Q(V(t))}(a))):h=!1}h&&(f.set(a,l),i(l,a,e,o,f),f.delete(a)),G(t,r,l)}},At=function(t){return t},Ht=function(t,n,r){switch(r.length){case 0:return t.call(n);case 1:return t.call(n,r[0]);case 2:return t.call(n,r[0],r[1]);case 3:return t.call(n,r[0],r[1],r[2])}return t.apply(n,r)},Tt=Math.max,kt=Date.now,$t=function(t){var n=0,r=0;return function(){var e=kt(),i=16-(e-r);if(r=e,i>0){if(++n>=800)return arguments[0]}else n=0;return t.apply(void 0,arguments)}}(P?function(t,n){return P(t,"toString",{configurable:!0,enumerable:!1,value:(r=n,function(){return r}),writable:!0});var r}:At),Mt=(bt=function(t,n,r){!function t(n,r,e,i,o){n!==r&&N(r,(function(f,u){if(o||(o=new I),x(f))Wt(n,r,u,e,t,i,o);else{var c=i?i(yt(n,u),f,u+"",n,r,o):void 0;void 0===c&&(c=f),G(n,u,c)}}),Ft)}(t,n,r)},function(t,n){return $t(function(t,n,r){return n=Tt(void 0===n?t.length-1:n,0),function(){for(var e=arguments,i=-1,o=Tt(e.length-n,0),f=Array(o);++i<o;)f[i]=e[n+i];i=-1;for(var u=Array(n+1);++i<n;)u[i]=e[i];return u[n]=r(f),Ht(t,this,u)}}(t,n,At),t+"")}((function(n,r){var e=-1,i=r.length,o=i>1?r[i-1]:void 0,f=i>2?r[2]:void 0;for(o=bt.length>3&&"function"==typeof o?(i--,o):void 0,f&&function(n,r,e){if(!x(e))return!1;var i=typeof r;return!!("number"==i?ut(e)&&Ot(r,e.length):"string"==i&&r in e)&&t(e[r],n)}(r[0],r[1],f)&&(o=i<3?void 0:o,i=1),n=Object(n);++e<i;){var u=r[e];u&&bt(n,u,e)}return n})));const Bt=(t,n)=>Mt({},t,n),Dt={colors:{common:{black:"#000",white:"#fff"},primary:{lighter:"#768fff",default:"#2962ff",darker:"#0039cb",contrastText:"#fff"},secondary:{lighter:"#ff5bff",default:"#d500f9",darker:"#9e00c5",contrastText:"#fff"},error:{lighter:"#ff5983",default:"#f50057",darker:"#bb002f",contrastText:"#fff"},warning:{lighter:"#fff64f",default:"#ffc400",darker:"#c79400",contrastText:"#fff"},info:{lighter:"#69e2ff",default:"#00b0ff",darker:"#0081cb",contrastText:"#fff"},success:{lighter:"#66ffa6",default:"#00e676",darker:"#00b248",contrastText:"#fff"},grey:{50:"#FAFAFA",100:"#F5F5F5",200:"#EEEEEE",300:"#E0E0E0",400:"#BDBDBD",500:"#9E9E9E",600:"#757575",700:"#616161",800:"#424242",900:"#212121"},text:{default:"#000",primary:"rgba(0, 0, 0, .9)",secondary:"rgba(0, 0, 0, .6)",disabled:"rgba(0, 0, 0, .4)",hint:"rgba(0, 0, 0, .4)"},divider:{default:"rgba(0, 0, 0, .1)"},background:{default:"#fff"},action:{active:"rgba(0, 0, 0, .6)",activeOpacity:.6,hover:"rgba(0, 0, 0, .4)",hoverOpacity:.4,selected:"rgba(0, 0, 0, .8)",selectedOpacity:.8,disabled:"rgba(0, 0, 0, .3)",disabledOpacity:.3,focus:"rgba(0, 0, 0, .1)",focusOpacity:.1}},shadows:{0:"none",1:"0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",2:"0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",3:"0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)"},typography:{htmlFontSize:16,fontFamily:"'Roboto', 'Helvetica', 'Arial', sans-serif",fontSize:14,fontWeightLight:300,fontWeightRegular:400,fontWeightMedium:500,fontWeightBold:700,variants:{h1:{fontWeight:500,fontSize:"2.5rem",lineHeight:1.2,letterSpacing:"-0.01562em"},h2:{fontWeight:500,fontSize:"2rem",lineHeight:1.2,letterSpacing:"-0.00833em"},h3:{fontWeight:500,fontSize:"1.75rem",lineHeight:1.2,letterSpacing:"0em"},h4:{fontWeight:500,fontSize:"1.5rem",lineHeight:1.2,letterSpacing:"0.00735em"},h5:{fontWeight:500,fontSize:"1.25rem",lineHeight:1.2,letterSpacing:"0em"},h6:{fontWeight:500,fontSize:"1rem",lineHeight:1.2,letterSpacing:"0.0075em"},body:{fontWeight:400,fontSize:"1rem",lineHeight:1.5,letterSpacing:"0.00938em"},button:{fontWeight:500,fontSize:"1rem",lineHeight:1.75,letterSpacing:"0.02857em",textTransform:"none"},caption:{fontWeight:400,fontSize:"0.75rem",lineHeight:1.66,letterSpacing:"0.03333em"}}},shape:{borderRadius:4},transitions:{easing:{easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},duration:{shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195}},zIndex:{},icons:{close:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",separator:"M8.306 22.679a1.137 1.137 0 01-.061-1.481l.06-.07 7.741-8.126-7.74-8.13a1.137 1.137 0 01-.061-1.481l.06-.07c.387-.406 1-.427 1.411-.064l.066.064L19 13.001 9.782 22.68a1.01 1.01 0 01-1.476 0z"}},Lt="ʕ•ᴥ•ʔ theme store magic placeholder ʕ•ᴥ•ʔ",Rt="undefined"!=typeof window&&void 0!==window.Audio?window:{scale:{theme:"ʕ•ᴥ•ʔ theme store magic placeholder ʕ•ᴥ•ʔ"}},It=t=>{const n=Rt.scale;if(n){const t="object"==typeof n.theme&&n.theme;if(t)return Bt(Dt,t)}return t?Bt(Dt,t):Dt},Pt=t=>{Rt.scale=Object.assign({},Rt.scale);const n=Rt.scale;return n.theme=It(t),n.theme};export{Lt as T,Bt as a,f as c,Dt as d,It as g,Pt as u}