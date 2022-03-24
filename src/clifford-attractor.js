let ca;

function setup() {
    createCanvas(500, 500);
    background('black');
    ca = new CliffordAttractor(random(2), random(2), random(2), random(2));
    
    stroke('white');
}

function draw(){
    strokeWeight(0.01);
    translate(width/2, height/2);

    ca.update();
    ca.update();
    ca.update();
}

class CliffordAttractor {
    constructor(a, b, c, d){console.log(a, b, c, d);
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;

        this.x = 0;
        this.y = 0;
    }
    update(){
        let x_next = sin(this.a * this.y) + this.c * cos(this.a * this.x);
        let y_next = sin(this.b * this.x) + this.d * cos(this.b * this.y);
        
        point(100 * this.x, 100 * this.y);

        this.x = x_next;
        this.y = y_next;
    }
}

function mouseClicked(){
    save('clifford-attractor.png');
}