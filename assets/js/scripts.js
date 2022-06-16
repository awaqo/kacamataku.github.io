$(document).ready(function () {
    $('.multiple-items').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 2,
        prevArrow: $('.lg-prev'),
        nextArrow: $('.lg-next')
      });

    $('.single-item').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: $('.prev'),
        nextArrow: $('.next')
    });  
});

$(document).ready(function () {
    var main_url ="https://api.whatsapp.com/send?phone=6289677464708&text=Hallo%20saya%20ingin%20membeli%20kacamata%20dengan%20tipe%20";
    var second_url = "%20dan%20warna%20frame%20"
    var tipe_kacamata = "";
    var frame_kacamata = "";

    $(".tipe_kacamata").click(function () {
        tipe_kacamata = $(this).val();
        if (tipe_kacamata == "Photocromic") {
            $("#harga_satuan").text("Rp 75.000");
            $('#star_review').html("<li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star-half-stroke'></i></li>")
            $("#review").text("876 Reviews");
            $("#tipe_kacamata_1").removeClass("btn-outline-dark");
            $("#tipe_kacamata_1").addClass("btn-dark");

            $("#tipe_kacamata_2").addClass("btn-outline-dark");
            $("#tipe_kacamata_2").removeClass("btn-dark");

            $("#tipe_kacamata_3").addClass("btn-outline-dark");
            $("#tipe_kacamata_3").removeClass("btn-dark");

            $("#tipe_kacamata_4").addClass("btn-outline-dark");
            $("#tipe_kacamata_4").removeClass("btn-dark");
            
        } else if (tipe_kacamata == "Radiasi") {
            $("#harga_satuan").text("Rp 75.000");
            $("#review").text("671 Reviews");                
            $("#star_review").html("<li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-regular fa-star'></i></li>")
            $("#tipe_kacamata_1").addClass("btn-outline-dark");
            $("#tipe_kacamata_1").removeClass("btn-dark");
            
            $("#tipe_kacamata_2").removeClass("btn-outline-dark");
            $("#tipe_kacamata_2").addClass("btn-dark");
            
            $("#tipe_kacamata_3").addClass("btn-outline-dark");
            $("#tipe_kacamata_3").removeClass("btn-dark");
            
            $("#tipe_kacamata_4").addClass("btn-outline-dark");
            $("#tipe_kacamata_4").removeClass("btn-dark");
            
        } else if (tipe_kacamata == "Minus") {
            $("#harga_satuan").text("Rp 155.000");
            $("#review").text("525 Reviews");                
            $("#star_review").html("<li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star-half-stroke'></i></li>")
            $("#tipe_kacamata_1").addClass("btn-outline-dark");
            $("#tipe_kacamata_1").removeClass("btn-dark");
            
            $("#tipe_kacamata_2").addClass("btn-outline-dark");
            $("#tipe_kacamata_2").removeClass("btn-dark");

            $("#tipe_kacamata_3").removeClass("btn-outline-dark");
            $("#tipe_kacamata_3").addClass("btn-dark");

            $("#tipe_kacamata_4").addClass("btn-outline-dark");
            $("#tipe_kacamata_4").removeClass("btn-dark");

        } else if (tipe_kacamata == "Photocromic & Radiasi") {
            $("#harga_satuan").text("Rp 110.000");
            $("#review").text("741 Reviews");                
            $("#star_review").html("<li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star-half-stroke'></i></li>")
            $("#tipe_kacamata_1").addClass("btn-outline-dark");
            $("#tipe_kacamata_1").removeClass("btn-dark");

            $("#tipe_kacamata_2").addClass("btn-outline-dark");
            $("#tipe_kacamata_2").removeClass("btn-dark");
            
            $("#tipe_kacamata_3").addClass("btn-outline-dark");
            $("#tipe_kacamata_3").removeClass("btn-dark");
            
            $("#tipe_kacamata_4").removeClass("btn-outline-dark");
            $("#tipe_kacamata_4").addClass("btn-dark");
        }
        
        var temp_tipe_kacamata = tipe_kacamata;
        var temp_frame_kacamata = frame_kacamata;
        
        if (tipe_kacamata != "" && frame_kacamata != "") {
            $("#order_link").addClass("btn-success");
            $("#order_link").removeClass("disabled");
            $("#order_link").removeClass("text-muted");
            $("#order_link").removeClass("btn-secondary");
        }
        
        $("#order_link").attr("href", main_url + temp_tipe_kacamata + second_url + temp_frame_kacamata);
    });

    $(".frame_kacamata").click(function () {
        frame_kacamata = $(this).val();
        if (frame_kacamata == "Black Silver") {
            $("#frame_kacamata_1").removeClass("btn-outline-dark");
            $("#frame_kacamata_1").addClass("btn-dark");
            
            $("#frame_kacamata_2").addClass("btn-outline-dark");
            $("#frame_kacamata_2").removeClass("btn-dark");
            
            $("#frame_kacamata_3").addClass("btn-outline-dark");
            $("#frame_kacamata_3").removeClass("btn-dark");
        } else if (frame_kacamata == "Black") {
            $("#frame_kacamata_1").addClass("btn-outline-dark");
            $("#frame_kacamata_1").removeClass("btn-dark");
            
            $("#frame_kacamata_2").removeClass("btn-outline-dark");
            $("#frame_kacamata_2").addClass("btn-dark");
            
            $("#frame_kacamata_3").addClass("btn-outline-dark");
            $("#frame_kacamata_3").removeClass("btn-dark");
        } else if (frame_kacamata == "Black Gold") {
            $("#frame_kacamata_1").addClass("btn-outline-dark");
            $("#frame_kacamata_1").removeClass("btn-dark");
            
            $("#frame_kacamata_2").addClass("btn-outline-dark");
            $("#frame_kacamata_2").removeClass("btn-dark");
            
            $("#frame_kacamata_3").removeClass("btn-outline-dark");
            $("#frame_kacamata_3").addClass("btn-dark");
        }
        if (frame_kacamata == "Black Silver") {
            $("#produk_image").attr("src", "assets/img/kacamata_silver.png");
        } else if (frame_kacamata == "Black Gold") {
            $("#produk_image").attr("src", "assets/img/kacamata_gold.png");
        } else if (frame_kacamata == "Black") {
            $("#produk_image").attr("src", "assets/img/kacamata_black.png");
        }
        
        var temp_tipe_kacamata = tipe_kacamata;
        var temp_frame_kacamata = frame_kacamata;
        
        if (tipe_kacamata != "" && frame_kacamata != "") {
            $("#order_link").addClass("btn-success");
            $("#order_link").removeClass("disabled");
            $("#order_link").removeClass("text-muted");
            $("#order_link").removeClass("btn-secondary");
        }
        
        $("#order_link").attr("href", main_url + temp_tipe_kacamata + second_url + temp_frame_kacamata);
    });
});

