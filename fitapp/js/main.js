const toggle = document.getElementById('toggle');
const back = document.getElementById('toggle-back')
const menu = document.getElementById('nav-items');


toggle.onclick = () => {
    menu.classList.toggle('on');
}

back.onclick = () => {
    menu.classList.toggle('on');
}



const sliderImg = Array.from(document.getElementsByClassName('slider-img'));
const sliderBtn = Array.from(document.getElementsByClassName('slider-btn'));


sliderBtn.forEach(btn => {
    btn.onclick = (el) => {
        sliderBtn.forEach(item => {
            item.classList.remove('active')
        });
        sliderImg.forEach(image => {
            image.classList.remove('active');
        });
        let index = el.target.getAttribute('data-slide');
        sliderBtn[index].classList.toggle('active');
        sliderImg[index].classList.toggle('active');
    }
})









// const fruit = document.getElementsByClassName('fruit');
// let windowTop = window.scrollY;
// // const scrollTop = img.offsetTop;

// Array.from(fruit).forEach( fruit => {
//     let blur = Math.trunc((Math.abs(windowTop - fruit.offsetTop + 200)) / 100);
//     fruit.style.filter = `blur(${blur}px)`;

// })

// window.onscroll = () => {
//     let windowTop = window.scrollY;

//     Array.from(fruit).forEach( fruit => {
//         let blur = Math.trunc((Math.abs(windowTop - fruit.offsetTop + 200)) / 100);
//         fruit.style.filter = `blur(${blur}px)`;

//     })

// }



// console.log(fruit.typeof)

// // fruit.array.forEach(el => {
// //     el.style.background = 'black';
// // });

