import{s as Re,d as N,i as H,a as ie,b as X,c as D,h as pe,e as K,f as le,g as ne,j as k,k as J,l as oe,m as we,o as ce,n as We,p as Se,q as ue}from"../chunks/scheduler.cXSv0lVe.js";import{S as De,i as ke,d as F,t as f,a as E,e as x,m as A,c as v,b as U,g as ee}from"../chunks/index.DpaiaTSd.js";import{e as Me,s as he,Q as ae,p as Ce,r as Ee,C as be}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.Bpzb1-LE.js";import{w as Oe}from"../chunks/entry.Ch6Ck2Bw.js";import{h as q}from"../chunks/setTrackProxy.Cyfckp0w.js";import{p as Ie}from"../chunks/stores.Ctfy9dEC.js";import{G as Fe}from"../chunks/Grid.CemtPjU6.js";import{Q as te,H as re}from"../chunks/Heatmap.BIGrQvfu.js";import{B as Ae}from"../chunks/BarChart.qE-BGk_d.js";import{p as ve}from"../chunks/profile.BW8tN6E9.js";function Ue(y){return{c(){this.h()},l(t){this.h()},h(){document.title="Evidence"},m:ue,p:ue,d:ue}}function me(y){let t,s;return t=new te({props:{queryID:"day_of_week_amazon",queryResult:y[0]}}),{c(){U(t.$$.fragment)},l(a){v(t.$$.fragment,a)},m(a,_){A(t,a,_),s=!0},p(a,_){const i={};_[0]&1&&(i.queryResult=a[0]),t.$set(i)},i(a){s||(E(t.$$.fragment,a),s=!0)},o(a){f(t.$$.fragment,a),s=!1},d(a){F(t,a)}}}function Te(y){let t,s;return t=new te({props:{queryID:"day_of_week_bestbuy",queryResult:y[1]}}),{c(){U(t.$$.fragment)},l(a){v(t.$$.fragment,a)},m(a,_){A(t,a,_),s=!0},p(a,_){const i={};_[0]&2&&(i.queryResult=a[1]),t.$set(i)},i(a){s||(E(t.$$.fragment,a),s=!0)},o(a){f(t.$$.fragment,a),s=!1},d(a){F(t,a)}}}function Ne(y){let t,s;return t=new te({props:{queryID:"day_of_week_newegg",queryResult:y[2]}}),{c(){U(t.$$.fragment)},l(a){v(t.$$.fragment,a)},m(a,_){A(t,a,_),s=!0},p(a,_){const i={};_[0]&4&&(i.queryResult=a[2]),t.$set(i)},i(a){s||(E(t.$$.fragment,a),s=!0)},o(a){f(t.$$.fragment,a),s=!1},d(a){F(t,a)}}}function fe(y){let t,s;return t=new te({props:{queryID:"day_of_week_walmart",queryResult:y[3]}}),{c(){U(t.$$.fragment)},l(a){v(t.$$.fragment,a)},m(a,_){A(t,a,_),s=!0},p(a,_){const i={};_[0]&8&&(i.queryResult=a[3]),t.$set(i)},i(a){s||(E(t.$$.fragment,a),s=!0)},o(a){f(t.$$.fragment,a),s=!1},d(a){F(t,a)}}}function $e(y){let t,s,a,_,i,r,M,b;return t=new re({props:{data:y[0],x:"day_week",y:"day_hour",value:"num_listings",title:"Amazon",cellHeight:"15",colorScale:[["rgb(251, 208, 143)"],["rgb(238, 143, 0)"]]}}),a=new re({props:{data:y[1],x:"day_week",y:"day_hour",value:"num_listings",title:"Best Buy",cellHeight:"15",colorScale:[["rgb(195, 216, 255)"],["rgb(10, 74, 191)"]]}}),i=new re({props:{data:y[2],x:"day_week",y:"day_hour",value:"num_listings",title:"Newegg",cellHeight:"15",colorScale:[["rgb(253, 239, 136)"],["rgb(136, 120, 2)"]]}}),M=new re({props:{data:y[3],x:"day_week",y:"day_hour",value:"num_listings",title:"Walmart",cellHeight:"15",colorScale:[["rgb(238, 243, 255)"],["rgb(0, 81, 255)"]]}}),{c(){U(t.$$.fragment),s=k(),U(a.$$.fragment),_=k(),U(i.$$.fragment),r=k(),U(M.$$.fragment)},l(d){v(t.$$.fragment,d),s=D(d),v(a.$$.fragment,d),_=D(d),v(i.$$.fragment,d),r=D(d),v(M.$$.fragment,d)},m(d,R){A(t,d,R),H(d,s,R),A(a,d,R),H(d,_,R),A(i,d,R),H(d,r,R),A(M,d,R),b=!0},p(d,R){const h={};R[0]&1&&(h.data=d[0]),t.$set(h);const p={};R[0]&2&&(p.data=d[1]),a.$set(p);const w={};R[0]&4&&(w.data=d[2]),i.$set(w);const S={};R[0]&8&&(S.data=d[3]),M.$set(S)},i(d){b||(E(t.$$.fragment,d),E(a.$$.fragment,d),E(i.$$.fragment,d),E(M.$$.fragment,d),b=!0)},o(d){f(t.$$.fragment,d),f(a.$$.fragment,d),f(i.$$.fragment,d),f(M.$$.fragment,d),b=!1},d(d){d&&(N(s),N(_),N(r)),F(t,d),F(a,d),F(i,d),F(M,d)}}}function ge(y){let t,s;return t=new te({props:{queryID:"retailer_availability",queryResult:y[4]}}),{c(){U(t.$$.fragment)},l(a){v(t.$$.fragment,a)},m(a,_){A(t,a,_),s=!0},p(a,_){const i={};_[0]&16&&(i.queryResult=a[4]),t.$set(i)},i(a){s||(E(t.$$.fragment,a),s=!0)},o(a){f(t.$$.fragment,a),s=!1},d(a){F(t,a)}}}function Be(y){let t,s,a,_,i,r,M='<a href="#restock-alert-frequency-by-day-of-week">Restock Alert Frequency by day of week</a>',b,d,R="Which days see most of the GPU restock alerts?",h,p,w,S,$,O,z,c,B='<a href="#availability-by-retailer">Availability by Retailer</a>',G,I,V="Which retailers restock the most GPUs?",Q,C,W,Y;function Z(e,n){return Ue}let L=Z()(y),u=y[0]&&me(y),l=y[1]&&Te(y),o=y[2]&&Ne(y),m=y[3]&&fe(y);O=new Fe({props:{cols:"2",$$slots:{default:[$e]},$$scope:{ctx:y}}});let T=y[4]&&ge(y);return W=new Ae({props:{data:y[4],x:"Retailer",y:"listing_count",title:"GPU Restock Alerts by Retailer",series:"GPU_Name",yAxisTitle:"Number of Restock Alerts",seriesColors:{"RTX 5070":"#41FF01","RTX 5070 Ti":"#32CD32","RTX 5080":"Green","RTX 5090":"#014301","RX 9070 XT":"Red","RX 9070":"#C24641"}}}),{c(){t=k(),L.c(),s=J("meta"),a=J("meta"),_=le(),i=k(),r=J("h2"),r.innerHTML=M,b=k(),d=J("p"),d.textContent=R,h=k(),u&&u.c(),p=k(),l&&l.c(),w=k(),o&&o.c(),S=k(),m&&m.c(),$=k(),U(O.$$.fragment),z=k(),c=J("h2"),c.innerHTML=B,G=k(),I=J("p"),I.textContent=V,Q=k(),T&&T.c(),C=k(),U(W.$$.fragment),this.h()},l(e){t=D(e);const n=pe("svelte-2igo1p",document.head);L.l(n),s=K(n,"META",{name:!0,content:!0}),a=K(n,"META",{name:!0,content:!0}),_=le(),n.forEach(N),i=D(e),r=K(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),ne(r)!=="svelte-45k4cr"&&(r.innerHTML=M),b=D(e),d=K(e,"P",{class:!0,"data-svelte-h":!0}),ne(d)!=="svelte-1y8ngqz"&&(d.textContent=R),h=D(e),u&&u.l(e),p=D(e),l&&l.l(e),w=D(e),o&&o.l(e),S=D(e),m&&m.l(e),$=D(e),v(O.$$.fragment,e),z=D(e),c=K(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),ne(c)!=="svelte-ogz4lk"&&(c.innerHTML=B),G=D(e),I=K(e,"P",{class:!0,"data-svelte-h":!0}),ne(I)!=="svelte-4m6535"&&(I.textContent=V),Q=D(e),T&&T.l(e),C=D(e),v(W.$$.fragment,e),this.h()},h(){X(s,"name","twitter:card"),X(s,"content","summary_large_image"),X(a,"name","twitter:site"),X(a,"content","@evidence_dev"),X(r,"class","markdown"),X(r,"id","restock-alert-frequency-by-day-of-week"),X(d,"class","markdown"),X(c,"class","markdown"),X(c,"id","availability-by-retailer"),X(I,"class","markdown")},m(e,n){H(e,t,n),L.m(document.head,null),ie(document.head,s),ie(document.head,a),ie(document.head,_),H(e,i,n),H(e,r,n),H(e,b,n),H(e,d,n),H(e,h,n),u&&u.m(e,n),H(e,p,n),l&&l.m(e,n),H(e,w,n),o&&o.m(e,n),H(e,S,n),m&&m.m(e,n),H(e,$,n),A(O,e,n),H(e,z,n),H(e,c,n),H(e,G,n),H(e,I,n),H(e,Q,n),T&&T.m(e,n),H(e,C,n),A(W,e,n),Y=!0},p(e,n){L.p(e,n),e[0]?u?(u.p(e,n),n[0]&1&&E(u,1)):(u=me(e),u.c(),E(u,1),u.m(p.parentNode,p)):u&&(ee(),f(u,1,1,()=>{u=null}),x()),e[1]?l?(l.p(e,n),n[0]&2&&E(l,1)):(l=Te(e),l.c(),E(l,1),l.m(w.parentNode,w)):l&&(ee(),f(l,1,1,()=>{l=null}),x()),e[2]?o?(o.p(e,n),n[0]&4&&E(o,1)):(o=Ne(e),o.c(),E(o,1),o.m(S.parentNode,S)):o&&(ee(),f(o,1,1,()=>{o=null}),x()),e[3]?m?(m.p(e,n),n[0]&8&&E(m,1)):(m=fe(e),m.c(),E(m,1),m.m($.parentNode,$)):m&&(ee(),f(m,1,1,()=>{m=null}),x());const P={};n[0]&15|n[1]&2048&&(P.$$scope={dirty:n,ctx:e}),O.$set(P),e[4]?T?(T.p(e,n),n[0]&16&&E(T,1)):(T=ge(e),T.c(),E(T,1),T.m(C.parentNode,C)):T&&(ee(),f(T,1,1,()=>{T=null}),x());const j={};n[0]&16&&(j.data=e[4]),W.$set(j)},i(e){Y||(E(u),E(l),E(o),E(m),E(O.$$.fragment,e),E(T),E(W.$$.fragment,e),Y=!0)},o(e){f(u),f(l),f(o),f(m),f(O.$$.fragment,e),f(T),f(W.$$.fragment,e),Y=!1},d(e){e&&(N(t),N(i),N(r),N(b),N(d),N(h),N(p),N(w),N(S),N($),N(z),N(c),N(G),N(I),N(Q),N(C)),L.d(e),N(s),N(a),N(_),u&&u.d(e),l&&l.d(e),o&&o.d(e),m&&m.d(e),F(O,e),T&&T.d(e),F(W,e)}}}function Ge(y,t,s){let a,_;oe(y,Ie,g=>s(27,a=g)),oe(y,Ee,g=>s(33,_=g));let{data:i}=t,{data:r={},customFormattingSettings:M,__db:b,inputs:d}=i;we(Ee,_="c701fc7a72fa6af59f400bd8a33699e9",_);let R=Me(Oe(d));ce(R.subscribe(g=>d=g)),We(be,{getCustomFormats:()=>M.customFormats||[]});const h=(g,He)=>ve(b.query,g,{query_name:He});he(h),a.params,Se(()=>!0);let p={initialData:void 0,initialError:void 0},w=q`SELECT strftime(MessageDateTime, '%a') as day_week, 
date_part('hour', MessageDateTime) as day_hour,
dayname(MessageDateTime) as dayn, 
COUNT(DISTINCT MessageID) AS num_listings
FROM gpu_data.gpu
-- FROM gpu_messages
WHERE "Retailer" = 'Amazon'
GROUP BY day_week, day_hour, dayn
ORDER BY 
     CASE
          WHEN dayn = 'Monday' THEN 2
          WHEN dayn = 'Tuesday' THEN 3
          WHEN dayn = 'Wednesday' THEN 4
          WHEN dayn = 'Thursday' THEN 5
          WHEN dayn = 'Friday' THEN 6
          WHEN dayn = 'Saturday' THEN 7
          WHEN dayn = 'Sunday' THEN 8
     END ASC, day_hour`,S=`SELECT strftime(MessageDateTime, '%a') as day_week, 
