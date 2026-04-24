/* ============================================
   HUMBRELLA MAN - SERVICIOS.JS
   Gestión de servicios y casos de estudio
   Versión: 2.0
   ============================================ */

// ========== BASE DE DATOS DE SERVICIOS ==========
const serviciosDB = {
  branding: {
    id: 'branding',
    titulo: 'Branding Estratégico',
    icono: 'fa-palette',
    descripcionCorta: 'Construimos identidades de marca memorables que conectan emocionalmente con tu audiencia.',
    descripcionCompleta: `
      <p>En <strong>Humbrella Man</strong> creemos que el branding es mucho más que un logotipo: es la construcción de una identidad que transmite emociones, valores y personalidad. Nuestro enfoque combina diseño estratégico y narrativa para que cada marca cuente una historia que enamore a su público.</p>
      
      <h4>🎯 ¿Qué incluye nuestro servicio de Branding?</h4>
      <ul>
        <li><strong>Investigación de mercado:</strong> Análisis profundo de tu industria, competencia y público objetivo.</li>
        <li><strong>Arquitectura de marca:</strong> Definición de valores, misión, visión y personalidad de marca.</li>
        <li><strong>Identidad visual:</strong> Diseño de logotipo, paleta de colores, tipografías y sistemas gráficos.</li>
        <li><strong>Brand book:</strong> Guía completa de uso de la marca para mantener consistencia.</li>
        <li><strong>Storytelling:</strong> Narrativa que da vida a la marca y crea vínculos emocionales.</li>
      </ul>
      
      <h4>✨ Beneficios del Branding profesional</h4>
      <ul>
        <li>Reconocimiento inmediato en el mercado</li>
        <li>Diferenciación frente a la competencia</li>
        <li>Fidelización de clientes</li>
        <li>Mayor valor percibido de productos/servicios</li>
        <li>Consistencia en todos los puntos de contacto</li>
      </ul>
    `,
    beneficios: [
      'Reconocimiento inmediato de marca',
      'Diferenciación competitiva',
      'Fidelización de clientes',
      'Mayor valor percibido'
    ],
    imagen: 'https://via.placeholder.com/600x400/1e3a5f/ff7a2f?text=Branding',
    precioDesde: 'Consultar',
    tiempoEntrega: '4-6 semanas',
    casosExito: [
      {
        cliente: 'TechInnovate',
        resultado: 'Aumento del 45% en reconocimiento de marca',
        testimonio: 'Humbrella Man transformó nuestra identidad por completo. Ahora somos líderes en el sector.'
      },
      {
        cliente: 'GreenLife',
        resultado: 'Crecimiento del 200% en engagement',
        testimonio: 'El branding que crearon para nosotros es simplemente perfecto.'
      }
    ]
  },
  
  audiovisual: {
    id: 'audiovisual',
    titulo: 'Producción Audiovisual',
    icono: 'fa-video',
    descripcionCorta: 'Creamos contenido audiovisual de alto impacto que emociona, persuade y permanece en la memoria.',
    descripcionCompleta: `
      <p>En <strong>Humbrella Man</strong> entendemos que la comunicación moderna va más allá de las palabras: las imágenes en movimiento y los sonidos tienen el poder de emocionar, persuadir y permanecer en la memoria del público. Nuestras producciones audiovisuales son el corazón de muchas campañas publicitarias.</p>
      
      <h4>🎬 ¿Cómo funciona nuestro servicio audiovisual?</h4>
      <ul>
        <li><strong>Conceptualización creativa:</strong> Partimos de una idea estratégica que conecta con la esencia de la marca y las emociones del consumidor.</li>
        <li><strong>Pre-producción:</strong> Guion, storyboard, casting, locaciones y plan de rodaje.</li>
        <li><strong>Producción profesional:</strong> Utilizamos recursos técnicos de alta calidad —cámaras Arri, iluminación profesional, sonido envolvente—.</li>
        <li><strong>Post-producción:</strong> Edición, efectos visuales, color grading, mezcla de audio y motion graphics.</li>
        <li><strong>Adaptación multiplataforma:</strong> Los contenidos se diseñan para televisión, redes sociales, plataformas digitales y espacios físicos.</li>
      </ul>
      
      <h4>📊 Impacto en la propaganda</h4>
      <ul>
        <li><strong>Mayor recordación:</strong> Los mensajes audiovisuales generan un impacto emocional más fuerte que los formatos estáticos.</li>
        <li><strong>Persuasión efectiva:</strong> La combinación de imágenes, música y voz influye en la percepción y decisión de compra.</li>
        <li><strong>Viralidad:</strong> En la era digital, un buen spot puede convertirse en tendencia y multiplicar su alcance orgánicamente.</li>
        <li><strong>Construcción de identidad:</strong> Refuerzan la personalidad de la marca y la diferencian de la competencia.</li>
      </ul>
      
      <h4>🎥 Tipos de contenido que producimos</h4>
      <ul>
        <li>Spots publicitarios para TV y digital</li>
        <li>Videos corporativos institucionales</li>
        <li>Contenido para redes sociales (Reels, TikTok, YouTube Shorts)</li>
        <li>Motion graphics y animaciones 2D/3D</li>
        <li>Documentales de marca</li>
        <li>Entrevistas y testimonios</li>
        <li>Eventos en vivo y streaming</li>
      </ul>
    `,
    beneficios: [
      'Mayor engagement en redes sociales',
      'Contenido viralizable',
      'Conexión emocional con audiencia',
      'Posicionamiento de marca'
    ],
    imagen: 'https://via.placeholder.com/600x400/5f2a1a/ff7a2f?text=Audiovisual',
    precioDesde: 'Consultar',
    tiempoEntrega: '2-8 semanas',
    casosExito: [
      {
        cliente: 'Bebidas del Sur',
        resultado: 'Spot viral con 5M+ vistas en primera semana',
        testimonio: 'El comercial que crearon superó todas nuestras expectativas. Se volvió tendencia nacional.'
      },
      {
        cliente: 'Moda Urbana',
        resultado: 'Aumento del 150% en ventas durante la campaña',
        testimonio: 'La producción fue impecable, el equipo súper profesional.'
      }
    ]
  },
  
  marketingDigital: {
    id: 'marketingDigital',
    titulo: 'Marketing Digital 360',
    icono: 'fa-chart-line',
    descripcionCorta: 'Estrategias integrales de marketing digital para potenciar tu presencia online y aumentar tus ventas.',
    descripcionCompleta: `
      <p>En <strong>Humbrella Man</strong> desarrollamos estrategias de marketing digital personalizadas que conectan con tu audiencia en cada punto de contacto, maximizando el retorno de inversión.</p>
      
      <h4>📈 ¿Qué servicios de marketing digital ofrecemos?</h4>
      <ul>
        <li><strong>SEO (Search Engine Optimization):</strong> Posicionamiento orgánico en buscadores para atraer tráfico cualificado.</li>
        <li><strong>SEM (Search Engine Marketing):</strong> Campañas de Google Ads y publicidad de pago por clic.</li>
        <li><strong>Social Media Management:</strong> Gestión profesional de redes sociales (Instagram, Facebook, LinkedIn, TikTok, X).</li>
        <li><strong>Email Marketing:</strong> Estrategias de automatización, newsletters y fidelización.</li>
        <li><strong>Content Marketing:</strong> Creación de contenido valioso que atrae y convierte.</li>
        <li><strong>Analytics y Reporting:</strong> Medición de resultados y optimización continua.</li>
      </ul>
      
      <h4>🚀 ¿Por qué elegir nuestro Marketing Digital?</h4>
      <ul>
        <li>Estrategias basadas en datos</li>
        <li>Equipo multidisciplinario especializado</li>
        <li>Reportes transparentes y medibles</li>
        <li>Optimización continua de campañas</li>
        <li>Acompañamiento personalizado</li>
      </ul>
    `,
    beneficios: [
      'Aumento de tráfico cualificado',
      'Generación de leads calificados',
      'Mayor conversión de ventas',
      'ROI medible y optimizable'
    ],
    imagen: 'https://via.placeholder.com/600x400/2d1b4e/ff7a2f?text=Marketing+Digital',
    precioDesde: 'Consultar',
    tiempoEntrega: 'Resultados a partir del primer mes',
    casosExito: [
      {
        cliente: 'EcoStore',
        resultado: 'Aumento del 300% en ventas online en 6 meses',
        testimonio: 'La estrategia de marketing digital transformó nuestro negocio por completo.'
      },
      {
        cliente: 'FitLife App',
        resultado: 'Alcance de 1M+ usuarios en primer trimestre',
        testimonio: 'El equipo de Humbrella Man es increíblemente estratégico y creativo.'
      }
    ]
  },
  
  publicidad360: {
    id: 'publicidad360',
    titulo: 'Publicidad 360°',
    icono: 'fa-bullhorn',
    descripcionCorta: 'Campañas integradas que combinan medios tradicionales y digitales para maximizar el impacto.',
    descripcionCompleta: `
      <p>En <strong>Humbrella Man</strong> creamos campañas publicitarias 360° que integran todos los canales y puntos de contacto con tu audiencia, generando una experiencia de marca cohesiva y memorable.</p>
      
      <h4>🔄 ¿Qué incluye una campaña 360°?</h4>
      <ul>
        <li><strong>Estrategia omnicanal:</strong> Planificación integrada de medios tradicionales y digitales.</li>
        <li><strong>Publicidad exterior (OOH):</strong> Vallas, mobiliario urbano, transporte público.</li>
        <li><strong>Publicidad en medios tradicionales:</strong> TV, radio, prensa, revistas.</li>
        <li><strong>Publicidad digital:</strong> Display, video, redes sociales, buscadores.</li>
        <li><strong>Activaciones BTL:</strong> Experiencias de marca, sampling, eventos.</li>
        <li><strong>Medición unificada:</strong> KPIs integrados para medir el impacto total.</li>
      </ul>
      
      <h4>🎯 Beneficios de las campañas 360°</h4>
      <ul>
        <li>Alcance masivo y fragmentado estratégicamente</li>
        <li>Mensaje consistente en todos los canales</li>
        <li>Mayor recordación de marca</li>
        <li>Sinergia entre medios que potencia resultados</li>
        <li>ROI optimizado por canal</li>
      </ul>
    `,
    beneficios: [
      'Alcance masivo y segmentado',
      'Consistencia de mensaje',
      'Mayor recordación de marca',
      'ROI optimizado'
    ],
    imagen: 'https://via.placeholder.com/600x400/1a472a/ff7a2f?text=Publicidad+360',
    precioDesde: 'Consultar',
    tiempoEntrega: 'Según alcance de campaña',
    casosExito: [
      {
        cliente: 'Ciudad Shopping',
        resultado: 'Aumento del 80% en afluencia de público',
        testimonio: 'La campaña 360° superó todas las metas de tráfico y ventas.'
      }
    ]
  }
};


