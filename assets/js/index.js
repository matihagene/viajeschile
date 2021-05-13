document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar_top').classList.add('position-fixed');
        document.getElementById('navbar_top').classList.add('bg-navbar');
        document.getElementById('navbar_top').classList.add('p-1');
        document.getElementById('navbar_top').classList.remove('p-4');
        // Se añaden clases de bootstrap para dejar fijo en la parte superior y modificar paddings
      } else if (window.scrollY <= 50) {
        document.getElementById('navbar_top').classList.remove('fixed-top');
        document.getElementById('navbar_top').classList.remove('bg-navbar');
        document.getElementById('navbar_top').classList.add('position-absolute');
        document.getElementById('navbar_top').classList.remove('p-1');
        document.getElementById('navbar_top').classList.add('p-4');
        // Se remueven los atributos añadidos
      } 
  });
}); 