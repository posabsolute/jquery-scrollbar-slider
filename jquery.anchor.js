/*******

	***	Anchor Slider by Cedric Dugas ***
  *** Version 2.0.0 ***
	*** Http://www.position-absolute.com ***

	Never have an anchor jumping your content, slide it.

	Don't forget to put an id to your anchor !
	You can use and modify this script for any project you want, but please leave this comment as credit.

*****/

(function ($) {
  $.fn.anchorAnimate = function(options) {
    var settings = $.extend({}, $.fn.anchorAnimate.defaults, options);

    return this.each(function() {
      var caller = this;
      $(caller).click(function(event) {
        event.preventDefault();
        var elementClick = $(caller).attr("href");

        var destination = $(elementClick).offset().top + settings.offset;
        $("html:not(:animated), body:not(:animated)").animate({ scrollTop: destination}, settings.speed, function() {
          if(0 === settings.offset) {
            window.location.hash = elementClick;
          }
        });
        return false;
      });
    });
  };

  $.fn.anchorAnimate.defaults = {
    speed: 1100,
    offset: 0
  };
}(jQuery));