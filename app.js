const ui = new UI(); //

const buttons = ui.select("#buttons");
const result = ui.select("#result");
const inputs = ui.select("#inputs");

buttons.addEventListener("click", event => {
  if (event.target.tagName.toLowerCase() == "button") {
    const button = event.target;
    if (button.textContent == "C") {
      ui.clear(inputs, result);
      return;
    }
    if (button.textContent == "=") {
      try {
        let operation = inputs.textContent
          .replace("x", "*")
          .replace("%", "/100*");

        result.textContent = `${eval(operation)}`;
      } catch (error) {
        console.log(error);

        ui.displayError();
      }
      return;
    }
    if (result.textContent) {
      inputs.textContent = result.textContent + button.textContent;
      ui.clear(result);
      return;
    }

    inputs.textContent += button.textContent;
  }
});
