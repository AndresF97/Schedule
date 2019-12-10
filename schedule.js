//this will be used to the background
var hour_1=$("#hour-1");
var hour_2=$("#hour-2");
var hour_3=$("#hour-3");
var hour_4=$("#hour-4");
var hour_5=$("#hour-5");
var hour_6=$("#hour-6");
var hour_7=$("#hour-7");
var hour_8=$("#hour-8");
var hour_9=$("#hour-9");


// this will be the tools that i will use to save the information inside  textarea
var hour_1A=$("#hour-1").find("textarea");
var hour_2A=$("#hour-2").find("textarea");
var hour_3A=$("#hour-3").find("textarea");
var hour_4A=$("#hour-4").find("textarea");
var hour_5A=$("#hour-5").find("textarea");
var hour_6A=$("#hour-6").find("textarea");
var hour_7A=$("#hour-7").find("textarea");
var hour_8A=$("#hour-8").find("textarea");
var hour_9A=$("#hour-9").find("textarea");




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
var hour_9bt=$("#hour-9").find(button);
var clearbt =$("body").find("#clear");

//Listeners that will listen to each event and will save seperalty and return the 
hour_1bt.on("click",function(){
    var act = hour_1A.val();
    localStorage.setItem("Day_1",act);
   
    
})
hour_2bt.on("click",function(){
    var act = hour_2A.val();
    localStorage.setItem("Day_2",act)
});
hour_3bt.on("click",function(){
    var act = hour_3A.val();
    localStorage.setItem("Day_3",act);
});
hour_4bt.on("click",function(){
    var act = hour_4A.val();
    localStorage.setItem("Day_4",act);
});
hour_5bt.on("click",function(){
    var act= hour_5A.val()
    localStorage.setItem("Day_5",act);
});
hour_6bt.on("click",function(){
    var act = hour_6A.val();
    localStorage.setItem("Day_6",act);
});
hour_6bt.on("click",function(){
    var act = hour_7A.val();
    localStorage.setItem("Day_7",act);
});
hour_7bt.on("click",function(){
    var act = hour_7A.val();
    localStorage.setItem("Day_7",act)
});
hour_8bt.on("click",function(){
    var act = hour_8A.val();
    localStorage.setItem("Day_8",act)
})
hour_9bt.on("click",function(){
    var act = hour_9A.val();
    localStorage.setItem("Day_9",act)
})

clearbt.on("click",function(){
    $("textarea").val(" ")
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


    //this gets the items from local storage and returns everything to it proper parent element
     var item = localStorage.getItem("Day_1");
     hour_1A.text(item)
     var item_2=localStorage.getItem("Day_2");
     hour_2A.text(item_2)
     var item_3=localStorage.getItem("Day_3");
     hour_3A.text(item_3);
     var item_4= localStorage.getItem("Day_4");
     hour_4A.text(item_4);
    var item_5 = localStorage.getItem("Day_5");
     hour_5A.text(item_5);
     var item_6 = localStorage.getItem("Day_6");
     hour_6A.text(item_6);
     var item_7 = localStorage.getItem("Day_7");
     hour_7A.text(item_7)
     var item_8 = localStorage.getItem("Day_8");
     hour_8A.text(item_8);
     var item_9 = localStorage.getItem("Day_9");
     hour_9A.text(item_9);

});
//First Box schedule time set 
var start_time=moment("9:00am","h:mma")
var time_1 = moment("9:59am","h:mma");
var end_1 = moment("10:00am","h:mma");
var  current = moment().format("h:mm a")

if(end_1.isAfter(current)){
    hour_1A.attr("style","background-color: #e6e6e6");
}else if( current.isBefore(time_1)){
    hour_1A.attr("style","background-color:#ffffcc");
}else if(start_time.isBetween(end_1)){
    hour_1A.attr("style","background-color: #ccffcc");
}


//Second Box schedule time set 

var start_time_2=moment("10:00am","h:mma");
var time_2= moment("10:59am","h:mma");
var end_2= moment("11:00am","h:mma");

