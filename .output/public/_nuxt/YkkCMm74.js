import{_ as g,a as O}from"./CCzHu5XG.js";import{z as w,y as m,A as h,o,c as i,a as t,b as r,w as p,t as l,d as x,F as q,B as L,e as T,p as f,f as v,_ as k,C as b,T as z,q as n,D as R,E as A,r as E,G as F,H as V,I as y}from"./gL9OXyPW.js";import{_ as j}from"./CmVlM23W.js";const D=w("/images/minus-icon.svg"),G=w("/images/plus-icon.svg"),M=e=>(f("data-v-b23c6e61"),e=e(),v(),e),W={class:"product"},H={class:"product__content"},P=["src","alt"],U={class:"product__info"},J={class:"product__name block"},K={class:"product__size block"},Q={class:"uppercase"},X={class:"product__color block"},Y={class:"product__quantity-block"},Z=M(()=>t("img",{src:D,alt:"Удалить"},null,-1)),tt=[Z],et={class:"product__quantity"},st=M(()=>t("img",{src:G,alt:"Добавить"},null,-1)),ct=[st],ot={class:"product__sum"},at=m({__name:"CartItemVue",props:{cartproduct:{}},setup(e){const s=e,a=h();function _(){if(s.cartproduct.quantity<2){u();return}s.cartproduct.quantity--}function d(){s.cartproduct.quantity>9||s.cartproduct.quantity++}function u(){a.setProductOnRemove(s.cartproduct.id,s.cartproduct.size),a.openModal(),console.log(" On delete from cart item ",a.productOnRemove)}return(c,I)=>{const C=T;return o(),i("li",W,[t("div",H,[r(C,{to:{path:`/products/${c.cartproduct.id}`},class:"product__link"},{default:p(()=>[t("img",{src:`/images/${c.cartproduct.images[0]}`,alt:c.cartproduct.name,class:"product__image"},null,8,P)]),_:1},8,["to"]),t("div",U,[t("span",J,l(c.cartproduct.name),1),t("span",K,[x("Размер: "),t("span",Q,l(c.cartproduct.size),1)]),t("span",X,[x("Цвет: "),(o(!0),i(q,null,L(c.cartproduct.colors,$=>(o(),i("span",null,l($),1))),256))]),t("div",Y,[t("button",{onClick:_,class:"product__btn product__btn_decrement"},tt),t("span",et,l(c.cartproduct.quantity),1),t("button",{onClick:d,class:"product__btn product__btn_increment"},ct)]),t("span",ot,l(c.cartproduct.quantity)+" × "+l(c.cartproduct.price)+" = "+l(c.cartproduct.quantity*c.cartproduct.price),1)]),t("button",{class:"product__remove-btn"},[t("img",{src:g,alt:"Удалить из корзины",class:"product__remove-icon",onClick:u})])])])}}}),nt=k(at,[["__scopeId","data-v-b23c6e61"]]),_t=e=>(f("data-v-5cbc7877"),e=e(),v(),e),dt={class:"cart-list"},lt={class:"cart-list__content"},it={class:"cart-list__total-sum flex justify-between items-center mt-[10px] font-semibold"},ut={class:"ml-auto"},rt=_t(()=>t("span",{class:"cart-list__text block"},"Цена указана без учета доставки",-1)),pt=m({__name:"CartListVue",props:{cartList:{}},setup(e){const s=h();return(a,_)=>{const d=nt;return o(),i("div",dt,[t("ul",lt,[r(z,{name:"hide"},{default:p(()=>[(o(!0),i(q,null,L(a.cartList,u=>(o(),b(d,{key:u.id,cartproduct:u,class:"cart-list__item"},null,8,["cartproduct"]))),128))]),_:1})]),t("span",it,[x(" Итого: "),t("span",ut,l(n(s).getTotalSum)+"р.",1)]),rt])}}}),mt=k(pt,[["__scopeId","data-v-5cbc7877"]]),N=e=>(f("data-v-977e4381"),e=e(),v(),e),ht={class:"modal"},ft=N(()=>t("span",{class:"modal__message"}," Удалить товар из корзины? ",-1)),vt=N(()=>t("img",{src:g,alt:"Закрыть"},null,-1)),kt=[vt],bt=m({__name:"ModalWindowVue",setup(e){const s=h();function a(){s.closeModal()}function _(){s.removeFromCart()}return(d,u)=>(o(),i("div",ht,[t("div",{class:"modal__inner"},[ft,t("div",{class:"modal__buttons"},[t("button",{onClick:a,class:"modal__btn modal__btn_cancel"}," Нет "),t("button",{onClick:_,class:"modal__btn modal__btn_accept"}," Да ")]),t("button",{onClick:a,class:"modal__close-btn"},kt)])]))}}),Ct=k(bt,[["__scopeId","data-v-977e4381"]]),S=e=>(f("data-v-e9563d7f"),e=e(),v(),e),$t={class:"checkout modal"},yt=S(()=>t("img",{src:g,alt:"Отмена",class:"modal__close-icon"},null,-1)),xt=[yt],gt={class:"checkout__inner"},St=A('<div class="checkout__block" data-v-e9563d7f><input type="text" name="email" id="email" class="input checkout__input" placeholder="example@mail.ru" data-v-e9563d7f><span class="checkout__label" data-v-e9563d7f>Email*</span></div><div class="checkout__block" data-v-e9563d7f><input type="text" name="username" id="username" class="input checkout__input" data-v-e9563d7f><span class="checkout__label" data-v-e9563d7f>Имя*</span></div><div class="checkout__block" data-v-e9563d7f><input type="text" name="phone_number" id="phone_number" class="input checkout__input" placeholder="+7(999)-999-99-99" data-v-e9563d7f><span class="checkout__label" data-v-e9563d7f>Номер телефона*</span></div><div class="checkout__block" data-v-e9563d7f><input type="text" name="city" id="address" class="input checkout__input" data-v-e9563d7f><span class="checkout__label" data-v-e9563d7f>Город*</span></div><div class="checkout__block" data-v-e9563d7f><input type="text" name="street" id="street" class="input checkout__input" data-v-e9563d7f><span class="checkout__label" data-v-e9563d7f>Улица*</span></div><div class="checkout__block" data-v-e9563d7f><input type="text" name="house" id="house" class="input checkout__input" data-v-e9563d7f><span class="checkout__label" data-v-e9563d7f>№ дома*</span></div><div class="checkout__block" data-v-e9563d7f><input type="text" name="flat" id="flat" class="input checkout__input" data-v-e9563d7f><span class="checkout__label" data-v-e9563d7f>№ квартиры</span></div><div class="checkout__block" data-v-e9563d7f><input type="text" name="comment" id="comment" class="input checkout__input" data-v-e9563d7f><span class="checkout__label" data-v-e9563d7f>Комментарий</span></div>',8),It=[St],Vt=S(()=>t("p",{class:"checkout__text"},"* - обязательное поле",-1)),wt=S(()=>t("button",{class:"primary-button"},"Заказать",-1)),qt=m({__name:"CheckoutVue",setup(e){const s=h();return(a,_)=>(o(),i("div",$t,[t("button",{class:"checkout__close-btn modal__close-btn",onClick:_[0]||(_[0]=(...d)=>n(s).closeCheckout&&n(s).closeCheckout(...d))},xt),t("div",gt,[t("form",{onSubmit:_[1]||(_[1]=R(()=>{},["prevent"])),class:"checkout__form form"},It,32),Vt,wt])]))}}),Lt=k(qt,[["__scopeId","data-v-e9563d7f"]]),Mt=e=>(f("data-v-0d27d9b5"),e=e(),v(),e),Nt={key:0,class:"cart page h-full"},Bt={class:"cart__title page-title"},Ot=Mt(()=>t("span",{class:"cart__message text-[25px] text-left"},"В корзине нет товаров",-1)),Tt={key:1,class:"cart__inner h-full"},zt={class:"flex flex-col justify-between h-full flex-1"},Rt=m({__name:"cart",setup(e){const s=h(),a=E(!1);return F(()=>{a.value=!0}),(_,d)=>{const u=O,c=mt,I=j,C=Ct,$=Lt;return n(a)?(o(),i("div",Nt,[t("h1",Bt,"Корзина ("+l(n(s).getCartCount)+")",1),n(s).getCartCount==0?(o(),b(u,{key:0},{message:p(()=>[Ot]),_:1})):(o(),i("div",Tt,[r(I,{class:"flex flex-col flex-1"},{content:p(()=>[t("div",zt,[r(c,{"cart-list":n(s).cart},null,8,["cart-list"]),t("button",{onClick:d[0]||(d[0]=(...B)=>n(s).openCheckout&&n(s).openCheckout(...B)),class:"cart__open-checkout-button primary-button"},"Заказать")])]),_:1})])),r(V,{name:"modal"},{default:p(()=>[n(s).isModalOpened?(o(),b(C,{key:0})):y("",!0)]),_:1}),r(V,{name:"modal"},{default:p(()=>[n(s).isCheckoutOpened?(o(),b($,{key:0})):y("",!0)]),_:1})])):y("",!0)}}}),jt=k(Rt,[["__scopeId","data-v-0d27d9b5"]]);export{jt as default};
