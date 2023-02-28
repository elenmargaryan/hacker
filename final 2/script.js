let side = 50;
let grassArr = []
let grassEatArr = []
let predatorArr = []
let hetqArr = []
let rumbArr = []
let matrix = []
let jurArr = []

function matrixGenerator(size, countGrass, countGrassEater, predatorCount, hetqCount, rumbCount, jurCount) {
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
    for (let k = 0; k < jurCount; k++) {
        let x = Math.floor(random(size))
        let y = Math.floor(random(size))
        if (matrix[y][x] == 0) {
            matrix[y][x] = 6
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
    matrixGenerator(50, 800, 40, 10, 30, 10, 10)
    frameRate(10);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y);
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
            else if (matrix[y][x] == 6) {
                let jr = new Jur(x, y)
                jurArr.push(jr)
            }


        }
    }
    // console.log(rumbArr);
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
                fill("brown");
            }
            else if (matrix[y][x] == 4) {
                fill("red");
            }
            else if (matrix[y][x] == 5) {
                fill("black");
            }
            else if (matrix[y][x] == 6) {
                fill("blue");
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
    // for (var i in grassEatArr) {
    //     grassEatArr[i].generateGender();
    // }
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
    for (var i in rumbArr) {
        rumbArr[i].mul();
    }
    for (var i in jurArr) {
        jurArr[i].move();
    }

}

//    setInterval(() => {
//     for (var i in rumbArr){
//         rumbArr[i].appear();
//     }
// }, 5000);
function buttonWinterFunction() {
    for (var i in grassEatArr) {
        grassEatArr[i].die();
    }
    for (var i in predatorArr) {
        predatorArr[i].die();
    }
}

function buttonSpringFunction() {
    for (var i in grassEatArr) {
        grassEatArr[i].mul();
    }
    for (var i in predatorArr) {
        predatorArr[i].mul();
    }
}

// function buttonAutumnFunction() {
//     for (var y = 0; y < matrix.length; y++) {
//         for (var x = 0; x < matrix[y].length; x++) {
//             if (matrix[y][x] = 0) {
//                 let newMatrixX = x
//                 let newMatrixY = y
//                 matrix[newMatrixY][newMatrixX] = 4
//                 x = newMatrixX
//                 y = newMatrixY
//             }


//         }
//     }


// }

function buttonSummerFunction() {
    for (var i in jurArr) {
        jurArr[i].die();
    }


}

function buttonAutumnFunction() {
    for (var i in jurArr) {
        jurArr[i].mul();
    }


}

function buttonRumbFunction() {
    for (var i in rumbArr) {
        rumbArr[i].mul();
    }


}


document.getElementById("buttonWinter").addEventListener('click', buttonWinterFunction
)

document.getElementById("buttonSpring").addEventListener('click', buttonSpringFunction
)

document.getElementById("buttonSummer").addEventListener('click', buttonSummerFunction
)

document.getElementById("buttonRumb").addEventListener('click', buttonRumbFunction
)


