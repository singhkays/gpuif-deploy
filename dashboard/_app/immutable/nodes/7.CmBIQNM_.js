import{s as mt,d as R,i as c,a as xe,b as q,c as N,h as ut,e as we,f as Ve,g as $e,j as f,k as Le,l as Ke,m as Rt,o as ct,n as pt,p as Tt,q as ze}from"../chunks/scheduler.cXSv0lVe.js";import{S as Nt,i as ft,d as b,t as o,a as _,e as fe,m as y,c as I,b as C,g as ge}from"../chunks/index.DpaiaTSd.js";import{e as gt,s as Et,Q as Ee,p as Pt,r as Qe,C as St}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.CWxBRcRd.js";import{w as dt}from"../chunks/entry.CTiNLzem.js";import{h as A}from"../chunks/setTrackProxy.Cyfckp0w.js";import{p as Ot}from"../chunks/stores.B0NHDBYJ.js";import{H as Ut,Q as Pe}from"../chunks/Heatmap.B0GO1-1N.js";import{A as Dt}from"../chunks/AreaChart.DTcn7lQL.js";import{B as Fe}from"../chunks/BarChart.Bj9udtKi.js";import{B as je}from"../chunks/BoxPlot.XXbFFTIk.js";import{L as bt}from"../chunks/LineChart.D4CLNSK0.js";import{p as yt}from"../chunks/profile.BW8tN6E9.js";function It(s){return{c(){this.h()},l(i){this.h()},h(){document.title="Evidence"},m:ze,p:ze,d:ze}}function Je(s){let i,a;return i=new Pe({props:{queryID:"weekly_listings",queryResult:s[0]}}),{c(){C(i.$$.fragment)},l(t){I(i.$$.fragment,t)},m(t,n){y(i,t,n),a=!0},p(t,n){const m={};n[0]&1&&(m.queryResult=t[0]),i.$set(m)},i(t){a||(_(i.$$.fragment,t),a=!0)},o(t){o(i.$$.fragment,t),a=!1},d(t){b(i,t)}}}function Ze(s){let i,a;return i=new Pe({props:{queryID:"gpu_availability_pct",queryResult:s[1]}}),{c(){C(i.$$.fragment)},l(t){I(i.$$.fragment,t)},m(t,n){y(i,t,n),a=!0},p(t,n){const m={};n[0]&2&&(m.queryResult=t[1]),i.$set(m)},i(t){a||(_(i.$$.fragment,t),a=!0)},o(t){o(i.$$.fragment,t),a=!1},d(t){b(i,t)}}}function et(s){let i,a;return i=new Pe({props:{queryID:"gpu_availability",queryResult:s[2]}}),{c(){C(i.$$.fragment)},l(t){I(i.$$.fragment,t)},m(t,n){y(i,t,n),a=!0},p(t,n){const m={};n[0]&4&&(m.queryResult=t[2]),i.$set(m)},i(t){a||(_(i.$$.fragment,t),a=!0)},o(t){o(i.$$.fragment,t),a=!1},d(t){b(i,t)}}}function tt(s){let i,a;return i=new Pe({props:{queryID:"daily_distribution",queryResult:s[3]}}),{c(){C(i.$$.fragment)},l(t){I(i.$$.fragment,t)},m(t,n){y(i,t,n),a=!0},p(t,n){const m={};n[0]&8&&(m.queryResult=t[3]),i.$set(m)},i(t){a||(_(i.$$.fragment,t),a=!0)},o(t){o(i.$$.fragment,t),a=!1},d(t){b(i,t)}}}function it(s){let i,a;return i=new Pe({props:{queryID:"weekly_avg_price",queryResult:s[4]}}),{c(){C(i.$$.fragment)},l(t){I(i.$$.fragment,t)},m(t,n){y(i,t,n),a=!0},p(t,n){const m={};n[0]&16&&(m.queryResult=t[4]),i.$set(m)},i(t){a||(_(i.$$.fragment,t),a=!0)},o(t){o(i.$$.fragment,t),a=!1},d(t){b(i,t)}}}function at(s){let i,a;return i=new Pe({props:{queryID:"price_distribution",queryResult:s[5]}}),{c(){C(i.$$.fragment)},l(t){I(i.$$.fragment,t)},m(t,n){y(i,t,n),a=!0},p(t,n){const m={};n[0]&32&&(m.queryResult=t[5]),i.$set(m)},i(t){a||(_(i.$$.fragment,t),a=!0)},o(t){o(i.$$.fragment,t),a=!1},d(t){b(i,t)}}}function rt(s){let i,a;return i=new Pe({props:{queryID:"msrp_premium_distribution",queryResult:s[6]}}),{c(){C(i.$$.fragment)},l(t){I(i.$$.fragment,t)},m(t,n){y(i,t,n),a=!0},p(t,n){const m={};n[0]&64&&(m.queryResult=t[6]),i.$set(m)},i(t){a||(_(i.$$.fragment,t),a=!0)},o(t){o(i.$$.fragment,t),a=!1},d(t){b(i,t)}}}function st(s){let i,a;return i=new Pe({props:{queryID:"pct_at_or_below_msrp",queryResult:s[7]}}),{c(){C(i.$$.fragment)},l(t){I(i.$$.fragment,t)},m(t,n){y(i,t,n),a=!0},p(t,n){const m={};n[0]&128&&(m.queryResult=t[7]),i.$set(m)},i(t){a||(_(i.$$.fragment,t),a=!0)},o(t){o(i.$$.fragment,t),a=!1},d(t){b(i,t)}}}function lt(s){let i,a;return i=new Pe({props:{queryID:"aib_distribution",queryResult:s[8]}}),{c(){C(i.$$.fragment)},l(t){I(i.$$.fragment,t)},m(t,n){y(i,t,n),a=!0},p(t,n){const m={};n[0]&256&&(m.queryResult=t[8]),i.$set(m)},i(t){a||(_(i.$$.fragment,t),a=!0)},o(t){o(i.$$.fragment,t),a=!1},d(t){b(i,t)}}}function _t(s){let i,a;return i=new Pe({props:{queryID:"gpu_retailer_heatmap",queryResult:s[9]}}),{c(){C(i.$$.fragment)},l(t){I(i.$$.fragment,t)},m(t,n){y(i,t,n),a=!0},p(t,n){const m={};n[0]&512&&(m.queryResult=t[9]),i.$set(m)},i(t){a||(_(i.$$.fragment,t),a=!0)},o(t){o(i.$$.fragment,t),a=!1},d(t){b(i,t)}}}function Ct(s){let i,a,t,n,m,l,He='<a href="#weekly-restock-alerts">Weekly Restock Alerts</a>',Ge,oe,We="Drill dow into the metrics per GPU",M,F,G,me,x,Se,Y,ue='<a href="#all-restock-alert-analysis">All Restock Alert Analysis</a>',z,V,K,de,Re,k,Q,j,J,Oe,$,ce='<a href="#price-analysis">Price Analysis</a>',Z,ee,te,Ue,pe,w,ie,ae,re,De,Te,L,se,B,be='<a href="#distribution-analysis">Distribution Analysis</a>',ye,Ne,X,le,_e,ne,Ie;function Ye(e,r){return It}let W=Ye()(s),g=s[0]&&Je(s);G=new Fe({props:{data:s[0],x:"week",y:"num_listings",title:"Per GPU weekly restock alerts",series:"GPU_Name",fillOpacity:"1",chartAreaHeight:"250",subtitle:"How many times each GPU model triggered a restock alert every week",echartsOptions:{series:[{name:"RTX 5070",itemStyle:{color:"#A0D8B8"}},{name:"RTX 5070 Ti",itemStyle:{color:"#69C496"}},{name:"RTX 5080",itemStyle:{color:"#3CB371"}},{name:"RTX 5090",itemStyle:{color:"#287D51"}},{name:"RX 9070",itemStyle:{color:"#eea5a5"}},{name:"RX 9070 XT",itemStyle:{color:"#db4d4d"}}],xAxis:{axisLabel:{fontSize:10}},grid:{top:"23%"},legend:{textStyle:{fontSize:10},padding:[5,10],data:["RTX 5070","RTX 5070 Ti","RTX 5080","RTX 5090","RX 9070","RX 9070 XT"]},yAxis:{axisLabel:{fontSize:10}}}}}),x=new Dt({props:{data:s[0],x:"week",y:"num_listings",series:"GPU_Name",title:"Per GPU weekly restock alert share",chartAreaHeight:"250",fillOpacity:"1",type:"stacked100",subtitle:"Each GPU model’s share of all restock alerts for each week",echartsOptions:{series:[{name:"RTX 5070",itemStyle:{color:"#A0D8B8"}},{name:"RTX 5070 Ti",itemStyle:{color:"#69C496"}},{name:"RTX 5080",itemStyle:{color:"#3CB371"}},{name:"RTX 5090",itemStyle:{color:"#287D51"}},{name:"RX 9070",itemStyle:{color:"#eea5a5"}},{name:"RX 9070 XT",itemStyle:{color:"#db4d4d"}}],xAxis:{axisLabel:{fontSize:10}},yAxis:{axisLabel:{fontSize:10}},legend:{textStyle:{fontSize:10},padding:[5,10],data:["RTX 5070","RTX 5070 Ti","RTX 5080","RTX 5090","RX 9070","RX 9070 XT"]},grid:{top:"23%"}}}});let P=s[1]&&Ze(s);K=new Fe({props:{data:s[1],x:"GPU_Name",y:"pct_listings",title:"Restock Alert Share by GPU Model",subtitle:"Each GPU model’s share of all restock alerts since launch",yFmt:"pct0",swapXY:"true",fillOpacity:"1",chartAreaHeight:"250",echartsOptions:{series:[{itemStyle:{color:At}}],xAxis:[{axisLabel:{fontSize:10}}],grid:{top:"20%"},legend:{textStyle:{fontSize:10},padding:[5,10],data:["RTX 5070","RTX 5070 Ti","RTX 5080","RTX 5090","RX 9070","RX 9070 XT"]},yAxis:{axisLabel:{fontSize:11}}}}});let S=s[2]&&et(s);k=new Fe({props:{data:s[2],x:"GPU_Name",y:"listing_count",title:"Total GPU Restock Alerts by Model",subtitle:"How many times each GPU has ever triggered a restock alert",fillOpacity:"1",swapXY:"true",chartAreaHeight:"250",echartsOptions:{series:[{itemStyle:{color:Mt}}],xAxis:[{axisLabel:{fontSize:10}}],grid:{top:"20%"},legend:{textStyle:{fontSize:10},padding:[5,10],data:["RTX 5070","RTX 5070 Ti","RTX 5080","RTX 5090","RX 9070","RX 9070 XT"]},yAxis:{axisLabel:{fontSize:11}}}}});let d=s[3]&&tt(s);J=new Fe({props:{data:s[3],x:"GPU_Name",y:"listing_count",series:"series_group",type:"stacked100",title:"Restock Alert Distribution by Day of Week by GPU",subtitle:"% of each vendor's alerts posted on weekdays vs weekends (Nvidia in green, AMD in red)",yFmt:"pct0",chartAreaHeight:"250",echartsOptions:{series:[{name:"Nvidia Weekday",type:"bar",stack:"total",itemStyle:{color:"#50ba7f"}},{name:"Nvidia Weekend",type:"bar",stack:"total",itemStyle:{color:"#b3e0b7"}},{name:"AMD Weekday",type:"bar",stack:"total",itemStyle:{color:"#CD5C5C"}},{name:"AMD Weekend",type:"bar",stack:"total",itemStyle:{color:"#f39999"}}],xAxis:{axisLabel:{fontSize:11}},yAxis:{name:"Percentage of Restocks",nameLocation:"middle",nameGap:50,nameTextStyle:{align:"center",fontSize:11},axisLabel:{fontSize:10}},legend:{data:["Nvidia Weekday","Nvidia Weekend","AMD Weekday","AMD Weekend"],textStyle:{fontSize:11},padding:[5,10]},grid:{top:"25%"}}}});let p=s[4]&&it(s);te=new bt({props:{data:s[4],x:"week_start",y:"average_weekly_price",series:"GPU_Name",title:"Weekly Average Price by GPU Model",subtitle:"How the average price of each GPU model changes week to week",yFmt:"usd",chartAreaHeight:"250",echartsOptions:{series:[{name:"RTX 5070",itemStyle:{color:"#A0D8B8"}},{name:"RTX 5070 Ti",itemStyle:{color:"#69C496"}},{name:"RTX 5080",itemStyle:{color:"#3CB371"}},{name:"RTX 5090",itemStyle:{color:"#287D51"}},{name:"RX 9070",itemStyle:{color:"#eea5a5"}},{name:"RX 9070 XT",itemStyle:{color:"#db4d4d"}}],yAxis:{axisLabel:{fontSize:10}},legend:{textStyle:{fontSize:10},padding:[5,10],data:["RTX 5070","RTX 5070 Ti","RTX 5080","RTX 5090","RX 9070","RX 9070 XT"]},grid:{top:"23%"}}}});let T=s[5]&&at(s);w=new je({props:{data:s[5],name:"GPU_Name",min:"minV",intervalBottom:"q1_Price",midpoint:"med",intervalTop:"q3_Price",max:"maxV",yFmt:"usd",swapXY:"true",chartAreaHeight:"250",title:"Price Distribution by GPU Model",subtitle:"Shows the range and central tendency of pricing for each GPU model",echartsOptions:{tooltip:{trigger:"axis",axisPointer:{type:"shadow",shadowStyle:{color:"rgba(150,150,150,0.1)"}},formatter:s[53]},series:[{itemStyle:{borderColor:nt,color:"#333333"}}],xAxis:{axisLabel:{fontSize:10}},yAxis:{axisLabel:{fontSize:11}},grid:{left:"3%",top:"23%"}}}});let E=s[6]&&rt(s);re=new je({props:{data:s[6],name:"GPU_Name",midpoint:"median_premium_pct",intervalBottom:"q1_premium_pct",intervalTop:"q3_premium_pct",min:"min_premium_pct",max:"max_premium_pct",title:"MSRP Premium Analysis by GPU Model",subtitle:"Distribution of markups % above or below MSRP, showing min/max values and quartile boundaries",yFmt:"pct0",chartAreaHeight:"250",swapXY:"true",echartsOptions:{tooltip:{trigger:"axis",axisPointer:{type:"shadow",shadowStyle:{color:"rgba(150,150,150,0.1)"}},formatter:s[54]},series:[{itemStyle:{borderColor:ot,color:"#333333"}}],xAxis:{axisLabel:{fontSize:10}},yAxis:{axisLabel:{fontSize:11}},grid:{left:"3%",top:"23%"}}}});let O=s[7]&&st(s);L=new Fe({props:{data:s[7],x:"GPU_Name",y:"pct_at_or_below_msrp",title:"% of Restock Alerts ≤ MSRP by GPU Model",subtitle:"Percentage of each GPU's restock alerts priced at or below manufacturer suggested retail price",fillOpacity:"1",swapXY:"true",chartAreaHeight:"250",echartsOptions:{series:[{itemStyle:{color:Gt}}],xAxis:[{axisLabel:{fontSize:10}}],grid:{top:"20%"},legend:{textStyle:{fontSize:10},padding:[5,10],data:["RTX 5070","RTX 5070 Ti","RTX 5080","RTX 5090","RX 9070","RX 9070 XT"]},yAxis:{axisLabel:{fontSize:11}}}}});let U=s[8]&&lt(s);X=new Fe({props:{data:s[8],x:"AIB",y:"model_count",series:"GPU_Name",type:"stacked100",title:"GPU Model Distribution by AIB Partner",subtitle:"How different GPU models are distributed across AIB partners",yFmt:"pct0",chartAreaHeight:"250",echartsOptions:{series:[{name:"RTX 5070",itemStyle:{color:"#A0D8B8"}},{name:"RTX 5070 Ti",itemStyle:{color:"#69C496"}},{name:"RTX 5080",itemStyle:{color:"#3CB371"}},{name:"RTX 5090",itemStyle:{color:"#287D51"}},{name:"RX 9070",itemStyle:{color:"#eea5a5"}},{name:"RX 9070 XT",itemStyle:{color:"#db4d4d"}}],xAxis:{axisLabel:{fontSize:10}},yAxis:{axisLabel:{fontSize:10}},legend:{textStyle:{fontSize:10},padding:[5,10],data:["RTX 5070","RTX 5070 Ti","RTX 5080","RTX 5090","RX 9070","RX 9070 XT"]},grid:{left:"3%",top:"23%"}}}});let D=s[9]&&_t(s);return ne=new Ut({props:{data:s[9],x:"Retailer",y:"GPU_Name",value:"listing_count",title:"Top-10 Retailers by GPU Model (Restock Alerts)",subtitle:"Retailers with highest overall restock alerts for each GPU model",valueFormat:"#,###",colorScale:["#EFF3FF","#08306B"]}}),{c(){i=f(),W.c(),a=Le("meta"),t=Le("meta"),n=Ve(),m=f(),l=Le("h2"),l.innerHTML=He,Ge=f(),oe=Le("p"),oe.textContent=We,M=f(),g&&g.c(),F=f(),C(G.$$.fragment),me=f(),C(x.$$.fragment),Se=f(),Y=Le("h2"),Y.innerHTML=ue,z=f(),P&&P.c(),V=f(),C(K.$$.fragment),de=f(),S&&S.c(),Re=f(),C(k.$$.fragment),Q=f(),d&&d.c(),j=f(),C(J.$$.fragment),Oe=f(),$=Le("h2"),$.innerHTML=ce,Z=f(),p&&p.c(),ee=f(),C(te.$$.fragment),Ue=f(),T&&T.c(),pe=f(),C(w.$$.fragment),ie=f(),E&&E.c(),ae=f(),C(re.$$.fragment),De=f(),O&&O.c(),Te=f(),C(L.$$.fragment),se=f(),B=Le("h2"),B.innerHTML=be,ye=f(),U&&U.c(),Ne=f(),C(X.$$.fragment),le=f(),D&&D.c(),_e=f(),C(ne.$$.fragment),this.h()},l(e){i=N(e);const r=ut("svelte-2igo1p",document.head);W.l(r),a=we(r,"META",{name:!0,content:!0}),t=we(r,"META",{name:!0,content:!0}),n=Ve(),r.forEach(R),m=N(e),l=we(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),$e(l)!=="svelte-5507pb"&&(l.innerHTML=He),Ge=N(e),oe=we(e,"P",{class:!0,"data-svelte-h":!0}),$e(oe)!=="svelte-17r1m8o"&&(oe.textContent=We),M=N(e),g&&g.l(e),F=N(e),I(G.$$.fragment,e),me=N(e),I(x.$$.fragment,e),Se=N(e),Y=we(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),$e(Y)!=="svelte-1mqgk2q"&&(Y.innerHTML=ue),z=N(e),P&&P.l(e),V=N(e),I(K.$$.fragment,e),de=N(e),S&&S.l(e),Re=N(e),I(k.$$.fragment,e),Q=N(e),d&&d.l(e),j=N(e),I(J.$$.fragment,e),Oe=N(e),$=we(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),$e($)!=="svelte-13okjun"&&($.innerHTML=ce),Z=N(e),p&&p.l(e),ee=N(e),I(te.$$.fragment,e),Ue=N(e),T&&T.l(e),pe=N(e),I(w.$$.fragment,e),ie=N(e),E&&E.l(e),ae=N(e),I(re.$$.fragment,e),De=N(e),O&&O.l(e),Te=N(e),I(L.$$.fragment,e),se=N(e),B=we(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),$e(B)!=="svelte-19ndm0i"&&(B.innerHTML=be),ye=N(e),U&&U.l(e),Ne=N(e),I(X.$$.fragment,e),le=N(e),D&&D.l(e),_e=N(e),I(ne.$$.fragment,e),this.h()},h(){q(a,"name","twitter:card"),q(a,"content","summary_large_image"),q(t,"name","twitter:site"),q(t,"content","@evidence_dev"),q(l,"class","markdown"),q(l,"id","weekly-restock-alerts"),q(oe,"class","markdown"),q(Y,"class","markdown"),q(Y,"id","all-restock-alert-analysis"),q($,"class","markdown"),q($,"id","price-analysis"),q(B,"class","markdown"),q(B,"id","distribution-analysis")},m(e,r){c(e,i,r),W.m(document.head,null),xe(document.head,a),xe(document.head,t),xe(document.head,n),c(e,m,r),c(e,l,r),c(e,Ge,r),c(e,oe,r),c(e,M,r),g&&g.m(e,r),c(e,F,r),y(G,e,r),c(e,me,r),y(x,e,r),c(e,Se,r),c(e,Y,r),c(e,z,r),P&&P.m(e,r),c(e,V,r),y(K,e,r),c(e,de,r),S&&S.m(e,r),c(e,Re,r),y(k,e,r),c(e,Q,r),d&&d.m(e,r),c(e,j,r),y(J,e,r),c(e,Oe,r),c(e,$,r),c(e,Z,r),p&&p.m(e,r),c(e,ee,r),y(te,e,r),c(e,Ue,r),T&&T.m(e,r),c(e,pe,r),y(w,e,r),c(e,ie,r),E&&E.m(e,r),c(e,ae,r),y(re,e,r),c(e,De,r),O&&O.m(e,r),c(e,Te,r),y(L,e,r),c(e,se,r),c(e,B,r),c(e,ye,r),U&&U.m(e,r),c(e,Ne,r),y(X,e,r),c(e,le,r),D&&D.m(e,r),c(e,_e,r),y(ne,e,r),Ie=!0},p(e,r){W.p(e,r),e[0]?g?(g.p(e,r),r[0]&1&&_(g,1)):(g=Je(e),g.c(),_(g,1),g.m(F.parentNode,F)):g&&(ge(),o(g,1,1,()=>{g=null}),fe());const Ae={};r[0]&1&&(Ae.data=e[0]),G.$set(Ae);const Xe={};r[0]&1&&(Xe.data=e[0]),x.$set(Xe),e[1]?P?(P.p(e,r),r[0]&2&&_(P,1)):(P=Ze(e),P.c(),_(P,1),P.m(V.parentNode,V)):P&&(ge(),o(P,1,1,()=>{P=null}),fe());const ve={};r[0]&2&&(ve.data=e[1]),K.$set(ve),e[2]?S?(S.p(e,r),r[0]&4&&_(S,1)):(S=et(e),S.c(),_(S,1),S.m(Re.parentNode,Re)):S&&(ge(),o(S,1,1,()=>{S=null}),fe());const Be={};r[0]&4&&(Be.data=e[2]),k.$set(Be),e[3]?d?(d.p(e,r),r[0]&8&&_(d,1)):(d=tt(e),d.c(),_(d,1),d.m(j.parentNode,j)):d&&(ge(),o(d,1,1,()=>{d=null}),fe());const he={};r[0]&8&&(he.data=e[3]),J.$set(he),e[4]?p?(p.p(e,r),r[0]&16&&_(p,1)):(p=it(e),p.c(),_(p,1),p.m(ee.parentNode,ee)):p&&(ge(),o(p,1,1,()=>{p=null}),fe());const qe={};r[0]&16&&(qe.data=e[4]),te.$set(qe),e[5]?T?(T.p(e,r),r[0]&32&&_(T,1)):(T=at(e),T.c(),_(T,1),T.m(pe.parentNode,pe)):T&&(ge(),o(T,1,1,()=>{T=null}),fe());const u={};r[0]&32&&(u.data=e[5]),r[0]&32&&(u.echartsOptions={tooltip:{trigger:"axis",axisPointer:{type:"shadow",shadowStyle:{color:"rgba(150,150,150,0.1)"}},formatter:e[53]},series:[{itemStyle:{borderColor:nt,color:"#333333"}}],xAxis:{axisLabel:{fontSize:10}},yAxis:{axisLabel:{fontSize:11}},grid:{left:"3%",top:"23%"}}),w.$set(u),e[6]?E?(E.p(e,r),r[0]&64&&_(E,1)):(E=rt(e),E.c(),_(E,1),E.m(ae.parentNode,ae)):E&&(ge(),o(E,1,1,()=>{E=null}),fe());const h={};r[0]&64&&(h.data=e[6]),r[0]&32&&(h.echartsOptions={tooltip:{trigger:"axis",axisPointer:{type:"shadow",shadowStyle:{color:"rgba(150,150,150,0.1)"}},formatter:e[54]},series:[{itemStyle:{borderColor:ot,color:"#333333"}}],xAxis:{axisLabel:{fontSize:10}},yAxis:{axisLabel:{fontSize:11}},grid:{left:"3%",top:"23%"}}),re.$set(h),e[7]?O?(O.p(e,r),r[0]&128&&_(O,1)):(O=st(e),O.c(),_(O,1),O.m(Te.parentNode,Te)):O&&(ge(),o(O,1,1,()=>{O=null}),fe());const Me={};r[0]&128&&(Me.data=e[7]),L.$set(Me),e[8]?U?(U.p(e,r),r[0]&256&&_(U,1)):(U=lt(e),U.c(),_(U,1),U.m(Ne.parentNode,Ne)):U&&(ge(),o(U,1,1,()=>{U=null}),fe());const v={};r[0]&256&&(v.data=e[8]),X.$set(v),e[9]?D?(D.p(e,r),r[0]&512&&_(D,1)):(D=_t(e),D.c(),_(D,1),D.m(_e.parentNode,_e)):D&&(ge(),o(D,1,1,()=>{D=null}),fe());const H={};r[0]&512&&(H.data=e[9]),ne.$set(H)},i(e){Ie||(_(g),_(G.$$.fragment,e),_(x.$$.fragment,e),_(P),_(K.$$.fragment,e),_(S),_(k.$$.fragment,e),_(d),_(J.$$.fragment,e),_(p),_(te.$$.fragment,e),_(T),_(w.$$.fragment,e),_(E),_(re.$$.fragment,e),_(O),_(L.$$.fragment,e),_(U),_(X.$$.fragment,e),_(D),_(ne.$$.fragment,e),Ie=!0)},o(e){o(g),o(G.$$.fragment,e),o(x.$$.fragment,e),o(P),o(K.$$.fragment,e),o(S),o(k.$$.fragment,e),o(d),o(J.$$.fragment,e),o(p),o(te.$$.fragment,e),o(T),o(w.$$.fragment,e),o(E),o(re.$$.fragment,e),o(O),o(L.$$.fragment,e),o(U),o(X.$$.fragment,e),o(D),o(ne.$$.fragment,e),Ie=!1},d(e){e&&(R(i),R(m),R(l),R(Ge),R(oe),R(M),R(F),R(me),R(Se),R(Y),R(z),R(V),R(de),R(Re),R(Q),R(j),R(Oe),R($),R(Z),R(ee),R(Ue),R(pe),R(ie),R(ae),R(De),R(Te),R(se),R(B),R(ye),R(Ne),R(le),R(_e)),W.d(e),R(a),R(t),R(n),g&&g.d(e),b(G,e),b(x,e),P&&P.d(e),b(K,e),S&&S.d(e),b(k,e),d&&d.d(e),b(J,e),p&&p.d(e),b(te,e),T&&T.d(e),b(w,e),E&&E.d(e),b(re,e),O&&O.d(e),b(L,e),U&&U.d(e),b(X,e),D&&D.d(e),b(ne,e)}}}const At=function(s){const i={"RTX 5070":"#A0D8B8","RTX 5070 Ti":"#69C496","RTX 5080":"#3CB371","RTX 5090":"#287D51","RX 9070":"#eea5a5","RX 9070 XT":"#db4d4d"};return s.name&&i[s.name]?i[s.name]:"#5470c6"},Mt=function(s){const i={"RTX 5070":"#A0D8B8","RTX 5070 Ti":"#69C496","RTX 5080":"#3CB371","RTX 5090":"#287D51","RX 9070":"#eea5a5","RX 9070 XT":"#db4d4d"};return s.name&&i[s.name]?i[s.name]:"#5470c6"},nt=function(s){const i=["RTX 5070","RTX 5070 Ti","RTX 5080","RTX 5090","RX 9070","RX 9070 XT"],a={"RTX 5070":"#A0D8B8","RTX 5070 Ti":"#69C496","RTX 5080":"#3CB371","RTX 5090":"#287D51","RX 9070":"#eea5a5","RX 9070 XT":"#db4d4d"},t=i[s.dataIndex];return a[t]||"#5470c6"},ot=function(s){const i=["RTX 5070","RTX 5070 Ti","RTX 5080","RTX 5090","RX 9070","RX 9070 XT"],a={"RTX 5070":"#A0D8B8","RTX 5070 Ti":"#69C496","RTX 5080":"#3CB371","RTX 5090":"#287D51","RX 9070":"#eea5a5","RX 9070 XT":"#db4d4d"},t=i[s.dataIndex];return a[t]||"#5470c6"},Gt=function(s){const i={"RTX 5070":"#A0D8B8","RTX 5070 Ti":"#69C496","RTX 5080":"#3CB371","RTX 5090":"#287D51","RX 9070":"#eea5a5","RX 9070 XT":"#db4d4d"};return s.name&&i[s.name]?i[s.name]:"#5470c6"};function kt(s,i,a){let t,n;Ke(s,Ot,u=>a(52,t=u)),Ke(s,Qe,u=>a(60,n=u));let{data:m}=i,{data:l={},customFormattingSettings:He,__db:Ge,inputs:oe}=m;Rt(Qe,n="1ad2546ec94ef061d77136b299e493bf",n);let We=gt(dt(oe));ct(We.subscribe(u=>oe=u)),pt(St,{getCustomFormats:()=>He.customFormats||[]});const M=(u,h)=>yt(Ge.query,u,{query_name:h});Et(M),t.params,Tt(()=>!0);let F={initialData:void 0,initialError:void 0},G=A`SELECT
    DATE_TRUNC('week', MessageDateTime) as "week",
    "GPU_Name",
    COUNT(DISTINCT MessageID) AS num_listings
