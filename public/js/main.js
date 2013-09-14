(function (window) {
    $('.sorry, .loading, .particle-wrapper').toggleClass('visible invisible');

    var height          = 800,
        orbits          = $('.particle-orbit'),
        particle_size   = [[11, 13],[13, 20],[12, 21],[7, 14],[7, 12],[10, 11],[12, 14],[7, 6],[13, 15],[9, 12],[11, 12],[16, 16],[6, 7],[9, 14],[12, 17]],
        size_factor     = [1,.8,.9,.5,.58,.72,.85,.7,.6,.65,.8,.55,.9,.98,.68,.4],
        angle           = [15,-20,50,60,55,-45,30,40,70,-70,25,20,-30,35,-40],
        delay           = [-1,1,.5,-.5,0,-1,0,1,.5,-.5,0,-.25,0,.25,0,.75],
        counter         = false;
    $('.particle-orbit').on('mouseover touchstart', function () {
        if (counter === false) {
            $('.particle-collection').css('animation', 'screenRotate 1s linear infinite alternate');
            counter = true;
        }
    });

    $('.particle-orbit').on('mouseout', function () {
        if (counter === true) {
            $('.particle-collection').css('animation', 'none');
            counter = false;
        }
    });

    $(document).on('touchend', function () {
        if (counter === true) {
            $('.particle-collection').css('animation', 'none');
            counter = false;
        }
    });

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

    var T = function (n) {
        return 4*C(n) + 8*S(n) + 4*M(n) + 4*D(n) + 4*Z(n) + O(n);
        },
        C = function (n) {
            if (n < 2) return 1;
            return 2*S(n-1) + 3*D(n-1) + 4*Z(n-1);
        },
        S = function (n) {
            if (n < 2) return 1;
            return 4*S(n-1) + 3*D(n-1) + O(n-1) + 2*Z(n-1) + C(n-1) + 2*M(n-1);
        },
        M = function (n) {
            if (n < 2) return 1;
            return 6*S(n-1) + 4*D(n-1) + 3*Z(n-1);
        }, 
        D = function (n) {
            if (n < 2) return 1;
            return 6*S(n-1) + O(n-1) + 4*Z(n-1) + 3*C(n-1) + 4*M(n-1);
        }, 
        Z = function (n) {
            if (n < 2) return 1;
            return 4*S(n-1) + 4*D(n-1) + O(n-1) + 2*Z(n-1) + 4*C(n-1) + 3*M(n-1);
        }, 
        O = function (n) {
            if (n < 2) return 1;
            return 8*S(n-1) + 4*D(n-1) + 4*Z(n-1);
        }

    window.T = T;
})(window)