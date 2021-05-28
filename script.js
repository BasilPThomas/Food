document.querySelector('menu').addEventListener
('click',()=>{
    document.querySelectorAll('.target').forEach((item)=>{
        item.classList.toggle('change')
    })
})

const icon = document.querySelectorAll('.section-1-icons i')
let i = 1

setInterval(()=>{
    i++

    const icon = document.querySelector('.section-1-icons .change')

    icon.classList.remove('change')

    if(i<icon.length){
        icon[0].classList.add('change')
        i=1
    }else{
    icon.nextElementSibling.classList.add('change')
    }

},1000)
