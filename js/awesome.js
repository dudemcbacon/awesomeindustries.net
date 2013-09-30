$(document).ready(function(){
 
 var randomnumber=Math.floor(Math.random()*9)
 $('.full').css({'background': "rgba(0, 0, 0, 0) url(./img/"+ randomnumber +".jpg) no-repeat fixed 50% 50% / cover padding-box border-box"});

});