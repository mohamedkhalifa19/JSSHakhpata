const addBtn = document.getElementById("add-btn");
const taskInp = document.querySelector('[type="text"]');
const todos = document.querySelector(".todos");
const h1 = document.querySelector("h1");
const str = "Todo List";
let i = 0;
setTimeout(() => {
  document.querySelector(".loader").style.display = "none";
}, 1500);

const validate = function () {
  taskInp.value = "";
};
const myInterval = setInterval(() => {
  h1.textContent += str[i];
  i++;
  if (i === str.length) clearInterval(myInterval);
}, 1600);
const addItem = function () {
  taskInp.value.trim()
    ? todos.insertAdjacentHTML(
        "beforeend",
        `<li><span>${taskInp.value.trim()}</span><input type="checkbox" class="check" />
          </li>`
      )
    : null;
  validate();
  todos.querySelectorAll(".check").forEach((el) => {
    console.log(el);
    el.addEventListener("click", (e) => {
      e.target.closest("li").classList.add("animate");
      setTimeout(() => {
        e.target.closest("li").classList.add("remove");
      }, 2000);
      setTimeout(() => {
        e.target.closest("li").style.display = "none";
      }, 3000);
    });
  });
};
addBtn.addEventListener("click", addItem);

document.addEventListener("keydown", function (e) {
  if (e.key === " ") addItem();
});
