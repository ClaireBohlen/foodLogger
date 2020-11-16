// Make sure we wait to attach our handlers until the DOM is fully loaded.

$(document).ready(function(){
$(function() {
    $(".change-to-devour").on("click", function(event) {
      var id = $(this).data("id");
      var newDevour = $(this).data("newDevour");
  
      var newDevourState = {
        devour: 1
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevourState
      }).then(
        function() {
          console.log("changed burger", newDevour);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-burger-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        name: $("#ca").val().trim(),
        devour: $("[name=devour]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    
  });

})
  