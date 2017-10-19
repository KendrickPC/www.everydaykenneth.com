$(".section-header").click(function () {
    var sibs = $(this).siblings();
    var parent = $(this).parent();
    $(sibs).slideToggle();
    $(parent).toggleClass("active");
    $(this).children(".section-icon").toggleClass("active");
});
