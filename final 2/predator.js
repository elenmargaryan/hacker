class Predator extends Creature{
    constructor(x, y) {
        super(x,y)
        this.energy = 20;
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
        for (var i in predatorArr) {
            if (this.x == predatorArr[i].x && this.y == predatorArr[i].y) {
                predatorArr.splice(i, 1);
                break;
            }
        }
    }
    mul() {
        if (this.energy >= 33) {
            var newPredatorCell = random(this.chooseCell(0));
            if (newPredatorCell) {
                var newPredator = new Predator(newPredatorCell[0], newPredatorCell[1]);
                predatorArr.push(newPredator);
                matrix[newPredatorCell[1]][newPredatorCell[0]] = 3;
                this.energy = 20

            }
        }
    }
    move() {
        if (this.energy > 0) {
            this.getNewCoordinates();
            this.energy--;
            let predatorCells = this.chooseCell(0)
            let onePredatorCells = random(predatorCells)
            if (onePredatorCells) {
                matrix[this.y][this.x] = 0
                let predatorX = onePredatorCells[0]
                let predatorY = onePredatorCells[1]
                matrix[predatorY][predatorX] = 3
                this.y = predatorY
                this.x = predatorX
            }
        }
        else {
            this.die();
        }
    }
    eat() {
        this.getNewCoordinates()
        let predators = this.chooseCell(1)
        let predatorss = this.chooseCell(2)
        let all = predators.concat(predatorss)
        let onePredator = random(all)
        if (onePredator) {
            this.energy++;
            matrix[this.y][this.x] = 0;
            let onePredatorX = onePredator[0];
            let onePredatorY = onePredator[1];
            matrix[onePredatorY][onePredatorX] = 3;

            this.y = onePredatorY;
            this.x = onePredatorX;
            for (var i in predatorArr) {
                if (onePredatorX == predatorArr[i].x && onePredatorY == predatorArr[i].y) {
                    grassArr.splice(i, 1);
                }
            }
        } else {
            this.move()
        }
    }
}
