// ===================== DATA =====================
const vehiclesData = [
  {
    id: 1,
    name: "BMW 3 Series",
    brand: "BMW",
    type: "Sedan",
    price: 1500,
    fuel: "Benzin",
    transmission: "Otomatik",
    capacity: 5,
    luggage: 460,
    image: "🚗",
    description: "Lüks sedan, konforlu ve performanslı sürüş deneyimi."
  },
  {
    id: 2,
    name: "Mercedes C-Class",
    brand: "Mercedes",
    type: "Sedan",
    price: 1800,
    fuel: "Dizel",
    transmission: "Otomatik",
    capacity: 5,
    luggage: 450,
    image: "🚗",
    description: "Premium Alman otomobili, lüks iç tasarım ve yüksek performans."
  },
  {
    id: 3,
    name: "Audi A4",
    brand: "Audi",
    type: "Sedan",
    price: 1600,
    fuel: "Benzin",
    transmission: "Otomatik",
    capacity: 5,
    luggage: 420,
    image: "🚗",
    description: "Şık tasarım ve güvenilir performans ile uzun yolculuklara ideal."
  },
  {
    id: 4,
    name: "Tesla Model 3",
    brand: "Tesla",
    type: "Sedan",
    price: 2000,
    fuel: "Elektrik",
    transmission: "Otomatik",
    capacity: 5,
    luggage: 430,
    image: "⚡",
    description: "Elektrikli, çevre dostu ve yüksek teknoloji ile donatılmış."
  },
  {
    id: 5,
    name: "Toyota RAV4",
    brand: "Toyota",
    type: "SUV",
    price: 1400,
    fuel: "Benzin",
    transmission: "Otomatik",
    capacity: 5,
    luggage: 580,
    image: "🚙",
    description: "Güvenilir SUV, offroad kabiliyeti ve konfor birleştiriyor."
  },
  {
    id: 6,
    name: "Volkswagen Golf",
    brand: "Volkswagen",
    type: "Hatchback",
    price: 900,
    fuel: "Benzin",
    transmission: "Manual",
    capacity: 5,
    luggage: 380,
    image: "🚗",
    description: "Ekonomik ve pratik şehir aracı."
  },
  {
    id: 7,
    name: "Ford Mustang",
    brand: "Ford",
    type: "Coupe",
    price: 2500,
    fuel: "Benzin",
    transmission: "Otomatik",
    capacity: 4,
    luggage: 420,
    image: "🏎️",
    description: "Performanslı spor araç, heyecan dolu sürüş deneyimi."
  },
  {
    id: 8,
    name: "Volvo XC90",
    brand: "Volvo",
    type: "SUV",
    price: 2200,
    fuel: "Hibrit",
    transmission: "Otomatik",
    capacity: 7,
    luggage: 650,
    image: "🚙",
    description: "Lüks SUV, güvenlik ve konfor öncelikli tasarım."
  }
];

const testimonialsData = [
  {
    author: "Ahmet Yılmaz",
    position: "Müdür",
    rating: 5,
    text: "DriveElite sayesinde Antalya tatiline gitmek çok kolay oldu. Araç temiz, sigortası kapsamlı, personeli çok yardımcı. Kesinlikle tekrar kullanacağım.",
    initials: "AY"
  },
  {
    author: "Fatma Kara",
    position: "Öğretmen",
    rating: 5,
    text: "Ailemle hafta sonu gezisine çıktığımız sırada aracımız arızalandı. Hemen yol yardımı geldi ve sorunumuzu çözdüler. Harika hizmet!",
    initials: "FK"
  },
  {
    author: "Mehmet Demir",
    position: "İş İnsanı",
    rating: 4,
    text: "Kurumsal kiralama paketinizi kullanıyoruz ve çok memnunuz. Fiyat uygun, araçlar bakımlı, destek mükemmel.",
    initials: "MD"
  },
  {
    author: "Ayşe Çelik",
    position: "Mühendis",
    rating: 5,
    text: "Elektrikli araç kiralama seçeneğini deneyin. Çevre dostu ve ekonomik. Gerçekten iyi bir tercih.",
    initials: "AÇ"
  },
  {
    author: "İbrahim Özkan",
    position: "Turist Rehberi",
    rating: 5,
    text: "Müşterilerimi hep DriveElite'a yönlendiriyorum. Kaliteli araçlar, profesyonel hizmet ve daima güleryüzlü personel.",
    initials: "İÖ"
  }
];

