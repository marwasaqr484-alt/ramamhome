document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('product-modal');
  const mainImg = document.getElementById('main-product-img');
  const thumbs = document.querySelector('.thumbnails');
  const titleEl = document.getElementById('modal-title');
  const descEl = document.getElementById('modal-description');
  const newEl = document.getElementById('modal-new-price');
  const oldEl = document.getElementById('modal-old-price');
  const qtyInput = document.getElementById('qty-input');
  const dec = document.getElementById('qty-decrease');
  const inc = document.getElementById('qty-increase');
  const btnCart = document.getElementById('add-to-cart');
  const btnBuy = document.getElementById('buy-now');
  const btnClose = document.querySelector('.close-btn');
  const btnFullscreen = document.querySelector('.fullscreen-btn');

  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => {
      const p = JSON.parse(card.getAttribute('data-product'));
      titleEl.textContent = p.title;
      descEl.textContent = p.desc;
      newEl.textContent = p.newPrice;
      oldEl.textContent = p.oldPrice;
      qtyInput.value = 1;
      thumbs.innerHTML = '';
      p.images.forEach((src,i) => {
        const img = document.createElement('img');
        img.src = src;
        img.className = 'thumb';
        if (i===0) { mainImg.src = src; img.classList.add('active'); }
        img.addEventListener('click', () => {
          mainImg.src = src;
          thumbs.querySelectorAll('img').forEach(el => el.classList.remove('active'));
          img.classList.add('active');
        });
        thumbs.appendChild(img);
      });
      modal.classList.remove('hidden');
    });
  });

  btnClose.addEventListener('click', () => modal.classList.add('hidden'));
  dec.addEventListener('click', () => qtyInput.value = Math.max(1, +qtyInput.value -1));
  inc.addEventListener('click', () => qtyInput.value = +qtyInput.value +1);

  btnCart.addEventListener('click', () => {
    alert(`تم إضافة ${qtyInput.value} قطعة إلى السلة`);
    modal.classList.add('hidden');
  });
  btnBuy.addEventListener('click', () => {
    alert(`شراء ${qtyInput.value} قطعة الآن`);
    modal.classList.add('hidden');
  });
  btnFullscreen.addEventListener('click', () => {
    if (mainImg.requestFullscreen) mainImg.requestFullscreen();
  });
});
