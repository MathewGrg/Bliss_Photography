



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
for(var i=0; i<jumbotronImg.length; i++) {
        imgLoad[i] = new Image();
        imgLoad[i].src = jumbotronImg[i];
    }

