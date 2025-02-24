var q=Object.create;var P=Object.defineProperty;var w=Object.getOwnPropertyDescriptor;var F=Object.getOwnPropertyNames;var X=Object.getPrototypeOf,$=Object.prototype.hasOwnProperty;var k=(o,E)=>{for(var e in E)P(o,e,{get:E[e],enumerable:!0})},M=(o,E,e,s)=>{if(E&&typeof E=="object"||typeof E=="function")for(let T of F(E))!$.call(o,T)&&T!==e&&P(o,T,{get:()=>E[T],enumerable:!(s=w(E,T))||s.enumerable});return o};var I=(o,E,e)=>(e=o!=null?q(X(o)):{},M(E||!o||!o.__esModule?P(e,"default",{value:o,enumerable:!0}):e,o)),J=o=>M(P({},"__esModule",{value:!0}),o);var z={};k(z,{RabbitmqController:()=>u});module.exports=J(z);var B=require("class-validator"),g=I(require("dotenv"));g.default.config();var l=class{constructor(){this.loadEnv()}get(E){return this.env[E]}loadEnv(){this.env=this.envProcess(),this.env.PRODUCTION=process.env?.NODE_ENV==="PROD",process.env?.DOCKER_ENV==="true"&&(this.env.SERVER.TYPE=process.env.SERVER_TYPE,this.env.SERVER.PORT=Number.parseInt(process.env.SERVER_PORT)||8080)}envProcess(){return{SERVER:{TYPE:process.env.SERVER_TYPE||"http",PORT:Number.parseInt(process.env.SERVER_PORT)||8080,URL:process.env.SERVER_URL,DISABLE_DOCS:process.env?.SERVER_DISABLE_DOCS==="true",DISABLE_MANAGER:process.env?.SERVER_DISABLE_MANAGER==="true"},CORS:{ORIGIN:process.env.CORS_ORIGIN?.split(",")||["*"],METHODS:process.env.CORS_METHODS?.split(",")||["POST","GET","PUT","DELETE"],CREDENTIALS:process.env?.CORS_CREDENTIALS==="true"},SSL_CONF:{PRIVKEY:process.env?.SSL_CONF_PRIVKEY||"",FULLCHAIN:process.env?.SSL_CONF_FULLCHAIN||""},PROVIDER:{ENABLED:process.env?.PROVIDER_ENABLED==="true",HOST:process.env.PROVIDER_HOST,PORT:process.env?.PROVIDER_PORT||"5656",PREFIX:process.env?.PROVIDER_PREFIX||"evolution"},DATABASE:{CONNECTION:{URI:process.env.DATABASE_CONNECTION_URI||"",CLIENT_NAME:process.env.DATABASE_CONNECTION_CLIENT_NAME||"evolution"},PROVIDER:process.env.DATABASE_PROVIDER||"postgresql",SAVE_DATA:{INSTANCE:process.env?.DATABASE_SAVE_DATA_INSTANCE==="true",NEW_MESSAGE:process.env?.DATABASE_SAVE_DATA_NEW_MESSAGE==="true",MESSAGE_UPDATE:process.env?.DATABASE_SAVE_MESSAGE_UPDATE==="true",CONTACTS:process.env?.DATABASE_SAVE_DATA_CONTACTS==="true",CHATS:process.env?.DATABASE_SAVE_DATA_CHATS==="true",HISTORIC:process.env?.DATABASE_SAVE_DATA_HISTORIC==="true",LABELS:process.env?.DATABASE_SAVE_DATA_LABELS==="true",IS_ON_WHATSAPP:process.env?.DATABASE_SAVE_IS_ON_WHATSAPP==="true",IS_ON_WHATSAPP_DAYS:Number.parseInt(process.env?.DATABASE_SAVE_IS_ON_WHATSAPP_DAYS??"7")},DELETE_DATA:{LOGICAL_MESSAGE_DELETE:process.env?.DATABASE_DELETE_MESSAGE==="true"}},RABBITMQ:{ENABLED:process.env?.RABBITMQ_ENABLED==="true",GLOBAL_ENABLED:process.env?.RABBITMQ_GLOBAL_ENABLED==="true",PREFIX_KEY:process.env?.RABBITMQ_PREFIX_KEY||"evolution",EXCHANGE_NAME:process.env?.RABBITMQ_EXCHANGE_NAME||"evolution_exchange",URI:process.env.RABBITMQ_URI||"",EVENTS:{APPLICATION_STARTUP:process.env?.RABBITMQ_EVENTS_APPLICATION_STARTUP==="true",INSTANCE_CREATE:process.env?.RABBITMQ_EVENTS_INSTANCE_CREATE==="true",INSTANCE_DELETE:process.env?.RABBITMQ_EVENTS_INSTANCE_DELETE==="true",QRCODE_UPDATED:process.env?.RABBITMQ_EVENTS_QRCODE_UPDATED==="true",MESSAGES_SET:process.env?.RABBITMQ_EVENTS_MESSAGES_SET==="true",MESSAGES_UPSERT:process.env?.RABBITMQ_EVENTS_MESSAGES_UPSERT==="true",MESSAGES_EDITED:process.env?.RABBITMQ_EVENTS_MESSAGES_EDITED==="true",MESSAGES_UPDATE:process.env?.RABBITMQ_EVENTS_MESSAGES_UPDATE==="true",MESSAGES_DELETE:process.env?.RABBITMQ_EVENTS_MESSAGES_DELETE==="true",SEND_MESSAGE:process.env?.RABBITMQ_EVENTS_SEND_MESSAGE==="true",CONTACTS_SET:process.env?.RABBITMQ_EVENTS_CONTACTS_SET==="true",CONTACTS_UPDATE:process.env?.RABBITMQ_EVENTS_CONTACTS_UPDATE==="true",CONTACTS_UPSERT:process.env?.RABBITMQ_EVENTS_CONTACTS_UPSERT==="true",PRESENCE_UPDATE:process.env?.RABBITMQ_EVENTS_PRESENCE_UPDATE==="true",CHATS_SET:process.env?.RABBITMQ_EVENTS_CHATS_SET==="true",CHATS_UPDATE:process.env?.RABBITMQ_EVENTS_CHATS_UPDATE==="true",CHATS_UPSERT:process.env?.RABBITMQ_EVENTS_CHATS_UPSERT==="true",CHATS_DELETE:process.env?.RABBITMQ_EVENTS_CHATS_DELETE==="true",CONNECTION_UPDATE:process.env?.RABBITMQ_EVENTS_CONNECTION_UPDATE==="true",LABELS_EDIT:process.env?.RABBITMQ_EVENTS_LABELS_EDIT==="true",LABELS_ASSOCIATION:process.env?.RABBITMQ_EVENTS_LABELS_ASSOCIATION==="true",GROUPS_UPSERT:process.env?.RABBITMQ_EVENTS_GROUPS_UPSERT==="true",GROUP_UPDATE:process.env?.RABBITMQ_EVENTS_GROUPS_UPDATE==="true",GROUP_PARTICIPANTS_UPDATE:process.env?.RABBITMQ_EVENTS_GROUP_PARTICIPANTS_UPDATE==="true",CALL:process.env?.RABBITMQ_EVENTS_CALL==="true",TYPEBOT_START:process.env?.RABBITMQ_EVENTS_TYPEBOT_START==="true",TYPEBOT_CHANGE_STATUS:process.env?.RABBITMQ_EVENTS_TYPEBOT_CHANGE_STATUS==="true"}},SQS:{ENABLED:process.env?.SQS_ENABLED==="true",ACCESS_KEY_ID:process.env.SQS_ACCESS_KEY_ID||"",SECRET_ACCESS_KEY:process.env.SQS_SECRET_ACCESS_KEY||"",ACCOUNT_ID:process.env.SQS_ACCOUNT_ID||"",REGION:process.env.SQS_REGION||""},WEBSOCKET:{ENABLED:process.env?.WEBSOCKET_ENABLED==="true",GLOBAL_EVENTS:process.env?.WEBSOCKET_GLOBAL_EVENTS==="true"},PUSHER:{ENABLED:process.env?.PUSHER_ENABLED==="true",GLOBAL:{ENABLED:process.env?.PUSHER_GLOBAL_ENABLED==="true",APP_ID:process.env?.PUSHER_GLOBAL_APP_ID||"",KEY:process.env?.PUSHER_GLOBAL_KEY||"",SECRET:process.env?.PUSHER_GLOBAL_SECRET||"",CLUSTER:process.env?.PUSHER_GLOBAL_CLUSTER||"",USE_TLS:process.env?.PUSHER_GLOBAL_USE_TLS==="true"},EVENTS:{APPLICATION_STARTUP:process.env?.PUSHER_EVENTS_APPLICATION_STARTUP==="true",INSTANCE_CREATE:process.env?.PUSHER_EVENTS_INSTANCE_CREATE==="true",INSTANCE_DELETE:process.env?.PUSHER_EVENTS_INSTANCE_DELETE==="true",QRCODE_UPDATED:process.env?.PUSHER_EVENTS_QRCODE_UPDATED==="true",MESSAGES_SET:process.env?.PUSHER_EVENTS_MESSAGES_SET==="true",MESSAGES_UPSERT:process.env?.PUSHER_EVENTS_MESSAGES_UPSERT==="true",MESSAGES_EDITED:process.env?.PUSHER_EVENTS_MESSAGES_EDITED==="true",MESSAGES_UPDATE:process.env?.PUSHER_EVENTS_MESSAGES_UPDATE==="true",MESSAGES_DELETE:process.env?.PUSHER_EVENTS_MESSAGES_DELETE==="true",SEND_MESSAGE:process.env?.PUSHER_EVENTS_SEND_MESSAGE==="true",CONTACTS_SET:process.env?.PUSHER_EVENTS_CONTACTS_SET==="true",CONTACTS_UPDATE:process.env?.PUSHER_EVENTS_CONTACTS_UPDATE==="true",CONTACTS_UPSERT:process.env?.PUSHER_EVENTS_CONTACTS_UPSERT==="true",PRESENCE_UPDATE:process.env?.PUSHER_EVENTS_PRESENCE_UPDATE==="true",CHATS_SET:process.env?.PUSHER_EVENTS_CHATS_SET==="true",CHATS_UPDATE:process.env?.PUSHER_EVENTS_CHATS_UPDATE==="true",CHATS_UPSERT:process.env?.PUSHER_EVENTS_CHATS_UPSERT==="true",CHATS_DELETE:process.env?.PUSHER_EVENTS_CHATS_DELETE==="true",CONNECTION_UPDATE:process.env?.PUSHER_EVENTS_CONNECTION_UPDATE==="true",LABELS_EDIT:process.env?.PUSHER_EVENTS_LABELS_EDIT==="true",LABELS_ASSOCIATION:process.env?.PUSHER_EVENTS_LABELS_ASSOCIATION==="true",GROUPS_UPSERT:process.env?.PUSHER_EVENTS_GROUPS_UPSERT==="true",GROUP_UPDATE:process.env?.PUSHER_EVENTS_GROUPS_UPDATE==="true",GROUP_PARTICIPANTS_UPDATE:process.env?.PUSHER_EVENTS_GROUP_PARTICIPANTS_UPDATE==="true",CALL:process.env?.PUSHER_EVENTS_CALL==="true",TYPEBOT_START:process.env?.PUSHER_EVENTS_TYPEBOT_START==="true",TYPEBOT_CHANGE_STATUS:process.env?.PUSHER_EVENTS_TYPEBOT_CHANGE_STATUS==="true"}},WA_BUSINESS:{TOKEN_WEBHOOK:process.env.WA_BUSINESS_TOKEN_WEBHOOK||"evolution",URL:process.env.WA_BUSINESS_URL||"https://graph.facebook.com",VERSION:process.env.WA_BUSINESS_VERSION||"v18.0",LANGUAGE:process.env.WA_BUSINESS_LANGUAGE||"en"},LOG:{LEVEL:process.env?.LOG_LEVEL?.split(",")||["ERROR","WARN","DEBUG","INFO","LOG","VERBOSE","DARK","WEBHOOKS","WEBSOCKET"],COLOR:process.env?.LOG_COLOR==="true",BAILEYS:process.env?.LOG_BAILEYS||"error"},DEL_INSTANCE:(0,B.isBooleanString)(process.env?.DEL_INSTANCE)?process.env.DEL_INSTANCE==="true":Number.parseInt(process.env.DEL_INSTANCE)||!1,DEL_TEMP_INSTANCES:(0,B.isBooleanString)(process.env?.DEL_TEMP_INSTANCES)?process.env.DEL_TEMP_INSTANCES==="true":!0,LANGUAGE:process.env?.LANGUAGE||"en",WEBHOOK:{GLOBAL:{URL:process.env?.WEBHOOK_GLOBAL_URL||"",ENABLED:process.env?.WEBHOOK_GLOBAL_ENABLED==="true",WEBHOOK_BY_EVENTS:process.env?.WEBHOOK_GLOBAL_WEBHOOK_BY_EVENTS==="true"},EVENTS:{APPLICATION_STARTUP:process.env?.WEBHOOK_EVENTS_APPLICATION_STARTUP==="true",INSTANCE_CREATE:process.env?.WEBHOOK_EVENTS_INSTANCE_CREATE==="true",INSTANCE_DELETE:process.env?.WEBHOOK_EVENTS_INSTANCE_DELETE==="true",QRCODE_UPDATED:process.env?.WEBHOOK_EVENTS_QRCODE_UPDATED==="true",MESSAGES_SET:process.env?.WEBHOOK_EVENTS_MESSAGES_SET==="true",MESSAGES_UPSERT:process.env?.WEBHOOK_EVENTS_MESSAGES_UPSERT==="true",MESSAGES_EDITED:process.env?.WEBHOOK_EVENTS_MESSAGES_EDITED==="true",MESSAGES_UPDATE:process.env?.WEBHOOK_EVENTS_MESSAGES_UPDATE==="true",MESSAGES_DELETE:process.env?.WEBHOOK_EVENTS_MESSAGES_DELETE==="true",SEND_MESSAGE:process.env?.WEBHOOK_EVENTS_SEND_MESSAGE==="true",CONTACTS_SET:process.env?.WEBHOOK_EVENTS_CONTACTS_SET==="true",CONTACTS_UPDATE:process.env?.WEBHOOK_EVENTS_CONTACTS_UPDATE==="true",CONTACTS_UPSERT:process.env?.WEBHOOK_EVENTS_CONTACTS_UPSERT==="true",PRESENCE_UPDATE:process.env?.WEBHOOK_EVENTS_PRESENCE_UPDATE==="true",CHATS_SET:process.env?.WEBHOOK_EVENTS_CHATS_SET==="true",CHATS_UPDATE:process.env?.WEBHOOK_EVENTS_CHATS_UPDATE==="true",CHATS_UPSERT:process.env?.WEBHOOK_EVENTS_CHATS_UPSERT==="true",CHATS_DELETE:process.env?.WEBHOOK_EVENTS_CHATS_DELETE==="true",CONNECTION_UPDATE:process.env?.WEBHOOK_EVENTS_CONNECTION_UPDATE==="true",LABELS_EDIT:process.env?.WEBHOOK_EVENTS_LABELS_EDIT==="true",LABELS_ASSOCIATION:process.env?.WEBHOOK_EVENTS_LABELS_ASSOCIATION==="true",GROUPS_UPSERT:process.env?.WEBHOOK_EVENTS_GROUPS_UPSERT==="true",GROUP_UPDATE:process.env?.WEBHOOK_EVENTS_GROUPS_UPDATE==="true",GROUP_PARTICIPANTS_UPDATE:process.env?.WEBHOOK_EVENTS_GROUP_PARTICIPANTS_UPDATE==="true",CALL:process.env?.WEBHOOK_EVENTS_CALL==="true",TYPEBOT_START:process.env?.WEBHOOK_EVENTS_TYPEBOT_START==="true",TYPEBOT_CHANGE_STATUS:process.env?.WEBHOOK_EVENTS_TYPEBOT_CHANGE_STATUS==="true",ERRORS:process.env?.WEBHOOK_EVENTS_ERRORS==="true",ERRORS_WEBHOOK:process.env?.WEBHOOK_EVENTS_ERRORS_WEBHOOK||""}},CONFIG_SESSION_PHONE:{CLIENT:process.env?.CONFIG_SESSION_PHONE_CLIENT||"Evolution API",NAME:process.env?.CONFIG_SESSION_PHONE_NAME||"Chrome",VERSION:process.env?.CONFIG_SESSION_PHONE_VERSION||null},QRCODE:{LIMIT:Number.parseInt(process.env.QRCODE_LIMIT)||30,COLOR:process.env.QRCODE_COLOR||"#198754"},TYPEBOT:{ENABLED:process.env?.TYPEBOT_ENABLED==="true",API_VERSION:process.env?.TYPEBOT_API_VERSION||"old",SEND_MEDIA_BASE64:process.env?.TYPEBOT_SEND_MEDIA_BASE64==="true"},CHATWOOT:{ENABLED:process.env?.CHATWOOT_ENABLED==="true",MESSAGE_DELETE:process.env.CHATWOOT_MESSAGE_DELETE==="true",MESSAGE_READ:process.env.CHATWOOT_MESSAGE_READ==="true",BOT_CONTACT:!process.env.CHATWOOT_BOT_CONTACT||process.env.CHATWOOT_BOT_CONTACT==="true",IMPORT:{DATABASE:{CONNECTION:{URI:process.env.CHATWOOT_IMPORT_DATABASE_CONNECTION_URI||""}},PLACEHOLDER_MEDIA_MESSAGE:process.env?.CHATWOOT_IMPORT_PLACEHOLDER_MEDIA_MESSAGE==="true"}},OPENAI:{ENABLED:process.env?.OPENAI_ENABLED==="true",API_KEY_GLOBAL:process.env?.OPENAI_API_KEY_GLOBAL||null},DIFY:{ENABLED:process.env?.DIFY_ENABLED==="true"},CACHE:{REDIS:{ENABLED:process.env?.CACHE_REDIS_ENABLED==="true",URI:process.env?.CACHE_REDIS_URI||"",PREFIX_KEY:process.env?.CACHE_REDIS_PREFIX_KEY||"evolution-cache",TTL:Number.parseInt(process.env?.CACHE_REDIS_TTL)||604800,SAVE_INSTANCES:process.env?.CACHE_REDIS_SAVE_INSTANCES==="true"},LOCAL:{ENABLED:process.env?.CACHE_LOCAL_ENABLED==="true",TTL:Number.parseInt(process.env?.CACHE_REDIS_TTL)||86400}},S3:{ACCESS_KEY:process.env?.S3_ACCESS_KEY,SECRET_KEY:process.env?.S3_SECRET_KEY,ENDPOINT:process.env?.S3_ENDPOINT,BUCKET_NAME:process.env?.S3_BUCKET,ENABLE:process.env?.S3_ENABLED==="true",PORT:Number.parseInt(process.env?.S3_PORT||"9000"),USE_SSL:process.env?.S3_USE_SSL==="true",REGION:process.env?.S3_REGION},AUTHENTICATION:{API_KEY:{KEY:process.env.AUTHENTICATION_API_KEY||"BQYHJGJHJ"},EXPOSE_IN_FETCH_INSTANCES:process.env?.AUTHENTICATION_EXPOSE_IN_FETCH_INSTANCES==="true"}}}},A=new l;var V=I(require("dayjs")),K=I(require("fs"));var j=JSON.parse(K.default.readFileSync("./package.json","utf8")),h=o=>(0,V.default)(o).toDate().toString().replace(/\sGMT.+/,""),n=(S=>(S.LOG="\x1B[32m",S.INFO="\x1B[34m",S.WARN="\x1B[33m",S.ERROR="\x1B[31m",S.DEBUG="\x1B[36m",S.VERBOSE="\x1B[37m",S.DARK="\x1B[30m",S))(n||{});var W=(S=>(S.LOG="\x1B[32m%s\x1B[0m",S.DARK="\x1B[30m%s\x1B[0m",S.INFO="\x1B[34m%s\x1B[0m",S.WARN="\x1B[33m%s\x1B[0m",S.ERROR="\x1B[31m%s\x1B[0m",S.DEBUG="\x1B[36m%s\x1B[0m",S.VERBOSE="\x1B[37m%s\x1B[0m",S))(W||{}),y=(S=>(S.LOG="LOG",S.WARN="WARN",S.INFO="INFO",S.DARK="DARK",S.ERROR="ERROR",S.DEBUG="DEBUG",S.VERBOSE="VERBOSE",S))(y||{}),f=(S=>(S.LOG="\x1B[42m",S.INFO="\x1B[44m",S.WARN="\x1B[43m",S.DARK="\x1B[40m",S.ERROR="\x1B[41m",S.DEBUG="\x1B[46m",S.VERBOSE="\x1B[47m",S))(f||{}),D=class{constructor(E="Logger"){this.configService=A;this.instance=null;this.context=E}setContext(E){this.context=E}setInstance(E){this.instance=E}console(E,e){let s=[];this.configService.get("LOG").LEVEL.forEach(N=>s.push(y[N]));let T=typeof E;s.includes(e)&&(A.get("LOG").COLOR?(console.log("\x1B[1m"+W[e],"[Evolution API]","\x1B[1m"+n[e],this.instance?`[${this.instance}]`:"","\x1B[1m"+n[e],`v${j.version}`,"\x1B[1m"+n[e],process.pid.toString(),"\x1B[0m","\x1B[1m"+n[e],"-","\x1B[1m\x1B[37m",`${h(Date.now())}  `,"\x1B[0m",n[e]+f[e]+"\x1B[1m",`${e} \x1B[0m`,"\x1B[33m\x1B[1m",`[${this.context}]\x1B[0m`,n[e]+"\x1B[1m",`[${T}]\x1B[0m`,n[e],T!=="object"?E:"","\x1B[0m"),T==="object"&&console.log(E,`
`)):console.log("[Evolution API]",this.instance?`[${this.instance}]`:"",process.pid.toString(),"-",`${h(Date.now())}  `,`${e} `,`[${this.context}]`,`[${T}]`,E))}log(E){this.console(E,"LOG")}info(E){this.console(E,"INFO")}warn(E){this.console(E,"WARN")}error(E){this.console(E,"ERROR")}verbose(E){this.console(E,"VERBOSE")}debug(E){this.console(E,"DEBUG")}dark(E){this.console(E,"DARK")}};var x=I(require("amqplib/callback_api"));var L=class L{constructor(E,e,s,T){this.prisma=E,this.monitor=e,this.status=s,this.name=T}set prisma(E){this.prismaRepository=E}get prisma(){return this.prismaRepository}set monitor(E){this.waMonitor=E}get monitor(){return this.waMonitor}set name(E){this.integrationName=E}get name(){return this.integrationName}set status(E){this.integrationStatus=E}get status(){return this.integrationStatus}async set(E,e){if(this.status)return e[this.name]?.enabled?e[this.name].events.length===0&&(e[this.name].events=L.events):e[this.name].events=[],this.prisma[this.name].upsert({where:{instanceId:this.monitor.waInstances[E].instanceId},update:{enabled:e[this.name]?.enabled,events:e[this.name].events},create:{enabled:e[this.name]?.enabled,events:e[this.name].events,instanceId:this.monitor.waInstances[E].instanceId}})}async get(E){if(!this.status)return;if(this.monitor.waInstances[E]===void 0)return null;let e=await this.prisma[this.name].findUnique({where:{instanceId:this.monitor.waInstances[E].instanceId}});return e||null}};L.events=["APPLICATION_STARTUP","QRCODE_UPDATED","MESSAGES_SET","MESSAGES_UPSERT","MESSAGES_EDITED","MESSAGES_UPDATE","MESSAGES_DELETE","SEND_MESSAGE","CONTACTS_SET","CONTACTS_UPSERT","CONTACTS_UPDATE","PRESENCE_UPDATE","CHATS_SET","CHATS_UPSERT","CHATS_UPDATE","CHATS_DELETE","GROUPS_UPSERT","GROUP_UPDATE","GROUP_PARTICIPANTS_UPDATE","CONNECTION_UPDATE","LABELS_EDIT","LABELS_ASSOCIATION","CALL","TYPEBOT_START","TYPEBOT_CHANGE_STATUS","REMOVE_INSTANCE","LOGOUT_INSTANCE"];var c=L;var u=class extends c{constructor(e,s){super(e,s,A.get("RABBITMQ")?.ENABLED,"rabbitmq");this.amqpChannel=null;this.logger=new D("RabbitmqController")}async init(){this.status&&await new Promise((e,s)=>{let T=A.get("RABBITMQ").URI,N=A.get("RABBITMQ").EXCHANGE_NAME;x.connect(T,(t,S)=>{if(t){s(t);return}S.createChannel((_,R)=>{if(_){s(_);return}let C=N;R.assertExchange(C,"topic",{durable:!0,autoDelete:!1}),this.amqpChannel=R,this.logger.info("AMQP initialized"),e()})})}).then(()=>{A.get("RABBITMQ")?.GLOBAL_ENABLED&&this.initGlobalQueues()})}set channel(e){this.amqpChannel=e}get channel(){return this.amqpChannel}async emit({instanceName:e,origin:s,event:T,data:N,serverUrl:t,dateTime:S,sender:_,apiKey:R,integration:C}){if(C&&!C.includes("rabbitmq")||!this.status)return;let b=await this.get(e),U=b?.events,d=A.get("RABBITMQ").GLOBAL_ENABLED,Q=A.get("RABBITMQ").EVENTS,v=A.get("RABBITMQ").PREFIX_KEY,m=A.get("RABBITMQ").EXCHANGE_NAME,G=T.replace(/[.-]/gm,"_").toUpperCase(),H=A.get("LOG").LEVEL.includes("WEBHOOKS"),i={event:T,instance:e,data:N,server_url:t,date_time:S,sender:_,apikey:R};if(b?.enabled&&this.amqpChannel&&Array.isArray(U)&&U.includes(G)){let r=e??m,O=0;for(;O<3;)try{await this.amqpChannel.assertExchange(r,"topic",{durable:!0,autoDelete:!1});let a=T.replace(/_/g,".").toLowerCase(),p=`${e}.${a}`;if(await this.amqpChannel.assertQueue(p,{durable:!0,autoDelete:!1,arguments:{"x-queue-type":"quorum"}}),await this.amqpChannel.bindQueue(p,r,a),await this.amqpChannel.publish(r,T,Buffer.from(JSON.stringify(i))),H){let Y={local:`${s}.sendData-RabbitMQ`,...i};this.logger.log(Y)}break}catch{O++}}if(d&&Q[G]&&this.amqpChannel){let r=m,O=0;for(;O<3;)try{await this.amqpChannel.assertExchange(r,"topic",{durable:!0,autoDelete:!1});let a=v?`${v}.${T.replace(/_/g,".").toLowerCase()}`:T.replace(/_/g,".").toLowerCase();if(await this.amqpChannel.assertQueue(a,{durable:!0,autoDelete:!1,arguments:{"x-queue-type":"quorum"}}),await this.amqpChannel.bindQueue(a,r,T),await this.amqpChannel.publish(r,T,Buffer.from(JSON.stringify(i))),H){let p={local:`${s}.sendData-RabbitMQ-Global`,...i};this.logger.log(p)}break}catch{O++}}}async initGlobalQueues(){this.logger.info("Initializing global queues");let e=A.get("RABBITMQ").EXCHANGE_NAME,s=A.get("RABBITMQ").EVENTS,T=A.get("RABBITMQ").PREFIX_KEY;if(!s){this.logger.warn("No events to initialize on AMQP");return}Object.keys(s).forEach(t=>{if(s[t]===!1)return;let S=T!==""?`${T}.${t.replace(/_/g,".").toLowerCase()}`:`${t.replace(/_/g,".").toLowerCase()}`,_=e;this.amqpChannel.assertExchange(_,"topic",{durable:!0,autoDelete:!1}),this.amqpChannel.assertQueue(S,{durable:!0,autoDelete:!1,arguments:{"x-queue-type":"quorum"}}),this.amqpChannel.bindQueue(S,_,t)})}};0&&(module.exports={RabbitmqController});
//# sourceMappingURL=rabbitmq.controller.js.map