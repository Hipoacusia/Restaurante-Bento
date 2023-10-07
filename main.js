const next = document.querySelector('.next');
const previe = document.querySelector('.previe');
const slider = document.querySelector('.slider');

previe.addEventListener('click', () =>{
    slider.scrollLeft -= 280
})

next.addEventListener('click', () =>{
    slider.scrollLeft += 280
})


