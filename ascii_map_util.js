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
        if (isPositionOnPath(move(position, scan), path)) {
            newDirection = scan;
            break;
        }
    }

    return newDirection;

};

const move = (position, direction) => {

    let newRow = position.row;
    let newColumn = position.column;

    if (direction === 'L') {
        newColumn = position.column - 1;
    } else if (direction === 'R') {
        newColumn = position.column + 1;
    } else if (direction === 'U') {
        newRow = position.row - 1;
    } else if (direction === 'D') {
        newRow = position.row + 1;
    }

    return {
        row: newRow,
        column: newColumn
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