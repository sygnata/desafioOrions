export default function bannerRotativo() {
  document.addEventListener('DOMContentLoaded', function () {
    new Splide('.splide', {
      autoplay: false,
    }).mount();
  });
}