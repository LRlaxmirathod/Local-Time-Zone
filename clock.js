let clock = document.getElementById('clock')

let date =  new Date()
console.log(date.toDateString())
console.log(date.toLocaleTimeString())

// interview questin set interval method
//The setInterval () method helps us to repeatedly execute a function after a fixed delay.

setInterval(function () {
    let date =  new Date()
console.log(date.toDateString())
console.log(date.toLocaleTimeString())
clock.innerHTML=date.toLocaleTimeString();
}, 1000)


