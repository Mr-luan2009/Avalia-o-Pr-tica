// Efeito de rolagem suave para os links de navegação
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Mensagem de boas-vindas no console para verificar o carregamento do script
console.log("Sistema de Suporte à Vida de Marte carregado com sucesso!");
