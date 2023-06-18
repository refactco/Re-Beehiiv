(()=>{"use strict";var e={n:t=>{var i=t&&t.__esModule?()=>t.default:()=>t;return e.d(i,{a:i}),i},d:(t,i)=>{for(var a in i)e.o(i,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:i[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=window.wp.element,i=window.wp.components,a=e=>(0,t.createElement)("div",{className:"re-beehiiv-settings-header",key:"settings-header"},(0,t.createElement)("div",{className:"re-beehiiv-settings-header__logo"},"Re/Beehiiv"),(0,t.createElement)("div",{className:"re-beehiiv-settings-header__links"})),s=window.wp.apiFetch;var n=e.n(s);const r=window.wp.i18n,c=e=>{const[a,s]=(0,t.useState)(!1),[c,l]=(0,t.useState)(!1),[o,h]=(0,t.useState)(re_beehiiv_settings.api_key),[v,m]=(0,t.useState)(re_beehiiv_settings.publication_id),[b,d]=(0,t.useState)(re_beehiiv_settings.api_status),[u,_]=(0,t.useState)("");return console.log(re_beehiiv_settings),console.log(b),(0,t.createElement)(t.Fragment,null,(0,t.createElement)("div",{className:"re-beehiiv-heading"},(0,t.createElement)("h1",null,"Settings"),(0,t.createElement)("p",null,(0,r.__)("Connect your Beehiiv account to import your content to WordPress.","re-beehiiv"))),(0,t.createElement)("div",{className:"re-beehiiv-tabs"},(0,t.createElement)("nav",{className:"nav-tab-wrapper"},(0,t.createElement)("a",{className:"re-nav-tab re-nav-tab-active","data-tab":"re-beehiiv-credentials",href:"#"},(0,r.__)("Beehiiv Credentials","re-beehiiv")))),(0,t.createElement)("div",{className:"re-beehiiv-settings-tabs re-beehiiv-wrapper",key:"settings-tabs"},(0,t.createElement)("div",{className:"re-beehiiv-settings-tabs-menu",key:"settings-tabs"}),u&&(0,t.createElement)(i.Snackbar,{className:"re-beehiiv-snackbar re-beehiiv-snackbar-settings",explicitDismiss:!0,onDismiss:()=>_(""),status:"success"},u),(0,t.createElement)(i.PanelRow,{className:"mt-0"},(0,t.createElement)(i.__experimentalGrid,{columns:1,style:{width:"100%"}},(0,t.createElement)(i.__experimentalInputControl,{type:"password",help:(0,r.__)("The API key provided by Beehiiv.","re-beehiiv"),label:(0,r.__)("API Key","re-beehiiv"),onChange:e=>h(e),placeholder:(0,r.__)("Enter your API key","re-beehiiv"),value:o}),(0,t.createElement)(i.__experimentalInputControl,{type:"password",help:(0,r.__)("The unique publication ID associated with your Beehiiv account.","re-beehiiv"),label:(0,r.__)("Publication ID","re-beehiiv"),placeholder:(0,r.__)("Enter your publication ID","re-beehiiv"),onChange:e=>m(e),value:v}))),(0,t.createElement)("div",{className:"re-beehiiv-settings-tabs-contents-actions"},(0,t.createElement)(i.Button,{isPrimary:!0,style:{marginRight:"1em"},onClick:()=>(()=>{const e={apiKey:o,publicationId:v,status:"connected"};s(!0),n()({path:"/rebeehiiv/v1/save_settings",method:"POST",data:e}).then((e=>{console.log(e),e.success?(d("connected"),s(!1)):s(!1),_(e.message)})).catch((e=>{s(!1),console.log(e)}))})(),isBusy:a,disabled:"connected"==b,className:"re-beehiiv-settings-save"},(0,r.__)("Save","re-beehiiv")),b&&(0,t.createElement)(i.Button,{style:{marginRight:"1em"},isDestructive:!0,onClick:()=>{n()({path:"/rebeehiiv/v1/disconnect_api",method:"POST"}).then((e=>{e.success?(d(!1),h(""),m("")):l(!1),_(e.message)})).catch((e=>{l(!1),console.log(e)}))},className:"re-beehiiv-settings-disconnect"},(0,r.__)("Disconnect","re-beehiiv")),(0,t.createElement)("a",{href:"https://app.beehiiv.com/settings/integrations",target:"_blank"},(0,r.__)("Get your API key","re-beehiiv")))))};var l=document.getElementById("re-beehiiv-settings");l&&(0,t.render)((0,t.createElement)((e=>(0,t.createElement)("div",{className:"re-beehiiv-settings-wrap"},(0,t.createElement)(a,null),(0,t.createElement)(c,null))),{scope:"global"}),l)})();