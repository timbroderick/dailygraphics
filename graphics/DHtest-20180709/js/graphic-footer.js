var pymChild=null;var isMobile=false;var onWindowLoaded=function(){pymChild=new pym.Child({});pymChild.onMessage('on-screen',function(bucket){ANALYTICS.trackEvent('on-screen',bucket);});pymChild.onMessage('scroll-depth',function(data){ANALYTICS.trackEvent('scroll-depth',data.percent,data.seconds);});};var artboardResizer=function(){if(document.documentElement.className.indexOf('g-resizer-v3-init')>-1)return;document.documentElement.className+=' g-resizer-v3-init';if(!('querySelector' in document))return;function resizer(){var elements=Array.prototype.slice.call(document.querySelectorAll('.g-artboard[data-min-width]')),widthById={};elements.forEach(function(el){var parent=el.parentNode,width=widthById[parent.id]||parent.getBoundingClientRect().width,minwidth=el.getAttribute('data-min-width'),maxwidth=el.getAttribute('data-max-width');widthById[parent.id]=width;if(+minwidth<=width&&(+maxwidth>=width||maxwidth===null))el.style.display='block';else el.style.display='none';});try{if(window.parent&&window.parent.$)window.parent.$('body').trigger('resizedcontent',[window]);if(window.require)require(['foundation/main'],function(){require(['shared/interactive/instances/app-communicator'],function(AppCommunicator){AppCommunicator.triggerResize();});});}catch(e){console.log(e);}pymChild.sendHeight();}document.addEventListener('DOMContentLoaded',resizer);window.addEventListener('resize',_.throttle(resizer,200));};window.onload=onWindowLoaded;
var chartRate=new Highcharts.Chart({chart:{renderTo:'graphic',backgroundColor:'#fafafa',height:325,spacingBottom:15,spacingTop:10,spacingLeft:10,spacingRight:10,type:'bar'},title:{text:null},xAxis:{categories:["Alabama","Alaska","Arkansas","Arizona","California","Colorado","Connecticut"],labels:{staggerLines:2},title:{text:'X AXIS TITLE'}},yAxis:{tickInterval:250,minorTickInterval:'auto',overflow:'justify',min:0,title:{text:'Y AXIS TITLE'}},legend:{reversed:true},credits:{enabled:false},plotOptions:{series:{stacking:'normal'}},series:[{name:'Something',data:[parseFloat(DATA[0].something),parseFloat(DATA[1].something),parseFloat(DATA[2].something),parseFloat(DATA[3].something),parseFloat(DATA[4].something),parseFloat(DATA[5].something),parseFloat(DATA[6].something)]},{name:'Another thing',data:[parseFloat(DATA[0].another_thing),parseFloat(DATA[1].another_thing),parseFloat(DATA[2].another_thing),parseFloat(DATA[3].another_thing),parseFloat(DATA[4].another_thing),parseFloat(DATA[5].another_thing),parseFloat(DATA[6].another_thing)]}],tooltip:{crosshairs:true,useHTML:true,formatter:function(){return '<b>'+DATA[this.point.x].state+'</b><br><table><tr><td><span style="color:#0072bc"><strong>Something: </strong></span></td><td>'+DATA[this.point.x].something+'</td></tr><tr><td class="tdLEFT"><strong><span style="color:#67B4A5">Another thing: </strong></span></td><td>'+DATA[this.point.x].another_thing+'</td></tr></table>';}}});