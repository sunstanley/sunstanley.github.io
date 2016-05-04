var loadButton = document.getElementById('load-more');
var userFeed = new Instafeed({
    get: 'user',
    userId: 1702350254,
    clientId: '6e5dc7b05d9d47e38a485a97a8c43a12',
    accessToken: '1702350254.6e5dc7b.e4ec66164f704363931d11ef1878e60f',
    target: 'instafeed',
    sortBy: 'most-recent',
    template: '<li class="insta"><a href="{{link}}"><img src="{{image}}" /></a></li>',
    limit: 3,
    resolution: 'low_resolution',
    after: function () {
        if (!this.hasNext()) {
            loadButton.attr('disabled', 'disabled').addClass('hidden');
        }
    }
});
    
if(loadButton) {
    loadButton.addEventListener('click', function () {
        userFeed.next();
    });
}

userFeed.run();