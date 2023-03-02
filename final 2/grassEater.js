class GrassEater extends Creature {
    constructor(x, y) {
        super(x, y)
        this.energy = 8;
        this.directions = [];
        // this.gender = this.generateGender()
        // this.color = getthecolor(this.gender)
    }

    // generateGender(){
    //     let gnd = random(1)
    //     // console.log(gnd);

    //     fill("FFA500")

    // }

    // getthecolor(){
    //     if(gnd){
    //         fill("FFA500")
    //     }
    // }

    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    die() {
        // console.log(matrix[this.y][this.x]);
        matrix[this.y][this.x] = 0;
        for (var i in grassEatArr) {
            if (this.x == grassEatArr[i].x && this.y == grassEatArr[i].y) {
                grassEatArr.splice(i, 1);
                break;
            }
        }
        // console.log(matrix[this.y][this.x]);
    }

    mul() {
        if (this.energy >= 10) {
            var newCell = random(this.chooseCell(0));
            if (newCell) {
                var newGrassEater = new GrassEater(newCell[0], newCell[1]);
                grassEatArr.push(newGrassEater);
                matrix[newCell[1]][newCell[0]] = 2;
                this.energy = 5

            }
        }
    }
    move() {
        if (this.energy > 0) {
            this.getNewCoordinates();
            this.energy--;
            let emptyCells = this.chooseCell(0)
            let oneEmptyCell = random(emptyCells)
            if (oneEmptyCell) {
                matrix[this.y][this.x] = 0
                let newX = oneEmptyCell[0]
                let newY = oneEmptyCell[1]
                matrix[newY][newX] = 2
                this.y = newY
                this.x = newX
            }
        }
        else {
            this.die();
        }
    }

    eat() {
        this.getNewCoordinates()
        let grasses = this.chooseCell(1)
        let oneGrass = random(grasses)
        if (oneGrass) {
            this.energy++;
            matrix[this.y][this.x] = 0;
            let oneGrassX = oneGrass[0];
            let oneGrassY = oneGrass[1];
            matrix[oneGrassY][oneGrassX] = 2;

            this.y = oneGrassY;
            this.x = oneGrassX;
            for (var i in grassArr) {
                if (oneGrassX == grassArr[i].x && oneGrassY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
        } else {
            this.move()
        }
    }

}
