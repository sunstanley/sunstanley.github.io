// Slider
const Slider = ()=>{
let allSliders = document.querySelectorAll('.swiper')
let allPag = document.querySelectorAll('.swiper-pagination')
allSliders.forEach((slider, index)=>{
    let sliderLength = slider.children[0].children.length
    let result = (sliderLength > 1) ? true : false
    const swiper = new Swiper(slider, {
        //loop: result,
        cssMode: true,
        spaceBetween: 0,
        zoom: true,
        pagination: {
            el: allPag[index],
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
        },
    });
})
} 
window.addEventListener('load', Slider)

// Back-to-Top button
const viewportEl = document.querySelector("#initial-view");
const buttonEl = document.querySelector(".up-button");

const handler = (entries) => {
    console.log(entries)
    if (!entries[0].isIntersecting) {
        buttonEl.classList.add('enabled')
    } else {
        buttonEl.classList.remove('enabled')
    }
}
const observer = new window.IntersectionObserver(handler)
observer.observe(viewportEl)

// Copyright statement
const date=new Date(),
    year=date.getFullYear(),
    text="&copy "+year+" Stanley Sun.";
document.getElementById('copyOut').innerHTML=text;