var l=Object.create;var r=Object.defineProperty;var v=Object.getOwnPropertyDescriptor;var u=Object.getOwnPropertyNames;var b=Object.getPrototypeOf,G=Object.prototype.hasOwnProperty;var H=(o,E)=>{for(var e in E)r(o,e,{get:E[e],enumerable:!0})},a=(o,E,e,T)=>{if(E&&typeof E=="object"||typeof E=="function")for(let s of u(E))!G.call(o,s)&&s!==e&&r(o,s,{get:()=>E[s],enumerable:!(T=v(E,s))||T.enumerable});return o};var n=(o,E,e)=>(e=o!=null?l(b(o)):{},a(E||!o||!o.__esModule?r(e,"default",{value:o,enumerable:!0}):e,o)),V=o=>a(r({},"__esModule",{value:!0}),o);var g={};H(g,{ProviderFiles:()=>C});module.exports=V(g);var I=n(require("dayjs")),D=n(require("fs"));var N=require("class-validator"),p=n(require("dotenv"));p.default.config();var O=class{constructor(){this.loadEnv()}get(E){return this.env[E]}loadEnv(){this.env=this.envProcess(),this.env.PRODUCTION=process.env?.NODE_ENV==="PROD",process.env?.DOCKER_ENV==="true"&&(this.env.SERVER.TYPE=process.env.SERVER_TYPE,this.env.SERVER.PORT=Number.parseInt(process.env.SERVER_PORT)||8080)}envProcess(){return{SERVER:{TYPE:process.env.SERVER_TYPE||"http",PORT:Number.parseInt(process.env.SERVER_PORT)||8080,URL:process.env.SERVER_URL,DISABLE_DOCS:process.env?.SERVER_DISABLE_DOCS==="true",DISABLE_MANAGER:process.env?.SERVER_DISABLE_MANAGER==="true"},CORS:{ORIGIN:process.env.CORS_ORIGIN?.split(",")||["*"],METHODS:process.env.CORS_METHODS?.split(",")||["POST","GET","PUT","DELETE"],CREDENTIALS:process.env?.CORS_CREDENTIALS==="true"},SSL_CONF:{PRIVKEY:process.env?.SSL_CONF_PRIVKEY||"",FULLCHAIN:process.env?.SSL_CONF_FULLCHAIN||""},PROVIDER:{ENABLED:process.env?.PROVIDER_ENABLED==="true",HOST:process.env.PROVIDER_HOST,PORT:process.env?.PROVIDER_PORT||"5656",PREFIX:process.env?.PROVIDER_PREFIX||"evolution"},DATABASE:{CONNECTION:{URI:process.env.DATABASE_CONNECTION_URI||"",CLIENT_NAME:process.env.DATABASE_CONNECTION_CLIENT_NAME||"evolution"},PROVIDER:process.env.DATABASE_PROVIDER||"postgresql",SAVE_DATA:{INSTANCE:process.env?.DATABASE_SAVE_DATA_INSTANCE==="true",NEW_MESSAGE:process.env?.DATABASE_SAVE_DATA_NEW_MESSAGE==="true",MESSAGE_UPDATE:process.env?.DATABASE_SAVE_MESSAGE_UPDATE==="true",CONTACTS:process.env?.DATABASE_SAVE_DATA_CONTACTS==="true",CHATS:process.env?.DATABASE_SAVE_DATA_CHATS==="true",HISTORIC:process.env?.DATABASE_SAVE_DATA_HISTORIC==="true",LABELS:process.env?.DATABASE_SAVE_DATA_LABELS==="true",IS_ON_WHATSAPP:process.env?.DATABASE_SAVE_IS_ON_WHATSAPP==="true",IS_ON_WHATSAPP_DAYS:Number.parseInt(process.env?.DATABASE_SAVE_IS_ON_WHATSAPP_DAYS??"7")},DELETE_DATA:{LOGICAL_MESSAGE_DELETE:process.env?.DATABASE_DELETE_MESSAGE==="true"}},RABBITMQ:{ENABLED:process.env?.RABBITMQ_ENABLED==="true",GLOBAL_ENABLED:process.env?.RABBITMQ_GLOBAL_ENABLED==="true",PREFIX_KEY:process.env?.RABBITMQ_PREFIX_KEY||"evolution",EXCHANGE_NAME:process.env?.RABBITMQ_EXCHANGE_NAME||"evolution_exchange",URI:process.env.RABBITMQ_URI||"",EVENTS:{APPLICATION_STARTUP:process.env?.RABBITMQ_EVENTS_APPLICATION_STARTUP==="true",INSTANCE_CREATE:process.env?.RABBITMQ_EVENTS_INSTANCE_CREATE==="true",INSTANCE_DELETE:process.env?.RABBITMQ_EVENTS_INSTANCE_DELETE==="true",QRCODE_UPDATED:process.env?.RABBITMQ_EVENTS_QRCODE_UPDATED==="true",MESSAGES_SET:process.env?.RABBITMQ_EVENTS_MESSAGES_SET==="true",MESSAGES_UPSERT:process.env?.RABBITMQ_EVENTS_MESSAGES_UPSERT==="true",MESSAGES_EDITED:process.env?.RABBITMQ_EVENTS_MESSAGES_EDITED==="true",MESSAGES_UPDATE:process.env?.RABBITMQ_EVENTS_MESSAGES_UPDATE==="true",MESSAGES_DELETE:process.env?.RABBITMQ_EVENTS_MESSAGES_DELETE==="true",SEND_MESSAGE:process.env?.RABBITMQ_EVENTS_SEND_MESSAGE==="true",CONTACTS_SET:process.env?.RABBITMQ_EVENTS_CONTACTS_SET==="true",CONTACTS_UPDATE:process.env?.RABBITMQ_EVENTS_CONTACTS_UPDATE==="true",CONTACTS_UPSERT:process.env?.RABBITMQ_EVENTS_CONTACTS_UPSERT==="true",PRESENCE_UPDATE:process.env?.RABBITMQ_EVENTS_PRESENCE_UPDATE==="true",CHATS_SET:process.env?.RABBITMQ_EVENTS_CHATS_SET==="true",CHATS_UPDATE:process.env?.RABBITMQ_EVENTS_CHATS_UPDATE==="true",CHATS_UPSERT:process.env?.RABBITMQ_EVENTS_CHATS_UPSERT==="true",CHATS_DELETE:process.env?.RABBITMQ_EVENTS_CHATS_DELETE==="true",CONNECTION_UPDATE:process.env?.RABBITMQ_EVENTS_CONNECTION_UPDATE==="true",LABELS_EDIT:process.env?.RABBITMQ_EVENTS_LABELS_EDIT==="true",LABELS_ASSOCIATION:process.env?.RABBITMQ_EVENTS_LABELS_ASSOCIATION==="true",GROUPS_UPSERT:process.env?.RABBITMQ_EVENTS_GROUPS_UPSERT==="true",GROUP_UPDATE:process.env?.RABBITMQ_EVENTS_GROUPS_UPDATE==="true",GROUP_PARTICIPANTS_UPDATE:process.env?.RABBITMQ_EVENTS_GROUP_PARTICIPANTS_UPDATE==="true",CALL:process.env?.RABBITMQ_EVENTS_CALL==="true",TYPEBOT_START:process.env?.RABBITMQ_EVENTS_TYPEBOT_START==="true",TYPEBOT_CHANGE_STATUS:process.env?.RABBITMQ_EVENTS_TYPEBOT_CHANGE_STATUS==="true"}},SQS:{ENABLED:process.env?.SQS_ENABLED==="true",ACCESS_KEY_ID:process.env.SQS_ACCESS_KEY_ID||"",SECRET_ACCESS_KEY:process.env.SQS_SECRET_ACCESS_KEY||"",ACCOUNT_ID:process.env.SQS_ACCOUNT_ID||"",REGION:process.env.SQS_REGION||""},WEBSOCKET:{ENABLED:process.env?.WEBSOCKET_ENABLED==="true",GLOBAL_EVENTS:process.env?.WEBSOCKET_GLOBAL_EVENTS==="true"},PUSHER:{ENABLED:process.env?.PUSHER_ENABLED==="true",GLOBAL:{ENABLED:process.env?.PUSHER_GLOBAL_ENABLED==="true",APP_ID:process.env?.PUSHER_GLOBAL_APP_ID||"",KEY:process.env?.PUSHER_GLOBAL_KEY||"",SECRET:process.env?.PUSHER_GLOBAL_SECRET||"",CLUSTER:process.env?.PUSHER_GLOBAL_CLUSTER||"",USE_TLS:process.env?.PUSHER_GLOBAL_USE_TLS==="true"},EVENTS:{APPLICATION_STARTUP:process.env?.PUSHER_EVENTS_APPLICATION_STARTUP==="true",INSTANCE_CREATE:process.env?.PUSHER_EVENTS_INSTANCE_CREATE==="true",INSTANCE_DELETE:process.env?.PUSHER_EVENTS_INSTANCE_DELETE==="true",QRCODE_UPDATED:process.env?.PUSHER_EVENTS_QRCODE_UPDATED==="true",MESSAGES_SET:process.env?.PUSHER_EVENTS_MESSAGES_SET==="true",MESSAGES_UPSERT:process.env?.PUSHER_EVENTS_MESSAGES_UPSERT==="true",MESSAGES_EDITED:process.env?.PUSHER_EVENTS_MESSAGES_EDITED==="true",MESSAGES_UPDATE:process.env?.PUSHER_EVENTS_MESSAGES_UPDATE==="true",MESSAGES_DELETE:process.env?.PUSHER_EVENTS_MESSAGES_DELETE==="true",SEND_MESSAGE:process.env?.PUSHER_EVENTS_SEND_MESSAGE==="true",CONTACTS_SET:process.env?.PUSHER_EVENTS_CONTACTS_SET==="true",CONTACTS_UPDATE:process.env?.PUSHER_EVENTS_CONTACTS_UPDATE==="true",CONTACTS_UPSERT:process.env?.PUSHER_EVENTS_CONTACTS_UPSERT==="true",PRESENCE_UPDATE:process.env?.PUSHER_EVENTS_PRESENCE_UPDATE==="true",CHATS_SET:process.env?.PUSHER_EVENTS_CHATS_SET==="true",CHATS_UPDATE:process.env?.PUSHER_EVENTS_CHATS_UPDATE==="true",CHATS_UPSERT:process.env?.PUSHER_EVENTS_CHATS_UPSERT==="true",CHATS_DELETE:process.env?.PUSHER_EVENTS_CHATS_DELETE==="true",CONNECTION_UPDATE:process.env?.PUSHER_EVENTS_CONNECTION_UPDATE==="true",LABELS_EDIT:process.env?.PUSHER_EVENTS_LABELS_EDIT==="true",LABELS_ASSOCIATION:process.env?.PUSHER_EVENTS_LABELS_ASSOCIATION==="true",GROUPS_UPSERT:process.env?.PUSHER_EVENTS_GROUPS_UPSERT==="true",GROUP_UPDATE:process.env?.PUSHER_EVENTS_GROUPS_UPDATE==="true",GROUP_PARTICIPANTS_UPDATE:process.env?.PUSHER_EVENTS_GROUP_PARTICIPANTS_UPDATE==="true",CALL:process.env?.PUSHER_EVENTS_CALL==="true",TYPEBOT_START:process.env?.PUSHER_EVENTS_TYPEBOT_START==="true",TYPEBOT_CHANGE_STATUS:process.env?.PUSHER_EVENTS_TYPEBOT_CHANGE_STATUS==="true"}},WA_BUSINESS:{TOKEN_WEBHOOK:process.env.WA_BUSINESS_TOKEN_WEBHOOK||"evolution",URL:process.env.WA_BUSINESS_URL||"https://graph.facebook.com",VERSION:process.env.WA_BUSINESS_VERSION||"v18.0",LANGUAGE:process.env.WA_BUSINESS_LANGUAGE||"en"},LOG:{LEVEL:process.env?.LOG_LEVEL?.split(",")||["ERROR","WARN","DEBUG","INFO","LOG","VERBOSE","DARK","WEBHOOKS","WEBSOCKET"],COLOR:process.env?.LOG_COLOR==="true",BAILEYS:process.env?.LOG_BAILEYS||"error"},DEL_INSTANCE:(0,N.isBooleanString)(process.env?.DEL_INSTANCE)?process.env.DEL_INSTANCE==="true":Number.parseInt(process.env.DEL_INSTANCE)||!1,DEL_TEMP_INSTANCES:(0,N.isBooleanString)(process.env?.DEL_TEMP_INSTANCES)?process.env.DEL_TEMP_INSTANCES==="true":!0,LANGUAGE:process.env?.LANGUAGE||"en",WEBHOOK:{GLOBAL:{URL:process.env?.WEBHOOK_GLOBAL_URL||"",ENABLED:process.env?.WEBHOOK_GLOBAL_ENABLED==="true",WEBHOOK_BY_EVENTS:process.env?.WEBHOOK_GLOBAL_WEBHOOK_BY_EVENTS==="true"},EVENTS:{APPLICATION_STARTUP:process.env?.WEBHOOK_EVENTS_APPLICATION_STARTUP==="true",INSTANCE_CREATE:process.env?.WEBHOOK_EVENTS_INSTANCE_CREATE==="true",INSTANCE_DELETE:process.env?.WEBHOOK_EVENTS_INSTANCE_DELETE==="true",QRCODE_UPDATED:process.env?.WEBHOOK_EVENTS_QRCODE_UPDATED==="true",MESSAGES_SET:process.env?.WEBHOOK_EVENTS_MESSAGES_SET==="true",MESSAGES_UPSERT:process.env?.WEBHOOK_EVENTS_MESSAGES_UPSERT==="true",MESSAGES_EDITED:process.env?.WEBHOOK_EVENTS_MESSAGES_EDITED==="true",MESSAGES_UPDATE:process.env?.WEBHOOK_EVENTS_MESSAGES_UPDATE==="true",MESSAGES_DELETE:process.env?.WEBHOOK_EVENTS_MESSAGES_DELETE==="true",SEND_MESSAGE:process.env?.WEBHOOK_EVENTS_SEND_MESSAGE==="true",CONTACTS_SET:process.env?.WEBHOOK_EVENTS_CONTACTS_SET==="true",CONTACTS_UPDATE:process.env?.WEBHOOK_EVENTS_CONTACTS_UPDATE==="true",CONTACTS_UPSERT:process.env?.WEBHOOK_EVENTS_CONTACTS_UPSERT==="true",PRESENCE_UPDATE:process.env?.WEBHOOK_EVENTS_PRESENCE_UPDATE==="true",CHATS_SET:process.env?.WEBHOOK_EVENTS_CHATS_SET==="true",CHATS_UPDATE:process.env?.WEBHOOK_EVENTS_CHATS_UPDATE==="true",CHATS_UPSERT:process.env?.WEBHOOK_EVENTS_CHATS_UPSERT==="true",CHATS_DELETE:process.env?.WEBHOOK_EVENTS_CHATS_DELETE==="true",CONNECTION_UPDATE:process.env?.WEBHOOK_EVENTS_CONNECTION_UPDATE==="true",LABELS_EDIT:process.env?.WEBHOOK_EVENTS_LABELS_EDIT==="true",LABELS_ASSOCIATION:process.env?.WEBHOOK_EVENTS_LABELS_ASSOCIATION==="true",GROUPS_UPSERT:process.env?.WEBHOOK_EVENTS_GROUPS_UPSERT==="true",GROUP_UPDATE:process.env?.WEBHOOK_EVENTS_GROUPS_UPDATE==="true",GROUP_PARTICIPANTS_UPDATE:process.env?.WEBHOOK_EVENTS_GROUP_PARTICIPANTS_UPDATE==="true",CALL:process.env?.WEBHOOK_EVENTS_CALL==="true",TYPEBOT_START:process.env?.WEBHOOK_EVENTS_TYPEBOT_START==="true",TYPEBOT_CHANGE_STATUS:process.env?.WEBHOOK_EVENTS_TYPEBOT_CHANGE_STATUS==="true",ERRORS:process.env?.WEBHOOK_EVENTS_ERRORS==="true",ERRORS_WEBHOOK:process.env?.WEBHOOK_EVENTS_ERRORS_WEBHOOK||""}},CONFIG_SESSION_PHONE:{CLIENT:process.env?.CONFIG_SESSION_PHONE_CLIENT||"Evolution API",NAME:process.env?.CONFIG_SESSION_PHONE_NAME||"Chrome",VERSION:process.env?.CONFIG_SESSION_PHONE_VERSION||null},QRCODE:{LIMIT:Number.parseInt(process.env.QRCODE_LIMIT)||30,COLOR:process.env.QRCODE_COLOR||"#198754"},TYPEBOT:{ENABLED:process.env?.TYPEBOT_ENABLED==="true",API_VERSION:process.env?.TYPEBOT_API_VERSION||"old",SEND_MEDIA_BASE64:process.env?.TYPEBOT_SEND_MEDIA_BASE64==="true"},CHATWOOT:{ENABLED:process.env?.CHATWOOT_ENABLED==="true",MESSAGE_DELETE:process.env.CHATWOOT_MESSAGE_DELETE==="true",MESSAGE_READ:process.env.CHATWOOT_MESSAGE_READ==="true",BOT_CONTACT:!process.env.CHATWOOT_BOT_CONTACT||process.env.CHATWOOT_BOT_CONTACT==="true",IMPORT:{DATABASE:{CONNECTION:{URI:process.env.CHATWOOT_IMPORT_DATABASE_CONNECTION_URI||""}},PLACEHOLDER_MEDIA_MESSAGE:process.env?.CHATWOOT_IMPORT_PLACEHOLDER_MEDIA_MESSAGE==="true"}},OPENAI:{ENABLED:process.env?.OPENAI_ENABLED==="true",API_KEY_GLOBAL:process.env?.OPENAI_API_KEY_GLOBAL||null},DIFY:{ENABLED:process.env?.DIFY_ENABLED==="true"},CACHE:{REDIS:{ENABLED:process.env?.CACHE_REDIS_ENABLED==="true",URI:process.env?.CACHE_REDIS_URI||"",PREFIX_KEY:process.env?.CACHE_REDIS_PREFIX_KEY||"evolution-cache",TTL:Number.parseInt(process.env?.CACHE_REDIS_TTL)||604800,SAVE_INSTANCES:process.env?.CACHE_REDIS_SAVE_INSTANCES==="true"},LOCAL:{ENABLED:process.env?.CACHE_LOCAL_ENABLED==="true",TTL:Number.parseInt(process.env?.CACHE_REDIS_TTL)||86400}},S3:{ACCESS_KEY:process.env?.S3_ACCESS_KEY,SECRET_KEY:process.env?.S3_SECRET_KEY,ENDPOINT:process.env?.S3_ENDPOINT,BUCKET_NAME:process.env?.S3_BUCKET,ENABLE:process.env?.S3_ENABLED==="true",PORT:Number.parseInt(process.env?.S3_PORT||"9000"),USE_SSL:process.env?.S3_USE_SSL==="true",REGION:process.env?.S3_REGION},AUTHENTICATION:{API_KEY:{KEY:process.env.AUTHENTICATION_API_KEY||"BQYHJGJHJ"},EXPOSE_IN_FETCH_INSTANCES:process.env?.AUTHENTICATION_EXPOSE_IN_FETCH_INSTANCES==="true"}}}},R=new O;var M=JSON.parse(D.default.readFileSync("./package.json","utf8")),P=o=>(0,I.default)(o).toDate().toString().replace(/\sGMT.+/,""),_=(S=>(S.LOG="\x1B[32m",S.INFO="\x1B[34m",S.WARN="\x1B[33m",S.ERROR="\x1B[31m",S.DEBUG="\x1B[36m",S.VERBOSE="\x1B[37m",S.DARK="\x1B[30m",S))(_||{});var c=(S=>(S.LOG="\x1B[32m%s\x1B[0m",S.DARK="\x1B[30m%s\x1B[0m",S.INFO="\x1B[34m%s\x1B[0m",S.WARN="\x1B[33m%s\x1B[0m",S.ERROR="\x1B[31m%s\x1B[0m",S.DEBUG="\x1B[36m%s\x1B[0m",S.VERBOSE="\x1B[37m%s\x1B[0m",S))(c||{}),L=(S=>(S.LOG="LOG",S.WARN="WARN",S.INFO="INFO",S.DARK="DARK",S.ERROR="ERROR",S.DEBUG="DEBUG",S.VERBOSE="VERBOSE",S))(L||{}),B=(S=>(S.LOG="\x1B[42m",S.INFO="\x1B[44m",S.WARN="\x1B[43m",S.DARK="\x1B[40m",S.ERROR="\x1B[41m",S.DEBUG="\x1B[46m",S.VERBOSE="\x1B[47m",S))(B||{}),t=class{constructor(E="Logger"){this.configService=R;this.instance=null;this.context=E}setContext(E){this.context=E}setInstance(E){this.instance=E}console(E,e){let T=[];this.configService.get("LOG").LEVEL.forEach(U=>T.push(L[U]));let s=typeof E;T.includes(e)&&(R.get("LOG").COLOR?(console.log("\x1B[1m"+c[e],"[Evolution API]","\x1B[1m"+_[e],this.instance?`[${this.instance}]`:"","\x1B[1m"+_[e],`v${M.version}`,"\x1B[1m"+_[e],process.pid.toString(),"\x1B[0m","\x1B[1m"+_[e],"-","\x1B[1m\x1B[37m",`${P(Date.now())}  `,"\x1B[0m",_[e]+B[e]+"\x1B[1m",`${e} \x1B[0m`,"\x1B[33m\x1B[1m",`[${this.context}]\x1B[0m`,_[e]+"\x1B[1m",`[${s}]\x1B[0m`,_[e],s!=="object"?E:"","\x1B[0m"),s==="object"&&console.log(E,`
`)):console.log("[Evolution API]",this.instance?`[${this.instance}]`:"",process.pid.toString(),"-",`${P(Date.now())}  `,`${e} `,`[${this.context}]`,`[${s}]`,E))}log(E){this.console(E,"LOG")}info(E){this.console(E,"INFO")}warn(E){this.console(E,"WARN")}error(E){this.console(E,"ERROR")}verbose(E){this.console(E,"VERBOSE")}debug(E){this.console(E,"DEBUG")}dark(E){this.console(E,"DARK")}};var A=n(require("axios")),i=require("child_process"),C=class{constructor(E){this.configService=E;this.logger=new t("ProviderFiles");this.config=Object.freeze(this.configService.get("PROVIDER"));this.baseUrl=`http://${this.config.HOST}:${this.config.PORT}/session/${this.config.PREFIX}`,this.globalApiToken=this.configService.get("AUTHENTICATION").API_KEY.KEY}get isEnabled(){return!!this.config?.ENABLED}async onModuleInit(){if(this.config.ENABLED){let E=`http://${this.config.HOST}:${this.config.PORT}`;try{if((await A.default.options(E+"/ping"))?.data!="pong")throw new Error("Offline file provider.");await A.default.post(`${E}/session`,{group:this.config.PREFIX},{headers:{apikey:this.globalApiToken}})}catch(e){this.logger.error(["Failed to connect to the file server",e?.message,e?.stack]);let T=process.pid;(0,i.execSync)(`kill -9 ${T}`)}}}async onModuleDestroy(){}async create(E){try{let e=await A.default.post(`${this.baseUrl}`,{instance:E},{headers:{apikey:this.globalApiToken}});return[{status:e.status,data:e?.data}]}catch(e){return[{status:e?.response?.status,data:e?.response?.data},e]}}async write(E,e,T){try{let s=await A.default.post(`${this.baseUrl}/${E}/${e}`,T,{headers:{apikey:this.globalApiToken}});return[{status:s.status,data:s?.data}]}catch(s){return[{status:s?.response?.status,data:s?.response?.data},s]}}async read(E,e){try{let T=await A.default.get(`${this.baseUrl}/${E}/${e}`,{headers:{apikey:this.globalApiToken}});return[{status:T.status,data:T?.data}]}catch(T){return[{status:T?.response?.status,data:T?.response?.data},T]}}async delete(E,e){try{let T=await A.default.delete(`${this.baseUrl}/${E}/${e}`,{headers:{apikey:this.globalApiToken}});return[{status:T.status,data:T?.data}]}catch(T){return[{status:T?.response?.status,data:T?.response?.data},T]}}async allInstances(){try{let E=await A.default.get(`${this.baseUrl}/list-instances`,{headers:{apikey:this.globalApiToken}});return[{status:E.status,data:E?.data}]}catch(E){return[{status:E?.response?.status,data:E?.response?.data},E]}}async removeSession(E){try{let e=await A.default.delete(`${this.baseUrl}/${E}`,{headers:{apikey:this.globalApiToken}});return[{status:e.status,data:e?.data}]}catch(e){return[{status:e?.response?.status,data:e?.response?.data},e]}}};0&&(module.exports={ProviderFiles});
//# sourceMappingURL=sessions.js.map