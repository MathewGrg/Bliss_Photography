
//  ---------------------------------------------------------------------
//  ---------------------------------------------------------------------
//  ------------------- vanilla javaScript ------------------------------
//  ---------------------------------------------------------------------
//  ---------------------------------------------------------------------



// to pre download the jumbotron images into an array
// ... to prevents a white flash in between keyframes during the first image load cycle
// ... thus helping with a smooth keyframe animation
var jumbotronImg = new Array();

jumbotronImg[0] = "../assets/jumbotron/bristol.jfif";
jumbotronImg[1] = "../assets/jumbotron/calgary.jfif";
jumbotronImg[2] = "../assets/jumbotron/cleveland.jfif";
jumbotronImg[3] = "../assets/jumbotron/london.jfif";
jumbotronImg[4] = "../assets/jumbotron/losAngeles.jfif";
jumbotronImg[5] = "../assets/jumbotron/sanfransisco.jfif";

var imgLoad = new Array();
for(var i=0; i<jumbotronImg.length; i++) 
{
    imgLoad[i] = new Image();
    imgLoad[i].src = jumbotronImg[i];
}




//  ---------------------------------------------------------------------
//  ---------------------------------------------------------------------
//  ------------------------ jQuery -------------------------------------
//  ---------------------------------------------------------------------
//  ---------------------------------------------------------------------



window.onload = function()
{

  // jQuery load console.log confirmation
  if (window.jQuery){
    console.log("jQuery has been loaded succesfully!");
  }
  else{
    console.log("jQuery failed to load.");
  }

}

// 'active' class nav menu link will appear with a darker background
$(function(){
  $(".active").css("background-color", "rgb(146, 199, 241, 0.8)");
  }
)







// on mouse hover, all 'nav-link' classes would have a darker background
$(".nav-link").mouseenter(
  function(){
    $(this).css("background-color", "rgb(146, 199, 241, 0.9)");
  }
)

// after mouse hover, all .nav-link would default to its initial background colour
$(".nav-link").mouseleave(
  function(){
    $(this).css("background-color", "rgb(211, 230, 243)");
  }
)

// 'active' class continue to have darker background after 'nav-link' mouse leave
$(".active").mouseleave(
  function(){
    $(this).css("background-color", "rgb(146, 199, 241, 0.8)");
  }
)

