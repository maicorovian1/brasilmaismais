// Função para abrir/fechar o menu hamburguer
function toggleMenu() {
    const menu = document.getElementById('menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

// JavaScript para rolagem suave até as seções
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Previne o comportamento padrão de pular diretamente
        const targetId = this.getAttribute('href'); // Pega o id da seção
        const targetSection = document.querySelector(targetId);
        
        // Faz a rolagem suave até a seção
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });

        // Fecha o menu após clicar em um link
        document.getElementById('menu').style.display = 'none';
    });
});
// Mostrar ou esconder o botão dependendo da rolagem da página
window.onscroll = function() {
    const backToTopButton = document.getElementById('back-to-top');
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopButton.style.display = "block"; // Mostrar o botão
    } else {
        backToTopButton.style.display = "none";  // Esconder o botão
    }
};

// Função para rolar a página de volta ao topo
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Rolar suavemente para o topo
    });
}
// Seleciona o botão do dropdown e o menu
const dropdownBtn = document.querySelector('.dropdown-btn');
const dropdownMenu = document.querySelector('.dropdown-menu');

// Adiciona o evento de clique para abrir ou fechar o menu
dropdownBtn.addEventListener('click', function () {
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});

// Fecha o menu dropdown se clicar fora dele
window.addEventListener('click', function (event) {
    if (!event.target.matches('.dropdown-btn')) {
        if (dropdownMenu.style.display === 'block') {
            dropdownMenu.style.display = 'none';
        }
    }
});