let currentService = null;
let activeFilters = [];
let currentPage = 1;
const itemsPerPage = 6;


function initServicios() {
  console.log(' Servicios.js - Inicializado');
  

  renderServiceCards();
  

  setupSearchFilter();

  setupCategoryFilters();
  
 
  setupServiceModal();
  
  
  setupServiciosLink();
}

// ========== RENDERIZAR TARJETAS DE SERVICIOS ==========
function renderServiceCards(filteredServices = null) {
  const servicesGrid = document.querySelector('.services-grid');
  if (!servicesGrid) return;
  
  const servicesToRender = filteredServices || Object.values(serviciosDB);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedServices = servicesToRender.slice(startIndex, endIndex);
  
  if (paginatedServices.length === 0) {
    servicesGrid.innerHTML = `
      <div class="no-results">
        <i class="fas fa-search" style="font-size: 3rem; color: #ff7a2f; margin-bottom: 1rem;"></i>
        <h3>No encontramos resultados</h3>
        <p>Prueba con otros términos o explora todos nuestros servicios</p>
        <button class="btn-primary" onclick="resetFilters()">Ver todos los servicios</button>
      </div>
    `;
    return;
  }
  
  servicesGrid.innerHTML = paginatedServices.map(service => `
    <div class="service-card" data-service="${service.id}" onclick="showServiceDetail('${service.id}')">
      <div class="service-icon">
        <i class="fas ${service.icono}"></i>
      </div>
      <h3 class="service-title">${service.titulo}</h3>
      <p class="service-description">${service.descripcionCorta.substring(0, 100)}...</p>
      <div class="service-footer">
        <span class="service-badge">
          <i class="fas fa-clock"></i> ${service.tiempoEntrega.split('-')[0]}
        </span>
        <span class="service-link">Ver más <i class="fas fa-arrow-right"></i></span>
      </div>
    </div>
  `).join('');
  

  renderPagination(servicesToRender.length);
}

