const UI = function() {};

UI.prototype.select = function(element) {
  return document.querySelector(element);
};

UI.prototype.clear = function(...elements) {
  elements.forEach(element => (element.textContent = ""));
};

UI.prototype.displayError = function(message) {
  const errorElement = this.select("#error-message");
  errorElement.style.setProperty("display", "block");

  console.log(message);
  errorElement.textContent = message || "Invalid Operation";

  setTimeout(() => {
    errorElement.style.setProperty("display", "none");
    this.clear(errorElement);
  }, 2000);
};
