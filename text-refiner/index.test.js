const sut = require("./index"); // system_under_test
const faker = require("faker");
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
test.each`
    source | expected
    ${"hello  world"}      | ${"hello world"}
    ${"hello   world"}     | ${"hello world"}
    ${"hello    world"}    | ${"hello world"}    
    ${"hello     world"}    | ${"hello world"}
    ${"hello      world"}    | ${"hello world"}
    ${"hello       world"}    | ${"hello world"}
    `
    ('sut transforms "$source" to "$expected"', ({ source, expected }) => {
        const actual = sut(source);
        expect(actual).toBe(expected);
    });

test.each
    `
        source | expected
        ${"hello\t world"} | ${"hello world"}
        ${"hello \tworld"} | ${"hello world"}
    `('sut transforms "$source" that contains tab character to "$expected"',
        ({ source, expected }) => {
            const actual = sut(source);
            expect(actual).toBe(expected);
        }
    );

test.each`
    source             | bannedWords              | expected
    ${"hello mockist"} | ${["mockist", "purist"]} | ${"hello *******"}
    ${"hello purist"}  | ${["mockist", "purist"]} | ${"hello ******"}
  `(
    'sut transforms "$source" to "$expected"',
    ({ source, bannedWords, expected }) => {
        const options = { bannedWords };
        const actual = sut(source, options);
        expect(actual).toBe(expected);
    }
);

describe('given banned word', () => {
    const banned = faker.lorem.word();
    const source = "hello" + banned;
    const expected = "hello" + "*".repeat(banned.length);

    test(`${banned} when invoke sut then it returns ${expected}`, () => {
        const actual = sut(source, {bannedWords : [banned]});
        expect(actual).toBe(expected);
    });
})


