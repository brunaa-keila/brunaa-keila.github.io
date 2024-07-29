function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
}

// Mostrar a seção "Sobre Mim" por padrão quando a página carrega
document.addEventListener('DOMContentLoaded', () => {
    showSection('sobre');
});
