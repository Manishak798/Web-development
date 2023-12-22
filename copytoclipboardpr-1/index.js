$(document).ready(function () {
    $('#btn').click(function () {
        $('#copy').fadeIn(100).fadeOut(100).fadeIn(100);
        setTimeout(function () {
            $('#copy').hide();
        }, 1000)
    })
    $('#copy').hide();
    //copy text from text area
    $('#btn').click(function () {
        var text = $('#ta').select();
        //navigator.clipboard.writeText(text.value);
        return text.value;
        //document.execCommand('copy');
    })
})