date_part('hour', MessageDateTime) as day_hour,
dayname(MessageDateTime) as dayn, 
COUNT(DISTINCT MessageID) AS num_listings
FROM gpu_data.gpu
-- FROM gpu_messages
WHERE "Retailer" = 'Amazon'
GROUP BY day_week, day_hour, dayn
ORDER BY 
     CASE
          WHEN dayn = 'Monday' THEN 2
          WHEN dayn = 'Tuesday' THEN 3
          WHEN dayn = 'Wednesday' THEN 4
          WHEN dayn = 'Thursday' THEN 5
          WHEN dayn = 'Friday' THEN 6
          WHEN dayn = 'Saturday' THEN 7
          WHEN dayn = 'Sunday' THEN 8
     END ASC, day_hour`;r.day_of_week_amazon_data&&(r.day_of_week_amazon_data instanceof Error?p.initialError=r.day_of_week_amazon_data:p.initialData=r.day_of_week_amazon_data,r.day_of_week_amazon_columns&&(p.knownColumns=r.day_of_week_amazon_columns));let $,O=!1;const z=ae.createReactive({callback:g=>{s(0,$=g)},execFn:h},{id:"day_of_week_amazon",...p});z(S,{noResolve:w,...p}),globalThis[Symbol.for("day_of_week_amazon")]={get value(){return $}};let c={initialData:void 0,initialError:void 0},B=q`SELECT strftime(MessageDateTime, '%a') as day_week, 
