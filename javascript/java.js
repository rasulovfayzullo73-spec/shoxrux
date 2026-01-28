// Scroll animation
const faders = document.querySelectorAll('.fade-up');
const appearOptions = { threshold: 0.3 };
const appearOnScroll = new IntersectionObserver(function(entries, observer){
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, appearOptions);
faders.forEach(fader => { appearOnScroll.observe(fader); });

// Copy phone
const phone = document.getElementById('copyPhone');
const msg = document.getElementById('copyMsg');
phone.addEventListener('click', () => {
  navigator.clipboard.writeText(phone.textContent);
  msg.classList.remove('hidden');
  setTimeout(()=>{ msg.classList.add('hidden'); }, 1500);
});



