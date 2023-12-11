window.addEventListener("load",function(){
    const canvas = document.getElementById("canv");
    const ctx = canvas.getContext("2d");

    const imgWingUp = document.getElementById("img-pigeon1");
    const imgWingDown = document.getElementById("img-pigeon2")
    const imgPipe = document.getElementById("img-pipe")

    const startY = 110;

    const pigeon = Sprite(imgWingUp,10,startY);

    var alive = false;

    var passedPipes = 0;
    var highScore = 0;

    var pipes = []

    function addPipes(y){
        if(!y) y = -25;
        const gap = 140;
        const startX = 200
        const scale = 0.5;
        pipes.push(Sprite(imgPipe,startX,y,180).rescale(scale));
        pipes.push(Sprite(imgPipe,startX,y+gap).rescale(scale));
    }

    function switchSprite(){
        if(pigeon.image === imgWingUp) pigeon.image = imgWingDown;
        else pigeon.image = imgWingUp;
    }

    setInterval(switchSprite,200)

    setInterval(function(){
        addPipes(randi(-30,30))
    },1000)

    // Main loop
    setInterval(function(){
        clearCanvas(canvas);

        for(var i=0;i<pipes.length;i++){
            const pipe = pipes[i];
            pipe.render(canvas);
        }

        pigeon.render(canvas);
    })
})