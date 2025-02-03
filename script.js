// Theme Toggle
const themeToggle = document.createElement('button');
themeToggle.textContent = '🌓';
themeToggle.style.position = 'fixed';
themeToggle.style.bottom = '20px';
themeToggle.style.right = '20px';
themeToggle.style.background = 'rgba(255,255,255,0.1)';
themeToggle.style.border = 'none';
themeToggle.style.padding = '10px';
themeToggle.style.borderRadius = '50%';
themeToggle.style.cursor = 'pointer';
document.body.appendChild(themeToggle);

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    localStorage.setItem('theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
});

// Initialize theme
if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-mode');
}

// Form Handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    // Add your form submission logic here
    console.log(Object.fromEntries(formData));
    this.reset();
    alert('Message sent successfully!');
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// GitHub Contributions Graph (Add your username)
const contributionsGraph = document.createElement('img');
contributionsGraph.src = 'https://ghchart.rshah.org/prithibhaskar';
contributionsGraph.alt = 'GitHub Contributions Graph';
document.querySelector('#skills .container').appendChild(contributionsGraph);