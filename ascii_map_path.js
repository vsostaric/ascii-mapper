util = require('./ascii_map_util');

const mapPath = (path) => {

    const letters = [];
    let position = util.findStartingPoint(path);

    let direction = '';
    let cellValue = path[position.row][position.column];
    let pathAsChars = '';

    while (cellValue !== 'x') {

        pathAsChars += cellValue;
        if (/^[A-Z]$/i.test(cellValue)) {
            letters.push(cellValue);
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