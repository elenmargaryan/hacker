let side = 120;
let grassArr = []
let grassEatArr = []
let predatorArr = []
let hetqArr = []
let rumbArr = []
let matrix = []
function matrixGenerator(size, countGrass, countGrassEater, predatorCount, hetqCount, rumbCount) {
    for (let i = 0; i < size; i++) {
        matrix.push([])
        for (let j = 0; j < size; j++) {
            matrix[i].push(0)
        }

    }
    for (let k = 0; k < countGrass; k++) {
        let x = Math.floor(random(size))
        let y = Math.floor(random(size))
        if (matrix[y][x] == 0) {
            matrix[y][x] = 1
        }
        else {
            k--
        }


    }
    for (let k = 0; k < countGrassEater; k++) {
        let x = Math.floor(random(size))
        let y = Math.floor(random(size))
        if (matrix[y][x] == 0) {
            matrix[y][x] = 2
        }
        else {
            k--
        }
    }
    for (let k = 0; k < predatorCount; k++) {
        let x = Math.floor(random(size))
        let y = Math.floor(random(size))
        if (matrix[y][x] == 0) {
            matrix[y][x] = 3
        }
        else {
            k--
        }
    }
    for (let k = 0; k < hetqCount; k++) {
        let x = Math.floor(random(size))
        let y = Math.floor(random(size))
        if (matrix[y][x] == 0) {
            matrix[y][x] = 4
        }
        else {
            k--
        }
    }
    for (let k = 0; k < rumbCount; k++) {
        let x = Math.floor(random(size))
        let y = Math.floor(random(size))
        if (matrix[y][x] == 0) {
            matrix[y][x] = 5
        }
        else {
            k--
        }
    }
}

function setup() {
    matrixGenerator(50, 800, 40, 10, 30, 10)
    frameRate(10);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y,);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                let grassEat = new GrassEater(x, y)
                grassEatArr.push(grassEat)
            }
            else if (matrix[y][x] == 3) {
                let pr = new Predator(x, y)
                predatorArr.push(pr)
            }
            else if (matrix[y][x] == 4) {
                let htq = new Hetq(x, y)
                hetqArr.push(htq)
            }
            else if (matrix[y][x] == 5) {
                let rmb = new Rumb(x, y)
                rumbArr.push(rmb)
            }


        }
    }
console.log(rumbArr);
}
function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("blue");
            }
            else if (matrix[y][x] == 4) {
                fill("red");
            }
            else if (matrix[y][x] == 5) {
                fill("black");
            }
            rect(x * side, y * side, side, side);

        }
    }

    for (var i in grassArr) {
        grassArr[i].mul();
    }
    for (var i in grassEatArr) {
        grassEatArr[i].mul();
    }
    for (var i in grassEatArr) {
        grassEatArr[i].eat();
    }
    for (var i in predatorArr) {
        predatorArr[i].mul();
         predatorArr[i].eat();
    }
    for (var i in hetqArr) {
        hetqArr[i].mul();
    }
    for (var i in hetqArr) {
        hetqArr[i].eat();
    }
    for (var i in rumbArr) {
        rumbArr[i].mul();
    }
}
//    setInterval(() => {
//     for (var i in rumbArr){
//         rumbArr[i].appear();
//     }
// }, 5000); 
