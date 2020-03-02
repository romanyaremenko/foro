document.addEventListener("DOMContentLoaded", () => {
    const controller = new ScrollMagic.Controller({ refreshInterval: 1 })
    const elementheader = new TimelineMax()

    elementheader
        .fromTo(
            '.hero-box-img',
            1,
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
        .to('.botton-img__item', 0.3,
            {
                maxHeight: "0px",
                ease: Linear.easeNone
            }, "0")
        .to(
            '.hero-box-text',
            1,
            {
                yPercent: '-80%',
                ease: Linear.easeNone
            },
            '0'
        )
        .to(
            '.title__item',
            0.8,
            {
                top: '-100px',
                ease: Expo.easeInOut
            },
            '0'
        );




    const scene1 = new ScrollMagic.Scene({
        triggerElement: '.trigger1',
        triggerHook: '0.0',
        duration: '100%',
        speed:'-500'

    })
        .setTween(elementheader)
        .addIndicators()
        .addTo(controller)

});

// anima blog_btn
const controller3 = new ScrollMagic.Controller({ refreshInterval: 1 })
const blogBtn = new TimelineMax();
blogBtn
    .to(".blog__btn",1,
        {y:"-150px",
            ease: Linear.easeNone});

const sceneBlogBtn = new ScrollMagic.Scene({
    triggerElement: '.trigger4',
    triggerHook: '0.7',
    duration: '70%',
})
    .setTween(blogBtn)
    .addIndicators()
    .addTo(controller3)

// end_blog_btn
