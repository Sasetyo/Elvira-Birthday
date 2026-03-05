// ── FADE ON SCROLL ──
const obs = new IntersectionObserver(
    entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('show'); }),
    { threshold: 0.1 }
  );
  document.querySelectorAll('.fade').forEach(el => obs.observe(el));
  
  // ── GIFT BUTTON ──
  // Ganti LINK_DANA_KAGET dengan link dana kaget kamu
  document.getElementById('giftButton').onclick = () => {
    window.location.href = 'LINK_DANA_KAGET';
  };
  
  // ── FLOWER BUTTON ──
  document.getElementById('flowerButton').onclick = () => {
    window.location.href = 'https://sasetyo.github.io/Flowers/';
  };
  
  // ── MUSIC TOGGLE ──
  const music = document.getElementById('bgMusic');
  const btn   = document.getElementById('musicBtn');
  let playing = false;
  
  btn.onclick = () => {
    if (!playing) {
      music.play().then(() => {
        playing = true;
        btn.textContent = '🔊';
        btn.classList.add('playing');
      }).catch(() => {});
    } else {
      music.pause();
      playing = false;
      btn.textContent = '🎵';
      btn.classList.remove('playing');
    }
  };
  
  // ── DRAG TO SCROLL (gallery) ──
  const strip = document.getElementById('strip');
  let down = false, startX, scrollLeft;
  
  strip.addEventListener('mousedown', e => {
    down = true;
    startX = e.pageX - strip.offsetLeft;
    scrollLeft = strip.scrollLeft;
  });
  ['mouseleave', 'mouseup'].forEach(ev => strip.addEventListener(ev, () => down = false));
  strip.addEventListener('mousemove', e => {
    if (!down) return;
    e.preventDefault();
    strip.scrollLeft = scrollLeft - (e.pageX - strip.offsetLeft - startX);
  });
  
  // ── PHOTO FALLBACK (show emoji if image missing) ──
  document.querySelectorAll('.photo-card').forEach((card, i) => {
    const img    = card.querySelector('img');
    const emojis = ['📷', '🌿', '🌸'];
  
    const check = () => {
      if (!img || img.naturalWidth === 0) {
        if (img) img.style.display = 'none';
        if (!card.querySelector('span')) {
          const s = document.createElement('span');
          s.textContent = emojis[i] || '📷';
          s.style.cssText = 'font-size:40px;';
          card.appendChild(s);
        }
      }
    };
  
    img?.addEventListener('error', check);
    img?.addEventListener('load', () => {
      if (img.naturalWidth > 0) {
        const s = card.querySelector('span');
        if (s) s.remove();
      }
    });
    setTimeout(check, 400);
  });