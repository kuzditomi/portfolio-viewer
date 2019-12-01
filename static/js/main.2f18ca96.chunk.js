(this["webpackJsonpportfolio-viewer"]=this["webpackJsonpportfolio-viewer"]||[]).push([[0],{100:function(e,t,r){},103:function(e,t,r){"use strict";r.r(t);var n,a,o=r(0),i=r.n(o),c=r(8),l=r.n(c),u=(r(94),r(162)),s=r(134),p=r(137),f=r(42),m=function(){return i.a.createElement(s.a,{position:"absolute"},i.a.createElement(p.a,null,i.a.createElement(f.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0},"IBKR portfolio viewer")))},d=r(139),O=r(81),y=r(138),b=Object(O.a)({palette:{primary:y.a}}),E=function(e){var t=e.children;return i.a.createElement(d.a,{theme:b},t)},h=r(12),g=function(e){return e.portfolio.filteredPortfolio},v=function(e){if(e.portfolio.filteredPortfolio)return{TotalPL:-e.portfolio.filteredPortfolio.tradeGroups.reduce((function(e,t){return e+t.trades.reduce((function(e,t){return e+t.tradePrice}),0)}),0)}},j=function(e){return!!e.portfolio.chartData},P=function(e){return e.portfolio.chartData},w=r(107),D=r(105),T=r(147),S=r(104),x=r(158),k=r(140),R=r(141),I=r(142),L=r(143),C=r(66),F=r.n(C),A=r(47),_=r.n(A),N=Object(w.a)({win:{color:F.a[700]},loss:{color:_.a[700]}}),H=Object(D.a)(N)((function(e){var t=e.summary,r=e.classes;return void 0===t?null:i.a.createElement(i.a.Fragment,null,i.a.createElement(f.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0},"Summary"),i.a.createElement(k.a,null,i.a.createElement(R.a,null,i.a.createElement(I.a,null,i.a.createElement(L.a,null," Total P/L:"),i.a.createElement(L.a,{align:"right",className:t.TotalPL<0?r.loss:r.win},"$",(100*t.TotalPL).toFixed(2))))))})),G=Object(h.b)((function(e){return{summary:v(e)}}))(H),M=r(1),B=r(2),K=r(144),W=r(145),Y=function(e){var t=e.label,r=e.children;return i.a.createElement(K.a,{component:"fieldset"},i.a.createElement(W.a,{component:"legend"},t),r)},q=r(161),J=r(146),U=r(160),V=function(e){e.prefix;var t=e.options,r=e.selectedValue,n=e.onSelected,a=Object(B.a)(e,["prefix","options","selectedValue","onSelected"]);return i.a.createElement(Y,a,i.a.createElement(q.a,{"aria-label":"gender",name:"gender1",value:r,onChange:function(e){return n(+e.target.value)}},Object.keys(t).map((function(e){return i.a.createElement(J.a,{key:e,value:t[e],control:i.a.createElement(U.a,null),label:e})}))))};!function(e){e[e.All=1]="All",e[e.Expired=2]="Expired",e[e.Open=3]="Open"}(n||(n={})),function(e){e[e.All=1]="All",e[e.Closed=2]="Closed",e[e.Open=3]="Open"}(a||(a={}));var $,z=function(e){return e.filters.dateFilter},X=function(e){return e.filters.positionFilter};!function(e){e.DATE_FILTER_SELECTED="FILTERS/DATE_FILTER_SELECTED",e.POSITION_FILTER_SELECTED="FILTERS/POSITION_FILTER_SELECTED"}($||($={}));var Q,Z=r(37),ee=r(7);!function(e){e.HISTORY_LOADED="IMPORT/HISTORY_LOADED",e.REPORT_LOADED_FROM_HISTORY="IMPORT/REPORT_LOADED_FROM_HISTORY"}(Q||(Q={}));var te;!function(e){e[e.PORTFOLIO_FILTERED=0]="PORTFOLIO_FILTERED",e[e.OPEN_CHART=1]="OPEN_CHART",e[e.CLOSE_CHART=2]="CLOSE_CHART"}(te||(te={}));function re(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ne(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?re(r,!0).forEach((function(t){Object(ee.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):re(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ae={portfolio:void 0,filteredPortfolio:void 0,chartData:void 0};function oe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ie(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?oe(r,!0).forEach((function(t){Object(ee.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):oe(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ce={dateFilter:n.All,positionFilter:a.All};function le(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ue(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?le(r,!0).forEach((function(t){Object(ee.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):le(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var se={history:[]},pe=r(68),fe=Object(Z.combineReducers)({portfolio:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Q.REPORT_LOADED_FROM_HISTORY:return ne({},ae,{portfolio:t.payload,filteredPortfolio:t.payload});case te.PORTFOLIO_FILTERED:return ne({},e,{filteredPortfolio:t.payload});case te.OPEN_CHART:return ne({},e,{chartData:t.payload});case te.CLOSE_CHART:return ne({},e,{chartData:void 0});default:return e}},importHistory:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Q.HISTORY_LOADED:return ue({},e,{history:t.payload});default:return e}},filters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case $.DATE_FILTER_SELECTED:return ie({},e,{dateFilter:t.payload});case $.POSITION_FILTER_SELECTED:return ie({},e,{positionFilter:t.payload});case Q.REPORT_LOADED_FROM_HISTORY:return ce;default:return e}}}),me=Object(Z.createStore)(fe,Object(pe.composeWithDevTools)()),de=r(20),Oe=r(16),ye={isClosingCombinationWith:function(e){return function(t){return e.optionType===t.optionType&&e.strikePrice===t.strikePrice&&e.position===-1*t.position}}};function be(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var Ee=function(e){return e.trades.reduce((function(t,r){var n=e.trades.find(ye.isClosingCombinationWith(r));return n&&n.tradeDate>=r.tradeDate?t+-n.position*Math.abs(n.tradePrice)+-r.position*Math.abs(r.tradePrice):t}),0)},he={getPLForGroup:Ee,setPLForGroup:function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?be(r,!0).forEach((function(t){Object(ee.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):be(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e,{pl:Ee(e)})}};function ge(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ve(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ge(r,!0).forEach((function(t){Object(ee.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ge(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var je,Pe=function(e){return function(t){var r;t((r=e,{type:$.DATE_FILTER_SELECTED,payload:r})),Te(t)}},we=function(e){return function(t){var r;t((r=e,{type:$.POSITION_FILTER_SELECTED,payload:r})),Te(t)}},De=new(function(){function e(){Object(de.a)(this,e),this.filterByDate=function(e){return function(t){var r,a=(r={},Object(ee.a)(r,n.All,(function(){return!0})),Object(ee.a)(r,n.Expired,(function(e){return e.expiration<new Date})),Object(ee.a)(r,n.Open,(function(e){return e.expiration>new Date})),r);return ve({},t,{tradeGroups:t.tradeGroups.filter(a[e])})}},this.filterByPosition=function(e){return function(t){var r,n=(r={},Object(ee.a)(r,a.All,(function(e){return e})),Object(ee.a)(r,a.Closed,(function(e){var t=e.trades.filter((function(t){return e.trades.find(ye.isClosingCombinationWith(t))}));return ve({},e,{trades:t})})),Object(ee.a)(r,a.Open,(function(e){var t=e.trades.filter((function(t){return!e.trades.find(ye.isClosingCombinationWith(t))}));return ve({},e,{trades:t})})),r);return ve({},t,{tradeGroups:t.tradeGroups.map(n[e]).filter((function(e){return e.trades.length>0}))})}}}return Object(Oe.a)(e,[{key:"applyFilters",value:function(e,t){var r=[this.filterByDate(t.dateFilter),this.filterByPosition(t.positionFilter)].reduce((function(e,t){return t(e)}),e);return ve({},r,{tradeGroups:r.tradeGroups.map(he.setPLForGroup)})}}]),e}()),Te=function(e){var t=me.getState().portfolio.portfolio;if(t){var r,n=me.getState().filters,a=De.applyFilters(t,n);e((r=a,{type:te.PORTFOLIO_FILTERED,payload:r}))}},Se={All:n.All,Expired:n.Expired,Open:n.Open},xe=Object(h.b)((function(e){return{selectedValue:z(e)}}),(function(e){return{onSelected:function(t){Pe(t)(e)}}}))((function(e){var t=Object(M.a)({},e);return i.a.createElement(V,Object.assign({prefix:"date",label:"By Date",options:Se},t))})),ke={All:a.All,Closed:a.Closed,Open:a.Open},Re=Object(h.b)((function(e){return{selectedValue:X(e)}}),(function(e){return{onSelected:function(t){we(t)(e)}}}))((function(e){var t=Object(M.a)({},e);return i.a.createElement(V,Object.assign({prefix:"position",label:"By Position",options:ke},t))})),Ie=(r(100),function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(f.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0},"Filters"),i.a.createElement(T.a,{container:!0,spacing:2},i.a.createElement(T.a,{item:!0,xs:4},i.a.createElement(xe,null)),i.a.createElement(T.a,{item:!0,xs:4},i.a.createElement(Re,null))))}),Le=r(149),Ce=r(150),Fe=r(151),Ae=r(108),_e=r(152),Ne=r(69),He=r.n(Ne),Ge=r(70),Me=r.n(Ge),Be=r(148),Ke=Object(w.a)({delete:{"&:hover":{color:_.a[700]}},open:{"&:hover":{color:Be.a[700]}}}),We=Object(D.a)(Ke)((function(e){var t=e.history,r=e.importFromHistory,n=e.loadHistory,a=e.deleteFromHistory,c=e.classes;return Object(o.useEffect)((function(){n()}),[n]),i.a.createElement(T.a,null,i.a.createElement(f.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0},"Imported reports"),i.a.createElement(Le.a,{component:"nav","aria-label":"Main mailbox folders"},t.map((function(e){return i.a.createElement(Ce.a,{button:!0,onClick:function(){return r(e)},key:e},i.a.createElement(Fe.a,null,i.a.createElement(Ae.a,{title:"Open report",className:c.open},i.a.createElement(He.a,null))),i.a.createElement(_e.a,{primary:e}),i.a.createElement(Ae.a,{title:"Delete imported report",className:c.delete,onClick:function(t){a(e),t.stopPropagation()}},i.a.createElement(Me.a,null)))}))))})),Ye=r(56),qe=r.n(Ye),Je=r(71),Ue=function(){function e(){Object(de.a)(this,e)}return Object(Oe.a)(e,[{key:"getSavedHistory",value:function(){var e=localStorage.getItem("savedImports");return e?JSON.parse(e):{rawImports:{}}}},{key:"saveHistory",value:function(e){var t=JSON.stringify(e);localStorage.setItem("savedImports",t)}},{key:"GetRawImportKeys",value:function(){var e=this.getSavedHistory();return Object.keys(e.rawImports)}},{key:"GetRawImport",value:function(e){return this.getSavedHistory().rawImports[e]}},{key:"SaveRawImport",value:function(e){var t=this.getSavedHistory(),r=(new Date).getUTCMilliseconds().toString();t.rawImports[r]=e,this.saveHistory(t)}},{key:"DeleteReport",value:function(e){var t=this.getSavedHistory();if(!t.rawImports[e])throw Error("Key not found in saved history: ".concat(e));delete t.rawImports[e],this.saveHistory(t)}}]),e}(),Ve=r(72),$e=r(73),ze=r(82),Xe=function(){function e(){Object(de.a)(this,e),this.rawImport=""}return Object(Oe.a)(e,[{key:"Parse",value:function(e){var t,r,n=this;this.rawImport="";var a=new Promise((function(e,n){t=e,r=n}));console.debug("Parsing ".concat(e.name,"..."));var o=new FileReader;return o.onload=function(){console.debug("File loaded.");var e=o.result;n.rawImport=e;try{t(n.rawImport)}catch(a){n.rawImport="",r("Error while parsing...")}},o.readAsBinaryString(e),a}},{key:"getGroupsFromTrades",value:function(e){var t=e.reduce((function(e,t){var r=t.expiration,n=t.underlying,a="".concat(n," - ").concat(r.toLocaleDateString());return e[a]||(e[a]={underlying:n,expiration:r,trades:[],pl:0}),e[a].trades.push(t),e}),{});return Object.values(t).sort((function(e,t){return+e.expiration-+t.expiration})).map((function(e){return e.trades.sort((function(e,t){return+e.tradeDate-+t.tradeDate})),e})).map(he.setPLForGroup)}},{key:"ParseRawData",value:function(e){var t=this.ParseMyTrades(e);return{name:"ok",tradeGroups:this.getGroupsFromTrades(t)}}}]),e}();!function(e){e[e.Call=1]="Call",e[e.Put=2]="Put"}(je||(je={}));var Qe=function(e){function t(){return Object(de.a)(this,t),Object(Ve.a)(this,Object($e.a)(t).apply(this,arguments))}return Object(ze.a)(t,e),Object(Oe.a)(t,[{key:"ParseMyTrades",value:function(e){var t=(new DOMParser).parseFromString(e,"text/xml");return Array.from(t.getElementsByTagName("Trade")).map((function(e){var t=e.getAttribute("expiry"),r=e.getAttribute("tradeDate"),n=parseInt(e.getAttribute("quantity"));return{underlying:e.getAttribute("underlyingSymbol"),position:n,expiration:new Date(+t.substr(0,4),+t.substr(4,2)-1,+t.substr(6,2)),optionType:"P"===e.getAttribute("putCall")?je.Put:je.Call,strikePrice:+e.getAttribute("strike"),pl:0,tradePrice:(n<0?-1:1)*+e.getAttribute("tradePrice"),tradeDate:new Date(+r.substr(0,4),+r.substr(4,2)-1,+r.substr(6,2))}}))}}]),t}(Xe),Ze=new Ue,et=new Qe,tt=function(e){return function(t){var r=Ze.GetRawImport(e);return t(function(e){return{type:Q.REPORT_LOADED_FROM_HISTORY,payload:e}}(et.ParseRawData(r)))}},rt=function(){return function(e){return e(function(e){return{type:Q.HISTORY_LOADED,payload:e}}(Ze.GetRawImportKeys()))}},nt=function(e){return e.importHistory.history},at=Object(h.b)((function(e){return{history:nt(e)}}),(function(e){return{importFromHistory:function(t){tt(t)(e)},deleteFromHistory:function(t){var r;(r=t,function(e){return Ze.DeleteReport(r),rt()(e)})(e)},loadHistory:function(){return rt()(e)}}}))(We),ot=r(154),it=r(25),ct=r(153),lt=r(159),ut=r(4),st=Object(ut.a)((function(){return Object(ct.a)({input:{display:"none"}})}))((function(e){var t=e.upload,r=e.classes,n=Object(o.useState)(),a=Object(it.a)(n,2),c=a[0],l=a[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement("input",{className:r.input,id:"raised-button-file",type:"file",onChange:function(e){return l(e.target.files)}}),i.a.createElement(lt.a,{value:c&&c.length?c[0].name:void 0,placeholder:"No file chosen"}),i.a.createElement("label",{htmlFor:"raised-button-file"},i.a.createElement(ot.a,{component:"span"},"Select file")),c&&c.length?i.a.createElement(ot.a,{onClick:function(){c&&1===c.length?t(c[0]):alert("please provide a single file!")},color:"primary",variant:"contained"},"Import"):null)})),pt=function(e){var t=e.importFile,r=function(e){var r=new XMLHttpRequest;r.open("GET",e),r.responseType="blob",r.onload=function(){t(r.response)},r.send()};return i.a.createElement(i.a.Fragment,null,i.a.createElement(f.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0},"Import flex query"),i.a.createElement(T.a,{container:!0,spacing:1},i.a.createElement(T.a,{item:!0,xs:12},i.a.createElement(st,{upload:t})),i.a.createElement(T.a,{item:!0,xs:12},"If you have no flex queries exported yet:\xa0",i.a.createElement(ot.a,{onClick:function(){r("example.xml")},color:"primary",variant:"contained"},"Load example"),"\xa0or\xa0",i.a.createElement(ot.a,{onClick:function(){r("mock.xml")},color:"primary",variant:"contained"},"Load mock"))))},ft=Object(h.b)(null,(function(e){return{importFile:function(t){return function(e){return function(){var t=Object(Je.a)(qe.a.mark((function t(r){var n;return qe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,et.Parse(e);case 2:n=t.sent,Ze.SaveRawImport(n),rt()(r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t)(e)}}}))(pt),mt=["action","underlying","optionType","strikePrice","position","price","pl","tradeDate","expiration","remainingDays"],dt=r(155),Ot={action:"",underlying:"Underlying",strikePrice:"Strike Price",optionType:"Option Type",position:"Position",expiration:"Expiration",price:"Trade Price",pl:"Realized P/L",tradeDate:"Trade date",remainingDays:"Remaining days"},yt=function(){return i.a.createElement(dt.a,null,i.a.createElement(I.a,null,mt.map((function(e){return i.a.createElement(L.a,{key:e},Ot[e])}))))},bt=r(156),Et=r(53),ht=r(3),gt=Object(ct.a)({badge:{borderRadius:3,padding:"2px 5px",marginRight:5},win:{background:bt.a[700],color:"white"},loss:{background:Et.a[700],color:"white"}}),vt=Object(ut.a)(gt)((function(e){var t=e.price,r=e.classes;return i.a.createElement(L.a,null,i.a.createElement("span",{className:Object(ht.a)(r.badge,t>0?r.loss:r.win)},t<0?"C":"D"),i.a.createElement("span",null,t<0?(-1*t).toFixed(2):t.toFixed(2)))})),jt=function(e,t){return i.a.createElement(L.a,{className:e,key:e},t)},Pt={action:function(){return jt("action","")},underlying:function(e){return jt("underlying",e.underlying)},optionType:function(e){return jt("optionType",e.optionType===je.Call?"CALL":"PUT")},strikePrice:function(e){return jt("strikePrice",e.strikePrice.toFixed(1))},position:function(e){return jt("position",e.position.toString())},pl:function(){return jt("pl","")},tradeDate:function(e){return jt("tradeDate",e.tradeDate.toLocaleDateString())},expiration:function(e){return jt("expiration",e.expiration.toLocaleDateString())},price:function(e){return i.a.createElement(vt,{key:"price",price:e.tradePrice})},remainingDays:function(){return jt("remainingDays","")}},wt=function(e){var t=e.trade;return i.a.createElement(I.a,null,mt.map((function(e){return Pt[e](t)})))},Dt=r(76),Tt=r.n(Dt),St=r(77),xt=r.n(St),kt=r(52),Rt=Object(ct.a)({win:{background:bt.a[700],color:"white"},loss:{background:Et.a[700],color:"white"}}),It=Object(ut.a)(Rt)((function(e){var t=e.pl,r=e.classes;return i.a.createElement(L.a,{align:"right",className:t>0?r.win:t<0?r.loss:""},function(e){var t=100*e;return t<0?(-1*t).toFixed(2):t.toFixed(2)}(t)," $")}));function Lt(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var Ct=function(e,t){return i.a.createElement(L.a,{key:e,className:e},t)},Ft=function(e){return function(t){return Ct(e,"")}},At=Object(D.a)((function(e){return Object(w.a)({icon:{padding:0},expand:{transform:"rotate(0deg)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},groupRow:{background:kt.a[300]},chartIcon:{"&:hover":{color:bt.a[700]}}})}))((function(e){var t=e.tradeGroup,r=e.classes,n=e.showChart,a=Object(o.useState)(!1),c=Object(it.a)(a,2),l=c[0],u=c[1],s={action:function(e){return Ct("action",i.a.createElement(i.a.Fragment,null,i.a.createElement(Ae.a,{title:e.isOpen?"Collapse trades":"Show trades",onClick:function(){u(!l)},className:Object(ht.a)(r.icon,r.expand,Object(ee.a)({},r.expandOpen,e.isOpen))},i.a.createElement(Tt.a,null)),i.a.createElement(Ae.a,{title:"Draw on chart",className:Object(ht.a)(r.icon,r.chartIcon),onClick:function(){return n(e)}},i.a.createElement(xt.a,null))))},underlying:function(e){return Ct("underlying",e.underlying)},optionType:Ft("optionType"),strikePrice:Ft("strikePrice"),position:Ft("position"),price:function(e){return i.a.createElement(vt,{key:"price",price:e.trades.reduce((function(e,t){return e+t.tradePrice}),0)})},pl:function(e){return i.a.createElement(It,{key:"pl",pl:e.pl})},tradeDate:Ft("tradeDate"),expiration:function(e){return Ct("expiration",e.expiration.toLocaleDateString())},remainingDays:function(e){return Ct("remainingDays",function(e){var t=new Date,r=Math.floor((Number(e)-Number(t))/1e3/60/60/24);return r<0?"EXPIRED":r.toString()}(e.expiration))}},p=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Lt(r,!0).forEach((function(t){Object(ee.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Lt(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},t,{isOpen:l});return i.a.createElement(i.a.Fragment,null,i.a.createElement(I.a,{className:r.groupRow},mt.map((function(e){return s[e](p)}))),l?t.trades.map((function(e,t){return i.a.createElement(wt,{trade:e,key:t})})):null)})),_t=Object(h.b)(null,(function(e){return{showChart:function(t){var r;e((r=t,{type:te.OPEN_CHART,payload:r}))}}}))(At),Nt=function(e){var t=e.report;return i.a.createElement(k.a,{size:"small"},i.a.createElement(yt,null),i.a.createElement(R.a,null,t.tradeGroups.map((function(e,t){return i.a.createElement(_t,{tradeGroup:e,key:t})}))))},Ht=r(157),Gt=r(80),Mt=r.n(Gt),Bt=r(18),Kt=r(78);function Wt(e,t){var r=t.optionType===je.Call,n=t.strikePrice<e,a=Math.abs(t.tradePrice);return r&&!n||!r&&n?-t.position*a*100:t.position*(-1*a*100+100*(t.strikePrice-e)*(t.optionType===je.Call?-1:1))}var Yt={getGroupPLAtExpiry:function(e,t){return t.trades.reduce((function(t,r){return t+Wt(e,r)}),0)},getTradePLAtExpiry:Wt},qt=Object(w.a)({}),Jt=Object(D.a)(qt)((function(e){var t=e.chartData,r=e.showMainStrategyOnly,n=(e.classes,t.trades.length>1),a=function(e){return"".concat(e.underlying," ").concat(e.strikePrice)};return i.a.createElement(Kt.a,{width:"100%",height:"300px",chartType:"LineChart",data:[function(){var e=["x"];return r?e.push(t.trades[0].underlying):(e.push.apply(e,Object(Bt.a)(t.trades.map(a))),n&&e.push("Trade")),e}()].concat(Object(Bt.a)(function(){for(var e=function(){var e=0,r=0,n=t;if(n.trades.length>1){var a=n.trades.reduce((function(e,t){return e+t.strikePrice}),0)/n.trades.length,o=n.trades.map((function(e){return e.strikePrice})),i=Math.min.apply(Math,Object(Bt.a)(o)),c=Math.max.apply(Math,Object(Bt.a)(o));e=i-(a-i)/2,r=c+(c-a)/2}else{var l=Math.abs(100*n.trades[0].tradePrice);e=n.trades[0].strikePrice-2*l,r=n.trades[0].strikePrice+2*l}return[e,r]}(),a=Object(it.a)(e,2),o=a[0],i=a[1],c=[],l=function(e){var a=t.trades.map((function(t){return Yt.getTradePLAtExpiry(e,t)})),o=Yt.getGroupPLAtExpiry(e,t);r?c.push([e,o]):n?c.push([e].concat(Object(Bt.a)(a),[o])):c.push([e].concat(Object(Bt.a)(a)))},u=o;u<=i;u+=.1)l(u);return c}())),options:{hAxis:{title:"Underlying price"},vAxis:{title:"P/L"},series:function(){if(r)return{};var e=0;return t.trades.reduce((function(t,r){return t[e++]={lineDashStyle:[2,2]},t}),{})}()}})})),Ut=Object(w.a)({backIcon:{padding:5},controls:{margin:"0 auto",textAlign:"center"}}),Vt=Object(D.a)(Ut)((function(e){var t=e.chartData,r=e.closeChart,n=e.classes;if(!t)throw Error("No chart data to show");var a=Object(o.useState)(!0),c=Object(it.a)(a,2),l=c[0],u=c[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(f.a,{variant:"h6",component:"h2",color:"primary"},i.a.createElement(Ae.a,{className:n.backIcon,onClick:function(){r()}},i.a.createElement(Mt.a,null)),"Chart"),i.a.createElement("div",{className:n.controls},i.a.createElement(J.a,{control:i.a.createElement(Ht.a,{checked:l,onChange:function(e){return u(e.target.checked)},value:"checkedB",color:"primary"}),label:"Hide legs"})),i.a.createElement(Jt,{chartData:t,showMainStrategyOnly:l}))})),$t=Object(h.b)((function(e){return{chartData:P(e)}}),(function(e){return{closeChart:function(){e({type:te.CLOSE_CHART,payload:void 0})}}}))(Vt),zt=Object(w.a)({item:{flexShrink:0,width:"100%",transition:"height linear 0.2s, margin ease 0.3s",height:0},active:{marginLeft:0,height:"auto"},offsetLeft:{marginLeft:"-100%"},offsetRight:{marginLeft:"100%"}}),Xt=Object(D.a)(zt)((function(e){var t,r=e.children,n=e.offset,a=e.classes;return i.a.createElement("div",{className:Object(ht.a)(a.item,(t={},Object(ee.a)(t,a.active,0===n),Object(ee.a)(t,a.offsetLeft,n&&n<0),Object(ee.a)(t,a.offsetRight,n&&n>0),t))},r)})),Qt=Object(w.a)({container:{overflow:"hidden",display:"flex"}});function Zt(e,t){return[-1,1][e]}var er=Object(D.a)(Qt)((function(e){var t=e.children,r=e.activeKey,n=e.classes,a=i.a.Children.toArray(t);return a.forEach((function(e){if(!e.props.switcherKey)throw Error("No key defined in Switcher component child element")})),i.a.createElement("div",{className:n.container},i.a.Children.map(t,(function(e,t){return i.a.createElement(Xt,Object.assign({},e.props,{offset:e.props.switcherKey===r?0:Zt(t,a.length)}),e.props.children)})))})),tr=Object(D.a)((function(e){return Object(w.a)({root:{display:"flex"},appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"}})}))((function(e){var t=e.report,r=e.isChartOpen,n=e.classes;return i.a.createElement("main",{className:n.content},i.a.createElement("div",{className:n.appBarSpacer}),i.a.createElement(x.a,{maxWidth:"lg",className:n.container},i.a.createElement(T.a,{container:!0,spacing:3},i.a.createElement(T.a,{item:!0,xs:12,md:6},i.a.createElement(S.a,{className:n.paper},i.a.createElement(at,null))),i.a.createElement(T.a,{item:!0,xs:12,md:6},i.a.createElement(S.a,{className:n.paper},i.a.createElement(ft,null))),t?i.a.createElement(i.a.Fragment,null,i.a.createElement(T.a,{item:!0,xs:12},i.a.createElement(S.a,{className:n.paper},i.a.createElement(T.a,{container:!0,spacing:3},i.a.createElement(T.a,{item:!0,xs:12,md:4},i.a.createElement(G,null)),i.a.createElement(T.a,{item:!0,xs:12,md:4},i.a.createElement(Ie,null))))),i.a.createElement(T.a,{item:!0,xs:12},i.a.createElement(S.a,{className:n.paper},i.a.createElement(er,{activeKey:r?"chart":"table"},i.a.createElement(Xt,{switcherKey:"table"},i.a.createElement(Nt,{report:t})),i.a.createElement(Xt,{switcherKey:"chart"},r?i.a.createElement($t,null):null))))):null)))})),rr=Object(h.b)((function(e){return{report:g(e),isChartOpen:j(e)}}))(tr),nr=function(){return i.a.createElement(E,null,i.a.createElement(h.a,{store:me},i.a.createElement("div",{className:"app"},i.a.createElement(u.a,null),i.a.createElement(m,null),i.a.createElement(rr,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(nr,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},89:function(e,t,r){e.exports=r(103)},94:function(e,t,r){}},[[89,1,2]]]);
//# sourceMappingURL=main.2f18ca96.chunk.js.map