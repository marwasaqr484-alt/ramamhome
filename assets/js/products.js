document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.product-card');
  const modal = document.getElementById('product-modal');
  const closeBtn = modal.querySelector('.close-btn');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const img = card.querySelector('img').src;
      const title = card.querySelector('h2').textContent;
      const desc = card.querySelector('.description').textContent;
      const newPrice = card.querySelector('.new-price').textContent;
      const oldPrice = card.querySelector('.old-price').textContent;
      const rating = card.querySelector('.rating').innerHTML;

      modal.querySelector('.modal-image img').src = img;
      modal.querySelector('.modal-details h2').textContent = title;
      modal.querySelector('.modal-description').textContent = desc;
      modal.querySelector('.modal-price .new').textContent = newPrice;
      modal.querySelector('.modal-price .old').textContent = oldPrice;
      modal.querySelector('.modal-rating').innerHTML = rating;

      modal.classList.remove('hidden');
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  modal.addEventListener('click', e => {
    if (e.target === modal) modal.classList.add('hidden');
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.product-card');
  const modal = document.getElementById('product-modal');
  const closeBtn = modal.querySelector('.close-btn');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const img = card.querySelector('img').src;
      const title = card.querySelector('h2').textContent;
      const desc = card.querySelector('.description').textContent;
      const newPrice = card.querySelector('.new-price').textContent;
      const oldPrice = card.querySelector('.old-price').textContent;
      const rating = card.querySelector('.rating').innerHTML;

      modal.querySelector('.modal-image img').src = img;
      modal.querySelector('.modal-details h2').textContent = title;
      modal.querySelector('.modal-description').textContent = desc;
      modal.querySelector('.modal-price .new').textContent = newPrice;
      modal.querySelector('.modal-price .old').textContent = oldPrice;
      modal.querySelector('.modal-rating').innerHTML = rating;

      modal.classList.remove('hidden');
    });
  });

  closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
  modal.addEventListener('click', e => { if (e.target === modal) modal.classList.add('hidden'); });
});

  document.addEventListener("DOMContentLoaded", function () {
    const cartButtons = document.querySelectorAll(".btn-cart");

    cartButtons.forEach((btn) => {
      btn.addEventListener("click", function (e) {
        const isLoggedIn = localStorage.getItem("isLoggedIn");

        if (isLoggedIn === "true") {
          // تشغيل صوت أو إضافة المنتج فعلاً هنا
          const sound = new Audio("assets/sounds/add-to-cart.mp3");
          sound.play();
          // تقدرِ تضيفي الكود الخاص بإضافة المنتج للسلة هنا
        } else {
          alert("يجب تسجيل الدخول أولاً لإضافة المنتجات إلى السلة.");
          window.location.href = "login.html"; // يوجّه المستخدم لصفحة تسجيل الدخول
        }
      });
    });
  });

  // لما المستخدم يضغط على زر "أضف للسلة"
  function addToCart(productName, productPrice, productImage) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // التحقق إذا كان المنتج مضاف قبل كده
    const existingProductIndex = cart.findIndex(item => item.name === productName);

    if (existingProductIndex !== -1) {
      // لو موجود، زوّد الكمية
      cart[existingProductIndex].quantity += 1;
    } else {
      // لو مش موجود، ضيفه كمنتج جديد
      cart.push({
        name: productName,
        price: productPrice,
        image: productImage,
        quantity: 1
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("تمت الإضافة إلى السلة ✔️");
  }
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const addToCartButtons = document.querySelectorAll(".add-to-cart");

addToCartButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const product = button.closest(".product");
    const name = product.querySelector("h3").textContent;
    const price = parseFloat(product.querySelector("p").textContent.replace("السعر: ", ""));
    const image = product.querySelector("img").getAttribute("src");
    const quantityInput = product.querySelector(".quantity");
    const quantity = quantityInput ? parseInt(quantityInput.value) || 1 : 1;

    const existingProduct = cart.find((item) => item.name === name);
    if (existingProduct) {
      existingProduct.quantity += quantity;
    } else {
      cart.push({ name, price, image, quantity });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("تمت الإضافة إلى السلة!");
  });
});


  document.addEventListener("DOMContentLoaded", function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    addToCartButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        const isLoggedIn = localStorage.getItem("isLoggedIn");

        if (isLoggedIn !== "true") {
          alert("يجب تسجيل الدخول أولاً لإضافة المنتجات إلى السلة.");
          window.location.href = "login.html";
          return;
        }

        const product = button.closest(".product");
        const name = product.querySelector("h3")?.textContent || product.querySelector("h2")?.textContent;
        const priceText = product.querySelector("p").textContent;
        const price = parseFloat(priceText.replace("السعر: ", "").trim());
        const image = product.querySelector("img").getAttribute("src");
        const quantityInput = product.querySelector(".quantity");
        const quantity = quantityInput ? parseInt(quantityInput.value) || 1 : 1;

        const existingProduct = cart.find(item => item.name === name);
        if (existingProduct) {
          existingProduct.quantity += quantity;
        } else {
          cart.push({ name, price, image, quantity });
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        alert("تمت الإضافة إلى السلة ✔️");
      });
    });
  });

