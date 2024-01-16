let str = "salom";

    // function sliceFunc(str1, age) {

    // ? include()

    // let incStr = str1.includes("nima")

    // ? indexOf

    // let indexStr = str1.indexOf("dunyo")
    // let arrFruit = ["banana", "apple", "orange", "lemon"]
    // let indexArr = arrFruit.indexOf("apple")

    // ? If else shart operatori

    // if (str1.length > 10) {
    //     return "stringimiz uzun";
    // } else {
    //     return "kalta";
    // }
    
    //     if (age < 16) {
    //         return "Uzur yoshingiz kichik";
    //     } else if (age >= 50) {
    //         return "Uzur yoshingiz katta";
    //     } else {
    //         return "Marhamat xush kelibsiz";
    //     }
    // }


    // console.log(sliceFunc(str, 30))



    // ? Vazifa

    function sayHello(ball) {
        if (ball > 90) {
            return "A+";
        } else if (ball < 90 && ball > 70) {
            return "A";
        } else if (ball < 70 && ball > 60) {
            return "B";
        } else if (ball < 60 && ball > 50) {
            return "C";
        } else if (ball < 50) {
            return "F";
        } else {
            return "Siz imtihondan utdingiz";
        }
    }

    console.log(sayHello(99))


    // ? Vazifa2

    let score;

    function sliceFunc(string) {
        if (string.length < 1){
            score = true;
        } else {
            score = false;
        }

        return score;
        
    }
    console.log(sliceFunc(""));



    // ? Vazifa 3

    function arrLetters() {
        let a = "Robin Singh";
        let arrA = a.split(' ')

        return arrA
    }

    console.log(arrLetters())



    // ? Vazifa 4

    function sayHello1() {
        
    }

    console.log();