date_part('hour', MessageDateTime) as day_hour,
dayname(MessageDateTime) as dayn, 
COUNT(DISTINCT MessageID) AS num_listings
FROM gpu_data.gpu
-- FROM gpu_messages
WHERE "Retailer" = 'Best Buy'
GROUP BY day_week, day_hour, dayn
ORDER BY
     CASE
          WHEN dayn = 'Monday' THEN 2
          WHEN dayn = 'Tuesday' THEN 3
          WHEN dayn = 'Wednesday' THEN 4
          WHEN dayn = 'Thursday' THEN 5
          WHEN dayn = 'Friday' THEN 6
          WHEN dayn = 'Saturday' THEN 7
          WHEN dayn = 'Sunday' THEN 8
     END ASC, day_hour`,G=`SELECT strftime(MessageDateTime, '%a') as day_week, 
date_part('hour', MessageDateTime) as day_hour,
dayname(MessageDateTime) as dayn, 
COUNT(DISTINCT MessageID) AS num_listings
FROM gpu_data.gpu
-- FROM gpu_messages
WHERE "Retailer" = 'Best Buy'
GROUP BY day_week, day_hour, dayn
ORDER BY
     CASE
          WHEN dayn = 'Monday' THEN 2
          WHEN dayn = 'Tuesday' THEN 3
          WHEN dayn = 'Wednesday' THEN 4
          WHEN dayn = 'Thursday' THEN 5
          WHEN dayn = 'Friday' THEN 6
          WHEN dayn = 'Saturday' THEN 7
          WHEN dayn = 'Sunday' THEN 8
     END ASC, day_hour`;r.day_of_week_bestbuy_data&&(r.day_of_week_bestbuy_data instanceof Error?c.initialError=r.day_of_week_bestbuy_data:c.initialData=r.day_of_week_bestbuy_data,r.day_of_week_bestbuy_columns&&(c.knownColumns=r.day_of_week_bestbuy_columns));let I,V=!1;const Q=ae.createReactive({callback:g=>{s(1,I=g)},execFn:h},{id:"day_of_week_bestbuy",...c});Q(G,{noResolve:B,...c}),globalThis[Symbol.for("day_of_week_bestbuy")]={get value(){return I}};let C={initialData:void 0,initialError:void 0},W=q`SELECT strftime(MessageDateTime, '%a') as day_week, 
