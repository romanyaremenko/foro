'use strict'
import 'bootstrap-4-grid'
import 'normalize.css'
import './scss/main.scss'
// import SmoothScroll from './smoothScroll'
import Swiper from 'swiper'
import Scrollbar from 'smooth-scrollbar';
import {ScrollbarPlugin} from 'smooth-scrollbar';
import SweetScroll from 'sweet-scroll';


class SpeedPlugin extends ScrollbarPlugin {

    transformDelta(delta) {
        const {speed} = this.options;

        return {
            x: delta.x * speed,
            y: delta.y * speed,
        };
    }
}

SpeedPlugin.pluginName = 'Speed'
SpeedPlugin.defaultOptions = {
    speed: 1,


}

Scrollbar.use(SpeedPlugin);


Scrollbar.init(document.querySelector('#simple-bar'),
    SpeedPlugin.defaultOptions = {
        speed: 0.30,
        damping:0.03,
        alwaysShowTracks: true
        // overscrollDamping:1,


    }
);




//
// gesuredZone.addEventListener('touchend', function(event) {
//     touchendX = event.screenX;
//     touchendY = event.screenY;
//     handleGesure();
// }, false);
//
//
// function handleGesure() {
//     var swiped = 'swiped: ';
//
//     if (touchendY < touchstartY) {
//         scrolled = scrolled + SpeedScrollDown
//         //   window.scrollTo( {top: scrolled} );
//         scroller2.to({ top: scrolled});
//     }
//     if (touchendY > touchstartY) {
//         if(!scrolled == 0) scrolled = scrolled - SpeedScrollUp
//         // window.scrollTo({top: scrolled });
//         scroller2.to({ top: scrolled});
//     }
//     if (touchendY == touchstartY) {
//         alert('tap!');
//     }
// }
//
//
//


// ///SpeedSCroll
// const SpeedScrollUp = 15
// const SpeedScrollDown = 15
//
// ///Dont Touch!
// var body = document.body,
//     html = document.documentElement;
// let scrolled = 0
// const documentHeight = Math.max( body.scrollHeight, body.offsetHeight,
//     html.clientHeight, html.scrollHeight, html.offsetHeight );
//
//
// const scroller2 = new SweetScroll();
//
// var elem = document.querySelector("body");
// window.scrollTo(0,0)
// if (elem.addEventListener) {
//     if ('onwheel' in document) {
//         // IE9+, FF17+, Ch31+
//         elem.addEventListener("wheel", onWheel2);
//     } else if ('onmousewheel' in document) {
//         // устаревший вариант события
//         elem.addEventListener("mousewheel", onWheel2);
//     } else {
//         // Firefox < 17
//         elem.addEventListener("MozMousePixelScroll", onWheel2);
//     }
// } else { // IE8-
//     elem.attachEvent("onmousewheel", onWheel2);
//
// }
//
// document.addEventListener('keydown', function(event) {
//     if (event.code == 'ArrowDown'){
//         scrolled = scrolled + SpeedScrollDown
//         //   window.scrollTo( {top: scrolled} );
//         scroller2.to({ top: scrolled});
//
//     }
//     if (event.code == 'ArrowUp'){
//         if(!scrolled == 0) scrolled = scrolled - SpeedScrollUp
//         // window.scrollTo({top: scrolled });
//         scroller2.to({ top: scrolled});
//     }
// });
//
//
// function onWheel2(e) {
//     e = e || window.event;
//
//     var delta = e.deltaY || e.detail || e.wheelDelta;
//
//     var info = document.getElementById('delta');
//
//     var lastScrollTop = 0;
//     var st = window.pageYOffset || document.documentElement.scrollTop;
//     if (st > lastScrollTop){
//         console.log('down')
//     } else {
//         console.log('up')
//     }
//     lastScrollTop = st <= 0 ? 0 : st;
//     if (event.deltaY < 0)
//     {
//         console.log('scrolling up');
//         if(!scrolled == 0) scrolled = scrolled - SpeedScrollUp
//         window.scrollTo({top: scrolled , behavior: 'smooth'});
//
//
//     }
//     else if (event.deltaY > 0)
//     {
//         console.log('scrolling down');
//         // console.log(scrolled == bod)
//         scrolled = scrolled + SpeedScrollDown
//         window.scrollTo( {top: scrolled , behavior: 'smooth'} );
//
//     }
//
// }
//
//
//
//
//
//


