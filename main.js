const addBtn = document.getElementById("add-btn");
const taskInp = document.querySelector('[type="text"]');
const todos = document.querySelector(".todos");
setTimeout(() => {
  document.querySelector(".loader").style.display = "none";
}, 2500);
const validate = function () {
  taskInp.value = "";
};
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
