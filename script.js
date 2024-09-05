// Abrir o WhatsApp com mensagem pré-definida
const whatsappButton = document.querySelector('.whatsapp-btn');

whatsappButton.addEventListener('click', function() {
    const phoneNumber = '5566992113444'; // Coloque seu número de telefone com DDI e DDD
    const message = 'Olá, vim pelo site, gostaria de mais informações!'; // Mensagem pré-definida
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappURL, '_blank');
});

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
    });
});