FROM gpu_data.gpu
GROUP BY "week", "GPU_Name"
ORDER BY "week"`,me=`SELECT
    DATE_TRUNC('week', MessageDateTime) as "week",
    "GPU_Name",
    COUNT(DISTINCT MessageID) AS num_listings
FROM gpu_data.gpu
GROUP BY "week", "GPU_Name"
ORDER BY "week"`;l.weekly_listings_data&&(l.weekly_listings_data instanceof Error?F.initialError=l.weekly_listings_data:F.initialData=l.weekly_listings_data,l.weekly_listings_columns&&(F.knownColumns=l.weekly_listings_columns));let x,Se=!1;const Y=Ee.createReactive({callback:u=>{a(0,x=u)},execFn:M},{id:"weekly_listings",...F});Y(me,{noResolve:G,...F}),globalThis[Symbol.for("weekly_listings")]={get value(){return x}};let ue={initialData:void 0,initialError:void 0},z=A`SELECT
  "GPU_Name",
  COUNT(DISTINCT MessageID) / SUM(COUNT(DISTINCT MessageID)) OVER() AS pct_listings
FROM gpu_data.gpu
GROUP BY "GPU_Name"
ORDER BY pct_listings DESC`,V=`SELECT
  "GPU_Name",
  COUNT(DISTINCT MessageID) / SUM(COUNT(DISTINCT MessageID)) OVER() AS pct_listings
