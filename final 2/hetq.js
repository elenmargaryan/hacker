class Hetq {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 33;
        this.directions = [];
    }
    // Hetq - ը քայլում է միայն ուղղահայաց ուղղությամբ և իր հետևից թողնում է հետք(խոտ), որը որ գիշատիչը և խոտակերը ուտում են

    chooseCell(character) {
        let found = []
        for (let i in this.directions) {
            let x = 0
            let y = this.directions[i][1]
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i])
                }
            }
        }
        return found
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
        for (var i in hetqArr) {
            if (this.x == hetqArr[i].x && this.y == hetqArr[i].y) {
                hetqArr.splice(i, 1);
                break;
            }
        }
    }
    mul() {
        if (this.energy > 32) {
            var hetqCell = random(this.chooseCell(0));
            if (hetqCell) {
                var newHetq = new Hetq(hetqCell[0], hetqCell[1]);
                hetqArr.push(newHetq);
                matrix[hetqCell[1]][hetqCell[0]] = 4;
                this.energy = 25

            }
        }
    }
    move() {
        if (this.energy > 0) {
            this.getNewCoordinates();
            this.energy--;
            let hetqEmptyCells = this.chooseCell(0)
            let oneHetqEmptyCell = random(hetqEmptyCells)
            if (oneHetqEmptyCell) {
                matrix[this.y][this.x] = 1
                let hetqY = oneHetqEmptyCell[1]
                matrix[hetqY][this.x] = 4
                this.y = hetqY
            }
        }
        else {
            this.die();
        }
    }

    eat() {
        this.getNewCoordinates()
        let hetqs = this.chooseCell(2)
        let oneHetqX = hetqs[0]
        let oneHetqY = hetqs[1];
        if (oneHetqX === this.x && oneHetqY === this.y - 1 ) {
            this.energy++;
            matrix[this.y][this.x] = 0;

            matrix[oneHetqY][oneHetqX] = 4;

            this.y = oneHetqY;
            for (var i in hetqArr) {
                if (oneHetqX == hetqArr[i].x && oneHetqY == hetqArr[i].y ) {
                    hetqArr.splice(i, 1);
                    break;
                }
            }
        } else {
            this.move()
        }
    }
// hetq-ը ուտում է այն խոտակերներին,որոնք գտնվում են իրենից 1 վանդակ վերև
}