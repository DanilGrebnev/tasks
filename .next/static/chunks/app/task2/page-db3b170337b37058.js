(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[515],{7410:function(e,t,r){Promise.resolve().then(r.bind(r,8804))},7630:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return i},unstable_getImgProps:function(){return A}});let n=r(6927),a=r(5468),s=r(3579),l=r(3240),o=n._(r(4489)),A=e=>{(0,s.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,a.getImgProps)(e,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},i=l.Image},8804:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var n=r(9268),a=r(6006);r(4640);var s=r(630);r(8683),r(6394),r(4710);var l=r(7750),o=r(8050),A=r(8431);let i=e=>{let{children:t}=e;return(0,n.jsx)(n.Fragment,{children:(0,A.createPortal)(t,document.getElementById("modal"))})};var u=()=>{let[e,t]=(0,a.useState)(!1);return(0,n.jsxs)("section",{id:"task2",children:[(0,n.jsx)(s.Header,{}),(0,n.jsx)(o.z,{onClick:()=>t(!0),btnType:"transparent",children:"Показать форму"}),e&&(0,n.jsx)(i,{children:(0,n.jsx)(l.Form,{toggleModal:t})})]})}},8050:function(e,t,r){"use strict";r.d(t,{z:function(){return A}});var n=r(9268),a=r(8683),s=r.n(a),l=r(8739),o=r.n(l);let A=e=>{let{children:t,className:r,btnType:a,...l}=e;return(0,n.jsx)("button",{className:s()(o()[a],o().button,r),...l,children:t})}},7750:function(e,t,r){"use strict";r.r(t),r.d(t,{Form:function(){return C}});var n=r(9268),a=r(6006);let s=e=>{let{inputId:t,placeholderId:r,value:n}=e;(0,a.useEffect)(()=>{let e=document.getElementById(t),n=document.getElementById(r);n&&e&&(n.onclick=()=>e.focus())},[n])},l=e=>{let{header:t,labelId:r}=e;return(0,n.jsx)("label",{htmlFor:r,children:(0,n.jsx)("h4",{children:t})})};var o=r(2113),A=r.n(o),i=r(8683),u=r.n(i);let c=(0,a.memo)((0,a.forwardRef)((e,t)=>{let{className:r,header:o,name:i,id:c,value:d,Placeholder:h,PlaceholderStyle:p,upperCase:g,type:m="text",...f}=e,_=(0,a.useId)(),x=(0,a.useId)();s({inputId:_,placeholderId:x,value:d});let v=g?null==d?void 0:d.toString().toUpperCase():d;return(0,n.jsxs)("div",{className:u()(A().wrapper,r),children:[(0,n.jsx)(l,{header:o,labelId:_}),(0,n.jsxs)("div",{className:A().placeholderWrapper,children:[(0,n.jsx)("input",{ref:t,id:u()(_,c),value:v,name:i,type:m,...f}),h&&!d&&(0,n.jsx)("span",{id:x,className:A().placeholder,style:p,children:h})]})]})}));c.displayName="Input";var d=r(8050);let h=e=>{let[t,r]=(0,a.useState)(e),n=(0,a.useCallback)((e,t)=>{let{value:n}=e.target;if(t&&n){let e=n.at(-1),r=null==e?void 0:e.match(t);if(!r)return}r(n)},[]);return[t,n]},p=e=>{let[t,r]=(0,a.useState)(e),n=(0,a.useCallback)(e=>{let{value:t}=e.target;(!t||(1!==t.length||t[0].match(/\D/))&&(2!==t.length||t[1].match(/\d/))&&(3!==t.length||t[2].match(/\d/))&&(4!==t.length||t[3].match(/\d/))&&(5!==t.length||t[4].match(/\D/))&&(6!==t.length||t[5].match(/\D/))&&(7!==t.length||t[6].match(/\d/))&&(8!==t.length||t[7].match(/\d/))&&(9!==t.length||t[8].match(/\d/)))&&r(t.toUpperCase())},[]);return[t,n]},g=e=>{let[t,r]=(0,a.useState)(e),n=(0,a.useCallback)(e=>{let{value:t}=e.target;if(t){if(!t.match(/^[\d\.]+$/))return;if(2===t.length||5===t.length)return r(t+".")}r(t)},[]);return[t,n]},m=e=>sessionStorage.getItem(e)||"",f=async e=>{try{let e=await Promise.resolve({status:"OK"});console.log(e),alert("Отправка успешна")}catch(e){console.log(e),alert("Ошибка отправки")}};var _=r(5235),x=r.n(_),v=r(4416),j=r.n(v);let b=e=>{let{closeForm:t,children:r}=e;return(0,n.jsx)("div",{className:j().closeBtn,onClick:t,children:"\xd7"})},C=e=>{let{toggleModal:t}=e,[r,s]=p(m("stateNumber")),[l,o]=h(m("automobile")),[A,i]=h(m("arrivalDate")),[u,_]=h(m("passportSeries")),[v,j]=h(m("passportNumber")),[C,E]=h(m("fullName")),[I,y]=h(m("issuedBy")),[B,w]=g(m("whenIssued")),N={stateNumber:r,automobile:l,arrivalDate:A,fullName:C,passportSeries:u,passportNumber:v,issuedBy:I,whenIssued:B},Q=[r,A,l,u,v,C,I,B];(0,a.useEffect)(()=>{Object.entries(N).forEach(e=>{let[t,r]=e;sessionStorage.setItem(t,r)})},Q);let P=()=>{t&&t(!1)};return(0,n.jsxs)("form",{className:x().form,onSubmit:e=>{e.preventDefault(),f(N)},children:[(0,n.jsx)(b,{closeForm:P}),(0,n.jsx)("h2",{children:"Транспортные средства и водители"}),(0,n.jsx)(c,{required:!0,autoFocus:!0,maxLength:9,minLength:9,name:"stateNumber",header:"Гос-номер",value:r,onChange:s,pattern:"\\D\\d{3}\\D{2}\\d{3}",placeholder:"Укажите гос-номер"}),(0,n.jsx)(c,{required:!0,name:"automobile",value:l,onChange:o,header:"Транспортное средство",placeholder:"Транспортное средство",upperCase:!0}),(0,n.jsx)(c,{required:!0,name:"arrivalDate",header:"Ориентировочная дата прибытия к покупателю",value:A,onChange:e=>{i(e),console.log(A)},Placeholder:"Дата *",type:"date"}),(0,n.jsx)("h3",{children:"Данные о водителе"}),(0,n.jsx)(c,{required:!0,name:"fullName",header:"ФИО",value:C,onChange:E,placeholder:"Укажите ФИО водителя"}),(0,n.jsxs)("div",{className:x().passport,children:[(0,n.jsx)("label",{htmlFor:"passport-input",children:(0,n.jsx)("h4",{children:"Паспортные данные"})}),(0,n.jsx)(c,{required:!0,name:"passportSeries",maxLength:4,minLength:4,id:"passport-input",type:"tel",value:u,onChange:e=>{_(e,RegExp("\\d","g"))},placeholder:"серия"}),(0,n.jsx)(c,{required:!0,name:"passportNumber",placeholder:"номер",type:"tel",maxLength:6,minLength:6,value:v,onChange:e=>j(e,RegExp("\\d","g"))})]}),(0,n.jsx)(c,{required:!0,value:I,name:"issuedBy",header:"Кем выдан","aria-required":!0,placeholder:"Кем выдан",onChange:y}),(0,n.jsx)(c,{required:!0,value:B,name:"whenIssued",header:"Когда выдан",placeholder:"Когда выдан",onChange:w,maxLength:10,minLength:10,pattern:"\\d{2}\\.\\d{2}\\.\\d{4}"}),(0,n.jsxs)("div",{className:x()["btn-group"],children:[(0,n.jsx)(d.z,{btnType:"full",children:"Отправить"}),(0,n.jsx)(d.z,{onClick:P,btnType:"transparent",children:"Отменить"})]})]})}},630:function(e,t,r){"use strict";r.r(t),r.d(t,{Header:function(){return h}});var n=r(9268),a=r(4640),s=r(6008),l=r(5846),o=r.n(l),A=r(6691),i=r.n(A),u=r(8683),c=r.n(u);let d=[{href:"/",text:"Задача 1"},{href:"/task2",text:"Задача 2"}],h=e=>{let{className:t,...r}=e,l=(0,s.usePathname)();return(0,n.jsx)(a.O,{...r,color:"silver",className:c()(i().header,t),children:d.map(e=>{let{href:t,text:r}=e;return(0,n.jsx)(o(),{href:t,className:c()({[i().active]:l===t}),children:r},t)})})}},4640:function(e,t,r){"use strict";r.d(t,{O:function(){return A}});var n=r(9268),a=r(8683),s=r.n(a),l=r(8359),o=r.n(l);let A=e=>{let{id:t,style:r,children:a,className:l,color:A="silver"}=e;return(0,n.jsx)("div",{id:t,style:r,className:s()(o()[A],o()["resize-cmp"],l),children:a})}},8739:function(e){e.exports={button:"s_button__iP3xa",transparent:"s_transparent__ZeHkW",full:"s_full__QzxOh"}},4416:function(e){e.exports={closeBtn:"s_closeBtn__xdEJt"}},5235:function(e){e.exports={form:"s_form__bEL6N",passport:"s_passport__8BMh2","btn-group":"s_btn-group__MKnze"}},6691:function(e){e.exports={header:"s_header__ICl6W",active:"s_active__IY1Qz"}},2113:function(e){e.exports={wrapper:"s_wrapper__9zfJF",placeholder:"s_placeholder__RFfA3",placeholderWrapper:"s_placeholderWrapper__WRsWG"}},8359:function(e){e.exports={"resize-cmp":"s_resize-cmp__kC_Nk",red:"s_red__Z3goj",yellow:"s_yellow__5yR1g",green:"s_green__yZOcM",silver:"s_silver__8Ma1E"}},4710:function(e,t,r){"use strict";r.r(t),t.default={src:"/_next/static/media/image.e4c047d6.jpg",height:960,width:1920,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAwT/2gAMAwEAAhADEAAAAIUPP//EAB8QAAAEBwEAAAAAAAAAAAAAAAEDEUIAAgQFEhMiUf/aAAgBAQABPwCo7shZipPrLUQeGTvY/8QAGhEBAAEFAAAAAAAAAAAAAAAAAQACAxITIv/aAAgBAgEBPwC6tWvJXmf/xAAZEQABBQAAAAAAAAAAAAAAAAABAAMTIWP/2gAIAQMBAT8AZqUaFf/Z",blurWidth:8,blurHeight:4}},6394:function(e,t,r){r(7630)}},function(e){e.O(0,[399,253,961,744],function(){return e(e.s=7410)}),_N_E=e.O()}]);