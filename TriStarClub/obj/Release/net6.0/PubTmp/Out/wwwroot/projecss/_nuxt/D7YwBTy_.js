import{_ as L,o as a,C as $,n as p,b as o,t as r,d as i,a as l,F as u,q as _,B as V,D as E,z as Q,O as T,Q as C,S as w,f as S,e as N,k as F,g as O,y as q}from"./bIp8vrNC.js";import{_ as B}from"./Mhzlbvrj.js";import{d as I}from"./CyvmEBDe.js";import{_ as x}from"./CWI3wdPG.js";import{d as A}from"./438wU9fJ.js";import"./Ctq6v3cF.js";import"./CyCUcgYy.js";import"./BvQgWdB0.js";import"./z1mF-5nA.js";import"./ItgtrmpN.js";const P={name:"typeSmall",props:{item:{type:Object}}},z={class:"title"},H={key:0,class:"distance-summ"};function M(e,n,t,s,v,c){const k=V;return a(),$(k,{to:t.item.url,class:"distance-description-block"},{default:p(()=>[o("div",z,r(t.item.title),1),i(),t.item.total?(a(),l("div",H,[t.item.total.modifer==="to"&&!t.item.total.modifer_val?(a(),l(u,{key:0},[i(r(e.$t("metric.to")),1)],64)):_("",!0),i(),o("span",null,[i(r(e.$formatLength(t.item.total.length)),1),t.item.total.modifer_val?(a(),l(u,{key:0},[i("-"+r(e.$formatLength(t.item.total.modifer_val)),1)],64)):_("",!0)]),i(),t.item.total.measure==="km"?(a(),l(u,{key:1},[i(r(e.$t("metric.km")),1)],64)):t.item.total.measure==="m"?(a(),l(u,{key:2},[i(r(e.$t("metric.min")),1)],64)):_("",!0)])):_("",!0)]),_:1},8,["to"])}const j=L(P,[["render",M]]);var y={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"EventsTypeQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"item"},name:{kind:"Name",value:"EventsType"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"text"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"length"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"type"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"length"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"measure"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"total"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:226}};y.loc.source={body:"query EventsTypeQuery ($id: String!) {\n    item: EventsType (id: $id) {\n        id\n        title\n        url\n        text\n        length {\n            type\n            length\n            measure\n        }\n        total\n    }\n}",name:"GraphQL request",locationOffset:{line:1,column:1}};function h(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var t=e.type;t.kind==="NamedType"&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(s){h(s,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(s){h(s,n)}),e.definitions&&e.definitions.forEach(function(s){h(s,n)})}var b={};(function(){y.definitions.forEach(function(n){if(n.name){var t=new Set;h(n,t),b[n.name.value]=t}})})();function D(e,n){for(var t=0;t<e.definitions.length;t++){var s=e.definitions[t];if(s.name&&s.name.value==n)return s}}function G(e,n){var t={kind:e.kind,definitions:[D(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var s=b[n]||new Set,v=new Set,c=new Set;for(s.forEach(function(m){c.add(m)});c.size>0;){var k=c;c=new Set,k.forEach(function(m){if(!v.has(m)){v.add(m);var f=b[m]||new Set;f.forEach(function(g){c.add(g)})}})}return v.forEach(function(m){var f=D(e,m);f&&t.definitions.push(f)}),t}G(y,"EventsTypeQuery");const W=I({name:"page-type-id",components:{EventItem:x,Type:j},asyncData:async()=>{let e,n,t=E(y,{id:Q().params.id||""},"cache-first");const s=([e,n]=T(()=>Promise.all([t,F().getPageInfo()]).then(([{item:c}])=>c)),e=await e,n(),e),v=([e,n]=T(()=>E(A,{page:1,limit:3,filter:{"=type":s.id}},"cache-first").then(({events:c})=>c.items)),e=await e,n(),e);return{item:s,events:v}},data:()=>({item:null,events:[]}),computed:{...C(F,["eventsTypes"])}},"$zDIZP1LNre"),Z=["innerHTML"],J={class:"competition-more"},K={class:"competition-more-block"},U={class:"distance-summ"},X=o("div",{class:"description"},null,-1),Y={class:"distance-description"},ee={key:0,class:"events events-section black-bg"},te={class:"container"},ne={class:"container"},ie={class:"event-list"},ae={class:"row"},se={class:"col-lg-4 col-6 col-xxs-12"},oe={class:"show-more-container"};function le(e,n,t,s,v,c){const k=O,m=w("Type"),f=B,g=w("EventItem"),R=q;return a(),l("div",null,[S(f,null,{content:p(()=>[o("h1",null,r(e.item.title),1),i(),o("article",{class:"article-content",innerHTML:e.item.text},null,8,Z),i(),o("div",J,[(a(!0),l(u,null,N(e.item.length,d=>(a(),l("div",K,[S(k,{class:"stage-icon",name:d.type},null,8,["name"]),i(),o("div",U,[o("span",null,r(e.$formatLength(d.length)),1),i(),d.measure==="km"?(a(),l(u,{key:0},[i(r(e.$t("metric.km")),1)],64)):d.measure==="m"?(a(),l(u,{key:1},[i(r(e.$t("metric.min")),1)],64)):_("",!0)]),i(),X]))),256))])]),aside:p(()=>[o("h3",null,r(e.$t("index.distances")),1),i(),o("div",Y,[(a(!0),l(u,null,N(e.eventsTypes,d=>(a(),$(m,{item:d,key:d.id},null,8,["item"]))),128))])]),_:1}),i(),e.events.length?(a(),l("section",ee,[o("div",te,[o("div",ne,[o("h2",null,r(e.$t("events.nearest")),1),i(),o("div",ie,[o("div",ae,[(a(!0),l(u,null,N(e.events,d=>(a(),l("div",se,[(a(),$(g,{key:d.id,item:d},null,8,["item"]))]))),256))]),i(),o("div",oe,[S(R,{to:"/event/",class:"btn btn-white"},{default:p(()=>[i(r(e.$t("index.events.shedule")),1)]),_:1})])])])])])):_("",!0)])}const he=L(W,[["render",le]]);export{he as default};
