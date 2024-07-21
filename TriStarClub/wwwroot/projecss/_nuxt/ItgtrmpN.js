const __vite__fileDeps=["./YjUY3RLV.js","./bIp8vrNC.js","./entry.MN5E7vKX.css","./PObiVnC-.js","./CNmUNVPL.js","./CR5lGdmR.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as h,X as B,A as I,D as j,z,o as p,a as k,b as a,t as d,d as o,q as R,w as E,v as V,J as D,p as A,aO as G,F as J,e as W,T as b,f as x,n as X,Z as M,$ as Y,a7 as Z,V as H,a1 as K,a8 as F,aP as ee,I as ae,aN as U,aJ as C,aQ as O,aR as P,g as te,a3 as ie}from"./bIp8vrNC.js";var S={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"UserSocialAuthQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"back_url"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"items"},name:{kind:"Name",value:"ExternalAuth"},arguments:[{kind:"Argument",name:{kind:"Name",value:"back_url"},value:{kind:"Variable",name:{kind:"Name",value:"back_url"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"link"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:117}};S.loc.source={body:"query UserSocialAuthQuery ($back_url: String!) {\n	items: ExternalAuth (back_url: $back_url) {\n		id\n		name\n		link\n	}\n}",name:"GraphQL request",locationOffset:{line:1,column:1}};function w(e,i){if(e.kind==="FragmentSpread")i.add(e.name.value);else if(e.kind==="VariableDefinition"){var n=e.type;n.kind==="NamedType"&&i.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){w(t,i)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){w(t,i)}),e.definitions&&e.definitions.forEach(function(t){w(t,i)})}var $={};(function(){S.definitions.forEach(function(i){if(i.name){var n=new Set;w(i,n),$[i.name.value]=n}})})();function T(e,i){for(var n=0;n<e.definitions.length;n++){var t=e.definitions[n];if(t.name&&t.name.value==i)return t}}function ne(e,i){var n={kind:e.kind,definitions:[T(e,i)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var t=$[i]||new Set,c=new Set,l=new Set;for(t.forEach(function(u){l.add(u)});l.size>0;){var v=l;l=new Set,v.forEach(function(u){if(!c.has(u)){c.add(u);var f=$[u]||new Set;f.forEach(function(_){l.add(_)})}})}return c.forEach(function(u){var f=T(e,u);f&&n.definitions.push(f)}),n}ne(S,"UserSocialAuthQuery");const se={key:0,class:"errortext"},oe={class:"form-group"},re={for:"ajax_form_user_login"},le={class:"form-group"},ue={for:"ajax_form_user_password"},de={class:"is-modal-row form-group"},ce={class:"checkbox"},me={for:"savepass"},fe={key:0,class:"is-modal-socials"},ve={class:"text"},_e={class:"header-socials"},he={class:"socials-login-list"},pe=["onClick","title"],ke=a("div",{class:"clearfix"},null,-1),ge={class:"is-modal-other-links"},Se={__name:"Auth",emits:["login"],setup(e,{emit:i}){const n=h(""),t=h(""),c=h(""),l=h(!0),v=h([]),u=i,f={email:{required:M,emailValidation:Y},password:{required:M}};try{t.value=localStorage.getItem("email")}catch(s){}const _=B(f,{email:t,password:c},{$autoDirty:!0});I(()=>{j(S,{back_url:z().fullPath},"cache-first").then(({items:s})=>{v.value=s||[]})});async function N(){if(await _.value.$validate()){Z();try{await H().login({email:t.value,password:c.value,remember:l.value})&&(K("login"),F(),u("login"),ee().emit("login"))}catch(s){ae(s)}F()}}function L(s){let m=screen.width,y=screen.height,g=600,r=400;window.open(s,"","status=no,scrollbars=yes,resizable=yes,width="+g+",height="+r+",top="+Math.floor((y-r)/2-14)+",left="+Math.floor((m-g)/2-5))}function Q(){U(),C(O(()=>P(()=>import("./YjUY3RLV.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url)))}function q(){U(),C(O(()=>P(()=>import("./CR5lGdmR.js"),__vite__mapDeps([5,1,2]),import.meta.url)))}return(s,m)=>{const y=te,g=ie;return p(),k("div",null,[a("h3",null,d(s.$t("forms.auth.title")),1),o(),a("form",{method:"post",action:"",onSubmit:b(N,["prevent"])},[n.value.length>0?(p(),k("div",se,d(n.value),1)):R("",!0),o(),a("div",oe,[a("label",re,d(s.$t("forms.auth.login")),1),o(),E(a("input",{type:"email",class:D({error:A(_).email.$error}),id:"ajax_form_user_login",name:"USER_LOGIN",autocomplete:"username","onUpdate:modelValue":m[0]||(m[0]=r=>t.value=r)},null,2),[[V,t.value]])]),o(),a("div",le,[a("label",ue,d(s.$t("forms.auth.password")),1),o(),E(a("input",{type:"password",class:D({error:A(_).password.$error}),id:"ajax_form_user_password",name:"USER_PASSWORD",autocomplete:"current-password","onUpdate:modelValue":m[1]||(m[1]=r=>c.value=r)},null,2),[[V,c.value]])]),o(),a("div",de,[a("div",ce,[E(a("input",{type:"checkbox",id:"savepass",name:"USER_REMEMBER",value:"Y","onUpdate:modelValue":m[2]||(m[2]=r=>l.value=r)},null,512),[[G,l.value]]),o(),a("label",me,d(s.$t("forms.auth.remember")),1)]),o(),v.value.length>0?(p(),k("div",fe,[a("span",ve,d(s.$t("forms.auth.login_use")),1),o(),a("div",_e,[a("div",he,[(p(!0),k(J,null,W(v.value,r=>(p(),k("a",{href:"#",onClick:b(be=>L(r.link),["prevent"]),title:r.name},[x(y,{name:r.id},null,8,["name"])],8,pe))),256))])])])):R("",!0),o(),ke]),o(),x(g,{callback:N,class:"btn-primary"},{default:X(()=>[o(d(s.$t("forms.auth.submit")),1)]),_:1})],32),o(),a("div",ge,[a("a",{onClick:b(Q,["prevent"]),class:"default-link left"},d(s.$t("forms.auth.link_register")),1),o(),a("a",{onClick:b(q,["prevent"]),class:"default-link right"},d(s.$t("forms.auth.link_remember")),1)])])}}};export{Se as default};
