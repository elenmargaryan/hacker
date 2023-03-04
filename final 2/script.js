let side = 50;
let grassArr = []
let grassEatArr = []
let predatorArr = []
let hetqArr = []
let rumbArr = []
let matrix = []
let jurArr = []

let value = "#acacac"
let red = "red"
let yellow = "yellow"

let green1 = 34
let green2 = 34
let green3 = 34
let green = (green1,green2,green3)
let speed = 60
// let createRumbArr = []


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
    // for (let k = 0; k < createRumbCount; k++) {
    //     let x = Math.floor(random(size))
    //     let y = Math.floor(random(size))
    //     if (matrix[y][x] == 0) {
    //         matrix[y][x] = 7
    //     }
    //     else {
    //         k--
    //     }
    // }
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

function genderFunct(){
    console.log("yey");
}


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
            // else if (matrix[y][x] == 7) {
            //     fill("black");
            // }
            rect(x * side, y * side, side, side);

        }
    }
}


function draw() {

    drawGrid()

    for (var i in grassArr) {
        grassArr[i].mul();
    }
    for (var i in grassEatArr) {
        grassEatArr[i].mul();
    }
    // for (var i in grassEatArr) {
    //     grassEatArr[i].generateGender();
    // }
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

    if (mouseIsPressed === true) {
        if(red === "red"){
            red = "White"
        }
    }
       else {
        red = "red"
      }
 rect(mouseX,75,75,75)
}

function mouseMoved() {
    green = green + 2;
    if (green > 0) {
      green = (green,green+105,green);
      
    }
  }

// function colorChange(){
     
// }

function mouseClicked(){
    drawGrid()
    x = mouseX
    y = mouseY
    console.log(x,y);
    if(x < matrix[0].length * side && y < matrix.length * side){
      for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
             if(value === "#acacac"){
                value = "#800080"
             }
            //  else{
            //     value = "#acacac"
            //  }
            // else if(value === 255){
            //     value = 0
            // }
            

            
            
            rect(x * side, y * side, side, side);

        }
    }  
    }
    
    
}
// //  function doubleClicked(){
//     // drawGrid()
// //    GrassEater.energy = 3
    
//  }
//    setInterval(() => {
//     for (var i in rumbArr){
//         rumbArr[i].appear();
//     }
// }, 5000);

// function mouseClicked(){
//     let num = Math.floor(Math.random() * 2)
//     console.log(num);
//     for(var k = 0; k<3 ; k++){
//         if(num = 1){
//       yellow = "#E49B0F"
//     }
//     // else{
//     //     yellow = "yellow"
//     // }
//     }
//     // let g = random(0,1)
    
// }



// function gender(){
    
// }

// function buttonWinterFunction() {
   
    
    
// }

// function buttonSpringFunction() {
//     for (var i in grassEatArr) {
//         grassEatArr[i].mul();
//     }
    
// }

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

// function buttonSummerFunction() {
//     for (var i in jurArr) {
//         jurArr[i].die();
//     }


// }

// function buttonAutumnFunction() {
//     for (var i in jurArr) {
//         jurArr[i].mul();
//     }


// }

// function buttonAutumnFunction() {
   
//         for (var i in predatorArr) {
//             predatorArr[i].mul();
//         }


// }


var winterButton = document.querySelector("#buttonWinter")
winterButton.addEventListener('click', ()=>{
    for(var h = 0;h<100;h++){
      for (var i in grassEatArr) {   
        grassEatArr[i].die();
        green1 = green1 + 221
        green2 = green2 + 221
        green3 = green3 + 221
        // console.log(speed);
    }  
    }
    
    // drawGrid()
    // grassEatArr = []

})
var springButton = document.querySelector("#buttonSpring")
springButton.addEventListener('click', ()=>{
    for(var g = 0;g<30;g++){
      for (var i in predatorArr) {   
        predatorArr[i].die();  
        // (green + 90,green + 218,green - 34)
    }  
    }
    
    // drawGrid()
    // grassEatArr = []

})

var summerButton = document.querySelector("#buttonSummer")
summerButton.addEventListener('click', ()=>{
    for(var l = 0;l<100;l++){
      for (var i in jurArr) {   
        jurArr[i].die();  
    }  
    }
    
    // drawGrid()
    // grassEatArr = []

})

var autumnButton = document.querySelector("#buttonAutumn")
autumnButton.addEventListener('click', ()=>{
    for(var u = 0;u<100;u++){
      for (var i in hetqArr) {   
        hetqArr[i].die();  
        green1 = green1 + 221
        green2 = green2 +119
        green3 = green3-34
    }  
    }
    
    // drawGrid()
    // grassEatArr = []

})

// var siButton = document.querySelector("#buttonRumb")
// summerButton.addEventListener('click', ()=>{
//     for(var n = 0;n<10;l++){
//       for (var i in jurArr) {   
//         jurArr[i].die();  
//     }  
//     }
    
//     // drawGrid()
//     // grassEatArr = []

// })

// var winterSpring = document.querySelector("#buttonSpring")
// winterButton.addEventListener('click', ()=>{
//     for(var h = 0;h<100;h++){
//       for (var i in grassEatArr) {   
//         grassEatArr[i].mul();  
//     }  
//     }
    
//     // drawGrid()
//     // grassEatArr = []

// })
// document.getElementById("buttonSpring").addEventListener('click', buttonSpringFunction())

// document.getElementById("buttonSummer").addEventListener('click', buttonSummerFunction())

// document.getElementById("buttonAutumn").addEventListener('click', buttonAutumnFunction())


