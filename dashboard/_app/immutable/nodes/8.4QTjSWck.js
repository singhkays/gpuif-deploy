import{s as le,d as l,i as T,a as V,b as v,c as k,h as fe,e as q,f as re,g as j,j as D,k as B,l as ie,m as me,o as Ee,n as Te,p as ce,q as K}from"../chunks/scheduler.cXSv0lVe.js";import{S as Ne,i as ge,d as U,t as p,a as f,e as J,m as X,c as G,b as P,g as Z}from"../chunks/index.DpaiaTSd.js";import{e as pe,s as He,Q as ee,p as Re,r as de,C as Me}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.GzCd6CPB.js";import{w as ke}from"../chunks/entry.CBQZo9V7.js";import{h as L}from"../chunks/setTrackProxy.Cyfckp0w.js";import{p as De}from"../chunks/stores.VHUHsHjd.js";import{G as Se}from"../chunks/Grid.CemtPjU6.js";import{Q as ae,H as ue}from"../chunks/Heatmap.B6t5kZVW.js";import{A as he}from"../chunks/AreaChart.x5J0LOYE.js";import{L as we}from"../chunks/LineChart.CEpdH0gw.js";import{p as We}from"../chunks/profile.BW8tN6E9.js";function Ce(u){return{c(){this.h()},l(t){this.h()},h(){document.title="Evidence"},m:K,p:K,d:K}}function _e(u){let t,s;return t=new ae({props:{queryID:"daily_listings_manufacturer",queryResult:u[0]}}),{c(){P(t.$$.fragment)},l(a){G(t.$$.fragment,a)},m(a,_){X(t,a,_),s=!0},p(a,_){const n={};_&1&&(n.queryResult=a[0]),t.$set(n)},i(a){s||(f(t.$$.fragment,a),s=!0)},o(a){p(t.$$.fragment,a),s=!1},d(a){U(t,a)}}}function ye(u){let t,s;return t=new ae({props:{queryID:"day_of_week_nvidia",queryResult:u[1]}}),{c(){P(t.$$.fragment)},l(a){G(t.$$.fragment,a)},m(a,_){X(t,a,_),s=!0},p(a,_){const n={};_&2&&(n.queryResult=a[1]),t.$set(n)},i(a){s||(f(t.$$.fragment,a),s=!0)},o(a){p(t.$$.fragment,a),s=!1},d(a){U(t,a)}}}function oe(u){let t,s;return t=new ae({props:{queryID:"day_of_week_amd",queryResult:u[2]}}),{c(){P(t.$$.fragment)},l(a){G(t.$$.fragment,a)},m(a,_){X(t,a,_),s=!0},p(a,_){const n={};_&4&&(n.queryResult=a[2]),t.$set(n)},i(a){s||(f(t.$$.fragment,a),s=!0)},o(a){p(t.$$.fragment,a),s=!1},d(a){U(t,a)}}}function Oe(u){let t,s,a,_;return t=new ue({props:{data:u[1],x:"day_week",y:"day_hour",value:"num_listings",title:"Nvidia",cellHeight:"20",subtitle:"Hourly volume of Nvidia listings across each weekday",colorScale:[["#173f22","#173f22"],["#7edf99","#7edf99"]]}}),a=new ue({props:{data:u[2],x:"day_week",y:"day_hour",value:"num_listings",title:"AMD",subtitle:"Hourly volume of AMD listings across each weekday",cellHeight:"20",colorScale:[["#4b1619","#4b1619"],["#FA4C56","#FA4C56"]]}}),{c(){P(t.$$.fragment),s=D(),P(a.$$.fragment)},l(n){G(t.$$.fragment,n),s=k(n),G(a.$$.fragment,n)},m(n,r){X(t,n,r),T(n,s,r),X(a,n,r),_=!0},p(n,r){const F={};r&2&&(F.data=n[1]),t.$set(F);const h={};r&4&&(h.data=n[2]),a.$set(h)},i(n){_||(f(t.$$.fragment,n),f(a.$$.fragment,n),_=!0)},o(n){p(t.$$.fragment,n),p(a.$$.fragment,n),_=!1},d(n){n&&l(s),U(t,n),U(a,n)}}}function ve(u){let t,s,a,_,n,r,F='<a href="#daily-restock-alerts">Daily Restock Alerts</a>',h,S,z="See how many GPU restock alerts appear each day. This can help identify stock drops or periods of high/low availability.",I,c,m,w,R,b,H,W='<a href="#restock-alert-frequency-by-day-of-week">Restock Alert Frequency by day of week</a>',M,N,Y="Which days see most of the GPU restock alerts?",$,C,g,E,O;function x(e,i){return Ce}let A=x()(u),d=u[0]&&_e(u);m=new we({props:{data:u[0],x:"date",y:"num_listings",title:"Daily GPU Restock Alerts",series:"Manufacturer",seriesColors:{Nvidia:["#198038","#6fdc8c"],AMD:["#fa4d56","#fa4d56"]},yGridlines:"true",subtitle:"Daily counts of new GPU restock alerts by manufacturer",echartsOptions:{xAxis:{axisLabel:{fontSize:11}},yAxis:{axisLabel:{fontSize:10}},grid:{top:"23%"},legend:{textStyle:{fontSize:10},padding:[5,10]}}}}),R=new he({props:{data:u[0],x:"date",y:"num_listings",series:"Manufacturer",title:"Share of daily GPU Restock Alerts",fillOpacity:"1",type:"stacked100",seriesColors:{Nvidia:["#198038","#6fdc8c"],AMD:["#fa4d56","#fa4d56"]},subtitle:"Percent of daily GPU restock alerts by manufacturer",echartsOptions:{xAxis:{axisLabel:{fontSize:11}},yAxis:{axisLabel:{fontSize:10}},grid:{top:"23%"},legend:{textStyle:{fontSize:10},padding:[5,10]}}}});let y=u[1]&&ye(u),o=u[2]&&oe(u);return E=new Se({props:{cols:"2",$$slots:{default:[Oe]},$$scope:{ctx:u}}}),{c(){t=D(),A.c(),s=B("meta"),a=B("meta"),_=re(),n=D(),r=B("h2"),r.innerHTML=F,h=D(),S=B("p"),S.textContent=z,I=D(),d&&d.c(),c=D(),P(m.$$.fragment),w=D(),P(R.$$.fragment),b=D(),H=B("h2"),H.innerHTML=W,M=D(),N=B("p"),N.textContent=Y,$=D(),y&&y.c(),C=D(),o&&o.c(),g=D(),P(E.$$.fragment),this.h()},l(e){t=k(e);const i=fe("svelte-2igo1p",document.head);A.l(i),s=q(i,"META",{name:!0,content:!0}),a=q(i,"META",{name:!0,content:!0}),_=re(),i.forEach(l),n=k(e),r=q(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),j(r)!=="svelte-tq895l"&&(r.innerHTML=F),h=k(e),S=q(e,"P",{class:!0,"data-svelte-h":!0}),j(S)!=="svelte-1dzatc1"&&(S.textContent=z),I=k(e),d&&d.l(e),c=k(e),G(m.$$.fragment,e),w=k(e),G(R.$$.fragment,e),b=k(e),H=q(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),j(H)!=="svelte-45k4cr"&&(H.innerHTML=W),M=k(e),N=q(e,"P",{class:!0,"data-svelte-h":!0}),j(N)!=="svelte-1y8ngqz"&&(N.textContent=Y),$=k(e),y&&y.l(e),C=k(e),o&&o.l(e),g=k(e),G(E.$$.fragment,e),this.h()},h(){v(s,"name","twitter:card"),v(s,"content","summary_large_image"),v(a,"name","twitter:site"),v(a,"content","@evidence_dev"),v(r,"class","markdown"),v(r,"id","daily-restock-alerts"),v(S,"class","markdown"),v(H,"class","markdown"),v(H,"id","restock-alert-frequency-by-day-of-week"),v(N,"class","markdown")},m(e,i){T(e,t,i),A.m(document.head,null),V(document.head,s),V(document.head,a),V(document.head,_),T(e,n,i),T(e,r,i),T(e,h,i),T(e,S,i),T(e,I,i),d&&d.m(e,i),T(e,c,i),X(m,e,i),T(e,w,i),X(R,e,i),T(e,b,i),T(e,H,i),T(e,M,i),T(e,N,i),T(e,$,i),y&&y.m(e,i),T(e,C,i),o&&o.m(e,i),T(e,g,i),X(E,e,i),O=!0},p(e,[i]){A.p(e,i),e[0]?d?(d.p(e,i),i&1&&f(d,1)):(d=_e(e),d.c(),f(d,1),d.m(c.parentNode,c)):d&&(Z(),p(d,1,1,()=>{d=null}),J());const te={};i&1&&(te.data=e[0]),m.$set(te);const se={};i&1&&(se.data=e[0]),R.$set(se),e[1]?y?(y.p(e,i),i&2&&f(y,1)):(y=ye(e),y.c(),f(y,1),y.m(C.parentNode,C)):y&&(Z(),p(y,1,1,()=>{y=null}),J()),e[2]?o?(o.p(e,i),i&4&&f(o,1)):(o=oe(e),o.c(),f(o,1),o.m(g.parentNode,g)):o&&(Z(),p(o,1,1,()=>{o=null}),J());const ne={};i&1073741830&&(ne.$$scope={dirty:i,ctx:e}),E.$set(ne)},i(e){O||(f(d),f(m.$$.fragment,e),f(R.$$.fragment,e),f(y),f(o),f(E.$$.fragment,e),O=!0)},o(e){p(d),p(m.$$.fragment,e),p(R.$$.fragment,e),p(y),p(o),p(E.$$.fragment,e),O=!1},d(e){e&&(l(t),l(n),l(r),l(h),l(S),l(I),l(c),l(w),l(b),l(H),l(M),l(N),l($),l(C),l(g)),A.d(e),l(s),l(a),l(_),d&&d.d(e),U(m,e),U(R,e),y&&y.d(e),o&&o.d(e),U(E,e)}}}function Ie(u,t,s){let a,_;ie(u,De,d=>s(17,a=d)),ie(u,de,d=>s(23,_=d));let{data:n}=t,{data:r={},customFormattingSettings:F,__db:h,inputs:S}=n;me(de,_="3abae38713721e8f6f0d81adac6d626f",_);let z=pe(ke(S));Ee(z.subscribe(d=>S=d)),Te(Me,{getCustomFormats:()=>F.customFormats||[]});const I=(d,y)=>We(h.query,d,{query_name:y});He(I),a.params,ce(()=>!0);let c={initialData:void 0,initialError:void 0},m=L`SELECT
    MessageDateTime::date as "date",
    "Manufacturer",
    COUNT(DISTINCT MessageID) AS num_listings
