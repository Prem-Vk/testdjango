let k = "test";
let j = 0

console.log(j===0)

function test(){
    if (k==="test"){
        return [false, null]
    }else{
        return [true, "test"]
    }
}

let u = test()
console.log(u[0])