let input = document.querySelector("input");
let buttons = document.querySelectorAll(".buttons span");
let result = document.querySelector(".result>span");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("check")) {
      checkItem();
    }

    if (button.classList.contains("add")) {
      addItem();
    }

    if (button.classList.contains("delete")) {
      deleteItem();
    }

    if (button.classList.contains("show")) {
      showItem();
    }
  });
});

function showMessage() {
  result.innerHTML = "The Input Can't Be Empty";
}

function checkItem() {
  if (input.value !== "") {
    if (localStorage.getItem(input.value)) {
      result.innerHTML = `The Local Storage Item Called <span>${input.value}</span> Found`;
    } else {
      result.innerHTML = `The Local Storage Item Called <span>${input.value}</span> Not Found`;
    }
  } else {
    showMessage();
  }
}

function addItem() {
  if (input.value !== "") {
    localStorage.setItem(input.value, "test");

    result.innerHTML = `The Local Storage Item Called <span>${input.value}</span> Has Been Added`;

    input.value = "";
  } else {
    showMessage();
  }
}

function deleteItem() {
  if (input.value !== "") {
    if (localStorage.getItem(input.value)) {
      localStorage.removeItem(input.value);

      result.innerHTML = `The Local Storage Item Called <span>${input.value}</span> Has Been Deleted`;

      input.value = "";
    } else {
      result.innerHTML = `The Local Storage Item Called <span>${input.value}</span> Not Found`;
    }
  } else {
    showMessage();
  }
}

function showItem() {
  result.innerHTML = "";

  if (localStorage.length) {
    for (let [key, value] of Object.entries(localStorage)) {
      result.innerHTML += `<span class="key">${key}</span>`;
    }
  } else {
    result.innerHTML = "The Local Storage Is Empty";
  }
}
