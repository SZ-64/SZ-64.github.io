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
