
function navigateToDonate() {
    document.querySelector('#donate').scrollIntoView({
        behavior: 'smooth'
    });
    document.getElementById("dropdown-content").classList.remove("show");
}
// Sticky navigation bar
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

// Contact form validation
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
    } else {
        alert('Thank you for your message!');
        this.reset();
    }
});

// Event calendar placeholder
document.getElementById('event-calendar').innerHTML = `
    <p>Upcoming Events</p>
    <ul>
        <li>Event 1 - Date</li>
        <li>Event 2 - Date</li>
        <li>Event 3 - Date</li>
    </ul>
`;

// Testimonial slider
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');
    
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }
    
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
}

function toggleDropdown() {
    document.getElementById("dropdown-content").classList.toggle("show");
}
document.querySelectorAll('nav ul li a, .sidebar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId && targetId.startsWith('#')) {
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        } else if (this.classList.contains('apply-button')) {
            window.open(this.href, '_blank');
        }
    });
});
document.querySelectorAll('.apply-button').forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = '#e65550';
    });
    button.addEventListener('mouseout', () => {
        button.style.backgroundColor = '#ff6f61';
    });
});

function toggleTestimonials() {
    const hiddenCards = document.querySelectorAll('.testimonial-card.hidden');
    const button = document.querySelector('.view-all-button');
    
    hiddenCards.forEach(card => {
        if (card.classList.contains('hidden')) {
            card.classList.remove('hidden');
            card.style.display = 'block';
        } else {
            card.classList.add('hidden');
            card.style.display = 'none';
        }
    });

    if (button.textContent === "View All") {
        button.textContent = "View Less";
    } else {
        button.textContent = "View All";
    }
}


function openModal() {
    document.getElementById("donateModal").style.display = "block";
}

function closeModal() {
    document.getElementById("donateModal").style.display = "none";
}

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
    const modal = document.getElementById("donateModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
})
function navigateToDonate() {
    document.querySelector('#donate').scrollIntoView({
        behavior: 'smooth'
    });
    document.getElementById("dropdown-content").classList.remove("show");
}


// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
