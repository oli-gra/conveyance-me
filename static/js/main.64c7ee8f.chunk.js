(this.webpackJsonpconveyanceme=this.webpackJsonpconveyanceme||[]).push([[0],{115:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a(0),c=a.n(r),o=a(23),s=a.n(o),i=a(18),l=a(20),d=a(85),u=a(150),j=a(163),b=a(161),m=a(21),h=a(36),p=a(35),g=a(135),O=a(136),f={global:{colors:{brand:{dark:"#d6bbc2"},"accent-1":"#f4cccc","neutral-1":"#d8b6b8","neutral-2":"#d6ae98","neutral-3":"#dd9c66","neutral-4":"#d3803b",background:{dark:"dark-1"}},font:{family:'-apple-system,\n         BlinkMacSystemFont, \n         "Segoe UI", \n         Roboto'},breakpoints:{small:{value:590},medium:{value:1500},large:{value:5e3}}},accordion:{icons:{collapse:g.a,expand:O.a}},card:{container:{round:null,elevation:null}},list:{item:{border:null}},anchor:{textDecoration:"none"}},x=a(158),y=a(164),v=a(149),k=a(168),S=a(148),w=a(151),T=a(152),C=a(86),E=a(140),_=a(141),D=a(142),R=a(137),A=a(139),F=a(162),z=function(e){var t=e.title,a=e.subTitle,r=e.children,c=e.footer,o=e.size;return Object(n.jsxs)(R.a,{onClick:function(){},width:o,children:[Object(n.jsxs)(A.a,{pad:"small",children:[Object(n.jsx)(m.a,{align:"center",pad:"small",children:Object(n.jsxs)(m.a,{children:[Object(n.jsx)(C.a,{size:"large",weight:"bold",children:t}),Object(n.jsx)(C.a,{children:a})]})}),Object(n.jsx)(m.a,{align:"center",pad:{right:"small"},children:r})]}),c?Object(n.jsx)(F.a,{pad:{horizontal:"medium",vertical:"small"},children:Object(n.jsx)(C.a,{size:"xsmall",children:c})}):null]},t)},P=a(84),I=function(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1],o=Object(r.useCallback)((function(e){c(e)}),[]),s=Object(P.a)({onDrop:o}),d=s.getRootProps,u=s.getInputProps,b=s.isDragActive;return Object(r.useEffect)((function(){return console.log(a),function(){}}),[a]),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(m.a,{pad:{top:"xlarge"}}),Object(n.jsx)(j.a,Object(l.a)(Object(l.a)({},d()),{},{gap:"small",columns:{count:"fit",size:"small"},justify:"center",children:0!==a.length?a.map((function(e,t){var a=e.name,r=e.size;return"application/pdf"===e.type?Object(n.jsx)(z,{title:a.replace(/\.[^.]+$/,""),subTitle:Math.round(r/1024)+"k",children:Object(n.jsx)(E.a,{}),footer:"",size:"small"},t):Object(n.jsxs)(m.a,{size:"xsmall",margin:{top:"large",left:"medium"},children:[Object(n.jsxs)(C.a,{size:"large",children:["#",t]}),Object(n.jsx)(C.a,{children:"You can only upload PDF"})]})})):Object(n.jsxs)(m.a,Object(l.a)(Object(l.a)({},d()),{},{align:"center",children:[Object(n.jsx)("input",Object(l.a)({},u())),b?Object(n.jsx)(m.a,{pad:"large",children:Object(n.jsx)(_.a,{size:"large"})}):Object(n.jsx)(z,{title:"Drag 'n' drop files here...",subTitle:"release when you see the target",children:Object(n.jsx)(D.a,{size:"large"}),footer:"",size:"large"})]}))}))]})},H=a(155),L=a(165),M=a(166),B=a(167),K=a(147),W=a(146),N=a(143),U=a(144),V=function(e){var t=e.list;return Object(n.jsx)(N.a,{data:t,children:function(e){return Object(n.jsxs)(m.a,{direction:"row",children:[Object(n.jsx)(m.a,{pad:{top:"xxsmall"},children:Object(n.jsx)(U.a,{size:"small"})}),Object(n.jsx)(m.a,{pad:{left:"small"},children:Object(n.jsx)(C.a,{children:e})})]})}})},G=[{property:"fee",header:Object(n.jsx)(C.a,{children:"Typical Fees"}),footer:"Total"},{property:"cost",header:"\xa3",primary:!0,aggregate:"sum",footer:{aggregate:!0}}],Y=[{header:"Conveyancer",body:"Choose a conveyancer when you're ready to make an offer and maybe get some Home Buyers\u2019 Protection Insurance",table:[{fee:"Anti-money laundering checks",cost:13},{fee:"Bankruptcy search",cost:4},{fee:"Bank transfer fees",cost:25},{fee:"Conveyancing",cost:1e3},{fee:"Gifted deposit",cost:75},{fee:"Help to Buy supplement",cost:250},{fee:"Lifetime/Help to Buy ISA",cost:60},{fee:"Local authority searches",cost:350},{fee:"Property fraud check",cost:10}],link:{label:"Conveyancers' Regulator",url:"https://www.clc-uk.org.uk/cms/cms.jsp?menu_id=19871"}},{header:"Offer",body:"Details are exchanged in the estate agent's Memorandum of Sale once the seller accepts your offer"},{header:"Contract",body:"Review seller's contract pack and make enquiries into:",list:["Property Information Form TA6","Fittings and Contents Form TA10","Title documents","Leasehold Information Form","Certificates and guarantes"],link:{label:"TA documents",url:"https://www.lawsociety.org.uk/topics/property/transaction-forms"}},{header:"Survey",body:"You or your lender may want a home survey: ",list:["HomeBuyer Report - survey of damage or future repairs like damp or subsidence","Building Survey - detailed inspection of property condition"],link:{label:"Types of survey",url:"https://www.rics.org/uk/upholding-professional-standards/sector-standards/building-surveying/home-surveys/"}},{header:"Search",body:"Conveyancer will carry out necessary searches: ",list:["Local Authority - controls on the building and surrounds","Environmental - polution and invasive species","Flood - drainage and any nearby water courses"],link:{label:"Local Authority search",url:"https://hoa.org.uk/advice/guides-for-homeowners/i-am-buying/local-authority-searches-explained/"}},{header:"Completion",body:"Conveyancers communicate to progress with contract exchange on your chosen date and send 10% deposit"},{header:"Exchange",body:"On the date agreed for completion:",list:["Agree statement of accounts","Sign Transfer of Title TR1 and mortgage deeds","Conveyancer does final Land Registry search","Send contract pack and funds to seller's conveyancer"],link:{label:"Transfer ownership TR1",url:"https://www.gov.uk/government/publications/registered-titles-whole-transfer-tr1"}},{header:"Government",body:"Conveyancer send TR1 to Land Registry and pay any Stamp Duty to HMRC",link:{label:"Gov Stamp Duty calculator",url:"https://www.tax.service.gov.uk/calculate-stamp-duty-land-tax/#/intro"}}],$=[{header:"Conveyancer",body:"Choose a conveyancer when your property is marketed so you don't delay the sale",table:[{fee:"Anti-money laundering checks",cost:13},{fee:"Conveyancing",cost:1e3},{fee:"Title deeds",cost:6},{fee:"Transferring of ownership",cost:250}],link:{label:"Conveyancers' Regulator",url:"https://www.clc-uk.org.uk/cms/cms.jsp?menu_id=19871"}},{header:"Offer",body:"Details are exchanged in the estate agent's Memorandum of Sale once you accept an offer"},{header:"Contract",body:"Your conveyancer will put together a contract pack and may require information from you to complete:",list:["Property Information Form TA6","Fittings and Contents Form TA10","Title documents","Leasehold Information Form","Certificates and guarantes"],link:{label:"TA documents",url:"https://www.lawsociety.org.uk/topics/property/transaction-forms"}},{header:"Survey",body:"You can get a survey done when you market the property to speed up the sale"},{header:"Completion",body:"Agree the completion date and your conveyancer will request 10% deposit from your buyer"},{header:"Exchange",body:"On the day",list:["Sign the contract pack","Make sure the property is clean","Give all door keys to your conveyancer","Send contract pack and funds to seller's conveyancer"],link:{label:"Transfer ownership TR1",url:"https://www.gov.uk/government/publications/registered-titles-whole-transfer-tr1"}}],q=function(){var e,t=Object(r.useState)(!0),a=Object(i.a)(t,2),c=a[0],o=a[1],s=function(e){return Object(n.jsx)(m.a,{gap:"medium",children:Object(n.jsx)(C.a,{children:e.body})})},l=function(e){return Object(n.jsx)(m.a,{align:"center",pad:"medium",children:Object(n.jsx)(H.a,{columns:G,data:e.table,resizeable:!0})})},d=function(e){return Object(n.jsxs)(m.a,{pad:{top:"small"},direction:"row",children:[Object(n.jsx)(W.a,{}),Object(n.jsx)(L.a,{href:e.link.url,target:"_blank",label:e.link.label,margin:{left:"xxsmall"}})]})};return Object(n.jsxs)(m.a,{pad:{vertical:"xlarge",horizontal:"large"},children:[Object(n.jsxs)(B.a,{margin:{top:"medium"},size:"small",children:["Your typical steps to ",c?"buy":"a sale"]}),Object(n.jsxs)(m.a,{pad:{bottom:"large"},children:[Object(n.jsxs)(C.a,{margin:{left:"xsmall"},children:["Conveyancing is an arcane and long process to transfer ownership but we can help your ",c?"purchase":"sale","."]}),Object(n.jsx)(m.a,{pad:"medium",align:"end",children:Object(n.jsx)(y.a,{label:c?"Buyer":"Seller",checked:c,onChange:function(e){return o(e.target.checked)},toggle:!0})})]}),Object(n.jsx)(K.a,{margin:{vertical:"medium"},children:(e=c?Y:$,e.map((function(e){return function(e){return Object(n.jsx)(M.a,{label:Object(n.jsx)(C.a,{margin:{left:"xsmall",vertical:"small"},size:"large",weight:0,children:e.header}),children:Object(n.jsxs)(m.a,{pad:{left:"xsmall",bottom:"medium"},children:[s(e),e.list?V(e):null,e.table?l(e):null,e.link?d(e):null]})},e.header)}(e)})))})]})},J=function(e){var t=e.darkMode,a=e.setMode,r=e.link,c=function(e){return a(e.target.checked)},o=[{label:Object(n.jsx)(x.a,{icon:Object(n.jsx)(S.a,{}),reverse:!0,plain:!0,label:"Docs",onClick:function(){return r(Object(n.jsx)(I,{}))}})},{label:Object(n.jsx)(y.a,{reverse:!0,label:"Dark",checked:t,onChange:c,toggle:!0})}];return Object(n.jsx)(v.a,{background:"brand",pad:"medium",height:"xsmall",children:Object(n.jsx)(u.a.Consumer,{children:function(e){return"small"!==e?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(x.a,{as:"span",icon:Object(n.jsx)(w.a,{}),label:"conveynce me",onClick:function(){return r(Object(n.jsx)(q,{}))}}),Object(n.jsx)(m.a,{justify:"start",children:Object(n.jsx)(x.a,{icon:Object(n.jsx)(S.a,{}),reverse:!0,plain:!0,onClick:function(){return r(Object(n.jsx)(I,{}))}})}),Object(n.jsx)(m.a,{justify:"end",children:Object(n.jsx)(y.a,{label:"dark",checked:t,onChange:c,toggle:!0})})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(x.a,{as:"span",icon:Object(n.jsx)(w.a,{}),onClick:function(){return r(Object(n.jsx)(q,{}))}}),Object(n.jsx)(k.a,{a11yTitle:"Navigation Menu",dropProps:{align:{top:"bottom",right:"right"}},icon:Object(n.jsx)(T.a,{color:"#1e1d23"}),items:o,dropBackground:"#1e1d23",size:"medium"})]})}})})},Q=a(160),X=a(170),Z=a(153),ee=a(154),te=a(171),ae=a(80),ne=a(81),re=a(45),ce=(a(100),a(116),a(117),{apiKey:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).APIKEY,authDomain:"conveyanceme.firebaseapp.com",databaseURL:"https://conveyanceme.firebaseio.com",projectId:"conveyanceme",storageBucket:"conveyanceme.appspot.com",messagingSenderId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).MEASUREMENTID,appId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).APPID,measurementId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).MESSAGINGSENDERID});0===re.a.apps.length&&re.a.initializeApp(ce);var oe=re.a.database().ref("/"),se=new(function(){function e(){Object(ae.a)(this,e)}return Object(ne.a)(e,[{key:"saveForm",value:function(e,t){return oe.push({stage:e,email:t}).catch((function(e){return console.log(e)}))}}]),e}()),ie=a(169),le=a(156),de=function(e){var t=e.data,a=Object(r.useState)(null),c=Object(i.a)(a,2),o=c[0],s=c[1],l=Object(r.useState)(null),d=Object(i.a)(l,2),u=d[0],j=d[1],b=[{value:46,onHover:function(){return j({l:"change their minds",v:46})}},{value:23,onHover:function(){return j({l:"fail to renegotiate",v:23})}},{value:12,onHover:function(){return j({l:"lending shortfall",v:12})}},{value:10,onHover:function(){return j({l:"survey nightmare",v:10})}},{value:8,onHover:function(){return j({l:"collapsed chain",v:8})}}];return Object(r.useEffect)((function(){switch(t){case"stats":s(b)}}),[]),Object(n.jsx)(m.a,{align:"center",pad:"medium",children:Object(n.jsxs)(ie.a,{anchor:"center",children:[Object(n.jsx)(le.a,{type:"circle",values:o,size:"small",thickness:"medium",round:!0}),Object(n.jsxs)(m.a,{align:"center",children:[Object(n.jsxs)(m.a,{direction:"row",align:"center",pad:{bottom:"xsmall"},children:[Object(n.jsx)(C.a,{size:"xxlarge",weight:"bold",children:u?u.v:38}),Object(n.jsx)(C.a,{children:"%"})]}),Object(n.jsx)(C.a,{children:u?u.l:"sales fail"})]})]})})},ue=function(){var e=Object(r.useState)({}),t=Object(i.a)(e,2),a=t[0],c=t[1],o=Object(r.useState)(!1),s=Object(i.a)(o,2),l=s[0],d=s[1],b=Object(r.useState)([{isVisible:!0,name:"stage",theme:Object(p.deepMerge)(h.grommet,{formField:{border:{position:"none"}}})},{isVisible:!1,name:"email",theme:Object(p.deepMerge)(h.grommet,{formField:{border:{position:"inner",side:"bottom"}}})}]),g=Object(i.a)(b,2),O=g[0],f=g[1],y=[{regexp:/^[\w\-_.]+$/,placeholder:"email"},{fixed:"@"},{regexp:/^[\w]+$/,placeholder:"address"},{fixed:"."},{regexp:/^[\w]+$/,placeholder:"com"}],v=["searching","made an offer","conveyancing","exchanged"],k=function(e){var t=e.value,a=t.stage,n=t.email,r=O.filter((function(e){return e.name!==Object.keys(t)[0]}));return O.length>1?(r[0].isVisible=!0,f(r)):(d(!0),se.saveForm(a,n))},S=function(e){switch(e){case"stage":return Object(n.jsx)(Q.a,{name:e,options:v});case"email":return Object(n.jsx)(X.a,{name:e,mask:y});default:return null}},w=Object(r.useContext)(u.a);return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(m.a,{pad:{top:"xlarge"}}),Object(n.jsxs)(j.a,{gap:"small",columns:"small"===w?{count:"fit",size:"small"}:{count:"fill",size:"full"},justify:"center",responsive:!0,children:[Object(n.jsx)(z,{title:"Selling property has pitfalls",subTitle:"",children:Object(n.jsx)(de,{data:"stats"}),footer:"",size:"medium"}),Object(n.jsx)(z,{title:"Don't be 1 of the 38%",subTitle:"Our app gives you better...",children:Object(n.jsx)(V,{list:["document sharing","progress tracking","secure messaging"]}),footer:"",size:"medium"}),Object(n.jsx)(z,{title:"What stage are you at?",subTitle:"",children:l?Object(n.jsx)(de,{data:"stats"}):Object(n.jsxs)(Z.a,{value:a,onChange:function(e){return c(e)},onSubmit:k,children:[O.map((function(e,t){return e.isVisible?Object(n.jsx)(ee.a.Extend,{value:e.theme,children:Object(n.jsx)(te.a,{name:e.name,children:S(e.name)})},t):null})),Object(n.jsx)(m.a,{direction:"row",margin:{top:"medium"},children:Object(n.jsx)(x.a,{type:"submit",label:"Submit",primary:!0})})]}),footer:"",size:"medium"})]})]})},je=function(){return Object(n.jsx)(n.Fragment,{})},be=Object(p.deepMerge)(h.grommet,f),me={small:["auto"],medium:["2/3","1/3"],large:["2/3","1/3"]},he={small:[["header"],["main"],["side"],["footer"]],medium:[["header","header"],["main","side"],["footer","footer"]],large:[["header","header"],["main","side"],["footer","footer"]]},pe=function(e){var t=e.children,a=(e.overrideColumns,e.overrideRows,e.areas),r=Object(d.a)(e,["children","overrideColumns","overrideRows","areas"]);return Object(n.jsx)(u.a.Consumer,{children:function(e){var c=me;me&&me[e]&&(c=me[e]);var o=a;return a&&!Array.isArray(a)&&(o=a[e]),Object(n.jsx)(j.a,Object(l.a)(Object(l.a)({},r),{},{areas:o||void 0,columns:c||e,children:t}))}})},ge=function(){var e=Object(r.useState)(!0),t=Object(i.a)(e,2),a=t[0],c=t[1],o=Object(r.useState)(Object(n.jsx)(q,{})),s=Object(i.a)(o,2),l=s[0],d=s[1];return Object(n.jsx)(b.a,{full:!0,theme:be,themeMode:a?"dark":"light",children:Object(n.jsxs)(pe,{columns:me,gap:"xsmall",areas:he,children:[Object(n.jsx)(m.a,{background:"brand",gridArea:"header",children:Object(n.jsx)(J,{darkMode:a,setMode:c,link:d})}),Object(n.jsx)(m.a,{gridArea:"main",children:l}),Object(n.jsx)(m.a,{gridArea:"side",children:Object(n.jsx)(ue,{})}),Object(n.jsx)(m.a,{gridArea:"footer",children:Object(n.jsx)(je,{})})]})})},Oe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,172)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),c(e),o(e)}))},fe=a(83);s.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(fe.a,{children:Object(n.jsx)(ge,{})})}),document.getElementById("root")),Oe()}},[[115,1,2]]]);
//# sourceMappingURL=main.64c7ee8f.chunk.js.map