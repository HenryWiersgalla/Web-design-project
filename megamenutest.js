$(document)
   .on('click.bs.dropdown.data-api', '.dropdown', function (e) { e.stopPropagation() })

   // When the user clicks on div, open the popup
   function myFunction() {
     var popup = document.getElementById("myPopup");
     popup.classList.toggle("show");
   }

   function myFunction2() {
     var popup = document.getElementById("myPopup2");
     popup.classList.toggle("show");
   }

   function myFunction3() {
     var popup = document.getElementById("myPopup3");
     popup.classList.toggle("show");
   }

   function myFunction4() {
     var popup = document.getElementById("myPopup4");
     popup.classList.toggle("show");
   }


  function Function1() {
        var popup = document.getElementById("Popup1");
        popup.classList.toggle("show");
      }

  function Function2() {
        var popup = document.getElementById("Popup2");
            popup.classList.toggle("show");
      }

  function Function3() {
        var popup = document.getElementById("Popup3");
            popup.classList.toggle("show");
      }
