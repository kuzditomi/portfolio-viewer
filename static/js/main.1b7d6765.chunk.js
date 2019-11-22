(this["webpackJsonpportfolio-viewer"]=this["webpackJsonpportfolio-viewer"]||[]).push([[0],{84:function(e,t,r){e.exports=r(98)},89:function(e,t,r){},95:function(e,t,r){},98:function(e,t,r){"use strict";r.r(t);var n,a,o=r(0),i=r.n(o),c=r(8),l=r.n(c),u=(r(89),r(154)),s=r(128),p=r(131),f=r(39),m=function(){return i.a.createElement(s.a,{position:"absolute"},i.a.createElement(p.a,null,i.a.createElement(f.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0},"IBKR portfolio viewer")))},d=r(132),O=r(76),y=Object(O.a)(),b=function(e){var t=e.children;return i.a.createElement(d.a,{theme:y},t)},E=r(12),g=function(e){return e.portfolio.filteredPortfolio},h=function(e){if(e.portfolio.filteredPortfolio)return{TotalPL:-e.portfolio.filteredPortfolio.tradeGroups.reduce((function(e,t){return e+t.trades.reduce((function(e,t){return e+t.tradePrice}),0)}),0)}},v=function(e){return e.portfolio.isChartOpened},j=r(102),P=r(100),w=r(141),D=r(99),T=r(150),S=r(133),R=r(134),x=r(135),I=r(136),C=r(66),F=r.n(C),k=r(44),L=r.n(k),_=Object(j.a)({win:{color:F.a[700]},loss:{color:L.a[700]}}),A=Object(P.a)(_)((function(e){var t=e.summary,r=e.classes;return void 0===t?null:i.a.createElement(i.a.Fragment,null,i.a.createElement(f.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0},"Summary"),i.a.createElement(S.a,null,i.a.createElement(R.a,null,i.a.createElement(x.a,null,i.a.createElement(I.a,null," Total P/L:"),i.a.createElement(I.a,{align:"right",className:t.TotalPL<0?r.loss:r.win},"$",(100*t.TotalPL).toFixed(2))))))})),H=Object(E.b)((function(e){return{summary:h(e)}}))(A),N=r(1),G=r(2),B=r(137),M=r(138),K=function(e){var t=e.label,r=e.children;return i.a.createElement(B.a,{component:"fieldset"},i.a.createElement(M.a,{component:"legend"},t),r)},W=r(153),Y=r(139),q=r(152),J=function(e){e.prefix;var t=e.options,r=e.selectedValue,n=e.onSelected,a=Object(G.a)(e,["prefix","options","selectedValue","onSelected"]);return i.a.createElement(K,a,i.a.createElement(W.a,{"aria-label":"gender",name:"gender1",value:r,onChange:function(e){return n(+e.target.value)}},Object.keys(t).map((function(e){return i.a.createElement(Y.a,{key:e,value:t[e],control:i.a.createElement(q.a,null),label:e})}))))};!function(e){e[e.All=1]="All",e[e.Expired=2]="Expired",e[e.Open=3]="Open"}(n||(n={})),function(e){e[e.All=1]="All",e[e.Closed=2]="Closed",e[e.Open=3]="Open"}(a||(a={}));var V,U=function(e){return e.filters.dateFilter},$=function(e){return e.filters.positionFilter};!function(e){e.DATE_FILTER_SELECTED="FILTERS/DATE_FILTER_SELECTED",e.POSITION_FILTER_SELECTED="FILTERS/POSITION_FILTER_SELECTED"}(V||(V={}));var z,X=r(34),Q=r(7);!function(e){e.HISTORY_LOADED="IMPORT/HISTORY_LOADED",e.REPORT_LOADED_FROM_HISTORY="IMPORT/REPORT_LOADED_FROM_HISTORY"}(z||(z={}));var Z;!function(e){e[e.PORTFOLIO_FILTERED=0]="PORTFOLIO_FILTERED",e[e.OPEN_CHART=1]="OPEN_CHART",e[e.CLOSE_CHART=2]="CLOSE_CHART"}(Z||(Z={}));function ee(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function te(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ee(r,!0).forEach((function(t){Object(Q.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ee(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var re={portfolio:void 0,filteredPortfolio:void 0,isChartOpened:!1};function ne(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ae(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ne(r,!0).forEach((function(t){Object(Q.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ne(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var oe={dateFilter:n.All,positionFilter:a.All};function ie(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ce(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ie(r,!0).forEach((function(t){Object(Q.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ie(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var le={history:[]},ue=r(68),se=Object(X.combineReducers)({portfolio:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z.REPORT_LOADED_FROM_HISTORY:return{portfolio:t.payload,filteredPortfolio:t.payload,isChartOpened:!1};case Z.PORTFOLIO_FILTERED:return te({},e,{filteredPortfolio:t.payload});case Z.OPEN_CHART:return te({},e,{isChartOpened:!0});case Z.CLOSE_CHART:return te({},e,{isChartOpened:!1});default:return e}},importHistory:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z.HISTORY_LOADED:return ce({},e,{history:t.payload});default:return e}},filters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case V.DATE_FILTER_SELECTED:return ae({},e,{dateFilter:t.payload});case V.POSITION_FILTER_SELECTED:return ae({},e,{positionFilter:t.payload});case z.REPORT_LOADED_FROM_HISTORY:return oe;default:return e}}}),pe=Object(X.createStore)(se,Object(ue.composeWithDevTools)()),fe=r(19),me=r(15),de={isClosingCombinationWith:function(e){return function(t){return e.optionType===t.optionType&&e.strikePrice===t.strikePrice&&e.position===-1*t.position}}};function Oe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var ye=function(e){return e.trades.reduce((function(t,r){var n=e.trades.find(de.isClosingCombinationWith(r));return n&&n.tradeDate>=r.tradeDate?t+-n.position*Math.abs(n.tradePrice)+-r.position*Math.abs(r.tradePrice):t}),0)},be={getPLForGroup:ye,setPLForGroup:function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Oe(r,!0).forEach((function(t){Object(Q.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Oe(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e,{pl:ye(e)})}};function Ee(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ge(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ee(r,!0).forEach((function(t){Object(Q.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ee(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var he,ve=function(e){return function(t){var r;t((r=e,{type:V.DATE_FILTER_SELECTED,payload:r})),we(t)}},je=function(e){return function(t){var r;t((r=e,{type:V.POSITION_FILTER_SELECTED,payload:r})),we(t)}},Pe=new(function(){function e(){Object(fe.a)(this,e),this.filterByDate=function(e){return function(t){var r,a=(r={},Object(Q.a)(r,n.All,(function(){return!0})),Object(Q.a)(r,n.Expired,(function(e){return e.expiration<new Date})),Object(Q.a)(r,n.Open,(function(e){return e.expiration>new Date})),r);return ge({},t,{tradeGroups:t.tradeGroups.filter(a[e])})}},this.filterByPosition=function(e){return function(t){var r,n=(r={},Object(Q.a)(r,a.All,(function(e){return e})),Object(Q.a)(r,a.Closed,(function(e){var t=e.trades.filter((function(t){return e.trades.find(de.isClosingCombinationWith(t))}));return ge({},e,{trades:t})})),Object(Q.a)(r,a.Open,(function(e){var t=e.trades.filter((function(t){return!e.trades.find(de.isClosingCombinationWith(t))}));return ge({},e,{trades:t})})),r);return ge({},t,{tradeGroups:t.tradeGroups.map(n[e]).filter((function(e){return e.trades.length>0}))})}}}return Object(me.a)(e,[{key:"applyFilters",value:function(e,t){var r=[this.filterByDate(t.dateFilter),this.filterByPosition(t.positionFilter)].reduce((function(e,t){return t(e)}),e);return ge({},r,{tradeGroups:r.tradeGroups.map(be.setPLForGroup)})}}]),e}()),we=function(e){var t=pe.getState().portfolio.portfolio;if(t){var r,n=pe.getState().filters,a=Pe.applyFilters(t,n);e((r=a,{type:Z.PORTFOLIO_FILTERED,payload:r}))}},De={All:n.All,Expired:n.Expired,Open:n.Open},Te=Object(E.b)((function(e){return{selectedValue:U(e)}}),(function(e){return{onSelected:function(t){ve(t)(e)}}}))((function(e){var t=Object(N.a)({},e);return i.a.createElement(J,Object.assign({prefix:"date",label:"By Date",options:De},t))})),Se={All:a.All,Closed:a.Closed,Open:a.Open},Re=Object(E.b)((function(e){return{selectedValue:$(e)}}),(function(e){return{onSelected:function(t){je(t)(e)}}}))((function(e){var t=Object(N.a)({},e);return i.a.createElement(J,Object.assign({prefix:"position",label:"By Position",options:Se},t))})),xe=(r(95),function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(f.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0},"Filters"),i.a.createElement(w.a,{container:!0,spacing:2},i.a.createElement(w.a,{item:!0,xs:4},i.a.createElement(Te,null)),i.a.createElement(w.a,{item:!0,xs:4},i.a.createElement(Re,null))))}),Ie=r(142),Ce=r(143),Fe=r(144),ke=r(145),Le=r(140),_e=r(48),Ae=r.n(_e),He=r(69),Ne=r.n(He),Ge=Object(j.a)({delete:{"&:hover":{color:L.a[700]}}}),Be=Object(P.a)(Ge)((function(e){var t=e.history,r=e.importFromHistory,n=e.loadHistory,a=e.deleteFromHistory,c=e.classes;return Object(o.useEffect)((function(){n()}),[n]),i.a.createElement(w.a,null,i.a.createElement(f.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0},"Imported reports"),i.a.createElement(Ie.a,{component:"nav","aria-label":"Main mailbox folders"},t.map((function(e){return i.a.createElement(Ce.a,{button:!0,onClick:function(){return r(e)},key:e},i.a.createElement(Fe.a,null,i.a.createElement(Ae.a,null)),i.a.createElement(ke.a,{primary:e}),i.a.createElement(Le.a,{className:c.delete,onClick:function(t){a(e),t.stopPropagation()}},i.a.createElement(Ne.a,null)))}))))})),Me=r(55),Ke=r.n(Me),We=r(70),Ye=function(){function e(){Object(fe.a)(this,e)}return Object(me.a)(e,[{key:"getSavedHistory",value:function(){var e=localStorage.getItem("savedImports");return e?JSON.parse(e):{rawImports:{}}}},{key:"saveHistory",value:function(e){var t=JSON.stringify(e);localStorage.setItem("savedImports",t)}},{key:"GetRawImportKeys",value:function(){var e=this.getSavedHistory();return Object.keys(e.rawImports)}},{key:"GetRawImport",value:function(e){return this.getSavedHistory().rawImports[e]}},{key:"SaveRawImport",value:function(e){var t=this.getSavedHistory(),r=(new Date).getUTCMilliseconds().toString();t.rawImports[r]=e,this.saveHistory(t)}},{key:"DeleteReport",value:function(e){var t=this.getSavedHistory();if(!t.rawImports[e])throw Error("Key not found in saved history: ".concat(e));delete t.rawImports[e],this.saveHistory(t)}}]),e}(),qe=r(71),Je=r(72),Ve=r(77),Ue=function(){function e(){Object(fe.a)(this,e),this.rawImport=""}return Object(me.a)(e,[{key:"Parse",value:function(e){var t,r,n=this;this.rawImport="";var a=new Promise((function(e,n){t=e,r=n}));console.debug("Parsing ".concat(e.name,"..."));var o=new FileReader;return o.onload=function(){console.debug("File loaded.");var e=o.result;n.rawImport=e;try{t(n.rawImport)}catch(a){n.rawImport="",r("Error while parsing...")}},o.readAsBinaryString(e),a}},{key:"getGroupsFromTrades",value:function(e){var t=e.reduce((function(e,t){var r=t.expiration,n=t.underlying,a="".concat(n," - ").concat(r.toLocaleDateString());return e[a]||(e[a]={underlying:n,expiration:r,trades:[],pl:0}),e[a].trades.push(t),e}),{});return Object.values(t).sort((function(e,t){return+e.expiration-+t.expiration})).map((function(e){return e.trades.sort((function(e,t){return+e.tradeDate-+t.tradeDate})),e})).map(be.setPLForGroup)}},{key:"ParseRawData",value:function(e){var t=this.ParseMyTrades(e);return{name:"ok",tradeGroups:this.getGroupsFromTrades(t)}}}]),e}();!function(e){e[e.Call=1]="Call",e[e.Put=2]="Put"}(he||(he={}));var $e=function(e){function t(){return Object(fe.a)(this,t),Object(qe.a)(this,Object(Je.a)(t).apply(this,arguments))}return Object(Ve.a)(t,e),Object(me.a)(t,[{key:"ParseMyTrades",value:function(e){var t=(new DOMParser).parseFromString(e,"text/xml");return Array.from(t.getElementsByTagName("Trade")).map((function(e){var t=e.getAttribute("expiry"),r=e.getAttribute("tradeDate"),n=parseInt(e.getAttribute("quantity"));return{underlying:e.getAttribute("underlyingSymbol"),position:n,expiration:new Date(+t.substr(0,4),+t.substr(4,2)-1,+t.substr(6,2)),optionType:"P"===e.getAttribute("putCall")?he.Put:he.Call,strikePrice:+e.getAttribute("strike"),pl:0,tradePrice:(n<0?-1:1)*+e.getAttribute("tradePrice"),tradeDate:new Date(+r.substr(0,4),+r.substr(4,2)-1,+r.substr(6,2))}}))}}]),t}(Ue),ze=new Ye,Xe=new $e,Qe=function(e){return function(t){var r=ze.GetRawImport(e);return t(function(e){return{type:z.REPORT_LOADED_FROM_HISTORY,payload:e}}(Xe.ParseRawData(r)))}},Ze=function(){return function(e){return e(function(e){return{type:z.HISTORY_LOADED,payload:e}}(ze.GetRawImportKeys()))}},et=function(e){return e.importHistory.history},tt=Object(E.b)((function(e){return{history:et(e)}}),(function(e){return{importFromHistory:function(t){Qe(t)(e)},deleteFromHistory:function(t){var r;(r=t,function(e){return ze.DeleteReport(r),Ze()(e)})(e)},loadHistory:function(){return Ze()(e)}}}))(Be),rt=r(147),nt=r(49),at=r(146),ot=r(151),it=r(4),ct=Object(it.a)((function(){return Object(at.a)({input:{display:"none"}})}))((function(e){var t=e.upload,r=e.classes,n=Object(o.useState)(),a=Object(nt.a)(n,2),c=a[0],l=a[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement("input",{className:r.input,id:"raised-button-file",type:"file",onChange:function(e){return l(e.target.files)}}),i.a.createElement(ot.a,{value:c&&c.length?c[0].name:void 0,placeholder:"No file chosen"}),i.a.createElement("label",{htmlFor:"raised-button-file"},i.a.createElement(rt.a,{component:"span"},"Select file")),c&&c.length?i.a.createElement(rt.a,{onClick:function(){c&&1===c.length?t(c[0]):alert("please provide a single file!")},color:"primary",variant:"contained"},"Import"):null)})),lt=function(e){var t=e.importFile;return i.a.createElement(i.a.Fragment,null,i.a.createElement(f.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0},"Import flex query"),i.a.createElement(w.a,{container:!0,spacing:1},i.a.createElement(w.a,{item:!0,xs:12},i.a.createElement(ct,{upload:t})),i.a.createElement(w.a,{item:!0,xs:12},"If you have no flex queries exported yet:\xa0",i.a.createElement(rt.a,{onClick:function(){return function(){var e=new XMLHttpRequest;e.open("GET","example.xml"),e.responseType="blob",e.onload=function(){t(e.response)},e.send()}()},color:"primary",variant:"contained"},"Load example"))))},ut=Object(E.b)(null,(function(e){return{importFile:function(t){return function(e){return function(){var t=Object(We.a)(Ke.a.mark((function t(r){var n;return Ke.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Xe.Parse(e);case 2:n=t.sent,ze.SaveRawImport(n),Ze()(r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t)(e)}}}))(lt),st=["action","underlying","optionType","strikePrice","position","price","pl","tradeDate","expiration","remainingDays"],pt=r(148),ft={action:"",underlying:"Underlying",strikePrice:"Strike Price",optionType:"Option Type",position:"Position",expiration:"Expiration",price:"Trade Price",pl:"Realized P/L",tradeDate:"Trade date",remainingDays:"Remaining days"},mt=function(){return i.a.createElement(pt.a,null,i.a.createElement(x.a,null,st.map((function(e){return i.a.createElement(I.a,{key:e},ft[e])}))))},dt=r(149),Ot=r(51),yt=r(3),bt=Object(at.a)({badge:{borderRadius:3,padding:"2px 5px",marginRight:5},win:{background:dt.a[700],color:"white"},loss:{background:Ot.a[700],color:"white"}}),Et=Object(it.a)(bt)((function(e){var t=e.price,r=e.classes;return i.a.createElement(I.a,null,i.a.createElement("span",{className:Object(yt.a)(r.badge,t>0?r.loss:r.win)},t<0?"C":"D"),i.a.createElement("span",null,t<0?(-1*t).toFixed(2):t.toFixed(2)))})),gt=function(e,t){return i.a.createElement(I.a,{className:e,key:e},t)},ht={action:function(){return gt("action","")},underlying:function(e){return gt("underlying",e.underlying)},optionType:function(e){return gt("optionType",e.optionType===he.Call?"CALL":"PUT")},strikePrice:function(e){return gt("strikePrice",e.strikePrice.toFixed(1))},position:function(e){return gt("position",e.position.toString())},pl:function(){return gt("pl","")},tradeDate:function(e){return gt("tradeDate",e.tradeDate.toLocaleDateString())},expiration:function(e){return gt("expiration",e.expiration.toLocaleDateString())},price:function(e){return i.a.createElement(Et,{key:"price",price:e.tradePrice})},remainingDays:function(){return gt("remainingDays","")}},vt=function(e){var t=e.trade;return i.a.createElement(x.a,null,st.map((function(e){return ht[e](t)})))},jt=r(75),Pt=r.n(jt),wt=r(50),Dt=Object(at.a)({win:{background:dt.a[700],color:"white"},loss:{background:Ot.a[700],color:"white"}}),Tt=Object(it.a)(Dt)((function(e){var t=e.pl,r=e.classes;return i.a.createElement(I.a,{align:"right",className:t>0?r.win:t<0?r.loss:""},function(e){var t=100*e;return t<0?(-1*t).toFixed(2):t.toFixed(2)}(t)," $")}));function St(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var Rt=function(e,t){return i.a.createElement(I.a,{key:e,className:e},t)},xt=function(e){return function(t){return Rt(e,"")}},It=Object(P.a)((function(e){return Object(j.a)({expand:{padding:0,transform:"rotate(0deg)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},groupRow:{background:wt.a[300]}})}))((function(e){var t=e.tradeGroup,r=e.classes,n=e.showChart,a=Object(o.useState)(!1),c=Object(nt.a)(a,2),l=c[0],u=c[1],s={action:function(e){return Rt("action",i.a.createElement(i.a.Fragment,null,i.a.createElement(Le.a,{onClick:function(){u(!l)},className:Object(yt.a)(r.expand,Object(Q.a)({},r.expandOpen,e.isOpen))},i.a.createElement(Pt.a,null)),i.a.createElement(Le.a,{onClick:function(){return n()}},i.a.createElement(Ae.a,null))))},underlying:function(e){return Rt("underlying",e.underlying)},optionType:xt("optionType"),strikePrice:xt("strikePrice"),position:xt("position"),price:function(e){return i.a.createElement(Et,{key:"price",price:e.trades.reduce((function(e,t){return e+t.tradePrice}),0)})},pl:function(e){return i.a.createElement(Tt,{key:"pl",pl:e.pl})},tradeDate:xt("tradeDate"),expiration:function(e){return Rt("expiration",e.expiration.toLocaleDateString())},remainingDays:function(e){return Rt("remainingDays",function(e){var t=new Date,r=Math.floor((Number(e)-Number(t))/1e3/60/60/24);return r<0?"EXPIRED":r.toString()}(e.expiration))}},p=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?St(r,!0).forEach((function(t){Object(Q.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):St(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},t,{isOpen:l});return i.a.createElement(i.a.Fragment,null,i.a.createElement(x.a,{className:r.groupRow},st.map((function(e){return s[e](p)}))),l?t.trades.map((function(e,t){return i.a.createElement(vt,{trade:e,key:t})})):null)})),Ct=Object(E.b)(null,(function(e){return{showChart:function(){e({type:Z.OPEN_CHART,payload:void 0})}}}))(It),Ft=function(e){var t=e.report;return i.a.createElement(S.a,{size:"small"},i.a.createElement(mt,null),i.a.createElement(R.a,null,t.tradeGroups.map((function(e,t){return i.a.createElement(Ct,{tradeGroup:e,key:t})}))))},kt=Object(j.a)({}),Lt=Object(P.a)(kt)((function(e){var t=e.closeChart;return i.a.createElement(i.a.Fragment,null,i.a.createElement(f.a,{variant:"h6",component:"h2",color:"primary"},"Chart"),i.a.createElement(rt.a,{onClick:function(){t()}},"Back"))})),_t=Object(E.b)(null,(function(e){return{closeChart:function(){e({type:Z.CLOSE_CHART,payload:void 0})}}}))(Lt),At=Object(j.a)({item:{flexShrink:0,width:"100%",transition:"height linear 0.2s, margin ease 0.3s",height:0},active:{marginLeft:0,height:"auto"},offsetLeft:{marginLeft:"-100%"},offsetRight:{marginLeft:"100%"}}),Ht=Object(P.a)(At)((function(e){var t,r=e.children,n=e.offset,a=e.classes;return i.a.createElement("div",{className:Object(yt.a)(a.item,(t={},Object(Q.a)(t,a.active,0===n),Object(Q.a)(t,a.offsetLeft,n&&n<0),Object(Q.a)(t,a.offsetRight,n&&n>0),t))},r)})),Nt=Object(j.a)({container:{overflow:"hidden",display:"flex"}});function Gt(e,t){return[-1,1][e]}var Bt=Object(P.a)(Nt)((function(e){var t=e.children,r=e.activeKey,n=e.classes,a=i.a.Children.toArray(t);return a.forEach((function(e){if(!e.props.switcherKey)throw Error("No key defined in Switcher component child element")})),i.a.createElement("div",{className:n.container},i.a.Children.map(t,(function(e,t){return i.a.createElement(Ht,Object.assign({},e.props,{offset:e.props.switcherKey===r?0:Gt(t,a.length)}),e.props.children)})))})),Mt=Object(P.a)((function(e){return Object(j.a)({root:{display:"flex"},appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"}})}))((function(e){var t=e.report,r=e.isChartOpen,n=e.classes;return i.a.createElement("main",{className:n.content},i.a.createElement("div",{className:n.appBarSpacer}),i.a.createElement(T.a,{maxWidth:"lg",className:n.container},i.a.createElement(w.a,{container:!0,spacing:3},i.a.createElement(w.a,{item:!0,xs:12,md:6},i.a.createElement(D.a,{className:n.paper},i.a.createElement(tt,null))),i.a.createElement(w.a,{item:!0,xs:12,md:6},i.a.createElement(D.a,{className:n.paper},i.a.createElement(ut,null))),t?i.a.createElement(i.a.Fragment,null,i.a.createElement(w.a,{item:!0,xs:12},i.a.createElement(D.a,{className:n.paper},i.a.createElement(w.a,{container:!0,spacing:3},i.a.createElement(w.a,{item:!0,xs:12,md:4},i.a.createElement(H,null)),i.a.createElement(w.a,{item:!0,xs:12,md:4},i.a.createElement(xe,null))))),i.a.createElement(w.a,{item:!0,xs:12},i.a.createElement(D.a,{className:n.paper},i.a.createElement(Bt,{activeKey:r?"chart":"table"},i.a.createElement(Ht,{switcherKey:"table"},i.a.createElement(Ft,{report:t})),i.a.createElement(Ht,{switcherKey:"chart"},i.a.createElement(_t,null)))))):null)))})),Kt=Object(E.b)((function(e){return{report:g(e),isChartOpen:v(e)}}))(Mt),Wt=function(){return i.a.createElement(b,null,i.a.createElement(E.a,{store:pe},i.a.createElement("div",{className:"app"},i.a.createElement(u.a,null),i.a.createElement(m,null),i.a.createElement(Kt,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(Wt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[84,1,2]]]);
//# sourceMappingURL=main.1b7d6765.chunk.js.map