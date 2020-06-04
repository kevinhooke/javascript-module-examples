let example = require('./export-function-example');
let exampleNoExport = require('./no-export-function-example');

test('exported function returns abc', () => {
    let result = example();
    expect(result).toBe('abc')
});

test('function not exported is empty', () => {
    expect(exampleNoExport).toEqual({});
});