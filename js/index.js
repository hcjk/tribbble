var num;

var data;

function success(apiResponse) {
    num = Math.round(Math.random() * (apiResponse.length - 1))
    data = apiResponse;
    $("#shot-img").attr("src", data[num].images.normal);
    $("#title").html('<a class="title" href=' + data[num].html_url + ' target="_blank">' + data[num].title + '</a>');
    $("#by").html('<a class="by" href=' + data[num].user.html_url + ' target="_blank">' + data[num].user.name + '</a>');
};

function error(jqxhr) {
    // Handle errors
};
$.jribbble.setToken('81840dbdbadc6f1e3e5abc584966342b9904b3bb4221a71eb27dad7980b055ae');

$.jribbble.shots().then(success, error);

$('#pass').click(function() {
    console.log(data);
    if(data.length > 0) {
        data.splice(num, 1);
        num = data.length > 1 ? Math.round(Math.random() * (data.length - 1)) : 0;
        $("#shot-img").attr("src", data[num].images.normal);
        $("#title").html('<a class="title" href=' + data[num].html_url + ' target="_blank">' + data[num].title + '</a>');
        $("#by").html('<a class="by" href=' + data[num].user.html_url + ' target="_blank">' + data[num].user.name + '</a>');
    }
    else {
        $('#maybe-hidden').hide();
        $('#hidden').show();
    }
});

$('#next').click(function() {
    if(data.length > 0) {
        data.splice(num, 1);
        data.splice(num, 1);
        num = Math.round(Math.random() * (data.length - 1));
        $("#shot-img").attr("src", data[num].images.normal);
        $("#title").html('<a class="title" href=' + data[num].html_url + ' target="_blank">' + data[num].title + '</a>');
        $("#by").html('<a class="by" href=' + data[num].user.html_url + ' target="_blank">' + data[num].user.name + '</a>');
    }
    else {
        $('#maybe-hidden').hide();
        $('#hidden').show();
    }
});
