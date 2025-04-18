let currentQuestion = 1;
let totalScore = 0;
const totalQuestions = 10;

function nextQuestion(questionNumber, score) {
    totalScore += score;

    // Şu anki soruyu gizle
    const current = document.getElementById(`q${questionNumber}`);
    if (current) current.classList.remove("active");

    // Bir sonraki soruyu göster
    const next = document.getElementById(`q${questionNumber + 1}`);
    if (next) {
        next.classList.add("active");
        updateProgressBar(questionNumber + 1);
    } else {
        // Test bittiğinde sonucu göster
        showResult();
    }
}

function updateProgressBar(qNum) {
    const progress = document.getElementById("progress");
    const percent = ((qNum - 1) / totalQuestions) * 100;
    progress.style.width = `${percent}%`;
}

function showResult() {
    const quiz = document.getElementById("quiz");
    const result = document.getElementById("result");
    const scoreDisplay = document.getElementById("score");
    const message = document.getElementById("message");

    quiz.style.display = "none";
    result.style.display = "block";

    const maxScore = totalQuestions * 5;
    const percentage = Math.round((totalScore / maxScore) * 100);
    scoreDisplay.textContent = percentage;

    if (percentage >= 90) {
        message.textContent = "💖 Aşkın zirvesindesin sanırım Güzelimmm hepsini bildin 💖";
    } else if (percentage >= 70) {
        message.textContent = "💘 Çok tatlısınız, gayet iyi uyum!";
    } else if (percentage >= 50) {
        message.textContent = "💡 Ufak tefek farklılıklar olsa da, sevgiyle çözülür!";
    } else {
        message.textContent = "💔 Belki biraz daha konuşmalısınız 😅";
    }
}

function goToLoveTest() {
    window.location.href = "love.html";
}
