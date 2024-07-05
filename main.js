// const createNotesBtn = document.querySelector("#create_btn");
// const containerBox = document.querySelector(".container");
// // const inputTextBox = document.querySelector("p");
// let noteArr = [];
// let deleteArr = [];
// let countClick = 0;
// let p = document.createElement("p");

// createNotesBtn.addEventListener("click", () => {
//   countClick++;
//   p.classList.add("input_text");
//   p.setAttribute("ID", countClick);
//   p.contentEditable = "true";
//   containerBox.appendChild(p);
//   noteArr.push(p);
//   // console.log(noteArr);

//   let img = document.createElement("IMG");
//   img.classList.add(`deleteNoteBtn${countClick}`);
//   img.setAttribute("ID", `${countClick}`);

//   img.src = "images/delete.png";
//   p.appendChild(img);
//   deleteArr.push(img);
//   // console.log(deleteArr);
//   storeData();
//   // let p = document.createElement("p");
//   // p.classList.add("input_text");
//   // containerBox.appendChild(p);

//   // console.log(p);

//   // countClick++;
//   // console.log(typeof countClick);

//   // noteArr.push(countClick);
//   // for (let i = 0; i <= countClick; i++) {

//   // }
//   // inputTextBox.style.display = "block";
//   // noteArr.push(inputTextBox);
//   // console.log(noteArr);
//   // let p = document.createElement("p");
//   // p.classList.add("input_text");
//   // containerBox.appendChild(p);
//   const deleteBtn = document.querySelector(`.deleteNoteBtn${countClick}`);
//   deleteBtn.addEventListener("click", () => {
//     //
//     deleteBtn.parentElement.remove();
//     storeData();
//   });
// });

// // let noteString = JSON.stringify(noteArr);
// // let delString = JSON.stringify(deleteArr);

// function storeData() {
//   localStorage.setItem("noteList", p.innerHTML);
//   // localStorage.setItem("deleteBtn", delString);
// }

// function restoreData() {
//   p.innerHTML = localStorage.getItem("noteList");
//   // let rdel = localStorage.getItem("deleteBtn");
//   // console.log(rnote);
//   // console.log(rdel);
//   // noteArr = JSON.parse(rnote);
//   // deleteArr = JSON.parse(rdel);
// }

// restoreData();

const createNoteBtn = document.querySelector("#create_btn");
const container = document.querySelector(".note_container");
let notes = document.querySelectorAll(".input_text");

createNoteBtn.addEventListener("click", () => {
  let p = document.createElement("p");
  let img = document.createElement("IMG");

  p.className = "input_text";
  p.contentEditable = "true";
  container.appendChild(p);

  img.src = "images/delete.png";

  p.appendChild(img);
  dataStorage();
});

container.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    // console.log("hello");
    dataStorage();
  } else if (e.target.tagName === "P") {
    notes = document.querySelectorAll(".input_text");
    notes.forEach((element) => {
      element.onKeyup = function () {
        dataStorage();
      };
    });
  }

  // console.log(e.target.tagName);
});

function dataStorage() {
  localStorage.setItem("data", container.innerHTML);
}

function restoreData() {
  container.innerHTML = localStorage.getItem("data");
}
// console.log(data);
restoreData();
