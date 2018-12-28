mapperUtil = require('../ascii_map_util');
testInput = require('./test_input');

const testFindStartingPoint = (testPath, expected) => {

    console.log('Testing findStartingPoint');
    console.log('Input path: ');
    console.log(testPath);
    const startingPoint = mapperUtil.findStartingPoint(testPath);
    console.log(`Result: [${startingPoint.row}, ${startingPoint.column}]`);
    if (startingPoint.row === expected.row && startingPoint.column === expected.column) {
        console.log('Test passed');
    } else {
        console.log(`Expected: ${expected}`);
        console.log('Test failed');

    }
    console.log('\n');
};

const testFindDirection = (testPath, testPosition, testDirection, expected) => {
    console.log('Testing findDirection');
    console.log('Input path: ');
    console.log(testPath);
    console.log('Input position: ');
    console.log(testPosition);
    const direction = mapperUtil.findDirection(testPosition, testDirection, testPath);
    console.log(`Result: ${direction}`);
    if (direction === expected) {
        console.log('Test passed');
    } else {
        console.log(`Expected: ${expected}`);
        console.log('Test failed');
    }
    console.log('\n');
};

const testMove = (testPosition, testDirection, expected) => {
    console.log('Testing move');
    console.log('Input position: ');
    console.log(testPosition);
    console.log('Input direction: ');
    console.log(testDirection);
    const newPosition = mapperUtil.move(testPosition, testDirection);
    console.log(`Result: [${newPosition.row}, ${newPosition.column}]`);
    if (newPosition.row === expected.row && newPosition.column === expected.column) {
        console.log('Test passed');
    } else {
        console.log(`Expected: ${expected}`);
        console.log('Test failed');

    }
    console.log('\n');
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

testFindDirection(testInput.testPath2, testPosition = {
    row: 2,
    column: 0
}, 'D', expected = "D");

testFindDirection(testInput.testPath3, testPosition = {
    row: 6,
    column: 3
}, 'D', expected = "D");

testFindDirection(testInput.testPath3, testPosition = {
    row: 6,
    column: 3
}, 'R', expected = "R");


testMove(testPosition = {
    row: 2,
    column: 2
}, testDirection = 'R', expected = {
    row: 2,
    column: 3
});

testMove(testPosition = {
    row: 2,
    column: 0
}, testDirection = 'D', expected = {
    row: 3,
    column: 0
});