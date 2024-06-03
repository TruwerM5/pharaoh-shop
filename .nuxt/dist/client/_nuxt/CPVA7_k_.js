import{_ as g,a as O}from"./DviNveDu.js";import{z as w,y as m,A as b,o as e,c as i,a as t,b as r,w as p,t as l,d as x,F as q,B as L,e as T,p as h,f as v,_ as k,C as f,T as z,q as n,D as R,E as A,r as E,G as F,H as V,I as y}from"./ecQgoOz_.js";import{_ as j}from"./C51amIX2.js";const D=w("/images/minus-icon.svg"),G=w("/images/plus-icon.svg"),M=s=>(h("data-v-b23c6e61"),s=s(),v(),s),W={class:"product"},H={class:"product__content"},P=["src","alt"],U={class:"product__info"},J={class:"product__name block"},K={class:"product__size block"},Q={class:"uppercase"},X={class:"product__color block"},Y={class:"product__quantity-block"},Z=M(()=>t("img",{src:D,alt:"Удалить"},null,-1)),tt=[Z],st={class:"product__quantity"},ct=M(()=>t("img",{src:G,alt:"Добавить"},null,-1)),ot=[ct],et={class:"product__sum"},at=m({__name:"CartItemVue",props:{cartproduct:{}},setup(s){const c=s,a=b();function _(){if(c.cartproduct.quantity<2){u();return}c.cartproduct.quantity--}function d(){c.cartproduct.quantity>9||c.cartproduct.quantity++}function u(){a.setProductOnRemove(c.cartproduct.id,c.cartproduct.size),a.openModal(),console.log(" On delete from cart item ",a.productOnRemove)}return(o,I)=>{const C=T;return e(),i("li",W,[t("div",H,[r(C,{to:{path:`/products/${o.cartproduct.id}`},class:"product__link"},{default:p(()=>[t("img",{src:`/images/${o.cartproduct.images[0]}`,alt:o.cartproduct.name,class:"product__image"},null,8,P)]),_:1},8,["to"]),t("div",U,[t("span",J,l(o.cartproduct.name),1),t("span",K,[x("Размер: "),t("span",Q,l(o.cartproduct.size),1)]),t("span",X,[x("Цвет: "),(e(!0),i(q,null,L(o.cartproduct.colors,$=>(e(),i("span",null,l($),1))),256))]),t("div",Y,[t("button",{onClick:_,class:"product__btn product__btn_decrement"},tt),t("span",st,l(o.cartproduct.quantity),1),t("button",{onClick:d,class:"product__btn product__btn_increment"},ot)]),t("span",et,l(o.cartproduct.quantity)+" × "+l(o.cartproduct.price)+" = "+l(o.cartproduct.quantity*o.cartproduct.price),1)]),t("button",{class:"product__remove-btn"},[t("img",{src:g,alt:"Удалить из корзины",class:"product__remove-icon",onClick:u})])])])}}}),nt=k(at,[["__scopeId","data-v-b23c6e61"]]),_t=s=>(h("data-v-5cbc7877"),s=s(),v(),s),dt={class:"cart-list"},lt={class:"cart-list__content"},it={class:"cart-list__total-sum flex justify-between items-center mt-[10px] font-semibold"},ut={class:"ml-auto"},rt=_t(()=>t("span",{class:"cart-list__text block"},"Цена указана без учета доставки",-1)),pt=m({__name:"CartListVue",props:{cartList:{}},setup(s){const c=b();return(a,_)=>{const d=nt;return e(),i("div",dt,[t("ul",lt,[r(z,{name:"hide"},{default:p(()=>[(e(!0),i(q,null,L(a.cartList,u=>(e(),f(d,{key:u.id,cartproduct:u,class:"cart-list__item"},null,8,["cartproduct"]))),128))]),_:1})]),t("span",it,[x(" Итого: "),t("span",ut,l(n(c).getTotalSum)+"р.",1)]),rt])}}}),mt=k(pt,[["__scopeId","data-v-5cbc7877"]]),N=s=>(h("data-v-977e4381"),s=s(),v(),s),bt={class:"modal"},ht=N(()=>t("span",{class:"modal__message"}," Удалить товар из корзины? ",-1)),vt=N(()=>t("img",{src:g,alt:"Закрыть"},null,-1)),kt=[vt],ft=m({__name:"ModalWindowVue",setup(s){const c=b();function a(){c.closeModal()}function _(){c.removeFromCart()}return(d,u)=>(e(),i("div",bt,[t("div",{class:"modal__inner"},[ht,t("div",{class:"modal__buttons"},[t("button",{onClick:a,class:"modal__btn modal__btn_cancel"}," Нет "),t("button",{onClick:_,class:"modal__btn modal__btn_accept"}," Да ")]),t("button",{onClick:a,class:"modal__close-btn"},kt)])]))}}),Ct=k(ft,[["__scopeId","data-v-977e4381"]]),S=s=>(h("data-v-14b582db"),s=s(),v(),s),$t={class:"checkout modal"},yt=S(()=>t("img",{src:g,alt:"Отмена"},null,-1)),xt=[yt],gt={class:"checkout__inner"},St=A('<div class="checkout__block" data-v-14b582db><input type="text" name="email" id="email" class="input checkout__input" placeholder="example@mail.ru" data-v-14b582db><span class="checkout__label" data-v-14b582db>Email*</span></div><div class="checkout__block" data-v-14b582db><input type="text" name="username" id="username" class="input checkout__input" data-v-14b582db><span class="checkout__label" data-v-14b582db>Имя*</span></div><div class="checkout__block" data-v-14b582db><input type="text" name="phone_number" id="phone_number" class="input checkout__input" placeholder="+7(999)-999-99-99" data-v-14b582db><span class="checkout__label" data-v-14b582db>Номер телефона*</span></div><div class="checkout__block" data-v-14b582db><input type="text" name="city" id="address" class="input checkout__input" data-v-14b582db><span class="checkout__label" data-v-14b582db>Город*</span></div><div class="checkout__block" data-v-14b582db><input type="text" name="street" id="street" class="input checkout__input" data-v-14b582db><span class="checkout__label" data-v-14b582db>Улица*</span></div><div class="checkout__block" data-v-14b582db><input type="text" name="house" id="house" class="input checkout__input" data-v-14b582db><span class="checkout__label" data-v-14b582db>№ дома*</span></div><div class="checkout__block" data-v-14b582db><input type="text" name="flat" id="flat" class="input checkout__input" data-v-14b582db><span class="checkout__label" data-v-14b582db>№ квартиры</span></div><div class="checkout__block" data-v-14b582db><input type="text" name="comment" id="comment" class="input checkout__input" data-v-14b582db><span class="checkout__label" data-v-14b582db>Комментарий</span></div>',8),It=[St],Vt=S(()=>t("p",{class:"checkout__text"},"* - обязательное поле",-1)),wt=S(()=>t("button",{class:"primary-button"},"Заказать",-1)),qt=m({__name:"CheckoutVue",setup(s){const c=b();return(a,_)=>(e(),i("div",$t,[t("button",{class:"checkout__close-btn modal__close-btn",onClick:_[0]||(_[0]=(...d)=>n(c).closeCheckout&&n(c).closeCheckout(...d))},xt),t("div",gt,[t("form",{onSubmit:_[1]||(_[1]=R(()=>{},["prevent"])),class:"checkout__form form"},It,32),Vt,wt])]))}}),Lt=k(qt,[["__scopeId","data-v-14b582db"]]),Mt=s=>(h("data-v-0d27d9b5"),s=s(),v(),s),Nt={key:0,class:"cart page h-full"},Bt={class:"cart__title page-title"},Ot=Mt(()=>t("span",{class:"cart__message text-[25px] text-left"},"В корзине нет товаров",-1)),Tt={key:1,class:"cart__inner h-full"},zt={class:"flex flex-col justify-between h-full flex-1"},Rt=m({__name:"cart",setup(s){const c=b(),a=E(!1);return F(()=>{a.value=!0}),(_,d)=>{const u=O,o=mt,I=j,C=Ct,$=Lt;return n(a)?(e(),i("div",Nt,[t("h1",Bt,"Корзина ("+l(n(c).getCartCount)+")",1),n(c).getCartCount==0?(e(),f(u,{key:0},{message:p(()=>[Ot]),_:1})):(e(),i("div",Tt,[r(I,{class:"flex flex-col flex-1"},{content:p(()=>[t("div",zt,[r(o,{"cart-list":n(c).cart},null,8,["cart-list"]),t("button",{onClick:d[0]||(d[0]=(...B)=>n(c).openCheckout&&n(c).openCheckout(...B)),class:"cart__open-checkout-button primary-button"},"Заказать")])]),_:1})])),r(V,{name:"modal"},{default:p(()=>[n(c).isModalOpened?(e(),f(C,{key:0})):y("",!0)]),_:1}),r(V,{name:"modal"},{default:p(()=>[n(c).isCheckoutOpened?(e(),f($,{key:0})):y("",!0)]),_:1})])):y("",!0)}}}),jt=k(Rt,[["__scopeId","data-v-0d27d9b5"]]);export{jt as default};