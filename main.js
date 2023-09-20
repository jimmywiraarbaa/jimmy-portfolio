function toggleDetail(e){
    const target = $(e.target)

    // Logika percabangan
    if ($(target).hasClass("active")) {
        $(target).html("More Info").removeClass("active");
    } else {
        $(target).html("Less Info").addClass("active");
    }

    // Selector
    const item = $(target).parents(".about-exp-item")
    const detail =  $(item).children(".about-exp-item-detail")

    // Toggle
    $(detail).slideToggle();
}