// Show or hide the button
window.onscroll = function() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopBtn.style.display = 'flex';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
};

// Scroll to the top function
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function searchDream() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const articles = document.querySelectorAll('article');
    let found = false;

    articles.forEach(article => {
        const title = article.querySelector('h3').innerText.toLowerCase();
        if (title.includes(searchInput)) {
            article.scrollIntoView({ behavior: 'smooth' });
            article.classList.add('highlight');
            setTimeout(() => {
                article.classList.remove('highlight');
            }, 3000); // Remove the highlight after 3 seconds
            found = true;
        }
    });

    if (!found) {
        alert('Aradığınız rüya tabiri bulunamadı.');
    }
}