FROM gpu_data.gpu
GROUP BY "GPU_Name"
ORDER BY pct_listings DESC`;l.gpu_availability_pct_data&&(l.gpu_availability_pct_data instanceof Error?ue.initialError=l.gpu_availability_pct_data:ue.initialData=l.gpu_availability_pct_data,l.gpu_availability_pct_columns&&(ue.knownColumns=l.gpu_availability_pct_columns));let K,de=!1;const Re=Ee.createReactive({callback:u=>{a(1,K=u)},execFn:M},{id:"gpu_availability_pct",...ue});Re(V,{noResolve:z,...ue}),globalThis[Symbol.for("gpu_availability_pct")]={get value(){return K}};let k={initialData:void 0,initialError:void 0},Q=A`SELECT
  "GPU_Name",
  COUNT(DISTINCT MessageID) AS listing_count
FROM gpu_data.gpu
GROUP BY "GPU_Name"
ORDER BY listing_count DESC`,j=`SELECT
  "GPU_Name",
  COUNT(DISTINCT MessageID) AS listing_count
FROM gpu_data.gpu
GROUP BY "GPU_Name"
ORDER BY listing_count DESC`;l.gpu_availability_data&&(l.gpu_availability_data instanceof Error?k.initialError=l.gpu_availability_data:k.initialData=l.gpu_availability_data,l.gpu_availability_columns&&(k.knownColumns=l.gpu_availability_columns));let J,Oe=!1;const $=Ee.createReactive({callback:u=>{a(2,J=u)},execFn:M},{id:"gpu_availability",...k});$(j,{noResolve:Q,...k}),globalThis[Symbol.for("gpu_availability")]={get value(){return J}};let ce={initialData:void 0,initialError:void 0},Z=A`SELECT
    "GPU_Name",
    CASE
        WHEN "GPU_Name" LIKE 'RTX%' AND EXTRACT(DOW FROM MessageDateTime) NOT IN (0, 6) THEN 'Nvidia Weekday'
        WHEN "GPU_Name" LIKE 'RTX%' AND EXTRACT(DOW FROM MessageDateTime) IN (0, 6) THEN 'Nvidia Weekend'
        WHEN "GPU_Name" LIKE 'RX%' AND EXTRACT(DOW FROM MessageDateTime) NOT IN (0, 6) THEN 'AMD Weekday'
        WHEN "GPU_Name" LIKE 'RX%' AND EXTRACT(DOW FROM MessageDateTime) IN (0, 6) THEN 'AMD Weekend'
    END AS series_group,
    COUNT(DISTINCT MessageID) AS listing_count
