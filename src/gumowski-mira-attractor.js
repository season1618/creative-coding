let gm;

function setup() {
    createCanvas(500, 500);
    background('black');
    gm = new GumowskiMiraAttractor(0.009, 0.05, -0.801);

    colorMode(HSB);
}

function draw() {
    stroke(20, 80, 80);
    strokeWeight(0.01);
    translate(width/2, height/2);
    scale(10);

    gm.update();
    gm.update();
}

class GumowskiMiraAttractor {
    constructor(alpha, sigma, mu){
        this.alpha = alpha;
        this.sigma = sigma;
        this.mu = mu;

        this.f = this.f2;
        this.g = this.g1;

        this.x = 0.1;
        this.y = 0.1;
    }
    update(){
        let [x_next, y_next] = this.f([this.x, this.y]);
        
        line(this.x, this.y, x_next, y_next);

        this.x = x_next;
        this.y = y_next;
    }
    f1(p){
        let [x, y] = p;
        let x_next = y + this.g(x);
        let y_next = -x + this.g(x_next);
        return [x_next, y_next];
    }
    f2(p){
        let [x, y] = p;
        let x_next = y + this.alpha * y * (1 - this.sigma * y**2) + this.g(x);
        let y_next = -x + this.g(x_next);
        return [x_next, y_next];
    }
    g1(x){
        return this.mu * x + 2 * (1 - this.mu) * x**2 / (1 + x**2);
    }
    g2(x){
        return this.mu * x + (1 - this.mu) * x**2 * Math.exp((1 - x**2)/4);
    }
}

function mouseClicked(){
    save('gumowski-mira-attractor.png');
}