date_part('hour', MessageDateTime) as day_hour,
dayname(MessageDateTime) as dayn, 
COUNT(DISTINCT MessageID) AS num_listings
FROM gpu_data.gpu
-- FROM gpu_messages
WHERE "Retailer" = 'Newegg'
GROUP BY day_week, day_hour, dayn
ORDER BY
     CASE
          WHEN dayn = 'Monday' THEN 2
          WHEN dayn = 'Tuesday' THEN 3
          WHEN dayn = 'Wednesday' THEN 4
          WHEN dayn = 'Thursday' THEN 5
          WHEN dayn = 'Friday' THEN 6
          WHEN dayn = 'Saturday' THEN 7
          WHEN dayn = 'Sunday' THEN 8
     END ASC, day_hour`,Y=`SELECT strftime(MessageDateTime, '%a') as day_week, 
date_part('hour', MessageDateTime) as day_hour,
dayname(MessageDateTime) as dayn, 
COUNT(DISTINCT MessageID) AS num_listings
FROM gpu_data.gpu
-- FROM gpu_messages
WHERE "Retailer" = 'Newegg'
GROUP BY day_week, day_hour, dayn
ORDER BY
     CASE
          WHEN dayn = 'Monday' THEN 2
          WHEN dayn = 'Tuesday' THEN 3
          WHEN dayn = 'Wednesday' THEN 4
          WHEN dayn = 'Thursday' THEN 5
          WHEN dayn = 'Friday' THEN 6
          WHEN dayn = 'Saturday' THEN 7
          WHEN dayn = 'Sunday' THEN 8
     END ASC, day_hour`;r.day_of_week_newegg_data&&(r.day_of_week_newegg_data instanceof Error?C.initialError=r.day_of_week_newegg_data:C.initialData=r.day_of_week_newegg_data,r.day_of_week_newegg_columns&&(C.knownColumns=r.day_of_week_newegg_columns));let Z,se=!1;const L=ae.createReactive({callback:g=>{s(2,Z=g)},execFn:h},{id:"day_of_week_newegg",...C});L(Y,{noResolve:W,...C}),globalThis[Symbol.for("day_of_week_newegg")]={get value(){return Z}};let u={initialData:void 0,initialError:void 0},l=q`SELECT strftime(MessageDateTime, '%a') as day_week, 
