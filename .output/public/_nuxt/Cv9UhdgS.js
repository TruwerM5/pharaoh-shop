import{_ as D}from"./CTVdoq6E.js";import{_ as F}from"./1wFA18ik.js";import{R as U,y as k,q as e,o as n,c,a as s,S as w,F as m,B as $,D as p,I as z,p as x,f as I,_ as y,z as B,r as f,U as X,A as E,J as H,u as J,b as h,w as G,t as b,d as M,e as j}from"./CWesRufG.js";import{u as K}from"./ug6tRZ8t.js";const P=U("useImagesStore",{state:()=>({currentIndex:0,isGalleryOpened:!1}),actions:{setCurrentIndex(t){this.currentIndex=t},openGallery(){this.isGalleryOpened=!0},closeGallery(){this.isGalleryOpened=!1}}}),Q=t=>(x("data-v-3e4b4abc"),t=t(),I(),t),W={key:0,class:"images-details"},Y={class:"images-details__inner"},Z=["src","alt"],ss={class:"images-details__buttons"},es=["onClick"],ts=["src","alt"],os=Q(()=>s("img",{src:F,alt:"Закрыть",class:"images-details__icon"},null,-1)),as=[os],ns=k({__name:"ProductImageBigVue",props:{images:{}},setup(t){const o=P();return(l,r)=>e(o).isGalleryOpened?(n(),c("div",W,[s("div",Y,[s("ul",{class:"images-details__list",style:w({transform:`translateX(${-e(o).currentIndex*100}%)`})},[(n(!0),c(m,null,$(l.images,(_,i)=>(n(),c("li",{key:i,class:"images-details__item"},[s("img",{src:`/images/${_}`,alt:`${_}`,class:"images-details__image"},null,8,Z)]))),128))],4)]),s("div",ss,[(n(!0),c(m,null,$(l.images,(_,i)=>(n(),c("button",{key:i,onClick:d=>e(o).setCurrentIndex(i),class:p(["images-details__btn",{active:e(o).currentIndex==i}])},[s("img",{src:`/images/${_}`,alt:`${i}`,class:"images-details__btn-icon"},null,8,ts)],10,es))),128))]),s("button",{onClick:r[0]||(r[0]=(..._)=>e(o).closeGallery&&e(o).closeGallery(..._)),class:"images-details__close-btn"},as)])):z("",!0)}}),cs=y(ns,[["__scopeId","data-v-3e4b4abc"]]),is=B("/images/chevron-prev.svg"),_s=B("/images/chevron-next.svg"),N=t=>(x("data-v-204d8e91"),t=t(),I(),t),rs={class:"images-wrapper"},ls={class:"product-images"},ds=["src","alt"],us={key:0,class:"product-images__buttons"},ms=N(()=>s("img",{src:is,alt:"Назад",class:"product-images__icon"},null,-1)),ps=[ms],gs=N(()=>s("img",{src:_s,alt:"Вперед",class:"product-images__icon"},null,-1)),vs=[gs],hs=k({__name:"ProductImageVue",props:{images:{}},setup(t){const o=t,l=P(),r=f(0);function _(i){o.images.length<2||(i>0?r.value<o.images.length-1?r.value++:r.value=0:i<0&&(r.value>0?r.value--:r.value=o.images.length-1),l.setCurrentIndex(r.value))}return(i,d)=>(n(),c("div",rs,[s("div",ls,[s("div",{class:"product-images__content",style:w({transform:`translateX(${-e(l).currentIndex*100}%)`})},[(n(!0),c(m,null,$(i.images,(g,a)=>(n(),c("div",{key:a,class:"product-images__item"},[s("img",{class:"product-images__image",src:`/images/${g}`,alt:`Product${a+1}`,onClick:d[0]||(d[0]=(...C)=>e(l).openGallery&&e(l).openGallery(...C))},null,8,ds)]))),128))],4)]),i.images.length>1?(n(),c("div",us,[s("button",{onClick:d[1]||(d[1]=g=>_(-1)),class:"product-images__btn product-images__btn_prev"},ps),s("button",{onClick:d[2]||(d[2]=g=>_(1)),class:"product-images__btn product-images__btn_next"},vs)])):z("",!0)]))}}),bs=y(hs,[["__scopeId","data-v-204d8e91"]]),T=t=>(x("data-v-ed3a4c05"),t=t(),I(),t),fs={class:"add-to-cart-btn__wrapper"},$s=T(()=>s("span",{class:p(["add-to-cart-btn__block"])},[s("img",{class:"add-to-cart-btn__icon",src:X,alt:"Добавить в корзину"}),s("span",{class:"add-to-cart-btn__text"},"В корзину")],-1)),ks=[$s],xs=T(()=>s("img",{src:"/images/check-icon.svg",alt:"Checked",class:"add-to-cart-btn__check-icon"},null,-1)),Is=[xs],ys=k({__name:"AddToCartBtnVue",setup(t){const o=f(!1);function l(){o.value||(o.value=!0,setTimeout(()=>{o.value=!1},800))}return(r,_)=>(n(),c("button",{onClick:l,class:p(["add-to-cart-btn primary-button",{clicked:e(o)}])},[s("span",fs,[s("span",{class:p(["add-to-cart-btn__inner",{clicked:e(o)}])},ks,2),s("span",{class:p(["add-to-cart-btn__check",{clicked:e(o)}])},Is,2)])],2))}}),Cs=y(ys,[["__scopeId","data-v-ed3a4c05"]]),Ss=B("/images/arrow-icon.svg"),V=t=>(x("data-v-e7ab024d"),t=t(),I(),t),zs={class:"product-details page"},Bs={key:0,class:"error"},Vs={class:"error__text"},Gs={key:1,class:"product-details__inner"},ws=V(()=>s("img",{class:"go-back-btn__icon",src:Ss,alt:"Назад"},null,-1)),Ps={class:"product-info px-[30px]"},Ns={class:"carousel"},Ts={class:"product-info__bottom"},As={class:"block product-info__name"},Os={class:"block product-info__price"},Ls={class:"product-info__colors"},qs=V(()=>s("span",{class:"product-info__color"},"Цвет: ",-1)),Rs={class:"sizes"},Ds=["onClick"],Fs={class:"sizes__text"},Us=V(()=>s("div",{class:"product-about px-[30px]"},[s("span",{class:"product-about__title"},"О товаре"),s("p",{class:"product-about__text"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ab reprehenderit dolores minus beatae, aperiam voluptatem dicta in dolor, facilis et excepturi, distinctio quas debitis soluta at exercitationem labore quos.")],-1)),Xs=k({__name:"[id]",setup(t){const o=K(),l=E(),r=H(),_=f(""),i=f();function d(u){i.value=u}function g(u){return o.getById(Number(u))}const a=f(g(r.params.id));a.value?(J({title:a.value.name}),a.value.sizes&&d(0)):_.value="Товар не найден.";function C(){let u;a.value&&(a.value.sizes&&i.value!=null?u=a.value.sizes[i.value]:u=void 0,l.addToCart(a.value,u,1))}return(u,Es)=>{const A=D,O=cs,L=j,q=bs,R=Cs;return n(),c("div",zs,[e(_)?(n(),c("div",Bs,[h(A,null,{message:G(()=>[s("span",Vs,b(e(_)),1)]),_:1})])):e(a)?(n(),c("div",Gs,[h(O,{images:e(a).images},null,8,["images"]),h(L,{to:{path:`/categories/${e(a).category}`},class:"go-back-btn"},{default:G(()=>[ws]),_:1},8,["to"]),s("div",Ps,[s("div",Ns,[h(q,{images:e(a).images},null,8,["images"])]),s("div",Ts,[s("span",As,b(e(a).name),1),s("span",Os,b(e(a).price)+"р. ",1),s("div",Ls,[qs,(n(!0),c(m,null,$(e(a).colors,(S,v)=>(n(),c("span",{key:v,class:"product-info__color"},b(S),1))),128))])]),s("div",Rs,[e(a).sizes?(n(!0),c(m,{key:0},$(e(a).sizes,(S,v)=>(n(),c("button",{key:v,onClick:Hs=>d(v),class:p(["sizes__btn",{selected:e(i)==v}])},[s("span",Fs,b(S),1)],10,Ds))),128)):(n(),c(m,{key:1},[M(" Без размера ")],64))]),h(R,{onClick:C,class:"mt-[20px]"})]),Us])):z("",!0)])}}}),Qs=y(Xs,[["__scopeId","data-v-e7ab024d"]]);export{Qs as default};
