function searchDream() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const articles = document.querySelectorAll('article');

    let found = false;
    articles.forEach(article => {
        const title = article.querySelector('h3').innerText.toLowerCase();
        if (title.includes(searchInput)) {
            article.scrollIntoView({ behavior: 'smooth' });
            found = true;
        }
    });

    if (!found) {
        alert('Aradığınız rüya tabiri bulunamadı.');
    }
}
