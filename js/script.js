  var isDesktop = true;
  $(document).ready(function() {
    setDeviceType();
    parallaxScroll();
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
  function writeLog() {
    console.log(
      "Hello! \n\n" +
      "While I'm not actively looking for a job, if something were to come up in a field related\n" +
      "to environmentalism, wildlife or wilderness conservation, or clean energy I would definitely be interested in\n" +
      "learning more.\n\n" +
      "Feel free to email me at robbyking@gmail.com, or check out my profile at linkedin.com/in/robbyking/.\n\n" +
      "Thanks!\n\n" +
      "_\n" +
      "robbyking\n"
    );
  }