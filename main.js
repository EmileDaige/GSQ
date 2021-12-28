window.addEventListener("load",function () {
    const mediaQuery = window.matchMedia('(min-width: 550px)');
    if (mediaQuery.matches) {
    document.getElementById("BtnGarage").innerHTML = "Garages Spécialisés";
    }
})
window.addEventListener('resize', function() {
    const mediaQuery = window.matchMedia('(min-width: 550px)');
    if (mediaQuery.matches) {
        document.getElementById("BtnGarage").innerHTML = "Garages Spécialisés";
    } else {document.getElementById("BtnGarage").innerHTML = "Garages";}
})