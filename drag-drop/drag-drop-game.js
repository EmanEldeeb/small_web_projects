// const king = document.getElementById("king");
// const chessSquare = document.querySelectorAll(".square");
// let draggablePice;
// king.addEventListener("dragstart", (event) => {
//   draggablePice = event.target;
// });

// chessSquare.forEach((square) => {
//   square.addEventListener("dragover", (event) => {
//     event.preventDefault();
//   });
//   square.addEventListener("dragenter", (event) => {
//     event.target.classList.add("highlight");
//   });
//   square.addEventListener("dragleave", (event) => {
//     event.target.classList.remove("highlight");
//   });

//   square.addEventListener("drop", (event) => {
//     console.log(event.target);
//     if (!event.currentTarget.querySelector(`#${draggablePice.id}`)) {
//       event.target.append(draggablePice);
//     }
//     event.target.classList.remove("highlight");
//   });
// });

const chesspices = document.querySelectorAll("img");
const chessSquare = document.querySelectorAll(".square");
let draggablePice;

chesspices.forEach((pice) => {
  pice.addEventListener("dragstart", (event) => {
    console.log(event.target);
    draggablePice = event.target;
  });
});

chessSquare.forEach((square) => {
  square.addEventListener("dragover", (event) => {
    event.preventDefault();
  });
  square.addEventListener("dragenter", (event) => {
    event.target.classList.add("highlight");
  });
  square.addEventListener("dragleave", (event) => {
    event.target.classList.remove("highlight");
  });

  square.addEventListener("drop", (event) => {
    console.log(event.target);
    if (
      !event.currentTarget.querySelector(`#${draggablePice.id}`) &&
      !event.currentTarget.querySelector("img")
    ) {
      event.target.append(draggablePice);
    }
    event.target.classList.remove("highlight");
  });
});
