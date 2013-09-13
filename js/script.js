  var isDesktop = true;
  $(document).ready(function() {
    setDeviceType();
    parallaxScroll();
    loadInstagramPhotos();
    writeLog();
  })
  $(window).bind('scroll',function(e){
    parallaxScroll();
  });
  function setDeviceType(){
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
       isDesktop = false;
    }
  }
  function parallaxScroll() {
    if (isDesktop) {
      var scrolled = $(window).scrollTop();
      $('#header').css("position", "fixed");
      $('#header').css('top',-(scrolled*0.1)+'px');
    }
  }
  function loadInstagramPhotos(){
    $('#slideshow').embedagram({
      instagram_id: 30809912
    });
  }
  function writeLog() {
    console.log(
      "Hello! \n\n" +
      "While I'm not actively looking for a job, if something were to come up in a field related\n" +
      "to environmentalism, conservation or clean energy I would definitely be interested in\n" +
      "learning more.\n\n" +
      "Feel free to email me at robbyking@gmail.com, or check out my profile at linkedin.com/in/robbyking/.\n\n" +
      "Thanks!\n\n" +
      "_\n" +
      "robbyking\n"
    );
  }
  (function($){
    $.fn.extend({
      embedagram: function(options) {
        var defaults = {
          instagram_id: -999,
          thumb_width: 400,
          wrap_tag: 'li',
          link_type: 'web',
          limit: 200,
          success: function() {
            $("#loading-status").css("display", "none");
            return true;
          },
        };

        var options = $.extend(defaults, options);
        return this.each(function() {
          var o = options;
          var obj = $(this);
          var jsonp_url = "http://embedagram.com/e/plugin/" + o.instagram_id + "/?callback=?";
          jsonp_url += "&thumb_width=" + o.thumb_width + "&wrap_tag=" + o.wrap_tag;
          jsonp_url += "&limit=" + o.limit + "&link_type=" + o.link_type;

          $.getJSON(jsonp_url, function(data) {
            obj.html(data.html);
            o.success.apply(obj);
          });
          return obj;
        });
      }
    });
  })(jQuery);