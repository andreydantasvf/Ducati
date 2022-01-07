let quantidadeImg = document.querySelectorAll('.motorcycle-image')
let quantidadeColor = document.querySelectorAll('.color')
let btnBack = document.getElementById('btn-back')
let btnNext = document.getElementById('btn-next')
let imgAtual = 0

btnBack.addEventListener('click', ()=> {
    imgAtual--
    checkImgAtual()
    getImg()
    getColor()
})

btnNext.addEventListener('click', ()=> {
    imgAtual++
    checkImgAtual()
    getImg()
    getColor()
})

function checkImgAtual() {
    if(imgAtual >= quantidadeImg.length) {
        imgAtual = 0
    } else if(imgAtual < 0) {
        imgAtual = quantidadeImg.length - 1
    }
}

function getImg() {
    document.querySelector(".active").classList.remove("active")

    document.getElementById(imgAtual).classList.add("active")
}

function getColor() {
    document.querySelector(".color-active").classList.remove("color-active")

    document.getElementById(`color${imgAtual}`).classList.add("color-active")
}