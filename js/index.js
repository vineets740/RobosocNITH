var hamIcon = document.getElementsByClassName("ham-icon");
var icon = document.getElementsByClassName("icon");
console.log("connected");
var panel = document.getElementsByClassName("panel");
var count = 0; // 0 for display: none and 1 for display: block
var main = document.getElementsByClassName('main');
var logo = document.getElementsByClassName("logo");
hamIcon[0].addEventListener("click",function(){
    console.log("Entered");
    if(count == 0){
        panel[0].style.width = "100%";
        count = 1;

        logo[0].style.display= "none";
    }
    else{
        panel[0].style.width = "0";
        count = 0;
        logo[0].style.display = "block";
    }
});