FROM gpu_data.gpu
GROUP BY "GPU_Name", series_group
ORDER BY "GPU_Name", series_group`,ee=`SELECT
    "GPU_Name",
    CASE
        WHEN "GPU_Name" LIKE 'RTX%' AND EXTRACT(DOW FROM MessageDateTime) NOT IN (0, 6) THEN 'Nvidia Weekday'
        WHEN "GPU_Name" LIKE 'RTX%' AND EXTRACT(DOW FROM MessageDateTime) IN (0, 6) THEN 'Nvidia Weekend'
        WHEN "GPU_Name" LIKE 'RX%' AND EXTRACT(DOW FROM MessageDateTime) NOT IN (0, 6) THEN 'AMD Weekday'
        WHEN "GPU_Name" LIKE 'RX%' AND EXTRACT(DOW FROM MessageDateTime) IN (0, 6) THEN 'AMD Weekend'
    END AS series_group,
    COUNT(DISTINCT MessageID) AS listing_count
FROM gpu_data.gpu
GROUP BY "GPU_Name", series_group
ORDER BY "GPU_Name", series_group`;l.daily_distribution_data&&(l.daily_distribution_data instanceof Error?ce.initialError=l.daily_distribution_data:ce.initialData=l.daily_distribution_data,l.daily_distribution_columns&&(ce.knownColumns=l.daily_distribution_columns));let te,Ue=!1;const pe=Ee.createReactive({callback:u=>{a(3,te=u)},execFn:M},{id:"daily_distribution",...ce});pe(ee,{noResolve:Z,...ce}),globalThis[Symbol.for("daily_distribution")]={get value(){return te}};let w={initialData:void 0,initialError:void 0},ie=A`SELECT
    date_trunc('week', MessageDateTime) AS week_start,
    "GPU_Name",
    AVG("Price") AS average_weekly_price
