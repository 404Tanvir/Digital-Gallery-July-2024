// Example of image modal popup feature
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.card img');
    images.forEach(img => {
        img.addEventListener('click', function() {
            const modal = document.createElement('div');
            modal.classList.add('image-modal');
            modal.innerHTML = `
                <div class="modal-content">
                    <img src="${this.src}" class="img-fluid">
                    <span class="close-btn">&times;</span>
                </div>
            `;
            document.body.appendChild(modal);

            modal.querySelector('.close-btn').addEventListener('click', () => {
                modal.remove();
            });
        });
    });
});
