util = require('./ascii_map_util');

const mapPath = (path) => {

    const letters = [];
    const usedLetters = new Set();

    let position = util.findStartingPoint(path);

    let direction = '';
    let cellValue = path[position.row][position.column];
    let pathAsChars = '';

    while (cellValue !== 'x') {

        pathAsChars += cellValue;

        if (/^[A-Z]$/i.test(cellValue) && !usedLetters.has(position.row.toString() + position.column.toString())) {
            letters.push(cellValue);
            usedLetters.add(position.row.toString() + position.column.toString())
        }

        direction = util.findDirection(position, direction, path);
        position = util.move(position, direction);

        cellValue = path[position.row][position.column];
    }

    pathAsChars += 'x';

    return {
        letters: letters,
        pathAsChars: pathAsChars
    }
};

module.exports.mapPath = mapPath;