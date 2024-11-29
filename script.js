// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Form Validation
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
  const name = contactForm.querySelector('input[name="name"]').value;
  const email = contactForm.querySelector('input[name="email"]').value;
  const message = contactForm.querySelector('textarea[name="message"]').value;

  if (!name || !email || !message) {
    e.preventDefault(); // Prevent form submission
    alert('Please fill in all fields before submitting!');
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    e.preventDefault(); // Prevent form submission
    alert('Please enter a valid email address!');
  }
});

// Theme Toggle
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Toggle Theme';
toggleButton.classList.add('theme-toggle');
document.body.prepend(toggleButton);

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});

// Add a CSS class for dark theme in your CSS file
// .dark-theme { background: #121212; color: #fff; }
