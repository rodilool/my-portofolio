function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setRandomColor(obj: any) {
  obj.style.textShadow = `1px 1px 4px ${getRandomColor()}`;
}

function setColorToDefault(obj: any) {
  obj.style.textShadow = ``;
}

export { getRandomColor, setRandomColor, setColorToDefault };
