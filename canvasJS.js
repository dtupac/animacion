function dibujarFlecha() {
    var colors = ["#000000", "#ffffff", "#ffcc00"];
    var ctx = document.getElementById("canvas").getContext("2d");
    /*ctx.lineWidth = 1;*/
    ctx.strokeStyle = "red";
    ctx.fillStyle = "red";
    /*ctx.setTransform(1, 0, 0, 1, 20, 0);*/
    // small
    /*ctx.translate(100, 100);*/
    /*ctx.beginPath();*/

    ctx.arrow(10, 10, 50, 10, [0, 1, -10, 1, -10, 5]);
    /*ctx.translate(50,0);*/
    /*ctx.setTransform(1,0,0,1,i,0);*/
    ctx.fill();
}

function animarFlecha() {
    var ctx = document.getElementById("canvas").getContext("2d");
    for(var i=100;i<=650;i+=50){
        ctx.setTransform(1,0,0,1,i,0);
        dibujarFlecha();
    }

    for(var i=0;i<=500;i+=50){
        ctx.setTransform(1,0,0,1,720,i);
        dibujarFlecha(ctx.rotate(Math.PI/2));
    }

    for(var i=720;i>=150;i-=50){
        ctx.setTransform(1,0,0,1,i,570);
        dibujarFlecha(ctx.rotate(Math.PI));
    }

    for(var i=570;i>=50;i-=50){
        ctx.setTransform(1,0,0,1,100,i);
        dibujarFlecha(ctx.rotate(-Math.PI/2));
    }
}