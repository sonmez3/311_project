

$(document).ready(function () {
    $('.fotorama').fotorama({
        loop: true,
        autoplay: true,

    });
});



$(document).ready(function () {

    races = [

        {
            "id": "required-id-2",
            "name": "testing",
            "date": "Sun Feb 23 2023 00:00:00 GMT-0800 (Pacific Standard Time)",
            "type": "event",
            "everyYear": false
        },
        {
            "id": "required-id-3",
            "name": "Quilafiyng",
            "date": "Mon Feb 24 2023 00:00:00 GMT-0800 (Pacific Standard Time)",
            "type": "event",
            "everyYear": false
        },
        {
            "id": "required-id-4",
            "name": "race day",
            "date": "Tue Feb 25 2023 00:00:00 GMT-0800 (Pacific Standard Time)",
            "type": "event",
            "everyYear": false
        },
        {
            "id": "required-id-5",
            "name": "testing",
            "date": "Fri Jun 02 2023 00:00:00 GMT-0800 (Pacific Standard Time)",
            "type": "event",
            "everyYear": false
        },
        {
            "id": "required-id-6",
            "name": "Quilafiyng",
            "date": "Sat Jun 03 2023 00:00:00 GMT-0800 (Pacific Standard Time)",
            "type": "event",
            "everyYear": false
        },
        {
            "id": "required-id-7",
            "name": "race day",
            "date": "Sun Jun 11 2023 00:00:00 GMT-0800 (Pacific Standard Time)",
            "type": "event",
            "everyYear": false
        }

    ];


    $('#calendar').evoCalendar({
        calendarEvents: races,
        theme: 'Royal Navy',
    });

});

function changeBackgroundColor() {
    var body = document.querySelector("body");
    body.style.backgroundColor = getRandomColor();
}

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

$(document).ready(function () {
    var flickrAPI = "https://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=?";
    var tags = "f1";
    var count = 12;

    $.getJSON(flickrAPI, {
        tags: tags,
        per_page: count
    })
    .done(function (data) {
        var html = "";
        $.each(data.items, function (i, item) {
            if (i < count) {
                html += '<img src="' + item.media.m + '">';
            }
        });
        $(".fotorama").html(html);

        $(".fotorama").fotorama({
            loop: true,
            autoplay: true
        });
    })
    .fail(function (error) {
        console.log("Error fetching Flickr photos: " + error);
    });
});
