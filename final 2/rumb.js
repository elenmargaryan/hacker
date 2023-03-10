class Rumb {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 5;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],

            [this.x - 2, this.y - 2],
            [this.x - 2, this.y - 1],
            [this.x - 2, this.y + 1],
            [this.x - 2, this.y + 2],
            [this.x - 2, this.y],

            [this.x, this.y + 2],
            [this.x, this.y - 2],

            [this.x + 1, this.y - 2],
            [this.x + 1, this.y + 2],

            [this.x - 1, this.y - 2],
            [this.x - 1, this.y + 2],

            [this.x + 2, this.y + 1],
            [this.x + 2, this.y - 1],
            [this.x + 2, this.y + 2],
            [this.x + 2, this.y - 2],
            [this.x + 2, this.y],
        ];

    }
// Rumb-ը պայթեցնում է կողքի 23 վանդակները

    die() {
        matrix[this.y][this.x] = 0;
        for (var i in rumbArr) {
            if (this.x == rumbArr[i].x && this.y == rumbArr[i].y) {
                rumbArr.splice(i, 1);
                break;
            }
        }
    }
    mul() {
        this.energy++
        for (let k in this.directions) {
            if (this.directions[k][1] >= 0 && this.directions[k][1] < matrix[0].length && this.directions[k][0] >= 0 && this.directions[k][0] < matrix.length) {
                if (this.energy >= 10) {
                    this.die()
                    matrix[this.directions[k][1]][this.directions[k][0]] = 0;
                }
            }
        }
    }
}
