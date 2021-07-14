$(document).ready(function() {
    $('#table').DataTable({
        responsive: !0,
        "language": {
            "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Russian.json"
        }
    });
    let mobile = $("body").width() < 550
    console.info("Width: ", $("body").width())
    console.info("Mobile: ",mobile)
    $(".burger-mobile, .my-close").on('click', function (){
        $(".fixed-menu").toggleClass('active')
    })
    if (mobile){
        let aside = $(".aside")
        $(".fixed-menu").append(aside)
    }
} );