$(document).ready(function () {
	$('a.gallery').featherlightGallery({
        openSpeed: 500,
        closeSpeed: 500,
        galleryFadeIn: 1000,
        galleryFadeOut: 300,
        closeOnClick: 'background',
        previousIcon: '<span class="fa-layers fa-fw"><i class="fas fa-circle" data-fa-transform="down-11 shrink-4" style="color:darkOrange"></i><i class="fa-inverse fas fa-chevron-circle-left" data-fa-transform="down-11 shrink-3"></i></span>',
        nextIcon: '<span class="fa-layers fa-fw"><i class="fas fa-circle" data-fa-transform="down-11 shrink-4" style="color:darkOrange"></i><i class="fa-inverse fas fa-chevron-circle-right" data-fa-transform="down-11 shrink-3"></i></span>',
        closeIcon: '<span class="fas fa-times-circle"></span>',
        variant: 'f-gallery',
        afterContent: function(event) {
            // make sure new image is actually hidden before it fades in
            $(this.$content).fadeTo(0, 0);
        },
        afterOpen: function(event) {
            // this function is necessary to prevent first image from being hidden
            $(this.$content).fadeTo(this.galleryFadeIn, 1);
        },
    });
});