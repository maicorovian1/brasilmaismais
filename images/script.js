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
