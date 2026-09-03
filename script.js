document.addEventListener("DOMContentLoaded", () => {
    
    // Rolagem suave para o botão do Hero
    const ctaBtn = document.getElementById("cta-btn");
    if (ctaBtn) {
        ctaBtn.addEventListener("click", () => {
            const habitatSection = document.getElementById("habitat");
            habitatSection.scrollIntoView({ behavior: "smooth" });
        });
    }

    // Animação de contagem numérica das estatísticas
    const statNumbers = document.querySelectorAll(".stat-number");
    let animated = false;

    const animateStats = () => {
        statNumbers.forEach((stat) => {
            const target = +stat.getAttribute("data-target");
            const isNegative = target < 0;
            const absoluteTarget = Math.abs(target);
            
            let current = 0;
            const increment = Math.ceil(absoluteTarget / 50);

            const updateCount = () => {
                current += increment;
                if (current < absoluteTarget) {
                    stat.innerText = isNegative ? -current : current;
                    setTimeout(updateCount, 30);
                } else {
                    stat.innerText = target;
                }
            };

            updateCount();
        });
    };

    // Disparar animação apenas quando a seção estiver visível no scroll
    const statsSection = document.querySelector(".stats-section");
    const observerOptions = {
        root: null,
        threshold: 0.4
    };

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && !animated) {
                animateStats();
                animated = true;
            }
        });
    }, observerOptions);

    if (statsSection) {
        statsObserver.observe(statsSection);
    }
});