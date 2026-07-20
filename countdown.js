const countdownElement = document.getElementById("countdown");

// 20 July 2026 (10 months together)
const targetDate = new Date("July 20, 2026 00:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {

        countdownElement.innerHTML = `
            <h2>❤️ Happy 10 Months, My Love! ❤️</h2>
            <p>Thank you for making these 10 months so special. 🌻</p>
        `;

        clearInterval(timer);
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `
        <div class="countdown-container">
            <div class="time-box">
                <h1>${days}</h1>
                <span>Days</span>
            </div>

            <div class="time-box">
                <h1>${hours}</h1>
                <span>Hours</span>
            </div>

            <div class="time-box">
                <h1>${minutes}</h1>
                <span>Minutes</span>
            </div>

            <div class="time-box">
                <h1>${seconds}</h1>
                <span>Seconds</span>
            </div>
        </div>
    `;
}

updateCountdown();

const timer = setInterval(updateCountdown, 1000);
