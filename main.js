document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const numbersContainer = document.getElementById('numbers-container');
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Theme Management
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        body.classList.add(currentTheme);
        updateToggleIcon(currentTheme === 'dark-theme');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // body.classList.add('dark-theme'); // Optional: auto-apply dark mode based on system
        // updateToggleIcon(true);
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        const isDark = body.classList.contains('dark-theme');
        localStorage.setItem('theme', isDark ? 'dark-theme' : '');
        updateToggleIcon(isDark);
    });

    function updateToggleIcon(isDark) {
        themeToggle.textContent = isDark ? '☀️' : '🌙';
    }

    // Lotto Logic
    generateBtn.addEventListener('click', () => {
        const numbers = generateLottoNumbers();
        displayNumbers(numbers);
    });

    function generateLottoNumbers() {
        const numbers = new Set();
        while (numbers.size < 6) {
            const randomNumber = Math.floor(Math.random() * 45) + 1;
            numbers.add(randomNumber);
        }
        return Array.from(numbers).sort((a, b) => a - b);
    }

    function displayNumbers(numbers) {
        numbersContainer.innerHTML = '';
        numbers.forEach(number => {
            const numberElement = document.createElement('div');
            numberElement.classList.add('number');
            numberElement.textContent = number;
            numbersContainer.appendChild(numberElement);
        });
    }
});