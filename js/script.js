// Smooth scroll behavior for gallery
document.addEventListener('DOMContentLoaded', function() {
    const galleryContainer = document.querySelector('.gallery-container');
    
    // Optional: Add horizontal scroll with mouse wheel
    if (galleryContainer) {
        galleryContainer.addEventListener('wheel', function(e) {
            if (e.deltaY !== 0) {
                e.preventDefault();
                this.scrollLeft += e.deltaY;
            }
        }, { passive: false });
    }
});
