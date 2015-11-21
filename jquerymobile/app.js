

$(document).on("ready",init );
function init(){

$("#welcome").on("pageshow" , function(){

var currentPage=localStorage.getItem("page")
$("#start").attr("href", currentPage);


});
                 $("#step1").on("pageshow", function(){

localStorage.setItem("page","#step1");
});
                 
     $("#step2").on("pageshow", function(){

localStorage.setItem("page","#step2");
});
     $("#step3").on("pageshow", function(){

localStorage.setItem("page","#step3");
});
     $("#step4").on("pageshow", function(){

localStorage.setItem("page","#step4");
});
     $("#step5").on("pageshow", function(){

localStorage.setItem("page","#step5");
}); $("#step6").on("pageshow", function(){

localStorage.setItem("page","#step6");
});
                 

}