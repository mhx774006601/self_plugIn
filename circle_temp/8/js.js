 window.onload=function(){
	        var oList=document.getElementById('list');
	        var oSty=document.getElementById('sty');
	 
	        var max=2012;
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
 
		
		function green(){
		        var gList = document.getElementById('gr_list');
	            var gre = '';
		        var start=0; //起始点
		        var end=20; //结束点
		        //所显示的刻度数
		        var cn = end-start;
		        //起始点与原始起点所差角度,每个角度为angles度
		        var chadu = start*angles+210;
		        for(var i=0;i<cn;i++){
		        		var gLi=document.createElement('li');
					    gList.appendChild(gLi);
					    gre+='.gre ul li:nth-child('+(i+1)+'){transform: rotate('+(i * angles+chadu)+'deg);}';
					    oSty.innerHTML+=gre;
		        }
			        
		}
		green();
		
		function yellow(){
		        var yList = document.getElementById('yell_list');
		        var yell = '';
		        var start=20; //起始点
		        var end=35; //结束点
		        //所显示的刻度数
		        var cn = end-start;
		        //起始点与原始起点所差角度,每个角度为angles度
		        var chadu = start*angles+210;
		        for(var i=0;i<=cn;i++){
		        		 var yLi=document.createElement('li');
					     yList.appendChild(yLi);
					     yell+='.yell ul li:nth-child('+(i+1)+'){transform: rotate('+(i * angles+chadu)+'deg);}';
					     oSty.innerHTML+=yell;
					     
		        }
			        
		}
		yellow();
		
        function red(){
		        var rList = document.getElementById('red_list');
		        var red = '';
		        var start=35; //起始点
		        var end=45; //结束点
		        //所显示的刻度数
		        var cn = end-start;
		        //起始点与原始起点所差角度,每个角度为angles度
		        var chadu = start*angles+210;
		        for(var i=0;i<=cn;i++){
		        		var rLi=document.createElement('li');
		                rList.appendChild(rLi);
					    red+='.red ul li:nth-child('+(i+1)+'){transform: rotate('+(i * angles+chadu)+'deg);}';
		                oSty.innerHTML+=red;
		                
		        }
			        
		}
		red();
		 
       
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
		   
       })
		
       
       
       
      }
         