date_part('hour', MessageDateTime) as day_hour,
dayname(MessageDateTime) as dayn, 
COUNT(DISTINCT MessageID) AS num_listings
FROM gpu_data.gpu
-- FROM gpu_messages
WHERE "Retailer" = 'Walmart'
GROUP BY day_week, day_hour, dayn
ORDER BY
     CASE
          WHEN dayn = 'Monday' THEN 2
          WHEN dayn = 'Tuesday' THEN 3
          WHEN dayn = 'Wednesday' THEN 4
          WHEN dayn = 'Thursday' THEN 5
          WHEN dayn = 'Friday' THEN 6
          WHEN dayn = 'Saturday' THEN 7
          WHEN dayn = 'Sunday' THEN 8
     END ASC, day_hour`,o=`SELECT strftime(MessageDateTime, '%a') as day_week, 
date_part('hour', MessageDateTime) as day_hour,
dayname(MessageDateTime) as dayn, 
COUNT(DISTINCT MessageID) AS num_listings
FROM gpu_data.gpu
-- FROM gpu_messages
WHERE "Retailer" = 'Walmart'
GROUP BY day_week, day_hour, dayn
ORDER BY
     CASE
          WHEN dayn = 'Monday' THEN 2
          WHEN dayn = 'Tuesday' THEN 3
          WHEN dayn = 'Wednesday' THEN 4
          WHEN dayn = 'Thursday' THEN 5
          WHEN dayn = 'Friday' THEN 6
          WHEN dayn = 'Saturday' THEN 7
          WHEN dayn = 'Sunday' THEN 8
     END ASC, day_hour`;r.day_of_week_walmart_data&&(r.day_of_week_walmart_data instanceof Error?u.initialError=r.day_of_week_walmart_data:u.initialData=r.day_of_week_walmart_data,r.day_of_week_walmart_columns&&(u.knownColumns=r.day_of_week_walmart_columns));let m,T=!1;const e=ae.createReactive({callback:g=>{s(3,m=g)},execFn:h},{id:"day_of_week_walmart",...u});e(o,{noResolve:l,...u}),globalThis[Symbol.for("day_of_week_walmart")]={get value(){return m}};let n={initialData:void 0,initialError:void 0},P=q`SELECT
    "Retailer",
    "GPU_Name",
    COUNT(DISTINCT MessageID) AS listing_count
