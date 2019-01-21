//smooth scrolling
$(function () {

    $('a.smooth-scroll').click(function (event) {
        event.preventDefault();
        var secId = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(secId).offset().top - 64
        }, 1000);
    });

});


//Sllider
$('.carousel').carousel({
    interval: 4000
});

//AutoComplete
$(function () {
    var districts = [
        "Achham",
        "Arghakhanchi",
        "Baglung",
        "Baitadi",
        "Bajhang",
        "Bajura",
        "Banke",
        "Bara",
        "Bardiya",
        "Bhaktapur",
        "Bhojpur",
        "Chitwan",
        "Dadeldhura",
        "Dailekh",
        "Dang Deukhuri",
        "Darchula",
        "Dhading",
        "Dhankuta",
        "Dhanusa",
        "Dholkha",
        "Dolpa",
        "Doti",
        "Gorkha",
        "Gulmi",
        "Humla",
        "Ilam",
        "Jajarkot",
        "Jhapa",
        "Jumla",
        "Kailali",
        "Kalikot",
        "Kanchanpur",
        "Kapilvastu",
        "Kaski",
        "Kathmandu",
        "Kavrepalanchok",
        "Khotang",
        "Lalitpur",
        "Lamjung",
        "Mahottari",
        "Makwanpur",
        "Manang",
        "Morang",
        "Mugu",
        "Mustang",
        "Myagdi",
        "Nawalparasi",
        "Nuwakot",
        "Okhaldhunga",
        "Palpa",
        "Panchthar",
        "Parbat",
        "Parsa",
        "Pyuthan",
        "Ramechhap",
        "Rasuwa",
        "Rautahat",
        "Rolpa",
        "Rukum",
        "Rupandehi",
        "Salyan",
        "Sankhuwasabha",
        "Saptari",
        "Sarlahi",
        "Sindhuli",
        "Sindhupalchok",
        "Siraha",
        "Solukhumbu",
        "Sunsari",
        "Surkhet",
        "Syangja",
        "Tanahu",
        "Taplejung",
        "Terhathum",
        "Udayapur"
    ];

    $("#autocomplete").autocomplete({
        source: districts
    });
});

//WoW plugin for animation
$(function () {
    new WOW().init();
  });

$(function () {
    $('#first-slider').addClass('animated fadeInDown');
    $('#second-slider').addClass('animated fadeInLeft');
    $('#third-slider').addClass('animated fadeInRight');
});

//For gallery photo hover
$('.forhover').bighover({
    height : "350",
    position: "absolute",
    width : "100%",
    left: '0%',
    cursor: "pointer"
});