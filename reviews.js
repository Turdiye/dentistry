document.addEventListener('DOMContentLoaded', () => {
  const listEl = document.getElementById('reviewsList');
  if (!listEl) return;

  function esc(s){
    return String(s ?? '').replace(/[<>&]/g, c => ({'<':'&lt;','>':'&gt;','&':'&amp;'}[c]));
  }

  function onlyDate(mysqlTs){
    if (typeof mysqlTs !== 'string') return '';
    const m = mysqlTs.match(/^(\d{4})-(\d{2})-(\d{2})/);
    if (!m) return esc(mysqlTs);
    const [, y, mo, d] = m;
    return `${d}.${mo}.${y}`;
  }

  function starHTML(n){
    n = Math.max(0, Math.min(5, Number(n)||0));
    let html = '';
    for (let i=1;i<=5;i++){
      html += `<span class="star ${i<=n?'filled':''}">★</span>`;
    }
    return `<span class="stars">${html}</span>`;
  }

  async function loadReviews(){
    try{
      const res = await fetch('/new-dentistry/reviews_get.php?ts='+Date.now(), { cache: 'no-store' });
      const text = await res.text();
      let data;
      try { data = JSON.parse(text); }
      catch(parseErr){
        console.error('JSON parse error:', parseErr, text);
        throw new Error('Некорректный ответ сервера');
      }

      if (!data || data.ok !== true || !Array.isArray(data.items)){
        throw new Error('Плохой формат данных');
      }
      if (!data.items.length){
        listEl.innerHTML = `<p style="opacity:.8">Пока нет отзывов.</p>`;
        return;
      }

      listEl.innerHTML = data.items.map(it => `
        <article class="review-card">
          <header class="review-head">
            <strong class="review-name"><span class="review-label">Имя:</span> ${esc(it.username)}</strong>
            <div class="review-date">${onlyDate(it.created_at||'')}</div>
          </header>
          <div class="review-rating"><span class="review-label">Рейтинг:</span> ${starHTML(it.rating)}</div>
          <p class="review-text"><span class="review-label">Отзыв:</span> ${esc(it.review_text)}</p>
        </article>
      `).join('');
    } catch(err){
      console.error('reviews load error:', err);
      listEl.innerHTML = `<p style="color:#f88">Ошибка загрузки: ${esc(err && err.message ? err.message : err)}</p>`;
    }
  }

  loadReviews();
});





document.addEventListener('DOMContentLoaded', () => {
  const stars = document.querySelectorAll('#starContainer .star');
  const ratingInput = document.getElementById('rating');
  let current = parseInt(ratingInput.value, 10) || 0;

  function paintStars(n) {
    stars.forEach((s, i) => {
      s.classList.toggle('filled', i < n);
    });
  }

  paintStars(current);

  stars.forEach(star => {
    const value = parseInt(star.dataset.value, 10);

    star.addEventListener('mouseover', () => paintStars(value));
    star.addEventListener('mouseout', () => paintStars(current));

    star.addEventListener('click', () => {
      current = value;
      ratingInput.value = String(current);
      paintStars(current);
    });
  });
});


