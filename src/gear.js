function setup() {
    createCanvas(800, 400);
    frameRate(60);
    g1 = new Gear(25, 120, 100, 2*PI/60, 0, 160, 200, true);
    g2 = new Gear(50, 240, 220, -2*PI/120, 0, 500, 200, false);
}

function draw() {
    background(255);
    g1.draw();
    g2.draw();
}

class Gear {
    constructor(n, R, r, omega, alpha, x, y, flag){
        this.n = n;
        this.R = R;
        this.r = r;
        this.omega = omega;
        this.th = alpha;
        this.x = x;
        this.y = y;
        this.color = flag;
    }
    draw(){
        if(this.color) fill('red');
        else fill('white');
        for(let i = 0; i < 2*this.n; i++){
            if(i % 2 == 0){
                arc(
                    this.x, this.y, 2*this.R, 2*this.R,
                    this.th + i*PI/this.n, this.th + (i+1)*PI/this.n
                );
            }else{
                arc(
                    this.x, this.y, 2*this.r, 2*this.r,
                    this.th + i*PI/this.n, this.th + (i+1)*PI/this.n
                );
            }
            line(
                this.x + this.r*cos(this.th + i*PI/this.n), this.y + this.r*sin(this.th + i*PI/this.n),
                this.x + this.R*cos(this.th + i*PI/this.n), this.y + this.R*sin(this.th + i*PI/this.n)
            );
        }
        this.th += this.omega;
    }
}