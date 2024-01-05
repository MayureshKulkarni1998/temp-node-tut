const num1 = 5;
const num2 = 10;

function addValues() {
    console.log(`The sum is: ${num1 + num2}`);
}

addValues()

// If we have a function in a module then we do not need to export that module. Hence we can diretly import this module using require  function directly without using any const.