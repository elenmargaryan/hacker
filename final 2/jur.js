class Jur extends Creature{
    constructor(x, y) {
        super(x,y)
        this.energy = 45;
        this.directions = [];
    }

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
        matrix[this.y][this.x] = 0;
        for (var i in jurArr) {
            if (this.x == jurArr[i].x && this.y == jurArr[i].y) {
                jurArr.splice(i, 1);
                break;
            }
        }
    }
    mul() {
        if (this.energy > 40) {
            var jurCell = random(this.chooseCell(0));
            if (jurCell) {
                var newJur= new Jur(jurCell[0], jurCell[1]);
                jurArr.push(newJur);
                matrix[jurCell[1]][jurCell[0]] = 6;
                this.energy = 25

            }
        }
    }
    move() {
        if (this.energy > 0) {
            this.getNewCoordinates();
            this.energy--;
            let jurEmptyCells = this.chooseCell(0)
            let oneJurEmptyCell = random(jurEmptyCells)
            if (oneJurEmptyCell) {
                matrix[this.y][this.x] = 0
                let jurX = oneJurEmptyCell[1]
                matrix[this.y][jurX] = 6
                this.x = jurX
            }
        }
        else {
            this.die();
        }
    }

    // eat() {
    //     this.getNewCoordinates()
    //     let jurs = this.chooseCell(0)
    //     let oneJurX = jurs[0]
    //     let oneJurY = jurs[1];
    //     if (oneJurX === this.x - 1 && oneJurY === this.y ) {
    //         this.energy++;
    //         matrix[this.y][this.x] = 0;

    //         matrix[oneJurY][oneJurX] = 6;

    //         this.x = oneJurX;
    //         for (var i in jurArr) {
    //             if (oneJurX == jurArr[i].x && onejurY == jurArr[i].y ) {
    //                 jurArr.splice(i, 1);
    //                 break;
    //             }
    //         }
    //     } else {
    //         this.move()
    //     }
    // }

}