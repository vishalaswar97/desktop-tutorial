
		/* right click */
		$(document).bind("contextmenu",function(e){return false;});
	
		//f12 and ctrl+u and ctrl+shift+i  key blocked
		document.onkeydown = function (event){  
			event = (event || window.event);  
			if (event.keyCode == 123){return false;}
			if (event.ctrlKey && event.keyCode === 85){return false;}  
			if(event.ctrlKey && event.shiftKey && event.keyCode === 73){return false;}
		}  