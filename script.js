
var nav = document.getElementById('show-nav'),
header = document.getElementById('header');
nav.addEventListener('click',
function(e){
    header.className = header.className? '':'with_nav';
    e.preventDefault();
}
);

function display_message(n){
    var m;
    switch(n){
        case('2'): m="Thank You. \nYour message has been sent!";break;
        case('3'): m="This is the \'Starter\' Menu Page.";break;
        case('4'): m="This is the \'Meal\' Menu Page.";break;
        case('5'): m="This is the \'Dessert\' Menu Page.";break;
        case('6'): m="This is the \'Drinks\' Menu Page.";break;
        case('7'): m="There are currently no events.";break;
        case('8'): m="We're working on that page.";break;
        default: m = "This is the Menu Page.";
    }
    alert(m);

}
