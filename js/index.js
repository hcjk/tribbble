function success(apiResponse) {
    console.log(apiResponse);
    var num = Math.round(Math.random() * apiResponse.length);
    console.log(num);
    $("#shot-img").attr("src", apiResponse[num].images.normal);
    $("#title").html(apiResponse[num].title);
    $("#by").html(apiResponse[num].user.name);
};

function error(jqxhr) {
    // Handle errors
};
$.jribbble.setToken('81840dbdbadc6f1e3e5abc584966342b9904b3bb4221a71eb27dad7980b055ae');

$.jribbble.shots().then(success, error);
