// Ажилчдын тоо
const totalEmployees = 100;

// Хуваарилах ширээний тоо
const seatsPerTable = 7;

// Ширээний дугаарыг тооцоолох функц
function assignSeatNumber() {
    // Бүтнээр суудлын дугаар сонгох (1-100 хооронд)
    const seatNumber = Math.floor(Math.random() * totalEmployees) + 1;
    
    // Ширээний дугаар гаргах (1-14 хүртэлх ширээ)
    const tableNumber = Math.ceil(seatNumber / seatsPerTable);
    
    return { seatNumber, tableNumber };
}

// Шинэ жилийн урилгын хуудас дээрх товч дарсан үед
document.getElementById('getSeatBtn').addEventListener('click', function() {
    // Хоёрдугаар хуудас руу шилжих
    document.getElementById('page1').style.display = 'none';
    document.getElementById('page2').style.display = 'block';

    // Суудлын дугаар гаргах
    const { seatNumber, tableNumber } = assignSeatNumber();

    // Ширээний дугаарыг хуудас дээр гаргах
    document.getElementById('seatNumber').innerText = `${tableNumber} дэх дугаарын ширээ`;
});

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
