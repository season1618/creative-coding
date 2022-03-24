let ha;

function setup() {
    createCanvas(500, 500);
    background('black');
    ha = new HenonAttractor(1.4, 0.3);

    colorMode(HSB);
}

function draw() {
    stroke(120, 80, 80);
    strokeWeight(0.001);
    translate(width/2, height/2);

    ha.update();
    ha.update();
    ha.update();
}

class HenonAttractor {
    constructor(a, b){
        this.a = a;
        this.b = b;

        this.x = 0;
        this.y = 0;
    }
    update(){
        let x_next = 1 - this.a * this.x**2 + this.y;
        let y_next = this.b * this.x;
        
        point(150*this.x, 150*this.y);

        this.x = x_next;
        this.y = y_next;
    }
}

function mouseClicked(){
    save('henon-attractor.png');
}