FROM gpu_data.gpu
WHERE Price IS NOT NULL 
  AND Price > 0       
GROUP BY week_start, "GPU_Name"
ORDER BY week_start`,ae=`SELECT
    date_trunc('week', MessageDateTime) AS week_start,
    "GPU_Name",
    AVG("Price") AS average_weekly_price
FROM gpu_data.gpu
WHERE Price IS NOT NULL 
  AND Price > 0       
GROUP BY week_start, "GPU_Name"
ORDER BY week_start`;l.weekly_avg_price_data&&(l.weekly_avg_price_data instanceof Error?w.initialError=l.weekly_avg_price_data:w.initialData=l.weekly_avg_price_data,l.weekly_avg_price_columns&&(w.knownColumns=l.weekly_avg_price_columns));let re,De=!1;const Te=Ee.createReactive({callback:u=>{a(4,re=u)},execFn:M},{id:"weekly_avg_price",...w});Te(ae,{noResolve:ie,...w}),globalThis[Symbol.for("weekly_avg_price")]={get value(){return re}};let L={initialData:void 0,initialError:void 0},se=A`SELECT
    "GPU_Name",
    MIN("Price") as minV,
    PERCENTILE_CONT(0.25) WITHIN GROUP (ORDER BY Price) AS q1_Price,
    PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY Price) AS med,
    PERCENTILE_CONT(0.75) WITHIN GROUP (ORDER BY Price) AS q3_Price,
    MAX("Price") as maxV