FROM gpu_data.gpu
-- FROM gpu_messages
WHERE "GPU_Name" IN ('RTX 5080', 'RTX 5070', 'RTX 5070 Ti', 'RTX 5090', 'RX 9070', 'RX 9070 XT')
GROUP BY "date", "Manufacturer"
ORDER BY "date"`,w=`SELECT
    MessageDateTime::date as "date",
    "Manufacturer",
    COUNT(DISTINCT MessageID) AS num_listings
FROM gpu_data.gpu
-- FROM gpu_messages
WHERE "GPU_Name" IN ('RTX 5080', 'RTX 5070', 'RTX 5070 Ti', 'RTX 5090', 'RX 9070', 'RX 9070 XT')
GROUP BY "date", "Manufacturer"
ORDER BY "date"`;r.daily_listings_manufacturer_data&&(r.daily_listings_manufacturer_data instanceof Error?c.initialError=r.daily_listings_manufacturer_data:c.initialData=r.daily_listings_manufacturer_data,r.daily_listings_manufacturer_columns&&(c.knownColumns=r.daily_listings_manufacturer_columns));let R,b=!1;const H=ee.createReactive({callback:d=>{s(0,R=d)},execFn:I},{id:"daily_listings_manufacturer",...c});H(w,{noResolve:m,...c}),globalThis[Symbol.for("daily_listings_manufacturer")]={get value(){return R}};let W={initialData:void 0,initialError:void 0},M=L`SELECT strftime(MessageDateTime, '%a') as day_week, 
date_part('hour', MessageDateTime) as day_hour,
dayname(MessageDateTime) as dayn, 
COUNT(DISTINCT MessageID) AS num_listings
FROM gpu_data.gpu
-- FROM gpu_messages
WHERE "Manufacturer" = 'Nvidia'
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
     END ASC, day_hour`,N=`SELECT strftime(MessageDateTime, '%a') as day_week, 
