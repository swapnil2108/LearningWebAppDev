"use strict";
/*jshint browser:true*/
/*globals _*/
/*globals $*/
var main = function () {
    var arr=[];
    var str1=[];
    var str2;
    var $new_comment;
    var largest=0;	
    var i=0;
    

// add numbers in an array
    var addCommentFromInputBox = function () {
            var $new_comment;
        if ($("#num").val() !== "") {
            $new_comment = $("<div>").text($("#num").val());
            arr.push(parseInt($("#num").val(),10));
            $(".comments").append($new_comment);
            $("#num").val("");
        }
    };
    
    //add string in an array
    var addComment = function () {
        var $new_comment;
        if ($("#str").val()!== "") {
            $new_comment = $("<div>").text($("#str").val());
            str1.push($("#str").val());
            $(".commentsstring").append($new_comment);
            $("#str").val("");
        }
    };
    
    
    var addComments = function () {
        var $new_comment;
        if ($("#stri").val()!== "") {
            $new_comment = $("<div>").text($("#stri").val());
            str2=document.getElementById("stri").value;
            $(".commentsstring").append($new_comment);
            $("#stri").val("");
        }
    };
    
    // average function
    var excersize1=function(arr1){
        var sum=0;
        var avg=0;
        if(arr1.length===0){
            window.window.alert("Please enter the array first");
        }
        else{
            for(var i=0;i<arr1.length;i++){
                sum=sum+arr1[i];
            }
            avg=sum/arr1.length;
        }
        return(avg);
    };
    
    // Largest Number Function
    var excersize2=function(arr1){
        var max;
    if(arr1.length === 0){
        window.alert("Please push values into array");
    }
    else{
    max=Math.max.apply(null,arr);
    }
        return(max);
    };
    
    // Atleast One even number function
    var excersize3= function(arr1){
        var bool="false";
    if(arr1.length === 0){
        window.alert("Please push values into array");
    }
    else{
    for(i=0;i<arr.length;i++){
        if(arr1[i]%2===0){
            bool="true";
            break;
        }
    }
    if(bool==="true"){
        return("true");
    }
    else{
    return("false");
}
}};

// Even number Function
    var excersize4= function(arr1){
        var bool="true";
    if(arr1.length === 0){
        window.alert("Please push values into array");
    }
    else{
    for(i=0;i<arr.length;i++){
        if(arr1[i]%2!==0){
            bool="false";
            break;
        }
    }
    if(bool==="false"){
        return("false");
    }
    else{
        return("true");
    }
        
    }
    };
    var exercise_under = function(arr) {
        largest = _.max(arr);
        return largest;
    };
    
    // find string once function
    var arrayContains=function(str11,str12){
    var bool;
    if(str11.length===""&&str12===""){
    window.alert("please enter strings");
    }
    else{
        for(var i=0;i<str11.length;i++){
    if(str11[i]===str12){
        bool="true";
        break;
    }
    }
        if(bool==="true"){
           return("true");
        }
        else{
            return("false");
}
    }};
    
    // find string twice function
    var arrayContains2=function(str11,str12){
    var count=0;
    if(str11.length===""&&str12===""){
    window.alert("please enter strings");
    }
    else{
        for(var i=0;i<str11.length;i++){
    if(str11[i]===str12){
        count=count+1;
    }
    }
        if(count===2){
           return("true");
        }
        else{
            return("false");
}
    }};
    $("#arr").on("click", function () {
        addCommentFromInputBox();
    });
    
    // Find string N number times function
    var arrayContainsn=function(str11,str12,number1){
     var count=0;
    if(str11.length===""&&str12===""){
    window.alert("please enter strings");
    }
    else{
        for(var i=0;i<str11.length;i++){
    if(str11[i]===str12){
        count=count+1;
    }
    }
        if(count==number1){
           return("true");
        }
        else{
            return("false");
    }
    }
    $("#arr").on("click", function () {
        addCommentFromInputBox();
    }); 
    };
     
    $("#avg").on("click", function () {
        var avg=excersize1(arr);
        $new_comment = $("<div>").text("the average is="+avg);
        $(".comments").append($new_comment);
    });
    $("#max").on("click", function () {
        var max=excersize2(arr);
        $new_comment = $("<div>").text("the maximum value is="+max);
        $(".comments").append($new_comment);
    });
     $("#even").on("click", function () {
        var even=excersize3(arr);
        $new_comment = $("<div>").text(even);
        $(".comments").append($new_comment);
    });
    $("#even1").on("click", function () {
        var even1=excersize4(arr);
        $new_comment = $("<div>").text(even1);
        $(".comments").append($new_comment);
    });
    $("#add").on("click", function () {
        addComment();
    });
    $("#adds").on("click", function () {
        addComments();
    });
    // max using underscore
    $("#maxunderscore").on("click", function() {
        if (arr.length === 0) {
            window.alert("Please push values in the array");
        } else {
            var largest = exercise_under(arr);

            $new_comment = $("<div>").text("Max in array using Underscore :" + largest);
            $(".comments").append($new_comment);
        }
    });
    
    // even using underscore
    $("#evenunderscore").on("click", function() {
        if (arr.length === 0) {
            window.alert("Please push values in the array");
        } else {
            var even = _.some(arr, function(number) {
                return number % 2 === 0;
            });
            $new_comment = $("<div>").text("Atleast One Even using Underscore :" + even);
            $(".comments").append($new_comment);
        }
    });
    $("#allevenunderscore").on("click", function() {
        if (arr.length === 0) {
            window.alert("Please push values into the array");
        } else {
            var alleven = _.every(arr, function(number) {
                return number % 2 === 0;
            });
            $new_comment = $("<div>").text("All even in Array Even using Underscore :" + alleven);
            $(".comments").append($new_comment);
        }
    });
    
    
    $("#contains").on("click", function () {
        var bool=arrayContains(str1,str2);
        $new_comment = $("<div>").text("Array contains:"+bool);
        $(".commentsstring").append($new_comment);
        
    });
     $("#two").on("click", function () {
        var bool=arrayContains2(str1,str2);
        $new_comment = $("<div>").text("Array contains 2:"+bool);
        $(".commentsstring").append($new_comment);
        
    });
    $("#n").on("click", function () {
        var number1=document.getElementById("number").value;
        var bool=arrayContainsn(str1,str2,number1);
        $new_comment = $("<div>").text("Array contains n:"+bool);
        $(".commentsstring").append($new_comment);
        
    });
    
    
};
$(document).ready(main);
