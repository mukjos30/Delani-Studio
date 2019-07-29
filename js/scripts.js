$(document).ready(function() {
    $("#des1").click(function() {
      $(".des").toggle();
      $(".d").toggle();
    });
    $("#d") .click(function(){
      $(".d").toggle();
      $(".des").toggle();
    });

    $("#dev1").click(function() {
      $(".dev").toggle();
      $(".all").toggle();
    });
    $("#all") .click(function(){
      $(".all").toggle();
      $(".dev").toggle();
    });
    $("#popo").click(function() {
      $(".pro").toggle();
      $(".lan").toggle();
    });
    $("#lan") .click(function(){
      $(".lan").toggle();
      $(".pro").toggle();
    });
  
    $('.what').css('font-weight', 'bold');


  




  });

 
 