import A from"crypto";var S=new Uint8Array(256),l=S.length;function N(){return l>S.length-16&&(A.randomFillSync(S),l=0),S.slice(l,l+=16)}var i=[];for(let r=0;r<256;++r)i.push((r+256).toString(16).slice(1));function f(r,t=0){return i[r[t+0]]+i[r[t+1]]+i[r[t+2]]+i[r[t+3]]+"-"+i[r[t+4]]+i[r[t+5]]+"-"+i[r[t+6]]+i[r[t+7]]+"-"+i[r[t+8]]+i[r[t+9]]+"-"+i[r[t+10]]+i[r[t+11]]+i[r[t+12]]+i[r[t+13]]+i[r[t+14]]+i[r[t+15]]}import M from"crypto";var O={randomUUID:M.randomUUID};function I(r,t,n){if(O.randomUUID&&!t&&!r)return O.randomUUID();r=r||{};let m=r.random||(r.rng||N)();if(m[6]=m[6]&15|64,m[8]=m[8]&63|128,t){n=n||0;for(let y=0;y<16;++y)t[n+y]=m[y];return t}return f(m)}var e=I;var o=(...r)=>{let t={};return r.forEach(n=>t[n]={minLength:1,description:`The "${n}" cannot be empty`}),{if:{propertyNames:{enum:[...r]}},then:{properties:t}}},x={type:"string",description:"Invalid format"},Q={$id:e(),type:"object",properties:{numbers:{type:"array",minItems:1,uniqueItems:!0,items:{type:"string",description:'"numbers" must be an array of numeric strings'}}}},z={$id:e(),type:"object",properties:{readMessages:{type:"array",minItems:1,uniqueItems:!0,items:{properties:{id:{type:"string"},fromMe:{type:"boolean",enum:[!0,!1]},remoteJid:{type:"string"}},required:["id","fromMe","remoteJid"],...o("id","remoteJid")}}},required:["readMessages"]},Z={$id:e(),type:"object",properties:{chat:{type:"string"},lastMessage:{type:"object",properties:{key:{type:"object",properties:{id:{type:"string"},remoteJid:{type:"string"},fromMe:{type:"boolean",enum:[!0,!1]}},required:["id","fromMe","remoteJid"],...o("id","remoteJid")},messageTimestamp:{type:"integer",minLength:1}},required:["key"],...o("messageTimestamp")},archive:{type:"boolean",enum:[!0,!1]}},required:["archive"]},X={$id:e(),type:"object",properties:{chat:{type:"string"},lastMessage:{type:"object",properties:{key:{type:"object",properties:{id:{type:"string"},remoteJid:{type:"string"},fromMe:{type:"boolean",enum:[!0,!1]}},required:["id","fromMe","remoteJid"],...o("id","remoteJid")},messageTimestamp:{type:"integer",minLength:1}},required:["key"],...o("messageTimestamp")}},required:["lastMessage"]},ee={$id:e(),type:"object",properties:{id:{type:"string"},fromMe:{type:"boolean",enum:[!0,!1]},remoteJid:{type:"string"},participant:{type:"string"}},required:["id","fromMe","remoteJid"],...o("id","remoteJid","participant")},te={$id:e(),type:"object",properties:{number:{type:"string"},picture:{type:"string"}}},re={$id:e(),type:"object",properties:{number:{type:"string"},text:{type:"string"},key:{type:"object",properties:{id:{type:"string"},remoteJid:{type:"string"},fromMe:{type:"boolean",enum:[!0,!1]}},required:["id","fromMe","remoteJid"],...o("id","remoteJid")}},...o("number","text","key")},ne={$id:e(),type:"object",properties:{number:{...x},delay:{type:"number"},presence:{type:"string",enum:["unavailable","available","composing","recording","paused"]}},required:["number","presence","delay"]},ie={$id:e(),type:"object",properties:{number:{type:"string"},status:{type:"string",enum:["block","unblock"]}},required:["number","status"],...o("number","status")},oe={$id:e(),type:"object",properties:{where:{type:"object",properties:{_id:{type:"string",minLength:1},pushName:{type:"string",minLength:1},id:{type:"string",minLength:1}},...o("_id","id","pushName")}}},se={$id:e(),type:"object",properties:{where:{type:"object",properties:{_id:{type:"string",minLength:1},key:{type:"object",if:{propertyNames:{enum:["fromMe","remoteJid","id"]}},then:{properties:{remoteJid:{type:"string",minLength:1,description:"The property cannot be empty"},id:{type:"string",minLength:1,description:"The property cannot be empty"},fromMe:{type:"boolean",enum:[!0,!1]}}}},message:{type:"object"}},...o("_id")},limit:{type:"integer"}}},pe={$id:e(),type:"object",properties:{where:{type:"object",properties:{_id:{type:"string"},remoteJid:{type:"string"},id:{type:"string"},fromMe:{type:"boolean",enum:[!0,!1]},participant:{type:"string"},status:{type:"string",enum:["ERROR","PENDING","SERVER_ACK","DELIVERY_ACK","READ","PLAYED"]}},...o("_id","remoteJid","id","status")},limit:{type:"integer"}}},ae={$id:e(),type:"object",properties:{readreceipts:{type:"string",enum:["all","none"]},profile:{type:"string",enum:["all","contacts","contact_blacklist","none"]},status:{type:"string",enum:["all","contacts","contact_blacklist","none"]},online:{type:"string",enum:["all","match_last_seen"]},last:{type:"string",enum:["all","contacts","contact_blacklist","none"]},groupadd:{type:"string",enum:["all","contacts","contact_blacklist","none"]}},required:["readreceipts","profile","status","online","last","groupadd"],...o("readreceipts","profile","status","online","last","groupadd")},me={$id:e(),type:"object",properties:{name:{type:"string"}},...o("name")},ce={$id:e(),type:"object",properties:{status:{type:"string"}},...o("status")},ye={type:"object",properties:{wuid:{type:"string"},name:{type:"string"},picture:{type:"string"},status:{type:"string"},isBusiness:{type:"boolean"}}};var s=(...r)=>{let t={};return r.forEach(n=>t[n]={minLength:1,description:`The "${n}" cannot be empty`}),{if:{propertyNames:{enum:[...r]}},then:{properties:t}}},ue={$id:e(),type:"object",properties:{subject:{type:"string"},description:{type:"string"},profilePicture:{type:"string"},promoteParticipants:{type:"boolean",enum:[!0,!1]},participants:{type:"array",minItems:1,uniqueItems:!0,items:{type:"string",minLength:10,pattern:"\\d+",description:'"participants" must be an array of numeric strings'}}},required:["subject","participants"],...s("subject","description","profilePicture")},le={$id:e(),type:"object",properties:{groupJid:{type:"string",pattern:"^[\\d-]+@g.us$"}},required:["groupJid"],...s("groupJid")},Se={$id:e(),type:"object",properties:{getParticipants:{type:"string",enum:["true","false"]}},required:["getParticipants"],...s("getParticipants")},be={$id:e(),type:"object",properties:{groupJid:{type:"string"},description:{type:"string"},numbers:{type:"array",minItems:1,uniqueItems:!0,items:{type:"string",minLength:10,pattern:"\\d+",description:'"numbers" must be an array of numeric strings'}}},required:["groupJid","description","numbers"],...s("groupJid","description","numbers")},he={$id:e(),type:"object",properties:{inviteCode:{type:"string",pattern:"^[a-zA-Z0-9]{22}$"}},required:["inviteCode"],...s("inviteCode")},Te={$id:e(),type:"object",properties:{inviteCode:{type:"string",pattern:"^[a-zA-Z0-9]{22}$"}},required:["inviteCode"],...s("inviteCode")},Ee={$id:e(),type:"object",properties:{groupJid:{type:"string"},action:{type:"string",enum:["add","remove","promote","demote"]},participants:{type:"array",minItems:1,uniqueItems:!0,items:{type:"string",minLength:10,pattern:"\\d+",description:'"participants" must be an array of numeric strings'}}},required:["groupJid","action","participants"],...s("groupJid","action")},Ne={$id:e(),type:"object",properties:{groupJid:{type:"string"},action:{type:"string",enum:["announcement","not_announcement","locked","unlocked"]}},required:["groupJid","action"],...s("groupJid","action")},Oe={$id:e(),type:"object",properties:{groupJid:{type:"string"},expiration:{type:"number",enum:[0,86400,604800,7776e3]}},required:["groupJid","expiration"],...s("groupJid","expiration")},fe={$id:e(),type:"object",properties:{groupJid:{type:"string"},image:{type:"string"}},required:["groupJid","image"],...s("groupJid","image")},Je={$id:e(),type:"object",properties:{groupJid:{type:"string"},subject:{type:"string"}},required:["groupJid","subject"],...s("groupJid","subject")},Ae={$id:e(),type:"object",properties:{groupJid:{type:"string"},description:{type:"string"}},required:["groupJid","description"],...s("groupJid","description")};var J={WHATSAPP_BUSINESS:"WHATSAPP-BUSINESS",WHATSAPP_BAILEYS:"WHATSAPP-BAILEYS",EVOLUTION:"EVOLUTION"};var C=(...r)=>{let t={};return r.forEach(n=>t[n]={minLength:1,description:`The "${n}" cannot be empty`}),{if:{propertyNames:{enum:[...r]}},then:{properties:t}}},Pe={$id:e(),type:"object",properties:{instanceName:{type:"string"},token:{type:"string"},number:{type:"string",pattern:"^\\d+[\\.@\\w-]+"},businessId:{type:"string"},qrcode:{type:"boolean"},Integration:{type:"string",enum:Object.values(J)},rejectCall:{type:"boolean"},msgCall:{type:"string"},groupsIgnore:{type:"boolean"},alwaysOnline:{type:"boolean"},readMessages:{type:"boolean"},readStatus:{type:"boolean"},syncFullHistory:{type:"boolean"},wavoipToken:{type:"string"},proxyHost:{type:"string"},proxyPort:{type:"string"},proxyProtocol:{type:"string"},proxyUsername:{type:"string"},proxyPassword:{type:"string"},webhookUrl:{type:"string"},webhookByEvents:{type:"boolean"},webhookBase64:{type:"boolean"},webhookEvents:{type:"array",minItems:0,items:{type:"string",enum:["APPLICATION_STARTUP","QRCODE_UPDATED","MESSAGES_SET","MESSAGES_UPSERT","MESSAGES_EDITED","MESSAGES_UPDATE","MESSAGES_DELETE","SEND_MESSAGE","CONTACTS_SET","CONTACTS_UPSERT","CONTACTS_UPDATE","PRESENCE_UPDATE","CHATS_SET","CHATS_UPSERT","CHATS_UPDATE","CHATS_DELETE","GROUPS_UPSERT","GROUP_UPDATE","GROUP_PARTICIPANTS_UPDATE","CONNECTION_UPDATE","LABELS_EDIT","LABELS_ASSOCIATION","CALL","TYPEBOT_START","TYPEBOT_CHANGE_STATUS"]}},rabbitmqEnabled:{type:"boolean"},rabbitmqEvents:{type:"array",minItems:0,items:{type:"string",enum:["APPLICATION_STARTUP","QRCODE_UPDATED","MESSAGES_SET","MESSAGES_UPSERT","MESSAGES_EDITED","MESSAGES_UPDATE","MESSAGES_DELETE","SEND_MESSAGE","CONTACTS_SET","CONTACTS_UPSERT","CONTACTS_UPDATE","PRESENCE_UPDATE","CHATS_SET","CHATS_UPSERT","CHATS_UPDATE","CHATS_DELETE","GROUPS_UPSERT","GROUP_UPDATE","GROUP_PARTICIPANTS_UPDATE","CONNECTION_UPDATE","LABELS_EDIT","LABELS_ASSOCIATION","CALL","TYPEBOT_START","TYPEBOT_CHANGE_STATUS"]}},sqsEnabled:{type:"boolean"},sqsEvents:{type:"array",minItems:0,items:{type:"string",enum:["APPLICATION_STARTUP","QRCODE_UPDATED","MESSAGES_SET","MESSAGES_UPSERT","MESSAGES_EDITED","MESSAGES_UPDATE","MESSAGES_DELETE","SEND_MESSAGE","CONTACTS_SET","CONTACTS_UPSERT","CONTACTS_UPDATE","PRESENCE_UPDATE","CHATS_SET","CHATS_UPSERT","CHATS_UPDATE","CHATS_DELETE","GROUPS_UPSERT","GROUP_UPDATE","GROUP_PARTICIPANTS_UPDATE","CONNECTION_UPDATE","LABELS_EDIT","LABELS_ASSOCIATION","CALL","TYPEBOT_START","TYPEBOT_CHANGE_STATUS"]}},chatwootAccountId:{type:"string"},chatwootToken:{type:"string"},chatwootUrl:{type:"string"},chatwootSignMsg:{type:"boolean"},chatwootReopenConversation:{type:"boolean"},chatwootConversationPending:{type:"boolean"},chatwootImportContacts:{type:"boolean"},chatwootNameInbox:{type:"string"},chatwootMergeBrazilContacts:{type:"boolean"},chatwootImportMessages:{type:"boolean"},chatwootDaysLimitImportMessages:{type:"number"}},...C("instanceName")},_e={$id:e(),type:"object",properties:{presence:{type:"string",enum:["unavailable","available","composing","recording","paused"]}},required:["presence"]};var P=(...r)=>{let t={};return r.forEach(n=>t[n]={minLength:1,description:`The "${n}" cannot be empty`}),{if:{propertyNames:{enum:[...r]}},then:{properties:t}}},_={type:"string",description:"Invalid format"},ke={$id:e(),type:"object",properties:{number:{..._},labelId:{type:"string"},action:{type:"string",enum:["add","remove"]}},required:["number","labelId","action"],...P("number","labelId","action")};var g=(...r)=>{let t={};return r.forEach(n=>t[n]={minLength:1,description:`The "${n}" cannot be empty`}),{if:{propertyNames:{enum:[...r]}},then:{properties:t}}},p={type:"string",description:"Invalid format"},De={$id:e(),type:"object",properties:{number:{...p},name:{type:"string"},language:{type:"string"},components:{type:"array"},webhookUrl:{type:"string"}},required:["name","language"]},a={properties:{key:{type:"object",properties:{id:{type:"string"},remoteJid:{type:"string"},fromMe:{type:"boolean",enum:[!0,!1]}},required:["id"],...g("id")},message:{type:"object"}}},je={$id:e(),type:"object",properties:{number:{...p},isVideo:{type:"boolean",enum:[!0,!1]},callDuration:{type:"integer",minimum:1,maximum:15}},required:["number","callDuration"]},Le={$id:e(),type:"object",properties:{number:{...p},text:{type:"string"},linkPreview:{type:"boolean"},delay:{type:"integer",description:"Enter a value in milliseconds"},quoted:{...a},everyOne:{type:"boolean",enum:[!0,!1]},mentioned:{type:"array",minItems:1,uniqueItems:!0,items:{type:"string",pattern:"^\\d+",description:'"mentioned" must be an array of numeric strings'}}},required:["number","text"]},$e={$id:e(),type:"object",properties:{number:{...p},mediatype:{type:"string",enum:["image","document","video","audio"]},mimetype:{type:"string"},media:{type:"string"},fileName:{type:"string"},caption:{type:"string"},delay:{type:"integer",description:"Enter a value in milliseconds"},quoted:{...a},everyOne:{type:"boolean",enum:[!0,!1]},mentioned:{type:"array",minItems:1,uniqueItems:!0,items:{type:"string",pattern:"^\\d+",description:'"mentioned" must be an array of numeric strings'}}},required:["number","mediatype"]},Re={$id:e(),type:"object",properties:{number:{...p},video:{type:"string"},delay:{type:"integer",description:"Enter a value in milliseconds"},quoted:{...a},everyOne:{type:"boolean",enum:[!0,!1]},mentioned:{type:"array",minItems:1,uniqueItems:!0,items:{type:"string",pattern:"^\\d+",description:'"mentioned" must be an array of numeric strings'}}},required:["number"]},Fe={$id:e(),type:"object",properties:{number:{...p},audio:{type:"string"},delay:{type:"integer",description:"Enter a value in milliseconds"},quoted:{...a},everyOne:{type:"boolean",enum:[!0,!1]},mentioned:{type:"array",minItems:1,uniqueItems:!0,items:{type:"string",pattern:"^\\d+",description:'"mentioned" must be an array of numeric strings'}}},required:["number"]},Ge={$id:e(),type:"object",properties:{type:{type:"string",enum:["text","image","audio","video"]},content:{type:"string"},caption:{type:"string"},backgroundColor:{type:"string"},font:{type:"integer",minimum:0,maximum:5},statusJidList:{type:"array",minItems:1,uniqueItems:!0,items:{type:"string",pattern:"^\\d+",description:'"statusJidList" must be an array of numeric strings'}},allContacts:{type:"boolean",enum:[!0,!1]}},required:["type"]},Be={$id:e(),type:"object",properties:{number:{...p},sticker:{type:"string"},delay:{type:"integer",description:"Enter a value in milliseconds"},quoted:{...a},everyOne:{type:"boolean",enum:[!0,!1]},mentioned:{type:"array",minItems:1,uniqueItems:!0,items:{type:"string",pattern:"^\\d+",description:'"mentioned" must be an array of numeric strings'}}},required:["number"]},He={$id:e(),type:"object",properties:{number:{...p},latitude:{type:"number"},longitude:{type:"number"},name:{type:"string"},address:{type:"string"},delay:{type:"integer",description:"Enter a value in milliseconds"},quoted:{...a},everyOne:{type:"boolean",enum:[!0,!1]},mentioned:{type:"array",minItems:1,uniqueItems:!0,items:{type:"string",pattern:"^\\d+",description:'"mentioned" must be an array of numeric strings'}}},required:["number","latitude","longitude","name","address"]},We={$id:e(),type:"object",properties:{number:{...p},contact:{type:"array",items:{type:"object",properties:{fullName:{type:"string"},wuid:{type:"string",minLength:10,pattern:"\\d+",description:'"wuid" must be a numeric string'},phoneNumber:{type:"string",minLength:10},organization:{type:"string"},email:{type:"string"},url:{type:"string"}},required:["fullName","phoneNumber"],...g("fullName")},minItems:1,uniqueItems:!0}},required:["number","contact"]},Ve={$id:e(),type:"object",properties:{key:{type:"object",properties:{id:{type:"string"},remoteJid:{type:"string"},fromMe:{type:"boolean",enum:[!0,!1]}},required:["id","remoteJid","fromMe"],...g("id","remoteJid")},reaction:{type:"string"}},required:["key","reaction"]},Ye={$id:e(),type:"object",properties:{number:{...p},name:{type:"string"},selectableCount:{type:"integer",minimum:0,maximum:10},values:{type:"array",minItems:2,maxItems:10,uniqueItems:!0,items:{type:"string"}},delay:{type:"integer",description:"Enter a value in milliseconds"},quoted:{...a},everyOne:{type:"boolean",enum:[!0,!1]},mentioned:{type:"array",minItems:1,uniqueItems:!0,items:{type:"string",pattern:"^\\d+",description:'"mentioned" must be an array of numeric strings'}}},required:["number","name","selectableCount","values"]},Ke={$id:e(),type:"object",properties:{number:{...p},title:{type:"string"},description:{type:"string"},footerText:{type:"string"},buttonText:{type:"string"},sections:{type:"array",minItems:1,uniqueItems:!0,items:{type:"object",properties:{title:{type:"string"},rows:{type:"array",minItems:1,uniqueItems:!0,items:{type:"object",properties:{title:{type:"string"},description:{type:"string"},rowId:{type:"string"}},required:["title","rowId"],...g("title","description","rowId")}}},required:["title","rows"],...g("title")}},delay:{type:"integer",description:"Enter a value in milliseconds"},quoted:{...a},everyOne:{type:"boolean",enum:[!0,!1]},mentioned:{type:"array",minItems:1,uniqueItems:!0,items:{type:"string",pattern:"^\\d+",description:'"mentioned" must be an array of numeric strings'}}},required:["number","title","footerText","buttonText","sections"]},Qe={$id:e(),type:"object",properties:{number:{...p},thumbnailUrl:{type:"string"},title:{type:"string"},description:{type:"string"},footer:{type:"string"},buttons:{type:"array",items:{type:"object",properties:{type:{type:"string",enum:["reply","copy","url","call","pix"]},displayText:{type:"string"},id:{type:"string"},url:{type:"string"},phoneNumber:{type:"string"},currency:{type:"string"},name:{type:"string"},keyType:{type:"string",enum:["phone","email","cpf","cnpj","random"]},key:{type:"string"}},required:["type"],...g("id","url","phoneNumber")}},delay:{type:"integer",description:"Enter a value in milliseconds"},quoted:{...a},everyOne:{type:"boolean",enum:[!0,!1]},mentioned:{type:"array",minItems:1,uniqueItems:!0,items:{type:"string",pattern:"^\\d+",description:'"mentioned" must be an array of numeric strings'}}},required:["number"]};var U=(...r)=>{let t={};return r.forEach(n=>t[n]={minLength:1,description:`The "${n}" cannot be empty`}),{if:{propertyNames:{enum:[...r]}},then:{properties:t}}},Xe={$id:e(),type:"object",properties:{enabled:{type:"boolean",enum:[!0,!1]},host:{type:"string"},port:{type:"string"},protocol:{type:"string"},username:{type:"string"},password:{type:"string"}},required:["enabled","host","port","protocol"],...U("enabled","host","port","protocol")};var v=(...r)=>{let t={};return r.forEach(n=>t[n]={minLength:1,description:`The "${n}" cannot be empty`}),{if:{propertyNames:{enum:[...r]}},then:{properties:t}}},rt={$id:e(),type:"object",properties:{rejectCall:{type:"boolean"},msgCall:{type:"string"},groupsIgnore:{type:"boolean"},alwaysOnline:{type:"boolean"},readMessages:{type:"boolean"},readStatus:{type:"boolean"},syncFullHistory:{type:"boolean"},wavoipToken:{type:"string"}},required:["rejectCall","groupsIgnore","alwaysOnline","readMessages","readStatus","syncFullHistory"],...v("rejectCall","groupsIgnore","alwaysOnline","readMessages","readStatus","syncFullHistory")};var k=(...r)=>{let t={};return r.forEach(n=>t[n]={minLength:1,description:`The "${n}" cannot be empty`}),{if:{propertyNames:{enum:[...r]}},then:{properties:t}}},ot={$id:e(),type:"object",properties:{name:{type:"string"},category:{type:"string",enum:["AUTHENTICATION","MARKETING","UTILITY"]},allowCategoryChange:{type:"boolean"},language:{type:"string"},components:{type:"array"},webhookUrl:{type:"string"}},required:["name","category","language","components"],...k("name","category","language","components")};var q=(...r)=>{let t={};return r.forEach(n=>t[n]={minLength:1,description:`The "${n}" cannot be empty`}),{if:{propertyNames:{enum:[...r]}},then:{properties:t}}},at={$id:e(),type:"object",properties:{enabled:{type:"boolean",enum:[!0,!1]},accountId:{type:"string"},token:{type:"string"},url:{type:"string"},signMsg:{type:"boolean",enum:[!0,!1]},signDelimiter:{type:["string","null"]},nameInbox:{type:["string","null"]},reopenConversation:{type:"boolean",enum:[!0,!1]},conversationPending:{type:"boolean",enum:[!0,!1]},autoCreate:{type:"boolean",enum:[!0,!1]},importContacts:{type:"boolean",enum:[!0,!1]},mergeBrazilContacts:{type:"boolean",enum:[!0,!1]},importMessages:{type:"boolean",enum:[!0,!1]},daysLimitImportMessages:{type:"number"},ignoreJids:{type:"array",items:{type:"string"}}},required:["enabled","accountId","token","url","signMsg","reopenConversation","conversationPending"],...q("enabled","accountId","token","url","signMsg","reopenConversation","conversationPending")};var b=(...r)=>{let t={};return r.forEach(n=>t[n]={minLength:1,description:`The "${n}" cannot be empty`}),{if:{propertyNames:{enum:[...r]}},then:{properties:t}}},yt={$id:e(),type:"object",properties:{enabled:{type:"boolean"},description:{type:"string"},botType:{type:"string",enum:["chatBot","textGenerator","agent","workflow"]},apiUrl:{type:"string"},apiKey:{type:"string"},triggerType:{type:"string",enum:["all","keyword","none","advanced"]},triggerOperator:{type:"string",enum:["equals","contains","startsWith","endsWith","regex"]},triggerValue:{type:"string"},expire:{type:"integer"},keywordFinish:{type:"string"},delayMessage:{type:"integer"},unknownMessage:{type:"string"},listeningFromMe:{type:"boolean"},stopBotFromMe:{type:"boolean"},keepOpen:{type:"boolean"},debounceTime:{type:"integer"},ignoreJids:{type:"array",items:{type:"string"}},splitMessages:{type:"boolean"},timePerChar:{type:"integer"}},required:["enabled","botType","triggerType"],...b("enabled","botType","triggerType")},gt={$id:e(),type:"object",properties:{remoteJid:{type:"string"},status:{type:"string",enum:["opened","closed","paused","delete"]}},required:["remoteJid","status"],...b("remoteJid","status")},dt={$id:e(),type:"object",properties:{expire:{type:"integer"},keywordFinish:{type:"string"},delayMessage:{type:"integer"},unknownMessage:{type:"string"},listeningFromMe:{type:"boolean"},stopBotFromMe:{type:"boolean"},keepOpen:{type:"boolean"},debounceTime:{type:"integer"},ignoreJids:{type:"array",items:{type:"string"}},difyIdFallback:{type:"string"},splitMessages:{type:"boolean"},timePerChar:{type:"integer"}},required:["expire","keywordFinish","delayMessage","unknownMessage","listeningFromMe","stopBotFromMe","keepOpen","debounceTime","ignoreJids","splitMessages","timePerChar"],...b("expire","keywordFinish","delayMessage","unknownMessage","listeningFromMe","stopBotFromMe","keepOpen","debounceTime","ignoreJids","splitMessages","timePerChar")},ut={$id:e(),type:"object",properties:{remoteJid:{type:"string"},action:{type:"string",enum:["add","remove"]}},required:["remoteJid","action"],...b("remoteJid","action")};var h=(...r)=>{let t={};return r.forEach(n=>t[n]={minLength:1,description:`The "${n}" cannot be empty`}),{if:{propertyNames:{enum:[...r]}},then:{properties:t}}},bt={$id:e(),type:"object",properties:{enabled:{type:"boolean"},description:{type:"string"},apiUrl:{type:"string"},apiKey:{type:"string"},triggerType:{type:"string",enum:["all","keyword","none","advanced"]},triggerOperator:{type:"string",enum:["equals","contains","startsWith","endsWith","regex"]},triggerValue:{type:"string"},expire:{type:"integer"},keywordFinish:{type:"string"},delayMessage:{type:"integer"},unknownMessage:{type:"string"},listeningFromMe:{type:"boolean"},stopBotFromMe:{type:"boolean"},keepOpen:{type:"boolean"},debounceTime:{type:"integer"},ignoreJids:{type:"array",items:{type:"string"}},splitMessages:{type:"boolean"},timePerChar:{type:"integer"}},required:["enabled","apiUrl","triggerType"],...h("enabled","apiUrl","triggerType")},ht={$id:e(),type:"object",properties:{remoteJid:{type:"string"},status:{type:"string",enum:["opened","closed","paused","delete"]}},required:["remoteJid","status"],...h("remoteJid","status")},Tt={$id:e(),type:"object",properties:{expire:{type:"integer"},keywordFinish:{type:"string"},delayMessage:{type:"integer"},unknownMessage:{type:"string"},listeningFromMe:{type:"boolean"},stopBotFromMe:{type:"boolean"},keepOpen:{type:"boolean"},debounceTime:{type:"integer"},ignoreJids:{type:"array",items:{type:"string"}},botIdFallback:{type:"string"},splitMessages:{type:"boolean"},timePerChar:{type:"integer"}},required:["expire","keywordFinish","delayMessage","unknownMessage","listeningFromMe","stopBotFromMe","keepOpen","debounceTime","ignoreJids","splitMessages","timePerChar"],...h("expire","keywordFinish","delayMessage","unknownMessage","listeningFromMe","stopBotFromMe","keepOpen","debounceTime","ignoreJids","splitMessages","timePerChar")},Et={$id:e(),type:"object",properties:{remoteJid:{type:"string"},action:{type:"string",enum:["add","remove"]}},required:["remoteJid","action"],...h("remoteJid","action")};var T=(...r)=>{let t={};return r.forEach(n=>t[n]={minLength:1,description:`The "${n}" cannot be empty`}),{if:{propertyNames:{enum:[...r]}},then:{properties:t}}},ft={$id:e(),type:"object",properties:{enabled:{type:"boolean"},description:{type:"string"},apiUrl:{type:"string"},apiKey:{type:"string"},triggerType:{type:"string",enum:["all","keyword","none","advanced"]},triggerOperator:{type:"string",enum:["equals","contains","startsWith","endsWith","regex"]},triggerValue:{type:"string"},expire:{type:"integer"},keywordFinish:{type:"string"},delayMessage:{type:"integer"},unknownMessage:{type:"string"},listeningFromMe:{type:"boolean"},stopBotFromMe:{type:"boolean"},keepOpen:{type:"boolean"},debounceTime:{type:"integer"},ignoreJids:{type:"array",items:{type:"string"}}},required:["enabled","apiUrl","triggerType"],...T("enabled","apiUrl","triggerType")},Jt={$id:e(),type:"object",properties:{remoteJid:{type:"string"},status:{type:"string",enum:["opened","closed","paused","delete"]}},required:["remoteJid","status"],...T("remoteJid","status")},At={$id:e(),type:"object",properties:{expire:{type:"integer"},keywordFinish:{type:"string"},delayMessage:{type:"integer"},unknownMessage:{type:"string"},listeningFromMe:{type:"boolean"},stopBotFromMe:{type:"boolean"},keepOpen:{type:"boolean"},debounceTime:{type:"integer"},ignoreJids:{type:"array",items:{type:"string"}},botIdFallback:{type:"string"}},required:["expire","keywordFinish","delayMessage","unknownMessage","listeningFromMe","stopBotFromMe","keepOpen","debounceTime","ignoreJids"],...T("expire","keywordFinish","delayMessage","unknownMessage","listeningFromMe","stopBotFromMe","keepOpen","debounceTime","ignoreJids")},Mt={$id:e(),type:"object",properties:{remoteJid:{type:"string"},action:{type:"string",enum:["add","remove"]}},required:["remoteJid","action"],...T("remoteJid","action")};var d=(...r)=>{let t={};return r.forEach(n=>t[n]={minLength:1,description:`The "${n}" cannot be empty`}),{if:{propertyNames:{enum:[...r]}},then:{properties:t}}},Ct={$id:e(),type:"object",properties:{enabled:{type:"boolean"},description:{type:"string"},openaiCredsId:{type:"string"},botType:{type:"string",enum:["assistant","chatCompletion"]},assistantId:{type:"string"},functionUrl:{type:"string"},model:{type:"string"},systemMessages:{type:"array",items:{type:"string"}},assistantMessages:{type:"array",items:{type:"string"}},userMessages:{type:"array",items:{type:"string"}},maxTokens:{type:"integer"},triggerType:{type:"string",enum:["all","keyword","none","advanced"]},triggerOperator:{type:"string",enum:["equals","contains","startsWith","endsWith","regex"]},triggerValue:{type:"string"},expire:{type:"integer"},keywordFinish:{type:"string"},delayMessage:{type:"integer"},unknownMessage:{type:"string"},listeningFromMe:{type:"boolean"},stopBotFromMe:{type:"boolean"},keepOpen:{type:"boolean"},debounceTime:{type:"integer"},ignoreJids:{type:"array",items:{type:"string"}}},required:["enabled","openaiCredsId","botType","triggerType"],...d("enabled","openaiCredsId","botType","triggerType")},Pt={$id:e(),type:"object",properties:{name:{type:"string"},apiKey:{type:"string"}},required:["name","apiKey"],...d("name","apiKey")},_t={$id:e(),type:"object",properties:{remoteJid:{type:"string"},status:{type:"string",enum:["opened","closed","paused","delete"]}},required:["remoteJid","status"],...d("remoteJid","status")},Ut={$id:e(),type:"object",properties:{openaiCredsId:{type:"string"},expire:{type:"integer"},keywordFinish:{type:"string"},delayMessage:{type:"integer"},unknownMessage:{type:"string"},listeningFromMe:{type:"boolean"},stopBotFromMe:{type:"boolean"},keepOpen:{type:"boolean"},debounceTime:{type:"integer"},speechToText:{type:"boolean"},ignoreJids:{type:"array",items:{type:"string"}},openaiIdFallback:{type:"string"}},required:["openaiCredsId","expire","keywordFinish","delayMessage","unknownMessage","listeningFromMe","stopBotFromMe","keepOpen","debounceTime","ignoreJids"],...d("openaiCredsId","expire","keywordFinish","delayMessage","unknownMessage","listeningFromMe","stopBotFromMe","keepOpen","debounceTime","ignoreJids")},vt={$id:e(),type:"object",properties:{remoteJid:{type:"string"},action:{type:"string",enum:["add","remove"]}},required:["remoteJid","action"],...d("remoteJid","action")};var u=(...r)=>{let t={};return r.forEach(n=>t[n]={minLength:1,description:`The "${n}" cannot be empty`}),{if:{propertyNames:{enum:[...r]}},then:{properties:t}}},wt={$id:e(),type:"object",properties:{enabled:{type:"boolean"},description:{type:"string"},url:{type:"string"},typebot:{type:"string"},triggerType:{type:"string",enum:["all","keyword","none","advanced"]},triggerOperator:{type:"string",enum:["equals","contains","startsWith","endsWith","regex"]},triggerValue:{type:"string"},expire:{type:"integer"},keywordFinish:{type:"string"},delayMessage:{type:"integer"},unknownMessage:{type:"string"},listeningFromMe:{type:"boolean"},stopBotFromMe:{type:"boolean"},ignoreJids:{type:"array",items:{type:"string"}}},required:["enabled","url","typebot","triggerType"],...u("enabled","url","typebot","triggerType")},Dt={$id:e(),type:"object",properties:{remoteJid:{type:"string"},status:{type:"string",enum:["opened","closed","paused","delete"]}},required:["remoteJid","status"],...u("remoteJid","status")},jt={$id:e(),type:"object",properties:{remoteJid:{type:"string"},url:{type:"string"},typebot:{type:"string"}},required:["remoteJid","url","typebot"],...u("remoteJid","url","typebot")},Lt={$id:e(),type:"object",properties:{expire:{type:"integer"},keywordFinish:{type:"string"},delayMessage:{type:"integer"},unknownMessage:{type:"string"},listeningFromMe:{type:"boolean"},stopBotFromMe:{type:"boolean"},keepOpen:{type:"boolean"},debounceTime:{type:"integer"},typebotIdFallback:{type:"string"},ignoreJids:{type:"array",items:{type:"string"}}},required:["expire","keywordFinish","delayMessage","unknownMessage","listeningFromMe","stopBotFromMe"],...u("expire","keywordFinish","delayMessage","unknownMessage","listeningFromMe","stopBotFromMe")},$t={$id:e(),type:"object",properties:{remoteJid:{type:"string"},action:{type:"string",enum:["add","remove"]}},required:["remoteJid","action"],...u("remoteJid","action")};var E=class E{constructor(t,n,m,y){this.prisma=t,this.monitor=n,this.status=m,this.name=y}set prisma(t){this.prismaRepository=t}get prisma(){return this.prismaRepository}set monitor(t){this.waMonitor=t}get monitor(){return this.waMonitor}set name(t){this.integrationName=t}get name(){return this.integrationName}set status(t){this.integrationStatus=t}get status(){return this.integrationStatus}async set(t,n){if(this.status)return n[this.name]?.enabled?n[this.name].events.length===0&&(n[this.name].events=E.events):n[this.name].events=[],this.prisma[this.name].upsert({where:{instanceId:this.monitor.waInstances[t].instanceId},update:{enabled:n[this.name]?.enabled,events:n[this.name].events},create:{enabled:n[this.name]?.enabled,events:n[this.name].events,instanceId:this.monitor.waInstances[t].instanceId}})}async get(t){if(!this.status)return;if(this.monitor.waInstances[t]===void 0)return null;let n=await this.prisma[this.name].findUnique({where:{instanceId:this.monitor.waInstances[t].instanceId}});return n||null}};E.events=["APPLICATION_STARTUP","QRCODE_UPDATED","MESSAGES_SET","MESSAGES_UPSERT","MESSAGES_EDITED","MESSAGES_UPDATE","MESSAGES_DELETE","SEND_MESSAGE","CONTACTS_SET","CONTACTS_UPSERT","CONTACTS_UPDATE","PRESENCE_UPDATE","CHATS_SET","CHATS_UPSERT","CHATS_UPDATE","CHATS_DELETE","GROUPS_UPSERT","GROUP_UPDATE","GROUP_PARTICIPANTS_UPDATE","CONNECTION_UPDATE","LABELS_EDIT","LABELS_ASSOCIATION","CALL","TYPEBOT_START","TYPEBOT_CHANGE_STATUS","REMOVE_INSTANCE","LOGOUT_INSTANCE"];var c=E;var w=(...r)=>{let t={};return r.forEach(n=>t[n]={minLength:1,description:`The "${n}" cannot be empty`}),{if:{propertyNames:{enum:[...r]}},then:{properties:t}}},Zt={$id:e(),type:"object",properties:{pusher:{type:"object",properties:{enabled:{type:"boolean"},appId:{type:"string"},key:{type:"string"},secret:{type:"string"},cluster:{type:"string"},useTLS:{type:"boolean"},events:{type:"array",minItems:0,items:{type:"string",enum:c.events}}},required:["enabled","appId","key","secret","cluster","useTLS"],...w("enabled","appId","key","secret","cluster","useTLS")}},required:["pusher"]};var D=(...r)=>{let t={};return r.forEach(n=>t[n]={minLength:1,description:`The "${n}" cannot be empty`}),{if:{propertyNames:{enum:[...r]}},then:{properties:t}}},rr={$id:e(),type:"object",properties:{webhook:{type:"object",properties:{enabled:{type:"boolean"},url:{type:"string"},headers:{type:"object"},byEvents:{type:"boolean"},base64:{type:"boolean"},events:{type:"array",minItems:0,items:{type:"string",enum:c.events}}},required:["enabled","url"],...D("enabled","url")}},required:["webhook"]};var sr={$id:e(),type:"object",properties:{websocket:{$ref:"#/$defs/event"},rabbitmq:{$ref:"#/$defs/event"},sqs:{$ref:"#/$defs/event"}},$defs:{event:{type:"object",properties:{enabled:{type:"boolean",enum:[!0,!1]},events:{type:"array",minItems:0,items:{type:"string",enum:c.events}}},required:["enabled"]}}};export{Te as AcceptGroupInviteSchema,Z as archiveChatSchema,Fe as audioMessageSchema,ie as blockUserSchema,Qe as buttonsMessageSchema,at as chatwootSchema,We as contactMessageSchema,oe as contactValidateSchema,ue as createGroupSchema,ee as deleteMessageSchema,ut as difyIgnoreJidSchema,yt as difySchema,dt as difySettingSchema,gt as difyStatusSchema,sr as eventSchema,Et as evolutionBotIgnoreJidSchema,bt as evolutionBotSchema,Tt as evolutionBotSettingSchema,ht as evolutionBotStatusSchema,Mt as flowiseIgnoreJidSchema,ft as flowiseSchema,At as flowiseSettingSchema,Jt as flowiseStatusSchema,Se as getParticipantsSchema,he as groupInviteSchema,le as groupJidSchema,be as groupSendInviteSchema,ke as handleLabelSchema,Pe as instanceSchema,Ke as listMessageSchema,He as locationMessageSchema,X as markChatUnreadSchema,$e as mediaMessageSchema,pe as messageUpSchema,se as messageValidateSchema,je as offerCallSchema,Pt as openaiCredsSchema,vt as openaiIgnoreJidSchema,Ct as openaiSchema,Ut as openaiSettingSchema,_t as openaiStatusSchema,Ye as pollMessageSchema,_e as presenceOnlySchema,ne as presenceSchema,ae as privacySettingsSchema,me as profileNameSchema,te as profilePictureSchema,ye as profileSchema,ce as profileStatusSchema,Xe as proxySchema,Re as ptvMessageSchema,Zt as pusherSchema,Ve as reactionMessageSchema,z as readMessageSchema,rt as settingsSchema,Ge as statusMessageSchema,Be as stickerMessageSchema,De as templateMessageSchema,ot as templateSchema,Le as textMessageSchema,Oe as toggleEphemeralSchema,$t as typebotIgnoreJidSchema,wt as typebotSchema,Lt as typebotSettingSchema,jt as typebotStartSchema,Dt as typebotStatusSchema,Ae as updateGroupDescriptionSchema,fe as updateGroupPictureSchema,Je as updateGroupSubjectSchema,re as updateMessageSchema,Ee as updateParticipantsSchema,Ne as updateSettingsSchema,rr as webhookSchema,Q as whatsappNumberSchema};
//# sourceMappingURL=validate.schema.mjs.map