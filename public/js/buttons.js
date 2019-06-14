$(document).ready(function () {

    $(":input.expanding").click(function () {
        
        console.log("email=" + $("input[name=email]"));
        $.get("/api/getMember?email=" + $("input[name=email]").val(),function(text){
            if(text){
                $('body').html(text);
                $("#dataSection").css("visibility", "visible");
            } else {
                $('body').html('Error');
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


    $("#unregister").click(function () {

        $('#confirmationChildsName').val("");
        $('#myModal').modal('show')
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