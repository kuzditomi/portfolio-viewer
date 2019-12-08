(this["webpackJsonpportfolio-viewer"]=this["webpackJsonpportfolio-viewer"]||[]).push([[0],{104:function(e,t,r){"use strict";r.r(t);var n,a,o=r(0),i=r.n(o),c=r(10),l=r.n(c),u=(r(96),r(170)),s=r(137),p=r(140),f=r(43),m=function(){return i.a.createElement(s.a,{position:"absolute"},i.a.createElement(p.a,null,i.a.createElement(f.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0},"IBKR portfolio viewer")))},d=r(142),O=r(82),y=r(141),E=Object(O.a)({palette:{primary:y.a}}),b=function(e){var t=e.children;return i.a.createElement(d.a,{theme:E},t)},h=r(12),g=function(e){return e.portfolio.filteredPortfolio},v=function(e){if(e.portfolio.filteredPortfolio)return{TotalPL:-e.portfolio.filteredPortfolio.tradeGroups.reduce((function(e,t){return e+t.trades.reduce((function(e,t){return e+t.tradePrice}),0)}),0)}},j=function(e){return!!e.portfolio.chartData},P=function(e){return e.portfolio.chartData},w=r(108),D=r(106),T=r(150),S=r(105),x=r(163),C=r(143),k=r(144),L=r(145),R=r(146),I=r(67),F=r.n(I),A=r(48),_=r.n(A),N=Object(w.a)({win:{color:F.a[700]},loss:{color:_.a[700]}}),H=Object(D.a)(N)((function(e){var t=e.summary,r=e.classes;return void 0===t?null:i.a.createElement(i.a.Fragment,null,i.a.createElement(f.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0},"Summary"),i.a.createElement(C.a,null,i.a.createElement(k.a,null,i.a.createElement(L.a,null,i.a.createElement(R.a,null," Total P/L:"),i.a.createElement(R.a,{align:"right",className:t.TotalPL<0?r.loss:r.win},"$",(100*t.TotalPL).toFixed(2))))))})),M=Object(h.b)((function(e){return{summary:v(e)}}))(H),G=r(1),B=r(2),K=r(147),W=r(148),Y=function(e){var t=e.label,r=e.children;return i.a.createElement(K.a,{component:"fieldset"},i.a.createElement(W.a,{component:"legend"},t),r)},U=r(169),V=r(149),q=r(166),J=function(e){e.prefix;var t=e.options,r=e.selectedValue,n=e.onSelected,a=Object(B.a)(e,["prefix","options","selectedValue","onSelected"]);return i.a.createElement(Y,a,i.a.createElement(U.a,{"aria-label":"gender",name:"gender1",value:r,onChange:function(e){return n(+e.target.value)}},Object.keys(t).map((function(e){return i.a.createElement(V.a,{key:e,value:t[e],control:i.a.createElement(q.a,null),label:e})}))))};!function(e){e[e.All=1]="All",e[e.Expired=2]="Expired",e[e.Open=3]="Open"}(n||(n={})),function(e){e[e.All=1]="All",e[e.Closed=2]="Closed",e[e.Open=3]="Open"}(a||(a={}));var $,z=function(e){return e.filters.dateFilter},X=function(e){return e.filters.positionFilter};!function(e){e.DATE_FILTER_SELECTED="FILTERS/DATE_FILTER_SELECTED",e.POSITION_FILTER_SELECTED="FILTERS/POSITION_FILTER_SELECTED"}($||($={}));var Q,Z=r(38),ee=r(7);!function(e){e.HISTORY_LOADED="IMPORT/HISTORY_LOADED",e.REPORT_LOADED_FROM_HISTORY="IMPORT/REPORT_LOADED_FROM_HISTORY"}(Q||(Q={}));var te;!function(e){e[e.PORTFOLIO_FILTERED=0]="PORTFOLIO_FILTERED",e[e.OPEN_CHART=1]="OPEN_CHART",e[e.CLOSE_CHART=2]="CLOSE_CHART"}(te||(te={}));function re(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ne(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?re(r,!0).forEach((function(t){Object(ee.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):re(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ae={portfolio:void 0,filteredPortfolio:void 0,chartData:void 0};function oe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ie(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?oe(r,!0).forEach((function(t){Object(ee.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):oe(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ce={dateFilter:n.All,positionFilter:a.All};function le(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ue(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?le(r,!0).forEach((function(t){Object(ee.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):le(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var se,pe={history:[]};!function(e){e.COLUMNS_SELECTED="COLUMNS/SELECTED"}(se||(se={}));var fe=["action","underlying","optionType","strikePrice","position","price","pl","tradeDate","expiration","remainingDays"],me={action:"",underlying:"Underlying",strikePrice:"Strike Price",optionType:"Option Type",position:"Position",expiration:"Expiration",price:"Trade Price",pl:"Realized P/L",tradeDate:"Trade date",remainingDays:"Remaining days"},de={selectedColumns:fe.slice()},Oe=r(69),ye=Object(Z.combineReducers)({portfolio:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Q.REPORT_LOADED_FROM_HISTORY:return ne({},ae,{portfolio:t.payload,filteredPortfolio:t.payload});case te.PORTFOLIO_FILTERED:return ne({},e,{filteredPortfolio:t.payload});case te.OPEN_CHART:return ne({},e,{chartData:t.payload});case te.CLOSE_CHART:return ne({},e,{chartData:void 0});default:return e}},importHistory:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Q.HISTORY_LOADED:return ue({},e,{history:t.payload});default:return e}},filters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case $.DATE_FILTER_SELECTED:return ie({},e,{dateFilter:t.payload});case $.POSITION_FILTER_SELECTED:return ie({},e,{positionFilter:t.payload});case Q.REPORT_LOADED_FROM_HISTORY:return ce;default:return e}},columns:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case se.COLUMNS_SELECTED:return{selectedColumns:t.payload};default:return e}}}),Ee=Object(Z.createStore)(ye,Object(Oe.composeWithDevTools)()),be=r(21),he=r(16),ge={isClosingCombinationWith:function(e){return function(t){return e.optionType===t.optionType&&e.strikePrice===t.strikePrice&&e.position===-1*t.position}}};function ve(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var je=function(e){return e.trades.reduce((function(t,r){var n=e.trades.find(ge.isClosingCombinationWith(r));return n&&n.tradeDate>=r.tradeDate?t+-n.position*Math.abs(n.tradePrice)+-r.position*Math.abs(r.tradePrice):t}),0)},Pe={getPLForGroup:je,setPLForGroup:function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ve(r,!0).forEach((function(t){Object(ee.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ve(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e,{pl:je(e)})}};function we(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function De(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?we(r,!0).forEach((function(t){Object(ee.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):we(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Te,Se=function(e){return function(t){var r;t((r=e,{type:$.DATE_FILTER_SELECTED,payload:r})),ke(t)}},xe=function(e){return function(t){var r;t((r=e,{type:$.POSITION_FILTER_SELECTED,payload:r})),ke(t)}},Ce=new(function(){function e(){Object(be.a)(this,e),this.filterByDate=function(e){return function(t){var r,a=(r={},Object(ee.a)(r,n.All,(function(){return!0})),Object(ee.a)(r,n.Expired,(function(e){return e.expiration<new Date})),Object(ee.a)(r,n.Open,(function(e){return e.expiration>new Date})),r);return De({},t,{tradeGroups:t.tradeGroups.filter(a[e])})}},this.filterByPosition=function(e){return function(t){var r,n=(r={},Object(ee.a)(r,a.All,(function(e){return e})),Object(ee.a)(r,a.Closed,(function(e){var t=e.trades.filter((function(t){return e.trades.find(ge.isClosingCombinationWith(t))}));return De({},e,{trades:t})})),Object(ee.a)(r,a.Open,(function(e){var t=e.trades.filter((function(t){return!e.trades.find(ge.isClosingCombinationWith(t))}));return De({},e,{trades:t})})),r);return De({},t,{tradeGroups:t.tradeGroups.map(n[e]).filter((function(e){return e.trades.length>0}))})}}}return Object(he.a)(e,[{key:"applyFilters",value:function(e,t){var r=[this.filterByDate(t.dateFilter),this.filterByPosition(t.positionFilter)].reduce((function(e,t){return t(e)}),e);return De({},r,{tradeGroups:r.tradeGroups.map(Pe.setPLForGroup)})}}]),e}()),ke=function(e){var t=Ee.getState().portfolio.portfolio;if(t){var r,n=Ee.getState().filters,a=Ce.applyFilters(t,n);e((r=a,{type:te.PORTFOLIO_FILTERED,payload:r}))}},Le={All:n.All,Expired:n.Expired,Open:n.Open},Re=Object(h.b)((function(e){return{selectedValue:z(e)}}),(function(e){return{onSelected:function(t){Se(t)(e)}}}))((function(e){var t=Object(G.a)({},e);return i.a.createElement(J,Object.assign({prefix:"date",label:"By Date",options:Le},t))})),Ie={All:a.All,Closed:a.Closed,Open:a.Open},Fe=Object(h.b)((function(e){return{selectedValue:X(e)}}),(function(e){return{onSelected:function(t){xe(t)(e)}}}))((function(e){var t=Object(G.a)({},e);return i.a.createElement(J,Object.assign({prefix:"position",label:"By Position",options:Ie},t))})),Ae=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(f.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0},"Filters"),i.a.createElement(T.a,{container:!0,spacing:2},i.a.createElement(T.a,{item:!0,xs:4},i.a.createElement(Re,null)),i.a.createElement(T.a,{item:!0,xs:4},i.a.createElement(Fe,null))))},_e=r(164),Ne=r(151),He=r(154),Me=r(165),Ge=r(155),Be=function(e){var t=e.selectedColumns,r=e.onColumnsSelected;return i.a.createElement(i.a.Fragment,null,i.a.createElement(f.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0},"Columns"),i.a.createElement(T.a,{container:!0,spacing:2},i.a.createElement(_e.a,{multiple:!0,value:t,onChange:function(e){r(e.target.value)},input:i.a.createElement(Ne.a,null),renderValue:function(){return t.length===fe.length?"All selected":"Selected columns"}},fe.filter((function(e){return"action"!==e})).map((function(e){return i.a.createElement(He.a,{key:e,value:e},i.a.createElement(Me.a,{checked:t.indexOf(e)>-1}),i.a.createElement(Ge.a,{primary:me[e]}))})))))},Ke=function(e){return e.columns.selectedColumns},We=Object(h.b)((function(e){return{selectedColumns:Ke(e)}}),(function(e){return{onColumnsSelected:function(t){var r;e((r=t,{type:se.COLUMNS_SELECTED,payload:r}))}}}))(Be),Ye=r(153),Ue=r(110),Ve=r(157),qe=r(109),Je=r(70),$e=r.n(Je),ze=r(71),Xe=r.n(ze),Qe=r(156),Ze=Object(w.a)({delete:{"&:hover":{color:_.a[700]}},open:{"&:hover":{color:Qe.a[700]}}}),et=Object(D.a)(Ze)((function(e){var t=e.history,r=e.importFromHistory,n=e.loadHistory,a=e.deleteFromHistory,c=e.classes;return Object(o.useEffect)((function(){n()}),[n]),i.a.createElement(T.a,null,i.a.createElement(f.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0},"Imported reports"),i.a.createElement(Ye.a,{component:"nav","aria-label":"Main mailbox folders"},t.map((function(e){return i.a.createElement(Ue.a,{button:!0,onClick:function(){return r(e)},key:e},i.a.createElement(Ve.a,null,i.a.createElement(qe.a,{title:"Open report",className:c.open},i.a.createElement($e.a,null))),i.a.createElement(Ge.a,{primary:e}),i.a.createElement(qe.a,{title:"Delete imported report",className:c.delete,onClick:function(t){a(e),t.stopPropagation()}},i.a.createElement(Xe.a,null)))}))))})),tt=r(57),rt=r.n(tt),nt=r(72),at=function(){function e(){Object(be.a)(this,e)}return Object(he.a)(e,[{key:"getSavedHistory",value:function(){var e=localStorage.getItem("savedImports");return e?JSON.parse(e):{rawImports:{}}}},{key:"saveHistory",value:function(e){var t=JSON.stringify(e);localStorage.setItem("savedImports",t)}},{key:"GetRawImportKeys",value:function(){var e=this.getSavedHistory();return Object.keys(e.rawImports)}},{key:"GetRawImport",value:function(e){return this.getSavedHistory().rawImports[e]}},{key:"SaveRawImport",value:function(e){var t=this.getSavedHistory(),r=(new Date).getUTCMilliseconds().toString();t.rawImports[r]=e,this.saveHistory(t)}},{key:"DeleteReport",value:function(e){var t=this.getSavedHistory();if(!t.rawImports[e])throw Error("Key not found in saved history: ".concat(e));delete t.rawImports[e],this.saveHistory(t)}}]),e}(),ot=r(73),it=r(74),ct=r(83),lt=function(){function e(){Object(be.a)(this,e),this.rawImport=""}return Object(he.a)(e,[{key:"Parse",value:function(e){var t,r,n=this;this.rawImport="";var a=new Promise((function(e,n){t=e,r=n}));console.debug("Parsing ".concat(e.name,"..."));var o=new FileReader;return o.onload=function(){console.debug("File loaded.");var e=o.result;n.rawImport=e;try{t(n.rawImport)}catch(a){n.rawImport="",r("Error while parsing...")}},o.readAsBinaryString(e),a}},{key:"getGroupsFromTrades",value:function(e){var t=e.reduce((function(e,t){var r=t.expiration,n=t.underlying,a="".concat(n," - ").concat(r.toLocaleDateString());return e[a]||(e[a]={underlying:n,expiration:r,trades:[],pl:0}),e[a].trades.push(t),e}),{});return Object.values(t).sort((function(e,t){return+e.expiration-+t.expiration})).map((function(e){return e.trades.sort((function(e,t){return+e.tradeDate-+t.tradeDate})),e})).map(Pe.setPLForGroup)}},{key:"ParseRawData",value:function(e){var t=this.ParseMyTrades(e);return{name:"ok",tradeGroups:this.getGroupsFromTrades(t)}}}]),e}();!function(e){e[e.Call=1]="Call",e[e.Put=2]="Put"}(Te||(Te={}));var ut=function(e){function t(){return Object(be.a)(this,t),Object(ot.a)(this,Object(it.a)(t).apply(this,arguments))}return Object(ct.a)(t,e),Object(he.a)(t,[{key:"ParseMyTrades",value:function(e){var t=(new DOMParser).parseFromString(e,"text/xml");return Array.from(t.getElementsByTagName("Trade")).map((function(e){var t=e.getAttribute("expiry"),r=e.getAttribute("tradeDate"),n=parseInt(e.getAttribute("quantity"));return{underlying:e.getAttribute("underlyingSymbol"),position:n,expiration:new Date(+t.substr(0,4),+t.substr(4,2)-1,+t.substr(6,2)),optionType:"P"===e.getAttribute("putCall")?Te.Put:Te.Call,strikePrice:+e.getAttribute("strike"),pl:0,tradePrice:(n<0?-1:1)*+e.getAttribute("tradePrice"),tradeDate:new Date(+r.substr(0,4),+r.substr(4,2)-1,+r.substr(6,2))}}))}}]),t}(lt),st=new at,pt=new ut,ft=function(e){return function(t){var r=st.GetRawImport(e);return t(function(e){return{type:Q.REPORT_LOADED_FROM_HISTORY,payload:e}}(pt.ParseRawData(r)))}},mt=function(){return function(e){return e(function(e){return{type:Q.HISTORY_LOADED,payload:e}}(st.GetRawImportKeys()))}},dt=function(e){return e.importHistory.history},Ot=Object(h.b)((function(e){return{history:dt(e)}}),(function(e){return{importFromHistory:function(t){ft(t)(e)},deleteFromHistory:function(t){var r;(r=t,function(e){return st.DeleteReport(r),mt()(e)})(e)},loadHistory:function(){return mt()(e)}}}))(et),yt=r(159),Et=r(26),bt=r(158),ht=r(167),gt=r(4),vt=Object(gt.a)((function(){return Object(bt.a)({input:{display:"none"}})}))((function(e){var t=e.upload,r=e.classes,n=Object(o.useState)(),a=Object(Et.a)(n,2),c=a[0],l=a[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement("input",{className:r.input,id:"raised-button-file",type:"file",onChange:function(e){return l(e.target.files)}}),i.a.createElement(ht.a,{value:c&&c.length?c[0].name:void 0,placeholder:"No file chosen"}),i.a.createElement("label",{htmlFor:"raised-button-file"},i.a.createElement(yt.a,{component:"span"},"Select file")),c&&c.length?i.a.createElement(yt.a,{onClick:function(){c&&1===c.length?t(c[0]):alert("please provide a single file!")},color:"primary",variant:"contained"},"Import"):null)})),jt=function(e){var t=e.importFile,r=function(e){var r=new XMLHttpRequest;r.open("GET",e),r.responseType="blob",r.onload=function(){t(r.response)},r.send()};return i.a.createElement(i.a.Fragment,null,i.a.createElement(f.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0},"Import flex query"),i.a.createElement(T.a,{container:!0,spacing:1},i.a.createElement(T.a,{item:!0,xs:12},i.a.createElement(vt,{upload:t})),i.a.createElement(T.a,{item:!0,xs:12},"If you have no flex queries exported yet:\xa0",i.a.createElement(yt.a,{onClick:function(){r("example.xml")},color:"primary",variant:"contained"},"Load example"),"\xa0or\xa0",i.a.createElement(yt.a,{onClick:function(){r("mock.xml")},color:"primary",variant:"contained"},"Load mock"))))},Pt=Object(h.b)(null,(function(e){return{importFile:function(t){return function(e){return function(){var t=Object(nt.a)(rt.a.mark((function t(r){var n;return rt.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,pt.Parse(e);case 2:n=t.sent,st.SaveRawImport(n),mt()(r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t)(e)}}}))(jt),wt=r(160),Dt=function(){return i.a.createElement(wt.a,null,i.a.createElement(L.a,null,fe.map((function(e){return i.a.createElement(R.a,{key:e},me[e])}))))},Tt=r(161),St=r(54),xt=r(3),Ct=Object(bt.a)({badge:{borderRadius:3,padding:"2px 5px",marginRight:5},win:{background:Tt.a[700],color:"white"},loss:{background:St.a[700],color:"white"}}),kt=Object(gt.a)(Ct)((function(e){var t=e.price,r=e.classes;return i.a.createElement(R.a,null,i.a.createElement("span",{className:Object(xt.a)(r.badge,t>0?r.loss:r.win)},t<0?"C":"D"),i.a.createElement("span",null,t<0?(-1*t).toFixed(2):t.toFixed(2)))})),Lt=function(e,t){return i.a.createElement(R.a,{className:e,key:e},t)},Rt={action:function(){return Lt("action","")},underlying:function(e){return Lt("underlying",e.underlying)},optionType:function(e){return Lt("optionType",e.optionType===Te.Call?"CALL":"PUT")},strikePrice:function(e){return Lt("strikePrice",e.strikePrice.toFixed(1))},position:function(e){return Lt("position",e.position.toString())},pl:function(){return Lt("pl","")},tradeDate:function(e){return Lt("tradeDate",e.tradeDate.toLocaleDateString())},expiration:function(e){return Lt("expiration",e.expiration.toLocaleDateString())},price:function(e){return i.a.createElement(kt,{key:"price",price:e.tradePrice})},remainingDays:function(){return Lt("remainingDays","")}},It=function(e){var t=e.trade;return i.a.createElement(L.a,null,fe.map((function(e){return Rt[e](t)})))},Ft=r(77),At=r.n(Ft),_t=r(78),Nt=r.n(_t),Ht=r(53),Mt=Object(bt.a)({win:{background:Tt.a[700],color:"white"},loss:{background:St.a[700],color:"white"}}),Gt=Object(gt.a)(Mt)((function(e){var t=e.pl,r=e.classes;return i.a.createElement(R.a,{align:"right",className:t>0?r.win:t<0?r.loss:""},function(e){var t=100*e;return t<0?(-1*t).toFixed(2):t.toFixed(2)}(t)," $")}));function Bt(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var Kt=function(e,t){return i.a.createElement(R.a,{key:e,className:e},t)},Wt=function(e){return function(t){return Kt(e,"")}},Yt=Object(D.a)((function(e){return Object(w.a)({icon:{padding:0},expand:{transform:"rotate(0deg)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},groupRow:{background:Ht.a[300]},chartIcon:{"&:hover":{color:Tt.a[700]}}})}))((function(e){var t=e.tradeGroup,r=e.classes,n=e.showChart,a=Object(o.useState)(!1),c=Object(Et.a)(a,2),l=c[0],u=c[1],s={action:function(e){return Kt("action",i.a.createElement(i.a.Fragment,null,i.a.createElement(qe.a,{title:e.isOpen?"Collapse trades":"Show trades",onClick:function(){u(!l)},className:Object(xt.a)(r.icon,r.expand,Object(ee.a)({},r.expandOpen,e.isOpen))},i.a.createElement(At.a,null)),i.a.createElement(qe.a,{title:"Draw on chart",className:Object(xt.a)(r.icon,r.chartIcon),onClick:function(){return n(e)}},i.a.createElement(Nt.a,null))))},underlying:function(e){return Kt("underlying",e.underlying)},optionType:Wt("optionType"),strikePrice:Wt("strikePrice"),position:Wt("position"),price:function(e){return i.a.createElement(kt,{key:"price",price:e.trades.reduce((function(e,t){return e+t.tradePrice}),0)})},pl:function(e){return i.a.createElement(Gt,{key:"pl",pl:e.pl})},tradeDate:Wt("tradeDate"),expiration:function(e){return Kt("expiration",e.expiration.toLocaleDateString())},remainingDays:function(e){return Kt("remainingDays",function(e){var t=new Date,r=Math.floor((Number(e)-Number(t))/1e3/60/60/24);return r<0?"EXPIRED":r.toString()}(e.expiration))}},p=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Bt(r,!0).forEach((function(t){Object(ee.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Bt(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},t,{isOpen:l});return i.a.createElement(i.a.Fragment,null,i.a.createElement(L.a,{className:r.groupRow},fe.map((function(e){return s[e](p)}))),l?t.trades.map((function(e,t){return i.a.createElement(It,{trade:e,key:t})})):null)})),Ut=Object(h.b)(null,(function(e){return{showChart:function(t){var r;e((r=t,{type:te.OPEN_CHART,payload:r}))}}}))(Yt),Vt=function(e){var t=e.report;return i.a.createElement(C.a,{size:"small"},i.a.createElement(Dt,null),i.a.createElement(k.a,null,t.tradeGroups.map((function(e,t){return i.a.createElement(Ut,{tradeGroup:e,key:t})}))))},qt=r(162),Jt=r(81),$t=r.n(Jt),zt=r(18),Xt=r(79);function Qt(e,t){var r=t.optionType===Te.Call,n=t.strikePrice<e,a=Math.abs(t.tradePrice);return r&&!n||!r&&n?-t.position*a*100:t.position*(-1*a*100+100*(t.strikePrice-e)*(t.optionType===Te.Call?-1:1))}var Zt={getGroupPLAtExpiry:function(e,t){return t.trades.reduce((function(t,r){return t+Qt(e,r)}),0)},getTradePLAtExpiry:Qt},er=Object(w.a)({}),tr=Object(D.a)(er)((function(e){var t=e.chartData,r=e.showMainStrategyOnly,n=(e.classes,t.trades.length>1),a=function(e){return"".concat(e.underlying," ").concat(e.strikePrice)};return i.a.createElement(Xt.a,{width:"100%",height:"300px",chartType:"LineChart",data:[function(){var e=["x"];return r?e.push(t.trades[0].underlying):(e.push.apply(e,Object(zt.a)(t.trades.map(a))),n&&e.push("Trade")),e}()].concat(Object(zt.a)(function(){for(var e=function(){var e=0,r=0,n=t;if(n.trades.length>1){var a=n.trades.reduce((function(e,t){return e+t.strikePrice}),0)/n.trades.length,o=n.trades.map((function(e){return e.strikePrice})),i=Math.min.apply(Math,Object(zt.a)(o)),c=Math.max.apply(Math,Object(zt.a)(o));e=i-(a-i)/2,r=c+(c-a)/2}else{var l=Math.abs(100*n.trades[0].tradePrice);e=n.trades[0].strikePrice-2*l,r=n.trades[0].strikePrice+2*l}return[e,r]}(),a=Object(Et.a)(e,2),o=a[0],i=a[1],c=[],l=function(e){var a=t.trades.map((function(t){return Zt.getTradePLAtExpiry(e,t)})),o=Zt.getGroupPLAtExpiry(e,t);r?c.push([e,o]):n?c.push([e].concat(Object(zt.a)(a),[o])):c.push([e].concat(Object(zt.a)(a)))},u=o;u<=i;u+=.01)l(u);return c}())),options:{hAxis:{title:"Underlying price"},vAxis:{title:"P/L"},series:function(){if(r)return{};var e=0;return t.trades.reduce((function(t,r){return t[e++]={lineDashStyle:[2,2]},t}),{})}()}})})),rr=Object(w.a)({backIcon:{padding:5},controls:{margin:"0 auto",textAlign:"center"}}),nr=Object(D.a)(rr)((function(e){var t=e.chartData,r=e.closeChart,n=e.classes;if(!t)throw Error("No chart data to show");var a=Object(o.useState)(!0),c=Object(Et.a)(a,2),l=c[0],u=c[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(f.a,{variant:"h6",component:"h2",color:"primary"},i.a.createElement(qe.a,{className:n.backIcon,onClick:function(){r()}},i.a.createElement($t.a,null)),"Chart"),i.a.createElement("div",{className:n.controls},i.a.createElement(V.a,{control:i.a.createElement(qt.a,{checked:l,onChange:function(e){return u(e.target.checked)},value:"checkedB",color:"primary"}),label:"Hide legs"})),i.a.createElement(tr,{chartData:t,showMainStrategyOnly:l}))})),ar=Object(h.b)((function(e){return{chartData:P(e)}}),(function(e){return{closeChart:function(){e({type:te.CLOSE_CHART,payload:void 0})}}}))(nr),or=Object(w.a)({item:{flexShrink:0,width:"100%",transition:"height linear 0.2s, margin ease 0.3s",height:0},active:{marginLeft:0,height:"auto"},offsetLeft:{marginLeft:"-100%"},offsetRight:{marginLeft:"100%"}}),ir=Object(D.a)(or)((function(e){var t,r=e.children,n=e.offset,a=e.classes;return i.a.createElement("div",{className:Object(xt.a)(a.item,(t={},Object(ee.a)(t,a.active,0===n),Object(ee.a)(t,a.offsetLeft,n&&n<0),Object(ee.a)(t,a.offsetRight,n&&n>0),t))},r)})),cr=Object(w.a)({container:{overflow:"hidden",display:"flex"}});function lr(e,t){return[-1,1][e]}var ur=Object(D.a)(cr)((function(e){var t=e.children,r=e.activeKey,n=e.classes,a=i.a.Children.toArray(t);return a.forEach((function(e){if(!e.props.switcherKey)throw Error("No key defined in Switcher component child element")})),i.a.createElement("div",{className:n.container},i.a.Children.map(t,(function(e,t){return i.a.createElement(ir,Object.assign({},e.props,{offset:e.props.switcherKey===r?0:lr(t,a.length)}),e.props.children)})))})),sr=Object(D.a)((function(e){return Object(w.a)({root:{display:"flex"},appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"}})}))((function(e){var t=e.report,r=e.isChartOpen,n=e.classes;return i.a.createElement("main",{className:n.content},i.a.createElement("div",{className:n.appBarSpacer}),i.a.createElement(x.a,{maxWidth:"lg",className:n.container},i.a.createElement(T.a,{container:!0,spacing:3},i.a.createElement(T.a,{item:!0,xs:12,md:6},i.a.createElement(S.a,{className:n.paper},i.a.createElement(Ot,null))),i.a.createElement(T.a,{item:!0,xs:12,md:6},i.a.createElement(S.a,{className:n.paper},i.a.createElement(Pt,null))),t?i.a.createElement(i.a.Fragment,null,i.a.createElement(T.a,{item:!0,xs:12},i.a.createElement(S.a,{className:n.paper},i.a.createElement(T.a,{container:!0,spacing:3},i.a.createElement(T.a,{item:!0,xs:12,md:4},i.a.createElement(M,null)),i.a.createElement(T.a,{item:!0,xs:12,md:4},i.a.createElement(Ae,null)),i.a.createElement(T.a,{item:!0,xs:12,md:4},i.a.createElement(We,null))))),i.a.createElement(T.a,{item:!0,xs:12},i.a.createElement(S.a,{className:n.paper},i.a.createElement(ur,{activeKey:r?"chart":"table"},i.a.createElement(ir,{switcherKey:"table"},i.a.createElement(Vt,{report:t})),i.a.createElement(ir,{switcherKey:"chart"},r?i.a.createElement(ar,null):null))))):null)))})),pr=Object(h.b)((function(e){return{report:g(e),isChartOpen:j(e)}}))(sr),fr=function(){return i.a.createElement(b,null,i.a.createElement(h.a,{store:Ee},i.a.createElement("div",{className:"app"},i.a.createElement(u.a,null),i.a.createElement(m,null),i.a.createElement(pr,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(fr,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},91:function(e,t,r){e.exports=r(104)},96:function(e,t,r){}},[[91,1,2]]]);
//# sourceMappingURL=main.f3bac93f.chunk.js.map