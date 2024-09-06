// Tambahkan interaksi di sini jika diperlukan
document.addEventListener('DOMContentLoaded', () => {
  // Contoh interaksi sederhana
  console.log('Halaman portofolio sudah dimuat.');
});




document.addEventListener("scroll", () => {
    const navbar = document.querySelector(".nav");
  
    if (window.scrollY >= 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });