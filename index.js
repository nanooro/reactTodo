console.log("new");
let tasks = ["task-1", "task-", "task-3"];
const list = document.getElementById("list");
const listLastLi = document.querySelector("ol li:last-child");
const listLastLiText = listLastLi.textContent;
// console.log("last li:" + listLastLiText);

const userinput = document.getElementsByName("userInput");

const allLi = Array.from(list.children);
const liIndexReference = allLi.indexOf(listLastLi, 0);
const liIndex = liIndexReference + 1;
// console.log("pos of:" + listLastLiText + " is:" + liIndex);
listLastLi.textContent = "found ya";
function removeHandle(pos) {
  const liToRemove = list.children[pos -1];
  list.removeChild(liToRemove);
}
function remove(pos) {
  pos = userInput.value;
  removeHandle(pos);
  userInput.value = "";
}
function append() {
  const olList = document.getElementById("list");
  let liCreate = document.createElement("li");
  let userInput = document.getElementById("userInput");
  liCreate.textContent = userInput.value;
  console.log("user enter " + userInput.value);
  olList.appendChild(liCreate);
}
// console.log(userInput);
