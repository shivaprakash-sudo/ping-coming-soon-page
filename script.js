window.onload = () => {
  const emailInput = document.querySelector("#email");
  const formEmail = document.querySelector("#form-email");
  const emptyInputWarning = document.querySelector("#empty-input-warning");
  const inputWarning = document.querySelector("#input-warning");
  const inputSuccess = document.querySelector("#input-success");

  formEmail.onsubmit = (e) => {
    e.preventDefault();
    validateEmail();
  };

  function validateEmail() {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const borderWarning = " border border-secondary-light-red";
    const borderSuccess = " border border-green-500";

    removeClassFrom(emailInput, "border-green-500");

    if (emailInput.value === "" || emailInput.value === null) {
      addClassTo(inputWarning, "hidden");
      addClassTo(inputSuccess, "hidden");
      removeClassFrom(emptyInputWarning, "hidden");
      emailInput.className += borderWarning;
    } else if (!emailRegex.test(emailInput.value)) {
      addClassTo(inputSuccess, "hidden");
      addClassTo(emptyInputWarning, "hidden");
      removeClassFrom(inputWarning, "hidden");
      emailInput.className += borderWarning;
    } else {
      addClassTo(inputWarning, "hidden");
      addClassTo(emptyInputWarning, "hidden");
      removeClassFrom(inputSuccess, "hidden");
      emailInput.className += borderSuccess;
    }
  }

  function addClassTo(element, className) {
    element.classList.add(className);
  }

  function removeClassFrom(element, className) {
    element.classList.remove(className);
  }
};
