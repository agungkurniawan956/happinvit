// hamburger menu
const hamburgerMenu = document.querySelector('.nav-link');

document.querySelector('.hamburger-menu').onclick = () => {
  hamburgerMenu.classList.toggle('hidden');
};

// slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.display = 'block';
      slide.classList.add('active');
    } else {
      slide.style.display = 'none';
      slide.classList.remove('active');
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// // Ganti slide setiap 5 detik
setInterval(nextSlide, 5000);

// // Tampilkan slide pertama saat halaman dimuat
showSlide(currentSlide);
