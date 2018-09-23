let box=document.querySelector('#trag-box')
let stage=document.querySelector('#stage')
let mouseClick=false
let x
let y
box.addEventListener('mousedown',(e)=>{
    mouseClick=true
    x=e.clientX
    y=e.clientY
})
box.addEventListener('mousemove',(e)=>{
    if (mouseClick){
        let moveX=e.clientX-x
        let moveY=e.clientY-y
        x=e.clientX
        y=e.clientY
        box.style.transform=box.style.transform+`translate(${moveX}px,${moveY}px)`
        boxClient=box.getBoundingClientRect()
        stageClient=stage.getBoundingClientRect()
        if (boxClient.left<stageClient.right && boxClient.top<stageClient.bottom){
            stage.style.background='#ddd'
        } else {
            stage.style.background='transparent'
        }
    }
})
box.addEventListener('mouseup',()=>{
    mouseClick=false
})