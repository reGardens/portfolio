// all animation

// s Banner Desktop
const imgGw = document.querySelector('.gw img')
anime({
  targets: imgGw,
  translateX: [-250, 0],
  translateY: [250, 0],
  opacity: [0, 1],
  scale: [0, 1],
  easing: "easeInOutSine",
  duration: 1000
});

const imgGroot = document.querySelector('.groot img')
anime({
  targets: imgGroot,
  translateX: [250, 0],
  translateY: [250, 0],
  opacity: [0, 1],
  scale: [0, 1],
  easing: "easeInOutSine",
  duration: 1000
});

const bannerDesc = document.querySelector('header .desc')
anime({
  targets: bannerDesc,
  translateY: [-250, 0],
  opacity: [0, 1],
  scale: [0, 1],
  easing: "easeInOutSine",
  duration: 1200
});
// e Banner Desktop

// s Banner Mobile
const imgGwMobile = document.querySelector('.header-mobile img.gw')
anime({
  targets: imgGwMobile,
  translateX: [-100, 0],
  opacity: [0, 1],
  easing: "easeInOutSine",
  duration: 1200
});

const imgGwGroot = document.querySelector('.header-mobile img.groot')
anime({
  targets: imgGwGroot,
  translateX: [-100, 0],
  opacity: [0, 1],
  easing: "easeInOutSine",
  duration: 1400
});

const mobileDesc = document.querySelector('.header-mobile .desc')
anime({
  targets: mobileDesc,
  translateY: [-250, 0],
  opacity: [0, 1],
  easing: "easeInOutSine",
  duration: 900
});
// s Banner Mobile

