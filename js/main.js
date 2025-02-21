document.addEventListener('DOMContentLoaded', function() {
    const preloader = document.getElementById('preloader');
    const homepage = document.getElementById('homepage');

    // Fungsi untuk menghilangkan preloader dan menampilkan homepage
    function fadeOutPreloader() {
        preloader.classList.add('fade-out'); // Tambahkan kelas fade-out untuk animasi CSS

        // Setelah animasi preloader selesai, sembunyikan preloader dan tampilkan homepage
        setTimeout(() => {
            preloader.style.display = 'none';
            homepage.style.display = 'block'; // Tampilkan homepage
        }, 700); // Waktu timeout harus sama dengan durasi transisi fade-out di CSS (0.7s = 700ms)

        // Setelah homepage ditampilkan, tambahkan kelas untuk fade-in (opsional, jika sudah ada transisi opacity di CSS, tidak perlu kelas tambahan)
        setTimeout(() => {
            homepage.style.opacity = 1; // Pastikan opacity homepage menjadi 1 setelah ditampilkan (jika ada transisi opacity)
        }, 800); // Sedikit delay setelah homepage ditampilkan sebelum mengatur opacity
    }

    // Panggil fungsi fadeOutPreloader setelah beberapa detik (misalnya 3 detik)
    setTimeout(fadeOutPreloader, 3000); // Preloader akan hilang setelah 3 detik
});

(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Typed Initiate
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }


    // Smooth scrolling to section
    $(".btn-scroll").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 0
            }, 1500, 'easeInOutExpo');
        }
    });
    
    
    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        items: 1
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
})(jQuery);

