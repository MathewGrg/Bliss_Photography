
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





// var to store the first-h1 class
var firstH1 = document.querySelector(".first-h1");

// inserting a new <p> whcih shows the current edition of the magazine
firstH1.insertAdjacentHTML("afterend", "<p class='edition'># April 2020 Edition</p>");

// setting the style for 'edition' class
document.querySelector(".edition").setAttribute("style", 
"font-size: 2em; background-color: rgb(40, 145, 220);" + 
"border-radius: 10px; width: fit-content; padding: 0px 10px 0 10px;" + 
"margin-bottom: 1em; color: rgb(2555, 255, 255)");






// all h2 tags in contents.html styled
var contentH2 = document.querySelectorAll(".article h2");
for (i=0; i<contentH2.length; i++)
{
  contentH2[i].setAttribute("style", "font-size: 2.75em; margin-top: 1.5em;");
}

// dynamic <p> in contents.html, which diplays on click
var para = document.querySelectorAll(".article .para");
for (i=3; i<para.length; i++)
{
  para[i].setAttribute("style", "border: 1px solid rgb(0, 0, 0); border-top-style: none; padding: 0% 2% 0% 1%");
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



//  --------------------------------------------------------------
//  -------------------------  navbar ----------------------------
//  --------------------------------------------------------------

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




//  --------------------------------------------------------------
//  ------------------  contents.html ----------------------------
//  --------------------------------------------------------------



// style for the tip toggle controller
var articleToggleText = {
  background: "rgb(211, 230, 243)",
  width: "fit-content",
  borderRadius: "10px",
  cursor: "pointer"
}

$(function(){
  $(".article .toggle-text").css(articleToggleText);
  }
)

// expand /collapse the tips using a 'tips-siplay' class
$(".article .toggle-text").click(
  function() {
    $(".article .tips").toggleClass("tips-display");
  }
)




//  --------------------------------------------------------------
//  -----------------  subscribe.html ----------------------------
//  --------------------------------------------------------------

// dynamic submit button - text changes on click
$(".submitBtn").click(function() {
  $(this).text("Form Submitted")
  }
)

$(".cleartBtn").click(function() {
  $(this).text("Form Cleared")
  }
)

