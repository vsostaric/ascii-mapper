mapperUtil = require('../ascii_map_util');
testInput = require('./test_input');

const testFindStartingPoint = (testPath, expected) => {

    console.log('Testing findStartingPoint');
    const startingPoint = mapperUtil.findStartingPoint(testPath);
    if (startingPoint.row === expected.row && startingPoint.column === expected.column) {
        console.log('Test passed');
    } else {
        console.log('Test failed');
        console.log('Input path: ');
        console.log(testPath);
        console.log(`Result: ${startingPoint}`);
        console.log(`Expected: ${expected}`);

    }
};

const testFindDirection = (testPath, testPosition, testDirection, expected) => {
    console.log('Testing findDirection');
    const direction = mapperUtil.findDirection(testPosition, testDirection, testPath);
    if (direction === expected) {
        console.log('Test passed');
    } else {
        console.log('Test failed');
        console.log('Input path: ');
        console.log(testPath);
        console.log('Input position: ');
        console.log(testPosition);
        console.log(`Result: ${direction}`);
        console.log(`Expected: ${expected}`);

    }
};

const testMove = (testPosition, testDirection, expected) => {
    console.log('Testing move');
    const newPosition = mapperUtil.move(testPosition, testDirection);
    if (newPosition.row === expected.row && newPosition.column === expected.column) {
        console.log('Test passed');
    } else {
        console.log('Test failed');
        console.log('Input position: ');
        console.log(testPosition);
        console.log('Input direction: ');
        console.log(testDirection);
        console.log(`Result: ${newPosition}`);
        console.log(`Expected: ${expected}`);

    }
};

testFindStartingPoint(testInput.testPath1, expected = {
    row: 0,
    column: 0
});
testFindStartingPoint(testInput.testPath2, expected = {
    row: 0,
    column: 0
});
testFindStartingPoint(testInput.testPath3, expected = {
    row: 0,
    column: 2
});

testFindDirection(testInput.testPath1, testPosition = {
    row: 0,
    column: 0
}, '', expected = "R");

testFindDirection(testInput.testPath1, testPosition = {
    row: 0,
    column: 1
}, 'R', expected = "R");

testFindDirection(testInput.testPath1, testPosition = {
    row: 0,
    column: 4
}, 'R', expected = "R");

testFindDirection(testInput.testPath1, testPosition = {
    row: 2,
    column: 1
}, 'L', expected = "L");

testFindDirection(testInput.testPath1, testPosition = {
    row: 4,
    column: 8
}, 'D', expected = "L");

testMove(testPosition = {
    row: 2,
    column: 2
}, testDirection = 'R', expected = {
    row: 2,
    column: 3
});