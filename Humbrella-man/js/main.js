/* ============================================
   HUMBRELLA MAN - MAIN.JS
   Agencia Publicitaria Creativa
   Versión: 2.0
   ============================================ */

// ========== ESPERA A QUE EL DOM ESTÉ CARGADO ==========
document.addEventListener('DOMContentLoaded', function() {
  'use strict';

  // ========== VARIABLES GLOBALES ==========
  const body = document.body;
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  
  // ========== HEADER Y NAVEGACIÓN ==========
  const header = document.querySelector('.header-area');
  const menuIcon = document.querySelector('.fa-bars');
  let mobileMenuActive = false;
  
  // Crear menú móvil si no existe
  function createMobileMenu() {
    if (!document.querySelector('.mobile-menu')) {
      const navLinks = document.querySelector('.nav-links');
      if (!navLinks) return;
      
      const mobileMenu = document.createElement('div');
      mobileMenu.className = 'mobile-menu';
      mobileMenu.innerHTML = navLinks.cloneNode(true).innerHTML;
      mobileMenu.style.cssText = `
        position: fixed;
        top: 0;
        right: -100%;
        width: 80%;
        max-width: 350px;
        height: 100vh;
        background: linear-gradient(135deg, #1a1a2e, #0f0f1a);
        z-index: 1000;
        padding: 2rem;
        transition: right 0.3s cubic-bezier(0.2, 0.9, 0.4, 1.1);
        box-shadow: -5px 0 30px rgba(0,0,0,0.5);
        backdrop-filter: blur(10px);
      `;
      
      // Añadir botón cerrar
      const closeBtn = document.createElement('div');
      closeBtn.innerHTML = '<i class="fas fa-times"></i>';
      closeBtn.style.cssText = `
        position: absolute;
        top: 1rem;
        right: 1rem;
        font-size: 1.5rem;
        cursor: pointer;
        color: #ff7a2f;
      `;
      closeBtn.addEventListener('click', closeMobileMenu);
      mobileMenu.appendChild(closeBtn);
      
      document.body.appendChild(mobileMenu);
      
      // Añadir overlay
      const overlay = document.createElement('div');
      overlay.className = 'menu-overlay';
      overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.7);
        z-index: 999;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
      `;
      overlay.addEventListener('click', closeMobileMenu);
      document.body.appendChild(overlay);
    }
  }
  
  // Abrir menú móvil
  function openMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const overlay = document.querySelector('.menu-overlay');
    if (mobileMenu) {
      mobileMenu.style.right = '0';
      mobileMenuActive = true;
    }
    if (overlay) {
      overlay.style.opacity = '1';
      overlay.style.visibility = 'visible';
    }
    body.style.overflow = 'hidden';
  }
  
  // Cerrar menú móvil
  function closeMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const overlay = document.querySelector('.menu-overlay');
    if (mobileMenu) {
      mobileMenu.style.right = '-100%';
      mobileMenuActive = false;
    }
    if (overlay) {
      overlay.style.opacity = '0';
      overlay.style.visibility = 'hidden';
    }
    body.style.overflow = '';
  }
  
  // Evento del menú hamburguesa
  if (menuIcon) {
    menuIcon.addEventListener('click', function() {
      if (window.innerWidth <= 768) {
        createMobileMenu();
        openMobileMenu();
      }
    });
  }
  
  // ========== SCROLL SUAVE ==========
  const smoothLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');
  
  smoothLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          const headerOffset = 80;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
          
          // Cerrar menú móvil si está abierto
          if (mobileMenuActive) {
            closeMobileMenu();
          }
        }
      }
    });
  });
  
  // ========== HEADER SCROLL EFFECT ==========
  let lastScroll = 0;
  
  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
      header?.classList.add('scrolled');
      if (currentScroll > lastScroll && currentScroll > 200) {
        header?.classList.add('hidden');
      } else {
        header?.classList.remove('hidden');
      }
    } else {
      header?.classList.remove('scrolled');
      header?.classList.remove('hidden');
    }
    
    lastScroll = currentScroll;
  });
  
  // ========== TARJETAS CLICKEABLES ==========
  const serviceCards = document.querySelectorAll('.service-card, .branding-area, .servicios-area, .audiovisual-area');
  
  serviceCards.forEach(card => {
    card.addEventListener('click', function(e) {
      // Evitar que se active si se clickea un enlace dentro
      if (e.target.tagName === 'A' || e.target.closest('a')) return;
      
      const title = this.querySelector('h2, h3')?.innerText || 'Más información';
      const description = this.querySelector('p')?.innerText || '';
      
      showModal(title, description);
    });
  });
  
  // ========== MODAL SYSTEM ==========
  function createModal() {
    if (document.querySelector('.custom-modal')) return;
    
    const modal = document.createElement('div');
    modal.className = 'custom-modal';
    modal.innerHTML = `
      <div class="modal-overlay"></div>
      <div class="modal-container">
        <button class="modal-close"><i class="fas fa-times"></i></button>
        <div class="modal-header">
          <h3 class="modal-title"></h3>
        </div>
        <div class modal-body">
          <p class="modal-description"></p>
        </div>
        <div class="modal-footer">
          <button class="btn-modal-close btn-outline">Cerrar</button>
          <a href="#contacto" class="btn-modal-action btn-primary">Contactar</a>
        </div>
      </div>
    `;
    
    document.body.appendChild(modal);
    
    // Estilos del modal
    const style = document.createElement('style');
    style.textContent = `
      .custom-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 2000;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
      }
      .custom-modal.active {
        opacity: 1;
        visibility: visible;
      }
      .modal-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.85);
        backdrop-filter: blur(8px);
      }
      .modal-container {
        position: relative;
        background: linear-gradient(135deg, #1a1a2e, #16213e);
        border-radius: 32px;
        padding: 2rem;
        max-width: 500px;
        width: 90%;
        transform: scale(0.9);
        transition: transform 0.3s ease;
        border: 1px solid rgba(255,122,47,0.3);
      }
      .custom-modal.active .modal-container {
        transform: scale(1);
      }
      .modal-close {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: none;
        border: none;
        color: #ff7a2f;
        font-size: 1.2rem;
        cursor: pointer;
        transition: transform 0.2s;
      }
      .modal-close:hover {
        transform: rotate(90deg);
      }
      .modal-title {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        background: linear-gradient(135deg, #ffb347, #ff7a2f);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      }
      .modal-description {
        color: #ccc;
        line-height: 1.6;
        margin-bottom: 1.5rem;
      }
      .modal-footer {
        display: flex;
        gap: 1rem;
        justify-content: flex-end;
      }
      .btn-modal-close, .btn-modal-action {
        padding: 10px 20px;
        border-radius: 40px;
        text-decoration: none;
        font-weight: 600;
        transition: all 0.2s;
        cursor: pointer;
        border: none;
      }
      .btn-modal-close {
        background: transparent;
        border: 2px solid #ff7a2f;
        color: #ff7a2f;
      }
      .btn-modal-action {
        background: linear-gradient(95deg, #ff7a2f, #ffb347);
        color: white;
      }
    `;
    document.head.appendChild(style);
  }
  
  function showModal(title, description) {
    createModal();
    const modal = document.querySelector('.custom-modal');
    const modalTitle = modal?.querySelector('.modal-title');
    const modalDesc = modal?.querySelector('.modal-description');
    
    if (modalTitle) modalTitle.textContent = title;
    if (modalDesc) modalDesc.textContent = description || 'Descubre cómo podemos transformar tu marca con nuestras soluciones creativas.';
    
    modal?.classList.add('active');
    
    // Eventos de cierre
    const closeButtons = modal?.querySelectorAll('.modal-close, .modal-overlay, .btn-modal-close');
    closeButtons?.forEach(btn => {
      btn.addEventListener('click', () => {
        modal.classList.remove('active');
      });
    });
  }
  
  // ========== FORMULARIO DE CONTACTO ==========
  const contactForm = document.querySelector('#contactForm, .contact-form form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      const submitBtn = this.querySelector('button[type="submit"], .btn-submit');
      const originalText = submitBtn?.innerHTML || 'Enviar';
      
      // Validación básica
      const inputs = this.querySelectorAll('input[required], textarea[required]');
      let isValid = true;
      
      inputs.forEach(input => {
        if (!input.value.trim()) {
          isValid = false;
          input.classList.add('error');
          showToast('Por favor, completa todos los campos requeridos', 'error');
        } else {
          input.classList.remove('error');
        }
      });
      
      if (!isValid) return;
      
      // Simular envío (aquí iría la llamada a API real)
      if (submitBtn) {
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-pulse"></i> Enviando...';
        submitBtn.disabled = true;
      }
      
      // Simular delay de red
      setTimeout(() => {
        if (submitBtn) {
          submitBtn.innerHTML = '<i class="fas fa-check"></i> ¡Mensaje enviado!';
        }
        
        showToast('¡Mensaje enviado con éxito! Te contactaremos pronto.', 'success');
        contactForm.reset();
        
        setTimeout(() => {
          if (submitBtn) {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
          }
        }, 3000);
      }, 1500);
    });
  }
  
  // Validación en tiempo real
  const formInputs = document.querySelectorAll('.form-input, .form-textarea');
  formInputs.forEach(input => {
    input.addEventListener('input', function() {
      if (this.value.trim()) {
        this.classList.remove('error');
      }
    });
  });
  
  // ========== TOAST NOTIFICATIONS ==========
  function createToastContainer() {
    if (!document.querySelector('.toast-container')) {
      const container = document.createElement('div');
      container.className = 'toast-container';
      container.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 9999;
        display: flex;
        flex-direction: column;
        gap: 10px;
      `;
      document.body.appendChild(container);
    }
  }
  
  function showToast(message, type = 'info') {
    createToastContainer();
    const container = document.querySelector('.toast-container');
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    const icons = {
      success: 'fa-check-circle',
      error: 'fa-exclamation-circle',
      info: 'fa-info-circle',
      warning: 'fa-exclamation-triangle'
    };
    
    toast.innerHTML = `
      <i class="fas ${icons[type] || icons.info}"></i>
      <span>${message}</span>
    `;
    
    toast.style.cssText = `
      background: linear-gradient(135deg, #1a1a2e, #16213e);
      border-left: 4px solid ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : type === 'warning' ? '#f59e0b' : '#ff7a2f'};
      border-radius: 12px;
      padding: 12px 20px;
      display: flex;
      align-items: center;
      gap: 12px;
      color: white;
      font-size: 0.9rem;
      animation: slideInRight 0.3s ease;
      box-shadow: 0 10px 25px rgba(0,0,0,0.2);
    `;
    
    container.appendChild(toast);
    
    setTimeout(() => {
      toast.style.animation = 'slideOutRight 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }
  
  // Añadir animaciones para toasts
  const toastStyles = document.createElement('style');
  toastStyles.textContent = `
    @keyframes slideInRight {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
    @keyframes slideOutRight {
      from {
        transform: translateX(0);
        opacity: 1;
      }
      to {
        transform: translateX(100%);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(toastStyles);
  
  // ========== ANIMACIONES AL SCROLL ==========
  const animatedElements = document.querySelectorAll('.grid-card, .service-card');
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '0';
        entry.target.style.transform = 'translateY(30px)';
        entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, 100);
        
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  animatedElements.forEach(el => observer.observe(el));
  
  
  function typeWriter(element, texts, delay = 100) {
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function type() {
      const currentText = texts[textIndex];
      if (isDeleting) {
        element.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
      } else {
        element.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
      }
      
      if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(type, 2000);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(type, 500);
      } else {
        setTimeout(type, isDeleting ? 50 : delay);
      }
    }
    
    type();
  }
  

  const heroTitle = document.querySelector('.hero-area h1');
  if (heroTitle && heroTitle.querySelector('span')) {
    const originalText = heroTitle.innerText;
    const texts = ['Ideas que rompen lo lineal', 'Creatividad sin límites', 'Marcas que perduran'];
    
  }
  

  function createBackToTop() {
    const btn = document.createElement('button');
    btn.className = 'back-to-top';
    btn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    btn.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 45px;
      height: 45px;
      border-radius: 50%;
      background: linear-gradient(95deg, #ff7a2f, #ffb347);
      border: none;
      color: white;
      cursor: pointer;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
      z-index: 998;
      box-shadow: 0 4px 15px rgba(255,122,47,0.3);
    `;
    
    document.body.appendChild(btn);
    
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        btn.style.opacity = '1';
        btn.style.visibility = 'visible';
      } else {
        btn.style.opacity = '0';
        btn.style.visibility = 'hidden';
      }
    });
    
    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
  
  createBackToTop();
  
 
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-area');
    if (hero) {
      hero.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
  });
  

  
  // ========== DETECTAR CONEXIÓN A INTERNET ==========
  window.addEventListener('online', () => {
    showToast('¡Conexión restablecida!', 'success');
  });
  
  window.addEventListener('offline', () => {
    showToast('Sin conexión a internet. Algunas funciones pueden no estar disponibles.', 'warning');
  });
  
  // ========== CARGAR IMÁGENES CON LAZY LOAD ==========
  const lazyImages = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        imageObserver.unobserve(img);
      }
    });
  });
  
  lazyImages.forEach(img => imageObserver.observe(img));
  
  // ========== LOG EN CONSOLA ==========
  console.log(' Humbrella Man - Sitio web cargado correctamente');
  console.log(' Versión:', isTouchDevice ? 'Táctil detectada' : 'Escritorio');
  
 
  window.HumbrellaMan = {
    showToast,
    showModal,
    closeMobileMenu
  };
});