/**
 * Created by Mokrane on 17/09/2018.
 */
(function( $ ) {
    $.fn.mkParallax=function(params){
        var isMobile = {
            Android: function() {
                return navigator.userAgent.match(/Android/i);
            },
            BlackBerry: function() {
                return navigator.userAgent.match(/BlackBerry/i);
            },
            iOS: function() {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i);
            },
            Opera: function() {
                return navigator.userAgent.match(/Opera Mini/i);
            },
            Windows: function() {
                return navigator.userAgent.match(/IEMobile/i);
            },
            any: function() {
                return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
            }
        };
        var container=$(this);
        image= container.attr("data-image");
        if(isMobile.any()){
           
            container.css('position','relative');
            container.css("background-image","url('"+image+"')");


            container.css('background-position-x',"center");
            if(container.height()>$(window).height())
                container.css("background-size", "cover");
            else
                container.css("background-size", "auto "+($(window).height()+100)+"px");
             $(container).css('background-position-y',-(container.offset().top-$(window).scrollTop()));
            $(window).scroll(function () {
                $(container).css('background-position-y',-(container.offset().top-$(window).scrollTop()));
            });
            $(window).resize(function(){
                if(container.height()>$(window).height())
                    container.css("background-size", "cover");
                else
                    container.css("background-size", "auto "+($(window).height()+100)+"px");

                $(container).css('background-position-y',-(container.offset().top-$(window).scrollTop()));
           });
        }else
        {
            container.css("background-image", "url('"+image+"')");
            container.css("background-attachment", "fixed");
            container.css("background-size", "cover");

        }
        return this;
    }
}( jQuery ));
