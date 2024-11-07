const carouselTrack = document.querySelector('.carousel-track');
let currentIndex = 0;

function moveCarousel() {
    const cardWidth = document.querySelector('.card').offsetWidth + 20; // Including margin
    carouselTrack.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

function navigateToNewChallenge() {
    window.location.href = 'new_challenge.html';
}

document.querySelector('main').addEventListener('click', (e) => {
    if (e.target.textContent === 'Continue') {
        navigateToNewChallenge(); // Navigate to the new page
    } else if (e.target.textContent === 'Guide') {
        currentIndex = (currentIndex + 1) % carouselTrack.children.length;
        moveCarousel();
    }
});
