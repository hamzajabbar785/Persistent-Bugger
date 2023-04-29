// Write a function, persistence, that takes in a positive parameter num and returns its 
// multiplicative persistence, which is the number of times you must multiply the digits 
// in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

const persistence = (num) => {
    let numStr = num.toString()
    let num2 = 1
    let times = 0
    
    while(numStr.length > 1){
        for(let el of numStr){
            num2 = num2 * el
        }

        numStr = num2.toString()
        times++
        num2 = 1
    }
    return times
}

persistence(999)

//Solution 2 

const persistence = (num) => {
    let times = 0;
   
    num = num.toString();
    
    while (num.length > 1) {
      times++;
      num = num.split('').map(Number).reduce((a, b) => a * b).toString();
    }
    
    return times;
}