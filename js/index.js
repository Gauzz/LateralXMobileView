function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(22.756748,75.902977),
      zoom:20,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    var marker = new google.maps.Marker({position: center});

    marker.setMap(map);
    }

    function facebook(){
        window.open("https://www.facebook.com/LateralX");
      }
      function twitter(){
        window.open("https://twitter.com/LateralX_");
      }
      function instagram(){
        window.open("https://www.instagram.com/LateralX_/");
      }
      function linkedin(){
        window.open("https://www.linkedin.com/company/lateralx/about/");
      }

      $('#menu').singlePageNav({
        offset: $('.single-page-nav').outerHeight(),
        threshold: 120,
        speed: 800,
        currentClass: 'current',
        easing: 'swing',
        filter: ':not(.external)',
        //up: <a href="https://www.jqueryscript.net/time-clock/">date</a>,
        Hash: true,
        beforeStart: function() {
        console.log('begin scrolling');
        },
        onComplete: function() {
        console.log('done scrolling');
        }
        });

      document.querySelector( "#nav-toggle" ).addEventListener( "click", function() {
        this.classList.toggle( "active" );
        if(document.querySelector('#nav-toggle').classList.contains("active")=='true')
      {
        document.querySelector('#nav-toggle').style.color="black";
      }
      
      else{
        document.querySelector('#nav-toggle').style.color="white";
      }
      
        var windowsize = $(window).width();
        if(windowsize>=1000){
        $('.menubut').attr('width','9%');
        }
      if($('#nav-toggle').hasClass('active')){
         $('#menu').fadeIn("fast");
         $('body').addClass("fixedPosition");
         $('.cover').fadeOut("fast");
         $('.create').fadeOut("fast");
        var windowsize = $(window).width();
        if(windowsize<=425){
         $('.searc2').fadeOut("fast");
        }
        
         $('.next').fadeOut("fast");
         }
      else{
        $('#menu').fadeOut("fast");
        $('body').removeClass("fixedPosition");
        $('.cover').fadeIn("fast");
        $('.brands').fadeIn("fast");
        var windowsize = $(window).width();
        if(windowsize<=425){
        $('.searc2').fadeIn("fast");
        }
        if(window.location.href != "https://www.lateralx.com/about")
        $('.create').fadeIn("fast");
        $('.next').fadeIn("fast");
        $('body').css('overflow','auto');
        }    
      
      }        
      );

      $(".menubut").click(function()
  {
    $("#menu").fadeOut();
  });

      var i=0;

window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
    $('.count').each(function () {
      $(this).prop('Counter',0).animate({
          Counter: $(this).text()
      }, {
          duration: 4000,
          easing: 'swing',
          step: function (now) {
            if(i<2)
              $(this).text(Math.ceil(now));
              if(now==78)
              {
                i++;
              }
          }
      });
  });
  
  }
}