FROM gpu_data.gpu
WHERE "GPU_Name" IN ('RTX 5080', 'RTX 5070', 'RTX 5070 Ti', 'RTX 5090', 'RX 9070', 'RX 9070 XT')
GROUP BY "Retailer", "GPU_Name"
ORDER BY listing_count DESC`,j=`SELECT
    "Retailer",
    "GPU_Name",
    COUNT(DISTINCT MessageID) AS listing_count
FROM gpu_data.gpu
WHERE "GPU_Name" IN ('RTX 5080', 'RTX 5070', 'RTX 5070 Ti', 'RTX 5090', 'RX 9070', 'RX 9070 XT')
GROUP BY "Retailer", "GPU_Name"
ORDER BY listing_count DESC`;r.retailer_availability_data&&(r.retailer_availability_data instanceof Error?n.initialError=r.retailer_availability_data:n.initialData=r.retailer_availability_data,r.retailer_availability_columns&&(n.knownColumns=r.retailer_availability_columns));let de,ye=!1;const _e=ae.createReactive({callback:g=>{s(4,de=g)},execFn:h},{id:"retailer_availability",...n});return _e(j,{noResolve:P,...n}),globalThis[Symbol.for("retailer_availability")]={get value(){return de}},y.$$set=g=>{"data"in g&&s(5,i=g.data)},y.$$.update=()=>{y.$$.dirty[0]&32&&s(6,{data:r={},customFormattingSettings:M,__db:b}=i,r),y.$$.dirty[0]&64&&Ce.set(Object.keys(r).length>0),y.$$.dirty[0]&134217728&&a.params,y.$$.dirty[0]&1920&&(w||!O?w||(z(S,{noResolve:w,...p}),s(10,O=!0)):z(S,{noResolve:w})),y.$$.dirty[0]&30720&&(B||!V?B||(Q(G,{noResolve:B,...c}),s(14,V=!0)):Q(G,{noResolve:B})),y.$$.dirty[0]&491520&&(W||!se?W||(L(Y,{noResolve:W,...C}),s(18,se=!0)):L(Y,{noResolve:W})),y.$$.dirty[0]&7864320&&(l||!T?l||(e(o,{noResolve:l,...u}),s(22,T=!0)):e(o,{noResolve:l})),y.$$.dirty[0]&125829120&&(P||!ye?P||(_e(j,{noResolve:P,...n}),s(26,ye=!0)):_e(j,{noResolve:P}))},s(8,w=q`SELECT strftime(MessageDateTime, '%a') as day_week, 
date_part('hour', MessageDateTime) as day_hour,
dayname(MessageDateTime) as dayn, 
COUNT(DISTINCT MessageID) AS num_listings
FROM gpu_data.gpu
-- FROM gpu_messages
WHERE "Retailer" = 'Amazon'
GROUP BY day_week, day_hour, dayn
ORDER BY 
     CASE
          WHEN dayn = 'Monday' THEN 2
          WHEN dayn = 'Tuesday' THEN 3
          WHEN dayn = 'Wednesday' THEN 4
          WHEN dayn = 'Thursday' THEN 5
          WHEN dayn = 'Friday' THEN 6
          WHEN dayn = 'Saturday' THEN 7
          WHEN dayn = 'Sunday' THEN 8
     END ASC, day_hour`),s(9,S=`SELECT strftime(MessageDateTime, '%a') as day_week, 
