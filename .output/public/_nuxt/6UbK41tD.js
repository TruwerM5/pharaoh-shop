import{_ as l}from"./DZWMdy40.js";import{_ as m}from"./pq1cnfMv.js";import{y as d,J as g,r as c,o as n,c as _,q as e,a as f,t as y,I as h,b as u,w as v}from"./CWesRufG.js";import{u as x}from"./ug6tRZ8t.js";import"./CTVdoq6E.js";const C={class:"categories page"},S={key:0,class:"categories__nav"},V={class:"categories__title page-title"},D=d({__name:"[category]",setup(k){const o=g(),s=x(),t=c([]),a=c("qwe");return o.params.category?(t.value=s.products.filter(r=>r.category==o.params.category),a.value=s.getCategoryTitle(o.params.category)):t.value=s.products,(r,w)=>{const i=l,p=m;return n(),_("div",C,[e(t).length>0?(n(),_("div",S,[f("h1",V,y(e(a)?e(a)[1]:""),1)])):h("",!0),u(p,null,{content:v(()=>[u(i,{products:e(t)},null,8,["products"])]),_:1})])}}});export{D as default};