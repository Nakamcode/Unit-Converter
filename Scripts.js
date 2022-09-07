var pixel = document.getElementById("px-input");
var em = document.getElementById("em-input");
var output ;
var parentValue = document.getElementById("parentValue");
em.value = pixel.value / parentValue.value;


valueUpdate = () => {
    pxToEm();
    emToPx();
}

pxToEm = () => {
    output = pixel.value / parentValue.value ;
    em.value = parseFloat(output.toFixed(3));
}



emToPx = () => {
    output = em.value * parentValue.value;
    pixel.value = parseFloat(output.toFixed(0));
}


