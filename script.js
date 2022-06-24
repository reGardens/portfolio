// header menu responsive
const ul = document.querySelector('.menu ul')
const hMenu = document.querySelector('.menu-toggle').addEventListener('click', (e) => {
    ul.classList.toggle('active')
    e.preventDefault()
})

// hover descImg
// const descImg = document.querySelector('.descImg')
// descImg.addEventListener('onhover', () => {
//     // alert('ok')
// })

// scrolling images
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header')
    const hKanan = document.querySelector('.hutan-kanan')
    const hKiri = document.querySelector('.hutan-kiri')
    const wrapDesc = document.querySelector('.wrap-desc')
    // const thumbImg = document.querySelector('.about .wrapper .thumb-img')
    // const desc = document.querySelector('.about .wrapper .desc')
    
    const valueY = window.scrollY;

    // sticky header
    header.classList.toggle('wrapperSticky', valueY)  

    // if (valueY >= 174) {
    //     // thumbImg.classList.toggle('active')
    //     // thumbImg.style.opacity = 1
    //     desc.style.opacity = 1
    // }
    // if (valueY <= 174) {
    //     // thumbImg.classList.toggle('active')
    //     thumbImg.style.opacity = 0
    //     desc.style.opacity = 0
    // }
    
    // handler images
    hKanan.style.bottom = valueY * -0.2 + 'px'
    hKiri.style.bottom = valueY * -0.1 + 'px'
    wrapDesc.style.top =  valueY * 0.1 + 'px'
})

// filter galery images
const list = document.querySelectorAll('.list');
const card = document.querySelectorAll('.card')

// notes
// finish revisi font projects

console.log(card);

for (let i = 0; i < list.length; i++) {
    list[i].addEventListener('click', (e) => {
        console.log('ok');
        for (let j = 0; j < list.length; j++) {
            list[j].classList.remove('active')
        }

        e.target.classList.add('active')

        const dataFilter = e.target.getAttribute('data-filter');

        for (let k = 0; k < card.length; k++) {
            card[k].classList.remove('active');
            card[k].classList.add('hide');

            if (card[k].getAttribute('data-items') == dataFilter || dataFilter == 'all') {
                card[k].classList.remove('hide');
                card[k].classList.add('active');
            }
        }
    })
}

// modal image galery
const modal = document.querySelector('#myModal')
const img = document.querySelectorAll('.image')
const desc = document.querySelector('.card .desc1');
const modalImg = document.getElementById("img01")
const captionText = document.querySelector('.caption')
const spanX = document.querySelector('.wrapper .btnClose')

for (let i = 0; i < img.length; i++) {
    img[i].addEventListener('click', (e) => {
        modal.style.display = "flex";
        modalImg.src = e.target.src;
        captionText.innerHTML = e.target.alt;
    })
}

spanX.addEventListener('click', () => {
    modal.style.display = "none"
})