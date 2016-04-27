var setNumberX=5, setNumberY=5;
function write(canvas,txt,x,y){
    $(canvas).drawText({
        fillStyle: 'black',
        strokeStyle: 'black',
        strokeWidth: 0, //Met en gras par defaut
        x: x, y: y,
        fontSize: '0.7em',
        fontFamily: 'sans-serif,serif',
        text: txt
    });
}

function curve(totalX,totalY,numberX,numberY) {
    y=10,x=20;
    var originX=20,maxX=640,originY=630,maxY=700,canvas='canvas';
    $('canvas').clearCanvas();
    $(canvas).drawLine({
        strokeStyle: "black",
        strokeWidth: 4,
        x1:originX, y1:0,
        x2:originX, y2:maxY,
        x3:originX, y3:originY,
        x4:maxX, y4:originY,
    });
    while(x<maxX) {
        $(canvas).drawLine({
           strokeStyle: 'black',
           strokeWidth: 3,
           x1:x, y1:originY,
           x2:x, y2:originY-10
        });
        x=x+20;
        totalX++;
        if (numberX) {
            if (totalX%numberX==0){
            write(canvas,totalX,x,originY+10);
            }
        }
    }
    while(y<maxY) {
        $(canvas).drawLine({
            strokeStyle: 'black',
            strokeWidth: 3,
            x1:originX, y1:y,
            x2:originX+10, y2:y
        });
        y=y+20;
        totalY--;
        if (numberY) {
            if (totalY%numberY==0){
                write(canvas,totalY,originX-10,y);
            }
        }
    }
}

$('#normal').click(function () {
    $('#future tbody').css('display','none');
    curve(0,31,5,5);
});

$('#custom').click(function() {
    $('#future tbody').css('display','flex');
    if ($('#numberX').val()) {
        setNumberX=$('#numberX').val();
    }
    else if ($('#numberY').val()) {
        setNumberY=$('#numberY').val();
    }
    curve(0,31,setNumberX,setNumberY);
});

function number(xy) {
    if (xy.id=='numberX') {
        setNumberX = parseInt(xy.value);
    }
    else if (xy.id=='numberY') {
        setNumberY = parseInt(xy.value);
    }
    else {
        alert("Erreur !\nDonnées envoyé inconnues");
    }
    curve(0,31,setNumberX,setNumberY);
}

curve(0,31,setNumberX,setNumberY);