// ========== RENDERIZAR PAGINACIÓN ==========
function renderPagination(totalItems) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const paginationContainer = document.querySelector('.pagination-container');
  
  if (!paginationContainer || totalPages <= 1) {
    if (paginationContainer) paginationContainer.innerHTML = '';
    return;
  }
  
  let paginationHTML = '<div class="pagination">';
  
  // Botón anterior
  paginationHTML += `
    <button class="page-btn prev" ${currentPage === 1 ? 'disabled' : ''} onclick="changePage(${currentPage - 1})">
      <i class="fas fa-chevron-left"></i>
    </button>
  `;
  
  // Números de página
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
      paginationHTML += `
        <button class="page-number ${i === currentPage ? 'active' : ''}" onclick="changePage(${i})">
          ${i}
        </button>
      `;
    } else if (i === currentPage - 2 || i === currentPage + 2) {
      paginationHTML += '<span class="page-dots">...</span>';
    }
  }
  
  // Botón siguiente
  paginationHTML += `
    <button class="page-btn next" ${currentPage === totalPages ? 'disabled' : ''} onclick="changePage(${currentPage + 1})">
      <i class="fas fa-chevron-right"></i>
    </button>
  `;
  
  paginationHTML += '</div>';
  paginationContainer.innerHTML = paginationHTML;
}

