
const pages1 = document.querySelectorAll('#flipbook1 .page');
const nextButton1 = document.getElementById('next1');
const prevButton1 = document.getElementById('prev1');
let currentPage1 = 0;

function updateFlipbook1() {
    pages1.forEach((page, index) => {
        if (index <= currentPage1) {
            page.style.transform = 'rotateY(0deg)';
        } else {
            page.style.transform = 'rotateY(180deg)';
        }
    });
}

nextButton1.addEventListener('click', () => {
    if (currentPage1 < pages1.length - 1) {
        currentPage1++;
        updateFlipbook1();
    }
});

prevButton1.addEventListener('click', () => {
    if (currentPage1 > 0) {
        currentPage1--;
        updateFlipbook1();
    }
});
