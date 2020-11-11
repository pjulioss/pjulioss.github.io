//Scroll suave
const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
function scrollToSection(event) {
    event.preventDefault();

    //pegar o endereço correto do elemento
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    //fazer a transição até o id selecionado
    section.scrollIntoView({
        behavior: "smooth",
        block: 'start'
    });


}

linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
})