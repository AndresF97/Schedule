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
    var confirmed = confirm("Are sure that you would like to delete your schedule")
    if(confirmed === true){
    $("textarea").val(" ")
    localStorage.clear()
    }else{
        return alert("nothing has been deleted") 
    }
})
//setting up the date
$(document).ready(function(){
    var num =new Date();
    day = $("#date");
    day.innerHTML =" "
    var d = new Date();
    var newMonth = new Date()
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months = ["Jan","Feb","Mar","Apr","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    day.text("Todays date: "+months[newMonth.getMonth()]+" "+num.getDate()+" "+", "+days[d.getDay()])


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
var current = moment().format("h:mm a")

if(parseInt(current) < 9){
    hour_1A.attr("style","background-color: #e6e6e6");
}else if( parseInt(current) == 9){
     hour_1A.attr("style","background-color:#ffffcc");
 }else if(parseInt(current) > 9){
    hour_1A.attr("style","background-color: #ccffcc");
}


// //Second Box schedule time set 

if(parseInt(current) < 10){
    hour_2A.attr("style","background-color:#e6e6e6");
}else if(parseInt(current) === 10){
    hour_2A.attr("style","background-color:#ffffcc");
}else if (parseInt(current) > 10){
    hour_2A.attr("style","background-color:#ccffcc");
};

// //Third Box Schedule box time set 

if(parseInt(current) < 11){
    hour_3A.attr("style","background-color:#e6e6e6");
}else if(parseInt(current) === 11){
    hour_3A.attr("style","background-color:#ffffcc");   
}else if(parseInt(current) > 11) {
    hour_3A.attr("style","background-color:#ccffcc");
};

// //Fourth BOx schedule Box time 


if(parseInt(current) < 12){
    hour_4A.attr("style","background-color:#e6e6e6");
}else if(parseInt(current) === 12){
    hour_4A.attr("style","background-color:#ffffcc"); 
}else if (parseInt(current) > 12){
    hour_4A.attr("style","background-color:#ccffcc");
}

// //Fifth Box schedule


if(parseInt(current) > 1){
   hour_5A.attr("style","background-color:#e6e6e6");
 }else if(parseInt(current) === 1){
     hour_5A.attr("style","background-color:#ffffcc");
 }else if(parseInt(current) < 1) {
     hour_5A.attr("style","background-color:#ccffcc");
 }

// //Fifth Box schedule


if(parseInt(current) > 2){
    hour_6A.attr("style","background-color:#e6e6e6");
}else if(parseInt(current) === 2){
    hour_6A.attr("style","background-color:#ffffcc");
 }else if(2 < parseInt(current)){
     hour_6A.attr("style","background-color:#ccffcc");
 }

// //seventh box schedule 

if(parseInt(current) > 3) {
    hour_7A.attr("style","background-color:#e6e6e6");
}else if(parseInt(current) === 3){
    hour_7A.attr("style","background-color:#ffffcc");
}else if (parseInt(current) < 3){
    hour_7A.attr("style","background-color:#ccffcc");
}


// //eigth box schedule

if(parseInt(current) > 4){
     hour_8A.attr("style","background-color:#e6e6e6");
 }else if(parseInt(current) === 4){
     hour_8A.attr("style","background-color:#ffffcc");
 }else if (parseInt(current) < 4){
     hour_8A.attr("style","background-color:#ccffcc");
 }

//ninth box schedule

if(parseInt(current) > 5){
    hour_9A.attr("style","background-color:#e6e6e6");
}else if(parseInt(current)=== 5){
    hour_9A.attr("style","background-color:#ffffcc");
}else if (parseInt(current)< 5){
    hour_9A.attr("style","background-color:#ccffcc");
 }
