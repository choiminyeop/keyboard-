const bg = document.querySelector('.img-scroll');
            window.addEventListener('scroll',function(){
            bg.style.width =50 +window.pageYOffset/30+'%';
            });