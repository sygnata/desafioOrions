export default function bannerRotativoAutomatico() {
  document.addEventListener('DOMContentLoaded', function () {
    new Splide('.splide', {
      autoplay: true,
      rewind: true,
      perPage: 3,
      perMove: 1

    }).mount();
  });
}