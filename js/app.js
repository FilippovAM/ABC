$(function () {
    var $sideBarMenu = $('.header__sidebar-menu');

    checkSideBarMenuPosAndInit();

    $(window).resize(function () {
        checkSideBarMenuPosAndInit();
    });


    function initSideBarMenuPosForMobile() {
        var offsetTop = 130;
        var newOffsetTop = 20;

        $(window).bind('scroll.sideBarMenuScroll', function () {
            if ($(this).scrollTop() > offsetTop - newOffsetTop) {
                $sideBarMenu.css({
                    'position': 'fixed',
                    'top': newOffsetTop + 'px'
                });
            } else {
                $sideBarMenu.css({
                    'position': 'absolute',
                    'top': offsetTop + 'px'
                });
            }
        });
    }

    function checkSideBarMenuPosAndInit() {
        if ($sideBarMenu.length) {
            if (window.matchMedia('(max-width: 991px)').matches) {
                initSideBarMenuPosForMobile();
            } else {
                $sideBarMenu.css({
                    'position': '',
                    'top': ''
                });

                $(window).unbind('.sideBarMenuScroll');
            }
        }
    }
});

