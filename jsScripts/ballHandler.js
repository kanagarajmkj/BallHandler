/// reference path
var ballHandler = /** @class */ (function () {
    function ballHandler(div) {
        this.div = div;
        // this.divId =   div;   
        var obj = this;
        $(document).ready(function () {
            var ball = $('#' + div);
            setInterval(function () {
                obj.move(ball);
            }, 100);
        });
    }
    ballHandler.prototype.move = function (ball) {
        // Your code goes here...
        var $ball = $(ball);
        var pos = $ball.offset();
        var coords = { left: pos.left, top: pos.top };
        coords.left += 10;
        coords.top += 10;
        //let left = pos.left + 10;
        //let top = pos.top + 10;
        //$ball.offset({left: left, top: top});
        $ball.offset(coords);
    };
    return ballHandler;
}());
var ball = new ballHandler("ball");
//# sourceMappingURL=ballHandler.js.map