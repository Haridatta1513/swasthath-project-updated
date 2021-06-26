(function($){"use strict";function xsFunction(){var xsContact=$('.xs-contact-form-wraper'),xsMap=$('.map-wraper-v2');xsMap.css('height',xsContact.outerHeight());}
function email_patern(email){var regex=/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;return regex.test(email);}
$(window).on('load',function(){xsFunction();setTimeout(()=>{$('#preloader').fadeOut();},500);if($('.xs-portfolio-grid').length>0){var $portfolioGrid=$('.xs-portfolio-grid'),colWidth=function(){var w=$portfolioGrid.width(),columnNum=1,columnWidth=0;if(w>1200){columnNum=3;}else if(w>900){columnNum=3;}else if(w>600){columnNum=2;}else if(w>450){columnNum=2;}else if(w>385){columnNum=1;}
columnWidth=Math.floor(w/columnNum);$portfolioGrid.find('.xs-portfolio-grid-item').each(function(){var $item=$(this),multiplier_w=$item.attr('class').match(/xs-portfolio-grid-item-w(\d)/),multiplier_h=$item.attr('class').match(/xs-portfolio-grid-item-h(\d)/),width=multiplier_w?columnWidth*multiplier_w[1]:columnWidth,height=multiplier_h?columnWidth*multiplier_h[1]*0.4-12:columnWidth*0.5;$item.css({width:width,});});return columnWidth;},isotope=function(){$portfolioGrid.isotope({resizable:false,itemSelector:'.xs-portfolio-grid-item',masonry:{columnWidth:colWidth(),gutterWidth:3}});};isotope();$(window).resize(isotope);}});$(document).ready(function(){xsFunction();if($('.xs-banner-slider').length>0){var bannerSlider=$(".xs-banner-slider");bannerSlider.owlCarousel({items:1,loop:true,mouseDrag:true,touchDrag:true,dots:false,nav:true,navText:['<i class="fa fa-angle-left xs-round-nav"></i>','<i class="fa fa-angle-right xs-round-nav"></i>'],autoplay:false,autoplayTimeout:5000,autoplayHoverPause:true,animateOut:'fadeOut',animateIn:'fadeIn',responsive:{0:{nav:false,},480:{nav:false,},991:{nav:true,}}});}
if($('.xs-single-item-slider').length>0){var singleItemSlider=$(".xs-single-item-slider");singleItemSlider.owlCarousel({items:1,loop:true,mouseDrag:true,touchDrag:true,dots:false,nav:true,navText:['<i class="fa fa-arrow-left xs-square-nav"></i>','<i class="fa fa-arrow-right xs-square-nav"></i>'],autoplay:true,autoplayTimeout:5000,autoplayHoverPause:true,animateOut:'fadeOut',animateIn:'fadeIn',responsive:{0:{nav:false,},480:{nav:false,},768:{nav:true,}}});}
var number_percentage=$(".number-percentage");function animateProgressBar(){number_percentage.each(function(){$(this).animateNumbers($(this).attr("data-value"),true,parseInt($(this).attr("data-animation-duration"),10));var value=$(this).attr("data-value");var duration=$(this).attr("data-animation-duration");$(this).closest('.xs-skill-bar').find('.xs-skill-track').animate({width:value+'%'},4500);});}
if($('.waypoint-tigger').length>0){var waypoint=new Waypoint({element:document.getElementsByClassName('waypoint-tigger'),handler:function(direction){animateProgressBar();}});}
$.fn.animateNumbers=function(stop,commas,duration,ease){return this.each(function(){var $this=$(this);var start=parseInt($this.text().replace(/,/g,""),10);commas=(commas===undefined)?true:commas;$({value:start}).animate({value:stop},{duration:duration==undefined?500:duration,easing:ease==undefined?"swing":ease,step:function(){$this.text(Math.floor(this.value));if(commas){$this.text($this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1,"));}},complete:function(){if(parseInt($this.text(),10)!==stop){$this.text(stop);if(commas){$this.text($this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1,"));}}}});});};if($('.xs-menus').length>0){$('.xs-menus').xs_nav({mobileBreakpoint:992,});}
$('.xs-countdown-timer[data-countdown]').each(function(){var $this=$(this),finalDate=$(this).data('countdown');$this.countdown(finalDate,function(event){var $this=$(this).html(event.strftime(' '
+'<span class="timer-count">%-D <span class="timer-title">Days</span></span>  '
+'<span class="timer-count">%H <span class="timer-title">Hours</span></span> '
+'<span class="timer-count">%M <span class="timer-title">Minutes</span></span> '
+'<span class="timer-count">%S <span class="timer-title">Secods</span></span>'));});});$(document).on('click','.xs-back-to-top',function(event){event.preventDefault();$('html, body').animate({scrollTop:0,},1000);});if($('.xs-demoFeed').length>0){$.fn.spectragram.accessData={accessToken:'1764162550.ba4c844.679392a432894982bf6a31ec20d8acb0',clientID:'289a98508b934dd49a68144b79209813'};$('.xs-demoFeed').spectragram('getUserFeed',{query:'natgeo',max:9,size:'small',});}
if($('.xs-video-popup').length>0){$('.xs-video-popup').magnificPopup({disableOn:700,type:'iframe',mainClass:'mfp-fade',removalDelay:160,preloader:false,fixedContentPos:false});}
$('.xs-image-popup').magnificPopup({type:'image',closeOnContentClick:false,closeBtnInside:false,mainClass:'mfp-with-zoom mfp-img-mobile',gallery:{enabled:true},zoom:{enabled:true,duration:300,}});$(document).on('click','.xs-window-opener',function(){event.preventDefault();var main_wraper=$('.xs-widnow-wraper'),active_class='active';if($(this).parent().parent().hasClass(active_class)){$(this).parent().parent().removeClass(active_class);}else{$(this).parent().parent().addClass(active_class);}});function setActiveStyleSheet(title){var i,a;for(i=0;(a=document.getElementsByTagName('link')[i]);i++){if(a.getAttribute('rel').indexOf('style')!=-1&&a.getAttribute('title')&&a.getAttribute('rel').indexOf('alt')!=-1){a.disabled=true;if(a.getAttribute('title')==title)
a.disabled=false;}}}
if(typeof Storage!='undefined'){var color=window.localStorage.getItem('color');if(color!=null){setActiveStyleSheet(color);$('.colors_panel > a[data-val='+color+']').addClass('active');}}
if($('.colors_panel a').length>0){$('.colors_panel > a').on('click',function(e){e.preventDefault();var color=$(this).data('val');setActiveStyleSheet(color);$('.colors_panel > a.active').removeClass('active');$(this).addClass('active');if(typeof Storage!='undefined'){window.localStorage.setItem('color',color);}});}
if($('.panel_opener').length>0){$('.panel_opener').on('click',function(event){event.preventDefault();if($('.colors_panel').hasClass('active')){$('.colors_panel').removeClass('active');}else{$('.colors_panel').addClass('active');}});}
if($('#xs-contact-form').length>0){$('#xs-contact-form').on('submit',function(event){event.preventDefault();$('.xpeedStudio_success_message').remove();var name=$('#xs-name'),email=$('#xs-email'),massage=$('#xs-massage'),submit=$('#xs-submit'),error=false;if(name.val()===''){error=true;name.parent().addClass('invaild');name.focus();return false;}else{name.parent().removeClass('invaild');}
if(!email_patern(email.val().toLowerCase())){error=true;email.parent().addClass('invaild');email.focus();return false;}else if(email.val()===''){error=true;email.parent().addClass('invaild');email.focus();return false;}else{email.parent().removeClass('invaild');}
if(massage.val()===''){error=true;massage.parent().addClass('invaild');massage.focus();return false;}else{massage.parent().removeClass('invaild');}
if(error===false){$.ajax({type:"POST",url:"assets/php/contact-form.php",data:{'name':name.val(),'email':email.val(),'massage':massage.val()},success:function(result){submit.after('<p class="xpeedStudio_success_message">'+result+'</p>').fadeIn();setTimeout(()=>{$('.xpeedStudio_success_message').fadeOut();},3000);$('#xs-contact-form')[0].reset();}});}});}});$(window).on('scroll',function(){});$(window).on('resize',function(){xsFunction();});if(($('#xs-multiple-map-1').length>0)&&($('#xs-multiple-map-2').length>0)&&($('#xs-multiple-map-3').length>0)){var latlng=new google.maps.LatLng(28.561287,-81.444465),latlng2=new google.maps.LatLng(28.507561,-81.482359),latlng3=new google.maps.LatLng(29.125285,-82.048823);var myOptions={zoom:3,center:latlng,scrollwheel:false,navigationControl:false,mapTypeControl:true,scaleControl:false,draggable:true,disableDefaultUI:true,mapTypeId:google.maps.MapTypeId.ROADMAP,};var myOptions2={zoom:3,center:latlng,scrollwheel:false,navigationControl:false,mapTypeControl:true,scaleControl:false,draggable:true,disableDefaultUI:true,mapTypeId:google.maps.MapTypeId.ROADMAP,};var myOptions3={zoom:3,center:latlng,scrollwheel:false,navigationControl:false,mapTypeControl:true,scaleControl:false,draggable:true,disableDefaultUI:true,mapTypeId:google.maps.MapTypeId.ROADMAP,};var map=new google.maps.Map(document.getElementById("xs-multiple-map-1"),myOptions),map2=new google.maps.Map(document.getElementById("xs-multiple-map-2"),myOptions2),map3=new google.maps.Map(document.getElementById("xs-multiple-map-3"),myOptions3);var myMarker=new google.maps.Marker({position:latlng,map:map,title:"Barnett Park"});var myMarker2=new google.maps.Marker({position:latlng2,map:map2,title:"Bill Fredrick Park at Turkey Lake"});var myMarker3=new google.maps.Marker({position:latlng3,map:map3,title:"Dogwood Park"});}
if($('#xs-map').length>0){google.maps.event.addDomListener(window,'load',init);}
function init(){var mapOptions={zoom:11,scrollwheel:false,navigationControl:false,mapTypeControl:true,scaleControl:false,draggable:true,disableDefaultUI:true,center:new google.maps.LatLng(40.6700,-73.9400),styles:[{"featureType":"administrative","elementType":"all","stylers":[{"saturation":"-100"}]},{"featureType":"administrative.province","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","elementType":"all","stylers":[{"saturation":-100},{"lightness":"50"},{"visibility":"simplified"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":"-100"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"lightness":"30"}]},{"featureType":"road.local","elementType":"all","stylers":[{"lightness":"40"}]},{"featureType":"transit","elementType":"all","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]},{"featureType":"water","elementType":"labels","stylers":[{"lightness":-25},{"saturation":-100}]}]};var mapElement=document.getElementById('xs-map');var map=new google.maps.Map(mapElement,mapOptions);var marker=new google.maps.Marker({position:new google.maps.LatLng(40.6700,-73.9400),map:map,title:'Snazzy!'});}})(jQuery);
function pop() {
    setTimeout(function(){ 
    document.getElementById("dd").style.cssText="visibility:visible;opacity:1;z-index:9999;top:100px"; 
      }, 5000);
  }
  function clo(){
      document.getElementById("dd").style.cssText="visiblity:hidden;border:none;outline:none";
  }
  /*testimonals*/
  (function () {
    "use strict";
  
    var carousels = function () {
      $(".owl-carousel1").owlCarousel({
        loop: true,
        center: true,
        margin: 0,
        responsiveClass: true,
        nav: false,
        responsive: {
          0: {
            items: 1,
            nav: false
          },
          680: {
            items: 2,
            nav: false,
            loop: false
          },
          1000: {
            items: 3,
            nav: true
          }
        }
      });
    };
  
    (function ($) {
      carousels();
    })(jQuery);
  })();
  // counting section
  (function ($) {
    $.fn.countTo = function (options) {
      options = options || {};
      
      return $(this).each(function () {
        // set options for current element
        var settings = $.extend({}, $.fn.countTo.defaults, {
          from:            $(this).data('from'),
          to:              $(this).data('to'),
          speed:           $(this).data('speed'),
          refreshInterval: $(this).data('refresh-interval'),
          decimals:        $(this).data('decimals')
        }, options);
        
        // how many times to update the value, and how much to increment the value on each update
        var loops = Math.ceil(settings.speed / settings.refreshInterval),
          increment = (settings.to - settings.from) / loops;
        
        // references & variables that will change with each update
        var self = this,
          $self = $(this),
          loopCount = 0,
          value = settings.from,
          data = $self.data('countTo') || {};
        
        $self.data('countTo', data);
        
        // if an existing interval can be found, clear it first
        if (data.interval) {
          clearInterval(data.interval);
        }
        data.interval = setInterval(updateTimer, settings.refreshInterval);
        
        // initialize the element with the starting value
        render(value);
        
        function updateTimer() {
          value += increment;
          loopCount++;
          
          render(value);
          
          if (typeof(settings.onUpdate) == 'function') {
            settings.onUpdate.call(self, value);
          }
          
          if (loopCount >= loops) {
            // remove the interval
            $self.removeData('countTo');
            clearInterval(data.interval);
            value = settings.to;
            
            if (typeof(settings.onComplete) == 'function') {
              settings.onComplete.call(self, value);
            }
          }
        }
        
        function render(value) {
          var formattedValue = settings.formatter.call(self, value, settings);
          $self.html(formattedValue);
        }
      });
    };
    
    $.fn.countTo.defaults = {
      from: 0,               // the number the element should start at
      to: 0,                 // the number the element should end at
      speed: 1000,           // how long it should take to count between the target numbers
      refreshInterval: 100,  // how often the element should be updated
      decimals: 0,           // the number of decimal places to show
      formatter: formatter,  // handler for formatting the value before rendering
      onUpdate: null,        // callback method for every time the element is updated
      onComplete: null       // callback method for when the element finishes updating
    };
    
    function formatter(value, settings) {
      return value.toFixed(settings.decimals);
    }
  }(jQuery));
  
  jQuery(function ($) {
    // custom formatting example
    $('.count-number').data('countToOptions', {
    formatter: function (value, options) {
      return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
    }
    });
    
    // start all the timers
    $('.timer').each(count);  
    
    function count(options) {
    var $this = $(this);
    options = $.extend({}, options || {}, $this.data('countToOptions') || {});
    $this.countTo(options);
    }
  });