(function(){"use strict";var e={8386:function(e,t,r){var o=r(9242),i=r(3396);const n={class:"app"};function s(e,t,r,o,s,l){const c=(0,i.up)("app-order-select"),d=(0,i.up)("app-add-product"),u=(0,i.up)("app-product-list");return(0,i.wg)(),(0,i.iD)("main",n,[(0,i.Wm)(c),(0,i.Wm)(d),(0,i.Wm)(u)])}const l={class:"product-list"},c={class:"products"};function d(e,t,r,n,s,d){const u=(0,i.up)("app-product-card");return(0,i.wg)(),(0,i.iD)("div",l,[(0,i._)("div",c,[(0,i.Wm)(o.W3,{name:"product-list"},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(d.sortedProducts,(e=>((0,i.wg)(),(0,i.j4)(u,{key:e.id,product:e},null,8,["product"])))),128))])),_:1})])])}var u=r(7139),p=r.p+"img/delete.1d0ae866.svg";const a=e=>((0,i.dD)("data-v-1d766364"),e=e(),(0,i.Cn)(),e),m={class:"product"},h=a((()=>(0,i._)("img",{src:p,alt:"delete"},null,-1))),g=[h],v={class:"text"},f={class:"title"},b={class:"description"},w={class:"price"};function y(e,t,r,o,n,s){return(0,i.wg)(),(0,i.iD)("div",m,[(0,i._)("div",{class:"delete",onClick:t[0]||(t[0]=(...e)=>s.onDelete&&s.onDelete(...e))},g),(0,i._)("div",{class:"image",style:(0,u.j5)({backgroundImage:`url('${r.product.imgUrl}')`})},null,4),(0,i._)("div",v,[(0,i._)("h3",f,(0,u.zw)(r.product.title),1),(0,i._)("p",b,(0,u.zw)(r.product.description),1),(0,i._)("h2",w,(0,u.zw)(n.formatNumber(r.product.price))+" руб.",1)])])}const P=e=>{if(e=String(e),e=e.replaceAll(" ",""),e.length>3){e=[...e];for(let t=e.length-3;t>0;t-=3)e.splice(t,0," ");e=e.join("")}return e};var _=P;r(6699),r(1703);const C=[];for(let ke=0;ke<6;ke++)C.push({id:ke,imgUrl:r(8163),title:"Наименование товара",description:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",price:1e4});const O={productList:C,orderType:"price",order:"ascending",isPopupShown:!1},U={addProduct:"[PRODUCTS] ADD PRODUCT",removeProduct:"[PRODUCTS] REMOVE PRODUCT",setOrderType:"[PRODUCTS] SET ORDER TYPE",setOrder:"[PRODUCTS] SET ORDER",togglePopup:"[PRODUCTS] TOGGLE POPUP"},D={[U.addProduct](e,{imgUrl:t,title:r,description:o,price:i}){if(!t||!r||!i)return;const n=e.productList.length>0?Math.max(e.productList[e.productList.length-1].id,e.productList[0].id)+1:0,s={id:n,imgUrl:t,title:r,description:o,price:i};e.productList.unshift(s)},[U.removeProduct](e,t){(0===t||t)&&(e.productList=e.productList.filter((e=>e.id!==t)))},[U.setOrderType](e,t){if(!t||!["price","title"].includes(t))throw new Error("incorrect type");e.orderType=t},[U.setOrder](e,t){if(!t||!["ascending","descending"].includes(t))throw new Error("incorrect order");e.order=t},[U.togglePopup](e){e.isPopupShown=!e.isPopupShown}};var T={state:O,mutations:D},S={name:"AppProductCard",props:{product:{type:Object,required:!0}},data(){return{formatNumber:_}},methods:{onDelete(){this.$store.commit(U.removeProduct,this.product.id)}}},F=r(89);const x=(0,F.Z)(S,[["render",y],["__scopeId","data-v-1d766364"]]);var A=x,E=r(65),V={name:"AppProductList",components:{AppProductCard:A},computed:{...(0,E.rn)({productList:e=>e.products.productList,orderType:e=>e.products.orderType,order:e=>e.products.order}),sortedProducts(){return[...this.productList].sort(((e,t)=>"ascending"===this.order?"title"===this.orderType?e.title.localeCompare(t.title):e.price===t.price?0:e.price<t.price?-1:1:"title"===this.orderType?t.title.localeCompare(e.title):t.price===e.price?0:t.price<e.price?-1:1))}}};const I=(0,F.Z)(V,[["render",d],["__scopeId","data-v-073350ac"]]);var R=I;const k=e=>((0,i.dD)("data-v-4f675002"),e=e(),(0,i.Cn)(),e),W={class:"add-product"},q={class:"scroll-wrapper"},z={class:"title-container"},L=k((()=>(0,i._)("h1",{class:"title"},"Добавление товара",-1))),j=(0,i.Uk)(" Добавить товар ");function $(e,t,n,s,l,c){const d=(0,i.up)("app-icon-button"),u=(0,i.up)("app-field"),p=(0,i.up)("app-button");return(0,i.wg)(),(0,i.j4)(o.uT,{name:l.hasAnalyzed&&!l.isPC?"popup":""},{default:(0,i.w5)((()=>[(0,i.wy)((0,i._)("div",W,[(0,i._)("div",q,[(0,i._)("div",z,[L,(0,i.Wm)(d,{class:"popup-button",onClick:c.togglePopup,iconUrl:r(855)},null,8,["onClick","iconUrl"])]),(0,i._)("form",{class:"form",onSubmit:t[4]||(t[4]=(0,o.iM)(((...e)=>c.onSubmit&&c.onSubmit(...e)),["prevent"]))},[(0,i.Wm)(u,{id:"product-title",label:"Наименование товара",isRequired:!0,placeholder:"Введите наименование товара",type:"input",modelValue:l.title,"onUpdate:modelValue":t[0]||(t[0]=e=>l.title=e),onFocus:c.onFocus,error:c.titleError},null,8,["modelValue","onFocus","error"]),(0,i.Wm)(u,{id:"product-description",label:"Описание товара",isRequired:!1,placeholder:"Введите описание товара",type:"textarea",modelValue:l.description,"onUpdate:modelValue":t[1]||(t[1]=e=>l.description=e),onFocus:c.onFocus},null,8,["modelValue","onFocus"]),(0,i.Wm)(u,{id:"product-img-url",label:"Ссылка на изображение товара",isRequired:!0,placeholder:"Введите ссылку",type:"input",modelValue:l.imgUrl,"onUpdate:modelValue":t[2]||(t[2]=e=>l.imgUrl=e),onFocus:c.onFocus,error:c.imgUrlError},null,8,["modelValue","onFocus","error"]),(0,i.Wm)(u,{id:"product-price",label:"Цена товара",isRequired:!0,placeholder:"Введите цену",type:"input",modelValue:l.price,"onUpdate:modelValue":t[3]||(t[3]=e=>l.price=e),onFocus:c.onFocus,error:c.priceError,dType:"number"},null,8,["modelValue","onFocus","error"]),(0,i.Wm)(p,{disabled:c.buttonDisabled,class:"submit-button",type:"submit"},{default:(0,i.w5)((()=>[j])),_:1},8,["disabled"])],32)])],512),[[o.F8,l.hasAnalyzed&&(e.isPopupShown||l.isPC)]])])),_:1},8,["name"])}var Z={name:"AppAddProduct",data(){return{title:"",description:"",imgUrl:"",price:"",wasFocused:!1,isPC:!0,hasAnalyzed:!1}},methods:{onFocus(){this.wasFocused=!0},onSubmit(){this.$store.commit(U.addProduct,{title:this.title,description:this.description,imgUrl:this.imgUrl,price:Number(this.price.replaceAll(" ",""))}),this.title="",this.description="",this.imgUrl="",this.price="",this.wasFocused=!1,this.togglePopup()},analyze(){window.innerWidth<700?this.isPC=!1:this.isPC=!0,this.hasAnalyzed=!0},togglePopup(){this.$store.commit(U.togglePopup)}},computed:{...(0,E.rn)({isPopupShown:e=>e.products.isPopupShown}),titleError(){return!this.wasFocused||this.title?"":"Поле является обязательным"},imgUrlError(){return!this.wasFocused||this.imgUrl?"":"Поле является обязательным"},priceError(){return this.wasFocused?this.price?isNaN(this.price.replaceAll(" ",""))?"Введите только цифру":"":"Поле является обязательным":""},anyErrors(){return!!(this.titleError||this.imgUrlError||this.priceError)},buttonDisabled(){return!this.wasFocused||this.anyErrors}},mounted(){this.analyze(),window.addEventListener("resize",this.analyze)}};const M=(0,F.Z)(Z,[["render",$],["__scopeId","data-v-4f675002"]]);var N=M;const B=e=>((0,i.dD)("data-v-1e3245ba"),e=e(),(0,i.Cn)(),e),Y={class:"order-select"},G=B((()=>(0,i._)("div",{class:"title-container"},[(0,i._)("h1",{class:"title"},"Сортировка")],-1))),H={class:"selects"};function K(e,t,o,n,s,l){const c=(0,i.up)("app-select"),d=(0,i.up)("app-icon-button");return(0,i.wg)(),(0,i.iD)("div",Y,[G,(0,i._)("div",H,[(0,i.Wm)(c,{options:[{text:"По цене",value:"price"},{text:"По названию",value:"title"}],onChange:l.setOrderType},null,8,["onChange"]),(0,i.Wm)(c,{options:[{text:"По возрастанию",value:"ascending"},{text:"По убыванию",value:"descending"}],onChange:l.setOrder},null,8,["onChange"])]),(0,i.Wm)(d,{class:"add-product-btn",onClick:l.togglePopup,iconUrl:r(1930)},null,8,["onClick","iconUrl"])])}var J={name:"AppOrderSelect",computed:{...(0,E.rn)({orderType:e=>e.products.orderType,order:e=>e.products.order})},methods:{setOrderType(e){this.$store.commit(U.setOrderType,e.target.value)},setOrder(e){this.$store.commit(U.setOrder,e.target.value)},togglePopup(){this.$store.commit(U.togglePopup)}}};const Q=(0,F.Z)(J,[["render",K],["__scopeId","data-v-1e3245ba"]]);var X=Q,ee={name:"App",components:{AppProductList:R,AppAddProduct:N,AppOrderSelect:X},data(){return{isShown:!0}}};const te=(0,F.Z)(ee,[["render",s]]);var re=te,oe=r(8444),ie=r.n(oe);const ne=new(ie())({}),se=(0,E.MT)({modules:{products:T},plugins:[ne.persist]});var le=se;const ce={class:"field"},de=["for"],ue={class:"placeholder-container"},pe=["id","value","inputmode"],ae=["id","value"],me={class:"error-text text-micro"};function he(e,t,r,o,n,s){return(0,i.wg)(),(0,i.iD)("div",ce,[(0,i._)("label",{for:r.id,class:(0,u.C_)(["label text-smaller",{required:r.isRequired}])},(0,u.zw)(r.label),11,de),(0,i._)("div",ue,["input"===r.type?((0,i.wg)(),(0,i.iD)("input",{key:0,type:"text",class:(0,u.C_)(["input text-small",{error:r.error}]),id:r.id,value:r.modelValue,placeholder:" ",inputmode:"number"===r.dType?"numeric":"text",onInput:t[0]||(t[0]=(...e)=>s.onInput&&s.onInput(...e)),onFocus:t[1]||(t[1]=e=>r.onFocus?.())},null,42,pe)):((0,i.wg)(),(0,i.iD)("textarea",{key:1,class:(0,u.C_)(["input text-small",{error:r.error}]),id:r.id,value:r.modelValue,placeholder:" ",rows:"6",onInput:t[2]||(t[2]=(...e)=>s.onInput&&s.onInput(...e)),onFocus:t[3]||(t[3]=e=>r.onFocus?.())},null,42,ae)),(0,i._)("span",{class:(0,u.C_)(["placeholder text-small",{shown:s.showPlaceholder}])},(0,u.zw)(r.placeholder),3),(0,i._)("span",me,(0,u.zw)(r.error),1)])])}var ge={name:"AppField",props:{isRequired:{type:Boolean,required:!0},label:{type:String,required:!0},placeholder:{type:String,required:!0},id:{type:String,required:!0},type:{type:String,required:!0},dType:String,onFocus:Function,error:String,modelValue:String},methods:{onInput(e){let t=e.target.value;"number"===this.dType&&(t=_(t)),this.$emit("update:modelValue",t)}},computed:{showPlaceholder(){return 0===this.modelValue.length}}};const ve=(0,F.Z)(ge,[["render",he],["__scopeId","data-v-439e9b79"]]);var fe=ve;const be={class:"btn"};function we(e,t,r,o,n,s){return(0,i.wg)(),(0,i.iD)("button",be,[(0,i.WI)(e.$slots,"default",{},void 0,!0)])}var ye={name:"AppButton"};const Pe=(0,F.Z)(ye,[["render",we],["__scopeId","data-v-9145b474"]]);var _e=Pe;const Ce=["value","selected"];function Oe(e,t,r,o,n,s){return(0,i.wg)(),(0,i.iD)("select",{class:"select text-small",onChange:t[0]||(t[0]=(...e)=>s.onChange&&s.onChange(...e))},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(r.options,(e=>((0,i.wg)(),(0,i.iD)("option",{key:e.value,value:e.value,selected:e.value==r.modelValue},(0,u.zw)(e.text),9,Ce)))),128))],32)}var Ue={name:"AppSelect",props:{options:{type:Array,required:!0},modelValue:String},methods:{onChange(e){this.$emit("update:modelValue",e.target.value)}}};const De=(0,F.Z)(Ue,[["render",Oe],["__scopeId","data-v-1aff5805"]]);var Te=De;const Se={class:"icon-btn"},Fe=["src"];function xe(e,t,r,o,n,s){return(0,i.wg)(),(0,i.iD)("button",Se,[(0,i._)("img",{src:r.iconUrl,alt:"icon",class:"icon"},null,8,Fe)])}var Ae={name:"AppIconButton",props:{iconUrl:{type:String,requried:!0}}};const Ee=(0,F.Z)(Ae,[["render",xe],["__scopeId","data-v-fb938e36"]]);var Ve=Ee,Ie=[fe,_e,Te,Ve];const Re=(0,o.ri)(re);Ie.map((e=>Re.component(e.name,e))),Re.use(le),Re.mount("#app")},1930:function(e,t,r){e.exports=r.p+"img/add-circle-line.4a1bb349.svg"},855:function(e,t,r){e.exports=r.p+"img/close-circle-line.debb5da0.svg"},8163:function(e,t,r){e.exports=r.p+"img/base_image.44c235b1.png"}},t={};function r(o){var i=t[o];if(void 0!==i)return i.exports;var n=t[o]={exports:{}};return e[o].call(n.exports,n,n.exports,r),n.exports}r.m=e,function(){var e=[];r.O=function(t,o,i,n){if(!o){var s=1/0;for(u=0;u<e.length;u++){o=e[u][0],i=e[u][1],n=e[u][2];for(var l=!0,c=0;c<o.length;c++)(!1&n||s>=n)&&Object.keys(r.O).every((function(e){return r.O[e](o[c])}))?o.splice(c--,1):(l=!1,n<s&&(s=n));if(l){e.splice(u--,1);var d=i();void 0!==d&&(t=d)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[o,i,n]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){r.p="/idaproject-test/"}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,o){var i,n,s=o[0],l=o[1],c=o[2],d=0;if(s.some((function(t){return 0!==e[t]}))){for(i in l)r.o(l,i)&&(r.m[i]=l[i]);if(c)var u=c(r)}for(t&&t(o);d<s.length;d++)n=s[d],r.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return r.O(u)},o=self["webpackChunkidaproject_test"]=self["webpackChunkidaproject_test"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=r.O(void 0,[998],(function(){return r(8386)}));o=r.O(o)})();
//# sourceMappingURL=app.b7ab97a3.js.map