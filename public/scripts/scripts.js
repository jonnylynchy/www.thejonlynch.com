var adjustment = 85;
(function($){

	// Init Canvas Animation
	window.navAnim = new CanvasNavAnimation("navCanvas");

  // First Item Animation
  $(window).load(function(){
    var firstItem = $('#firstNavItem');
    var itemWidth = $(firstItem)[0].clientWidth;
    var left = $(firstItem).offset().left - $('header .row')[0].offsetLeft;
    navAnim.stopAnim = false
    setTimeout(function(){navAnim.animate(navAnim.canvas, navAnim.context, left, itemWidth);}, 800)
    $(firstItem).addClass('active');
    // Set up animations for portfolio
    setPortfolioAnimations();

    // Featured slider
    $('#featured').orbit({ fluid: '16x6', captions: true, timer: true }); 
  });

	// Nav animation
  $('header a').click(function(){
    $('header a').removeClass('active');
  	var itemWidth = $(this)[0].clientWidth;
    var left = $(this).offset().left - $('header .row')[0].offsetLeft;
    navAnim.stopAnim = false
    navAnim.animate(navAnim.canvas, navAnim.context, left, itemWidth);
    $(this).addClass('active');
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
      var par=$(this).parent();
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
             scrollTop: target.offset().top - adjustment
          }, 600,function(){}
        );
        return false;
      }
    }
    
  });

  // If resize, re-size, position and animate the bar
  var resizeTimer;
  $(window).bind('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resizeNavAnimation, 100);
  });

  // Tweet :)
  $("#latestTweet .tweet").tweet({
    join_text: "auto",
    username: "jonlynch",
    avatar_size: 48,
    count: 1,
    auto_join_text_default: "",
    auto_join_text_ed: "",
    auto_join_text_ing: "",
    auto_join_text_reply: "",
    auto_join_text_url: "",
    loading_text: "loading tweets..."
  });

  // Follow
  $('.follow').click(function(){
    window.open('http://twitter.com/jonlynch');
  });

})(jQuery);

setPortfolioAnimations = function(){
  var win = $(window);
  var allMods = $('#portfolio li');

  allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("is-visible"); 
    } 
  });

  win.scroll(function(event) {
    allMods.each(function(i, el) {
      var el = $(el);
      if (el.visible(true)) {
        el.addClass("come-in"); 
      } 
    });
  });
}

resizeNavAnimation = function() {
  var activeNavItem = $('header a.active');
  if(activeNavItem.length){
    var itemWidth = $(activeNavItem)[0].clientWidth;
    var left = $(activeNavItem).offset().left - $('header .row')[0].offsetLeft;
    navAnim.stopAnim = false;
    navAnim.animate(navAnim.canvas, navAnim.context, left, itemWidth);  
  }
};

// Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-51701738-1', 'thejonlynch.com');
ga('send', 'pageview');