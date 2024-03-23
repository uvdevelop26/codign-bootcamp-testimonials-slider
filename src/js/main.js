const testimonialArea = document.querySelector('.testimonial-area')
const sliders = testimonialArea.querySelectorAll('.flex-area');
const btnNext = testimonialArea.querySelectorAll('.next');
const btnPrev = testimonialArea.querySelectorAll('.prev');



btnNext.forEach((item, i) => {
    item.addEventListener('click', () => {
        const list = sliders[i].clientWidth;
        testimonialArea.scrollLeft += list
    });
})

btnPrev.forEach((item, i) => {
    item.addEventListener('click', () => {
        const list = sliders[i].clientWidth;
        testimonialArea.scrollLeft -= list
    });
});


document.addEventListener('keydown', (event) => {
    if (event.keyCode === 39) {
        const list = sliders[0].clientWidth;
        testimonialArea.scrollLeft += list
    } else if (event.keyCode === 37) {
        const list = sliders[0].clientWidth;
        testimonialArea.scrollLeft -= list
    }

})