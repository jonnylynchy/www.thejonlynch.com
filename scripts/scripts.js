var adjustment = 85;
(function($){
  // Set up animations for portfolio
  //setPortfolioAnimations();

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

  // Featured slider
  $('#featured').orbit({ fluid: '16x6', captions: true, timer: true });  

  // Portfolio Links
  $('#portfolio li').click(function(){
    // console.log("hello");
    $("#myModal").reveal();
  })

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