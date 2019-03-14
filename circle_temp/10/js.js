 window.onload=function(){
	        var oList=document.getElementById('list');
	        var oSty=document.getElementById('sty');
	 
	        var max=2013;
	        var min=2010;
	        //整个圆盘所有的显示刻度
	        var scale = (max-min)*12+1;
	        //根据最大值与最小值的差，算出不同数据展示所需要的每一个刻度的角度。
	        var angles = 300/scale;
	        var tump='';
	       for(var i=1;i<=scale;i++){
	            var aLi=document.createElement('li');
	            oList.appendChild(aLi);
	            
	            tump+='.wrap ul li:nth-child('+i+'){transform: rotate('+(205+i * angles)+'deg);}';
	            oSty.innerHTML+=tump;
	        }
	        
	        var tex = '';
	        //计算出大节点个数
	        var nodes = (max-min)+1;
	        //每个节点所旋转的角度
	        var Ang = 300/(nodes-1);
	        for(var i = 1;i<=nodes;i++){
	            tex+='#tex span:nth-child('+i+'){transform: rotate('+(210+(i-1)*Ang)+'deg);}';
	            oSty.innerHTML+=tex;
	        }

        //创建大刻度值
          function node(){
          	for(var i = 0;i<nodes;i++){
          		$('#tex').append('<span>'+(min+i)+'年'+'</span>');
          	}
          };
          node();
          
          //当前时间的设定
          var year = 2011;
          var mon = 8;
		 var Time = 'year年mon月';
	    //当前时间转化为刻度,当前时间减去最小值（起始时间）乘以12个月再加上当前时间所示月份。times =(2011-2010)*12+8-1,注：刻度是从1算起的.
		 var Tims = (year-min)*12+ (mon-1);
		 var TimAng = Tims * angles+210;
		 $('#min').css({'transform':"rotate("+TimAng+"deg)"});
 
/////////////////////////////////////////////////////////////////////////////////////		 
       
       //鼠标放在指针上的悬浮效果
       $(function(){
       	   $('#min').mouseover(function(){
			  show();
		   });
		   $('#min').mouseout(function(){
			  setInterval(hide,5000);
		   });
		   
		   function show(){
		   	  $('.tips').css('display','block');
			  $('.tip_text').css('display','block');
		   }
		   function hide(){
		   	  $('.tips').css('display','none');
			  $('.tip_text').css('display','none');
		   }
		   
       });
 //////////////////////////////////////////////////////////////////////////  
       //根据角度得到旋转的弧度
		function getRads(deg){
		  return (Math.PI * deg)/180;
		}
		//定义canvas
		var myCanvas=document.getElementById("myCanvas");
		var ctx=myCanvas.getContext("2d");
		
		var greyear_start=2010;//开始年
		var gremon_start = 1;//开始月
		var greyear_end = 2011;//结束年
		var gremon_end =4;//结束月
		var start_deg=120;//开始角度，固定的
		//定义绿色旋转弧度
		var gre_start = start_deg + ((greyear_start - min)*12+gremon_start) * angles; //120+((2010-2010)*12+1)*12.5=132.5
		//比如绿色区域结束时间为2011年1月。那么它走过的刻度数为：(2011-2010)*12+1-1
		var gre_end = ((greyear_end-greyear_start)*12+(gremon_end - gremon_start))*angles+gre_start; 
		
		
		//定义黄色区域旋转弧度
	//	var yell_start=276;//2011年1月的旋转角度
	//	var yell_end= 388.5;//2011年10月的旋转角度  
		var yellyear_start = 2011;
		var yellmon_start = 5;
		var yellyear_end = 2012;
		var yellmon_end = 8;
		var yell_start = ((yellyear_start - min)*12 + yellmon_start)*angles + start_deg;
		var yell_end = ((yellyear_end - yellyear_start)*12+(yellmon_end - yellmon_start))*angles+yell_start;
		
		
		//定义红色区域旋转弧度
//		var red_start=388.5;//2011年10月的旋转角度
//		var red_end= 401;//2011年11月的旋转角度 
		var redyear_start = 2012;
		var redmon_start = 9;
		var redyear_end = 2012;
		var redmon_end = 12;
		var red_start = ((redyear_start - min)*12 + redmon_start)*angles + start_deg;
		var red_end = ((redyear_end - redyear_start)*12+(redmon_end - redmon_start))*angles+red_start;
		
		
		function drawScreen () { 
			// x,y => 圆心坐标点 
			// r => 圆弧半径
			var arc = { 
				x: myCanvas.width / 2, 
				y: myCanvas.height / 2, 
				r: 80 
			}, 
				w = myCanvas.width, 
				h = myCanvas.height; 
		    ctx.save();
			ctx.lineWidth = 10; 
			// 绿色区域
			ctx.strokeStyle = '#55BF3B'; 
			ctx.beginPath(); 
			ctx.arc(arc.x, arc.y, arc.r,getRads(gre_start),getRads(gre_end)); 
			ctx.stroke();
			
			// 黄色区域
			ctx.beginPath();
			ctx.strokeStyle = "#DDDF0D";
			ctx.arc(arc.x, arc.y, arc.r,getRads(yell_start),getRads(yell_end)); 
			ctx.stroke();
			
			// 红色区域
			ctx.beginPath();
			ctx.strokeStyle = "#DF5353";
			ctx.arc(arc.x, arc.y, arc.r,getRads(red_start),getRads(red_end)); 
			ctx.stroke();
			
			ctx.restore();
		}
		drawScreen();
	////////////////////////////////////////////////////	
    
       
       
    }
         