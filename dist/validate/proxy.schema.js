var f=Object.create;var p=Object.defineProperty;var h=Object.getOwnPropertyDescriptor;var S=Object.getOwnPropertyNames;var v=Object.getPrototypeOf,U=Object.prototype.hasOwnProperty;var I=(t,r)=>{for(var o in r)p(t,o,{get:r[o],enumerable:!0})},c=(t,r,o,i)=>{if(r&&typeof r=="object"||typeof r=="function")for(let n of S(r))!U.call(t,n)&&n!==o&&p(t,n,{get:()=>r[n],enumerable:!(i=h(r,n))||i.enumerable});return t};var s=(t,r,o)=>(o=t!=null?f(v(t)):{},c(r||!t||!t.__esModule?p(o,"default",{value:t,enumerable:!0}):o,t)),D=t=>c(p({},"__esModule",{value:!0}),t);var E={};I(E,{proxySchema:()=>w});module.exports=D(E);var x=s(require("crypto")),a=new Uint8Array(256),m=a.length;function l(){return m>a.length-16&&(x.default.randomFillSync(a),m=0),a.slice(m,m+=16)}var e=[];for(let t=0;t<256;++t)e.push((t+256).toString(16).slice(1));function y(t,r=0){return e[t[r+0]]+e[t[r+1]]+e[t[r+2]]+e[t[r+3]]+"-"+e[t[r+4]]+e[t[r+5]]+"-"+e[t[r+6]]+e[t[r+7]]+"-"+e[t[r+8]]+e[t[r+9]]+"-"+e[t[r+10]]+e[t[r+11]]+e[t[r+12]]+e[t[r+13]]+e[t[r+14]]+e[t[r+15]]}var g=s(require("crypto")),d={randomUUID:g.default.randomUUID};function N(t,r,o){if(d.randomUUID&&!r&&!t)return d.randomUUID();t=t||{};let i=t.random||(t.rng||l)();if(i[6]=i[6]&15|64,i[8]=i[8]&63|128,r){o=o||0;for(let n=0;n<16;++n)r[o+n]=i[n];return r}return y(i)}var u=N;var b=(...t)=>{let r={};return t.forEach(o=>r[o]={minLength:1,description:`The "${o}" cannot be empty`}),{if:{propertyNames:{enum:[...t]}},then:{properties:r}}},w={$id:u(),type:"object",properties:{enabled:{type:"boolean",enum:[!0,!1]},host:{type:"string"},port:{type:"string"},protocol:{type:"string"},username:{type:"string"},password:{type:"string"}},required:["enabled","host","port","protocol"],...b("enabled","host","port","protocol")};0&&(module.exports={proxySchema});
//# sourceMappingURL=proxy.schema.js.map