// const scroller = new SmoothScroll({
//     target: document.querySelector(".scroll"), // element container to scroll
//     scrollEase: 0.5,
// });

// const body = document.body
// const jsScroll = document.getElementsByClassName('scroll')[0]
// const height = jsScroll.getBoundingClientRect().height - 1
// const speed = 0.03
//
// let offset = 0
// body.style.height = Math.floor(height) + 'px'
//
// function smoothScroll () {
//     offset += (window.pageYOffset - offset) * speed
//     const scroll = 'translateY(-' + offset + 'px) translateZ(0)'
//     jsScroll.style.transform = scroll
//     requestAnimationFrame(smoothScroll)
// }
//
// smoothScroll()
//
//


// swiper
function swiperTours() {
    const swiper = new Swiper('#skin.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30
    })
}

swiperTours();
// end swiper


// cursor
document.addEventListener('DOMContentLoaded', () => {
    const $bigBall = document.querySelector('.cursor__ball--big')
    const $smallBall = document.querySelector('.cursor__ball--small')
    const $hoverables = document.querySelectorAll('.cursor_activ')

    // Listeners
    document.body.addEventListener('mousemove', onMouseMove)
    for (let i = 0; i < $hoverables.length; i++) {
        $hoverables[i].addEventListener('mouseenter', onMouseHover)
        $hoverables[i].addEventListener('mouseleave', onMouseHoverOut)
    }

    // Move the cursor
    function onMouseMove(e) {
        TweenMax.to($bigBall, 0.4, {
            x: e.clientX - 15,
            y: e.clientY - 15
        })
        TweenMax.to($smallBall, 0.1, {
            x: e.clientX - 5,
            y: e.clientY - 5
        })
    }

    // Hover an element
    function onMouseHover() {
        TweenMax.to($bigBall, 0.3, {
            scale: 4
        })
    }

    function onMouseHoverOut() {
        TweenMax.to($bigBall, 0.3, {
            scale: 1
        })
    }
})
// end cursor

// const debounce = (fn, time) => {
//     let timeout
//     return function () {
//         const functionCall = () => fn.apply(this, arguments)
//         clearTimeout(timeout)
//         timeout = setTimeout(functionCall, time)
//     }
// }
//
// window.addEventListener(
//     'scroll',
//     debounce(() => {
//         const header = document.querySelector('header')
//         if (window.innerWidth >= 768) {
//             const scroll = window.scrollY
//
//             if (scroll >= 2) {
//                 header.classList.add('sticky')
//             } else {
//                 header.classList.remove('sticky')
//             }
//         }
//     }, 20)
// );


document.addEventListener("DOMContentLoaded", () => {
    const controller = new ScrollMagic.Controller({refreshInterval: 1})
    const elementheader = new TimelineMax()

    elementheader
        .fromTo(
            '.hero-box-img',
            0.5,
            {
                width: '170%',
                ease: Linear.easeNone
            },
            {
                width: '100%',
                ease: Linear.easeNone
            },
            '0'
        )
        .to('.botton-img', 0.3,
            {
                y: '-80px',
                ease: Linear.easeNone
            }, "0.5")
        .to('.botton-img__item', 0.3,
            {
                maxHeight: "0px",
                ease: Linear.easeNone
            }, "0.2")
        // .to (".menubar",0,
        //     {className:"+=sticky"})
    // .to(".hero-box-text",0.1,{
    //     y:"100px"
    // });
    // .to(
    //     '.title__item',
    //    0.4,
    //     {
    //         y: '-100px',
    //         ease: Linear.easeNone
    //     },
    //     '0'
    // )
    // .to(
    //     '.title__item_span',
    //     1 ,
    //     {
    //         y: '-90px',
    //         ease: Expo.easeInOut
    //     },
    //     '0'
    // );


    const scene1 = new ScrollMagic.Scene({
        triggerElement: '.trigger1',
        triggerHook: '0',
        duration: '100%',


    })
        .setTween(elementheader)
        .addTo(controller)

});