const faqData = [
  {
    question: "Araç kiralama için ne gerekiyor?",
    answer: "En az 21 yaş, geçerli ehliyet, ve kredi kartınız olması yeterlidir. Şehir içi kiralamalar için ilave belgeler gerekebilir."
  },
  {
    question: "Kiralama iptal edebilir miyim?",
    answer: "Evet, kiralamadan 48 saat öncesi iptal edebilirsiniz. Ücreti hiçbir ek ücret alınmadan geri verilir."
  },
  {
    question: "Sigortası neler kapsar?",
    answer: "Tüm araçlarda kasko ve trafik sigortası dahildir. Ayrıca yolcu kapsamı ve eşya kapsamı seçeneği mevcuttur."
  },
  {
    question: "Sınırsız kilometre var mı?",
    answer: "Evet, tüm paketlerimizde sınırsız kilometre seçeneği mevcuttur. Endişe etmeden seyahat edebilirsiniz."
  },
  {
    question: "Çocuk koltuğu var mı?",
    answer: "Evet, 0-12 yaş arası çocuklar için uygun büyüklükte çocuk koltuğu sağlıyoruz. Kiralama sırasında talep edin."
  }
];

// ===================== THEME TOGGLE =====================
const themeToggle = document.getElementById("themeToggle");
const htmlElement = document.documentElement;

// Check saved theme preference
const savedTheme = localStorage.getItem("theme") || "dark";
htmlElement.setAttribute("data-theme", savedTheme);

themeToggle.addEventListener("click", () => {
  const currentTheme = htmlElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  htmlElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
});

// ===================== NAVIGATION =====================
const navLinks = document.querySelectorAll(".nav-link");
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

navLinks.forEach(link => {
  link.addEventListener("click", function() {
    navLinks.forEach(l => l.classList.remove("active"));
    this.classList.add("active");
  });
});

hamburger.addEventListener("click", () => {
  const isExpanded = hamburger.getAttribute("aria-expanded") === "true";
  hamburger.setAttribute("aria-expanded", !isExpanded);
  mobileMenu.setAttribute("aria-hidden", isExpanded);
});

// ===================== VEHICLES GRID =====================
const vehiclesGrid = document.getElementById("vehiclesGrid");
const filterBrand = document.getElementById("filterBrand");
const filterPrice = document.getElementById("filterPrice");
const priceDisplay = document.getElementById("priceDisplay");
const fuelChips = document.querySelectorAll(".chip");
const resetFilters = document.getElementById("resetFilters");
const noResults = document.getElementById("noResults");

let currentFuelFilter = "all";

function formatPrice(price) {
  return new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY"
  }).format(price);
}

function createVehicleCard(vehicle) {
  return `
    <div class="vehicle-card" role="listitem" tabindex="0">
      <div class="vehicle-image">
        <div style="font-size: 80px;">${vehicle.image}</div>
      </div>
      <div class="vehicle-info">
        <div class="vehicle-brand">${vehicle.brand}</div>
        <h3 class="vehicle-name">${vehicle.name}</h3>
        <div class="vehicle-specs">
          <div class="spec-item">
            <span class="spec-label">Yakıt</span>
            <span class="spec-value">${vehicle.fuel}</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">Vites</span>
            <span class="spec-value">${vehicle.transmission}</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">Kişi</span>
            <span class="spec-value">${vehicle.capacity}</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">Bagaj</span>
            <span class="spec-value">${vehicle.luggage}L</span>
          </div>
        </div>
        <div class="vehicle-price">
          <div>
            <span class="price-amount">${formatPrice(vehicle.price)}</span>
            <span class="price-period">/gün</span>
          </div>
        </div>
        <div class="vehicle-actions">
          <button class="btn btn-primary btn-sm" onclick="selectVehicle(${vehicle.id})">Seç</button>
          <button class="btn btn-outline btn-sm" onclick="showVehicleDetail(${vehicle.id})">Detay</button>
        </div>
      </div>
    </div>
  `;
}