date_part('hour', MessageDateTime) as day_hour,
dayname(MessageDateTime) as dayn, 
COUNT(DISTINCT MessageID) AS num_listings
FROM gpu_data.gpu
-- FROM gpu_messages
WHERE "Manufacturer" = 'Nvidia'
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
     END ASC, day_hour`;r.day_of_week_nvidia_data&&(r.day_of_week_nvidia_data instanceof Error?W.initialError=r.day_of_week_nvidia_data:W.initialData=r.day_of_week_nvidia_data,r.day_of_week_nvidia_columns&&(W.knownColumns=r.day_of_week_nvidia_columns));let Y,$=!1;const C=ee.createReactive({callback:d=>{s(1,Y=d)},execFn:I},{id:"day_of_week_nvidia",...W});C(N,{noResolve:M,...W}),globalThis[Symbol.for("day_of_week_nvidia")]={get value(){return Y}};let g={initialData:void 0,initialError:void 0},E=L`SELECT strftime(MessageDateTime, '%a') as day_week, 
date_part('hour', MessageDateTime) as day_hour,
dayname(MessageDateTime) as dayn, 
COUNT(DISTINCT MessageID) AS num_listings
FROM gpu_data.gpu
-- FROM gpu_messages
WHERE "Manufacturer" = 'AMD'
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
     END ASC, day_hour`,O=`SELECT strftime(MessageDateTime, '%a') as day_week, 
