// NAVBAR

const tl = new TimelineMax({ paused: true });

tl.to('nav', 0.3, { autoAlpha: 1 })
  .staggerFromTo('nav li', 0.3, { y: 100, opacity: 0 }, { y: 0, opacity: 1 }, 0.2);

$('.burgerIcon').hover(
  function () {
    TweenMax.to('.burgerLine:first-child', 0.2, { x: -10 });
    TweenMax.to('.burgerLine:last-child', 0.2, { x: 10 });
  },

  function(){
    TweenMax.to('.burgerLine:first-child, .burgerLine:last-child', 0.2, {x: 0})
  }
)

$('.burgerIcon').click(function () {
  tl.play(0);
})

$('.closeButton').click(function () {
  tl.reverse(0);
})

// HEADER SECTION
const tlHeader = new TimelineMax()

tlHeader.fromTo('#hero h1', 0.6, { y: 80, opacity: 0}, {y: 0, opacity: 1, delay: 0.6});
tlHeader.fromTo('#hero .learnMoreButton', 0.6, { y: 80, opacity: 0 }, { y: 0, opacity: 1, ease: Back.easeOut });

// COLUMNS SECTION

$('.fourColItem').hover(
  function () {
    TweenMax.to($(this), 0.5, { y: -10, scale: 1.03, boxShadow: '0 0 20px rgba(0,0,0,0.36)' });
  },

  function () {
    TweenMax.to($(this), 0.5, { y: 0, scale: 1, boxShadow: '0 0 20px rgba(0,0,0,0.06)' });
  }
);

// SERVICES SECTION

TweenMax.set('.serviceBoxInner', { y: 200, opacity: 0 })

$('.serviceBox').hover(
  function () {
    TweenMax.to($(this).find('.serviceBoxInner'), 0.5, { y: 0, opacity: 1, ease: Power2.easeOut});
  },

  function () {
    TweenMax.to($(this).find('.serviceBoxInner'), 0.5, { y: 200, opacity: 0 });
  }
)

// COG SECTIONS

TweenMax.to('.cogLeft', 8, {rotation: 360, repeat: -1, ease: Linear.easeNone})
TweenMax.to('.cogRight', 8, {rotation: -360, repeat: -1, ease: Linear.easeNone})