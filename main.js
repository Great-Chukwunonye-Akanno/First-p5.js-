function preload() {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
    
}

function draw(){
    image(video, 220, 140, 200, 200);
    fill("green")
    stroke("brown")
    rect(50, 50, 540, 30 )
    rect(50,400,540,30)
    rect(50,50,30,350)
    rect(580,50,30,380)
    fill("red")
    stroke("brown")
    circle(60,70,50)
    circle(60,410,50)
    circle(600,410,50)
    circle(600, 70, 50)

}

function take_snapshot(){
    save('student_name.png');
}

