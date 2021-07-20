/*1*/

function getString (text) {
    return 'Вы ввели ' + text;
}

console.log(getString('abc'));

/* 2 */

function calcSum (num) {
    if (typeof num!=="number") {
        return null; 
    }
    if (isNaN (num)) {
        return null;
    }
    return num+5;
    }
    console.log (calcSum(7));

    /* 3 */

    function getSentence (str1, str2) {
        if (typeof str1!=="string" || typeof str2!=="string") {
            return null;
        }
       
        return str1 + str2;
    }
    console.log (getSentence('Lorem ' , 'ipsum'));


    /* 4 */

    function calcProduct (num1, num2) {
        if (typeof num1!=="number" || typeof num2!=="number") {
            return null; 
        }
        if (isNaN (num1) || isNaN (num2)) {
            return null;
        }
        return num1*num2;
    }
    console.log (calcProduct(2,5));

    /* 5 */

    function isDivisible (num3,num4) {
        
        if (
            !["number", "string"].includes(typeof num3)
            ||
            !["number", "string"].includes(typeof num4)
        )   {
            return null;
        }
       
        return num3%num4===0;
    }
        console.log (isDivisible('8', 4))
       
   /* 6 */ 
    
    function calcPower (num5,num6) {
        if (
            !["number", "string"].includes(typeof num5)
            ||
            !["number", "string"].includes(typeof num6)
        )   {
            return null;
        }
    return Math.pow (num5,num6);
    }
    console.log (calcPower('5', 2));

    /* 7 */

    /**
     * Calculates area of parallelepiped using the following formula: 2*(a*b+b*c+a*c).
     * @param {number} - length of side a
     * @param {number} - length of side b
     * @param {number} - length of side c
     * @returns {number} - area of parallelepiped
     */

    function calcAreaPar (a,b,c) {
        return 2*(a*b+b*c+a*c);
    }

    console.log (calcAreaPar (3,4,5));

    /* 8 */

    /**
     * Calculates two numbers based on the operation of user's choice
     * @param {number} num7 - fisrt number 
     * @param {number} num8 - second number 
     * @param {string} operator - choose an operator: + - * / 
     * @returns {number} - result of a chosen operation
     */

    function calcChosenOperation (num7, num8, operator) {
        let result;
        switch (operator) {
            case "+" :
                result = num7 + num8;
                break;
            case "-":
                result = num7 - num8;
                break;
            case "*":
                result = num7 * num8;
                break;
            case "/":
                result = num7 / num8;
                break;
            default: 
            console.log('Введите два числа и оператор');
        }
        return result;
    }

    console.log (calcChosenOperation(10, 5,'+'));
