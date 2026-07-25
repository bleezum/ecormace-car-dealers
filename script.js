const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav-links');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

const heroSlides = [
  {
    label: 'Featured arrival',
    title: '2025 Grand Coupe',
    meta: 'Hybrid • 620 HP • 0-100 in 3.2s'
  },
  {
    label: 'New electric launch',
    title: 'Aero X SUV',
    meta: 'Electric • 420 mi range • AWD'
  },
  {
    label: 'Executive favorite',
    title: 'Velora S',
    meta: 'Luxury • 380 mi range • Adaptive cruise'
  }
];

let heroIndex = 0;
const heroSlideEls = document.querySelectorAll('.hero-slide');
const heroLabel = document.getElementById('heroLabel');
const heroTitle = document.getElementById('heroTitle');
const heroMeta = document.getElementById('heroMeta');

if (heroSlideEls.length && heroLabel && heroTitle && heroMeta) {
  setInterval(() => {
    heroSlideEls.forEach((slide, index) => {
      slide.classList.toggle('active', index === heroIndex);
    });

    const slide = heroSlides[heroIndex];
    heroLabel.textContent = slide.label;
    heroTitle.textContent = slide.title;
    heroMeta.textContent = slide.meta;

    heroIndex = (heroIndex + 1) % heroSlides.length;
  }, 4000);
}

const vehicles = {
  'aero-x': {
    name: 'Aero X SUV',
    price: '$78,900',
    description: 'Precision-crafted all-electric SUV with sculpted lines, intelligent cabin tech, and effortless range.',
    image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1400',
    stats: ['<strong>Range:</strong> 420 miles', '<strong>0-60:</strong> 4.3 seconds', '<strong>Drive:</strong> AWD', '<strong>Interior:</strong> Panoramic roof']
  },
  'velora-s': {
    name: 'Velora S',
    price: '$84,200',
    description: 'A refined executive sedan that pairs poised styling with immersive comfort and intelligent performance.',
    image: 'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=1400',
    stats: ['<strong>Range:</strong> 380 miles', '<strong>0-60:</strong> 3.9 seconds', '<strong>Drive:</strong> RWD', '<strong>Interior:</strong> Premium leather']
  },
  'nova-gt': {
    name: 'Nova GT',
    price: '$96,500',
    description: 'Track-inspired performance with a low stance, carbon detailing, and a powerful twin-turbo heartbeat.',
    image: 'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=1400',
    stats: ['<strong>Range:</strong> 310 miles', '<strong>0-60:</strong> 3.2 seconds', '<strong>Drive:</strong> AWD', '<strong>Interior:</strong> Alcantara trim']
  },
  'monarch-v': {
    name: 'Monarch V',
    price: '$102,400',
    description: 'An unmistakably elegant flagship sedan designed for executive comfort and commanding presence.',
    image: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=1400',
    stats: ['<strong>Range:</strong> 360 miles', '<strong>0-60:</strong> 4.7 seconds', '<strong>Drive:</strong> AWD', '<strong>Interior:</strong> Hand-finished leather']
  },
  'aria-coupe': {
    name: 'Aria Coupe',
    price: '$89,100',
    description: 'Sculpted, athletic, and modern, this coupe balances dramatic styling with intuitive digital luxury.',
    image: 'https://images.pexels.com/photos/1638459/pexels-photo-1638459.jpeg?auto=compress&cs=tinysrgb&w=1400',
    stats: ['<strong>Range:</strong> 330 miles', '<strong>0-60:</strong> 3.6 seconds', '<strong>Drive:</strong> RWD', '<strong>Interior:</strong> Smart cockpit']
  },
  'pulse-r': {
    name: 'Pulse R',
    price: '$91,700',
    description: 'A bold hybrid coupe designed for confident city cruising and weekend performance escapes.',
    image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1400',
    stats: ['<strong>Range:</strong> 350 miles', '<strong>0-60:</strong> 3.8 seconds', '<strong>Drive:</strong> AWD', '<strong>Interior:</strong> Dynamic ambient lighting']
  }
};

const vehicleName = document.getElementById('vehicleName');
const vehiclePrice = document.getElementById('vehiclePrice');
const vehicleDescription = document.getElementById('vehicleDescription');
const vehicleImage = document.getElementById('vehicleImage');
const vehicleStats = document.getElementById('vehicleStats');

if (vehicleName && vehiclePrice && vehicleDescription && vehicleImage && vehicleStats) {
  const params = new URLSearchParams(window.location.search);
  const selectedVehicle = params.get('vehicle') || 'aero-x';
  const vehicle = vehicles[selectedVehicle] || vehicles['aero-x'];

  vehicleName.textContent = vehicle.name;
  vehiclePrice.textContent = vehicle.price;
  vehicleDescription.textContent = vehicle.description;
  vehicleImage.src = vehicle.image;
  vehicleImage.alt = vehicle.name;
  vehicleStats.innerHTML = vehicle.stats.map((item) => `<li>${item}</li>`).join('');
}

const revealItems = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

revealItems.forEach((item) => observer.observe(item));
