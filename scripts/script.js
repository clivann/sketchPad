

$(document).ready(function(){


$('#change').click(function(){

$('tr').remove();

var siz = prompt('Please enter size');

for (i=0;i<siz;i++){

$('#myTable').append("<tr></tr>");

}

for (i=0;i<siz;i++){

$('tr').append("<td><div></div></td>");

}

	
$('#myTable').css("height","400");

$('#myTable').css("width", "400");

$('div').css("height","100%");

$('div').css("width","100%");

$('#change').attr('value', "change size");


$('td').hover(function(){

/*function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

$(this).css("background-color", getRandomColor());

*/

$(this).css("background-color", "black");

});

$('#rainbow').click(function(){

$('td').hover(function(){

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

$(this).css("background-color", getRandomColor());

});
});

$('#reset').click(function(){

$('td').css("background-color", "skyblue");

});

});

});


