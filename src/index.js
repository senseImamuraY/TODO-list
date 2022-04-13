import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};
//   const div = document.createElement("div");
//   div.className = "list-row";
//   console.log(div);

//   const li = document.createElement("li");
//   li.innerText = inputText;
//   // console.log(li);

//   const completeButton = document.createElement("button");
//   completeButton.innerText = "完了";
//   const backButton = document.createElement("button");
//   backButton.innerText = "戻す";

//   completeButton.addEventListener("click", () => {
//     // alert("完了");
//     // const completeTarget = completeButton.parentNode;
//     // document.getElementById("incomplete-list").removeChild(completeTarget);
//     deleteFromIncompleteList(completeButton.parentNode);
//     const addTarget = completeButton.parentNode;
//     const text = addTarget.firstElementChild.innerText;
//     addTarget.textContent = null;

//     const li = document.createElement("li");
//     li.innerText = text;

//     const backButton = document.createElement("button");
//     backButton.innerText = "戻す";
//     backButton.addEventListener("click", () => {
//       const deleteTarget = backButton.parentNode;
//       document.getElementById("complete-list").removeChild(deleteTarget);
//       const text = backButton.parentNode.firstElementChild.innerText;

//     });
//     addTarget.appendChild(li);
//     addTarget.appendChild(backButton);
//     // const div = document.createElement("div");
//     // div.className = "list-row";
//     // console.log(div);
//     // div.appendChild(li);
//     // div.appendChild(returnButton);

//     // document.getElementById("complete-list").appendChild(div);
//     document.getElementById("complete-list").appendChild(addTarget);
//   });

//   backButton.addEventListener("click", () => {
//     const returnTarget = backButton.parentNode;
//     document.getElementById("complete-list").removeChild(backTarget);
//     // deleteFromIncompleteList(returnTarget);
//     const div = document.createElement("div");
//     div.className = "list-row";
//     div.appendChild(li);
//     div.appendChild(completeButton);
//     div.appendChild(deleteButton);
//     document.getElementById("incomplete-list").appendChild(div);
//   });
//   console.log(completeButton);

//   const deleteButton = document.createElement("button");
//   deleteButton.innerText = "削除";
//   deleteButton.addEventListener("click", () => {
//     // const deleteTarget = deleteButton.parentNode;
//     // document.getElementById("incomplete-list").removeChild(deleteTarget);
//     // alert("削除");
//     deleteFromIncompleteList(deleteButton.parentNode);
//   });

//   console.log(deleteButton);

//   div.appendChild(li);
//   div.appendChild(completeButton);
//   div.appendChild(deleteButton);
//   // alert(inputText);

//   document.getElementById("incomplete-list").appendChild(div);
// };

// const deleteFromIncompleteList = (target) => {
//   // const deleteTarget = deleteButton.parentNode;
//   document.getElementById("incomplete-list").removeChild(target);
// };

const createIncompleteList = (text) => {
  const div = document.createElement("div");
  div.className = "list-row";
  console.log(div);

  const li = document.createElement("li");
  // li.innerText = inputText;
  li.innerText = text;
  // console.log(li);

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  const backButton = document.createElement("button");
  backButton.innerText = "戻す";

  completeButton.addEventListener("click", () => {
    // alert("完了");
    // const completeTarget = completeButton.parentNode;
    // document.getElementById("incomplete-list").removeChild(completeTarget);
    deleteFromIncompleteList(completeButton.parentNode);
    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;
    addTarget.textContent = null;

    const li = document.createElement("li");
    li.innerText = text;

    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    // const div = document.createElement("div");
    // div.className = "list-row";
    // console.log(div);
    // div.appendChild(li);
    // div.appendChild(returnButton);

    // document.getElementById("complete-list").appendChild(div);
    document.getElementById("complete-list").appendChild(addTarget);
  });

  backButton.addEventListener("click", () => {
    const backTarget = backButton.parentNode;
    document.getElementById("complete-list").removeChild(backTarget);
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

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
