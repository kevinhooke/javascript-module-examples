let example = require('./export-constant-example');
let exampleNoExport = require('./no-export-constant-example');
let exampleSingleLine = require('./export-one-line-constant-example');

test('exported constant has constant string value', () => {
    expect(example).toBe('This is a constant')
});

test('exported oneline constant has constant string value', () => {
    expect(exampleSingleLine).toBe('constant single line')
});

test('constant not exported is empty', () => {
    console.log(exampleNoExport);
    expect(exampleNoExport).toEqual({});
});