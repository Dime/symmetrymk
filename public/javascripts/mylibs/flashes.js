$(document).ready(function(){
  // close flash notice
  $(document).on('click', 'a.close',function(e){
    x = e.target;
    $(x).parents('#flashes').slideUp(500);
  });
});
