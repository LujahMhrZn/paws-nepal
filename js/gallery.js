// Gallery Page Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Magnific Popup lightbox
    if (typeof $.fn.magnificPopup !== 'undefined') {
        $('.gallery-grid').magnificPopup({
            delegate: 'a',
            type: 'image',
            gallery: {
                enabled: true
            },
            image: {
                titleSrc: function(item) {
                    return item.el.find('.gallery-caption').html();
                }
            }
        });
    }
});