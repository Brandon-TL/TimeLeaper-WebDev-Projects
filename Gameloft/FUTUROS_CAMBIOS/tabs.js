function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    tablinks = document.getElementsByClassName("tablinks");

    for (i = 0; i < tabcontent.length; i++) {
        setTimeout (
            function() {
                tabcontent[i].style.display = "none";
            }
        , 500);
    }

    for (i = 0; i < tablinks.length; i++) {
        setTimeout (
            function() {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }
        , 1500);
    }

    setTimeout (
        function() {
            document.getElementById(cityName).style.display = "block";
            evt.currentTarget.className += " active";
        }
    , 1500);
}