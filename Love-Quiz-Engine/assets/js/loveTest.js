// Sayfa tamamen yüklendiğinde bu kod bloğu çalışır
document.addEventListener('DOMContentLoaded', () => {
    const totalQuestions = 10; // Toplam soru sayısı
    let totalScore = 0; // Kullanıcının puanını tutmak için değişken

    // Bir sonraki soruya geçişi yöneten fonksiyon
    const nextQuestion = (questionNumber, score) => {
        totalScore += score; // Alınan puanı toplam puana ekle

        // Mevcut soruyu gizle
        const currentQuestion = document.getElementById(`q${questionNumber}`);
        if (currentQuestion) currentQuestion.classList.remove('active');

        // Sonraki soruyu göster ya da sonucu göster
        const nextQuestion = document.getElementById(`q${questionNumber + 1}`);
        if (nextQuestion) {
            nextQuestion.classList.add('active'); // Yeni soruyu göster
            updateProgressBar(questionNumber + 1); // İlerleme çubuğunu güncelle
        } else {
            showResult(); // Tüm sorular bitti, sonucu göster
        }
    };

    // İlerleme çubuğunu yüzdeye göre güncelleyen fonksiyon
    const updateProgressBar = (qNum) => {
        const progressBar = document.getElementById('progress'); // İlerleme çubuğunu seç
        const percent = ((qNum - 1) / totalQuestions) * 100; // Yüzde hesapla
        progressBar.style.width = `${percent}%`; // Genişliği ayarla
    };

    // Sonuç ekranını gösteren fonksiyon
    const showResult = () => {
        const quiz = document.getElementById('quiz'); // Quiz bölümünü seç
        const result = document.getElementById('result'); // Sonuç bölümünü seç
        const scoreDisplay = document.getElementById('score'); // Puan gösterme alanı
        const message = document.getElementById('message'); // Mesaj alanı

        quiz.style.display = 'none'; // Quiz bölümünü gizle
        result.style.display = 'block'; // Sonuç bölümünü göster

        const maxScore = totalQuestions * 5; // En yüksek puan
        const percentage = Math.round((totalScore / maxScore) * 100); // Kullanıcının yüzdelik puanı
        scoreDisplay.textContent = percentage; // Puanı yazdır

        // Yüzdeye göre mesaj belirle
        if (percentage >= 90) {
            message.textContent = '💖 Aşkın zirvesindesin sanırım Güzelimmm hepsini bildin 💖';
        } else if (percentage >= 70) {
            message.textContent = '💘 Çok tatlısınız, gayet iyi uyum!';
        } else if (percentage >= 50) {
            message.textContent = '💡 Ufak tefek farklılıklar olsa da, sevgiyle çözülür!';
        } else {
            message.textContent = '💔 Belki biraz daha konuşmalısınız 😅';
        }
    };

    // "Anasayfaya dön" gibi butonla başka bir sayfaya yönlendirme
    const goToLoveTest = () => {
        window.location.href = 'love.html'; // love.html sayfasına yönlendir
    };

    // Bu fonksiyonları global alana aktar ki HTML'den çağrılabilsin
    window.nextQuestion = nextQuestion;
    window.goToLoveTest = goToLoveTest;

    // Sayfa yüklendiğinde ilk soruyu göster
    document.getElementById('q1').classList.add('active');
});