function filterVehicles() {
  const brand = filterBrand.value;
  const maxPrice = parseInt(filterPrice.value);
  
  const filtered = vehiclesData.filter(vehicle => {
    const brandMatch = brand === "all" || vehicle.brand === brand;
    const priceMatch = vehicle.price <= maxPrice;
    const fuelMatch = currentFuelFilter === "all" || vehicle.fuel === currentFuelFilter;
    return brandMatch && priceMatch && fuelMatch;
  });

  vehiclesGrid.innerHTML = filtered.map(createVehicleCard).join("");
  noResults.classList.toggle("hidden", filtered.length > 0);
}

filterPrice.addEventListener("input", (e) => {
  priceDisplay.textContent = formatPrice(parseInt(e.target.value));
  filterVehicles();
});

filterBrand.addEventListener("change", filterVehicles);

fuelChips.forEach(chip => {
  chip.addEventListener("click", () => {
    fuelChips.forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
    currentFuelFilter = chip.dataset.fuel;
    filterVehicles();
  });
});

resetFilters.addEventListener("click", () => {
  filterBrand.value = "all";
  filterPrice.value = "5000";
  priceDisplay.textContent = formatPrice(5000);
  fuelChips.forEach(c => c.classList.remove("active"));
  fuelChips[0].classList.add("active");
  currentFuelFilter = "all";
  filterVehicles();
});

// Initial render
filterVehicles();

// ===================== VEHICLE SELECTION =====================
function selectVehicle(id) {
  const vehicle = vehiclesData.find(v => v.id === id);
  const resVehicle = document.getElementById("resVehicle");
  
  // Add option if doesn't exist
  let option = resVehicle.querySelector(`option[value="${id}"]`);
  if (!option) {
    option = document.createElement("option");
    option.value = id;
    option.textContent = vehicle.name;
    resVehicle.appendChild(option);
  }
  
  resVehicle.value = id;
  scrollToReservation();
  showToast(`${vehicle.name} seçildi!`);
}

function showVehicleDetail(id) {
  const vehicle = vehiclesData.find(v => v.id === id);
  const modal = document.getElementById("vehicleModal");
  const modalContent = document.getElementById("modalContent");
  
  modalContent.innerHTML = `
    <h2 class="modal-title" id="modalTitle">${vehicle.name}</h2>
    <div class="modal-specs">
      <div class="modal-spec">
        <span class="modal-spec-label">Marka</span>
        <span class="modal-spec-value">${vehicle.brand}</span>
      </div>
      <div class="modal-spec">
        <span class="modal-spec-label">Tipi</span>
        <span class="modal-spec-value">${vehicle.type}</span>
      </div>
      <div class="modal-spec">
        <span class="modal-spec-label">Yakıt Tipi</span>
        <span class="modal-spec-value">${vehicle.fuel}</span>
      </div>
      <div class="modal-spec">
        <span class="modal-spec-label">Vites Tipi</span>
        <span class="modal-spec-value">${vehicle.transmission}</span>
      </div>
      <div class="modal-spec">
        <span class="modal-spec-label">Kapasite</span>
        <span class="modal-spec-value">${vehicle.capacity} Kişi</span>
      </div>
      <div class="modal-spec">
        <span class="modal-spec-label">Bagaj Kapasitesi</span>
        <span class="modal-spec-value">${vehicle.luggage}L</span>
      </div>
      <div class="modal-spec">
        <span class="modal-spec-label">Günlük Fiyat</span>
        <span class="modal-spec-value">${formatPrice(vehicle.price)}</span>
      </div>
      <div class="modal-spec">
        <span class="modal-spec-label">Tür</span>
        <span class="modal-spec-value">Premium</span>
      </div>
    </div>
    <p class="modal-description">${vehicle.description}</p>
    <div class="modal-actions">
      <button class="btn btn-primary" onclick="selectVehicle(${vehicle.id})">Seç</button>
      <button class="btn btn-outline" onclick="closeVehicleModal()">Kapat</button>
    </div>
  `;
  
  modal.setAttribute("aria-hidden", "false");
}

