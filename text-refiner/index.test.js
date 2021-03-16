const sut = require("./index"); // system_under_test
//
// test('sut transform "hello  world" to "hello world"', () => {
//     const actual = sut("hello  world");
//     expect(actual).toBe("hello world");
// });
//
// test('sut transforms "hello  world" to "hello world"', () => {
//     const actual = sut("hello    world");
//     expect(actual).toBe("hello world");
// });
//
// test('sut transforms "hello   world" to "hello world"', () => {
//     const actual = sut("hello   world");
//     expect(actual).toBe("hello world");
// });

/*
test('sut collectly works', () => {     // 에러는 잡아주지만 입력값이 무엇인지 알 수 없다. (리팩토링을 했지만 결과가 더 안 좋아졌다.)
    for (const source of ['hello  world', 'hello    world', 'hello   world']) {
        const actual = sut(source);
        expect(actual).toBe("hello world");
    }
})
*/

// parameterized test
test.each `
    source | expected
    ${"hello  world"}      | ${"hello world"}
    ${"hello   world"}     | ${"hello world"}
    ${"hello    world"}    | ${"hello world"}    
    `
    ('sut transforms "$source" to "$expected"', ({source, expected}) => {
        const actual = sut(source);
        expect(actual).toBe(expected);
    })