// ========== CAMBIAR PÁGINA ==========
function changePage(page) {
  currentPage = page;
  renderServiceCards();
  window.scrollTo({ top: document.querySelector('.services-grid')?.offsetTop - 100, behavior: 'smooth' });
}

// ========== CONFIGURAR BÚSQUEDA ==========
function setupSearchFilter() {
  const searchInput = document.querySelector('#searchServices, .search-services');
  if (!searchInput) return;
  
  searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = Object.values(serviciosDB).filter(service => 
      service.titulo.toLowerCase().includes(searchTerm) ||
      service.descripcionCorta.toLowerCase().includes(searchTerm)
    );
    currentPage = 1;
    renderServiceCards(filtered);
  });
}

// ========== CONFIGURAR FILTROS POR CATEGORÍA ==========
function setupCategoryFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.dataset.category;
      
      if (category === 'all') {
        activeFilters = [];
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      } else {
        btn.classList.toggle('active');
        activeFilters = activeFilters.includes(category) 
          ? activeFilters.filter(f => f !== category)
          : [...activeFilters, category];
      }
      
      applyFilters();
    });
  });
}

// ========== APLICAR FILTROS ==========
function applyFilters() {
  let filtered = Object.values(serviciosDB);
  
  if (activeFilters.length > 0) {
    filtered = filtered.filter(service => activeFilters.includes(service.id));
  }
  
  currentPage = 1;
  renderServiceCards(filtered);
}

