/* Demo purposes only */
$(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );






  const images = document.querySelectorAll('.gal img');

  // Función para agregar la clase 'active' al tocar la imagen
  function addActiveClass() {
    this.classList.add('active');
  }

  // Función para quitar la clase 'active' después de un tiempo determinado (2 segundos)
  function removeActiveClass() {
    setTimeout(() => {
      this.classList.remove('active');
    }, 2000);
  }

  // Agregar un EventListener a cada imagen para el evento 'touchstart'
  images.forEach(img => {
    img.addEventListener('touchstart', addActiveClass);
    img.addEventListener('touchend', removeActiveClass);
  });