function closeVehicleModal() {
  document.getElementById("vehicleModal").setAttribute("aria-hidden", "true");
}

document.getElementById("modalClose").addEventListener("click", closeVehicleModal);
document.getElementById("vehicleModal").addEventListener("click", (e) => {
  if (e.target.id === "vehicleModal") closeVehicleModal();
});

// ===================== TESTIMONIALS SLIDER =====================
const sliderTrack = document.getElementById("sliderTrack");
const sliderPrev = document.getElementById("sliderPrev");
const sliderNext = document.getElementById("sliderNext");
const sliderDots = document.getElementById("sliderDots");

let currentSlide = 0;

function createTestimonialCard(testimonial) {
  const starsHTML = Array(testimonial.rating).fill('<svg viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>').join("");
  
  return `
    <div class="testimonial-card active">
      <div class="testimonial-header">
        <div class="testimonial-stars">${starsHTML}</div>
      </div>
      <p class="testimonial-text">"${testimonial.text}"</p>
      <div class="testimonial-author">
        <div class="author-avatar">${testimonial.initials}</div>
        <div class="author-info">
          <h4>${testimonial.author}</h4>
          <p>${testimonial.position}</p>
        </div>
      </div>
    </div>
  `;
}

function updateSlider() {
  sliderTrack.innerHTML = createTestimonialCard(testimonialsData[currentSlide]);
  
  // Update dots
  document.querySelectorAll(".slider-dot").forEach((dot, index) => {
    dot.classList.toggle("active", index === currentSlide);
  });
}

function createSliderDots() {
  testimonialsData.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.className = `slider-dot ${index === 0 ? "active" : ""}`;
    dot.setAttribute("role", "tab");
    dot.setAttribute("aria-selected", index === 0);
    dot.addEventListener("click", () => {
      currentSlide = index;
      updateSlider();
    });
    sliderDots.appendChild(dot);
  });
}

sliderPrev.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + testimonialsData.length) % testimonialsData.length;
  updateSlider();
});

sliderNext.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % testimonialsData.length;
  updateSlider();
});

createSliderDots();
updateSlider();

// ===================== FAQ ACCORDION =====================
const faqWrapper = document.getElementById("faqWrapper");

faqData.forEach((faq, index) => {
  const faqItem = document.createElement("div");
  faqItem.className = "faq-item";
  faqItem.role = "button";
  faqItem.tabindex = "0";
  
  faqItem.innerHTML = `
    <button class="faq-question" aria-expanded="false">
      <span>${faq.question}</span>
      <svg class="faq-icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
      </svg>
    </button>
    <div class="faq-answer">
      <div class="faq-answer-content">${faq.answer}</div>
    </div>
  `;
  
  const button = faqItem.querySelector(".faq-question");
  
  const toggleFAQ = () => {
    const isExpanded = faqItem.classList.contains("active");
    faqItem.classList.toggle("active");
    button.setAttribute("aria-expanded", !isExpanded);
  };
  
  button.addEventListener("click", toggleFAQ);
  faqItem.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleFAQ();
    }
  });
  
  faqWrapper.appendChild(faqItem);
});

// ===================== RESERVATION FORM =====================
const reservationForm = document.getElementById("reservationForm");
const resFullName = document.getElementById("resFullName");
const resEmail = document.getElementById("resEmail");
const resPhone = document.getElementById("resPhone");
const resVehicle = document.getElementById("resVehicle");
const resPickup = document.getElementById("resPickup");
const resReturn = document.getElementById("resReturn");

// Populate vehicle options
vehiclesData.forEach(vehicle => {
  const option = document.createElement("option");
  option.value = vehicle.id;
  option.textContent = `${vehicle.brand} ${vehicle.name} - ${formatPrice(vehicle.price)}/gün`;
  resVehicle.appendChild(option);
});

// Price calculation
function updatePrice() {
  if (!resPickup.value || !resReturn.value || !resVehicle.value) return;
  
  const pickupDate = new Date(resPickup.value);
  const returnDate = new Date(resReturn.value);
  const days = Math.ceil((returnDate - pickupDate) / (1000 * 60 * 60 * 24)) + 1;
  
  if (days < 1) return;
  
  const vehicle = vehiclesData.find(v => v.id === parseInt(resVehicle.value));
  const total = days * vehicle.price;
  
  document.getElementById("sumDays").textContent = `${days} gün`;
  document.getElementById("sumDaily").textContent = formatPrice(vehicle.price);
  document.getElementById("sumTotal").textContent = formatPrice(total);
}

