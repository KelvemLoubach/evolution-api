var A=Object.create;var s=Object.defineProperty;var y=Object.getOwnPropertyDescriptor;var v=Object.getOwnPropertyNames;var b=Object.getPrototypeOf,P=Object.prototype.hasOwnProperty;var U=(e,t)=>{for(var i in t)s(e,i,{get:t[i],enumerable:!0})},E=(e,t,i,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of v(t))!P.call(e,r)&&r!==i&&s(e,r,{get:()=>t[r],enumerable:!(o=y(t,r))||o.enumerable});return e};var d=(e,t,i)=>(i=e!=null?A(b(e)):{},E(t||!e||!e.__esModule?s(i,"default",{value:e,enumerable:!0}):i,e)),f=e=>E(s({},"__esModule",{value:!0}),e);var D={};U(D,{webhookSchema:()=>_});module.exports=f(D);var T=d(require("crypto")),m=new Uint8Array(256),a=m.length;function u(){return a>m.length-16&&(T.default.randomFillSync(m),a=0),m.slice(a,a+=16)}var n=[];for(let e=0;e<256;++e)n.push((e+256).toString(16).slice(1));function g(e,t=0){return n[e[t+0]]+n[e[t+1]]+n[e[t+2]]+n[e[t+3]]+"-"+n[e[t+4]]+n[e[t+5]]+"-"+n[e[t+6]]+n[e[t+7]]+"-"+n[e[t+8]]+n[e[t+9]]+"-"+n[e[t+10]]+n[e[t+11]]+n[e[t+12]]+n[e[t+13]]+n[e[t+14]]+n[e[t+15]]}var h=d(require("crypto")),c={randomUUID:h.default.randomUUID};function I(e,t,i){if(c.randomUUID&&!t&&!e)return c.randomUUID();e=e||{};let o=e.random||(e.rng||u)();if(o[6]=o[6]&15|64,o[8]=o[8]&63|128,t){i=i||0;for(let r=0;r<16;++r)t[i+r]=o[r];return t}return g(o)}var S=I;var l=class l{constructor(t,i,o,r){this.prisma=t,this.monitor=i,this.status=o,this.name=r}set prisma(t){this.prismaRepository=t}get prisma(){return this.prismaRepository}set monitor(t){this.waMonitor=t}get monitor(){return this.waMonitor}set name(t){this.integrationName=t}get name(){return this.integrationName}set status(t){this.integrationStatus=t}get status(){return this.integrationStatus}async set(t,i){if(this.status)return i[this.name]?.enabled?i[this.name].events.length===0&&(i[this.name].events=l.events):i[this.name].events=[],this.prisma[this.name].upsert({where:{instanceId:this.monitor.waInstances[t].instanceId},update:{enabled:i[this.name]?.enabled,events:i[this.name].events},create:{enabled:i[this.name]?.enabled,events:i[this.name].events,instanceId:this.monitor.waInstances[t].instanceId}})}async get(t){if(!this.status)return;if(this.monitor.waInstances[t]===void 0)return null;let i=await this.prisma[this.name].findUnique({where:{instanceId:this.monitor.waInstances[t].instanceId}});return i||null}};l.events=["APPLICATION_STARTUP","QRCODE_UPDATED","MESSAGES_SET","MESSAGES_UPSERT","MESSAGES_EDITED","MESSAGES_UPDATE","MESSAGES_DELETE","SEND_MESSAGE","CONTACTS_SET","CONTACTS_UPSERT","CONTACTS_UPDATE","PRESENCE_UPDATE","CHATS_SET","CHATS_UPSERT","CHATS_UPDATE","CHATS_DELETE","GROUPS_UPSERT","GROUP_UPDATE","GROUP_PARTICIPANTS_UPDATE","CONNECTION_UPDATE","LABELS_EDIT","LABELS_ASSOCIATION","CALL","TYPEBOT_START","TYPEBOT_CHANGE_STATUS","REMOVE_INSTANCE","LOGOUT_INSTANCE"];var p=l;var N=(...e)=>{let t={};return e.forEach(i=>t[i]={minLength:1,description:`The "${i}" cannot be empty`}),{if:{propertyNames:{enum:[...e]}},then:{properties:t}}},_={$id:S(),type:"object",properties:{webhook:{type:"object",properties:{enabled:{type:"boolean"},url:{type:"string"},headers:{type:"object"},byEvents:{type:"boolean"},base64:{type:"boolean"},events:{type:"array",minItems:0,items:{type:"string",enum:p.events}}},required:["enabled","url"],...N("enabled","url")}},required:["webhook"]};0&&(module.exports={webhookSchema});
//# sourceMappingURL=webhook.schema.js.map