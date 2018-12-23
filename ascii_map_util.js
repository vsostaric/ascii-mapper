const findStartingPoint = (path) => {
    const START = '@';

    for (let rowIndex in path) {
        for (let columnIndex in path[rowIndex]) {
            if (path[rowIndex][columnIndex] === START) {
                return {
                    row: parseInt(rowIndex),
                    column: parseInt(columnIndex)
                }
            }
        }
    }

};

const scanForNewDirection = (position, direction, path) => {
    const directionsToScan = [];


    if (direction !== 'D' && position.row > 0) {
        directionsToScan.push('U');
    }

    if (direction !== 'U' && position.row < path.length - 1) {
        directionsToScan.push('D');
    }

    if (direction !== 'R' && position.column > 0) {
        directionsToScan.push('L');
    }

    if (direction !== 'L' && position.column < path[0].length - 1) {
        directionsToScan.push('R');
    }

    let newDirection;

    const indexOfCurrentDirection = directionsToScan.indexOf(direction);
    if (indexOfCurrentDirection !== -1) {
        directionsToScan.slice(indexOfCurrentDirection);
        directionsToScan.unshift(direction);
    }

    for (let scan of directionsToScan) {
        if (scan === 'U' &&
            (path[position.row - 1][position.column] === '|' || /^[A-Z+]$/i.test(path[position.row - 1][position.column]))) {
            newDirection = 'U';
            break;
        } else if (scan === 'D' &&
            (path[position.row + 1][position.column] === '|' || /^[A-Z+]$/i.test(path[position.row + 1][position.column]))) {
            newDirection = 'D';
            break;
        } else if (scan === 'L' &&
            (path[position.row][position.column - 1] === '-' || /^[A-Z+]$/i.test(path[position.row][position.column - 1]))) {
            newDirection = 'L';
            break;
        } else if (scan === 'R' &&
            (path[position.row][position.column + 1] === '-' || /^[A-Z+]$/i.test(path[position.row][position.column + 1]))) {
            newDirection = 'R';
            break;
        }
    }

    return newDirection;

};

const findDirection = (position, direction, path) => {

    const directions = new Set(['-', '|']);

    if (!directions.has(path[position.row][position.column])) {
        direction = scanForNewDirection(position, direction, path);
    }

    return direction;
};

const move = (position, direction) => {

    if (direction === 'L') {
        return {
            row: position.row,
            column: position.column - 1
        }
    } else if (direction === 'R') {
        return {
            row: position.row,
            column: position.column + 1
        }
    } else if (direction === 'U') {
        return {
            row: position.row - 1,
            column: position.column
        }
    } else if (direction === 'D') {
        return {
            row: position.row + 1,
            column: position.column
        }
    }

};

module.exports = {
    findStartingPoint: findStartingPoint,
    findDirection: findDirection,
    move: move
};