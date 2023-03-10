const swiper = new Swiper('.swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    speed: 2000,
});

const slidesVideo = document.querySelectorAll(".swiper-slide video");

function playVideo() {
    slidesVideo.forEach(elem => {
        elem.currentTime = 0;
        elem.play()
    });
};

swiper.on('slideChangeTransitionStart', function () {
    playVideo();
});