// SCROLL TO TOP
$(document).ready(function () {
    var elScroll = document.getElementById("scroll");
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            elScroll.classList.add("d-flex");
            $('.scrollToTop').fadeIn();
        } else {
            elScroll.classList.remove("d-flex");
            $('.scrollToTop').fadeOut();
        }
    });
    $('.scrollToTop').click(function () {
        $('html,body').animate({ scrollTop: 0 }, 0);
    })
});

// COUNTDOWN
do {
    var tgl = new Date().getDate();
    var tglCd = tgl + 1;

    var bln = new Date().getMonth() + 1;
    var blnCd = bln;
    if(bln % 2 == 1) {
        if(tglCd > 31) {
            blnCd = bln + 1;
        };
    } else {
        if(tglCd > 30) {
            blnCd = bln + 1;
        }
    };
    
    var thn = new Date().getFullYear();
    var thnCd = thn;
    if(blnCd > 12){
        thnCd = thn + 1;
    }

    var countDate = new Date(blnCd+" "+tglCd+", "+thnCd+" 00:00:00").getTime();
    var gap;

    var hitung = setInterval(function() {
        var now = new Date().getTime();
        gap = countDate - now;

        var second = 1000;
        var minute = second * 60;
        var hour = minute * 60;
        var day = hour * 24;

        // var textDay = Math.floor(gap / day);
        var textHour = Math.floor((gap % day) / hour);
        var textMinute = Math.floor((gap % hour) / minute);
        var textSecond = Math.floor((gap % minute) / second);
        
        // document.querySelector(".hari").innerText = textDay;
        document.querySelector(".jam").innerText = textHour;
        document.querySelector(".menit").innerText = textMinute;
        document.querySelector(".detik").innerText = textSecond;

        // document.querySelector(".hari1").innerText = textDay;
        document.querySelector(".jam1").innerText = textHour;
        document.querySelector(".menit1").innerText = textMinute;
        document.querySelector(".detik1").innerText = textSecond;
    }, 1000);
} while (gap == 0);



// !function(f,b,e,v,n,t,s)
// {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
// n.callMethod.apply(n,arguments):n.queue.push(arguments)};
// if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
// n.queue=[];t=b.createElement(e);t.async=!0;
// t.src=v;s=b.getElementsByTagName(e)[0];
// s.parentNode.insertBefore(t,s)}(window, document,'script',
// 'https://connect.facebook.net/en_US/fbevents.js');
// fbq('init', '752746992427038');
// fbq('track', 'PageView');
// fbq('track', 'ViewContent');
// fbq('track', 'Purchase');