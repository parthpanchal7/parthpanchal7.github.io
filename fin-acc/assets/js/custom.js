

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >= 500) {
        //clearHeader, not clearheader - caps H
        $(".header-new").addClass("fixedHeader");
    }
    else{
        $(".header-new").removeClass("fixedHeader");   
    }
});