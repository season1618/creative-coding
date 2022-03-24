let la;

function setup() {
    createCanvas(500, 500);
    background('black');
    la = new LorenzAttractor(10, 28, 8.0/3.0);

    colorMode(HSB);
    stroke(60, 80, 80);
    //createLoop({ duration: 3, gif: true });
}

function draw() {
    strokeWeight(0.1);
    translate(width/2, height/2);
    scale(5);

    la.update();
    la.update();
    la.update();
}

class LorenzAttractor {
    constructor(p, r, b){
        this.p = p;
        this.r = r;
        this.b = b;

        this.x = 0.1;
        this.y = 0;
        this.z = 0;
        this.dt = 0.01;
    }
    update(){
        let dx = (-this.p*this.x + this.p*this.y) * this.dt;
        let dy = (-this.x*this.z + this.r*this.x - this.y) * this.dt;
        let dz = (this.x*this.y - this.b*this.z) * this.dt;
        
        line(this.x, this.y, this.x + dx, this.y + dy);

        this.x += dx;
        this.y += dy;
        this.z += dz;
    }
}

function mouseClicked(){
    save('lorenz-attractor.png');
}