mapper = require('../ascii_map_path');
testInput = require('./test_input');

const testMapPath = (testPath, expected) => {
    console.log('Input path: ');
    console.log(testPath);
    let mappedPath = mapper.mapPath(testPath);
    const testPassed = mappedPath.letters === expected.letters
        && mappedPath.pathAsChars === expected.pathAsChars;
    if (testPassed) {
        console.log('Test passed');
    } else {
        console.log('Test failed');
        console.log(`Result: letters -> ${mappedPath.letters} ; characters: ${mappedPath.pathAsChars}`);
        console.log(`Expected: letters -> ${expected.letters} ; characters: ${expected.pathAsChars}`);
    }

};

testMapPath(testInput.testPath1, testInput.testPath1Expected);
testMapPath(testInput.testPath2, testInput.testPath2Expected);
testMapPath(testInput.testPath3, testInput.testPath3Expected);