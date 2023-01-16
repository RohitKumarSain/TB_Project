for (let i = 1; i <= 7; i++) {
  let row = "";
  for (let j = 1; j <= 7; j++) {
    if (j >= 8 - i && j <= i) {
      row += "*";
    } else {
      row += " ";
    }
  }
  console.log(row);
}

for (let i = 6; i >= 1; i--) {
  let row = "";
  for (let j = 1; j <= 7; j++) {
    if (j >= 8 - i && j <= i) {
      row += "*";
    } else {
      row += " ";
    }
  }
  console.log(row);
}
