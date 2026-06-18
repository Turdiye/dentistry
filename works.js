  (function(){
    const openers = document.querySelectorAll('[data-modal]');
    const modals  = document.querySelectorAll('.modal');
    let lastFocus = null;

    function openModal(id){
      const modal = document.getElementById(id);
      if (!modal) return;
      lastFocus = document.activeElement;
      modal.hidden = false;
      document.body.style.overflow = 'hidden';
      modal.querySelector('.modal__close')?.focus();
    }
    function closeModal(modal){
      modal.hidden = true;
      document.body.style.overflow = '';
      lastFocus?.focus();
    }
    openers.forEach(btn=>{
      btn.addEventListener('click', ()=> openModal(btn.dataset.modal));
    });
    modals.forEach(m=>{
      m.addEventListener('click', (e)=>{
        if (e.target.matches('[data-close]') || e.target === m.querySelector('.modal__backdrop')){
          closeModal(m);
        }
      });
    });
    document.addEventListener('keydown', (e)=>{
      if (e.key === 'Escape'){
        const opened = document.querySelector('.modal:not([hidden])');
        if (opened) closeModal(opened);
      }
    });
  })();


  (function(){
    const fullscreen = document.getElementById('modal_img');
    const imgEl = document.getElementById('modalImg');
    const capEl = document.getElementById('caption');
    const counterEl = document.getElementById('counter');
    const btnClose = fullscreen.querySelector('.close');
    const btnPrev = fullscreen.querySelector('.prev');
    const btnNext = fullscreen.querySelector('.next');


    let currentGallery = [];
    let currentIndex = 0;

    document.querySelectorAll('.modal .modal__gallery').forEach(gal=>{
      gal.addEventListener('click', (e)=>{
        const target = e.target;
        if (!(target instanceof HTMLImageElement)) return;

        const imgs = Array.from(gal.querySelectorAll('img.preview'));
        currentGallery = imgs.map(i => ({ src: i.src, alt: i.alt }));
        currentIndex = Math.max(0, imgs.indexOf(target));

        openFullscreen();
      });
    });

   function openFullscreen(){
  renderImage();
  fullscreen.classList.add('is-open');          
  fullscreen.setAttribute('aria-hidden','false');
  document.body.style.overflow = 'hidden';
}
function closeFullscreen(){
  fullscreen.classList.remove('is-open');   
  fullscreen.setAttribute('aria-hidden','true');
  document.body.style.overflow = '';
}


    function renderImage(){
      if (!currentGallery.length) return;
      const item = currentGallery[currentIndex];
      imgEl.src = item.src;
      imgEl.alt = item.alt || '';
      capEl.textContent = item.alt || '';
      counterEl.textContent = (currentIndex + 1) + ' / ' + currentGallery.length;

      btnPrev.disabled = currentIndex <= 0;
      btnNext.disabled = currentIndex >= currentGallery.length - 1;
    }

    function go(step){
      if (!currentGallery.length) return;
      const next = currentIndex + step;
      if (next < 0 || next >= currentGallery.length) return; 
      currentIndex = next;
      renderImage();
    }
document.addEventListener('keydown', (e) => {
  if (!fullscreen.classList.contains('is-open')) return;

  const key = e.key;

  if (key === 'ArrowRight' || key === 'Right') {
    e.preventDefault(); 
    go(1);              
  } else if (key === 'ArrowLeft' || key === 'Left') {
    e.preventDefault();
    go(-1);             
  } else if (key === 'Escape' || key === 'Esc') {
    e.preventDefault();
    closeFullscreen();  
  }
});


    btnPrev.addEventListener('click', ()=> go(-1));
    btnNext.addEventListener('click', ()=> go(1));
    btnClose.addEventListener('click', closeFullscreen);

    fullscreen.addEventListener('click', (e)=>{
      if (e.target === fullscreen) closeFullscreen();
    });

    document.addEventListener('keydown', (e)=>{
      if (fullscreen.style.display === 'block'){
        if (e.key === 'Escape') closeFullscreen();
        if (e.key === 'ArrowLeft') go(-1);
        if (e.key === 'ArrowRight') go(1);
      }
    });
  })();

  