if(end_2.isAfter(start_time_2)){
    hour_2A.attr("style","background-color:#e6e6e6");
}else if(start_time_2.isBetween(time_2)){
    hour_2A.attr("style","background-color:#ffffcc");
}else if (start_time_2.isBetween(end_2)){
    hour_2A.attr("style","background-color:#ccffcc");
};

//Third Box Schedule box time set 

var start_time_3=moment("11:00am","h:mma");
var time_3= moment("11:59am","h:mma");
var end_3= moment("12:00pm","h:mma");

if(end_3.isAfter(start_time_3)){
    hour_3A.attr("style","background-color:#e6e6e6");
}else if(start_time_3.isBetween(time_3)){
    hour_3A.attr("style","background-color:#ffffcc");   
}else if(start_time_3.isBetween(end_3)) {
    hour_3A.attr("style","background-color:#ccffcc");
};

//Fourth BOx schedule Box time 


var start_time_4=moment("12:00pm","h:mma");
var time_4 = moment("12:59pm","h:mma");
var end_4=moment("1:00pm","h:mma");


if(end_4.isAfter(start_time_4)){
    hour_4A.attr("style","background-color:#e6e6e6");
}else if(start_time_4.isBetween(time_4)){
    hour_4A.attr("style","background-color:#ffffcc"); 
}else if (start_time_4.isBetween(end_4)){
    hour_4A.attr("style","background-color:#ccffcc");
}

//Fifth Box schedule


var start_time_5 =moment("1:00pm","h:mma");
var time_5 =moment("1:59pm","h:mma");
var end_5 =moment("2:00pm","h:mma");

if(end_5.isAfter(start_time_5)){
    hour_5A.attr("style","background-color:#e6e6e6");
}else if(start_time_5.isBetween(time_5)){
    hour_5A.attr("style","background-color:#ffffcc");
}else if(start_time_5.isBetween(end_5)) {
    hour_5A.attr("style","background-color:#ccffcc");
}

//Fifth Box schedule


var start_time_6 =moment("2:00pm","h:mma");
var time_6 =moment("2:59pm","h:mma");
var end_6 =moment("3:00pm","h:mma");

if(end_6.isAfter(start_time_6)){
    hour_6A.attr("style","background-color:#e6e6e6");
}else if(start_time_6.isBetween(time_6)){
    hour_5A.attr("style","background-color:#ffffcc");
}else if(start_time_6.isBetween(end_6)) {
    hour_5A.attr("style","background-color:#ccffcc");
}

//seventh box schedule 
var start_time_7 = moment("3:00pm","h:mma");
var time_7 = moment("3:59pm","h:mma");
var end_7 = moment("4:00pm","h:mma");

if(end_7.isAfter(start_time_7)){
    hour_7A.attr("style","background-color:#e6e6e6");
}else if(start_time_7.isBetween(time_7)){
    hour_5A.attr("style","background-color:#ffffcc");
}else if (start_time_7.isBetween(end_7)){
    hour_5A.attr("style","background-color:#ccffcc");
}


//eigth box schedule
var start_time_8 = moment("4:00pm","h:mma");
var time_8 = moment("4:59pm","h:mma");
var end_8 = moment("5:00pm","h:mma");

if(end_8.isAfter(start_time_8)){
    hour_8A.attr("style","background-color:#e6e6e6");
}else if(start_time_8.isBetween(time_8)){
    hour_8A.attr("style","background-color:#ffffcc");
}else if (start_time_8.isBetween(end_8)){
    hour_8A.attr("style","background-color:#ccffcc");
}

//ninth box schedule 
var start_time_9 = moment("5:00pm","h:mma");
var time_9 = moment("5:59pm","h:mma");
var end_9 = moment("6:00pm","h:mma");

if(end_9.isAfter(start_time_9)){
    hour_9A.attr("style","background-color:#e6e6e6");
}else if(start_time_9.isBetween(time_9)){
    hour_9A.attr("style","background-color:#ffffcc");
}else if (start_time_9.isBetween(end_9)){
    hour_9A.attr("style","background-color:#ccffcc");
}
