// HW Day 5 JS Problems from CodeWars

// Multiply - Big challenge on this one

function multiply(a, b){
    let num = a 
    let num2 = b
    
    return num*num2
}

//Alan Partridge II - Apple Turnover
function apple(x){
    if (x**2 > 1000){
    return "It's hotter than the sun!!"
    } else
    return "Help yourself to a honeycomb Yorkie for the glovebox."
}

//Switch it Up!
function switchItUp(number){
    if(number == 0){
    return "Zero"
} 
    if(number == 1){
    return "One"
} 
    if(number == 2){
    return "Two"
} 
    if(number == 3){
    return "Three"
} 
    if(number == 4){
    return "Four"
} 
    if(number == 5){
    return "Five"
} 
    if(number == 6){
    return "Six"
} 
    if(number == 7){
    return "Seven"
} 
    if(number == 8){
    return "Eight"
} 
    if(number == 9){
    return "Nine"
} 


//Training JS #5: Basic data types--Object
function animal(obj){
    return 'This ' + obj.color + ' ' + obj.name + ' has ' + obj.legs + ' legs.'
}

// actually needed help on this one, Printing Array elements with Comma delimiters
function printArray(array){
    return array.join(',');
}