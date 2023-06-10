AOS.init();

// -----for type writer----------
var write = document.querySelector(".main-title")
var typewriter = new Typewriter(write, {
    loop: false,
    delay: 75,
});

typewriter
    .typeString('Paris Bilury Hotel')
    .pauseFor(500)
    .start();
// -----------end type writer----------










var mainTitle = document.querySelector(".main-title-box")

var mainBox = document.querySelector(".main-box")
mainBox.style.height = window.innerHeight + "px"
window.addEventListener("resize", function () {
    mainBox.style.height = window.innerHeight + "px"
})
var navBar = document.querySelector(".main-nav-bar")
window.addEventListener("scroll", function () {
    if (scrollY > 50) {
        navBar.style.backgroundColor = "rgb(43, 42, 42)"
    }
    if (scrollY < 50) {
        navBar.style.backgroundColor = "rgba(0, 0, 0, 0)"
    }
})
var arrLeft = document.querySelector(".icon-left-slider")
var arrRight = document.querySelector(".icon-right-slider")
var img1 = document.querySelector(".img1")
var img2 = document.querySelector(".img2")
var img3 = document.querySelector(".img3")
var button1 = document.querySelector(".button1-main-slider")
var button2 = document.querySelector(".button2-main-slider")
var button3 = document.querySelector(".button3-main-slider")
var flagMainSlider = 0
img1.style.height = window.innerHeight + "px"
img2.style.height = window.innerHeight + "px"
img3.style.height = window.innerHeight + "px"
window.addEventListener("resize", function () {
    img1.style.height = window.innerHeight + "px"
    img2.style.height = window.innerHeight + "px"
    img3.style.height = window.innerHeight + "px"
})
arrRight.addEventListener("click", function () {
    if (flagMainSlider == 0) {

        img1.style.opacity = "0"
        img2.style.opacity = "1"
        img3.style.opacity = "0"
        button1.style.backgroundColor = "rgb(167, 167, 167)"
        button2.style.backgroundColor = "white"
        button3.style.backgroundColor = "rgb(167, 167, 167)"
        mainTitle.innerHTML = "<h1 class='main-title'>Luxurious Design</h1>"
        flagMainSlider = 1
        var write = document.querySelector(".main-title")
        var typewriter = new Typewriter(write, {
            loop: false,
            delay: 75,
        });

        typewriter
            .typeString('Luxurious Design')
            .pauseFor(500)
            .start();
    } else if (flagMainSlider == 1) {
        img1.style.opacity = "0"
        img2.style.opacity = "0"
        img3.style.opacity = "1"
        button1.style.backgroundColor = "rgb(167, 167, 167)"
        button2.style.backgroundColor = "rgb(167, 167, 167)"
        button3.style.backgroundColor = "white"
        mainTitle.innerHTML = "<h1 class='main-title'>Exquisite Space</h1>"
        flagMainSlider = 2
        var write = document.querySelector(".main-title")
        var typewriter = new Typewriter(write, {
            loop: false,
            delay: 75,
        });

        typewriter
            .typeString('Exquisite Space')
            .pauseFor(500)
            .start();
    } else if (flagMainSlider == 2) {
        img1.style.opacity = "1"
        img2.style.opacity = "0"
        img3.style.opacity = "0"
        button1.style.backgroundColor = "white"
        button2.style.backgroundColor = "rgb(167, 167, 167)"
        button3.style.backgroundColor = "rgb(167, 167, 167)"
        mainTitle.innerHTML = "<h1 class='main-title'>Paris Bilury Hotel</h1>"
        flagMainSlider = 0
        var write = document.querySelector(".main-title")
        var typewriter = new Typewriter(write, {
            loop: false,
            delay: 75,
        });

        typewriter
            .typeString('Paris Bilury Hotel')
            .pauseFor(500)
            .start();
    }
})
arrLeft.addEventListener("click", function () {
    if (flagMainSlider == 0) {
        img1.style.opacity = "0"
        img2.style.opacity = "0"
        img3.style.opacity = "1"
        button1.style.backgroundColor = "rgb(167, 167, 167)"
        button2.style.backgroundColor = "rgb(167, 167, 167)"
        button3.style.backgroundColor = "white"
        mainTitle.innerHTML = "<h1 class='main-title'>Exquisite Space</h1>"
        flagMainSlider = 2
        var write = document.querySelector(".main-title")
        var typewriter = new Typewriter(write, {
            loop: false,
            delay: 75,
        });

        typewriter
            .typeString('Exquisite Space')
            .pauseFor(500)
            .start();
    } else if (flagMainSlider == 2) {
        img1.style.opacity = "0"
        img2.style.opacity = "1"
        img3.style.opacity = "0"
        button1.style.backgroundColor = "rgb(167, 167, 167)"
        button2.style.backgroundColor = "white"
        button3.style.backgroundColor = "rgb(167, 167, 167)"
        mainTitle.innerHTML = "<h1 class='main-title'>Luxurious Design</h1>"
        flagMainSlider = 1
        var write = document.querySelector(".main-title")
        var typewriter = new Typewriter(write, {
            loop: false,
            delay: 75,
        });

        typewriter
            .typeString('Luxurious Design')
            .pauseFor(500)
            .start();
    } else if (flagMainSlider == 1) {
        img1.style.opacity = "1"
        img2.style.opacity = "0"
        img3.style.opacity = "0"
        button1.style.backgroundColor = "white"
        button2.style.backgroundColor = "rgb(167, 167, 167)"
        button3.style.backgroundColor = "rgb(167, 167, 167)"
        mainTitle.innerHTML = "<h1 class='main-title'>Paris Bilury Hotel</h1>"
        flagMainSlider = 0
        var write = document.querySelector(".main-title")
        var typewriter = new Typewriter(write, {
            loop: false,
            delay: 75,
        });

        typewriter
            .typeString('Paris Bilury Hotel')
            .pauseFor(500)
            .start();
    }
})
button1.addEventListener("click", function () {
    img1.style.opacity = "1"
    img2.style.opacity = "0"
    img3.style.opacity = "0"
    button1.style.backgroundColor = "white"
    button2.style.backgroundColor = "rgb(167, 167, 167)"
    button3.style.backgroundColor = "rgb(167, 167, 167)"
    mainTitle.innerHTML = "<h1 class='main-title'>Paris Bilury Hotel</h1>"
    flagMainSlider = 0
    var write = document.querySelector(".main-title")
    var typewriter = new Typewriter(write, {
        loop: false,
        delay: 75,
    });

    typewriter
        .typeString('Paris Bilury Hotel')
        .pauseFor(500)
        .start();
})
button2.addEventListener("click", function () {
    img1.style.opacity = "0"
    img2.style.opacity = "1"
    img3.style.opacity = "0"
    button1.style.backgroundColor = "rgb(167, 167, 167)"
    button2.style.backgroundColor = "white"
    button3.style.backgroundColor = "rgb(167, 167, 167)"
    mainTitle.innerHTML = "<h1 class='main-title'>Luxurious Design</h1>"
    flagMainSlider = 1
    var write = document.querySelector(".main-title")
    var typewriter = new Typewriter(write, {
        loop: false,
        delay: 75,
    });

    typewriter
        .typeString('Luxurious Design')
        .pauseFor(500)
        .start();
})
button3.addEventListener("click", function () {
    img1.style.opacity = "0"
    img2.style.opacity = "0"
    img3.style.opacity = "1"
    button1.style.backgroundColor = "rgb(167, 167, 167)"
    button2.style.backgroundColor = "rgb(167, 167, 167)"
    button3.style.backgroundColor = "white"
    mainTitle.innerHTML = "<h1 class='main-title'>Exquisite Space</h1>"
    flagMainSlider = 2
    var write = document.querySelector(".main-title")
    var typewriter = new Typewriter(write, {
        loop: false,
        delay: 75,
    });

    typewriter
        .typeString('Exquisite Space')
        .pauseFor(500)
        .start();
})
var homeSlidshow = document.querySelector(".slide-down-home-box")
var home = document.querySelector("#home")
var styHome = window.getComputedStyle(home)
var widthHome = styHome.getPropertyValue("width")
var responsSliderHome = (150 - parseFloat(widthHome)) / 2
homeSlidshow.style.left = home.getClientRects()[0].left - responsSliderHome + "px"
homeSlidshow.style.top = home.getClientRects()[0].bottom + "px"
window.addEventListener("resize", function () {
    homeSlidshow.style.left = home.getClientRects()[0].left - responsSliderHome + "px"
})
$("#home").mouseenter(function (e) {
    $(".slide-down-home-box").css("height", "120px")
})
$("#home").mouseleave(function (e) {
    $(".slide-down-home-box").css("height", "0px")
})
$(".slide-down-home-box").mouseenter(function (e) {
    $(".slide-down-home-box").css("height", "120px")
})
$(".slide-down-home-box").mouseleave(function (e) {
    $(".slide-down-home-box").css("height", "0px")
})
var roomSlidshow = document.querySelector(".slide-down-room-box")
var room = document.querySelector("#room")
var styRoom = window.getComputedStyle(room)
var widthRoom = styRoom.getPropertyValue("width")
var responsSliderRoom = (150 - parseFloat(widthRoom)) / 2
roomSlidshow.style.left = room.getClientRects()[0].left - responsSliderRoom + "px"
roomSlidshow.style.top = room.getClientRects()[0].bottom + "px"
window.addEventListener("resize", function () {
    roomSlidshow.style.left = room.getClientRects()[0].left - responsSliderRoom + "px"
})
$("#room").mouseenter(function (e) {
    $(".slide-down-room-box").css("height", "190px")
})
$("#room").mouseleave(function (e) {
    $(".slide-down-room-box").css("height", "0px")
})
$(".slide-down-room-box").mouseenter(function (e) {
    $(".slide-down-room-box").css("height", "190px")
})
$(".slide-down-room-box").mouseleave(function (e) {
    $(".slide-down-room-box").css("height", "0px")
})
var tourSlidshow = document.querySelector(".slide-down-tour-box")
var tour = document.querySelector("#tour")
var styTour = window.getComputedStyle(tour)
var widthTour = styTour.getPropertyValue("width")
var responsSliderTour = (150 - parseFloat(widthTour)) / 2
tourSlidshow.style.left = tour.getClientRects()[0].left - responsSliderTour + "px"
tourSlidshow.style.top = tour.getClientRects()[0].bottom + "px"
window.addEventListener("resize", function () {
    tourSlidshow.style.left = tour.getClientRects()[0].left - responsSliderTour + "px"
})
$("#tour").mouseenter(function (e) {
    $(".slide-down-tour-box").css("height", "120px")
})
$("#tour").mouseleave(function (e) {
    $(".slide-down-tour-box").css("height", "0px")
})
$(".slide-down-tour-box").mouseenter(function (e) {
    $(".slide-down-tour-box").css("height", "120px")
})
$(".slide-down-tour-box").mouseleave(function (e) {
    $(".slide-down-tour-box").css("height", "0px")
})

