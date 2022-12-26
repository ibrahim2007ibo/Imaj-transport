$("#nav-menu .lang-wrapper span").click(function (e) {
    e.stopPropagation();
    if($("#nav-menu .lang-wrapper .other-langs").hasClass("active")){
        $("#nav-menu .lang-wrapper .other-langs").removeClass("active");
    }
    else{
        $("#nav-menu .lang-wrapper .other-langs").addClass("active");
    }
  });

  $(window).click(function() {
    $("#nav-menu .lang-wrapper .other-langs").removeClass("active");
  });


   
  $('.menu-wrap').click(function(e) {
    e.stopPropagation(); 
    $('.menu-wrap').toggleClass('open');
    
    if($('.menu-wrap').hasClass('open')) {
        $('.mobile-menu').animate({right: '0'}, 300, 'linear');
          $('.popup-layer').show();
        $('body').css('overflow', 'hidden');
    } else {
        $('.popup-layer').hide();
        $('.mobile-menu').animate({right: '-100%'}, 300, 'linear');
        setTimeout(function() {
            $('body').css('overflow', 'visible');
        }, 200);
    }
});


 $(".popup-layer").click(function(){
    $('.menu-wrap').removeClass('open');
    $('.mobile-menu').animate({right: '-100%'}, 300, 'linear');
    $('.popup-layer').hide();
    setTimeout(function() {
        $('body').css('overflow', 'visible');
    }, 200);
});


$(".mobile-menu .menu-li .subbed-link").click(function (e) {
  e.preventDefault();
  if($(this).parent().hasClass("active")){
      $(this).parent().find("ul").slideUp("slow")
      $(this).parent().removeClass("active")
      $(this).parent().find("i").removeClass("active")
      $(this).next().removeClass("active")
      return;
  }
  $(".mobile-menu .menu-li.active").removeClass("active")
  $(".mobile-menu .menu-li ul.active").slideUp("slow")
  
  if(!$(this).parent().hasClass("active")){
      $(this).parent().find("ul").slideDown("slow")
      $(this).parent().addClass("active")
      $(this).parent().find("i").addClass("active")
      $(this).next().addClass("active")
  }
});

$(document).ready(function() {
  // nav items hover  
  $('.nav-item').on('mouseover', function () {
      if(!($(this).hasClass('dropdown-toggle') && $(this).parent().hasClass('active'))) {
          var widthThis = $(this).width();
          var leftThis = $(this).offset().left - $('.navbar-nav').offset().left;
          $('.line-hover').width(widthThis);
          $('.line-hover').css('left', leftThis);
      } 
      if($(this).hasClass('dropdown-toggle') || $(this).parent().hasClass('active')) {
          $('.line-hover').width('0');
      }

      if($(this).hasClass('dropdown-toggle')) {
          $(this).parent().removeClass('active');
      }
  });
  
  
      $('.navbar-nav').on('mouseleave', function () {
      $('.line-hover').width('0');
      $('.dropdown-menu .dropdown-item').each(function () {
          var location = window.location.href; 
          var link = this.href; 
          if(location == link) {              
            $(this).parents().eq(1).addClass('active');
          }
      });
  });
  

  
 });

 $(".carousel-item").first().addClass("active");
 
       $(document).ready(function () {
            dialog = $("#dialog").dialog({
                uiLibrary: 'bootstrap4',
                resizable: true,
                width: 650,
                height: 350,
                modal: true
            });
        });
     
        $('.owl-carousel').owlCarousel({
            center: true,
            loop: true,
            margin: 20,
            items: 1.5,
            dots: true,
            nav: true
      });
        
    