
$(document).ready(function(){
    foo();
});


function foo(){
$.ajax({
  dataType: "json",
  url: "http://localhost:3000/actors",
  success: function(result){
    console.log(result);
      for(var i=0; i<result.length;i++){
          var name=result[i].name;
          var star=result[i].starred;
          var id=result[i].id;
          console.log(result[i]);
          var x="<div class=\"demo-list-action mdl-list\">"+
                "<div class=\"mdl-list__item\">"+
                "<span class=\"mdl-list__item-primary-content\">"+
                "<i class=\"material-icons mdl-list__item-avatar\">person</i>"+
                    "<span>"+name+"</span></span>"
            if(star===true){
                x += "<a class=\"mdl-list__item-secondary-action\" onclick=\"toggel1("+id+",'"+name+"',"+star+")\"><i class=\"material-icons \">star</i></a>"
                $("#name").append(x);
            }
          else{
              x += "<a class=\"mdl-list__item-secondary-action\" onclick=\"toggel1("+id+",'"+name+"',"+star+")\"><i class=\"material-icons \">star_border</i></a>"
                $("#name").append(x);
          }
      }
    }
});
};

    function add1() {
        console.log("hey")
        var v=document.getElementById("sample1").value;
          var text=JSON.parse('{"name":"'+v+'","starred":false}');
          if(v==""){
              alert("Please enter actor name");
          }
          else{
        $.ajax({
        type: "POST",
        data:text,
        url:  "http://localhost:3000/actors",
        dataType: "json",
        success: function(){
            $("#name").empty();
            foo();
        },
        failure: function(errMsg) {
            alert(errMsg);
        }
  });
          }
    }

function toggel1(id,name1,star){
    if(star==true){
        var obj={name:name1,starred:false};
        console.log(star)
    }
    else{
        obj={name:name1,starred:true};
          console.log(star)
    }
    $.ajax({
        type: "PUT",
        data:obj,
        url:  "http://localhost:3000/actors/"+id,
        dataType: "json",
        success: function(){
             $("#name").empty();
            foo();
        },
        failure: function(errMsg) {
            alert(errMsg);
        }
  });
};