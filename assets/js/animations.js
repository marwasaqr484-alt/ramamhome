// تأثير تمرير fade-in للبطاقات عند ظهورها في الشاشة
document.addEventListener('scroll', () => {
  const cards = document.querySelectorAll('.product-card');
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      card.style.opacity = 1;
      card.style.transform = 'translateY(0)';
    }
  });
});

// عند تحميل الصفحة، نعطيهم بداية مخففة
window.addEventListener('load', () => {
  const cards = document.querySelectorAll('.product-card');
  cards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(20px)';
  });
  setTimeout(() => {
    document.dispatchEvent(new Event('scroll'));
  }, 200);
});
document.addEventListener('scroll', () => {
  const cards = document.querySelectorAll('.product-card');
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      card.style.opacity = 1;
      card.style.transform = 'translateY(0)';
    }
  });
});
window.addEventListener('load', () => {
  document.dispatchEvent(new Event('scroll'));
});
