$(document).ready(function(){
    $("#submitBtn").click(function(){
        window.location.replace("/tracking");
        return false;
    });
    $("#menuBtn").click(function(){
        $("#menu").fadeIn();
        $("#closeBtn").fadeIn();
        $(this).fadeOut();
    });
    $("#closeBtn").click(function(){
        $("#menuBtn").fadeIn();
        $("#menu").fadeOut();
        $(this).fadeOut();
    });
});
    // $("#aList li").click(function(){
    //     var name = $(this).text().replace(/^\s+/g, '');
    //     $.ajax({
    //         method: "GET",
    //         url: "http://206.189.46.10/api/positions",
    //         data: "{}",
    //         contentType: "application/json; charset=utf-8",
    //         dataType: "json",
    //         beforeSend: function (xhr) {
    //             xhr.setRequestHeader ("Authorization", "Basic " + btoa("admin" + ":" + "redcross"));
    //       },
    //         success: function(data){
    //             alert(JSON.stringify(data[1]));
    //         }
    //     });
    //     var name = $(this).text().replace(/^\s+/g, '');
    //     alert("hello");
    //   });
