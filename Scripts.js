var pixel = document.getElementById("px-input");
var em = document.getElementById("em-input");
var parentValue = document.getElementById("parentValue");
var output;

// convert the default pixel value to em
em.value = pixel.value / parentValue.value;

pxToEm = () => {
  output = pixel.value / parentValue.value;
  em.value = parseFloat(output.toFixed(3));
};

emToPx = () => {
  output = em.value * parentValue.value;
  pixel.value = parseFloat(output.toFixed(0));
};

valueUpdate = () => {
  pxToEm();
  emToPx();
};
