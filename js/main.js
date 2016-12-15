function setup(){
    createCanvas(windowWidth,windowHeight );
    createElement("h1","hakueiのホームページ");
    createElement("h2","マインクラフトの情報");
    createElement("h3","斧の作り方");
    colorMode(HSB,100);
   
}

function draw(){
    noStroke();
    fill(50.,100,100);
    ellipse(mouseX,mouseY,80,80);
};