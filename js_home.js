const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});

document.addEventListener('mousedown', () => {
    cursor.style.backgroundColor = '#666';
});

document.addEventListener('mouseup', () => {
    cursor.style.backgroundColor = '#333';
});


var slides = document.querySelectorAll('.slide');
var currentIndex = 0;

function showNextSlide() {
 slides[currentIndex].style.display = 'none';
 currentIndex = (currentIndex + 1) % slides.length;
 slides[currentIndex].style.display = 'block';
}

document.querySelector('.slider').addEventListener('click', showNextSlide);