let br;

function setup() {
    createCanvas(500, 500);
    background('black');
    br = new Brusselator(1, 2.2);

    colorMode(HSB);
    //createLoop({ duration: 3, gif: true });
}

function draw() {
    stroke(200, 80, 80);
    strokeWeight(0.01);
    scale(100);

    br.update();
    br.update();
    br.update();
}

class Brusselator {
    constructor(a, b){
        this.a = a;
        this.b = b;

        this.x = 1;
        this.y = 1;
        this.dt = 0.1;
    }
    update(){
        let dx = (this.a + this.x**2 * this.y - (1 + this.b) * this.x) * this.dt;
        let dy = (this.b * this.x - this.x**2 * this.y) * this.dt;
        
        line(this.x, this.y, this.x + dx, this.y + dy);

        this.x += dx;
        this.y += dy;
    }
}

function mouseClicked(){
    save('brusselator.png');
}