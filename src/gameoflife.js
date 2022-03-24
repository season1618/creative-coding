let lg;

function setup() {
    createCanvas(500, 500);
    lg = new LifeGame(50, 50);
    createLoop({ duration: 3, gif: true });
}

function draw() {
    background(255);
    colorMode(HSB);
    lg.update();
    lg.draw();
}

class LifeGame {
    constructor(w, h){
        this.w = w;
        this.h = h;
        this.cells = new Array(w).fill().map(() => new Array(h).fill());
        for(let i = 0; i < w; i++){
            for(let j = 0; j < h; j++){
                this.cells[i][j] = round(random());
            }
        }
    }
    update(){
        let nextCells = new Array(this.w).fill().map(() => new Array(this.h).fill());
        for(let i = 1; i < this.w-1; i++){
            for(let j = 1; j < this.h-1; j++){
                let cnt = 0;
                for(let ii = -1; ii <= 1; ii++){
                    for(let jj = -1; jj <= 1; jj++){
                    if(ii == 0 && jj == 0) continue;
                    cnt += this.cells[i+ii][j+jj];
                    }
                }
                if(this.cells[i][j] == 0){
                    if(cnt == 3) nextCells[i][j] = 1;
                    else nextCells[i][j] = 0;
                }else{
                    if(cnt == 2 || cnt == 3) nextCells[i][j] = 1;
                    else nextCells[i][j] = 0;
                }
            }
        }
        for(let i = 1; i < this.w-1; i++){
            for(let j = 1; j < this.h-1; j++){
            this.cells[i][j] = nextCells[i][j];
            }
        }
    }
    draw(){
        for(let i = 1; i < this.w-1; i++){
            for(let j = 1; j < this.h-1; j++){
                if(this.cells[i][j] == 0) fill(0);
                else{
                    let s = noise(i/10, j/10) * 100;
                    fill(180, s, 70);
                }
                rect(10*i, 10*j, 10, 10)
            }
        }
    }
}