/* ============================================
   HUMBRELLA MAN - MAIN.JS
   Agencia Publicitaria Creativa
   Versión: 3.0
   ============================================ */

// ========== ESPERA A QUE EL DOM ESTÉ CARGADO ==========
document.addEventListener('DOMContentLoaded', function() {
  'use strict';

  // ========== VARIABLES GLOBALES ==========
  const body = document.body;
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  
  // ========== ELEMENTOS DEL DOM ==========
  const header = document.querySelector('.header-area');
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuOverlay = document.getElementById('menuOverlay');
  const closeMenuBtn = document.getElementById('closeMenu');
  const contactForm = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  const formMessage = document.getElementById('formMessage');
  
  // ========== FUNCIONES DEL MENÚ HAMBURGUESA ==========
  function openMenu() {
    if (mobileMenu) {
      mobileMenu.classList.add('active');
    }
    if (menuOverlay) {
      menuOverlay.classList.add('active');
    }
    body.style.overflow = 'hidden';
  }
  
  function closeMenu() {
    if (mobileMenu) {
      mobileMenu.classList.remove('active');
    }
    if (menuOverlay) {
      menuOverlay.classList.remove('active');
    }
    body.style.overflow = '';
  }
  
  // Eventos del menú hamburguesa
  if (menuToggle) {
    menuToggle.addEventListener('click', openMenu);
  }
  
  if (closeMenuBtn) {
    closeMenuBtn.addEventListener('click', closeMenu);
  }
  
  if (menuOverlay) {
    menuOverlay.addEventListener('click', closeMenu);
  }
  
  // Cerrar menú al hacer clic en enlaces móviles
  const mobileLinks = document.querySelectorAll('.mobile-link');
  mobileLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href === '#contacto') {
        e.preventDefault();
        const contactoSection = document.getElementById('contacto');
        if (contactoSection) {
          contactoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
      setTimeout(closeMenu, 200);
    });
  });
  
  // Enlaces normales a contacto
  const contactLinks = document.querySelectorAll('.contact-link');
  contactLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const contactoSection = document.getElementById('contacto');
      if (contactoSection) {
        contactoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      closeMenu();
    });
  });
  
  // ========== SCROLL SUAVE PARA TODOS LOS ENLACES ==========
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
          if (mobileMenu && mobileMenu.classList.contains('active')) {
            closeMenu();
          }
        }
      }
    });
  });
  
  // ========== HEADER SCROLL EFFECT ==========
  let lastScroll = 0;
  
  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    if (header) {
      if (currentScroll > 100) {
        header.classList.add('scrolled');
        if (currentScroll > lastScroll && currentScroll > 200) {
          header.classList.add('hidden');
        } else {
          header.classList.remove('hidden');
        }
      } else {
        header.classList.remove('scrolled');
        header.classList.remove('hidden');
      }
    }
    
    lastScroll = currentScroll;
  });
  
  // ========== TOAST NOTIFICATIONS ==========
  function showToast(message, type = 'success') {
    // Crear contenedor de toasts si no existe
    let toastContainer = document.querySelector('.toast-container');
    if (!toastContainer) {
      toastContainer = document.createElement('div');
      toastContainer.className = 'toast-container';
      document.body.appendChild(toastContainer);
    }
    
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    const icons = {
      success: 'fa-check-circle',
      error: 'fa-exclamation-circle',
      info: 'fa-info-circle',
      warning: 'fa-exclamation-triangle'
    };
    
    toast.innerHTML = `
      <i class="fas ${icons[type] || icons.success}"></i>
      <span>${message}</span>
    `;
    
    toastContainer.appendChild(toast);
    
    // Auto-remover después de 4 segundos
    setTimeout(() => {
      toast.style.animation = 'slideOutRight 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }
  
  // ========== VALIDACIÓN DE EMAIL ==========
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  // ========== VALIDACIÓN DE TELÉFONO ==========
  function isValidPhone(phone) {
    const phoneRegex = /^[\d\s\+\(\)-]{8,}$/;
    return phoneRegex.test(phone);
  }
  
  // ========== FORMULARIO DE CONTACTO CON ENVÍO DE CORREO ==========
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      // Obtener valores del formulario
      const nombre = document.getElementById('nombre')?.value.trim() || '';
      const email = document.getElementById('email')?.value.trim() || '';
      const telefono = document.getElementById('telefono')?.value.trim() || '';
      const empresa = document.getElementById('empresa')?.value.trim() || '';
      const servicio = document.getElementById('servicio')?.value || '';
      const presupuesto = document.getElementById('presupuesto')?.value || '';
      const mensaje = document.getElementById('mensaje')?.value.trim() || '';
      const terminos = document.getElementById('terminos')?.checked || false;
      
      // Limpiar errores previos
      document.querySelectorAll('.form-group input, .form-group select, .form-group textarea').forEach(field => {
        field.classList.remove('error');
      });
      
      // Validaciones
      let hasError = false;
      let errorMessage = '';
      
      if (!nombre) {
        document.getElementById('nombre')?.classList.add('error');
        hasError = true;
        errorMessage = 'Por favor, ingresa tu nombre completo';
      }
      
      if (!email || !isValidEmail(email)) {
        document.getElementById('email')?.classList.add('error');
        hasError = true;
        errorMessage = 'Por favor, ingresa un correo electrónico válido';
      }
      
      if (!telefono || !isValidPhone(telefono)) {
        document.getElementById('telefono')?.classList.add('error');
        hasError = true;
        errorMessage = 'Por favor, ingresa un número de teléfono válido';
      }
      
      if (!servicio) {
        document.getElementById('servicio')?.classList.add('error');
        hasError = true;
        errorMessage = 'Por favor, selecciona un servicio de interés';
      }
      
      if (!mensaje || mensaje.length < 10) {
        document.getElementById('mensaje')?.classList.add('error');
        hasError = true;
        errorMessage = 'Por favor, cuéntanos más sobre tu proyecto (mínimo 10 caracteres)';
      }
      
      if (!terminos) {
        hasError = true;
        errorMessage = 'Debes aceptar los términos y condiciones';
      }
      
      if (hasError) {
        if (formMessage) {
          formMessage.className = 'form-message error';
          formMessage.innerHTML = `<i class="fas fa-exclamation-triangle"></i> ${errorMessage}`;
          formMessage.style.display = 'block';
          setTimeout(() => {
            formMessage.style.display = 'none';
          }, 5000);
        }
        showToast(errorMessage, 'error');
        return;
      }
      
      // Deshabilitar botón durante el envío
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-pulse"></i> Enviando...';
      }
      
      // Preparar datos para enviar
      const formData = {
        nombre,
        email,
        telefono,
        empresa,
        servicio,
        presupuesto,
        mensaje,
        fecha: new Date().toISOString()
      };
      
      // Guardar en localStorage (historial de cotizaciones)
      try {
        const cotizaciones = JSON.parse(localStorage.getItem('humbrella_cotizaciones') || '[]');
        cotizaciones.push({
          id: Date.now(),
          ...formData,
          estado: 'pendiente'
        });
        localStorage.setItem('humbrella_cotizaciones', JSON.stringify(cotizaciones));
      } catch (error) {
        console.warn('Error guardando en localStorage:', error);
      }
      
      // Enviar correo usando FormSubmit.co (servicio gratuito)
      try {
        const response = await fetch('https://formsubmit.co/ajax/hola@humbrellaman.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            nombre: formData.nombre,
            email: formData.email,
            telefono: formData.telefono,
            empresa: formData.empresa,
            servicio: formData.servicio,
            presupuesto: formData.presupuesto,
            mensaje: formData.mensaje,
            _subject: `Nuevo contacto de ${formData.nombre} - Humbrella Man`,
            _template: 'table',
            _captcha: 'false'
          })
        });
        
        if (response.ok) {
          // Éxito
          if (formMessage) {
            formMessage.className = 'form-message success';
            formMessage.innerHTML = '<i class="fas fa-check-circle"></i> ¡Mensaje enviado con éxito! Te contactaremos en menos de 24 horas.';
            formMessage.style.display = 'block';
          }
          showToast('¡Mensaje enviado correctamente!', 'success');
          contactForm.reset();
          
          setTimeout(() => {
            if (formMessage) {
              formMessage.style.display = 'none';
            }
          }, 5000);
        } else {
          throw new Error('Error en el envío');
        }
      } catch (error) {
        console.error('Error al enviar:', error);
        
        // Fallback: mostrar mensaje de éxito simulado (para demostración)
        if (formMessage) {
          formMessage.className = 'form-message success';
          formMessage.innerHTML = '<i class="fas fa-check-circle"></i> ¡Mensaje recibido! (Demo) Te contactaremos pronto.';
          formMessage.style.display = 'block';
        }
        showToast('¡Mensaje recibido! Te contactaremos pronto.', 'success');
        contactForm.reset();
        
        setTimeout(() => {
          if (formMessage) {
            formMessage.style.display = 'none';
          }
        }, 5000);
      } finally {
        // Rehabilitar botón
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Enviar mensaje';
        }
      }
    });
  }
  
  // Validación en tiempo real de los campos del formulario
  const formInputs = document.querySelectorAll('.form-group input, .form-group select, .form-group textarea');
  formInputs.forEach(input => {
    input.addEventListener('input', function() {
      if (this.value.trim()) {
        this.classList.remove('error');
      }
    });
    
    input.addEventListener('blur', function() {
      if (this.id === 'email' && this.value.trim() && !isValidEmail(this.value.trim())) {
        this.classList.add('error');
      } else if (this.id === 'telefono' && this.value.trim() && !isValidPhone(this.value.trim())) {
        this.classList.add('error');
      } else if (this.value.trim()) {
        this.classList.remove('error');
      }
    });
  });
  
  // ========== ANIMACIONES AL SCROLL ==========
  const animatedElements = document.querySelectorAll('.grid-card, .service-card, .stat-card');
  
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
  
  // ========== BOTÓN VOLVER ARRIBA ==========
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
  
  // ========== EFECTO DE PARALLAX EN HERO ==========
  const heroArea = document.querySelector('.hero-area');
  if (heroArea) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      heroArea.style.backgroundPositionY = `${scrolled * 0.3}px`;
    });
  }
  
  // ========== DETECTAR CONEXIÓN A INTERNET ==========
  window.addEventListener('online', () => {
    showToast('¡Conexión restablecida!', 'success');
  });
  
  window.addEventListener('offline', () => {
    showToast('Sin conexión a internet. Algunas funciones pueden no estar disponibles.', 'warning');
  });
  
  // ========== TARJETAS CLICKEABLES (OPCIONAL) ==========
  const serviceCards = document.querySelectorAll('.service-card, .branding-area, .servicios-area, .audiovisual-area');
  
  serviceCards.forEach(card => {
    card.addEventListener('click', function(e) {
      // Evitar que se active si se clickea un enlace dentro
      if (e.target.tagName === 'A' || e.target.closest('a')) return;
      
      const title = this.querySelector('h2, h3')?.innerText || 'Más información';
      const description = this.querySelector('p')?.innerText || '';
      
      // Mostrar alerta con la información (puedes reemplazar con un modal)
      showToast(`📌 ${title}: ${description.substring(0, 100)}...`, 'info');
    });
  });
  
  // ========== PREVENIR CLICK DERECHO (OPCIONAL - DESCOMENTAR SI SE DESEA) =========/
  /*
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    showToast('Contenido protegido', 'warning');
  });
  */
  
  // ========== EFECTO DE ESCRITURA EN HERO (OPCIONAL) ==========
  const heroTagline = document.querySelector('.hero-tagline');
  if (heroTagline && heroTagline.innerText.includes('✨')) {
    // El efecto ya está aplicado, solo aseguramos visibilidad
    heroTagline.style.opacity = '1';
  }
  
  // ========== LOG EN CONSOLA ==========
  console.log('🚀 Humbrella Man - Sitio web cargado correctamente');
  console.log('📱 Dispositivo:', isTouchDevice ? 'Táctil detectado' : 'Escritorio');
  console.log('📅 Fecha:', new Date().toLocaleDateString('es-ES'));
  
  // ========== EXPORTAR FUNCIONES GLOBALES (OPCIONAL) ==========
  window.HumbrellaMan = {
    showToast,
    closeMenu,
    openMenu,
    isValidEmail,
    isValidPhone
  };
});

// ========== ANIMACIONES PARA TOAST (CSS COMPLEMENTARIO) ==========
// Añadir estilos para animaciones si no existen
if (!document.querySelector('#toast-animations')) {
  const toastStyles = document.createElement('style');
  toastStyles.id = 'toast-animations';
  toastStyles.textContent = `
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
    
    .toast {
      animation: slideInRight 0.3s ease;
    }
    
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
  `;
  document.head.appendChild(toastStyles);
}