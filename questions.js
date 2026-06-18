(function(){
  const sections = document.querySelectorAll('.faq-carousel');
  if (!sections.length) return;

  sections.forEach(sec => {
    const track = sec.querySelector('.faq-track');
    const prev  = sec.querySelector('.faq-prev');
    const next  = sec.querySelector('.faq-next');

    function getStep(){
      const first = track.querySelector('.faq-card');
      if (!first) return track.clientWidth * 0.9;
      const style = getComputedStyle(track);
      const gap = parseFloat(style.columnGap || style.gap || 16);
      const w = first.getBoundingClientRect().width + gap;
      return Math.max(40, w);
    }

    function updateButtons(){
      if (!prev || !next) return;
      const maxScroll = track.scrollWidth - track.clientWidth - 1;
      prev.disabled = track.scrollLeft <= 0;
      next.disabled = track.scrollLeft >= maxScroll;
    }

    function go(dir){
      const step = getStep();
      track.scrollBy({ left: dir * step, behavior: 'smooth' });
      setTimeout(updateButtons, 320);
    }

    prev?.addEventListener('click', ()=> go(-1));
    next?.addEventListener('click', ()=> go(1));

    track.addEventListener('keydown', e => {
      if (e.key === 'ArrowLeft'){ e.preventDefault(); go(-1); }
      if (e.key === 'ArrowRight'){ e.preventDefault(); go(1); }
    });

    track.addEventListener('scroll', updateButtons, { passive: true });
    window.addEventListener('resize', () => setTimeout(updateButtons, 150));

    updateButtons();
  });
})();
