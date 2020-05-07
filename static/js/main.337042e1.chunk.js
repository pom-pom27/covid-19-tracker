(this["webpackJsonpcovid19-tracker"]=this["webpackJsonpcovid19-tracker"]||[]).push([[0],{13:function(e,t,a){e.exports={container:"card_container__1ddLD",card:"card_card__1Nj7v",infected:"card_infected__2piqT",recovered:"card_recovered__2x9kH",deaths:"card_deaths__39boW"}},207:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(72),o=a.n(c),u=a(6),s=a.n(u),i=a(10),l=a(73),d=a(74),m=a(84),f=a(83),p=a(224),v=a(228),h=a(225),b=a(226),E=a(13),y=a.n(E),g=a(33),x=a.n(g),_=a(34),C=a.n(_),w=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate;return a?r.a.createElement("div",{className:y.a.container},r.a.createElement(p.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(p.a,{item:!0,component:v.a,xs:12,md:3,className:C()(y.a.card,y.a.infected)},r.a.createElement(h.a,null,r.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Infected"),r.a.createElement(b.a,{variant:"h5"},r.a.createElement(x.a,{start:0,end:a.value,duration:2,separator:","})),r.a.createElement(b.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(b.a,{variant:"body2"},"Number of active cases of COVID-19"))),r.a.createElement(p.a,{item:!0,component:v.a,xs:12,md:3,className:C()(y.a.card,y.a.recovered)},r.a.createElement(h.a,null,r.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),r.a.createElement(b.a,{variant:"h5"},r.a.createElement(x.a,{start:0,end:n.value,duration:2,separator:","})),r.a.createElement(b.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(b.a,{variant:"body2"},"Number of recoveries from COVID-19"))),r.a.createElement(p.a,{item:!0,component:v.a,xs:12,md:3,className:C()(y.a.card,y.a.deaths)},r.a.createElement(h.a,null,r.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),r.a.createElement(b.a,{variant:"h5"},r.a.createElement(x.a,{start:0,end:c.value,duration:2,separator:","})),r.a.createElement(b.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(b.a,{variant:"body2"},"Number of deaths caused by COVID-19"))))):"Loading..."},O=a(32),j=a(229),k=a(227),D=a(79),S=a.n(D),N=a(35),I=a.n(N),U="https://covid19.mathdro.id/api",B=function(){var e=Object(i.a)(s.a.mark((function e(t){var a,n,r,c,o,u,i,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=U,t&&(a="".concat(U,"/countries/").concat(t)),e.prev=2,e.next=5,I.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.deaths,u=r.lastUpdate,i=r.recovered,l={confirmed:c,deaths:o,lastUpdate:u,recovered:i},e.abrupt("return",l);case 15:e.prev=15,e.t0=e.catch(2),console.error(e.t0);case 18:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.get("".concat(U,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.get("".concat(U,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),J=function(e){var t=e.handleCountryChanges,a=Object(n.useState)([]),c=Object(O.a)(a,2),o=c[0],u=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A();case 2:t=e.sent,u(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[u]),r.a.createElement(j.a,{className:S.a.formControl},r.a.createElement(k.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:""},"Global"),o.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))},L=a(80),R=a.n(L),q=a(31),F=function(e){var t=e.dailyData;return t.length?r.a.createElement(q.b,{data:{labels:t.map((function(e){return e.date})),datasets:[{data:t.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:t.map((function(e){return e.deaths})),label:"Death",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0}]}}):null},G=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=e.country;return a?r.a.createElement(q.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[a.value,n.value,c.value]}]},options:{legend:!1,title:{display:!0,text:"Current state in ".concat(o)}}}):null},H=function(e){var t=e.data,a=e.country,c=Object(n.useState)([]),o=Object(O.a)(c,2),u=o[0],l=o[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V();case 2:t=e.sent,l(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement("div",{className:R.a.container},a?r.a.createElement(G,{data:t,country:a}):r.a.createElement(F,{dailyData:u}))},M=a(46),P=a.n(M),T=a(82),W=a.n(T),X=function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChanges=function(){var t=Object(i.a)(s.a.mark((function t(a){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return r.a.createElement("div",{className:P.a.container},r.a.createElement("img",{src:W.a,className:P.a.covidImage,alt:"covid19"}),r.a.createElement(w,{data:t}),r.a.createElement(J,{handleCountryChanges:this.handleCountryChanges}),r.a.createElement(H,{data:t,country:a}))}}]),a}(n.Component);o.a.render(r.a.createElement(X,null),document.getElementById("root"))},46:function(e,t,a){e.exports={container:"App_container__3tfo1",covidImage:"App_covidImage__nFU_l"}},79:function(e,t,a){e.exports={formControl:"country-picker_formControl__3UCXv"}},80:function(e,t,a){e.exports={container:"chart_container__1de7S"}},82:function(e,t,a){e.exports=a.p+"static/media/image.d7265326.png"},87:function(e,t,a){e.exports=a(207)}},[[87,1,2]]]);
//# sourceMappingURL=main.337042e1.chunk.js.map