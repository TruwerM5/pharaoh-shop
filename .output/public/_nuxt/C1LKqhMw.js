import{u as E,_ as F}from"./ueFsN6oy.js";import{E as x,y as C,r as g,o as c,c as a,a as s,G as H,q as o,F as b,C as $,H as V,p as y,f as I,_ as z,I as v,J as R,K as D,A as G,u as J,b as f,w as S,t as m,d as K,e as M}from"./gIJAkteV.js";const U=x("/images/chevron-prev.svg"),X=x("/images/chevron-next.svg"),B=e=>(y("data-v-82593ba7"),e=e(),I(),e),j={class:"images-wrapper"},O={class:"product-images"},Q=["src","alt"],W={key:0,class:"product-images__buttons"},Y=B(()=>s("img",{src:U,alt:"Назад",class:"product-images__icon"},null,-1)),Z=[Y],ss=B(()=>s("img",{src:X,alt:"Вперед",class:"product-images__icon"},null,-1)),ts=[ss],es=C({__name:"ProductImageVue",props:{images:{}},setup(e){const n=e,_=g(0);function u(i){n.images.length<2||(i>0?_.value<n.images.length-1?_.value++:_.value=0:i<0&&(_.value>0?_.value--:_.value=n.images.length-1),console.log(_.value))}return(i,r)=>(c(),a("div",j,[s("div",O,[s("div",{class:"product-images__content",style:H({transform:`translateX(${-o(_)*100}%)`})},[(c(!0),a(b,null,$(i.images,(l,h)=>(c(),a("div",{key:h,class:"product-images__item"},[s("img",{class:"product-images__image",src:`/images/${l}`,alt:`Product${h+1}`},null,8,Q)]))),128))],4)]),i.images.length>1?(c(),a("div",W,[s("button",{onClick:r[0]||(r[0]=l=>u(-1)),class:"product-images__btn product-images__btn_prev"},Z),s("button",{onClick:r[1]||(r[1]=l=>u(1)),class:"product-images__btn product-images__btn_next"},ts)])):V("",!0)]))}}),os=z(es,[["__scopeId","data-v-82593ba7"]]),w=e=>(y("data-v-7ecd532d"),e=e(),I(),e),cs=w(()=>s("span",{class:v(["add-to-cart-btn__block"])},[s("img",{class:"add-to-cart-btn__icon",src:R,alt:"Добавить в корзину"}),s("span",{class:"add-to-cart-btn__text"},"Добавить")],-1)),as=[cs],ns=w(()=>s("img",{src:"/images/check-icon.svg",alt:"Checked",class:"add-to-cart-btn__check-icon"},null,-1)),_s=[ns],is=C({__name:"AddToCartBtnVue",setup(e){const n=g(!1);function _(){n.value||(n.value=!0,setTimeout(()=>{n.value=!1},800))}return(u,i)=>(c(),a("button",{onClick:_,class:v(["add-to-cart-btn",{clicked:o(n)}])},[s("span",{class:v(["add-to-cart-btn__inner",{clicked:o(n)}])},as,2),s("span",{class:v(["add-to-cart-btn__check",{clicked:o(n)}])},_s,2)],2))}}),rs=z(is,[["__scopeId","data-v-7ecd532d"]]),ds=x("/images/arrow-icon.svg"),A=e=>(y("data-v-af51f698"),e=e(),I(),e),ls={class:"product-details page"},us={key:0,class:"error"},ps={class:"error__text"},ms={key:1,class:"product-details__inner"},gs=A(()=>s("img",{class:"go-back-btn__icon",src:ds,alt:"Назад"},null,-1)),vs={class:"product-info px-[30px]"},hs={class:"carousel"},fs={class:"product-info__bottom"},bs={class:"block product-info__name"},ks={class:"block product-info__price"},$s={class:"product-info__colors"},xs=A(()=>s("span",{class:"product-info__color"},"Цвет: ",-1)),Cs={class:"sizes"},ys=["onClick"],Is={class:"sizes__text"},zs=C({__name:"[id]",setup(e){const n=E(),_=D(),u=G(),i=g(""),r=g();function l(d){r.value=d}function h(d){return n.getById(Number(d))}const t=g(h(u.params.id));t.value?(J({title:t.value.name}),t.value.sizes&&l(0)):i.value="Товар не найден.";function N(){let d;t.value&&(t.value.sizes&&r.value!=null?d=t.value.sizes[r.value]:d=void 0,_.addToCart(t.value,d,1),console.log("Size: ",d),console.log("Added product",t.value))}return(d,Ss)=>{const P=F,T=M,L=os,q=rs;return c(),a("div",ls,[o(i)?(c(),a("div",us,[f(P,null,{message:S(()=>[s("span",ps,m(o(i)),1)]),_:1})])):o(t)?(c(),a("div",ms,[f(T,{to:{path:"/categories",query:{category:o(t).category}},class:"go-back-btn"},{default:S(()=>[gs]),_:1},8,["to"]),s("div",vs,[s("div",hs,[f(L,{images:o(t).images},null,8,["images"])]),s("div",fs,[s("span",bs,m(o(t).name),1),s("span",ks,m(o(t).price)+"р. ",1),s("div",$s,[xs,(c(!0),a(b,null,$(o(t).colors,(k,p)=>(c(),a("span",{key:p,class:"product-info__color"},m(k),1))),128))])]),s("div",Cs,[o(t).sizes?(c(!0),a(b,{key:0},$(o(t).sizes,(k,p)=>(c(),a("button",{key:p,onClick:Vs=>l(p),class:v(["sizes__btn",{selected:o(r)==p}])},[s("span",Is,m(k),1)],10,ys))),128)):(c(),a(b,{key:1},[K(" Без размера ")],64))]),f(q,{onClick:N,class:"mt-[20px]"})])])):V("",!0)])}}}),As=z(zs,[["__scopeId","data-v-af51f698"]]);export{As as default};