var pageSlidshow = document.querySelector(".slide-down-page-box")
var page = document.querySelector("#page")
var styPage = window.getComputedStyle(page)
var widthPage = styPage.getPropertyValue("width")
var responsSliderPage = (500 - parseFloat(widthPage))
pageSlidshow.style.left = page.getClientRects()[0].left - responsSliderPage + "px"
pageSlidshow.style.top = page.getClientRects()[0].bottom + "px"
window.addEventListener("resize", function () {
    pageSlidshow.style.left = page.getClientRects()[0].left - responsSliderPage + "px"
})
$("#page").mouseenter(function (e) {
    $(".slide-down-page-box").css("height", "300px")
})
$("#page").mouseleave(function (e) {
    $(".slide-down-page-box").css("height", "0px")
})
$(".slide-down-page-box").mouseenter(function (e) {
    $(".slide-down-page-box").css("height", "300px")
})
$(".slide-down-page-box").mouseleave(function (e) {
    $(".slide-down-page-box").css("height", "0px")
})
//...............................................................................
var welcome = document.querySelector(".welcome")
welcome.style.top = window.innerHeight + "px"
window.addEventListener("resize", function () {
    welcome.style.top = window.innerHeight + "px"
})
// ///////////////////////////////////////////////////

var locationMap = document.querySelector(".location-map")
locationMap.style.top = window.innerHeight + 600 + "px"
window.addEventListener("resize", function () {
    locationMap.style.top = window.innerHeight + 600 + "px"
})
var boxlinklocation = document.querySelector(".link-location-box")
$(".link-location-box").mouseenter(function () {
    $(".link-location-box").addClass("animate__animated animate__pulse")
})
$(".link-location-box").mouseleave(function () {
    $(".link-location-box").removeClass("animate__animated animate__pulse")
})
boxlinklocation.style.setProperty('--animate-duration', '0.4s');


