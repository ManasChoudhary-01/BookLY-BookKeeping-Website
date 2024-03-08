const favoriteBooks = JSON.parse(localStorage.getItem('favoriteBooks')) || [];
const favBooksContainer = document.querySelector('.fav-books');

favoriteBooks.forEach((book, index) => {
    const bookContainer = document.createElement('div');
    bookContainer.classList.add('book-container');

    const img = document.createElement('img');
    img.src = book.coverArtUrl;
    img.alt = book.title;
    img.classList.add('book-img');
    bookContainer.appendChild(img);

    const details = document.createElement('div');
    details.textContent = `${book.title} by ${book.author}, Series: ${book.series}, # ${book.booktype}`;
    details.classList.add('book-details');
    bookContainer.appendChild(details);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        favoriteBooks.splice(index, 1);
        localStorage.setItem('favoriteBooks', JSON.stringify(favoriteBooks));
        renderFavoriteBooks();
    });
    bookContainer.appendChild(deleteButton);

    favBooksContainer.appendChild(bookContainer);
});

function renderFavoriteBooks() {
    favBooksContainer.innerHTML = '';
    favoriteBooks.forEach((book, index) => {
        const bookContainer = document.createElement('div');
        bookContainer.classList.add('book-container');

        const img = document.createElement('img');
        img.src = book.coverArtUrl1;
        img.alt = book.title;
        img.style.width = '25rem';
        img.classList.add('book-img');
        bookContainer.appendChild(img);

        const div1 = document.createElement('div');
        div1.classList.add('book-title-f');
        div1.textContent = book.title;
        bookContainer.appendChild(div1);

        const div2 = document.createElement('div');
        div2.classList.add('book-author-f');
        div2.textContent = `By ${book.author}`;
        bookContainer.appendChild(div2);

        const div3 = document.createElement('div');
        div3.classList.add('book-series-f');
        div3.textContent = `Series: ${book.series}`;
        bookContainer.appendChild(div3);

        const div4 = document.createElement('div');
        div4.classList.add('book-type-f');
        div4.textContent = `# ${book.booktype}`;
        bookContainer.appendChild(div4);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            favoriteBooks.splice(index, 1);
            localStorage.setItem('favoriteBooks', JSON.stringify(favoriteBooks));
            renderFavoriteBooks();
        });
        bookContainer.appendChild(deleteButton);

        favBooksContainer.appendChild(bookContainer);
    });
}

renderFavoriteBooks();

// HAMBURGER MENU FUNCTION 

function onClickMenu() {
    var menuIcon = document.getElementById("menu");
    var nav = document.querySelector("nav");

    menuIcon.classList.toggle("bx-menu");
    menuIcon.classList.toggle("bx-x");

    nav.classList.toggle("active");

    var navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.classList.toggle("transformed");
    });
}
