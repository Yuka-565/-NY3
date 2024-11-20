// Цасан ширхэгүүдийг үүсгэх функц
function createSnowflakes() {
    const snowflakesContainer = document.querySelector('.snowflakes');

    // Цасан ширхэгийн тоо
    const numberOfSnowflakes = 100;

    for (let i = 0; i < numberOfSnowflakes; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        
        // Рандом хурд, байрлал, эргэлт
        snowflake.style.left = `${Math.random() * 100}vw`; // Рандом байрлал
        snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`; // Рандом хурд
        snowflake.style.animationDelay = `${Math.random() * 5}s`; // Рандом хожимдол

        snowflakesContainer.appendChild(snowflake);
    }
}

// Цасан ширхэгүүдийг үүсгэх
createSnowflakes();
