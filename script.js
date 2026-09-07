document.addEventListener("DOMContentLoaded", () => {
  // Smooth touch interaction active effect for mobile devices
  const cards = document.querySelectorAll('.menu-card');
  
  cards.forEach(card => {
    card.addEventListener('touchstart', () => {
      card.style.opacity = '0.9';
    }, { passive: true });
    
    card.addEventListener('touchend', () => {
      card.style.opacity = '1';
    }, { passive: true });
  });
});