var sliRoomBox = document.querySelector(".slider-room-box")
sliRoomBox.style.top = window.innerHeight + 1200 + "px"
window.addEventListener("resize", function () {
    sliRoomBox.style.top = window.innerHeight + 1200 + "px"
})


var imgSli1 = document.querySelector(".slider-room-image1")
var imgSli2 = document.querySelector(".slider-room-image2")
var imgSli3 = document.querySelector(".slider-room-image3")
var imgSli4 = document.querySelector(".slider-room-image4")
var imgSli5 = document.querySelector(".slider-room-image5")
var imgSli6 = document.querySelector(".slider-room-image6")
var imgSli7 = document.querySelector(".slider-room-image7")
var x = (window.innerWidth - 1200) / 7
var y = parseFloat(window.getComputedStyle(imgSli1).getPropertyValue("width"))
window.addEventListener("resize", function () {
    x = (window.innerWidth - 1200) / 7
    y = parseFloat(window.getComputedStyle(imgSli1).getPropertyValue("width"))
})
imgSli1.style.left = 2 * x + "px"
imgSli2.style.left = 3 * x + y + "px"
imgSli3.style.left = 4 * x + 2 * y + "px"
imgSli4.style.left = 5 * x + 3 * y + "px"
imgSli5.style.left = 7 * x + 4 * y + "px"
imgSli6.style.left = 8 * x + 5 * y + "px"
imgSli7.style.left = -(x + y) + "px"
var flagRoomSlider = 0
var arrLeftSli = document.querySelector(".icon-arrow-left-room-slider")
var arrRightSli = document.querySelector(".icon-arrow-right-room-slider")
arrLeftSli.addEventListener("click", function () {
    if (flagRoomSlider == 0) {
        imgSli1.style.left = -(x + y) + "px"
        imgSli2.style.left = 2 * x + "px"
        imgSli3.style.left = 3 * x + y + "px"
        imgSli4.style.left = 4 * x + 2 * y + "px"
        imgSli5.style.left = 5 * x + 3 * y + "px"
        imgSli6.style.left = 7 * x + 4 * y + "px"
        imgSli7.style.left = 8 * x + 5 * y + "px"
        flagRoomSlider = 1
        imgSli7.style.display = "none"
        imgSli6.style.display = "block"
    } else if (flagRoomSlider == 1) {
        imgSli1.style.left = 8 * x + 5 * y + "px"
        imgSli2.style.left = -(x + y) + "px"
        imgSli3.style.left = 2 * x + "px"
        imgSli4.style.left = 3 * x + y + "px"
        imgSli5.style.left = 4 * x + 2 * y + "px"
        imgSli6.style.left = 5 * x + 3 * y + "px"
        imgSli7.style.left = 7 * x + 4 * y + "px"
        flagRoomSlider = 2
        imgSli1.style.display = "none"
        imgSli7.style.display = "block"
    } else if (flagRoomSlider == 2) {
        imgSli1.style.left = 7 * x + 4 * y + "px"
        imgSli2.style.left = 8 * x + 5 * y + "px"
        imgSli3.style.left = -(x + y) + "px"
        imgSli4.style.left = 2 * x + "px"
        imgSli5.style.left = 3 * x + y + "px"
        imgSli6.style.left = 4 * x + 2 * y + "px"
        imgSli7.style.left = 5 * x + 3 * y + "px"
        flagRoomSlider = 3
        imgSli2.style.display = "none"
        imgSli1.style.display = "block"
    } else if (flagRoomSlider == 3) {
        imgSli1.style.left = 5 * x + 3 * y + "px"
        imgSli2.style.left = 7 * x + 4 * y + "px"
        imgSli3.style.left = 8 * x + 5 * y + "px"
        imgSli4.style.left = -(x + y) + "px"
        imgSli5.style.left = 2 * x + "px"
        imgSli6.style.left = 3 * x + y + "px"
        imgSli7.style.left = 4 * x + 2 * y + "px"
        flagRoomSlider = 4
        imgSli3.style.display = "none"
        imgSli2.style.display = "block"
    } else if (flagRoomSlider == 4) {
        imgSli1.style.left = 4 * x + 2 * y + "px"
        imgSli2.style.left = 5 * x + 3 * y + "px"
        imgSli3.style.left = 7 * x + 4 * y + "px"
        imgSli4.style.left = 8 * x + 5 * y + "px"
        imgSli5.style.left = -(x + y) + "px"
        imgSli6.style.left = 2 * x + "px"
        imgSli7.style.left = 3 * x + y + "px"
        flagRoomSlider = 5
        imgSli4.style.display = "none"
        imgSli3.style.display = "block"
    } else if (flagRoomSlider == 5) {
        imgSli1.style.left = 3 * x + y + "px"
        imgSli2.style.left = 4 * x + 2 * y + "px"
        imgSli3.style.left = 5 * x + 3 * y + "px"
        imgSli4.style.left = 7 * x + 4 * y + "px"
        imgSli5.style.left = 8 * x + 5 * y + "px"
        imgSli6.style.left = -(x + y) + "px"
        imgSli7.style.left = 2 * x + "px"
        flagRoomSlider = 6
        imgSli5.style.display = "none"
        imgSli4.style.display = "block"
    } else if (flagRoomSlider == 6) {
        imgSli1.style.left = 2 * x + "px"
        imgSli2.style.left = 3 * x + y + "px"
        imgSli3.style.left = 4 * x + 2 * y + "px"
        imgSli4.style.left = 5 * x + 3 * y + "px"
        imgSli5.style.left = 7 * x + 4 * y + "px"
        imgSli6.style.left = 8 * x + 5 * y + "px"
        imgSli7.style.left = -(x + y) + "px"
        flagRoomSlider = 0
        imgSli6.style.display = "none"
        imgSli5.style.display = "block"
    }

})
arrRightSli.addEventListener("click", function () {
    if (flagRoomSlider == 0) {
        imgSli1.style.left = 3 * x + y + "px"
        imgSli2.style.left = 4 * x + 2 * y + "px"
        imgSli3.style.left = 5 * x + 3 * y + "px"
        imgSli4.style.left = 7 * x + 4 * y + "px"
        imgSli5.style.left = 8 * x + 5 * y + "px"
        imgSli6.style.left = -(x + y) + "px"
        imgSli7.style.left = 2 * x + "px"
        flagRoomSlider = 6
        imgSli5.style.display = "none"
        imgSli6.style.display = "block"
    } else if (flagRoomSlider == 6) {
        imgSli1.style.left = 4 * x + 2 * y + "px"
        imgSli2.style.left = 5 * x + 3 * y + "px"
        imgSli3.style.left = 7 * x + 4 * y + "px"
        imgSli4.style.left = 8 * x + 5 * y + "px"
        imgSli5.style.left = -(x + y) + "px"
        imgSli6.style.left = 2 * x + "px"
        imgSli7.style.left = 3 * x + y + "px"
        flagRoomSlider = 5
        imgSli4.style.display = "none"
        imgSli5.style.display = "block"
    } else if (flagRoomSlider == 5) {
        imgSli1.style.left = 5 * x + 3 * y + "px"
        imgSli2.style.left = 7 * x + 4 * y + "px"
        imgSli3.style.left = 8 * x + 5 * y + "px"
        imgSli4.style.left = -(x + y) + "px"
        imgSli5.style.left = 2 * x + "px"
        imgSli6.style.left = 3 * x + y + "px"
        imgSli7.style.left = 4 * x + 2 * y + "px"
        flagRoomSlider = 4
        imgSli3.style.display = "none"
        imgSli4.style.display = "block"
    } else if (flagRoomSlider == 4) {
        imgSli1.style.left = 7 * x + 4 * y + "px"
        imgSli2.style.left = 8 * x + 5 * y + "px"
        imgSli3.style.left = -(x + y) + "px"
        imgSli4.style.left = 2 * x + "px"
        imgSli5.style.left = 3 * x + y + "px"
        imgSli6.style.left = 4 * x + 2 * y + "px"
        imgSli7.style.left = 5 * x + 3 * y + "px"
        flagRoomSlider = 3
        imgSli2.style.display = "none"
        imgSli3.style.display = "block"
    } else if (flagRoomSlider == 3) {
        imgSli1.style.left = 8 * x + 5 * y + "px"
        imgSli2.style.left = -(x + y) + "px"
        imgSli3.style.left = 2 * x + "px"
        imgSli4.style.left = 3 * x + y + "px"
        imgSli5.style.left = 4 * x + 2 * y + "px"
        imgSli6.style.left = 5 * x + 3 * y + "px"
        imgSli7.style.left = 7 * x + 4 * y + "px"
        flagRoomSlider = 2
        imgSli1.style.display = "none"
        imgSli2.style.display = "block"
    } else if (flagRoomSlider == 2) {
        imgSli1.style.left = -(x + y) + "px"
        imgSli2.style.left = 2 * x + "px"
        imgSli3.style.left = 3 * x + y + "px"
        imgSli4.style.left = 4 * x + 2 * y + "px"
        imgSli5.style.left = 5 * x + 3 * y + "px"
        imgSli6.style.left = 7 * x + 4 * y + "px"
        imgSli7.style.left = 8 * x + 5 * y + "px"
        flagRoomSlider = 1
        imgSli7.style.display = "none"
        imgSli1.style.display = "block"
    } else if (flagRoomSlider == 1) {
        imgSli1.style.left = 2 * x + "px"
        imgSli2.style.left = 3 * x + y + "px"
        imgSli3.style.left = 4 * x + 2 * y + "px"
        imgSli4.style.left = 5 * x + 3 * y + "px"
        imgSli5.style.left = 7 * x + 4 * y + "px"
        imgSli6.style.left = 8 * x + 5 * y + "px"
        imgSli7.style.left = -(x + y) + "px"
        flagRoomSlider = 0
        imgSli6.style.display = "none"
        imgSli7.style.display = "block"
    }
})
// ////////////////////////////////////////////////
var facilities = document.querySelector(".facilities")
facilities.style.top = window.innerHeight + 1900 + "px"
window.addEventListener("resize", function () {
    facilities.style.top = window.innerHeight + 1900 + "px"
})

// //////////////////////////////////////////////////

var extra = document.querySelector(".extra-service")
extra.style.top = window.innerHeight + 2500 + "px"
window.addEventListener("resize", function () {
    extra.style.top = window.innerHeight + 2500 + "px"
})
var extraImage1 = document.querySelector(".image1-extra-service")
var expExtraImage1 = document.querySelector(".explanation-image1-extra-service")
extraImage1.addEventListener("mouseenter", function () {
    expExtraImage1.style.left = "450px"
})
extraImage1.addEventListener("mouseleave", function () {
    expExtraImage1.style.left = "100px"
})
expExtraImage1.addEventListener("mouseenter", function () {
    expExtraImage1.style.left = "450px"
})
expExtraImage1.addEventListener("mouseleave", function () {
    expExtraImage1.style.left = "100px"
})



var extraImage2 = document.querySelector(".image2-extra-service")
var expExtraImage2 = document.querySelector(".explanation-image2-extra-service")
extraImage2.addEventListener("mouseenter", function () {
    expExtraImage2.style.left = "1150px"
})
extraImage2.addEventListener("mouseleave", function () {
    expExtraImage2.style.left = "800px"
})
expExtraImage2.addEventListener("mouseenter", function () {
    expExtraImage2.style.left = "1150px"
})
expExtraImage2.addEventListener("mouseleave", function () {
    expExtraImage2.style.left = "800px"
})




var extraImage3 = document.querySelector(".image3-extra-service")
var expExtraImage3 = document.querySelector(".explanation-image3-extra-service")
extraImage3.addEventListener("mouseenter", function () {
    expExtraImage3.style.left = "100px"
})
extraImage3.addEventListener("mouseleave", function () {
    expExtraImage3.style.left = "450px"
})
expExtraImage3.addEventListener("mouseenter", function () {
    expExtraImage3.style.left = "100px"
})
expExtraImage3.addEventListener("mouseleave", function () {
    expExtraImage3.style.left = "450px"
})


