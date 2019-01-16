$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
	  'loop':true,
	  'autoplay':true,
	  'items':1
  });
  
  //script for popups
	$('a.show_popup').click(function () {
		
		$('.popup').fadeIn(300);
		setTimeout(function() {
			$('#overlay').fadeIn(200).css({'filter' : 'alpha(opacity=80)'});
		},200);
		
		return false;				
	});	
	
	$('a.close').click(function () {
		
		$('.popup').fadeOut(300);
		setTimeout(function() {
			$('#overlay').fadeOut(200);
		},200);
		
	});
	$('#overlay').click(function () {
		console.log("click");
		$('.popup').fadeOut(300);
		setTimeout(function() {
			$('#overlay').fadeOut(200);
		},200);

	});
  
});
