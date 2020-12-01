function reduceDirections(directions) {
  for (let i = 0; i < directions.length; i++) {
    let match = -1;

    if (directions[i] == 'N') match = directions.indexOf('S');
    else if (directions[i] == 'S') match = directions.indexOf('N');
    else if (directions[i] == 'E') match = directions.indexOf('W');
    else if (directions[i] == 'W') match = directions.indexOf('E');

    if (match !== -1) {
      directions[i] = '';
      directions[match] = '';
    }
  }

  let reducedDirections = directions.filter(direction => {
    if (direction === 'N' || direction === 'E' || direction === 'S' || direction === 'W') return true;

    return false;
  });

  function getSortValue(letter) {
    if (letter === 'N') return 0;
    else if (letter === 'S') return 1;
    else if (letter === 'E') return 2;
    else if (letter === 'W') return 3;
  }

  reducedDirections.sort((a, b) => {
    if(getSortValue(a) > getSortValue(b)) return 1;
    if(getSortValue(a) < getSortValue(b)) return -1;
    return 0;
  });

  return reducedDirections;
}

console.log(reduceDirections(['N','F','E','S','LEFT','EAST','S','E','N','W','W','W','N','FORWARD']));