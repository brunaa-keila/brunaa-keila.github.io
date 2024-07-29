function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.classList.add('show');
        } else {
            section.classList.remove('show');
        }
    });
}

// Mostrar a seção "Sobre Mim" por padrão quando a página carrega
document.addEventListener('DOMContentLoaded', () => {
    showSection('sobre');
});
