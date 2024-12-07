// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
       
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Button hover effect
const buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = '#ff4757'; // Change to highlight color
        button.style.transition = 'background-color 0.3s ease';
    });
   
    button.addEventListener('mouseout', () => {
        button.style.backgroundColor = '#444'; // Reset to original color
    });
});


// Dark mode toggle functionality
const toggleDarkMode = () => {
    const body = document.body;
    body.classList.toggle('dark-mode');
   
    // Change button text based on mode
    const darkModeButton = document.getElementById('dark-mode-toggle');
    if (body.classList.contains('dark-mode')) {
        darkModeButton.textContent = 'Switch to Light Mode';
    } else {
        darkModeButton.textContent = 'Switch to Dark Mode';
    }
};


// Create a dark mode toggle button
const darkModeButton = document.createElement('button');
darkModeButton.id = 'dark-mode-toggle';
darkModeButton.className = 'button';
darkModeButton.textContent = 'Switch to Dark Mode';
darkModeButton.style.marginTop = '20px';
darkModeButton.addEventListener('click', toggleDarkMode);


// Append the dark mode button to the container
document.querySelector('.container').appendChild(darkModeButton);
