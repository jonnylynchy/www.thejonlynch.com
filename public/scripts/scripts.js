(function(window, $){
  window.adjustment = 85;

	// Init Canvas Animation
	window.navAnim = new CanvasNavAnimation("navCanvas");

  // First Item Animation
  $(window).load(function(){
    var firstItem = '';

    if($('a[href=' + location.hash +']').length > 0){
      firstItem = $('a[href=' + location.hash +']');
    } else {
        firstItem = $('nav').find('.active').length > 0 ? $('nav').find('.active') : $('#firstNavItem');
    }

    var itemWidth = $(firstItem)[0].clientWidth;
    var left = $(firstItem).offset().left - $('header .row')[0].offsetLeft;

    navAnim.stopAnim = false;

    setTimeout(function(){
        navAnim.animate(navAnim.canvas, navAnim.context, left, itemWidth);
    }, 800);

    $(firstItem).addClass('active');
    scrollToPosition($(firstItem));

    // Set up animations for portfolio and logo
    setAnimations();

    //setScrollNavPosition();
    // Featured slider
    if($('#featured').length > 0){
        $('#featured').orbit({ fluid: '16x6', captions: true, timer: true });
    }
  });

	// Nav animation
  $('header a').click(function(){
    $('header a').removeClass('active');
  	var itemWidth = $(this)[0].clientWidth;
    var left = $(this).offset().left - $('header .row')[0].offsetLeft;
    navAnim.stopAnim = false;
    navAnim.animate(navAnim.canvas, navAnim.context, left, itemWidth);
    $(this).addClass('active');
    scrollToPosition($(this));
  });

  // If resize, re-size, position and animate the bar
  var resizeTimer;
  $(window).bind('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resizeNavAnimation, 100);
  });

  // Tweet :)
  // $("#latestTweet .tweet").tweet({
  //   join_text: "auto",
  //   username: "jonlynch",
  //   avatar_size: 48,
  //   count: 1,
  //   auto_join_text_default: "",
  //   auto_join_text_ed: "",
  //   auto_join_text_ing: "",
  //   auto_join_text_reply: "",
  //   auto_join_text_url: "",
  //   loading_text: "loading tweets..."
  // });

  // Follow
  $('.follow').click(function(){
    window.open('http://twitter.com/jonlynch');
  });

})(window, jQuery);

scrollToPosition = function(origin){
  // only do if not in /blog
  if(origin[0].href.indexOf('/blog') === -1){
    var par = origin.parent();
    var targetHash = origin[0].toString().substring(origin[0].href.indexOf('#'));
    var target = $(targetHash);
    target = target.length ? target : $('[name=' + targetHash.slice(1) +']');
    if (target.length) {
      var topPosition = target.offset().top - adjustment;
      if(origin.attr('href').indexOf('home') > -1){
        topPosition = 0;
      }
      $('html,body').animate({
         scrollTop: topPosition
        }, 600,function(){}
      );
      return false;
    }
  }
}

setAnimations = function(){
  var win = $(window),
      allMods = $('#portfolio li'),
      logoDiv = $('section#logo div');

  allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("is-visible");
    }
  });

  win.scroll(function(event) {
    if(window.scrollY > 50){
      logoDiv.addClass('small');
    } else {
      logoDiv.removeClass('small');
    }
    allMods.each(function(i, el) {
      var el = $(el);
      if (el.visible(true)) {
        el.addClass("come-in");
      }
    });
  });
}

setScrollNavPosition = function() {
  var win = $(window),
      sections = $('section[name]');

  win.scroll(function(event) {
    sections.each(function(i, el) {
      var el = $(el),
          activeNav = "",
          itemWidth = 0,
          left = 0;

      if (el.visible(true)) {
        activeNav = $('header a[href="#' + el.attr('name') + '"]');
        itemWidth = activeNav[0].clientWidth;
        left = activeNav.offset().left - $('header .row')[0].offsetLeft;
        $('header a').removeClass('active');
        navAnim.stopAnim = false;
        navAnim.animate(navAnim.canvas, navAnim.context, left, itemWidth);
        activeNav.addClass('active');
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