resPickup.addEventListener("change", updatePrice);
resReturn.addEventListener("change", updatePrice);
resVehicle.addEventListener("change", updatePrice);

// Form validation
function validateForm() {
  const errors = {};
  
  if (!resFullName.value.trim()) errors.fullName = "Ad soyad gerekli";
  if (!resEmail.value.includes("@")) errors.email = "Geçerli e-posta adresi giriniz";
  if (!resPhone.value.replace(/\D/g, "").length >= 10) errors.phone = "Geçerli telefon numarası giriniz";
  if (!resVehicle.value) errors.vehicle = "Araç seçimi gerekli";
  if (!resPickup.value) errors.pickupDate = "Alış tarihi gerekli";
  if (!resReturn.value) errors.returnDate = "Teslim tarihi gerekli";
  
  if (resPickup.value && resReturn.value) {
    const pickup = new Date(resPickup.value);
    const returnDate = new Date(resReturn.value);
    if (returnDate <= pickup) errors.returnDate = "Teslim tarihi alış tarihinden sonra olmalı";
  }
  
  return errors;
}

function showFormError(fieldName, message) {
  const errorElement = document.getElementById(`res${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}Error`);
  if (errorElement) {
    if (message) {
      errorElement.textContent = message;
      errorElement.classList.add("show");
    } else {
      errorElement.classList.remove("show");
    }
  }
}

reservationForm.addEventListener("submit", (e) => {
  e.preventDefault();
  
  // Clear previous errors
  ["fullName", "email", "phone", "vehicle", "pickupDate", "returnDate"].forEach(field => {
    showFormError(field, "");
  });
  
  const errors = validateForm();
  
  if (Object.keys(errors).length > 0) {
    Object.entries(errors).forEach(([field, message]) => {
      showFormError(field, message);
    });
    return;
  }
  
  showToast("Rezervasyonunuz başarıyla gönderildi!");
  reservationForm.reset();
  document.getElementById("sumDays").textContent = "– gün";
  document.getElementById("sumDaily").textContent = "–";
  document.getElementById("sumTotal").textContent = "–";
});

// ===================== SMOOTH SCROLL =====================
function scrollToReservation() {
  document.getElementById("reservation").scrollIntoView({ behavior: "smooth" });
}

// ===================== SCROLL TO TOP BUTTON =====================
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ===================== TOAST NOTIFICATION =====================
const toast = document.getElementById("toast");
const toastMessage = document.getElementById("toastMessage");

function showToast(message) {
  toastMessage.textContent = message;
  toast.style.display = "flex";
  setTimeout(() => {
    toast.style.display = "none";
  }, 3000);
}

// ===================== STATS COUNTER =====================
function animateCounter(element, target) {
  let current = 0;
  const increment = target / 30;
  
  const counter = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target;
      clearInterval(counter);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 50);
}

const observerOptions = {
  threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = parseInt(entry.target.dataset.target);
      animateCounter(entry.target, target);
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll(".stat-number").forEach(stat => {
  observer.observe(stat);
});

// ===================== SEARCH FORM =====================
const heroSearchForm = document.getElementById("heroSearchForm");

heroSearchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const vehicleType = document.getElementById("vehicleType").value;
  const pickupDate = document.getElementById("pickupDate").value;
  const returnDate = document.getElementById("returnDate").value;
  const location = document.getElementById("location").value;
  
  if (!pickupDate || !returnDate || !location) {
    showToast("Lütfen tüm alanları doldurunuz!");
    return;
  }
  
  showToast("Araçlar aranıyor...");
  setTimeout(() => {
    document.getElementById("vehicles").scrollIntoView({ behavior: "smooth" });
  }, 500);
});

// ===================== FOOTER YEAR =====================
document.getElementById("currentYear").textContent = new Date().getFullYear();

// ===================== INIT =====================
console.log("DriveElite loaded successfully!");
