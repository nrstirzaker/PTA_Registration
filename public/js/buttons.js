$(document).ready(function () {

    $(":input.expanding").click(function () {
        $("#dataSection").css("visibility", "visible");
    });

    $("#unregister").click(function () {
        $('#confirmationChildsName').val("");
        $('#myModal').modal('show')
    });

});