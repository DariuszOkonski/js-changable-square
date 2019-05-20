const square = {
  width: 1,
  height: 1,
  flag: true,
  red: 100,
  redFlag: true,
  green: 215,
  greenFlag: true,
  blue: 12,
  blueFlag: true,
}

const div = document.createElement('div');
div.style.width = square.width + 'vh';
div.style.height = square.height + 'vh';
div.style.backgroundColor = 'black';

const body = document.querySelector('body');
body.appendChild(div);

document.addEventListener('scroll', () => {

  if (square.width > 50)
    square.flag = false;
  else if (square.width < 0)
    square.flag = true;


  if (square.red > 254)
    square.redFlag = false;
  else if (square.red <= 0)
    square.redFlag = true;

  if (square.green > 254)
    square.greenFlag = false;
  else if (square.green <= 0)
    square.greenFlag = true;

  if (square.blue > 254)
    square.blueFlag = false;
  else if (square.blue <= 0)
    square.blueFlag = true;

  if (square.redFlag) {
    square.red++;
  } else {
    square.red--;
  }

  if (square.greenFlag) {
    square.green++;
  } else {
    square.green--;
  }

  if (square.blueFlag) {
    square.blue++;
  } else {
    square.blue--;
  }

  if (square.flag) {
    square.width++;
    square.height++;
  } else {
    square.width--;
    square.height--;
  }

  div.style.width = square.width + 'vh';
  div.style.height = square.height + 'vh';
  div.style.backgroundColor = `rgb(${square.red},${square.green},${square.blue})`;
})