/**
 * Created by Евгений on 26.11.2018.
 */
var swiper = new Swiper(".blog-slider", {
    spaceBetween: 30,
    effect: "fade",
    pagination: {
        el: ".blog-slider__pagination",
        clickable: true
    }
});
var work = new Swiper('.swiper-container', {
    loop:true,
    effect: 'coverflow',
    centeredSlides: true,
    IOSEdgeSwipeDetection:true,
    slidesPerView: 'auto',
    scrollbarDraggable:true,
    scrollbar:'.swipe-scrollbar',
    scrollbarHide:true,
    coverflowEffect: {
        rotate: 0,
        stretch: 100,
        depth: 250,
        modifier: 1,
        slideShadows : true
    },
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable:true
    }
});

var project = new Swiper('.swiper-container-single', {
    loop:true,
    effect: 'coverflow',
    centeredSlides: true,
    IOSEdgeSwipeDetection:true,
    slidesPerView: 'auto',
    scrollbarDraggable:true,
    scrollbar:'.swipe-scrollbar',
    scrollbarHide:true,
    coverflowEffect: {
        rotate: 0,
        stretch: 200,
        depth: 350,
        modifier: 1,
        slideShadows : true
    },
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable:true
    }
});



var phrases = ['Разработка сайтов', 'Продвижение в интернете', 'Вирусный маркетинг', 'Дизайн сайтов', 'Техническая поддержка', 'Мобильные приложения', 'Контекстная реклама'];
var el = document.querySelector('.text');

var fx = new TextScramble(el);

var counter = 0;
var next = function next() {
    fx.setText(phrases[counter]).then(function () {
        setTimeout(next, 2500);
    });
    counter = (counter + 1) % phrases.length;
};

next();
/**
 * demo4.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2017, Codrops
 * http://www.codrops.com
 */
{
    // equation of a line
    const lineEq = (y2, y1, x2, x1, currentVal) => {
    // y = mx + b
    const m = (y2 - y1) / (x2 - x1);
    const b = y1 - m * x1;

    return m * currentVal + b;
}

    // from http://www.quirksmode.org/js/events_properties.html#position
    const getMousePos = (e) => {
    let posx = 0;
    let posy = 0;
    if (!e) {let e = window.event};
    if (e.pageX || e.pageY) 	{
        posx = e.pageX;
        posy = e.pageY;
    }
    else if (e.clientX || e.clientY) 	{
        posx = e.clientX + document.body.scrollLeft
            + document.documentElement.scrollLeft;
        posy = e.clientY + document.body.scrollTop
            + document.documentElement.scrollTop;
    }
    return {
        x : posx,
        y : posy
    };
};

    // From https://davidwalsh.name/javascript-debounce-function.
    function debounce(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

    class MorphingBG {
        constructor(el) {
            this.DOM = {};
            this.DOM.el = el;
            this.DOM.el.style.transition = 'transform 2s ease-out';
            this.DOM.pathEl = this.DOM.el.querySelector('path');
            this.paths = this.DOM.pathEl.getAttribute('style').split(';')
            this.paths.splice(this.paths.length, 0, this.DOM.pathEl.getAttribute('d'));
            this.win = {width: window.innerWidth, height: window.innerHeight};
            this.animate();
        }
        animate() {
            anime.remove(this.DOM.pathEl);
            anime({
                targets: this.DOM.pathEl,
                duration: 30000,
                easing: 'easeInOutSine',
                d: this.paths,
                loop: true
            });
        }
    };

    new MorphingBG(document.querySelector('.decor-item'));
    new MorphingBG(document.querySelector('.decor-item.second'));
    new MorphingBG(document.querySelector('.decor-item.third'));
};