"use strict";

let textareaValue,
  btnSubmit = document.getElementById("btnSubmit");

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  let arr = [],
    arr2 = [],
    arr3 = [],
    textarea = document.getElementById("textarea").value;
  textareaValue = textarea.replace(/(?:\r\n|\r|\n)/g, "<br>");
  arr.push(textareaValue.split("<br>"));

  arr2 = arr.flat(Infinity);

  for (let i = 0; i < arr2.length; i++) {
    arr2[i] = arr2[i].trim();
    arr2[i] = arr2[i].split("_");
  }

  for (let i = 0; i < arr2.length; i++) {
    arr2[i][0] = arr2[i][0].toLowerCase();
    arr2[i][1] = arr2[i][1].toLowerCase();
    arr2[i][1] = arr2[i][1][0].toUpperCase() + arr2[i][1].slice(1);
    arr2[i] = arr2[i].join("");
  }

  for (let i = 0; i < arr2.length; i++) {
    arr2[i] = arr2[i].padEnd(20, " ");

    for (let j = 0; j < i + 1; j++) arr2[i] += "✅ ";
    arr3 = arr2[i];
    console.log(arr3);
  }
});