var extraImage4 = document.querySelector(".image4-extra-service")
var expExtraImage4 = document.querySelector(".explanation-image4-extra-service")
extraImage4.addEventListener("mouseenter", function () {
    expExtraImage4.style.left = "800px"
})
extraImage4.addEventListener("mouseleave", function () {
    expExtraImage4.style.left = "1150px"
})
expExtraImage4.addEventListener("mouseenter", function () {
    expExtraImage4.style.left = "800px"
})
expExtraImage4.addEventListener("mouseleave", function () {
    expExtraImage4.style.left = "1150px"
})
// ////////////////////////////////////////////////////////////
var videoBox = document.querySelector(".video-box")
var iconPlay = document.querySelector(".icon-video-box")
var myvideo = document.querySelector(".my-video")
var bgMyvideo = document.querySelector(".bg-myvideo")
var iconCloseVideo = document.querySelector(".icon-close-myvideo")

videoBox.style.top = window.innerHeight + 3300 + "px"
window.addEventListener("resize", function () {
    videoBox.style.top = window.innerHeight + 3300 + "px"
})
iconPlay.addEventListener("click", function () {
    myvideo.style.opacity = "1"
    myvideo.style.visibility = "visible"
    myvideo.play()
    bgMyvideo.style.display = "block"
    iconCloseVideo.style.display = "inline"
    document.body.style.overflow = "hidden"
})
bgMyvideo.addEventListener("click", function () {
    myvideo.style.opacity = "0"
    myvideo.style.visibility = "hidden"
    myvideo.pause()
    bgMyvideo.style.display = "none"
    iconCloseVideo.style.display = "none"
    document.body.style.overflow = "visible"
})
iconCloseVideo.addEventListener("click", function () {
    myvideo.style.opacity = "0"
    myvideo.style.visibility = "hidden"
    myvideo.pause()
    bgMyvideo.style.display = "none"
    iconCloseVideo.style.display = "none"
    document.body.style.overflow = "visible"
})
/////////////////////////////////////////////////////////////
var ourClient = document.querySelector(".our-client-box")
ourClient.style.top = window.innerHeight + 3800 + "px"
window.addEventListener("resize", function () {
    ourClient.style.top = window.innerHeight + 3800 + "px"
})
var btnOurSlider1 = document.querySelector(".button-our-client-slider1")
var btnOurSlider2 = document.querySelector(".button-our-client-slider2")
var btnOurSlider3 = document.querySelector(".button-our-client-slider3")
var imgOurSlider1 = document.querySelector(".our-client-slider-box1")
var imgOurSlider2 = document.querySelector(".our-client-slider-box2")
var imgOurSlider3 = document.querySelector(".our-client-slider-box3")
var imgOurSlider4 = document.querySelector(".our-client-slider-box4")
var imgOurSlider5 = document.querySelector(".our-client-slider-box5")
var imgOurSlider6 = document.querySelector(".our-client-slider-box6")
var imgOurSlider7 = document.querySelector(".our-client-slider-box7")
var imgOurSlider8 = document.querySelector(".our-client-slider-box8")
btnOurSlider1.addEventListener("click", function () {
    imgOurSlider1.style.left = "0%"
    imgOurSlider2.style.left = "0%"
    imgOurSlider3.style.left = "0%"
    imgOurSlider4.style.left = "0%"
    imgOurSlider5.style.left = "0%"
    imgOurSlider6.style.left = "0%"
    imgOurSlider7.style.left = "0%"
    imgOurSlider8.style.left = "0%"
    btnOurSlider1.style.backgroundColor = "rgb(212, 120, 87)"
    btnOurSlider2.style.backgroundColor = "rgb(179, 185, 190)"
    btnOurSlider3.style.backgroundColor = "rgb(179, 185, 190)"
})
btnOurSlider2.addEventListener("click", function () {
    imgOurSlider1.style.left = "-102%"
    imgOurSlider2.style.left = "-102%"
    imgOurSlider3.style.left = "-102%"
    imgOurSlider4.style.left = "-102%"
    imgOurSlider5.style.left = "-102%"
    imgOurSlider6.style.left = "-102%"
    imgOurSlider7.style.left = "-102%"
    imgOurSlider8.style.left = "-102%"
    btnOurSlider1.style.backgroundColor = "rgb(179, 185, 190)"
    btnOurSlider2.style.backgroundColor = "rgb(212, 120, 87)"
    btnOurSlider3.style.backgroundColor = "rgb(179, 185, 190)"
})
btnOurSlider3.addEventListener("click", function () {
    imgOurSlider1.style.left = "-170%"
    imgOurSlider2.style.left = "-170%"
    imgOurSlider3.style.left = "-170%"
    imgOurSlider4.style.left = "-170%"
    imgOurSlider5.style.left = "-170%"
    imgOurSlider6.style.left = "-170%"
    imgOurSlider7.style.left = "-170%"
    imgOurSlider8.style.left = "-170%"
    btnOurSlider1.style.backgroundColor = "rgb(179, 185, 190)"
    btnOurSlider2.style.backgroundColor = "rgb(179, 185, 190)"
    btnOurSlider3.style.backgroundColor = "rgb(212, 120, 87)"
})
// //////////////////////////////////////////////////////////
var news = document.querySelector(".news")
news.style.top = window.innerHeight + 4400 + "px"
window.addEventListener("resize", function () {
    news.style.top = window.innerHeight + 4400 + "px"
})
var newsImg1 = document.querySelector(".news-img1")
var newsImg2 = document.querySelector(".news-img2")
var newsImg3 = document.querySelector(".news-img3")
var desNewsImg1 = document.querySelector(".description-news-img1")
var desNewsImg2 = document.querySelector(".description-news-img2")
var desNewsImg3 = document.querySelector(".description-news-img3")
newsImg1.addEventListener("mouseenter", function () {
    desNewsImg1.style.bottom = "-200px"
})
newsImg1.addEventListener("mouseleave", function () {
    desNewsImg1.style.bottom = "0"
})
desNewsImg1.addEventListener("mouseenter", function () {
    desNewsImg1.style.bottom = "-200px"
})
desNewsImg1.addEventListener("mouseleave", function () {
    desNewsImg1.style.bottom = "0"
})

