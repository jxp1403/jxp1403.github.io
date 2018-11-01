//Variable to track the number of steps
var totalsteps = 5;

//Variable to track which step should be displayed
var currentstep = 0;

//stroe the html of each slide
var currentslide;

$(function(){
$('.totalsteps').html(totalsteps);

//hide the total
$('.steps li, .end, .controls, #prev').hide();
$('.innerul li').show();
});
//click events
$('#begin').on('click', function(){
//do something here
$('.welcome').hide();
currentstep = 1;
currentslide=$('#step' + currentstep);
$(currentslide).fadeIn(1000);
$('.controls').fadeIn(1000);
$('h2').html('Step ' + currentstep);
});

//Click on next
$('#next').on('click', function(){
  if(currentstep != totalsteps){
$(currentslide).hide();
currentstep++;
currentslide=$('#step' + currentstep);
$(currentslide).fadeIn(1000);
$('h2').html('Step ' + currentstep);
}
if(currentstep == totalsteps){
  $('#next').hide();
}
if(currentstep != 1){
  $('#prev').show();
}
});

//Click on next
$('#prev').on('click', function(){
$(currentslide).hide();
currentstep--;
currentslide=$('#step' + currentstep);
$(currentslide).fadeIn(1000);
$('h2').html('Step ' + currentstep);

if(currentstep != totalsteps){
  $('#next').show();
}
if(currentstep == 1){
  $('#prev').hide();
}
});
$('#finish').on('click',function(){
  //Hide everything again
  $('.steps li, .controls, #prev').hide();
  $('.end').fadeIn(1000);
});
