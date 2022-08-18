var pixel = document.getElementById("px-input");
var em = document.getElementById("em-input");
var output ;
em.value = pixel.value / 16;

function pxToEm() {
    output = pixel.value / 16 ;
    em.value = parseFloat(output.toFixed(3));

}

function emToPx() {
    output = em.value * 16;
    pixel.value = parseFloat(output.toFixed(3));
}
