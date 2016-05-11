function success(apiResponse) {
    console.log(apiResponse);
    var num = Math.round(Math.random() * (apiResponse.length - 1));
    console.log(num);
    $("#shot-img").attr("src", apiResponse[num].images.normal);
    $("#title").html('<a class="title" href=' + apiResponse[num].html_url + ' target="_blank">' + apiResponse[num].title + '</a>');
    $("#by").html('<a class="by" href=' + apiResponse[num].user.html_url + ' target="_blank">' + apiResponse[num].user.name + '</a>');
};

function error(jqxhr) {
    // Handle errors
};
$.jribbble.setToken('81840dbdbadc6f1e3e5abc584966342b9904b3bb4221a71eb27dad7980b055ae');

$.jribbble.shots().then(success, error);
