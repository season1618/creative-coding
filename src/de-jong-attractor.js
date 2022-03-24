let da;

function setup() {
    createCanvas(500, 500);
    background('black');
    da = new DeJongdAttractor(random(-2,2), random(-2,2), random(-2,2), random(-2,2));

    colorMode(HSB);
    stroke(300, 80, 80);
}

function draw(){
    strokeWeight(0.01);
    translate(width/2, height/2);

    da.update();
    da.update();
    da.update();
}

class DeJongdAttractor {
    constructor(a, b, c, d){
        console.log(a, b, c, d);
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;

        this.x = 0;
        this.y = 0;
    }
    update(){
        let x_next = sin(this.a * this.y) - cos(this.b * this.x);
        let y_next = sin(this.c * this.x) - cos(this.d * this.y);
        
        point(100 * this.x, 100 * this.y);

        this.x = x_next;
        this.y = y_next;
    }
}

function mouseClicked(){
    save('de-jong-attractor.png');
}