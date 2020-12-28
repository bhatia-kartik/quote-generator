$(document).ready(function() {
    // let trumpUrl = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';
    let randomUrl = 'https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?';

    // $('#trump').click(function() {
    //     $.get(trumpUrl, function(data) {
    //         $('#quote').empty();
    //         $('#quote').append(data.message);
    //     })
    // })

    $('#random').click(function() {
        $.ajax({
            url : randomUrl,
            contentType: 'application/json',
            dataType: 'jsonp',
            success: function(data) {
                $('#quote').empty();
                $('#quote').append('"' + data.quoteText + '"<br><p style="text-align: right;"> -' + data.quoteAuthor + '</p>');
            }
        })
    })
});