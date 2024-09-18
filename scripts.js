document.addEventListener('DOMContentLoaded', function() {
    const galleryImages = document.querySelectorAll('.gallery img');
    const modal = document.getElementById('modal');
    const modalDescription = document.getElementById('modal-description');
    const closeModal = document.getElementById('close');

    galleryImages.forEach((image) => {
        image.addEventListener('click', function() {
            modal.style.display = 'block';
            modalDescription.innerText = this.getAttribute('data-description');
        });
    });

    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
