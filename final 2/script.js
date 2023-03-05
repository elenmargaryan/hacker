let side = 50;
let grassArr = []
let grassEatArr = []
let predatorArr = []
let hetqArr = []
let rumbArr = []
let matrix = []
let jurArr = []
let socket = io()

let value = "#acacac"
let red = "red"
let yellow = "yellow"

let green1 = 34
let green2 = 34
let green3 = 34
let green = (green1,green2,green3)
let speed = 10


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
    matrixGenerator(50, 800, 1, 10, 30, 10, 10)
    frameRate(speed);
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

// function mousePressed(){
// setTimeout(genderFunct,3000)
// }
// setTimeout(genderFunct,3000)


// let yellowEh = "#E49B0F"
function drawGrid()
{
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill(green1,green2+105,green3);
            }
            else if (matrix[y][x] == 0) {
                fill(value);
            }
            else if (matrix[y][x] == 2) {
                fill(yellow);
            }
            else if (matrix[y][x] == 3) {
                fill("brown");
            }
            else if (matrix[y][x] == 4) {
                fill(red);
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
}


function draw() {

    drawGrid()

    if(frameCount % 60 ==0){

        let data = {
            "grassArr" : grassArr.length,
            "grassEarArr" : grassEatArr.length,
        }
        socket.emit("Send data",data)
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
    for (var i in rumbArr) {
        rumbArr[i].mul();
    }
    for (var i in jurArr) {
        jurArr[i].move();
    }

    if (mouseIsPressed === true) {
        if(red === "red"){
            red = "White"
        }
    }
       else {
        red = "red"
      }
}

function mouseMoved() {
    green1 = green1 + 5;
    green2 = green2 + 5
    green3 = green3 + 5
    if (green > 0) {
        green1 = green1
        green2 = green2 + 105
        green3 = green3
      
    }
  }

function mouseClicked(){
    drawGrid()
    x = mouseX
    y = mouseY
    if(x > 0 && x < 2500 && y > 0 && y < 2500){
             if(value === "#acacac"){
                value = "#800080"
             }
            rect(x * side, y * side, side, side);
    }
    
    
}

var springButton = document.querySelector("#buttonSpring")
springButton.addEventListener('click', ()=>{
    for(var g = 0;g<30;g++){
      for (var i in predatorArr) {   
        predatorArr[i].die();  
        green1 = 0
        green2 = 128
        green3 = 0
    }  
    }
})

var summerButton = document.querySelector("#buttonSummer")
summerButton.addEventListener('click', ()=>{
    for(var l = 0;l<100;l++){
      for (var i in jurArr) {   
        jurArr[i].die();  
        green1 = 2
        green2 = 48
        green3 = 32        
    }  
    }
})

var winterButton = document.querySelector("#buttonWinter")
winterButton.addEventListener('click', ()=>{
    for(var h = 0;h<100;h++){
      for (var i in grassEatArr) {   
        grassEatArr[i].die();
        green1 = 255
        green2 = 255
        green3 = 255
    }  
    }
})

var autumnButton = document.querySelector("#buttonAutumn")
autumnButton.addEventListener('click', ()=>{
    for(var u = 0;u<100;u++){
      for (var i in hetqArr) {   
        hetqArr[i].die();  
        green1 = 255
        green2 = 69
        green3 = 0
    }  
    }
})