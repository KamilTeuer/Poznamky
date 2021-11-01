/*

$(function () {


})(jQuery);


******************************************* !!! JQUERY !!!  *********************************************************


SCROLL TO SECTIONS:
 
    $(".jq--scroll-our-pizza").click(function () {
        $("html, body").animate({ scrollTop: $(".jq--our-pizza").offset().top }, 1000);
    });

    $(".jq--scroll-postup").click(function () {
        $("html, body").animate({ scrollTop: $(".jq--postup").offset().top }, 1100);
    });


SCROLL BUTTONS TO SECTIONS:

    $(".jq--scroll-button-first").click(function () {
        $("html, body").animate({ scrollTop: $(".jq--our-pizza").offset().top }, 1000);
    });

    $(".jq--scroll-button-second").click(function () {
        $("html, body").animate({ scrollTop: $(".jq--kontakt").offset().top }, 1800);
    });


MOBILE NAVIGATION:

    $(".jq--nav-icon").click(function () {
        $(".nav-background").slideToggle(1);
        $(".mobile-nav-back").fadeToggle(300);
        $("nav ul").fadeToggle();

    });


PODMÍNKY:

    if(5>3)
    {
            console.log("Je to pravda");
    }
    else {
            console.log("Není to pravda");
    }

******************************************************************************************************************************************

$("body").append("<h2>Já jsem přidaný element</h2>");

    $("ul").prepend("<li>Já jsem nový element</li>")
    $("ul").append("<li>Já jsem tady nový</li>");
    $("<li>Já jsem tady nový</li>").appendTo($("ul"));
    prepend = přidej na začátek
    append = přidej na konec
    Lepší je první verze zápisu.

    DOM = Document Object Model

    $("li").filter(function(index){
        return index % 3 === 1;
    }).css("background-color","rgba(250,100,0,0.5)");

    5 modulo 2 = 1
    6 modulo 2 = 0
    12 modulo 5 = 2
    14 modulo 5 = 4

    5 % 2 = 1
    6 % 2 = 0
    12 % 5 = 2
    14 % 5 = 4

    modulo = zbytek po celočíselném dělení
    Označuje se v porogramování znakem   %

    $("li").filter(function(index){
        return index === 0;
    }).css("background-color","rgba(250,100,0,0.5)");
    
    V programování se VŽDY čísluje od "nuly" !!!
    === : 3* "rovná se" znamená "ROVNO"

    $("#list").children("li").filter(":even").css("background-color","rgba(250,100,0,0.5")
    
    $("#list").find("li").filter(":even").css("background-color","rgba(250,100,0,0.5")
    Dva to obarvilo dvakrát, protože to vybarvilo jednou v "li" a potom přímo "li" DVA.

    $("li:first").next().css("background-color","rgba(150,150,40,0.7")
    $("li:last").prev().css("background-color","rgba(150,150,40,0.7")
    $("li:first").next().css("background-color","rgba(150,150,40,0.7")
    $("#list").siblings(":header").css("background-color","rgba(150,150,40,0.7")
    $("#list").siblings("h1,h2").css("background-color","rgba(150,150,40,0.7")
    Výběr h1,h2 a nebo :header = je to to samé.
    Next = další
    prev = předchozí
    siblings = sourozenci


    $("li:first").parents().css("background-color","rgba(150,150,40,0.7")
    $("li:first").parent().css("background-color","rgba(150,150,40,0.7")
    $("#list").children("li").css("background-color","rgba(150,150,40,0.7")
    Children = vezme jenom přímé potomky ID="list"

    $("#list").find("li").css("background-color","rgba(150,150,40,0.7")

    $("input:password").css("background-color","rgba(250,100,0,1");
    jQuery typ Email neumí !!!

    $("li:even").css("background-color","rgba(250,100,0,1)")
    even = lichý
    odd = sudý

    $("p:first").css("background-color","rgba(150,150,40,8"),
    $("li").css("background-color","rgba(25,100,0,1")
    $("li:first").css("background-color","rgba(250,100,0,1")
    $("li:last").css("background-color","rgba(250,100,0,1")

    $("p").css("background-color","rgba(150,150,40,8");
    $(".red-box").css("background-color","rgba(150,150,40,8")
    $("#list").css("background-color","rgba(150,150,40,8")

    $(".red-box").fadeTo(2000,0,function(){
        $(".blue-box").fadeTo(2000,0,function(){
            $(".green-box").fadeTo(2000,0);
        });
    });

    $(".red-box").fadeTo(2000,0,function(){
        alert("Toto se stane po animaci");
    });

    callback funkce - funkce, která se zavolá, když animace skončí!
    
    $(".red-box").fadeTo(1000,0.5).fadeOut(500).delay(500).fadeIn(500).fadeTo(1000,1);
    
    $(".red-box").fadeTo(1000,0.2);
    $(".blue-box").delay(1000).fadeTo(1000,0.4);
    $(".green-box").delay(2000).fadeTo(1000,0.6);


    $("p").animate({
        fontSize:"30px",
        color:"#fff"
        /* jQuery neumí animovat barvy - proto se nic nestane s barvou textu.
    },1000);


    $(".blue-box").animate({
        "margin-left":"250px",
        "opacity":"0",
        "width":"50px",
        "height":"50px",
        "margin-top":"25px"
    },1000);

    $(".red-box").animate({
        marginLeft:"250px",
        opacity:"0",
        width:"50px",
        height:"50px",
        marginTop:"25px"
        
        Nemusí se používat uvozovky, ale dvojslovné tagy se musí psát stylem, 
        kde druhé slovo má první písmeno velké.
    },1000);

    $(".green-box").animate({
        "margin-left":"+=600px"
    },1000);
    $(".green-box").animate({
        "margin-left":"-=600px"
    },1000);

    $(".blue-box").animate({
        "margin-left":"+=400px"
    },1000);

    $(".blue-box").animate({
            "margin-left":"-=400px"
        },1000);

    $(".red-box").animate({
        "margin-left":"+=300px",
    },1000);
    $(".red-box").animate({
        "margin-top":"300px"
    },1500);
    
    $(".red-box").fadeTo(2000, 0.2);
    .fadeTo(2000, 0.2) = po dobu 2 vteřin (2000 ms) se zprůhlední na 20% 

    $(".red-box").fadeToggle(2000).fadeToggle(2000);

    Toggle = přepínač
    fast = 200 ms
    slow = 600 ms

    $(".blue-box").fadeOut(2000);
    $(".green-box").fadeOut(2000);

    $("#logo").fadeOut(2000);


    */