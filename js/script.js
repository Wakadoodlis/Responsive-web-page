$(document).ready(function () {
 
 /* features */
 $('.js--wp-1').waypoint(function(directions) {
  $('.js--wp-1').addClass('animated fadeIn');
}, {
  offset: '50%'
})
/* iphone img */

$('.js--wp-2').waypoint(function(directions) {
  $('.js--wp-2').addClass('animated fadeInUp');
}, {
  offset: '60%'
})

/* cities */

$('.js--wp-3').waypoint(function(directions) {
  $('.js--wp-3').addClass('animated fadeInRight');
}, {
  offset: '60%'
})

/* plans */

$('.js--wp-4').waypoint(function(directions) {
  $('.js--wp-4').addClass('animated pulse')
}, {
  offset: '45%'
})

});