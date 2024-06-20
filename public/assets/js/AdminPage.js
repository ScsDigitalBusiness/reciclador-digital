$(".menu > ul > li").click(function (e) {
    // Remove the 'active' class from other menu items
    $(this).siblings().removeClass("active");
    // Toggle the 'active' class on the clicked menu item
    $(this).toggleClass("active");
    // Toggle the visibility of the submenu
    $(this).find("ul").slideToggle();
    // Close other submenus if they are open
    $(this).siblings().find("ul").slideUp();
    // Remove the 'active' class from submenu items
    $(this).siblings().find("ul").find("li").removeClass("active");
});

$(".menu-btn").click(function () {
    // Toggle the 'active' class on the sidebar
    $(".sidebar").toggleClass("active");
});
 
$('.money').mask('000.000.000.000.000,00', {reverse: true}) 

var loadFile = function (event) {
    var image = document.getElementById("output");
    image.src = URL.createObjectURL(event.target.files[0]);
  };
   
  var loadFileEdit = function (event,i) {
    var image = document.getElementById(`output-${i}`);
    image.src = URL.createObjectURL(event.target.files[0]);
  };
  