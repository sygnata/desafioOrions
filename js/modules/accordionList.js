export default function accordionList() {
  const accordionLista = document.querySelectorAll('.js-accordion dt');

  function activeAccordion(event) {
    this.classList.toggle('ativo')
    this.nextElementSibling.classList.toggle('ativo');
  }

  accordionLista.forEach((item) => {
    item.addEventListener('click', activeAccordion);
  })


}