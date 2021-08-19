const bg = document.querySelector('.img-scroll');
            window.addEventListener('scroll',function(){
            bg.style.width =50 +window.pageYOffset/30+'%';
            });


const scrollBg = document.querySelector('.slider-area');
window.addEventListener('scroll', function(){
    scrollBg.style.backgroundSize = 100 - +window.pageYOffset/30+ '%';
    scrollBg.style.opacity = 1.5 - +window.pageYOffset/700+'';
})