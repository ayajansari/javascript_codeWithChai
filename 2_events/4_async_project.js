const eve=function(){
    let a=Math.floor(Math.random()*256)
    let b=Math.floor(Math.random()*256)
    let c=Math.floor(Math.random()*256)
    document.body.style.backgroundColor='rgb('+a+','+b+','+c+')'
}

let interval
document.getElementById('start').addEventListener('click',function(){
    if(!interval){      //if user clicks multiple times then no worry
        interval=setInterval(eve,1000)
    }
    
})
document.getElementById('stop').addEventListener('click',function(){
    clearInterval(interval)
    interval=null
})


