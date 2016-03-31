$(document).ready(function(){
$(".button-projects").click(function(event)
{
//Var goTop =300
event.preventDefault();
var goTop =$(".projects").offset().top;
//console.log($(".projects").offset().top);
$("html,body").animate({scrollTop:goTop},1000, "easeInOutQuart");

});
$(".button-about").click(function(event)
{
//Var goTop =300
event.preventDefault();
var goTop =$(".about").offset().top;
//console.log($(".about").offset().top);
$("html,body").animate({scrollTop:goTop},1000, "easeInOutQuart");

});
$(".button-home").click(function(event)
{
//Var goTop = 300
event.preventDefault();
var goTop =$(".home").offset().top;
//console.log($(".home").offset().top);
$("html,body").animate({scrollTop:goTop},1000, "easeInOutQuart");

});

$(".button-contact").click(function(event)
{
//Var goTop = 300
event.preventDefault();
var goTop =$(".contact").offset().top;
//console.log($(".contact").offset().top);
$("html,body").animate({scrollTop:goTop},1000, "easeInOutQuart");

});

window.sr = ScrollReveal();
//sr.reveal('.splash');
sr.reveal('.text-center');

});
