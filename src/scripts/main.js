$(document).ready(function(){
   /* Reference */
   // "Solutions" dropdown menu
   var dropdownContainer = $('.dropdown-menu_container');
   var dropdownMenu = $('.dropdown-menu');

   // Hamburger navbar menu
   var hamburgerBtn = $('.header_hamburger-nav');
   var hamburgerDropdown = $('.responsive-dropdown');

   /* Logic */
   // "Solutions" dropdown menu
   dropdownContainer.hover(function(){
      dropdownMenu.toggle();
   });

   // Hamburger navbar menu
   hamburgerBtn.click(function(){
      hamburgerDropdown.toggleClass('invisible');
   });
});