// SETTING PRE LOADER 

function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4200)
}


loaderAnimation()


// ACTIVE LINKS ANIMATION 

const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('section');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            var element = document.querySelector('header nav a[href="#' + id + '"]');
            if (element) {
                element.classList.add('active');
            }

        };
    });
};


// FROM VALIDATION

function validateForm() {
    var email = document.getElementById('email').value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return false;
    }
    return true;
}

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


// FETCHING API 

fetch("https://book-finder1.p.rapidapi.com/api/search", {
    "method": 'GET',
    "headers": {
        'X-RapidAPI-Key': '2fcf1a19e4msh0097eabd044efd1p180848jsn9e4a4288f8d9',
        'X-RapidAPI-Host': 'book-finder1.p.rapidapi.com'
    }
})
    .then(response => response.json())
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.error('Error:', error);
    });  

// RAED MORE AND READ LESS BUTTON 

function toggleSummary(btnId) {
    const card = document.getElementById(btnId).closest('.card');
    const title = card.querySelectorAll('.book-title');
    const author = card.querySelectorAll('.book-author');
    const series = card.querySelectorAll('.book-series');
    const summary = card.querySelectorAll('.book-summary');
    const fullSummary = card.querySelector('.fullbook-summary');
    const toggleButton = card.querySelector(`#${btnId}`);

    title.forEach(titleh => {
        titleh.classList.toggle('hidden');
    });
    author.forEach(authorh => {
        authorh.classList.toggle('hidden');
    });
    series.forEach(seriesh => {
        seriesh.classList.toggle('hidden');
    });
    summary.forEach(summaryh => {
        summaryh.classList.toggle('hidden');
    });

    fullSummary.classList.toggle('hidden');
  
    if (fullSummary.classList.contains('hidden')) {
        toggleButton.innerText = 'Read More';
    } else {
        toggleButton.innerText = 'Read Less';
    }
}
