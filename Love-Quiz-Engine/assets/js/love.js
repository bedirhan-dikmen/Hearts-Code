// Yanlış cevap seçildiğinde butonu ekranda rastgele bir konuma taşıyan fonksiyon
function wrongChoice(el) {
    const x = Math.random() * (window.innerWidth - 200); // Ekran genişliğine göre rastgele x konumu
    const y = Math.random() * (window.innerHeight - 200); // Ekran yüksekliğine göre rastgele y konumu
    const rotation = (Math.random() * 90) - 45; // -45 ile +45 derece arasında rastgele dönme açısı
    el.parentElement.style.position = "absolute"; // Konumlandırmayı serbest hale getir
    el.parentElement.style.left = `${x}px`; // Soldan uzaklık
    el.parentElement.style.top = `${y}px`; // Yukarıdan uzaklık
    el.parentElement.style.transform = `rotate(${rotation}deg)`; // Döndürme efekti
  }
  
  // Bir sonraki soruya geçişi sağlayan fonksiyon
  function nextQuestion(current) {
    document.getElementById(`question${current}`).classList.remove("active"); // Şu anki soruyu gizle
    const next = current + 1;
    if (document.getElementById(`question${next}`)) {
      // Sonraki soru varsa onu aktif et
      document.getElementById(`question${next}`).classList.add("active");
    } else {
      // Son soruysa final bölümünü göster ve slaytları başlat
      document.getElementById("final").classList.add("active");
      showSlides();
    }
  }
  
  let slideIndex = 0; // Slaytın şu anki indeksini tutar
  
  // Slayt gösterimini başlatan ve döngü halinde çalışmasını sağlayan fonksiyon
  function showSlides() {
    const slides = document.querySelectorAll(".slide"); // Tüm slaytları seç
  
    // Önce tüm slaytları gizle
    slides.forEach(slide => {
      slide.style.opacity = 0;
      slide.classList.remove("active");
    });
  
    slideIndex++; // Slayt indeksini bir artır
    if (slideIndex > slides.length) slideIndex = 1; // Son slayttan sonra başa dön
  
    const currentSlide = slides[slideIndex - 1]; // Sıradaki slaytı seç
    currentSlide.style.opacity = 1; // Görünür hale getir
    currentSlide.classList.add("active"); // Aktif sınıfını ekle
  
    // 5 saniyede bir sonraki slayta geç
    setTimeout(showSlides, 5000);
  }
  
  // Sayfa yüklendiğinde çalışacak kod bloğu
  window.onload = function() {
    showSlides(); // Slaytları başlat
  };
  
  // Müzik kontrolü için gerekli öğeler alınır
  const music = document.getElementById('bgm'); // Audio elemanını al
  const musicBtn = document.getElementById('musicBtn'); // Müzik butonunu al
  
  // Müzik çal/durdur işlevi
  function toggleMusic() {
      if (music.paused) {
          music.play(); // Eğer duraklatılmışsa başlat
          musicBtn.innerText = "⏸️ Müziği Durdur"; // Buton metnini değiştir
      } else {
          music.pause(); // Eğer çalıyorsa durdur
          musicBtn.innerText = "🎶 Müziği Başlat"; // Buton metnini değiştir
      }
  }
  