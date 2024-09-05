// Abrir o WhatsApp com mensagem pré-definida
const whatsappButton = document.querySelector('.whatsapp-btn');

whatsappButton.addEventListener('click', function() {
    const phoneNumber = '5566992113444'; // Coloque seu número de telefone com DDI e DDD
    const message = 'Olá, vim pelo site, gostaria de mais informações!'; // Mensagem pré-definida
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappURL, '_blank');
});
