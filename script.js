// Event Handling
// Button click event
document.getElementById('click-button').addEventListener('click', function() {
    document.getElementById('click-message').textContent = 'Button was clicked!';
});

// Hover effects
const hoverDiv = document.getElementById('hover-div');
hoverDiv.addEventListener('mouseover', function() {
    hoverDiv.classList.add('hover-effect');
});
hoverDiv.addEventListener('mouseout', function() {
    hoverDiv.classList.remove('hover-effect');
});

// Keypress detection
document.getElementById('keypress-input').addEventListener('keydown', function(event) {
    document.getElementById('keypress-output').textContent = `Last key pressed: ${event.key}`;
});

// Secret action on double-click
hoverDiv.addEventListener('dblclick', function() {
    document.getElementById('secret-message').style.display = 'block';
});
document.getElementById('myImage').src = 'image/dima-solomin-7_U0V12QA0J08-unsplash.jpg';

// Interactive Elements
// Dynamic button
const dynamicButton = document.getElementById('dynamic-button');
let isClicked = false;
dynamicButton.addEventListener('click', function() {
    if (isClicked) {
        dynamicButton.textContent = 'Click Me';
        dynamicButton.style.backgroundColor = '';
    } else {
        dynamicButton.textContent = 'Clicked!';
        dynamicButton.style.backgroundColor = 'green';
    }
    isClicked = !isClicked;
});

// Slideshow
const images = [
    'https://via.placeholder.com/300x200?text=Image+1',
    'https://via.placeholder.com/300x200?text=Image+2',
    'https://via.placeholder.com/300x200?text=Image+3'
];
let currentIndex = 0;
const slideshowImage = document.getElementById('slideshow-image');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

function updateImage() {
    slideshowImage.style.opacity = 0;
    setTimeout(() => {
        slideshowImage.src = images[currentIndex];
        slideshowImage.style.opacity = 1;
    }, 500);
}

prevButton.addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
});

nextButton.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
});

// Initialize the first image
updateImage();

// Tabs
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', function() {
        tabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        tabContents.forEach(content => content.style.display = 'none');
        const tabId = this.getAttribute('data-tab');
        document.getElementById(tabId).style.display = 'block';
    });
});

// Initialize by clicking the first tab
tabs[0].click();

// Form Validation
const form = document.getElementById('validation-form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;
    document.querySelectorAll('.error').forEach(error => error.textContent = '');
    
    const name = document.getElementById('name').value;
    if (!name) {
        document.getElementById('name-error').textContent = 'Name is required';
        isValid = false;
    }
    
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        document.getElementById('email-error').textContent = 'Email is required';
        isValid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById('email-error').textContent = 'Invalid email format';
        isValid = false;
    }
    
    const password = document.getElementById('password').value;
    if (!password) {
        document.getElementById('password-error').textContent = 'Password is required';
        isValid = false;
    } else if (password.length < 8) {
        document.getElementById('password-error').textContent = 'Password must be at least 8 characters';
        isValid = false;
    }
    
    if (isValid) {
        alert('Form submitted successfully!');
    }
});

// Real-time form feedback
document.getElementById('name').addEventListener('input', function() {
    const name = this.value;
    const errorSpan = document.getElementById('name-error');
    if (!name) {
        errorSpan.textContent = 'Name is required';
    } else {
        errorSpan.textContent = '';
    }
});

document.getElementById('email').addEventListener('input', function() {
    const email = this.value;
    const errorSpan = document.getElementById('email-error');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        errorSpan.textContent = 'Email is required';
    } else if (!emailRegex.test(email)) {
        errorSpan.textContent = 'Invalid email format';
    } else {
        errorSpan.textContent = '';
    }
});

document.getElementById('password').addEventListener('input', function() {
    const password = this.value;
    const errorSpan = document.getElementById('password-error');
    if (!password) {
        errorSpan.textContent = 'Password is required';
    } else if (password.length < 8) {
        errorSpan.textContent = 'Password must be at least 8 characters';
    } else {
        errorSpan.textContent = '';
    }
});