document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const numbersContainer = document.getElementById('numbers-container');
    const themeToggle = document.getElementById('theme-toggle');
    const fortuneBtn = document.getElementById('fortune-btn');
    const fortuneDisplay = document.getElementById('fortune-display');
    const body = document.body;

    // Theme Management
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        body.classList.add(currentTheme);
        updateToggleIcon(currentTheme === 'dark-theme');
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

    // Fortune Logic
    const fortunes = [
        "Today is a day full of unexpected joy!",
        "Your hard work will soon pay off in a big way.",
        "A wonderful opportunity is coming your way.",
        "Believe in yourself; you have the power to achieve anything.",
        "Your positive energy will attract great things today.",
        "A smile is your best asset today. Use it often!",
        "Expect good news regarding a personal project.",
        "Your kindness will return to you tenfold.",
        "Today, you will find beauty in the simplest things.",
        "Success is not a destination, but a journey you are mastering.",
        "Trust your intuition; it's leading you to something great.",
        "Your creativity is at an all-time high today!"
    ];

    fortuneBtn.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * fortunes.length);
        fortuneDisplay.style.opacity = 0;
        setTimeout(() => {
            fortuneDisplay.textContent = fortunes[randomIndex];
            fortuneDisplay.style.opacity = 1;
            fortuneDisplay.style.transition = 'opacity 0.5s';
        }, 200);
    });
});