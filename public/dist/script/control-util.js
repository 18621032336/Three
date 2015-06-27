define(['jquery'], function(require) {

    /**
     * 阻止拖动事件
     */
    function preventDefaultTouch( ) {
        var $body = $(document.body);

        $body.on('touchstart', function(e){
            e.preventDefault();
        })
        $body.on('touchmove', function(e){
            e.preventDefault();
        });

        $body.on('touchend', function(e) {
            e.preventDefault();
        })
    }

    return {
        preventDefaultTouch:preventDefaultTouch
    };

})