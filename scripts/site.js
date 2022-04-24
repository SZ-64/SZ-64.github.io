// Cache selectors
var topMenu = $("#top-menu");
var topMenuHeight = topMenu.outerHeight() + 15;
var menuItems = topMenu.find("a");
var scrollItems = menuItems.map(function () {
  var item = $($(this).attr("href"));
  if (item.length) {
    return item;
  }
});

// Scroll to section
$(window).scroll(function () {
  // Get container scroll position
  var fromTop = $(this).scrollTop() + topMenuHeight;

  // Get id of current scroll item
  var cur = scrollItems.map(function () {
    if ($(this).offset().top < fromTop) return this;
  });

  // Get the id of the current element
  cur = cur[cur.length - 1];
  var id = cur && cur.length ? cur[0].id : "";

  // Set/remove active class
  menuItems.removeClass("active");
  menuItems.filter("[href='#" + id + "']").addClass("active");
});

// Dynamically set some styles based on screen size
$(document).ready(function(){
  if(window.innerWidth >= 768){
    $('#school-one-loc').addClass('text-end');
    $('#school-one-date').addClass('text-end');
    $('#school-two-loc').addClass('text-end');
    $('#school-two-date').addClass('text-end');
    $('#job-one-date').addClass('text-end');
    $('#job-two-date').addClass('text-end');
  }
});

$(window).resize(function(){
  if(window.innerWidth < 768){
    $('#school-one-loc').removeClass('text-end');
    $('#school-one-date').removeClass('text-end');
    $('#school-two-loc').removeClass('text-end');
    $('#school-two-date').removeClass('text-end');
    $('#job-one-date').removeClass('text-end');
    $('#job-two-date').removeClass('text-end');
  } else {
    $('#school-one-loc').addClass('text-end');
    $('#school-one-date').addClass('text-end');
    $('#school-two-loc').addClass('text-end');
    $('#school-two-date').addClass('text-end');
    $('#job-one-date').addClass('text-end');
    $('#job-two-date').addClass('text-end');
  }
});