date_part('hour', MessageDateTime) as day_hour,
dayname(MessageDateTime) as dayn, 
COUNT(DISTINCT MessageID) AS num_listings
FROM gpu_data.gpu
-- FROM gpu_messages
WHERE "Manufacturer" = 'AMD'
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
     END ASC, day_hour`;r.day_of_week_amd_data&&(r.day_of_week_amd_data instanceof Error?g.initialError=r.day_of_week_amd_data:g.initialData=r.day_of_week_amd_data,r.day_of_week_amd_columns&&(g.knownColumns=r.day_of_week_amd_columns));let x,Q=!1;const A=ee.createReactive({callback:d=>{s(2,x=d)},execFn:I},{id:"day_of_week_amd",...g});return A(O,{noResolve:E,...g}),globalThis[Symbol.for("day_of_week_amd")]={get value(){return x}},u.$$set=d=>{"data"in d&&s(3,n=d.data)},u.$$.update=()=>{u.$$.dirty&8&&s(4,{data:r={},customFormattingSettings:F,__db:h}=n,r),u.$$.dirty&16&&Re.set(Object.keys(r).length>0),u.$$.dirty&131072&&a.params,u.$$.dirty&480&&(m||!b?m||(H(w,{noResolve:m,...c}),s(8,b=!0)):H(w,{noResolve:m})),u.$$.dirty&7680&&(M||!$?M||(C(N,{noResolve:M,...W}),s(12,$=!0)):C(N,{noResolve:M})),u.$$.dirty&122880&&(E||!Q?E||(A(O,{noResolve:E,...g}),s(16,Q=!0)):A(O,{noResolve:E}))},s(6,m=L`SELECT
    MessageDateTime::date as "date",
    "Manufacturer",
    COUNT(DISTINCT MessageID) AS num_listings
FROM gpu_data.gpu
-- FROM gpu_messages
WHERE "GPU_Name" IN ('RTX 5080', 'RTX 5070', 'RTX 5070 Ti', 'RTX 5090', 'RX 9070', 'RX 9070 XT')
GROUP BY "date", "Manufacturer"
ORDER BY "date"`),s(7,w=`SELECT
    MessageDateTime::date as "date",
    "Manufacturer",
    COUNT(DISTINCT MessageID) AS num_listings
FROM gpu_data.gpu
-- FROM gpu_messages
WHERE "GPU_Name" IN ('RTX 5080', 'RTX 5070', 'RTX 5070 Ti', 'RTX 5090', 'RX 9070', 'RX 9070 XT')
GROUP BY "date", "Manufacturer"
ORDER BY "date"`),s(10,M=L`SELECT strftime(MessageDateTime, '%a') as day_week, 
date_part('hour', MessageDateTime) as day_hour,
dayname(MessageDateTime) as dayn, 
COUNT(DISTINCT MessageID) AS num_listings
FROM gpu_data.gpu
-- FROM gpu_messages
WHERE "Manufacturer" = 'Nvidia'
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
     END ASC, day_hour`),s(11,N=`SELECT strftime(MessageDateTime, '%a') as day_week, 
date_part('hour', MessageDateTime) as day_hour,
dayname(MessageDateTime) as dayn, 
COUNT(DISTINCT MessageID) AS num_listings
FROM gpu_data.gpu
-- FROM gpu_messages
WHERE "Manufacturer" = 'Nvidia'
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
     END ASC, day_hour`),s(14,E=L`SELECT strftime(MessageDateTime, '%a') as day_week, 
date_part('hour', MessageDateTime) as day_hour,
dayname(MessageDateTime) as dayn, 
COUNT(DISTINCT MessageID) AS num_listings
FROM gpu_data.gpu
-- FROM gpu_messages
WHERE "Manufacturer" = 'AMD'
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
     END ASC, day_hour`),s(15,O=`SELECT strftime(MessageDateTime, '%a') as day_week, 
date_part('hour', MessageDateTime) as day_hour,
dayname(MessageDateTime) as dayn, 
COUNT(DISTINCT MessageID) AS num_listings
FROM gpu_data.gpu
-- FROM gpu_messages
WHERE "Manufacturer" = 'AMD'
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
     END ASC, day_hour`),[R,Y,x,n,r,c,m,w,b,W,M,N,$,g,E,O,Q,a]}class Le extends Ne{constructor(t){super(),ge(this,t,Ie,ve,le,{data:3})}}export{Le as component};
