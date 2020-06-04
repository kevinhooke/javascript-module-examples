var example = require('./export-constant-example');
var exampleNoExport = require('./no-export-constant-example');

test('exported constant has constant string value', () => {
    expect(example).toBe('This is a constant')
});

test('constant not exported is empty', () => {
    console.log(exampleNoExport);
    expect(exampleNoExport).toEqual({});
});