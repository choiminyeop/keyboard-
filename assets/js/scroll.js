const bg = document.querySelector('.img-scroll');
            window.addEventListener('scroll',function(){
            bg.style.width =50 +window.pageYOffset/30+'%';
            });




// scrollBg.style.opacity = 1.5 - +window.pageYOffset/700+'';


// if (window.matchMedia("(max-width: 1000px)").matches) {
//     // 1000px 이상에서 사용할 JavaScript
//     const scrollBg = document.querySelector('.slider-area');
//     window.addEventListener('scroll', function(){
//         scrollBg.style.backgroundSize = 100 - +window.pageYOffset/30+ '%';
//     });
//   } else {
//       // 1000px 미만에서 사용할 JavaScript
//     const scrollBg = document.querySelector('.slider-area');
//     window.addEventListener('scroll', function(){
//         scrollBg.style.backgroundSize = 100 ;
//     });
//   };


var mql = window.matchMedia("screen and (max-width: 1600px)");

mql.addListener(function(e) {
    if(e.matches) {
        const scrollBg = document.querySelector('.slider-area');
        window.addEventListener('scroll', function(){
           scrollBg.style.backgroundSize = 100
        });
    } else { 
        const scrollBg = document.querySelector('.slider-area');
        window.addEventListener('scroll', function(){
           scrollBg.style.backgroundSize = 100 - +window.pageYOffset/30+ '%';
        });;
    }
});





// if(matchMedia("screen and (min-width: 1024px)").matches){
//     // 1024px 이상에서 사용할 JavaScript
//     const scrollBg = document.querySelector('.slider-area');
//     window.addEventListener('scroll', function(){
//         scrollBg.style.backgroundSize = 100 - +window.pageYOffset/30+ '%';
//     });
// }else{
//     // 1024px 미만에서 사용할 JavaScript
//     const scrollBg = document.querySelector('.slider-area');
//     window.addEventListener('scroll', function(){
//         scrollBg.style.backgroundSize = 100 - +window.pageYOffset/30+ '%';
//     })
// }