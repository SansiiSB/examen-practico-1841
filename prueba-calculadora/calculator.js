export default (() => {

  const screen = document.querySelector(".screen");
  const buttons = document.querySelector(".buttons");
  const AC = document.querySelector(".clear");
  const DEL = document.querySelector(".delete");

  const signs = ['+', '-', '*', '/', "."]

  AC.addEventListener("click", () => {
    screen.value = "0";
  });

  DEL.addEventListener("click", () => {
    screen.value = screen.value === "Error" ? "0" : screen.value.slice(0, -1) || "0";
  });

  buttons.addEventListener("click", (event) => {

    if (!event.target.matches("button")) return;
    const value = event.target.textContent;
    let lastChar = screen.value.slice(-1);

    if (value === "AC") {
      screen.value = "0";
      return;
    }

    if (value === "DEL") {
      screen.value = screen.value === "Error" ? "0" : screen.value.slice(0, -1) || "0";
      return;
    }

    if (value === "=") {
      try {
        screen.value = eval(screen.value);
      } catch {
        screen.value = "Error";
      }
      return;
    }

    //Para evitar q se repitan operadores (dios mio q chungo chaval)
    if (signs.includes(value)) {
      screen.value = signs.includes(lastChar) ? screen.value.slice(0, -1) + value : screen.value + value;
    } else {
      screen.value = screen.value === "0" || screen.value === "Error" ? value : screen.value + value;
    }
  });
})();