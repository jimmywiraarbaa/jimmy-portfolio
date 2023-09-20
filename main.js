// Functions More Info
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

// Function Form
function onFormSubmit(e) {
    e.preventDefault()
    const email = $("#inp_email")
    const subject = $("#inp_subject")
    const message = $("#inp_message")

    if (!$(email).val()) {
        alert("Email is required")
    }else if (!$(subject).val()){
        alert("Subject is required")
    }else if (!$(message).val()){
        alert("Message is required")
    }else{
        alert("Form Submitted")
        $(email).val("");
        $(subject).val("");
        $(message).val("");
    }
}