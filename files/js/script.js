function smallNavOnScroll(){
	//Check on the navbar on start
	var scrollTop = $(document).scrollTop();
	if(scrollTop > 5 || isMobile()){
		$('.navbar').addClass('opaque');
	}
	else {
		$('.navbar').removeClass('opaque');
	}
	$(window).scroll(function(){
		var scrollTop = $(document).scrollTop();
		if(scrollTop > 5 || isMobile()){
			$('.navbar').addClass('opaque');
		}
		else {
			$('.navbar').removeClass('opaque');
		}
	});
}
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
function preventDefaultOnClick(){
	$('a').click(function(e){
		e.preventDefault();
	})
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
    }
  });
}
function setWindowHeight(){
	if(isMobile()){
		$("main").css('height', window.innerHeight + 'px');
	}
}
function setCopyrightYear(){
	var theDate = new Date(); 
	$(".year").text(theDate.getFullYear());
}
$(window).resize(function(){
	// Remove styles that may have been applied on mobile/desktop
	$('.mobile-nav').removeClass('open');
});
$(document).ready(function(){
	smallNavOnScroll();
	toggleMobileNav();
	preventDefaultOnClick();
	setCopyrightYear();
	bindVelocity();
	setWindowHeight();
	changeBackgroundIndexOnScroll();
});
// Wait for page to load before enabling transitions 
// to stop elements from showing too early
setTimeout(function(){
		$("body").removeClass("no-anim");
}, 10);