FROM gpu_data.gpu
WHERE "Price" IS NOT NULL AND "Price" > 0
GROUP BY "GPU_Name"
ORDER BY "GPU_Name" ASC`,B=`SELECT
    "GPU_Name",
    MIN("Price") as minV,
    PERCENTILE_CONT(0.25) WITHIN GROUP (ORDER BY Price) AS q1_Price,
    PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY Price) AS med,
    PERCENTILE_CONT(0.75) WITHIN GROUP (ORDER BY Price) AS q3_Price,
    MAX("Price") as maxV
FROM gpu_data.gpu
WHERE "Price" IS NOT NULL AND "Price" > 0
GROUP BY "GPU_Name"
ORDER BY "GPU_Name" ASC`;l.price_distribution_data&&(l.price_distribution_data instanceof Error?L.initialError=l.price_distribution_data:L.initialData=l.price_distribution_data,l.price_distribution_columns&&(L.knownColumns=l.price_distribution_columns));let be,ye=!1;const Ne=Ee.createReactive({callback:u=>{a(5,be=u)},execFn:M},{id:"price_distribution",...L});Ne(B,{noResolve:se,...L}),globalThis[Symbol.for("price_distribution")]={get value(){return be}};let X={initialData:void 0,initialError:void 0},le=A`SELECT
  "GPU_Name",
  MIN((Price - MSRP) / MSRP) AS min_premium_pct,
  PERCENTILE_CONT(0.25) WITHIN GROUP (ORDER BY ((Price - MSRP) / MSRP)) AS q1_premium_pct,
  PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY ((Price - MSRP) / MSRP)) AS median_premium_pct,
  PERCENTILE_CONT(0.75) WITHIN GROUP (ORDER BY ((Price - MSRP) / MSRP)) AS q3_premium_pct,
  MAX((Price - MSRP) / MSRP) AS max_premium_pct
FROM gpu_data.gpu
WHERE MSRP IS NOT NULL
  AND Price IS NOT NULL 
  AND Price > 0       
GROUP BY "GPU_Name"
ORDER BY "GPU_Name" ASC`,_e=`SELECT
  "GPU_Name",
  MIN((Price - MSRP) / MSRP) AS min_premium_pct,
  PERCENTILE_CONT(0.25) WITHIN GROUP (ORDER BY ((Price - MSRP) / MSRP)) AS q1_premium_pct,
  PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY ((Price - MSRP) / MSRP)) AS median_premium_pct,
  PERCENTILE_CONT(0.75) WITHIN GROUP (ORDER BY ((Price - MSRP) / MSRP)) AS q3_premium_pct,
  MAX((Price - MSRP) / MSRP) AS max_premium_pct
FROM gpu_data.gpu
WHERE MSRP IS NOT NULL
  AND Price IS NOT NULL 
  AND Price > 0       
GROUP BY "GPU_Name"
ORDER BY "GPU_Name" ASC`;l.msrp_premium_distribution_data&&(l.msrp_premium_distribution_data instanceof Error?X.initialError=l.msrp_premium_distribution_data:X.initialData=l.msrp_premium_distribution_data,l.msrp_premium_distribution_columns&&(X.knownColumns=l.msrp_premium_distribution_columns));let ne,Ie=!1;const Ye=Ee.createReactive({callback:u=>{a(6,ne=u)},execFn:M},{id:"msrp_premium_distribution",...X});Ye(_e,{noResolve:le,...X}),globalThis[Symbol.for("msrp_premium_distribution")]={get value(){return ne}};let Ce={initialData:void 0,initialError:void 0},W=A`SELECT
  "GPU_Name",
  ROUND(
    COUNT_IF(Price <= MSRP) * 100.0 / NULLIF(COUNT(*), 0),
    1
  ) AS pct_at_or_below_msrp
FROM gpu_data.gpu
WHERE MSRP IS NOT NULL
  AND Price IS NOT NULL 
  AND Price > 0       
GROUP BY "GPU_Name"
ORDER BY GPU_Name ASC`,g=`SELECT
  "GPU_Name",
  ROUND(
    COUNT_IF(Price <= MSRP) * 100.0 / NULLIF(COUNT(*), 0),
    1
  ) AS pct_at_or_below_msrp
FROM gpu_data.gpu
WHERE MSRP IS NOT NULL
  AND Price IS NOT NULL 
  AND Price > 0       
GROUP BY "GPU_Name"
ORDER BY GPU_Name ASC`;l.pct_at_or_below_msrp_data&&(l.pct_at_or_below_msrp_data instanceof Error?Ce.initialError=l.pct_at_or_below_msrp_data:Ce.initialData=l.pct_at_or_below_msrp_data,l.pct_at_or_below_msrp_columns&&(Ce.knownColumns=l.pct_at_or_below_msrp_columns));let P,S=!1;const d=Ee.createReactive({callback:u=>{a(7,P=u)},execFn:M},{id:"pct_at_or_below_msrp",...Ce});d(g,{noResolve:W,...Ce}),globalThis[Symbol.for("pct_at_or_below_msrp")]={get value(){return P}};let p={initialData:void 0,initialError:void 0},T=A`SELECT
  "GPU_Name",
  AIB,
  COUNT(DISTINCT MessageID) AS model_count
FROM gpu_data.gpu
GROUP BY "GPU_Name", AIB
ORDER BY "GPU_Name", model_count DESC`,E=`SELECT
  "GPU_Name",
  AIB,
  COUNT(DISTINCT MessageID) AS model_count
FROM gpu_data.gpu
GROUP BY "GPU_Name", AIB
ORDER BY "GPU_Name", model_count DESC`;l.aib_distribution_data&&(l.aib_distribution_data instanceof Error?p.initialError=l.aib_distribution_data:p.initialData=l.aib_distribution_data,l.aib_distribution_columns&&(p.knownColumns=l.aib_distribution_columns));let O,U=!1;const D=Ee.createReactive({callback:u=>{a(8,O=u)},execFn:M},{id:"aib_distribution",...p});D(E,{noResolve:T,...p}),globalThis[Symbol.for("aib_distribution")]={get value(){return O}};let e={initialData:void 0,initialError:void 0},r=A`WITH top10 AS (
  SELECT Retailer
  FROM gpu_data.gpu
  GROUP BY Retailer
  ORDER BY COUNT(*) DESC
  LIMIT 10
)
SELECT
  "GPU_Name",
  Retailer,
  COUNT(DISTINCT MessageID) AS listing_count
