  document.addEventListener("DOMContentLoaded", () => {
    const burger     = document.getElementById("burger");
    const burgerIcon = document.getElementById("burgerIcon");
    const sideMenu   = document.getElementById("sideMenu");
    const overlay    = document.getElementById("overlay");

    const OPEN_SRC  = "./img/bar.svg";
    const CLOSE_SRC = "./img/close.svg";
    function openMenu() {
      sideMenu.classList.add("active");
      overlay.hidden = false;
      requestAnimationFrame(() => overlay.classList.add("active"));
      document.body.classList.add("body--lock");
      burgerIcon.src = CLOSE_SRC;
    }
    function closeMenu() {
      sideMenu.classList.remove("active");
      overlay.classList.remove("active");
      overlay.addEventListener("transitionend", function onEnd() {
        overlay.hidden = true;
        overlay.removeEventListener("transitionend", onEnd);
      });
      document.body.classList.remove("body--lock");
      burgerIcon.src = OPEN_SRC;
    }
    burger.addEventListener("click", () => {
      if (sideMenu.classList.contains("active")) {
        closeMenu();
      } else {
        openMenu();
      }
    });
    overlay.addEventListener("click", closeMenu);
  });
(function(){
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const candidates = Array.from(document.querySelectorAll([
    'section > *',
    '.section > *',
    '.card',
    '.price__item',
    '.work__card',
    '.reviews__item',
    '.service',
    '.feature'
  ].join(',')));
  candidates.forEach(el => el.classList.add('reveal-preset'));
  const io = new IntersectionObserver((entries)=>{
    for (const e of entries){
      if (e.isIntersecting){
        e.target.classList.add('reveal-in');
        io.unobserve(e.target);
      }
    }
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });
  candidates.forEach(el => io.observe(el));
})();

(function(){
  const force = document.documentElement.classList.contains('anim-force');
  const prefersReduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!force && prefersReduce) return;

  const selectors = [
    'section > *',
    '.section > *',
    '.card',
    '.price__item',
    '.work__card',
    '.reviews__item',
    '.service',
    '.feature'
  ].join(',');

  const items = Array.from(document.querySelectorAll(selectors));
  items.forEach(el => el.classList.add('reveal-preset'));

  const revealNow = ()=>{
    const vh = window.innerHeight || document.documentElement.clientHeight;
    for (const el of items){
      if (el.classList.contains('reveal-in')) continue;
      const r = el.getBoundingClientRect();
      if (r.top < vh * 0.9 && r.bottom > 0) el.classList.add('reveal-in');
    }
  };

  if ('IntersectionObserver' in window){
    const io = new IntersectionObserver((entries)=>{
      for (const e of entries){
        if (e.isIntersecting){
          e.target.classList.add('reveal-in');
          io.unobserve(e.target);
        }
      }
    }, { rootMargin: '0px 0px -25% 0px', threshold: 0 });
    items.forEach(el => io.observe(el));
    requestAnimationFrame(revealNow);
    setTimeout(revealNow, 300);
    window.addEventListener('pageshow', revealNow, { once:true });
    window.addEventListener('orientationchange', ()=> setTimeout(revealNow, 250));
  } else {
    const throttle = (fn, ms)=>{ let t=0; return ()=>{ const n=Date.now(); if(n-t>ms){ t=n; fn(); } }; };
    const onScroll = throttle(revealNow, 100);
    window.addEventListener('scroll', onScroll, {passive:true});
    window.addEventListener('resize', onScroll);
    revealNow();
  }
})();


    let startX = 0;
    let endX = 0;

document.addEventListener("DOMContentLoaded", () => {
  const modalImg = document.getElementById("modalImg");
  const prevBtn  = document.querySelector(".prev");
  const nextBtn  = document.querySelector(".next");

  if (!modalImg || !prevBtn || !nextBtn) return;
  let startX = 0;

  modalImg.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  }, { passive: true });

  modalImg.addEventListener("touchend", (e) => {
    const endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) nextBtn.click();
    else if (endX - startX > 50) prevBtn.click();
  }, { passive: true });
});



 function closeMenu() {
      sideMenu.classList.remove("active");
      overlay.classList.remove("active");
      overlay.addEventListener("transitionend", function onEnd() {
        overlay.hidden = true;
        overlay.removeEventListener("transitionend", onEnd);
      });
      document.body.classList.remove("body--lock");
      burgerIcon.src = OPEN_SRC;
    }



