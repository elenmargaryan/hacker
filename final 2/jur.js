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
    // die() {
    //     matrix[this.y][this.x] = 0;
    //     for (var i in hetqArr) {
    //         if (this.x == hetqArr[i].x && this.y == hetqArr[i].y) {
    //             hetqArr.splice(i, 1);
    //             break;
    //         }
    //     }
    // }
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
                matrix[this.y][this.x] = 1
                let jurY = oneJurEmptyCell[1]
                matrix[jurY][this.x] = 6
                this.y = hetqY
            }
        }
        else {
            this.die();
        }
    }

    // eat() {
    //     this.getNewCoordinates()
    //     let hetqs = this.chooseCell(2)
    //     let oneHetqX = hetqs[0]
    //     let oneHetqY = hetqs[1];
    //     if (oneHetqX === this.x && oneHetqY === this.y - 1 ) {
    //         this.energy++;
    //         matrix[this.y][this.x] = 0;

    //         matrix[oneHetqY][oneHetqX] = 4;

    //         this.y = oneHetqY;
    //         for (var i in hetqArr) {
    //             if (oneHetqX == hetqArr[i].x && oneHetqY == hetqArr[i].y ) {
    //                 hetqArr.splice(i, 1);
    //                 break;
    //             }
    //         }
    //     } else {
    //         this.move()
    //     }
    // }
// hetq-ը ուտում է այն խոտակերներին,որոնք գտնվում են իրենից 1 վանդակ վերև
}