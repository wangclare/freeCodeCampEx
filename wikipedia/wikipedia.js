
$(document).ready(function(){
	
	$('.search').click(function(){   
		$(".tail").hide();
		$(".search").animate({
			'width':'200px',
			'-webkit-border-radius':'25px',
			'-moz-border-radius':'25px',
			'border-radius':'25px'
		},'fast');	
		
		$("#cursorX").show(300);
		$("i").show(300);
	});
	
	$("#cursorX").click(function(){
		$("#cursorX").hide();
		$('#maincontent').css({
			"margin":"200px auto 100px auto"
		});
		$('.tips').show();
		$('.wiki').fadeOut("slow");
	        $('.search').val('');//此时为什么用.empty()不行？
	        //$('.search').empty();
	        $("i").hide();
	        $(".search").animate({'width':'40px',
	        	'-webkit-border-radius':'25px',
	        	'-moz-border-radius':'25px',
	        	'border-radius':'25px'
	        },'fast');	
	        $('.tail').show(300);
	        $('#wiki').empty();
	    });
	
	$('.fa').click(function(){ 
		var searchvalue=$('.search').val();
		$('#wiki').empty();
		if(searchvalue){
			$('#maincontent').css({
				"margin":"100px auto 100px auto"
			}); 
		};      
		$.getJSON("https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch="+searchvalue+"&srwhat=text&titles=Main%20Page&callback=?",function(data){
			var html=' ';
			$.each(data.query.search,function(j,item){
				html="<div class='hidevalue'><div class='title'>"+item.title+"</div>"+"<div class='snippet'>"+item.snippet+"</div></div>";
				$('#wiki').append(html);   
			});
		});    	     
	});
});

