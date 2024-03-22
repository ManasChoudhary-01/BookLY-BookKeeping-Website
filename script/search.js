const submitButton = document.getElementById('searched-btn');
const inputElement = document.getElementById('find-book');
let favoriteBooks = JSON.parse(localStorage.getItem('favoriteBooks')) || [];

submitButton.addEventListener('click', () => {
    const searchTerm = inputElement.value.trim();

    const heading = document.querySelector('.heading');
    heading.classList.add('hide');

    fetch(`https://book-finder1.p.rapidapi.com/api/search?title=${searchTerm}`, {
        "method": 'GET',
        "headers": {
            'X-RapidAPI-Key': '2fcf1a19e4msh0097eabd044efd1p180848jsn9e4a4288f8d9',
            'X-RapidAPI-Host': 'book-finder1.p.rapidapi.com'
        }
    })
    .then(response => response.json())
    .then(response => {
        const searchedBooksElement = document.querySelector('.searched-books');
        searchedBooksElement.innerHTML = ''; // Clear previous results
        heading.textContent = `Showing results for "${searchTerm}"`;

        for (let i = 0; i < 24 && i < response.results.length; i++) {
            const title = response.results[i].title;
            const coverArtUrl = response.results[i].published_works[0].cover_art_url;
            const author = response.results[i].authors;
            const series = response.results[i].series_name;
            const booktype = response.results[i].book_type;
            const coverArtUrl1 = response.results[i].published_works[0].cover_art_url;
            
            const bookDetailsElement = document.createElement('div');
            bookDetailsElement.classList.add('book-details');
            searchedBooksElement.appendChild(bookDetailsElement);
    
            const imgElement = document.createElement('img');
            const imgElement1 = document.createElement('div');
            imgElement.src = coverArtUrl;
            imgElement1.textContent = coverArtUrl1;
            imgElement.classList.add('book-imgs');
            bookDetailsElement.appendChild(imgElement);
    
            const bookBodyElement = document.createElement('div');
            bookBodyElement.classList.add('book-body');
            bookDetailsElement.appendChild(bookBodyElement);
    
            const titleElement = document.createElement('div');
            titleElement.classList.add('book-titles');
            titleElement.textContent = title;
            bookBodyElement.appendChild(titleElement);
    
            const authorElement = document.createElement('div');
            authorElement.classList.add('book-authors');
            authorElement.textContent = `By ${author}`;
            bookBodyElement.appendChild(authorElement);
    
            const seriesElement = document.createElement('div');
            seriesElement.classList.add('book-seriess');
            seriesElement.textContent = `Series: ${series}`;
            bookBodyElement.appendChild(seriesElement);
    
            const booktypeElement = document.createElement('div');
            booktypeElement.classList.add('book-types');
            booktypeElement.textContent = `# ${booktype}`;
            bookBodyElement.appendChild(booktypeElement);
    
    
            const addFavButton = document.createElement('button');
            addFavButton.type = 'button';
            addFavButton.id = 'fav-btns';
            addFavButton.textContent = 'Add to favourite';
            bookBodyElement.appendChild(addFavButton);

            addFavButton.addEventListener('click', () => {
                const isBookInFavorites = favoriteBooks.some(book => book.title === title);
                if (isBookInFavorites) {
                    alert('Book is already in favorites!');
                } else {
                    const favoriteBook = { coverArtUrl1, title, author, series, booktype };
                    favoriteBooks.push(favoriteBook);
                    localStorage.setItem('favoriteBooks', JSON.stringify(favoriteBooks));
                    addFavButton.textContent = 'Added to ❤️';
                    alert('Book added to favorites! ❤️');
                }
            });

        }
    });
});

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