//// text anima


const controller11 = new ScrollMagic.Controller({refreshInterval: 1});
const textOneanima = new TimelineMax();

textOneanima
    .to(
        '.title__item_span', 2, {
            y: '-100px',
            // ease: Expo.easeInOut
        }, '0.4');


const scenetextOne = new ScrollMagic.Scene({
    triggerElement: '.triggerTexttop',
    triggerHook: '0.4',
    duration: '100%',
    offset:"-100"
})
    .setTween(textOneanima)

    .addTo(controller11);

/// end text anima

// anima nav
const controller13 = new ScrollMagic.Controller({refreshInterval: 1})
const navanima = new TimelineMax();

navanima
    .to(".header", 0.1, {
        // className: "+=sticky"
        background: "rgba(0, 0, 0, 0.9)",

    })
    .to(".header",0.1,{
        height:"50px",
        // ease: Linear.easeNone
    }, 0)
;


const sceneNavanima = new ScrollMagic.Scene({
    triggerElement: '.triggernav',
    triggerHook: '0.3',
    duration: '20%',
    offset:"300%"

})
    .setTween(navanima)

    .addTo(controller13);


// end anima nav



/// text anima 2
const controller12 = new ScrollMagic.Controller({refreshInterval: 1})
const animaTextBot = new TimelineMax();

animaTextBot
    .to('.hero-box-text', 1, {
        y: "170px"
    });

const Text2anima = new ScrollMagic.Scene({
    triggerElement: '.triggertextbot',
    triggerHook: '0.6',
    duration: '100%',

})
    .setTween(animaTextBot)

    .addTo(controller12)

// end


// Text
const targets2 = document.querySelectorAll('.trigger22');

let action2 = new TimelineMax({paused: true});
action2
    .fromTo('.info-slider__title', 0.8, {
            autoAlpha: 0,
            y: 100
        }, {
            autoAlpha: 1,
            y: 0

        }, 0.5);

const options2 = {
    threshold: 0.1
};

const callback2 = entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            action2.play();
        } else if (!entry.isIntersecting) {
            action2.pause();
        } else {
            actio2n.reverse();
        }
    });
};

const observerr2 = new IntersectionObserver(callback2, options2);
targets2.forEach(target => observerr2.observe(target));


// slider
const targets = document.querySelectorAll('.swiper-container');

let action = new TimelineMax({paused: true});
action
    .staggerFrom(".swiper-slide", 0.9,{
        opacity:0,
        x: -250,
        ease: Power4.easeInOut,
        // paddingRight: "30px",

    }, -0.1);
    // .staggerTo(targets, 0,
    //     {
    //         x: -200
    //     }, 0
    // )
    // .staggerTo(".swiper-slide",0.8,
    //     {
    //         paddingLeft: "40px",
    //         x:150,
    //         // opacity:1
    //     },0.2);

const options = {
    threshold: 0
};

const callback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            action.play();
        } else if (!entry.isIntersecting) {
            action.pause();
        } else {
            action.reverse();
        }
    });
};

const observerr = new IntersectionObserver(callback, options);
targets.forEach(target => observerr.observe(target));
// end slider


//  slider btn anima observer

const targetsSliderBtn = document.querySelectorAll(".btn--black");
let animaSliderBtn = new TimelineMax ({ paused:true});

animaSliderBtn
    .staggerFrom (targetsSliderBtn,0.3,{
        autoAlpha:0,
        y: 140
    },0.2);

const optionsSliderBtn = { threshold:0.1};

const cbSliderBtn = entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting){
                animaSliderBtn.play();
            }
            else if (!entry.isIntersecting){
                animaSliderBtn.pause();
            }
            else {animaSliderBtn.reverse();}
        })
};

const SliderBtnObs = new IntersectionObserver(cbSliderBtn,optionsSliderBtn);
targetsSliderBtn.forEach(target => SliderBtnObs.observe(target));

// end slider btn anima

// anima DESCRIPTION
const controller = new ScrollMagic.Controller({refreshInterval: 1})
const blogtitle = new TimelineMax();

