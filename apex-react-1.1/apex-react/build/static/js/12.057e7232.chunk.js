(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{133:function(e,t,a){},141:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var n={ChartistData:{labels:["1","2","3","4","5","6","7","8","9","10","11","12","13"],series:[[50,45,60,55,70,55,60,55,65,57,60,53,53]]},ChartistData2:{labels:["Jan","Feb","Mar","Apr","May","June","July","Aug"],series:[[55,60,50,55,50,60,55,57]]},DonutChartData1:{series:[{name:"done",className:"ct-done",value:10},{name:"outstanding",className:"ct-outstanding",value:3}]},DonutChartData2:{series:[{name:"done",className:"ct-done",value:10},{name:"outstanding",className:"ct-outstanding",value:3}]},DonutChartData3:{series:[{name:"done",className:"ct-done",value:10},{name:"outstanding",className:"ct-outstanding",value:3}]}}},164:function(e,t,a){"use strict";var n=a(19),s=a(20),r=a(23),i=a(21),l=a(22),c=a(0),o=a.n(c),m=a(92),u=a(12),d=a.n(u),p=a(103),h=a.n(p),b=(a(104),a(133),function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e,t,a;return"right"===this.props.iconSide?t=this.props.children:(e=this.props.children,a="text-right"),o.a.createElement(m.i,{className:d()(this.props.cardBgColor)},o.a.createElement(m.j,{className:"pt-2 pb-0"},o.a.createElement(m.U,null,e,o.a.createElement(m.U,{body:!0,className:d()("white",a)},o.a.createElement("h3",{className:d()("font-large-1 mb-1",this.props.statisticsColor)},this.props.statistics),o.a.createElement("span",null,this.props.text)),t)),o.a.createElement(h.a,{className:"WidgetlineChart WidgetlineChartshadow mb-3",data:this.props.chartData,type:"Line",options:{height:"55px",axisX:{showGrid:!1,showLabel:!1,offset:0},axisY:{showGrid:!1,low:50,showLabel:!1,offset:0},fullWidth:!0}}))}}]),t}(c.PureComponent));t.a=b},165:function(e,t,a){"use strict";var n=a(19),s=a(20),r=a(23),i=a(21),l=a(22),c=a(0),o=a.n(c),m=a(12),u=a.n(m),d=a(92),p=a(103),h=a.n(p),b=(a(104),a(166),function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(d.i,null,o.a.createElement(d.j,{className:"px-3 py-3"},o.a.createElement("div",{className:"text-center pb-0"},o.a.createElement("span",{className:u()("font-medium-2",this.props.textColor)},this.props.textTop),o.a.createElement("h3",{className:"font-large-2 mt-1"},this.props.statisticsTop,o.a.createElement("span",{className:"font-medium-1 grey darken-1 text-bold-400"},this.props.statisticsTopUnit))),o.a.createElement(h.a,{className:u()("height-250",this.props.dountChartClass),data:this.props.donutChartData,type:"Pie",options:{donut:!0,donutWidth:3,startAngle:0,chartPadding:25,total:13,labelInterpolationFnc:function(e){return"\ue9c9"}},listener:{draw:function(e){"label"===e.type&&e.element.remove()}}}),o.a.createElement("div",{className:"text-center"},o.a.createElement("span",{className:"font-large-1 d-block mb-1"},this.props.statisticsBottom),o.a.createElement("span",{className:u()("primary font-medium-1",this.props.textColor)},this.props.textBottom))))}}]),t}(c.PureComponent));t.a=b},166:function(e,t,a){},1668:function(e,t,a){"use strict";a.r(t);var n=a(19),s=a(20),r=a(23),i=a(21),l=a(22),c=a(0),o=a.n(c),m=a(467),u=a.n(m),d=a(927),p=a.n(d),h=a(916),b=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{style:f},o.a.createElement("div",{style:v},o.a.createElement("img",{src:u.a,width:"190",alt:"Card cap 01",className:"",style:E})),o.a.createElement("div",{style:y},o.a.createElement("p",null,"Name QR :",this.props.data.name," "),o.a.createElement("p",null,"URL :https://www.youtube.com/watch?v=t0a7b_QHA24"),o.a.createElement("p",null,"Created at :1/1/2019")),o.a.createElement("div",{style:g},o.a.createElement("p",null,"\u0e08\u0e33\u0e19\u0e27\u0e19\u0e04\u0e19\u0e2a\u0e41\u0e01\u0e19")),o.a.createElement("div",{style:w},o.a.createElement("div",{style:{margin:"auto"}},o.a.createElement(h.a,{to:"/qrstat"},o.a.createElement(p.a,{variant:"outlined"},"Download"))),o.a.createElement("div",{style:{margin:"auto"}},o.a.createElement(p.a,{variant:"outlined"},"Statisics")),o.a.createElement("div",{style:{margin:"auto"}},o.a.createElement(p.a,{variant:"outlined"},"Who Scans me!"))))}}]),t}(c.Component),E={border:"1px solid #000000"},f={width:"100%",background:"white",margin:5,display:"flex",flexDirection:"row"},v={},y={width:"50%"},g={width:"20%"},w={display:"flex",flexDirection:"column",backgroundColor:"skyblue",width:"15%",alignItems:"center",justifyContent:"center"},j=b,C=(a(95),a(141),a(153),a(164),a(276),a(277),a(165),a(278),a(279),a(280),a(281),a(282),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(i.a)(t).call(this,e))).state={data_1:{name:"t1"},data_2:{name:"t2"},data_3:{name:"t3"}},a}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(c.Fragment,null,o.a.createElement("div",{style:N},o.a.createElement(j,{data:this.state.data_1})),o.a.createElement("div",{style:N},o.a.createElement(j,{data:this.state.data_2})),o.a.createElement("div",{style:N},o.a.createElement(j,{data:this.state.data_3})))}}]),t}(c.Component)),N={backgroundColor:"skyblue"};t.default=C},467:function(e,t,a){e.exports=a.p+"static/media/t3.0b5710ad.png"}}]);
//# sourceMappingURL=12.057e7232.chunk.js.map