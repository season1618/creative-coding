let la;

function setup() {
    createCanvas(500, 500);
    background('black');
    la = new LangfordAttractor(1, 0.7, 0.6, 3.5, 0.25, 0);

    colorMode(HSB);
    //createLoop({ duration: 3, gif: true });
}

function draw() {
    stroke(200, 80, 80);
    strokeWeight(0.01);
    translate(width/2, height/2);
    scale(100);

    la.update();
    la.update();
    la.update();
}

class LangfordAttractor {
    constructor(alpha, beta, lambda, omega, rho, epsilon){
        this.alpha = alpha;
        this.beta = beta;
        this.lambda = lambda;
        this.omega = omega;
        this.rho = rho;
        this.epsilon = epsilon;

        this.x = 1;
        this.y = 1;
        this.z = 1;
        this.dt = 0.01;
    }
    update(){
        let dx = ((this.z - this.beta) * this.x - this.omega * this.y) * this.dt;
        let dy = (this.omega * this.x + (this.z - this.beta) * this.y) * this.dt;
        let dz = (this.lambda + this.alpha + this.z - this.z**3/3 - (this.x**2 + this.y**2) * (1 + this.rho * this.z) + this.epsilon * this.z * this.x**3) * this.dt;
        
        line(this.x, this.z, this.x + dx, this.z + dz);

        this.x += dx;
        this.y += dy;
        this.z += dz;
    }
}

function mouseClicked(){
    save('langford-attractor.png');
}