newsImg2.addEventListener("mouseenter", function () {
    desNewsImg2.style.bottom = "-200px"
})
newsImg2.addEventListener("mouseleave", function () {
    desNewsImg2.style.bottom = "0"
})
desNewsImg2.addEventListener("mouseenter", function () {
    desNewsImg2.style.bottom = "-200px"
})
desNewsImg2.addEventListener("mouseleave", function () {
    desNewsImg2.style.bottom = "0"
})

newsImg3.addEventListener("mouseenter", function () {
    desNewsImg3.style.bottom = "-200px"
})
newsImg3.addEventListener("mouseleave", function () {
    desNewsImg3.style.bottom = "0"
})
desNewsImg3.addEventListener("mouseenter", function () {
    desNewsImg3.style.bottom = "-200px"
})
desNewsImg3.addEventListener("mouseleave", function () {
    desNewsImg3.style.bottom = "0"
})

// ///////////////////////////////////////////////////
var bookRoom = document.querySelector(".book-room")
bookRoom.style.top = window.innerHeight + 5200 + "px"
window.addEventListener("resize", function () {
    bookRoom.style.top = window.innerHeight + 5200 + "px"
})
// /////////////////////////////////////////////////
var footer = document.querySelector(".footer")
footer.style.top = window.innerHeight + 5800 + "px"
window.addEventListener("resize", function () {
    footer.style.top = window.innerHeight + 5800 + "px"
})


// /////////////////////////////////////////
var iconList = document.querySelector(".icon-list")
var bHamMenu = document.querySelector(".box-hamberger-menu")
var bCHamMenu = document.querySelector(".box-color-hamberger-menu")
var iconListRes = document.querySelector(".icon-main-nav-bar-responsive")
var iconListRespons = document.querySelector(".icon-list-responsiv")
var bHamMenuRes = document.querySelector(".box-hamberger-menu-responsive")
var iconClose = document.querySelector(".icon-close")
var iconClose2 = document.querySelector(".icon-close2")
iconList.addEventListener("click", function () {
    bHamMenu.style.transform = "translateX(-100%)"
    bCHamMenu.style.opacity = "1"
    bCHamMenu.style.visibility = "visible"
    document.body.style.overflowY = "hidden"
})
bCHamMenu.addEventListener("click", function () {
    bCHamMenu.style.opacity = "0"
    bCHamMenu.style.visibility = "hidden"
    bHamMenu.style.transform = "translateX(0)"
    bHamMenuRes.style.transform = "translateX(0)"
    document.body.style.overflowY = "visible"
})
iconClose.addEventListener("click", function () {
    bCHamMenu.style.opacity = "0"
    bCHamMenu.style.visibility = "hidden"
    bHamMenu.style.transform = "translateX(0)"
    bHamMenuRes.style.transform = "translateX(0)"
    document.body.style.overflowY = "visible"
})
iconClose2.addEventListener("click", function () {
    bCHamMenu.style.opacity = "0"
    bCHamMenu.style.visibility = "hidden"
    bHamMenu.style.transform = "translateX(0)"
    bHamMenuRes.style.transform = "translateX(0)"
    document.body.style.overflowY = "visible"
})


iconListRes.addEventListener("click", function () {
    bHamMenuRes.style.transform = "translateX(-100%)"
    bCHamMenu.style.opacity = "1"
    bCHamMenu.style.visibility = "visible"
    document.body.style.overflowY = "hidden"
})
iconListRespons.addEventListener("click", function () {
    bHamMenuRes.style.transform = "translateX(0%)"
    bCHamMenu.style.opacity = "1"
    bCHamMenu.style.visibility = "visible"
    bHamMenu.style.transform = "translateX(-100%)"
    document.body.style.overflowY = "hidden"
})

var iconPlusHome = document.querySelector(".icon-title-home-box-hamberger-menu-responsive")
var iconPlusRoom = document.querySelector(".icon-title-room-box-hamberger-menu-responsive")
var iconPlusTour = document.querySelector(".icon-title-tour-box-hamberger-menu-responsive")
var iconPlusPage = document.querySelector(".icon-title-page-box-hamberger-menu-responsive")
var iconMinHome = document.querySelector(".icon-remove-title-home-box-hamberger-menu-responsive")
var iconMinRoom = document.querySelector(".icon-remove-title-room-box-hamberger-menu-responsive")
var iconMinTour = document.querySelector(".icon-remove-title-tour-box-hamberger-menu-responsive")
var iconMinPage = document.querySelector(".icon-remove-title-page-box-hamberger-menu-responsive")
var subPlusHome = document.querySelector(".subset-title-home-box-hamberger-menu-responsive")
var subPlusRoom = document.querySelector(".subset-title-room-box-hamberger-menu-responsive")
var subPlusTour = document.querySelector(".subset-title-tour-box-hamberger-menu-responsive")
var subPlusPage = document.querySelector(".subset-title-page-box-hamberger-menu-responsive")
iconPlusHome.addEventListener("click", function () {
    subPlusHome.style.height = "100px"
    iconPlusHome.style.display = "none"
    iconMinHome.style.display = "inline"
})
iconMinHome.addEventListener("click", function () {
    subPlusHome.style.height = "0px"
    iconPlusHome.style.display = "inline"
    iconMinHome.style.display = "none"
})
iconPlusRoom.addEventListener("click", function () {
    subPlusRoom.style.height = "150px"
    iconPlusRoom.style.display = "none"
    iconMinRoom.style.display = "inline"
})
iconMinRoom.addEventListener("click", function () {
    subPlusRoom.style.height = "0px"
    iconPlusRoom.style.display = "inline"
    iconMinRoom.style.display = "none"
})


iconPlusTour.addEventListener("click", function () {
    subPlusTour.style.height = "100px"
    iconPlusTour.style.display = "none"
    iconMinTour.style.display = "inline"
})
iconMinTour.addEventListener("click", function () {
    subPlusTour.style.height = "0px"
    iconPlusTour.style.display = "inline"
    iconMinTour.style.display = "none"
})


