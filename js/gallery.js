// Gallery Page Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Magnific Popup lightbox
    if (typeof $.fn.magnificPopup !== 'undefined') {
        $('.gallery-grid').magnificPopup({
            delegate: 'a', //Event Delegation: Instead of attaching click handlers to every image, we delegate to anchor (<a>) tags
            type: 'image',
            gallery: {
                enabled: true // turns on gallery navigation as arrow buttons
            },
            image: {
                titleSrc: function(item) {
                    return item.el.find('.gallery-caption').html();
                }
            }
        });
    }
});


//$ is jQuery's main function/object
//.fn = This is where jQuery plugins are attached
//.magnificPopup = This is the plugin method for initializing the lightbox