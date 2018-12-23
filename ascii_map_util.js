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
    const directionsToScan = new Set();


    if (direction !== 'D' && position.row > 0) {
        directionsToScan.add('U');
    }

    if (direction !== 'U' && position.row < path.length-1) {
        directionsToScan.add('D');
    }

    if (direction !== 'R' && position.column > 0) {
        directionsToScan.add('L');
    }

    if (direction !== 'L' && position.column < path[0].length-1) {
        directionsToScan.add('R');
    }

    for (let scan of directionsToScan) {
        if (scan === 'U' && path[position.row - 1][position.column] === '|') {
            return 'U';
        } else if (scan === 'D' && path[position.row + 1][position.column] === '|') {
            return 'D';
        } else if (scan === 'L' && path[position.row][position.column - 1] === '-') {
            return 'L';
        } else if (scan === 'R' && path[position.row][position.column + 1] === '-') {
            return 'R';
        }
    }

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
            ...position,
            column: position.column - 1
        }
    } else if (direction === 'R') {
        return {
            ...position,
            column: position.column + 1
        }
    } else if (direction === 'U') {
        return {
            ...position,
            row: position.row - 1
        }
    } else if (direction === 'D') {
        return {
            ...position,
            row: position.row + 1
        }
    }

};

module.exports = {
    findStartingPoint: findStartingPoint,
    findDirection: findDirection,
    move: move
};