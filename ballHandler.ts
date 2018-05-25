/// reference path
class ballHandler {
    private divId:string;
    private ballDiv: any;
    private is
    constructor(public div: string) {  
       // this.divId =   div;   
       let obj = this;
       $(document).ready(function (){
         let ball = $('#' + div);
         setInterval(function () {
            obj.move(ball);
         }, 100);
       });
    
    }

    move(ball: any): void  {
        // Your code goes here...
        let $ball = $(ball);
        let pos = $ball.offset();
        let coords = {left: pos.left, top: pos.top};
        coords.left +=10;
        coords.top += 10;
        //let left = pos.left + 10;
        //let top = pos.top + 10;
        //$ball.offset({left: left, top: top});
        $ball.offset(coords);
    }
}
var ball = new ballHandler("ball");



