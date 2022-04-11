import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  const div = document.createElement("div");
  div.className = "list-row";
  console.log(div);

  const li = document.createElement("li");
  li.innerText = inputText;
  // console.log(li);

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  const returnButton = document.createElement("button");
  returnButton.innerText = "戻る";

  completeButton.addEventListener("click", () => {
    // alert("完了");
    // const completeTarget = completeButton.parentNode;
    // document.getElementById("incomplete-list").removeChild(completeTarget);
    deleteFromIncompleteList(completeButton.parentNode);
    const div = document.createElement("div");
    div.className = "list-row";
    console.log(div);
    div.appendChild(li);
    div.appendChild(returnButton);

    document.getElementById("complete-list").appendChild(div);
  });

  returnButton.addEventListener("click", () => {
    const returnTarget = returnButton.parentNode;
    document.getElementById("complete-list").removeChild(returnTarget);
    // deleteFromIncompleteList(returnTarget);
    const div = document.createElement("div");
    div.className = "list-row";
    div.appendChild(li);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);
    document.getElementById("incomplete-list").appendChild(div);
  });
  console.log(completeButton);

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // const deleteTarget = deleteButton.parentNode;
    // document.getElementById("incomplete-list").removeChild(deleteTarget);
    // alert("削除");
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  console.log(deleteButton);

  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  // alert(inputText);

  document.getElementById("incomplete-list").appendChild(div);
};

const deleteFromIncompleteList = (target) => {
  // const deleteTarget = deleteButton.parentNode;
  document.getElementById("incomplete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
