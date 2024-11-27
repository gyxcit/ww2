// Sélection des éléments nécessaires
const figures = document.querySelectorAll('.gallery figure');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalClose = document.getElementById('modal-close');

// Afficher la modale lors du clic sur une image
figures.forEach(figure => {
    figure.addEventListener('click', () => {
        const title = figure.getAttribute('data-title');
        const description = figure.getAttribute('data-description');
        const image = figure.getAttribute('data-image');

        modalTitle.textContent = title;
        modalDescription.textContent = description;
        modalImage.src = image;

        modal.classList.remove('hidden');
    });
});

// Fermer la modale
modalClose.addEventListener('click', () => {
    modal.classList.add('hidden');
});

// Fermer la modale en cliquant à l'extérieur
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.add('hidden');
    }
});
