function hideLoader() {
    $('#loading').hide();
}

// $(window).ready(hideLoader);
$(document).ready(function () {
    setTimeout(hideLoader, 1700);
});




ymaps.ready(init);
function init() {

    var map = new ymaps.Map('map', {
        center: [47.21712770, 39.71584449],
        zoom: 18,
        controls: ['zoomControl'],
        behaviors: ['drag']
    });
    var placemark = new ymaps.Placemark([47.21712770, 39.71584449], {
        hintContent: "Не Горюй",
        balloonContent: "улица Тургеневская дом 50"
    },
        { iconColor: '#ff0000' }
    );

    map.geoObjects.add(placemark);
}


$(document).ready(function () {

    if ($(window).width() > 479) {
        var $mainPageContext = $(".x-main-page");

        if ($mainPageContext.length) {
            // var scene = document.getElementById("scene");
            // var parallaxInstance = new Parallax(scene,
            //     // { relativeInput: true },
            //     { limitX: true })

            var rellax = new Rellax('.rellax');
        }

        // scripts for menu-item-page
        var $menuItemPageContext = $(".x-menu-item-page"),
            overlayActiveClass = "menu-item-page__overlay--active",
            backdropActiveClass = "menu-item-page__backdrop--active",
            menuImageActiveClass = "menu-item__image--increased";

        $(".x-menu-item", $menuItemPageContext).on("click", function () {
            var $localContext = $(this),
                $image = $(".x-menu-image", $localContext),
                top = $image.offset().top - $(window).scrollTop(),
                left = $image.offset().left,
                width = $image.outerWidth();

            localStorage.setItem(`top`, top);
            localStorage.setItem(`left`, left);
            localStorage.setItem(`width`, width);
            console.log(localStorage);

            $image
                .css({ position: "fixed", top: top, left: left, width: width, margin: 0 })
                .addClass(menuImageActiveClass)
                .addClass("menu-item__image--increased")
                .animate(
                    {
                        top: "50%",
                        left: "50%",
                        // marginTop: "-196px",
                        // marginLeft: "-300px",
                        width: "40%"
                    },
                    300
                )
                .css({ transform: 'translate(-50%, -50%)' })

            $("body").css({ overflow: "hidden" });

            $(".x-backdrop", $menuItemPageContext).addClass(backdropActiveClass);
            $(".x-overlay", $menuItemPageContext).addClass(overlayActiveClass);
        });

        $(".x-overlay", $menuItemPageContext).on("click", function () {
            // $(".x-backdrop").fadeOut("slow");
            $(this).removeClass(overlayActiveClass);
            $(".x-backdrop", $menuItemPageContext).removeClass(backdropActiveClass);

            var top = localStorage.getItem("top");
            console.log(top);
            var left = localStorage.getItem(`left`, left);
            var width = localStorage.getItem(`width`, width);

            $image1 = $("." + menuImageActiveClass);



            $image1.animate(
                {
                    // position: "inherit",
                    top: top,
                    left: left,
                    width: width,
                    marginTop: "60px",
                    marginLeft: '100px'
                },
                300
            );

            // setTimeout(() => {
            //     $image1.css({
            //         transform: "translate(0% , 0%)"
            //     });
            // }, 200);



            setTimeout(() => {
                $image1.css({
                    objectFit: "contain",
                    position: "inherit"
                });
                $image1.removeClass("menu-item__image--increased");
            }, 250);

            setTimeout(() => {
                $("body").css({ overflow: "inherit" });
            }, 300);
        });
    }


    $('#dropdown-wrapper').click(function () {
        console.log('clicked');
        $('.icon').toggleClass("closed")
        $('.header-modal').toggleClass("header-modal--active");
        $('body').toggleClass('b__overflow');
    });





});



var modal = document.getElementById('myModal');
var gallery = document.getElementsByClassName('gallery-pictures')[0];
var modalImg = document.getElementById("img01");
console.log(gallery);

if ($(window).width() > 479) {
    gallery.addEventListener('click', (event) => {
        const image = event.target.closest("img");
        console.log(image);

        modal.style.display = "block";
        modalImg.src = image.src;
    })

    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on<span>(x), close the modal
    span.onclick = function () {
        modalImg.src = undefined;
        modal.style.display = "none";
    }

}




// const UserName = document.getElementById('username'),
//     button = document.getElementById('submit_button'),
//     telephone = document.getElementById('number'),
//     date = document.getElementById('date');


// button.addEventListener('click', send, false);

// function send() {
//     const number = telephone.value.replace(/\D/g, '');
//     const text = date.value;
//     console.log(number);


//     fetch('/', {
//         method: 'post',
//         headers: {
//             'Content-type': 'application/json'
//         },
//         body: JSON.stringify({ number: number, text: text })
//     })
//         .then(function (res) {
//             console.log(res);
//         })
//         .catch(function (err) {
//             console.log(err);
//         })
// }




$(document).ready(function () {
    var username_sms,
        telephoneNumber_sms,
        banketDate_sms,
        gosti_sms;
    $("#submit_button").click(function () {
        username_sms = $("#username_sms").val();
        telephoneNumber_sms = $("#telephoneNumber_sms").val();
        banketDate_sms = $("#banketDate_sms").val();
        gosti_sms = $("#gosti_sms").val();

        $.get("https://negoruirnd.ru/send", { username_sms: username_sms, telephoneNumber_sms: telephoneNumber_sms, banketDate_sms: banketDate_sms, gosti_sms: gosti_sms });
    });
});



