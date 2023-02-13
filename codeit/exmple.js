//삼각형 찍기
for(let i = 0; i < 5; i++){
    let str = "";    
        for(let j = 0; j <= i; j++){
            str  = str + "*";
        }
        // str += "\n"
    console.log(str)  // *, **, ***, ****, *****  
}

//역삼각형 찍기
for(let i = 5; i >= 1; i--){
    let str = "";    
        for(let j = 1; j <= i; j++){
            str  = str + "*";
        }
        // str += "\n"
    console.log(str) // *****, ****, ***, **, *
}