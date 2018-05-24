$(document).ready(function () {
	$('a.gallery').featherlightGallery({
        openSpeed: 500,
        closeSpeed: 500,
        galleryFadeIn: 1000,
        galleryFadeOut: 300,
        closeOnClick: 'background',
        previousIcon: '<span class="fa fa-chevron-circle-left" aria-hidden="true"></span>',
        nextIcon: '<span class="fa fa-chevron-circle-right" aria-hidden="true"></span>',
        closeIcon: '<span class="fa fa-times-circle" aria-hidden="true"></span>',
        variant: 'f-gallery'
    });
});