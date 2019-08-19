$(document).ready(function () {

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

    $(".Submit").click(function () {
        
        $('#confirmationChildsName').val("");
        $('#myModal').modal('show')
    });

    $("#register").click(function () {

        $('#confirmationChildsName').val("");
        $('form').attr('method',"post");
        
    });

    $("#update").click(function () {

        $('#confirmationChildsName').val("");
        $('form').attr('method',"put");
        
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