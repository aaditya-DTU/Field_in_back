// generate random color 

const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for(let i=0; i<6; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}

//GET RGBA FOR BACKGROUND COLOR STRING
// function getRGBA() {
//     let random1 = Math.floor(Math.random() * 255);
//     let random2 = Math.floor(Math.random() * 255);
//     let random3 = Math.floor(Math.random() * 255);
//     return `rgba(${random1},${random2},${random3})`;
// }

let intervalId
const startChangingColor = function(){
    if(!intervalId){
        intervalId = setInterval(function(){
            document.body.style.backgroundColor = randomColor()
        }, 1500)
    }
}

const stopChangingColor = function(){
    clearInterval(intervalId)
    intervalId = null
}

document.querySelector('#start').addEventListener('click' , startChangingColor)
document.querySelector('#stop').addEventListener('click', stopChangingColor )

