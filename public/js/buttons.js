$(document).ready(function () {

    $("form :input").attr("autocomplete", "off");
    //$("#dataSection").css("visibility", "hidden");

    $(":input.expanding").click(function () {
        
        console.log("searchEmail=" + $("input[name=searchEmail]"));
        $.get("/member?searchEmail=" + $("input[name=searchEmail]").val(),function(text){
            if(text){
                $('body').html(text);
                $("#dataSection").css("visibility", "visible");
            } else {
                $('.message').html('Error');
            }
        });
    });

    // $(".register").click(function (req,res) {
    //     $.post('api/registerMember',
    //         {
    //             'email': $(reg.body.email)
    //         }).done(function (data) {
    //             console.log("ResponseText:" + data);
    //         });
    // });

    //$("#submit").click(function () {
    $("#submit").click(function(event) { 
        event.preventDefault();
        $('#confirmationChildsName').val("");
        var f = $('#mainForm');
        f.parsley().validate();
        if (f.parsley().isValid()) {
            $.ajax({
                type: "POST",
                url: "/api/member",
                data: f.serialize(),
                success: function(){
                    console.log("posted");
                    $('#searchEmail').val("");
                    var mainForm = $('#mainForm')[0];
                    mainForm.reset(); //throws error is you have a "reset" button
                    //$("#dataSection").css("visibility", "hidden");
                    //document.getElementById("mainForm").reset()
                    $(window).scrollTop(0);
                    return false;
                    //location.reload();
                    
                    //location.reload();
                }
              });
            //return true; 
          };

  
    });

    $("#register").click(function () {

        $('#confirmationChildsName').val("");
        //$('form').attr('method',"post");
        
    });

    $("#update").click(function () {

        $('#confirmationChildsName').val("");
        //$('form').attr('method',"put");
        
    });

    $("#unregister").click(function () {

        $('#confirmationChildsName').val("");
        $('#myModal').modal('show')
    });

    $("input[name=searchEmail]").change(function () {

        $("input[name=email]").val($("input[name=searchEmail]").val());

    });

    $("#modalClose").click(function () {
        $.post('api/deleteMember',
            {
                'confirmationChildsName': 'fred'
            }).done(function (data) {
                console.log("ResponseText:" + data);
            });
    });



});