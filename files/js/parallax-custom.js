/*
 *  Parallax-Scroll - v0.2.0
 *  jQuery plugin for background-attachment: scroll with friction, similar to the parallax scrolling effect on Spotify.
 *  http://parallax-scroll.aenism.com
 *
 *  Made by Aen Tan
 *  Under MIT License
 */
$(function(){$(".parallax").parallaxScroll({friction:.5,direction:"vertical"})});

/*
 *  Parallax-Scroll - v0.2.0
 *  jQuery plugin for background-attachment: scroll with friction, similar to the parallax scrolling effect on Spotify.
 *  http://parallax-scroll.aenism.com
 *
 *  Made by Aen Tan
 *  Under MIT License
 */
!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],b):b(a.jQuery)}(this,function(a){"use strict";var b,c={friction:.5,direction:"vertical"},d=a(window),e=0;return window.requestAnimationFrame=function(a){var b=(new Date).getTime(),c=Math.max(0,5-(b-e)),d=window.setTimeout(function(){a(b+c)},c);return e=b+c,d},b=function(b,e){return{init:function(){this.$background=a(b),this.settings=a.extend({},c,e),this._initStyles(),this._bindEvents()},_initStyles:function(){this.$background.css({"background-attachment":"scroll"})},_visibleInViewport:function(){var a=d.height(),b=this.$background.get(0).getBoundingClientRect();return b.top<a&&b.bottom>0||b.bottom<=a&&b.top>a},_bindEvents:function(){var a=this;d.on("load scroll resize",function(){a._requestTick()})},_requestTick:function(){var a=this;this.ticking||(this.ticking=!0,requestAnimationFrame(function(){a._updateBgPos()}))},_updateBgPos:function(){if(this._visibleInViewport()){var a=d.width(),b=d.height(),c=this.$background.data("width"),e=this.$background.data("height"),f=c/e,g=this.$background.width(),h=this.$background.height(),i=g/h,j=f>i,k=g/c,l=e*k,m=c*k,n=this.$background.offset().top,o=d.scrollTop(),p=o-n,q=b+l,r=a+m,s=p*(b/q),t=p/b,u=p*(a/r),v=p/a,w=(b-h)/2;w=j?w*t:w;var x=(a-g)/2;x=j?x:x*v;var y,z,A=j?2*this.settings.friction*i:this.settings.friction*i;"horizontal"===this.settings.direction?(y=j?a+"px auto":"auto "+b+"px",z=x-u*A+"px 50%"):(y=j?"auto "+b+"px":a+"px auto",z="50% "+(s*A-w)+"px"),this.$background.css({"background-size":y,"background-position":z})}this.ticking=!1}}},b.defaults=c,a.fn.parallaxScroll=function(a){return this.each(function(){new b(this,a).init()})},b});