date_part('hour', MessageDateTime) as day_hour,
dayname(MessageDateTime) as dayn, 
COUNT(DISTINCT MessageID) AS num_listings
FROM gpu_data.gpu
-- FROM gpu_messages
WHERE "Retailer" = 'Amazon'
GROUP BY day_week, day_hour, dayn
ORDER BY 
     CASE
          WHEN dayn = 'Monday' THEN 2
          WHEN dayn = 'Tuesday' THEN 3
          WHEN dayn = 'Wednesday' THEN 4
          WHEN dayn = 'Thursday' THEN 5
          WHEN dayn = 'Friday' THEN 6
          WHEN dayn = 'Saturday' THEN 7
          WHEN dayn = 'Sunday' THEN 8
     END ASC, day_hour`),s(12,B=q`SELECT strftime(MessageDateTime, '%a') as day_week, 
date_part('hour', MessageDateTime) as day_hour,
dayname(MessageDateTime) as dayn, 
COUNT(DISTINCT MessageID) AS num_listings
FROM gpu_data.gpu
-- FROM gpu_messages
WHERE "Retailer" = 'Best Buy'
GROUP BY day_week, day_hour, dayn
ORDER BY
     CASE
          WHEN dayn = 'Monday' THEN 2
          WHEN dayn = 'Tuesday' THEN 3
          WHEN dayn = 'Wednesday' THEN 4
          WHEN dayn = 'Thursday' THEN 5
          WHEN dayn = 'Friday' THEN 6
          WHEN dayn = 'Saturday' THEN 7
          WHEN dayn = 'Sunday' THEN 8
     END ASC, day_hour`),s(13,G=`SELECT strftime(MessageDateTime, '%a') as day_week, 
date_part('hour', MessageDateTime) as day_hour,
dayname(MessageDateTime) as dayn, 
COUNT(DISTINCT MessageID) AS num_listings
FROM gpu_data.gpu
-- FROM gpu_messages
WHERE "Retailer" = 'Best Buy'
GROUP BY day_week, day_hour, dayn
ORDER BY
     CASE
          WHEN dayn = 'Monday' THEN 2
          WHEN dayn = 'Tuesday' THEN 3
          WHEN dayn = 'Wednesday' THEN 4
          WHEN dayn = 'Thursday' THEN 5
          WHEN dayn = 'Friday' THEN 6
          WHEN dayn = 'Saturday' THEN 7
          WHEN dayn = 'Sunday' THEN 8
     END ASC, day_hour`),s(16,W=q`SELECT strftime(MessageDateTime, '%a') as day_week, 
date_part('hour', MessageDateTime) as day_hour,
dayname(MessageDateTime) as dayn, 
COUNT(DISTINCT MessageID) AS num_listings
FROM gpu_data.gpu
-- FROM gpu_messages
WHERE "Retailer" = 'Newegg'
GROUP BY day_week, day_hour, dayn
ORDER BY
     CASE
          WHEN dayn = 'Monday' THEN 2
          WHEN dayn = 'Tuesday' THEN 3
          WHEN dayn = 'Wednesday' THEN 4
          WHEN dayn = 'Thursday' THEN 5
          WHEN dayn = 'Friday' THEN 6
          WHEN dayn = 'Saturday' THEN 7
          WHEN dayn = 'Sunday' THEN 8
     END ASC, day_hour`),s(17,Y=`SELECT strftime(MessageDateTime, '%a') as day_week, 