FROM gpu_data.gpu
WHERE Retailer IN (SELECT Retailer FROM top10)
GROUP BY "GPU_Name", Retailer
ORDER BY "GPU_Name", listing_count DESC`,Ae=`WITH top10 AS (
  SELECT Retailer
  FROM gpu_data.gpu
  GROUP BY Retailer
  ORDER BY COUNT(*) DESC
  LIMIT 10
)
SELECT
  "GPU_Name",
  Retailer,
  COUNT(DISTINCT MessageID) AS listing_count
FROM gpu_data.gpu
WHERE Retailer IN (SELECT Retailer FROM top10)
GROUP BY "GPU_Name", Retailer
ORDER BY "GPU_Name", listing_count DESC`;l.gpu_retailer_heatmap_data&&(l.gpu_retailer_heatmap_data instanceof Error?e.initialError=l.gpu_retailer_heatmap_data:e.initialData=l.gpu_retailer_heatmap_data,l.gpu_retailer_heatmap_columns&&(e.knownColumns=l.gpu_retailer_heatmap_columns));let Xe,ve=!1;const Be=Ee.createReactive({callback:u=>{a(9,Xe=u)},execFn:M},{id:"gpu_retailer_heatmap",...e});Be(Ae,{noResolve:r,...e}),globalThis[Symbol.for("gpu_retailer_heatmap")]={get value(){return Xe}};const he=function(u){const h=u[0];if(!h||!h.data)return"";const Me=h.name,v=be.find(ke=>ke.GPU_Name===Me);if(!v)return"";const H=ke=>`$${Number(ke).toFixed(0)}`;return`<strong>${Me}</strong><br/>
            Maximum: ${H(v.maxV)}<br/>
            P75: ${H(v.q3_Price)}<br/>
            Median: ${H(v.med)}<br/>
            P25: ${H(v.q1_Price)}<br/>
            Minimum: ${H(v.minV)}`},qe=function(u){const h=u[0];if(!h||!h.data)return"";const Me=h.name,v=be.find(ke=>ke.GPU_Name===Me);if(!v)return"";const H=ke=>`${Number(ke).toFixed(0)}%`;return`<strong>${Me}</strong><br/>
            Maximum: ${H(v.maxV)}<br/>
            P75: ${H(v.q3_Price)}<br/>
            Median: ${H(v.med)}<br/>
            P25: ${H(v.q1_Price)}<br/>
            Minimum: ${H(v.minV)}`};return s.$$set=u=>{"data"in u&&a(10,m=u.data)},s.$$.update=()=>{s.$$.dirty[0]&1024&&a(11,{data:l={},customFormattingSettings:He,__db:Ge}=m,l),s.$$.dirty[0]&2048&&Pt.set(Object.keys(l).length>0),s.$$.dirty[1]&2097152&&t.params,s.$$.dirty[0]&61440&&(G||!Se?G||(Y(me,{noResolve:G,...F}),a(15,Se=!0)):Y(me,{noResolve:G})),s.$$.dirty[0]&983040&&(z||!de?z||(Re(V,{noResolve:z,...ue}),a(19,de=!0)):Re(V,{noResolve:z})),s.$$.dirty[0]&15728640&&(Q||!Oe?Q||($(j,{noResolve:Q,...k}),a(23,Oe=!0)):$(j,{noResolve:Q})),s.$$.dirty[0]&251658240&&(Z||!Ue?Z||(pe(ee,{noResolve:Z,...ce}),a(27,Ue=!0)):pe(ee,{noResolve:Z})),s.$$.dirty[0]&1879048192|s.$$.dirty[1]&1&&(ie||!De?ie||(Te(ae,{noResolve:ie,...w}),a(31,De=!0)):Te(ae,{noResolve:ie})),s.$$.dirty[1]&30&&(se||!ye?se||(Ne(B,{noResolve:se,...L}),a(35,ye=!0)):Ne(B,{noResolve:se})),s.$$.dirty[1]&480&&(le||!Ie?le||(Ye(_e,{noResolve:le,...X}),a(39,Ie=!0)):Ye(_e,{noResolve:le})),s.$$.dirty[1]&7680&&(W||!S?W||(d(g,{noResolve:W,...Ce}),a(43,S=!0)):d(g,{noResolve:W})),s.$$.dirty[1]&122880&&(T||!U?T||(D(E,{noResolve:T,...p}),a(47,U=!0)):D(E,{noResolve:T})),s.$$.dirty[1]&1966080&&(r||!ve?r||(Be(Ae,{noResolve:r,...e}),a(51,ve=!0)):Be(Ae,{noResolve:r}))},a(13,G=A`SELECT
    DATE_TRUNC('week', MessageDateTime) as "week",
    "GPU_Name",
    COUNT(DISTINCT MessageID) AS num_listings
FROM gpu_data.gpu
GROUP BY "week", "GPU_Name"
ORDER BY "week"`),a(14,me=`SELECT
    DATE_TRUNC('week', MessageDateTime) as "week",
    "GPU_Name",
    COUNT(DISTINCT MessageID) AS num_listings
FROM gpu_data.gpu
GROUP BY "week", "GPU_Name"
ORDER BY "week"`),a(17,z=A`SELECT
  "GPU_Name",
  COUNT(DISTINCT MessageID) / SUM(COUNT(DISTINCT MessageID)) OVER() AS pct_listings
FROM gpu_data.gpu
GROUP BY "GPU_Name"
ORDER BY pct_listings DESC`),a(18,V=`SELECT
  "GPU_Name",
  COUNT(DISTINCT MessageID) / SUM(COUNT(DISTINCT MessageID)) OVER() AS pct_listings
FROM gpu_data.gpu
GROUP BY "GPU_Name"
ORDER BY pct_listings DESC`),a(21,Q=A`SELECT
  "GPU_Name",
  COUNT(DISTINCT MessageID) AS listing_count
FROM gpu_data.gpu
GROUP BY "GPU_Name"
ORDER BY listing_count DESC`),a(22,j=`SELECT
  "GPU_Name",
  COUNT(DISTINCT MessageID) AS listing_count
FROM gpu_data.gpu
GROUP BY "GPU_Name"
ORDER BY listing_count DESC`),a(25,Z=A`SELECT
    "GPU_Name",
    CASE
        WHEN "GPU_Name" LIKE 'RTX%' AND EXTRACT(DOW FROM MessageDateTime) NOT IN (0, 6) THEN 'Nvidia Weekday'
        WHEN "GPU_Name" LIKE 'RTX%' AND EXTRACT(DOW FROM MessageDateTime) IN (0, 6) THEN 'Nvidia Weekend'
        WHEN "GPU_Name" LIKE 'RX%' AND EXTRACT(DOW FROM MessageDateTime) NOT IN (0, 6) THEN 'AMD Weekday'
        WHEN "GPU_Name" LIKE 'RX%' AND EXTRACT(DOW FROM MessageDateTime) IN (0, 6) THEN 'AMD Weekend'
    END AS series_group,
    COUNT(DISTINCT MessageID) AS listing_count
