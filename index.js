const chai = ("chai")
const spices = ("chai spices")

function receivesAFunction(callback){
    callback(spices);
}

function returnsANamedFunction(chai){
    return function namedFunction(chai){
        console.log(chai); 
    }
}

function returnsAnAnonymousFunction(chai){
    return function(){
        console.log(chai);
    }
}