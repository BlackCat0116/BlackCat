           // alert('java script')        /*普通提示框*/
	    	//confirm('java script')      /*确认取消框*/
	    	
	    	
	        var jsbl = document.getElementById("wbbl");  //通过ID获取该ID整个元素值
	    	
	    	
	    	
	    	/*var text1 = "123"
	    	text1 = prompt('欢迎使用个人计算器，请输入密码')                               
	    	var yesofno = text1 =="123" 
	    	document.write(yesofno)                                    
	    	if (yesofno == true)
	    	{
	    		document.write("正确，hello world")
	    		alert("密码正确！")
	    		jsbl.value = "密码正确，欢迎使用"
	    	}
	    	else{
	    		alert("密码错误，重新输入密码")
	    		/*location.reload([false])*/
	    		/*jsbl.value = "密码错误，无法使用"
	    		history.go()*/
	    	/*}
	    	*/
	    	/*if (yesofno == false)
	    	{
	    		document.write("错误，无法显示信息")
	    	}
	    	if (yesofno == null)
	    	{
	    		document.write("未输入任何数值，请重新输入确认")
	    	}*/
	    	
	    	
	    	
	    	
	    	
            var text1 = "123"
	    	text1 = prompt('欢迎使用个人计算器，请输入密码')                               
	    	var yesofno = text1 =="123" 
	    	
	    	if(yesofno == true)
	    	{
	    		
	    		alert("密码正确！")
	    		jsbl.value = "密码正确，欢迎使用"
	    	
	    	
	    	
	    	
	    		
	    	
	    	
	    	document.getElementById("dengyu").onclick = function(){
	    		jsbl.value = eval(jsbl.value);
	    		
	    	}
	    	
	    	document.getElementById("qingkong").onclick = function(){
	        jsbl.value = "";
            }
	    	
	    	document.getElementById("fushuhao").onclick = function(){
	        jsbl.value = jsbl.value+"-";
            }
	    	
	    	document.getElementById("baifenhao").onclick = function(){
	        jsbl.value = jsbl.value+"*0.01";
            }
	    	
	    	document.getElementById("chu").onclick = function(){
	    		jsbl.value=jsbl.value+"/"
	    	}
	    	
	    	document.getElementById("num7").onclick = function(){
	    		jsbl.value=jsbl.value+"7"
	    	}
	    	
	    	document.getElementById("num8").onclick = function(){
	    		jsbl.value=jsbl.value+"8"
	    	}
	    	
	    	document.getElementById("num9").onclick = function(){
	    		jsbl.value=jsbl.value+"9"
	    	}
	    	document.getElementById("cheng").onclick = function(){
	    		jsbl.value=jsbl.value+"*"
	    	}
	    	
	    	document.getElementById("num4").onclick = function(){
	    		jsbl.value=jsbl.value+"4"
	    	}
	    	
	    	document.getElementById("num5").onclick = function(){
	    		jsbl.value=jsbl.value+"5"
	    	}
	    	
	    	document.getElementById("num6").onclick = function(){
	    		jsbl.value=jsbl.value+"6"
	    	}
	    	
	    	document.getElementById("jian").onclick = function(){
	    		jsbl.value=jsbl.value+"-"
	    		
	    	}
	    	
	    	
	    	document.getElementById("num1").onclick = function (){
	    		jsbl.value=jsbl.value+"1"
	    		
	    	}
	    	
	    	document.getElementById("num2").onclick = function(){
	    		jsbl.value=jsbl.value+"2"
	    		
	    	}
	    	
	    	document.getElementById("num3").onclick = function(){
	    		jsbl.value=jsbl.value+"3"
	    	}
	    	
	    	document.getElementById("numjia").onclick = function(){
	    		jsbl.value=jsbl.value+"+"
	    	}
	    	
	    	document.getElementById("num0").onclick = function(){
	    		jsbl.value=jsbl.value+"0"
	    	}
	    	
	    	document.getElementById("dian").onclick = function(){
	    		jsbl.value=jsbl.value+"."
	    	}
	    	
	    	
	    	}
	    	
	    	else{
	    		alert("密码错误，重新输入密码")
	    		
	    		jsbl.value = "密码错误，计算功能禁止"
	    		
	    	}
	    	
	    	
	    	
	        

