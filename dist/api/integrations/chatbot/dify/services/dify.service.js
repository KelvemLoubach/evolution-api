var j=Object.create;var u=Object.defineProperty;var z=Object.getOwnPropertyDescriptor;var Z=Object.getOwnPropertyNames;var J=Object.getPrototypeOf,ee=Object.prototype.hasOwnProperty;var Ee=(n,e)=>{for(var E in e)u(n,E,{get:e[E],enumerable:!0})},G=(n,e,E,S)=>{if(e&&typeof e=="object"||typeof e=="function")for(let t of Z(e))!ee.call(n,t)&&t!==E&&u(n,t,{get:()=>e[t],enumerable:!(S=z(e,t))||S.enumerable});return n};var l=(n,e,E)=>(E=n!=null?j(J(n)):{},G(e||!n||!n.__esModule?u(E,"default",{value:n,enumerable:!0}):E,n)),se=n=>G(u({},"__esModule",{value:!0}),n);var Se={};Ee(Se,{DifyService:()=>m});module.exports=se(Se);var p={WHATSAPP_BUSINESS:"WHATSAPP-BUSINESS",WHATSAPP_BAILEYS:"WHATSAPP-BAILEYS",EVOLUTION:"EVOLUTION"};var V=l(require("dayjs")),f=l(require("fs"));var g=require("class-validator"),y=l(require("dotenv"));y.default.config();var b=class{constructor(){this.loadEnv()}get(e){return this.env[e]}loadEnv(){this.env=this.envProcess(),this.env.PRODUCTION=process.env?.NODE_ENV==="PROD",process.env?.DOCKER_ENV==="true"&&(this.env.SERVER.TYPE=process.env.SERVER_TYPE,this.env.SERVER.PORT=Number.parseInt(process.env.SERVER_PORT)||8080)}envProcess(){return{SERVER:{TYPE:process.env.SERVER_TYPE||"http",PORT:Number.parseInt(process.env.SERVER_PORT)||8080,URL:process.env.SERVER_URL,DISABLE_DOCS:process.env?.SERVER_DISABLE_DOCS==="true",DISABLE_MANAGER:process.env?.SERVER_DISABLE_MANAGER==="true"},CORS:{ORIGIN:process.env.CORS_ORIGIN?.split(",")||["*"],METHODS:process.env.CORS_METHODS?.split(",")||["POST","GET","PUT","DELETE"],CREDENTIALS:process.env?.CORS_CREDENTIALS==="true"},SSL_CONF:{PRIVKEY:process.env?.SSL_CONF_PRIVKEY||"",FULLCHAIN:process.env?.SSL_CONF_FULLCHAIN||""},PROVIDER:{ENABLED:process.env?.PROVIDER_ENABLED==="true",HOST:process.env.PROVIDER_HOST,PORT:process.env?.PROVIDER_PORT||"5656",PREFIX:process.env?.PROVIDER_PREFIX||"evolution"},DATABASE:{CONNECTION:{URI:process.env.DATABASE_CONNECTION_URI||"",CLIENT_NAME:process.env.DATABASE_CONNECTION_CLIENT_NAME||"evolution"},PROVIDER:process.env.DATABASE_PROVIDER||"postgresql",SAVE_DATA:{INSTANCE:process.env?.DATABASE_SAVE_DATA_INSTANCE==="true",NEW_MESSAGE:process.env?.DATABASE_SAVE_DATA_NEW_MESSAGE==="true",MESSAGE_UPDATE:process.env?.DATABASE_SAVE_MESSAGE_UPDATE==="true",CONTACTS:process.env?.DATABASE_SAVE_DATA_CONTACTS==="true",CHATS:process.env?.DATABASE_SAVE_DATA_CHATS==="true",HISTORIC:process.env?.DATABASE_SAVE_DATA_HISTORIC==="true",LABELS:process.env?.DATABASE_SAVE_DATA_LABELS==="true",IS_ON_WHATSAPP:process.env?.DATABASE_SAVE_IS_ON_WHATSAPP==="true",IS_ON_WHATSAPP_DAYS:Number.parseInt(process.env?.DATABASE_SAVE_IS_ON_WHATSAPP_DAYS??"7")},DELETE_DATA:{LOGICAL_MESSAGE_DELETE:process.env?.DATABASE_DELETE_MESSAGE==="true"}},RABBITMQ:{ENABLED:process.env?.RABBITMQ_ENABLED==="true",GLOBAL_ENABLED:process.env?.RABBITMQ_GLOBAL_ENABLED==="true",PREFIX_KEY:process.env?.RABBITMQ_PREFIX_KEY||"evolution",EXCHANGE_NAME:process.env?.RABBITMQ_EXCHANGE_NAME||"evolution_exchange",URI:process.env.RABBITMQ_URI||"",EVENTS:{APPLICATION_STARTUP:process.env?.RABBITMQ_EVENTS_APPLICATION_STARTUP==="true",INSTANCE_CREATE:process.env?.RABBITMQ_EVENTS_INSTANCE_CREATE==="true",INSTANCE_DELETE:process.env?.RABBITMQ_EVENTS_INSTANCE_DELETE==="true",QRCODE_UPDATED:process.env?.RABBITMQ_EVENTS_QRCODE_UPDATED==="true",MESSAGES_SET:process.env?.RABBITMQ_EVENTS_MESSAGES_SET==="true",MESSAGES_UPSERT:process.env?.RABBITMQ_EVENTS_MESSAGES_UPSERT==="true",MESSAGES_EDITED:process.env?.RABBITMQ_EVENTS_MESSAGES_EDITED==="true",MESSAGES_UPDATE:process.env?.RABBITMQ_EVENTS_MESSAGES_UPDATE==="true",MESSAGES_DELETE:process.env?.RABBITMQ_EVENTS_MESSAGES_DELETE==="true",SEND_MESSAGE:process.env?.RABBITMQ_EVENTS_SEND_MESSAGE==="true",CONTACTS_SET:process.env?.RABBITMQ_EVENTS_CONTACTS_SET==="true",CONTACTS_UPDATE:process.env?.RABBITMQ_EVENTS_CONTACTS_UPDATE==="true",CONTACTS_UPSERT:process.env?.RABBITMQ_EVENTS_CONTACTS_UPSERT==="true",PRESENCE_UPDATE:process.env?.RABBITMQ_EVENTS_PRESENCE_UPDATE==="true",CHATS_SET:process.env?.RABBITMQ_EVENTS_CHATS_SET==="true",CHATS_UPDATE:process.env?.RABBITMQ_EVENTS_CHATS_UPDATE==="true",CHATS_UPSERT:process.env?.RABBITMQ_EVENTS_CHATS_UPSERT==="true",CHATS_DELETE:process.env?.RABBITMQ_EVENTS_CHATS_DELETE==="true",CONNECTION_UPDATE:process.env?.RABBITMQ_EVENTS_CONNECTION_UPDATE==="true",LABELS_EDIT:process.env?.RABBITMQ_EVENTS_LABELS_EDIT==="true",LABELS_ASSOCIATION:process.env?.RABBITMQ_EVENTS_LABELS_ASSOCIATION==="true",GROUPS_UPSERT:process.env?.RABBITMQ_EVENTS_GROUPS_UPSERT==="true",GROUP_UPDATE:process.env?.RABBITMQ_EVENTS_GROUPS_UPDATE==="true",GROUP_PARTICIPANTS_UPDATE:process.env?.RABBITMQ_EVENTS_GROUP_PARTICIPANTS_UPDATE==="true",CALL:process.env?.RABBITMQ_EVENTS_CALL==="true",TYPEBOT_START:process.env?.RABBITMQ_EVENTS_TYPEBOT_START==="true",TYPEBOT_CHANGE_STATUS:process.env?.RABBITMQ_EVENTS_TYPEBOT_CHANGE_STATUS==="true"}},SQS:{ENABLED:process.env?.SQS_ENABLED==="true",ACCESS_KEY_ID:process.env.SQS_ACCESS_KEY_ID||"",SECRET_ACCESS_KEY:process.env.SQS_SECRET_ACCESS_KEY||"",ACCOUNT_ID:process.env.SQS_ACCOUNT_ID||"",REGION:process.env.SQS_REGION||""},WEBSOCKET:{ENABLED:process.env?.WEBSOCKET_ENABLED==="true",GLOBAL_EVENTS:process.env?.WEBSOCKET_GLOBAL_EVENTS==="true"},PUSHER:{ENABLED:process.env?.PUSHER_ENABLED==="true",GLOBAL:{ENABLED:process.env?.PUSHER_GLOBAL_ENABLED==="true",APP_ID:process.env?.PUSHER_GLOBAL_APP_ID||"",KEY:process.env?.PUSHER_GLOBAL_KEY||"",SECRET:process.env?.PUSHER_GLOBAL_SECRET||"",CLUSTER:process.env?.PUSHER_GLOBAL_CLUSTER||"",USE_TLS:process.env?.PUSHER_GLOBAL_USE_TLS==="true"},EVENTS:{APPLICATION_STARTUP:process.env?.PUSHER_EVENTS_APPLICATION_STARTUP==="true",INSTANCE_CREATE:process.env?.PUSHER_EVENTS_INSTANCE_CREATE==="true",INSTANCE_DELETE:process.env?.PUSHER_EVENTS_INSTANCE_DELETE==="true",QRCODE_UPDATED:process.env?.PUSHER_EVENTS_QRCODE_UPDATED==="true",MESSAGES_SET:process.env?.PUSHER_EVENTS_MESSAGES_SET==="true",MESSAGES_UPSERT:process.env?.PUSHER_EVENTS_MESSAGES_UPSERT==="true",MESSAGES_EDITED:process.env?.PUSHER_EVENTS_MESSAGES_EDITED==="true",MESSAGES_UPDATE:process.env?.PUSHER_EVENTS_MESSAGES_UPDATE==="true",MESSAGES_DELETE:process.env?.PUSHER_EVENTS_MESSAGES_DELETE==="true",SEND_MESSAGE:process.env?.PUSHER_EVENTS_SEND_MESSAGE==="true",CONTACTS_SET:process.env?.PUSHER_EVENTS_CONTACTS_SET==="true",CONTACTS_UPDATE:process.env?.PUSHER_EVENTS_CONTACTS_UPDATE==="true",CONTACTS_UPSERT:process.env?.PUSHER_EVENTS_CONTACTS_UPSERT==="true",PRESENCE_UPDATE:process.env?.PUSHER_EVENTS_PRESENCE_UPDATE==="true",CHATS_SET:process.env?.PUSHER_EVENTS_CHATS_SET==="true",CHATS_UPDATE:process.env?.PUSHER_EVENTS_CHATS_UPDATE==="true",CHATS_UPSERT:process.env?.PUSHER_EVENTS_CHATS_UPSERT==="true",CHATS_DELETE:process.env?.PUSHER_EVENTS_CHATS_DELETE==="true",CONNECTION_UPDATE:process.env?.PUSHER_EVENTS_CONNECTION_UPDATE==="true",LABELS_EDIT:process.env?.PUSHER_EVENTS_LABELS_EDIT==="true",LABELS_ASSOCIATION:process.env?.PUSHER_EVENTS_LABELS_ASSOCIATION==="true",GROUPS_UPSERT:process.env?.PUSHER_EVENTS_GROUPS_UPSERT==="true",GROUP_UPDATE:process.env?.PUSHER_EVENTS_GROUPS_UPDATE==="true",GROUP_PARTICIPANTS_UPDATE:process.env?.PUSHER_EVENTS_GROUP_PARTICIPANTS_UPDATE==="true",CALL:process.env?.PUSHER_EVENTS_CALL==="true",TYPEBOT_START:process.env?.PUSHER_EVENTS_TYPEBOT_START==="true",TYPEBOT_CHANGE_STATUS:process.env?.PUSHER_EVENTS_TYPEBOT_CHANGE_STATUS==="true"}},WA_BUSINESS:{TOKEN_WEBHOOK:process.env.WA_BUSINESS_TOKEN_WEBHOOK||"evolution",URL:process.env.WA_BUSINESS_URL||"https://graph.facebook.com",VERSION:process.env.WA_BUSINESS_VERSION||"v18.0",LANGUAGE:process.env.WA_BUSINESS_LANGUAGE||"en"},LOG:{LEVEL:process.env?.LOG_LEVEL?.split(",")||["ERROR","WARN","DEBUG","INFO","LOG","VERBOSE","DARK","WEBHOOKS","WEBSOCKET"],COLOR:process.env?.LOG_COLOR==="true",BAILEYS:process.env?.LOG_BAILEYS||"error"},DEL_INSTANCE:(0,g.isBooleanString)(process.env?.DEL_INSTANCE)?process.env.DEL_INSTANCE==="true":Number.parseInt(process.env.DEL_INSTANCE)||!1,DEL_TEMP_INSTANCES:(0,g.isBooleanString)(process.env?.DEL_TEMP_INSTANCES)?process.env.DEL_TEMP_INSTANCES==="true":!0,LANGUAGE:process.env?.LANGUAGE||"en",WEBHOOK:{GLOBAL:{URL:process.env?.WEBHOOK_GLOBAL_URL||"",ENABLED:process.env?.WEBHOOK_GLOBAL_ENABLED==="true",WEBHOOK_BY_EVENTS:process.env?.WEBHOOK_GLOBAL_WEBHOOK_BY_EVENTS==="true"},EVENTS:{APPLICATION_STARTUP:process.env?.WEBHOOK_EVENTS_APPLICATION_STARTUP==="true",INSTANCE_CREATE:process.env?.WEBHOOK_EVENTS_INSTANCE_CREATE==="true",INSTANCE_DELETE:process.env?.WEBHOOK_EVENTS_INSTANCE_DELETE==="true",QRCODE_UPDATED:process.env?.WEBHOOK_EVENTS_QRCODE_UPDATED==="true",MESSAGES_SET:process.env?.WEBHOOK_EVENTS_MESSAGES_SET==="true",MESSAGES_UPSERT:process.env?.WEBHOOK_EVENTS_MESSAGES_UPSERT==="true",MESSAGES_EDITED:process.env?.WEBHOOK_EVENTS_MESSAGES_EDITED==="true",MESSAGES_UPDATE:process.env?.WEBHOOK_EVENTS_MESSAGES_UPDATE==="true",MESSAGES_DELETE:process.env?.WEBHOOK_EVENTS_MESSAGES_DELETE==="true",SEND_MESSAGE:process.env?.WEBHOOK_EVENTS_SEND_MESSAGE==="true",CONTACTS_SET:process.env?.WEBHOOK_EVENTS_CONTACTS_SET==="true",CONTACTS_UPDATE:process.env?.WEBHOOK_EVENTS_CONTACTS_UPDATE==="true",CONTACTS_UPSERT:process.env?.WEBHOOK_EVENTS_CONTACTS_UPSERT==="true",PRESENCE_UPDATE:process.env?.WEBHOOK_EVENTS_PRESENCE_UPDATE==="true",CHATS_SET:process.env?.WEBHOOK_EVENTS_CHATS_SET==="true",CHATS_UPDATE:process.env?.WEBHOOK_EVENTS_CHATS_UPDATE==="true",CHATS_UPSERT:process.env?.WEBHOOK_EVENTS_CHATS_UPSERT==="true",CHATS_DELETE:process.env?.WEBHOOK_EVENTS_CHATS_DELETE==="true",CONNECTION_UPDATE:process.env?.WEBHOOK_EVENTS_CONNECTION_UPDATE==="true",LABELS_EDIT:process.env?.WEBHOOK_EVENTS_LABELS_EDIT==="true",LABELS_ASSOCIATION:process.env?.WEBHOOK_EVENTS_LABELS_ASSOCIATION==="true",GROUPS_UPSERT:process.env?.WEBHOOK_EVENTS_GROUPS_UPSERT==="true",GROUP_UPDATE:process.env?.WEBHOOK_EVENTS_GROUPS_UPDATE==="true",GROUP_PARTICIPANTS_UPDATE:process.env?.WEBHOOK_EVENTS_GROUP_PARTICIPANTS_UPDATE==="true",CALL:process.env?.WEBHOOK_EVENTS_CALL==="true",TYPEBOT_START:process.env?.WEBHOOK_EVENTS_TYPEBOT_START==="true",TYPEBOT_CHANGE_STATUS:process.env?.WEBHOOK_EVENTS_TYPEBOT_CHANGE_STATUS==="true",ERRORS:process.env?.WEBHOOK_EVENTS_ERRORS==="true",ERRORS_WEBHOOK:process.env?.WEBHOOK_EVENTS_ERRORS_WEBHOOK||""}},CONFIG_SESSION_PHONE:{CLIENT:process.env?.CONFIG_SESSION_PHONE_CLIENT||"Evolution API",NAME:process.env?.CONFIG_SESSION_PHONE_NAME||"Chrome",VERSION:process.env?.CONFIG_SESSION_PHONE_VERSION||null},QRCODE:{LIMIT:Number.parseInt(process.env.QRCODE_LIMIT)||30,COLOR:process.env.QRCODE_COLOR||"#198754"},TYPEBOT:{ENABLED:process.env?.TYPEBOT_ENABLED==="true",API_VERSION:process.env?.TYPEBOT_API_VERSION||"old",SEND_MEDIA_BASE64:process.env?.TYPEBOT_SEND_MEDIA_BASE64==="true"},CHATWOOT:{ENABLED:process.env?.CHATWOOT_ENABLED==="true",MESSAGE_DELETE:process.env.CHATWOOT_MESSAGE_DELETE==="true",MESSAGE_READ:process.env.CHATWOOT_MESSAGE_READ==="true",BOT_CONTACT:!process.env.CHATWOOT_BOT_CONTACT||process.env.CHATWOOT_BOT_CONTACT==="true",IMPORT:{DATABASE:{CONNECTION:{URI:process.env.CHATWOOT_IMPORT_DATABASE_CONNECTION_URI||""}},PLACEHOLDER_MEDIA_MESSAGE:process.env?.CHATWOOT_IMPORT_PLACEHOLDER_MEDIA_MESSAGE==="true"}},OPENAI:{ENABLED:process.env?.OPENAI_ENABLED==="true",API_KEY_GLOBAL:process.env?.OPENAI_API_KEY_GLOBAL||null},DIFY:{ENABLED:process.env?.DIFY_ENABLED==="true"},CACHE:{REDIS:{ENABLED:process.env?.CACHE_REDIS_ENABLED==="true",URI:process.env?.CACHE_REDIS_URI||"",PREFIX_KEY:process.env?.CACHE_REDIS_PREFIX_KEY||"evolution-cache",TTL:Number.parseInt(process.env?.CACHE_REDIS_TTL)||604800,SAVE_INSTANCES:process.env?.CACHE_REDIS_SAVE_INSTANCES==="true"},LOCAL:{ENABLED:process.env?.CACHE_LOCAL_ENABLED==="true",TTL:Number.parseInt(process.env?.CACHE_REDIS_TTL)||86400}},S3:{ACCESS_KEY:process.env?.S3_ACCESS_KEY,SECRET_KEY:process.env?.S3_SECRET_KEY,ENDPOINT:process.env?.S3_ENDPOINT,BUCKET_NAME:process.env?.S3_BUCKET,ENABLE:process.env?.S3_ENABLED==="true",PORT:Number.parseInt(process.env?.S3_PORT||"9000"),USE_SSL:process.env?.S3_USE_SSL==="true",REGION:process.env?.S3_REGION},AUTHENTICATION:{API_KEY:{KEY:process.env.AUTHENTICATION_API_KEY||"BQYHJGJHJ"},EXPOSE_IN_FETCH_INSTANCES:process.env?.AUTHENTICATION_EXPOSE_IN_FETCH_INSTANCES==="true"}}}},v=new b;var oe=JSON.parse(f.default.readFileSync("./package.json","utf8")),h=n=>(0,V.default)(n).toDate().toString().replace(/\sGMT.+/,""),I=(s=>(s.LOG="\x1B[32m",s.INFO="\x1B[34m",s.WARN="\x1B[33m",s.ERROR="\x1B[31m",s.DEBUG="\x1B[36m",s.VERBOSE="\x1B[37m",s.DARK="\x1B[30m",s))(I||{});var x=(s=>(s.LOG="\x1B[32m%s\x1B[0m",s.DARK="\x1B[30m%s\x1B[0m",s.INFO="\x1B[34m%s\x1B[0m",s.WARN="\x1B[33m%s\x1B[0m",s.ERROR="\x1B[31m%s\x1B[0m",s.DEBUG="\x1B[36m%s\x1B[0m",s.VERBOSE="\x1B[37m%s\x1B[0m",s))(x||{}),W=(s=>(s.LOG="LOG",s.WARN="WARN",s.INFO="INFO",s.DARK="DARK",s.ERROR="ERROR",s.DEBUG="DEBUG",s.VERBOSE="VERBOSE",s))(W||{}),K=(s=>(s.LOG="\x1B[42m",s.INFO="\x1B[44m",s.WARN="\x1B[43m",s.DARK="\x1B[40m",s.ERROR="\x1B[41m",s.DEBUG="\x1B[46m",s.VERBOSE="\x1B[47m",s))(K||{}),B=class{constructor(e="Logger"){this.configService=v;this.instance=null;this.context=e}setContext(e){this.context=e}setInstance(e){this.instance=e}console(e,E){let S=[];this.configService.get("LOG").LEVEL.forEach(o=>S.push(W[o]));let t=typeof e;S.includes(E)&&(v.get("LOG").COLOR?(console.log("\x1B[1m"+x[E],"[Evolution API]","\x1B[1m"+I[E],this.instance?`[${this.instance}]`:"","\x1B[1m"+I[E],`v${oe.version}`,"\x1B[1m"+I[E],process.pid.toString(),"\x1B[0m","\x1B[1m"+I[E],"-","\x1B[1m\x1B[37m",`${h(Date.now())}  `,"\x1B[0m",I[E]+K[E]+"\x1B[1m",`${E} \x1B[0m`,"\x1B[33m\x1B[1m",`[${this.context}]\x1B[0m`,I[E]+"\x1B[1m",`[${t}]\x1B[0m`,I[E],t!=="object"?e:"","\x1B[0m"),t==="object"&&console.log(e,`
`)):console.log("[Evolution API]",this.instance?`[${this.instance}]`:"",process.pid.toString(),"-",`${h(Date.now())}  `,`${E} `,`[${this.context}]`,`[${t}]`,e))}log(e){this.console(e,"LOG")}info(e){this.console(e,"INFO")}warn(e){this.console(e,"WARN")}error(e){this.console(e,"ERROR")}verbose(e){this.console(e,"VERBOSE")}debug(e){this.console(e,"DEBUG")}dark(e){this.console(e,"DARK")}};var w=l(require("axios")),Y=l(require("fs")),te=JSON.parse(Y.default.readFileSync("./package.json","utf8")),d=async n=>{if(!(process.env.TELEMETRY_ENABLED===void 0||process.env.TELEMETRY_ENABLED==="true")||n==="/")return;let E={route:n,apiVersion:`${te.version}`,timestamp:new Date},S=process.env.TELEMETRY_URL&&process.env.TELEMETRY_URL!==""?process.env.TELEMETRY_URL:"https://log.evolution-api.com/telemetry";w.default.post(S,E).then(()=>{}).catch(()=>{})};var D=l(require("axios")),m=class{constructor(e,E,S){this.waMonitor=e;this.configService=E;this.prismaRepository=S;this.logger=new B("DifyService")}async createNewSession(e,E){try{return{session:await this.prismaRepository.integrationSession.create({data:{remoteJid:E.remoteJid,pushName:E.pushName,sessionId:E.remoteJid,status:"opened",awaitUser:!1,botId:E.botId,instanceId:e.instanceId,type:"dify"}})}}catch(S){this.logger.error(S);return}}isImageMessage(e){return e.includes("imageMessage")}isJSON(e){try{return JSON.parse(e),!0}catch{return!1}}async sendMessageToBot(e,E,S,t,o,r,s){try{let T=t.apiUrl;if(t.botType==="chatBot"){T+="/chat-messages";let A={inputs:{remoteJid:o,pushName:r,instanceName:e.instanceName,serverUrl:this.configService.get("SERVER").URL,apiKey:this.configService.get("AUTHENTICATION").API_KEY.KEY},query:s,response_mode:"blocking",conversation_id:E.sessionId===o?void 0:E.sessionId,user:o};if(this.isImageMessage(s)){let c=s.split("|");A.files=[{type:"image",transfer_method:"remote_url",url:c[1].split("?")[0]}],A.query=c[2]||s}e.integration===p.WHATSAPP_BAILEYS&&(await e.client.presenceSubscribe(o),await e.client.sendPresenceUpdate("composing",o));let _=await D.default.post(T,A,{headers:{Authorization:`Bearer ${t.apiKey}`}});e.integration===p.WHATSAPP_BAILEYS&&await e.client.sendPresenceUpdate("paused",o);let N=_?.data?.answer,O=_?.data?.conversation_id;await this.sendMessageWhatsApp(e,o,N,S),await this.prismaRepository.integrationSession.update({where:{id:E.id},data:{status:"opened",awaitUser:!0,sessionId:E.sessionId===o?O:E.sessionId}})}if(t.botType==="textGenerator"){T+="/completion-messages";let A={inputs:{query:s,pushName:r,remoteJid:o,instanceName:e.instanceName,serverUrl:this.configService.get("SERVER").URL,apiKey:this.configService.get("AUTHENTICATION").API_KEY.KEY},response_mode:"blocking",conversation_id:E.sessionId===o?void 0:E.sessionId,user:o};if(this.isImageMessage(s)){let c=s.split("|");A.files=[{type:"image",transfer_method:"remote_url",url:c[1].split("?")[0]}],A.inputs.query=c[2]||s}e.integration===p.WHATSAPP_BAILEYS&&(await e.client.presenceSubscribe(o),await e.client.sendPresenceUpdate("composing",o));let _=await D.default.post(T,A,{headers:{Authorization:`Bearer ${t.apiKey}`}});e.integration===p.WHATSAPP_BAILEYS&&await e.client.sendPresenceUpdate("paused",o);let N=_?.data?.answer,O=_?.data?.conversation_id;await this.sendMessageWhatsApp(e,o,N,S),await this.prismaRepository.integrationSession.update({where:{id:E.id},data:{status:"opened",awaitUser:!0,sessionId:E.sessionId===o?O:E.sessionId}})}if(t.botType==="agent"){T+="/chat-messages";let A={inputs:{remoteJid:o,pushName:r,instanceName:e.instanceName,serverUrl:this.configService.get("SERVER").URL,apiKey:this.configService.get("AUTHENTICATION").API_KEY.KEY},query:s,response_mode:"streaming",conversation_id:E.sessionId===o?void 0:E.sessionId,user:o};if(this.isImageMessage(s)){let a=s.split("|");A.files=[{type:"image",transfer_method:"remote_url",url:a[1].split("?")[0]}],A.query=a[2]||s}e.integration===p.WHATSAPP_BAILEYS&&(await e.client.presenceSubscribe(o),await e.client.sendPresenceUpdate("composing",o));let _=await D.default.post(T,A,{headers:{Authorization:`Bearer ${t.apiKey}`}}),N,O="",C=_.data.replaceAll("data: ","").split(`
`).filter(a=>a.trim()!=="");for(let a of C)if(a.trim().startsWith("{")){let i=JSON.parse(a);i?.event==="agent_message"&&(console.log("event:",i),N=N??i?.conversation_id,O+=i?.answer)}e.integration===p.WHATSAPP_BAILEYS&&await e.client.sendPresenceUpdate("paused",o);let R=O;await this.sendMessageWhatsApp(e,o,R,S),await this.prismaRepository.integrationSession.update({where:{id:E.id},data:{status:"opened",awaitUser:!0,sessionId:N}});return}if(t.botType==="workflow"){T+="/workflows/run";let A={inputs:{query:s,remoteJid:o,pushName:r,instanceName:e.instanceName,serverUrl:this.configService.get("SERVER").URL,apiKey:this.configService.get("AUTHENTICATION").API_KEY.KEY},response_mode:"blocking",user:o};if(this.isImageMessage(s)){let O=s.split("|");A.files=[{type:"image",transfer_method:"remote_url",url:O[1].split("?")[0]}],A.inputs.query=O[2]||s}e.integration===p.WHATSAPP_BAILEYS&&(await e.client.presenceSubscribe(o),await e.client.sendPresenceUpdate("composing",o));let _=await D.default.post(T,A,{headers:{Authorization:`Bearer ${t.apiKey}`}});e.integration===p.WHATSAPP_BAILEYS&&await e.client.sendPresenceUpdate("paused",o);let N=_?.data?.data.outputs.text;await this.sendMessageWhatsApp(e,o,N,S),await this.prismaRepository.integrationSession.update({where:{id:E.id},data:{status:"opened",awaitUser:!0}});return}}catch(T){this.logger.error(T.response?.data||T);return}}async sendMessageWhatsApp(e,E,S,t){let o=/(!?)\[(.*?)\]\((.*?)\)/g,r="",s=0,T,A=C=>{let R=C.split(".").pop()?.toLowerCase(),a=["jpg","jpeg","png","gif","bmp","webp"],i=["mp3","wav","aac","ogg"],P=["mp4","avi","mkv","mov"],L=["pdf","doc","docx","xls","xlsx","ppt","pptx","txt"];return a.includes(R||"")?"image":i.includes(R||"")?"audio":P.includes(R||"")?"video":L.includes(R||"")?"document":null};for(;(T=o.exec(S))!==null;){let[C,R,a,i]=T,P=A(i),L=S.slice(s,T.index);if(L&&(r+=L),P){let Q=t.splitMessages??!1,F=t.timePerChar??0,k=1e3,$=2e4;if(r.trim()){if(Q){let H=r.trim().split(`

`);for(let U=0;U<H.length;U++){let M=H[U],q=Math.min(Math.max(M.length*F,k),$);e.integration===p.WHATSAPP_BAILEYS&&(await e.client.presenceSubscribe(E),await e.client.sendPresenceUpdate("composing",E)),await new Promise(X=>{setTimeout(async()=>{await e.textMessage({number:E.split("@")[0],delay:t?.delayMessage||1e3,text:M},!1),X()},q)}),e.integration===p.WHATSAPP_BAILEYS&&await e.client.sendPresenceUpdate("paused",E)}}else await e.textMessage({number:E.split("@")[0],delay:t?.delayMessage||1e3,text:r.trim()},!1);r=""}P==="audio"?await e.audioWhatsapp({number:E.split("@")[0],delay:t?.delayMessage||1e3,audio:i,caption:a}):await e.mediaMessage({number:E.split("@")[0],delay:t?.delayMessage||1e3,mediatype:P,media:i,caption:a},null,!1)}else r+=`[${a}](${i})`;s=o.lastIndex}if(s<S.length){let C=S.slice(s);C.trim()&&(r+=C)}let _=t.splitMessages??!1,N=t.timePerChar??0,O=1e3,c=2e4;if(r.trim())if(_){let C=r.trim().split(`

`);for(let R=0;R<C.length;R++){let a=C[R],i=Math.min(Math.max(a.length*N,O),c);e.integration===p.WHATSAPP_BAILEYS&&(await e.client.presenceSubscribe(E),await e.client.sendPresenceUpdate("composing",E)),await new Promise(P=>{setTimeout(async()=>{await e.textMessage({number:E.split("@")[0],delay:t?.delayMessage||1e3,text:a},!1),P()},i)}),e.integration===p.WHATSAPP_BAILEYS&&await e.client.sendPresenceUpdate("paused",E)}}else await e.textMessage({number:E.split("@")[0],delay:t?.delayMessage||1e3,text:r.trim()},!1);d("/message/sendText")}async initNewSession(e,E,S,t,o,r,s){let T=await this.createNewSession(e,{remoteJid:E,pushName:s,botId:S.id});T.session&&(o=T.session),await this.sendMessageToBot(e,o,t,S,E,s,r)}async processDify(e,E,S,t,o,r,s){if(!(t&&t.status!=="opened")){if(t&&o.expire&&o.expire>0){let T=Date.now(),A=new Date(t.updatedAt).getTime(),_=T-A;if(Math.floor(_/1e3/60)>o.expire){o.keepOpen?await this.prismaRepository.integrationSession.update({where:{id:t.id},data:{status:"closed"}}):await this.prismaRepository.integrationSession.deleteMany({where:{botId:S.id,remoteJid:E}}),await this.initNewSession(e,E,S,o,t,r,s);return}}if(!t){await this.initNewSession(e,E,S,o,t,r,s);return}if(await this.prismaRepository.integrationSession.update({where:{id:t.id},data:{status:"opened",awaitUser:!1}}),!r){o.unknownMessage&&(this.waMonitor.waInstances[e.instanceName].textMessage({number:E.split("@")[0],delay:o.delayMessage||1e3,text:o.unknownMessage},!1),d("/message/sendText"));return}if(o.keywordFinish&&r.toLowerCase()===o.keywordFinish.toLowerCase()){o.keepOpen?await this.prismaRepository.integrationSession.update({where:{id:t.id},data:{status:"closed"}}):await this.prismaRepository.integrationSession.deleteMany({where:{botId:S.id,remoteJid:E}});return}await this.sendMessageToBot(e,t,o,S,E,s,r)}}};0&&(module.exports={DifyService});
//# sourceMappingURL=dify.service.js.map