// ========== RESETEAR FILTROS (global) ==========
function resetFilters() {
  activeFilters = [];
  currentPage = 1;
  renderServiceCards();
  
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => {
    if (btn.dataset.category === 'all') {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  
  const searchInput = document.querySelector('#searchServices, .search-services');
  if (searchInput) searchInput.value = '';
}

// ========== CONFIGURAR MODAL DE SERVICIOS ==========
function setupServiceModal() {

  if (!document.querySelector('.service-modal')) {
    const modalHTML = `
      <div class="service-modal">
        <div class="service-modal-overlay"></div>
        <div class="service-modal-container">
          <button class="service-modal-close"><i class="fas fa-times"></i></button>
          <div class="service-modal-content">
            <div class="service-modal-header">
              <div class="service-modal-icon">
                <i class="fas"></i>
              </div>
              <h2 class="service-modal-title"></h2>
            </div>
            <div class="service-modal-body"></div>
            <div class="service-modal-footer">
              <button class="btn-modal-cerrar btn-outline">Cerrar</button>
              <a href="#contacto" class="btn-modal-contacto btn-primary">Solicitar cotización</a>
            </div>
          </div>
        </div>
      </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
   
    const modalStyles = document.createElement('style');
    modalStyles.textContent = `
      .service-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 3000;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
      }
      .service-modal.active {
        opacity: 1;
        visibility: visible;
      }
      .service-modal-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.9);
        backdrop-filter: blur(8px);
      }
      .service-modal-container {
        position: relative;
        background: linear-gradient(135deg, #1a1a2e, #16213e);
        border-radius: 32px;
        max-width: 800px;
        width: 90%;
        max-height: 85vh;
        overflow-y: auto;
        transform: scale(0.9);
        transition: transform 0.3s ease;
        border: 1px solid rgba(255,122,47,0.3);
      }
      .service-modal.active .service-modal-container {
        transform: scale(1);
      }
      .service-modal-close {
        position: sticky;
        top: 1rem;
        right: 1rem;
        float: right;
        background: none;
        border: none;
        color: #ff7a2f;
        font-size: 1.3rem;
        cursor: pointer;
        margin: 1rem 1rem 0 0;
        z-index: 1;
      }
      .service-modal-content {
        padding: 2rem;
        clear: both;
      }
      .service-modal-header {
        text-align: center;
        margin-bottom: 1.5rem;
      }
      .service-modal-icon {
        font-size: 3rem;
        background: linear-gradient(135deg, #ff7a2f20, #ffb34720);
        width: 80px;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 1rem;
        border-radius: 30px;
        color: #ff7a2f;
      }
      .service-modal-title {
        font-size: 1.8rem;
        background: linear-gradient(135deg, #ffb347, #ff7a2f);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      }
      .service-modal-body {
        color: #ccc;
        line-height: 1.8;
      }
      .service-modal-body h4 {
        color: #ffb347;
        margin: 1rem 0 0.5rem;
      }
      .service-modal-body ul {
        list-style: none;
        margin: 0.5rem 0 1rem;
      }
      .service-modal-body li {
        margin: 0.5rem 0;
        display: flex;
        align-items: baseline;
        gap: 10px;
      }
      .service-modal-body li i {
        color: #ff7a2f;
      }
      .service-modal-footer {
        display: flex;
        gap: 1rem;
        justify-content: flex-end;
        margin-top: 2rem;
        padding-top: 1rem;
        border-top: 1px solid rgba(255,255,255,0.1);
      }
      @media (max-width: 768px) {
        .service-modal-container {
          width: 95%;
          max-height: 90vh;
        }
        .service-modal-footer {
          flex-direction: column;
        }
      }
    `;
    document.head.appendChild(modalStyles);
  }
  

  const modal = document.querySelector('.service-modal');
  const closeBtns = document.querySelectorAll('.service-modal-close, .service-modal-overlay, .btn-modal-cerrar');
  
  closeBtns?.forEach(btn => {
    btn.addEventListener('click', () => {
      modal?.classList.remove('active');
    });
  });
}

// ========== MOSTRAR DETALLE DEL SERVICIO ==========
function showServiceDetail(serviceId) {
  const service = serviciosDB[serviceId];
  if (!service) return;
  
  currentService = service;
  
  const modal = document.querySelector('.service-modal');
  const iconElement = modal?.querySelector('.service-modal-icon i');
  const titleElement = modal?.querySelector('.service-modal-title');
  const bodyElement = modal?.querySelector('.service-modal-body');
  
  if (iconElement) {
    iconElement.className = `fas ${service.icono}`;
  }
  if (titleElement) {
    titleElement.textContent = service.titulo;
  }
  if (bodyElement) {
    bodyElement.innerHTML = `
      ${service.descripcionCompleta}
      <div class="service-benefits">
        <h4><i class="fas fa-star"></i> Beneficios clave</h4>
        <ul>
          ${service.beneficios.map(b => `<li><i class="fas fa-check-circle"></i> ${b}</li>`).join('')}
        </ul>
      </div>
      <div class="service-info-grid">
        <div class="info-item">
          <i class="fas fa-clock"></i>
          <strong>Tiempo estimado:</strong> ${service.tiempoEntrega}
        </div>
        <div class="info-item">
          <i class="fas fa-tag"></i>
          <strong>Precio desde:</strong> ${service.precioDesde}
        </div>
      </div>
      ${service.casosExito ? `
        <div class="service-testimonials">
          <h4><i class="fas fa-quote-left"></i> Casos de éxito</h4>
          ${service.casosExito.map(caso => `
            <div class="testimonial-card">
              <p><strong>${caso.cliente}</strong> - ${caso.resultado}</p>
              <p class="testimonial-quote">"${caso.testimonio}"</p>
            </div>
          `).join('')}
        </div>
      ` : ''}
    `;
  }
  
  modal?.classList.add('active');
}


function setupServiciosLink() {
  const serviciosLink = document.querySelector('a[href="#servicios"]');
  if (serviciosLink) {
    serviciosLink.addEventListener('click', (e) => {
      e.preventDefault();
      const serviciosSection = document.querySelector('#servicios');
      if (serviciosSection) {
        serviciosSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }
}

// ========== OBTENER TODOS LOS SERVICIOS (API) ==========
function getServicios() {
  return Object.values(serviciosDB);
}

// ========== OBTENER SERVICIO POR ID ==========
function getServicioById(id) {
  return serviciosDB[id] || null;
}

// ========== GUARDAR COTIZACIÓN EN LOCALSTORAGE ==========
function saveCotizacion(serviceId, formData) {
  const cotizaciones = JSON.parse(localStorage.getItem('humbrella_cotizaciones') || '[]');
  const nuevaCotizacion = {
    id: Date.now(),
    serviceId,
    fecha: new Date().toISOString(),
    datos: formData,
    estado: 'pendiente'
  };
  cotizaciones.push(nuevaCotizacion);
  localStorage.setItem('humbrella_cotizaciones', JSON.stringify(cotizaciones));
  return nuevaCotizacion.id;
}

// ========== EXPORTAR FUNCIONES GLOBALES ==========
window.initServicios = initServicios;
window.showServiceDetail = showServiceDetail;
window.resetFilters = resetFilters;
window.changePage = changePage;
window.getServicios = getServicios;
window.getServicioById = getServicioById;
window.saveCotizacion = saveCotizacion;

// ========== INICIALIZAR AUTOMÁTICAMENTE ==========
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initServicios);
} else {
  initServicios();
}