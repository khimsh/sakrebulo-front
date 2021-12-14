const navDropdownTrigger = document.querySelector(
  '[data-nav-dropdown-trigger]'
);
const navDropdown = document.querySelector('[data-nav-dropdown]');

navDropdownTrigger.addEventListener('click', () => {
  navDropdown.classList.toggle('active');
  console.log('clicked');
});

const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove('active');
    });
    tabs.forEach((tab) => {
      tab.classList.remove('active');
    });
    tab.classList.add('active');
    target.classList.add('active');
  });
});

const openNav = document.querySelector('[data-nav-open]');
const closeNav = document.querySelector('[data-nav-close]');
const navigation = document.querySelector('[data-nav]');

openNav.addEventListener('click', () => {
  navigation.classList.add('active');
});

closeNav.addEventListener('click', () => {
  navigation.classList.remove('active');
});

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  spaceBetween: 32,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

if (document.querySelector('[data-video-player]')) {
  const videoPlayer = document.querySelector('[data-video-player]');
  const videoSrc = videoPlayer.querySelector('[data-video-source]');
  const videoBtn = videoPlayer.querySelector('[data-video-btn]');

  videoBtn.addEventListener('click', () => {
    playVideo(videoSrc);
    videoBtn.classList.add('hidden');
  });

  videoSrc.addEventListener('click', () => {
    pauseVideo(videoSrc);
    videoBtn.classList.remove('hidden');
  });
}

function playVideo(video) {
  video['play']();
}

function pauseVideo(video) {
  video['pause']();
}
