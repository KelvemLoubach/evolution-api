import{io as p}from"socket.io-client";var a="close",d=async(l,s,f,o)=>{a=f??"close";let t=p("https://devices.wavoip.com/baileys",{transports:["websocket"],path:`/${l}/websocket`});return t.on("connect",()=>{o&&console.log("[*] - Wavoip connected",t.id),t.emit("init",s.authState.creds.me,s.authState.creds.account,a)}),t.on("disconnect",()=>{o&&console.log("[*] - Wavoip disconnect")}),t.on("connect_error",e=>{t.active?o&&console.log("[*] - Wavoip connection error temporary failure, the socket will automatically try to reconnect",e):o&&console.log("[*] - Wavoip connection error",e.message)}),t.on("onWhatsApp",async(e,n)=>{try{let r=await s.onWhatsApp(e);n(r),o&&console.log("[*] Success on call onWhatsApp function",r,e)}catch(r){o&&console.error("[*] Error on call onWhatsApp function",r)}}),t.on("profilePictureUrl",async(e,n,r,i)=>{try{let c=await s.profilePictureUrl(e,n,r);i(c),o&&console.log("[*] Success on call profilePictureUrl function",c)}catch(c){o&&console.error("[*] Error on call profilePictureUrl function",c)}}),t.on("assertSessions",async(e,n,r)=>{try{let i=await s.assertSessions(e,n);r(i),o&&console.log("[*] Success on call assertSessions function",i)}catch(i){o&&console.error("[*] Error on call assertSessions function",i)}}),t.on("createParticipantNodes",async(e,n,r,i)=>{try{let c=await s.createParticipantNodes(e,n,r);i(c,!0),o&&console.log("[*] Success on call createParticipantNodes function",c)}catch(c){o&&console.error("[*] Error on call createParticipantNodes function",c)}}),t.on("getUSyncDevices",async(e,n,r,i)=>{try{let c=await s.getUSyncDevices(e,n,r);i(c),o&&console.log("[*] Success on call getUSyncDevices function",c)}catch(c){o&&console.error("[*] Error on call getUSyncDevices function",c)}}),t.on("generateMessageTag",async e=>{try{let n=await s.generateMessageTag();e(n),o&&console.log("[*] Success on call generateMessageTag function",n)}catch(n){o&&console.error("[*] Error on call generateMessageTag function",n)}}),t.on("sendNode",async(e,n)=>{try{console.log("sendNode",JSON.stringify(e));let r=await s.sendNode(e);n(!0),o&&console.log("[*] Success on call sendNode function",r)}catch(r){o&&console.error("[*] Error on call sendNode function",r)}}),t.on("signalRepository:decryptMessage",async(e,n,r,i)=>{try{let c=await s.signalRepository.decryptMessage({jid:e,type:n,ciphertext:r});i(c),o&&console.log("[*] Success on call signalRepository:decryptMessage function",c)}catch(c){o&&console.error("[*] Error on call signalRepository:decryptMessage function",c)}}),s.ev.on("connection.update",e=>{let{connection:n}=e;n&&(a=n,t.timeout(1e3).emit("connection.update:status",s.authState.creds.me,s.authState.creds.account,n)),e.qr&&t.timeout(1e3).emit("connection.update:qr",e.qr)}),s.ws.on("CB:call",e=>{o&&console.log("[*] Signling received"),t.volatile.timeout(1e3).emit("CB:call",e)}),s.ws.on("CB:ack,class:call",e=>{o&&console.log("[*] Signling ack received"),t.volatile.timeout(1e3).emit("CB:ack,class:call",e)}),t};export{d as useVoiceCallsBaileys};
//# sourceMappingURL=useVoiceCallsBaileys.mjs.map