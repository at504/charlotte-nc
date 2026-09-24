/* ============================================================
   Roofing Charlotte NC - Standalone Interactive Scripts
   Vanilla JavaScript - Zero Dependencies
   ============================================================ */

document.addEventListener('DOMContentLoaded', function() {
  // 1. Mobile Menu Toggle
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  if (mobileBtn && mobileDrawer) {
    mobileBtn.addEventListener('click', function() {
      mobileDrawer.classList.toggle('active');
    });
  }

  // 2. FAQ Accordion Toggles
  const faqButtons = document.querySelectorAll('.faq-question');
  faqButtons.forEach(function(btn) {
    btn.addEventListener('click', function() {
      const item = this.parentElement;
      item.classList.toggle('active');
    });
  });

  // 3. Quote Modal Open / Close
  const modal = document.getElementById('quoteModal');
  const openModalBtns = document.querySelectorAll('[data-open-modal="quote"]');
  const closeModalBtn = document.getElementById('closeModalBtn');

  function openModal() {
    if (modal) modal.classList.add('active');
  }

  function closeModal() {
    if (modal) modal.classList.remove('active');
  }

  openModalBtns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      openModal();
    });
  });

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
  }

  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) closeModal();
    });
  }

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeModal();
  });

  // 4. Form Lead Capture Simulation
  const quoteForm = document.getElementById('quoteForm');
  const formSuccess = document.getElementById('formSuccess');
  if (quoteForm && formSuccess) {
    quoteForm.addEventListener('submit', function(e) {
      e.preventDefault();
      quoteForm.style.display = 'none';
      formSuccess.style.display = 'block';
    });
  }

  // 5. Hero Location / Service Jump Filter
  const heroSearchBtn = document.getElementById('heroSearchBtn');
  if (heroSearchBtn) {
    heroSearchBtn.addEventListener('click', function(e) {
      e.preventDefault();
      const locSelect = document.getElementById('heroLocationSelect');
      const srvSelect = document.getElementById('heroServiceSelect');
      if (locSelect && locSelect.value) {
        window.location.href = locSelect.value;
      } else if (srvSelect && srvSelect.value) {
        window.location.href = srvSelect.value;
      }
    });
  }
});
