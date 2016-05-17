var num, data;

function success(apiResponse) {
    num = Math.round(Math.random() * (apiResponse.length - 1));
    data = apiResponse;
    $("#shot-img").attr("src", data[num].images.normal);
    $("#title").html('<a class="title" href=' + data[num].html_url + ' target="_blank">' + data[num].title + '</a>');
    $("#by").html('<a class="by" href=' + data[num].user.html_url + ' target="_blank">' + data[num].user.name + '</a>');
};

function error(err) {
    // Handle errors
};
$.jribbble.setToken('81840dbdbadc6f1e3e5abc584966342b9904b3bb4221a71eb27dad7980b055ae');

$.jribbble.shots({
    'per_page': 36    
}).then(success, error);

$('.action').click(function() {
    var isPass = ($(this).attr("id") == 'pass');
    console.log(data);
    if(data.length > 0) {
        data.splice(num, 1);
        if(isPass) data.splice(num, 1);
        num = isPass ? data.length > 1 ? Math.round(Math.random() * (data.length - 1)) : 0 : Math.round(Math.random() * (data.length - 1));
        $("#shot-img").attr("src", data[num].images.normal);
        $("#title").html('<a class="title" href=' + data[num].html_url + ' target="_blank">' + data[num].title + '</a>');
        $("#by").html('<a class="by" href=' + data[num].user.html_url + ' target="_blank">' + data[num].user.name + '</a>');
    }
    else {
        $('#maybe-hidden').hide();
        $('#hidden').show();
    }
});