blogtitle
    .fromTo('.anima_blog_title', 2,
        {
            y:"100px"
        },
        {
            y: "-58px",
            // ease: Linear.easeNone
        },0)
    .fromTo(".blog__subtitle", 2.5,
        {
            y:"150px"
        },
        {
            y: "-50px",
            // ease: Linear.easeNone
        },0)
    .fromTo(".blog__btn", 2,
        {

            y:"200px"},
        {

            y: "-90px",
            // ease: Linear.easeNone
        },1.2);

const sceneBlogTitle = new ScrollMagic.Scene({
    triggerElement: '.trigger2',
    triggerHook: '1',
    duration: '100%',
})
    .setTween(blogtitle)

    .addTo(controller)

// End  anima DESCRIPTION


// anima blog__subtitle
// const controller2 = new ScrollMagic.Controller({refreshInterval: 1})
// const blogSubTitle = new TimelineMax();
// blogSubTitle
    // .to(".blog__subtitle", 0.4,
    //     {
    //         y: "-120px",
    //         // ease: Linear.easeNone
    //     });

// const sceneBlogSubTitle = new ScrollMagic.Scene({
//     triggerElement: '.trigger3',
//     triggerHook: '0.5',
//     duration: '100%',
// })
//     .setTween(blogSubTitle)
//
//     .addTo(controller2)

// end blog__subtitle

// anima blog_btn
// const controller3 = new ScrollMagic.Controller({refreshInterval: 1})
// const blogBtn = new TimelineMax();
// blogBtn
    // .to(".blog__btn", 0.7,
    //     {
    //         y: "-130px",
    //         // ease: Linear.easeNone
    //     });

// const sceneBlogBtn = new ScrollMagic.Scene({
//     triggerElement: '.trigger4',
//     triggerHook: '1',
//     duration: '60%',
// })
//     .setTween(blogBtn)
//
//     .addTo(controller3)

// end_blog_btn


// // anima blog title
//
// const targets_anima_blog = document.querySelectorAll('.anima_blog_title');
//
// let action_anima_blog = new TimelineMax({paused: true});
// action_anima_blog
//     .staggerFrom( targets_anima_blog, 1,
//         {y:50
//         },0.3
//     );
//
// const options_anima_blog = {
//     threshold: 1
// };
//
// const callback_anima_blog = entries => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             action_anima_blog.play();
//         } else if(!entry.isIntersecting) {
//             action_anima_blog.pause();
//         }else{
//             action_anima_blog.reverse();
//         }
//     });
// };

// const observer_anima_blog = new IntersectionObserver(callback_anima_blog, options_anima_blog);
// targets_anima_blog.forEach(target => observer_anima_blog.observe(target));


// anima blog img

const targets_anima_blog_img = document.querySelectorAll(".anima_blog_img");
let action_anima_blog_img = new TimelineMax({paused: true});

action_anima_blog_img
    .from(targets_anima_blog_img, 0.6,
        {width: "170%"}, 0.3);

const option_anima_blog_img = {threshold: 0.1};

const callback_anima_blog_img = entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            action_anima_blog_img.play();
        } else if (!entry.isIntersecting) {
            action_anima_blog_img.pause();
        } else {
            action_anima_blog_img.reverse();
        }
    });
};

const observer_anima_blog_img = new IntersectionObserver(callback_anima_blog_img, option_anima_blog_img);
targets_anima_blog_img.forEach(target => observer_anima_blog_img.observe(target));


