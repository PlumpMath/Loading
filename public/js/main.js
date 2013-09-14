(function (window) {
    $('.sorry, .loading, .particle-wrapper').toggleClass('visible invisible');

    var height          = 450,
        orbits          = $('.particle-orbit'),
        particle_size   = [[11, 13],[13, 20],[12, 21],[7, 14],[7, 12],[10, 11],[12, 14],[7, 6],[13, 15],[9, 12],[11, 12],[16, 16],[6, 7],[9, 14],[12, 17]],
        size_factor     = [1,.8,.9,.5,1,1,.85,.7,.6,.65,.8,.55,.9,.98,.68,.7],
        angle           = [20,-20,50,60,50,-40,30,40,70,-70,20,20,-30,30,-40],
        delay           = [-1,1,.5,-.5,0,-1,0,1,.5,-.5,0,-.25,0,.25,0,.75];

    for (var i = 0; i < orbits.length; i++) {
        var size = height/5 * size_factor[i];

        $(orbits[i]).children().css('animation', 'pathRotate '+2*size_factor[i]+'s linear '+delay[i]+'s infinite');
        $(orbits[i]).children().children().css('width', particle_size[i][0]+'px');
        $(orbits[i]).children().children().css('height', particle_size[i][1]+'px');
        $(orbits[i]).css('transform', 'rotateX(80deg) rotateY('+angle[i]+'deg)');
        $(orbits[i]).css('width', size+'px');
        $(orbits[i]).css('height', size+'px');
        $(orbits[i]).css('margin-left', -size/2+'px');
        $(orbits[i]).css('margin-top', -size/2+'px');
    }

    var str         = '',
        ellipsis    = $('.ellipsis');

    setInterval(function() {
        if (str.length === 3) {
            str = '';
        } else {
            str += '.';
        }

        ellipsis.html(str);
    }, 750)
})(window)