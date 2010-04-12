
 $(document).ready(function(){
 	$("#popdownServices").hide();
$("#popdownAbout").hide();
	$(".about").mouseover(function(){
		
		$("#popdownAbout").fadeIn('slow',function(){});
	});
	
		
	$("#aboutNav").mouseleave(function(){
		$("#popdownAbout").fadeOut('slow',function(){});
	});
	
	
	$(".services").mouseover(function(){
		
		$("#popdownServices").fadeIn('slow',function(){});
	});
	
		
	$("#servicesNav").mouseleave(function(){
		$("#popdownServices").fadeOut('slow',function(){});
	});
});