date_part('hour', MessageDateTime) as day_hour,
dayname(MessageDateTime) as dayn, 
COUNT(DISTINCT MessageID) AS num_listings
FROM gpu_data.gpu
-- FROM gpu_messages
WHERE "Retailer" = 'Newegg'
GROUP BY day_week, day_hour, dayn
ORDER BY
     CASE
          WHEN dayn = 'Monday' THEN 2
          WHEN dayn = 'Tuesday' THEN 3
          WHEN dayn = 'Wednesday' THEN 4
          WHEN dayn = 'Thursday' THEN 5
          WHEN dayn = 'Friday' THEN 6
          WHEN dayn = 'Saturday' THEN 7
          WHEN dayn = 'Sunday' THEN 8
     END ASC, day_hour`),s(20,l=q`SELECT strftime(MessageDateTime, '%a') as day_week, 
date_part('hour', MessageDateTime) as day_hour,
dayname(MessageDateTime) as dayn, 
COUNT(DISTINCT MessageID) AS num_listings
FROM gpu_data.gpu
-- FROM gpu_messages
WHERE "Retailer" = 'Walmart'
GROUP BY day_week, day_hour, dayn
ORDER BY
     CASE
          WHEN dayn = 'Monday' THEN 2
          WHEN dayn = 'Tuesday' THEN 3
          WHEN dayn = 'Wednesday' THEN 4
          WHEN dayn = 'Thursday' THEN 5
          WHEN dayn = 'Friday' THEN 6
          WHEN dayn = 'Saturday' THEN 7
          WHEN dayn = 'Sunday' THEN 8
     END ASC, day_hour`),s(21,o=`SELECT strftime(MessageDateTime, '%a') as day_week, 
date_part('hour', MessageDateTime) as day_hour,
dayname(MessageDateTime) as dayn, 
COUNT(DISTINCT MessageID) AS num_listings
FROM gpu_data.gpu
-- FROM gpu_messages
WHERE "Retailer" = 'Walmart'
GROUP BY day_week, day_hour, dayn
ORDER BY
     CASE
          WHEN dayn = 'Monday' THEN 2
          WHEN dayn = 'Tuesday' THEN 3
          WHEN dayn = 'Wednesday' THEN 4
          WHEN dayn = 'Thursday' THEN 5
          WHEN dayn = 'Friday' THEN 6
          WHEN dayn = 'Saturday' THEN 7
          WHEN dayn = 'Sunday' THEN 8
     END ASC, day_hour`),s(24,P=q`SELECT
    "Retailer",
    "GPU_Name",
    COUNT(DISTINCT MessageID) AS listing_count
FROM gpu_data.gpu
WHERE "GPU_Name" IN ('RTX 5080', 'RTX 5070', 'RTX 5070 Ti', 'RTX 5090', 'RX 9070', 'RX 9070 XT')
GROUP BY "Retailer", "GPU_Name"
ORDER BY listing_count DESC`),s(25,j=`SELECT
    "Retailer",
    "GPU_Name",
    COUNT(DISTINCT MessageID) AS listing_count
FROM gpu_data.gpu
WHERE "GPU_Name" IN ('RTX 5080', 'RTX 5070', 'RTX 5070 Ti', 'RTX 5090', 'RX 9070', 'RX 9070 XT')
GROUP BY "Retailer", "GPU_Name"
ORDER BY listing_count DESC`),[$,I,Z,m,de,i,r,p,w,S,O,c,B,G,V,C,W,Y,se,u,l,o,T,n,P,j,ye,a]}class Je extends De{constructor(t){super(),ke(this,t,Ge,Be,Re,{data:5},null,[-1,-1])}}export{Je as component};
