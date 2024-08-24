document.addEventListener('DOMContentLoaded', function () {
    const flipbook = document.getElementById('flipbook');
    const pages = Array.from(flipbook.querySelectorAll('.df-book-page'));
    let currentPageIndex = 0;

    function updateFlipbook() {
        const angle = -180 * currentPageIndex;
        flipbook.style.transform = `rotateY(${angle}deg)`;
    }

    function goToNextPage() {
        if (currentPageIndex < pages.length - 1) {
            currentPageIndex++;
            updateFlipbook();
        }
    }

    function goToPreviousPage() {
        if (currentPageIndex > 0) {
            currentPageIndex--;
            updateFlipbook();
        }
    }

    document.getElementById('next').addEventListener('click', goToNextPage);
    document.getElementById('prev').addEventListener('click', goToPreviousPage);

    document.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowRight') {
            goToNextPage();
        } else if (e.key === 'ArrowLeft') {
            goToPreviousPage();
        }
    });
});
