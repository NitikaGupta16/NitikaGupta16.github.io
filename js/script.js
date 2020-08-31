

/*(function(global) {

	var dc = {};
	var homeHTML = "home_content.html";
	var insertHtml = function(selector,html) {
		var targetElem = document.querySelector(selector);
		targetElem.innerHTML = html;
	};

	var showLoading = function(selector) {
		var html = "<div class='text-center'>";
		html+="<img src='ajax-loader.gif'></div>";
		insertHtml(selector,html);
	}

	document.addEventListener("DOMContentLoaded",function(event) {
		showLoading("#mainContent");
		$ajaxUtils.sendGetRequest(
			homeHTML,
			function(responseText) {
				document.querySelector("#mainContent")
					.innerHTML = responseText;
			},
			false
		);

	});

	global.$dc = dc;

})(window);*/

document.addEventListener("DOMContentLoaded",
	function(){
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 20 ) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
	}
);



var sections = $('section')
  , nav = $('nav')
  , nav_height = nav.outerHeight();

$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();

  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();

    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      sections.removeClass('active');

      $(this).addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });
});

nav.find('a').on('click', function () {
  var $el = $(this)
    , id = $el.attr('href');

  $('html, body').animate({
    scrollTop: $(id).offset().top - nav_height
  }, 500);

  return false;
});


/*Button to move to top function*/

mybtn = document.getElementById("btn-top");
window.onscroll = function() {
  scrollfunction();
};

function scrollfunction() {
  if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mybtn.style.display = "inline-block";
  }
  else {
    mybtn.style.display = "none";
  }
}

function MoveToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}