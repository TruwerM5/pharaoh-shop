import{X as s}from"./ecQgoOz_.js";import{u as o}from"./Ds07txH6.js";const e=o(),d=s((r,u)=>{setTimeout(()=>{r.query?(e.setFilters(r.params.category,r.query),e.currentProducts=e.filteredProducts):e.currentProducts=e.products.filter(t=>t.category==r.params.category),e.setFilters(r.params.category,r.query)},400)});export{d as default};