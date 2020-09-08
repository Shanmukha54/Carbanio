$(document).ready(function() {
    $('.wraper li').css({
        "list-style-type": "none"
    });

    var remove = function() {
        this.parentNode.parentNode.parentNode.parentNode.remove();
    };

    var lis = document.querySelectorAll('.wraper li');

    var button = document.querySelectorAll('.wraper li a');
    //alert(button.length);
    //alert(lis.length);
    for (var i = 0, len = lis.length; i < len; i++) {
        button[i].addEventListener('click', remove, true);
    }
});