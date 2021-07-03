function toggleMobileNav(){
	$('.menu-toggle').click(function(e){
		e.preventDefault();
		$('.mobile-nav').addClass('open');
	});
	$('.close-btn').click(function(e){
		e.preventDefault();
		$('.mobile-nav').removeClass('open');
	});
	$('.body-overlay').click(function(){
		$('.mobile-nav').removeClass('open');
	});
}
function isMobile(){
	if($(window).width() < 767){
		return true;
	}
	else {
		return false;
	}
}
function changeBackgroundIndexOnScroll(){
	// if(isHome()){

	// }
	// Check scroll position on page load before 
	// adding scroll listener
	if($(document).scrollTop() > $(window).height()){
		$('.fixed-bg').css('z-index', '-1');
		$('.hero-overlay').css('z-index', '-2');
	}
	else {
		$('.fixed-bg').css('z-index', '-2');
		$('.hero-overlay').css('z-index', '-1');
	}
	$(window).scroll(function(){
		if($(document).scrollTop() > $(window).height() + 200){
			$('.fixed-bg').css('z-index', '-1');
			$('.hero-overlay').css('z-index', '-2');
		}
		else {
			$('.fixed-bg').css('z-index', '-2');
			$('.hero-overlay').css('z-index', '-1');
		}
	});
}
function bindVelocity(){
  // bind click event to all internal page anchors
  $('a[href*="#"]').on('click', function (e) {
	var target = $(this).attr('href');
	// If the target is not empty
    if(target != '#'){
			e.preventDefault();
			e.stopPropagation();
			// scroll to each target
	    $(target).velocity("scroll", { 
	      duration: 1000,
	      offset: -70
	    });

	    // If the anchor is the enquiry form,
	    // automatically focus on the name field
	    if(target == '#enquire-form'){
	    	$('#name').focus();
	    }
    }
  });
}
function setWindowHeight(){
	// Wait 400ms before setting window height
	setTimeout(function(){
		if(isMobile()){
			$("main").css('height', window.innerHeight + 'px');
		}
		else {
			$("main").removeAttr('style');
		}
	}, 400);
}
function setCopyrightYear(){
	var theDate = new Date(); 
	$(".year").text(theDate.getFullYear());
}
function expandReadMore(){
	$('.read-more').click(function(e){
		e.preventDefault();
		var currentText = $(this).text();
		if(currentText == 'Read more'){
			$(this).text('Read less');
		}
		else {
			$(this).text('Read more');
		}
		$(this).next().toggleClass('expand');
	});
}
function fadeHeaders(){
  var offset = $(window).height() / 3,
  		offsetSml = $(window).height() / 4;

	// For the hero home page section
	$('main .container').css({
	  'opacity': (offset - $(document).scrollTop()) / (offset)
	});

	// For every smaller banner on other pages
  $('.banner-sml .container').css({
    'opacity': (offsetSml - $(document).scrollTop()) / (offsetSml)
  });
}
function createSlick(){
	$('.slider').slick({
	  centerPadding: '60px',
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay: false,
	  // autoplay: true,
	  autoplaySpeed: 4000,
	  dots: true
	});
}
$(window).scroll(function(){
	fadeHeaders();
});
$(window).resize(function(){
	// Remove styles that may have been applied on mobile/desktop
	if(!isMobile()){
		$('.mobile-nav').removeClass('open');
		$('.slider')[0].slick.refresh();
	}
	setWindowHeight();
});
$(document).ready(function(){
	toggleMobileNav();
	setCopyrightYear();
	bindVelocity();
	setWindowHeight();
	changeBackgroundIndexOnScroll();
	expandReadMore();
	fadeHeaders();

	// Only create the slider on the homepage
	if($('.slider').length){
		createSlick();
	}
});

// Wait for page to load before enabling transitions 
// to stop elements from showing too early
setTimeout(function(){
		$("body").removeClass("no-anim");
}, 10);