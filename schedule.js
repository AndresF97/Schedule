//this will be used to the background
var hour_1=$("#hour-1");
var hour_2=$("#hour-2");
var hour_3=$("#hour-3");
var hour_4=$("#hour-4");
var hour_5=$("#hour-5");
var hour_6=$("#hour-6");
var hour_7=$("#hour-7");
var hour_8=$("#hour-8");


// this will be the tools that i will use to save the information inside  textarea
var hour_1A=$("#hour-1").find("textarea");
var hour_2A=$("#hour-2").find("textarea");
var hour_3A=$("#hour-3").find("textarea");
var hour_4A=$("#hour-4").find("textarea");
var hour_5A=$("#hour-5").find("textarea");
var hour_6A=$("#hour-6").find("textarea");
var hour_7A=$("#hour-7").find("textarea");;
var hour_8A=$("#hour-8").find("textarea");



//This the tools you can use to find the button 
var button =$("button");
var hour_1bt=$("#hour-1").find(button);
var hour_2bt=$("#hour-2").find(button);
var hour_3bt=$("#hour-3").find(button);
var hour_4bt=$("#hour-4").find(button);
var hour_5bt=$("#hour-5").find(button);
var hour_6bt=$("#hour-6").find(button);
var hour_7bt=$("#hour-7").find(button);
var hour_8bt=$("#hour-8").find(button);
var clearbt =$("body").find("#clear");

//Listeners that will listen to each event and will save seperalty
hour_1bt.on("click",function(){
    var act = hour_1A.value;
    localStorage.setItem("Day_1",act)
})
hour_2bt.on("click",function(){
    var act = hour_2A.value;
    console.log(act);
    localStorage.setItem("Day_2",act)
});
hour_3bt.on("click",function(){
    var act = hour_3A.value;
    localStorage.setItem("Day_3",act);
});
hour_4bt.on("click",function(){
    var act = hour_4A.value;
    localStorage.setItem("Day_4",act);
});
hour_5bt.on("click",function(){
    var act= hour_5A.value
    localStorage.setItem("Day_5",act);
});
hour_6bt.on("click",function(){
    var act = hour_6A.value;
    localStorage.setItem("Day_6",act);
});
hour_6bt.on("click",function(){
    var act = hour_7A.value;
    localStorage.setItem("Day_7",act);
});
hour_7bt.on("click",function(){
    var act = hour_7A.value;
    localStorage.setItem("Day_7",act)
});
hour_8bt.on("click",function(){
    var act = hour_8bt.value;
    localStorage.setItem("Day_8",act)
})

clearbt.on("click",function(){
    $("textarea").empty();
    localStorage.clear()
})
//setting up the date
$(document).ready(function(){
    var num =new Date();
    day = $("#date");
    day.innerHTML =" "
    var d = new Date();
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    day.text(days[d.getDay()]+", "+ num.getDate())
});

//if($("#first-time") >cunrrent-time){
    //hour_1.attr("style","background-color:grey")
//}