var pixel = document.getElementById("px-input");
var em = document.getElementById("em-input");
var output ;
var parentValue = document.getElementById("parentValue");
em.value = pixel.value / parentValue.value;


valueUpdate = () => {
    
    pixel.value = parentValue.value;

}

pxToEm = () => {
    output = pixel.value / 16 ;
    em.value = parseFloat(output.toFixed(3));
}



emToPx = () => {
    output = em.value * 16;
    pixel.value = parseFloat(output.toFixed(0));
}