FROM gpu_data.gpu
GROUP BY "GPU_Name", series_group
ORDER BY "GPU_Name", series_group`),a(26,ee=`SELECT
    "GPU_Name",
    CASE
        WHEN "GPU_Name" LIKE 'RTX%' AND EXTRACT(DOW FROM MessageDateTime) NOT IN (0, 6) THEN 'Nvidia Weekday'
        WHEN "GPU_Name" LIKE 'RTX%' AND EXTRACT(DOW FROM MessageDateTime) IN (0, 6) THEN 'Nvidia Weekend'
        WHEN "GPU_Name" LIKE 'RX%' AND EXTRACT(DOW FROM MessageDateTime) NOT IN (0, 6) THEN 'AMD Weekday'
        WHEN "GPU_Name" LIKE 'RX%' AND EXTRACT(DOW FROM MessageDateTime) IN (0, 6) THEN 'AMD Weekend'
    END AS series_group,
    COUNT(DISTINCT MessageID) AS listing_count
FROM gpu_data.gpu
GROUP BY "GPU_Name", series_group
ORDER BY "GPU_Name", series_group`),a(29,ie=A`SELECT
    date_trunc('week', MessageDateTime) AS week_start,
    "GPU_Name",
    AVG("Price") AS average_weekly_price
FROM gpu_data.gpu
WHERE Price IS NOT NULL 
  AND Price > 0       
GROUP BY week_start, "GPU_Name"
ORDER BY week_start`),a(30,ae=`SELECT
    date_trunc('week', MessageDateTime) AS week_start,
    "GPU_Name",
    AVG("Price") AS average_weekly_price
FROM gpu_data.gpu
WHERE Price IS NOT NULL 
  AND Price > 0       
GROUP BY week_start, "GPU_Name"
ORDER BY week_start`),a(33,se=A`SELECT
    "GPU_Name",
    MIN("Price") as minV,
    PERCENTILE_CONT(0.25) WITHIN GROUP (ORDER BY Price) AS q1_Price,
    PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY Price) AS med,
    PERCENTILE_CONT(0.75) WITHIN GROUP (ORDER BY Price) AS q3_Price,
    MAX("Price") as maxV
FROM gpu_data.gpu
WHERE "Price" IS NOT NULL AND "Price" > 0
GROUP BY "GPU_Name"
ORDER BY "GPU_Name" ASC`),a(34,B=`SELECT
    "GPU_Name",
    MIN("Price") as minV,
    PERCENTILE_CONT(0.25) WITHIN GROUP (ORDER BY Price) AS q1_Price,
    PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY Price) AS med,
    PERCENTILE_CONT(0.75) WITHIN GROUP (ORDER BY Price) AS q3_Price,
    MAX("Price") as maxV
FROM gpu_data.gpu
WHERE "Price" IS NOT NULL AND "Price" > 0
GROUP BY "GPU_Name"
ORDER BY "GPU_Name" ASC`),a(37,le=A`SELECT
  "GPU_Name",
  MIN((Price - MSRP) / MSRP) AS min_premium_pct,
  PERCENTILE_CONT(0.25) WITHIN GROUP (ORDER BY ((Price - MSRP) / MSRP)) AS q1_premium_pct,
  PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY ((Price - MSRP) / MSRP)) AS median_premium_pct,
  PERCENTILE_CONT(0.75) WITHIN GROUP (ORDER BY ((Price - MSRP) / MSRP)) AS q3_premium_pct,
  MAX((Price - MSRP) / MSRP) AS max_premium_pct
FROM gpu_data.gpu
WHERE MSRP IS NOT NULL
  AND Price IS NOT NULL 
  AND Price > 0       
GROUP BY "GPU_Name"
ORDER BY "GPU_Name" ASC`),a(38,_e=`SELECT
  "GPU_Name",
  MIN((Price - MSRP) / MSRP) AS min_premium_pct,
  PERCENTILE_CONT(0.25) WITHIN GROUP (ORDER BY ((Price - MSRP) / MSRP)) AS q1_premium_pct,
  PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY ((Price - MSRP) / MSRP)) AS median_premium_pct,
  PERCENTILE_CONT(0.75) WITHIN GROUP (ORDER BY ((Price - MSRP) / MSRP)) AS q3_premium_pct,
  MAX((Price - MSRP) / MSRP) AS max_premium_pct
FROM gpu_data.gpu
WHERE MSRP IS NOT NULL
  AND Price IS NOT NULL 
  AND Price > 0       
GROUP BY "GPU_Name"
ORDER BY "GPU_Name" ASC`),a(41,W=A`SELECT
  "GPU_Name",
  ROUND(
    COUNT_IF(Price <= MSRP) * 100.0 / NULLIF(COUNT(*), 0),
    1
  ) AS pct_at_or_below_msrp
FROM gpu_data.gpu
WHERE MSRP IS NOT NULL
  AND Price IS NOT NULL 
  AND Price > 0       
GROUP BY "GPU_Name"
ORDER BY GPU_Name ASC`),a(42,g=`SELECT
  "GPU_Name",
  ROUND(
    COUNT_IF(Price <= MSRP) * 100.0 / NULLIF(COUNT(*), 0),
    1
  ) AS pct_at_or_below_msrp
FROM gpu_data.gpu
WHERE MSRP IS NOT NULL
  AND Price IS NOT NULL 
  AND Price > 0       
GROUP BY "GPU_Name"
ORDER BY GPU_Name ASC`),a(45,T=A`SELECT
  "GPU_Name",
  AIB,
  COUNT(DISTINCT MessageID) AS model_count
FROM gpu_data.gpu
GROUP BY "GPU_Name", AIB
ORDER BY "GPU_Name", model_count DESC`),a(46,E=`SELECT
  "GPU_Name",
  AIB,
  COUNT(DISTINCT MessageID) AS model_count
FROM gpu_data.gpu
GROUP BY "GPU_Name", AIB
ORDER BY "GPU_Name", model_count DESC`),a(49,r=A`WITH top10 AS (
  SELECT Retailer
  FROM gpu_data.gpu
  GROUP BY Retailer
  ORDER BY COUNT(*) DESC
  LIMIT 10
)
SELECT
  "GPU_Name",
  Retailer,
  COUNT(DISTINCT MessageID) AS listing_count
FROM gpu_data.gpu
WHERE Retailer IN (SELECT Retailer FROM top10)
GROUP BY "GPU_Name", Retailer
ORDER BY "GPU_Name", listing_count DESC`),a(50,Ae=`WITH top10 AS (
  SELECT Retailer
  FROM gpu_data.gpu
  GROUP BY Retailer
  ORDER BY COUNT(*) DESC
  LIMIT 10
)
SELECT
  "GPU_Name",
  Retailer,
  COUNT(DISTINCT MessageID) AS listing_count
FROM gpu_data.gpu
WHERE Retailer IN (SELECT Retailer FROM top10)
GROUP BY "GPU_Name", Retailer
ORDER BY "GPU_Name", listing_count DESC`),[x,K,J,te,re,be,ne,P,O,Xe,m,l,F,G,me,Se,ue,z,V,de,k,Q,j,Oe,ce,Z,ee,Ue,w,ie,ae,De,L,se,B,ye,X,le,_e,Ie,Ce,W,g,S,p,T,E,U,e,r,Ae,ve,t,he,qe]}class xt extends Nt{constructor(i){super(),ft(this,i,kt,Ct,mt,{data:10},null,[-1,-1,-1])}}export{xt as component};
