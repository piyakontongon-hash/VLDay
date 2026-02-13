document.addEventListener('DOMContentLoaded', () => {

    const revealBtn = document.getElementById('reveal-btn');
    const landingSection = document.getElementById('landing');
    const flowerSection = document.getElementById('flower-section');

    const music = document.getElementById("bg-music");
    const toggleBtn = document.getElementById("toggle-music");

    // 👉 เปลี่ยนหน้า
    revealBtn.addEventListener('click', () => {
        landingSection.classList.remove('active');
        flowerSection.classList.add('active');
    });

    // 👉 ปุ่มเพลง (เช็คก่อนว่า element มีจริง)
    if (music && toggleBtn) {
        toggleBtn.addEventListener("click", () => {
            if (music.paused) {
                music.play();
                toggleBtn.textContent = "❚❚";
            } else {
                music.pause();
                toggleBtn.textContent = "▶";
            }
        });
    }

    // 💗 Floating Hearts
    const container = document.querySelector(".floating-hearts");

    if (container) {
        for (let i = 0; i < 22; i++) {
            const heart = document.createElement("div");
            heart.classList.add("heart");
            heart.innerHTML = "💗";

            heart.style.top = Math.random() * 100 + "%";
            heart.style.left = Math.random() * 100 + "%";
            heart.style.fontSize = (22 + Math.random() * 40) + "px";
            heart.style.animationDuration = (6 + Math.random() * 6) + "s";

            container.appendChild(heart);
        }
    }

});
