testPath1 = [
    '@---A---+',
    '        |',
    'x-B-+   C',
    '    |   |',
    '    +---+'
];

testPath2 = [
    '@         ',
    '| C----+  ',
    'A |    |  ',
    '+---B--+  ',
    '  |      x',
    '  |      |',
    '  +---D--+'
];

testPath3 = [
    '  @---+   ',
    '      B   ',
    'K-----|--A',
    '|     |  |',
    '|  +--E  |',
    '|  |     |',
    '+--E--Ex C',
    '   |     |',
    '   +--F--+',
    '          '
];

module.exports = {
    testPath1: testPath1,
    testPath1Expected: {
        letters: ['A', 'C', 'B'],
        pathAsChars: '@---A---+|C|+---+|+-B-x'
    },
    testPath2: testPath2,
    testPath2Expected: {
        letters: ['A', 'B', 'C', 'D'],
        pathAsChars: '@|A+---B--+|+----C|-||+---D--+|x'
    },
    testPath3: testPath3,
    testPath3Expected: {
        letters: ['B', 'E', 'E', 'F', 'C', 'A', 'K', 'E'],
        pathAsChars: '@---+B||E--+|E|+--F--+|C|||A--|-----K|||+--E--Ex'
    }
};