// //animas anima_blog_subtitle
// const targetsAnimaBST = document.querySelectorAll (".anima_blog_subtitle");
// let actionAnimaBST = new TimelineMax ({pauserd: true});
//
//
// actionAnimaBST
//     .from(targetsAnimaBST,0.9,
//         {y: 170,   }
//         ),1;
// const optionsAnimaBST = { threshold:0.4 };
//
// const cbanimaBST = entries => {
//     entries.forEach (entry => {
//         if (entry.isIntersecting){
//             actionAnimaBST.play();
//         }
//         else if (!entry.isIntersecting){
//             actionAnimaBST.pause();
//         }
//         else {actionAnimaBST.reverse();}
//     })
// };
//
// const observerAnimaBST = new IntersectionObserver(cbanimaBST, optionsAnimaBST);
//
// targetsAnimaBST.forEach(target => observerAnimaBST.observe(target));
//
// // anima blog btn
// const targetsBlogBtn = document.querySelectorAll(".blog__btn");
// let actionBlogBtn = new TimelineMax ({paused:true});
//
// actionBlogBtn
//     .from(targetsBlogBtn,0.8,
//         {y:150
//         } ,0.3);
//
// const optBlogBtn = {threshold:0.9};
//
// const cbBlogBtn = entries => {
//     entries.forEach (entry => {
//         if (entry.isIntersecting){
//             actionBlogBtn.play();
//         }
//         else if (!entry.isIntersecting){
//             actionBlogBtn.pause();
//         }
//         else {actionBlogBtn.reverse();}
//     });
// };
//
// const observerBlogBtn = new IntersectionObserver(cbBlogBtn,optBlogBtn);
// targetsBlogBtn.forEach (target => observerBlogBtn.observe(target) );


//anima blog2_anima

const targetsBlog2 = document.querySelectorAll('.blog2_anima');

let actionBlog2 = new TimelineMax({paused: true});

actionBlog2
    .from(targetsBlog2, 0.6,
        {width: "140%"}, 0.3);

const optionsBlog2 = {threshold: 0.2};

const cbblog2 = entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            actionBlog2.play();
        } else if (!entry.isIntersecting) {
            action.pause();
        } else {
            actionBlog2.reverse();
        }
    });
};

const obserberBlog2 = new IntersectionObserver(cbblog2, optionsBlog2);
targetsBlog2.forEach(target => obserberBlog2.observe(target));


// anima blog2 DESCRIPTION
const controller4 = new ScrollMagic.Controller({refreshInterval: 1})
const animaBlog2Text = new TimelineMax();

animaBlog2Text
    .to('.blog2_text__title', 0.5, {
        y: "100px"
    });

const blog2Text = new ScrollMagic.Scene({
    triggerElement: '.trigger5',
    triggerHook: '0.9',
    duration: '100%',
})
    .setTween(animaBlog2Text)

    .addTo(controller4)
// eng blog2 DESCRIPTION

// anima blog2_text__subtitle


const controller5 = new ScrollMagic.Controller({refreshInterval: 1});
const animaBlog2TextSub = new TimelineMax();

animaBlog2TextSub
    .to('.blog2_text__subtitle', 0.8,
        {y: "100px",
        autoAlpha:1});
const Blog2TextSubScene = new ScrollMagic.Scene({
    triggerElement: '.trigger6',
    triggerHook: '0.9',
    duration: '100%',
})
    .setTween(animaBlog2TextSub)
    .addIndicators({name:"blog2"})
    .addTo(controller5);

//end blog2_text__subtitle

// anima blog3

// const controller6 = new ScrollMagic.Controller({refreshInterval: 1});
// const animaBlo3img = new TimelineMax();
// animaBlo3img
//     .to(".imgleft", 0.6,
//         {
//             yPercent: -20,
//             ease: Linear.easeNone
//         })
//     .to(".blabla2", 0.6,
//         {
//             yPercent: -20,
//             ease: Linear.easeNone
//         });
// const blog3Scene = new ScrollMagic.Scene ({
//     triggerElement: '.trigger7',
//         triggerHook: '1',
//         duration: '90%',
// })
//     .setTween(animaBlo3img)
//     .addIndicators()
//     .addTo(controller6)
//


// end blog 3

// anima blog3 padding

const controller7 = new ScrollMagic.Controller({refreshInterval: 1});
const animaBlogPadding = new TimelineMax();
animaBlogPadding
    .to('.Animapadding', 1,
        {
            paddingTop: "-30px"
        })
    .from(".blog3_text",0.3,
        {y:100},0);
const blog3PaddingScene = new ScrollMagic.Scene({
    triggerElement: '.trigger8',
    triggerHook: '0.6',
    duration: '100%',
})
    .setTween(animaBlogPadding)
    .addIndicators({name:"last"})
    .addTo(controller7)

// end blog3 padding

