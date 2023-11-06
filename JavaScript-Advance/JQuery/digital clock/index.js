$(document).ready(function () {
    var date = new Date();
    var hours = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    hours = ((hours + 11) % 12 + 1);//converting time to 12hr format
    function showtime() {
        $("#hours").text(hours);
        $("#min").text(min);
        $("#sec").text(sec);
    }
    setTimeout(showtime, 1000);
    showtime();

});

