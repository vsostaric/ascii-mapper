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

const isPositionValid = (position, path) => {
    return (position.row >= 0 && position.row < path.length) && (position.column >= 0 && position.column < path[0].length);
};

const isPositionOnPath = (position, path) => {
    return path[position.row][position.column] !== ' ';
};

const canKeepCurrentDirection = (position, direction, path) => {

    const newPosition = move(position, direction);
    return isPositionValid(newPosition, path) && isPositionOnPath(newPosition, path);

};

const findDirection = (position, direction, path) => {

    if (direction === '' || !canKeepCurrentDirection(position, direction, path)) {
        direction = scanForNewDirection(position, direction, path);
    }

    return direction;
};

module.exports = {
    findStartingPoint: findStartingPoint,
    findDirection: findDirection,
    move: move
};