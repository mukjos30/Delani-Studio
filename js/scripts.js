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

   $("#black1").hide();
   $("#black2") .animate({
     opacity:1

   })
   $("#black2").hover( function(){
    $(this).stop().animate({opacity:0.3});
    $("#black1").fadeIn()
   }, function(){
    $(this).stop().animate({opacity:1},500);
    $("#black1").fadeOut()
     

  })

  $("#anta").hide();
   $("#anta1") .animate({
     opacity:1

   })
   $("#anta1").hover( function(){
    $(this).stop().animate({opacity:0.3});
    $("#anta").fadeIn()
   }, function(){
    $(this).stop().animate({opacity:1},500);
    $("#anta").fadeOut()
     
})
 
$("#yel").hide();
$("#yel1") .animate({
  opacity:1

})
$("#yel1").hover( function(){
 $(this).stop().animate({opacity:0.3});
 $("#yel").fadeIn()
}, function(){
 $(this).stop().animate({opacity:1},500);
 $("#yel").fadeOut()
})

$("#anta").hide();
$("#anta1") .animate({
  opacity:1

})
$("#anta1").hover( function(){
 $(this).stop().animate({opacity:0.3});
 $("#anta").fadeIn()
}, function(){
 $(this).stop().animate({opacity:1},500);
 $("#anta").fadeOut()
})

//   $("#hom").hide();
//    $("#hom1") .animate({
//      opacity:1

//    })
//    $("#anta1").hover( function(){
//     $(this).stop().animate({opacity:0.3});
//     $("#anta").fadeIn()
//    }, function(){
//     $(this).stop().animate({opacity:1},500);
//     $("#anta").fadeOut()
// })
$("#god").hide();
$("#god1") .animate({
  opacity:1

})
$("#god1").hover( function(){
 $(this).stop().animate({opacity:0.3});
 $("#god").fadeIn()
}, function(){
 $(this).stop().animate({opacity:1},500);
 $("#god").fadeOut()
})
$("#hom").hide();
$("#hom1") .animate({
  opacity:1

})
$("#hom1").hover( function(){
 $(this).stop().animate({opacity:0.3});
 $("#hom").fadeIn()
}, function(){
 $(this).stop().animate({opacity:1},500);
 $("#hom").fadeOut()
})
$("#whit").hide();
$("#whit1") .animate({
  opacity:1

})
$("#whit1").hover( function(){
 $(this).stop().animate({opacity:0.3});
 $("#whit").fadeIn()
}, function(){
 $(this).stop().animate({opacity:1},500);
 $("#whit").fadeOut()
})
$("#burn").hide();
$("#burn1") .animate({
  opacity:1

})
$("#burn1").hover( function(){
 $(this).stop().animate({opacity:0.3});
 $("#burn").fadeIn()
}, function(){
 $(this).stop().animate({opacity:1},500);
 $("#burn").fadeOut()
})
$("#wong").hide();
$("#wong1") .animate({
  opacity:1

})
$("#wong1").hover( function(){
 $(this).stop().animate({opacity:0.3});
 $("#wong").fadeIn()
}, function(){
 $(this).stop().animate({opacity:1},500);
 $("#wong").fadeOut()
})

$("#formContact form").submit(function(event){ 
  event.preventDefault();

  alert( name + 'Your message is well receveid .Thank you!')
    var names=$('#name').val();
    var email=$('#email').val();
    var mesage=$('#message').val();
    // if(names == ' '){
    //   alert('please enter your name!');
    // }
    // else{
    // alert(names + ','+ ''+ 'we receved!' );
    // }
    
  });

})
