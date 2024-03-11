// document.addEventListener('DOMContentLoaded', function () {
//     const slider = document.querySelector('.slider');
//     const slides = document.querySelectorAll('.slider img');
//     const slideWidth = slides[0].clientWidth;
//     let counter = 1;

//     setInterval(() => {
//         slider.style.transition = 'transform 0.5s ease';
//         slider.style.transform = `translateX(${-slideWidth * counter}px) rotate(0deg)`; // Adjust rotation to 0 degrees

//         counter++;

//         if (counter === slides.length) {
//             setTimeout(() => {
//                 slider.style.transition = 'none';
//                 slider.style.transform = `translateX(0) rotate(0deg)`; // Adjust rotation to 0 degrees
//             }, 500);
//             counter = 1;
//         }
//     }, 3000); // Change slide every 3 seconds
// });