iconPlusPage.addEventListener("click", function () {
    subPlusPage.style.height = "600px"
    iconPlusPage.style.display = "none"
    iconMinPage.style.display = "inline"
})
iconMinPage.addEventListener("click", function () {
    subPlusPage.style.height = "0px"
    iconPlusPage.style.display = "inline"
    iconMinPage.style.display = "none"
})
// /////////////////////////////////////////////////




var d = new Date()
console.log(d.getDate())
console.log(d.getMonth())
console.log(d.getFullYear())


var day1 = d.getDate()
var day2 = d.getDate() + 1
var month = ""
var month1 = ""
var month2 = ""
if (d.getMonth() == 0) {
    month = "JANUARY"
} else if (d.getMonth() == 1) {
    month = "FEBRUARY"
} else if (d.getMonth() == 2) {
    month = "MARCH"
} else if (d.getMonth() == 3) {
    month = "APRIL"
} else if (d.getMonth() == 4) {
    month = "MAY"
} else if (d.getMonth() == 5) {
    month = "JUNE"
} else if (d.getMonth() == 6) {
    month = "JULY"
} else if (d.getMonth() == 7) {
    month = "AUGUST"
} else if (d.getMonth() == 8) {
    month = "SEPTEMBER"
} else if (d.getMonth() == 9) {
    month = "OCTOBER"
} else if (d.getMonth() == 10) {
    month = "NOVEMBER"
} else if (d.getMonth() == 11) {
    month = "DECEMBER"
}
var years = d.getFullYear()










var boxChoiceUser = document.querySelector(".box-choice-slide-down")
var boxChoiceUserBook = document.querySelector(".box-choice-slide-down-book")
var bgChoiceUser = document.querySelector(".bg-choice-box")
var bgChoiceUserBook = document.querySelector(".bg-choice-box-book")
var choiceUser = document.querySelector(".choice-user")
var choiceUserBook = document.querySelector(".choice-user-book")
var addAdult = document.querySelector(".icon-add-choice-adult")
var addAdultBook = document.querySelector(".icon-add-choice-adult-book")
var addChildren = document.querySelector(".icon-add-choice-children")
var addChildrenBook = document.querySelector(".icon-add-choice-children-book")
var remAdult = document.querySelector(".icon-remove-choice-adult")
var remAdultBook = document.querySelector(".icon-remove-choice-adult-book")
var remChildren = document.querySelector(".icon-remove-choice-children")
var remChildrenBook = document.querySelector(".icon-remove-choice-children-book")
var numAdult = document.querySelector(".num-box-adult")
var numAdultBook = document.querySelector(".num-box-adult-book")
var numChildren = document.querySelector(".num-box-children")
var numChildrenBook = document.querySelector(".num-box-children-book")
var txtChoice = document.querySelector(".text-choice-user")
var txtChoiceBook = document.querySelector(".text-choice-user-book")
var myDate = document.querySelector(".my-date")
var myDateBook = document.querySelector(".my-date-book")
var boxDate = document.querySelector(".box-date-slide-down")
var boxDateBook = document.querySelector(".box-date-slide-down-book")
var txtMydate = document.querySelector(".text-mydate")
var txtMydateBook = document.querySelector(".text-mydate-book")
var nDayMydate = document.querySelectorAll(".n-day-mydate")
var nDayMydate2 = document.querySelectorAll(".n-day-mydate2")
txtMydate.innerHTML = `${month} ${day1} ${years} - ${month} ${day2} ${years}`
txtMydateBook.innerHTML = `${month} ${day1} ${years} - ${month} ${day2} ${years}`
var numdate = 0 
var nAdult = 1
var nAdultBook = 1
var nChildren = 0
var nChildrenBook = 0
addAdult.addEventListener("click", function (e) {
    e.stopPropagation()
    nAdult += 1
    numAdult.innerHTML = nAdult
    txtChoice.innerHTML = `${nAdult} Adult , ${nChildren} Child`
})
remAdult.addEventListener("click", function (e) {
    e.stopPropagation()
    if (nAdult > 1) {
        nAdult -= 1
        numAdult.innerHTML = nAdult
    }
    txtChoice.innerHTML = `${nAdult} Adult , ${nChildren} Child`
})


addChildren.addEventListener("click", function (e) {
    e.stopPropagation()
    nChildren += 1
    numChildren.innerHTML = nChildren
    txtChoice.innerHTML = `${nAdult} Adult , ${nChildren} Child`
})
remChildren.addEventListener("click", function (e) {
    e.stopPropagation()
    if (nChildren > 0) {
        nChildren -= 1
        numChildren.innerHTML = nChildren
    }
    txtChoice.innerHTML = `${nAdult} Adult , ${nChildren} Child`
})
var flagChoice = 0
var flagChoiceBook = 0
var flagDate = 0
var flagDateBook = 0
choiceUser.addEventListener("click", function (e) {
    e.preventDefault()
    e.stopPropagation()
    if (flagChoice == 0) {
        boxChoiceUser.style.height = "250px"
        boxChoiceUser.style.opacity = "1"
        boxChoiceUser.style.top = "100%"
        boxChoiceUser.style.border = "black"
        bgChoiceUser.style.display = "block"
        boxDate.style.height = "0px"
        flagChoice = 1
        flagDate = 0

    } else if (flagChoice == 1) {
        boxChoiceUser.style.height = "0px"
        boxChoiceUser.style.top = "50%"
        boxChoiceUser.style.border = "rgba(0, 0, 0, 0)"
        boxChoiceUser.style.opacity = "0"
        bgChoiceUser.style.display = "none"
        flagChoice = 0
    }

})

bgChoiceUser.addEventListener("click", function () {
    boxChoiceUser.style.height = "0px"
    boxChoiceUser.style.top = "50%"
    boxChoiceUser.style.border = "rgba(0, 0, 0, 0)"
    boxChoiceUser.style.opacity = "0"
    bgChoiceUser.style.display = "none"
    boxDate.style.height = "0px"
    flagChoice = 0
    flagDate = 0
})






