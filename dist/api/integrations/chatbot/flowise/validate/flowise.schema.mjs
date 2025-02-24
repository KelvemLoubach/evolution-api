import l from"crypto";var a=new Uint8Array(256),s=a.length;function m(){return s>a.length-16&&(l.randomFillSync(a),s=0),a.slice(s,s+=16)}var r=[];for(let e=0;e<256;++e)r.push((e+256).toString(16).slice(1));function y(e,t=0){return r[e[t+0]]+r[e[t+1]]+r[e[t+2]]+r[e[t+3]]+"-"+r[e[t+4]]+r[e[t+5]]+"-"+r[e[t+6]]+r[e[t+7]]+"-"+r[e[t+8]]+r[e[t+9]]+"-"+r[e[t+10]]+r[e[t+11]]+r[e[t+12]]+r[e[t+13]]+r[e[t+14]]+r[e[t+15]]}import u from"crypto";var g={randomUUID:u.randomUUID};function c(e,t,i){if(g.randomUUID&&!t&&!e)return g.randomUUID();e=e||{};let n=e.random||(e.rng||m)();if(n[6]=n[6]&15|64,n[8]=n[8]&63|128,t){i=i||0;for(let p=0;p<16;++p)t[i+p]=n[p];return t}return y(n)}var o=c;var d=(...e)=>{let t={};return e.forEach(i=>t[i]={minLength:1,description:`The "${i}" cannot be empty`}),{if:{propertyNames:{enum:[...e]}},then:{properties:t}}},O={$id:o(),type:"object",properties:{enabled:{type:"boolean"},description:{type:"string"},apiUrl:{type:"string"},apiKey:{type:"string"},triggerType:{type:"string",enum:["all","keyword","none","advanced"]},triggerOperator:{type:"string",enum:["equals","contains","startsWith","endsWith","regex"]},triggerValue:{type:"string"},expire:{type:"integer"},keywordFinish:{type:"string"},delayMessage:{type:"integer"},unknownMessage:{type:"string"},listeningFromMe:{type:"boolean"},stopBotFromMe:{type:"boolean"},keepOpen:{type:"boolean"},debounceTime:{type:"integer"},ignoreJids:{type:"array",items:{type:"string"}}},required:["enabled","apiUrl","triggerType"],...d("enabled","apiUrl","triggerType")},T={$id:o(),type:"object",properties:{remoteJid:{type:"string"},status:{type:"string",enum:["opened","closed","paused","delete"]}},required:["remoteJid","status"],...d("remoteJid","status")},I={$id:o(),type:"object",properties:{expire:{type:"integer"},keywordFinish:{type:"string"},delayMessage:{type:"integer"},unknownMessage:{type:"string"},listeningFromMe:{type:"boolean"},stopBotFromMe:{type:"boolean"},keepOpen:{type:"boolean"},debounceTime:{type:"integer"},ignoreJids:{type:"array",items:{type:"string"}},botIdFallback:{type:"string"}},required:["expire","keywordFinish","delayMessage","unknownMessage","listeningFromMe","stopBotFromMe","keepOpen","debounceTime","ignoreJids"],...d("expire","keywordFinish","delayMessage","unknownMessage","listeningFromMe","stopBotFromMe","keepOpen","debounceTime","ignoreJids")},N={$id:o(),type:"object",properties:{remoteJid:{type:"string"},action:{type:"string",enum:["add","remove"]}},required:["remoteJid","action"],...d("remoteJid","action")};export{N as flowiseIgnoreJidSchema,O as flowiseSchema,I as flowiseSettingSchema,T as flowiseStatusSchema};
//# sourceMappingURL=flowise.schema.mjs.map