function createXmasTree(height) {
  // ¡Y no olvides también poner los turrones!
  let tree = "*";
  let underscore = "_";
  let trunk = "#";
  //_ Comienza en 0 y a medida que va subiendo aumenta en 1 osea el resultado seria height - 1
  totalHeight = height - 1;
  let value = height - 1;
  let nose = "";

  for (i = 1; i <= height; i++) {
    Score = underscore.repeat(value);
    nose += `\n${Score + tree + Score}`;
    value--;
    tree += "**";
  }
  Score = underscore.repeat(height - 1);
  const Finaltree = `${nose} \n ${Score + trunk + Score} \n ${
    Score + trunk + Score
  }`;
  return Finaltree.split(" ").join("");
}