myDate.addEventListener("click", function (e) {
    e.stopPropagation()
    e.preventDefault()
    if (flagDate == 0) {
        boxDate.style.height = "300px"
        bgChoiceUser.style.display = "block"
        boxChoiceUser.style.height = "0px"
        boxChoiceUser.style.top = "50%"
        boxChoiceUser.style.border = "rgba(0, 0, 0, 0)"
        boxChoiceUser.style.opacity = "0"
        flagChoice = 0
        flagDate = 1
        nDayMydate.forEach(function(e){
            e.style.backgroundColor = "transparent"
        })
        nDayMydate2.forEach(function(e){
            e.style.backgroundColor = "transparent"
        })
    } else if (flagDate == 1) {
        boxDate.style.height = "0px"
        bgChoiceUser.style.display = "none"
        flagDate = 0

    }
})
boxDate.addEventListener("click", function (e) {
    e.stopPropagation()
    e.preventDefault()
})


myDateBook.addEventListener("click", function (e) {
    e.preventDefault()
    e.stopPropagation()
    if (flagDateBook == 0) {
        nDayMydate.forEach(function(e){
            e.style.backgroundColor = "transparent"
        })
        nDayMydate2.forEach(function(e){
            e.style.backgroundColor = "transparent"
        })
        boxDateBook.style.height = "300px"
        bgChoiceUserBook.style.display = "block"
        boxChoiceUserBook.style.height = "0px"
        boxChoiceUserBook.style.top = "50%"
        boxChoiceUserBook.style.border = "rgba(0, 0, 0, 0)"
        boxChoiceUserBook.style.opacity = "0"
        flagChoiceBook = 0
        flagDateBook = 1
    } else if (flagDateBook == 1) {
        boxDateBook.style.height = "0px"
        bgChoiceUserBook.style.display = "none"
        flagDateBook = 0
    }
})

boxDateBook.addEventListener("click", function (e) {
    e.preventDefault()
    e.stopPropagation()

})

bgChoiceUserBook.addEventListener("click", function () {
    boxDateBook.style.height = "0px"
    bgChoiceUserBook.style.display = "none"
    boxChoiceUserBook.style.height = "0px"
    boxChoiceUserBook.style.top = "50%"
    boxChoiceUserBook.style.border = "rgba(0, 0, 0, 0)"
    boxChoiceUserBook.style.opacity = "0"
    bgChoiceUserBook.style.display = "none"
    flagChoiceBook = 0
    flagDateBook = 0
})




addAdultBook.addEventListener("click", function (e) {
    e.stopPropagation()
    nAdultBook += 1
    numAdultBook.innerHTML = nAdultBook
    txtChoiceBook.innerHTML = `${nAdultBook} Adult , ${nChildrenBook} Child`
})
remAdultBook.addEventListener("click", function (e) {
    e.stopPropagation()
    if (nAdultBook > 1) {
        nAdultBook -= 1
        numAdultBook.innerHTML = nAdultBook
    }
    txtChoiceBook.innerHTML = `${nAdultBook} Adult , ${nChildrenBook} Child`
})




choiceUserBook.addEventListener("click", function (e) {
    e.preventDefault()
    e.stopPropagation()
    if (flagChoiceBook == 0) {
        boxChoiceUserBook.style.height = "250px"
        boxChoiceUserBook.style.opacity = "1"
        boxChoiceUserBook.style.top = "100%"
        boxChoiceUserBook.style.border = "black"
        bgChoiceUserBook.style.display = "block"
        boxDateBook.style.height = "0px"
        flagChoiceBook = 1
        flagDateBook = 0

    } else if (flagChoiceBook == 1) {
        boxChoiceUserBook.style.height = "0px"
        boxChoiceUserBook.style.top = "50%"
        boxChoiceUserBook.style.border = "rgba(0, 0, 0, 0)"
        boxChoiceUserBook.style.opacity = "0"
        bgChoiceUserBook.style.display = "none"
        flagChoiceBook = 0
    }

})


addChildrenBook.addEventListener("click", function (e) {
    e.stopPropagation()
    nChildrenBook += 1
    numChildrenBook.innerHTML = nChildrenBook
    txtChoiceBook.innerHTML = `${nAdultBook} Adult , ${nChildrenBook} Child`
})
remChildrenBook.addEventListener("click", function (e) {
    e.stopPropagation()
    if (nChildrenBook > 0) {
        nChildrenBook -= 1
        numChildrenBook.innerHTML = nChildrenBook
    }
    txtChoiceBook.innerHTML = `${nAdultBook} Adult , ${nChildrenBook} Child`
})




nDayMydate.forEach(function (e) {
   
    e.addEventListener("click", function () {
        
        if (numdate == 0) {
            
            e.style.backgroundColor = "red"
            day1 = e.innerHTML
            month1 = "MAY"
            txtMydate.innerHTML = `${month1} ${day1} ${years} - ${month} ${day2} ${years}`
            txtMydateBook.innerHTML = `${month1} ${day1} ${years} - ${month} ${day2} ${years}`
            numdate = 1

        } else if (numdate == 1) {
            day2 = e.innerHTML
            e.style.backgroundColor = "red"
            month2 = "MAY"
            txtMydate.innerHTML = `${month1} ${day1} ${years} - ${month2} ${day2} ${years}`
            txtMydateBook.innerHTML = `${month1} ${day1} ${years} - ${month2} ${day2} ${years}`
            boxDate.style.height = "0px"
            bgChoiceUser.style.display = "none"
            boxDateBook.style.height = "0px"
            bgChoiceUserBook.style.display = "none"
            flagDateBook = 0
            flagDate = 0
            numdate = 0
        }

    })
})
nDayMydate2.forEach(function(e){
    e.addEventListener("click" , function(){
        if (numdate == 0) {
            e.style.backgroundColor = "red"
            day1 = e.innerHTML
            txtMydate.innerHTML = `${month} ${day1} ${years} - ${month} ${day2} ${years}`
            txtMydateBook.innerHTML = `${month} ${day1} ${years} - ${month} ${day2} ${years}`
            numdate = 1

        } else if (numdate == 1) {
            e.style.backgroundColor = "red"
            day2 = e.innerHTML
            month2 = "JUNE"
            txtMydate.innerHTML = `${month1} ${day1} ${years} - ${month2} ${day2} ${years}`
            txtMydateBook.innerHTML = `${month1} ${day1} ${years} - ${month2} ${day2} ${years}`
            boxDate.style.height = "0px"
            bgChoiceUser.style.display = "none"
            boxDateBook.style.height = "0px"
            bgChoiceUserBook.style.display = "none"
            flagDateBook = 0
            flagDate = 0
            numdate = 0
        }
    })
})








































